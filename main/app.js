//init express
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./router.js";
import { protect } from "./auth/auth.js";
import { createNewUser, loginUser } from "./handlers/user.js";

dotenv.config();

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

// init morgan
app.use(morgan("dev"));

// custom middleware
app.use((req, res, next) => {
  req.message = "It works!";
  next();
});
app.get("/test", (req, res) => {
  res.send(req.message);
});

// get all routes
// app.use("/", protect, router);
app.use("/user", createNewUser);
app.use("/login", loginUser);

//listen to port
app.listen(3000, () => {
  console.log("Server started on port http://127.0.0.1:3000/");
});
