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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediaemailinteractionscreateData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediaemailinteractionscreateData model module.
   * @module model/MediaemailinteractionscreateData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>MediaemailinteractionscreateData</code>.
   * @alias module:model/MediaemailinteractionscreateData
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>MediaemailinteractionscreateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaemailinteractionscreateData} obj Optional instance to populate.
   * @return {module:model/MediaemailinteractionscreateData} The populated <code>MediaemailinteractionscreateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
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
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('bodyAsPlainText')) {
        obj['bodyAsPlainText'] = ApiClient.convertToType(data['bodyAsPlainText'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], ['String']);
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * the name of the queue to submit the new email
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * specify the ThreadId of UCS interaction
   * @member {String} threadId
   */
  exports.prototype['threadId'] = undefined;
  /**
   * specify the Id of UCS Parent interaction
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * id of the contact
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;
  /**
   * the address mail of to
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * the address of from
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * The message to send. Html body
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The message to send. Plain text body
   * @member {String} bodyAsPlainText
   */
  exports.prototype['bodyAsPlainText'] = undefined;
  /**
   * Multipurpose internet mail extensions of email
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * The subject value
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * list of documents to attach to email
   * @member {Array.<String>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * A key/value pairs list of user data.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));


