$regexMatch = aggregation-ൽ regex pattern match ചെയ്യാൻ ഉപയോഗിക്കുന്ന operator.

What

Checks if a string matches a regex pattern.

Why

Aggregation pipeline-ൽ regex filter വേണമെങ്കിൽ.

When

Case-insensitive match

Partial text match

Pattern-based filtering

Where

Only inside aggregation ($project, $match, $addFields).

How (example)
Dataset
db.names.insertMany([
  { _id: 1, name: "Nihad" },
  { _id: 2, name: "Nisha" },
  { _id: 3, name: "Rahim" }
])

Query

Find names containing “ni” (case-insensitive):

db.names.aggregate([
  {
    $match: {
      $expr: {
        $regexMatch: {
          input: "$name",
          regex: "ni",
          options: "i"
        }
      }
    }
  }
])

Result
{ _id: 1, name: "Nihad" }
{ _id: 2, name: "Nisha" }

One-line summary

$regexMatch = aggregation-ൽ regex ഉപയോഗിക്കാനുള്ള operator.



