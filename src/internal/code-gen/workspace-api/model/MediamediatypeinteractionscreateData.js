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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionscreateData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediamediatypeinteractionscreateData model module.
   * @module model/MediamediatypeinteractionscreateData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionscreateData</code>.
   * @alias module:model/MediamediatypeinteractionscreateData
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>MediamediatypeinteractionscreateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionscreateData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionscreateData} The populated <code>MediamediatypeinteractionscreateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subtype')) {
        obj['subtype'] = ApiClient.convertToType(data['subtype'], 'String');
      }
      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * Specifies the subtype of interaction.
   * @member {module:model/MediamediatypeinteractionscreateData.SubtypeEnum} subtype
   */
  exports.prototype['subtype'] = undefined;
  /**
   * the name of the queue to submit the new email
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * specify the Id of Parent interaction
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * id of the contact
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * The subject value
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * A key/value pairs list of user data.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;
  /**
   * A key/value pairs list of additional information.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;


  /**
   * Allowed values for the <code>subtype</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubtypeEnum = {
    /**
     * value: "OutboundNew"
     * @const
     */
    "OutboundNew": "OutboundNew",
    /**
     * value: "OutboundReply"
     * @const
     */
    "OutboundReply": "OutboundReply"  };


  return exports;
}));


