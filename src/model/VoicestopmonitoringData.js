/**
 * Workspace Application API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    if (!root.WorkspaceApplicationApi) {
      root.WorkspaceApplicationApi = {};
    }
    root.WorkspaceApplicationApi.VoicestopmonitoringData = factory(root.WorkspaceApplicationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoicestopmonitoringData model module.
   * @module model/VoicestopmonitoringData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicestopmonitoringData</code>.
   * @alias module:model/VoicestopmonitoringData
   * @class
   * @param phoneNumber {String} The phone number currently monitored, for which the monitoring should be stopped
   */
  var exports = function(phoneNumber) {
    var _this = this;

    _this['phoneNumber'] = phoneNumber;
  };

  /**
   * Constructs a <code>VoicestopmonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicestopmonitoringData} obj Optional instance to populate.
   * @return {module:model/VoicestopmonitoringData} The populated <code>VoicestopmonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * The phone number currently monitored, for which the monitoring should be stopped
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


