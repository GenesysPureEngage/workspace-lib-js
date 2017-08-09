/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
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
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicestartmonitoringData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoicestartmonitoringData model module.
   * @module model/VoicestartmonitoringData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicestartmonitoringData</code>.
   * @alias module:model/VoicestartmonitoringData
   * @class
   * @param phoneNumberToMonitor {String} The phone number that should be monitored
   */
  var exports = function(phoneNumberToMonitor) {
    var _this = this;

    _this['phoneNumberToMonitor'] = phoneNumberToMonitor;




  };

  /**
   * Constructs a <code>VoicestartmonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicestartmonitoringData} obj Optional instance to populate.
   * @return {module:model/VoicestartmonitoringData} The populated <code>VoicestartmonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phoneNumberToMonitor')) {
        obj['phoneNumberToMonitor'] = ApiClient.convertToType(data['phoneNumberToMonitor'], 'String');
      }
      if (data.hasOwnProperty('monitoringMode')) {
        obj['monitoringMode'] = ApiClient.convertToType(data['monitoringMode'], 'String');
      }
      if (data.hasOwnProperty('monitoringNextCallType')) {
        obj['monitoringNextCallType'] = ApiClient.convertToType(data['monitoringNextCallType'], 'String');
      }
      if (data.hasOwnProperty('monitoringScope')) {
        obj['monitoringScope'] = ApiClient.convertToType(data['monitoringScope'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
    }
    return obj;
  }

  /**
   * The phone number that should be monitored
   * @member {String} phoneNumberToMonitor
   */
  exports.prototype['phoneNumberToMonitor'] = undefined;
  /**
   * The monitoring mode (Mute,Coach)
   * @member {module:model/VoicestartmonitoringData.MonitoringModeEnum} monitoringMode
   */
  exports.prototype['monitoringMode'] = undefined;
  /**
   * The monitoring call type (NextCall/AllCalls).
   * @member {module:model/VoicestartmonitoringData.MonitoringNextCallTypeEnum} monitoringNextCallType
   */
  exports.prototype['monitoringNextCallType'] = undefined;
  /**
   * The monitoring scope (Call/Agent).
   * @member {module:model/VoicestartmonitoringData.MonitoringScopeEnum} monitoringScope
   */
  exports.prototype['monitoringScope'] = undefined;
  /**
   * The switch name where the phone number to be monitored is located (optional)
   * @member {String} location
   */
  exports.prototype['location'] = undefined;


  /**
   * Allowed values for the <code>monitoringMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringModeEnum = {
    /**
     * value: "Mute"
     * @const
     */
    "Mute": "Mute",
    /**
     * value: "Coach"
     * @const
     */
    "Coach": "Coach"  };

  /**
   * Allowed values for the <code>monitoringNextCallType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringNextCallTypeEnum = {
    /**
     * value: "OneCall"
     * @const
     */
    "OneCall": "OneCall",
    /**
     * value: "AllCalls"
     * @const
     */
    "AllCalls": "AllCalls"  };

  /**
   * Allowed values for the <code>monitoringScope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringScopeEnum = {
    /**
     * value: "Call"
     * @const
     */
    "Call": "Call",
    /**
     * value: "Agent"
     * @const
     */
    "Agent": "Agent"  };


  return exports;
}));


