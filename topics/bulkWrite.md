BulkWrite = many write operations in one single request.

What:
Insert / update / delete operations combined together.

Why:
Faster, fewer network calls.

When:
Large data updates, migrations, batch imports.

Where:
db.collection.bulkWrite() in MongoDB.

How (short example):

db.users.bulkWrite([
  { insertOne: { document: { name: "A" } } },
  { updateOne: { filter: { name: "A" }, update: { $set: { age: 20 } } } },
  { deleteOne: { filter: { name: "A" } } }
])