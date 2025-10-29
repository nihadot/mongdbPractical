// Q1:
// Question: Find users whose hobbies are not “reading” or “music”.
// Insert:

db.user.insertMany([
  { name: "A", hobbies: ["reading", "sports"] },
  { name: "B", hobbies: ["music", "travel"] },
  { name: "C", hobbies: ["coding"] }
])


// Query:

db.user.find({ hobbies: { $nin: ["reading", "music"] } })


// Q2:
// Question: Find products whose category is not “Electronics” or “Furniture”.
// Insert:

db.products.insertMany([
  { name: "TV", category: "Electronics" },
  { name: "Sofa", category: "Furniture" },
  { name: "Shirt", category: "Clothing" }
])


// Query:

db.products.find({ category: { $nin: ["Electronics", "Furniture"] } })


// Q3:
// Question: Find students whose roll numbers are not in [101, 103, 105].
// Insert:

db.students.insertMany([
  { name: "John", roll: 101 },
  { name: "Mary", roll: 102 },
  { name: "Ali", roll: 103 }
])


// Query:

db.students.find({ roll: { $nin: [101, 103, 105] } })