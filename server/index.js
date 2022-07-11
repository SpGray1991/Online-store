const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/index.js");
const fileupload = require("express-fileupload");
const path = require("path");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileupload({}));
app.use("/api", router);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
