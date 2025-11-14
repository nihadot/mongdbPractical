Atomicity = operation completes fully or nothing happens.

What:
Atomicity = an operation must be all or nothing.

Why:
To prevent half-updated, broken, corrupted data.

When:
During writes (update, insert, delete) → especially important for money, counters, inventory.

Where:
Inside a single MongoDB document (atomic per document).

How:
MongoDB applies the whole write at once; if anything fails, it rolls back automatically.




You don’t need to do anything.

MongoDB gives built-in atomicity for every write on a single document.

update

insert

delete

findOneAndUpdate

increment

array push

All these happen atomically.

If operation fails → MongoDB cancels it fully.