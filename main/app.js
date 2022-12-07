//init express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router");

const app = express();
// use cors
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

//init body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

//listen to port
app.listen(3000, () => {
  console.log("Server started on port http://127.0.0.1:3000/");
});
