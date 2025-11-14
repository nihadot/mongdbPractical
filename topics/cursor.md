Cursor = the pointer MongoDB returns when you run a query.
It lets you iterate through documents one by one instead of loading everything at once.


Manual iteration:
-------------------
Query → get cursor
cursor = db.users.find().batchSize(50)

Manually iterate
while (cursor.hasNext()) {
    printjson(cursor.next())
}

Meaning


find() returns a cursor object


batchSize(50) = fetch 50 docs at a time manually


hasNext() = check if more docs exist


next() = fetch next document manually





