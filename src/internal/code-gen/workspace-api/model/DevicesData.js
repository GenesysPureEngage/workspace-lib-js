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
    define(['ApiClient', 'model/Dn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Dn'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.DevicesData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Dn);
  }
}(this, function(ApiClient, Dn) {
  'use strict';




  /**
   * The DevicesData model module.
   * @module model/DevicesData
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>DevicesData</code>.
   * @alias module:model/DevicesData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DevicesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DevicesData} obj Optional instance to populate.
   * @return {module:model/DevicesData} The populated <code>DevicesData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('devices')) {
        obj['devices'] = ApiClient.convertToType(data['devices'], [Dn]);
      }
    }
    return obj;
  }

  /**
   * An array containing devices.
   * @member {Array.<module:model/Dn>} devices
   */
  exports.prototype['devices'] = undefined;



  return exports;
}));


