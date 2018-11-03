/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.26.2381
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CurrentSessionDataPendingloginasync', 'model/CurrentSessionDataUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurrentSessionDataPendingloginasync'), require('./CurrentSessionDataUser'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSessionData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CurrentSessionDataPendingloginasync, root.WorkspaceApi.CurrentSessionDataUser);
  }
}(this, function(ApiClient, CurrentSessionDataPendingloginasync, CurrentSessionDataUser) {
  'use strict';




  /**
   * The CurrentSessionData model module.
   * @module model/CurrentSessionData
   * @version 9.0.000.26.2381
   */

  /**
   * Constructs a new <code>CurrentSessionData</code>.
   * @alias module:model/CurrentSessionData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CurrentSessionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSessionData} obj Optional instance to populate.
   * @return {module:model/CurrentSessionData} The populated <code>CurrentSessionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pending-login-async')) {
        obj['pending-login-async'] = CurrentSessionDataPendingloginasync.constructFromObject(data['pending-login-async']);
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = CurrentSessionDataUser.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CurrentSessionDataPendingloginasync} pending-login-async
   */
  exports.prototype['pending-login-async'] = undefined;
  /**
   * @member {module:model/CurrentSessionDataUser} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


