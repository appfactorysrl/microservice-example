// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: time-protocol.proto

import * as time_protocol_pb from "./time-protocol_pb";
import * as grpc from "@grpc/grpc-js";

interface ITimeProtocolService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCurrentTime: grpc.MethodDefinition<time_protocol_pb.Empty, time_protocol_pb.TimeInfo>;
}

export const TimeProtocolService: ITimeProtocolService;

export interface ITimeProtocolServer extends grpc.UntypedServiceImplementation {
  getCurrentTime: grpc.handleUnaryCall<time_protocol_pb.Empty, time_protocol_pb.TimeInfo>;
}

export class TimeProtocolClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCurrentTime(argument: time_protocol_pb.Empty, callback: grpc.requestCallback<time_protocol_pb.TimeInfo>): grpc.ClientUnaryCall;
  getCurrentTime(argument: time_protocol_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<time_protocol_pb.TimeInfo>): grpc.ClientUnaryCall;
  getCurrentTime(argument: time_protocol_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<time_protocol_pb.TimeInfo>): grpc.ClientUnaryCall;
}
