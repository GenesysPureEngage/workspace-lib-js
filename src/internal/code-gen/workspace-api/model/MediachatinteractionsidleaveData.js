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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediachatinteractionsidleaveData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidleaveData model module.
   * @module model/MediachatinteractionsidleaveData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>MediachatinteractionsidleaveData</code>.
   * @alias module:model/MediachatinteractionsidleaveData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MediachatinteractionsidleaveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidleaveData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidleaveData} The populated <code>MediachatinteractionsidleaveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('afterAction')) {
        obj['afterAction'] = ApiClient.convertToType(data['afterAction'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageType')) {
        obj['messageType'] = ApiClient.convertToType(data['messageType'], 'String');
      }
      if (data.hasOwnProperty('treatAs')) {
        obj['treatAs'] = ApiClient.convertToType(data['treatAs'], 'String');
      }
    }
    return obj;
  }

  /**
   * The action to take after the agent leaves.
   * @member {module:model/MediachatinteractionsidleaveData.AfterActionEnum} afterAction
   */
  exports.prototype['afterAction'] = undefined;
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
   * Specifies how the message should be treated.
   * @member {module:model/MediachatinteractionsidleaveData.TreatAsEnum} treatAs
   */
  exports.prototype['treatAs'] = undefined;


  /**
   * Allowed values for the <code>afterAction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AfterActionEnum = {
    /**
     * value: "CloseIfNoAgents"
     * @const
     */
    "CloseIfNoAgents": "CloseIfNoAgents",
    /**
     * value: "ForceClose"
     * @const
     */
    "ForceClose": "ForceClose",
    /**
     * value: "KeepAlive"
     * @const
     */
    "KeepAlive": "KeepAlive"  };

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


