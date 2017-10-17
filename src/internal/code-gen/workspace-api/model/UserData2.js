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
    define(['ApiClient', 'model/MediamediatypeinteractionsiddeleteuserdataData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsiddeleteuserdataData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UserData2 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsiddeleteuserdataData);
  }
}(this, function(ApiClient, MediamediatypeinteractionsiddeleteuserdataData) {
  'use strict';




  /**
   * The UserData2 model module.
   * @module model/UserData2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserData2</code>.
   * @alias module:model/UserData2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserData2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserData2} obj Optional instance to populate.
   * @return {module:model/UserData2} The populated <code>UserData2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsiddeleteuserdataData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypeinteractionsiddeleteuserdataData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


