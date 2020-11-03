import bodyParser from "body-parser";
import express from "express";
import routes from "./routes";
import { createInstance } from "./utilities/db";

// creating app instance
const app = express();

// creating db instance
createInstance();

// set port from environment and default from settings
app.set("port", process.env.PORT || 8080);

// parsing request body
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 1000000 }));

// add All Routes To App
app.use("/api", routes);

export default app;
