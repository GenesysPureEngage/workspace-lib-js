/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.40.2832
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
    define(['ApiClient', 'model/MediamediatypelogoutData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypelogoutData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.LogoutMediaData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypelogoutData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamediatypelogoutData, OperationId) {
  'use strict';




  /**
   * The LogoutMediaData model module.
   * @module model/LogoutMediaData
   * @version 9.0.000.40.2832
   */

  /**
   * Constructs a new <code>LogoutMediaData</code>.
   * @alias module:model/LogoutMediaData
   * @class
   * @param data {module:model/MediamediatypelogoutData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>LogoutMediaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogoutMediaData} obj Optional instance to populate.
   * @return {module:model/LogoutMediaData} The populated <code>LogoutMediaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypelogoutData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamediatypelogoutData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


