// Q1:
// Question: Find users who have exactly 3 hobbies.
// Insert:

db.users.insertMany([
  { name: "A", hobbies: ["reading", "music", "travel"] },
  { name: "B", hobbies: ["music", "sports"] },
  { name: "C", hobbies: ["reading"] }
])


// Query:

db.users.aggregate([
  {
    $match: { hobbies: { $size: 3 } }
  }
])


// Q2:
// Question: Find students with exactly 2 subjects.
// Insert:

db.students.insertMany([
  { name: "A", subjects: ["math", "science"] },
  { name: "B", subjects: ["math", "english", "science"] },
  { name: "C", subjects: ["history"] }
])


// Query:

db.students.aggregate([
  {
    $match: { subjects: { $size: 2 } }
  }
])


// Q3:
// Question: Find products available in exactly 2 locations.
// Insert:

db.products.insertMany([
  { name: "Phone", availableIn: ["online", "store"] },
  { name: "TV", availableIn: ["store"] },
  { name: "Laptop", availableIn: ["online", "warehouse", "store"] }
])


// Query:

db.products.aggregate([
  {
    $match: { availableIn: { $size: 2 } }
  }
])