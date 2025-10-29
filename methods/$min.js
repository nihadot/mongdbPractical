// Q1:
// Question: Find the minimum marks scored per subject.
// Insert:

db.scores.insertMany([
  { subject: "Math", marks: 70 },
  { subject: "Math", marks: 90 },
  { subject: "Science", marks: 65 }
])


db.scores.aggregate([
  { $group: { _id: "$subject", minScore: { $min: "$marks" } } }
])




// Q2:
// Question: Find the earliest order date for each customer.
// Insert:

db.orders.insertMany([
  { customer: "John", date: new Date("2024-01-05") },
  { customer: "John", date: new Date("2024-01-10") },
  { customer: "Mary", date: new Date("2024-01-03") }
])


// Query:

db.orders.aggregate([
  { $group: { _id: "$customer", firstOrder: { $min: "$date" } } }
])



// Q3:
// Question: Find the cheapest product in each category.
// Insert:

db.products.insertMany([
  { category: "Electronics", price: 200 },
  { category: "Electronics", price: 100 },
  { category: "Furniture", price: 300 }
])


Query:

db.products.aggregate([
  { $group: { _id: "$category", minPrice: { $min: "$price" } } }
])