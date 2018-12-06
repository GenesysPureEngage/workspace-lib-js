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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamanagementmovetoworkbinData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamanagementmovetoworkbinData model module.
   * @module model/MediamanagementmovetoworkbinData
   * @version 9.0.000.29.2447
   */

  /**
   * Constructs a new <code>MediamanagementmovetoworkbinData</code>.
   * @alias module:model/MediamanagementmovetoworkbinData
   * @class
   * @param workbinId {String} The Id of destination workbin.
   * @param ownerId {String} The Id of owner.
   * @param interactions {Array.<String>} List of interactions to move.
   */
  var exports = function(workbinId, ownerId, interactions) {
    var _this = this;

    _this['workbinId'] = workbinId;
    _this['ownerId'] = ownerId;
    _this['interactions'] = interactions;
  };

  /**
   * Constructs a <code>MediamanagementmovetoworkbinData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamanagementmovetoworkbinData} obj Optional instance to populate.
   * @return {module:model/MediamanagementmovetoworkbinData} The populated <code>MediamanagementmovetoworkbinData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('workbinId')) {
        obj['workbinId'] = ApiClient.convertToType(data['workbinId'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
      if (data.hasOwnProperty('interactions')) {
        obj['interactions'] = ApiClient.convertToType(data['interactions'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The Id of destination workbin.
   * @member {String} workbinId
   */
  exports.prototype['workbinId'] = undefined;
  /**
   * The Id of owner.
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * List of interactions to move.
   * @member {Array.<String>} interactions
   */
  exports.prototype['interactions'] = undefined;



  return exports;
}));


