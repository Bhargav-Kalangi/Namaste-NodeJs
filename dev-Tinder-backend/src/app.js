const express = require("express");
const app = express();
const port = 7777;

app.use("/login", (req, res) => {
  res.send("Hello from Login page");
});
app.use("/test", (req, res) => {
  res.send("Hello from test..");
});

app.use("/", (req, res) => {
  res.send("Hello from Default page///");
});
app.listen(port, () => {
  console.log("console.log will be printed only it is connected to server");
});
