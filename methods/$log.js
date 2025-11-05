// Q1️⃣ Find natural log of salary

// Dataset

db.employees.insertMany([
  { name: "Ali", salary: 1000 },
  { name: "Sara", salary: 5000 }
])


// Query
db.employees.aggregate([
  { $project: { name: 1, logSalary: { $log: ["$salary", 10] } } }
])



// ✅ Returns natural log (base e) of each salary.

// Q2️⃣ Calculate log base 10 of views

// Dataset

db.videos.insertMany([
  { title: "Intro", views: 100 },
  { title: "Advanced", views: 10000 }
])


// Query

db.videos.aggregate([
  { $project: { title: 1, log10Views: { $log: [10, "$views"] } } }
])


// ✅ Calculates log₁₀(views).

// Q3️⃣ Compute log of prices (natural base)

// Dataset

db.products.insertMany([
  { item: "Book", price: 20 },
  { item: "Laptop", price: 800 }
])


// Query

db.products.aggregate([
  { $project: { item: 1, logPrice: { $log: ["$price"] } } }
])


// ✅ Returns ln(price).

// Q4️⃣ Use custom base for log

// Dataset

db.math.insertMany([
  { num: 8 },
  { num: 64 }
])


// Query

db.math.aggregate([
  { $project: { num: 1, logBase2: { $log: [2, "$num"] } } }
])


// ✅ Calculates log₂(num).

// Q5️⃣ Log of age + 1

// Dataset

db.people.insertMany([
  { name: "Nihal", age: 24 },
  { name: "Arun", age: 30 }
])


Query

db.people.aggregate([
  { $project: { name: 1, logAgePlus1: { $log: ["$age", 1] } } }
])


// ✅ Calculates log(age) with extra addition before logging.