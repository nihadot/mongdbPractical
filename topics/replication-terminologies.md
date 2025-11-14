1. Replica Set

A group of MongoDB servers that hold the same data.

2. Primary

The only node that accepts writes.

3. Secondary

Copies data from primary (read-only unless configured).

4. Oplog (Operation Log)

A special log where primary records all writes, and secondaries copy from it.

5. Replication Lag

Delay between primary’s write and secondary applying it.

6. Heartbeat

Every 2 seconds nodes ping each other to check health.

7. Election

Process of choosing a new primary when old one fails.

8. Majority

More than half of the nodes. Required to elect a primary.

9. Priority

Setting that decides which node is preferred for becoming primary.

10. Rollback

When secondary becomes primary with stale data, MongoDB corrects it by undoing incorrect writes.

11. Arbiter

A server that votes only, does not store data.

12. Members

All nodes in the replica set (primary + secondaries + arbiters).

13. Read Preferences

Controls from where reads happen (primary, secondary, nearest, etc.).

14. Write Concern

Controls how many nodes must confirm the write for it to be “successful”.

15. Failover

Automatic switching to a new primary when the old one dies.

16. Sync Source

The secondary node a replica uses to copy data from.

17. Initial Sync

When a new secondary joins and copies all data from primary for the first time.