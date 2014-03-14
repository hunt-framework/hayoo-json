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
        "word": "yesod-persistent"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the core functionality of this package. This package is\n distinguished from Yesod.Persist in that the latter additionally exports the\n persistent modules themselves.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yesod.Persist.Core",
          "name": "Core",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the core functionality of this package This package is distinguished from Yesod.Persist in that the latter additionally exports the persistent modules themselves",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "Core",
          "package": "yesod-persistent",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "DBRunner",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist-Core.html#DBRunner",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "DBRunner",
          "package": "yesod-persistent",
          "partial": "DBRunner",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#t:DBRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "YesodDB",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist-Core.html#YesodDB",
          "type": "type"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "YesodDB",
          "package": "yesod-persistent",
          "partial": "Yesod DB",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#t:YesodDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "YesodPersist",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist-Core.html#YesodPersist",
          "type": "class"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "YesodPersist",
          "package": "yesod-persistent",
          "partial": "Yesod Persist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#t:YesodPersist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "YesodPersistRunner",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist-Core.html#YesodPersistRunner",
          "type": "class"
        },
        "index": {
          "description": "Since",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "YesodPersistRunner",
          "package": "yesod-persistent",
          "partial": "Yesod Persist Runner",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#t:YesodPersistRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "DBRunner",
          "package": "yesod-persistent",
          "signature": "DBRunner",
          "source": "src/Yesod-Persist-Core.html#DBRunner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "DBRunner",
          "package": "yesod-persistent",
          "partial": "DBRunner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:DBRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for implementing \u003ccode\u003e\u003ca\u003egetDBRunner\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "defaultGetDBRunner",
          "package": "yesod-persistent",
          "signature": "(site -\u003e Pool Connection) -\u003e HandlerT site IO (DBRunner site, HandlerT site IO ())",
          "source": "src/Yesod-Persist-Core.html#defaultGetDBRunner",
          "type": "function"
        },
        "index": {
          "description": "Helper for implementing getDBRunner Since",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "defaultGetDBRunner",
          "normalized": "(a-\u003ePool Connection)-\u003eHandlerT a IO(DBRunner a,HandlerT a IO())",
          "package": "yesod-persistent",
          "partial": "Get DBRunner",
          "signature": "(site-\u003ePool Connection)-\u003eHandlerT site IO(DBRunner site,HandlerT site IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:defaultGetDBRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for creating \u003ccode\u003e\u003ca\u003erunDB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "defaultRunDB",
          "package": "yesod-persistent",
          "signature": "(site -\u003e c) -\u003e (site -\u003e PersistConfigPool c) -\u003e PersistConfigBackend c (HandlerT site IO) a -\u003e HandlerT site IO a",
          "source": "src/Yesod-Persist-Core.html#defaultRunDB",
          "type": "function"
        },
        "index": {
          "description": "Helper for creating runDB Since",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "defaultRunDB",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ePersistConfigPool b)-\u003ePersistConfigBackend b(HandlerT a IO)c-\u003eHandlerT a IO c",
          "package": "yesod-persistent",
          "partial": "Run DB",
          "signature": "(site-\u003ec)-\u003e(site-\u003ePersistConfigPool c)-\u003ePersistConfigBackend c(HandlerT site IO)a-\u003eHandlerT site IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:defaultRunDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given entity by ID, or return a 404 not found if it doesn't exist.\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "get404",
          "package": "yesod-persistent",
          "signature": "Key val -\u003e t m val",
          "source": "src/Yesod-Persist-Core.html#get404",
          "type": "function"
        },
        "index": {
          "description": "Get the given entity by ID or return not found if it doesn exist",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "get404",
          "normalized": "Key a-\u003eb c a",
          "package": "yesod-persistent",
          "signature": "Key val-\u003et m val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:get404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the given entity by unique key, or return a 404 not found if it doesn't\n   exist.\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "getBy404",
          "package": "yesod-persistent",
          "signature": "Unique val -\u003e t m (Entity val)",
          "source": "src/Yesod-Persist-Core.html#getBy404",
          "type": "function"
        },
        "index": {
          "description": "Get the given entity by unique key or return not found if it doesn exist",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "getBy404",
          "normalized": "Unique a-\u003eb c(Entity a)",
          "package": "yesod-persistent",
          "partial": "By",
          "signature": "Unique val-\u003et m(Entity val)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:getBy404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function differs from \u003ccode\u003e\u003ca\u003erunDB\u003c/a\u003e\u003c/code\u003e in that it returns a database\n runner function, as opposed to simply running a single action. This will\n usually mean that a connection is taken from a pool and then reused for\n each invocation. This can be useful for creating streaming responses;\n see \u003ccode\u003e\u003ca\u003erunDBSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt additionally returns a cleanup function to free the connection.  If\n your code finishes successfully, you \u003cem\u003emust\u003c/em\u003e call this cleanup to\n indicate changes should be committed. Otherwise, for SQL backends at\n least, a rollback will be used instead.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "getDBRunner",
          "package": "yesod-persistent",
          "signature": "HandlerT site IO (DBRunner site, HandlerT site IO ())",
          "source": "src/Yesod-Persist-Core.html#getDBRunner",
          "type": "method"
        },
        "index": {
          "description": "This function differs from runDB in that it returns database runner function as opposed to simply running single action This will usually mean that connection is taken from pool and then reused for each invocation This can be useful for creating streaming responses see runDBSource It additionally returns cleanup function to free the connection If your code finishes successfully you must call this cleanup to indicate changes should be committed Otherwise for SQL backends at least rollback will be used instead Since",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "getDBRunner",
          "normalized": "HandlerT a IO(DBRunner a,HandlerT a IO())",
          "package": "yesod-persistent",
          "partial": "DBRunner",
          "signature": "HandlerT site IO(DBRunner site,HandlerT site IO())",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:getDBRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends \u003ccode\u003e\u003ca\u003erespondSource\u003c/a\u003e\u003c/code\u003e to create a streaming database response body.\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "respondSourceDB",
          "package": "yesod-persistent",
          "signature": "ContentType -\u003e Source (YesodDB site) (Flush Builder) -\u003e HandlerT site IO TypedContent",
          "source": "src/Yesod-Persist-Core.html#respondSourceDB",
          "type": "function"
        },
        "index": {
          "description": "Extends respondSource to create streaming database response body",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "respondSourceDB",
          "normalized": "ContentType-\u003eSource(YesodDB a)(Flush Builder)-\u003eHandlerT a IO TypedContent",
          "package": "yesod-persistent",
          "partial": "Source DB",
          "signature": "ContentType-\u003eSource(YesodDB site)(Flush Builder)-\u003eHandlerT site IO TypedContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:respondSourceDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "runDB",
          "package": "yesod-persistent",
          "signature": "YesodDB site a -\u003e HandlerT site IO a",
          "source": "src/Yesod-Persist-Core.html#runDB",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "runDB",
          "normalized": "YesodDB a b-\u003eHandlerT a IO b",
          "package": "yesod-persistent",
          "partial": "DB",
          "signature": "YesodDB site a-\u003eHandlerT site IO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:runDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist.Core",
          "name": "runDBRunner",
          "package": "yesod-persistent",
          "signature": "forall a.  YesodDB site a -\u003e HandlerT site IO a",
          "source": "src/Yesod-Persist-Core.html#DBRunner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "runDBRunner",
          "normalized": "a b YesodDB c d-\u003eHandlerT c IO d",
          "package": "yesod-persistent",
          "partial": "DBRunner",
          "signature": "forall a. YesodDB site a-\u003eHandlerT site IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:runDBRunner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunDB\u003c/a\u003e\u003c/code\u003e, but transforms a \u003ccode\u003eSource\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003erespondSourceDB\u003c/a\u003e\u003c/code\u003e for an\n example, practical use case.\n\u003c/p\u003e\u003cp\u003eSince 1.2.0\n\u003c/p\u003e",
          "module": "Yesod.Persist.Core",
          "name": "runDBSource",
          "package": "yesod-persistent",
          "signature": "Source (YesodDB site) a -\u003e Source (HandlerT site IO) a",
          "source": "src/Yesod-Persist-Core.html#runDBSource",
          "type": "function"
        },
        "index": {
          "description": "Like runDB but transforms Source See respondSourceDB for an example practical use case Since",
          "hierarchy": "Yesod Persist Core",
          "module": "Yesod.Persist.Core",
          "name": "runDBSource",
          "normalized": "Source(YesodDB a)b-\u003eSource(HandlerT a IO)b",
          "package": "yesod-persistent",
          "partial": "DBSource",
          "signature": "Source(YesodDB site)a-\u003eSource(HandlerT site IO)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist-Core.html#v:runDBSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Persist",
          "name": "Persist",
          "package": "yesod-persistent",
          "source": "src/Yesod-Persist.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Persist",
          "module": "Yesod.Persist",
          "name": "Persist",
          "package": "yesod-persistent",
          "partial": "Persist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-persistent/docs/Yesod-Persist.html#"
      }
    }
  ]
]