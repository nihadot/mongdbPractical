// Q1:
// Question: Find users who have the field email.
// Insert:

db.users.insertMany([
  { name: "A", email: "a@gmail.com" },
  { name: "B" },
  { name: "C", email: "c@gmail.com" }
])


// Query:

db.users.find({ email: { $exists: true } })


// Q2:
// Question: Find products without the price field.
// Insert:

db.products.insertMany([
  { name: "TV", price: 1000 },
  { name: "Sofa" },
  { name: "Laptop", price: 2000 }
])


// Query:

db.products.find({ price: { $exists: false } })


// Q3:
// Question: Find students where the grade field exists.
// Insert:

db.students.insertMany([
  { name: "John", grade: "A" },
  { name: "Mary" },
  { name: "Ali", grade: "B" }
])


Query:

db.students.find({ grade: { $exists: true } })