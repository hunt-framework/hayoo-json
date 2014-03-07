[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "osx-ar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData.OSXAr is a module for parsing an OS X static archive\n into a list of its member files and its symbol table.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.OSXAr",
          "name": "OSXAr",
          "package": "osx-ar",
          "source": "src/Data-OSXAr.html",
          "type": "module"
        },
        "index": {
          "description": "Data.OSXAr is module for parsing an OS static archive into list of its member files and its symbol table",
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "OSXAr",
          "package": "osx-ar",
          "partial": "OSXAr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OSXAr",
          "name": "ArchiveEntry",
          "package": "osx-ar",
          "source": "src/Data-OSXAr.html#ArchiveEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "ArchiveEntry",
          "package": "osx-ar",
          "partial": "Archive Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#t:ArchiveEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OSXAr",
          "name": "ArchiveEntry",
          "package": "osx-ar",
          "signature": "ArchiveEntry",
          "source": "src/Data-OSXAr.html#ArchiveEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "ArchiveEntry",
          "package": "osx-ar",
          "partial": "Archive Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#v:ArchiveEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile bytes.\n\u003c/p\u003e",
          "module": "Data.OSXAr",
          "name": "filedata",
          "package": "osx-ar",
          "signature": "ByteString",
          "source": "src/Data-OSXAr.html#ArchiveEntry",
          "type": "function"
        },
        "index": {
          "description": "File bytes",
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "filedata",
          "package": "osx-ar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#v:filedata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile name.\n\u003c/p\u003e",
          "module": "Data.OSXAr",
          "name": "filename",
          "package": "osx-ar",
          "signature": "String",
          "source": "src/Data-OSXAr.html#ArchiveEntry",
          "type": "function"
        },
        "index": {
          "description": "File name",
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "filename",
          "package": "osx-ar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#v:filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile size.\n\u003c/p\u003e",
          "module": "Data.OSXAr",
          "name": "filesize",
          "package": "osx-ar",
          "signature": "Int",
          "source": "src/Data-OSXAr.html#ArchiveEntry",
          "type": "function"
        },
        "index": {
          "description": "File size",
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "filesize",
          "package": "osx-ar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#v:filesize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an OS X archive into a set of contained objects and a lookup table\n for fast lookup of which member file contains a symbol.\n\u003c/p\u003e",
          "module": "Data.OSXAr",
          "name": "parseOSXAr",
          "package": "osx-ar",
          "signature": "ByteString -\u003e (Map Int ArchiveEntry, Maybe (Map String Int))",
          "source": "src/Data-OSXAr.html#parseOSXAr",
          "type": "function"
        },
        "index": {
          "description": "Parse an OS archive into set of contained objects and lookup table for fast lookup of which member file contains symbol",
          "hierarchy": "Data OSXAr",
          "module": "Data.OSXAr",
          "name": "parseOSXAr",
          "normalized": "ByteString-\u003e(Map Int ArchiveEntry,Maybe(Map String Int))",
          "package": "osx-ar",
          "partial": "OSXAr",
          "signature": "ByteString-\u003e(Map Int ArchiveEntry,Maybe(Map String Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/osx-ar/docs/Data-OSXAr.html#v:parseOSXAr"
      }
    }
  ]
]