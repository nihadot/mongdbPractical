// Q1:
// Question: Find users where the age field is a number.
// Insert:

db.users.insertMany([
  { name: "A", age: 25 },
  { name: "B", age: "30" },
  { name: "C", age: 40 }
])


// Query:

db.users.find({ age: { $type: "number" } })


// Q2:
// Question: Find documents where email is a string type.
// Insert:

db.contacts.insertMany([
  { name: "John", email: "john@gmail.com" },
  { name: "Mary", email: 12345 },
  { name: "Ali", email: "ali@mail.com" }
])


// Query:

db.contacts.find({ email: { $type: "string" } })


// Q3:
// Question: Find records where createdAt is a date type.
// Insert:

db.logs.insertMany([
  { event: "login", createdAt: new Date() },
  { event: "logout", createdAt: "2024-01-01" },
  { event: "update", createdAt: new Date() }
])


// Query:

db.logs.find({ createdAt: { $type: "date" } })