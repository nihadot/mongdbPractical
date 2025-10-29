// Q1:
// Question: Find the highest score for each student.
// Insert:

db.marks.insertMany([
  { student: "A", score: 85 },
  { student: "A", score: 95 },
  { student: "B", score: 80 }
])


// Query:

db.marks.aggregate([
  { $group: { _id: "$student", maxMarks: { $max: "$score" } } }
])


// Q2:
// Question: Find the highest order amount per day.
// Insert:

db.orders.insertMany([
  { date: "2024-01-01", amount: 200 },
  { date: "2024-01-01", amount: 500 },
  { date: "2024-01-02", amount: 300 }
])


// Query:

db.orders.aggregate([
  { $group: { _id: "$date", maxOrder: { $max: "$amount" } } }
])


// Q3:
// Question: Find the highest salary per department.
// Insert:

db.employees.insertMany([
  { department: "HR", salary: 3000 },
  { department: "HR", salary: 5000 },
  { department: "IT", salary: 6000 }
])


// Query:

db.employees.aggregate([
  { $group: { _id: "$department", maxSalary: { $max: "$salary" } } }
])