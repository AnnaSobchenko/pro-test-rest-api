const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const usersRouter = require("./routes/api/users");

const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "PRO-TEST API",
      description: "PRO-TEST information",
      contact: {
        name: "Students GoIT",
      },
      servers: ["http://localhost:3001"],
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
// /**
//  * @swagger
//  * /auth/signup:
//  *   post:
//  *    description: User to auth user
//  *      responses:
//  *        '201':
//  *            description: successful response
//  */

app.use("/auth", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found, app" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
