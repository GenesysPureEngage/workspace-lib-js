/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['workspace/ApiClient', 'workspace/model/ApiErrorResponse', 'workspace/model/ApiSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse) {
  'use strict';

  /**
   * Targets service.
   * @module workspace/api/TargetsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TargetsApi. 
   * @alias module:workspace/api/TargetsApi
   * @class
   * @param {module:workspace/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:workspace/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the get operation.
     * @callback module:workspace/api/TargetsApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:workspace/model/ApiSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for targets
     * @param {String} searchTerm The text to search for
     * @param {Object} opts Optional parameters
     * @param {String} opts.types Comma separated list of types to include in the search
     * @param {String} opts.sort Desired sort order (asc or desc). asc if not specified
     * @param {Number} opts.limit Number of results. 100 if not specified.
     * @param {module:workspace/api/TargetsApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:workspace/model/ApiSuccessResponse}
     */
    this.get = function(searchTerm, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'searchTerm' is set
      if (searchTerm == undefined || searchTerm == null) {
        throw new Error("Missing the required parameter 'searchTerm' when calling get");
      }


      var pathParams = {
      };
      var queryParams = {
        'searchTerm': searchTerm,
        'types': opts['types'],
        'sort': opts['sort'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/targets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTarget operation.
     * @callback module:workspace/api/TargetsApi~getTargetCallback
     * @param {String} error Error message, if any.
     * @param {module:workspace/model/ApiSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a target
     * @param {Number} id The id of the target
     * @param {String} type the type of the target
     * @param {module:workspace/api/TargetsApi~getTargetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:workspace/model/ApiSuccessResponse}
     */
    this.getTarget = function(id, type, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getTarget");
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw new Error("Missing the required parameter 'type' when calling getTarget");
      }


      var pathParams = {
        'id': id,
        'type': type
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/targets/{type}/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
