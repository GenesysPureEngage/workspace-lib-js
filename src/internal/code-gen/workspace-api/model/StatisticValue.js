/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.31.2540
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
    root.WorkspaceApi.StatisticValue = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatisticValue model module.
   * @module model/StatisticValue
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>StatisticValue</code>.
   * @alias module:model/StatisticValue
   * @class
   * @param objectId {String} The ID of the object to get statistics for.
   * @param objectType {String} The type of object to get statistics for.
   * @param statisticId {String} The ID of the statistic. This ID is unique inside the subscription.
   * @param name {String} The name of the statistic.
   * @param timestamp {Number} The timestamp when the statistic value was generated (provided by Stat Server).
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
   * The ID of the object to get statistics for.
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * The type of object to get statistics for.
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * The ID of the statistic. This ID is unique inside the subscription.
   * @member {String} statisticId
   */
  exports.prototype['statisticId'] = undefined;
  /**
   * The name of the statistic.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The timestamp when the statistic value was generated (provided by Stat Server).
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The value of the statistic. Its structure reflects the structure of the Stat Server message.
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


