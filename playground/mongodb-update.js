// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos")
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID("5c7dde94a470ab3557d5fd48")
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => console.log(result));

  db.collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5c7dc11aa470ab3557d5f66b")
      },
      {
        $set: { name: "Juan Daniel" },
        $inc: { age: 1 }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => console.log(result));

  // db.close();
});
