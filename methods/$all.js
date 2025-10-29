// Q1:
// Question: Find users who have both “reading” and “music” as hobbies.
// Insert:

db.users.insertMany([
  { name: "A", hobbies: ["reading", "music", "travel"] },
  { name: "B", hobbies: ["music", "sports"] },
  { name: "C", hobbies: ["reading", "sports"] }
])


// Query:

db.users.aggregate([
  {
    $match: { hobbies: { $all: ["reading", "music"] } }
  }
])


// Q2:
// Question: Find products available in both “online” and “store” channels.
// Insert:

db.products.insertMany([
  { name: "Phone", availableIn: ["online", "store"] },
  { name: "TV", availableIn: ["store"] },
  { name: "Laptop", availableIn: ["online"] }
])


// Query:

db.products.aggregate([
  {
    $match: { availableIn: { $all: ["online", "store"] } }
  }
])


// Q3:
// Question: Find students who have both “math” and “science” subjects.
// Insert:

db.students.insertMany([
  { name: "A", subjects: ["math", "science", "english"] },
  { name: "B", subjects: ["math", "english"] },
  { name: "C", subjects: ["science", "history"] }
])


// Query:

db.students.aggregate([
  {
    $match: { subjects: { $all: ["math", "science"] } }
  }
])


