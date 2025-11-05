// Q1️⃣ Increase salary by 5000

// Dataset

db.employees.insertMany([
  { name: "Ravi", salary: 40000 },
  { name: "Aisha", salary: 45000 }
])


Query

db.employees.updateMany({}, { $inc: { salary: 5000 } })


// ✅ Increases each employee’s salary by 5000.

// Q2️⃣ Increase stock by 10 where product is “Laptop”

// Dataset

db.products.insertMany([
  { name: "Laptop", stock: 20 },
  { name: "Phone", stock: 30 }
])


Query

db.products.updateOne({ name: "Laptop" }, { $inc: { stock: 10 } })


// ✅ Laptop stock becomes 30.

// Q3️⃣ Decrease quantity by 2
// 
// Dataset

db.cart.insertMany([
  { item: "Book", quantity: 5 },
  { item: "Pen", quantity: 10 }
])


// Query

db.cart.updateOne({ item: "Book" }, { $inc: { quantity: -2 } })


// ✅ Quantity reduced from 5 → 3.

// Q4️⃣ Increment login count by 1

// Dataset

db.users.insertMany([
  { username: "Nihal", loginCount: 4 }
])


// Query

db.users.updateOne({ username: "Nihal" }, { $inc: { loginCount: 1 } })


// ✅ loginCount becomes 5.

// Q5️⃣ Increase multiple fields

// Dataset

db.sales.insertMany([
  { product: "TV", sold: 50, returned: 5 }
])


// Query

db.sales.updateOne(
  { product: "TV" },
  { $inc: { sold: 5, returned: -1 } }
)


// ✅ sold → 55, returned → 4.