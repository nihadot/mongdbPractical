// Here are 5 MongoDB practice questions using $mod — each with dataset + query + explanation 👇

// Q1️⃣ Find numbers divisible by 5
Dataset
db.numbers.insertMany([
  { num: 10 },
  { num: 14 },
  { num: 25 },
  { num: 32 }
])

Query
db.numbers.find({
  num: { $mod: [5, 0] }
})

// ✅ Returns numbers where num % 5 == 0 → 10, 25

// Q2️⃣ Find employees whose salary is even
Dataset
db.employees.insertMany([
  { name: "Ali", salary: 30000 },
  { name: "Sara", salary: 25001 },
  { name: "John", salary: 50002 }
])

Query
db.employees.find({
  salary: { $mod: [2, 0] }
})

// ✅ Returns even salaries → Ali, John

// Q3️⃣ Find students whose roll number is odd
Dataset
db.students.insertMany([
  { name: "Ameen", roll: 1 },
  { name: "Faisal", roll: 2 },
  { name: "Rahul", roll: 3 }
])

Query
db.students.find({
  roll: { $mod: [2, 1] }
})

// ✅ Returns odd roll numbers → Ameen, Rahul

// Q4️⃣ Find orders where total amount leaves remainder 100 when divided by 500
Dataset
db.orders.insertMany([
  { orderId: 1, total: 2100 },
  { orderId: 2, total: 2600 },
  { orderId: 3, total: 3100 }
])

Query
db.orders.find({
  total: { $mod: [500, 100] }
})

// ✅ Returns totals with remainder 100 → 2100, 3100

// Q5️⃣ Find users whose age is multiple of 3
Dataset
db.users.insertMany([
  { name: "Nihal", age: 27 },
  { name: "Anas", age: 22 },
  { name: "Sara", age: 33 }
])

Query
db.users.find({
  age: { $mod: [3, 0] }
})

// ✅ Returns ages divisible by 3 → Nihal, Sara