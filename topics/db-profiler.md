Database Profiler = MongoDB-യുടെ built-in tool → slow queries, heavy operations, എന്ത് commands ആണ് DB-നെ slow ആക്കുന്നുവെന്ന് track ചെയ്യുന്നത്.

What:

Profiler = query performance monitor.

Why:

Slow queries find ചെയ്യാൻ

Expensive operations catch ചെയ്യാൻ

Debug performance issues

When:

App slow ആണെന്ന് തോന്നുമ്പോൾ

Index create ചെയ്യുംമുമ്പ്/ശേഷം

Heavy load time

Debugging query optimization

Where:

Works per-database:

db.setProfilingLevel()
db.system.profile (collection)

How:
1) Enable profiler

Level 1 → slow queries only

db.setProfilingLevel(1)


Level 2 → EVERYTHING record ചെയ്യും

db.setProfilingLevel(2)


Disable

db.setProfilingLevel(0)

2) See profiler logs
db.system.profile.find().pretty()

⭐ One-line Summary

Profiler = MongoDB slow query + performance monitoring tool.