// Q1:
// Question: Truncate each product’s price to 1 decimal place.
// Insert:

db.products.insertMany([
    { name: "Phone", price: 123.567 },
    { name: "TV", price: 89.999 },
    { name: "Laptop", price: 45.432 }
])


// Query:

db.products.aggregate([
    {
        $project:
        {
            name: 1,
            trunicatedPrice:
            {
                $trunc: ["$price", 1]
            }
        }
    }
])


// Q2:
// Question: Truncate salary values to whole numbers.
// Insert:

db.employees.insertMany([
    { name: "A", salary: 4500.75 },
    { name: "B", salary: 5200.99 },
    { name: "C", salary: 3999.25 }
])


// Query:

db.employees.aggregate([
    {
        $project:
        {
            name: 1,
            trunicatedPrice:
            {
                $trunc: ["$salary", 0]
            }
        }
    }
])


// Q3:
// Question: Truncate product ratings to 2 decimal places.
// Insert:

db.reviews.insertMany([
    { product: "A", rating: 4.6789 },
    { product: "B", rating: 3.995 },
    { product: "C", rating: 4.321 }
])


// Query:

db.reviews.aggregate([
    {
        $project:
        {
            product: 1,
            trunicatedPrice:
            {
                $trunc: ["$rating", 2]
            }
        }
    }
])