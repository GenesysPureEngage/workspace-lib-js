/**
 * Workspace API
 * Agent API
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
   * @param objectId {String} ID of the object to get the statistic for
   * @param objectType {String} Type of the obejct to get the statistic for
   * @param statisticId {String} Unique id for the statistic
   * @param name {String} The name of the statistic
   * @param timestamp {Number} Timestamp for given value of the statistic
   */
  var exports = function(objectId, objectType, statisticId, name, timestamp) {
    var _this = this;

    _this['objectId'] = objectId;
    _this['objectType'] = objectType;
    _this['statisticId'] = statisticId;
    _this['name'] = name;
    _this['timestamp'] = timestamp;

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

      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('statisticId')) {
        obj['statisticId'] = ApiClient.convertToType(data['statisticId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * ID of the object to get the statistic for
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * Type of the obejct to get the statistic for
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * Unique id for the statistic
   * @member {String} statisticId
   */
  exports.prototype['statisticId'] = undefined;
  /**
   * The name of the statistic
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Timestamp for given value of the statistic
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Value of the statistic
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


