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
    define(['ApiClient', 'model/Call'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse200Data = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Call);
  }
}(this, function(ApiClient, Call) {
  'use strict';




  /**
   * The InlineResponse200Data model module.
   * @module model/InlineResponse200Data
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>InlineResponse200Data</code>.
   * @alias module:model/InlineResponse200Data
   * @class
   * @param calls {Array.<module:model/Call>} The list of all the calls.
   */
  var exports = function(calls) {
    var _this = this;

    _this['calls'] = calls;
  };

  /**
   * Constructs a <code>InlineResponse200Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Data} The populated <code>InlineResponse200Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('calls')) {
        obj['calls'] = ApiClient.convertToType(data['calls'], [Call]);
      }
    }
    return obj;
  }

  /**
   * The list of all the calls.
   * @member {Array.<module:model/Call>} calls
   */
  exports.prototype['calls'] = undefined;



  return exports;
}));


