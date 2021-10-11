// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var devtools_auth_v0_proto_identity_admin_admin_pb = require('./admin_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_depot_devtools_auth_v0_identity_admin_CreateConnectionRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateConnectionRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateConnectionResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateConnectionResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateIdentityRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateIdentityRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateIdentityResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateIdentityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateIdentityResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.CreateOAuth2ClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteIdentityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.DeleteOAuth2ClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetAddressRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetAddressRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetAddressResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetAddressResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetAddressesRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetAddressesRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetAddressesResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetAddressesResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetConnectionsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetConnectionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetConnectionsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetConnectionsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetConnectionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetConnectionsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetCredentialsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetCredentialsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetCredentialsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetCredentialsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetCredentialsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetCredentialsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetDefaultIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetEmailsSetupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetEmailsSetupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdSchemasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdSchemasResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentitiesByAttributeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentityLoginAttemptsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentityRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetIdentityResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetIdentityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetOAuth2ClientsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetTraitsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetTraitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetTraitsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetTraitsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetTraitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetTraitsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.GetUserBaseStatisticsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.MarkDefaultIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateAddressRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateAddressRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateAddressResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateAddressResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateConnectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateEmailsSetupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateIdSchemaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateIdSchemaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateIdentityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateOAuth2ClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsRequest(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsRequest)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateTraitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsRequest(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsResponse(arg) {
  if (!(arg instanceof devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsResponse)) {
    throw new Error('Expected argument of type depot.devtools.auth.v0.identity.admin.UpdateTraitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsResponse(buffer_arg) {
  return devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AdminService = exports.AdminService = {
  createIdentity: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/CreateIdentity',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdentityResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateIdentityRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateIdentityRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateIdentityResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateIdentityResponse,
  },
  getIdentity: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdentity',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentityRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentityResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityResponse,
  },
  getIdentitiesByAttribute: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdentitiesByAttribute',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesByAttributeResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesByAttributeResponse,
  },
  getIdentities: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdentities',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentitiesResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentitiesResponse,
  },
  updateIdentity: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateIdentity',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdentityResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdentityResponse,
  },
  deleteIdentity: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/DeleteIdentity',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdentityResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdentityResponse,
  },
  getAddresses: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetAddresses',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressesResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetAddressesRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetAddressesRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetAddressesResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetAddressesResponse,
  },
  getAddress: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetAddress',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetAddressResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetAddressRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetAddressRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetAddressResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetAddressResponse,
  },
  updateAddress: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateAddress',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateAddressResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateAddressRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateAddressRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateAddressResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateAddressResponse,
  },
  getTraits: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetTraits',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetTraitsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetTraitsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetTraitsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetTraitsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetTraitsResponse,
  },
  updateTraits: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateTraits',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateTraitsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateTraitsResponse,
  },
  getCredentials: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetCredentials',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetCredentialsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetCredentialsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetCredentialsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetCredentialsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetCredentialsResponse,
  },
  updateCredential: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateCredential',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateCredentialResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateCredentialResponse,
  },
  getIdentityLoginAttempts: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdentityLoginAttempts',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdentityLoginAttemptsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdentityLoginAttemptsResponse,
  },
  createConnection: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/CreateConnection',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateConnectionResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateConnectionRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateConnectionRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateConnectionResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateConnectionResponse,
  },
  getConnections: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetConnections',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetConnectionsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetConnectionsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetConnectionsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetConnectionsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetConnectionsResponse,
  },
  updateConnection: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateConnection',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateConnectionResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateConnectionResponse,
  },
  deleteConnection: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/DeleteConnection',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteConnectionResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteConnectionResponse,
  },
  createIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/CreateIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateIdSchemaResponse,
  },
  getIdSchemas: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdSchemas',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemasResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemasResponse,
  },
  getIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetIdSchemaResponse,
  },
  getDefaultIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetDefaultIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetDefaultIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetDefaultIdSchemaResponse,
  },
  updateIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateIdSchemaResponse,
  },
  markDefaultIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/MarkDefaultIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.MarkDefaultIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_MarkDefaultIdSchemaResponse,
  },
  deleteIdSchema: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/DeleteIdSchema',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteIdSchemaResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteIdSchemaResponse,
  },
  createOAuth2Client: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/CreateOAuth2Client',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.CreateOAuth2ClientResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_CreateOAuth2ClientResponse,
  },
  getOAuth2Clients: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetOAuth2Clients',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetOAuth2ClientsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetOAuth2ClientsResponse,
  },
  updateOAuth2Client: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateOAuth2Client',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateOAuth2ClientResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateOAuth2ClientResponse,
  },
  deleteOAuth2Client: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/DeleteOAuth2Client',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.DeleteOAuth2ClientResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_DeleteOAuth2ClientResponse,
  },
  getEmailsSetup: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetEmailsSetup',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetEmailsSetupResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetEmailsSetupResponse,
  },
  updateEmailsSetup: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/UpdateEmailsSetup',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.UpdateEmailsSetupResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_UpdateEmailsSetupResponse,
  },
  getUserBaseStatistics: {
    path: '/depot.devtools.auth.v0.identity.admin.Admin/GetUserBaseStatistics',
    requestStream: false,
    responseStream: false,
    requestType: devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsRequest,
    responseType: devtools_auth_v0_proto_identity_admin_admin_pb.GetUserBaseStatisticsResponse,
    requestSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsRequest,
    requestDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsRequest,
    responseSerialize: serialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsResponse,
    responseDeserialize: deserialize_depot_devtools_auth_v0_identity_admin_GetUserBaseStatisticsResponse,
  },
};

exports.AdminClient = grpc.makeGenericClientConstructor(AdminService);
