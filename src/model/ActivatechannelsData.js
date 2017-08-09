/**
 * Workspace API
 * Application API used by Workspace Web Edition
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ActivatechannelsData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActivatechannelsData model module.
   * @module model/ActivatechannelsData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ActivatechannelsData</code>.
   * @alias module:model/ActivatechannelsData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ActivatechannelsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivatechannelsData} obj Optional instance to populate.
   * @return {module:model/ActivatechannelsData} The populated <code>ActivatechannelsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('placeName')) {
        obj['placeName'] = ApiClient.convertToType(data['placeName'], 'String');
      }
      if (data.hasOwnProperty('dn')) {
        obj['dn'] = ApiClient.convertToType(data['dn'], 'String');
      }
      if (data.hasOwnProperty('queueName')) {
        obj['queueName'] = ApiClient.convertToType(data['queueName'], 'String');
      }
    }
    return obj;
  }

  /**
   * agentId (switch login code) that should be used to log the agent in
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * The name of the place that should be used to log the agent in. Either placeName or dn must be provided.
   * @member {String} placeName
   */
  exports.prototype['placeName'] = undefined;
  /**
   * The dn (number) that should be used to login the agent.
   * @member {String} dn
   */
  exports.prototype['dn'] = undefined;
  /**
   * The queue name that should be used to login the agent.
   * @member {String} queueName
   */
  exports.prototype['queueName'] = undefined;



  return exports;
}));


