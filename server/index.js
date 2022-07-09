const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
