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
    root.WorkspaceApi.MediamanagementsnapshotIdgetsnapshotcontentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamanagementsnapshotIdgetsnapshotcontentData model module.
   * @module model/MediamanagementsnapshotIdgetsnapshotcontentData
   * @version 9.0.000.40.2832
   */

  /**
   * Constructs a new <code>MediamanagementsnapshotIdgetsnapshotcontentData</code>.
   * @alias module:model/MediamanagementsnapshotIdgetsnapshotcontentData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MediamanagementsnapshotIdgetsnapshotcontentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamanagementsnapshotIdgetsnapshotcontentData} obj Optional instance to populate.
   * @return {module:model/MediamanagementsnapshotIdgetsnapshotcontentData} The populated <code>MediamanagementsnapshotIdgetsnapshotcontentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The start index.
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * The number of elements
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


