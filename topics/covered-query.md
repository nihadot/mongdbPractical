A covered query is a query where MongoDB answers fully from the index without touching the collection.



What:
------
Covered query = query + projection fully satisfied by index only, no document lookup.

Why:
-------
Faster queries → avoids reading documents from collection.

When:
-------
When your filter fields and projected fields are all in the same index.

Where:
-------
Used in performance-critical queries.

How:
------
Create index → query only those indexed fields → projection only indexed fields.















Collection:
---------------
db.users.insertMany([
  { _id: 1, name: "A", age: 20 },
  { _id: 2, name: "B", age: 25 }
])

Index (required for covered query):
-----------------------------------
db.users.createIndex({ name: 1, age: 1 })

Covered Query:
-------------------
db.users.find(
  { name: "A" },
  { _id: 0, age: 1 }
)

Result:
----------
{ age: 20 }

Meaning:
-----------
MongoDB answered using only the index, never touched the documents.