Write Concern:
MongoDB write എത്ര സുരക്ഷയോടെ confirm ചെയ്യണം എന്ന് tell ചെയ്യുന്നത്.

Read Concern:
MongoDB read എന്തു level consistency നൽകണം എന്ന് decide ചെയ്യുന്നത്




✅ Write Concern (short)

What: എത്ര nodes write confirm ചെയ്യണം?
Why: Data safety.
Levels:

w:1 → primary confirm മാത്രം

w:majority → majority nodes confirm

w:0 → no confirmation

One-line:
Write Concern = write safety level.

✅ Read Concern (short)

What: Read ചെയ്യുമ്പോൾ എന്തു consistency വേണം?
Why: Avoid stale/old data.
Levels:

local → primary memory read

majority → only majority-confirmed data

available → quickest read

One-line:
Read Concern = read consistency level.











🔵 Read Concern Levels (and how they behave)
1) local (default)

Reads from primary memory (RAM) → fastest → but not guaranteed majority-consistent.

Scenario:

Write arrives

Primary updates RAM

Secondaries still not updated

Client reads → gets latest but unconfirmed data

Safety: low
Speed: very high

2) majority

Reads only data that majority nodes confirmed.

Scenario:

Write happens on primary

Secondaries also copy it

Now 2 nodes (majority) have it

Client reads → gets safe, confirmed, consistent data

Safety: high
Speed: slower than local

3) available

Read from ANY node, even if behind.

Scenario:

One secondary delayed

Client reads from that node

Gets old data

Same like AP systems → always available, not consistent.

4) linearizable

Strongest read → must read the absolutely latest write confirmed by primary.

Scenario:

Client writes

Next read must see that write

Even election delays are checked

Safety: maximum
Use: money transfers, banking