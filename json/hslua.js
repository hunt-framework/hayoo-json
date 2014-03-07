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
        "word": "hslua"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReads configuration files written in Lua.  See \u003ccode\u003ehttp://www.lua.org/\u003c/code\u003e\n for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "ConfigFile",
          "package": "hslua",
          "source": "src/Scripting-Lua-ConfigFile.html",
          "type": "module"
        },
        "index": {
          "description": "Reads configuration files written in Lua See http www.lua.org for more details",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "ConfigFile",
          "package": "hslua",
          "partial": "Config File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an open configuration file.\n\u003c/p\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "Config",
          "package": "hslua",
          "source": "src/Scripting-Lua-ConfigFile.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Represents an open configuration file",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "Config",
          "package": "hslua",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrown when an error occurs in reading a configuration file.\n\u003c/p\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "ConfigFileException",
          "package": "hslua",
          "source": "src/Scripting-Lua-ConfigFile.html#ConfigFileException",
          "type": "data"
        },
        "index": {
          "description": "Thrown when an error occurs in reading configuration file",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "ConfigFileException",
          "package": "hslua",
          "partial": "Config File Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#t:ConfigFileException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a configuration file.\n\u003c/p\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "closeConfig",
          "package": "hslua",
          "signature": "Config -\u003e IO ()",
          "source": "src/Scripting-Lua-ConfigFile.html#closeConfig",
          "type": "function"
        },
        "index": {
          "description": "Closes configuration file",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "closeConfig",
          "normalized": "Config-\u003eIO()",
          "package": "hslua",
          "partial": "Config",
          "signature": "Config-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:closeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an association list, i.e. a Lua table in which the keys\n and values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    one = \"foo\",\n    two = \"bar\",\n    three = \"baz\"\n }\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getAssocList",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO [(String, String)]",
          "source": "src/Scripting-Lua-ConfigFile.html#getAssocList",
          "type": "function"
        },
        "index": {
          "description": "Returns an association list i.e Lua table in which the keys and values are strings Example someVal one foo two bar three baz",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getAssocList",
          "normalized": "Config-\u003eString-\u003eIO[(String,String)]",
          "package": "hslua",
          "partial": "Assoc List",
          "signature": "Config-\u003eString-\u003eIO[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getAssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a boolean value from a configuration file.  Returns \u003ccode\u003eFalse\u003c/code\u003e\n if the value is not defined in the file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = true\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getBool",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO Bool",
          "source": "src/Scripting-Lua-ConfigFile.html#getBool",
          "type": "function"
        },
        "index": {
          "description": "Returns boolean value from configuration file Returns False if the value is not defined in the file Example someVal true",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getBool",
          "normalized": "Config-\u003eString-\u003eIO Bool",
          "package": "hslua",
          "partial": "Bool",
          "signature": "Config-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a double value from a configuration file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = 3.1415926\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getDouble",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO (Maybe Double)",
          "source": "src/Scripting-Lua-ConfigFile.html#getDouble",
          "type": "function"
        },
        "index": {
          "description": "Returns double value from configuration file Example someVal",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getDouble",
          "normalized": "Config-\u003eString-\u003eIO(Maybe Double)",
          "package": "hslua",
          "partial": "Double",
          "signature": "Config-\u003eString-\u003eIO(Maybe Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an integer value from a configuration file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = 2\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getInt",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO (Maybe Int)",
          "source": "src/Scripting-Lua-ConfigFile.html#getInt",
          "type": "function"
        },
        "index": {
          "description": "Returns an integer value from configuration file Example someVal",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getInt",
          "normalized": "Config-\u003eString-\u003eIO(Maybe Int)",
          "package": "hslua",
          "partial": "Int",
          "signature": "Config-\u003eString-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of strings (i.e. a Lua table in which the keys\n are integers and the values are strings) from a configuration file.\n Example:\n\u003c/p\u003e\u003cpre\u003e someVal = { \"foo\", \"bar\", \"baz\" }\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getList",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO [String]",
          "source": "src/Scripting-Lua-ConfigFile.html#getList",
          "type": "function"
        },
        "index": {
          "description": "Returns list of strings i.e Lua table in which the keys are integers and the values are strings from configuration file Example someVal foo bar baz",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getList",
          "normalized": "Config-\u003eString-\u003eIO[String]",
          "package": "hslua",
          "partial": "List",
          "signature": "Config-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of association lists, i.e. a Lua table of tables.\n In the outer table, the keys are integers and the values are tables,\n and in the inner tables, the keys and values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    {\n       foo = \"aaa\",\n       bar = \"bbb\",\n       baz = \"ccc\"\n    },\n    {\n       foo = \"ddd\",\n       bar = \"eee\",\n       baz = \"fff\"\n    }\n }\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getListOfAssocLists",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO [[(String, String)]]",
          "source": "src/Scripting-Lua-ConfigFile.html#getListOfAssocLists",
          "type": "function"
        },
        "index": {
          "description": "Returns list of association lists i.e Lua table of tables In the outer table the keys are integers and the values are tables and in the inner tables the keys and values are strings Example someVal foo aaa bar bbb baz ccc foo ddd bar eee baz fff",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getListOfAssocLists",
          "normalized": "Config-\u003eString-\u003eIO[[(String,String)]]",
          "package": "hslua",
          "partial": "List Of Assoc Lists",
          "signature": "Config-\u003eString-\u003eIO[[(String,String)]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getListOfAssocLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an association list of association lists, i.e. a Lua table\n of tables.  In the outer table, the keys are strings and the values\n are tables, and in the inner tables, the keys and values are strings.\n Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    something = {\n       foo = \"aaa\",\n       bar = \"bbb\",\n       baz = \"ccc\"\n    },\n    somethingElse = {\n       foo = \"ddd\",\n       bar = \"eee\",\n       baz = \"fff\"\n    }\n }\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getNestedAssocLists",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO [(String, [(String, String)])]",
          "source": "src/Scripting-Lua-ConfigFile.html#getNestedAssocLists",
          "type": "function"
        },
        "index": {
          "description": "Returns an association list of association lists i.e Lua table of tables In the outer table the keys are strings and the values are tables and in the inner tables the keys and values are strings Example someVal something foo aaa bar bbb baz ccc somethingElse foo ddd bar eee baz fff",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getNestedAssocLists",
          "normalized": "Config-\u003eString-\u003eIO[(String,[(String,String)])]",
          "package": "hslua",
          "partial": "Nested Assoc Lists",
          "signature": "Config-\u003eString-\u003eIO[(String,[(String,String)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getNestedAssocLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of lists, i.e. a Lua table of tables.  In the outer\n table, the keys are integers and the values are tables, and in the inner\n tables, the keys are integers and the values are strings.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = {\n    { \"foo one\", \"foo two\", \"foo three\" },\n    { \"bar one\", \"bar two\", \"bar three\" }\n }\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getNestedLists",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO [[String]]",
          "source": "src/Scripting-Lua-ConfigFile.html#getNestedLists",
          "type": "function"
        },
        "index": {
          "description": "Returns list of lists i.e Lua table of tables In the outer table the keys are integers and the values are tables and in the inner tables the keys are integers and the values are strings Example someVal foo one foo two foo three bar one bar two bar three",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getNestedLists",
          "normalized": "Config-\u003eString-\u003eIO[[String]]",
          "package": "hslua",
          "partial": "Nested Lists",
          "signature": "Config-\u003eString-\u003eIO[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getNestedLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string value from a configuration file.  Returns the\n empty string if the value is not defined in the file.  Example:\n\u003c/p\u003e\u003cpre\u003e someVal = \"foo\"\n\u003c/pre\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getString",
          "package": "hslua",
          "signature": "Config -\u003e String -\u003e IO String",
          "source": "src/Scripting-Lua-ConfigFile.html#getString",
          "type": "function"
        },
        "index": {
          "description": "Returns string value from configuration file Returns the empty string if the value is not defined in the file Example someVal foo",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "getString",
          "normalized": "Config-\u003eString-\u003eIO String",
          "package": "hslua",
          "partial": "String",
          "signature": "Config-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:getString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a config file and returns an opaque reference to the file.\n You must close this reference using \u003ccode\u003eclose\u003c/code\u003e when you're done reading\n the file.\n\u003c/p\u003e",
          "module": "Scripting.Lua.ConfigFile",
          "name": "openConfig",
          "package": "hslua",
          "signature": "FilePath -\u003e IO Config",
          "source": "src/Scripting-Lua-ConfigFile.html#openConfig",
          "type": "function"
        },
        "index": {
          "description": "Opens config file and returns an opaque reference to the file You must close this reference using close when you re done reading the file",
          "hierarchy": "Scripting Lua ConfigFile",
          "module": "Scripting.Lua.ConfigFile",
          "name": "openConfig",
          "normalized": "FilePath-\u003eIO Config",
          "package": "hslua",
          "partial": "Config",
          "signature": "FilePath-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua-ConfigFile.html#v:openConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell wrapper library for a scripting language Lua.\n See \u003ccode\u003ehttp://www.lua.org/\u003c/code\u003e for more details.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Scripting.Lua as Lua\n\u003c/pre\u003e\u003cp\u003eThis way we use Haskell module hierarchy to make Lua names shorter.\n Haskell functions are named after Lua functions, but the \u003ccode\u003elua_\u003c/code\u003e or\n \u003ccode\u003eluaL_\u003c/code\u003e prefix.\n\u003c/p\u003e\u003cp\u003eLua types are mapped to Haskell types as in the following table:\n\u003c/p\u003e\u003cpre\u003e int (stack index)        Int\n lua_Integer              LuaInteger\n lua_Number               LuaNumber\n int (bool result)        Bool\n const char * (string)    String\n void *                   Ptr ()\n lua_State *              LuaState\n\u003c/pre\u003e\u003cp\u003eMost functions are one-to-one mappings.\n Rare special cases are clearly marked in this document.\n\u003c/p\u003e\u003cp\u003eMinmal sample embedding:\n\u003c/p\u003e\u003cpre\u003e import qualified Scripting.Lua as Lua\n\u003c/pre\u003e\u003cpre\u003e main = do\n     l \u003c- Lua.newstate\n     Lua.openlibs l\n     Lua.callproc l \"print\" \"Hello from Lua\"\n     Lua.close l\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Scripting.Lua",
          "name": "Lua",
          "package": "hslua",
          "source": "src/Scripting-Lua.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell wrapper library for scripting language Lua See http www.lua.org for more details This module is intended to be imported qualified eg import qualified Scripting.Lua as Lua This way we use Haskell module hierarchy to make Lua names shorter Haskell functions are named after Lua functions but the lua or luaL prefix Lua types are mapped to Haskell types as in the following table int stack index Int lua Integer LuaInteger lua Number LuaNumber int bool result Bool const char string String void Ptr lua State LuaState Most functions are one-to-one mappings Rare special cases are clearly marked in this document Minmal sample embedding import qualified Scripting.Lua as Lua main do Lua.newstate Lua.openlibs Lua.callproc print Hello from Lua Lua.close",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "Lua",
          "package": "hslua",
          "partial": "Lua",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration used by \u003ccode\u003egc\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "GCCONTROL",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "data"
        },
        "index": {
          "description": "Enumeration used by gc function",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCCONTROL",
          "package": "hslua",
          "partial": "GCCONTROL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:GCCONTROL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeration used as type tag. See \u003ccode\u003elua_type\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "LTYPE",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "data"
        },
        "index": {
          "description": "Enumeration used as type tag See lua type in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LTYPE",
          "package": "hslua",
          "partial": "LTYPE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003elua_CFunction\u003c/code\u003e. See \u003ccode\u003elua_CFunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "LuaCFunction",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LuaCFunction",
          "type": "type"
        },
        "index": {
          "description": "Wrapper for lua CFunction See lua CFunction in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaCFunction",
          "package": "hslua",
          "partial": "Lua CFunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaCFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "LuaImport",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LuaImport",
          "type": "class"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaImport",
          "package": "hslua",
          "partial": "Lua Import",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003elua_Integer\u003c/code\u003e. See \u003ccode\u003elua_Integer\u003c/code\u003e in Lua Reference Manual.\n HsLua uses C \u003ccode\u003eptrdiff_t\u003c/code\u003e as \u003ccode\u003elua_Integer\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "LuaInteger",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LuaInteger",
          "type": "type"
        },
        "index": {
          "description": "Wrapper for lua Integer See lua Integer in Lua Reference Manual HsLua uses ptrdiff as lua Integer",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaInteger",
          "package": "hslua",
          "partial": "Lua Integer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003elua_Number\u003c/code\u003e. See \u003ccode\u003elua_Number\u003c/code\u003e in Lua Reference Manual.\n HsLua uses C \u003ccode\u003edouble\u003c/code\u003e as \u003ccode\u003elua_Integer\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "LuaNumber",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LuaNumber",
          "type": "type"
        },
        "index": {
          "description": "Wrapper for lua Number See lua Number in Lua Reference Manual HsLua uses double as lua Integer",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaNumber",
          "package": "hslua",
          "partial": "Lua Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003elua_State *\u003c/code\u003e. See \u003ccode\u003elua_State\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "LuaState",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#LuaState",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for lua State See lua State in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaState",
          "package": "hslua",
          "partial": "Lua State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:LuaState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value that can be pushed and poped from the Lua stack.\n All instances are natural, except following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eLuaState\u003c/code\u003e push ignores its argument, pushes current state\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e()\u003c/code\u003e push ignores its argument, just pushes nil\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ePtr ()\u003c/code\u003e pushes light user data, peek checks for lightuserdata or userdata\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Scripting.Lua",
          "name": "StackValue",
          "package": "hslua",
          "source": "src/Scripting-Lua.html#StackValue",
          "type": "class"
        },
        "index": {
          "description": "value that can be pushed and poped from the Lua stack All instances are natural except following LuaState push ignores its argument pushes current state push ignores its argument just pushes nil Ptr pushes light user data peek checks for lightuserdata or userdata",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "StackValue",
          "package": "hslua",
          "partial": "Stack Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#t:StackValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCCOLLECT",
          "package": "hslua",
          "signature": "GCCOLLECT",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCCOLLECT",
          "package": "hslua",
          "partial": "GCCOLLECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOLLECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCCOUNT",
          "package": "hslua",
          "signature": "GCCOUNT",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCCOUNT",
          "package": "hslua",
          "partial": "GCCOUNT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOUNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCCOUNTB",
          "package": "hslua",
          "signature": "GCCOUNTB",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCCOUNTB",
          "package": "hslua",
          "partial": "GCCOUNTB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCCOUNTB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCRESTART",
          "package": "hslua",
          "signature": "GCRESTART",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCRESTART",
          "package": "hslua",
          "partial": "GCRESTART",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCRESTART"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCSETPAUSE",
          "package": "hslua",
          "signature": "GCSETPAUSE",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCSETPAUSE",
          "package": "hslua",
          "partial": "GCSETPAUSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSETPAUSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCSETSTEPMUL",
          "package": "hslua",
          "signature": "GCSETSTEPMUL",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCSETSTEPMUL",
          "package": "hslua",
          "partial": "GCSETSTEPMUL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSETSTEPMUL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCSTEP",
          "package": "hslua",
          "signature": "GCSTEP",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCSTEP",
          "package": "hslua",
          "partial": "GCSTEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSTEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "GCSTOP",
          "package": "hslua",
          "signature": "GCSTOP",
          "source": "src/Scripting-Lua.html#GCCONTROL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "GCSTOP",
          "package": "hslua",
          "partial": "GCSTOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:GCSTOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "LuaState",
          "package": "hslua",
          "signature": "LuaState (Ptr ())",
          "source": "src/Scripting-Lua.html#LuaState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "LuaState",
          "normalized": "LuaState(Ptr())",
          "package": "hslua",
          "partial": "Lua State",
          "signature": "LuaState(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:LuaState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TBOOLEAN",
          "package": "hslua",
          "signature": "TBOOLEAN",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TBOOLEAN",
          "package": "hslua",
          "partial": "TBOOLEAN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TBOOLEAN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TFUNCTION",
          "package": "hslua",
          "signature": "TFUNCTION",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TFUNCTION",
          "package": "hslua",
          "partial": "TFUNCTION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TFUNCTION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TLIGHTUSERDATA",
          "package": "hslua",
          "signature": "TLIGHTUSERDATA",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TLIGHTUSERDATA",
          "package": "hslua",
          "partial": "TLIGHTUSERDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TLIGHTUSERDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TNIL",
          "package": "hslua",
          "signature": "TNIL",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TNIL",
          "package": "hslua",
          "partial": "TNIL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TNONE",
          "package": "hslua",
          "signature": "TNONE",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TNONE",
          "package": "hslua",
          "partial": "TNONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TNUMBER",
          "package": "hslua",
          "signature": "TNUMBER",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TNUMBER",
          "package": "hslua",
          "partial": "TNUMBER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TNUMBER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TSTRING",
          "package": "hslua",
          "signature": "TSTRING",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TSTRING",
          "package": "hslua",
          "partial": "TSTRING",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TSTRING"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TTABLE",
          "package": "hslua",
          "signature": "TTABLE",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TTABLE",
          "package": "hslua",
          "partial": "TTABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TTABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TTHREAD",
          "package": "hslua",
          "signature": "TTHREAD",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TTHREAD",
          "package": "hslua",
          "partial": "TTHREAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TTHREAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "TUSERDATA",
          "package": "hslua",
          "signature": "TUSERDATA",
          "source": "src/Scripting-Lua.html#LTYPE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "TUSERDATA",
          "package": "hslua",
          "partial": "TUSERDATA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:TUSERDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eluaL_argerror\u003c/code\u003e in Lua Reference Manual. Contrary to the \n manual, Haskell function does return with value less than zero.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "argerror",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e String -\u003e IO CInt",
          "source": "src/Scripting-Lua.html#argerror",
          "type": "function"
        },
        "index": {
          "description": "See luaL argerror in Lua Reference Manual Contrary to the manual Haskell function does return with value less than zero",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "argerror",
          "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO CInt",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:argerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_atpanic\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "atpanic",
          "package": "hslua",
          "signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e IO (FunPtr LuaCFunction)",
          "source": "src/Scripting-Lua.html#atpanic",
          "type": "function"
        },
        "index": {
          "description": "See lua atpanic in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "atpanic",
          "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO(FunPtr LuaCFunction)",
          "package": "hslua",
          "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO(FunPtr LuaCFunction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:atpanic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_call\u003c/code\u003e and \u003ccode\u003elua_call\u003c/code\u003e in Lua Reference Manual. This is \n a wrapper over \u003ccode\u003elua_pcall\u003c/code\u003e, as \u003ccode\u003elua_call\u003c/code\u003e is unsafe in controlled environment\n like Haskell VM.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "call",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#call",
          "type": "function"
        },
        "index": {
          "description": "See lua call and lua call in Lua Reference Manual This is wrapper over lua pcall as lua call is unsafe in controlled environment like Haskell VM",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "call",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a Lua function. Use as:\n\u003c/p\u003e\u003cpre\u003e Just v \u003c- callfunc l \"proc\" \"abc\" (1::Int) (5.0::Double)\n\u003c/pre\u003e",
          "module": "Scripting.Lua",
          "name": "callfunc",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e a",
          "source": "src/Scripting-Lua.html#callfunc",
          "type": "function"
        },
        "index": {
          "description": "Call Lua function Use as Just callfunc proc abc Int Double",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "callfunc",
          "normalized": "LuaState-\u003eString-\u003ea",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:callfunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a Lua procedure. Use as:\n\u003c/p\u003e\u003cpre\u003e callproc l \"proc\" \"abc\" (1::Int) (5.0::Double)\n\u003c/pre\u003e",
          "module": "Scripting.Lua",
          "name": "callproc",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e a",
          "source": "src/Scripting-Lua.html#callproc",
          "type": "function"
        },
        "index": {
          "description": "Call Lua procedure Use as callproc proc abc Int Double",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "callproc",
          "normalized": "LuaState-\u003eString-\u003ea",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:callproc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_checkstack\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "checkstack",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#checkstack",
          "type": "function"
        },
        "index": {
          "description": "See lua checkstack in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "checkstack",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:checkstack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_close\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "close",
          "package": "hslua",
          "signature": "LuaState -\u003e IO ()",
          "source": "src/Scripting-Lua.html#close",
          "type": "function"
        },
        "index": {
          "description": "See lua close in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "close",
          "normalized": "LuaState-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_concat\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "concat",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#concat",
          "type": "function"
        },
        "index": {
          "description": "See lua concat in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "concat",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_cpcall\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "cpcall",
          "package": "hslua",
          "signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e Ptr a -\u003e IO Int",
          "source": "src/Scripting-Lua.html#cpcall",
          "type": "function"
        },
        "index": {
          "description": "See lua cpcall in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "cpcall",
          "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003ePtr a-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003ePtr a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:cpcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_createtable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "createtable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#createtable",
          "type": "function"
        },
        "index": {
          "description": "See lua createtable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "createtable",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:createtable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "dump",
          "package": "hslua",
          "signature": "LuaState -\u003e IO String",
          "source": "src/Scripting-Lua.html#dump",
          "type": "function"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "dump",
          "normalized": "LuaState-\u003eIO String",
          "package": "hslua",
          "signature": "LuaState-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:dump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eLUA_ENVIRONINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "environindex",
          "package": "hslua",
          "signature": "Int",
          "source": "src/Scripting-Lua.html#environindex",
          "type": "function"
        },
        "index": {
          "description": "See LUA ENVIRONINDEX in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "environindex",
          "package": "hslua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:environindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_equal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "equal",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#equal",
          "type": "function"
        },
        "index": {
          "description": "See lua equal in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "equal",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree function pointer created with \u003ccode\u003enewcfunction\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "freecfunction",
          "package": "hslua",
          "signature": "FunPtr LuaCFunction -\u003e IO ()",
          "source": "src/Scripting-Lua.html#freecfunction",
          "type": "function"
        },
        "index": {
          "description": "Free function pointer created with newcfunction",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "freecfunction",
          "normalized": "FunPtr LuaCFunction-\u003eIO()",
          "package": "hslua",
          "signature": "FunPtr LuaCFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:freecfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_error\u003c/code\u003e in Lua Reference Manual.\nerror :: LuaState -\u003e IO Int\nerror l = liftM fromIntegral (c_lua_error l)\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003elua_gc\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "gc",
          "package": "hslua",
          "signature": "LuaState -\u003e GCCONTROL -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#gc",
          "type": "function"
        },
        "index": {
          "description": "See lua error in Lua Reference Manual error LuaState IO Int error liftM fromIntegral lua error See lua gc in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "gc",
          "normalized": "LuaState-\u003eGCCONTROL-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eGCCONTROL-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_getfenv\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getfenv",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#getfenv",
          "type": "function"
        },
        "index": {
          "description": "See lua getfenv in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getfenv",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getfenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_getfield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getfield",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#getfield",
          "type": "function"
        },
        "index": {
          "description": "See lua getfield in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getfield",
          "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getfield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_getglobal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getglobal",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#getglobal",
          "type": "function"
        },
        "index": {
          "description": "See lua getglobal in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getglobal",
          "normalized": "LuaState-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getglobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003egetglobal\u003c/code\u003e, but knows about packages. e. g.\n\u003c/p\u003e\u003cpre\u003e getglobal l \"math.sin\"\n\u003c/pre\u003e\u003cp\u003ereturns correct result\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getglobal2",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#getglobal2",
          "type": "function"
        },
        "index": {
          "description": "Like getglobal but knows about packages getglobal math.sin returns correct result",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getglobal2",
          "normalized": "LuaState-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getglobal2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_getmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getmetatable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#getmetatable",
          "type": "function"
        },
        "index": {
          "description": "See lua getmetatable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getmetatable",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getmetatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_gettable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "gettable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#gettable",
          "type": "function"
        },
        "index": {
          "description": "See lua gettable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "gettable",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gettable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_gettop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "gettop",
          "package": "hslua",
          "signature": "LuaState -\u003e IO Int",
          "source": "src/Scripting-Lua.html#gettop",
          "type": "function"
        },
        "index": {
          "description": "See lua gettop in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "gettop",
          "normalized": "LuaState-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:gettop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_getupvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "getupvalue",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO String",
          "source": "src/Scripting-Lua.html#getupvalue",
          "type": "function"
        },
        "index": {
          "description": "See lua getupvalue in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "getupvalue",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:getupvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eLUA_GLOBALSINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "globalsindex",
          "package": "hslua",
          "signature": "Int",
          "source": "src/Scripting-Lua.html#globalsindex",
          "type": "function"
        },
        "index": {
          "description": "See LUA GLOBALSINDEX in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "globalsindex",
          "package": "hslua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:globalsindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_insert\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "insert",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#insert",
          "type": "function"
        },
        "index": {
          "description": "See lua insert in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "insert",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isboolean",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isboolean",
          "type": "function"
        },
        "index": {
          "description": "See lua isboolean in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isboolean",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_iscfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "iscfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#iscfunction",
          "type": "function"
        },
        "index": {
          "description": "See lua iscfunction in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "iscfunction",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:iscfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isfunction",
          "type": "function"
        },
        "index": {
          "description": "See lua isfunction in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isfunction",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_islightuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "islightuserdata",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#islightuserdata",
          "type": "function"
        },
        "index": {
          "description": "See lua islightuserdata in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "islightuserdata",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:islightuserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isnil\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isnil",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isnil",
          "type": "function"
        },
        "index": {
          "description": "See lua isnil in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isnil",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isnil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isnumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isnumber",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isnumber",
          "type": "function"
        },
        "index": {
          "description": "See lua isnumber in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isnumber",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isnumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isstring",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isstring",
          "type": "function"
        },
        "index": {
          "description": "See lua isstring in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isstring",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_istable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "istable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#istable",
          "type": "function"
        },
        "index": {
          "description": "See lua istable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "istable",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:istable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isthread",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isthread",
          "type": "function"
        },
        "index": {
          "description": "See lua isthread in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isthread",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isthread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_isuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "isuserdata",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#isuserdata",
          "type": "function"
        },
        "index": {
          "description": "See lua isuserdata in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "isuserdata",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:isuserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_lessthan\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "lessthan",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#lessthan",
          "type": "function"
        },
        "index": {
          "description": "See lua lessthan in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "lessthan",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:lessthan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eluaL_loadfile\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "loadfile",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO Int",
          "source": "src/Scripting-Lua.html#loadfile",
          "type": "function"
        },
        "index": {
          "description": "See luaL loadfile in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "loadfile",
          "normalized": "LuaState-\u003eString-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:loadfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eluaL_loadstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "loadstring",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e String -\u003e IO Int",
          "source": "src/Scripting-Lua.html#loadstring",
          "type": "function"
        },
        "index": {
          "description": "See luaL loadstring in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "loadstring",
          "normalized": "LuaState-\u003eString-\u003eString-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:loadstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_type\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "ltype",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO LTYPE",
          "source": "src/Scripting-Lua.html#ltype",
          "type": "function"
        },
        "index": {
          "description": "See lua type in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "ltype",
          "normalized": "LuaState-\u003eInt-\u003eIO LTYPE",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO LTYPE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:ltype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell function to Lua function. Any Haskell function\n can be converted provided that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e all arguments are instances of StackValue\n   * return type is IO t, where t is an instance of StackValue\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAny Haskell exception will be converted to a string and returned\n as Lua error.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "luaimport",
          "package": "hslua",
          "signature": "a -\u003e LuaCFunction",
          "source": "src/Scripting-Lua.html#luaimport",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell function to Lua function Any Haskell function can be converted provided that all arguments are instances of StackValue return type is IO where is an instance of StackValue Any Haskell exception will be converted to string and returned as Lua error",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "luaimport",
          "normalized": "a-\u003eLuaCFunction",
          "package": "hslua",
          "signature": "a-\u003eLuaCFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "luaimport'",
          "package": "hslua",
          "signature": "Int -\u003e a -\u003e LuaCFunction",
          "source": "src/Scripting-Lua.html#luaimport%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "luaimport'",
          "normalized": "Int-\u003ea-\u003eLuaCFunction",
          "package": "hslua",
          "signature": "Int-\u003ea-\u003eLuaCFunction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimport-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Scripting.Lua",
          "name": "luaimportargerror",
          "package": "hslua",
          "signature": "Int -\u003e String -\u003e a -\u003e LuaCFunction",
          "source": "src/Scripting-Lua.html#luaimportargerror",
          "type": "method"
        },
        "index": {
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "luaimportargerror",
          "normalized": "Int-\u003eString-\u003ea-\u003eLuaCFunction",
          "package": "hslua",
          "signature": "Int-\u003eString-\u003ea-\u003eLuaCFunction",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:luaimportargerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eLUA_MULTRET\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "multret",
          "package": "hslua",
          "signature": "Int",
          "source": "src/Scripting-Lua.html#multret",
          "type": "function"
        },
        "index": {
          "description": "See LUA MULTRET in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "multret",
          "package": "hslua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:multret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate new foreign Lua function. Function created can be called\n by Lua engine. Remeber to free the pointer with \u003ccode\u003efreecfunction\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newcfunction",
          "package": "hslua",
          "signature": "a -\u003e IO (FunPtr LuaCFunction)",
          "source": "src/Scripting-Lua.html#newcfunction",
          "type": "function"
        },
        "index": {
          "description": "Create new foreign Lua function Function created can be called by Lua engine Remeber to free the pointer with freecfunction",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newcfunction",
          "normalized": "a-\u003eIO(FunPtr LuaCFunction)",
          "package": "hslua",
          "signature": "a-\u003eIO(FunPtr LuaCFunction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newcfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eluaL_newmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newmetatable",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO Int",
          "source": "src/Scripting-Lua.html#newmetatable",
          "type": "function"
        },
        "index": {
          "description": "See luaL newmetatable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newmetatable",
          "normalized": "LuaState-\u003eString-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newmetatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_newstate\u003c/code\u003e and \u003ccode\u003eluaL_newstate\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newstate",
          "package": "hslua",
          "signature": "IO LuaState",
          "source": "src/Scripting-Lua.html#newstate",
          "type": "function"
        },
        "index": {
          "description": "See lua newstate and luaL newstate in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newstate",
          "package": "hslua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newstate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_newtable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newtable",
          "package": "hslua",
          "signature": "LuaState -\u003e IO ()",
          "source": "src/Scripting-Lua.html#newtable",
          "type": "function"
        },
        "index": {
          "description": "See lua newtable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newtable",
          "normalized": "LuaState-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newtable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_newthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newthread",
          "package": "hslua",
          "signature": "LuaState -\u003e IO LuaState",
          "source": "src/Scripting-Lua.html#newthread",
          "type": "function"
        },
        "index": {
          "description": "See lua newthread in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newthread",
          "normalized": "LuaState-\u003eIO LuaState",
          "package": "hslua",
          "signature": "LuaState-\u003eIO LuaState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newthread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_newuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "newuserdata",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO (Ptr ())",
          "source": "src/Scripting-Lua.html#newuserdata",
          "type": "function"
        },
        "index": {
          "description": "See lua newuserdata in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "newuserdata",
          "normalized": "LuaState-\u003eInt-\u003eIO(Ptr())",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:newuserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_next\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "next",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#next",
          "type": "function"
        },
        "index": {
          "description": "See lua next in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "next",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_objlen\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "objlen",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#objlen",
          "type": "function"
        },
        "index": {
          "description": "See lua objlen in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "objlen",
          "normalized": "LuaState-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:objlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eluaL_openlibs\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "openlibs",
          "package": "hslua",
          "signature": "LuaState -\u003e IO ()",
          "source": "src/Scripting-Lua.html#openlibs",
          "type": "function"
        },
        "index": {
          "description": "See luaL openlibs in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "openlibs",
          "normalized": "LuaState-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:openlibs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pcall\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pcall",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#pcall",
          "type": "function"
        },
        "index": {
          "description": "See lua pcall in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pcall",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pcall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if at index \u003ccode\u003en\u003c/code\u003e there is a convertible Lua value and if so return it\n wrapped in \u003ccode\u003eJust\u003c/code\u003e. Return \u003ccode\u003eNothing\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "peek",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO (Maybe a)",
          "source": "src/Scripting-Lua.html#peek",
          "type": "method"
        },
        "index": {
          "description": "Check if at index there is convertible Lua value and if so return it wrapped in Just Return Nothing otherwise",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "peek",
          "normalized": "LuaState-\u003eInt-\u003eIO(Maybe a)",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pop",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pop",
          "type": "function"
        },
        "index": {
          "description": "See lua pop in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pop",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes a value onto Lua stack, casting it into meaningfully nearest Lua type.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "push",
          "package": "hslua",
          "signature": "LuaState -\u003e a -\u003e IO ()",
          "source": "src/Scripting-Lua.html#push",
          "type": "method"
        },
        "index": {
          "description": "Pushes value onto Lua stack casting it into meaningfully nearest Lua type",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "push",
          "normalized": "LuaState-\u003ea-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushboolean",
          "package": "hslua",
          "signature": "LuaState -\u003e Bool -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushboolean",
          "type": "function"
        },
        "index": {
          "description": "See lua pushboolean in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushboolean",
          "normalized": "LuaState-\u003eBool-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushcclosure\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushcclosure",
          "package": "hslua",
          "signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushcclosure",
          "type": "function"
        },
        "index": {
          "description": "See lua pushcclosure in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushcclosure",
          "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushcclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushcfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushcfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e FunPtr LuaCFunction -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushcfunction",
          "type": "function"
        },
        "index": {
          "description": "See lua pushcfunction in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushcfunction",
          "normalized": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eFunPtr LuaCFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushcfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes Haskell function converted to a Lua function.\n All values created will be garbage collected. Use as:\n\u003c/p\u003e\u003cpre\u003e Lua.pushhsfunction l myfun\n Lua.setglobal l \"myfun\"\n\u003c/pre\u003e\u003cp\u003eYou are not allowed to use \u003ccode\u003elua_error\u003c/code\u003e anywhere, but\n use an error code of (-1) to the same effect. Push\n error message as the sole return value.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushhsfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e a -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushhsfunction",
          "type": "function"
        },
        "index": {
          "description": "Pushes Haskell function converted to Lua function All values created will be garbage collected Use as Lua.pushhsfunction myfun Lua.setglobal myfun You are not allowed to use lua error anywhere but use an error code of to the same effect Push error message as the sole return value",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushhsfunction",
          "normalized": "LuaState-\u003ea-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushhsfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushinteger\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushinteger",
          "package": "hslua",
          "signature": "LuaState -\u003e LuaInteger -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushinteger",
          "type": "function"
        },
        "index": {
          "description": "See lua pushinteger in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushinteger",
          "normalized": "LuaState-\u003eLuaInteger-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eLuaInteger-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushinteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushlightuserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushlightuserdata",
          "package": "hslua",
          "signature": "LuaState -\u003e Ptr a -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushlightuserdata",
          "type": "function"
        },
        "index": {
          "description": "See lua pushlightuserdata in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushlightuserdata",
          "normalized": "LuaState-\u003ePtr a-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003ePtr a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushlightuserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushnil\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushnil",
          "package": "hslua",
          "signature": "LuaState -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushnil",
          "type": "function"
        },
        "index": {
          "description": "See lua pushnil in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushnil",
          "normalized": "LuaState-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushnil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushnumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushnumber",
          "package": "hslua",
          "signature": "LuaState -\u003e LuaNumber -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushnumber",
          "type": "function"
        },
        "index": {
          "description": "See lua pushnumber in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushnumber",
          "normalized": "LuaState-\u003eLuaNumber-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eLuaNumber-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushnumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushstring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushstring",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushstring",
          "type": "function"
        },
        "index": {
          "description": "See lua pushstring in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushstring",
          "normalized": "LuaState-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushthread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushthread",
          "package": "hslua",
          "signature": "LuaState -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#pushthread",
          "type": "function"
        },
        "index": {
          "description": "See lua pushthread in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushthread",
          "normalized": "LuaState-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushthread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_pushvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "pushvalue",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#pushvalue",
          "type": "function"
        },
        "index": {
          "description": "See lua pushvalue in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "pushvalue",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:pushvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_rawequal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "rawequal",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#rawequal",
          "type": "function"
        },
        "index": {
          "description": "See lua rawequal in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "rawequal",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawequal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_rawget\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "rawget",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#rawget",
          "type": "function"
        },
        "index": {
          "description": "See lua rawget in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "rawget",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_rawgeti\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "rawgeti",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#rawgeti",
          "type": "function"
        },
        "index": {
          "description": "See lua rawgeti in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "rawgeti",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawgeti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_rawset\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "rawset",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#rawset",
          "type": "function"
        },
        "index": {
          "description": "See lua rawset in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "rawset",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_rawseti\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "rawseti",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#rawseti",
          "type": "function"
        },
        "index": {
          "description": "See lua rawseti in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "rawseti",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:rawseti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_register\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "register",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e FunPtr LuaCFunction -\u003e IO ()",
          "source": "src/Scripting-Lua.html#register",
          "type": "function"
        },
        "index": {
          "description": "See lua register in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "register",
          "normalized": "LuaState-\u003eString-\u003eFunPtr LuaCFunction-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eFunPtr LuaCFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:register"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImports a Haskell function and registers it at global name.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "registerhsfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e a -\u003e IO ()",
          "source": "src/Scripting-Lua.html#registerhsfunction",
          "type": "function"
        },
        "index": {
          "description": "Imports Haskell function and registers it at global name",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "registerhsfunction",
          "normalized": "LuaState-\u003eString-\u003ea-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:registerhsfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003eLUA_REGISTRYINDEX\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "registryindex",
          "package": "hslua",
          "signature": "Int",
          "source": "src/Scripting-Lua.html#registryindex",
          "type": "function"
        },
        "index": {
          "description": "See LUA REGISTRYINDEX in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "registryindex",
          "package": "hslua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:registryindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_remove\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "remove",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#remove",
          "type": "function"
        },
        "index": {
          "description": "See lua remove in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "remove",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_replace\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "replace",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#replace",
          "type": "function"
        },
        "index": {
          "description": "See lua replace in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "replace",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_resume\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "resume",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#resume",
          "type": "function"
        },
        "index": {
          "description": "See lua resume in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "resume",
          "normalized": "LuaState-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_setfenv\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "setfenv",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#setfenv",
          "type": "function"
        },
        "index": {
          "description": "See lua setfenv in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "setfenv",
          "normalized": "LuaState-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setfenv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_setfield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "setfield",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#setfield",
          "type": "function"
        },
        "index": {
          "description": "See lua setfield in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "setfield",
          "normalized": "LuaState-\u003eInt-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setfield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_setglobal\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "setglobal",
          "package": "hslua",
          "signature": "LuaState -\u003e String -\u003e IO ()",
          "source": "src/Scripting-Lua.html#setglobal",
          "type": "function"
        },
        "index": {
          "description": "See lua setglobal in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "setglobal",
          "normalized": "LuaState-\u003eString-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setglobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_setmetatable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "setmetatable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#setmetatable",
          "type": "function"
        },
        "index": {
          "description": "See lua setmetatable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "setmetatable",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setmetatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_settable\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "settable",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#settable",
          "type": "function"
        },
        "index": {
          "description": "See lua settable in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "settable",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:settable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_settop\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "settop",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#settop",
          "type": "function"
        },
        "index": {
          "description": "See lua settop in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "settop",
          "normalized": "LuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:settop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_setupvalue\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "setupvalue",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e Int -\u003e IO String",
          "source": "src/Scripting-Lua.html#setupvalue",
          "type": "function"
        },
        "index": {
          "description": "See lua setupvalue in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "setupvalue",
          "normalized": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:setupvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_status\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "status",
          "package": "hslua",
          "signature": "LuaState -\u003e IO Int",
          "source": "src/Scripting-Lua.html#status",
          "type": "function"
        },
        "index": {
          "description": "See lua status in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "status",
          "normalized": "LuaState-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_toboolean\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "toboolean",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Bool",
          "source": "src/Scripting-Lua.html#toboolean",
          "type": "function"
        },
        "index": {
          "description": "See lua toboolean in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "toboolean",
          "normalized": "LuaState-\u003eInt-\u003eIO Bool",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:toboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_tocfunction\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "tocfunction",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO (FunPtr LuaCFunction)",
          "source": "src/Scripting-Lua.html#tocfunction",
          "type": "function"
        },
        "index": {
          "description": "See lua tocfunction in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "tocfunction",
          "normalized": "LuaState-\u003eInt-\u003eIO(FunPtr LuaCFunction)",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO(FunPtr LuaCFunction)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tocfunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_tointeger\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "tointeger",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO LuaInteger",
          "source": "src/Scripting-Lua.html#tointeger",
          "type": "function"
        },
        "index": {
          "description": "See lua tointeger in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "tointeger",
          "normalized": "LuaState-\u003eInt-\u003eIO LuaInteger",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO LuaInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tointeger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_tonumber\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "tonumber",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO CDouble",
          "source": "src/Scripting-Lua.html#tonumber",
          "type": "function"
        },
        "index": {
          "description": "See lua tonumber in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "tonumber",
          "normalized": "LuaState-\u003eInt-\u003eIO CDouble",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO CDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tonumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_topointer\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "topointer",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO (Ptr ())",
          "source": "src/Scripting-Lua.html#topointer",
          "type": "function"
        },
        "index": {
          "description": "See lua topointer in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "topointer",
          "normalized": "LuaState-\u003eInt-\u003eIO(Ptr())",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:topointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_tostring\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "tostring",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO String",
          "source": "src/Scripting-Lua.html#tostring",
          "type": "function"
        },
        "index": {
          "description": "See lua tostring in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "tostring",
          "normalized": "LuaState-\u003eInt-\u003eIO String",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tostring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_tothread\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "tothread",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO LuaState",
          "source": "src/Scripting-Lua.html#tothread",
          "type": "function"
        },
        "index": {
          "description": "See lua tothread in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "tothread",
          "normalized": "LuaState-\u003eInt-\u003eIO LuaState",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO LuaState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:tothread"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_touserdata\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "touserdata",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO (Ptr a)",
          "source": "src/Scripting-Lua.html#touserdata",
          "type": "function"
        },
        "index": {
          "description": "See lua touserdata in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "touserdata",
          "normalized": "LuaState-\u003eInt-\u003eIO(Ptr a)",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:touserdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_typename\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "typename",
          "package": "hslua",
          "signature": "LuaState -\u003e LTYPE -\u003e IO String",
          "source": "src/Scripting-Lua.html#typename",
          "type": "function"
        },
        "index": {
          "description": "See lua typename in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "typename",
          "normalized": "LuaState-\u003eLTYPE-\u003eIO String",
          "package": "hslua",
          "signature": "LuaState-\u003eLTYPE-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:typename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_upvalueindex\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "upvalueindex",
          "package": "hslua",
          "signature": "Int -\u003e Int",
          "source": "src/Scripting-Lua.html#upvalueindex",
          "type": "function"
        },
        "index": {
          "description": "See lua upvalueindex in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "upvalueindex",
          "normalized": "Int-\u003eInt",
          "package": "hslua",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:upvalueindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLua type id code of the vaule expected. Parameter is unused.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "valuetype",
          "package": "hslua",
          "signature": "a -\u003e LTYPE",
          "source": "src/Scripting-Lua.html#valuetype",
          "type": "method"
        },
        "index": {
          "description": "Lua type id code of the vaule expected Parameter is unused",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "valuetype",
          "normalized": "a-\u003eLTYPE",
          "package": "hslua",
          "signature": "a-\u003eLTYPE",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:valuetype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_xmove\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "xmove",
          "package": "hslua",
          "signature": "LuaState -\u003e LuaState -\u003e Int -\u003e IO ()",
          "source": "src/Scripting-Lua.html#xmove",
          "type": "function"
        },
        "index": {
          "description": "See lua xmove in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "xmove",
          "normalized": "LuaState-\u003eLuaState-\u003eInt-\u003eIO()",
          "package": "hslua",
          "signature": "LuaState-\u003eLuaState-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:xmove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003elua_yield\u003c/code\u003e in Lua Reference Manual.\n\u003c/p\u003e",
          "module": "Scripting.Lua",
          "name": "yield",
          "package": "hslua",
          "signature": "LuaState -\u003e Int -\u003e IO Int",
          "source": "src/Scripting-Lua.html#yield",
          "type": "function"
        },
        "index": {
          "description": "See lua yield in Lua Reference Manual",
          "hierarchy": "Scripting Lua",
          "module": "Scripting.Lua",
          "name": "yield",
          "normalized": "LuaState-\u003eInt-\u003eIO Int",
          "package": "hslua",
          "signature": "LuaState-\u003eInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hslua/docs/Scripting-Lua.html#v:yield"
      }
    }
  ]
]