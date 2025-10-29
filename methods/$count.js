// Q1:
// Question: Count total number of documents in the orders collection.
// Insert:

db.orders.insertMany([
  { item: "Book" },
  { item: "Pen" },
  { item: "Pencil" }
])


// Query:

db.orders.aggregate([
  { $count: "totalOrders" }
])


// Q2:
// Question: Count how many employees earn more than 4000.
// Insert:

db.employees.insertMany([
  { name: "A", salary: 3000 },
  { name: "B", salary: 5000 },
  { name: "C", salary: 6000 }
])


// Query:

db.employees.aggregate([
  { $match: { salary: { $gt: 4000 } } },
  { $count: "highEarners" }
])


// Q3:
// Question: Count total number of students who passed (score ≥ 50).
// Insert:

db.marks.insertMany([
  { student: "A", score: 45 },
  { student: "B", score: 70 },
  { student: "C", score: 90 }
])


// Query:

db.marks.aggregate([
  { $match: { score: { $gte: 50 } } },
  { $count: "passedStudents" }
])