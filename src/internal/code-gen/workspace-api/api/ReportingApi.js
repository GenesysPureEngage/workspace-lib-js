/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.68.3436
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/StatisticsSubscribeData', 'model/SubscriptionSuccessResponse', 'model/SubscriptionsSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/StatisticsSubscribeData'), require('../model/SubscriptionSuccessResponse'), require('../model/SubscriptionsSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReportingApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.StatisticsSubscribeData, root.WorkspaceApi.SubscriptionSuccessResponse, root.WorkspaceApi.SubscriptionsSuccessResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, StatisticsSubscribeData, SubscriptionSuccessResponse, SubscriptionsSuccessResponse) {
  'use strict';

  /**
   * Reporting service.
   * @module api/ReportingApi
   * @version 9.0.000.68.3436
   */

  /**
   * Constructs a new ReportingApi. 
   * @alias module:api/ReportingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get the values of statistics
     * Get the values of a set of statistics that was opened with a subscription.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionSuccessResponse} and HTTP response
     */
    this.peekWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling peek");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubscriptionSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the values of statistics
     * Get the values of a set of statistics that was opened with a subscription.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionSuccessResponse}
     */
    this.peek = function(subscriptionId) {
      return this.peekWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get statistics
     * Get the statistics for the specified subscription IDs.
     * @param {String} ids The IDs of the subscriptions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionsSuccessResponse} and HTTP response
     */
    this.peekMultipleWithHttpInfo = function(ids) {
      var postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling peekMultiple");
      }


      var pathParams = {
      };
      var queryParams = {
        'ids': ids,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubscriptionsSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get statistics
     * Get the statistics for the specified subscription IDs.
     * @param {String} ids The IDs of the subscriptions.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionsSuccessResponse}
     */
    this.peekMultiple = function(ids) {
      return this.peekMultipleWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to statistics
     * Open a subscription for the specified set of statistics. The values are returned when you request them using [/reporting/subscriptions/{subscriptionId}](/reference/workspace/Reporting/index.html#peek).
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData The collection of statistics you want to include in your subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubscriptionSuccessResponse} and HTTP response
     */
    this.subscribeWithHttpInfo = function(statisticsSubscribeData) {
      var postBody = statisticsSubscribeData;

      // verify the required parameter 'statisticsSubscribeData' is set
      if (statisticsSubscribeData === undefined || statisticsSubscribeData === null) {
        throw new Error("Missing the required parameter 'statisticsSubscribeData' when calling subscribe");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SubscriptionSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to statistics
     * Open a subscription for the specified set of statistics. The values are returned when you request them using [/reporting/subscriptions/{subscriptionId}](/reference/workspace/Reporting/index.html#peek).
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData The collection of statistics you want to include in your subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubscriptionSuccessResponse}
     */
    this.subscribe = function(statisticsSubscribeData) {
      return this.subscribeWithHttpInfo(statisticsSubscribeData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a subscription
     * Delete the specified subscription by closing all its statistics.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.unsubscribeWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling unsubscribe");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/reporting/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a subscription
     * Delete the specified subscription by closing all its statistics.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.unsubscribe = function(subscriptionId) {
      return this.unsubscribeWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
