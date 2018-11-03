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
    define(['ApiClient', 'model/VoicestopmonitoringData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicestopmonitoringData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StopMonitoringData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicestopmonitoringData);
  }
}(this, function(ApiClient, VoicestopmonitoringData) {
  'use strict';




  /**
   * The StopMonitoringData model module.
   * @module model/StopMonitoringData
   * @version 9.0.000.26.2381
   */

  /**
   * Constructs a new <code>StopMonitoringData</code>.
   * @alias module:model/StopMonitoringData
   * @class
   * @param data {module:model/VoicestopmonitoringData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>StopMonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StopMonitoringData} obj Optional instance to populate.
   * @return {module:model/StopMonitoringData} The populated <code>StopMonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicestopmonitoringData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicestopmonitoringData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


