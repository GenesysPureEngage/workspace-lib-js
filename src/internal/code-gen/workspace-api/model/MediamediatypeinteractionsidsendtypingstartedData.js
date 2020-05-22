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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidsendtypingstartedData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidsendtypingstartedData model module.
   * @module model/MediamediatypeinteractionsidsendtypingstartedData
   * @version 9.0.000.73.3700
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidsendtypingstartedData</code>.
   * @alias module:model/MediamediatypeinteractionsidsendtypingstartedData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidsendtypingstartedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidsendtypingstartedData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidsendtypingstartedData} The populated <code>MediamediatypeinteractionsidsendtypingstartedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }

  /**
   * The message to send to the chat participants. For example, \"Agent typing\".
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Defines which participants in the chat can see the message.
   * @member {module:model/MediamediatypeinteractionsidsendtypingstartedData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;


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


  return exports;
}));


