// 🧩 1️⃣ Add Full Name

Dataset

db.users.insertMany([
  { firstName: "Ameen", lastName: "Rahman" },
  { firstName: "Sara", lastName: "Ali" }
])


// Question: firstName + lastName ചേർത്ത് fullName field ഉണ്ടാക്കുക.
Query

db.users.aggregate([
  { $addFields: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }
])

// 🧩 2️⃣ Calculate Total Marks
// 
Dataset

db.students.insertMany([
  { name: "Nihal", math: 85, science: 90 },
  { name: "Lina", math: 70, science: 80 }
])


// Question: ഓരോ വിദ്യാർത്ഥിക്കും total_marks field ചേർക്കുക.
Query

db.students.aggregate([
  { $addFields: { total_marks: { $add: ["$math", "$science"] } } }
])

// 🧩 3️⃣ Convert Negative to Positive

Dataset

db.transactions.insertMany([
  { user: "Ali", amount: -150 },
  { user: "Faisal", amount: 200 }
])


// Question: amount field-ന്റെ absolute value കാണിക്കുന്ന പുതിയ field ചേർക്കുക.
Query

db.transactions.aggregate([
  { $addFields: { absAmount: { $abs: ["$amount"] } } }
])

// 🧩 4️⃣ Add Discounted Price

Dataset

db.products.insertMany([
  { item: "Phone", price: 50000, discount: 10 },
  { item: "Laptop", price: 80000, discount: 20 }
])


// Question: discounted price (price - discount%) കാണിക്കുന്ന പുതിയ field ചേർക്കുക.
Query

db.products.aggregate([
  { 
    $addFields: { 
      discountedPrice: { 
        $subtract: [
          "$price", 
          { $divide: [ { $multiply: ["$price", "$discount"] }, 100 ] }
        ]
      } 
    } 
  }
])

// 🧩 5️⃣ Add Age Category

Dataset

db.people.insertMany([
  { name: "Anas", age: 15 },
  { name: "Rahul", age: 25 }
])


// Question: age ≤18 ആണെങ്കിൽ “Minor” അല്ലെങ്കിൽ “Adult” എന്ന പുതിയ field ചേർക്കുക.
// Query

db.people.aggregate([
  { 
    $addFields: { 
      category: { 
        $cond: [{ $lte: ["$age", 18] }, "Minor", "Adult"] 
      } 
    } 
  }
])