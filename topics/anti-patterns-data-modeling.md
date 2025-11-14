Anti-Patterns:
Bad designs that cause slow queries, high cost, or scaling problems.

Common MongoDB Anti-Patterns (very short)

1) Massive documents
Too big documents → slow reads & writes.

2) Too many collections
Unnecessary splitting → query overhead.

3) Embedding everything
Very deep subdocuments → performance issues.

4) Referencing everything
Too many lookups → slow joins.

5) No index / wrong index
Full scans → slow queries.

6) Storing large files inside documents
Should use GridFS.

7) Unbounded arrays
Very large arrays → index and update slowdown.

8) Frequently growing documents
Causes document moves → slower writes.



Data modeling = correct design.
Anti-patterns = designs that break performance and scalability.