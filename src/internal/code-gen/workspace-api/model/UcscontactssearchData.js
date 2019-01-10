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
    root.WorkspaceApi.UcscontactssearchData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcscontactssearchData model module.
   * @module model/UcscontactssearchData
   * @version 9.0.000.31.2540
   */

  /**
   * Constructs a new <code>UcscontactssearchData</code>.
   * @alias module:model/UcscontactssearchData
   * @class
   * @param query {String} The query to do the lucene search for contacts
   * @param returnedAttributes {Array.<String>} The list of custom contact attributes to be returned for each contact in response
   */
  var exports = function(query, returnedAttributes) {
    var _this = this;

    _this['query'] = query;
    _this['returnedAttributes'] = returnedAttributes;



  };

  /**
   * Constructs a <code>UcscontactssearchData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcscontactssearchData} obj Optional instance to populate.
   * @return {module:model/UcscontactssearchData} The populated <code>UcscontactssearchData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
      if (data.hasOwnProperty('sortCriteria')) {
        obj['sortCriteria'] = ApiClient.convertToType(data['sortCriteria'], [Object]);
      }
    }
    return obj;
  }

  /**
   * The query to do the lucene search for contacts
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The list of custom contact attributes to be returned for each contact in response
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;
  /**
   * The start index
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * The maximum number of contacts to be returned
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;
  /**
   * The list of sorting criterias which contains the \"attributeName\" and \"mode\" ('asc' / 'desc') parameters
   * @member {Array.<Object>} sortCriteria
   */
  exports.prototype['sortCriteria'] = undefined;



  return exports;
}));


