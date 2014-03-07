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
        "word": "tconfig"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small and simple text file configuration\n  library written in Haskell. It is similar\n  to the INI file format, but lacks a few of\n  it's features, such as sections. It is \n  suitable for simple games that need to \n  keep track of certain information between \n  plays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TConfig",
          "name": "TConfig",
          "package": "tconfig",
          "source": "src/Data-TConfig.html",
          "type": "module"
        },
        "index": {
          "description": "small and simple text file configuration library written in Haskell It is similar to the INI file format but lacks few of it features such as sections It is suitable for simple games that need to keep track of certain information between plays",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "TConfig",
          "package": "tconfig",
          "partial": "TConfig",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a key and value to the end of the configuration.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "addKey",
          "package": "tconfig",
          "signature": "Key -\u003e Value -\u003e Conf -\u003e Conf",
          "source": "src/Data-TConfig.html#addKey",
          "type": "function"
        },
        "index": {
          "description": "Adds key and value to the end of the configuration",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "addKey",
          "normalized": "Key-\u003eValue-\u003eConf-\u003eConf",
          "package": "tconfig",
          "partial": "Key",
          "signature": "Key-\u003eValue-\u003eConf-\u003eConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:addKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function. Searches a configuration for a\n key, and returns it's value.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "getValue",
          "package": "tconfig",
          "signature": "Key -\u003e Conf -\u003e Maybe Value",
          "source": "src/Data-TConfig.html#getValue",
          "type": "function"
        },
        "index": {
          "description": "Utility function Searches configuration for key and returns it value",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "getValue",
          "normalized": "Key-\u003eConf-\u003eMaybe Value",
          "package": "tconfig",
          "partial": "Value",
          "signature": "Key-\u003eConf-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a file and parses to a Map String String.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "readConfig",
          "package": "tconfig",
          "signature": "FilePath -\u003e IO Conf",
          "source": "src/Data-TConfig.html#readConfig",
          "type": "function"
        },
        "index": {
          "description": "Reads file and parses to Map String String",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "readConfig",
          "normalized": "FilePath-\u003eIO Conf",
          "package": "tconfig",
          "partial": "Config",
          "signature": "FilePath-\u003eIO Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:readConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function.\n Removes a key and it's value from the configuration.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "remKey",
          "package": "tconfig",
          "signature": "Key -\u003e Conf -\u003e Conf",
          "source": "src/Data-TConfig.html#remKey",
          "type": "function"
        },
        "index": {
          "description": "Utility function Removes key and it value from the configuration",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "remKey",
          "normalized": "Key-\u003eConf-\u003eConf",
          "package": "tconfig",
          "partial": "Key",
          "signature": "Key-\u003eConf-\u003eConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:remKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function. Replaces the value \n associated with a key in a configuration.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "repConfig",
          "package": "tconfig",
          "signature": "Key -\u003e Value -\u003e Conf -\u003e Conf",
          "source": "src/Data-TConfig.html#repConfig",
          "type": "function"
        },
        "index": {
          "description": "Utility function Replaces the value associated with key in configuration",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "repConfig",
          "normalized": "Key-\u003eValue-\u003eConf-\u003eConf",
          "package": "tconfig",
          "partial": "Config",
          "signature": "Key-\u003eValue-\u003eConf-\u003eConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:repConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a parsed configuration back to a file.\n\u003c/p\u003e",
          "module": "Data.TConfig",
          "name": "writeConfig",
          "package": "tconfig",
          "signature": "FilePath -\u003e Conf -\u003e IO ()",
          "source": "src/Data-TConfig.html#writeConfig",
          "type": "function"
        },
        "index": {
          "description": "Parses parsed configuration back to file",
          "hierarchy": "Data TConfig",
          "module": "Data.TConfig",
          "name": "writeConfig",
          "normalized": "FilePath-\u003eConf-\u003eIO()",
          "package": "tconfig",
          "partial": "Config",
          "signature": "FilePath-\u003eConf-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:writeConfig"
      }
    }
  ]
]