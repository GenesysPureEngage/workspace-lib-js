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
    root.WorkspaceApi.VoicesetforwardData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoicesetforwardData model module.
   * @module model/VoicesetforwardData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicesetforwardData</code>.
   * @alias module:model/VoicesetforwardData
   * @class
   * @param forwardTo {String} 
   */
  var exports = function(forwardTo) {
    var _this = this;

    _this['forwardTo'] = forwardTo;
  };

  /**
   * Constructs a <code>VoicesetforwardData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicesetforwardData} obj Optional instance to populate.
   * @return {module:model/VoicesetforwardData} The populated <code>VoicesetforwardData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('forwardTo')) {
        obj['forwardTo'] = ApiClient.convertToType(data['forwardTo'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} forwardTo
   */
  exports.prototype['forwardTo'] = undefined;



  return exports;
}));

