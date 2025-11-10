Single-document atomicity:
----------------------------
MongoDB-ൽ ഒരു document-ലുള്ള operations complete അല്ലെങ്കിൽ rollback ആകുന്നു, partial update ഉണ്ടാകാറില്ല.

Embedded documents & arrays ഉപയോഗിച്ച് related data ഒരേ document-ൽ സൂക്ഷിക്കുന്നത്, പലപ്പോൾ multi-document transactions ആവശ്യമില്ല.

Example: ഒരു user-ന്റെ account balance & transactions ഒരേ document-ലേ update ചെയ്യുന്നു → safe & atomic.





Distributed transactions:
----------------------------

ചില situations-ൽ, multiple documents, collections, databases, or shards-ൽ atomicity വേണം.

അതിന് MongoDB distributed transactions support ചെയ്യുന്നു.

Distributed transaction-ൽ:

പല operations-ഉം ഒരേ സമയം execute ചെയ്യാം

എല്ലാം success ആകും അല്ലെങ്കിൽ എല്ലാം rollback ആകും

സങ്ക്ഷിപ്തം:

Single-document atomicity → small/simple updates, mostly enough

Distributed transactions → multi-document/multi-collection/multi-shard updates need atomicity






Transactions API callback method-ന്റെ flow:
--------------------------------------------

Starts a transaction → Transaction ആരംഭിക്കുന്നു

Executes operations → നിങ്ങളുടെ specified operations (insert, update, delete) run ചെയ്യുന്നു

Commits or aborts → എല്ലാം സഫലമായി ആണെങ്കിൽ commit ചെയ്യുന്നു, error ഉണ്ടെങ്കിൽ transaction end/rollback ആക്കുന്നു

സങ്ക്ഷിപ്തം:

Callback API → transaction ആരംഭിച്ചു, operations run ചെയ്ത്, success ആയാൽ commit, failure ആണെങ്കിൽ rollback.




MongoDB-ൽ transaction നടത്തുന്നപ്പോൾ, server-ൽ ഒരു error ഉണ്ടാകുമ്പോൾ (ഉദാ: DuplicateKeyError),

Transaction automatically end ആകും.

Client abortTransaction() call ചെയ്തില്ലെങ്കിലും, transaction അവസാനിക്കും.

User-ന് error message കാണിക്കും.

നിനക്ക് custom error handling ചെയ്യാൻ ആഗ്രഹമുണ്ടെങ്കിൽ,

Callback API അല്ല,

Core API ഉപയോഗിക്കണം, അതിലൂടെ നിങ്ങൾക്ക് error catch ചെയ്ത് custom action എടുക്കാൻ സാധിക്കും.

സങ്ക്ഷിപ്തം:

Error ഉണ്ടാകുമ്പോൾ MongoDB transaction auto-end ആക്കുന്നു; custom behavior വേണ്ടെങ്കിൽ Core API ഉപയോഗിക്കുക.