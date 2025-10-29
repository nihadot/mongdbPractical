// Q1:
// Question: Find employees who are not in the “IT” department.
// Insert:

db.employees.insertMany([
  { name: "A", department: "IT" },
  { name: "B", department: "HR" },
  { name: "C", department: "Finance" }
])


// Query:

db.employees.aggregate([
  {
    $match: {
      department: { $not: { $eq: "IT" } }
    }
  }
])


// Q2:
// Question: Find users who are not active.
// Insert:

db.users.insertMany([
  { name: "John", active: true },
  { name: "Mary", active: false },
  { name: "Ali", active: false }
])


// Query:

db.users.aggregate([
  {
    $match: {
      active: { $not: { $eq: true } }
    }
  }
])


// Q3:
// Question: Find products where price is not less than 1000.
// Insert:

db.products.insertMany([
  { name: "Phone", price: 800 },
  { name: "TV", price: 1200 },
  { name: "Laptop", price: 2000 }
])


// Query:

db.products.aggregate([
  {
    $match: {
      price: { $not: { $lt: 1000 } }
    }
  }
])


// Q4:
// Question: Find students who did not score above 80 in math.
// Insert:

db.students.insertMany([
  { name: "A", marks: { math: 90 } },
  { name: "B", marks: { math: 75 } },
  { name: "C", marks: { math: 60 } }
])


// Query:

db.students.aggregate([
  {
    $match: {
      "marks.math": { $not: { $gt: 80 } }
    }
  }
])


// Q5:
// Question: Find customers who are not from India.
// Insert:

db.customers.insertMany([
  { name: "Ravi", country: "India" },
  { name: "John", country: "USA" },
  { name: "Ali", country: "UAE" }
])


// Query:

db.customers.aggregate([
  {
    $match: {
      country: { $not: { $eq: "India" } }
    }
  }
])