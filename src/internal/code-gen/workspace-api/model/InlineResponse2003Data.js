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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.InlineResponse2003Data = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2003Data model module.
   * @module model/InlineResponse2003Data
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>InlineResponse2003Data</code>.
   * @alias module:model/InlineResponse2003Data
   * @class
   * @param messages {Array.<Object>} 
   */
  var exports = function(messages) {
    var _this = this;

    _this['messages'] = messages;
  };

  /**
   * Constructs a <code>InlineResponse2003Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003Data} The populated <code>InlineResponse2003Data</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} messages
   */
  exports.prototype['messages'] = undefined;



  return exports;
}));


