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
    define(['workspace/ApiClient', 'workspace/model/VoicecallsidreconnectData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicecallsidreconnectData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Parameters15 = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicecallsidreconnectData);
  }
}(this, function(ApiClient, VoicecallsidreconnectData) {
  'use strict';




  /**
   * The Parameters15 model module.
   * @module workspace/model/Parameters15
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Parameters15</code>.
   * @alias module:workspace/model/Parameters15
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Parameters15</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:workspace/model/Parameters15} obj Optional instance to populate.
   * @return {module:workspace/model/Parameters15} The populated <code>Parameters15</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidreconnectData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:workspace/model/VoicecallsidreconnectData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


