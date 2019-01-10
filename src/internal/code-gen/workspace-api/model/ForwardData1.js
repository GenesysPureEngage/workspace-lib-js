/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.31.2540
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
    define(['ApiClient', 'model/MediaemailinteractionsidforwardData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaemailinteractionsidforwardData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ForwardData1 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediaemailinteractionsidforwardData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediaemailinteractionsidforwardData, OperationId) {
  'use strict';




  /**
   * The ForwardData1 model module.
   * @module model/ForwardData1
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>ForwardData1</code>.
   * @alias module:model/ForwardData1
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ForwardData1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForwardData1} obj Optional instance to populate.
   * @return {module:model/ForwardData1} The populated <code>ForwardData1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediaemailinteractionsidforwardData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediaemailinteractionsidforwardData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


