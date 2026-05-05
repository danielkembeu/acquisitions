import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/health", function (req, res) {
  res.json({
    message: "Welcome",
  });
});

export default app;
