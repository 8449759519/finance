import express from "express";

let app = express();

app.get("/finance", (req, res) => {
  res.send("hellow");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
