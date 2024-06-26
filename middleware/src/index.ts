import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { timeRouter } from "./modules/time";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express1 + TypeScript Server");
});

app.use("/time", timeRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
