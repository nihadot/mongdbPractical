Capped Collections
-------------------
Capped collections are fixed-size MongoDB collections 
that store data in order and automatically replace old documents with new ones when full.

Circular buffer
---------------
A circular buffer is a fixed-size storage that overwrites old data when new data comes in.

Create a Capped Collection
--------------------------
db.createCollection( "log", { capped: true, size: 100000 } );


Create a Capped Collection with a Maximum Number of Documents
-------------------------------------------------------------
db.createCollection(
   "log2",
   {
      capped: true,
      size: 5242880,
      max: 5000
   }
)


Query a Capped Collection
-------------------------
db.log.find().sort( { $natural: -1 } ).limit(3)

### $natural : 1 (Insertion Order)
### $natural : -1 (Reverse Insertion Order) , return first addedd documents first

db.log.find()





Check if a Collection is Capped
-------------------------------
To check if a collection is capped, use the isCapped() method.

db.collection.isCapped()



Convert a Collection to Capped
------------------------------
The convertToCapped command holds a database-exclusive lock for the duration of the operation. Other operations that lock the same database are blocked until the convertToCapped operation completes.

convertToCapped command run ചെയ്‌താൽ, MongoDB ആ ഡാറ്റാബേസ് മുഴുവൻ താൽക്കാലികമായി പൂട്ടും (lock).
അതുവരെ ആ ഡാറ്റാബേസിൽ മറ്റൊരാൾക്ക് insert, update, delete പോലുള്ള പ്രവർത്തനങ്ങൾ ചെയ്യാൻ സാധിക്കില്ല.

convertToCapped command run ചെയ്യുമ്പോൾ, മറ്റുള്ളവർ fetch (read) ചെയ്യാനും കഴിയില്ല; അവർക്ക് command പൂർത്തിയാകുന്നത് വരെ wait ചെയ്യേണ്ടി വരും.

db.runCommand( {
   convertToCapped: "log2",
   size: 100000
} )




Change the Size of a Capped Collection
--------------------------------------
To change the size of a capped collection, use the collMod command's cappedSize option


db.runCommand( { collMod: "log", cappedSize: 5242880 } )



Change Maximum Documents in a Capped Collection
-----------------------------------------------
To change the maximum number of documents in a capped collection, use the collMod command's cappedMax option.



db.runCommand( { collMod: "log", cappedMax: 5000 } )

