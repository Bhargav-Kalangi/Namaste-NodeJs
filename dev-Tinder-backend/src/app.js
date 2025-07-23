const express = require("express");
const app = express();
const port = 7777;

//order does matters in Node js (code runs from top to bottom)
app.get("/", (req, res) => {
  res.send("Hello from Default page///");
});

app.use("/login", (req, res) => {
  res.send("Hello from Login page");
});
app.use("/test", (req, res) => {
  res.send("Hello from test..");
});

app.listen(port, () => {
  console.log("console.log will be printed only it is connected to server");
});
