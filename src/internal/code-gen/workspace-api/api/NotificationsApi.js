/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.73.3700
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.NotificationsApi = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 9.0.000.73.3700
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * CometD endpoint
     * Subscribe to the CometD notification API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD endpoint
     * Subscribe to the CometD notification API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notifications = function() {
      return this.notificationsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD connect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_connect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsConnectWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/connect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD connect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_connect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notificationsConnect = function() {
      return this.notificationsConnectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD disconnect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_disconnect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsDisconnectWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/disconnect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD disconnect
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_disconnect) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notificationsDisconnect = function() {
      return this.notificationsDisconnectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CometD handshake
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_handshake) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsHandshakeWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/handshake', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * CometD handshake
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_handshake) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notificationsHandshake = function() {
      return this.notificationsHandshakeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_subscribe) for details. For a list of all available channels, see the [CometD section](/reference/workspace/index.html) in the Workspace API overview.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsSubscribeWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/subscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_subscribe) for details. For a list of all available channels, see the [CometD section](/reference/workspace/index.html) in the Workspace API overview.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notificationsSubscribe = function() {
      return this.notificationsSubscribeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unsubscribes from CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_unsubscribe) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.notificationsUnsubscribeWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/unsubscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribes from CometD channel notification
     * See the [CometD documentation](https://docs.cometd.org/current/reference/#_bayeux_meta_unsubscribe) for details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.notificationsUnsubscribe = function() {
      return this.notificationsUnsubscribeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
