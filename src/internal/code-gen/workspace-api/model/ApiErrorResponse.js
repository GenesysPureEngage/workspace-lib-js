/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.68.3436
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TargetsResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TargetsResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ApiErrorResponse = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.TargetsResponseStatus);
  }
}(this, function(ApiClient, TargetsResponseStatus) {
  'use strict';




  /**
   * The ApiErrorResponse model module.
   * @module model/ApiErrorResponse
   * @version 9.0.000.68.3436
   */

  /**
   * Constructs a new <code>ApiErrorResponse</code>.
   * @alias module:model/ApiErrorResponse
   * @class
   * @param status {module:model/TargetsResponseStatus} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>ApiErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiErrorResponse} obj Optional instance to populate.
   * @return {module:model/ApiErrorResponse} The populated <code>ApiErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = TargetsResponseStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TargetsResponseStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


