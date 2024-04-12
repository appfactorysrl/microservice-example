import { credentials } from "@grpc/grpc-js";
import { Express, Request, Response, Router } from "express";
import { TimeProtocolClient } from "../../gen/time-protocol_grpc_pb";
import { Empty } from "../../gen/time-protocol_pb";
export const timeRouter = Router();

console.log(process.env.TIME_SERVICE);

let timeService = new TimeProtocolClient(
    process.env.TIME_SERVICE || "localhost:50051",
    credentials.createInsecure()
);

timeRouter.get("/", async (req: Request, res: Response) => {
    console.log("calling");
    timeService.getCurrentTime(new Empty(), (err, result) => {
        if (err) {
            console.log("uhm, error");
            return res.send(err);
        }
        console.log("ok, called", result?.getTime());
        res.send(result?.getTime());
    });
});
