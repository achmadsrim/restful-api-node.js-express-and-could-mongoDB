const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import router
const postsRouter = require("./router/posts");

app.use("/posts", postsRouter);

//router
app.get("/", (req, res) => {
  res.send("Kami rumah");
});

//konek ke db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Konek DB!")
);

//memulai memangil server
app.listen(5000);
