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
    define(['ApiClient', 'model/UcslucenesearchData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcslucenesearchData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.LuceneSearchData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcslucenesearchData);
  }
}(this, function(ApiClient, UcslucenesearchData) {
  'use strict';




  /**
   * The LuceneSearchData model module.
   * @module model/LuceneSearchData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>LuceneSearchData</code>.
   * @alias module:model/LuceneSearchData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LuceneSearchData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LuceneSearchData} obj Optional instance to populate.
   * @return {module:model/LuceneSearchData} The populated <code>LuceneSearchData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcslucenesearchData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcslucenesearchData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


