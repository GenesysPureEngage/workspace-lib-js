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
    root.WorkspaceApi.MediamediatypeinteractionsidsetcommentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidsetcommentData model module.
   * @module model/MediamediatypeinteractionsidsetcommentData
   * @version 9.0.000.40.2832
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidsetcommentData</code>.
   * @alias module:model/MediamediatypeinteractionsidsetcommentData
   * @class
   * @param comment {String} The comment to add to the interaction.
   */
  var exports = function(comment) {
    var _this = this;

    _this['comment'] = comment;
  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidsetcommentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidsetcommentData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidsetcommentData} The populated <code>MediamediatypeinteractionsidsetcommentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }

  /**
   * The comment to add to the interaction.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;



  return exports;
}));


