// Q1:
// Question: Find students who have a subject score with math > 80 and science > 70 in the same record.
// Insert:

db.students.insertMany([
    { name: "A", scores: [{ subject: "math", mark: 85 }, { subject: "science", mark: 75 }] },
    { name: "B", scores: [{ subject: "math", mark: 90 }, { subject: "science", mark: 60 }] },
    { name: "C", scores: [{ subject: "math", mark: 70 }, { subject: "science", mark: 80 }] }
])


// Query:

db.students.aggregate(
    [
        {
            $match: {
                $and: [
                    {
                        scores: {
                            $elemMatch: {
                                subject: "math",
                                mark: { $gt: 80 }
                            }
                        }
                    },
                    {
                        scores: {
                            $elemMatch: {
                                subject: "science",
                                mark: { $gt: 70 }
                            }
                        }
                    }
                ]
            }
        }])


// Q2:
// Question: Find products that have at least one review with rating ≥ 4 and reviewer = “John”.
// Insert:

db.products.insertMany([
    { name: "Phone", reviews: [{ reviewer: "John", rating: 5 }, { reviewer: "Mary", rating: 3 }] },
    { name: "TV", reviews: [{ reviewer: "Ali", rating: 4 }] },
    { name: "Laptop", reviews: [{ reviewer: "John", rating: 2 }] }
])


// Query:

db.products.aggregate([
    {
        $match: {
            $and: [
                {
                    reviews:
                    {
                        $elemMatch:
                            { rating: { $gt: 1 } }
                    }
                },
                {
                    reviews:
                    {
                        $elemMatch:
                            { reviewer: "John" }
                    }
                }]
        }
    }])


// Q3:
// Question: Find orders having any item with quantity > 2 and price < 500.
// Insert:

db.orders.insertMany([
    { orderId: 1, items: [{ product: "Pen", qty: 3, price: 100 }, { product: "Book", qty: 1, price: 200 }] },
    { orderId: 2, items: [{ product: "Bag", qty: 1, price: 800 }] },
    { orderId: 3, items: [{ product: "Pencil", qty: 5, price: 50 }] }
])


// Query:
// 

db.orders.aggregate([
    {
        $match: {
            $and: [
                {
                    items:
                    {
                        $elemMatch:
                            { qty: { $gt: 2 } }
                    }
                },
                {
                    items:
                    {
                        $elemMatch:
                            { price: {$lt: 500} }
                    }
                }]
        }
    }])