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
    define(['ApiClient', 'model/MediamediatypeinteractionsidacceptData', 'model/OperationId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidacceptData'), require('./OperationId'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AcceptData3 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidacceptData, root.WorkspaceApi.OperationId);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidacceptData, OperationId) {
  'use strict';




  /**
   * The AcceptData3 model module.
   * @module model/AcceptData3
   * @version 9.0.000.73.3700
   */

  /**
   * Constructs a new <code>AcceptData3</code>.
   * @alias module:model/AcceptData3
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AcceptData3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptData3} obj Optional instance to populate.
   * @return {module:model/AcceptData3} The populated <code>AcceptData3</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidacceptData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/MediamediatypeinteractionsidacceptData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


