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
    define(['ApiClient', 'model/WorkbinsgetcontentsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkbinsgetcontentsData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UnsubscribeToWorkbinsNotificationsData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.WorkbinsgetcontentsData);
  }
}(this, function(ApiClient, WorkbinsgetcontentsData) {
  'use strict';




  /**
   * The UnsubscribeToWorkbinsNotificationsData model module.
   * @module model/UnsubscribeToWorkbinsNotificationsData
   * @version 9.0.000.24.2335
   */

  /**
   * Constructs a new <code>UnsubscribeToWorkbinsNotificationsData</code>.
   * @alias module:model/UnsubscribeToWorkbinsNotificationsData
   * @class
   * @param data {module:model/WorkbinsgetcontentsData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>UnsubscribeToWorkbinsNotificationsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscribeToWorkbinsNotificationsData} obj Optional instance to populate.
   * @return {module:model/UnsubscribeToWorkbinsNotificationsData} The populated <code>UnsubscribeToWorkbinsNotificationsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = WorkbinsgetcontentsData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WorkbinsgetcontentsData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


