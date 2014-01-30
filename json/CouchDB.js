[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient functions for parsing JSON responses.  Use these\n functions to write the \u003ccode\u003e\u003ca\u003ereadJSON\u003c/a\u003e\u003c/code\u003e method of the \u003ccode\u003e\u003ca\u003eJSON\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB-JSON.html",
        "fct-type": "module",
        "title": "JSON"
      },
      "index": {
        "description": "Convenient functions for parsing JSON responses Use these functions to write the readJSON method of the JSON class",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "JSON",
        "normalized": "",
        "package": "CouchDB",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonBool",
      "description": {
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "JSValue -\u003e Result Bool",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonBool",
        "fct-type": "function",
        "title": "jsonBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonBool",
        "normalized": "JSValue-\u003eResult Bool",
        "package": "CouchDB",
        "partial": "Bool",
        "signature": "JSValue-\u003eResult Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonField",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a field as a value of type \u003ccode\u003ea\u003c/code\u003e.  If the field does not\n exist or cannot be parsed as type \u003ccode\u003ea\u003c/code\u003e, fail.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e [(String, JSValue)] -\u003e Result a",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonField",
        "fct-type": "function",
        "title": "jsonField"
      },
      "index": {
        "description": "Extract field as value of type If the field does not exist or cannot be parsed as type fail",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonField",
        "normalized": "String-\u003e[(String,JSValue)]-\u003eResult a",
        "package": "CouchDB",
        "partial": "Field",
        "signature": "String-\u003e[(String,JSValue)]-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonInt",
      "description": {
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "JSValue -\u003e Result n",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonInt",
        "fct-type": "function",
        "title": "jsonInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonInt",
        "normalized": "JSValue-\u003eResult a",
        "package": "CouchDB",
        "partial": "Int",
        "signature": "JSValue-\u003eResult n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonIsTrue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when the field is defined and is true.  Otherwise, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e [(String, JSValue)] -\u003e Result Bool",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonIsTrue",
        "fct-type": "function",
        "title": "jsonIsTrue"
      },
      "index": {
        "description": "True when the field is defined and is true Otherwise False",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonIsTrue",
        "normalized": "String-\u003e[(String,JSValue)]-\u003eResult Bool",
        "package": "CouchDB",
        "partial": "Is True",
        "signature": "String-\u003e[(String,JSValue)]-\u003eResult Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonObject",
      "description": {
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "JSValue -\u003e Result [(String, JSValue)]",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonObject",
        "fct-type": "function",
        "title": "jsonObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonObject",
        "normalized": "JSValue-\u003eResult[(String,JSValue)]",
        "package": "CouchDB",
        "partial": "Object",
        "signature": "JSValue-\u003eResult[(String,JSValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB-JSON.html#v:jsonString",
      "description": {
        "fct-module": "Database.CouchDB.JSON",
        "fct-package": "CouchDB",
        "fct-signature": "JSValue -\u003e Result String",
        "fct-source": "src/Database-CouchDB-JSON.html#jsonString",
        "fct-type": "function",
        "title": "jsonString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB JSON",
        "module": "Database.CouchDB.JSON",
        "name": "jsonString",
        "normalized": "JSValue-\u003eResult String",
        "package": "CouchDB",
        "partial": "String",
        "signature": "JSValue-\u003eResult String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface to CouchDB.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "module",
        "fct-source": "src/Database-CouchDB.html",
        "fct-type": "module",
        "title": "CouchDB"
      },
      "index": {
        "description": "Interface to CouchDB",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "CouchDB",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Couch DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchConn",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a connection to a CouchDB database.  This type is\n encapsulated by \u003ccode\u003e\u003ca\u003eCouchMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-HTTP.html#CouchConn",
        "fct-type": "data",
        "title": "CouchConn"
      },
      "index": {
        "description": "Describes connection to CouchDB database This type is encapsulated by CouchMonad",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "CouchConn",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Couch Conn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA computation that interacts with a CouchDB database.  This monad\n encapsulates the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad, a persistent HTTP connnection  to a\n CouchDB database and enough information to re-open the connection\n if it is closed.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-HTTP.html#CouchMonad",
        "fct-type": "data",
        "title": "CouchMonad"
      },
      "index": {
        "description": "computation that interacts with CouchDB database This monad encapsulates the IO monad persistent HTTP connnection to CouchDB database and enough information to re-open the connection if it is closed",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "CouchMonad",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Couch Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:CouchView",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB-Unsafe.html#CouchView",
        "fct-type": "data",
        "title": "CouchView"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "CouchView",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Couch View",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:DB",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase name\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB.html#DB",
        "fct-type": "data",
        "title": "DB"
      },
      "index": {
        "description": "Database name",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "DB",
        "normalized": "",
        "package": "CouchDB",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eDocument name\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "Document name",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "Doc",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#t:Rev",
      "description": {
        "fct-descr": "\u003cp\u003eDocument revision number.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "data",
        "fct-source": "src/Database-CouchDB.html#Rev",
        "fct-type": "data",
        "title": "Rev"
      },
      "index": {
        "description": "Document revision number",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "Rev",
        "normalized": "",
        "package": "CouchDB",
        "partial": "Rev",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:ViewMap",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "ViewMap String String",
        "fct-source": "src/Database-CouchDB-Unsafe.html#CouchView",
        "fct-type": "function",
        "title": "ViewMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "ViewMap",
        "normalized": "",
        "package": "CouchDB",
        "partial": "View Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:ViewMapReduce",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "ViewMapReduce String String String",
        "fct-source": "src/Database-CouchDB-Unsafe.html#CouchView",
        "fct-type": "function",
        "title": "ViewMapReduce"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "ViewMapReduce",
        "normalized": "",
        "package": "CouchDB",
        "partial": "View Map Reduce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:bulkUpdateDocs",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e [a]-\u003e CouchMonad (Maybe [Either String (Doc, Rev)])",
        "fct-type": "function",
        "title": "bulkUpdateDocs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "bulkUpdateDocs",
        "normalized": "DB-\u003e[a]-\u003eCouchMonad(Maybe[Either String(Doc,Rev)])",
        "package": "CouchDB",
        "partial": "Update Docs",
        "signature": "DB-\u003e[a]-\u003eCouchMonad(Maybe[Either String(Doc,Rev)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:closeCouchConn",
      "description": {
        "fct-descr": "\u003cp\u003eCloses an open CouchDB connection\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "CouchConn -\u003e IO ()",
        "fct-source": "src/Database-CouchDB-HTTP.html#closeCouchConn",
        "fct-type": "function",
        "title": "closeCouchConn"
      },
      "index": {
        "description": "Closes an open CouchDB connection",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "closeCouchConn",
        "normalized": "CouchConn-\u003eIO()",
        "package": "CouchDB",
        "partial": "Couch Conn",
        "signature": "CouchConn-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createCouchConn",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a CouchDB connection for use with runCouchDBWith.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String-\u003e Int-\u003e IO CouchConn",
        "fct-type": "function",
        "title": "createCouchConn"
      },
      "index": {
        "description": "Create CouchDB connection for use with runCouchDBWith",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "createCouchConn",
        "normalized": "String-\u003eInt-\u003eIO CouchConn",
        "package": "CouchDB",
        "partial": "Couch Conn",
        "signature": "String-\u003eInt-\u003eIO CouchConn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createCouchConnFromURI",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a CouchDB from an URI connection for use with runCouchDBWith.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "URI-\u003e IO CouchConn",
        "fct-type": "function",
        "title": "createCouchConnFromURI"
      },
      "index": {
        "description": "Create CouchDB from an URI connection for use with runCouchDBWith",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "createCouchConnFromURI",
        "normalized": "URI-\u003eIO CouchConn",
        "package": "CouchDB",
        "partial": "Couch Conn From URI",
        "signature": "URI-\u003eIO CouchConn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:createDB",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new database.  Throws an exception if the database already\n exists. \n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e CouchMonad ()",
        "fct-source": "src/Database-CouchDB.html#createDB",
        "fct-type": "function",
        "title": "createDB"
      },
      "index": {
        "description": "Creates new database Throws an exception if the database already exists",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "createDB",
        "normalized": "String-\u003eCouchMonad()",
        "package": "CouchDB",
        "partial": "DB",
        "signature": "String-\u003eCouchMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:db",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a safe database name.  Signals an error if the name is\n invalid.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e DB",
        "fct-source": "src/Database-CouchDB.html#db",
        "fct-type": "function",
        "title": "db"
      },
      "index": {
        "description": "Returns safe database name Signals an error if the name is invalid",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "db",
        "normalized": "String-\u003eDB",
        "package": "CouchDB",
        "partial": "",
        "signature": "String-\u003eDB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:deleteDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e (Doc, Rev)-\u003e CouchMonad Bool",
        "fct-type": "function",
        "title": "deleteDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "deleteDoc",
        "normalized": "DB-\u003e(Doc,Rev)-\u003eCouchMonad Bool",
        "package": "CouchDB",
        "partial": "Doc",
        "signature": "DB-\u003e(Doc,Rev)-\u003eCouchMonad Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:doc",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a safe document name.  Signals an error if the name is\n invalid.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Database-CouchDB.html#doc",
        "fct-type": "function",
        "title": "doc"
      },
      "index": {
        "description": "Returns safe document name Signals an error if the name is invalid",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "doc",
        "normalized": "String-\u003eDoc",
        "package": "CouchDB",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:dropDB",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String-\u003e CouchMonad Bool",
        "fct-type": "function",
        "title": "dropDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "dropDB",
        "normalized": "String-\u003eCouchMonad Bool",
        "package": "CouchDB",
        "partial": "DB",
        "signature": "String-\u003eCouchMonad Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:forceDeleteDoc",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a doc by document identifier (revision number not needed).  This\n operation first retreives the document to get its revision number.  It fails\n if the document doesn't exist or there is a conflict.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e CouchMonad Bool",
        "fct-type": "function",
        "title": "forceDeleteDoc"
      },
      "index": {
        "description": "Delete doc by document identifier revision number not needed This operation first retreives the document to get its revision number It fails if the document doesn exist or there is conflict",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "forceDeleteDoc",
        "normalized": "DB-\u003eDoc-\u003eCouchMonad Bool",
        "package": "CouchDB",
        "partial": "Delete Doc",
        "signature": "DB-\u003eDoc-\u003eCouchMonad Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDBs",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "CouchMonad [DB]",
        "fct-source": "src/Database-CouchDB.html#getAllDBs",
        "fct-type": "function",
        "title": "getAllDBs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getAllDBs",
        "normalized": "CouchMonad[DB]",
        "package": "CouchDB",
        "partial": "All DBs",
        "signature": "CouchMonad[DB]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDocIds",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e CouchMonad [Doc]",
        "fct-type": "function",
        "title": "getAllDocIds"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getAllDocIds",
        "normalized": "DB-\u003eCouchMonad[Doc]",
        "package": "CouchDB",
        "partial": "All Doc Ids",
        "signature": "DB-\u003eCouchMonad[Doc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAllDocs",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e [(String, JSValue)]-\u003e CouchMonad [(Doc, a)]",
        "fct-type": "function",
        "title": "getAllDocs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getAllDocs",
        "normalized": "DB-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
        "package": "CouchDB",
        "partial": "All Docs",
        "signature": "DB-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getAndUpdateDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e (a -\u003e IO a)-\u003e CouchMonad (Maybe Rev)",
        "fct-type": "function",
        "title": "getAndUpdateDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getAndUpdateDoc",
        "normalized": "DB-\u003eDoc-\u003e(a-\u003eIO a)-\u003eCouchMonad(Maybe Rev)",
        "package": "CouchDB",
        "partial": "And Update Doc",
        "signature": "DB-\u003eDoc-\u003e(a-\u003eIO a)-\u003eCouchMonad(Maybe Rev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e CouchMonad (Maybe (Doc, Rev, a))",
        "fct-type": "function",
        "title": "getDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getDoc",
        "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,a))",
        "package": "CouchDB",
        "partial": "Doc",
        "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDocPrim",
      "description": {
        "fct-descr": "\u003cp\u003eGets a document as a raw JSON value.  Returns the document id,\n revision and value as a \u003ccode\u003e\u003ca\u003eJSObject\u003c/a\u003e\u003c/code\u003e.  These fields are queried lazily,\n and may fail later if the response from the server is malformed.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e CouchMonad (Maybe (Doc, Rev, [(String, JSValue)]))",
        "fct-type": "function",
        "title": "getDocPrim"
      },
      "index": {
        "description": "Gets document as raw JSON value Returns the document id revision and value as JSObject These fields are queried lazily and may fail later if the response from the server is malformed",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getDocPrim",
        "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,[(String,JSValue)]))",
        "package": "CouchDB",
        "partial": "Doc Prim",
        "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe(Doc,Rev,[(String,JSValue)]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:getDocRaw",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB -\u003e Doc -\u003e CouchMonad (Maybe String)",
        "fct-source": "src/Database-CouchDB.html#getDocRaw",
        "fct-type": "function",
        "title": "getDocRaw"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "getDocRaw",
        "normalized": "DB-\u003eDoc-\u003eCouchMonad(Maybe String)",
        "package": "CouchDB",
        "partial": "Doc Raw",
        "signature": "DB-\u003eDoc-\u003eCouchMonad(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:isDBString",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Database-CouchDB.html#isDBString",
        "fct-type": "function",
        "title": "isDBString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "isDBString",
        "normalized": "String-\u003eBool",
        "package": "CouchDB",
        "partial": "DBString",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:isDocString",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Database-CouchDB.html#isDocString",
        "fct-type": "function",
        "title": "isDocString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "isDocString",
        "normalized": "String-\u003eBool",
        "package": "CouchDB",
        "partial": "Doc String",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e a-\u003e CouchMonad (Doc, Rev)",
        "fct-type": "function",
        "title": "newDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "newDoc",
        "normalized": "DB-\u003ea-\u003eCouchMonad(Doc,Rev)",
        "package": "CouchDB",
        "partial": "Doc",
        "signature": "DB-\u003ea-\u003eCouchMonad(Doc,Rev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newNamedDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e a-\u003e CouchMonad (Either String Rev)",
        "fct-type": "function",
        "title": "newNamedDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "newNamedDoc",
        "normalized": "DB-\u003eDoc-\u003ea-\u003eCouchMonad(Either String Rev)",
        "package": "CouchDB",
        "partial": "Named Doc",
        "signature": "DB-\u003eDoc-\u003ea-\u003eCouchMonad(Either String Rev)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:newView",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String-\u003e String-\u003e [CouchView]-\u003e CouchMonad ()",
        "fct-type": "function",
        "title": "newView"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "newView",
        "normalized": "String-\u003eString-\u003e[CouchView]-\u003eCouchMonad()",
        "package": "CouchDB",
        "partial": "View",
        "signature": "String-\u003eString-\u003e[CouchView]-\u003eCouchMonad()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:queryView",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e Doc-\u003e [(String, JSValue)]-\u003e CouchMonad [(Doc, a)]",
        "fct-type": "function",
        "title": "queryView"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "queryView",
        "normalized": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]",
        "package": "CouchDB",
        "partial": "View",
        "signature": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[(Doc,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:queryViewKeys",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryView\u003c/a\u003e\u003c/code\u003e, but only returns the keys.  Use this for key-only\n views where the value is completely ignored.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e Doc-\u003e Doc-\u003e [(String, JSValue)]-\u003e CouchMonad [Doc]",
        "fct-type": "function",
        "title": "queryViewKeys"
      },
      "index": {
        "description": "Like queryView but only returns the keys Use this for key-only views where the value is completely ignored",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "queryViewKeys",
        "normalized": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[Doc]",
        "package": "CouchDB",
        "partial": "View Keys",
        "signature": "DB-\u003eDoc-\u003eDoc-\u003e[(String,JSValue)]-\u003eCouchMonad[Doc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:rev",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a Rev\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String -\u003e Rev",
        "fct-source": "src/Database-CouchDB.html#rev",
        "fct-type": "function",
        "title": "rev"
      },
      "index": {
        "description": "Returns Rev",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "rev",
        "normalized": "String-\u003eRev",
        "package": "CouchDB",
        "partial": "",
        "signature": "String-\u003eRev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDB",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "String-\u003e Int-\u003e CouchMonad a-\u003e IO a",
        "fct-type": "function",
        "title": "runCouchDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "runCouchDB",
        "normalized": "String-\u003eInt-\u003eCouchMonad a-\u003eIO a",
        "package": "CouchDB",
        "partial": "Couch DB",
        "signature": "String-\u003eInt-\u003eCouchMonad a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDB-39-",
      "description": {
        "fct-descr": "\u003cp\u003eConnects to the CouchDB server at localhost:5984.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "CouchMonad a -\u003e IO a",
        "fct-source": "src/Database-CouchDB-HTTP.html#runCouchDB%27",
        "fct-type": "function",
        "title": "runCouchDB'"
      },
      "index": {
        "description": "Connects to the CouchDB server at localhost",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "runCouchDB'",
        "normalized": "CouchMonad a-\u003eIO a",
        "package": "CouchDB",
        "partial": "Couch DB'",
        "signature": "CouchMonad a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDBURI",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "URI-\u003e CouchMonad a-\u003e IO a",
        "fct-type": "function",
        "title": "runCouchDBURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "runCouchDBURI",
        "normalized": "URI-\u003eCouchMonad a-\u003eIO a",
        "package": "CouchDB",
        "partial": "Couch DBURI",
        "signature": "URI-\u003eCouchMonad a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:runCouchDBWith",
      "description": {
        "fct-descr": "\u003cp\u003eRun a CouchDB computation with an existing CouchDB connection.\n\u003c/p\u003e",
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "CouchConn -\u003e CouchMonad a -\u003e IO a",
        "fct-source": "src/Database-CouchDB-HTTP.html#runCouchDBWith",
        "fct-type": "function",
        "title": "runCouchDBWith"
      },
      "index": {
        "description": "Run CouchDB computation with an existing CouchDB connection",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "runCouchDBWith",
        "normalized": "CouchConn-\u003eCouchMonad a-\u003eIO a",
        "package": "CouchDB",
        "partial": "Couch DBWith",
        "signature": "CouchConn-\u003eCouchMonad a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/CouchDB/docs/Database-CouchDB.html#v:updateDoc",
      "description": {
        "fct-module": "Database.CouchDB",
        "fct-package": "CouchDB",
        "fct-signature": "DB-\u003e (Doc, Rev)-\u003e a-\u003e CouchMonad (Maybe (Doc, Rev))",
        "fct-type": "function",
        "title": "updateDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database CouchDB",
        "module": "Database.CouchDB",
        "name": "updateDoc",
        "normalized": "DB-\u003e(Doc,Rev)-\u003ea-\u003eCouchMonad(Maybe(Doc,Rev))",
        "package": "CouchDB",
        "partial": "Doc",
        "signature": "DB-\u003e(Doc,Rev)-\u003ea-\u003eCouchMonad(Maybe(Doc,Rev))"
      }
    }
  }
]