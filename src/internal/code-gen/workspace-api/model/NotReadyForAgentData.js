/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.29.2447
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
    define(['ApiClient', 'model/MedianotreadyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MedianotreadyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.NotReadyForAgentData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MedianotreadyData);
  }
}(this, function(ApiClient, MedianotreadyData) {
  'use strict';




  /**
   * The NotReadyForAgentData model module.
   * @module model/NotReadyForAgentData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>NotReadyForAgentData</code>.
   * @alias module:model/NotReadyForAgentData
   * @class
   * @param data {module:model/MedianotreadyData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>NotReadyForAgentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotReadyForAgentData} obj Optional instance to populate.
   * @return {module:model/NotReadyForAgentData} The populated <code>NotReadyForAgentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MedianotreadyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MedianotreadyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


