Batch Size = one request-il MongoDB cursor return ചെയ്യുന്ന documents-inte count.

What:
Documents returned per round-trip.

Why:
Control memory usage + network load.

When:
Large queries, streaming, pagination.

Where:
Cursor options (find, aggregate).

How:

db.users.find().batchSize(50)


One-line:
Batch size = cursor delivers results 50-50 അല്ലെങ്കിൽ N-N chunks ആയി.