// Q1️⃣ Remove specific hobbies from user
// Dataset
db.users.insertMany([
  { name: "Nihal", hobbies: ["reading", "music", "coding", "sports"] }
])

// Query
db.users.updateOne(
  { name: "Nihal" },
  { $pullAll: { hobbies: ["music", "sports"] } }
)

// ✅ Removes "music" and "sports" from the array.

// Q2️⃣ Remove multiple tags from blog
// Dataset
db.blogs.insertMany([
  { title: "Mongo Basics", tags: ["database", "nosql", "mongodb", "data"] }
])

// Query
db.blogs.updateOne(
  { title: "Mongo Basics" },
  { $pullAll: { tags: ["nosql", "data"] } }
)

// ✅ Removes "nosql" and "data" tags.

// Q3️⃣ Remove items from shopping list
Dataset
db.lists.insertMany([
  { user: "Ali", items: ["apple", "banana", "milk", "bread"] }
])

// Query
db.lists.updateOne(
  { user: "Ali" },
  { $pullAll: { items: ["milk", "bread"] } }
)

// ✅ Removes "milk" and "bread".

// Q4️⃣ Remove unwanted numbers
// Dataset
db.numbers.insertMany([
  { set: [10, 20, 30, 40, 50] }
])

// Query
db.numbers.updateOne(
  {},
  { $pullAll: { set: [20, 40] } }
)

// ✅ Removes 20 and 40 from the array.

// Q5️⃣ Remove students who dropped
Dataset
db.classes.insertMany([
  { course: "Math", students: ["John", "Sara", "Alex", "Tom"] }
])

Query
db.classes.updateOne(
  { course: "Math" },
  { $pullAll: { students: ["Sara", "Tom"] } }
)

// ✅ Removes "Sara" and "Tom" from the student list.