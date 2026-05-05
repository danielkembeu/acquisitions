import express from "express";

const app = express();
const PORT = process.env.PORT || 3100;

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/health", function (req, res) {
  res.json({
    message: "Welcome",
  });
});

app.listen(PORT, () => console.log(`[SERVER] Now running on port ${PORT}`));
