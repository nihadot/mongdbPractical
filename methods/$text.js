// Q1️⃣ Find articles containing “database”

Dataset

db.articles.insertMany([
  { title: "Introduction to MongoDB" },
  { title: "Database management systems overview" },
  { title: "Frontend development with React" }
])
db.articles.createIndex({ title: "text" })


Query

db.articles.find({ $text: { $search: "database" } })


// ✅ Returns documents where “database” appears in title.

// Q2️⃣ Find posts containing either “AI” or “ML”

Dataset

db.posts.insertMany([
  { content: "AI is transforming industries" },
  { content: "ML models are improving" },
  { content: "Blockchain is trending" }
])
db.posts.createIndex({ content: "text" })


Query

db.posts.find({ $text: { $search: "AI ML" } })


// ✅ Matches any containing “AI” or “ML”.

// Q3️⃣ Find books that mention “science” but not “fiction”

Dataset

db.books.insertMany([
  { title: "Science of Cooking" },
  { title: "Science Fiction Stories" },
  { title: "Mathematics and Logic" }
])
db.books.createIndex({ title: "text" })


Query

db.books.find({ $text: { $search: "science -fiction" } })


// ✅ Returns “Science of Cooking”.

// Q4️⃣ Find reviews mentioning exact phrase “good product”

Dataset

db.reviews.insertMany([
  { review: "This is a good product for beginners" },
  { review: "A really good and durable product" },
  { review: "Not worth the price" }
])
db.reviews.createIndex({ review: "text" })


Query

db.reviews.find({ $text: { $search: "\"good product\"" } })


// ✅ Matches only exact phrase “good product”.

// Q5️⃣ Find news articles with the word “sports” ranked by relevance

Dataset

db.news.insertMany([
  { headline: "Sports news today" },
  { headline: "Politics and economy updates" },
  { headline: "Latest sports and entertainment" }
])
db.news.createIndex({ headline: "text" })


Query

db.news.find(
  { $text: { $search: "sports" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })


// ✅ Returns results containing “sports”, sorted by text match relevance.