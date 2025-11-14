🔥 What is “Isolation” ?

Isolation =
“Oru write operation നടക്കുമ്പോൾ, മറ്റുള്ളവ read/update ചെയ്യുമ്പോൾ conflict ആകരുത്.”

Ultra simple:

👉 2 people same data edit cheyyumbo
👉 data mix ആകരുത്
👉 half-updates ഒക്കെ കണ്ടാൽ പാടില്ല

ഈ protection level-നെ ആണ് isolation level എന്നു പറയുന്നത്.

🔵 SQL-ൽ 4 isolation levels und:

Read Uncommitted

Read Committed

Repeatable Read

Serializable

🟢 But MongoDB-ൽ ഇവ ഇല്ല. MongoDB uses only ONE rule:
⭐ “Single Document Atomicity”

1 document update ആകുമ്പോൾ → COMPLETELY LOCKED.
Half update കാണില്ല.
Other writes skip ചെയ്യും, wait ചെയ്യും.

So MongoDB isolation = document-level isolation.

🍀 SUPER SIMPLE MALAYALAM:
SQL-ൽ isolation = big levels

(പല protection modes)

MongoDB-ൽ isolation = only one:

👉 ഒരു document update ചെയ്യുമ്പോൾ, ആ document മുഴുവൻ lock ആവും.
മറ്റാർക്കും അതിൽ half-updated data കാണാൻ പറ്റില്ല.

❗ MongoDB does NOT support:

❌ Read Uncommitted
❌ Repeatable Read
❌ Serializable (multi-document)

MongoDB supports:

✔ Read Committed for reads
✔ Atomic for single document writes
⭐ FINAL ONE-LINE SUMMARY

MongoDB isolation = ഒരു document update ആകുമ്പോൾ, അത് പൂർണ്ണമായി lock ചെയ്ത് safe ആക്കുന്നത് മാത്രം.
SQL പോലെ multiple isolation levels ഇല്ല.





isolation
------------
🟢 Daily Life Example

Imagine two people editing the same Google Sheet cell.

Without isolation →

One edits “500”

Another edits “600”

Result becomes “560” → corrupted

With isolation →

First person finishes

Then second person edits

No mixing
This protection = isolation

🟣 In Database Terms

When a write is happening on a piece of data:

Other writes wait

Other reads don’t see half changes

Data always looks clean, consistent

🔵 MongoDB Isolation

MongoDB gives isolation per document:

One document update = atomic (all or nothing).
No one sees half changes.

But MongoDB does not provide big SQL isolation levels like:

Read Uncommitted

Repeatable Read

Serializable

⭐ Final One-line

Isolation = write നടക്കുമ്പോൾ data corrupt ആകാതിരിക്കാൻ read/write operations protect ചെയ്യുന്ന rule.