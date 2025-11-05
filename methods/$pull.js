// Here are 5 MongoDB practice questions using $pull 👇

// Q1️⃣ Remove a hobby from user

// Dataset

db.users.insertMany([
  { name: "Nihal", hobbies: ["reading", "music", "coding"] }
])


Query

db.users.updateOne({ name: "Nihal" }, { $pull: { hobbies: "music" } })


// ✅ Removes "music" from Nihal’s hobbies.

// Q2️⃣ Remove a specific subject

// Dataset

db.students.insertMany([
  { name: "Ali", subjects: ["Math", "Science", "English"] }
])


// Query

db.students.updateOne({ name: "Ali" }, { $pull: { subjects: "Science" } })


// ✅ Deletes "Science" from the array.

// Q3️⃣ Remove specific order ID

// Dataset

db.customers.insertMany([
  { name: "Rahul", orders: [1001, 1002, 1003] }
])


// Query

db.customers.updateOne({ name: "Rahul" }, { $pull: { orders: 1002 } })

// 
// ✅ Removes order 1002.

// Q4️⃣ Remove comment with specific text

// Dataset

db.posts.insertMany([
  { title: "Mongo Basics", comments: [{ text: "Nice post" }, { text: "Bad post" }] }
])


// Query

db.posts.updateOne(
  { title: "Mongo Basics" },
  { $pull: { comments: { text: "Bad post" } } }
)


// ✅ Removes comment with "Bad post".

// Q5️⃣ Remove score less than 50

Dataset

db.games.insertMany([
  { player: "Tom", scores: [40, 60, 30, 90] }
])


Query

db.games.updateOne(
  { player: "Tom" },
  { $pull: { scores: { $lt: 50 } } }
)


// ✅ Removes all scores less than 50.