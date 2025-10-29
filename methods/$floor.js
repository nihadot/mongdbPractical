// Problem 1:
// Collection: products

db.products.insertMany([
  { name: "Laptop", price: 1299.99 },
  { name: "Tablet", price: 499.75 },
  { name: "Headphones", price: 99.50 }
])


// Question: Show each product name with the price rounded down to the nearest integer using $floor.
// Solution:

db.products.aggregate([
  { $project: { name: 1, flooredPrice: { $floor: "$price" } } }
])


// Problem 2:
// Collection: scores

db.scores.insertMany([
  { student: "A", avg: 89.9 },
  { student: "B", avg: 92.1 },
  { student: "C", avg: 75.8 }
])


// Question: Display students with their average marks rounded down using $floor.
// Solution:

db.scores.aggregate([
  { $project: { student: 1, flooredAvg: { $floor: "$avg" } } }
])


// Problem 3:
// Collection: temperatures

db.temperatures.insertMany([
  { city: "Delhi", temp: 31.7 },
  { city: "Mumbai", temp: 29.4 },
  { city: "Chennai", temp: 33.9 }
])


// Question: Find each city’s temperature floored to the nearest whole number.
// Solution:

db.temperatures.aggregate([
  { $project: { city: 1, flooredTemp: { $floor: "$temp" } } }
])