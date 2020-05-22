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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicenotreadyData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicenotreadyData model module.
   * @module model/VoicenotreadyData
   * @version 9.0.000.73.3700
   */

  /**
   * Constructs a new <code>VoicenotreadyData</code>.
   * @alias module:model/VoicenotreadyData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VoicenotreadyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicenotreadyData} obj Optional instance to populate.
   * @return {module:model/VoicenotreadyData} The populated <code>VoicenotreadyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reasonCode')) {
        obj['reasonCode'] = ApiClient.convertToType(data['reasonCode'], 'String');
      }
      if (data.hasOwnProperty('agentWorkMode')) {
        obj['agentWorkMode'] = ApiClient.convertToType(data['agentWorkMode'], 'String');
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The reason code representing why the agent is not ready. These codes are a business-defined set of categories, such as \"Lunch\" or \"Training\".
   * @member {String} reasonCode
   */
  exports.prototype['reasonCode'] = undefined;
  /**
   * The agent workmode.
   * @member {module:model/VoicenotreadyData.AgentWorkModeEnum} agentWorkMode
   */
  exports.prototype['agentWorkMode'] = undefined;
  /**
   * Information on causes for, and results of, actions taken by the user of the current DN. For details about reasons, refer to the [*Genesys Events and Models Reference Manual*](https://docs.genesys.com/Documentation/System/Current/GenEM/Reasons).
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * Media device/hardware reason codes and similar information. For details about extensions, refer to the [*Genesys Events and Models Reference Manual*](https://docs.genesys.com/Documentation/System/Current/GenEM/Extensions).
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;


  /**
   * Allowed values for the <code>agentWorkMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AgentWorkModeEnum = {
    /**
     * value: "AfterCallWork"
     * @const
     */
    "AfterCallWork": "AfterCallWork",
    /**
     * value: "AuxWork"
     * @const
     */
    "AuxWork": "AuxWork",
    /**
     * value: "LegalGuard"
     * @const
     */
    "LegalGuard": "LegalGuard",
    /**
     * value: "NoCallDisconnect"
     * @const
     */
    "NoCallDisconnect": "NoCallDisconnect",
    /**
     * value: "WalkAway"
     * @const
     */
    "WalkAway": "WalkAway"  };


  return exports;
}));


