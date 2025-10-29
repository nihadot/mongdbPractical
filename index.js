[
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "salary": 65000,
    "position": "Software Engineer",
    "hobbies": ["reading", "gaming", "traveling"],
    "skills": ["JavaScript", "React", "Node.js"],
    "address": "123 Main St, New York, USA"
  },
  {
    "name": "Aisha Khan",
    "email": "aisha.khan@example.com",
    "salary": 72000,
    "position": "UI/UX Designer",
    "hobbies": ["painting", "photography", "yoga"],
    "skills": ["Figma", "Adobe XD", "Illustrator"],
    "address": "45 Park Avenue, Dubai, UAE"
  },
  {
    "name": "Carlos Rivera",
    "email": "carlos.rivera@example.com",
    "salary": 80000,
    "position": "Project Manager",
    "hobbies": ["cycling", "reading", "cooking"],
    "skills": ["Agile", "Scrum", "Leadership"],
    "address": "87 King St, Toronto, Canada"
  },
  {
    "name": "Emily Zhang",
    "email": "emily.zhang@example.com",
    "salary": 90000,
    "position": "Data Scientist",
    "hobbies": ["chess", "blogging", "music"],
    "skills": ["Python", "TensorFlow", "SQL"],
    "address": "12 Garden Rd, Singapore"
  },
  {
    "name": "Mohammed Ali",
    "email": "mohammed.ali@example.com",
    "salary": 58000,
    "position": "Digital Marketer",
    "hobbies": ["football", "vlogging", "traveling"],
    "skills": ["SEO", "Google Ads", "Content Strategy"],
    "address": "56 City Center, Mumbai, India"
  }
]




// Q1: How to find total salary by position?
// A1:

// db.users.aggregate([
//   { $group: { _id: "$position", totalSalary: { $sum: "$salary" } } }
// ])


// Q2: How to find average salary by position?
// A2:

// db.users.aggregate([
//   { $group: { _id: "$position", avgSalary: { $avg: "$salary" } } }
// ])


// Q3: How to count users in each position?
// A3:

// db.users.aggregate([
//   { $group: { _id: "$position", count: { $sum: 1 } } }
// ])


// Q4: How to get highest salary per position?
// A4:

// db.users.aggregate([
//   { $group: { _id: "$position", maxSalary: { $max: "$salary" } } }
// ])


// Q5: How to get lowest salary per position?
// A5:

// db.users.aggregate([
//   { $group: { _id: "$position", minSalary: { $min: "$salary" } } }
// ])










// Q1: How to count users by hobby?
// A1:

// db.users.aggregate([
//   { $unwind: "$hobbies" },
//   { $group: { _id: "$hobbies", totalUsers: { $sum: 1 } } }
// ])


// Q2: How to count users by skill?
// A2:

// db.users.aggregate([
//   { $unwind: "$skills" },
//   { $group: { _id: "$skills", totalUsers: { $sum: 1 } } }
// ])


// Q3: How to find average salary by country (from address)?
// A3:

// db.users.aggregate([
//   {
//     $group: {
//       _id: { $arrayElemAt: [{ $split: ["$address", ", "] }, -1] },
//       avgSalary: { $avg: "$salary" }
//     }
//   }
// ])


// Q4: How to list all employee names by position?
// A4:

// db.users.aggregate([
//   { $group: { _id: "$position", employees: { $push: "$name" } } }
// ])


// Q5: How to find total salary by each skill?
// A5:

// db.users.aggregate([
//   { $unwind: "$skills" },
//   { $group: { _id: "$skills", totalSalary: { $sum: "$salary" } } }
// ])





// DBRef – Short Notes

// Meaning: A special MongoDB format to reference documents across different collections or databases.

// Structure:

// { "$ref": "collectionName", "$id": ObjectId("..."), "$db": "databaseName" }


// Purpose: Used when a field may reference documents from different collections.

// Usage: Stored inside documents; no separate collection created.

// Retrieval: MongoDB doesn’t auto-resolve — you must manually query using $ref and $id.

// Example:

// { "target": { "$ref": "users", "$id": ObjectId("64a...") } }


// Preferred Alternative: Manual references (userId) — faster, simpler, and widely used.

// Use DBRef only:

// When references span multiple collections or databases.

// In rare, dynamic relationship cases (logs, notifications, CMS, etc.).