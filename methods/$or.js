// Q1:
// Question: Find employees who work in “IT” or earn more than 5000.
// Insert:

db.employees.insertMany([
  { name: "A", department: "IT", salary: 4000 },
  { name: "B", department: "HR", salary: 6000 },
  { name: "C", department: "Finance", salary: 4500 }
])


// Query:

db.employees.aggregate([
  {
    $match: {
      $or: [
        { department: "IT" },
        { salary: { $gt: 5000 } }
      ]
    }
  }
])


// Q2:
// Question: Find users who are either active or have verified their email.
// Insert:

db.users.insertMany([
  { name: "John", active: true, emailVerified: false },
  { name: "Mary", active: false, emailVerified: true },
  { name: "Ali", active: false, emailVerified: false }
])


// Query:

db.users.aggregate([
  {
    $match: {
      $or: [
        { active: true },
        { emailVerified: true }
      ]
    }
  }
])


// Q3:
// Question: Find products that are out of stock or priced below 1000.
// Insert:

db.products.insertMany([
  { name: "Phone", price: 900, inStock: true },
  { name: "TV", price: 1500, inStock: false },
  { name: "Laptop", price: 2000, inStock: true }
])


// Query:

db.products.aggregate([
  {
    $match: {
      $or: [
        { inStock: false },
        { price: { $lt: 1000 } }
      ]
    }
  }
])


// Q4:
// Question: Find students who scored above 90 in math or science.
// Insert:

db.students.insertMany([
  { name: "A", marks: { math: 95, science: 80 } },
  { name: "B", marks: { math: 60, science: 92 } },
  { name: "C", marks: { math: 70, science: 65 } }
])


// Query:

db.students.aggregate([
  {
    $match: {
      $or: [
        { "marks.math": { $gt: 90 } },
        { "marks.science": { $gt: 90 } }
      ]
    }
  }
])


// Q5:
// Question: Find customers from India or who spent more than 2000.
// Insert:

db.customers.insertMany([
  { name: "Ravi", country: "India", spent: 1500 },
  { name: "John", country: "USA", spent: 2500 },
  { name: "Amit", country: "UK", spent: 1200 }
])


// Query:

db.customers.aggregate([
  {
    $match: {
      $or: [
        { country: "India" },
        { spent: { $gt: 2000 } }
      ]
    }
  }
])