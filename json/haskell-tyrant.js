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
        "word": "haskell-tyrant"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pure Haskell interface to the Tokyo Tyrant database server\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.TokyoTyrant",
          "name": "TokyoTyrant",
          "package": "haskell-tyrant",
          "source": "src/Database-TokyoTyrant.html",
          "type": "module"
        },
        "index": {
          "description": "pure Haskell interface to the Tokyo Tyrant database server",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "TokyoTyrant",
          "package": "haskell-tyrant",
          "partial": "Tokyo Tyrant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "TokyoTyrantHandle",
          "package": "haskell-tyrant",
          "source": "src/Database-TokyoTyrant.html#TokyoTyrantHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "TokyoTyrantHandle",
          "package": "haskell-tyrant",
          "partial": "Tokyo Tyrant Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#t:TokyoTyrantHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "TyrantOption",
          "package": "haskell-tyrant",
          "source": "src/Database-TokyoTyrant.html#TyrantOption",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "TyrantOption",
          "package": "haskell-tyrant",
          "partial": "Tyrant Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#t:TyrantOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "GlobalLocking",
          "package": "haskell-tyrant",
          "signature": "GlobalLocking",
          "source": "src/Database-TokyoTyrant.html#TyrantOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "GlobalLocking",
          "package": "haskell-tyrant",
          "partial": "Global Locking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:GlobalLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "NoUpdateLog",
          "package": "haskell-tyrant",
          "signature": "NoUpdateLog",
          "source": "src/Database-TokyoTyrant.html#TyrantOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "NoUpdateLog",
          "package": "haskell-tyrant",
          "partial": "No Update Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:NoUpdateLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "RecordLocking",
          "package": "haskell-tyrant",
          "signature": "RecordLocking",
          "source": "src/Database-TokyoTyrant.html#TyrantOption",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "RecordLocking",
          "package": "haskell-tyrant",
          "partial": "Record Locking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:RecordLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "addDouble",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e b -\u003e IO (Either String Double)",
          "source": "src/Database-TokyoTyrant.html#addDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "addDouble",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either String Double)",
          "package": "haskell-tyrant",
          "partial": "Double",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eb-\u003eIO(Either String Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:addDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an integer to a record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "addInt",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e a -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#addInt",
          "type": "function"
        },
        "index": {
          "description": "Add an integer to record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "addInt",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "partial": "Int",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:addInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose connection to ttserver\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "closeConnection",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO ()",
          "source": "src/Database-TokyoTyrant.html#closeConnection",
          "type": "function"
        },
        "index": {
          "description": "Close connection to ttserver",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "closeConnection",
          "normalized": "TokyoTyrantHandle-\u003eIO()",
          "package": "haskell-tyrant",
          "partial": "Connection",
          "signature": "TokyoTyrantHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:closeConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the database file to the specified path\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "copy",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#copy",
          "type": "function"
        },
        "index": {
          "description": "Copy the database file to the specified path",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "copy",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function of the script language extension\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "ext",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003e ByteString-\u003e ByteString-\u003e ByteString-\u003e [TyrantOption]-\u003e IO (Either [Char] ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Call function of the script language extension",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "ext",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eByteString-\u003e[TyrantOption]-\u003eIO(Either[Char]ByteString)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eByteString-\u003e[TyrantOption]-\u003eIO(Either[Char]ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:ext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget forward matching keys in a remote database object\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "fwmkeys",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e a -\u003e IO (Either [Char] [ByteString])",
          "source": "src/Database-TokyoTyrant.html#fwmkeys",
          "type": "function"
        },
        "index": {
          "description": "get forward matching keys in remote database object",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "fwmkeys",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either[Char][ByteString])",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either[Char][ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:fwmkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "getDouble",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either [Char] Double)",
          "source": "src/Database-TokyoTyrant.html#getDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "getDouble",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Double)",
          "package": "haskell-tyrant",
          "partial": "Double",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:getDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a record with an Int value\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "getInt",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#getInt",
          "type": "function"
        },
        "index": {
          "description": "Retrieve record with an Int value",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "getInt",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "partial": "Int",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "getValue",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either String ByteString)",
          "source": "src/Database-TokyoTyrant.html#getValue",
          "type": "function"
        },
        "index": {
          "description": "Retrieve record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "getValue",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String ByteString)",
          "package": "haskell-tyrant",
          "partial": "Value",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einitialize the iterator of a remote database object\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "iterinit",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#iterinit",
          "type": "function"
        },
        "index": {
          "description": "initialize the iterator of remote database object",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "iterinit",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:iterinit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eget the next key of the iterator of a remote database object\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "iternext",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either [Char] ByteString)",
          "source": "src/Database-TokyoTyrant.html#iternext",
          "type": "function"
        },
        "index": {
          "description": "get the next key of the iterator of remote database object",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "iternext",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either[Char]ByteString)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either[Char]ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:iternext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch keys and values for multiple records\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "mget",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e [ByteString] -\u003e IO (Either [Char] [(ByteString, ByteString)])",
          "source": "src/Database-TokyoTyrant.html#mget",
          "type": "function"
        },
        "index": {
          "description": "Fetch keys and values for multiple records",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "mget",
          "normalized": "TokyoTyrantHandle-\u003e[ByteString]-\u003eIO(Either[Char][(ByteString,ByteString)])",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003e[ByteString]-\u003eIO(Either[Char][(ByteString,ByteString)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:mget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a versatile function for miscellaneous operations\n funcname can be \u003ca\u003egetlist\u003c/a\u003e, \u003ca\u003eputlist\u003c/a\u003e and \u003ca\u003eoutlist\u003c/a\u003e\n getlist takes a list of keys and returns a list of values\n putlist takes a list of keys and values one after the other and returns []\n outlist takes a list of keys and removes those records\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "misc",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003e ByteString-\u003e [ByteString]-\u003e [TyrantOption]-\u003e IO (Either [Char] [ByteString])",
          "type": "function"
        },
        "index": {
          "description": "Call versatile function for miscellaneous operations funcname can be getlist putlist and outlist getlist takes list of keys and returns list of values putlist takes list of keys and values one after the other and returns outlist takes list of keys and removes those records",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "misc",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003e[ByteString]-\u003e[TyrantOption]-\u003eIO(Either[Char][ByteString])",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003e[ByteString]-\u003e[TyrantOption]-\u003eIO(Either[Char][ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to Tokyo Tyrant\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "openConnection",
          "package": "haskell-tyrant",
          "signature": "HostName -\u003e ServiceName -\u003e IO TokyoTyrantHandle",
          "source": "src/Database-TokyoTyrant.html#openConnection",
          "type": "function"
        },
        "index": {
          "description": "Connect to Tokyo Tyrant",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "openConnection",
          "normalized": "HostName-\u003eServiceName-\u003eIO TokyoTyrantHandle",
          "package": "haskell-tyrant",
          "partial": "Connection",
          "signature": "HostName-\u003eServiceName-\u003eIO TokyoTyrantHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:openConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "out",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#out",
          "type": "function"
        },
        "index": {
          "description": "Remove record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "out",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a value at the end of the existing record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putCat",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e ByteString -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#putCat",
          "type": "function"
        },
        "index": {
          "description": "Concatenate value at the end of the existing record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putCat",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "partial": "Cat",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a record where the value is a double\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putDouble",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e Double -\u003e IO (Either [Char] Double)",
          "source": "src/Database-TokyoTyrant.html#putDouble",
          "type": "function"
        },
        "index": {
          "description": "Store record where the value is double",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putDouble",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eDouble-\u003eIO(Either[Char]Double)",
          "package": "haskell-tyrant",
          "partial": "Double",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eDouble-\u003eIO(Either[Char]Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a record with an Int value\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putInt",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e Int -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#putInt",
          "type": "function"
        },
        "index": {
          "description": "Store record with an Int value",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putInt",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eInt-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "partial": "Int",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eInt-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a new record\n   If key already exists nothing is done\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putKeep",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e ByteString -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#putKeep",
          "type": "function"
        },
        "index": {
          "description": "Store new record If key already exists nothing is done",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putKeep",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "partial": "Keep",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putKeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putValue",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e ByteString -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#putValue",
          "type": "function"
        },
        "index": {
          "description": "Store record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putValue",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "partial": "Value",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estore a record into a remote database object without response from the server\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putnr",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e ByteString -\u003e IO ()",
          "source": "src/Database-TokyoTyrant.html#putnr",
          "type": "function"
        },
        "index": {
          "description": "store record into remote database object without response from the server",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putnr",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO()",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putnr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econcatenate a value at the end of the existing record and shift it to the lef\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "putshl",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003e ByteString-\u003e ByteString-\u003e a-\u003e IO (Either String String)",
          "type": "function"
        },
        "index": {
          "description": "concatenate value at the end of the existing record and shift it to the lef",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "putshl",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:putshl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore the database with update log\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "restore",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e a -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Restore the database with update log",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "restore",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of records\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "rnum",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#rnum",
          "type": "function"
        },
        "index": {
          "description": "Get the number of records",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "rnum",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:rnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.TokyoTyrant",
          "name": "setmst",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e a -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#setmst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "setmst",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003ea-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:setmst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the database\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "size",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#size",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the database",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "size",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the stats string\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "stat",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either [Char] [[ByteString]])",
          "source": "src/Database-TokyoTyrant.html#stat",
          "type": "function"
        },
        "index": {
          "description": "Get the stats string",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "stat",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either[Char][[ByteString]])",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either[Char][[ByteString]])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize updated contents with the database file\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "sync",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Synchronize updated contents with the database file",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "sync",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all records\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "vanish",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e IO (Either String String)",
          "source": "src/Database-TokyoTyrant.html#vanish",
          "type": "function"
        },
        "index": {
          "description": "Remove all records",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "vanish",
          "normalized": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eIO(Either String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:vanish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the value of a record\n\u003c/p\u003e",
          "module": "Database.TokyoTyrant",
          "name": "vsiz",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle -\u003e ByteString -\u003e IO (Either [Char] Int)",
          "source": "src/Database-TokyoTyrant.html#vsiz",
          "type": "function"
        },
        "index": {
          "description": "Get the size of the value of record",
          "hierarchy": "Database TokyoTyrant",
          "module": "Database.TokyoTyrant",
          "name": "vsiz",
          "normalized": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Int)",
          "package": "haskell-tyrant",
          "signature": "TokyoTyrantHandle-\u003eByteString-\u003eIO(Either[Char]Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-tyrant/docs/Database-TokyoTyrant.html#v:vsiz"
      }
    }
  ]
]