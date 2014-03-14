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
        "word": "couch-hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Map",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Map",
          "package": "couch-hs",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of your map functions as they are stored in CouchDB. The trivial\n     example:\n\u003c/p\u003e\u003cpre\u003e \\doc -\u003e return ()\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "MapSignature",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Map.html#MapSignature",
          "type": "type"
        },
        "index": {
          "description": "The type of your map functions as they are stored in CouchDB The trivial example doc return",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "MapSignature",
          "package": "couch-hs",
          "partial": "Map Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#t:MapSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike MonadIO, but for \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e. This allows JSON parsing\n   operations to be lifted into our various view monads.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "MonadParser",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#MonadParser",
          "type": "class"
        },
        "index": {
          "description": "Like MonadIO but for Parser This allows JSON parsing operations to be lifted into our various view monads",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "MonadParser",
          "package": "couch-hs",
          "partial": "Monad Parser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#t:MonadParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Value",
          "package": "couch-hs",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Value",
          "package": "couch-hs",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad within which a map computation takes place. This is a\n     transformation of the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e monad, which is accessible\n     through the \u003ccode\u003e\u003ca\u003eMonadParser\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "ViewMap",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Map.html#ViewMap",
          "type": "data"
        },
        "index": {
          "description": "The monad within which map computation takes place This is transformation of the Parser monad which is accessible through the MonadParser typeclass",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "ViewMap",
          "package": "couch-hs",
          "partial": "View Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#t:ViewMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003e from a key and a value.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "(.=)",
          "package": "couch-hs",
          "signature": "Text -\u003e a -\u003e Pair",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.-61-\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:.-61-\"]"
        },
        "index": {
          "description": "Construct Pair from key and value",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "(.=) .=",
          "normalized": "Text-\u003ea-\u003ePair",
          "package": "couch-hs",
          "signature": "Text-\u003ea-\u003ePair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a required field of an object. If the field is not present, or the\n     value can not be parsed into the target type, the computation will fail.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "(.:)",
          "package": "couch-hs",
          "signature": "Object -\u003e Text -\u003e m a",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#.%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.:\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:.:\"]"
        },
        "index": {
          "description": "Parses required field of an object If the field is not present or the value can not be parsed into the target type the computation will fail",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "(.:) .:",
          "normalized": "Object-\u003eText-\u003ea b",
          "package": "couch-hs",
          "signature": "Object-\u003eText-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an optional field of an object. This will not halt the computation\n     on failure.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "(.:?)",
          "package": "couch-hs",
          "signature": "Object -\u003e Text -\u003e m (Maybe a)",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#.%3A%3F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.:-63-\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:.:-63-\"]"
        },
        "index": {
          "description": "Parses an optional field of an object This will not halt the computation on failure",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "(.:?) .:?",
          "normalized": "Object-\u003eText-\u003ea(Maybe b)",
          "package": "couch-hs",
          "signature": "Object-\u003eText-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:.:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "Array",
          "package": "couch-hs",
          "signature": "Array !Array",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Array\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:Array\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Array",
          "package": "couch-hs",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "Bool",
          "package": "couch-hs",
          "signature": "Bool !Bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Bool\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:Bool\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Bool",
          "package": "couch-hs",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "Null",
          "package": "couch-hs",
          "signature": "Null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Null\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:Null\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Null",
          "package": "couch-hs",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "Number",
          "package": "couch-hs",
          "signature": "Number !Number",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Number\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:Number\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Number",
          "package": "couch-hs",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "Object",
          "package": "couch-hs",
          "signature": "Object !Object",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Object\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:Object\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "Object",
          "package": "couch-hs",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "String",
          "package": "couch-hs",
          "signature": "String !Text",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:String\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "String",
          "package": "couch-hs",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a key/value pair for the current document. The values will be turned\n     into JSON objects for you, although you will have to provide type\n     annotations somewhere.\n\u003c/p\u003e\u003cpre\u003e\\doc -\u003e do value \u003c- doc .: \"value\" :: ViewMap Double\n           emit Null value\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "emit",
          "package": "couch-hs",
          "signature": "k -\u003e v -\u003e ViewMap ()",
          "source": "src/Database-CouchDB-ViewServer-Map.html#emit",
          "type": "function"
        },
        "index": {
          "description": "Emit key value pair for the current document The values will be turned into JSON objects for you although you will have to provide type annotations somewhere doc do value doc value ViewMap Double emit Null value",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "emit",
          "normalized": "a-\u003eb-\u003eViewMap()",
          "package": "couch-hs",
          "signature": "k-\u003ev-\u003eViewMap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eemit\u003c/a\u003e\u003c/code\u003e, but with wrapped key and value.\n\u003c/p\u003e\u003cpre\u003e\\doc -\u003e emitM (return Null) (doc .: \"value\" :: ViewMap Double)\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "emitM",
          "package": "couch-hs",
          "signature": "ViewMap k -\u003e ViewMap v -\u003e ViewMap ()",
          "source": "src/Database-CouchDB-ViewServer-Map.html#emitM",
          "type": "function"
        },
        "index": {
          "description": "Same as emit but with wrapped key and value doc emitM return Null doc value ViewMap Double",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "emitM",
          "normalized": "ViewMap a-\u003eViewMap b-\u003eViewMap()",
          "package": "couch-hs",
          "signature": "ViewMap k-\u003eViewMap v-\u003eViewMap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:emitM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "liftParser",
          "package": "couch-hs",
          "signature": "Parser a -\u003e m a",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#liftParser",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "liftParser",
          "normalized": "Parser a-\u003eb a",
          "package": "couch-hs",
          "partial": "Parser",
          "signature": "Parser a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:liftParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a log message to the CouchDB server. Note that log messages are only\n     sent if the computation succeeds. If you want to log a message in the event\n     of a failure, look at \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "logMsg",
          "package": "couch-hs",
          "signature": "String -\u003e ViewMap ()",
          "source": "src/Database-CouchDB-ViewServer-Map.html#logMsg",
          "type": "function"
        },
        "index": {
          "description": "Send log message to the CouchDB server Note that log messages are only sent if the computation succeeds If you want to log message in the event of failure look at Alternative",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "logMsg",
          "normalized": "String-\u003eViewMap()",
          "package": "couch-hs",
          "partial": "Msg",
          "signature": "String-\u003eViewMap()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:logMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e from a list of name/value \u003ccode\u003e\u003ca\u003ePair\u003c/a\u003e\u003c/code\u003es.  If duplicate\n keys arise, earlier keys and their associated values win.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "object",
          "package": "couch-hs",
          "signature": "[Pair] -\u003e Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:object\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:object\"]"
        },
        "index": {
          "description": "Create Value from list of name value Pair If duplicate keys arise earlier keys and their associated values win",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "object",
          "normalized": "[Pair]-\u003eValue",
          "package": "couch-hs",
          "signature": "[Pair]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to parse a JSON value into a given type. This is typically used\n     with a type annotation to indicate the target type. If the value can not\n     be parsed into that type, the entire computation will fail.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "parseJSON",
          "package": "couch-hs",
          "signature": "Value -\u003e m a",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#parseJSON",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:parseJSON\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:parseJSON\"]"
        },
        "index": {
          "description": "Attempts to parse JSON value into given type This is typically used with type annotation to indicate the target type If the value can not be parsed into that type the entire computation will fail",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "parseJSON",
          "normalized": "Value-\u003ea b",
          "package": "couch-hs",
          "partial": "JSON",
          "signature": "Value-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:parseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e to a list of values. This is commonly used with the\n     reduce function arguments.\n\u003c/p\u003e",
          "module": "[\"Database.CouchDB.ViewServer.Map\",\"Database.CouchDB.ViewServer.Reduce\"]",
          "name": "parseJSONList",
          "package": "couch-hs",
          "signature": "[Value] -\u003e m [a]",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#parseJSONList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:parseJSONList\",\"http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:parseJSONList\"]"
        },
        "index": {
          "description": "Applies parseJSON to list of values This is commonly used with the reduce function arguments",
          "hierarchy": "Database CouchDB ViewServer Map",
          "module": "Database.CouchDB.ViewServer.Map",
          "name": "parseJSONList",
          "normalized": "[Value]-\u003ea[b]",
          "package": "couch-hs",
          "partial": "JSONList",
          "signature": "[Value]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Map.html#v:parseJSONList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "Reduce",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Reduce.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "Reduce",
          "package": "couch-hs",
          "partial": "Reduce",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike MonadIO, but for \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e. This allows JSON parsing\n   operations to be lifted into our various view monads.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "MonadParser",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#MonadParser",
          "type": "class"
        },
        "index": {
          "description": "Like MonadIO but for Parser This allows JSON parsing operations to be lifted into our various view monads",
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "MonadParser",
          "package": "couch-hs",
          "partial": "Monad Parser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#t:MonadParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of your reduce functions as they are stored in CouchDB. The trivial\n     example:\n\u003c/p\u003e\u003cpre\u003e \\keys values rereduce -\u003e return Null\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "ReduceSignature",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Reduce.html#ReduceSignature",
          "type": "type"
        },
        "index": {
          "description": "The type of your reduce functions as they are stored in CouchDB The trivial example keys values rereduce return Null",
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "ReduceSignature",
          "package": "couch-hs",
          "partial": "Reduce Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#t:ReduceSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "Value",
          "package": "couch-hs",
          "type": "data"
        },
        "index": {
          "description": "JSON value represented as Haskell value",
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "Value",
          "package": "couch-hs",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad within which a reduce computation takes place. This is a\n     transformation of the \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e monad, which is accessible\n     through the \u003ccode\u003e\u003ca\u003eMonadParser\u003c/a\u003e\u003c/code\u003e typeclass.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "ViewReduce",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Reduce.html#ViewReduce",
          "type": "data"
        },
        "index": {
          "description": "The monad within which reduce computation takes place This is transformation of the Parser monad which is accessible through the MonadParser typeclass",
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "ViewReduce",
          "package": "couch-hs",
          "partial": "View Reduce",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#t:ViewReduce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "liftParser",
          "package": "couch-hs",
          "signature": "Parser a -\u003e m a",
          "source": "src/Database-CouchDB-ViewServer-Parse.html#liftParser",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "liftParser",
          "normalized": "Parser a-\u003eb a",
          "package": "couch-hs",
          "partial": "Parser",
          "signature": "Parser a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:liftParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a log message to the CouchDB server. Note that log messages are only\n     sent if the computation succeeds. If you want to log a message in the event\n     of a failure, look at \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "logMsg",
          "package": "couch-hs",
          "signature": "String -\u003e ViewReduce ()",
          "source": "src/Database-CouchDB-ViewServer-Reduce.html#logMsg",
          "type": "function"
        },
        "index": {
          "description": "Send log message to the CouchDB server Note that log messages are only sent if the computation succeeds If you want to log message in the event of failure look at Alternative",
          "hierarchy": "Database CouchDB ViewServer Reduce",
          "module": "Database.CouchDB.ViewServer.Reduce",
          "name": "logMsg",
          "normalized": "String-\u003eViewReduce()",
          "package": "couch-hs",
          "partial": "Msg",
          "signature": "String-\u003eViewReduce()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer-Reduce.html#v:logMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a CouchDB view server in and for Haskell. With it, you can define\n    design documents that use Haskell functions to perform map/reduce\n    operations. Database.CouchDB.ViewServer is just a container; see the\n    submodules for API documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.CouchDB.ViewServer",
          "name": "ViewServer",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer.html",
          "type": "module"
        },
        "index": {
          "description": "This is CouchDB view server in and for Haskell With it you can define design documents that use Haskell functions to perform map reduce operations Database.CouchDB.ViewServer is just container see the submodules for API documentation",
          "hierarchy": "Database CouchDB ViewServer",
          "module": "Database.CouchDB.ViewServer",
          "name": "ViewServer",
          "package": "couch-hs",
          "partial": "View Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of your map functions as they are stored in CouchDB. The trivial\n     example:\n\u003c/p\u003e\u003cpre\u003e \\doc -\u003e return ()\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer",
          "name": "MapSignature",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Map.html#MapSignature",
          "type": "type"
        },
        "index": {
          "description": "The type of your map functions as they are stored in CouchDB The trivial example doc return",
          "hierarchy": "Database CouchDB ViewServer",
          "module": "Database.CouchDB.ViewServer",
          "name": "MapSignature",
          "package": "couch-hs",
          "partial": "Map Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer.html#t:MapSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of your reduce functions as they are stored in CouchDB. The trivial\n     example:\n\u003c/p\u003e\u003cpre\u003e \\keys values rereduce -\u003e return Null\n\u003c/pre\u003e",
          "module": "Database.CouchDB.ViewServer",
          "name": "ReduceSignature",
          "package": "couch-hs",
          "source": "src/Database-CouchDB-ViewServer-Reduce.html#ReduceSignature",
          "type": "type"
        },
        "index": {
          "description": "The type of your reduce functions as they are stored in CouchDB The trivial example keys values rereduce return Null",
          "hierarchy": "Database CouchDB ViewServer",
          "module": "Database.CouchDB.ViewServer",
          "name": "ReduceSignature",
          "package": "couch-hs",
          "partial": "Reduce Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/couch-hs/docs/Database-CouchDB-ViewServer.html#t:ReduceSignature"
      }
    }
  ]
]