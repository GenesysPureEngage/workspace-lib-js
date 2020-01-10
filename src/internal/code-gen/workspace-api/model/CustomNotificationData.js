/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.68.3436
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
    define(['ApiClient', 'model/MediamediatypeinteractionsidsendcustomnotificationData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidsendcustomnotificationData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CustomNotificationData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidsendcustomnotificationData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidsendcustomnotificationData, OperationId) {
  'use strict';




  /**
   * The CustomNotificationData model module.
   * @module model/CustomNotificationData
   * @version 9.0.000.68.3436
   */

  /**
   * Constructs a new <code>CustomNotificationData</code>.
   * @alias module:model/CustomNotificationData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CustomNotificationData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomNotificationData} obj Optional instance to populate.
   * @return {module:model/CustomNotificationData} The populated <code>CustomNotificationData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidsendcustomnotificationData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamediatypeinteractionsidsendcustomnotificationData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


