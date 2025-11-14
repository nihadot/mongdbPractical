MongoDB-il collection copy ചെയ്യാൻ ഏറ്റവും simple method:

✅ 1) Using aggregate + $out (best way)
db.sourceCollection.aggregate([
  { $match: {} }
])
  .out("targetCollection")


Meaning:
sourceCollection → full copy → targetCollection.

✅ 2) Using cloneCollection (admin command)
db.adminCommand({
  cloneCollection: "yourDB.sourceCollection"
})

✅ 3) Using insertMany (small collections only)
db.targetCollection.insertMany(
  db.sourceCollection.find().toArray()
)