/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2335
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediachatinteractionsidsendmessageData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidsendmessageData model module.
   * @module model/MediachatinteractionsidsendmessageData
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>MediachatinteractionsidsendmessageData</code>.
   * @alias module:model/MediachatinteractionsidsendmessageData
   * @class
   * @param message {String} The message to send to the chat participants.
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;



  };

  /**
   * Constructs a <code>MediachatinteractionsidsendmessageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidsendmessageData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidsendmessageData} The populated <code>MediachatinteractionsidsendmessageData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageType')) {
        obj['messageType'] = ApiClient.convertToType(data['messageType'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('treatAs')) {
        obj['treatAs'] = ApiClient.convertToType(data['treatAs'], 'String');
      }
    }
    return obj;
  }

  /**
   * The message to send to the chat participants.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The type of message.
   * @member {String} messageType
   */
  exports.prototype['messageType'] = undefined;
  /**
   * Defines which participants in the chat can see the message.
   * @member {module:model/MediachatinteractionsidsendmessageData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * Specifies how the message should be treated.
   * @member {module:model/MediachatinteractionsidsendmessageData.TreatAsEnum} treatAs
   */
  exports.prototype['treatAs'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "All"
     * @const
     */
    "All": "All",
    /**
     * value: "Agent"
     * @const
     */
    "Agent": "Agent",
    /**
     * value: "Supervisor"
     * @const
     */
    "Supervisor": "Supervisor"  };

  /**
   * Allowed values for the <code>treatAs</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TreatAsEnum = {
    /**
     * value: "Normal"
     * @const
     */
    "Normal": "Normal",
    /**
     * value: "System"
     * @const
     */
    "System": "System"  };


  return exports;
}));


