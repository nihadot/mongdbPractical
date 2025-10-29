// Q1:
// Question: Round product prices to 1 decimal place.
// Insert:

db.products.insertMany([
  { name: "Phone", price: 123.567 },
  { name: "TV", price: 89.999 },
  { name: "Laptop", price: 45.432 }
])


// Query:

db.products.aggregate([
  {
    $project: {
      name: 1,
      roundedPrice: { $round: ["$price", 1] }
    }
  }
])


// Q2:
// Question: Round employee salaries to the nearest hundred.
// Insert:

db.employees.insertMany([
  { name: "A", salary: 4567 },
  { name: "B", salary: 5234 },
  { name: "C", salary: 3999 }
])


// Query:

db.employees.aggregate([
  {
    $project: {
      name: 1,
      roundedSalary: { $round: ["$salary", -2] }
    }
  }
])


// Q3:
// Question: Round product ratings to 2 decimal places.
// Insert:

db.reviews.insertMany([
  { product: "A", rating: 4.6789 },
  { product: "B", rating: 3.995 },
  { product: "C", rating: 4.321 }
])


// Query:

db.reviews.aggregate([
  {
    $project: {
      product: 1,
      roundedRating: { $round: ["$rating", 2] }
    }
  }
])