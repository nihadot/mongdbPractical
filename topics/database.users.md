Resource document
-----------------
MongoDB-ൽ privilege (അനുമതി) ഒന്നുകിൽ database-ൽ, collection-ൽ, അല്ലെങ്കിൽ cluster-ൽ action ചെയ്യാൻ അനുവദിക്കുന്നതാണ്.

Resource document എന്ന് പറയുന്നത്: ഈ privilege എവിടെ പ്രയോഗിക്കാം എന്ന് സൂചിപ്പിക്കുന്ന ഒരു പത്രം (document) ആണെന്ന്.

ഉദാഹരണം:

privilege: read

resource document: { db: "testDB", collection: "users" }

ഇത് പറയുന്നത്: “users” collection-ൽ മാത്രം read ചെയ്യാൻ അനുമതി ഉണ്ട്.



A resource document is a MongoDB document that defines the database objects (like databases, collections, or clusters) on which certain privileges or actions are allowed.

In short: it specifies “where” a privilege can be applied.



Database and/or Collection Resource
-----------------------------------
{ db: "products", collection: "inventory" }


Specify a Database as Resource
------------------------------
If only the collection field is an empty string (""), the resource is the specified database, excluding the system collections. For example, the following resource document specifies the resource of the test database, excluding the system collections:


{ db: "test", collection: "" }


System Collections
------------------

MongoDB stores system information in collections that use the <database>.system.* namespace, which MongoDB reserves for internal use. Do not create collections that begin with system.



Specify All Non-System Collections in All Databases
-------------------------------------------------
{ db: "", collection: "" }




Cluster Resource
-------------------
Syntax:

{ cluster: true }


ഇതാണ് cluster-നെ resource ആക്കി privileges നൽകുന്നത്.

ഇത് system state-നെ affect ചെയ്യുന്ന actions-ക്കാണ് ഉപയോഗിക്കുന്നത്, specific database/collection-ൽ അല്ല.

Examples of actions: shutdown, replSetReconfig, addShard

Example:

{ resource: { cluster: true }, actions: [ "shutdown" ] }


അർത്ഥം: cluster-നെ shutdown ചെയ്യാൻ privilege.

Note: User-defined role-ൽ ഇത് ഉപയോഗിക്കാൻ admin database scoped role മാത്രം സാധിക്കും.






anyResource
------------

Syntax:

{ anyResource: true }


ഇത് internal resource ആണ്, system-ലെ എല്ലാ resources-ലും access നൽകുന്നു.

ഇത് സാധാരണയായി use ചെയ്യരുത്, except extraordinary/internal circumstances.

സങ്ക്ഷിപ്തം:

cluster: true → system-level actions only

anyResource: true → system-ലെ എല്ലാ resources-ൽ access (internal use മാത്രം)