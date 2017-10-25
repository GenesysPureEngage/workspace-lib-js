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
    define(['ApiClient', 'model/StatisticValueForPeekResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatisticValueForPeekResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse2002DataStatistics = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.StatisticValueForPeekResponse);
  }
}(this, function(ApiClient, StatisticValueForPeekResponse) {
  'use strict';




  /**
   * The InlineResponse2002DataStatistics model module.
   * @module model/InlineResponse2002DataStatistics
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2002DataStatistics</code>.
   * The list of all the statitstics in given subscription as kvp.
   * @alias module:model/InlineResponse2002DataStatistics
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2002DataStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002DataStatistics} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002DataStatistics} The populated <code>InlineResponse2002DataStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statisticId1')) {
        obj['statisticId1'] = StatisticValueForPeekResponse.constructFromObject(data['statisticId1']);
      }
      if (data.hasOwnProperty('...')) {
        obj['...'] = StatisticValueForPeekResponse.constructFromObject(data['...']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StatisticValueForPeekResponse} statisticId1
   */
  exports.prototype['statisticId1'] = undefined;
  /**
   * @member {module:model/StatisticValueForPeekResponse} ...
   */
  exports.prototype['...'] = undefined;



  return exports;
}));

