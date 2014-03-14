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
        "word": "silently"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNeed to prevent output to the terminal, a file, or stderr? Need to capture it and use it for\n your own means? Now you can, with \u003ccode\u003e\u003ca\u003esilence\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.IO.Silently",
          "name": "Silently",
          "package": "silently",
          "source": "src/System-IO-Silently.html",
          "type": "module"
        },
        "index": {
          "description": "Need to prevent output to the terminal file or stderr Need to capture it and use it for your own means Now you can with silence and capture",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "Silently",
          "package": "silently",
          "partial": "Silently",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action while preventing and capturing all output to stdout.\n This will, as a side effect, create and delete a temp file in the temp directory or current directory if there is no temp directory.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "capture",
          "package": "silently",
          "signature": "IO a -\u003e IO (String, a)",
          "source": "src/System-IO-Silently.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action while preventing and capturing all output to stdout This will as side effect create and delete temp file in the temp directory or current directory if there is no temp directory",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "capture",
          "normalized": "IO a-\u003eIO(String,a)",
          "package": "silently",
          "signature": "IO a-\u003eIO(String,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e, but discards the result of given action.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "capture_",
          "package": "silently",
          "signature": "IO a -\u003e IO String",
          "source": "src/System-IO-Silently.html#capture_",
          "type": "function"
        },
        "index": {
          "description": "Like capture but discards the result of given action",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "capture_",
          "normalized": "IO a-\u003eIO String",
          "package": "silently",
          "signature": "IO a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:capture_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action while preventing and capturing all output to the given handles.\n This will, as a side effect, create and delete a temp file in the temp directory or current directory if there is no temp directory.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "hCapture",
          "package": "silently",
          "signature": "[Handle] -\u003e IO a -\u003e IO (String, a)",
          "source": "src/System-IO-Silently.html#hCapture",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action while preventing and capturing all output to the given handles This will as side effect create and delete temp file in the temp directory or current directory if there is no temp directory",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "hCapture",
          "normalized": "[Handle]-\u003eIO a-\u003eIO(String,a)",
          "package": "silently",
          "partial": "Capture",
          "signature": "[Handle]-\u003eIO a-\u003eIO(String,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehCapture\u003c/a\u003e\u003c/code\u003e, but discards the result of given action.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "hCapture_",
          "package": "silently",
          "signature": "[Handle] -\u003e IO a -\u003e IO String",
          "source": "src/System-IO-Silently.html#hCapture_",
          "type": "function"
        },
        "index": {
          "description": "Like hCapture but discards the result of given action",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "hCapture_",
          "normalized": "[Handle]-\u003eIO a-\u003eIO String",
          "package": "silently",
          "partial": "Capture",
          "signature": "[Handle]-\u003eIO a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hCapture_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action while preventing all output to the given handles.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "hSilence",
          "package": "silently",
          "signature": "[Handle] -\u003e IO a -\u003e IO a",
          "source": "src/System-IO-Silently.html#hSilence",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action while preventing all output to the given handles",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "hSilence",
          "normalized": "[Handle]-\u003eIO a-\u003eIO a",
          "package": "silently",
          "partial": "Silence",
          "signature": "[Handle]-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:hSilence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action while preventing all output to stdout.\n\u003c/p\u003e",
          "module": "System.IO.Silently",
          "name": "silence",
          "package": "silently",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-IO-Silently.html#silence",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action while preventing all output to stdout",
          "hierarchy": "System IO Silently",
          "module": "System.IO.Silently",
          "name": "silence",
          "normalized": "IO a-\u003eIO a",
          "package": "silently",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/silently/docs/System-IO-Silently.html#v:silence"
      }
    }
  ]
]