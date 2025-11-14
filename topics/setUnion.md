$setUnion = two (or more) arrays join ചെയ്ത് duplicate ഇല്ലാതെ single array ആക്കുന്നത്.

Simple meaning

Union of arrays = combine + remove duplicates.

Example Collection
db.test.insertOne({
  a: ["A", "B", "C"],
  b: ["B", "C", "D"]
})

Query
db.test.aggregate([
  {
    $project: {
      both: { $setUnion: ["$a", "$b"] }
    }
  }
])

Result
{ both: ["A", "B", "C", "D"] }

One-line

$setUnion = two arrays combine cheythu duplicates remove cheyyunnath.