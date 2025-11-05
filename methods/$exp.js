// Q1️⃣ Calculate exponential of salary

// Dataset

db.employees.insertMany([
  { name: "Ali", salary: 5 },
  { name: "Sara", salary: 7 }
])


// Query
db.employees.aggregate([
  { $project: { name: 1, expSalary: { $exp: ["$salary"] } } }
])

// Q2️⃣ Exponential growth of views

// Dataset

db.videos.insertMany([
  { title: "Intro", growthRate: 2 },
  { title: "Pro", growthRate: 3 }
])


// Query

db.videos.aggregate([
  { $project: { title: 1, expGrowth: { $exp: ["$growthRate"] } } }
])


// ✅ Computes eˣ for growthRate.

// Q3️⃣ Predict sales increase

// Dataset

db.sales.insertMany([
  { product: "Pen", factor: 1.2 },
  { product: "Book", factor: 2.5 }
])


// Query

db.sales.aggregate([
  { $project: { product: 1, predicted: { $exp: ["$factor"] } } }
])


// ✅ Calculates exponential forecast.

// Q4️⃣ Combine with math operations

// Dataset

db.math.insertMany([
  { x: 1 },
  { x: 2 }
])


Query

db.math.aggregate([
  { $project: { x: 1, expOfXPlus1: { $exp: [{ $add: ["$x", 1] }] } } }
])


// ✅ Returns e^(x+1).

// Q5️⃣ Exponential function for normalization

// Dataset

db.scores.insertMany([
  { name: "John", score: 2 },
  { name: "Emma", score: 4 }
])


// Query

db.scores.aggregate([
  { $project: { name: 1, expScore: { $exp: ["$score"] } } }
])


// ✅ Converts score to exponential form (used in ML or probability calculations).