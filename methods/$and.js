// Q1:
// Question: Find employees who work in “IT” and earn more than 4000 using $and in aggregation.
// Insert:

db.employees.insertMany([
  { name: "A", department: "IT", salary: 5000 },
  { name: "B", department: "IT", salary: 3500 },
  { name: "C", department: "HR", salary: 6000 }
])


// Query:

db.employees.aggregate([
  {
    $match: {
      $and: [
        { department: "IT" },
        { salary: { $gt: 4000 } }
      ]
    }
  }
])


// Q2:
// Question: Find users who are active and have verified their email using $and in aggregation.
// Insert:

db.users.insertMany([
  { name: "John", active: true, emailVerified: true },
  { name: "Mary", active: true, emailVerified: false },
  { name: "Ali", active: false, emailVerified: true }
])


// Query:

db.users.aggregate([
  {
    $match: {
      $and: [
        { active: true },
        { emailVerified: true }
      ]
    }
  }
])


// Q3:
// Question: Find products that are in stock and cost less than 1000 using $and inside aggregation.
// Insert:

db.products.insertMany([
  { name: "Phone", price: 900, inStock: true },
  { name: "TV", price: 1500, inStock: true },
  { name: "Laptop", price: 800, inStock: false }
])


// Query:

db.products.aggregate([
  {
    $match: {
      $and: [
        { inStock: true },
        { price: { $lt: 1000 } }
      ]
    }
  }
])


// Q4:
// Question: Find students who scored above 80 in math and above 70 in science using $and in aggregation.
// Insert:

db.students.insertMany([
  { name: "A", marks: { math: 85, science: 75 } },
  { name: "B", marks: { math: 90, science: 60 } },
  { name: "C", marks: { math: 78, science: 80 } }
])


// Query:

db.students.aggregate([
  {
    $match: {
      $and: [
        { "marks.math": { $gt: 80 } },
        { "marks.science": { $gt: 70 } }
      ]
    }
  }
])


// Q5:
// Question: Find premium customers from India who spent more than 1000 using $and in aggregation.
// Insert:

db.customers.insertMany([
  { name: "Ravi", country: "India", spent: 1500, premium: true },
  { name: "John", country: "USA", spent: 2000, premium: true },
  { name: "Amit", country: "India", spent: 800, premium: true },
  { name: "Sara", country: "India", spent: 2000, premium: false }
])


// Query:

db.customers.aggregate([
  {
    $match: {
      $and: [
        { country: "India" },
        { spent: { $gt: 1000 } },
        { premium: true }
      ]
    }
  }
])