// Problem 1:
// Collection: transactions
db.transactions.insertMany([
  { user: "A", balanceChange: -250 },
  { user: "B", balanceChange: 120 },
  { user: "C", balanceChange: -75 }
])


// Question: Show all users with the absolute value of their balance change using $abs.
// Solution:
db.transactions.aggregate([
  { $project: { user: 1, absChange: { $abs: "$balanceChange" } } }
])


// Problem 2:
// Collection: temperatures

db.temperatures.insertMany([
  { city: "Delhi", difference: -3.4 },
  { city: "Chennai", difference: 2.6 },
  { city: "Kolkata", difference: -1.2 }
])


// Question: Display absolute temperature differences for each city.
// Solution:

db.temperatures.aggregate([
  { $project: { city: 1, absDifference: { $abs: "$difference" } } }
])


// Problem 3:
// Collection: profits

db.profits.insertMany([
  { month: "Jan", profit: -500 },
  { month: "Feb", profit: 300 },
  { month: "Mar", profit: -200 }
])


// Question: Find absolute profit values for each month.
// Solution:

db.profits.aggregate([
  { $project: { month: 1, absProfit: { $abs: "$profit" } } }
])