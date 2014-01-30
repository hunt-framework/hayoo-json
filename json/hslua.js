[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReads configuration files written in Lua.  See \u003ccode\u003ehttp://www.lua.org/\u003c/code\u003e\n for more details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "module",
        "fct-source": "src/Scripting-Lua-ConfigFile.html",
        "fct-type": "module",
        "title": "ConfigFile"
      },
      "index": {
        "description": "Reads configuration files written in Lua See http www.lua.org for more details",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "ConfigFile",
        "normalized": "",
        "package": "hslua",
        "partial": "Config File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents an open configuration file.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "data",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "Represents an open configuration file",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "Config",
        "normalized": "",
        "package": "hslua",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#t:ConfigFileException",
      "description": {
        "fct-descr": "\u003cp\u003eThrown when an error occurs in reading a configuration file.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "data",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#ConfigFileException",
        "fct-type": "data",
        "title": "ConfigFileException"
      },
      "index": {
        "description": "Thrown when an error occurs in reading configuration file",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "ConfigFileException",
        "normalized": "",
        "package": "hslua",
        "partial": "Config File Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:closeConfig",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a configuration file.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e IO ()",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#closeConfig",
        "fct-type": "function",
        "title": "closeConfig"
      },
      "index": {
        "description": "Closes configuration file",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "closeConfig",
        "normalized": "Config-\u003eIO()",
        "package": "hslua",
        "partial": "Config",
        "signature": "Config-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getAssocList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an association list, i.e. a Lua table in which the keys\n and values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    one = \"foo\",\n    two = \"bar\",\n    three = \"baz\"\n }\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO [(String, String)]",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getAssocList",
        "fct-type": "function",
        "title": "getAssocList"
      },
      "index": {
        "description": "Returns an association list i.e Lua table in which the keys and values are strings Example someVal one foo two bar three baz",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getAssocList",
        "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
        "package": "hslua",
        "partial": "Assoc List",
        "signature": "Config-\u003eString-\u003eIO[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getBool",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a boolean value from a configuration file.  Returns \u003ccode\u003eFalse\u003c/code\u003e\n if the value is not defined in the file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = true\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getBool",
        "fct-type": "function",
        "title": "getBool"
      },
      "index": {
        "description": "Returns boolean value from configuration file Returns False if the value is not defined in the file Example someVal true",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getBool",
        "normalized": "Config-\u003eString-\u003eIO Bool",
        "package": "hslua",
        "partial": "Bool",
        "signature": "Config-\u003eString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getDouble",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a double value from a configuration file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = 3.1415926\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO (Maybe Double)",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getDouble",
        "fct-type": "function",
        "title": "getDouble"
      },
      "index": {
        "description": "Returns double value from configuration file Example someVal",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getDouble",
        "normalized": "Config-\u003eString-\u003eIO(Maybe Double)",
        "package": "hslua",
        "partial": "Double",
        "signature": "Config-\u003eString-\u003eIO(Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getInt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an integer value from a configuration file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = 2\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO (Maybe Int)",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getInt",
        "fct-type": "function",
        "title": "getInt"
      },
      "index": {
        "description": "Returns an integer value from configuration file Example someVal",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getInt",
        "normalized": "Config-\u003eString-\u003eIO(Maybe Int)",
        "package": "hslua",
        "partial": "Int",
        "signature": "Config-\u003eString-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of strings (i.e. a Lua table in which the keys\n are integers and the values are strings) from a configuration file.\n Example:\n\u003c/p\u003e\u003cpre\u003e someVal = { \"foo\", \"bar\", \"baz\" }\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO [String]",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getList",
        "fct-type": "function",
        "title": "getList"
      },
      "index": {
        "description": "Returns list of strings i.e Lua table in which the keys are integers and the values are strings from configuration file Example someVal foo bar baz",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getList",
        "normalized": "Config-\u003eString-\u003eIO[String]",
        "package": "hslua",
        "partial": "List",
        "signature": "Config-\u003eString-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getListOfAssocLists",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of association lists, i.e. a Lua table of tables.\n In the outer table, the keys are integers and the values are tables,\n and in the inner tables, the keys and values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    {\n       foo = \"aaa\",\n       bar = \"bbb\",\n       baz = \"ccc\"\n    },\n    {\n       foo = \"ddd\",\n       bar = \"eee\",\n       baz = \"fff\"\n    }\n }\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO [[(String, String)]]",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getListOfAssocLists",
        "fct-type": "function",
        "title": "getListOfAssocLists"
      },
      "index": {
        "description": "Returns list of association lists i.e Lua table of tables In the outer table the keys are integers and the values are tables and in the inner tables the keys and values are strings Example someVal foo aaa bar bbb baz ccc foo ddd bar eee baz fff",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getListOfAssocLists",
        "normalized": "Config-\u003eString-\u003eIO[[(String,String)]]",
        "package": "hslua",
        "partial": "List Of Assoc Lists",
        "signature": "Config-\u003eString-\u003eIO[[(String,String)]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getNestedAssocLists",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an association list of association lists, i.e. a Lua table\n of tables.  In the outer table, the keys are strings and the values\n are tables, and in the inner tables, the keys and values are strings.\n Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    something = {\n       foo = \"aaa\",\n       bar = \"bbb\",\n       baz = \"ccc\"\n    },\n    somethingElse = {\n       foo = \"ddd\",\n       bar = \"eee\",\n       baz = \"fff\"\n    }\n }\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO [(String, [(String, String)])]",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getNestedAssocLists",
        "fct-type": "function",
        "title": "getNestedAssocLists"
      },
      "index": {
        "description": "Returns an association list of association lists i.e Lua table of tables In the outer table the keys are strings and the values are tables and in the inner tables the keys and values are strings Example someVal something foo aaa bar bbb baz ccc somethingElse foo ddd bar eee baz fff",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getNestedAssocLists",
        "normalized": "Config-\u003eString-\u003eIO[(String,[(String,String)])]",
        "package": "hslua",
        "partial": "Nested Assoc Lists",
        "signature": "Config-\u003eString-\u003eIO[(String,[(String,String)])]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getNestedLists",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of lists, i.e. a Lua table of tables.  In the outer\n table, the keys are integers and the values are tables, and in the inner\n tables, the keys are integers and the values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    { \"foo one\", \"foo two\", \"foo three\" },\n    { \"bar one\", \"bar two\", \"bar three\" }\n }\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO [[String]]",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getNestedLists",
        "fct-type": "function",
        "title": "getNestedLists"
      },
      "index": {
        "description": "Returns list of lists i.e Lua table of tables In the outer table the keys are integers and the values are tables and in the inner tables the keys are integers and the values are strings Example someVal foo one foo two foo three bar one bar two bar three",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getNestedLists",
        "normalized": "Config-\u003eString-\u003eIO[[String]]",
        "package": "hslua",
        "partial": "Nested Lists",
        "signature": "Config-\u003eString-\u003eIO[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getString",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a string value from a configuration file.  Returns the\n empty string if the value is not defined in the file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = \"foo\"\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "Config -\u003e String -\u003e IO String",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#getString",
        "fct-type": "function",
        "title": "getString"
      },
      "index": {
        "description": "Returns string value from configuration file Returns the empty string if the value is not defined in the file Example someVal foo",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "getString",
        "normalized": "Config-\u003eString-\u003eIO String",
        "package": "hslua",
        "partial": "String",
        "signature": "Config-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:openConfig",
      "description": {
        "fct-descr": "\u003cp\u003eOpens a config file and returns an opaque reference to the file.\n You must close this reference using \u003ccode\u003eclose\u003c/code\u003e when you're done reading\n the file.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua.ConfigFile",
        "fct-package": "hslua",
        "fct-signature": "FilePath -\u003e IO Config",
        "fct-source": "src/Scripting-Lua-ConfigFile.html#openConfig",
        "fct-type": "function",
        "title": "openConfig"
      },
      "index": {
        "description": "Opens config file and returns an opaque reference to the file You must close this reference using close when you re done reading the file",
        "hierarchy": "Scripting Lua ConfigFile",
        "module": "Scripting.Lua.ConfigFile",
        "name": "openConfig",
        "normalized": "FilePath-\u003eIO Config",
        "package": "hslua",
        "partial": "Config",
        "signature": "FilePath-\u003eIO Config"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell wrapper library for a scripting language Lua.\n See \u003ccode\u003ehttp://www.lua.org/\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Scripting.Lua as Lua\n\u003c/pre\u003e\u003cp\u003eThis way we use Haskell module hierarchy to make Lua names shorter.\n Haskell functions are named after Lua functions, but the \u003ccode\u003elua_\u003c/code\u003e or\n \u003ccode\u003eluaL_\u003c/code\u003e prefix.\n\u003c/p\u003e\u003cp\u003eLua types are mapped to Haskell types as in the following table:\n\u003c/p\u003e\u003cpre\u003e int (stack index)        Int\n lua_Integer              LuaInteger\n lua_Number               LuaNumber\n int (bool result)        Bool\n const char * (string)    String\n void *                   Ptr ()\n lua_State *              LuaState\n\u003c/pre\u003e\u003cp\u003eMost functions are one-to-one mappings.\n Rare special cases are clearly marked in this document.\n\u003c/p\u003e\u003cp\u003eMinmal sample embedding:\n\u003c/p\u003e\u003cpre\u003e import qualified Scripting.Lua as Lua\n\u003c/pre\u003e\u003cpre\u003e main = do\n     l \u003c- Lua.newstate\n     Lua.openlibs l\n     Lua.callproc l \"print\" \"Hello from Lua\"\n     Lua.close l\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "module",
        "fct-source": "src/Scripting-Lua.html",
        "fct-type": "module",
        "title": "Lua"
      },
      "index": {
        "description": "Haskell wrapper library for scripting language Lua See http www.lua.org for more details This module is intended to be imported qualified eg import qualified Scripting.Lua as Lua This way we use Haskell module hierarchy to make Lua names shorter Haskell functions are named after Lua functions but the lua or luaL prefix Lua types are mapped to Haskell types as in the following table int stack index Int lua Integer LuaInteger lua Number LuaNumber int bool result Bool const char string String void Ptr lua State LuaState Most functions are one-to-one mappings Rare special cases are clearly marked in this document Minmal sample embedding import qualified Scripting.Lua as Lua main do Lua.newstate Lua.openlibs Lua.callproc print Hello from Lua Lua.close",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "Lua",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:GCCONTROL",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration used by \u003ccode\u003egc\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "data",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "data",
        "title": "GCCONTROL"
      },
      "index": {
        "description": "Enumeration used by gc function",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCCONTROL",
        "normalized": "",
        "package": "hslua",
        "partial": "GCCONTROL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LTYPE",
      "description": {
        "fct-descr": "\u003cp\u003eEnumeration used as type tag. See \u003ccode\u003elua_type\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "data",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "data",
        "title": "LTYPE"
      },
      "index": {
        "description": "Enumeration used as type tag See lua type in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LTYPE",
        "normalized": "",
        "package": "hslua",
        "partial": "LTYPE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaCFunction",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003elua_CFunction\u003c/code\u003e. See \u003ccode\u003elua_CFunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "type",
        "fct-source": "src/Scripting-Lua.html#LuaCFunction",
        "fct-type": "type",
        "title": "LuaCFunction"
      },
      "index": {
        "description": "Wrapper for lua CFunction See lua CFunction in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaCFunction",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua CFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaImport",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "class",
        "fct-source": "src/Scripting-Lua.html#LuaImport",
        "fct-type": "class",
        "title": "LuaImport"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaImport",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaInteger",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003elua_Integer\u003c/code\u003e. See \u003ccode\u003elua_Integer\u003c/code\u003e in Lua Reference Manual.\n HsLua uses C \u003ccode\u003eptrdiff_t\u003c/code\u003e as \u003ccode\u003elua_Integer\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "type",
        "fct-source": "src/Scripting-Lua.html#LuaInteger",
        "fct-type": "type",
        "title": "LuaInteger"
      },
      "index": {
        "description": "Wrapper for lua Integer See lua Integer in Lua Reference Manual HsLua uses ptrdiff as lua Integer",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaInteger",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaNumber",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003elua_Number\u003c/code\u003e. See \u003ccode\u003elua_Number\u003c/code\u003e in Lua Reference Manual.\n HsLua uses C \u003ccode\u003edouble\u003c/code\u003e as \u003ccode\u003elua_Integer\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "type",
        "fct-source": "src/Scripting-Lua.html#LuaNumber",
        "fct-type": "type",
        "title": "LuaNumber"
      },
      "index": {
        "description": "Wrapper for lua Number See lua Number in Lua Reference Manual HsLua uses double as lua Integer",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaNumber",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaState",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003elua_State *\u003c/code\u003e. See \u003ccode\u003elua_State\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "newtype",
        "fct-source": "src/Scripting-Lua.html#LuaState",
        "fct-type": "newtype",
        "title": "LuaState"
      },
      "index": {
        "description": "Wrapper for lua State See lua State in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaState",
        "normalized": "",
        "package": "hslua",
        "partial": "Lua State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:StackValue",
      "description": {
        "fct-descr": "\u003cp\u003eA value that can be pushed and poped from the Lua stack.\n All instances are natural, except following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eLuaState\u003c/code\u003e push ignores its argument, pushes current state\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e()\u003c/code\u003e push ignores its argument, just pushes nil\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ePtr ()\u003c/code\u003e pushes light user data, peek checks for lightuserdata or userdata\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "class",
        "fct-source": "src/Scripting-Lua.html#StackValue",
        "fct-type": "class",
        "title": "StackValue"
      },
      "index": {
        "description": "value that can be pushed and poped from the Lua stack All instances are natural except following LuaState push ignores its argument pushes current state push ignores its argument just pushes nil Ptr pushes light user data peek checks for lightuserdata or userdata",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "StackValue",
        "normalized": "",
        "package": "hslua",
        "partial": "Stack Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOLLECT",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCCOLLECT",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCCOLLECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCCOLLECT",
        "normalized": "",
        "package": "hslua",
        "partial": "GCCOLLECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOUNT",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCCOUNT",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCCOUNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCCOUNT",
        "normalized": "",
        "package": "hslua",
        "partial": "GCCOUNT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOUNTB",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCCOUNTB",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCCOUNTB"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCCOUNTB",
        "normalized": "",
        "package": "hslua",
        "partial": "GCCOUNTB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCRESTART",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCRESTART",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCRESTART"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCRESTART",
        "normalized": "",
        "package": "hslua",
        "partial": "GCRESTART",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSETPAUSE",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCSETPAUSE",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCSETPAUSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCSETPAUSE",
        "normalized": "",
        "package": "hslua",
        "partial": "GCSETPAUSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSETSTEPMUL",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCSETSTEPMUL",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCSETSTEPMUL"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCSETSTEPMUL",
        "normalized": "",
        "package": "hslua",
        "partial": "GCSETSTEPMUL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSTEP",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCSTEP",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCSTEP"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCSTEP",
        "normalized": "",
        "package": "hslua",
        "partial": "GCSTEP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSTOP",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "GCSTOP",
        "fct-source": "src/Scripting-Lua.html#GCCONTROL",
        "fct-type": "function",
        "title": "GCSTOP"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "GCSTOP",
        "normalized": "",
        "package": "hslua",
        "partial": "GCSTOP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:LuaState",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState (Ptr ())",
        "fct-source": "src/Scripting-Lua.html#LuaState",
        "fct-type": "function",
        "title": "LuaState"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "LuaState",
        "normalized": "LuaState(Ptr())",
        "package": "hslua",
        "partial": "Lua State",
        "signature": "LuaState(Ptr())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TBOOLEAN",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TBOOLEAN",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TBOOLEAN"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TBOOLEAN",
        "normalized": "",
        "package": "hslua",
        "partial": "TBOOLEAN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TFUNCTION",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TFUNCTION",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TFUNCTION"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TFUNCTION",
        "normalized": "",
        "package": "hslua",
        "partial": "TFUNCTION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TLIGHTUSERDATA",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TLIGHTUSERDATA",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TLIGHTUSERDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TLIGHTUSERDATA",
        "normalized": "",
        "package": "hslua",
        "partial": "TLIGHTUSERDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNIL",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TNIL",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TNIL"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TNIL",
        "normalized": "",
        "package": "hslua",
        "partial": "TNIL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNONE",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TNONE",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TNONE"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TNONE",
        "normalized": "",
        "package": "hslua",
        "partial": "TNONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNUMBER",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TNUMBER",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TNUMBER"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TNUMBER",
        "normalized": "",
        "package": "hslua",
        "partial": "TNUMBER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TSTRING",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TSTRING",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TSTRING"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TSTRING",
        "normalized": "",
        "package": "hslua",
        "partial": "TSTRING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TTABLE",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TTABLE",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TTABLE"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TTABLE",
        "normalized": "",
        "package": "hslua",
        "partial": "TTABLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TTHREAD",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TTHREAD",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TTHREAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TTHREAD",
        "normalized": "",
        "package": "hslua",
        "partial": "TTHREAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TUSERDATA",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "TUSERDATA",
        "fct-source": "src/Scripting-Lua.html#LTYPE",
        "fct-type": "function",
        "title": "TUSERDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "TUSERDATA",
        "normalized": "",
        "package": "hslua",
        "partial": "TUSERDATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:argerror",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eluaL_argerror\u003c/code\u003e in Lua Reference Manual. Contrary to the \n manual, Haskell function does return with value less than zero.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e String -\u003e IO CInt",
        "fct-source": "src/Scripting-Lua.html#argerror",
        "fct-type": "function",
        "title": "argerror"
      },
      "index": {
        "description": "See luaL argerror in Lua Reference Manual Contrary to the manual Haskell function does return with value less than zero",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "argerror",
        "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO CInt",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:atpanic",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_atpanic\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e IO (FunPtr LuaCFunction)",
        "fct-source": "src/Scripting-Lua.html#atpanic",
        "fct-type": "function",
        "title": "atpanic"
      },
      "index": {
        "description": "See lua atpanic in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "atpanic",
        "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO(FunPtr LuaCFunction)",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO(FunPtr LuaCFunction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_call\u003c/code\u003e and \u003ccode\u003elua_call\u003c/code\u003e in Lua Reference Manual. This is \n a wrapper over \u003ccode\u003elua_pcall\u003c/code\u003e, as \u003ccode\u003elua_call\u003c/code\u003e is unsafe in controlled environment\n like Haskell VM.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "See lua call and lua call in Lua Reference Manual This is wrapper over lua pcall as lua call is unsafe in controlled environment like Haskell VM",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "call",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:callfunc",
      "description": {
        "fct-descr": "\u003cp\u003eCall a Lua function. Use as:\n\u003c/p\u003e\u003cpre\u003e Just v \u003c- callfunc l \"proc\" \"abc\" (1::Int) (5.0::Double)\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e a",
        "fct-source": "src/Scripting-Lua.html#callfunc",
        "fct-type": "function",
        "title": "callfunc"
      },
      "index": {
        "description": "Call Lua function Use as Just callfunc proc abc Int Double",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "callfunc",
        "normalized": "LuaState-\u003eString-\u003ea",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:callproc",
      "description": {
        "fct-descr": "\u003cp\u003eCall a Lua procedure. Use as:\n\u003c/p\u003e\u003cpre\u003e callproc l \"proc\" \"abc\" (1::Int) (5.0::Double)\n\u003c/pre\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e a",
        "fct-source": "src/Scripting-Lua.html#callproc",
        "fct-type": "function",
        "title": "callproc"
      },
      "index": {
        "description": "Call Lua procedure Use as callproc proc abc Int Double",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "callproc",
        "normalized": "LuaState-\u003eString-\u003ea",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:checkstack",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_checkstack\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#checkstack",
        "fct-type": "function",
        "title": "checkstack"
      },
      "index": {
        "description": "See lua checkstack in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "checkstack",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_close\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "See lua close in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "close",
        "normalized": "LuaState-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_concat\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "See lua concat in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "concat",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:cpcall",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_cpcall\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e Ptr a -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#cpcall",
        "fct-type": "function",
        "title": "cpcall"
      },
      "index": {
        "description": "See lua cpcall in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "cpcall",
        "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003ePtr a-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003ePtr a-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:createtable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_createtable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#createtable",
        "fct-type": "function",
        "title": "createtable"
      },
      "index": {
        "description": "See lua createtable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "createtable",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:dump",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO String",
        "fct-source": "src/Scripting-Lua.html#dump",
        "fct-type": "function",
        "title": "dump"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "dump",
        "normalized": "LuaState-\u003eIO String",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:environindex",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eLUA_ENVIRONINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int",
        "fct-source": "src/Scripting-Lua.html#environindex",
        "fct-type": "function",
        "title": "environindex"
      },
      "index": {
        "description": "See LUA ENVIRONINDEX in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "environindex",
        "normalized": "",
        "package": "hslua",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:equal",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_equal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#equal",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "See lua equal in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "equal",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:freecfunction",
      "description": {
        "fct-descr": "\u003cp\u003eFree function pointer created with \u003ccode\u003enewcfunction\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "FunPtr LuaCFunction -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#freecfunction",
        "fct-type": "function",
        "title": "freecfunction"
      },
      "index": {
        "description": "Free function pointer created with newcfunction",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "freecfunction",
        "normalized": "FunPtr LuaCFunction-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "FunPtr LuaCFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gc",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_error\u003c/code\u003e in Lua Reference Manual.\nerror :: LuaState -\u003e IO Int\nerror l = liftM fromIntegral (c_lua_error l)\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003elua_gc\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e GCCONTROL -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#gc",
        "fct-type": "function",
        "title": "gc"
      },
      "index": {
        "description": "See lua error in Lua Reference Manual error LuaState IO Int error liftM fromIntegral lua error See lua gc in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "gc",
        "normalized": "LuaState-\u003eGCCONTROL-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eGCCONTROL-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getfenv",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_getfenv\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#getfenv",
        "fct-type": "function",
        "title": "getfenv"
      },
      "index": {
        "description": "See lua getfenv in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getfenv",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getfield",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_getfield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#getfield",
        "fct-type": "function",
        "title": "getfield"
      },
      "index": {
        "description": "See lua getfield in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getfield",
        "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getglobal",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_getglobal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#getglobal",
        "fct-type": "function",
        "title": "getglobal"
      },
      "index": {
        "description": "See lua getglobal in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getglobal",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getglobal2",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003egetglobal\u003c/code\u003e, but knows about packages. e. g.\n\u003c/p\u003e\u003cpre\u003e getglobal l \"math.sin\"\n\u003c/pre\u003e\u003cp\u003ereturns correct result\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#getglobal2",
        "fct-type": "function",
        "title": "getglobal2"
      },
      "index": {
        "description": "Like getglobal but knows about packages getglobal math.sin returns correct result",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getglobal2",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getmetatable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_getmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#getmetatable",
        "fct-type": "function",
        "title": "getmetatable"
      },
      "index": {
        "description": "See lua getmetatable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getmetatable",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gettable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_gettable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#gettable",
        "fct-type": "function",
        "title": "gettable"
      },
      "index": {
        "description": "See lua gettable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "gettable",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gettop",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_gettop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#gettop",
        "fct-type": "function",
        "title": "gettop"
      },
      "index": {
        "description": "See lua gettop in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "gettop",
        "normalized": "LuaState-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getupvalue",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_getupvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO String",
        "fct-source": "src/Scripting-Lua.html#getupvalue",
        "fct-type": "function",
        "title": "getupvalue"
      },
      "index": {
        "description": "See lua getupvalue in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "getupvalue",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:globalsindex",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eLUA_GLOBALSINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int",
        "fct-source": "src/Scripting-Lua.html#globalsindex",
        "fct-type": "function",
        "title": "globalsindex"
      },
      "index": {
        "description": "See LUA GLOBALSINDEX in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "globalsindex",
        "normalized": "",
        "package": "hslua",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_insert\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "See lua insert in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "insert",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isboolean",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isboolean",
        "fct-type": "function",
        "title": "isboolean"
      },
      "index": {
        "description": "See lua isboolean in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isboolean",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:iscfunction",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_iscfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#iscfunction",
        "fct-type": "function",
        "title": "iscfunction"
      },
      "index": {
        "description": "See lua iscfunction in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "iscfunction",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isfunction",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isfunction",
        "fct-type": "function",
        "title": "isfunction"
      },
      "index": {
        "description": "See lua isfunction in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isfunction",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:islightuserdata",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_islightuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#islightuserdata",
        "fct-type": "function",
        "title": "islightuserdata"
      },
      "index": {
        "description": "See lua islightuserdata in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "islightuserdata",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isnil",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isnil\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isnil",
        "fct-type": "function",
        "title": "isnil"
      },
      "index": {
        "description": "See lua isnil in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isnil",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isnumber",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isnumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isnumber",
        "fct-type": "function",
        "title": "isnumber"
      },
      "index": {
        "description": "See lua isnumber in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isnumber",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isstring",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isstring",
        "fct-type": "function",
        "title": "isstring"
      },
      "index": {
        "description": "See lua isstring in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isstring",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:istable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_istable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#istable",
        "fct-type": "function",
        "title": "istable"
      },
      "index": {
        "description": "See lua istable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "istable",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isthread",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isthread",
        "fct-type": "function",
        "title": "isthread"
      },
      "index": {
        "description": "See lua isthread in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isthread",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isuserdata",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_isuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#isuserdata",
        "fct-type": "function",
        "title": "isuserdata"
      },
      "index": {
        "description": "See lua isuserdata in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "isuserdata",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:lessthan",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_lessthan\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#lessthan",
        "fct-type": "function",
        "title": "lessthan"
      },
      "index": {
        "description": "See lua lessthan in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "lessthan",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:loadfile",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eluaL_loadfile\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#loadfile",
        "fct-type": "function",
        "title": "loadfile"
      },
      "index": {
        "description": "See luaL loadfile in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "loadfile",
        "normalized": "LuaState-\u003eString-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:loadstring",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eluaL_loadstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e String -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#loadstring",
        "fct-type": "function",
        "title": "loadstring"
      },
      "index": {
        "description": "See luaL loadstring in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "loadstring",
        "normalized": "LuaState-\u003eString-\u003eString-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:ltype",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_type\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO LTYPE",
        "fct-source": "src/Scripting-Lua.html#ltype",
        "fct-type": "function",
        "title": "ltype"
      },
      "index": {
        "description": "See lua type in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "ltype",
        "normalized": "LuaState-\u003eInt-\u003eIO LTYPE",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO LTYPE"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimport",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Haskell function to Lua function. Any Haskell function\n can be converted provided that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e all arguments are instances of StackValue\n   * return type is IO t, where t is an instance of StackValue\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny Haskell exception will be converted to a string and returned\n as Lua error.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "a -\u003e LuaCFunction",
        "fct-source": "src/Scripting-Lua.html#luaimport",
        "fct-type": "function",
        "title": "luaimport"
      },
      "index": {
        "description": "Convert Haskell function to Lua function Any Haskell function can be converted provided that all arguments are instances of StackValue return type is IO where is an instance of StackValue Any Haskell exception will be converted to string and returned as Lua error",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "luaimport",
        "normalized": "a-\u003eLuaCFunction",
        "package": "hslua",
        "partial": "",
        "signature": "a-\u003eLuaCFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimport-39-",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int -\u003e a -\u003e LuaCFunction",
        "fct-source": "src/Scripting-Lua.html#luaimport%27",
        "fct-type": "method",
        "title": "luaimport'"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "luaimport'",
        "normalized": "Int-\u003ea-\u003eLuaCFunction",
        "package": "hslua",
        "partial": "",
        "signature": "Int-\u003ea-\u003eLuaCFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimportargerror",
      "description": {
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e LuaCFunction",
        "fct-source": "src/Scripting-Lua.html#luaimportargerror",
        "fct-type": "method",
        "title": "luaimportargerror"
      },
      "index": {
        "description": "",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "luaimportargerror",
        "normalized": "Int-\u003eString-\u003ea-\u003eLuaCFunction",
        "package": "hslua",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003eLuaCFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:multret",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eLUA_MULTRET\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int",
        "fct-source": "src/Scripting-Lua.html#multret",
        "fct-type": "function",
        "title": "multret"
      },
      "index": {
        "description": "See LUA MULTRET in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "multret",
        "normalized": "",
        "package": "hslua",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newcfunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate new foreign Lua function. Function created can be called\n by Lua engine. Remeber to free the pointer with \u003ccode\u003efreecfunction\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "a -\u003e IO (FunPtr LuaCFunction)",
        "fct-source": "src/Scripting-Lua.html#newcfunction",
        "fct-type": "function",
        "title": "newcfunction"
      },
      "index": {
        "description": "Create new foreign Lua function Function created can be called by Lua engine Remeber to free the pointer with freecfunction",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newcfunction",
        "normalized": "a-\u003eIO(FunPtr LuaCFunction)",
        "package": "hslua",
        "partial": "",
        "signature": "a-\u003eIO(FunPtr LuaCFunction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newmetatable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eluaL_newmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#newmetatable",
        "fct-type": "function",
        "title": "newmetatable"
      },
      "index": {
        "description": "See luaL newmetatable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newmetatable",
        "normalized": "LuaState-\u003eString-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newstate",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_newstate\u003c/code\u003e and \u003ccode\u003eluaL_newstate\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "IO LuaState",
        "fct-source": "src/Scripting-Lua.html#newstate",
        "fct-type": "function",
        "title": "newstate"
      },
      "index": {
        "description": "See lua newstate and luaL newstate in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newstate",
        "normalized": "",
        "package": "hslua",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newtable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_newtable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#newtable",
        "fct-type": "function",
        "title": "newtable"
      },
      "index": {
        "description": "See lua newtable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newtable",
        "normalized": "LuaState-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newthread",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_newthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO LuaState",
        "fct-source": "src/Scripting-Lua.html#newthread",
        "fct-type": "function",
        "title": "newthread"
      },
      "index": {
        "description": "See lua newthread in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newthread",
        "normalized": "LuaState-\u003eIO LuaState",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO LuaState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newuserdata",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_newuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO (Ptr ())",
        "fct-source": "src/Scripting-Lua.html#newuserdata",
        "fct-type": "function",
        "title": "newuserdata"
      },
      "index": {
        "description": "See lua newuserdata in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "newuserdata",
        "normalized": "LuaState-\u003eInt-\u003eIO(Ptr())",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO(Ptr())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_next\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "See lua next in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "next",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:objlen",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_objlen\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#objlen",
        "fct-type": "function",
        "title": "objlen"
      },
      "index": {
        "description": "See lua objlen in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "objlen",
        "normalized": "LuaState-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:openlibs",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eluaL_openlibs\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#openlibs",
        "fct-type": "function",
        "title": "openlibs"
      },
      "index": {
        "description": "See luaL openlibs in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "openlibs",
        "normalized": "LuaState-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pcall",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pcall\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#pcall",
        "fct-type": "function",
        "title": "pcall"
      },
      "index": {
        "description": "See lua pcall in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pcall",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if at index \u003ccode\u003en\u003c/code\u003e there is a convertible Lua value and if so return it\n wrapped in \u003ccode\u003eJust\u003c/code\u003e. Return \u003ccode\u003eNothing\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO (Maybe a)",
        "fct-source": "src/Scripting-Lua.html#peek",
        "fct-type": "method",
        "title": "peek"
      },
      "index": {
        "description": "Check if at index there is convertible Lua value and if so return it wrapped in Just Return Nothing otherwise",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "peek",
        "normalized": "LuaState-\u003eInt-\u003eIO(Maybe a)",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "See lua pop in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pop",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePushes a value onto Lua stack, casting it into meaningfully nearest Lua type.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e a -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "Pushes value onto Lua stack casting it into meaningfully nearest Lua type",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "push",
        "normalized": "LuaState-\u003ea-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushboolean",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Bool -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushboolean",
        "fct-type": "function",
        "title": "pushboolean"
      },
      "index": {
        "description": "See lua pushboolean in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushboolean",
        "normalized": "LuaState-\u003eBool-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushcclosure",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushcclosure\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushcclosure",
        "fct-type": "function",
        "title": "pushcclosure"
      },
      "index": {
        "description": "See lua pushcclosure in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushcclosure",
        "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushcfunction",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushcfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushcfunction",
        "fct-type": "function",
        "title": "pushcfunction"
      },
      "index": {
        "description": "See lua pushcfunction in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushcfunction",
        "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushhsfunction",
      "description": {
        "fct-descr": "\u003cp\u003ePushes Haskell function converted to a Lua function.\n All values created will be garbage collected. Use as:\n\u003c/p\u003e\u003cpre\u003e Lua.pushhsfunction l myfun\n Lua.setglobal l \"myfun\"\n\u003c/pre\u003e\u003cp\u003eYou are not allowed to use \u003ccode\u003elua_error\u003c/code\u003e anywhere, but\n use an error code of (-1) to the same effect. Push\n error message as the sole return value.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e a -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushhsfunction",
        "fct-type": "function",
        "title": "pushhsfunction"
      },
      "index": {
        "description": "Pushes Haskell function converted to Lua function All values created will be garbage collected Use as Lua.pushhsfunction myfun Lua.setglobal myfun You are not allowed to use lua error anywhere but use an error code of to the same effect Push error message as the sole return value",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushhsfunction",
        "normalized": "LuaState-\u003ea-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushinteger",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushinteger\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e LuaInteger -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushinteger",
        "fct-type": "function",
        "title": "pushinteger"
      },
      "index": {
        "description": "See lua pushinteger in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushinteger",
        "normalized": "LuaState-\u003eLuaInteger-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eLuaInteger-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushlightuserdata",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushlightuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Ptr a -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushlightuserdata",
        "fct-type": "function",
        "title": "pushlightuserdata"
      },
      "index": {
        "description": "See lua pushlightuserdata in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushlightuserdata",
        "normalized": "LuaState-\u003ePtr a-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003ePtr a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushnil",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushnil\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushnil",
        "fct-type": "function",
        "title": "pushnil"
      },
      "index": {
        "description": "See lua pushnil in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushnil",
        "normalized": "LuaState-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushnumber",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushnumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e LuaNumber -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushnumber",
        "fct-type": "function",
        "title": "pushnumber"
      },
      "index": {
        "description": "See lua pushnumber in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushnumber",
        "normalized": "LuaState-\u003eLuaNumber-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eLuaNumber-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushstring",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushstring",
        "fct-type": "function",
        "title": "pushstring"
      },
      "index": {
        "description": "See lua pushstring in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushstring",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushthread",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#pushthread",
        "fct-type": "function",
        "title": "pushthread"
      },
      "index": {
        "description": "See lua pushthread in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushthread",
        "normalized": "LuaState-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushvalue",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_pushvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#pushvalue",
        "fct-type": "function",
        "title": "pushvalue"
      },
      "index": {
        "description": "See lua pushvalue in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "pushvalue",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawequal",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_rawequal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#rawequal",
        "fct-type": "function",
        "title": "rawequal"
      },
      "index": {
        "description": "See lua rawequal in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "rawequal",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawget",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_rawget\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#rawget",
        "fct-type": "function",
        "title": "rawget"
      },
      "index": {
        "description": "See lua rawget in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "rawget",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawgeti",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_rawgeti\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#rawgeti",
        "fct-type": "function",
        "title": "rawgeti"
      },
      "index": {
        "description": "See lua rawgeti in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "rawgeti",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawset",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_rawset\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#rawset",
        "fct-type": "function",
        "title": "rawset"
      },
      "index": {
        "description": "See lua rawset in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "rawset",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawseti",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_rawseti\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#rawseti",
        "fct-type": "function",
        "title": "rawseti"
      },
      "index": {
        "description": "See lua rawseti in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "rawseti",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:register",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_register\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e FunPtr LuaCFunction -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#register",
        "fct-type": "function",
        "title": "register"
      },
      "index": {
        "description": "See lua register in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "register",
        "normalized": "LuaState-\u003eString-\u003eFunPtr LuaCFunction-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eFunPtr LuaCFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:registerhsfunction",
      "description": {
        "fct-descr": "\u003cp\u003eImports a Haskell function and registers it at global name.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e a -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#registerhsfunction",
        "fct-type": "function",
        "title": "registerhsfunction"
      },
      "index": {
        "description": "Imports Haskell function and registers it at global name",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "registerhsfunction",
        "normalized": "LuaState-\u003eString-\u003ea-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:registryindex",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003eLUA_REGISTRYINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int",
        "fct-source": "src/Scripting-Lua.html#registryindex",
        "fct-type": "function",
        "title": "registryindex"
      },
      "index": {
        "description": "See LUA REGISTRYINDEX in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "registryindex",
        "normalized": "",
        "package": "hslua",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:remove",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_remove\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#remove",
        "fct-type": "function",
        "title": "remove"
      },
      "index": {
        "description": "See lua remove in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "remove",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_replace\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "See lua replace in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "replace",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:resume",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_resume\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#resume",
        "fct-type": "function",
        "title": "resume"
      },
      "index": {
        "description": "See lua resume in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "resume",
        "normalized": "LuaState-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setfenv",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_setfenv\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#setfenv",
        "fct-type": "function",
        "title": "setfenv"
      },
      "index": {
        "description": "See lua setfenv in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "setfenv",
        "normalized": "LuaState-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setfield",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_setfield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#setfield",
        "fct-type": "function",
        "title": "setfield"
      },
      "index": {
        "description": "See lua setfield in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "setfield",
        "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setglobal",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_setglobal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e String -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#setglobal",
        "fct-type": "function",
        "title": "setglobal"
      },
      "index": {
        "description": "See lua setglobal in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "setglobal",
        "normalized": "LuaState-\u003eString-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setmetatable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_setmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#setmetatable",
        "fct-type": "function",
        "title": "setmetatable"
      },
      "index": {
        "description": "See lua setmetatable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "setmetatable",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:settable",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_settable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#settable",
        "fct-type": "function",
        "title": "settable"
      },
      "index": {
        "description": "See lua settable in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "settable",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:settop",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_settop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#settop",
        "fct-type": "function",
        "title": "settop"
      },
      "index": {
        "description": "See lua settop in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "settop",
        "normalized": "LuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setupvalue",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_setupvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e Int -\u003e IO String",
        "fct-source": "src/Scripting-Lua.html#setupvalue",
        "fct-type": "function",
        "title": "setupvalue"
      },
      "index": {
        "description": "See lua setupvalue in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "setupvalue",
        "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_status\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "See lua status in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "status",
        "normalized": "LuaState-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:toboolean",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_toboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Bool",
        "fct-source": "src/Scripting-Lua.html#toboolean",
        "fct-type": "function",
        "title": "toboolean"
      },
      "index": {
        "description": "See lua toboolean in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "toboolean",
        "normalized": "LuaState-\u003eInt-\u003eIO Bool",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tocfunction",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_tocfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO (FunPtr LuaCFunction)",
        "fct-source": "src/Scripting-Lua.html#tocfunction",
        "fct-type": "function",
        "title": "tocfunction"
      },
      "index": {
        "description": "See lua tocfunction in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "tocfunction",
        "normalized": "LuaState-\u003eInt-\u003eIO(FunPtr LuaCFunction)",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO(FunPtr LuaCFunction)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tointeger",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_tointeger\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO LuaInteger",
        "fct-source": "src/Scripting-Lua.html#tointeger",
        "fct-type": "function",
        "title": "tointeger"
      },
      "index": {
        "description": "See lua tointeger in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "tointeger",
        "normalized": "LuaState-\u003eInt-\u003eIO LuaInteger",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO LuaInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tonumber",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_tonumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO CDouble",
        "fct-source": "src/Scripting-Lua.html#tonumber",
        "fct-type": "function",
        "title": "tonumber"
      },
      "index": {
        "description": "See lua tonumber in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "tonumber",
        "normalized": "LuaState-\u003eInt-\u003eIO CDouble",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO CDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:topointer",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_topointer\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO (Ptr ())",
        "fct-source": "src/Scripting-Lua.html#topointer",
        "fct-type": "function",
        "title": "topointer"
      },
      "index": {
        "description": "See lua topointer in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "topointer",
        "normalized": "LuaState-\u003eInt-\u003eIO(Ptr())",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO(Ptr())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tostring",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_tostring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO String",
        "fct-source": "src/Scripting-Lua.html#tostring",
        "fct-type": "function",
        "title": "tostring"
      },
      "index": {
        "description": "See lua tostring in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "tostring",
        "normalized": "LuaState-\u003eInt-\u003eIO String",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tothread",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_tothread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO LuaState",
        "fct-source": "src/Scripting-Lua.html#tothread",
        "fct-type": "function",
        "title": "tothread"
      },
      "index": {
        "description": "See lua tothread in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "tothread",
        "normalized": "LuaState-\u003eInt-\u003eIO LuaState",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO LuaState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:touserdata",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_touserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO (Ptr a)",
        "fct-source": "src/Scripting-Lua.html#touserdata",
        "fct-type": "function",
        "title": "touserdata"
      },
      "index": {
        "description": "See lua touserdata in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "touserdata",
        "normalized": "LuaState-\u003eInt-\u003eIO(Ptr a)",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO(Ptr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:typename",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_typename\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e LTYPE -\u003e IO String",
        "fct-source": "src/Scripting-Lua.html#typename",
        "fct-type": "function",
        "title": "typename"
      },
      "index": {
        "description": "See lua typename in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "typename",
        "normalized": "LuaState-\u003eLTYPE-\u003eIO String",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eLTYPE-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:upvalueindex",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_upvalueindex\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Scripting-Lua.html#upvalueindex",
        "fct-type": "function",
        "title": "upvalueindex"
      },
      "index": {
        "description": "See lua upvalueindex in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "upvalueindex",
        "normalized": "Int-\u003eInt",
        "package": "hslua",
        "partial": "",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:valuetype",
      "description": {
        "fct-descr": "\u003cp\u003eLua type id code of the vaule expected. Parameter is unused.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "a -\u003e LTYPE",
        "fct-source": "src/Scripting-Lua.html#valuetype",
        "fct-type": "method",
        "title": "valuetype"
      },
      "index": {
        "description": "Lua type id code of the vaule expected Parameter is unused",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "valuetype",
        "normalized": "a-\u003eLTYPE",
        "package": "hslua",
        "partial": "",
        "signature": "a-\u003eLTYPE"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:xmove",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_xmove\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e LuaState -\u003e Int -\u003e IO ()",
        "fct-source": "src/Scripting-Lua.html#xmove",
        "fct-type": "function",
        "title": "xmove"
      },
      "index": {
        "description": "See lua xmove in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "xmove",
        "normalized": "LuaState-\u003eLuaState-\u003eInt-\u003eIO()",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eLuaState-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003elua_yield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
        "fct-module": "Scripting.Lua",
        "fct-package": "hslua",
        "fct-signature": "LuaState -\u003e Int -\u003e IO Int",
        "fct-source": "src/Scripting-Lua.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "See lua yield in Lua Reference Manual",
        "hierarchy": "Scripting Lua",
        "module": "Scripting.Lua",
        "name": "yield",
        "normalized": "LuaState-\u003eInt-\u003eIO Int",
        "package": "hslua",
        "partial": "",
        "signature": "LuaState-\u003eInt-\u003eIO Int"
      }
    }
  }
]