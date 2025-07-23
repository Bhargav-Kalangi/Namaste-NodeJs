const express = require("express");
const app = express();
const port = 7777;

//order does matters in Node js (code runs from top to bottom)
//now  url is '/' means it will check top to bottom and share us the response

//Routing parameters
app.get("/user/:userId/books/:bookId", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Bhargav", lastName: "Kalangi" });
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Bhargav", lastName: "Kalangi" });
});
app.post("/user", (req, res) => {
  res.send({ firstName: "Bhargav", lastName: "Kalangi" });
});
app.listen(port, () => {
  console.log("console.log will be printed only it is connected to server");
});
