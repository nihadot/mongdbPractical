What does bitwise mean?

Bitwise = check certain bits in a number.

Example:
If a number = 5
Its bits = 101

First bit = 1

Second bit = 0

Third bit = 1

Bitwise operators check these bits.

Why in MongoDB?

To check:

if a bit is set (1)

if a bit is not set (0)

Used for:

permissions

flags

feature toggles

binary settings

One-line Malayalam

Bitwise = നമ്പറുകൾ ഉള്ളിലെ 0–1 bit values പരിശോധിക്കുന്നത്.











What:
------
Bitwise operators check specific bits (0/1) inside a number.
Why:
---------
To store permissions, flags, feature toggles, statuses inside one number and check them fast.
When:
--------
When you use numbers like 1,2,4,8… to represent multiple ON/OFF options in a single field.
Where:
---------
Used in MongoDB queries on numeric fields.
How:
-------
db.users.find({ flags: { $bitsAllSet: [1, 3] } })
