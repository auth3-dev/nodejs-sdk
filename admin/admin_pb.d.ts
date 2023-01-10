// package: depot.devtools.auth.v0.identity.admin
// file: identity/admin/admin.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class CreateIdentityRequest extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  getSchemaId(): string;
  setSchemaId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIdentityRequest): CreateIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIdentityRequest;
  static deserializeBinaryFromReader(message: CreateIdentityRequest, reader: jspb.BinaryReader): CreateIdentityRequest;
}

export namespace CreateIdentityRequest {
  export type AsObject = {
    data?: google_protobuf_struct_pb.Struct.AsObject,
    connectionId: string,
    schemaId: string,
  }
}

export class CreateIdentityResponse extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIdentityResponse): CreateIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIdentityResponse;
  static deserializeBinaryFromReader(message: CreateIdentityResponse, reader: jspb.BinaryReader): CreateIdentityResponse;
}

export namespace CreateIdentityResponse {
  export type AsObject = {
    identityId: string,
  }
}

export class GetIdentitiesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentitiesRequest): GetIdentitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentitiesRequest;
  static deserializeBinaryFromReader(message: GetIdentitiesRequest, reader: jspb.BinaryReader): GetIdentitiesRequest;
}

export namespace GetIdentitiesRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class GetIdentitiesResponse extends jspb.Message {
  clearIdentitiesList(): void;
  getIdentitiesList(): Array<GetIdentitiesResponse.Identity>;
  setIdentitiesList(value: Array<GetIdentitiesResponse.Identity>): void;
  addIdentities(value?: GetIdentitiesResponse.Identity, index?: number): GetIdentitiesResponse.Identity;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalSize(): number;
  setTotalSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentitiesResponse): GetIdentitiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentitiesResponse;
  static deserializeBinaryFromReader(message: GetIdentitiesResponse, reader: jspb.BinaryReader): GetIdentitiesResponse;
}

export namespace GetIdentitiesResponse {
  export type AsObject = {
    identitiesList: Array<GetIdentitiesResponse.Identity.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }

  export class Identity extends jspb.Message {
    getIdentityId(): string;
    setIdentityId(value: string): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getMainIdentifier(): string;
    setMainIdentifier(value: string): void;

    getSchemaId(): string;
    setSchemaId(value: string): void;

    getLock(): GetIdentitiesResponse.LockMap[keyof GetIdentitiesResponse.LockMap];
    setLock(value: GetIdentitiesResponse.LockMap[keyof GetIdentitiesResponse.LockMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Identity.AsObject;
    static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Identity;
    static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
  }

  export namespace Identity {
    export type AsObject = {
      identityId: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      mainIdentifier: string,
      schemaId: string,
      lock: GetIdentitiesResponse.LockMap[keyof GetIdentitiesResponse.LockMap],
    }
  }

  export interface LockMap {
    UNLOCKED: 0;
    ADMIN_LOCKED: 1;
  }

  export const Lock: LockMap;
}

export class GetIdentityRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityRequest): GetIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityRequest;
  static deserializeBinaryFromReader(message: GetIdentityRequest, reader: jspb.BinaryReader): GetIdentityRequest;
}

export namespace GetIdentityRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class GetIdentityResponse extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMainIdentifier(): string;
  setMainIdentifier(value: string): void;

  getTraitsId(): string;
  setTraitsId(value: string): void;

  clearAddressesIdsList(): void;
  getAddressesIdsList(): Array<string>;
  setAddressesIdsList(value: Array<string>): void;
  addAddressesIds(value: string, index?: number): string;

  getCredentialsIdsMap(): jspb.Map<string, string>;
  clearCredentialsIdsMap(): void;
  getSchemaId(): string;
  setSchemaId(value: string): void;

  getLock(): GetIdentityResponse.LockMap[keyof GetIdentityResponse.LockMap];
  setLock(value: GetIdentityResponse.LockMap[keyof GetIdentityResponse.LockMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityResponse): GetIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityResponse;
  static deserializeBinaryFromReader(message: GetIdentityResponse, reader: jspb.BinaryReader): GetIdentityResponse;
}

export namespace GetIdentityResponse {
  export type AsObject = {
    identityId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mainIdentifier: string,
    traitsId: string,
    addressesIdsList: Array<string>,
    credentialsIdsMap: Array<[string, string]>,
    schemaId: string,
    lock: GetIdentityResponse.LockMap[keyof GetIdentityResponse.LockMap],
  }

  export interface LockMap {
    UNLOCKED: 0;
    ADMIN_LOCKED: 1;
  }

  export const Lock: LockMap;
}

export class GetIdentityByIdentifierRequest extends jspb.Message {
  getAttribute(): string;
  setAttribute(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityByIdentifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityByIdentifierRequest): GetIdentityByIdentifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityByIdentifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityByIdentifierRequest;
  static deserializeBinaryFromReader(message: GetIdentityByIdentifierRequest, reader: jspb.BinaryReader): GetIdentityByIdentifierRequest;
}

export namespace GetIdentityByIdentifierRequest {
  export type AsObject = {
    attribute: string,
    value: string,
    connectionId: string,
  }
}

export class GetIdentityByIdentifierResponse extends jspb.Message {
  hasIdentity(): boolean;
  clearIdentity(): void;
  getIdentity(): GetIdentityByIdentifierResponse.Identity | undefined;
  setIdentity(value?: GetIdentityByIdentifierResponse.Identity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityByIdentifierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityByIdentifierResponse): GetIdentityByIdentifierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityByIdentifierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityByIdentifierResponse;
  static deserializeBinaryFromReader(message: GetIdentityByIdentifierResponse, reader: jspb.BinaryReader): GetIdentityByIdentifierResponse;
}

export namespace GetIdentityByIdentifierResponse {
  export type AsObject = {
    identity?: GetIdentityByIdentifierResponse.Identity.AsObject,
  }

  export class Identity extends jspb.Message {
    getIdentityId(): string;
    setIdentityId(value: string): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getMainIdentifier(): string;
    setMainIdentifier(value: string): void;

    getTraitsId(): string;
    setTraitsId(value: string): void;

    clearAddressesIdsList(): void;
    getAddressesIdsList(): Array<string>;
    setAddressesIdsList(value: Array<string>): void;
    addAddressesIds(value: string, index?: number): string;

    getCredentialsIdsMap(): jspb.Map<string, string>;
    clearCredentialsIdsMap(): void;
    getSchemaId(): string;
    setSchemaId(value: string): void;

    getLock(): GetIdentityByIdentifierResponse.Identity.LockMap[keyof GetIdentityByIdentifierResponse.Identity.LockMap];
    setLock(value: GetIdentityByIdentifierResponse.Identity.LockMap[keyof GetIdentityByIdentifierResponse.Identity.LockMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Identity.AsObject;
    static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Identity;
    static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
  }

  export namespace Identity {
    export type AsObject = {
      identityId: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      mainIdentifier: string,
      traitsId: string,
      addressesIdsList: Array<string>,
      credentialsIdsMap: Array<[string, string]>,
      schemaId: string,
      lock: GetIdentityByIdentifierResponse.Identity.LockMap[keyof GetIdentityByIdentifierResponse.Identity.LockMap],
    }

    export interface LockMap {
      UNLOCKED: 0;
      ADMIN_LOCKED: 1;
    }

    export const Lock: LockMap;
  }
}

export class GetIdentitiesByAttributeRequest extends jspb.Message {
  getAttribute(): string;
  setAttribute(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentitiesByAttributeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentitiesByAttributeRequest): GetIdentitiesByAttributeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentitiesByAttributeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentitiesByAttributeRequest;
  static deserializeBinaryFromReader(message: GetIdentitiesByAttributeRequest, reader: jspb.BinaryReader): GetIdentitiesByAttributeRequest;
}

export namespace GetIdentitiesByAttributeRequest {
  export type AsObject = {
    attribute: string,
    value: string,
  }
}

export class GetIdentitiesByAttributeResponse extends jspb.Message {
  clearIdentitiesList(): void;
  getIdentitiesList(): Array<GetIdentitiesByAttributeResponse.Identity>;
  setIdentitiesList(value: Array<GetIdentitiesByAttributeResponse.Identity>): void;
  addIdentities(value?: GetIdentitiesByAttributeResponse.Identity, index?: number): GetIdentitiesByAttributeResponse.Identity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentitiesByAttributeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentitiesByAttributeResponse): GetIdentitiesByAttributeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentitiesByAttributeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentitiesByAttributeResponse;
  static deserializeBinaryFromReader(message: GetIdentitiesByAttributeResponse, reader: jspb.BinaryReader): GetIdentitiesByAttributeResponse;
}

export namespace GetIdentitiesByAttributeResponse {
  export type AsObject = {
    identitiesList: Array<GetIdentitiesByAttributeResponse.Identity.AsObject>,
  }

  export class Identity extends jspb.Message {
    getIdentityId(): string;
    setIdentityId(value: string): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getMainIdentifier(): string;
    setMainIdentifier(value: string): void;

    getTraitsId(): string;
    setTraitsId(value: string): void;

    clearAddressesIdsList(): void;
    getAddressesIdsList(): Array<string>;
    setAddressesIdsList(value: Array<string>): void;
    addAddressesIds(value: string, index?: number): string;

    getCredentialsIdsMap(): jspb.Map<string, string>;
    clearCredentialsIdsMap(): void;
    getSchemaId(): string;
    setSchemaId(value: string): void;

    getLock(): GetIdentitiesByAttributeResponse.Identity.LockMap[keyof GetIdentitiesByAttributeResponse.Identity.LockMap];
    setLock(value: GetIdentitiesByAttributeResponse.Identity.LockMap[keyof GetIdentitiesByAttributeResponse.Identity.LockMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Identity.AsObject;
    static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Identity;
    static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
  }

  export namespace Identity {
    export type AsObject = {
      identityId: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      mainIdentifier: string,
      traitsId: string,
      addressesIdsList: Array<string>,
      credentialsIdsMap: Array<[string, string]>,
      schemaId: string,
      lock: GetIdentitiesByAttributeResponse.Identity.LockMap[keyof GetIdentitiesByAttributeResponse.Identity.LockMap],
    }

    export interface LockMap {
      UNLOCKED: 0;
      ADMIN_LOCKED: 1;
    }

    export const Lock: LockMap;
  }
}

export class UpdateIdentityRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  getLock(): UpdateIdentityRequest.LockMap[keyof UpdateIdentityRequest.LockMap];
  setLock(value: UpdateIdentityRequest.LockMap[keyof UpdateIdentityRequest.LockMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIdentityRequest): UpdateIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIdentityRequest;
  static deserializeBinaryFromReader(message: UpdateIdentityRequest, reader: jspb.BinaryReader): UpdateIdentityRequest;
}

export namespace UpdateIdentityRequest {
  export type AsObject = {
    identityId: string,
    lock: UpdateIdentityRequest.LockMap[keyof UpdateIdentityRequest.LockMap],
  }

  export interface LockMap {
    UNLOCKED: 0;
    ADMIN_LOCKED: 1;
  }

  export const Lock: LockMap;
}

export class UpdateIdentityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIdentityResponse): UpdateIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIdentityResponse;
  static deserializeBinaryFromReader(message: UpdateIdentityResponse, reader: jspb.BinaryReader): UpdateIdentityResponse;
}

export namespace UpdateIdentityResponse {
  export type AsObject = {
  }
}

export class DeleteIdentityRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIdentityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIdentityRequest): DeleteIdentityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIdentityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIdentityRequest;
  static deserializeBinaryFromReader(message: DeleteIdentityRequest, reader: jspb.BinaryReader): DeleteIdentityRequest;
}

export namespace DeleteIdentityRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class DeleteIdentityResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIdentityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIdentityResponse): DeleteIdentityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIdentityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIdentityResponse;
  static deserializeBinaryFromReader(message: DeleteIdentityResponse, reader: jspb.BinaryReader): DeleteIdentityResponse;
}

export namespace DeleteIdentityResponse {
  export type AsObject = {
  }
}

export class GetCredentialsRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialsRequest): GetCredentialsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialsRequest;
  static deserializeBinaryFromReader(message: GetCredentialsRequest, reader: jspb.BinaryReader): GetCredentialsRequest;
}

export namespace GetCredentialsRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class GetCredentialsResponse extends jspb.Message {
  getCredentialsMap(): jspb.Map<string, GetCredentialsResponse.Credential>;
  clearCredentialsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCredentialsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCredentialsResponse): GetCredentialsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCredentialsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCredentialsResponse;
  static deserializeBinaryFromReader(message: GetCredentialsResponse, reader: jspb.BinaryReader): GetCredentialsResponse;
}

export namespace GetCredentialsResponse {
  export type AsObject = {
    credentialsMap: Array<[string, GetCredentialsResponse.Credential.AsObject]>,
  }

  export class Credential extends jspb.Message {
    getCredentialId(): string;
    setCredentialId(value: string): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getIdentityId(): string;
    setIdentityId(value: string): void;

    getType(): number;
    setType(value: number): void;

    getName(): string;
    setName(value: string): void;

    getConfigured(): boolean;
    setConfigured(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credential.AsObject;
    static toObject(includeInstance: boolean, msg: Credential): Credential.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credential, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credential;
    static deserializeBinaryFromReader(message: Credential, reader: jspb.BinaryReader): Credential;
  }

  export namespace Credential {
    export type AsObject = {
      credentialId: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      identityId: string,
      type: number,
      name: string,
      configured: boolean,
    }
  }
}

export class UpdateCredentialRequest extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCredentialRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCredentialRequest): UpdateCredentialRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCredentialRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCredentialRequest;
  static deserializeBinaryFromReader(message: UpdateCredentialRequest, reader: jspb.BinaryReader): UpdateCredentialRequest;
}

export namespace UpdateCredentialRequest {
  export type AsObject = {
    data?: google_protobuf_struct_pb.Struct.AsObject,
    connectionId: string,
    identityId: string,
  }
}

export class UpdateCredentialResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCredentialResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCredentialResponse): UpdateCredentialResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateCredentialResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCredentialResponse;
  static deserializeBinaryFromReader(message: UpdateCredentialResponse, reader: jspb.BinaryReader): UpdateCredentialResponse;
}

export namespace UpdateCredentialResponse {
  export type AsObject = {
  }
}

export class CreateConnectionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  getButtonImageUrl(): string;
  setButtonImageUrl(value: string): void;

  getProvider(): CreateConnectionRequest.ProvidersMap[keyof CreateConnectionRequest.ProvidersMap];
  setProvider(value: CreateConnectionRequest.ProvidersMap[keyof CreateConnectionRequest.ProvidersMap]): void;

  getOidcDiscoveryUrl(): string;
  setOidcDiscoveryUrl(value: string): void;

  clearMfaList(): void;
  getMfaList(): Array<string>;
  setMfaList(value: Array<string>): void;
  addMfa(value: string, index?: number): string;

  getType(): CreateConnectionRequest.TypesMap[keyof CreateConnectionRequest.TypesMap];
  setType(value: CreateConnectionRequest.TypesMap[keyof CreateConnectionRequest.TypesMap]): void;

  getScopes(): string;
  setScopes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    name: string,
    clientId: string,
    clientSecret: string,
    buttonImageUrl: string,
    provider: CreateConnectionRequest.ProvidersMap[keyof CreateConnectionRequest.ProvidersMap],
    oidcDiscoveryUrl: string,
    mfaList: Array<string>,
    type: CreateConnectionRequest.TypesMap[keyof CreateConnectionRequest.TypesMap],
    scopes: string,
  }

  export interface ProvidersMap {
    NONE: 0;
    OPENID: 1;
    AMAZON: 2;
    BITBUCKET: 3;
    BOX: 4;
    DAILYMOTION: 5;
    DEEZER: 6;
    DIGITALOCEAN: 7;
    DISCORD: 8;
    DROPBOX: 9;
    EVEONLINE: 10;
    FACEBOOK: 11;
    FITBIT: 12;
    GITEA: 13;
    GITHUB: 14;
    GITLAB: 15;
    GOOGLE: 16;
    SHOPIFY: 18;
    SOUNDCLOUD: 19;
    SPOTIFY: 20;
    STEAM: 21;
    STRIPE: 22;
    TWITCH: 23;
    UBER: 24;
    WEPAY: 25;
    YAHOO: 26;
    YAMMER: 27;
    HEROKU: 28;
    INSTAGRAM: 29;
    INTERCOM: 30;
    KAKAO: 31;
    LASTFM: 32;
    LINKEDIN: 33;
    LINE: 34;
    ONEDRIVE: 35;
    AZUREAD: 36;
    MICROSOFTONLINE: 37;
    BATTLENET: 38;
    PAYPAL: 39;
    TWITTER: 40;
    SALESFORCE: 41;
    TYPETALK: 42;
    SLACK: 43;
    MEETUP: 44;
    XERO: 46;
    VK: 47;
    NAVER: 48;
    YANDEX: 49;
    NEXTCLOUD: 50;
    APPLE: 52;
    STRAVA: 53;
  }

  export const Providers: ProvidersMap;

  export interface TypesMap {
    UNSET: 0;
    PASSWORD: 1;
    OTP: 2;
    TOTP: 3;
    OIDC: 4;
  }

  export const Types: TypesMap;
}

export class CreateConnectionResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionResponse): CreateConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionResponse;
  static deserializeBinaryFromReader(message: CreateConnectionResponse, reader: jspb.BinaryReader): CreateConnectionResponse;
}

export namespace CreateConnectionResponse {
  export type AsObject = {
    name: string,
  }
}

export class GetConnectionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionsRequest): GetConnectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionsRequest;
  static deserializeBinaryFromReader(message: GetConnectionsRequest, reader: jspb.BinaryReader): GetConnectionsRequest;
}

export namespace GetConnectionsRequest {
  export type AsObject = {
  }
}

export class GetConnectionsResponse extends jspb.Message {
  clearConnectionsList(): void;
  getConnectionsList(): Array<GetConnectionsResponse.Connection>;
  setConnectionsList(value: Array<GetConnectionsResponse.Connection>): void;
  addConnections(value?: GetConnectionsResponse.Connection, index?: number): GetConnectionsResponse.Connection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionsResponse): GetConnectionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionsResponse;
  static deserializeBinaryFromReader(message: GetConnectionsResponse, reader: jspb.BinaryReader): GetConnectionsResponse;
}

export namespace GetConnectionsResponse {
  export type AsObject = {
    connectionsList: Array<GetConnectionsResponse.Connection.AsObject>,
  }

  export class Connection extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getClientSecret(): string;
    setClientSecret(value: string): void;

    getButtonImageUrl(): string;
    setButtonImageUrl(value: string): void;

    getProvider(): GetConnectionsResponse.ProvidersMap[keyof GetConnectionsResponse.ProvidersMap];
    setProvider(value: GetConnectionsResponse.ProvidersMap[keyof GetConnectionsResponse.ProvidersMap]): void;

    getOidcDiscoveryUrl(): string;
    setOidcDiscoveryUrl(value: string): void;

    clearMfaList(): void;
    getMfaList(): Array<string>;
    setMfaList(value: Array<string>): void;
    addMfa(value: string, index?: number): string;

    getType(): GetConnectionsResponse.TypesMap[keyof GetConnectionsResponse.TypesMap];
    setType(value: GetConnectionsResponse.TypesMap[keyof GetConnectionsResponse.TypesMap]): void;

    getId(): string;
    setId(value: string): void;

    getScopes(): string;
    setScopes(value: string): void;

    getPurpose(): GetConnectionsResponse.PurposesMap[keyof GetConnectionsResponse.PurposesMap];
    setPurpose(value: GetConnectionsResponse.PurposesMap[keyof GetConnectionsResponse.PurposesMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Connection.AsObject;
    static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Connection;
    static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
  }

  export namespace Connection {
    export type AsObject = {
      name: string,
      clientId: string,
      clientSecret: string,
      buttonImageUrl: string,
      provider: GetConnectionsResponse.ProvidersMap[keyof GetConnectionsResponse.ProvidersMap],
      oidcDiscoveryUrl: string,
      mfaList: Array<string>,
      type: GetConnectionsResponse.TypesMap[keyof GetConnectionsResponse.TypesMap],
      id: string,
      scopes: string,
      purpose: GetConnectionsResponse.PurposesMap[keyof GetConnectionsResponse.PurposesMap],
    }
  }

  export interface ProvidersMap {
    NONE: 0;
    OPENID: 1;
    AMAZON: 2;
    BITBUCKET: 3;
    BOX: 4;
    DAILYMOTION: 5;
    DEEZER: 6;
    DIGITALOCEAN: 7;
    DISCORD: 8;
    DROPBOX: 9;
    EVEONLINE: 10;
    FACEBOOK: 11;
    FITBIT: 12;
    GITEA: 13;
    GITHUB: 14;
    GITLAB: 15;
    GOOGLE: 16;
    SHOPIFY: 18;
    SOUNDCLOUD: 19;
    SPOTIFY: 20;
    STEAM: 21;
    STRIPE: 22;
    TWITCH: 23;
    UBER: 24;
    WEPAY: 25;
    YAHOO: 26;
    YAMMER: 27;
    HEROKU: 28;
    INSTAGRAM: 29;
    INTERCOM: 30;
    KAKAO: 31;
    LASTFM: 32;
    LINKEDIN: 33;
    LINE: 34;
    ONEDRIVE: 35;
    AZUREAD: 36;
    MICROSOFTONLINE: 37;
    BATTLENET: 38;
    PAYPAL: 39;
    TWITTER: 40;
    SALESFORCE: 41;
    TYPETALK: 42;
    SLACK: 43;
    MEETUP: 44;
    XERO: 46;
    VK: 47;
    NAVER: 48;
    YANDEX: 49;
    NEXTCLOUD: 50;
    APPLE: 52;
    STRAVA: 53;
  }

  export const Providers: ProvidersMap;

  export interface TypesMap {
    UNSET: 0;
    PASSWORD: 1;
    OTP: 2;
    TOTP: 3;
    OIDC: 4;
  }

  export const Types: TypesMap;

  export interface PurposesMap {
    PURPOSE_UNKNOWN: 0;
    PURPOSE_MAIN_FACTOR: 1;
    PURPOSE_SECOND_FACTOR: 2;
  }

  export const Purposes: PurposesMap;
}

export class UpdateConnectionRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  getButtonImageUrl(): string;
  setButtonImageUrl(value: string): void;

  getProvider(): UpdateConnectionRequest.ProvidersMap[keyof UpdateConnectionRequest.ProvidersMap];
  setProvider(value: UpdateConnectionRequest.ProvidersMap[keyof UpdateConnectionRequest.ProvidersMap]): void;

  getOidcDiscoveryUrl(): string;
  setOidcDiscoveryUrl(value: string): void;

  clearMfaList(): void;
  getMfaList(): Array<string>;
  setMfaList(value: Array<string>): void;
  addMfa(value: string, index?: number): string;

  getType(): UpdateConnectionRequest.TypesMap[keyof UpdateConnectionRequest.TypesMap];
  setType(value: UpdateConnectionRequest.TypesMap[keyof UpdateConnectionRequest.TypesMap]): void;

  getId(): string;
  setId(value: string): void;

  getScopes(): string;
  setScopes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
    buttonImageUrl: string,
    provider: UpdateConnectionRequest.ProvidersMap[keyof UpdateConnectionRequest.ProvidersMap],
    oidcDiscoveryUrl: string,
    mfaList: Array<string>,
    type: UpdateConnectionRequest.TypesMap[keyof UpdateConnectionRequest.TypesMap],
    id: string,
    scopes: string,
  }

  export interface ProvidersMap {
    NONE: 0;
    OPENID: 1;
    AMAZON: 2;
    BITBUCKET: 3;
    BOX: 4;
    DAILYMOTION: 5;
    DEEZER: 6;
    DIGITALOCEAN: 7;
    DISCORD: 8;
    DROPBOX: 9;
    EVEONLINE: 10;
    FACEBOOK: 11;
    FITBIT: 12;
    GITEA: 13;
    GITHUB: 14;
    GITLAB: 15;
    GOOGLE: 16;
    SHOPIFY: 18;
    SOUNDCLOUD: 19;
    SPOTIFY: 20;
    STEAM: 21;
    STRIPE: 22;
    TWITCH: 23;
    UBER: 24;
    WEPAY: 25;
    YAHOO: 26;
    YAMMER: 27;
    HEROKU: 28;
    INSTAGRAM: 29;
    INTERCOM: 30;
    KAKAO: 31;
    LASTFM: 32;
    LINKEDIN: 33;
    LINE: 34;
    ONEDRIVE: 35;
    AZUREAD: 36;
    MICROSOFTONLINE: 37;
    BATTLENET: 38;
    PAYPAL: 39;
    TWITTER: 40;
    SALESFORCE: 41;
    TYPETALK: 42;
    SLACK: 43;
    MEETUP: 44;
    XERO: 46;
    VK: 47;
    NAVER: 48;
    YANDEX: 49;
    NEXTCLOUD: 50;
    APPLE: 52;
    STRAVA: 53;
  }

  export const Providers: ProvidersMap;

  export interface TypesMap {
    UNSET: 0;
    PASSWORD: 1;
    OTP: 2;
    TOTP: 3;
    OIDC: 4;
  }

  export const Types: TypesMap;
}

export class UpdateConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionResponse): UpdateConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionResponse;
  static deserializeBinaryFromReader(message: UpdateConnectionResponse, reader: jspb.BinaryReader): UpdateConnectionResponse;
}

export namespace UpdateConnectionResponse {
  export type AsObject = {
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteConnectionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionResponse): DeleteConnectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionResponse;
  static deserializeBinaryFromReader(message: DeleteConnectionResponse, reader: jspb.BinaryReader): DeleteConnectionResponse;
}

export namespace DeleteConnectionResponse {
  export type AsObject = {
  }
}

export class GetOAuth2ClientsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOAuth2ClientsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOAuth2ClientsRequest): GetOAuth2ClientsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOAuth2ClientsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOAuth2ClientsRequest;
  static deserializeBinaryFromReader(message: GetOAuth2ClientsRequest, reader: jspb.BinaryReader): GetOAuth2ClientsRequest;
}

export namespace GetOAuth2ClientsRequest {
  export type AsObject = {
  }
}

export class GetOAuth2ClientsResponse extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<GetOAuth2ClientsResponse.Client>;
  setClientsList(value: Array<GetOAuth2ClientsResponse.Client>): void;
  addClients(value?: GetOAuth2ClientsResponse.Client, index?: number): GetOAuth2ClientsResponse.Client;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOAuth2ClientsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOAuth2ClientsResponse): GetOAuth2ClientsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOAuth2ClientsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOAuth2ClientsResponse;
  static deserializeBinaryFromReader(message: GetOAuth2ClientsResponse, reader: jspb.BinaryReader): GetOAuth2ClientsResponse;
}

export namespace GetOAuth2ClientsResponse {
  export type AsObject = {
    clientsList: Array<GetOAuth2ClientsResponse.Client.AsObject>,
  }

  export class Client extends jspb.Message {
    clearAllowedCorsOriginsList(): void;
    getAllowedCorsOriginsList(): Array<string>;
    setAllowedCorsOriginsList(value: Array<string>): void;
    addAllowedCorsOrigins(value: string, index?: number): string;

    clearAudienceList(): void;
    getAudienceList(): Array<string>;
    setAudienceList(value: Array<string>): void;
    addAudience(value: string, index?: number): string;

    getBackchannelLogoutSessionRequired(): boolean;
    setBackchannelLogoutSessionRequired(value: boolean): void;

    getBackchannelLogoutUri(): string;
    setBackchannelLogoutUri(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getClientName(): string;
    setClientName(value: string): void;

    getClientSecretExpiresAt(): number;
    setClientSecretExpiresAt(value: number): void;

    getClientUri(): string;
    setClientUri(value: string): void;

    clearContactsList(): void;
    getContactsList(): Array<string>;
    setContactsList(value: Array<string>): void;
    addContacts(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getFrontchannelLogoutSessionRequired(): boolean;
    setFrontchannelLogoutSessionRequired(value: boolean): void;

    getFrontchannelLogoutUri(): string;
    setFrontchannelLogoutUri(value: string): void;

    clearGrantTypesList(): void;
    getGrantTypesList(): Array<GrantTypeMap[keyof GrantTypeMap]>;
    setGrantTypesList(value: Array<GrantTypeMap[keyof GrantTypeMap]>): void;
    addGrantTypes(value: GrantTypeMap[keyof GrantTypeMap], index?: number): GrantTypeMap[keyof GrantTypeMap];

    hasJwks(): boolean;
    clearJwks(): void;
    getJwks(): google_protobuf_struct_pb.Struct | undefined;
    setJwks(value?: google_protobuf_struct_pb.Struct): void;

    getJwksUri(): string;
    setJwksUri(value: string): void;

    getLogoUri(): string;
    setLogoUri(value: string): void;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): void;

    getOwner(): string;
    setOwner(value: string): void;

    getPolicyUri(): string;
    setPolicyUri(value: string): void;

    clearPostLogoutRedirectUrisList(): void;
    getPostLogoutRedirectUrisList(): Array<string>;
    setPostLogoutRedirectUrisList(value: Array<string>): void;
    addPostLogoutRedirectUris(value: string, index?: number): string;

    clearRedirectUrisList(): void;
    getRedirectUrisList(): Array<string>;
    setRedirectUrisList(value: Array<string>): void;
    addRedirectUris(value: string, index?: number): string;

    getRequestObjectSigningAlg(): RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap];
    setRequestObjectSigningAlg(value: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap]): void;

    clearRequestUrisList(): void;
    getRequestUrisList(): Array<string>;
    setRequestUrisList(value: Array<string>): void;
    addRequestUris(value: string, index?: number): string;

    clearResponseTypesList(): void;
    getResponseTypesList(): Array<ResponseTypeMap[keyof ResponseTypeMap]>;
    setResponseTypesList(value: Array<ResponseTypeMap[keyof ResponseTypeMap]>): void;
    addResponseTypes(value: ResponseTypeMap[keyof ResponseTypeMap], index?: number): ResponseTypeMap[keyof ResponseTypeMap];

    getScope(): string;
    setScope(value: string): void;

    getSectorIdentifierUri(): string;
    setSectorIdentifierUri(value: string): void;

    getSubjectType(): SubjectTypeMap[keyof SubjectTypeMap];
    setSubjectType(value: SubjectTypeMap[keyof SubjectTypeMap]): void;

    getTokenEndpointAuthMethod(): TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap];
    setTokenEndpointAuthMethod(value: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap]): void;

    getTokenEndpointAuthSigningAlg(): TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap];
    setTokenEndpointAuthSigningAlg(value: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap]): void;

    getTosUri(): string;
    setTosUri(value: string): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getUserinfoSignedResponseAlg(): UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap];
    setUserinfoSignedResponseAlg(value: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap]): void;

    getClientType(): ClientTypeMap[keyof ClientTypeMap];
    setClientType(value: ClientTypeMap[keyof ClientTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
  }

  export namespace Client {
    export type AsObject = {
      allowedCorsOriginsList: Array<string>,
      audienceList: Array<string>,
      backchannelLogoutSessionRequired: boolean,
      backchannelLogoutUri: string,
      clientId: string,
      clientName: string,
      clientSecretExpiresAt: number,
      clientUri: string,
      contactsList: Array<string>,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      frontchannelLogoutSessionRequired: boolean,
      frontchannelLogoutUri: string,
      grantTypesList: Array<GrantTypeMap[keyof GrantTypeMap]>,
      jwks?: google_protobuf_struct_pb.Struct.AsObject,
      jwksUri: string,
      logoUri: string,
      metadata?: google_protobuf_struct_pb.Struct.AsObject,
      owner: string,
      policyUri: string,
      postLogoutRedirectUrisList: Array<string>,
      redirectUrisList: Array<string>,
      requestObjectSigningAlg: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap],
      requestUrisList: Array<string>,
      responseTypesList: Array<ResponseTypeMap[keyof ResponseTypeMap]>,
      scope: string,
      sectorIdentifierUri: string,
      subjectType: SubjectTypeMap[keyof SubjectTypeMap],
      tokenEndpointAuthMethod: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap],
      tokenEndpointAuthSigningAlg: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap],
      tosUri: string,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      userinfoSignedResponseAlg: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap],
      clientType: ClientTypeMap[keyof ClientTypeMap],
    }
  }
}

export class CreateOAuth2ClientRequest extends jspb.Message {
  clearAllowedCorsOriginsList(): void;
  getAllowedCorsOriginsList(): Array<string>;
  setAllowedCorsOriginsList(value: Array<string>): void;
  addAllowedCorsOrigins(value: string, index?: number): string;

  clearAudienceList(): void;
  getAudienceList(): Array<string>;
  setAudienceList(value: Array<string>): void;
  addAudience(value: string, index?: number): string;

  getBackchannelLogoutSessionRequired(): boolean;
  setBackchannelLogoutSessionRequired(value: boolean): void;

  getBackchannelLogoutUri(): string;
  setBackchannelLogoutUri(value: string): void;

  getClientName(): string;
  setClientName(value: string): void;

  getClientUri(): string;
  setClientUri(value: string): void;

  clearContactsList(): void;
  getContactsList(): Array<string>;
  setContactsList(value: Array<string>): void;
  addContacts(value: string, index?: number): string;

  getFrontchannelLogoutSessionRequired(): boolean;
  setFrontchannelLogoutSessionRequired(value: boolean): void;

  getFrontchannelLogoutUri(): string;
  setFrontchannelLogoutUri(value: string): void;

  clearGrantTypesList(): void;
  getGrantTypesList(): Array<GrantTypeMap[keyof GrantTypeMap]>;
  setGrantTypesList(value: Array<GrantTypeMap[keyof GrantTypeMap]>): void;
  addGrantTypes(value: GrantTypeMap[keyof GrantTypeMap], index?: number): GrantTypeMap[keyof GrantTypeMap];

  hasJwks(): boolean;
  clearJwks(): void;
  getJwks(): google_protobuf_struct_pb.Struct | undefined;
  setJwks(value?: google_protobuf_struct_pb.Struct): void;

  getJwksUri(): string;
  setJwksUri(value: string): void;

  getLogoUri(): string;
  setLogoUri(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  getOwner(): string;
  setOwner(value: string): void;

  getPolicyUri(): string;
  setPolicyUri(value: string): void;

  clearPostLogoutRedirectUrisList(): void;
  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): void;
  addPostLogoutRedirectUris(value: string, index?: number): string;

  clearRedirectUrisList(): void;
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): void;
  addRedirectUris(value: string, index?: number): string;

  getRequestObjectSigningAlg(): RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap];
  setRequestObjectSigningAlg(value: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap]): void;

  clearRequestUrisList(): void;
  getRequestUrisList(): Array<string>;
  setRequestUrisList(value: Array<string>): void;
  addRequestUris(value: string, index?: number): string;

  clearResponseTypesList(): void;
  getResponseTypesList(): Array<ResponseTypeMap[keyof ResponseTypeMap]>;
  setResponseTypesList(value: Array<ResponseTypeMap[keyof ResponseTypeMap]>): void;
  addResponseTypes(value: ResponseTypeMap[keyof ResponseTypeMap], index?: number): ResponseTypeMap[keyof ResponseTypeMap];

  getScope(): string;
  setScope(value: string): void;

  getSectorIdentifierUri(): string;
  setSectorIdentifierUri(value: string): void;

  getSubjectType(): SubjectTypeMap[keyof SubjectTypeMap];
  setSubjectType(value: SubjectTypeMap[keyof SubjectTypeMap]): void;

  getTokenEndpointAuthMethod(): TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap];
  setTokenEndpointAuthMethod(value: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap]): void;

  getTokenEndpointAuthSigningAlg(): TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap];
  setTokenEndpointAuthSigningAlg(value: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap]): void;

  getTosUri(): string;
  setTosUri(value: string): void;

  getUserinfoSignedResponseAlg(): UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap];
  setUserinfoSignedResponseAlg(value: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap]): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  getClientType(): ClientTypeMap[keyof ClientTypeMap];
  setClientType(value: ClientTypeMap[keyof ClientTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOAuth2ClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOAuth2ClientRequest): CreateOAuth2ClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOAuth2ClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOAuth2ClientRequest;
  static deserializeBinaryFromReader(message: CreateOAuth2ClientRequest, reader: jspb.BinaryReader): CreateOAuth2ClientRequest;
}

export namespace CreateOAuth2ClientRequest {
  export type AsObject = {
    allowedCorsOriginsList: Array<string>,
    audienceList: Array<string>,
    backchannelLogoutSessionRequired: boolean,
    backchannelLogoutUri: string,
    clientName: string,
    clientUri: string,
    contactsList: Array<string>,
    frontchannelLogoutSessionRequired: boolean,
    frontchannelLogoutUri: string,
    grantTypesList: Array<GrantTypeMap[keyof GrantTypeMap]>,
    jwks?: google_protobuf_struct_pb.Struct.AsObject,
    jwksUri: string,
    logoUri: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    owner: string,
    policyUri: string,
    postLogoutRedirectUrisList: Array<string>,
    redirectUrisList: Array<string>,
    requestObjectSigningAlg: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap],
    requestUrisList: Array<string>,
    responseTypesList: Array<ResponseTypeMap[keyof ResponseTypeMap]>,
    scope: string,
    sectorIdentifierUri: string,
    subjectType: SubjectTypeMap[keyof SubjectTypeMap],
    tokenEndpointAuthMethod: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap],
    tokenEndpointAuthSigningAlg: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap],
    tosUri: string,
    userinfoSignedResponseAlg: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap],
    clientSecret: string,
    clientType: ClientTypeMap[keyof ClientTypeMap],
  }
}

export class CreateOAuth2ClientResponse extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOAuth2ClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOAuth2ClientResponse): CreateOAuth2ClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOAuth2ClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOAuth2ClientResponse;
  static deserializeBinaryFromReader(message: CreateOAuth2ClientResponse, reader: jspb.BinaryReader): CreateOAuth2ClientResponse;
}

export namespace CreateOAuth2ClientResponse {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
  }
}

export class UpdateOAuth2ClientRequest extends jspb.Message {
  clearAllowedCorsOriginsList(): void;
  getAllowedCorsOriginsList(): Array<string>;
  setAllowedCorsOriginsList(value: Array<string>): void;
  addAllowedCorsOrigins(value: string, index?: number): string;

  clearAudienceList(): void;
  getAudienceList(): Array<string>;
  setAudienceList(value: Array<string>): void;
  addAudience(value: string, index?: number): string;

  getBackchannelLogoutSessionRequired(): boolean;
  setBackchannelLogoutSessionRequired(value: boolean): void;

  getBackchannelLogoutUri(): string;
  setBackchannelLogoutUri(value: string): void;

  getClientName(): string;
  setClientName(value: string): void;

  getClientUri(): string;
  setClientUri(value: string): void;

  clearContactsList(): void;
  getContactsList(): Array<string>;
  setContactsList(value: Array<string>): void;
  addContacts(value: string, index?: number): string;

  getFrontchannelLogoutSessionRequired(): boolean;
  setFrontchannelLogoutSessionRequired(value: boolean): void;

  getFrontchannelLogoutUri(): string;
  setFrontchannelLogoutUri(value: string): void;

  clearGrantTypesList(): void;
  getGrantTypesList(): Array<GrantTypeMap[keyof GrantTypeMap]>;
  setGrantTypesList(value: Array<GrantTypeMap[keyof GrantTypeMap]>): void;
  addGrantTypes(value: GrantTypeMap[keyof GrantTypeMap], index?: number): GrantTypeMap[keyof GrantTypeMap];

  hasJwks(): boolean;
  clearJwks(): void;
  getJwks(): google_protobuf_struct_pb.Struct | undefined;
  setJwks(value?: google_protobuf_struct_pb.Struct): void;

  getJwksUri(): string;
  setJwksUri(value: string): void;

  getLogoUri(): string;
  setLogoUri(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  getOwner(): string;
  setOwner(value: string): void;

  getPolicyUri(): string;
  setPolicyUri(value: string): void;

  clearPostLogoutRedirectUrisList(): void;
  getPostLogoutRedirectUrisList(): Array<string>;
  setPostLogoutRedirectUrisList(value: Array<string>): void;
  addPostLogoutRedirectUris(value: string, index?: number): string;

  clearRedirectUrisList(): void;
  getRedirectUrisList(): Array<string>;
  setRedirectUrisList(value: Array<string>): void;
  addRedirectUris(value: string, index?: number): string;

  getRequestObjectSigningAlg(): RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap];
  setRequestObjectSigningAlg(value: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap]): void;

  clearRequestUrisList(): void;
  getRequestUrisList(): Array<string>;
  setRequestUrisList(value: Array<string>): void;
  addRequestUris(value: string, index?: number): string;

  clearResponseTypesList(): void;
  getResponseTypesList(): Array<ResponseTypeMap[keyof ResponseTypeMap]>;
  setResponseTypesList(value: Array<ResponseTypeMap[keyof ResponseTypeMap]>): void;
  addResponseTypes(value: ResponseTypeMap[keyof ResponseTypeMap], index?: number): ResponseTypeMap[keyof ResponseTypeMap];

  getScope(): string;
  setScope(value: string): void;

  getSectorIdentifierUri(): string;
  setSectorIdentifierUri(value: string): void;

  getSubjectType(): SubjectTypeMap[keyof SubjectTypeMap];
  setSubjectType(value: SubjectTypeMap[keyof SubjectTypeMap]): void;

  getTokenEndpointAuthMethod(): TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap];
  setTokenEndpointAuthMethod(value: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap]): void;

  getTokenEndpointAuthSigningAlg(): TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap];
  setTokenEndpointAuthSigningAlg(value: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap]): void;

  getTosUri(): string;
  setTosUri(value: string): void;

  getUserinfoSignedResponseAlg(): UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap];
  setUserinfoSignedResponseAlg(value: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap]): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOAuth2ClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOAuth2ClientRequest): UpdateOAuth2ClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOAuth2ClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOAuth2ClientRequest;
  static deserializeBinaryFromReader(message: UpdateOAuth2ClientRequest, reader: jspb.BinaryReader): UpdateOAuth2ClientRequest;
}

export namespace UpdateOAuth2ClientRequest {
  export type AsObject = {
    allowedCorsOriginsList: Array<string>,
    audienceList: Array<string>,
    backchannelLogoutSessionRequired: boolean,
    backchannelLogoutUri: string,
    clientName: string,
    clientUri: string,
    contactsList: Array<string>,
    frontchannelLogoutSessionRequired: boolean,
    frontchannelLogoutUri: string,
    grantTypesList: Array<GrantTypeMap[keyof GrantTypeMap]>,
    jwks?: google_protobuf_struct_pb.Struct.AsObject,
    jwksUri: string,
    logoUri: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    owner: string,
    policyUri: string,
    postLogoutRedirectUrisList: Array<string>,
    redirectUrisList: Array<string>,
    requestObjectSigningAlg: RequestObjectSigningAlgMap[keyof RequestObjectSigningAlgMap],
    requestUrisList: Array<string>,
    responseTypesList: Array<ResponseTypeMap[keyof ResponseTypeMap]>,
    scope: string,
    sectorIdentifierUri: string,
    subjectType: SubjectTypeMap[keyof SubjectTypeMap],
    tokenEndpointAuthMethod: TokenEndpointAuthMethodMap[keyof TokenEndpointAuthMethodMap],
    tokenEndpointAuthSigningAlg: TokenEndpointAuthSigningAlgMap[keyof TokenEndpointAuthSigningAlgMap],
    tosUri: string,
    userinfoSignedResponseAlg: UserinfoSignedResponseAlgMap[keyof UserinfoSignedResponseAlgMap],
    clientSecret: string,
    clientId: string,
  }
}

export class UpdateOAuth2ClientResponse extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getClientSecret(): string;
  setClientSecret(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOAuth2ClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOAuth2ClientResponse): UpdateOAuth2ClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOAuth2ClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOAuth2ClientResponse;
  static deserializeBinaryFromReader(message: UpdateOAuth2ClientResponse, reader: jspb.BinaryReader): UpdateOAuth2ClientResponse;
}

export namespace UpdateOAuth2ClientResponse {
  export type AsObject = {
    clientId: string,
    clientSecret: string,
  }
}

export class DeleteOAuth2ClientRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOAuth2ClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOAuth2ClientRequest): DeleteOAuth2ClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOAuth2ClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOAuth2ClientRequest;
  static deserializeBinaryFromReader(message: DeleteOAuth2ClientRequest, reader: jspb.BinaryReader): DeleteOAuth2ClientRequest;
}

export namespace DeleteOAuth2ClientRequest {
  export type AsObject = {
    clientId: string,
  }
}

export class DeleteOAuth2ClientResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOAuth2ClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOAuth2ClientResponse): DeleteOAuth2ClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOAuth2ClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOAuth2ClientResponse;
  static deserializeBinaryFromReader(message: DeleteOAuth2ClientResponse, reader: jspb.BinaryReader): DeleteOAuth2ClientResponse;
}

export namespace DeleteOAuth2ClientResponse {
  export type AsObject = {
  }
}

export class GetAddressesRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressesRequest): GetAddressesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressesRequest;
  static deserializeBinaryFromReader(message: GetAddressesRequest, reader: jspb.BinaryReader): GetAddressesRequest;
}

export namespace GetAddressesRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class GetAddressesResponse extends jspb.Message {
  clearAddressesList(): void;
  getAddressesList(): Array<GetAddressesResponse.Address>;
  setAddressesList(value: Array<GetAddressesResponse.Address>): void;
  addAddresses(value?: GetAddressesResponse.Address, index?: number): GetAddressesResponse.Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressesResponse): GetAddressesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressesResponse;
  static deserializeBinaryFromReader(message: GetAddressesResponse, reader: jspb.BinaryReader): GetAddressesResponse;
}

export namespace GetAddressesResponse {
  export type AsObject = {
    addressesList: Array<GetAddressesResponse.Address.AsObject>,
  }

  export class Address extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getIdentityId(): string;
    setIdentityId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    getVerified(): boolean;
    setVerified(value: boolean): void;

    getIdSchemaKey(): string;
    setIdSchemaKey(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Address.AsObject;
    static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Address;
    static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
  }

  export namespace Address {
    export type AsObject = {
      id: string,
      identityId: string,
      name: string,
      address: string,
      verified: boolean,
      idSchemaKey: string,
    }
  }
}

export class GetAddressRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasVerification(): boolean;
  clearVerification(): void;
  getVerification(): string;
  setVerification(value: string): void;

  getMatchCase(): GetAddressRequest.MatchCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
  static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
  export type AsObject = {
    id: string,
    verification: string,
  }

  export enum MatchCase {
    MATCH_NOT_SET = 0,
    ID = 1,
    VERIFICATION = 2,
  }
}

export class GetAddressResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIdentityId(): string;
  setIdentityId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getVerified(): boolean;
  setVerified(value: boolean): void;

  getIdSchemaKey(): string;
  setIdSchemaKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressResponse): GetAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressResponse;
  static deserializeBinaryFromReader(message: GetAddressResponse, reader: jspb.BinaryReader): GetAddressResponse;
}

export namespace GetAddressResponse {
  export type AsObject = {
    id: string,
    identityId: string,
    name: string,
    address: string,
    verified: boolean,
    idSchemaKey: string,
  }
}

export class UpdateAddressRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasVerified(): boolean;
  clearVerified(): void;
  getVerified(): boolean;
  setVerified(value: boolean): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): string;
  setAddress(value: string): void;

  getAttributeCase(): UpdateAddressRequest.AttributeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAddressRequest): UpdateAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAddressRequest;
  static deserializeBinaryFromReader(message: UpdateAddressRequest, reader: jspb.BinaryReader): UpdateAddressRequest;
}

export namespace UpdateAddressRequest {
  export type AsObject = {
    id: string,
    verified: boolean,
    address: string,
  }

  export enum AttributeCase {
    ATTRIBUTE_NOT_SET = 0,
    VERIFIED = 2,
    ADDRESS = 3,
  }
}

export class UpdateAddressResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAddressResponse): UpdateAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAddressResponse;
  static deserializeBinaryFromReader(message: UpdateAddressResponse, reader: jspb.BinaryReader): UpdateAddressResponse;
}

export namespace UpdateAddressResponse {
  export type AsObject = {
  }
}

export class GetTraitsRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTraitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTraitsRequest): GetTraitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTraitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTraitsRequest;
  static deserializeBinaryFromReader(message: GetTraitsRequest, reader: jspb.BinaryReader): GetTraitsRequest;
}

export namespace GetTraitsRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class GetTraitsResponse extends jspb.Message {
  getTraits(): string;
  setTraits(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTraitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTraitsResponse): GetTraitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTraitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTraitsResponse;
  static deserializeBinaryFromReader(message: GetTraitsResponse, reader: jspb.BinaryReader): GetTraitsResponse;
}

export namespace GetTraitsResponse {
  export type AsObject = {
    traits: string,
  }
}

export class UpdateTraitsRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  getTraits(): string;
  setTraits(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTraitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTraitsRequest): UpdateTraitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTraitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTraitsRequest;
  static deserializeBinaryFromReader(message: UpdateTraitsRequest, reader: jspb.BinaryReader): UpdateTraitsRequest;
}

export namespace UpdateTraitsRequest {
  export type AsObject = {
    identityId: string,
    traits: string,
  }
}

export class UpdateTraitsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTraitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTraitsResponse): UpdateTraitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateTraitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTraitsResponse;
  static deserializeBinaryFromReader(message: UpdateTraitsResponse, reader: jspb.BinaryReader): UpdateTraitsResponse;
}

export namespace UpdateTraitsResponse {
  export type AsObject = {
  }
}

export class GetIdentityLoginAttemptsRequest extends jspb.Message {
  getIdentityId(): string;
  setIdentityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityLoginAttemptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityLoginAttemptsRequest): GetIdentityLoginAttemptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityLoginAttemptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityLoginAttemptsRequest;
  static deserializeBinaryFromReader(message: GetIdentityLoginAttemptsRequest, reader: jspb.BinaryReader): GetIdentityLoginAttemptsRequest;
}

export namespace GetIdentityLoginAttemptsRequest {
  export type AsObject = {
    identityId: string,
  }
}

export class GetIdentityLoginAttemptsResponse extends jspb.Message {
  clearAttemptsList(): void;
  getAttemptsList(): Array<GetIdentityLoginAttemptsResponse.Attempt>;
  setAttemptsList(value: Array<GetIdentityLoginAttemptsResponse.Attempt>): void;
  addAttempts(value?: GetIdentityLoginAttemptsResponse.Attempt, index?: number): GetIdentityLoginAttemptsResponse.Attempt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdentityLoginAttemptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdentityLoginAttemptsResponse): GetIdentityLoginAttemptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdentityLoginAttemptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdentityLoginAttemptsResponse;
  static deserializeBinaryFromReader(message: GetIdentityLoginAttemptsResponse, reader: jspb.BinaryReader): GetIdentityLoginAttemptsResponse;
}

export namespace GetIdentityLoginAttemptsResponse {
  export type AsObject = {
    attemptsList: Array<GetIdentityLoginAttemptsResponse.Attempt.AsObject>,
  }

  export class Attempt extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getIdentityId(): string;
    setIdentityId(value: string): void;

    getStatus(): string;
    setStatus(value: string): void;

    clearAuthenticationMethodsList(): void;
    getAuthenticationMethodsList(): Array<string>;
    setAuthenticationMethodsList(value: Array<string>): void;
    addAuthenticationMethods(value: string, index?: number): string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasExpiresAt(): boolean;
    clearExpiresAt(): void;
    getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attempt.AsObject;
    static toObject(includeInstance: boolean, msg: Attempt): Attempt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attempt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attempt;
    static deserializeBinaryFromReader(message: Attempt, reader: jspb.BinaryReader): Attempt;
  }

  export namespace Attempt {
    export type AsObject = {
      id: string,
      identityId: string,
      status: string,
      authenticationMethodsList: Array<string>,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }
}

export class CreateIdSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIdSchemaRequest): CreateIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIdSchemaRequest;
  static deserializeBinaryFromReader(message: CreateIdSchemaRequest, reader: jspb.BinaryReader): CreateIdSchemaRequest;
}

export namespace CreateIdSchemaRequest {
  export type AsObject = {
    name: string,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CreateIdSchemaResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateIdSchemaResponse): CreateIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateIdSchemaResponse;
  static deserializeBinaryFromReader(message: CreateIdSchemaResponse, reader: jspb.BinaryReader): CreateIdSchemaResponse;
}

export namespace CreateIdSchemaResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetIdSchemasRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdSchemasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdSchemasRequest): GetIdSchemasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdSchemasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdSchemasRequest;
  static deserializeBinaryFromReader(message: GetIdSchemasRequest, reader: jspb.BinaryReader): GetIdSchemasRequest;
}

export namespace GetIdSchemasRequest {
  export type AsObject = {
  }
}

export class GetIdSchemasResponse extends jspb.Message {
  clearJsonschemasList(): void;
  getJsonschemasList(): Array<GetIdSchemasResponse.JsonSchema>;
  setJsonschemasList(value: Array<GetIdSchemasResponse.JsonSchema>): void;
  addJsonschemas(value?: GetIdSchemasResponse.JsonSchema, index?: number): GetIdSchemasResponse.JsonSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdSchemasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdSchemasResponse): GetIdSchemasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdSchemasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdSchemasResponse;
  static deserializeBinaryFromReader(message: GetIdSchemasResponse, reader: jspb.BinaryReader): GetIdSchemasResponse;
}

export namespace GetIdSchemasResponse {
  export type AsObject = {
    jsonschemasList: Array<GetIdSchemasResponse.JsonSchema.AsObject>,
  }

  export class JsonSchema extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): google_protobuf_struct_pb.Struct | undefined;
    setContent(value?: google_protobuf_struct_pb.Struct): void;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getIsDefault(): boolean;
    setIsDefault(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JsonSchema.AsObject;
    static toObject(includeInstance: boolean, msg: JsonSchema): JsonSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JsonSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JsonSchema;
    static deserializeBinaryFromReader(message: JsonSchema, reader: jspb.BinaryReader): JsonSchema;
  }

  export namespace JsonSchema {
    export type AsObject = {
      id: string,
      name: string,
      content?: google_protobuf_struct_pb.Struct.AsObject,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      isDefault: boolean,
    }
  }
}

export class GetIdSchemaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdSchemaRequest): GetIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdSchemaRequest;
  static deserializeBinaryFromReader(message: GetIdSchemaRequest, reader: jspb.BinaryReader): GetIdSchemaRequest;
}

export namespace GetIdSchemaRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetIdSchemaResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIdSchemaResponse): GetIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIdSchemaResponse;
  static deserializeBinaryFromReader(message: GetIdSchemaResponse, reader: jspb.BinaryReader): GetIdSchemaResponse;
}

export namespace GetIdSchemaResponse {
  export type AsObject = {
    id: string,
    name: string,
    content?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isDefault: boolean,
  }
}

export class GetDefaultIdSchemaRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultIdSchemaRequest): GetDefaultIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultIdSchemaRequest;
  static deserializeBinaryFromReader(message: GetDefaultIdSchemaRequest, reader: jspb.BinaryReader): GetDefaultIdSchemaRequest;
}

export namespace GetDefaultIdSchemaRequest {
  export type AsObject = {
  }
}

export class GetDefaultIdSchemaResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDefaultIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDefaultIdSchemaResponse): GetDefaultIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDefaultIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDefaultIdSchemaResponse;
  static deserializeBinaryFromReader(message: GetDefaultIdSchemaResponse, reader: jspb.BinaryReader): GetDefaultIdSchemaResponse;
}

export namespace GetDefaultIdSchemaResponse {
  export type AsObject = {
    id: string,
    name: string,
    content?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isDefault: boolean,
  }
}

export class UpdateIdSchemaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): google_protobuf_struct_pb.Struct | undefined;
  setContent(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIdSchemaRequest): UpdateIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIdSchemaRequest;
  static deserializeBinaryFromReader(message: UpdateIdSchemaRequest, reader: jspb.BinaryReader): UpdateIdSchemaRequest;
}

export namespace UpdateIdSchemaRequest {
  export type AsObject = {
    id: string,
    name: string,
    content?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateIdSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateIdSchemaResponse): UpdateIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateIdSchemaResponse;
  static deserializeBinaryFromReader(message: UpdateIdSchemaResponse, reader: jspb.BinaryReader): UpdateIdSchemaResponse;
}

export namespace UpdateIdSchemaResponse {
  export type AsObject = {
  }
}

export class MarkDefaultIdSchemaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkDefaultIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkDefaultIdSchemaRequest): MarkDefaultIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkDefaultIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkDefaultIdSchemaRequest;
  static deserializeBinaryFromReader(message: MarkDefaultIdSchemaRequest, reader: jspb.BinaryReader): MarkDefaultIdSchemaRequest;
}

export namespace MarkDefaultIdSchemaRequest {
  export type AsObject = {
    id: string,
  }
}

export class MarkDefaultIdSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkDefaultIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkDefaultIdSchemaResponse): MarkDefaultIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkDefaultIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkDefaultIdSchemaResponse;
  static deserializeBinaryFromReader(message: MarkDefaultIdSchemaResponse, reader: jspb.BinaryReader): MarkDefaultIdSchemaResponse;
}

export namespace MarkDefaultIdSchemaResponse {
  export type AsObject = {
  }
}

export class DeleteIdSchemaRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIdSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIdSchemaRequest): DeleteIdSchemaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIdSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIdSchemaRequest;
  static deserializeBinaryFromReader(message: DeleteIdSchemaRequest, reader: jspb.BinaryReader): DeleteIdSchemaRequest;
}

export namespace DeleteIdSchemaRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteIdSchemaResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteIdSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteIdSchemaResponse): DeleteIdSchemaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteIdSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteIdSchemaResponse;
  static deserializeBinaryFromReader(message: DeleteIdSchemaResponse, reader: jspb.BinaryReader): DeleteIdSchemaResponse;
}

export namespace DeleteIdSchemaResponse {
  export type AsObject = {
  }
}

export class GetEmailsSetupRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailsSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailsSetupRequest): GetEmailsSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailsSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailsSetupRequest;
  static deserializeBinaryFromReader(message: GetEmailsSetupRequest, reader: jspb.BinaryReader): GetEmailsSetupRequest;
}

export namespace GetEmailsSetupRequest {
  export type AsObject = {
  }
}

export class GetEmailsSetupResponse extends jspb.Message {
  hasWelcome(): boolean;
  clearWelcome(): void;
  getWelcome(): GetEmailsSetupResponse.EmailTemplate | undefined;
  setWelcome(value?: GetEmailsSetupResponse.EmailTemplate): void;

  hasAccountVerification(): boolean;
  clearAccountVerification(): void;
  getAccountVerification(): GetEmailsSetupResponse.EmailTemplate | undefined;
  setAccountVerification(value?: GetEmailsSetupResponse.EmailTemplate): void;

  hasAccountRecovery(): boolean;
  clearAccountRecovery(): void;
  getAccountRecovery(): GetEmailsSetupResponse.EmailTemplate | undefined;
  setAccountRecovery(value?: GetEmailsSetupResponse.EmailTemplate): void;

  hasAccountRecovered(): boolean;
  clearAccountRecovered(): void;
  getAccountRecovered(): GetEmailsSetupResponse.EmailTemplate | undefined;
  setAccountRecovered(value?: GetEmailsSetupResponse.EmailTemplate): void;

  hasOtp(): boolean;
  clearOtp(): void;
  getOtp(): GetEmailsSetupResponse.EmailTemplate | undefined;
  setOtp(value?: GetEmailsSetupResponse.EmailTemplate): void;

  hasSmtp(): boolean;
  clearSmtp(): void;
  getSmtp(): GetEmailsSetupResponse.EmailSender | undefined;
  setSmtp(value?: GetEmailsSetupResponse.EmailSender): void;

  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmailsSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmailsSetupResponse): GetEmailsSetupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmailsSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmailsSetupResponse;
  static deserializeBinaryFromReader(message: GetEmailsSetupResponse, reader: jspb.BinaryReader): GetEmailsSetupResponse;
}

export namespace GetEmailsSetupResponse {
  export type AsObject = {
    welcome?: GetEmailsSetupResponse.EmailTemplate.AsObject,
    accountVerification?: GetEmailsSetupResponse.EmailTemplate.AsObject,
    accountRecovery?: GetEmailsSetupResponse.EmailTemplate.AsObject,
    accountRecovered?: GetEmailsSetupResponse.EmailTemplate.AsObject,
    otp?: GetEmailsSetupResponse.EmailTemplate.AsObject,
    smtp?: GetEmailsSetupResponse.EmailSender.AsObject,
    projectId: string,
  }

  export class EmailTemplate extends jspb.Message {
    getContent(): string;
    setContent(value: string): void;

    getSubject(): string;
    setSubject(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: EmailTemplate): EmailTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailTemplate;
    static deserializeBinaryFromReader(message: EmailTemplate, reader: jspb.BinaryReader): EmailTemplate;
  }

  export namespace EmailTemplate {
    export type AsObject = {
      content: string,
      subject: string,
    }
  }

  export class EmailSender extends jspb.Message {
    getEmailAddress(): string;
    setEmailAddress(value: string): void;

    getSmtpHost(): string;
    setSmtpHost(value: string): void;

    getSmtpPort(): number;
    setSmtpPort(value: number): void;

    getSmtpUsername(): string;
    setSmtpUsername(value: string): void;

    getSmtpPassword(): string;
    setSmtpPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailSender.AsObject;
    static toObject(includeInstance: boolean, msg: EmailSender): EmailSender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailSender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailSender;
    static deserializeBinaryFromReader(message: EmailSender, reader: jspb.BinaryReader): EmailSender;
  }

  export namespace EmailSender {
    export type AsObject = {
      emailAddress: string,
      smtpHost: string,
      smtpPort: number,
      smtpUsername: string,
      smtpPassword: string,
    }
  }
}

export class UpdateEmailsSetupRequest extends jspb.Message {
  hasWelcome(): boolean;
  clearWelcome(): void;
  getWelcome(): UpdateEmailsSetupRequest.EmailTemplate | undefined;
  setWelcome(value?: UpdateEmailsSetupRequest.EmailTemplate): void;

  hasAccountVerification(): boolean;
  clearAccountVerification(): void;
  getAccountVerification(): UpdateEmailsSetupRequest.EmailTemplate | undefined;
  setAccountVerification(value?: UpdateEmailsSetupRequest.EmailTemplate): void;

  hasAccountRecovery(): boolean;
  clearAccountRecovery(): void;
  getAccountRecovery(): UpdateEmailsSetupRequest.EmailTemplate | undefined;
  setAccountRecovery(value?: UpdateEmailsSetupRequest.EmailTemplate): void;

  hasAccountRecovered(): boolean;
  clearAccountRecovered(): void;
  getAccountRecovered(): UpdateEmailsSetupRequest.EmailTemplate | undefined;
  setAccountRecovered(value?: UpdateEmailsSetupRequest.EmailTemplate): void;

  hasOtp(): boolean;
  clearOtp(): void;
  getOtp(): UpdateEmailsSetupRequest.EmailTemplate | undefined;
  setOtp(value?: UpdateEmailsSetupRequest.EmailTemplate): void;

  hasSmtp(): boolean;
  clearSmtp(): void;
  getSmtp(): UpdateEmailsSetupRequest.EmailSender | undefined;
  setSmtp(value?: UpdateEmailsSetupRequest.EmailSender): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailsSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailsSetupRequest): UpdateEmailsSetupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailsSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailsSetupRequest;
  static deserializeBinaryFromReader(message: UpdateEmailsSetupRequest, reader: jspb.BinaryReader): UpdateEmailsSetupRequest;
}

export namespace UpdateEmailsSetupRequest {
  export type AsObject = {
    welcome?: UpdateEmailsSetupRequest.EmailTemplate.AsObject,
    accountVerification?: UpdateEmailsSetupRequest.EmailTemplate.AsObject,
    accountRecovery?: UpdateEmailsSetupRequest.EmailTemplate.AsObject,
    accountRecovered?: UpdateEmailsSetupRequest.EmailTemplate.AsObject,
    otp?: UpdateEmailsSetupRequest.EmailTemplate.AsObject,
    smtp?: UpdateEmailsSetupRequest.EmailSender.AsObject,
  }

  export class EmailTemplate extends jspb.Message {
    getContent(): string;
    setContent(value: string): void;

    getSubject(): string;
    setSubject(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailTemplate.AsObject;
    static toObject(includeInstance: boolean, msg: EmailTemplate): EmailTemplate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailTemplate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailTemplate;
    static deserializeBinaryFromReader(message: EmailTemplate, reader: jspb.BinaryReader): EmailTemplate;
  }

  export namespace EmailTemplate {
    export type AsObject = {
      content: string,
      subject: string,
    }
  }

  export class EmailSender extends jspb.Message {
    getEmailAddress(): string;
    setEmailAddress(value: string): void;

    getSmtpHost(): string;
    setSmtpHost(value: string): void;

    getSmtpPort(): number;
    setSmtpPort(value: number): void;

    getSmtpUsername(): string;
    setSmtpUsername(value: string): void;

    getSmtpPassword(): string;
    setSmtpPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailSender.AsObject;
    static toObject(includeInstance: boolean, msg: EmailSender): EmailSender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailSender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailSender;
    static deserializeBinaryFromReader(message: EmailSender, reader: jspb.BinaryReader): EmailSender;
  }

  export namespace EmailSender {
    export type AsObject = {
      emailAddress: string,
      smtpHost: string,
      smtpPort: number,
      smtpUsername: string,
      smtpPassword: string,
    }
  }
}

export class UpdateEmailsSetupResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailsSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailsSetupResponse): UpdateEmailsSetupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateEmailsSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailsSetupResponse;
  static deserializeBinaryFromReader(message: UpdateEmailsSetupResponse, reader: jspb.BinaryReader): UpdateEmailsSetupResponse;
}

export namespace UpdateEmailsSetupResponse {
  export type AsObject = {
  }
}

export class GetUserBaseStatisticsRequest extends jspb.Message {
  getDaysBefore(): number;
  setDaysBefore(value: number): void;

  hasLifetimeStartAt(): boolean;
  clearLifetimeStartAt(): void;
  getLifetimeStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLifetimeStartAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLifetimeEndAt(): boolean;
  clearLifetimeEndAt(): void;
  getLifetimeEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLifetimeEndAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBaseStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBaseStatisticsRequest): GetUserBaseStatisticsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBaseStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBaseStatisticsRequest;
  static deserializeBinaryFromReader(message: GetUserBaseStatisticsRequest, reader: jspb.BinaryReader): GetUserBaseStatisticsRequest;
}

export namespace GetUserBaseStatisticsRequest {
  export type AsObject = {
    daysBefore: number,
    lifetimeStartAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lifetimeEndAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetUserBaseStatisticsResponse extends jspb.Message {
  getTotalUsers(): number;
  setTotalUsers(value: number): void;

  getUsersPerDayMap(): jspb.Map<string, number>;
  clearUsersPerDayMap(): void;
  getSessionsPerDayMap(): jspb.Map<string, number>;
  clearSessionsPerDayMap(): void;
  getTotalActiveUsers(): number;
  setTotalActiveUsers(value: number): void;

  getTotalLifetimeUsed(): number;
  setTotalLifetimeUsed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserBaseStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserBaseStatisticsResponse): GetUserBaseStatisticsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserBaseStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserBaseStatisticsResponse;
  static deserializeBinaryFromReader(message: GetUserBaseStatisticsResponse, reader: jspb.BinaryReader): GetUserBaseStatisticsResponse;
}

export namespace GetUserBaseStatisticsResponse {
  export type AsObject = {
    totalUsers: number,
    usersPerDayMap: Array<[string, number]>,
    sessionsPerDayMap: Array<[string, number]>,
    totalActiveUsers: number,
    totalLifetimeUsed: number,
  }
}

export interface ClientTypeMap {
  CLIENT_TYPE_UNSET: 0;
  CLIENT_FIRST_PARTY: 1;
  CLIENT_THIRD_PARTY: 2;
  CLIENT_SYSTEM_PARTY: 3;
}

export const ClientType: ClientTypeMap;

export interface SubjectTypeMap {
  SUBJECT_TYPE_PUBLIC: 0;
  SUBJECT_TYPE_PAIRWISE: 1;
}

export const SubjectType: SubjectTypeMap;

export interface TokenEndpointAuthMethodMap {
  TOKEN_ENDPOINT_AUTH_METHOD_CLIENT_SECRET_BASIC: 0;
  TOKEN_ENDPOINT_AUTH_METHOD_CLIENT_SECRET_POST: 1;
  TOKEN_ENDPOINT_AUTH_METHOD_PRIVATE_KEY_JWT: 2;
  TOKEN_ENDPOINT_AUTH_METHOD_NONE: 3;
}

export const TokenEndpointAuthMethod: TokenEndpointAuthMethodMap;

export interface TokenEndpointAuthSigningAlgMap {
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_UNSET: 0;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS256: 1;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS384: 2;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_RS512: 3;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS256: 4;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS384: 5;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_PS512: 6;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES256: 7;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES384: 8;
  TOKEN_ENDPOINT_AUTH_SIGNING_ALG_ES512: 9;
}

export const TokenEndpointAuthSigningAlg: TokenEndpointAuthSigningAlgMap;

export interface GrantTypeMap {
  GRANT_TYPE_UNSET: 0;
  GRANT_TYPE_CLIENT_CREDENTIALS: 1;
  GRANT_TYPE_AUTHORIZATION_CODE: 2;
  GRANT_TYPE_IMPLICIT: 3;
  GRANT_TYPE_REFRESH_TOKEN: 4;
  GRANT_TYPE_DEVICE_CODE: 5;
}

export const GrantType: GrantTypeMap;

export interface ResponseTypeMap {
  RESPONSE_TYPE_UNSET: 0;
  RESPONSE_TYPE_NONE: 1;
  RESPONSE_TYPE_ID_TOKEN: 2;
  RESPONSE_TYPE_TOKEN: 3;
  RESPONSE_TYPE_CODE: 4;
  RESPONSE_TYPE_ID_TOKEN_TOKEN: 5;
  RESPONSE_TYPE_CODE_ID_TOKEN: 6;
  RESPONSE_TYPE_CODE_TOKEN: 7;
  RESPONSE_TYPE_CODE_ID_TOKEN_TOKEN: 8;
}

export const ResponseType: ResponseTypeMap;

export interface RequestObjectSigningAlgMap {
  REQUEST_OBJECT_SIGNING_ALG_UNSET: 0;
  REQUEST_OBJECT_SIGNING_ALG_NONE: 1;
  REQUEST_OBJECT_SIGNING_ALG_RS256: 2;
}

export const RequestObjectSigningAlg: RequestObjectSigningAlgMap;

export interface UserinfoSignedResponseAlgMap {
  USERINFO_SIGNED_RESPONSE_ALG_UNSET: 0;
  USERINFO_SIGNED_RESPONSE_ALG_NONE: 1;
  USERINFO_SIGNED_RESPONSE_ALG_RS256: 2;
}

export const UserinfoSignedResponseAlg: UserinfoSignedResponseAlgMap;

