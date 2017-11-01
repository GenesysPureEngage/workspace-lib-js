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
    define(['ApiClient', 'model/MediamediatypelogoutData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypelogoutData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReadyForMediaData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypelogoutData);
  }
}(this, function(ApiClient, MediamediatypelogoutData) {
  'use strict';




  /**
   * The ReadyForMediaData model module.
   * @module model/ReadyForMediaData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReadyForMediaData</code>.
   * @alias module:model/ReadyForMediaData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReadyForMediaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReadyForMediaData} obj Optional instance to populate.
   * @return {module:model/ReadyForMediaData} The populated <code>ReadyForMediaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypelogoutData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypelogoutData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


