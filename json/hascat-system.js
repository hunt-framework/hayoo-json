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
        "word": "hascat-system"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "App",
          "package": "hascat-system",
          "source": "src/Hascat-System-App.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "App",
          "package": "hascat-system",
          "partial": "App",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "defaultDone",
          "package": "hascat-system",
          "signature": "DoneHandler a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "defaultDone",
          "package": "hascat-system",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:defaultDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "defaultInit",
          "package": "hascat-system",
          "signature": "InitHandler ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "defaultInit",
          "normalized": "InitHandler()",
          "package": "hascat-system",
          "partial": "Init",
          "signature": "InitHandler()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:defaultInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "hasContextPath",
          "package": "hascat-system",
          "signature": "ContextPath -\u003e App -\u003e Bool",
          "source": "src/Hascat-System-App.html#hasContextPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "hasContextPath",
          "normalized": "ContextPath-\u003eApp-\u003eBool",
          "package": "hascat-system",
          "partial": "Context Path",
          "signature": "ContextPath-\u003eApp-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:hasContextPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "isPaused",
          "package": "hascat-system",
          "signature": "App -\u003e Bool",
          "source": "src/Hascat-System-App.html#isPaused",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "isPaused",
          "normalized": "App-\u003eBool",
          "package": "hascat-system",
          "partial": "Paused",
          "signature": "App-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:isPaused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "isRunning",
          "package": "hascat-system",
          "signature": "App -\u003e Bool",
          "source": "src/Hascat-System-App.html#isRunning",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "isRunning",
          "normalized": "App-\u003eBool",
          "package": "hascat-system",
          "partial": "Running",
          "signature": "App-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:isRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "loadFromModule",
          "package": "hascat-system",
          "signature": "PluginLoader -\u003e FilePath -\u003e String -\u003e IO (Module, a)",
          "source": "src/Hascat-System-App.html#loadFromModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "loadFromModule",
          "normalized": "PluginLoader-\u003eFilePath-\u003eString-\u003eIO(Module,a)",
          "package": "hascat-system",
          "partial": "From Module",
          "signature": "PluginLoader-\u003eFilePath-\u003eString-\u003eIO(Module,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:loadFromModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "pause",
          "package": "hascat-system",
          "signature": "App -\u003e IO App",
          "source": "src/Hascat-System-App.html#pause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "pause",
          "normalized": "App-\u003eIO App",
          "package": "hascat-system",
          "signature": "App-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:pause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "reload",
          "package": "hascat-system",
          "signature": "App -\u003e IO App",
          "source": "src/Hascat-System-App.html#reload",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "reload",
          "normalized": "App-\u003eIO App",
          "package": "hascat-system",
          "signature": "App-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:reload"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "reloadFromModule",
          "package": "hascat-system",
          "signature": "Module -\u003e String -\u003e IO (Module, a)",
          "source": "src/Hascat-System-App.html#reloadFromModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "reloadFromModule",
          "normalized": "Module-\u003eString-\u003eIO(Module,a)",
          "package": "hascat-system",
          "partial": "From Module",
          "signature": "Module-\u003eString-\u003eIO(Module,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:reloadFromModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "resume",
          "package": "hascat-system",
          "signature": "App -\u003e IO App",
          "source": "src/Hascat-System-App.html#resume",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "resume",
          "normalized": "App-\u003eIO App",
          "package": "hascat-system",
          "signature": "App-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:resume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "start",
          "package": "hascat-system",
          "signature": "App -\u003e IO App",
          "source": "src/Hascat-System-App.html#start",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "start",
          "normalized": "App-\u003eIO App",
          "package": "hascat-system",
          "signature": "App-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "stop",
          "package": "hascat-system",
          "signature": "App -\u003e IO App",
          "source": "src/Hascat-System-App.html#stop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "stop",
          "normalized": "App-\u003eIO App",
          "package": "hascat-system",
          "signature": "App-\u003eIO App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.App",
          "name": "use",
          "package": "hascat-system",
          "signature": "App -\u003e ServletRequest -\u003e IO (Response ByteString)",
          "source": "src/Hascat-System-App.html#use",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System App",
          "module": "Hascat.System.App",
          "name": "use",
          "normalized": "App-\u003eServletRequest-\u003eIO(Response ByteString)",
          "package": "hascat-system",
          "signature": "App-\u003eServletRequest-\u003eIO(Response ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-App.html#v:use"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "Controller",
          "package": "hascat-system",
          "source": "src/Hascat-System-Controller.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "Controller",
          "package": "hascat-system",
          "partial": "Controller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "State",
          "package": "hascat-system",
          "source": "src/Hascat-System-Controller.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "State",
          "package": "hascat-system",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "StateVar",
          "package": "hascat-system",
          "source": "src/Hascat-System-Controller.html#StateVar",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "StateVar",
          "package": "hascat-system",
          "partial": "State Var",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#t:StateVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "State",
          "package": "hascat-system",
          "signature": "State",
          "source": "src/Hascat-System-Controller.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "State",
          "package": "hascat-system",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "findApp",
          "package": "hascat-system",
          "signature": "[App] -\u003e (App -\u003e Bool) -\u003e Maybe App",
          "source": "src/Hascat-System-Controller.html#findApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "findApp",
          "normalized": "[App]-\u003e(App-\u003eBool)-\u003eMaybe App",
          "package": "hascat-system",
          "partial": "App",
          "signature": "[App]-\u003e(App-\u003eBool)-\u003eMaybe App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:findApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "insertApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e App -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#insertApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "insertApp",
          "normalized": "StateVar-\u003eApp-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eApp-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:insertApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "loadApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e AppConfig -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#loadApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "loadApp",
          "normalized": "StateVar-\u003eAppConfig-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eAppConfig-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:loadApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "pauseApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#pauseApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "pauseApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:pauseApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "reloadApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#reloadApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "reloadApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:reloadApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "resumeApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#resumeApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "resumeApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:resumeApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "stApps",
          "package": "hascat-system",
          "signature": "[App]",
          "source": "src/Hascat-System-Controller.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "stApps",
          "normalized": "[App]",
          "package": "hascat-system",
          "partial": "Apps",
          "signature": "[App]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:stApps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "stGeneral",
          "package": "hascat-system",
          "signature": "General",
          "source": "src/Hascat-System-Controller.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "stGeneral",
          "package": "hascat-system",
          "partial": "General",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:stGeneral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "stProcessID",
          "package": "hascat-system",
          "signature": "ProcessID",
          "source": "src/Hascat-System-Controller.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "stProcessID",
          "package": "hascat-system",
          "partial": "Process ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:stProcessID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "startApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#startApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "startApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:startApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "stopApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#stopApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "stopApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:stopApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hascat.System.Controller",
          "name": "undeployApp",
          "package": "hascat-system",
          "signature": "StateVar -\u003e ContextPath -\u003e IO StateVar",
          "source": "src/Hascat-System-Controller.html#undeployApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hascat System Controller",
          "module": "Hascat.System.Controller",
          "name": "undeployApp",
          "normalized": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "package": "hascat-system",
          "partial": "App",
          "signature": "StateVar-\u003eContextPath-\u003eIO StateVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hascat-system/docs/Hascat-System-Controller.html#v:undeployApp"
      }
    }
  ]
]