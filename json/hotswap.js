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
        "word": "hotswap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Hotswap",
          "name": "Hotswap",
          "package": "hotswap",
          "source": "src/System-Plugins-Hotswap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "Hotswap",
          "package": "hotswap",
          "partial": "Hotswap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Hotswap",
          "name": "Plugin",
          "package": "hotswap",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "Plugin",
          "package": "hotswap",
          "partial": "Plugin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#t:Plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Plugins.Hotswap",
          "name": "Plugin",
          "package": "hotswap",
          "signature": "Plugin",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "Plugin",
          "package": "hotswap",
          "partial": "Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:Plugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new plugin, expecting a type. Don't use this to reload plugins.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "newPlugin",
          "package": "hotswap",
          "signature": "FilePath -\u003e [FilePath] -\u003e String -\u003e IO (Plugin a)",
          "source": "src/System-Plugins-Hotswap.html#newPlugin",
          "type": "function"
        },
        "index": {
          "description": "Create new plugin expecting type Don use this to reload plugins",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "newPlugin",
          "normalized": "FilePath-\u003e[FilePath]-\u003eString-\u003eIO(Plugin a)",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "FilePath-\u003e[FilePath]-\u003eString-\u003eIO(Plugin a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:newPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoaded data.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "pluginData",
          "package": "hotswap",
          "signature": "IORef a",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "Loaded data",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "pluginData",
          "package": "hotswap",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:pluginData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the symbol to find.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "pluginDataName",
          "package": "hotswap",
          "signature": "String",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "Name of the symbol to find",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "pluginDataName",
          "package": "hotswap",
          "partial": "Data Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:pluginDataName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude paths.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "pluginIncludes",
          "package": "hotswap",
          "signature": "[FilePath]",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "Include paths",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "pluginIncludes",
          "normalized": "[FilePath]",
          "package": "hotswap",
          "partial": "Includes",
          "signature": "[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:pluginIncludes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoaded module.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "pluginModule",
          "package": "hotswap",
          "signature": "IORef Module",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "Loaded module",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "pluginModule",
          "package": "hotswap",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:pluginModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to object\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "pluginObject",
          "package": "hotswap",
          "signature": "FilePath",
          "source": "src/System-Plugins-Hotswap.html#Plugin",
          "type": "function"
        },
        "index": {
          "description": "Path to object",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "pluginObject",
          "package": "hotswap",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:pluginObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the contents of the \u003ccode\u003e\u003ca\u003epluginData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "putPlugin",
          "package": "hotswap",
          "signature": "Plugin a -\u003e a -\u003e IO ()",
          "source": "src/System-Plugins-Hotswap.html#putPlugin",
          "type": "function"
        },
        "index": {
          "description": "Replace the contents of the pluginData",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "putPlugin",
          "normalized": "Plugin a-\u003ea-\u003eIO()",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:putPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the \u003ccode\u003e\u003ca\u003epluginData\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "readPlugin",
          "package": "hotswap",
          "signature": "Plugin a -\u003e IO a",
          "source": "src/System-Plugins-Hotswap.html#readPlugin",
          "type": "function"
        },
        "index": {
          "description": "Read the pluginData IORef",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "readPlugin",
          "normalized": "Plugin a-\u003eIO a",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:readPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReload a plugin in-place.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "reloadPlugin",
          "package": "hotswap",
          "signature": "Plugin a -\u003e IO ()",
          "source": "src/System-Plugins-Hotswap.html#reloadPlugin",
          "type": "function"
        },
        "index": {
          "description": "Reload plugin in-place",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "reloadPlugin",
          "normalized": "Plugin a-\u003eIO()",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:reloadPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erunPlugin\u003c/a\u003e\u003c/code\u003e runs an 'IO a' returning \u003ccode\u003e\u003ca\u003ePlugin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "runPlugin",
          "package": "hotswap",
          "signature": "Plugin (IO a) -\u003e IO a",
          "source": "src/System-Plugins-Hotswap.html#runPlugin",
          "type": "function"
        },
        "index": {
          "description": "runPlugin runs an IO returning Plugin",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "runPlugin",
          "normalized": "Plugin(IO a)-\u003eIO a",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin(IO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:runPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eusePlugin\u003c/a\u003e\u003c/code\u003e provides a simple way to use plugins of type 'Plugin (a -\u003e b)', ie, only \n single argumented ones.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "usePlugin",
          "package": "hotswap",
          "signature": "Plugin (a -\u003e b) -\u003e a -\u003e IO b",
          "source": "src/System-Plugins-Hotswap.html#usePlugin",
          "type": "function"
        },
        "index": {
          "description": "usePlugin provides simple way to use plugins of type Plugin ie only single argumented ones",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "usePlugin",
          "normalized": "Plugin(a-\u003eb)-\u003ea-\u003eIO b",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin(a-\u003eb)-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:usePlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eusePlugin\u003c/a\u003e\u003c/code\u003e for plugins returning IO.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "usePluginIO",
          "package": "hotswap",
          "signature": "Plugin (a -\u003e IO b) -\u003e a -\u003e IO b",
          "source": "src/System-Plugins-Hotswap.html#usePluginIO",
          "type": "function"
        },
        "index": {
          "description": "usePlugin for plugins returning IO",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "usePluginIO",
          "normalized": "Plugin(a-\u003eIO b)-\u003ea-\u003eIO b",
          "package": "hotswap",
          "partial": "Plugin IO",
          "signature": "Plugin(a-\u003eIO b)-\u003ea-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:usePluginIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithPlugin\u003c/a\u003e\u003c/code\u003e provides a way to run a function on a plugin, modifying the plugin in-place.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "withPlugin",
          "package": "hotswap",
          "signature": "Plugin a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/System-Plugins-Hotswap.html#withPlugin",
          "type": "function"
        },
        "index": {
          "description": "withPlugin provides way to run function on plugin modifying the plugin in-place",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "withPlugin",
          "normalized": "Plugin a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "hotswap",
          "partial": "Plugin",
          "signature": "Plugin a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:withPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ewithPlugin\u003c/a\u003e\u003c/code\u003e for functions returning IO.\n\u003c/p\u003e",
          "module": "System.Plugins.Hotswap",
          "name": "withPluginIO",
          "package": "hotswap",
          "signature": "Plugin a -\u003e (a -\u003e IO a) -\u003e IO ()",
          "source": "src/System-Plugins-Hotswap.html#withPluginIO",
          "type": "function"
        },
        "index": {
          "description": "withPlugin for functions returning IO",
          "hierarchy": "System Plugins Hotswap",
          "module": "System.Plugins.Hotswap",
          "name": "withPluginIO",
          "normalized": "Plugin a-\u003e(a-\u003eIO a)-\u003eIO()",
          "package": "hotswap",
          "partial": "Plugin IO",
          "signature": "Plugin a-\u003e(a-\u003eIO a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hotswap/docs/System-Plugins-Hotswap.html#v:withPluginIO"
      }
    }
  ]
]