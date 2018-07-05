/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UcsresponsesidreportusageData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsresponsesidreportusageData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReportStandareResponseUsageData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsresponsesidreportusageData);
  }
}(this, function(ApiClient, UcsresponsesidreportusageData) {
  'use strict';




  /**
   * The ReportStandareResponseUsageData model module.
   * @module model/ReportStandareResponseUsageData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ReportStandareResponseUsageData</code>.
   * @alias module:model/ReportStandareResponseUsageData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ReportStandareResponseUsageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportStandareResponseUsageData} obj Optional instance to populate.
   * @return {module:model/ReportStandareResponseUsageData} The populated <code>ReportStandareResponseUsageData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsresponsesidreportusageData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsresponsesidreportusageData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


