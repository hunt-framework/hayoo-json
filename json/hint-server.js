[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a server process (implemented using eprocess) that can receive and run actions in the Interpreter monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Interpreter-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "This module provides server process implemented using eprocess that can receive and run actions in the Interpreter monad",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "Server",
        "normalized": "",
        "package": "hint-server",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#t:ServerHandle",
      "description": {
        "fct-descr": "\u003cp\u003eThe server handle.  It's returned on process creation and should be used\n afterwards to send messages to it\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "data",
        "fct-source": "src/Language-Haskell-Interpreter-Server.html#ServerHandle",
        "fct-type": "data",
        "title": "ServerHandle"
      },
      "index": {
        "description": "The server handle It returned on process creation and should be used afterwards to send messages to it",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "ServerHandle",
        "normalized": "",
        "package": "hint-server",
        "partial": "Server Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#v:asyncRunIn",
      "description": {
        "fct-descr": "\u003cp\u003eAsynchronically runs an action and returns the \u003cem\u003eMVar\u003c/em\u003e that will be filled\n with the result when it's there. Usage:\n \u003ccode\u003e\n      mvar \u003c- asyncRunIn serverhandle action\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "ServerHandle-\u003e InterpreterT IO a-\u003e IO (MVar (Either InterpreterError a))",
        "fct-type": "function",
        "title": "asyncRunIn"
      },
      "index": {
        "description": "Asynchronically runs an action and returns the MVar that will be filled with the result when it there Usage mvar asyncRunIn serverhandle action",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "asyncRunIn",
        "normalized": "ServerHandle-\u003eInterpreterT IO a-\u003eIO(MVar(Either InterpreterError a))",
        "package": "hint-server",
        "partial": "Run In",
        "signature": "ServerHandle-\u003eInterpreterT IO a-\u003eIO(MVar(Either InterpreterError a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eRuns all the pending actions (those that where run using \u003ccode\u003e\u003ca\u003easyncRunIn\u003c/a\u003e\u003c/code\u003e. Usage:\n \u003ccode\u003e\n      flush serverhandle\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "ServerHandle-\u003e IO (Either InterpreterError ())",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Runs all the pending actions those that where run using asyncRunIn Usage flush serverhandle",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "flush",
        "normalized": "ServerHandle-\u003eIO(Either InterpreterError())",
        "package": "hint-server",
        "partial": "",
        "signature": "ServerHandle-\u003eIO(Either InterpreterError())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#v:runIn",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the action. Usage:\n \u003ccode\u003e\n      result \u003c- runIn serverhandle action\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "ServerHandle-\u003e InterpreterT IO a-\u003e IO (Either InterpreterError a)",
        "fct-type": "function",
        "title": "runIn"
      },
      "index": {
        "description": "Runs the action Usage result runIn serverhandle action",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "runIn",
        "normalized": "ServerHandle-\u003eInterpreterT IO a-\u003eIO(Either InterpreterError a)",
        "package": "hint-server",
        "partial": "In",
        "signature": "ServerHandle-\u003eInterpreterT IO a-\u003eIO(Either InterpreterError a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#v:start",
      "description": {
        "fct-descr": "\u003cp\u003eStarts the server. Usage:\n \u003ccode\u003e\n      handle \u003c- start\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "IO ServerHandle",
        "fct-source": "src/Language-Haskell-Interpreter-Server.html#start",
        "fct-type": "function",
        "title": "start"
      },
      "index": {
        "description": "Starts the server Usage handle start",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "start",
        "normalized": "",
        "package": "hint-server",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hint-server/docs/Language-Haskell-Interpreter-Server.html#v:stop",
      "description": {
        "fct-descr": "\u003cp\u003eStops the server. Usage:\n \u003ccode\u003e\n      stop serverhandle\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Interpreter.Server",
        "fct-package": "hint-server",
        "fct-signature": "ServerHandle -\u003e IO ()",
        "fct-source": "src/Language-Haskell-Interpreter-Server.html#stop",
        "fct-type": "function",
        "title": "stop"
      },
      "index": {
        "description": "Stops the server Usage stop serverhandle",
        "hierarchy": "Language Haskell Interpreter Server",
        "module": "Language.Haskell.Interpreter.Server",
        "name": "stop",
        "normalized": "ServerHandle-\u003eIO()",
        "package": "hint-server",
        "partial": "",
        "signature": "ServerHandle-\u003eIO()"
      }
    }
  }
]