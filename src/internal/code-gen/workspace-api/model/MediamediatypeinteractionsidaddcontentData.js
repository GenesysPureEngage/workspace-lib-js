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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidaddcontentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidaddcontentData model module.
   * @module model/MediamediatypeinteractionsidaddcontentData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidaddcontentData</code>.
   * @alias module:model/MediamediatypeinteractionsidaddcontentData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidaddcontentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidaddcontentData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidaddcontentData} The populated <code>MediamediatypeinteractionsidaddcontentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('threadId')) {
        obj['threadId'] = ApiClient.convertToType(data['threadId'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The comment to be set
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * ThreadId
   * @member {String} threadId
   */
  exports.prototype['threadId'] = undefined;
  /**
   * UCS id of parent interaction
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * id of contact
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;



  return exports;
}));


