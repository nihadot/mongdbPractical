What:
-----
GridFS is MongoDB’s file-storage system that stores large files by splitting them into chunks and saving them inside the database.

Why:
-----
Store files > BSON document limit (16MB).

Keep metadata together with file data.

Backups, replication, sharding work uniformly with file data.

When:
------
When you need to store large blobs (videos, images, PDFs, backups) inside MongoDB or want DB-managed file storage with metadata.

Where:
-------
Inside your MongoDB database — GridFS creates two collections per bucket: <bucket>.files and <bucket>.chunks.















“Blogs” means large binary objects.
----------------------------------
    Short form: BLOBs
    Stands for: Binary Large Objects

    Examples:

    Videos

    Images

    Audio files

    PDFs

    ZIP files

    Backups

    One-line:
    BLOB = any large binary file stored in a database.





Where are GridFS files stored?
--------------------------------
Inside your MongoDB database, but split across 2 collections:
    1) <bucket>.files
    --------------------
    Stores file metadata
    (only information about the file)
    Example fields:


    filename


    length


    uploadDate


    contentType


    chunkSize


    _id (file id)


    Example doc:
    {
    _id: ObjectId("abc123"),
    filename: "video.mp4",
    length: 20971520,
    chunkSize: 261120,
    uploadDate: ISODate(...),
    md5: "...."
    }


    2) <bucket>.chunks
    --------------------
    Stores actual binary data, split into chunks.
    Each chunk doc:


    files_id → reference to file


    n → chunk number


    data → binary chunk


    Example doc:
    {
    files_id: ObjectId("abc123"),
    n: 0,
    data: <Binary chunk>
    }


    Example: bucket name = "fs"
    Then GridFS creates:


    fs.files


    fs.chunks


    This is default.

    Example: bucket name = "myFiles"
    Then GridFS creates:


    myFiles.files


    myFiles.chunks



    One-line summary
    GridFS stores:


    file info in <bucket>.files


    file data in <bucket>.chunks


    That’s all.





mongofiles 
-------------
MongoDB’s command-line tool used to upload, download, and delete files in GridFS.




mongofiles =
-------------
Tool to PUT, GET, and DELETE files inside MongoDB’s GridFS.

Example commands
Upload a file
--------------
mongofiles --db myDB put video.mp4

Download a file
------------------
mongofiles --db myDB get video.mp4

Delete a file
---------------
mongofiles --db myDB delete video.mp4













How (core concepts & commands)

Terminology

Bucket — logical grouping of files (default bucket name: fs).

<bucket>.files — metadata for each file (filename, length, uploadDate, md5, _id).

<bucket>.chunks — binary chunks for files; each chunk document has files_id and n (sequence).

chunkSizeBytes — bytes per chunk (default 255 KiB).

files_id — reference from chunk to file doc.

uploadStream / downloadStream — driver APIs for streaming.

Inspect files (shell):

db.fs.files.find().pretty()
db.fs.chunks.find({ files_id: ObjectId("...") }).sort({ n: 1 })


Using the mongofiles tool (CLI)

mongofiles --db myDB put ./large-video.mp4        # upload
mongofiles --db myDB get large-video.mp4          # download
mongofiles --db myDB delete large-video.mp4       # delete