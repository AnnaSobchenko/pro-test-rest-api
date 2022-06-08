const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const usersRouter = require("./routes/api/users");
const questionsRouter = require("./routes/api/questions");

const app = express();
// const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/auth", usersRouter);
app.use("/test", questionsRouter);
// app.use('/auth', usersRouter);
// app.use("/avatars", express.static("public/avatars"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found, app" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
