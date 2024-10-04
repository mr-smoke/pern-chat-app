import express from "express";

import authRoutes from "./routes/auth.route.js";
import messsageRoutes from "./routes/message.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/message", messsageRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});