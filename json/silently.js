[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNeed to prevent output to the terminal, a file, or stderr? Need to capture it and use it for\n your own means? Now you can, with \u003ccode\u003e\u003ca\u003esilence\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "module",
        "fct-source": "src/System-IO-Silently.html",
        "fct-type": "module",
        "title": "Silently"
      },
      "index": {
        "description": "Need to prevent output to the terminal file or stderr Need to capture it and use it for your own means Now you can with silence and capture",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "Silently",
        "normalized": "",
        "package": "silently",
        "partial": "Silently",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:capture",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IO action while preventing and capturing all output to stdout.\n This will, as a side effect, create and delete a temp file in the temp directory or current directory if there is no temp directory.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "IO a -\u003e IO (String, a)",
        "fct-source": "src/System-IO-Silently.html#capture",
        "fct-type": "function",
        "title": "capture"
      },
      "index": {
        "description": "Run an IO action while preventing and capturing all output to stdout This will as side effect create and delete temp file in the temp directory or current directory if there is no temp directory",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "capture",
        "normalized": "IO a-\u003eIO(String,a)",
        "package": "silently",
        "partial": "",
        "signature": "IO a-\u003eIO(String,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:capture_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e, but discards the result of given action.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "IO a -\u003e IO String",
        "fct-source": "src/System-IO-Silently.html#capture_",
        "fct-type": "function",
        "title": "capture_"
      },
      "index": {
        "description": "Like capture but discards the result of given action",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "capture_",
        "normalized": "IO a-\u003eIO String",
        "package": "silently",
        "partial": "",
        "signature": "IO a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hCapture",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IO action while preventing and capturing all output to the given handles.\n This will, as a side effect, create and delete a temp file in the temp directory or current directory if there is no temp directory.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "[Handle] -\u003e IO a -\u003e IO (String, a)",
        "fct-source": "src/System-IO-Silently.html#hCapture",
        "fct-type": "function",
        "title": "hCapture"
      },
      "index": {
        "description": "Run an IO action while preventing and capturing all output to the given handles This will as side effect create and delete temp file in the temp directory or current directory if there is no temp directory",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "hCapture",
        "normalized": "[Handle]-\u003eIO a-\u003eIO(String,a)",
        "package": "silently",
        "partial": "Capture",
        "signature": "[Handle]-\u003eIO a-\u003eIO(String,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hCapture_",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehCapture\u003c/a\u003e\u003c/code\u003e, but discards the result of given action.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "[Handle] -\u003e IO a -\u003e IO String",
        "fct-source": "src/System-IO-Silently.html#hCapture_",
        "fct-type": "function",
        "title": "hCapture_"
      },
      "index": {
        "description": "Like hCapture but discards the result of given action",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "hCapture_",
        "normalized": "[Handle]-\u003eIO a-\u003eIO String",
        "package": "silently",
        "partial": "Capture",
        "signature": "[Handle]-\u003eIO a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hSilence",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IO action while preventing all output to the given handles.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "[Handle] -\u003e IO a -\u003e IO a",
        "fct-source": "src/System-IO-Silently.html#hSilence",
        "fct-type": "function",
        "title": "hSilence"
      },
      "index": {
        "description": "Run an IO action while preventing all output to the given handles",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "hSilence",
        "normalized": "[Handle]-\u003eIO a-\u003eIO a",
        "package": "silently",
        "partial": "Silence",
        "signature": "[Handle]-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:silence",
      "description": {
        "fct-descr": "\u003cp\u003eRun an IO action while preventing all output to stdout.\n\u003c/p\u003e",
        "fct-module": "System.IO.Silently",
        "fct-package": "silently",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/System-IO-Silently.html#silence",
        "fct-type": "function",
        "title": "silence"
      },
      "index": {
        "description": "Run an IO action while preventing all output to stdout",
        "hierarchy": "System IO Silently",
        "module": "System.IO.Silently",
        "name": "silence",
        "normalized": "IO a-\u003eIO a",
        "package": "silently",
        "partial": "",
        "signature": "IO a-\u003eIO a"
      }
    }
  }
]