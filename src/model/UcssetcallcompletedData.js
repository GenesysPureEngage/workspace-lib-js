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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcssetcallcompletedData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The UcssetcallcompletedData model module.
   * @module model/UcssetcallcompletedData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcssetcallcompletedData</code>.
   * @alias module:model/UcssetcallcompletedData
   * @class
   * @param interactionId {String} The id of the interaction
   * @param callDuration {Number} The duration of the call
   * @param userData {Array.<module:model/Kvpair>} A key/value pairs list of the user data of the call.
   */
  var exports = function(interactionId, callDuration, userData) {
    var _this = this;

    _this['interactionId'] = interactionId;
    _this['callDuration'] = callDuration;
    _this['userData'] = userData;
  };

  /**
   * Constructs a <code>UcssetcallcompletedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcssetcallcompletedData} obj Optional instance to populate.
   * @return {module:model/UcssetcallcompletedData} The populated <code>UcssetcallcompletedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
      }
      if (data.hasOwnProperty('callDuration')) {
        obj['callDuration'] = ApiClient.convertToType(data['callDuration'], 'Number');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The id of the interaction
   * @member {String} interactionId
   */
  exports.prototype['interactionId'] = undefined;
  /**
   * The duration of the call
   * @member {Number} callDuration
   */
  exports.prototype['callDuration'] = undefined;
  /**
   * A key/value pairs list of the user data of the call.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));


