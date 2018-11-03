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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcsinteractionsidsetcompletedData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The UcsinteractionsidsetcompletedData model module.
   * @module model/UcsinteractionsidsetcompletedData
   * @version 9.0.000.26.2381
   */

  /**
   * Constructs a new <code>UcsinteractionsidsetcompletedData</code>.
   * @alias module:model/UcsinteractionsidsetcompletedData
   * @class
   * @param callDuration {Number} The duration of the call
   * @param userData {Array.<module:model/Kvpair>} A key/value pairs list of the user data of the call.
   */
  var exports = function(callDuration, userData) {
    var _this = this;

    _this['callDuration'] = callDuration;
    _this['userData'] = userData;
  };

  /**
   * Constructs a <code>UcsinteractionsidsetcompletedData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsinteractionsidsetcompletedData} obj Optional instance to populate.
   * @return {module:model/UcsinteractionsidsetcompletedData} The populated <code>UcsinteractionsidsetcompletedData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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


