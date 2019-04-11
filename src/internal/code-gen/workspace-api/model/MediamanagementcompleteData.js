/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.40.2832
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
    root.WorkspaceApi.MediamanagementcompleteData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamanagementcompleteData model module.
   * @module model/MediamanagementcompleteData
   * @version 9.0.000.40.2832
   */

  /**
   * Constructs a new <code>MediamanagementcompleteData</code>.
   * @alias module:model/MediamanagementcompleteData
   * @class
   * @param interactions {Array.<String>} List of interactions to complete.
   */
  var exports = function(interactions) {
    var _this = this;

    _this['interactions'] = interactions;
  };

  /**
   * Constructs a <code>MediamanagementcompleteData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamanagementcompleteData} obj Optional instance to populate.
   * @return {module:model/MediamanagementcompleteData} The populated <code>MediamanagementcompleteData</code> instance.
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
   * List of interactions to complete.
   * @member {Array.<String>} interactions
   */
  exports.prototype['interactions'] = undefined;



  return exports;
}));


