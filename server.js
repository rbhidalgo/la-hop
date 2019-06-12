const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

require("./db/db");

// Routes
const ticketRouter = require("./routes/tickets");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/ticket", ticketRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, err => {
  console.log(err || "App is listening on port, ", PORT);
});

module.exports = app;
