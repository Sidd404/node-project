import express, { Application } from "express";

import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggermerge from "swagger-merge";
var path = require("path");
import connect_to_db from "./config/db.connection";
import companyRoutes from "./modules/company/routes";
import userRoutes from "./modules/user/routes";
import teamRoutes from "./modules/team/routes";
import swagger_document from "./output.openapi.json";

const app: Application = express();
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());
app.use("/api/company", companyRoutes);
app.use("/api", teamRoutes);
app.use("/api", userRoutes);
var info = {
  version: 1.0,
  title: "Company_Teams_task",
  description: "Api`s for Task",
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger_document));
connect_to_db();
export = app;
