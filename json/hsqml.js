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
        "word": "hsqml"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDebug Options\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.QML.Debug",
          "name": "Debug",
          "package": "hsqml",
          "type": "module"
        },
        "index": {
          "description": "Debug Options",
          "hierarchy": "Graphics QML Debug",
          "module": "Graphics.QML.Debug",
          "name": "Debug",
          "package": "hsqml",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the global debug log level. At level zero, no logging information\n will be printed. Higher levels will increase debug verbosity.\n\u003c/p\u003e",
          "module": "Graphics.QML.Debug",
          "name": "setDebugLogLevel",
          "package": "hsqml",
          "signature": "Int -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Sets the global debug log level At level zero no logging information will be printed Higher levels will increase debug verbosity",
          "hierarchy": "Graphics QML Debug",
          "module": "Graphics.QML.Debug",
          "name": "setDebugLogLevel",
          "normalized": "Int-\u003eIO()",
          "package": "hsqml",
          "partial": "Debug Log Level",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Debug.html#v:setDebugLogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for starting QML engines, displaying content in a window.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.QML.Engine",
          "name": "Engine",
          "package": "hsqml",
          "type": "module"
        },
        "index": {
          "description": "Functions for starting QML engines displaying content in window",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "Engine",
          "package": "hsqml",
          "partial": "Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a QML engine.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "Engine",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Represents QML engine",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "Engine",
          "package": "hsqml",
          "partial": "Engine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#t:Engine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHolds parameters for configuring a QML runtime engine.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "EngineConfig",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Holds parameters for configuring QML runtime engine",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "EngineConfig",
          "package": "hsqml",
          "partial": "Engine Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#t:EngineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException type used to report errors pertaining to the event loop.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "EventLoopException",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Exception type used to report errors pertaining to the event loop",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "EventLoopException",
          "package": "hsqml",
          "partial": "Event Loop Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#t:EventLoopException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the intial state of the display window.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "InitialWindowState",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Specifies the intial state of the display window",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "InitialWindowState",
          "package": "hsqml",
          "partial": "Initial Window State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#t:InitialWindowState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around the IO monad for running actions which depend on the Qt\n event loop.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "RunQML",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Wrapper around the IO monad for running actions which depend on the Qt event loop",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "RunQML",
          "package": "hsqml",
          "partial": "Run QML",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#t:RunQML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.QML.Engine",
          "name": "EngineConfig",
          "package": "hsqml",
          "signature": "EngineConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "EngineConfig",
          "package": "hsqml",
          "partial": "Engine Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:EngineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA window should be created for the initial document, but it will remain\n hidden until made visible by the QML script.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "HideWindow",
          "package": "hsqml",
          "signature": "HideWindow",
          "type": "function"
        },
        "index": {
          "description": "window should be created for the initial document but it will remain hidden until made visible by the QML script",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "HideWindow",
          "package": "hsqml",
          "partial": "Hide Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:HideWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA visible window should be created for the initial document with a\n default title.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "ShowWindow",
          "package": "hsqml",
          "signature": "ShowWindow",
          "type": "function"
        },
        "index": {
          "description": "visible window should be created for the initial document with default title",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "ShowWindow",
          "package": "hsqml",
          "partial": "Show Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:ShowWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA visible window should be created for the initial document with the\n given title.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "ShowWindowWithTitle",
          "package": "hsqml",
          "signature": "ShowWindowWithTitle String",
          "type": "function"
        },
        "index": {
          "description": "visible window should be created for the initial document with the given title",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "ShowWindowWithTitle",
          "package": "hsqml",
          "partial": "Show Window With Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:ShowWindowWithTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContext \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e made available to QML script code.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "contextObject",
          "package": "hsqml",
          "signature": "Maybe AnyObjRef",
          "type": "function"
        },
        "index": {
          "description": "Context Object made available to QML script code",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "contextObject",
          "package": "hsqml",
          "partial": "Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:contextObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault engine configuration. Loads \u003ccode\u003e\"main.qml\"\u003c/code\u003e from the current\n working directory into a visible window with no context object.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "defaultEngineConfig",
          "package": "hsqml",
          "signature": "EngineConfig",
          "type": "function"
        },
        "index": {
          "description": "Default engine configuration Loads main.qml from the current working directory into visible window with no context object",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "defaultEngineConfig",
          "package": "hsqml",
          "partial": "Engine Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:defaultEngineConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for converting local file paths into URIs.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "filePathToURI",
          "package": "hsqml",
          "signature": "FilePath -\u003e URI",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for converting local file paths into URIs",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "filePathToURI",
          "normalized": "FilePath-\u003eURI",
          "package": "hsqml",
          "partial": "Path To URI",
          "signature": "FilePath-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:filePathToURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL for the first QML document to be loaded.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "initialURL",
          "package": "hsqml",
          "signature": "URI",
          "type": "function"
        },
        "index": {
          "description": "URL for the first QML document to be loaded",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "initialURL",
          "package": "hsqml",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:initialURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWindow state for the initial QML document.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "initialWindowState",
          "package": "hsqml",
          "signature": "InitialWindowState",
          "type": "function"
        },
        "index": {
          "description": "Window state for the initial QML document",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "initialWindowState",
          "package": "hsqml",
          "partial": "Window State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:initialWindowState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a function in the \u003ccode\u003e\u003ca\u003eRunQML\u003c/a\u003e\u003c/code\u003e monad asynchronously to the event\n loop. Callers must apply their own sychronisation to ensure that the event\n loop is currently running when this function is called, otherwise an\n \u003ccode\u003e\u003ca\u003eEventLoopException\u003c/a\u003e\u003c/code\u003e will be thrown. The event loop will not exit until the\n supplied function has completed.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "requireEventLoop",
          "package": "hsqml",
          "signature": "RunQML a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Executes function in the RunQML monad asynchronously to the event loop Callers must apply their own sychronisation to ensure that the event loop is currently running when this function is called otherwise an EventLoopException will be thrown The event loop will not exit until the supplied function has completed",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "requireEventLoop",
          "normalized": "RunQML a-\u003eIO a",
          "package": "hsqml",
          "partial": "Event Loop",
          "signature": "RunQML a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:requireEventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a new QML engine using the supplied configuration and blocks until\n the engine has terminated.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "runEngine",
          "package": "hsqml",
          "signature": "EngineConfig -\u003e RunQML ()",
          "type": "function"
        },
        "index": {
          "description": "Starts new QML engine using the supplied configuration and blocks until the engine has terminated",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "runEngine",
          "normalized": "EngineConfig-\u003eRunQML()",
          "package": "hsqml",
          "partial": "Engine",
          "signature": "EngineConfig-\u003eRunQML()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:runEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a new QML engine using the supplied configuration and returns\n immediately without blocking.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "runEngineAsync",
          "package": "hsqml",
          "signature": "EngineConfig -\u003e RunQML Engine",
          "type": "function"
        },
        "index": {
          "description": "Starts new QML engine using the supplied configuration and returns immediately without blocking",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "runEngineAsync",
          "normalized": "EngineConfig-\u003eRunQML Engine",
          "package": "hsqml",
          "partial": "Engine Async",
          "signature": "EngineConfig-\u003eRunQML Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:runEngineAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConveniance function that both runs the event loop and starts a new QML\n engine. It blocks keeping the event loop running until the engine has\n terminated.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "runEngineLoop",
          "package": "hsqml",
          "signature": "EngineConfig -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Conveniance function that both runs the event loop and starts new QML engine It blocks keeping the event loop running until the engine has terminated",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "runEngineLoop",
          "normalized": "EngineConfig-\u003eIO()",
          "package": "hsqml",
          "partial": "Engine Loop",
          "signature": "EngineConfig-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:runEngineLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a new QML engine using the supplied configuration. The 'with'\n function is executed once the engine has been started and after it returns\n this function blocks until the engine has terminated.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "runEngineWith",
          "package": "hsqml",
          "signature": "EngineConfig -\u003e (Engine -\u003e RunQML a) -\u003e RunQML a",
          "type": "function"
        },
        "index": {
          "description": "Starts new QML engine using the supplied configuration The with function is executed once the engine has been started and after it returns this function blocks until the engine has terminated",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "runEngineWith",
          "normalized": "EngineConfig-\u003e(Engine-\u003eRunQML a)-\u003eRunQML a",
          "package": "hsqml",
          "partial": "Engine With",
          "signature": "EngineConfig-\u003e(Engine-\u003eRunQML a)-\u003eRunQML a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:runEngineWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function enters the Qt event loop and executes the supplied function\n in the \u003ccode\u003e\u003ca\u003eRunQML\u003c/a\u003e\u003c/code\u003e monad on a new unbound thread. The event loop will continue\n to run until all functions in the \u003ccode\u003e\u003ca\u003eRunQML\u003c/a\u003e\u003c/code\u003e monad have completed. This\n includes both the \u003ccode\u003e\u003ca\u003eRunQML\u003c/a\u003e\u003c/code\u003e function launched by this call and any launched\n asynchronously via \u003ccode\u003e\u003ca\u003erequireEventLoop\u003c/a\u003e\u003c/code\u003e. When the event loop exits, all\n engines will be terminated.\n\u003c/p\u003e\u003cp\u003eIt's recommended that applications run the event loop on their primordial\n thread as some platforms mandate this. Once the event loop has finished, it\n can be started again, but only on the same operating system thread as\n before. If the event loop fails to start then an \u003ccode\u003e\u003ca\u003eEventLoopException\u003c/a\u003e\u003c/code\u003e will\n be thrown.\n\u003c/p\u003e",
          "module": "Graphics.QML.Engine",
          "name": "runEventLoop",
          "package": "hsqml",
          "signature": "RunQML a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "This function enters the Qt event loop and executes the supplied function in the RunQML monad on new unbound thread The event loop will continue to run until all functions in the RunQML monad have completed This includes both the RunQML function launched by this call and any launched asynchronously via requireEventLoop When the event loop exits all engines will be terminated It recommended that applications run the event loop on their primordial thread as some platforms mandate this Once the event loop has finished it can be started again but only on the same operating system thread as before If the event loop fails to start then an EventLoopException will be thrown",
          "hierarchy": "Graphics QML Engine",
          "module": "Graphics.QML.Engine",
          "name": "runEventLoop",
          "normalized": "RunQML a-\u003eIO a",
          "package": "hsqml",
          "partial": "Event Loop",
          "signature": "RunQML a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Engine.html#v:runEventLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classs and instances for marshalling values between Haskell and QML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "Marshal",
          "package": "hsqml",
          "type": "module"
        },
        "index": {
          "description": "Type classs and instances for marshalling values between Haskell and QML",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "Marshal",
          "package": "hsqml",
          "partial": "Marshal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eMarshal\u003c/a\u003e\u003c/code\u003e allows Haskell values to be marshalled to and from the\n QML environment.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "Marshal",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "The class Marshal allows Haskell values to be marshalled to and from the QML environment",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "Marshal",
          "package": "hsqml",
          "partial": "Marshal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:Marshal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003es which support marshalling QML-to-Haskell\n in contexts specific to objects.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalFromObj",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Class for MarshalMode which support marshalling QML-to-Haskell in contexts specific to objects",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalFromObj",
          "package": "hsqml",
          "partial": "Marshal From Obj",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:MarshalFromObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003es which support marshalling QML-to-Haskell.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToHs",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Class for MarshalMode which support marshalling QML-to-Haskell",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToHs",
          "package": "hsqml",
          "partial": "Marshal To Hs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:MarshalToHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003es which support marshalling Haskell-to-QML\n in contexts specific to objects.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToObj",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Class for MarshalMode which support marshalling Haskell-to-QML in contexts specific to objects",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToObj",
          "package": "hsqml",
          "partial": "Marshal To Obj",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:MarshalToObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003es which support marshalling Haskell-to-QML,\n excluding the return of void from methods.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToVal",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Class for MarshalMode which support marshalling Haskell-to-QML excluding the return of void from methods",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToVal",
          "package": "hsqml",
          "partial": "Marshal To Val",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:MarshalToVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for \u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003es which support marshalling Haskell-to-QML.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToValRaw",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Class for MarshalMode which support marshalling Haskell-to-QML",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "MarshalToValRaw",
          "package": "hsqml",
          "partial": "Marshal To Val Raw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:MarshalToValRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates the functionality to needed to implement an instance of\n \u003ccode\u003e\u003ca\u003eMarshal\u003c/a\u003e\u003c/code\u003e so that such instances can be defined without access to\n implementation details.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "Marshaller",
          "package": "hsqml",
          "signature": "Marshaller",
          "type": "function"
        },
        "index": {
          "description": "Encapsulates the functionality to needed to implement an instance of Marshal so that such instances can be defined without access to implementation details",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "Marshaller",
          "package": "hsqml",
          "partial": "Marshaller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:Marshaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType function yielding the object type speficied by a given marshallable\n type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "ThisObj",
          "package": "hsqml",
          "type": "type"
        },
        "index": {
          "description": "Type function yielding the object type speficied by given marshallable type tt",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "ThisObj",
          "package": "hsqml",
          "partial": "This Obj",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:ThisObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003e for built-in data types.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "ValBidi",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "MarshalMode for built-in data types",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "ValBidi",
          "package": "hsqml",
          "partial": "Val Bidi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:ValBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003e for void in method returns.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "ValFnRetVoid",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "MarshalMode for void in method returns",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "ValFnRetVoid",
          "package": "hsqml",
          "partial": "Val Fn Ret Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:ValFnRetVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003e for object types.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "ValObjBidi",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "MarshalMode for object types",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "ValObjBidi",
          "package": "hsqml",
          "partial": "Val Obj Bidi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:ValObjBidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMarshalMode\u003c/a\u003e\u003c/code\u003e for object types, operating only in the QML-to-Haskell\n direction.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "ValObjToOnly",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "MarshalMode for object types operating only in the QML-to-Haskell direction",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "ValObjToOnly",
          "package": "hsqml",
          "partial": "Val Obj To Only",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#t:ValObjToOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields the \u003ccode\u003e\u003ca\u003eMarshaller\u003c/a\u003e\u003c/code\u003e for the type \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Marshal",
          "name": "marshaller",
          "package": "hsqml",
          "signature": "Marshaller t (MarshalMode t)",
          "type": "method"
        },
        "index": {
          "description": "Yields the Marshaller for the type",
          "hierarchy": "Graphics QML Marshal",
          "module": "Graphics.QML.Marshal",
          "name": "marshaller",
          "package": "hsqml",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Marshal.html#v:marshaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacilities for defining new object types which can be marshalled between\n Haskell and QML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.QML.Objects",
          "name": "Objects",
          "package": "hsqml",
          "type": "module"
        },
        "index": {
          "description": "Facilities for defining new object types which can be marshalled between Haskell and QML",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "Objects",
          "package": "hsqml",
          "partial": "Objects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an instance of a QML class which wraps an arbitrary Haskell\n type. Unlike \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eAnyObjRef\u003c/a\u003e\u003c/code\u003e only carries the type of its Haskell\n value dynamically and does not encode it into the static type.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "AnyObjRef",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Represents an instance of QML class which wraps an arbitrary Haskell type Unlike ObjRef an AnyObjRef only carries the type of its Haskell value dynamically and does not encode it into the static type",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "AnyObjRef",
          "package": "hsqml",
          "partial": "Any Obj Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:AnyObjRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the API of the QML class which wraps the type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "ClassDef",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Represents the API of the QML class which wraps the type tt",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "ClassDef",
          "package": "hsqml",
          "partial": "Class Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:ClassDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a named member of the QML class which wraps type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "Member",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Represents named member of the QML class which wraps type tt",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "Member",
          "package": "hsqml",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupports marshalling Haskell functions with an arbitrary number of\n arguments.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "MethodSuffix",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Supports marshalling Haskell functions with an arbitrary number of arguments",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "MethodSuffix",
          "package": "hsqml",
          "partial": "Method Suffix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:MethodSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents an instance of the QML class which wraps the type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "ObjRef",
          "package": "hsqml",
          "type": "data"
        },
        "index": {
          "description": "Represents an instance of the QML class which wraps the type tt",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "ObjRef",
          "package": "hsqml",
          "partial": "Obj Ref",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:ObjRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e allows Haskell types to expose an object-oriented\n interface to QML. \n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "Object",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "The class Object allows Haskell types to expose an object-oriented interface to QML",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "Object",
          "package": "hsqml",
          "partial": "Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of the \u003ccode\u003e\u003ca\u003eSignalKey\u003c/a\u003e\u003c/code\u003e class identify distinct signals. The\n associated \u003ccode\u003e\u003ca\u003eSignalParams\u003c/a\u003e\u003c/code\u003e type specifies the signal's signature.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "SignalKey",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Instances of the SignalKey class identify distinct signals The associated SignalParams type specifies the signal signature",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "SignalKey",
          "package": "hsqml",
          "partial": "Signal Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:SignalKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupports marshalling an arbitrary number of arguments into a QML signal.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "SignalSuffix",
          "package": "hsqml",
          "type": "class"
        },
        "index": {
          "description": "Supports marshalling an arbitrary number of arguments into QML signal",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "SignalSuffix",
          "package": "hsqml",
          "partial": "Signal Suffix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#t:SignalSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpcasts an \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eAnyObjRef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "anyObjRef",
          "package": "hsqml",
          "signature": "ObjRef tt -\u003e AnyObjRef",
          "type": "function"
        },
        "index": {
          "description": "Upcasts an ObjRef into an AnyObjRef",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "anyObjRef",
          "normalized": "ObjRef a-\u003eAnyObjRef",
          "package": "hsqml",
          "partial": "Obj Ref",
          "signature": "ObjRef tt-\u003eAnyObjRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:anyObjRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.QML.Objects",
          "name": "classDef",
          "package": "hsqml",
          "signature": "ClassDef tt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "classDef",
          "package": "hsqml",
          "partial": "Def",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:classDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eClassDef\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "defClass",
          "package": "hsqml",
          "signature": "[Member tt] -\u003e ClassDef tt",
          "type": "function"
        },
        "index": {
          "description": "Generates ClassDef from list of Member",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "defClass",
          "normalized": "[Member a]-\u003eClassDef a",
          "package": "hsqml",
          "partial": "Class",
          "signature": "[Member tt]-\u003eClassDef tt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:defClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a named method using a function \u003ccode\u003ef\u003c/code\u003e in the IO monad.\n\u003c/p\u003e\u003cp\u003eThe first argument to \u003ccode\u003ef\u003c/code\u003e receives the \"this\" object and hence must match\n the type of the class on which the method is being defined. Subsequently,\n there may be zero or more parameter arguments followed by an optional return\n argument in the IO monad.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "defMethod",
          "package": "hsqml",
          "signature": "String -\u003e (tt -\u003e ms) -\u003e Member (ThisObj tt)",
          "type": "function"
        },
        "index": {
          "description": "Defines named method using function in the IO monad The first argument to receives the this object and hence must match the type of the class on which the method is being defined Subsequently there may be zero or more parameter arguments followed by an optional return argument in the IO monad",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "defMethod",
          "normalized": "String-\u003e(a-\u003eb)-\u003eMember(ThisObj a)",
          "package": "hsqml",
          "partial": "Method",
          "signature": "String-\u003e(tt-\u003ems)-\u003eMember(ThisObj tt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:defMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a named read-only property using an accessor function in the IO\n monad.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "defPropertyRO",
          "package": "hsqml",
          "signature": "String -\u003e (tt -\u003e IO tr) -\u003e Member (ThisObj tt)",
          "type": "function"
        },
        "index": {
          "description": "Defines named read-only property using an accessor function in the IO monad",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "defPropertyRO",
          "normalized": "String-\u003e(a-\u003eIO b)-\u003eMember(ThisObj a)",
          "package": "hsqml",
          "partial": "Property RO",
          "signature": "String-\u003e(tt-\u003eIO tr)-\u003eMember(ThisObj tt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:defPropertyRO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a named read-write property using a pair of accessor and mutator\n functions in the IO monad.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "defPropertyRW",
          "package": "hsqml",
          "signature": "String -\u003e (tt -\u003e IO tr) -\u003e (tt -\u003e tr -\u003e IO ()) -\u003e Member (ThisObj tt)",
          "type": "function"
        },
        "index": {
          "description": "Defines named read-write property using pair of accessor and mutator functions in the IO monad",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "defPropertyRW",
          "normalized": "String-\u003e(a-\u003eIO b)-\u003e(a-\u003eb-\u003eIO())-\u003eMember(ThisObj a)",
          "package": "hsqml",
          "partial": "Property RW",
          "signature": "String-\u003e(tt-\u003eIO tr)-\u003e(tt-\u003etr-\u003eIO())-\u003eMember(ThisObj tt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:defPropertyRW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a named signal using a \u003ccode\u003e\u003ca\u003eSignalKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "defSignal",
          "package": "hsqml",
          "signature": "Tagged sk String -\u003e Member obj",
          "type": "function"
        },
        "index": {
          "description": "Defines named signal using SignalKey",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "defSignal",
          "normalized": "Tagged a String-\u003eMember b",
          "package": "hsqml",
          "partial": "Signal",
          "signature": "Tagged sk String-\u003eMember obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:defSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFires a signal on an \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e, specified using a \u003ccode\u003e\u003ca\u003eSignalKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "fireSignal",
          "package": "hsqml",
          "signature": "Tagged sk tt -\u003e SignalParams sk",
          "type": "function"
        },
        "index": {
          "description": "Fires signal on an Object specified using SignalKey",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "fireSignal",
          "normalized": "Tagged a b-\u003eSignalParams a",
          "package": "hsqml",
          "partial": "Signal",
          "signature": "Tagged sk tt-\u003eSignalParams sk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:fireSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to downcast an \u003ccode\u003e\u003ca\u003eAnyObjRef\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003e with the specific\n underlying Haskell type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "fromAnyObjRef",
          "package": "hsqml",
          "signature": "AnyObjRef -\u003e Maybe (ObjRef tt)",
          "type": "function"
        },
        "index": {
          "description": "Attempts to downcast an AnyObjRef into an ObjRef with the specific underlying Haskell type tt",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "fromAnyObjRef",
          "normalized": "AnyObjRef-\u003eMaybe(ObjRef a)",
          "package": "hsqml",
          "partial": "Any Obj Ref",
          "signature": "AnyObjRef-\u003eMaybe(ObjRef tt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:fromAnyObjRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the associated value of the underlying Haskell type \u003ccode\u003ett\u003c/code\u003e from an\n instance of the QML class which wraps it.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "fromObjRef",
          "package": "hsqml",
          "signature": "ObjRef tt -\u003e tt",
          "type": "function"
        },
        "index": {
          "description": "Returns the associated value of the underlying Haskell type tt from an instance of the QML class which wraps it",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "fromObjRef",
          "normalized": "ObjRef a-\u003ea",
          "package": "hsqml",
          "partial": "Obj Ref",
          "signature": "ObjRef tt-\u003ett",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:fromObjRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an instance of a QML class given a value of the underlying Haskell \n type \u003ccode\u003ett\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.QML.Objects",
          "name": "newObject",
          "package": "hsqml",
          "signature": "tt -\u003e IO (ObjRef tt)",
          "type": "function"
        },
        "index": {
          "description": "Creates an instance of QML class given value of the underlying Haskell type tt",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "newObject",
          "normalized": "a-\u003eIO(ObjRef a)",
          "package": "hsqml",
          "partial": "Object",
          "signature": "tt-\u003eIO(ObjRef tt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:newObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a bidirectional QML-to-Haskell and Haskell-to-QML \u003ccode\u003e\u003ca\u003eMarshaller\u003c/a\u003e\u003c/code\u003e\n which allows you to define instances of \u003ccode\u003e\u003ca\u003eMarshal\u003c/a\u003e\u003c/code\u003e for custom object types.\n This allows a custom type to be passed in and out of Haskell code via\n methods, properties, and signals, without having to manually deal with\n \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003es. Unlike the simple marshaller, this one must be given a function\n which specifies how to obtain an \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003e given a Haskell value.\n\u003c/p\u003e\u003cp\u003eFor example, an instance for \u003ccode\u003eMyObjectType\u003c/code\u003e which simply creates a new\n object whenever one is required would be defined as follows:\n\u003c/p\u003e\u003cpre\u003e\n instance Marshal MyObjectType where\n     type MarshalMode MyObjectType = ValObjBidi MyObjectType\n     marshaller = objBidiMarshaller newObject\n\u003c/pre\u003e",
          "module": "Graphics.QML.Objects",
          "name": "objBidiMarshaller",
          "package": "hsqml",
          "signature": "(obj -\u003e IO (ObjRef obj)) -\u003e Marshaller obj (ValObjBidi obj)",
          "type": "function"
        },
        "index": {
          "description": "Provides bidirectional QML-to-Haskell and Haskell-to-QML Marshaller which allows you to define instances of Marshal for custom object types This allows custom type to be passed in and out of Haskell code via methods properties and signals without having to manually deal with ObjRef Unlike the simple marshaller this one must be given function which specifies how to obtain an ObjRef given Haskell value For example an instance for MyObjectType which simply creates new object whenever one is required would be defined as follows instance Marshal MyObjectType where type MarshalMode MyObjectType ValObjBidi MyObjectType marshaller objBidiMarshaller newObject",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "objBidiMarshaller",
          "normalized": "(a-\u003eIO(ObjRef a))-\u003eMarshaller a(ValObjBidi a)",
          "package": "hsqml",
          "partial": "Bidi Marshaller",
          "signature": "(obj-\u003eIO(ObjRef obj))-\u003eMarshaller obj(ValObjBidi obj)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:objBidiMarshaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a QML-to-Haskell \u003ccode\u003e\u003ca\u003eMarshaller\u003c/a\u003e\u003c/code\u003e which allows you to define\n instances of \u003ccode\u003e\u003ca\u003eMarshal\u003c/a\u003e\u003c/code\u003e for custom \u003ccode\u003e\u003ca\u003eObject\u003c/a\u003e\u003c/code\u003e types. This allows a custom types\n to be passed into Haskell code as method parameters without having to\n manually deal with \u003ccode\u003e\u003ca\u003eObjRef\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eFor example, an instance for \u003ccode\u003eMyObjectType\u003c/code\u003e would be defined as follows:\n\u003c/p\u003e\u003cpre\u003e\n instance Marshal MyObjectType where\n     type MarshalMode MyObjectType = ValObjToOnly MyObjectType\n     marshaller = objSimpleMarshaller\n\u003c/pre\u003e",
          "module": "Graphics.QML.Objects",
          "name": "objSimpleMarshaller",
          "package": "hsqml",
          "signature": "Marshaller obj (ValObjToOnly obj)",
          "type": "function"
        },
        "index": {
          "description": "Provides QML-to-Haskell Marshaller which allows you to define instances of Marshal for custom Object types This allows custom types to be passed into Haskell code as method parameters without having to manually deal with ObjRef For example an instance for MyObjectType would be defined as follows instance Marshal MyObjectType where type MarshalMode MyObjectType ValObjToOnly MyObjectType marshaller objSimpleMarshaller",
          "hierarchy": "Graphics QML Objects",
          "module": "Graphics.QML.Objects",
          "name": "objSimpleMarshaller",
          "package": "hsqml",
          "partial": "Simple Marshaller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML-Objects.html#v:objSimpleMarshaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module imports the entire package, except \u003ccode\u003e\u003ca\u003eDebug\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.QML",
          "name": "QML",
          "package": "hsqml",
          "type": "module"
        },
        "index": {
          "description": "This module imports the entire package except Debug",
          "hierarchy": "Graphics QML",
          "module": "Graphics.QML",
          "name": "QML",
          "package": "hsqml",
          "partial": "QML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsqml/docs/Graphics-QML.html#"
      }
    }
  ]
]