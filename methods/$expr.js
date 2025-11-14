// 1) Compare two fields
// Insert:
db.orders.insertMany([
  { _id: 1, total: 500, paid: 500 },
  { _id: 2, total: 600, paid: 300 }
])

// Query:
db.orders.find({
  $expr: { $gt: ["$total", "$paid"] }
})

// Result:
// { _id: 2, total: 600, paid: 300 }

// 2) Check if price = qty * 10
// Insert:
db.items.insertMany([
  { _id: 1, price: 100, qty: 10 },
  { _id: 2, price: 80,  qty: 5 }
])

// Query:
db.items.find({
  $expr: { $eq: ["$price", { $multiply: ["$qty", 10] }] }
})

// Result:
// { _id: 1, price: 100, qty: 10 }

// 3) Compare length of two arrays
// Insert:
db.users.insertMany([
  { _id: 1, likes: [1,2], dislikes: [1] },
  { _id: 2, likes: [1],   dislikes: [1,2] }
])

// Query:
db.users.find({
  $expr: { $gt: [ { $size: "$likes" }, { $size: "$dislikes" } ] }
})

// Result:
// { _id: 1, likes: [1,2], dislikes: [1] }

// 4) Check if age + bonusAge > 30
// Insert:
db.people.insertMany([
  { _id: 1, age: 20, bonusAge: 5 },
  { _id: 2, age: 25, bonusAge: 10 }
])

// Query:
db.people.find({
  $expr: { $gt: [ { $add: ["$age", "$bonusAge"] }, 30 ] }
})

// Result:
// { _id: 2, age: 25, bonusAge: 10 }

// 5) Compare lowercase(field) with value
// Insert:
db.names.insertMany([
  { _id: 1, name: "Nihad" },
  { _id: 2, name: "nihad" }
])

// Query:
db.names.find({
  $expr: { $eq: [ { $toLower: "$name" }, "nihad" ] }
})

// Result:
// { _id: 1, name: "Nihad" }
// { _id: 2, name: "nihad" }