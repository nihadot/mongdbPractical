db.collection.updateOne(
  { _id: 1 },
  { $addToSet: { tags: { $each: ["new", "hot", "sale"] } } }
)


db.students.updateOne(
  { _id: 1 },
  { $addToSet: { courses: { $each: ["math", "science", "english"] } } }
)
