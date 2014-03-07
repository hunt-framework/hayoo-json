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
        "word": "gconf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGConf is a system for maintaining program configuration information.\n\u003c/p\u003e\u003cp\u003eThe main difference between GConf and traditional configuration file\n API's is that GConf is 'live'. Applications can be notified of changes\n in their configuration, it allows desktop wide setting\n to be propogated without restarting all applications, or multiple instances\n of a single application to synchronise their configuration. It is similar\n in many ways to the Win32 Registry with its directory-like structure.\n\u003c/p\u003e\u003cp\u003eThis module only binds the client library which is the only interface that\n normal applications should need. Only special GConf apps need lower level\n access.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Some low level functions have not been bound\n eg \u003ccode\u003egconf_client_get_for_engine\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfClient",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfClient.html",
          "type": "module"
        },
        "index": {
          "description": "GConf is system for maintaining program configuration information The main difference between GConf and traditional configuration file API is that GConf is live Applications can be notified of changes in their configuration it allows desktop wide setting to be propogated without restarting all applications or multiple instances of single application to synchronise their configuration It is similar in many ways to the Win32 Registry with its directory-like structure This module only binds the client library which is the only interface that normal applications should need Only special GConf apps need lower level access Some low level functions have not been bound eg gconf client get for engine",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfClient",
          "package": "gconf",
          "partial": "GConf Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConf",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-Types.html#GConf",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConf",
          "package": "gconf",
          "partial": "GConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eGError\u003c/a\u003e exceptions that can be thrown by functions in this module\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfError",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfClient.html#GConfError",
          "type": "data"
        },
        "index": {
          "description": "The GError exceptions that can be thrown by functions in this module",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfError",
          "package": "gconf",
          "partial": "GConf Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfPreloadType",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfClient.html#GConfPreloadType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfPreloadType",
          "package": "gconf",
          "partial": "GConf Preload Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfPreloadType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfPrimitiveValueClass",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfPrimitiveValueClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfPrimitiveValueClass",
          "package": "gconf",
          "partial": "GConf Primitive Value Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfPrimitiveValueClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValue",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValue",
          "package": "gconf",
          "partial": "GConf Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of types which can be kept by GConf\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueClass",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueClass",
          "type": "class"
        },
        "index": {
          "description": "Class of types which can be kept by GConf",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueClass",
          "package": "gconf",
          "partial": "GConf Value Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfValueClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic version for when the type is not known statically.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueDyn",
          "package": "gconf",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "data"
        },
        "index": {
          "description": "Dynamic version for when the type is not known statically",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueDyn",
          "package": "gconf",
          "partial": "GConf Value Dyn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#t:GConfValueDyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueBool",
          "package": "gconf",
          "signature": "GConfValueBool Bool",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueBool",
          "package": "gconf",
          "partial": "GConf Value Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueFloat",
          "package": "gconf",
          "signature": "GConfValueFloat Double",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueFloat",
          "package": "gconf",
          "partial": "GConf Value Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueInt",
          "package": "gconf",
          "signature": "GConfValueInt Int",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueInt",
          "package": "gconf",
          "partial": "GConf Value Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust all be of same primitive type\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueList",
          "package": "gconf",
          "signature": "GConfValueList [GConfValueDyn]",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "description": "Must all be of same primitive type",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueList",
          "normalized": "GConfValueList[GConfValueDyn]",
          "package": "gconf",
          "partial": "GConf Value List",
          "signature": "GConfValueList[GConfValueDyn]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust both be primitive\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValuePair",
          "package": "gconf",
          "signature": "GConfValuePair (GConfValueDyn, GConfValueDyn)",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "description": "Must both be primitive",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValuePair",
          "normalized": "GConfValuePair(GConfValueDyn,GConfValueDyn)",
          "package": "gconf",
          "partial": "GConf Value Pair",
          "signature": "GConfValuePair(GConfValueDyn,GConfValueDyn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValuePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot supported\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueSchema",
          "package": "gconf",
          "signature": "GConfValueSchema",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "description": "Not supported",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueSchema",
          "package": "gconf",
          "partial": "GConf Value Schema",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueString",
          "package": "gconf",
          "signature": "GConfValueString String",
          "source": "src/System-Gnome-GConf-GConfValue.html#GConfValueDyn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "GConfValueString",
          "package": "gconf",
          "partial": "GConf Value String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:GConfValueString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "afterValueChanged",
          "package": "gconf",
          "signature": "GConf -\u003e (String -\u003e Maybe GConfValueDyn -\u003e IO ()) -\u003e IO (ConnectId GConf)",
          "source": "src/System-Gnome-GConf-GConfClient.html#afterValueChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "afterValueChanged",
          "normalized": "GConf-\u003e(String-\u003eMaybe GConfValueDyn-\u003eIO())-\u003eIO(ConnectId GConf)",
          "package": "gconf",
          "partial": "Value Changed",
          "signature": "GConf-\u003e(String-\u003eMaybe GConfValueDyn-\u003eIO())-\u003eIO(ConnectId GConf)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:afterValueChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a directory to the list of directories the\n GConf will watch. You should use gconfNotifyAdd to associate\n change handlers with specific keys.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Added directories may not overlap. That is, if you add \"/foo\", you may\n not add \"/foo/bar\". However you can add \"/foo\" and \"/bar\". You can\n also add \"/foo\" multiple times; if you add a directory multiple times, it\n will not be removed until you call \u003ccode\u003e\u003ca\u003egconfRemoveDir\u003c/a\u003e\u003c/code\u003e an equal number of\n times.\n\u003c/li\u003e\u003cli\u003e Note that the watch is recursive, all keys below the given directory will\n be watched. So it would be a bad idea to watch the root \"/\".\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAddDir",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfAddDir",
          "type": "function"
        },
        "index": {
          "description": "Add directory to the list of directories the GConf will watch You should use gconfNotifyAdd to associate change handlers with specific keys Added directories may not overlap That is if you add foo you may not add foo bar However you can add foo and bar You can also add foo multiple times if you add directory multiple times it will not be removed until you call gconfRemoveDir an equal number of times Note that the watch is recursive all keys below the given directory will be watched So it would be bad idea to watch the root",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAddDir",
          "normalized": "GConf-\u003eString-\u003eIO()",
          "package": "gconf",
          "partial": "Add Dir",
          "signature": "GConf-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfAddDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAllDirs",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO [String]",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfAllDirs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAllDirs",
          "normalized": "GConf-\u003eString-\u003eIO[String]",
          "package": "gconf",
          "partial": "All Dirs",
          "signature": "GConf-\u003eString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfAllDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAllEntries",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO [(String, GConfValueDyn)]",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfAllEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfAllEntries",
          "normalized": "GConf-\u003eString-\u003eIO[(String,GConfValueDyn)]",
          "package": "gconf",
          "partial": "All Entries",
          "signature": "GConf-\u003eString-\u003eIO[(String,GConfValueDyn)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfAllEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDumps everything out of the GConf client-side cache. If you know you're\n done using the GConf for a while, you can call this function to save some\n memory.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfClearCache",
          "package": "gconf",
          "signature": "GConf -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfClearCache",
          "type": "function"
        },
        "index": {
          "description": "Dumps everything out of the GConf client-side cache If you know you re done using the GConf for while you can call this function to save some memory",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfClearCache",
          "normalized": "GConf-\u003eIO()",
          "package": "gconf",
          "partial": "Clear Cache",
          "signature": "GConf-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfClearCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfDirExists",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO Bool",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfDirExists",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfDirExists",
          "normalized": "GConf-\u003eString-\u003eIO Bool",
          "package": "gconf",
          "partial": "Dir Exists",
          "signature": "GConf-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfDirExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value of a configuration key.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGet",
          "package": "gconf",
          "signature": "GConf-\u003e String-\u003e IO value",
          "type": "function"
        },
        "index": {
          "description": "Gets the value of configuration key",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGet",
          "normalized": "GConf-\u003eString-\u003eIO a",
          "package": "gconf",
          "partial": "Get",
          "signature": "GConf-\u003eString-\u003eIO value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new GConf object using the default configuration engine.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetDefault",
          "package": "gconf",
          "signature": "IO GConf",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfGetDefault",
          "type": "function"
        },
        "index": {
          "description": "Create new GConf object using the default configuration engine",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetDefault",
          "package": "gconf",
          "partial": "Get Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfGetDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the default value stored in the key's schema, if the key has a\n schema associated and the schema exists and the schema contains a default\n value. Note that \u003ccode\u003e\u003ca\u003egconfSet\u003c/a\u003e\u003c/code\u003e already returns the default value if no other\n value is found, so normally you do not need this function.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetDefaultFromSchema",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO value",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfGetDefaultFromSchema",
          "type": "function"
        },
        "index": {
          "description": "Returns the default value stored in the key schema if the key has schema associated and the schema exists and the schema contains default value Note that gconfSet already returns the default value if no other value is found so normally you do not need this function",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetDefaultFromSchema",
          "normalized": "GConf-\u003eString-\u003eIO a",
          "package": "gconf",
          "partial": "Get Default From Schema",
          "signature": "GConf-\u003eString-\u003eIO value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfGetDefaultFromSchema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the value of a configuration key.\n\u003c/p\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egconfGet\u003c/a\u003e\u003c/code\u003e, but doesn't look for a default value if the key is\n unset.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetWithoutDefault",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO value",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfGetWithoutDefault",
          "type": "function"
        },
        "index": {
          "description": "Gets the value of configuration key Same as gconfGet but doesn look for default value if the key is unset",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfGetWithoutDefault",
          "normalized": "GConf-\u003eString-\u003eIO a",
          "package": "gconf",
          "partial": "Get Without Default",
          "signature": "GConf-\u003eString-\u003eIO value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfGetWithoutDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfNotifyAdd",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e (String -\u003e value -\u003e IO ()) -\u003e IO GConfConnectId",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfNotifyAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfNotifyAdd",
          "normalized": "GConf-\u003eString-\u003e(String-\u003ea-\u003eIO())-\u003eIO GConfConnectId",
          "package": "gconf",
          "partial": "Notify Add",
          "signature": "GConf-\u003eString-\u003e(String-\u003evalue-\u003eIO())-\u003eIO GConfConnectId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfNotifyAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfNotifyRemove",
          "package": "gconf",
          "signature": "GConf -\u003e GConfConnectId -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfNotifyRemove",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfNotifyRemove",
          "normalized": "GConf-\u003eGConfConnectId-\u003eIO()",
          "package": "gconf",
          "partial": "Notify Remove",
          "signature": "GConf-\u003eGConfConnectId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfNotifyRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreloads a directory. Normally you do this when you call\n \u003ccode\u003egconfAddDirWithPreload\u003c/code\u003e, but if you've called \u003ccode\u003e\u003ca\u003egconfClearCache\u003c/a\u003e\u003c/code\u003e there may\n be a reason to do it again.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfPreload",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e GConfPreloadType -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfPreload",
          "type": "function"
        },
        "index": {
          "description": "Preloads directory Normally you do this when you call gconfAddDirWithPreload but if you ve called gconfClearCache there may be reason to do it again",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfPreload",
          "normalized": "GConf-\u003eString-\u003eGConfPreloadType-\u003eIO()",
          "package": "gconf",
          "partial": "Preload",
          "signature": "GConf-\u003eString-\u003eGConfPreloadType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfPreload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a directory from the list created with \u003ccode\u003e\u003ca\u003egconfAddDir\u003c/a\u003e\u003c/code\u003e. If any\n notifications have been added below this directory with \u003ccode\u003e\u003ca\u003egconfNotifyAdd\u003c/a\u003e\u003c/code\u003e,\n those notifications will be disabled until you re-add the removed directory.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that if a directory has been added multiple times, you must remove it\n the same number of times before the remove takes effect.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfRemoveDir",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfRemoveDir",
          "type": "function"
        },
        "index": {
          "description": "Remove directory from the list created with gconfAddDir If any notifications have been added below this directory with gconfNotifyAdd those notifications will be disabled until you re-add the removed directory Note that if directory has been added multiple times you must remove it the same number of times before the remove takes effect",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfRemoveDir",
          "normalized": "GConf-\u003eString-\u003eIO()",
          "package": "gconf",
          "partial": "Remove Dir",
          "signature": "GConf-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfRemoveDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the value of a configuration key.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfSet",
          "package": "gconf",
          "signature": "GConf-\u003e String-\u003e value-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the value of configuration key",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfSet",
          "normalized": "GConf-\u003eString-\u003ea-\u003eIO()",
          "package": "gconf",
          "partial": "Set",
          "signature": "GConf-\u003eString-\u003evalue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggests to gconfd that you've just finished a block of changes, and it\n would be an optimal time to sync to permanent storage. This is only a\n suggestion; and gconfd will eventually sync even if you don't call \n \u003ccode\u003e\u003ca\u003egconfSuggestSync\u003c/a\u003e\u003c/code\u003e. This function is just a \u003ca\u003ehint\u003c/a\u003e provided to gconfd to\n maximize efficiency and minimize data loss.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfSuggestSync",
          "package": "gconf",
          "signature": "GConf -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfSuggestSync",
          "type": "function"
        },
        "index": {
          "description": "Suggests to gconfd that you ve just finished block of changes and it would be an optimal time to sync to permanent storage This is only suggestion and gconfd will eventually sync even if you don call gconfSuggestSync This function is just hint provided to gconfd to maximize efficiency and minimize data loss",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfSuggestSync",
          "normalized": "GConf-\u003eIO()",
          "package": "gconf",
          "partial": "Suggest Sync",
          "signature": "GConf-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfSuggestSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsets the value of key; if key is already unset, has no effect. An error\n of note is \u003ccode\u003eGconfErrorOverridden\u003c/code\u003e, indicating that the system administrator\n has \"forced\" a value for this key.\n\u003c/p\u003e",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfUnset",
          "package": "gconf",
          "signature": "GConf -\u003e String -\u003e IO ()",
          "source": "src/System-Gnome-GConf-GConfClient.html#gconfUnset",
          "type": "function"
        },
        "index": {
          "description": "Unsets the value of key if key is already unset has no effect An error of note is GconfErrorOverridden indicating that the system administrator has forced value for this key",
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "gconfUnset",
          "normalized": "GConf-\u003eString-\u003eIO()",
          "package": "gconf",
          "partial": "Unset",
          "signature": "GConf-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:gconfUnset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf.GConfClient",
          "name": "onValueChanged",
          "package": "gconf",
          "signature": "GConf -\u003e (String -\u003e Maybe GConfValueDyn -\u003e IO ()) -\u003e IO (ConnectId GConf)",
          "source": "src/System-Gnome-GConf-GConfClient.html#onValueChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Gnome GConf GConfClient",
          "module": "System.Gnome.GConf.GConfClient",
          "name": "onValueChanged",
          "normalized": "GConf-\u003e(String-\u003eMaybe GConfValueDyn-\u003eIO())-\u003eIO(ConnectId GConf)",
          "package": "gconf",
          "partial": "Value Changed",
          "signature": "GConf-\u003e(String-\u003eMaybe GConfValueDyn-\u003eIO())-\u003eIO(ConnectId GConf)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf-GConfClient.html#v:onValueChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Gnome.GConf",
          "name": "GConf",
          "package": "gconf",
          "source": "src/System-Gnome-GConf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Gnome GConf",
          "module": "System.Gnome.GConf",
          "name": "GConf",
          "package": "gconf",
          "partial": "GConf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gconf/docs/System-Gnome-GConf.html#"
      }
    }
  ]
]