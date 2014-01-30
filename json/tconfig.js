[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA small and simple text file configuration\n  library written in Haskell. It is similar\n  to the INI file format, but lacks a few of\n  it's features, such as sections. It is \n  suitable for simple games that need to \n  keep track of certain information between \n  plays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "module",
        "fct-source": "src/Data-TConfig.html",
        "fct-type": "module",
        "title": "TConfig"
      },
      "index": {
        "description": "small and simple text file configuration library written in Haskell It is similar to the INI file format but lacks few of it features such as sections It is suitable for simple games that need to keep track of certain information between plays",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "TConfig",
        "normalized": "",
        "package": "tconfig",
        "partial": "TConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:addKey",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a key and value to the end of the configuration.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "Key -\u003e Value -\u003e Conf -\u003e Conf",
        "fct-source": "src/Data-TConfig.html#addKey",
        "fct-type": "function",
        "title": "addKey"
      },
      "index": {
        "description": "Adds key and value to the end of the configuration",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "addKey",
        "normalized": "Key-\u003eValue-\u003eConf-\u003eConf",
        "package": "tconfig",
        "partial": "Key",
        "signature": "Key-\u003eValue-\u003eConf-\u003eConf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function. Searches a configuration for a\n key, and returns it's value.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "Key -\u003e Conf -\u003e Maybe Value",
        "fct-source": "src/Data-TConfig.html#getValue",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "Utility function Searches configuration for key and returns it value",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "getValue",
        "normalized": "Key-\u003eConf-\u003eMaybe Value",
        "package": "tconfig",
        "partial": "Value",
        "signature": "Key-\u003eConf-\u003eMaybe Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:readConfig",
      "description": {
        "fct-descr": "\u003cp\u003eReads a file and parses to a Map String String.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "FilePath -\u003e IO Conf",
        "fct-source": "src/Data-TConfig.html#readConfig",
        "fct-type": "function",
        "title": "readConfig"
      },
      "index": {
        "description": "Reads file and parses to Map String String",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "readConfig",
        "normalized": "FilePath-\u003eIO Conf",
        "package": "tconfig",
        "partial": "Config",
        "signature": "FilePath-\u003eIO Conf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:remKey",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function.\n Removes a key and it's value from the configuration.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "Key -\u003e Conf -\u003e Conf",
        "fct-source": "src/Data-TConfig.html#remKey",
        "fct-type": "function",
        "title": "remKey"
      },
      "index": {
        "description": "Utility function Removes key and it value from the configuration",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "remKey",
        "normalized": "Key-\u003eConf-\u003eConf",
        "package": "tconfig",
        "partial": "Key",
        "signature": "Key-\u003eConf-\u003eConf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:repConfig",
      "description": {
        "fct-descr": "\u003cp\u003eUtility function. Replaces the value \n associated with a key in a configuration.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "Key -\u003e Value -\u003e Conf -\u003e Conf",
        "fct-source": "src/Data-TConfig.html#repConfig",
        "fct-type": "function",
        "title": "repConfig"
      },
      "index": {
        "description": "Utility function Replaces the value associated with key in configuration",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "repConfig",
        "normalized": "Key-\u003eValue-\u003eConf-\u003eConf",
        "package": "tconfig",
        "partial": "Config",
        "signature": "Key-\u003eValue-\u003eConf-\u003eConf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tconfig/docs/Data-TConfig.html#v:writeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eParses a parsed configuration back to a file.\n\u003c/p\u003e",
        "fct-module": "Data.TConfig",
        "fct-package": "tconfig",
        "fct-signature": "FilePath -\u003e Conf -\u003e IO ()",
        "fct-source": "src/Data-TConfig.html#writeConfig",
        "fct-type": "function",
        "title": "writeConfig"
      },
      "index": {
        "description": "Parses parsed configuration back to file",
        "hierarchy": "Data TConfig",
        "module": "Data.TConfig",
        "name": "writeConfig",
        "normalized": "FilePath-\u003eConf-\u003eIO()",
        "package": "tconfig",
        "partial": "Config",
        "signature": "FilePath-\u003eConf-\u003eIO()"
      }
    }
  }
]