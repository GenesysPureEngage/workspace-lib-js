module.exports = {
    adapt: function () {
        var url = require('url');
        var httpc = require('http');
        var https = require('https');

        var runtime = {};
        global.cometdRuntime = runtime;

        const CookieJar = require('cookiejar').CookieJar;
        const CookieAccess = require('cookiejar').CookieAccessInfo;
        const parse = require('url').parse;

        runtime.setTimeout = setTimeout;
        runtime.clearTimeout = clearTimeout;

        runtime.console = console;
        runtime.console.debug = runtime.console.log;

        // Inject empty window object to support CometD 4.0.5 and 5.0.1
        if (typeof global.window === 'undefined') {
            global.window = runtime;
        }

        // Fields shared by all XMLHttpRequest instances.
        var _agentc = new httpc.Agent({
            keepAlive: true
        });
        var _agents = new https.Agent({
            keepAlive: true
        });
        var _cookieJar = new CookieJar();

        function _secure(uri) {
            return /^https/i.test(uri.protocol);
        }

        // Bare minimum XMLHttpRequest implementation that works with CometD.
        runtime.XMLHttpRequest = function () {
            var _config;
            var _request;

            this.status = 0;
            this.statusText = '';
            this.readyState = runtime.XMLHttpRequest.UNSENT;
            this.responseText = '';

            this.open = function (method, uri) {
                _config = url.parse(uri);
                _config.method = method;
                _config.agent = _secure(_config) ? _agents : _agentc;
                _config.headers = {};
                this.readyState = runtime.XMLHttpRequest.OPENED;
            };

            this.setRequestHeader = function (name, value) {
                _config.headers[name] = value;
            };

            this.send = function (data) {
                var cookieJar = this.context && this.context.cookieJar;
                if (!cookieJar) {
                    cookieJar = _cookieJar;
                }

                const access = CookieAccess(
                    _config.hostname,
                    _config.pathname,
                    'https:' === _config.protocol
                );
                const cookies = cookieJar.getCookies(access).toValueString();

                if (cookies) {
                    _config.headers['Cookie'] = cookies;
                }

                // Set Content-Length header
                _config.headers['Content-Length'] =  data ? Buffer.byteLength(data) : 0;

                var self = this;
                var http = _secure(_config) ? https : httpc;
                _request = http.request(_config, function (response) {
                    var success = false;
                    self.status = response.statusCode;
                    self.statusText = response.statusMessage;
                    self.readyState = runtime.XMLHttpRequest.HEADERS_RECEIVED;
                    const cookies = response.headers['set-cookie'];

                    if (cookies) {
                        cookies.forEach((cookie, cookieIndex) => {
                            // Patch "Secure" cookie flag
                            if (cookie.startsWith('BAYEUX_BROWSER')) {
                                if (cookie.toLowerCase().indexOf('secure') !== -1) {
                                    let cookieFlags = cookie.split(';');
                                    cookieFlags.forEach((flag, flagIndex) => {
                                        if (flag.toLowerCase().indexOf('secure') !== -1) {
                                            cookieFlags[flagIndex] = '';
                                        }
                                    });
                                    cookie = cookieFlags.filter(Boolean).join(';');
                                    cookies[cookieIndex] = cookie;
                                }
                            }
                        });

                        cookieJar.setCookies(cookies);
                    }

                    response.on('data', function (chunk) {
                        self.readyState = runtime.XMLHttpRequest.LOADING;
                        self.responseText += chunk;
                    });
                    response.on('end', function () {
                        success = true;
                        self.readyState = runtime.XMLHttpRequest.DONE;
                        if (self.onload) {
                            self.onload();
                        }
                    });
                    response.on('close', function () {
                        if (!success) {
                            self.readyState = runtime.XMLHttpRequest.DONE;
                            if (self.onerror) {
                                self.onerror();
                            }
                        }
                    });
                });
                ['abort', 'aborted', 'error'].forEach(function (event) {
                    _request.on(event, function (x) {
                        self.readyState = runtime.XMLHttpRequest.DONE;
                        if (x) {
                            var error = x.message;
                            if (error) {
                                self.statusText = error;
                            }
                        }
                        if (self.onerror) {
                            self.onerror(x);
                        }
                    });
                });
                if (data) {
                    _request.write(data);
                }
                _request.end();
            };

            this.abort = function () {
                if (_request) {
                    _request.abort();
                }
            };

            this._config = function () {
                return _config;
            };
        };
        runtime.XMLHttpRequest.UNSENT = 0;
        runtime.XMLHttpRequest.OPENED = 1;
        runtime.XMLHttpRequest.HEADERS_RECEIVED = 2;
        runtime.XMLHttpRequest.LOADING = 3;
        runtime.XMLHttpRequest.DONE = 4;
    }
};