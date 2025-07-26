const express = require("express");
const app = express();
const port = 7777;
const { adminAuth, userAuth } = require("./middlewares/adminAuth");
//order does matters in Node js (code runs from top to bottom)
//now  url is '/' means it will check top to bottom and share us the response

//Routing parameters
// app.get(
//   "/user",
//   [
//     (req, res, next) => {
//       console.log("UserData");
//       // res.send("Hello from user");
//       next();
//     },
//     (req, res, next) => {
//       console.log("second middleware");
//       // res.send("Hello from 2nd middleware");
//       next();
//     },
//     (req, res, next) => {
//       console.log("second middleware");
//       // res.send("Hello from 3rd middleware");
//       next();
//     },
//   ],
//   (req, res, next) => {
//     console.log("second middleware");
//     // res.send("Hello from 4th middleware");
//     next();
//   },
//   (req, res, next) => {
//     console.log("second middleware");
//     res.send("Hello from 5th middleware");
//   }
// );

// app.use("/admin", adminAuth);
// app.get("/admin/getAllData", (req, res) => {
//   console.log("request recieved to /admin/getAllData");
//   res.send("All Data sent");
// });
// app.get("/admin/deleteUserData", userAuth);
app.get("/admin/getAllData", (req, res) => {
  try {
    throw new Error("BROKEN");
    res.send("UserData");
  } catch (err) {
    res.status(500).send("something went wrong...");
  }
});

app.listen(port, () => {
  console.log("console.log will be printed only it is connected to server");
});
