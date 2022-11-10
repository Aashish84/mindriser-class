db.authors.insertOne({});
db.authors.insertMany([
  {
    name: "second ram",
    age: 30,
    awards: ["grammy", "golden"],
  },
  {
    name: "second shyam",
    age: 100,
    awards: ["grammy", ""],
  },
  {
    name: "second hari",
    age: 100,
    awards: ["golden", ""],
  },
  {
    name: "second hari",
    age: 100,
  },
]);
db.authors.deleteMany({});

// db.authors.find(filter_object,select_object)

db.authors.find({ name: "ram" });
db.authors.find({ name: "Ram" });
db.authors.find({ name: "hari" });
db.authors.find({ name: RegExp("Ram", "i") });
db.authors.find({ name: RegExp("Ram", "i") }, { name: 1, _id: 0 });

db.authors.updateOne({ name: "ram" }, { name: "john" });
db.authors.updateOne({ name: "ram" }, { $set: { name: "john" } });
db.authors.updateMany();

db.authors.find({ id: 2 });
db.authors.updateOne({ id: 2 }, { $set: { id: 342 } });

db.authors.updateOne({ id: 2 }, { $inc: { id: 1 } });

// Array.filter9\())
// arr.filter(el => true)

db.authors.updateMany({}, { $rename: { name: "full_name" } });
db.authors.updateMany({}, { $unset: { id: 1 } });

db.authors.deleteMany({ full_name: "ram" });
db.authors.deleteMany({});

db.authors.find({ age: { $gt: 50 } }, { _id: 0 });
db.authors.find({ age: { $lt: 50 } }, { _id: 0 });
db.authors.find({ age: { $ne: 50 } }, { _id: 0 });
db.authors.find({ age: { $eq: 50 } }, { _id: 0 });
db.authors.find({ age: { $gte: 50 } }, { _id: 0 });
db.authors.find({ age: { $lte: 50 } }, { _id: 0 });

// 1 0

db.authors.find({ age: { $lte: 50 } }, { _id: 0 }).sort({ age: -1, name: -1 });

db.authors.find({ awards: "grammy" });
db.authors.find({ awards: { $in: ["golden"] } });
db.authors.find({ awards: { $in: ["golden", "grammy"] } });
db.authors.find({ awards: { $in: ["golden", "grammy"] } });
db.authors.find({ name: { $nin: ["second ram", "grammy"] } });

// select from authros where awards has golden or grammy

/* 
    frontend
    backeend
        server  express
        database
*/

// db.authors.find({ awards: "grammy" || age > 50 })
// db.authors.find({ awards: "grammy"  &&  age > 50 })

// &&

// db.authors.find({ awards: "grammy" })

db.authors.insertOne({
  name: "fifty",
  age: 50,
});

db.authors.find({
  $and: [
    {
      awards: "grammy",
    },
    {
      age: { $gte: 50 },
    },
  ],
});

db.authors.find({
  $or: [
    {
      awards: "grammy",
    },
    {
      age: { $gte: 50 },
    },
  ],
});

db.authors
  .find({ awards: { $not: { $exists: 0 } } })
  .limit(25)
  .skip(2);
db.authors.find({});
db.authors.find({}).skip(2);
