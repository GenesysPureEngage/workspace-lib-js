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
    define(['ApiClient', 'model/InlineResponse200Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200Status'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ApiSuccessResponse = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.InlineResponse200Status);
  }
}(this, function(ApiClient, InlineResponse200Status) {
  'use strict';




  /**
   * The ApiSuccessResponse model module.
   * @module model/ApiSuccessResponse
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>ApiSuccessResponse</code>.
   * @alias module:model/ApiSuccessResponse
   * @class
   * @param status {module:model/InlineResponse200Status} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>ApiSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiSuccessResponse} obj Optional instance to populate.
   * @return {module:model/ApiSuccessResponse} The populated <code>ApiSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = InlineResponse200Status.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse200Status} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


