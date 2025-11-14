1) Uses Extra Disk Space

Each index stores additional data.
More indexes → more storage.

2) Slows Down Writes

Insert / Update / Delete must update indexes also.
More indexes → slower writes.

3) RAM Usage Increases

Indexes must fit in memory for speed.
Large indexes → heavy RAM usage.

4) Not Useful for Small Collections

Small collections scan faster than index lookup.

5) Wrong Index = Slow Query

Bad index or missing index → slower than no index.

6) Too Many Indexes = Confusion

Query planner may choose wrong index → poor performance.

7) TTL Index supports only Date field

TTL works only on Date type.

8) Text Index: Only one per collection

You can create only one text index.

9) Wildcard Index: Expensive

Uses huge disk space if document is large.

⭐ One-line Summary

Indexes speed reads but slow writes, use disk/RAM, and too many indexes reduce performance instead of improving it.