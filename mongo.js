// show dbs - show all database
// use <database name> - switch

db.authors.insertOne({ name: "leo", age: 50, awards: ["grammy", "oscar"] });
db.authors.insertMany([
  { name: "hari", age: 20 },
  { name: "shyam", age: 30 },
  { name: "ram", age: 40 },
]);

db.authors.updateOne({ name: "ram" }, { $inc: { qty: 2 } });
db.authors.find().sort({ qty: 1 });

db.authors.deleteMany({});

db.authors.find({ age: { $lte: 30 } });
db.authors.find({ awards: { $in: ["grammy"] } });
db.authors.find({ name: RegExp("RAM", "i") }); //srams also
db.authors.find({ name: /^r/ }); // starts with r
