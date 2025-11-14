How to Create an Index in MongoDB
---------------------------------
db.users.createIndex({ username: 1 });


How to Drop an Index in MongoDB 
-------------------------------
db.collection.dropIndex("indexName")

How to Drop All Indexes in MongoDB (inside a collection )
----------------------------------

db.collection.dropIndexes()


How to View all Indexes in MongoDB
----------------------------------
db.collection.getIndexes()


Types of Index 
--------------
    1.Single field Index
    ---------------------
    db.collection.createIndex({ fieldName: 1 })

    2.Compound Index
    ----------------
    db.collection.createIndex({ name: 1, age: 1 })

    3.Multikey Index
    ----------------
    db.collection.createIndex({ tags: 1 })

    4.Geospatial Index
    ------------------
    Geospatial index = location data (coordinates) തിരയാൻ ഉള്ള index.
    Maps, nearby search, distance search എന്നിവയ്ക്ക് ഉപയോഗിക്കുന്നു.
    
    db.collection.createIndex({ location: "2dsphere" })

    5.Text Index
    ------------
    Text index = ഒരു ഫീൽഡിലെ മുഴുവൻ വാചകവും വാക്കുകളായി തകർത്തു (tokenize) ഓരോ വാക്കിനും തിരയാനുള്ള പ്രത്യേക കുറിപ്പു (index entry) ഉണ്ടാക്കുന്ന സംവിധാനം.

    കൂടുതൽ വ്യക്തമായ മലയാളം വിശദീകരണം:

    ഒരു posts കലക്ഷനിൽ title ഉം content ഉം text ആണ് എന്ന് ധരിക്കൂ.

    Text index ഉണ്ടാക്കിയാൽ MongoDB ഇങ്ങനെ ചെയ്യും:

    ഓരോ വാചകവും ചെറുതായ വാക്കുകളായി വിഭജിക്കും

    “travel”, “best”, “review”, “food” പോലെയുള്ള ഓരോ വാക്കിനും ഓരോ shortcut സൃഷ്ടിക്കും

    ആരെങ്കിലും search box-യിൽ ഒരു വാക്കോ ഒരു പദപ്രയോഗമോ കൊടുത്താൽ
    MongoDB ആ shortcut വഴി നേരിട്ട് ഒട്ടും വൈകാതെ matching posts കണ്ടെത്തും

    ഇത് Google search feel പോലെയാണ്, പക്ഷെ MongoDB database-നുള്ളിൽ.

    Shell code:

    Index സൃഷ്ടിക്കാൻ:
    db.posts.createIndex({ title: "text", content: "text" })

    Search ചെയ്യാൻ:
    db.posts.find({ $text: { $search: "travel food" } })


    6.Hash Index
    ------------
    Hash index = ഒരു ഫീൽഡിന്റെ മൂല്യം (value) hashing algorithm ഉപയോഗിച്ച് hash value ആയി മാറ്റി സൂക്ഷിക്കുന്ന index.
    ഇത് exact match തിരച്ചിലുകൾ വളരെ വേഗം ചെയ്യാൻ MongoDB ഉപയോഗിക്കുന്ന ഒരു index ടൈപ്പാണ്.

    MongoDB ആ ഫീൽഡിന്റെ original value നേരിട്ട് index-ൽ വെക്കില്ല.
    Instead, അതിന് ഒരു unique hash number ഉണ്ടാക്കി index-ൽ save ചെയ്യും.

    എന്തിന് hash index?

    hash index range search ചെയ്യില്ല

    hash index text search ചെയ്യില്ല

    hash index sorting-ഉം support ചെയ്യില്ല

    ഇത് ഒറ്റയ്ക്ക് ഒരു exact match വേണ്ടപ്പോൾ മാത്രമേ best ആയുള്ളു.

    Scenario (Malayalam)

    നിനക്ക് ഒരു users കലക്ഷൻ ഉണ്ടെന്ന് കരുതൂ:

    { _id: 1, username: "nihad" }
    { _id: 2, username: "rahul" }
    { _id: 3, username: "amal" }


    നീ search ചെയ്യുന്ന ഇപ്രകാരമുള്ള queries:

    username = "nihad"

    username = "rahul"

    Range search (a to z) വേണ്ട.
    Sorting വേണ്ട.
    Just exact match മതിയെന്ന്.

    ഇവിടെ hash index super fast ആയിരിക്കും.

    MongoDB ഓരോ username-നും hash value ഉണ്ടാക്കി index-ൽ വെക്കും.
    ഇപ്പോൾ search ചെയ്യുമ്പോൾ value hash ചെയ്ത് direct match ചെയ്യും → അതുകൊണ്ട് speed huge increase.


    Hash Index സൃഷ്ടിക്കാൻ
    db.users.createIndex({ username: "hashed" })


    7.Wildcard Index
    ----------------
    Wildcard index = ഒരു കലക്ഷനിലെ പല ഫീൽഡുകളും, ഡൈനാമിയായി, ഫീൽഡ് നാമം അറിയാതെ തന്നെ ഇൻഡെക്സ് ചെയ്യാനുള്ള index.

    ഒരു കലക്ഷനിലെ എല്ലാ ഫീൽഡുകളും (അല്ലെങ്കിൽ നിശ്ചിത പാതകൾ) ഡൈനാമിക്കായി ഇൻഡെക്റ്റ് ചെയ്യുന്ന സംവിധാനം. ഫീൽഡ് നാമം അറിയാത്തപ്പോൾ, അല്ലെങ്കിൽ ഡോക്ക്യൂമെന്റുകളിൽ വ്യത്യസ്ത ഫീൽഡുകൾ വരുമ്പോൾ ഉപകാരപ്പെടും.

    എന്തിന് ഉപയോഗിക്കുന്നു:

    ഡാറ്റാ സ്‌കീമ വേരിയബിൾ ആണ് (വിവിധ ഡോകുകളില് വ്യത്യസ്ത ഫീൽഡുകൾ)

    നിങ്ങൾക്ക് ഏതൊരു ഫീൽഡിലും നിന്ന് ഫിൽട്ടർ ചെയ്യേണ്ടി വരുന്ന സ്കenarioകൾ

    ഫലങ്ങൾ (വഴക്കങ്ങൾ):

    എളുപ്പത്തിൽ dynamic field queries ഫാസ്റ്റ് ആക്കാം.

    സ്റ്റോറേജും ഇൻഡെക്സ് നിർമ്മാണ സമയവും കൂടുതലാവും — ശ്രദ്ധിക്കുക.

    മൂല്യങ്ങൾ നിഷ്‌ചിത രൂപത്തിൽ only equality/range queries സാധ്യമാകാം (സാധാരണ query support).

    സാധാരണ കമാൻഡുകൾ

    സകല ഫീൽഡുകളും ഇൻഡെക്റ്റ് ചെയ്യാൻ:

    db.collection.createIndex({ "$**": 1 })


    വ്യക്തമായ ചില പാതകൾ മാത്രം ഉൾപ്പെടുത്താൻ (projection ഉപയോഗിച്ച്):

    db.collection.createIndex(
    { "$**": 1 },
    { wildcardProjection: { "largeField": 0, "logs": 0 } }
    )


    ഉദാഹരണ സന്നിധി (Malayalam):
    profiles കലക്ഷനിൽ ഓരോ യൂസറിനും വ്യത്യസ്ത മെറ്റാഡാറ്റയും contact fields ഉം ഉണ്ടാകും:

    { name: "A", contact: { email: "a@x", phone: "123" }, prefs: {...} }
    { name: "B", social: { twitter: "@b" }, metadata: { os: "android" } }


    നിനക്ക് unknown path (e.g., contact.email അല്ലെങ്കിൽ metadata.os) ല് search ചെയ്യണം:
    db.profiles.find({ "contact.email": "a@x" }) — wildcard index ഉണ്ടെങ്കിൽ ഇത് ഫാസ്റ്റ് ആയിരിക്കും.

    ശ്രദ്ധിക്കേണ്ടത്:

    സ്റ്റോറേജ് ചെലവ് കൂടും; അനാവശ്യ ഫീൽഡുകൾ exclude ചെയ്യാൻ wildcardProjection ഉപയോഗിക്കുക.

    എല്ലാ use-cases-ക്കും വേണ്ടത് അല്ല — സ്ഥിരമായ known fields ഉണ്ടെങ്കിൽ single/compound indexes മെച്ചം.
