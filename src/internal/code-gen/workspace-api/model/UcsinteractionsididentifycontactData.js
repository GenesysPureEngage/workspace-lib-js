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
    root.WorkspaceApi.UcsinteractionsididentifycontactData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsinteractionsididentifycontactData model module.
   * @module model/UcsinteractionsididentifycontactData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>UcsinteractionsididentifycontactData</code>.
   * @alias module:model/UcsinteractionsididentifycontactData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UcsinteractionsididentifycontactData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsinteractionsididentifycontactData} obj Optional instance to populate.
   * @return {module:model/UcsinteractionsididentifycontactData} The populated <code>UcsinteractionsididentifycontactData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createContactEnabled')) {
        obj['createContactEnabled'] = ApiClient.convertToType(data['createContactEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Indicates if a contact should be created if no matching contact found
   * @member {Boolean} createContactEnabled
   */
  exports.prototype['createContactEnabled'] = undefined;



  return exports;
}));


