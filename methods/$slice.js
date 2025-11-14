// $slice = array-യിൽ നിന്ന് കുറച്ച് items മാത്രം എടുക്കാനുള്ള projection operator.

// What:

// Return only part of an array (first N items or last N items).

// How:
{ arrayField: { $slice: N } }

// Example Dataset
db.posts.insertOne({
  _id: 1,
  comments: ["A", "B", "C", "D", "E"]
})

// 1) First 2 items
db.posts.find(
  { _id: 1 },
  { comments: { $slice: 2 }, _id: 0 }
)


// Result:

{ comments: ["A", "B"] }

// 2) Last 2 items
db.posts.find(
  { _id: 1 },
  { comments: { $slice: -2 }, _id: 0 }
)


Result:

{ comments: ["D", "E"] }

One-line

// $slice = array-യിൽ നിന്നും limit ചെയ്യാനുള്ള projection operator.