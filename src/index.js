/**
 * Workspace Application API
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivatechannelsData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/Call', 'model/CallParticipants', 'model/ConfigResponse', 'model/ConfigResponseData', 'model/ConfigResponseDataActionCodes', 'model/ConfigResponseDataBusinessAttributes', 'model/ConfigResponseDataTransactions', 'model/ConfigResponseDataValues', 'model/CurrentUser', 'model/CurrentUserData', 'model/CurrentUserDataUser', 'model/CurrentUserDataUserActiveSession', 'model/CurrentUserDataUserActiveSessionDn', 'model/CurrentUserStatus', 'model/InlineResponse200', 'model/InlineResponse200Data', 'model/InlineResponse200Status', 'model/Key', 'model/Kvpair', 'model/LoginData', 'model/Parameters', 'model/Parameters1', 'model/Parameters10', 'model/Parameters11', 'model/Parameters12', 'model/Parameters13', 'model/Parameters14', 'model/Parameters15', 'model/Parameters16', 'model/Parameters17', 'model/Parameters18', 'model/Parameters19', 'model/Parameters2', 'model/Parameters20', 'model/Parameters21', 'model/Parameters22', 'model/Parameters23', 'model/Parameters24', 'model/Parameters25', 'model/Parameters26', 'model/Parameters27', 'model/Parameters28', 'model/Parameters29', 'model/Parameters3', 'model/Parameters30', 'model/Parameters31', 'model/Parameters32', 'model/Parameters33', 'model/Parameters34', 'model/Parameters35', 'model/Parameters36', 'model/Parameters37', 'model/Parameters38', 'model/Parameters39', 'model/Parameters4', 'model/Parameters40', 'model/Parameters41', 'model/Parameters5', 'model/Parameters6', 'model/Parameters7', 'model/Parameters8', 'model/Parameters9', 'model/ReportingsubscribeData', 'model/Statistics', 'model/TargetsunsubscribeData', 'model/UcsassigninteractiontocontactData', 'model/UcsdeletecontactData', 'model/UcsfindorcreatephonecallData', 'model/UcsgetagenthistoryData', 'model/UcsgetcontactdetailsData', 'model/UcsgetcontacthistoryData', 'model/UcsgetcontactsData', 'model/UcsgetinteractioncontentData', 'model/UcsidentifycontactData', 'model/UcslucenesearchData', 'model/UcslucenesearchinteractionData', 'model/UcssetcallcompletedData', 'model/UcssetcallnoteData', 'model/UcsupdatecontactData', 'model/UserData', 'model/UserData1', 'model/UserData2', 'model/VoicecallsidalternatecallData', 'model/VoicecallsidanswerData', 'model/VoicecallsidattachuserdataData', 'model/VoicecallsidcompleteconferenceData', 'model/VoicecallsidcompletetransferData', 'model/VoicecallsiddeletefromconferenceData', 'model/VoicecallsiddeletepairData', 'model/VoicecallsidinitiateconferenceData', 'model/VoicecallsidinitiatetransferData', 'model/VoicecallsidreconnectcallData', 'model/VoicecallsidredirectcallData', 'model/VoicecallsidsenddtmfData', 'model/VoicecallsidsinglestepconferenceData', 'model/VoicecallsidsinglesteptransferData', 'model/VoicecallsidswitchtolisteninData', 'model/VoicedialData', 'model/VoicenotreadyData', 'model/VoicesendusereventData', 'model/VoicesetforwardData', 'model/VoicestartmonitoringData', 'model/VoicestopmonitoringData', 'api/DocumentationApi', 'api/ReportingApi', 'api/SessionApi', 'api/TargetsApi', 'api/UcsApi', 'api/VoiceAgentStateApi', 'api/VoiceBasicCallControlApi', 'api/VoiceCallForwardingApi', 'api/VoiceCallMonitoringApi', 'api/VoiceCallRecordingApi', 'api/VoiceConferencesAndTransfersApi', 'api/VoiceOtherCallControlApi', 'api/VoiceUserEventApi', 'api/VoiceUserdataApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActivatechannelsData'), require('./model/ApiErrorResponse'), require('./model/ApiSuccessResponse'), require('./model/Call'), require('./model/CallParticipants'), require('./model/ConfigResponse'), require('./model/ConfigResponseData'), require('./model/ConfigResponseDataActionCodes'), require('./model/ConfigResponseDataBusinessAttributes'), require('./model/ConfigResponseDataTransactions'), require('./model/ConfigResponseDataValues'), require('./model/CurrentUser'), require('./model/CurrentUserData'), require('./model/CurrentUserDataUser'), require('./model/CurrentUserDataUserActiveSession'), require('./model/CurrentUserDataUserActiveSessionDn'), require('./model/CurrentUserStatus'), require('./model/InlineResponse200'), require('./model/InlineResponse200Data'), require('./model/InlineResponse200Status'), require('./model/Key'), require('./model/Kvpair'), require('./model/LoginData'), require('./model/Parameters'), require('./model/Parameters1'), require('./model/Parameters10'), require('./model/Parameters11'), require('./model/Parameters12'), require('./model/Parameters13'), require('./model/Parameters14'), require('./model/Parameters15'), require('./model/Parameters16'), require('./model/Parameters17'), require('./model/Parameters18'), require('./model/Parameters19'), require('./model/Parameters2'), require('./model/Parameters20'), require('./model/Parameters21'), require('./model/Parameters22'), require('./model/Parameters23'), require('./model/Parameters24'), require('./model/Parameters25'), require('./model/Parameters26'), require('./model/Parameters27'), require('./model/Parameters28'), require('./model/Parameters29'), require('./model/Parameters3'), require('./model/Parameters30'), require('./model/Parameters31'), require('./model/Parameters32'), require('./model/Parameters33'), require('./model/Parameters34'), require('./model/Parameters35'), require('./model/Parameters36'), require('./model/Parameters37'), require('./model/Parameters38'), require('./model/Parameters39'), require('./model/Parameters4'), require('./model/Parameters40'), require('./model/Parameters41'), require('./model/Parameters5'), require('./model/Parameters6'), require('./model/Parameters7'), require('./model/Parameters8'), require('./model/Parameters9'), require('./model/ReportingsubscribeData'), require('./model/Statistics'), require('./model/TargetsunsubscribeData'), require('./model/UcsassigninteractiontocontactData'), require('./model/UcsdeletecontactData'), require('./model/UcsfindorcreatephonecallData'), require('./model/UcsgetagenthistoryData'), require('./model/UcsgetcontactdetailsData'), require('./model/UcsgetcontacthistoryData'), require('./model/UcsgetcontactsData'), require('./model/UcsgetinteractioncontentData'), require('./model/UcsidentifycontactData'), require('./model/UcslucenesearchData'), require('./model/UcslucenesearchinteractionData'), require('./model/UcssetcallcompletedData'), require('./model/UcssetcallnoteData'), require('./model/UcsupdatecontactData'), require('./model/UserData'), require('./model/UserData1'), require('./model/UserData2'), require('./model/VoicecallsidalternatecallData'), require('./model/VoicecallsidanswerData'), require('./model/VoicecallsidattachuserdataData'), require('./model/VoicecallsidcompleteconferenceData'), require('./model/VoicecallsidcompletetransferData'), require('./model/VoicecallsiddeletefromconferenceData'), require('./model/VoicecallsiddeletepairData'), require('./model/VoicecallsidinitiateconferenceData'), require('./model/VoicecallsidinitiatetransferData'), require('./model/VoicecallsidreconnectcallData'), require('./model/VoicecallsidredirectcallData'), require('./model/VoicecallsidsenddtmfData'), require('./model/VoicecallsidsinglestepconferenceData'), require('./model/VoicecallsidsinglesteptransferData'), require('./model/VoicecallsidswitchtolisteninData'), require('./model/VoicedialData'), require('./model/VoicenotreadyData'), require('./model/VoicesendusereventData'), require('./model/VoicesetforwardData'), require('./model/VoicestartmonitoringData'), require('./model/VoicestopmonitoringData'), require('./api/DocumentationApi'), require('./api/ReportingApi'), require('./api/SessionApi'), require('./api/TargetsApi'), require('./api/UcsApi'), require('./api/VoiceAgentStateApi'), require('./api/VoiceBasicCallControlApi'), require('./api/VoiceCallForwardingApi'), require('./api/VoiceCallMonitoringApi'), require('./api/VoiceCallRecordingApi'), require('./api/VoiceConferencesAndTransfersApi'), require('./api/VoiceOtherCallControlApi'), require('./api/VoiceUserEventApi'), require('./api/VoiceUserdataApi'));
  }
}(function(ApiClient, ActivatechannelsData, ApiErrorResponse, ApiSuccessResponse, Call, CallParticipants, ConfigResponse, ConfigResponseData, ConfigResponseDataActionCodes, ConfigResponseDataBusinessAttributes, ConfigResponseDataTransactions, ConfigResponseDataValues, CurrentUser, CurrentUserData, CurrentUserDataUser, CurrentUserDataUserActiveSession, CurrentUserDataUserActiveSessionDn, CurrentUserStatus, InlineResponse200, InlineResponse200Data, InlineResponse200Status, Key, Kvpair, LoginData, Parameters, Parameters1, Parameters10, Parameters11, Parameters12, Parameters13, Parameters14, Parameters15, Parameters16, Parameters17, Parameters18, Parameters19, Parameters2, Parameters20, Parameters21, Parameters22, Parameters23, Parameters24, Parameters25, Parameters26, Parameters27, Parameters28, Parameters29, Parameters3, Parameters30, Parameters31, Parameters32, Parameters33, Parameters34, Parameters35, Parameters36, Parameters37, Parameters38, Parameters39, Parameters4, Parameters40, Parameters41, Parameters5, Parameters6, Parameters7, Parameters8, Parameters9, ReportingsubscribeData, Statistics, TargetsunsubscribeData, UcsassigninteractiontocontactData, UcsdeletecontactData, UcsfindorcreatephonecallData, UcsgetagenthistoryData, UcsgetcontactdetailsData, UcsgetcontacthistoryData, UcsgetcontactsData, UcsgetinteractioncontentData, UcsidentifycontactData, UcslucenesearchData, UcslucenesearchinteractionData, UcssetcallcompletedData, UcssetcallnoteData, UcsupdatecontactData, UserData, UserData1, UserData2, VoicecallsidalternatecallData, VoicecallsidanswerData, VoicecallsidattachuserdataData, VoicecallsidcompleteconferenceData, VoicecallsidcompletetransferData, VoicecallsiddeletefromconferenceData, VoicecallsiddeletepairData, VoicecallsidinitiateconferenceData, VoicecallsidinitiatetransferData, VoicecallsidreconnectcallData, VoicecallsidredirectcallData, VoicecallsidsenddtmfData, VoicecallsidsinglestepconferenceData, VoicecallsidsinglesteptransferData, VoicecallsidswitchtolisteninData, VoicedialData, VoicenotreadyData, VoicesendusereventData, VoicesetforwardData, VoicestartmonitoringData, VoicestopmonitoringData, DocumentationApi, ReportingApi, SessionApi, TargetsApi, UcsApi, VoiceAgentStateApi, VoiceBasicCallControlApi, VoiceCallForwardingApi, VoiceCallMonitoringApi, VoiceCallRecordingApi, VoiceConferencesAndTransfersApi, VoiceOtherCallControlApi, VoiceUserEventApi, VoiceUserdataApi) {
  'use strict';

  /**
   * Application_API_used_by_Workspace_Web_Edition.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WorkspaceApplicationApi = require('index'); // See note below*.
   * var xxxSvc = new WorkspaceApplicationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WorkspaceApplicationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WorkspaceApplicationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WorkspaceApplicationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActivatechannelsData model constructor.
     * @property {module:model/ActivatechannelsData}
     */
    ActivatechannelsData: ActivatechannelsData,
    /**
     * The ApiErrorResponse model constructor.
     * @property {module:model/ApiErrorResponse}
     */
    ApiErrorResponse: ApiErrorResponse,
    /**
     * The ApiSuccessResponse model constructor.
     * @property {module:model/ApiSuccessResponse}
     */
    ApiSuccessResponse: ApiSuccessResponse,
    /**
     * The Call model constructor.
     * @property {module:model/Call}
     */
    Call: Call,
    /**
     * The CallParticipants model constructor.
     * @property {module:model/CallParticipants}
     */
    CallParticipants: CallParticipants,
    /**
     * The ConfigResponse model constructor.
     * @property {module:model/ConfigResponse}
     */
    ConfigResponse: ConfigResponse,
    /**
     * The ConfigResponseData model constructor.
     * @property {module:model/ConfigResponseData}
     */
    ConfigResponseData: ConfigResponseData,
    /**
     * The ConfigResponseDataActionCodes model constructor.
     * @property {module:model/ConfigResponseDataActionCodes}
     */
    ConfigResponseDataActionCodes: ConfigResponseDataActionCodes,
    /**
     * The ConfigResponseDataBusinessAttributes model constructor.
     * @property {module:model/ConfigResponseDataBusinessAttributes}
     */
    ConfigResponseDataBusinessAttributes: ConfigResponseDataBusinessAttributes,
    /**
     * The ConfigResponseDataTransactions model constructor.
     * @property {module:model/ConfigResponseDataTransactions}
     */
    ConfigResponseDataTransactions: ConfigResponseDataTransactions,
    /**
     * The ConfigResponseDataValues model constructor.
     * @property {module:model/ConfigResponseDataValues}
     */
    ConfigResponseDataValues: ConfigResponseDataValues,
    /**
     * The CurrentUser model constructor.
     * @property {module:model/CurrentUser}
     */
    CurrentUser: CurrentUser,
    /**
     * The CurrentUserData model constructor.
     * @property {module:model/CurrentUserData}
     */
    CurrentUserData: CurrentUserData,
    /**
     * The CurrentUserDataUser model constructor.
     * @property {module:model/CurrentUserDataUser}
     */
    CurrentUserDataUser: CurrentUserDataUser,
    /**
     * The CurrentUserDataUserActiveSession model constructor.
     * @property {module:model/CurrentUserDataUserActiveSession}
     */
    CurrentUserDataUserActiveSession: CurrentUserDataUserActiveSession,
    /**
     * The CurrentUserDataUserActiveSessionDn model constructor.
     * @property {module:model/CurrentUserDataUserActiveSessionDn}
     */
    CurrentUserDataUserActiveSessionDn: CurrentUserDataUserActiveSessionDn,
    /**
     * The CurrentUserStatus model constructor.
     * @property {module:model/CurrentUserStatus}
     */
    CurrentUserStatus: CurrentUserStatus,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse200Data model constructor.
     * @property {module:model/InlineResponse200Data}
     */
    InlineResponse200Data: InlineResponse200Data,
    /**
     * The InlineResponse200Status model constructor.
     * @property {module:model/InlineResponse200Status}
     */
    InlineResponse200Status: InlineResponse200Status,
    /**
     * The Key model constructor.
     * @property {module:model/Key}
     */
    Key: Key,
    /**
     * The Kvpair model constructor.
     * @property {module:model/Kvpair}
     */
    Kvpair: Kvpair,
    /**
     * The LoginData model constructor.
     * @property {module:model/LoginData}
     */
    LoginData: LoginData,
    /**
     * The Parameters model constructor.
     * @property {module:model/Parameters}
     */
    Parameters: Parameters,
    /**
     * The Parameters1 model constructor.
     * @property {module:model/Parameters1}
     */
    Parameters1: Parameters1,
    /**
     * The Parameters10 model constructor.
     * @property {module:model/Parameters10}
     */
    Parameters10: Parameters10,
    /**
     * The Parameters11 model constructor.
     * @property {module:model/Parameters11}
     */
    Parameters11: Parameters11,
    /**
     * The Parameters12 model constructor.
     * @property {module:model/Parameters12}
     */
    Parameters12: Parameters12,
    /**
     * The Parameters13 model constructor.
     * @property {module:model/Parameters13}
     */
    Parameters13: Parameters13,
    /**
     * The Parameters14 model constructor.
     * @property {module:model/Parameters14}
     */
    Parameters14: Parameters14,
    /**
     * The Parameters15 model constructor.
     * @property {module:model/Parameters15}
     */
    Parameters15: Parameters15,
    /**
     * The Parameters16 model constructor.
     * @property {module:model/Parameters16}
     */
    Parameters16: Parameters16,
    /**
     * The Parameters17 model constructor.
     * @property {module:model/Parameters17}
     */
    Parameters17: Parameters17,
    /**
     * The Parameters18 model constructor.
     * @property {module:model/Parameters18}
     */
    Parameters18: Parameters18,
    /**
     * The Parameters19 model constructor.
     * @property {module:model/Parameters19}
     */
    Parameters19: Parameters19,
    /**
     * The Parameters2 model constructor.
     * @property {module:model/Parameters2}
     */
    Parameters2: Parameters2,
    /**
     * The Parameters20 model constructor.
     * @property {module:model/Parameters20}
     */
    Parameters20: Parameters20,
    /**
     * The Parameters21 model constructor.
     * @property {module:model/Parameters21}
     */
    Parameters21: Parameters21,
    /**
     * The Parameters22 model constructor.
     * @property {module:model/Parameters22}
     */
    Parameters22: Parameters22,
    /**
     * The Parameters23 model constructor.
     * @property {module:model/Parameters23}
     */
    Parameters23: Parameters23,
    /**
     * The Parameters24 model constructor.
     * @property {module:model/Parameters24}
     */
    Parameters24: Parameters24,
    /**
     * The Parameters25 model constructor.
     * @property {module:model/Parameters25}
     */
    Parameters25: Parameters25,
    /**
     * The Parameters26 model constructor.
     * @property {module:model/Parameters26}
     */
    Parameters26: Parameters26,
    /**
     * The Parameters27 model constructor.
     * @property {module:model/Parameters27}
     */
    Parameters27: Parameters27,
    /**
     * The Parameters28 model constructor.
     * @property {module:model/Parameters28}
     */
    Parameters28: Parameters28,
    /**
     * The Parameters29 model constructor.
     * @property {module:model/Parameters29}
     */
    Parameters29: Parameters29,
    /**
     * The Parameters3 model constructor.
     * @property {module:model/Parameters3}
     */
    Parameters3: Parameters3,
    /**
     * The Parameters30 model constructor.
     * @property {module:model/Parameters30}
     */
    Parameters30: Parameters30,
    /**
     * The Parameters31 model constructor.
     * @property {module:model/Parameters31}
     */
    Parameters31: Parameters31,
    /**
     * The Parameters32 model constructor.
     * @property {module:model/Parameters32}
     */
    Parameters32: Parameters32,
    /**
     * The Parameters33 model constructor.
     * @property {module:model/Parameters33}
     */
    Parameters33: Parameters33,
    /**
     * The Parameters34 model constructor.
     * @property {module:model/Parameters34}
     */
    Parameters34: Parameters34,
    /**
     * The Parameters35 model constructor.
     * @property {module:model/Parameters35}
     */
    Parameters35: Parameters35,
    /**
     * The Parameters36 model constructor.
     * @property {module:model/Parameters36}
     */
    Parameters36: Parameters36,
    /**
     * The Parameters37 model constructor.
     * @property {module:model/Parameters37}
     */
    Parameters37: Parameters37,
    /**
     * The Parameters38 model constructor.
     * @property {module:model/Parameters38}
     */
    Parameters38: Parameters38,
    /**
     * The Parameters39 model constructor.
     * @property {module:model/Parameters39}
     */
    Parameters39: Parameters39,
    /**
     * The Parameters4 model constructor.
     * @property {module:model/Parameters4}
     */
    Parameters4: Parameters4,
    /**
     * The Parameters40 model constructor.
     * @property {module:model/Parameters40}
     */
    Parameters40: Parameters40,
    /**
     * The Parameters41 model constructor.
     * @property {module:model/Parameters41}
     */
    Parameters41: Parameters41,
    /**
     * The Parameters5 model constructor.
     * @property {module:model/Parameters5}
     */
    Parameters5: Parameters5,
    /**
     * The Parameters6 model constructor.
     * @property {module:model/Parameters6}
     */
    Parameters6: Parameters6,
    /**
     * The Parameters7 model constructor.
     * @property {module:model/Parameters7}
     */
    Parameters7: Parameters7,
    /**
     * The Parameters8 model constructor.
     * @property {module:model/Parameters8}
     */
    Parameters8: Parameters8,
    /**
     * The Parameters9 model constructor.
     * @property {module:model/Parameters9}
     */
    Parameters9: Parameters9,
    /**
     * The ReportingsubscribeData model constructor.
     * @property {module:model/ReportingsubscribeData}
     */
    ReportingsubscribeData: ReportingsubscribeData,
    /**
     * The Statistics model constructor.
     * @property {module:model/Statistics}
     */
    Statistics: Statistics,
    /**
     * The TargetsunsubscribeData model constructor.
     * @property {module:model/TargetsunsubscribeData}
     */
    TargetsunsubscribeData: TargetsunsubscribeData,
    /**
     * The UcsassigninteractiontocontactData model constructor.
     * @property {module:model/UcsassigninteractiontocontactData}
     */
    UcsassigninteractiontocontactData: UcsassigninteractiontocontactData,
    /**
     * The UcsdeletecontactData model constructor.
     * @property {module:model/UcsdeletecontactData}
     */
    UcsdeletecontactData: UcsdeletecontactData,
    /**
     * The UcsfindorcreatephonecallData model constructor.
     * @property {module:model/UcsfindorcreatephonecallData}
     */
    UcsfindorcreatephonecallData: UcsfindorcreatephonecallData,
    /**
     * The UcsgetagenthistoryData model constructor.
     * @property {module:model/UcsgetagenthistoryData}
     */
    UcsgetagenthistoryData: UcsgetagenthistoryData,
    /**
     * The UcsgetcontactdetailsData model constructor.
     * @property {module:model/UcsgetcontactdetailsData}
     */
    UcsgetcontactdetailsData: UcsgetcontactdetailsData,
    /**
     * The UcsgetcontacthistoryData model constructor.
     * @property {module:model/UcsgetcontacthistoryData}
     */
    UcsgetcontacthistoryData: UcsgetcontacthistoryData,
    /**
     * The UcsgetcontactsData model constructor.
     * @property {module:model/UcsgetcontactsData}
     */
    UcsgetcontactsData: UcsgetcontactsData,
    /**
     * The UcsgetinteractioncontentData model constructor.
     * @property {module:model/UcsgetinteractioncontentData}
     */
    UcsgetinteractioncontentData: UcsgetinteractioncontentData,
    /**
     * The UcsidentifycontactData model constructor.
     * @property {module:model/UcsidentifycontactData}
     */
    UcsidentifycontactData: UcsidentifycontactData,
    /**
     * The UcslucenesearchData model constructor.
     * @property {module:model/UcslucenesearchData}
     */
    UcslucenesearchData: UcslucenesearchData,
    /**
     * The UcslucenesearchinteractionData model constructor.
     * @property {module:model/UcslucenesearchinteractionData}
     */
    UcslucenesearchinteractionData: UcslucenesearchinteractionData,
    /**
     * The UcssetcallcompletedData model constructor.
     * @property {module:model/UcssetcallcompletedData}
     */
    UcssetcallcompletedData: UcssetcallcompletedData,
    /**
     * The UcssetcallnoteData model constructor.
     * @property {module:model/UcssetcallnoteData}
     */
    UcssetcallnoteData: UcssetcallnoteData,
    /**
     * The UcsupdatecontactData model constructor.
     * @property {module:model/UcsupdatecontactData}
     */
    UcsupdatecontactData: UcsupdatecontactData,
    /**
     * The UserData model constructor.
     * @property {module:model/UserData}
     */
    UserData: UserData,
    /**
     * The UserData1 model constructor.
     * @property {module:model/UserData1}
     */
    UserData1: UserData1,
    /**
     * The UserData2 model constructor.
     * @property {module:model/UserData2}
     */
    UserData2: UserData2,
    /**
     * The VoicecallsidalternatecallData model constructor.
     * @property {module:model/VoicecallsidalternatecallData}
     */
    VoicecallsidalternatecallData: VoicecallsidalternatecallData,
    /**
     * The VoicecallsidanswerData model constructor.
     * @property {module:model/VoicecallsidanswerData}
     */
    VoicecallsidanswerData: VoicecallsidanswerData,
    /**
     * The VoicecallsidattachuserdataData model constructor.
     * @property {module:model/VoicecallsidattachuserdataData}
     */
    VoicecallsidattachuserdataData: VoicecallsidattachuserdataData,
    /**
     * The VoicecallsidcompleteconferenceData model constructor.
     * @property {module:model/VoicecallsidcompleteconferenceData}
     */
    VoicecallsidcompleteconferenceData: VoicecallsidcompleteconferenceData,
    /**
     * The VoicecallsidcompletetransferData model constructor.
     * @property {module:model/VoicecallsidcompletetransferData}
     */
    VoicecallsidcompletetransferData: VoicecallsidcompletetransferData,
    /**
     * The VoicecallsiddeletefromconferenceData model constructor.
     * @property {module:model/VoicecallsiddeletefromconferenceData}
     */
    VoicecallsiddeletefromconferenceData: VoicecallsiddeletefromconferenceData,
    /**
     * The VoicecallsiddeletepairData model constructor.
     * @property {module:model/VoicecallsiddeletepairData}
     */
    VoicecallsiddeletepairData: VoicecallsiddeletepairData,
    /**
     * The VoicecallsidinitiateconferenceData model constructor.
     * @property {module:model/VoicecallsidinitiateconferenceData}
     */
    VoicecallsidinitiateconferenceData: VoicecallsidinitiateconferenceData,
    /**
     * The VoicecallsidinitiatetransferData model constructor.
     * @property {module:model/VoicecallsidinitiatetransferData}
     */
    VoicecallsidinitiatetransferData: VoicecallsidinitiatetransferData,
    /**
     * The VoicecallsidreconnectcallData model constructor.
     * @property {module:model/VoicecallsidreconnectcallData}
     */
    VoicecallsidreconnectcallData: VoicecallsidreconnectcallData,
    /**
     * The VoicecallsidredirectcallData model constructor.
     * @property {module:model/VoicecallsidredirectcallData}
     */
    VoicecallsidredirectcallData: VoicecallsidredirectcallData,
    /**
     * The VoicecallsidsenddtmfData model constructor.
     * @property {module:model/VoicecallsidsenddtmfData}
     */
    VoicecallsidsenddtmfData: VoicecallsidsenddtmfData,
    /**
     * The VoicecallsidsinglestepconferenceData model constructor.
     * @property {module:model/VoicecallsidsinglestepconferenceData}
     */
    VoicecallsidsinglestepconferenceData: VoicecallsidsinglestepconferenceData,
    /**
     * The VoicecallsidsinglesteptransferData model constructor.
     * @property {module:model/VoicecallsidsinglesteptransferData}
     */
    VoicecallsidsinglesteptransferData: VoicecallsidsinglesteptransferData,
    /**
     * The VoicecallsidswitchtolisteninData model constructor.
     * @property {module:model/VoicecallsidswitchtolisteninData}
     */
    VoicecallsidswitchtolisteninData: VoicecallsidswitchtolisteninData,
    /**
     * The VoicedialData model constructor.
     * @property {module:model/VoicedialData}
     */
    VoicedialData: VoicedialData,
    /**
     * The VoicenotreadyData model constructor.
     * @property {module:model/VoicenotreadyData}
     */
    VoicenotreadyData: VoicenotreadyData,
    /**
     * The VoicesendusereventData model constructor.
     * @property {module:model/VoicesendusereventData}
     */
    VoicesendusereventData: VoicesendusereventData,
    /**
     * The VoicesetforwardData model constructor.
     * @property {module:model/VoicesetforwardData}
     */
    VoicesetforwardData: VoicesetforwardData,
    /**
     * The VoicestartmonitoringData model constructor.
     * @property {module:model/VoicestartmonitoringData}
     */
    VoicestartmonitoringData: VoicestartmonitoringData,
    /**
     * The VoicestopmonitoringData model constructor.
     * @property {module:model/VoicestopmonitoringData}
     */
    VoicestopmonitoringData: VoicestopmonitoringData,
    /**
     * The DocumentationApi service constructor.
     * @property {module:api/DocumentationApi}
     */
    DocumentationApi: DocumentationApi,
    /**
     * The ReportingApi service constructor.
     * @property {module:api/ReportingApi}
     */
    ReportingApi: ReportingApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The TargetsApi service constructor.
     * @property {module:api/TargetsApi}
     */
    TargetsApi: TargetsApi,
    /**
     * The UcsApi service constructor.
     * @property {module:api/UcsApi}
     */
    UcsApi: UcsApi,
    /**
     * The VoiceAgentStateApi service constructor.
     * @property {module:api/VoiceAgentStateApi}
     */
    VoiceAgentStateApi: VoiceAgentStateApi,
    /**
     * The VoiceBasicCallControlApi service constructor.
     * @property {module:api/VoiceBasicCallControlApi}
     */
    VoiceBasicCallControlApi: VoiceBasicCallControlApi,
    /**
     * The VoiceCallForwardingApi service constructor.
     * @property {module:api/VoiceCallForwardingApi}
     */
    VoiceCallForwardingApi: VoiceCallForwardingApi,
    /**
     * The VoiceCallMonitoringApi service constructor.
     * @property {module:api/VoiceCallMonitoringApi}
     */
    VoiceCallMonitoringApi: VoiceCallMonitoringApi,
    /**
     * The VoiceCallRecordingApi service constructor.
     * @property {module:api/VoiceCallRecordingApi}
     */
    VoiceCallRecordingApi: VoiceCallRecordingApi,
    /**
     * The VoiceConferencesAndTransfersApi service constructor.
     * @property {module:api/VoiceConferencesAndTransfersApi}
     */
    VoiceConferencesAndTransfersApi: VoiceConferencesAndTransfersApi,
    /**
     * The VoiceOtherCallControlApi service constructor.
     * @property {module:api/VoiceOtherCallControlApi}
     */
    VoiceOtherCallControlApi: VoiceOtherCallControlApi,
    /**
     * The VoiceUserEventApi service constructor.
     * @property {module:api/VoiceUserEventApi}
     */
    VoiceUserEventApi: VoiceUserEventApi,
    /**
     * The VoiceUserdataApi service constructor.
     * @property {module:api/VoiceUserdataApi}
     */
    VoiceUserdataApi: VoiceUserdataApi
  };

  return exports;
}));
