/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.29.2447
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
    define(['ApiClient', 'model/WorkbinsworkbinIdunsubscribeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkbinsworkbinIdunsubscribeData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UnsubscribeToWorkbinNotificationsData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.WorkbinsworkbinIdunsubscribeData);
  }
}(this, function(ApiClient, WorkbinsworkbinIdunsubscribeData) {
  'use strict';




  /**
   * The UnsubscribeToWorkbinNotificationsData model module.
   * @module model/UnsubscribeToWorkbinNotificationsData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>UnsubscribeToWorkbinNotificationsData</code>.
   * @alias module:model/UnsubscribeToWorkbinNotificationsData
   * @class
   * @param data {module:model/WorkbinsworkbinIdunsubscribeData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>UnsubscribeToWorkbinNotificationsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscribeToWorkbinNotificationsData} obj Optional instance to populate.
   * @return {module:model/UnsubscribeToWorkbinNotificationsData} The populated <code>UnsubscribeToWorkbinNotificationsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = WorkbinsworkbinIdunsubscribeData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WorkbinsworkbinIdunsubscribeData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


