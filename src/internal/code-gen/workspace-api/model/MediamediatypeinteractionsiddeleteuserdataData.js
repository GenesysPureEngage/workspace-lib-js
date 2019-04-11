/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.40.2832
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
    root.WorkspaceApi.MediamediatypeinteractionsiddeleteuserdataData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsiddeleteuserdataData model module.
   * @module model/MediamediatypeinteractionsiddeleteuserdataData
   * @version 9.0.000.40.2832
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsiddeleteuserdataData</code>.
   * @alias module:model/MediamediatypeinteractionsiddeleteuserdataData
   * @class
   * @param keys {Array.<String>} 
   */
  var exports = function(keys) {
    var _this = this;

    _this['keys'] = keys;
  };

  /**
   * Constructs a <code>MediamediatypeinteractionsiddeleteuserdataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsiddeleteuserdataData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsiddeleteuserdataData} The populated <code>MediamediatypeinteractionsiddeleteuserdataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keys')) {
        obj['keys'] = ApiClient.convertToType(data['keys'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} keys
   */
  exports.prototype['keys'] = undefined;



  return exports;
}));


