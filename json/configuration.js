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
        "word": "configuration"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "Configuration",
          "package": "configuration",
          "source": "src/Data-Configuration.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "Configuration",
          "package": "configuration",
          "partial": "Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "Conf",
          "package": "configuration",
          "source": "src/Data-Configuration.html#Conf",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "Conf",
          "package": "configuration",
          "partial": "Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#t:Conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "(!)",
          "package": "configuration",
          "signature": "Conf -\u003e String -\u003e a",
          "source": "src/Data-Configuration.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "(!) !",
          "normalized": "Conf-\u003eString-\u003ea",
          "package": "configuration",
          "signature": "Conf-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "(\u003c@\u003e)",
          "package": "configuration",
          "signature": "String -\u003e a -\u003e (String, Dynamic)",
          "source": "src/Data-Configuration.html#%3C%40%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "(\u003c@\u003e) \u003c@\u003e",
          "normalized": "String-\u003ea-\u003e(String,Dynamic)",
          "package": "configuration",
          "signature": "String-\u003ea-\u003e(String,Dynamic)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:-60--64--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "as",
          "package": "configuration",
          "signature": "a",
          "source": "src/Data-Configuration.html#as",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "as",
          "package": "configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:as"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "keys",
          "package": "configuration",
          "signature": "Conf -\u003e [String]",
          "source": "src/Data-Configuration.html#keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "keys",
          "normalized": "Conf-\u003e[String]",
          "package": "configuration",
          "signature": "Conf-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "toConf",
          "package": "configuration",
          "signature": "[(String, Dynamic)] -\u003e Conf",
          "source": "src/Data-Configuration.html#toConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "toConf",
          "normalized": "[(String,Dynamic)]-\u003eConf",
          "package": "configuration",
          "partial": "Conf",
          "signature": "[(String,Dynamic)]-\u003eConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an arbitrary value into an object of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThe type of the object must be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, which\n ensures that only monomorphically-typed objects may be converted to\n \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  To convert a polymorphic object into \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, give it\n a monomorphic type signature.  For example:\n\u003c/p\u003e\u003cpre\u003e    toDyn (id :: Int -\u003e Int)\n\u003c/pre\u003e",
          "module": "Data.Configuration",
          "name": "toDyn",
          "package": "configuration",
          "signature": "a -\u003e Dynamic",
          "type": "function"
        },
        "index": {
          "description": "Converts an arbitrary value into an object of type Dynamic The type of the object must be an instance of Typeable which ensures that only monomorphically-typed objects may be converted to Dynamic To convert polymorphic object into Dynamic give it monomorphic type signature For example toDyn id Int Int",
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "toDyn",
          "normalized": "a-\u003eDynamic",
          "package": "configuration",
          "partial": "Dyn",
          "signature": "a-\u003eDynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "toMap",
          "package": "configuration",
          "signature": "Conf -\u003e Map String Dynamic",
          "source": "src/Data-Configuration.html#toMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "toMap",
          "normalized": "Conf-\u003eMap String Dynamic",
          "package": "configuration",
          "partial": "Map",
          "signature": "Conf-\u003eMap String Dynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Configuration",
          "name": "valueForKey",
          "package": "configuration",
          "signature": "String -\u003e Conf -\u003e a -\u003e Maybe a",
          "source": "src/Data-Configuration.html#valueForKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Configuration",
          "module": "Data.Configuration",
          "name": "valueForKey",
          "normalized": "String-\u003eConf-\u003ea-\u003eMaybe a",
          "package": "configuration",
          "partial": "For Key",
          "signature": "String-\u003eConf-\u003ea-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:valueForKey"
      }
    }
  ]
]