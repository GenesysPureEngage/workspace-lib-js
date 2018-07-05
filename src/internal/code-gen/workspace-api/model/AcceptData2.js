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
    define(['ApiClient', 'model/MediachatinteractionsidsendurlData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediachatinteractionsidsendurlData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AcceptData2 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediachatinteractionsidsendurlData);
  }
}(this, function(ApiClient, MediachatinteractionsidsendurlData) {
  'use strict';




  /**
   * The AcceptData2 model module.
   * @module model/AcceptData2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AcceptData2</code>.
   * @alias module:model/AcceptData2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AcceptData2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptData2} obj Optional instance to populate.
   * @return {module:model/AcceptData2} The populated <code>AcceptData2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediachatinteractionsidsendurlData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediachatinteractionsidsendurlData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


