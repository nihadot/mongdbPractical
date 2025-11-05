Clustered Collections
---------------------
A clustered collection stores documents on disk in order based on a specific key.


db.runCommand( {
   create: "products",
   clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "products clustered key" }
} )


db.createCollection(
   "stocks",
   { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "stocks clustered key" } }
)


Determine if a Collection is Clustered
--------------------------------------

db.runCommand( { listCollections: 1 } )


