// Q1:
// Question: Get the last sale made for each product.
// Insert:

db.sales.insertMany([
  { product: "A", amount: 100, date: new Date("2024-01-01") },
  { product: "A", amount: 200, date: new Date("2024-01-03") },
  { product: "B", amount: 150, date: new Date("2024-01-02") }
])


// Query:

db.sales.aggregate([
  { $sort: { date: 1 } },
  { $group: { _id: "$product", lastSale: { $last: "$amount" } } }
])


// Q2:
// Question: Get the last comment on each post.
// Insert:

db.comments.insertMany([
  { postId: 1, text: "Nice!", createdAt: new Date("2024-01-01") },
  { postId: 1, text: "Thanks!", createdAt: new Date("2024-01-03") },
  { postId: 2, text: "Good!", createdAt: new Date("2024-01-02") }
])


// Query:

db.comments.aggregate([
  { $sort: { createdAt: 1 } },
  { $group: { _id: "$postId", lastComment: { $last: "$text" } } }
])


// Q3:
// Question: Get the last login time for each user.
// Insert:

db.logins.insertMany([
  { user: "John", time: new Date("2024-01-01") },
  { user: "John", time: new Date("2024-01-05") },
  { user: "Mary", time: new Date("2024-01-03") }
])


// Query:

db.logins.aggregate([
  { $sort: { time: 1 } },
  { $group: { _id: "$user", lastLogin: { $last: "$time" } } }
])
