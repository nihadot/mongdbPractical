TTL Index = documents auto-delete after a set time.

What:
Index that removes documents automatically.

Why:
Clear old logs, sessions, cache, tokens without writing delete code.

When:
You want data to expire after X seconds.

Where:
Works only on date fields.

How:

db.logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)


Documents auto-delete after 1 hour.