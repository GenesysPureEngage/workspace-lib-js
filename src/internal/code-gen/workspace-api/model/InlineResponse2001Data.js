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
    define(['ApiClient', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse2001Data = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';




  /**
   * The InlineResponse2001Data model module.
   * @module model/InlineResponse2001Data
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>InlineResponse2001Data</code>.
   * @alias module:model/InlineResponse2001Data
   * @class
   * @param subscriptions {Array.<module:model/Subscription>} 
   */
  var exports = function(subscriptions) {
    var _this = this;

    _this['subscriptions'] = subscriptions;
  };

  /**
   * Constructs a <code>InlineResponse2001Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001Data} The populated <code>InlineResponse2001Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptions')) {
        obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscription]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Subscription>} subscriptions
   */
  exports.prototype['subscriptions'] = undefined;



  return exports;
}));


