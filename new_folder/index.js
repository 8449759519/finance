import express from "express";
import path from "path";

let app = express();

app.get("/finance", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
