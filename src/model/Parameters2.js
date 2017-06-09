/**
 * Workspace Application API
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
    define(['ApiClient', 'model/VoicenotreadyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicenotreadyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApplicationApi) {
      root.WorkspaceApplicationApi = {};
    }
    root.WorkspaceApplicationApi.Parameters2 = factory(root.WorkspaceApplicationApi.ApiClient, root.WorkspaceApplicationApi.VoicenotreadyData);
  }
}(this, function(ApiClient, VoicenotreadyData) {
  'use strict';




  /**
   * The Parameters2 model module.
   * @module model/Parameters2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Parameters2</code>.
   * @alias module:model/Parameters2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Parameters2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters2} obj Optional instance to populate.
   * @return {module:model/Parameters2} The populated <code>Parameters2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicenotreadyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicenotreadyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


