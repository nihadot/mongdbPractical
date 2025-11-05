// Q1️⃣ Double all product prices

// Dataset

db.products.insertMany([
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
])


Query

db.products.updateMany({}, { $mul: { price: 2 } })


// ✅ Each price is multiplied by 2.

// Q2️⃣ Increase salary by 10%

Dataset

db.employees.insertMany([
  { name: "Amit", salary: 40000 },
  { name: "Sara", salary: 60000 }
])


Query

db.employees.updateMany({}, { $mul: { salary: 1.1 } })


// ✅ Each salary increases by 10%.

// Q3️⃣ Reduce stock by half

Dataset

db.inventory.insertMany([
  { item: "Book", stock: 100 },
  { item: "Pen", stock: 200 }
])


Query

db.inventory.updateMany({}, { $mul: { stock: 0.5 } })


// ✅ stock values become half.

// Q4️⃣ Multiply sales count by 3 for "TV"

Dataset

db.sales.insertMany([
  { product: "TV", count: 10 },
  { product: "AC", count: 5 }
])


Query

db.sales.updateOne({ product: "TV" }, { $mul: { count: 3 } })


// ✅ count for “TV” becomes 30.

// Q5️⃣ Apply discount by 20% (price * 0.8)

Dataset

db.items.insertMany([
  { name: "Watch", price: 2500 },
  { name: "Shoes", price: 4000 }
])


Query

db.items.updateMany({}, { $mul: { price: 0.8 } })


// ✅ Prices reduced by 20%.