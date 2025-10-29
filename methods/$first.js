// Q1:
// Question: Get the first sale made for each product.
// Insert:

db.sales.insertMany([
  { product: "A", amount: 100, date: new Date("2024-01-01") },
  { product: "A", amount: 150, date: new Date("2024-01-02") },
  { product: "B", amount: 200, date: new Date("2024-01-01") }
])


// Query:

db.sales.aggregate([
  { $sort: { date: 1 } },
  { $group: { _id: "$product", firstSale: { $first: "$amount" } } }
])


// Q2:
// Question: Get the first comment on each post.
// Insert:

db.comments.insertMany([
  { postId: 1, text: "Nice!", createdAt: new Date("2024-01-01") },
  { postId: 1, text: "Great!", createdAt: new Date("2024-01-02") },
  { postId: 2, text: "Cool!", createdAt: new Date("2024-01-01") }
])


// Query:

db.comments.aggregate([
  { $sort: { createdAt: 1 } },
  { $group: { _id: "$postId", firstComment: { $first: "$text" } } }
])


// Q3:
// Question: Find each customer’s first order.
// Insert:

db.orders.insertMany([
  { customer: "John", orderId: 1, date: new Date("2024-01-01") },
  { customer: "John", orderId: 2, date: new Date("2024-01-05") },
  { customer: "Mary", orderId: 3, date: new Date("2024-01-02") }
])


// Query:

db.orders.aggregate([
  { $sort: { date: 1 } },
  { $group: { _id: "$customer", firstOrder: { $first: "$orderId" } } }
])
