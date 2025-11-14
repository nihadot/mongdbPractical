$facet = run multiple aggregation pipelines in parallel and return all results together.

What:
-----
Runs many mini-pipelines inside one aggregation.

Why:
-----
To get multiple results (counts, lists, stats, etc.) in one query.

When:
-----
Dashboard, reports, analytics, multiple views of same data.

Where:
------
Inside aggregation pipeline.

How (simple example):
---------------------
db.users.aggregate([
  {
    $facet: {
      total:  [{ $count: "count" }],
      ages:   [{ $group: { _id: "$age" } }],
      names:  [{ $project: { name: 1, _id: 0 } }]
    }
  }
])


One-line:
---------
$facet = multi-result aggregation inside one query.







Collection (10 documents):
---------------------------
db.sales.insertMany([
  { item: "A", price: 100, qty: 2, city: "Kochi" },
  { item: "B", price: 150, qty: 1, city: "Kochi" },
  { item: "A", price: 120, qty: 3, city: "Calicut" },
  { item: "C", price: 80,  qty: 5, city: "Kochi" },
  { item: "B", price: 200, qty: 2, city: "Calicut" },
  { item: "A", price: 90,  qty: 1, city: "Trivandrum" },
  { item: "C", price: 70,  qty: 4, city: "Calicut" },
  { item: "B", price: 130, qty: 2, city: "Kochi" },
  { item: "A", price: 110, qty: 2, city: "Calicut" },
  { item: "C", price: 95,  qty: 3, city: "Trivandrum" }
])



$facet Query
--------------
db.sales.aggregate([
  {
    $facet: {
      totalDocs: [
        { $count: "count" }
      ],
      totalByCity: [
        { $group: { _id: "$city", total: { $sum: "$qty" } } }
      ],
      itemList: [
        { $group: { _id: "$item" } }
      ]
    }
  }
])


Why use $facet?
---------------
Because it gives multiple results in one query.
Instead of running 3 separate queries (count, group by, list items),
you get all results in one response.
Fast. Efficient. Perfect for dashboards.



















1) totalDocs (count)
db.sales.aggregate([
  { $count: "count" }
])

2) totalByCity (sum qty by city)
db.sales.aggregate([
  { $group: { _id: "$city", total: { $sum: "$qty" } } }
])

3) itemList (list unique items)
db.sales.aggregate([
  { $group: { _id: "$item" } }
])

Difference

Without $facet → 3 separate queries

With $facet → same 3 results in one single query



രു aggregation pipeline-ൽ മൂന്ന് independent results ഉണ്ടാക്കാൻ പറ്റൂ → $facet ഇല്ലെങ്കിൽ അതു ചെയ്യാനാവില്ല.

Why cannot do it without $facet? (simple answer)

Aggregation pipeline is linear:

stage1 → stage2 → stage3 → final result


ഒരു pipeline ഒറ്റ final result മാത്രമേ produce ചെയ്യൂ.

നിനക്ക് വേണ്ടത്:

Count

Group by city

List items

ഇവ 3 വ്യത്യസ്ത final outputs ആണ് →
ഒരു pipeline-ൽ impossible.

Why $facet works?

$facet pipeline-നെ branch ആക്കുന്നു:

pipeline
   ↳ pipeline 1 → result A
   ↳ pipeline 2 → result B
   ↳ pipeline 3 → result C


ഒറ്റ aggregation-ൽ 3 outputs ലഭിക്കും.
