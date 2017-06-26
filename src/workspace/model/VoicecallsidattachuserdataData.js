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
    define(['workspace/ApiClient', 'workspace/model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsidattachuserdataData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidattachuserdataData model module.
   * @module workspace/model/VoicecallsidattachuserdataData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidattachuserdataData</code>.
   * @alias module:workspace/model/VoicecallsidattachuserdataData
   * @class
   * @param userData {Array.<module:workspace/model/Kvpair>} 
   */
  var exports = function(userData) {
    var _this = this;

    _this['userData'] = userData;
  };

  /**
   * Constructs a <code>VoicecallsidattachuserdataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:workspace/model/VoicecallsidattachuserdataData} obj Optional instance to populate.
   * @return {module:workspace/model/VoicecallsidattachuserdataData} The populated <code>VoicecallsidattachuserdataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:workspace/model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));

