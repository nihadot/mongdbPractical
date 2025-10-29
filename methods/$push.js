// Q1:
// Question: Get all order IDs for each customer.
// Insert:

db.orders.insertMany([
  { customer: "John", orderId: 1 },
  { customer: "John", orderId: 2 },
  { customer: "Mary", orderId: 3 }
])


// Query:

db.orders.aggregate([
  { $group: { _id: "$customer", orders: { $push: "$orderId" } } }
])


// Q2:
// Question: List all marks scored by each student.
// Insert:

db.marks.insertMany([
  { student: "A", score: 80 },
  { student: "A", score: 90 },
  { student: "B", score: 70 }
])


// Query:

db.marks.aggregate([
  { $group: { _id: "$student", marks: { $push: "$score" } } }
])


// Q3:
// Question: Show all cities for each country.
// Insert:

db.locations.insertMany([
  { country: "India", city: "Delhi" },
  { country: "India", city: "Mumbai" },
  { country: "USA", city: "New York" }
])


// Query:

db.locations.aggregate([
  { $group: { _id: "$country", cities: { $push: "$city" } } }
])