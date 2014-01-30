[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "module",
        "fct-source": "src/Data-Configuration.html",
        "fct-type": "module",
        "title": "Configuration"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "Configuration",
        "normalized": "",
        "package": "configuration",
        "partial": "Configuration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#t:Conf",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "data",
        "fct-source": "src/Data-Configuration.html#Conf",
        "fct-type": "data",
        "title": "Conf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "Conf",
        "normalized": "",
        "package": "configuration",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:-33-",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "Conf -\u003e String -\u003e a",
        "fct-source": "src/Data-Configuration.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "(!) !",
        "normalized": "Conf-\u003eString-\u003ea",
        "package": "configuration",
        "partial": "",
        "signature": "Conf-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:-60--64--62-",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "String -\u003e a -\u003e (String, Dynamic)",
        "fct-source": "src/Data-Configuration.html#%3C%40%3E",
        "fct-type": "function",
        "title": "(\u003c@\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "(\u003c@\u003e) \u003c@\u003e",
        "normalized": "String-\u003ea-\u003e(String,Dynamic)",
        "package": "configuration",
        "partial": "",
        "signature": "String-\u003ea-\u003e(String,Dynamic)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:as",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "a",
        "fct-source": "src/Data-Configuration.html#as",
        "fct-type": "function",
        "title": "as"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "as",
        "normalized": "",
        "package": "configuration",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:keys",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "Conf -\u003e [String]",
        "fct-source": "src/Data-Configuration.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "keys",
        "normalized": "Conf-\u003e[String]",
        "package": "configuration",
        "partial": "",
        "signature": "Conf-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toConf",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "[(String, Dynamic)] -\u003e Conf",
        "fct-source": "src/Data-Configuration.html#toConf",
        "fct-type": "function",
        "title": "toConf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "toConf",
        "normalized": "[(String,Dynamic)]-\u003eConf",
        "package": "configuration",
        "partial": "Conf",
        "signature": "[(String,Dynamic)]-\u003eConf"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toDyn",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an arbitrary value into an object of type \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  \n\u003c/p\u003e\u003cp\u003eThe type of the object must be an instance of \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, which\n ensures that only monomorphically-typed objects may be converted to\n \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e.  To convert a polymorphic object into \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e, give it\n a monomorphic type signature.  For example:\n\u003c/p\u003e\u003cpre\u003e    toDyn (id :: Int -\u003e Int)\n\u003c/pre\u003e",
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "a -\u003e Dynamic",
        "fct-type": "function",
        "title": "toDyn"
      },
      "index": {
        "description": "Converts an arbitrary value into an object of type Dynamic The type of the object must be an instance of Typeable which ensures that only monomorphically-typed objects may be converted to Dynamic To convert polymorphic object into Dynamic give it monomorphic type signature For example toDyn id Int Int",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "toDyn",
        "normalized": "a-\u003eDynamic",
        "package": "configuration",
        "partial": "Dyn",
        "signature": "a-\u003eDynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:toMap",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "Conf -\u003e Map String Dynamic",
        "fct-source": "src/Data-Configuration.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "toMap",
        "normalized": "Conf-\u003eMap String Dynamic",
        "package": "configuration",
        "partial": "Map",
        "signature": "Conf-\u003eMap String Dynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/configuration/docs/Data-Configuration.html#v:valueForKey",
      "description": {
        "fct-module": "Data.Configuration",
        "fct-package": "configuration",
        "fct-signature": "String -\u003e Conf -\u003e a -\u003e Maybe a",
        "fct-source": "src/Data-Configuration.html#valueForKey",
        "fct-type": "function",
        "title": "valueForKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Configuration",
        "module": "Data.Configuration",
        "name": "valueForKey",
        "normalized": "String-\u003eConf-\u003ea-\u003eMaybe a",
        "package": "configuration",
        "partial": "For Key",
        "signature": "String-\u003eConf-\u003ea-\u003eMaybe a"
      }
    }
  }
]