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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamanagementmanageuserdataData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediamanagementmanageuserdataData model module.
   * @module model/MediamanagementmanageuserdataData
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>MediamanagementmanageuserdataData</code>.
   * @alias module:model/MediamanagementmanageuserdataData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MediamanagementmanageuserdataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamanagementmanageuserdataData} obj Optional instance to populate.
   * @return {module:model/MediamanagementmanageuserdataData} The populated <code>MediamanagementmanageuserdataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addedUserData')) {
        obj['addedUserData'] = ApiClient.convertToType(data['addedUserData'], [Kvpair]);
      }
      if (data.hasOwnProperty('updatedUserData')) {
        obj['updatedUserData'] = ApiClient.convertToType(data['updatedUserData'], [Kvpair]);
      }
      if (data.hasOwnProperty('deletedUserData')) {
        obj['deletedUserData'] = ApiClient.convertToType(data['deletedUserData'], ['String']);
      }
    }
    return obj;
  }

  /**
   * KVP pairs to add
   * @member {Array.<module:model/Kvpair>} addedUserData
   */
  exports.prototype['addedUserData'] = undefined;
  /**
   * KVP Pairs to update
   * @member {Array.<module:model/Kvpair>} updatedUserData
   */
  exports.prototype['updatedUserData'] = undefined;
  /**
   * Keys to delete
   * @member {Array.<String>} deletedUserData
   */
  exports.prototype['deletedUserData'] = undefined;



  return exports;
}));


