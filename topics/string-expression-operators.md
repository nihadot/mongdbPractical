
String Expression Operators

$toLower → convert to lowercase

$toUpper → convert to uppercase

$substr → substring (old)

$substrBytes → substring by bytes

$substrCP → substring by code points

$concat → join strings

$strlenBytes → length in bytes

$strlenCP → length in code points

$split → split string into array

$indexOfBytes → find index

$indexOfCP → find index (Unicode safe)

$trim → trim both sides

$ltrim → trim left

$rtrim → trim right

$replaceOne → replace first match

$replaceAll → replace all matches















Here are examples for each string operator — one dataset, one query, one result.
(Simple, short, clean.)

Dataset
db.texts.insertOne({
  _id: 1,
  str: " Hello World ",
  tags: "a,b,c",
  title: "MongoDB",
  name: "Nihad",
  sentence: "hi hi hi"
})

1) $toLower
db.texts.aggregate([
  { $project: { out: { $toLower: "$title" } } }
])


Result:

{ out: "mongodb" }

2) $toUpper
db.texts.aggregate([
  { $project: { out: { $toUpper: "$title" } } }
])


Result:

{ out: "MONGODB" }

3) $substrBytes
db.texts.aggregate([
  { $project: { out: { $substrBytes: ["$title", 0, 3] } } }
])


Result:

{ out: "Mon" }

4) $substrCP
db.texts.aggregate([
  { $project: { out: { $substrCP: ["$title", 0, 4] } } }
])


Result:

{ out: "Mongo" }

5) $concat
db.texts.aggregate([
  { $project: { out: { $concat: ["Hello ", "$name"] } } }
])


Result:

{ out: "Hello Nihad" }

6) $strlenBytes
db.texts.aggregate([
  { $project: { out: { $strlenBytes: "$title" } } }
])


Result:

{ out: 7 }

7) $strlenCP
db.texts.aggregate([
  { $project: { out: { $strlenCP: "$title" } } }
])


Result:

{ out: 7 }

8) $split
db.texts.aggregate([
  { $project: { out: { $split: ["$tags", ","] } } }
])


Result:

{ out: ["a", "b", "c"] }

9) $indexOfBytes
db.texts.aggregate([
  { $project: { out: { $indexOfBytes: ["$sentence", "hi"] } } }
])


Result:

{ out: 0 }

10) $indexOfCP
db.texts.aggregate([
  { $project: { out: { $indexOfCP: ["$sentence", "hi"] } } }
])


Result:

{ out: 0 }

11) $trim
db.texts.aggregate([
  { $project: { out: { $trim: { input: "$str" } } } }
])


Result:

{ out: "Hello World" }

12) $ltrim
db.texts.aggregate([
  { $project: { out: { $ltrim: { input: "$str" } } } }
])


Result:

{ out: "Hello World " }

13) $rtrim
db.texts.aggregate([
  { $project: { out: { $rtrim: { input: "$str" } } } }
])


Result:

{ out: " Hello World" }

14) $replaceOne
db.texts.aggregate([
  { $project: { out: { $replaceOne: { input: "$sentence", find: "hi", replacement: "hey" } } } }
])


Result:

{ out: "hey hi hi" }

15) $replaceAll
db.texts.aggregate([
  { $project: { out: { $replaceAll: { input: "$sentence", find: "hi", replacement: "hey" } } } }
])


Result:

{ out: "hey hey hey" }


If you want, I can give 5 real-world use cases combining multiple string operators.


