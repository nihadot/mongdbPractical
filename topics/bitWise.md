MongoDB-ൽ 4 bitwise operators ഉണ്ട്:

✅ 1) $bitsAllSet

All mentioned bits MUST be 1.

Example:

db.col.find({ flags: { $bitsAllSet: [1,3] } })

✅ 2) $bitsAnySet

At least one bit is 1.

Example:

db.col.find({ flags: { $bitsAnySet: [2] } })

✅ 3) $bitsAllClear

All mentioned bits MUST be 0.

Example:

db.col.find({ flags: { $bitsAllClear: [0,2] } })

✅ 4) $bitsAnyClear

At least one bit is 0.

Example:

db.col.find({ flags: { $bitsAnyClear: [1] } })