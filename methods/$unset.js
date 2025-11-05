// Q1️⃣ Remove field age from users

Dataset

db.users.insertMany([
  { name: "Sara", age: 25 },
  { name: "John", age: 30 }
])


Query

db.users.updateMany({}, { $unset: { age: "" } })


// ✅ Removes age field from all documents.

// Q2️⃣ Remove marks from a specific student

Dataset

db.students.insertMany([
  { name: "Ravi", marks: 85, grade: "A" },
  { name: "Aisha", marks: 90, grade: "A+" }
])


Query

db.students.updateOne(
  { name: "Ravi" },
  { $unset: { marks: "" } }
)


// ✅ Removes marks only from Ravi’s document.

// Q3️⃣ Remove nested field

Dataset

db.employees.insertMany([
  { name: "Ali", info: { city: "Dubai", phone: "12345" } }
])


Query

db.employees.updateOne(
  { name: "Ali" },
  { $unset: { "info.phone": "" } }
)


// ✅ Removes only the nested phone field.

// Q4️⃣ Remove temporary field

Dataset

db.products.insertMany([
  { name: "Laptop", tempPrice: 50000, price: 60000 }
])


Query

db.products.updateOne(
  { name: "Laptop" },
  { $unset: { tempPrice: "" } }
)


// ✅ Deletes tempPrice field.

// Q5️⃣ Remove multiple fields

Dataset

db.orders.insertMany([
  { orderId: 1, tempNote: "urgent", draft: true },
  { orderId: 2, tempNote: "review", draft: false }
])


Query

db.orders.updateMany(
  {},
  { $unset: { tempNote: "", draft: "" } }
)


// ✅ Removes both tempNote and draft fields from all documents.