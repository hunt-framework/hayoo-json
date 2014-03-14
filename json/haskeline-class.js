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
        "word": "haskeline-class"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskeline provides all of its functionality within the scope of a monad transformer.\nThis module adds two pieces to this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Introduced here is a type-class which defines the operations\n   supported by the Haskeline monad transformer - MonadHaskeline\n\u003c/li\u003e\u003cli\u003e A newtype wrapper around Haskeline's InputT, called\n   HaskelineT. Sadly, InputT defines ints own instance of the\n   mtl MonadState, which is no good for folks wanting to use\n   InputT in an existing monad transformer stack.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHaskelineT also has an instance of MonadState, but it merely\n   lifts the functions further in the transformer stack.\n\u003c/p\u003e\u003cp\u003eLarge portions of the Haskeline functionality are re-exported\nhere for convinience.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "Class",
          "package": "haskeline-class",
          "source": "src/System-Console-Haskeline-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Haskeline provides all of its functionality within the scope of monad transformer This module adds two pieces to this Introduced here is type-class which defines the operations supported by the Haskeline monad transformer MonadHaskeline newtype wrapper around Haskeline InputT called HaskelineT Sadly InputT defines ints own instance of the mtl MonadState which is no good for folks wanting to use InputT in an existing monad transformer stack HaskelineT also has an instance of MonadState but it merely lifts the functions further in the transformer stack Large portions of the Haskeline functionality are re-exported here for convinience",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Class",
          "package": "haskeline-class",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "HaskelineT",
          "package": "haskeline-class",
          "source": "src/System-Console-Haskeline-Class.html#HaskelineT",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "HaskelineT",
          "package": "haskeline-class",
          "partial": "Haskeline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#t:HaskelineT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "Interrupt",
          "package": "haskeline-class",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Interrupt",
          "package": "haskeline-class",
          "partial": "Interrupt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#t:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "MonadHaskeline",
          "package": "haskeline-class",
          "source": "src/System-Console-Haskeline-Class.html#MonadHaskeline",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "MonadHaskeline",
          "package": "haskeline-class",
          "partial": "Monad Haskeline",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#t:MonadHaskeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e allow the user to customize the terminal-style line-editing interface.  They are\nread by default from \u003ccode\u003e~/.haskeline\u003c/code\u003e; to override that behavior, use\n\u003ccode\u003e\u003ca\u003ereadPrefs\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003erunInputTWithPrefs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEach line of a \u003ccode\u003e.haskeline\u003c/code\u003e file defines\none field of the \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e datatype; field names are case-insensitive and\nunparseable lines are ignored.  For example:\n\u003c/p\u003e\u003cpre\u003e editMode: Vi\n completionType: MenuCompletion\n maxhistorysize: Just 40\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "Prefs",
          "package": "haskeline-class",
          "type": "data"
        },
        "index": {
          "description": "Prefs allow the user to customize the terminal-style line-editing interface They are read by default from haskeline to override that behavior use readPrefs and runInputTWithPrefs Each line of haskeline file defines one field of the Prefs datatype field names are case-insensitive and unparseable lines are ignored For example editMode Vi completionType MenuCompletion maxhistorysize Just",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Prefs",
          "package": "haskeline-class",
          "partial": "Prefs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#t:Prefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplication-specific customizations to the user interface.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "Settings",
          "package": "haskeline-class",
          "type": "data"
        },
        "index": {
          "description": "Application-specific customizations to the user interface",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Settings",
          "package": "haskeline-class",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "Interrupt",
          "package": "haskeline-class",
          "signature": "Interrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Interrupt",
          "package": "haskeline-class",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:Interrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "Settings",
          "package": "haskeline-class",
          "signature": "Settings",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "Settings",
          "package": "haskeline-class",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, each nonblank line returned by\n \u003ccode\u003egetInputLine\u003c/code\u003e will be automatically added to the history.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "autoAddHistory",
          "package": "haskeline-class",
          "signature": "Bool",
          "type": "function"
        },
        "index": {
          "description": "If True each nonblank line returned by getInputLine will be automatically added to the history",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "autoAddHistory",
          "package": "haskeline-class",
          "partial": "Add History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:autoAddHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom tab completion.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "complete",
          "package": "haskeline-class",
          "signature": "CompletionFunc m",
          "type": "function"
        },
        "index": {
          "description": "Custom tab completion",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "complete",
          "package": "haskeline-class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default preferences which may be overwritten in the\n \u003ccode\u003e.haskeline\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "defaultPrefs",
          "package": "haskeline-class",
          "signature": "Prefs",
          "type": "function"
        },
        "index": {
          "description": "The default preferences which may be overwritten in the haskeline file",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "defaultPrefs",
          "package": "haskeline-class",
          "partial": "Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:defaultPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful default.  In particular:\n\u003c/p\u003e\u003cpre\u003e\n defaultSettings = Settings {\n           complete = completeFilename,\n           historyFile = Nothing,\n           autoAddHistory = True\n           }\n\u003c/pre\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "defaultSettings",
          "package": "haskeline-class",
          "signature": "Settings m",
          "type": "function"
        },
        "index": {
          "description": "useful default In particular defaultSettings Settings complete completeFilename historyFile Nothing autoAddHistory True",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "defaultSettings",
          "package": "haskeline-class",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:defaultSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "getInputChar",
          "package": "haskeline-class",
          "signature": "String -\u003e m (Maybe Char)",
          "source": "src/System-Console-Haskeline-Class.html#getInputChar",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "getInputChar",
          "normalized": "String-\u003ea(Maybe Char)",
          "package": "haskeline-class",
          "partial": "Input Char",
          "signature": "String-\u003em(Maybe Char)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:getInputChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "getInputLine",
          "package": "haskeline-class",
          "signature": "String -\u003e m (Maybe String)",
          "source": "src/System-Console-Haskeline-Class.html#getInputLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "getInputLine",
          "normalized": "String-\u003ea(Maybe String)",
          "package": "haskeline-class",
          "partial": "Input Line",
          "signature": "String-\u003em(Maybe String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:getInputLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch and handle an exception of type \u003ccode\u003e\u003ca\u003eInterrupt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "handleInterrupt",
          "package": "haskeline-class",
          "signature": "m a-\u003e m a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Catch and handle an exception of type Interrupt",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "handleInterrupt",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "haskeline-class",
          "partial": "Interrupt",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:handleInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhere to read/write the history at the\n start and end of each\n line input session.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "historyFile",
          "package": "haskeline-class",
          "signature": "Maybe FilePath",
          "type": "function"
        },
        "index": {
          "description": "Where to read write the history at the start and end of each line input session",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "historyFile",
          "package": "haskeline-class",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:historyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "outputStr",
          "package": "haskeline-class",
          "signature": "String -\u003e m ()",
          "source": "src/System-Console-Haskeline-Class.html#outputStr",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "outputStr",
          "normalized": "String-\u003ea()",
          "package": "haskeline-class",
          "partial": "Str",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:outputStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "outputStrLn",
          "package": "haskeline-class",
          "signature": "String -\u003e m ()",
          "source": "src/System-Console-Haskeline-Class.html#outputStrLn",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "outputStrLn",
          "normalized": "String-\u003ea()",
          "package": "haskeline-class",
          "partial": "Str Ln",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:outputStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead \u003ccode\u003e\u003ca\u003ePrefs\u003c/a\u003e\u003c/code\u003e from a given file.  If there is an error reading the file,\n the \u003ccode\u003e\u003ca\u003edefaultPrefs\u003c/a\u003e\u003c/code\u003e will be returned.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "readPrefs",
          "package": "haskeline-class",
          "signature": "FilePath -\u003e IO Prefs",
          "type": "function"
        },
        "index": {
          "description": "Read Prefs from given file If there is an error reading the file the defaultPrefs will be returned",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "readPrefs",
          "normalized": "FilePath-\u003eIO Prefs",
          "package": "haskeline-class",
          "partial": "Prefs",
          "signature": "FilePath-\u003eIO Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:readPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a line-reading application, reading user \u003ccode\u003ePrefs\u003c/code\u003e from \n \u003ccode\u003e~/.haskeline\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "runHaskelineT",
          "package": "haskeline-class",
          "signature": "Settings m -\u003e HaskelineT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-Class.html#runHaskelineT",
          "type": "function"
        },
        "index": {
          "description": "Run line-reading application reading user Prefs from haskeline",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "runHaskelineT",
          "normalized": "Settings a-\u003eHaskelineT a b-\u003ea b",
          "package": "haskeline-class",
          "partial": "Haskeline",
          "signature": "Settings m-\u003eHaskelineT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:runHaskelineT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Haskeline.Class",
          "name": "runHaskelineTWithPrefs",
          "package": "haskeline-class",
          "signature": "Prefs -\u003e Settings m -\u003e HaskelineT m a -\u003e m a",
          "source": "src/System-Console-Haskeline-Class.html#runHaskelineTWithPrefs",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "runHaskelineTWithPrefs",
          "normalized": "Prefs-\u003eSettings a-\u003eHaskelineT a b-\u003ea b",
          "package": "haskeline-class",
          "partial": "Haskeline TWith Prefs",
          "signature": "Prefs-\u003eSettings m-\u003eHaskelineT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:runHaskelineTWithPrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003ecomplete\u003c/a\u003e\u003c/code\u003e is the only field of \u003ccode\u003e\u003ca\u003eSettings\u003c/a\u003e\u003c/code\u003e depending on \u003ccode\u003em\u003c/code\u003e,\n the expression \u003ccode\u003edefaultSettings {completionFunc = f}\u003c/code\u003e leads to a type error\n from being too general.  This function works around that issue, and may become unnecessary if another field\n depending on \u003ccode\u003em\u003c/code\u003e is added.\n\u003c/p\u003e",
          "module": "System.Console.Haskeline.Class",
          "name": "setComplete",
          "package": "haskeline-class",
          "signature": "CompletionFunc m -\u003e Settings m -\u003e Settings m",
          "type": "function"
        },
        "index": {
          "description": "Because complete is the only field of Settings depending on the expression defaultSettings completionFunc leads to type error from being too general This function works around that issue and may become unnecessary if another field depending on is added",
          "hierarchy": "System Console Haskeline Class",
          "module": "System.Console.Haskeline.Class",
          "name": "setComplete",
          "normalized": "CompletionFunc a-\u003eSettings a-\u003eSettings a",
          "package": "haskeline-class",
          "partial": "Complete",
          "signature": "CompletionFunc m-\u003eSettings m-\u003eSettings m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskeline-class/docs/System-Console-Haskeline-Class.html#v:setComplete"
      }
    }
  ]
]