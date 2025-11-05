// Q1️⃣ Rename field age to userAge

// Dataset

db.users.insertMany([
  { name: "Sara", age: 25 },
  { name: "John", age: 30 }
])


// Query

db.users.updateMany({}, { $rename: { "age": "userAge" } })


// ✅ Renames field age → userAge in all documents.

// Q2️⃣ Rename marks to score

// Dataset

db.students.insertMany([
  { name: "Ravi", marks: 85 },
  { name: "Aisha", marks: 90 }
])


// Query

db.students.updateMany({}, { $rename: { "marks": "score" } })


// ✅ Renames marks → score.

// Q3️⃣ Rename nested field

// Dataset

db.employees.insertMany([
  { name: "Ali", info: { city: "Dubai", phone: "12345" } }
])


// Query

db.employees.updateOne(
  { name: "Ali" },
  { $rename: { "info.phone": "info.contactNumber" } }
)


// ✅ Renames nested field phone → contactNumber.

// Q4️⃣ Rename field tempPrice to discountedPrice

// Dataset

db.products.insertMany([
  { name: "Laptop", tempPrice: 50000, price: 60000 }
])


// Query

db.products.updateOne(
  { name: "Laptop" },
  { $rename: { "tempPrice": "discountedPrice" } }
)


// ✅ Field name changes from tempPrice → discountedPrice.

// Q5️⃣ Rename multiple fields

// Dataset

db.orders.insertMany([
  { orderId: 1, custName: "Nihal", orderAmt: 500 },
  { orderId: 2, custName: "Ravi", orderAmt: 800 }
])


// Query

db.orders.updateMany(
  {},
  { $rename: { "custName": "customerName", "orderAmt": "amount" } }
)


// ✅ Renames custName → customerName and orderAmt → amount.