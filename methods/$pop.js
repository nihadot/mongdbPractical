// Q1️⃣ Remove the last hobby from user

// Dataset

db.users.insertMany([
  { name: "Nihal", hobbies: ["reading", "music", "coding"] }
])


// Query

db.users.updateOne({ name: "Nihal" }, { $pop: { hobbies: 1 } })


// ✅ Removes the last element → "coding".

// Q2️⃣ Remove the first subject from student
// 
// Dataset

db.students.insertMany([
  { name: "Ali", subjects: ["Math", "Science", "English"] }
])


// Query

db.students.updateOne({ name: "Ali" }, { $pop: { subjects: -1 } })


// ✅ Removes the first element → "Math".

// Q3️⃣ Remove last score from player

// Dataset

db.players.insertMany([
  { name: "Tom", scores: [45, 78, 90, 32] }
])


// Query

db.players.updateOne({ name: "Tom" }, { $pop: { scores: 1 } })


// ✅ Removes the last score → 32.

// Q4️⃣ Remove first product from cart

// Dataset

db.carts.insertMany([
  { user: "Rahul", products: ["Laptop", "Phone", "Watch"] }
])


// Query

db.carts.updateOne({ user: "Rahul" }, { $pop: { products: -1 } })


// ✅ Removes the first product → "Laptop".

// Q5️⃣ Remove last comment from post

// Dataset

db.posts.insertMany([
  { title: "Mongo Tips", comments: ["Good", "Average", "Excellent"] }
])


// Query

db.posts.updateOne({ title: "Mongo Tips" }, { $pop: { comments: 1 } })


// ✅ Removes the last comment → "Excellent".