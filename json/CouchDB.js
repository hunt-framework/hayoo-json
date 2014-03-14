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
        "word": "CouchDB"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient functions for parsing JSON responses.  Use these\n functions to write the \u003ccode\u003e\u003ca\u003ereadJSON\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.JSON",
          "name": "JSON",
          "package": "CouchDB",
          "source": "src/Database-CouchDB-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient functions for parsing JSON responses Use these functions to write the readJSON method of the JSON class",
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "JSON",
          "package": "CouchDB",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.JSON",
          "name": "jsonBool",
          "package": "CouchDB",
          "signature": "JSValue -\u003e Result Bool",
          "source": "src/Database-CouchDB-JSON.html#jsonBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonBool",
          "normalized": "JSValue-\u003eResult Bool",
          "package": "CouchDB",
          "partial": "Bool",
          "signature": "JSValue-\u003eResult Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a field as a value of type \u003ccode\u003ea\u003c/code\u003e.  If the field does not\n exist or cannot be parsed as type \u003ccode\u003ea\u003c/code\u003e, fail.\n\u003c/p\u003e",
          "module": "Database.CouchDB.JSON",
          "name": "jsonField",
          "package": "CouchDB",
          "signature": "String -\u003e [(String, JSValue)] -\u003e Result a",
          "source": "src/Database-CouchDB-JSON.html#jsonField",
          "type": "function"
        },
        "index": {
          "description": "Extract field as value of type If the field does not exist or cannot be parsed as type fail",
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonField",
          "normalized": "String-\u003e[(String,JSValue)]-\u003eResult a",
          "package": "CouchDB",
          "partial": "Field",
          "signature": "String-\u003e[(String,JSValue)]-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.JSON",
          "name": "jsonInt",
          "package": "CouchDB",
          "signature": "JSValue -\u003e Result n",
          "source": "src/Database-CouchDB-JSON.html#jsonInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonInt",
          "normalized": "JSValue-\u003eResult a",
          "package": "CouchDB",
          "partial": "Int",
          "signature": "JSValue-\u003eResult n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when the field is defined and is true.  Otherwise, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.JSON",
          "name": "jsonIsTrue",
          "package": "CouchDB",
          "signature": "String -\u003e [(String, JSValue)] -\u003e Result Bool",
          "source": "src/Database-CouchDB-JSON.html#jsonIsTrue",
          "type": "function"
        },
        "index": {
          "description": "True when the field is defined and is true Otherwise False",
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonIsTrue",
          "normalized": "String-\u003e[(String,JSValue)]-\u003eResult Bool",
          "package": "CouchDB",
          "partial": "Is True",
          "signature": "String-\u003e[(String,JSValue)]-\u003eResult Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonIsTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.JSON",
          "name": "jsonObject",
          "package": "CouchDB",
          "signature": "JSValue -\u003e Result [(String, JSValue)]",
          "source": "src/Database-CouchDB-JSON.html#jsonObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonObject",
          "normalized": "JSValue-\u003eResult[(String,JSValue)]",
          "package": "CouchDB",
          "partial": "Object",
          "signature": "JSValue-\u003eResult[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.JSON",
          "name": "jsonString",
          "package": "CouchDB",
          "signature": "JSValue -\u003e Result String",
          "source": "src/Database-CouchDB-JSON.html#jsonString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB JSON",
          "module": "Database.CouchDB.JSON",
          "name": "jsonString",
          "normalized": "JSValue-\u003eResult String",
          "package": "CouchDB",
          "partial": "String",
          "signature": "JSValue-\u003eResult String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to CouchDB.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB",
          "name": "CouchDB",
          "package": "CouchDB",
          "source": "src/Database-CouchDB.html",
          "type": "module"
        },
        "index": {
          "description": "Interface to CouchDB",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "CouchDB",
          "package": "CouchDB",
          "partial": "Couch DB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a connection to a CouchDB database.  This type is\n encapsulated by \u003ccode\u003e\u003ca\u003eCouchMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "CouchConn",
          "package": "CouchDB",
          "source": "src/Database-CouchDB-HTTP.html#CouchConn",
          "type": "data"
        },
        "index": {
          "description": "Describes connection to CouchDB database This type is encapsulated by CouchMonad",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "CouchConn",
          "package": "CouchDB",
          "partial": "Couch Conn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA computation that interacts with a CouchDB database.  This monad\n encapsulates the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, a persistent HTTP connnection  to a\n CouchDB database and enough information to re-open the connection\n if it is closed.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "CouchMonad",
          "package": "CouchDB",
          "source": "src/Database-CouchDB-HTTP.html#CouchMonad",
          "type": "data"
        },
        "index": {
          "description": "computation that interacts with CouchDB database This monad encapsulates the IO monad persistent HTTP connnection to CouchDB database and enough information to re-open the connection if it is closed",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "CouchMonad",
          "package": "CouchDB",
          "partial": "Couch Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "CouchView",
          "package": "CouchDB",
          "source": "src/Database-CouchDB-Unsafe.html#CouchView",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "CouchView",
          "package": "CouchDB",
          "partial": "Couch View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase name\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "DB",
          "package": "CouchDB",
          "source": "src/Database-CouchDB.html#DB",
          "type": "data"
        },
        "index": {
          "description": "Database name",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "DB",
          "package": "CouchDB",
          "partial": "DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:DB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument name\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "Doc",
          "package": "CouchDB",
          "source": "src/Database-CouchDB.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "Document name",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "Doc",
          "package": "CouchDB",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument revision number.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "Rev",
          "package": "CouchDB",
          "source": "src/Database-CouchDB.html#Rev",
          "type": "data"
        },
        "index": {
          "description": "Document revision number",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "Rev",
          "package": "CouchDB",
          "partial": "Rev",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "ViewMap",
          "package": "CouchDB",
          "signature": "ViewMap String String",
          "source": "src/Database-CouchDB-Unsafe.html#CouchView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "ViewMap",
          "package": "CouchDB",
          "partial": "View Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:ViewMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "ViewMapReduce",
          "package": "CouchDB",
          "signature": "ViewMapReduce String String String",
          "source": "src/Database-CouchDB-Unsafe.html#CouchView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "ViewMapReduce",
          "package": "CouchDB",
          "partial": "View Map Reduce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:ViewMapReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "bulkUpdateDocs",
          "package": "CouchDB",
          "signature": "DB-\u003e [a]-\u003e CouchMonad (Maybe [Either String (Doc, Rev)])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "bulkUpdateDocs",
          "normalized": "DB-\u003e[a]-\u003eCouchMonad(Maybe[Either String(Doc,Rev)])",
          "package": "CouchDB",
          "partial": "Update Docs",
          "signature": "DB-\u003e[a]-\u003eCouchMonad(Maybe[Either String(Doc,Rev)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:bulkUpdateDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses an open CouchDB connection\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "closeCouchConn",
          "package": "CouchDB",
          "signature": "CouchConn -\u003e IO ()",
          "source": "src/Database-CouchDB-HTTP.html#closeCouchConn",
          "type": "function"
        },
        "index": {
          "description": "Closes an open CouchDB connection",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "closeCouchConn",
          "normalized": "CouchConn-\u003eIO()",
          "package": "CouchDB",
          "partial": "Couch Conn",
          "signature": "CouchConn-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:closeCouchConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a CouchDB connection for use with runCouchDBWith.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "createCouchConn",
          "package": "CouchDB",
          "signature": "String-\u003e Int-\u003e IO CouchConn",
          "type": "function"
        },
        "index": {
          "description": "Create CouchDB connection for use with runCouchDBWith",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "createCouchConn",
          "normalized": "String-\u003eInt-\u003eIO CouchConn",
          "package": "CouchDB",
          "partial": "Couch Conn",
          "signature": "String-\u003eInt-\u003eIO CouchConn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createCouchConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a CouchDB from an URI connection for use with runCouchDBWith.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "createCouchConnFromURI",
          "package": "CouchDB",
          "signature": "URI-\u003e IO CouchConn",
          "type": "function"
        },
        "index": {
          "description": "Create CouchDB from an URI connection for use with runCouchDBWith",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "createCouchConnFromURI",
          "normalized": "URI-\u003eIO CouchConn",
          "package": "CouchDB",
          "partial": "Couch Conn From URI",
          "signature": "URI-\u003eIO CouchConn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createCouchConnFromURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new database.  Throws an exception if the database already\n exists. \n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "createDB",
          "package": "CouchDB",
          "signature": "String -\u003e CouchMonad ()",
          "source": "src/Database-CouchDB.html#createDB",
          "type": "function"
        },
        "index": {
          "description": "Creates new database Throws an exception if the database already exists",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "createDB",
          "normalized": "String-\u003eCouchMonad()",
          "package": "CouchDB",
          "partial": "DB",
          "signature": "String-\u003eCouchMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a safe database name.  Signals an error if the name is\n invalid.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "db",
          "package": "CouchDB",
          "signature": "String -\u003e DB",
          "source": "src/Database-CouchDB.html#db",
          "type": "function"
        },
        "index": {
          "description": "Returns safe database name Signals an error if the name is invalid",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "db",
          "normalized": "String-\u003eDB",
          "package": "CouchDB",
          "signature": "String-\u003eDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "deleteDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e (Doc, Rev)-\u003e CouchMonad Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "deleteDoc",
          "normalized": "DB-\u003e(Doc,Rev)-\u003eCouchMonad Bool",
          "package": "CouchDB",
          "partial": "Doc",
          "signature": "DB-\u003e(Doc,Rev)-\u003eCouchMonad Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:deleteDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a safe document name.  Signals an error if the name is\n invalid.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "doc",
          "package": "CouchDB",
          "signature": "String -\u003e Doc",
          "source": "src/Database-CouchDB.html#doc",
          "type": "function"
        },
        "index": {
          "description": "Returns safe document name Signals an error if the name is invalid",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "doc",
          "normalized": "String-\u003eDoc",
          "package": "CouchDB",
          "signature": "String-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "dropDB",
          "package": "CouchDB",
          "signature": "String-\u003e CouchMonad Bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "dropDB",
          "normalized": "String-\u003eCouchMonad Bool",
          "package": "CouchDB",
          "partial": "DB",
          "signature": "String-\u003eCouchMonad Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:dropDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a doc by document identifier (revision number not needed).  This\n operation first retreives the document to get its revision number.  It fails\n if the document doesn't exist or there is a conflict.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "forceDeleteDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e CouchMonad Bool",
          "type": "function"
        },
        "index": {
          "description": "Delete doc by document identifier revision number not needed This operation first retreives the document to get its revision number It fails if the document doesn exist or there is conflict",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "forceDeleteDoc",
          "normalized": "DB-\u003eDoc-\u003eCouchMonad Bool",
          "package": "CouchDB",
          "partial": "Delete Doc",
          "signature": "DB-\u003eDoc-\u003eCouchMonad Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:forceDeleteDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getAllDBs",
          "package": "CouchDB",
          "signature": "CouchMonad [DB]",
          "source": "src/Database-CouchDB.html#getAllDBs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getAllDBs",
          "normalized": "CouchMonad[DB]",
          "package": "CouchDB",
          "partial": "All DBs",
          "signature": "CouchMonad[DB]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getAllDocIds",
          "package": "CouchDB",
          "signature": "DB-\u003e CouchMonad [Doc]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getAllDocIds",
          "normalized": "DB-\u003eCouchMonad[Doc]",
          "package": "CouchDB",
          "partial": "All Doc Ids",
          "signature": "DB-\u003eCouchMonad[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDocIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getAllDocs",
          "package": "CouchDB",
          "signature": "DB-\u003e [(String, JSValue)]-\u003e CouchMonad [(Doc, a)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getAllDocs",
          "normalized": "DB-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
          "package": "CouchDB",
          "partial": "All Docs",
          "signature": "DB-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getAndUpdateDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e (a -\u003e IO a)-\u003e CouchMonad (Maybe Rev)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getAndUpdateDoc",
          "normalized": "DB-\u003eDoc-\u003e(a-\u003eIO a)-\u003eCouchMonad(Maybe Rev)",
          "package": "CouchDB",
          "partial": "And Update Doc",
          "signature": "DB-\u003eDoc-\u003e(a-\u003eIO a)-\u003eCouchMonad(Maybe Rev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAndUpdateDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e CouchMonad (Maybe (Doc, Rev, a))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getDoc",
          "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,a))",
          "package": "CouchDB",
          "partial": "Doc",
          "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a document as a raw JSON value.  Returns the document id,\n revision and value as a \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e.  These fields are queried lazily,\n and may fail later if the response from the server is malformed.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "getDocPrim",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e CouchMonad (Maybe (Doc, Rev, [(String, JSValue)]))",
          "type": "function"
        },
        "index": {
          "description": "Gets document as raw JSON value Returns the document id revision and value as JSObject These fields are queried lazily and may fail later if the response from the server is malformed",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getDocPrim",
          "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,[(String,JSValue)]))",
          "package": "CouchDB",
          "partial": "Doc Prim",
          "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,[(String,JSValue)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDocPrim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "getDocRaw",
          "package": "CouchDB",
          "signature": "DB -\u003e Doc -\u003e CouchMonad (Maybe String)",
          "source": "src/Database-CouchDB.html#getDocRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "getDocRaw",
          "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe String)",
          "package": "CouchDB",
          "partial": "Doc Raw",
          "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDocRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "isDBString",
          "package": "CouchDB",
          "signature": "String -\u003e Bool",
          "source": "src/Database-CouchDB.html#isDBString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "isDBString",
          "normalized": "String-\u003eBool",
          "package": "CouchDB",
          "partial": "DBString",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:isDBString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "isDocString",
          "package": "CouchDB",
          "signature": "String -\u003e Bool",
          "source": "src/Database-CouchDB.html#isDocString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "isDocString",
          "normalized": "String-\u003eBool",
          "package": "CouchDB",
          "partial": "Doc String",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:isDocString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "newDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e a-\u003e CouchMonad (Doc, Rev)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "newDoc",
          "normalized": "DB-\u003ea-\u003eCouchMonad(Doc,Rev)",
          "package": "CouchDB",
          "partial": "Doc",
          "signature": "DB-\u003ea-\u003eCouchMonad(Doc,Rev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "newNamedDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e a-\u003e CouchMonad (Either String Rev)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "newNamedDoc",
          "normalized": "DB-\u003eDoc-\u003ea-\u003eCouchMonad(Either String Rev)",
          "package": "CouchDB",
          "partial": "Named Doc",
          "signature": "DB-\u003eDoc-\u003ea-\u003eCouchMonad(Either String Rev)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newNamedDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "newView",
          "package": "CouchDB",
          "signature": "String-\u003e String-\u003e [CouchView]-\u003e CouchMonad ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "newView",
          "normalized": "String-\u003eString-\u003e[CouchView]-\u003eCouchMonad()",
          "package": "CouchDB",
          "partial": "View",
          "signature": "String-\u003eString-\u003e[CouchView]-\u003eCouchMonad()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "queryView",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e Doc-\u003e [(String, JSValue)]-\u003e CouchMonad [(Doc, a)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "queryView",
          "normalized": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
          "package": "CouchDB",
          "partial": "View",
          "signature": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:queryView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryView\u003c/a\u003e\u003c/code\u003e, but only returns the keys.  Use this for key-only\n views where the value is completely ignored.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "queryViewKeys",
          "package": "CouchDB",
          "signature": "DB-\u003e Doc-\u003e Doc-\u003e [(String, JSValue)]-\u003e CouchMonad [Doc]",
          "type": "function"
        },
        "index": {
          "description": "Like queryView but only returns the keys Use this for key-only views where the value is completely ignored",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "queryViewKeys",
          "normalized": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[Doc]",
          "package": "CouchDB",
          "partial": "View Keys",
          "signature": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[Doc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:queryViewKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a Rev\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "rev",
          "package": "CouchDB",
          "signature": "String -\u003e Rev",
          "source": "src/Database-CouchDB.html#rev",
          "type": "function"
        },
        "index": {
          "description": "Returns Rev",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "rev",
          "normalized": "String-\u003eRev",
          "package": "CouchDB",
          "signature": "String-\u003eRev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "runCouchDB",
          "package": "CouchDB",
          "signature": "String-\u003e Int-\u003e CouchMonad a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "runCouchDB",
          "normalized": "String-\u003eInt-\u003eCouchMonad a-\u003eIO a",
          "package": "CouchDB",
          "partial": "Couch DB",
          "signature": "String-\u003eInt-\u003eCouchMonad a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnects to the CouchDB server at localhost:5984.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "runCouchDB'",
          "package": "CouchDB",
          "signature": "CouchMonad a -\u003e IO a",
          "source": "src/Database-CouchDB-HTTP.html#runCouchDB%27",
          "type": "function"
        },
        "index": {
          "description": "Connects to the CouchDB server at localhost",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "runCouchDB'",
          "normalized": "CouchMonad a-\u003eIO a",
          "package": "CouchDB",
          "partial": "Couch DB'",
          "signature": "CouchMonad a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDB-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "runCouchDBURI",
          "package": "CouchDB",
          "signature": "URI-\u003e CouchMonad a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "runCouchDBURI",
          "normalized": "URI-\u003eCouchMonad a-\u003eIO a",
          "package": "CouchDB",
          "partial": "Couch DBURI",
          "signature": "URI-\u003eCouchMonad a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDBURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a CouchDB computation with an existing CouchDB connection.\n\u003c/p\u003e",
          "module": "Database.CouchDB",
          "name": "runCouchDBWith",
          "package": "CouchDB",
          "signature": "CouchConn -\u003e CouchMonad a -\u003e IO a",
          "source": "src/Database-CouchDB-HTTP.html#runCouchDBWith",
          "type": "function"
        },
        "index": {
          "description": "Run CouchDB computation with an existing CouchDB connection",
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "runCouchDBWith",
          "normalized": "CouchConn-\u003eCouchMonad a-\u003eIO a",
          "package": "CouchDB",
          "partial": "Couch DBWith",
          "signature": "CouchConn-\u003eCouchMonad a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDBWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB",
          "name": "updateDoc",
          "package": "CouchDB",
          "signature": "DB-\u003e (Doc, Rev)-\u003e a-\u003e CouchMonad (Maybe (Doc, Rev))",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database CouchDB",
          "module": "Database.CouchDB",
          "name": "updateDoc",
          "normalized": "DB-\u003e(Doc,Rev)-\u003ea-\u003eCouchMonad(Maybe(Doc,Rev))",
          "package": "CouchDB",
          "partial": "Doc",
          "signature": "DB-\u003e(Doc,Rev)-\u003ea-\u003eCouchMonad(Maybe(Doc,Rev))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:updateDoc"
      }
    }
  ]
]