/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/VoicecallsidcompleteData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidcompleteData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UserData1 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicecallsidcompleteData);
  }
}(this, function(ApiClient, VoicecallsidcompleteData) {
  'use strict';




  /**
   * The UserData1 model module.
   * @module model/UserData1
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UserData1</code>.
   * @alias module:model/UserData1
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UserData1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserData1} obj Optional instance to populate.
   * @return {module:model/UserData1} The populated <code>UserData1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidcompleteData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicecallsidcompleteData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


