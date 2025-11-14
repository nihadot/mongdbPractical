allowDiskUse = aggregation pipeline large data handle ചെയ്യാൻ disk ഉപയോഗിക്കാൻ MongoDB-നെ അനുവദിക്കുന്ന option.
Usage:
db.collection.aggregate(pipeline, { allowDiskUse: true })




What:
allowDiskUse lets MongoDB use disk when aggregation needs more memory.

Why:
To prevent “memory limit exceeded” errors when data is large.

When:
Huge $sort, $group, or heavy pipelines that don’t fit in RAM.

How:

db.col.aggregate(pipeline, { allowDiskUse: true })


Where:
Used only in aggregation pipelines.