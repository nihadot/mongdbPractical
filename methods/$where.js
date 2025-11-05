// Q1️⃣ Find students with marks greater than 80

Dataset

db.students.insertMany([
  { name: "Aisha", marks: 75 },
  { name: "Ravi", marks: 88 },
  { name: "Liam", marks: 92 }
])


Query

db.students.find({ $where: "this.marks > 80" })


// ✅ Returns Ravi and Liam.

// Q2️⃣ Find users where age equals id

Dataset

db.users.insertMany([
  { name: "Sara", age: 21, id: 21 },
  { name: "Alex", age: 25, id: 30 },
  { name: "John", age: 30, id: 30 }
])


Query

db.users.find({ $where: "this.age == this.id" })


// ✅ Matches Sara and John.

// Q3️⃣ Find products where price is double the quantity

Dataset

db.products.insertMany([
  { name: "Pen", price: 20, qty: 10 },
  { name: "Book", price: 50, qty: 25 },
  { name: "Bag", price: 200, qty: 50 }
])


Query

db.products.find({ $where: "this.price == 2 * this.qty" })


// ✅ Matches Pen and Book.

// Q4️⃣ Find employees whose name length > 5

Dataset

db.employees.insertMany([
  { name: "Ayaan" },
  { name: "Michael" },
  { name: "John" }
])


Query

db.employees.find({ $where: "this.name.length > 5" })


// ✅ Returns Michael.

// Q5️⃣ Find students where marks are even

Dataset

db.students.insertMany([
  { name: "Neha", marks: 77 },
  { name: "Raj", marks: 82 },
  { name: "Isha", marks: 91 }
])


Query

db.students.find({ $where: "this.marks % 2 == 0" })


// ✅ Returns Raj.