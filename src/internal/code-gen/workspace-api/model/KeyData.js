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
    define(['ApiClient', 'model/OperationId', 'model/VoicecallsiddeleteuserdatapairData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationId'), require('./VoicecallsiddeleteuserdatapairData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.KeyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.OperationId, root.WorkspaceApi.VoicecallsiddeleteuserdatapairData);
  }
}(this, function(ApiClient, OperationId, VoicecallsiddeleteuserdatapairData) {
  'use strict';




  /**
   * The KeyData model module.
   * @module model/KeyData
   * @version 9.0.000.68.3436
   */

  /**
   * Constructs a new <code>KeyData</code>.
   * @alias module:model/KeyData
   * @class
   * @param data {module:model/VoicecallsiddeleteuserdatapairData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>KeyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyData} obj Optional instance to populate.
   * @return {module:model/KeyData} The populated <code>KeyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsiddeleteuserdatapairData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/VoicecallsiddeleteuserdatapairData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


