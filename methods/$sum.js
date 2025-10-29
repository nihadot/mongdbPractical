// Q1:
// Question: Find the total sales amount per product.
// Insert:

db.sales.insertMany([
  { product: "A", amount: 100 },
  { product: "A", amount: 150 },
  { product: "B", amount: 200 }
])


Query:

db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$amount" } } }
])





// Q2:
// Question: Count how many orders each customer made.
// Insert:

db.orders.insertMany([
  { customer: "John" },
  { customer: "John" },
  { customer: "Mary" }
])


db.orders.aggregate([
  { $group: { _id: "$customer", totalOrders: { $sum: 1 } } }
])





// Q3:
// Question: Calculate total salary given to employees in each department.
// Insert:

db.employees.insertMany([
  { department: "HR", salary: 3000 },
  { department: "HR", salary: 4000 },
  { department: "IT", salary: 5000 }
])



db.employees.aggregate([
  { $group: { _id: "$department", totalSalary: { $sum: "$salary" } } }
])