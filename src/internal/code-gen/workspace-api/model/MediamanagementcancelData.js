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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamanagementcancelData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamanagementcancelData model module.
   * @module model/MediamanagementcancelData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>MediamanagementcancelData</code>.
   * @alias module:model/MediamanagementcancelData
   * @class
   * @param interactions {Array.<String>} List of interactions to cancel.
   */
  var exports = function(interactions) {
    var _this = this;

    _this['interactions'] = interactions;
  };

  /**
   * Constructs a <code>MediamanagementcancelData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamanagementcancelData} obj Optional instance to populate.
   * @return {module:model/MediamanagementcancelData} The populated <code>MediamanagementcancelData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactions')) {
        obj['interactions'] = ApiClient.convertToType(data['interactions'], ['String']);
      }
    }
    return obj;
  }

  /**
   * List of interactions to cancel.
   * @member {Array.<String>} interactions
   */
  exports.prototype['interactions'] = undefined;



  return exports;
}));


