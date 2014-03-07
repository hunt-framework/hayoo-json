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
        "word": "zoom"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "Interpreter",
          "package": "zoom",
          "source": "src/Zoom-Interpreter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "Interpreter",
          "package": "zoom",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "availableTasks",
          "package": "zoom",
          "signature": "[String] -\u003e Interpreter [String]",
          "source": "src/Zoom-Interpreter.html#availableTasks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "availableTasks",
          "normalized": "[String]-\u003eInterpreter[String]",
          "package": "zoom",
          "partial": "Tasks",
          "signature": "[String]-\u003eInterpreter[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:availableTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "filterTaskFuns",
          "package": "zoom",
          "signature": "[String] -\u003e Interpreter [String]",
          "source": "src/Zoom-Interpreter.html#filterTaskFuns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "filterTaskFuns",
          "normalized": "[String]-\u003eInterpreter[String]",
          "package": "zoom",
          "partial": "Task Funs",
          "signature": "[String]-\u003eInterpreter[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:filterTaskFuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "getAvailableModules",
          "package": "zoom",
          "signature": "m [ModuleName]",
          "source": "src/Zoom-Interpreter.html#getAvailableModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "getAvailableModules",
          "normalized": "a[ModuleName]",
          "package": "zoom",
          "partial": "Available Modules",
          "signature": "m[ModuleName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:getAvailableModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "getFunctionsFromImports",
          "package": "zoom",
          "signature": "[ModuleName] -\u003e Interpreter [(ModuleName, [String])]",
          "source": "src/Zoom-Interpreter.html#getFunctionsFromImports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "getFunctionsFromImports",
          "normalized": "[ModuleName]-\u003eInterpreter[(ModuleName,[String])]",
          "package": "zoom",
          "partial": "Functions From Imports",
          "signature": "[ModuleName]-\u003eInterpreter[(ModuleName,[String])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:getFunctionsFromImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "ghcGetAvailableModules",
          "package": "zoom",
          "signature": "m [ModuleName]",
          "source": "src/Zoom-Interpreter.html#ghcGetAvailableModules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "ghcGetAvailableModules",
          "normalized": "a[ModuleName]",
          "package": "zoom",
          "partial": "Get Available Modules",
          "signature": "m[ModuleName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:ghcGetAvailableModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "ifM",
          "package": "zoom",
          "signature": "m Bool -\u003e md -\u003e m md",
          "source": "src/Zoom-Interpreter.html#ifM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "ifM",
          "normalized": "a Bool-\u003eb-\u003ea b",
          "package": "zoom",
          "signature": "m Bool-\u003emd-\u003em md",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eimports both local and global Zoom.Task.* modules. \n   returns the qualified module names of all Zoom.Task.* modules.\n\u003c/p\u003e",
          "module": "Zoom.Interpreter",
          "name": "importZoomTasks",
          "package": "zoom",
          "signature": "Interpreter [ModuleName]",
          "source": "src/Zoom-Interpreter.html#importZoomTasks",
          "type": "function"
        },
        "index": {
          "description": "imports both local and global Zoom.Task modules returns the qualified module names of all Zoom.Task modules",
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "importZoomTasks",
          "normalized": "Interpreter[ModuleName]",
          "package": "zoom",
          "partial": "Zoom Tasks",
          "signature": "Interpreter[ModuleName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:importZoomTasks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eentry point for the standard zoom interpreter\n\u003c/p\u003e",
          "module": "Zoom.Interpreter",
          "name": "interpreterMain",
          "package": "zoom",
          "signature": "[Args] -\u003e Interpreter ()",
          "source": "src/Zoom-Interpreter.html#interpreterMain",
          "type": "function"
        },
        "index": {
          "description": "entry point for the standard zoom interpreter",
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "interpreterMain",
          "normalized": "[Args]-\u003eInterpreter()",
          "package": "zoom",
          "partial": "Main",
          "signature": "[Args]-\u003eInterpreter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:interpreterMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eloads up modules located in the task subdirectory of the current directory.\n   note that this currently needs to be run before loading global tasks.\n\u003c/p\u003e",
          "module": "Zoom.Interpreter",
          "name": "loadLocalTaskModules",
          "package": "zoom",
          "signature": "Interpreter ()",
          "source": "src/Zoom-Interpreter.html#loadLocalTaskModules",
          "type": "function"
        },
        "index": {
          "description": "loads up modules located in the task subdirectory of the current directory note that this currently needs to be run before loading global tasks",
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "loadLocalTaskModules",
          "normalized": "Interpreter()",
          "package": "zoom",
          "partial": "Local Task Modules",
          "signature": "Interpreter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:loadLocalTaskModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Interpreter",
          "name": "runZoomInterpreter",
          "package": "zoom",
          "signature": "[Args] -\u003e IO (Either InterpreterError ())",
          "source": "src/Zoom-Interpreter.html#runZoomInterpreter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Interpreter",
          "module": "Zoom.Interpreter",
          "name": "runZoomInterpreter",
          "normalized": "[Args]-\u003eIO(Either InterpreterError())",
          "package": "zoom",
          "partial": "Zoom Interpreter",
          "signature": "[Args]-\u003eIO(Either InterpreterError())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Interpreter.html#v:runZoomInterpreter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task.Demo",
          "name": "Demo",
          "package": "zoom",
          "source": "src/Zoom-Task-Demo.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Zoom Task Demo",
          "module": "Zoom.Task.Demo",
          "name": "Demo",
          "package": "zoom",
          "partial": "Demo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task-Demo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "Task",
          "package": "zoom",
          "source": "src/Zoom-Task.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "Task",
          "package": "zoom",
          "partial": "Task",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "Args",
          "package": "zoom",
          "source": "src/Zoom-Task.html#Args",
          "type": "data"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "Args",
          "package": "zoom",
          "partial": "Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "ZoomTask",
          "package": "zoom",
          "source": "src/Zoom-Task.html#ZoomTask",
          "type": "data"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "ZoomTask",
          "package": "zoom",
          "partial": "Zoom Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#t:ZoomTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "Args",
          "package": "zoom",
          "signature": "Args String",
          "source": "src/Zoom-Task.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "Args",
          "package": "zoom",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#v:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "Task",
          "package": "zoom",
          "signature": "Task",
          "source": "src/Zoom-Task.html#ZoomTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "Task",
          "package": "zoom",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#v:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "desc",
          "package": "zoom",
          "signature": "String",
          "source": "src/Zoom-Task.html#ZoomTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "desc",
          "package": "zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#v:desc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Task",
          "name": "fromTask",
          "package": "zoom",
          "signature": "[Args] -\u003e IO a",
          "source": "src/Zoom-Task.html#ZoomTask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Task",
          "module": "Zoom.Task",
          "name": "fromTask",
          "normalized": "[Args]-\u003eIO a",
          "package": "zoom",
          "partial": "Task",
          "signature": "[Args]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Task.html#v:fromTask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Template",
          "name": "Template",
          "package": "zoom",
          "source": "src/Zoom-Template.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Zoom Template",
          "module": "Zoom.Template",
          "name": "Template",
          "package": "zoom",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Template",
          "name": "render",
          "package": "zoom",
          "signature": "(a -\u003e t) -\u003e t",
          "source": "src/Zoom-Template-TH.html#render",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Template",
          "module": "Zoom.Template",
          "name": "render",
          "normalized": "(a-\u003eb)-\u003eb",
          "package": "zoom",
          "signature": "(a-\u003et)-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Template.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Template",
          "name": "zoom",
          "package": "zoom",
          "signature": "QuasiQuoter",
          "source": "src/Zoom-Template-TH.html#zoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Template",
          "module": "Zoom.Template",
          "name": "zoom",
          "package": "zoom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Template.html#v:zoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Zoom.Template",
          "name": "zoomFile",
          "package": "zoom",
          "signature": "FilePath -\u003e Q Exp",
          "source": "src/Zoom-Template-TH.html#zoomFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Zoom Template",
          "module": "Zoom.Template",
          "name": "zoomFile",
          "normalized": "FilePath-\u003eQ Exp",
          "package": "zoom",
          "partial": "File",
          "signature": "FilePath-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zoom/docs/Zoom-Template.html#v:zoomFile"
      }
    }
  ]
]