/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.WorkspaceApi.StatisticValue = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatisticValue model module.
   * @module model/StatisticValue
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>StatisticValue</code>.
   * @alias module:model/StatisticValue
   * @class
   * @param timestamp {Number} Timestamp for given value of the statistic
   * @param value {Number} Value of the statistic
   */
  var exports = function(timestamp, value) {
    var _this = this;

    _this['timestamp'] = timestamp;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>StatisticValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticValue} obj Optional instance to populate.
   * @return {module:model/StatisticValue} The populated <code>StatisticValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Timestamp for given value of the statistic
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Value of the statistic
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


