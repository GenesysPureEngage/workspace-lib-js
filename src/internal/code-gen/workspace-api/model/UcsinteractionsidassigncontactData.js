/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.WorkspaceApi.UcsinteractionsidassigncontactData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsinteractionsidassigncontactData model module.
   * @module model/UcsinteractionsidassigncontactData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsinteractionsidassigncontactData</code>.
   * @alias module:model/UcsinteractionsidassigncontactData
   * @class
   * @param contactId {String} The id of the contact
   */
  var exports = function(contactId) {
    var _this = this;

    _this['contactId'] = contactId;
  };

  /**
   * Constructs a <code>UcsinteractionsidassigncontactData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsinteractionsidassigncontactData} obj Optional instance to populate.
   * @return {module:model/UcsinteractionsidassigncontactData} The populated <code>UcsinteractionsidassigncontactData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contactId')) {
        obj['contactId'] = ApiClient.convertToType(data['contactId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the contact
   * @member {String} contactId
   */
  exports.prototype['contactId'] = undefined;



  return exports;
}));

