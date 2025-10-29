// Problem 1:
// Collection: products

db.products.insertMany([
  { name: "Phone", price: 999.2 },
  { name: "Watch", price: 249.6 },
  { name: "Camera", price: 1200.1 }
])


// Question: Show each product name with the price rounded up using $ceil.
// Solution:

db.products.aggregate([
  { $project: { name: 1, ceiledPrice: { $ceil: "$price" } } }
])


// Problem 2:
// Collection: scores

db.scores.insertMany([
  { student: "A", avg: 88.3 },
  { student: "B", avg: 91.7 },
  { student: "C", avg: 76.1 }
])


// Question: Show each student’s average score rounded up to the nearest integer.
// Solution:

db.scores.aggregate([
  { $project: { student: 1, ceiledAvg: { $ceil: "$avg" } } }
])


// Problem 3:
// Collection: temperatures

db.temperatures.insertMany([
  { city: "Pune", temp: 24.2 },
  { city: "Goa", temp: 29.9 },
  { city: "Kolkata", temp: 30.1 }
])


// Question: Display each city with its temperature rounded up using $ceil.
// Solution:

db.temperatures.aggregate([
  { $project: { city: 1, ceiledTemp: { $ceil: "$temp" } } }
])