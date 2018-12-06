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
    define(['ApiClient', 'model/UcsinteractionselasticsearchData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsinteractionselasticsearchData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.EsSearchInteractionData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsinteractionselasticsearchData);
  }
}(this, function(ApiClient, UcsinteractionselasticsearchData) {
  'use strict';




  /**
   * The EsSearchInteractionData model module.
   * @module model/EsSearchInteractionData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>EsSearchInteractionData</code>.
   * @alias module:model/EsSearchInteractionData
   * @class
   * @param data {module:model/UcsinteractionselasticsearchData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>EsSearchInteractionData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EsSearchInteractionData} obj Optional instance to populate.
   * @return {module:model/EsSearchInteractionData} The populated <code>EsSearchInteractionData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsinteractionselasticsearchData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsinteractionselasticsearchData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


