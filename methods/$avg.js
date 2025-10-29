// Q1:
// Question: Find the average marks scored by each student.
// Insert:

db.marks.insertMany([
  { student: "A", score: 80 },
  { student: "A", score: 90 },
  { student: "B", score: 70 }
])


db.marks.aggregate([
  { $group: { _id: "$student", avgMarks: { $avg: "$score" } } }
])



// Q2:
// Question: Calculate the average order amount for each customer.
// Insert:

db.orders.insertMany([
  { customer: "John", amount: 200 },
  { customer: "John", amount: 100 },
  { customer: "Mary", amount: 300 }
])


db.orders.aggregate([
  { $group: { _id: "$customer", avgValue: { $avg: "$amount" } } }
])






// Q3:
// Question: Find the average salary per department.
// Insert:

db.employees.insertMany([
  { department: "HR", salary: 3000 },
  { department: "HR", salary: 4000 },
  { department: "IT", salary: 6000 }
])



db.employees.aggregate([
  { $group: { _id: "$department", totalSalary: { $avg: "$salary" } } }
])