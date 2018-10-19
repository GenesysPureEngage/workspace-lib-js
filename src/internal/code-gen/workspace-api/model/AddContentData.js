/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2335
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
    define(['ApiClient', 'model/MediamediatypeinteractionsidaddcontentData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidaddcontentData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AddContentData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidaddcontentData);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidaddcontentData) {
  'use strict';




  /**
   * The AddContentData model module.
   * @module model/AddContentData
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>AddContentData</code>.
   * @alias module:model/AddContentData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AddContentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddContentData} obj Optional instance to populate.
   * @return {module:model/AddContentData} The populated <code>AddContentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidaddcontentData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypeinteractionsidaddcontentData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


