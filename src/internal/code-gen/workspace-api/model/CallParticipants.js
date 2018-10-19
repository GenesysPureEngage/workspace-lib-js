/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.24.2335
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
    root.WorkspaceApi.CallParticipants = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallParticipants model module.
   * @module model/CallParticipants
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>CallParticipants</code>.
   * @alias module:model/CallParticipants
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CallParticipants</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallParticipants} obj Optional instance to populate.
   * @return {module:model/CallParticipants} The populated <code>CallParticipants</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * The participant's phone number.
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * The participant's role.
   * @member {String} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));


