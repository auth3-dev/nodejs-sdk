// source: identity/admin/admin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.ClientType', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.MatchCase', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.GrantType', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.ResponseType', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.SubjectType', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.AttributeCase', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse', null, global);
goog.exportSymbol('proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.repeatedFields_, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.displayName = 'proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    connectionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    schemaId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest;
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Struct data = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connection_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string schema_id = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityRequest.prototype.setSchemaId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse;
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdentityResponse.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identitiesList: jspb.Message.toObjectList(msg.getIdentitiesList(),
    proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.deserializeBinaryFromReader);
      msg.addIdentities(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock = {
  UNLOCKED: 0,
  ADMIN_LOCKED: 1
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mainIdentifier: jspb.Message.getFieldWithDefault(msg, 4, ""),
    schemaId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    lock: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainIdentifier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    case 6:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock} */ (reader.readEnum());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMainIdentifier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLock();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string main_identifier = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getMainIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setMainIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string schema_id = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setSchemaId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Lock lock = 6;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.getLock = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Lock} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity.prototype.setLock = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated Identity identities = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.getIdentitiesList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.setIdentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.addIdentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.Identity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.clearIdentitiesList = function() {
  return this.setIdentitiesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 total_size = 3;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string identity_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mainIdentifier: jspb.Message.getFieldWithDefault(msg, 4, ""),
    traitsId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressesIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    credentialsIdsMap: (f = msg.getCredentialsIdsMap()) ? f.toObject(includeInstance, undefined) : [],
    schemaId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lock: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainIdentifier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraitsId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressesIds(value);
      break;
    case 7:
      var value = msg.getCredentialsIdsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock} */ (reader.readEnum());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMainIdentifier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTraitsId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressesIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCredentialsIdsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLock();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock = {
  UNLOCKED: 0,
  ADMIN_LOCKED: 1
};

/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string main_identifier = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getMainIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setMainIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string traits_id = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getTraitsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setTraitsId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string addresses_ids = 6;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getAddressesIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setAddressesIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.addAddressesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.clearAddressesIdsList = function() {
  return this.setAddressesIdsList([]);
};


/**
 * map<string, string> credentials_ids = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getCredentialsIdsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.clearCredentialsIdsMap = function() {
  this.getCredentialsIdsMap().clear();
  return this;};


/**
 * optional string schema_id = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setSchemaId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Lock lock = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.getLock = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.Lock} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityResponse.prototype.setLock = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attribute: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    connectionId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttribute(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttribute();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string attribute = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.getAttribute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string connection_id = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: (f = msg.getIdentity()) && proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.deserializeBinaryFromReader);
      msg.setIdentity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mainIdentifier: jspb.Message.getFieldWithDefault(msg, 4, ""),
    traitsId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressesIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    credentialsIdsMap: (f = msg.getCredentialsIdsMap()) ? f.toObject(includeInstance, undefined) : [],
    schemaId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lock: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainIdentifier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraitsId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressesIds(value);
      break;
    case 7:
      var value = msg.getCredentialsIdsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock} */ (reader.readEnum());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMainIdentifier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTraitsId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressesIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCredentialsIdsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLock();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock = {
  UNLOCKED: 0,
  ADMIN_LOCKED: 1
};

/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string main_identifier = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getMainIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setMainIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string traits_id = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getTraitsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setTraitsId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string addresses_ids = 6;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getAddressesIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setAddressesIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.addAddressesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.clearAddressesIdsList = function() {
  return this.setAddressesIdsList([]);
};


/**
 * map<string, string> credentials_ids = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getCredentialsIdsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.clearCredentialsIdsMap = function() {
  this.getCredentialsIdsMap().clear();
  return this;};


/**
 * optional string schema_id = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setSchemaId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Lock lock = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.getLock = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.Lock} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity.prototype.setLock = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Identity identity = 1;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.getIdentity = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity, 1));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.Identity|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.setIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.clearIdentity = function() {
  return this.setIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityByIdentifierResponse.prototype.hasIdentity = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    attribute: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttribute(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttribute();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string attribute = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.getAttribute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    identitiesList: jspb.Message.toObjectList(msg.getIdentitiesList(),
    proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.deserializeBinaryFromReader);
      msg.addIdentities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    mainIdentifier: jspb.Message.getFieldWithDefault(msg, 4, ""),
    traitsId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    addressesIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    credentialsIdsMap: (f = msg.getCredentialsIdsMap()) ? f.toObject(includeInstance, undefined) : [],
    schemaId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lock: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMainIdentifier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraitsId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddressesIds(value);
      break;
    case 7:
      var value = msg.getCredentialsIdsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchemaId(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock} */ (reader.readEnum());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMainIdentifier();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTraitsId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddressesIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getCredentialsIdsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getSchemaId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLock();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock = {
  UNLOCKED: 0,
  ADMIN_LOCKED: 1
};

/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string main_identifier = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getMainIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setMainIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string traits_id = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getTraitsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setTraitsId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string addresses_ids = 6;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getAddressesIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setAddressesIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.addAddressesIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.clearAddressesIdsList = function() {
  return this.setAddressesIdsList([]);
};


/**
 * map<string, string> credentials_ids = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getCredentialsIdsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.clearCredentialsIdsMap = function() {
  this.getCredentialsIdsMap().clear();
  return this;};


/**
 * optional string schema_id = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getSchemaId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setSchemaId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Lock lock = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.getLock = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.Lock} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity.prototype.setLock = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * repeated Identity identities = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.getIdentitiesList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.setIdentitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.addIdentities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.Identity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse.prototype.clearIdentitiesList = function() {
  return this.setIdentitiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lock: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock} */ (reader.readEnum());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLock();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock = {
  UNLOCKED: 0,
  ADMIN_LOCKED: 1
};

/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Lock lock = 2;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.getLock = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.Lock} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest.prototype.setLock = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialsMap: (f = msg.getCredentialsMap()) ? f.toObject(includeInstance, proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getCredentialsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.deserializeBinaryFromReader, "", new proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.serializeBinaryToWriter);
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.toObject = function(includeInstance, msg) {
  var f, obj = {
    credentialId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    identityId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    configured: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential;
  return proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfigured(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCredentialId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConfigured();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string credential_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getCredentialId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setCredentialId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string identity_id = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool configured = 7;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.getConfigured = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential.prototype.setConfigured = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * map<string, Credential> credentials = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.prototype.getCredentialsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.Credential));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetCredentialsResponse.prototype.clearCredentialsMap = function() {
  this.getCredentialsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    connectionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    identityId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Struct data = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connection_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string identity_id = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buttonImageUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 6, 0),
    oidcDiscoveryUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mfaList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    scopes: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest;
  return proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonImageUrl(value);
      break;
    case 6:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOidcDiscoveryUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addMfa(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getButtonImageUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOidcDiscoveryUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMfaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getScopes();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers = {
  NONE: 0,
  OPENID: 1,
  AMAZON: 2,
  BITBUCKET: 3,
  BOX: 4,
  DAILYMOTION: 5,
  DEEZER: 6,
  DIGITALOCEAN: 7,
  DISCORD: 8,
  DROPBOX: 9,
  EVEONLINE: 10,
  FACEBOOK: 11,
  FITBIT: 12,
  GITEA: 13,
  GITHUB: 14,
  GITLAB: 15,
  GOOGLE: 16,
  SHOPIFY: 18,
  SOUNDCLOUD: 19,
  SPOTIFY: 20,
  STEAM: 21,
  STRIPE: 22,
  TWITCH: 23,
  UBER: 24,
  WEPAY: 25,
  YAHOO: 26,
  YAMMER: 27,
  HEROKU: 28,
  INSTAGRAM: 29,
  INTERCOM: 30,
  KAKAO: 31,
  LASTFM: 32,
  LINKEDIN: 33,
  LINE: 34,
  ONEDRIVE: 35,
  AZUREAD: 36,
  MICROSOFTONLINE: 37,
  BATTLENET: 38,
  PAYPAL: 39,
  TWITTER: 40,
  SALESFORCE: 41,
  TYPETALK: 42,
  SLACK: 43,
  MEETUP: 44,
  XERO: 46,
  VK: 47,
  NAVER: 48,
  YANDEX: 49,
  NEXTCLOUD: 50,
  APPLE: 52,
  STRAVA: 53
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types = {
  UNSET: 0,
  PASSWORD: 1,
  OTP: 2,
  TOTP: 3,
  OIDC: 4
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_secret = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string button_image_url = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getButtonImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setButtonImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Providers provider = 6;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getProvider = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Providers} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string oidc_discovery_url = 7;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getOidcDiscoveryUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setOidcDiscoveryUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string mfa = 8;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getMfaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setMfaList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.addMfa = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.clearMfaList = function() {
  return this.setMfaList([]);
};


/**
 * optional Types type = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.Types} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string scopes = 10;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.getScopes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionRequest.prototype.setScopes = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse;
  return proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateConnectionResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionsList: jspb.Message.toObjectList(msg.getConnectionsList(),
    proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.deserializeBinaryFromReader);
      msg.addConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers = {
  NONE: 0,
  OPENID: 1,
  AMAZON: 2,
  BITBUCKET: 3,
  BOX: 4,
  DAILYMOTION: 5,
  DEEZER: 6,
  DIGITALOCEAN: 7,
  DISCORD: 8,
  DROPBOX: 9,
  EVEONLINE: 10,
  FACEBOOK: 11,
  FITBIT: 12,
  GITEA: 13,
  GITHUB: 14,
  GITLAB: 15,
  GOOGLE: 16,
  SHOPIFY: 18,
  SOUNDCLOUD: 19,
  SPOTIFY: 20,
  STEAM: 21,
  STRIPE: 22,
  TWITCH: 23,
  UBER: 24,
  WEPAY: 25,
  YAHOO: 26,
  YAMMER: 27,
  HEROKU: 28,
  INSTAGRAM: 29,
  INTERCOM: 30,
  KAKAO: 31,
  LASTFM: 32,
  LINKEDIN: 33,
  LINE: 34,
  ONEDRIVE: 35,
  AZUREAD: 36,
  MICROSOFTONLINE: 37,
  BATTLENET: 38,
  PAYPAL: 39,
  TWITTER: 40,
  SALESFORCE: 41,
  TYPETALK: 42,
  SLACK: 43,
  MEETUP: 44,
  XERO: 46,
  VK: 47,
  NAVER: 48,
  YANDEX: 49,
  NEXTCLOUD: 50,
  APPLE: 52,
  STRAVA: 53
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types = {
  UNSET: 0,
  PASSWORD: 1,
  OTP: 2,
  TOTP: 3,
  OIDC: 4
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes = {
  PURPOSE_UNKNOWN: 0,
  PURPOSE_MAIN_FACTOR: 1,
  PURPOSE_SECOND_FACTOR: 2
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buttonImageUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 6, 0),
    oidcDiscoveryUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mfaList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    id: jspb.Message.getFieldWithDefault(msg, 10, ""),
    scopes: jspb.Message.getFieldWithDefault(msg, 11, ""),
    purpose: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection;
  return proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonImageUrl(value);
      break;
    case 6:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOidcDiscoveryUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addMfa(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopes(value);
      break;
    case 12:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes} */ (reader.readEnum());
      msg.setPurpose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getButtonImageUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOidcDiscoveryUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMfaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getScopes();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPurpose();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_secret = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string button_image_url = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getButtonImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setButtonImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Providers provider = 6;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getProvider = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Providers} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string oidc_discovery_url = 7;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getOidcDiscoveryUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setOidcDiscoveryUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string mfa = 8;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getMfaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setMfaList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.addMfa = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.clearMfaList = function() {
  return this.setMfaList([]);
};


/**
 * optional Types type = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Types} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string id = 10;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string scopes = 11;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getScopes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setScopes = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional Purposes purpose = 12;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.getPurpose = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Purposes} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection.prototype.setPurpose = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * repeated Connection connections = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.getConnectionsList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.setConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection}
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.addConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.Connection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetConnectionsResponse.prototype.clearConnectionsList = function() {
  return this.setConnectionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buttonImageUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    provider: jspb.Message.getFieldWithDefault(msg, 6, 0),
    oidcDiscoveryUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    mfaList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    id: jspb.Message.getFieldWithDefault(msg, 10, ""),
    scopes: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setButtonImageUrl(value);
      break;
    case 6:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers} */ (reader.readEnum());
      msg.setProvider(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOidcDiscoveryUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addMfa(value);
      break;
    case 9:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setScopes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getButtonImageUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProvider();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOidcDiscoveryUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMfaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getScopes();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers = {
  NONE: 0,
  OPENID: 1,
  AMAZON: 2,
  BITBUCKET: 3,
  BOX: 4,
  DAILYMOTION: 5,
  DEEZER: 6,
  DIGITALOCEAN: 7,
  DISCORD: 8,
  DROPBOX: 9,
  EVEONLINE: 10,
  FACEBOOK: 11,
  FITBIT: 12,
  GITEA: 13,
  GITHUB: 14,
  GITLAB: 15,
  GOOGLE: 16,
  SHOPIFY: 18,
  SOUNDCLOUD: 19,
  SPOTIFY: 20,
  STEAM: 21,
  STRIPE: 22,
  TWITCH: 23,
  UBER: 24,
  WEPAY: 25,
  YAHOO: 26,
  YAMMER: 27,
  HEROKU: 28,
  INSTAGRAM: 29,
  INTERCOM: 30,
  KAKAO: 31,
  LASTFM: 32,
  LINKEDIN: 33,
  LINE: 34,
  ONEDRIVE: 35,
  AZUREAD: 36,
  MICROSOFTONLINE: 37,
  BATTLENET: 38,
  PAYPAL: 39,
  TWITTER: 40,
  SALESFORCE: 41,
  TYPETALK: 42,
  SLACK: 43,
  MEETUP: 44,
  XERO: 46,
  VK: 47,
  NAVER: 48,
  YANDEX: 49,
  NEXTCLOUD: 50,
  APPLE: 52,
  STRAVA: 53
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types = {
  UNSET: 0,
  PASSWORD: 1,
  OTP: 2,
  TOTP: 3,
  OIDC: 4
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_secret = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string button_image_url = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getButtonImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setButtonImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Providers provider = 6;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getProvider = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Providers} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setProvider = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string oidc_discovery_url = 7;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getOidcDiscoveryUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setOidcDiscoveryUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string mfa = 8;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getMfaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setMfaList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.addMfa = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.clearMfaList = function() {
  return this.setMfaList([]);
};


/**
 * optional Types type = 9;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.Types} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string id = 10;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string scopes = 11;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.getScopes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest.prototype.setScopes = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientsList: jspb.Message.toObjectList(msg.getClientsList(),
    proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.deserializeBinaryFromReader);
      msg.addClients(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.repeatedFields_ = [1,2,9,13,20,21,23,24];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowedCorsOriginsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    audienceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    backchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    backchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientSecretExpiresAt: jspb.Message.getFieldWithDefault(msg, 7, 0),
    clientUri: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contactsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    frontchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    frontchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 12, ""),
    grantTypesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    jwks: (f = msg.getJwks()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    jwksUri: jspb.Message.getFieldWithDefault(msg, 15, ""),
    logoUri: jspb.Message.getFieldWithDefault(msg, 16, ""),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    owner: jspb.Message.getFieldWithDefault(msg, 18, ""),
    policyUri: jspb.Message.getFieldWithDefault(msg, 19, ""),
    postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    requestObjectSigningAlg: jspb.Message.getFieldWithDefault(msg, 22, 0),
    requestUrisList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    responseTypesList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    scope: jspb.Message.getFieldWithDefault(msg, 25, ""),
    sectorIdentifierUri: jspb.Message.getFieldWithDefault(msg, 26, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    tokenEndpointAuthMethod: jspb.Message.getFieldWithDefault(msg, 28, 0),
    tokenEndpointAuthSigningAlg: jspb.Message.getFieldWithDefault(msg, 29, 0),
    tosUri: jspb.Message.getFieldWithDefault(msg, 30, ""),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userinfoSignedResponseAlg: jspb.Message.getFieldWithDefault(msg, 32, 0),
    clientType: jspb.Message.getFieldWithDefault(msg, 33, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client;
  return proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedCorsOrigins(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackchannelLogoutSessionRequired(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackchannelLogoutUri(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setClientSecretExpiresAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUri(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addContacts(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontchannelLogoutSessionRequired(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrontchannelLogoutUri(value);
      break;
    case 13:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 14:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setJwks(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwksUri(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogoUri(value);
      break;
    case 17:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyUri(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 22:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (reader.readEnum());
      msg.setRequestObjectSigningAlg(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestUris(value);
      break;
    case 24:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSectorIdentifierUri(value);
      break;
    case 27:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
      break;
    case 28:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (reader.readEnum());
      msg.setTokenEndpointAuthMethod(value);
      break;
    case 29:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (reader.readEnum());
      msg.setTokenEndpointAuthSigningAlg(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setTosUri(value);
      break;
    case 31:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 32:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (reader.readEnum());
      msg.setUserinfoSignedResponseAlg(value);
      break;
    case 33:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.ClientType} */ (reader.readEnum());
      msg.setClientType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedCorsOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getBackchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBackchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientSecretExpiresAt();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getClientUri();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFrontchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getFrontchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = message.getJwks();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getJwksUri();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLogoUri();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPolicyUri();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getRequestObjectSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getRequestUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      24,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSectorIdentifierUri();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getTokenEndpointAuthMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getTokenEndpointAuthSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = message.getTosUri();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserinfoSignedResponseAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = message.getClientType();
  if (f !== 0.0) {
    writer.writeEnum(
      33,
      f
    );
  }
};


/**
 * repeated string allowed_cors_origins = 1;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getAllowedCorsOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setAllowedCorsOriginsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addAllowedCorsOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearAllowedCorsOriginsList = function() {
  return this.setAllowedCorsOriginsList([]);
};


/**
 * repeated string audience = 2;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};


/**
 * optional bool backchannel_logout_session_required = 3;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getBackchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setBackchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string backchannel_logout_uri = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getBackchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setBackchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_id = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string client_name = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 client_secret_expires_at = 7;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getClientSecretExpiresAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setClientSecretExpiresAt = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string client_uri = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getClientUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setClientUri = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string contacts = 9;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getContactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setContactsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addContacts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool frontchannel_logout_session_required = 11;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getFrontchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setFrontchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string frontchannel_logout_uri = 12;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getFrontchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setFrontchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated GrantType grant_types = 13;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GrantType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional google.protobuf.Struct jwks = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getJwks = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setJwks = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearJwks = function() {
  return this.setJwks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.hasJwks = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string jwks_uri = 15;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getJwksUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setJwksUri = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string logo_uri = 16;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getLogoUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setLogoUri = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Struct metadata = 17;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 17));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string owner = 18;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string policy_uri = 19;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getPolicyUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setPolicyUri = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated string post_logout_redirect_uris = 20;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * repeated string redirect_uris = 21;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * optional RequestObjectSigningAlg request_object_signing_alg = 22;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getRequestObjectSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setRequestObjectSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * repeated string request_uris = 23;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getRequestUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setRequestUrisList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addRequestUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearRequestUrisList = function() {
  return this.setRequestUrisList([]);
};


/**
 * repeated ResponseType response_types = 24;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.ResponseType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * optional string scope = 25;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string sector_identifier_uri = 26;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getSectorIdentifierUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setSectorIdentifierUri = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional SubjectType subject_type = 27;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.SubjectType}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getSubjectType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional TokenEndpointAuthMethod token_endpoint_auth_method = 28;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getTokenEndpointAuthMethod = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setTokenEndpointAuthMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional TokenEndpointAuthSigningAlg token_endpoint_auth_signing_alg = 29;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getTokenEndpointAuthSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setTokenEndpointAuthSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 29, value);
};


/**
 * optional string tos_uri = 30;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getTosUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setTosUri = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 31;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 31));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional UserinfoSignedResponseAlg userinfo_signed_response_alg = 32;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getUserinfoSignedResponseAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setUserinfoSignedResponseAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 32, value);
};


/**
 * optional ClientType client_type = 33;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.ClientType}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.getClientType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.ClientType} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.ClientType} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client.prototype.setClientType = function(value) {
  return jspb.Message.setProto3EnumField(this, 33, value);
};


/**
 * repeated Client clients = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.getClientsList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.setClientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client}
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.addClients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.Client, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse.prototype.clearClientsList = function() {
  return this.setClientsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.repeatedFields_ = [1,2,9,13,20,21,23,24];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowedCorsOriginsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    audienceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    backchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    backchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientUri: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contactsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    frontchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    frontchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 12, ""),
    grantTypesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    jwks: (f = msg.getJwks()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    jwksUri: jspb.Message.getFieldWithDefault(msg, 15, ""),
    logoUri: jspb.Message.getFieldWithDefault(msg, 16, ""),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    owner: jspb.Message.getFieldWithDefault(msg, 18, ""),
    policyUri: jspb.Message.getFieldWithDefault(msg, 19, ""),
    postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    requestObjectSigningAlg: jspb.Message.getFieldWithDefault(msg, 22, 0),
    requestUrisList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    responseTypesList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    scope: jspb.Message.getFieldWithDefault(msg, 25, ""),
    sectorIdentifierUri: jspb.Message.getFieldWithDefault(msg, 26, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    tokenEndpointAuthMethod: jspb.Message.getFieldWithDefault(msg, 28, 0),
    tokenEndpointAuthSigningAlg: jspb.Message.getFieldWithDefault(msg, 29, 0),
    tosUri: jspb.Message.getFieldWithDefault(msg, 30, ""),
    userinfoSignedResponseAlg: jspb.Message.getFieldWithDefault(msg, 31, 0),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 32, ""),
    clientType: jspb.Message.getFieldWithDefault(msg, 33, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest;
  return proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedCorsOrigins(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackchannelLogoutSessionRequired(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackchannelLogoutUri(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUri(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addContacts(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontchannelLogoutSessionRequired(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrontchannelLogoutUri(value);
      break;
    case 13:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 14:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setJwks(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwksUri(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogoUri(value);
      break;
    case 17:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyUri(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 22:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (reader.readEnum());
      msg.setRequestObjectSigningAlg(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestUris(value);
      break;
    case 24:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSectorIdentifierUri(value);
      break;
    case 27:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
      break;
    case 28:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (reader.readEnum());
      msg.setTokenEndpointAuthMethod(value);
      break;
    case 29:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (reader.readEnum());
      msg.setTokenEndpointAuthSigningAlg(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setTosUri(value);
      break;
    case 31:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (reader.readEnum());
      msg.setUserinfoSignedResponseAlg(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 33:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.ClientType} */ (reader.readEnum());
      msg.setClientType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedCorsOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getBackchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBackchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientUri();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getFrontchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getFrontchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = message.getJwks();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getJwksUri();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLogoUri();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPolicyUri();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getRequestObjectSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getRequestUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      24,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSectorIdentifierUri();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getTokenEndpointAuthMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getTokenEndpointAuthSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = message.getTosUri();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getUserinfoSignedResponseAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getClientType();
  if (f !== 0.0) {
    writer.writeEnum(
      33,
      f
    );
  }
};


/**
 * repeated string allowed_cors_origins = 1;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getAllowedCorsOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setAllowedCorsOriginsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addAllowedCorsOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearAllowedCorsOriginsList = function() {
  return this.setAllowedCorsOriginsList([]);
};


/**
 * repeated string audience = 2;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};


/**
 * optional bool backchannel_logout_session_required = 3;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getBackchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setBackchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string backchannel_logout_uri = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getBackchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setBackchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_name = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string client_uri = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getClientUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setClientUri = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string contacts = 9;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getContactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setContactsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addContacts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional bool frontchannel_logout_session_required = 11;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getFrontchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setFrontchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string frontchannel_logout_uri = 12;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getFrontchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setFrontchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated GrantType grant_types = 13;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GrantType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional google.protobuf.Struct jwks = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getJwks = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setJwks = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearJwks = function() {
  return this.setJwks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.hasJwks = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string jwks_uri = 15;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getJwksUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setJwksUri = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string logo_uri = 16;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getLogoUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setLogoUri = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Struct metadata = 17;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 17));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string owner = 18;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string policy_uri = 19;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getPolicyUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setPolicyUri = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated string post_logout_redirect_uris = 20;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * repeated string redirect_uris = 21;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * optional RequestObjectSigningAlg request_object_signing_alg = 22;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getRequestObjectSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setRequestObjectSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * repeated string request_uris = 23;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getRequestUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setRequestUrisList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addRequestUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearRequestUrisList = function() {
  return this.setRequestUrisList([]);
};


/**
 * repeated ResponseType response_types = 24;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.ResponseType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * optional string scope = 25;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string sector_identifier_uri = 26;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getSectorIdentifierUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setSectorIdentifierUri = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional SubjectType subject_type = 27;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.SubjectType}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getSubjectType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional TokenEndpointAuthMethod token_endpoint_auth_method = 28;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getTokenEndpointAuthMethod = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setTokenEndpointAuthMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional TokenEndpointAuthSigningAlg token_endpoint_auth_signing_alg = 29;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getTokenEndpointAuthSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setTokenEndpointAuthSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 29, value);
};


/**
 * optional string tos_uri = 30;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getTosUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setTosUri = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional UserinfoSignedResponseAlg userinfo_signed_response_alg = 31;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getUserinfoSignedResponseAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setUserinfoSignedResponseAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 31, value);
};


/**
 * optional string client_secret = 32;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional ClientType client_type = 33;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.ClientType}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.getClientType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.ClientType} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.ClientType} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest.prototype.setClientType = function(value) {
  return jspb.Message.setProto3EnumField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse;
  return proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.repeatedFields_ = [1,2,9,13,20,21,23,24];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowedCorsOriginsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    audienceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    backchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    backchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientUri: jspb.Message.getFieldWithDefault(msg, 8, ""),
    contactsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    frontchannelLogoutSessionRequired: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    frontchannelLogoutUri: jspb.Message.getFieldWithDefault(msg, 12, ""),
    grantTypesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    jwks: (f = msg.getJwks()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    jwksUri: jspb.Message.getFieldWithDefault(msg, 15, ""),
    logoUri: jspb.Message.getFieldWithDefault(msg, 16, ""),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    owner: jspb.Message.getFieldWithDefault(msg, 18, ""),
    policyUri: jspb.Message.getFieldWithDefault(msg, 19, ""),
    postLogoutRedirectUrisList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    redirectUrisList: (f = jspb.Message.getRepeatedField(msg, 21)) == null ? undefined : f,
    requestObjectSigningAlg: jspb.Message.getFieldWithDefault(msg, 22, 0),
    requestUrisList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    responseTypesList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    scope: jspb.Message.getFieldWithDefault(msg, 25, ""),
    sectorIdentifierUri: jspb.Message.getFieldWithDefault(msg, 26, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 27, 0),
    tokenEndpointAuthMethod: jspb.Message.getFieldWithDefault(msg, 28, 0),
    tokenEndpointAuthSigningAlg: jspb.Message.getFieldWithDefault(msg, 29, 0),
    tosUri: jspb.Message.getFieldWithDefault(msg, 30, ""),
    userinfoSignedResponseAlg: jspb.Message.getFieldWithDefault(msg, 31, 0),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 32, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 33, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedCorsOrigins(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAudience(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBackchannelLogoutSessionRequired(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBackchannelLogoutUri(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUri(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addContacts(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrontchannelLogoutSessionRequired(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrontchannelLogoutUri(value);
      break;
    case 13:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (reader.readPackedEnum());
      msg.setGrantTypesList(value);
      break;
    case 14:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setJwks(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwksUri(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogoUri(value);
      break;
    case 17:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyUri(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addPostLogoutRedirectUris(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.addRedirectUris(value);
      break;
    case 22:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (reader.readEnum());
      msg.setRequestObjectSigningAlg(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.addRequestUris(value);
      break;
    case 24:
      var value = /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (reader.readPackedEnum());
      msg.setResponseTypesList(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSectorIdentifierUri(value);
      break;
    case 27:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
      break;
    case 28:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (reader.readEnum());
      msg.setTokenEndpointAuthMethod(value);
      break;
    case 29:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (reader.readEnum());
      msg.setTokenEndpointAuthSigningAlg(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setTosUri(value);
      break;
    case 31:
      var value = /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (reader.readEnum());
      msg.setUserinfoSignedResponseAlg(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedCorsOriginsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getAudienceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getBackchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBackchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientUri();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getContactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getFrontchannelLogoutSessionRequired();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getFrontchannelLogoutUri();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getGrantTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = message.getJwks();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getJwksUri();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLogoUri();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPolicyUri();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPostLogoutRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getRedirectUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      21,
      f
    );
  }
  f = message.getRequestObjectSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getRequestUrisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      23,
      f
    );
  }
  f = message.getResponseTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      24,
      f
    );
  }
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getSectorIdentifierUri();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
  f = message.getTokenEndpointAuthMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      28,
      f
    );
  }
  f = message.getTokenEndpointAuthSigningAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      29,
      f
    );
  }
  f = message.getTosUri();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getUserinfoSignedResponseAlg();
  if (f !== 0.0) {
    writer.writeEnum(
      31,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
};


/**
 * repeated string allowed_cors_origins = 1;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getAllowedCorsOriginsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setAllowedCorsOriginsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addAllowedCorsOrigins = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearAllowedCorsOriginsList = function() {
  return this.setAllowedCorsOriginsList([]);
};


/**
 * repeated string audience = 2;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getAudienceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setAudienceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addAudience = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearAudienceList = function() {
  return this.setAudienceList([]);
};


/**
 * optional bool backchannel_logout_session_required = 3;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getBackchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setBackchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string backchannel_logout_uri = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getBackchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setBackchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_name = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string client_uri = 8;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getClientUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setClientUri = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string contacts = 9;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getContactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setContactsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addContacts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearContactsList = function() {
  return this.setContactsList([]);
};


/**
 * optional bool frontchannel_logout_session_required = 11;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getFrontchannelLogoutSessionRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setFrontchannelLogoutSessionRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string frontchannel_logout_uri = 12;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getFrontchannelLogoutUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setFrontchannelLogoutUri = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated GrantType grant_types = 13;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getGrantTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GrantType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setGrantTypesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GrantType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addGrantTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearGrantTypesList = function() {
  return this.setGrantTypesList([]);
};


/**
 * optional google.protobuf.Struct jwks = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getJwks = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setJwks = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearJwks = function() {
  return this.setJwks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.hasJwks = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string jwks_uri = 15;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getJwksUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setJwksUri = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string logo_uri = 16;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getLogoUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setLogoUri = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Struct metadata = 17;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 17));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string owner = 18;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string policy_uri = 19;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getPolicyUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setPolicyUri = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * repeated string post_logout_redirect_uris = 20;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getPostLogoutRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setPostLogoutRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addPostLogoutRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearPostLogoutRedirectUrisList = function() {
  return this.setPostLogoutRedirectUrisList([]);
};


/**
 * repeated string redirect_uris = 21;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getRedirectUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 21));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setRedirectUrisList = function(value) {
  return jspb.Message.setField(this, 21, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addRedirectUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 21, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearRedirectUrisList = function() {
  return this.setRedirectUrisList([]);
};


/**
 * optional RequestObjectSigningAlg request_object_signing_alg = 22;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getRequestObjectSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setRequestObjectSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * repeated string request_uris = 23;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getRequestUrisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setRequestUrisList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addRequestUris = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearRequestUrisList = function() {
  return this.setRequestUrisList([]);
};


/**
 * repeated ResponseType response_types = 24;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getResponseTypesList = function() {
  return /** @type {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.ResponseType>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setResponseTypesList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.ResponseType} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.addResponseTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.clearResponseTypesList = function() {
  return this.setResponseTypesList([]);
};


/**
 * optional string scope = 25;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string sector_identifier_uri = 26;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getSectorIdentifierUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setSectorIdentifierUri = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional SubjectType subject_type = 27;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.SubjectType}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getSubjectType = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.SubjectType} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


/**
 * optional TokenEndpointAuthMethod token_endpoint_auth_method = 28;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getTokenEndpointAuthMethod = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setTokenEndpointAuthMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 28, value);
};


/**
 * optional TokenEndpointAuthSigningAlg token_endpoint_auth_signing_alg = 29;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getTokenEndpointAuthSigningAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setTokenEndpointAuthSigningAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 29, value);
};


/**
 * optional string tos_uri = 30;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getTosUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setTosUri = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional UserinfoSignedResponseAlg userinfo_signed_response_alg = 31;
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getUserinfoSignedResponseAlg = function() {
  return /** @type {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setUserinfoSignedResponseAlg = function(value) {
  return jspb.Message.setProto3EnumField(this, 31, value);
};


/**
 * optional string client_secret = 32;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string client_id = 33;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_secret = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.getClientSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse.prototype.setClientSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: jspb.Message.toObjectList(msg.getAddressesList(),
    proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.deserializeBinaryFromReader);
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    identityId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    idSchemaKey: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address;
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdSchemaKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIdSchemaKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string identity_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool verified = 5;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string id_schema_key = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.getIdSchemaKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address.prototype.setIdSchemaKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Address addresses = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.getAddressesList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.setAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.addAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.Address, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressesResponse.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.MatchCase = {
  MATCH_NOT_SET: 0,
  ID: 1,
  VERIFICATION: 2
};

/**
 * @return {proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.MatchCase}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.getMatchCase = function() {
  return /** @type {proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.MatchCase} */(jspb.Message.computeOneofCase(this, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    verification: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.clearId = function() {
  return jspb.Message.setOneofField(this, 1, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string verification = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.getVerification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.setVerification = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.clearVerification = function() {
  return jspb.Message.setOneofField(this, 2, proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressRequest.prototype.hasVerification = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    identityId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    idSchemaKey: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdSchemaKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIdSchemaKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string identity_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool verified = 5;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string id_schema_key = 6;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.getIdSchemaKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetAddressResponse.prototype.setIdSchemaKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.AttributeCase = {
  ATTRIBUTE_NOT_SET: 0,
  VERIFIED: 2,
  ADDRESS: 3
};

/**
 * @return {proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.AttributeCase}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.getAttributeCase = function() {
  return /** @type {proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.AttributeCase} */(jspb.Message.computeOneofCase(this, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool verified = 2;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.setVerified = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.clearVerified = function() {
  return jspb.Message.setOneofField(this, 2, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.hasVerified = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.setAddress = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.clearAddress = function() {
  return jspb.Message.setOneofField(this, 3, proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressRequest.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    traits: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraits();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string traits = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.prototype.getTraits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetTraitsResponse.prototype.setTraits = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    traits: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTraits();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string traits = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.getTraits = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest.prototype.setTraits = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identity_id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    attemptsList: jspb.Message.toObjectList(msg.getAttemptsList(),
    proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.deserializeBinaryFromReader);
      msg.addAttempts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttemptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    identityId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, ""),
    authenticationMethodsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthenticationMethods(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthenticationMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string identity_id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string authentication_methods = 4;
 * @return {!Array<string>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getAuthenticationMethodsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setAuthenticationMethodsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.addAuthenticationMethods = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.clearAuthenticationMethodsList = function() {
  return this.setAuthenticationMethodsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp expires_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Attempt attempts = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.getAttemptsList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.setAttemptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.addAttempts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.Attempt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse.prototype.clearAttemptsList = function() {
  return this.setAttemptsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct content = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jsonschemasList: jspb.Message.toObjectList(msg.getJsonschemasList(),
    proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.deserializeBinaryFromReader);
      msg.addJsonschemas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJsonschemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct content = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated JsonSchema jsonschemas = 1;
 * @return {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.getJsonschemasList = function() {
  return /** @type{!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema, 1));
};


/**
 * @param {!Array<!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema>} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.setJsonschemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.addJsonschemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.JsonSchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse.prototype.clearJsonschemasList = function() {
  return this.setJsonschemasList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct content = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct content = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_default = 6;
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: (f = msg.getContent()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct content = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.getContent = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse;
  return proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    welcome: (f = msg.getWelcome()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(includeInstance, f),
    accountVerification: (f = msg.getAccountVerification()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(includeInstance, f),
    accountRecovery: (f = msg.getAccountRecovery()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(includeInstance, f),
    accountRecovered: (f = msg.getAccountRecovered()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(includeInstance, f),
    otp: (f = msg.getOtp()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(includeInstance, f),
    smtp: (f = msg.getSmtp()) && proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.toObject(includeInstance, f),
    projectId: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader);
      msg.setWelcome(value);
      break;
    case 2:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountVerification(value);
      break;
    case 3:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountRecovery(value);
      break;
    case 4:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountRecovered(value);
      break;
    case 5:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader);
      msg.setOtp(value);
      break;
    case 6:
      var value = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.deserializeBinaryFromReader);
      msg.setSmtp(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWelcome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountVerification();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountRecovery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountRecovered();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getOtp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmtp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.serializeBinaryToWriter
    );
  }
  f = message.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate;
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    smtpHost: jspb.Message.getFieldWithDefault(msg, 2, ""),
    smtpPort: jspb.Message.getFieldWithDefault(msg, 3, 0),
    smtpUsername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    smtpPassword: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender;
  return proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSmtpPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmtpHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmtpPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSmtpUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSmtpPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string email_address = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string smtp_host = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.getSmtpHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.setSmtpHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 smtp_port = 3;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.getSmtpPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.setSmtpPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string smtp_username = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.getSmtpUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.setSmtpUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string smtp_password = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.getSmtpPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender.prototype.setSmtpPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional EmailTemplate welcome = 1;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getWelcome = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, 1));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setWelcome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearWelcome = function() {
  return this.setWelcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasWelcome = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EmailTemplate account_verification = 2;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getAccountVerification = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, 2));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setAccountVerification = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearAccountVerification = function() {
  return this.setAccountVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasAccountVerification = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmailTemplate account_recovery = 3;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getAccountRecovery = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, 3));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setAccountRecovery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearAccountRecovery = function() {
  return this.setAccountRecovery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasAccountRecovery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EmailTemplate account_recovered = 4;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getAccountRecovered = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, 4));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setAccountRecovered = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearAccountRecovered = function() {
  return this.setAccountRecovered(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasAccountRecovered = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EmailTemplate otp = 5;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getOtp = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate, 5));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setOtp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearOtp = function() {
  return this.setOtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasOtp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EmailSender smtp = 6;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getSmtp = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender, 6));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.EmailSender|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setSmtp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.clearSmtp = function() {
  return this.setSmtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.hasSmtp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string project_id = 7;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse.prototype.setProjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    welcome: (f = msg.getWelcome()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(includeInstance, f),
    accountVerification: (f = msg.getAccountVerification()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(includeInstance, f),
    accountRecovery: (f = msg.getAccountRecovery()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(includeInstance, f),
    accountRecovered: (f = msg.getAccountRecovered()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(includeInstance, f),
    otp: (f = msg.getOtp()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(includeInstance, f),
    smtp: (f = msg.getSmtp()) && proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader);
      msg.setWelcome(value);
      break;
    case 2:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountVerification(value);
      break;
    case 3:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountRecovery(value);
      break;
    case 4:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader);
      msg.setAccountRecovered(value);
      break;
    case 5:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader);
      msg.setOtp(value);
      break;
    case 6:
      var value = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender;
      reader.readMessage(value,proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.deserializeBinaryFromReader);
      msg.setSmtp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWelcome();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountVerification();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountRecovery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getAccountRecovered();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getOtp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter
    );
  }
  f = message.getSmtp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string content = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subject = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    smtpHost: jspb.Message.getFieldWithDefault(msg, 2, ""),
    smtpPort: jspb.Message.getFieldWithDefault(msg, 3, 0),
    smtpUsername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    smtpPassword: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmailAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSmtpPort(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmtpPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmtpHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSmtpPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSmtpUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSmtpPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string email_address = 1;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.getEmailAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.setEmailAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string smtp_host = 2;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.getSmtpHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.setSmtpHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 smtp_port = 3;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.getSmtpPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.setSmtpPort = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string smtp_username = 4;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.getSmtpUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.setSmtpUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string smtp_password = 5;
 * @return {string}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.getSmtpPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender.prototype.setSmtpPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional EmailTemplate welcome = 1;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getWelcome = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, 1));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setWelcome = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearWelcome = function() {
  return this.setWelcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasWelcome = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EmailTemplate account_verification = 2;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getAccountVerification = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, 2));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setAccountVerification = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearAccountVerification = function() {
  return this.setAccountVerification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasAccountVerification = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmailTemplate account_recovery = 3;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getAccountRecovery = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, 3));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setAccountRecovery = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearAccountRecovery = function() {
  return this.setAccountRecovery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasAccountRecovery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EmailTemplate account_recovered = 4;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getAccountRecovered = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, 4));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setAccountRecovered = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearAccountRecovered = function() {
  return this.setAccountRecovered(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasAccountRecovered = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EmailTemplate otp = 5;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getOtp = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate, 5));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailTemplate|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setOtp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearOtp = function() {
  return this.setOtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasOtp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional EmailSender smtp = 6;
 * @return {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.getSmtp = function() {
  return /** @type{?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender} */ (
    jspb.Message.getWrapperField(this, proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender, 6));
};


/**
 * @param {?proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.EmailSender|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.setSmtp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.clearSmtp = function() {
  return this.setSmtp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest.prototype.hasSmtp = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse;
  return proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    daysBefore: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lifetimeStartAt: (f = msg.getLifetimeStartAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lifetimeEndAt: (f = msg.getLifetimeEndAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest;
  return proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDaysBefore(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLifetimeStartAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLifetimeEndAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDaysBefore();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLifetimeStartAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLifetimeEndAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 days_before = 1;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.getDaysBefore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.setDaysBefore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp lifetime_start_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.getLifetimeStartAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.setLifetimeStartAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.clearLifetimeStartAt = function() {
  return this.setLifetimeStartAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.hasLifetimeStartAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp lifetime_end_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.getLifetimeEndAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} returns this
*/
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.setLifetimeEndAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.clearLifetimeEndAt = function() {
  return this.setLifetimeEndAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest.prototype.hasLifetimeEndAt = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalUsers: jspb.Message.getFieldWithDefault(msg, 1, 0),
    usersPerDayMap: (f = msg.getUsersPerDayMap()) ? f.toObject(includeInstance, undefined) : [],
    sessionsPerDayMap: (f = msg.getSessionsPerDayMap()) ? f.toObject(includeInstance, undefined) : [],
    totalActiveUsers: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalLifetimeUsed: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse;
  return proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalUsers(value);
      break;
    case 2:
      var value = msg.getUsersPerDayMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 3:
      var value = msg.getSessionsPerDayMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalActiveUsers(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalLifetimeUsed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalUsers();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUsersPerDayMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getSessionsPerDayMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTotalActiveUsers();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTotalLifetimeUsed();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional int32 total_users = 1;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.getTotalUsers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.setTotalUsers = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, int32> users_per_day = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.getUsersPerDayMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.clearUsersPerDayMap = function() {
  this.getUsersPerDayMap().clear();
  return this;};


/**
 * map<string, int32> sessions_per_day = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.getSessionsPerDayMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.clearSessionsPerDayMap = function() {
  this.getSessionsPerDayMap().clear();
  return this;};


/**
 * optional int32 total_active_users = 4;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.getTotalActiveUsers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.setTotalActiveUsers = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double total_lifetime_used = 5;
 * @return {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.getTotalLifetimeUsed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse} returns this
 */
proto.depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse.prototype.setTotalLifetimeUsed = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.ClientType = {
  CLIENT_TYPE_UNSET: 0,
  CLIENT_FIRST_PARTY: 1,
  CLIENT_THIRD_PARTY: 2,
  CLIENT_SYSTEM_PARTY: 3
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.SubjectType = {
  SUBJECT_TYPE_PUBLIC: 0,
  SUBJECT_TYPE_PAIRWISE: 1
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthMethod = {
  TOKEN_ENDPOINT_AUTH_METHOD_CLIENT_SECRET_BASIC: 0,
  TOKEN_ENDPOINT_AUTH_METHOD_CLIENT_SECRET_POST: 1,
  TOKEN_ENDPOINT_AUTH_METHOD_PRIVATE_KEY_JWT: 2,
  TOKEN_ENDPOINT_AUTH_METHOD_NONE: 3
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.TokenEndpointAuthSigningAlg = {
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_UNSET: 0,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS256: 1,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS384: 2,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS512: 3,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS256: 4,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS384: 5,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS512: 6,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES256: 7,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES384: 8,
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES512: 9
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.GrantType = {
  GRANT_TYPE_UNSET: 0,
  GRANT_TYPE_CLIENT_CREDENTIALS: 1,
  GRANT_TYPE_AUTHORIZATION_CODE: 2,
  GRANT_TYPE_IMPLICIT: 3,
  GRANT_TYPE_REFRESH_TOKEN: 4,
  GRANT_TYPE_DEVICE_CODE: 5
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.ResponseType = {
  RESPONSE_TYPE_UNSET: 0,
  RESPONSE_TYPE_NONE: 1,
  RESPONSE_TYPE_ID_TOKEN: 2,
  RESPONSE_TYPE_TOKEN: 3,
  RESPONSE_TYPE_CODE: 4,
  RESPONSE_TYPE_ID_TOKEN_TOKEN: 5,
  RESPONSE_TYPE_CODE_ID_TOKEN: 6,
  RESPONSE_TYPE_CODE_TOKEN: 7,
  RESPONSE_TYPE_CODE_ID_TOKEN_TOKEN: 8
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.RequestObjectSigningAlg = {
  REQUEST_OBJECT_SIGNING_ALG_UNSET: 0,
  REQUEST_OBJECT_SIGNING_ALG_NONE: 1,
  REQUEST_OBJECT_SIGNING_ALG_RS256: 2
};

/**
 * @enum {number}
 */
proto.depot.devtools.auth.v0.identity.admin.UserinfoSignedResponseAlg = {
  USERINFO_SIGNED_RESPONSE_ALG_UNSET: 0,
  USERINFO_SIGNED_RESPONSE_ALG_NONE: 1,
  USERINFO_SIGNED_RESPONSE_ALG_RS256: 2
};

goog.object.extend(exports, proto.depot.devtools.auth.v0.identity.admin);
