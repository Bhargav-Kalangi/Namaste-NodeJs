// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ambhargav15:ZyKNwPHsFJyVrCw1@namastenodejs.vllx4gy.mongodb.net/";

const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  //Create

  //   const insertResult = await collection.insertMany([
  //     {
  //       firstName: "John",
  //       lastName: "Hey",
  //       age: "26",
  //       city: "Nellore",
  //       state: "Andhra Pradesh",
  //     },
  //     {
  //       firstName: "John",
  //       lastName: "Hey",
  //       age: "26",
  //       city: "Kadapa",
  //       state: "Andhra Pradesh",
  //     },
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  //update
  const updateResult = await collection.updateOne(
    { lastName: "Hey" },
    { $set: { lastName: "Janardhan" } }
  );
  console.log("Updated documents =>", updateResult);

  //   Delete;
  const deleteResult = await collection.deleteMany({ city: "Nellore" });
  console.log("Deleted documents =>", deleteResult);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
