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
    define(['ApiClient', 'model/OperationId', 'model/VoicereadyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationId'), require('./VoicereadyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReadyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.OperationId, root.WorkspaceApi.VoicereadyData);
  }
}(this, function(ApiClient, OperationId, VoicereadyData) {
  'use strict';




  /**
   * The ReadyData model module.
   * @module model/ReadyData
   * @version 9.0.000.68.3436
   */

  /**
   * Constructs a new <code>ReadyData</code>.
   * @alias module:model/ReadyData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReadyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReadyData} obj Optional instance to populate.
   * @return {module:model/ReadyData} The populated <code>ReadyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicereadyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/VoicereadyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


