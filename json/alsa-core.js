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
        "word": "alsa-core"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eALSA does not distinguish between programming errors and runtime exceptions,\nwhich is sad, but we have to cope with it.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Sound.ALSA.Exception",
          "name": "Exception",
          "package": "alsa-core",
          "source": "src/Sound-ALSA-Exception.html",
          "type": "module"
        },
        "index": {
          "description": "ALSA does not distinguish between programming errors and runtime exceptions which is sad but we have to cope with it",
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "Exception",
          "package": "alsa-core",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "T",
          "package": "alsa-core",
          "source": "src/Sound-ALSA-Exception.html#T",
          "type": "data"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "T",
          "package": "alsa-core",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#t:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "Cons",
          "package": "alsa-core",
          "signature": "Cons",
          "source": "src/Sound-ALSA-Exception.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "Cons",
          "package": "alsa-core",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "catch",
          "package": "alsa-core",
          "signature": "IO a -\u003e (T -\u003e IO a) -\u003e IO a",
          "source": "src/Sound-ALSA-Exception.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "catch",
          "normalized": "IO a-\u003e(T-\u003eIO a)-\u003eIO a",
          "package": "alsa-core",
          "signature": "IO a-\u003e(T-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "catchErrno",
          "package": "alsa-core",
          "signature": "Errno-\u003e IO a-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "catchErrno",
          "normalized": "Errno-\u003eIO a-\u003eIO a-\u003eIO a",
          "package": "alsa-core",
          "partial": "Errno",
          "signature": "Errno-\u003eIO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:catchErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "catchXRun",
          "package": "alsa-core",
          "signature": "IO a-\u003e IO a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "catchXRun",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "alsa-core",
          "partial": "XRun",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:catchXRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "checkResult",
          "package": "alsa-core",
          "signature": "String -\u003e a -\u003e IO a",
          "source": "src/Sound-ALSA-Exception.html#checkResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "checkResult",
          "normalized": "String-\u003ea-\u003eIO a",
          "package": "alsa-core",
          "partial": "Result",
          "signature": "String-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:checkResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "checkResultMaybe",
          "package": "alsa-core",
          "signature": "String -\u003e (CInt -\u003e a) -\u003e (CInt -\u003e Maybe a) -\u003e CInt -\u003e IO a",
          "source": "src/Sound-ALSA-Exception.html#checkResultMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "checkResultMaybe",
          "normalized": "String-\u003e(CInt-\u003ea)-\u003e(CInt-\u003eMaybe a)-\u003eCInt-\u003eIO a",
          "package": "alsa-core",
          "partial": "Result Maybe",
          "signature": "String-\u003e(CInt-\u003ea)-\u003e(CInt-\u003eMaybe a)-\u003eCInt-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:checkResultMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "checkResult_",
          "package": "alsa-core",
          "signature": "String -\u003e a -\u003e IO ()",
          "source": "src/Sound-ALSA-Exception.html#checkResult_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "checkResult_",
          "normalized": "String-\u003ea-\u003eIO()",
          "package": "alsa-core",
          "partial": "Result",
          "signature": "String-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:checkResult_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "code",
          "package": "alsa-core",
          "signature": "Errno",
          "source": "src/Sound-ALSA-Exception.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "code",
          "package": "alsa-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "description",
          "package": "alsa-core",
          "signature": "String",
          "source": "src/Sound-ALSA-Exception.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "description",
          "package": "alsa-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "location",
          "package": "alsa-core",
          "signature": "String",
          "source": "src/Sound-ALSA-Exception.html#T",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "location",
          "package": "alsa-core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eIOError\u003c/a\u003e\u003c/code\u003e.\n This produces better a error message than letting an uncaught\n \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e propagate to the top.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Exception",
          "name": "rethrow",
          "package": "alsa-core",
          "signature": "IO a -\u003e IO a",
          "source": "src/Sound-ALSA-Exception.html#rethrow",
          "type": "function"
        },
        "index": {
          "description": "Converts any into an IOError This produces better error message than letting an uncaught propagate to the top",
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "rethrow",
          "normalized": "IO a-\u003eIO a",
          "package": "alsa-core",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:rethrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "show",
          "package": "alsa-core",
          "signature": "T -\u003e String",
          "source": "src/Sound-ALSA-Exception.html#show",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "show",
          "normalized": "T-\u003eString",
          "package": "alsa-core",
          "signature": "T-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "showErrno",
          "package": "alsa-core",
          "signature": "Errno -\u003e String",
          "source": "src/Sound-ALSA-Exception.html#showErrno",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "showErrno",
          "normalized": "Errno-\u003eString",
          "package": "alsa-core",
          "partial": "Errno",
          "signature": "Errno-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:showErrno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "snd_strerror",
          "package": "alsa-core",
          "signature": "Errno -\u003e IO CString",
          "source": "src/Sound-ALSA-Exception.html#snd_strerror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "snd_strerror",
          "normalized": "Errno-\u003eIO CString",
          "package": "alsa-core",
          "signature": "Errno-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:snd_strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the message for an error code.\n\u003c/p\u003e",
          "module": "Sound.ALSA.Exception",
          "name": "strerror",
          "package": "alsa-core",
          "signature": "Errno -\u003e IO String",
          "source": "src/Sound-ALSA-Exception.html#strerror",
          "type": "function"
        },
        "index": {
          "description": "Returns the message for an error code",
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "strerror",
          "normalized": "Errno-\u003eIO String",
          "package": "alsa-core",
          "signature": "Errno-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:strerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Sound.ALSA.Exception",
          "name": "throw",
          "package": "alsa-core",
          "signature": "String -\u003e Errno -\u003e IO a",
          "source": "src/Sound-ALSA-Exception.html#throw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Sound ALSA Exception",
          "module": "Sound.ALSA.Exception",
          "name": "throw",
          "normalized": "String-\u003eErrno-\u003eIO a",
          "package": "alsa-core",
          "signature": "String-\u003eErrno-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alsa-core/docs/Sound-ALSA-Exception.html#v:throw"
      }
    }
  ]
]