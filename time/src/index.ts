import dotenv from "dotenv";
import {
    Server,
    ServerCredentials,
    ServerUnaryCall,
    sendUnaryData,
} from "@grpc/grpc-js";
import { getCurrentTime } from "./modules/time";
import {
    ITimeProtocolServer,
    TimeProtocolService,
} from "./gen/time-protocol_grpc_pb";
import { Empty, TimeInfo } from "./gen/time-protocol_pb";

dotenv.config();
const port = process.env.PORT || 3000;

class TimeProtocolServiceServer implements ITimeProtocolServer {
    [name: string]: import("@grpc/grpc-js").UntypedHandleCall;

    getCurrentTime(
        call: ServerUnaryCall<Empty, TimeInfo>,
        callback: sendUnaryData<TimeInfo>
    ) {
        const response = new TimeInfo();
        response.setTime(getCurrentTime());
        callback(null, response);
    }
}

let server = new Server();
server.addService(TimeProtocolService, new TimeProtocolServiceServer());

server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
        if (error) {
            console.error(`Server error: ${error.message}`);
            return;
        }
        console.log("TimeMS ready");
    }
);
