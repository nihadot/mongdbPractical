// Q1:
// Question: Find employees who are not in “IT” nor have salary above 5000.
// Insert:

db.employees.insertMany([
  { name: "A", department: "IT", salary: 4000 },
  { name: "B", department: "HR", salary: 6000 },
  { name: "C", department: "Finance", salary: 3500 }
])


// Query:

db.employees.aggregate([
  {
    $match: {
      $nor: [
        { department: "IT" },
        { salary: { $gt: 5000 } }
      ]
    }
  }
])


// Q2:
// Question: Find users who are not active and not verified.
// Insert:

db.users.insertMany([
  { name: "John", active: true, verified: false },
  { name: "Mary", active: false, verified: true },
  { name: "Ali", active: false, verified: false }
])


// Query:

db.users.aggregate([
  {
    $match: {
      $nor: [
        { active: true },
        { verified: true }
      ]
    }
  }
])


// Q3:
// Question: Find products that are not in stock and not priced below 1000.
// Insert:

db.products.insertMany([
  { name: "Phone", price: 800, inStock: true },
  { name: "TV", price: 1500, inStock: false },
  { name: "Laptop", price: 2000, inStock: false }
])


// Query:

db.products.aggregate([
  {
    $match: {
      $nor: [
        { inStock: true },
        { price: { $lt: 1000 } }
      ]
    }
  }
])


// Q4:
// Question: Find students who did not score above 90 in math nor above 85 in science.
// Insert:

db.students.insertMany([
  { name: "A", marks: { math: 95, science: 80 } },
  { name: "B", marks: { math: 88, science: 70 } },
  { name: "C", marks: { math: 60, science: 65 } }
])


// Query:

db.students.aggregate([
  {
    $match: {
      $nor: [
        { "marks.math": { $gt: 90 } },
        { "marks.science": { $gt: 85 } }
      ]
    }
  }
])


// Q5:
// Question: Find customers who are not from India and did not spend more than 1000.
// Insert:

db.customers.insertMany([
  { name: "Ravi", country: "India", spent: 2000 },
  { name: "John", country: "USA", spent: 800 },
  { name: "Ali", country: "UAE", spent: 500 }
])


// Query:

db.customers.aggregate([
  {
    $match: {
      $nor: [
        { country: "India" },
        { spent: { $gt: 1000 } }
      ]
    }
  }
])