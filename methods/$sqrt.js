// Problem 1:
// Collection: numbers

db.numbers.insertMany([
  { value: 16 },
  { value: 25 },
  { value: 81 }
])


// Question: Find the square root of each value using $sqrt.
// Solution:

db.numbers.aggregate([
  { $project: { value: 1, sqrtValue: { $sqrt: "$value" } } }
])


// Problem 2:
// Collection: areas

db.areas.insertMany([
  { shape: "Square A", area: 49 },
  { shape: "Square B", area: 100 },
  { shape: "Square C", area: 121 }
])


// Question: Calculate the side length of each square using $sqrt.
// Solution:

db.areas.aggregate([
  { $project: { shape: 1, sideLength: { $sqrt: "$area" } } }
])


// Problem 3:
// Collection: distances

db.distances.insertMany([
  { x: 3, y: 4 },
  { x: 6, y: 8 },
  { x: 5, y: 12 }
])


// Question: Find the distance from the origin (0,0) for each coordinate using $sqrt.
// Solution:

db.distances.aggregate([
  { $project: { distance: { $sqrt: { $add: [ { $pow: ["$x", 2] }, { $pow: ["$y", 2] } ] } } } }
])