// Q1:
// Question: Get all unique cities per country.
// Insert:

db.locations.insertMany([
  { country: "India", city: "Delhi" },
  { country: "India", city: "Delhi" },
  { country: "India", city: "Mumbai" }
])


// Query:

db.locations.aggregate([
  { $group: { _id: "$country", cities: { $addToSet: "$city" } } }
])


// Q2:
// Question: Find unique products ordered by each customer.
// Insert:

db.orders.insertMany([
  { customer: "John", product: "A" },
  { customer: "John", product: "B" },
  { customer: "John", product: "A" }
])


// Query:

db.orders.aggregate([
  { $group: { _id: "$customer", products: { $addToSet: "$product" } } }
])


// Q3:
// Question: Get unique skills for each department.
// Insert:

db.employees.insertMany([
  { department: "IT", skill: "JS" },
  { department: "IT", skill: "Python" },
  { department: "IT", skill: "JS" }
])


// Query:

db.employees.aggregate([
  { $group: { _id: "$department", skills: { $addToSet: "$skill" } } }
])