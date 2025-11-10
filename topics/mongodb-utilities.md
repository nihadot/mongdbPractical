
mongo  (mongosh)
-------
mongosh --host localhost --port 27017


mongodump 
---------
    Backup the entire database
    ---------------------------
        mongodump --db <databaseName> --out <backupDirectory>
        mongodump --db test --out /home/nihad/mongo_backup

    Backup a single collection
    --------------------------
        mongodump --db <databaseName> --collection <collectionName> --out <backupDirectory>
        mongodump --db test --collection users --out /home/nihad/mongo_backup

    Backup with authentication
    -------------------------
        mongodump --uri "mongodb://username:password@localhost:27017/<databaseName>" --out <backupDirectory>
        mongodump --uri "mongodb://admin:secret123@localhost:27017/test" --out /home/nihad/mongo_backup

mongorestore
------------
    Restore the entire database
    ---------------------------
        mongorestore --db <databaseName> <backupDirectory>/<databaseName>
        mongorestore --db test /home/nihad/mongo_backup/test
    
    Restore a single collection
    --------------------------
        mongorestore --db <databaseName> --collection <collectionName> <backupDirectory>/<databaseName>/<collectionName>.bson
        mongorestore --db test --collection users /home/nihad/mongo_backup/test/users.bson

    Restore with authentication
    -------------------------
        mongorestore --uri "mongodb://username:password@localhost:27017/<databaseName>" <backupDirectory>/<databaseName>
        mongorestore --uri "mongodb://admin:secret123@localhost:27017/test" /home/nihad/mongo_backup/test

mongoexport
-----------
    Export as JSON
    -------------
        mongoexport --db <database> --collection <collection> --out <filePath> --jsonArray
        mongoexport --db test --collection users --out /home/nihad/users.json --jsonArray
    
    Export as CSV
    -------------
        mongoexport --db <database> --collection <collection> --type=csv --fields name,age,email --out <filePath>
        mongoexport --db test --collection users --type=csv --fields name,age,email --out /home/nihad/users.csv

mongoimport
-----------
    Import JSON
    -----------
        mongoimport --db <database> --collection <collection> --file <filePath> --jsonArray
        mongoimport --db test --collection users --file /home/nihad/users.json --jsonArray
    
    Import CSV
    ----------
        mongoimport --db <database> --collection <collection> --type=csv --headerline --file <filePath>
        mongoimport --db test --collection users --type=csv --headerline --file /home/nihad/users.csv

mongostat
---------
    Basic usage:
    ------------
        mongostat --host localhost --port 27017

mongotop
--------
    Basic usage:
    ------------
        mongotop --host localhost --port 27017
