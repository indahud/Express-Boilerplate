const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const logs = require("./api/expenses");
const middlewares = require("./middlewares");

require("dotenv").config();

// Middlewares
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.get("/home", (req, res) => {
  res.send("🏠🏠");
});

// API'S
app.use("/api/expenses", logs);

// Error handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
