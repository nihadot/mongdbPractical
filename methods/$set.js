// Q1️⃣ Update student marks using $set

// Dataset

db.students.insertMany([
  { name: "Aisha", marks: 75 },
  { name: "Ravi", marks: 88 }
])


Query

db.students.updateOne(
  { name: "Aisha" },
  { $set: { marks: 90 } }
)


// ✅ Updates Aisha’s marks to 90.

// Q2️⃣ Add a new field “status” to users

Dataset

db.users.insertMany([
  { name: "Sara", age: 25 },
  { name: "John", age: 30 }
])


Query

db.users.updateMany(
  {},
  { $set: { status: "active" } }
)


// ✅ Adds status: "active" to all users.

// Q3️⃣ Change product price

Dataset

db.products.insertMany([
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 60000 }
])


Query

db.products.updateOne(
  { name: "Phone" },
  { $set: { price: 18000 } }
)


// ✅ Updates Phone price to 18000.

// Q4️⃣ Add a new field to specific document

Dataset

db.employees.insertMany([
  { name: "Ali", dept: "Sales" },
  { name: "Maya", dept: "HR" }
])


Query

db.employees.updateOne(
  { name: "Maya" },
  { $set: { location: "Dubai" } }
)


// ✅ Adds field location: "Dubai" to Maya.

// Q5️⃣ Update nested field

Dataset

db.students.insertMany([
  { name: "Neha", details: { marks: 80, grade: "B" } }
])


Query

db.students.updateOne(
  { name: "Neha" },
  { $set: { "details.grade": "A" } }
)


// ✅ Updates nested field grade inside details to "A".