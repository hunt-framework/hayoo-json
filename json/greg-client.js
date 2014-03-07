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
        "word": "greg-client"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a binding to the greg distributed logger,\n which provides a high-precision global time axis and is very performant.\n\u003c/p\u003e\u003cp\u003eSee project home page at \u003ca\u003ehttp://code.google.com/p/greg\u003c/a\u003e for an explanation\n of how to use the server, the features, motivation and design.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Log.Greg",
          "name": "Greg",
          "package": "greg-client",
          "source": "src/System-Log-Greg.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides binding to the greg distributed logger which provides high-precision global time axis and is very performant See project home page at http code.google.com greg for an explanation of how to use the server the features motivation and design",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "Greg",
          "package": "greg-client",
          "partial": "Greg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClient configuration.\n You probably only need to change \u003ccode\u003eserver\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "Configuration",
          "package": "greg-client",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "Client configuration You probably only need to change server",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "Configuration",
          "package": "greg-client",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Log.Greg",
          "name": "Configuration",
          "package": "greg-client",
          "signature": "Configuration",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "Configuration",
          "package": "greg-client",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow often to initiate calibration exchanges\n   (default \u003ccode\u003e10\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "calibrationPeriodSec",
          "package": "greg-client",
          "signature": "Int",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "How often to initiate calibration exchanges default",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "calibrationPeriodSec",
          "package": "greg-client",
          "partial": "Period Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:calibrationPeriodSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalibration port (default \u003ccode\u003e5677\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "calibrationPort",
          "package": "greg-client",
          "signature": "Int",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Calibration port default",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "calibrationPort",
          "package": "greg-client",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:calibrationPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary identifier, will show up in logs.\n   For example, \u003ccode\u003e\"DataService\"\u003c/code\u003e \n   (default \u003ccode\u003e\"unknown\"\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "clientId",
          "package": "greg-client",
          "signature": "String",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Arbitrary identifier will show up in logs For example DataService default unknown",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "clientId",
          "package": "greg-client",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:clientId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default configuration, suitable for most needs.\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "defaultConfiguration",
          "package": "greg-client",
          "signature": "Configuration",
          "source": "src/System-Log-Greg.html#defaultConfiguration",
          "type": "function"
        },
        "index": {
          "description": "The default configuration suitable for most needs",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "defaultConfiguration",
          "package": "greg-client",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:defaultConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow often to send message batches to server \n   (default \u003ccode\u003e1000\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "flushPeriodMs",
          "package": "greg-client",
          "signature": "Int",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "How often to send message batches to server default",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "flushPeriodMs",
          "package": "greg-client",
          "partial": "Period Ms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:flushPeriodMs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a message. The message will show up in server's output\n annotated with a global timestamp (client's clock offset does \n not matter).\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "logMessage",
          "package": "greg-client",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Log-Greg.html#logMessage",
          "type": "function"
        },
        "index": {
          "description": "Log message The message will show up in server output annotated with global timestamp client clock offset does not matter",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "logMessage",
          "normalized": "String-\u003eIO()",
          "package": "greg-client",
          "partial": "Message",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:logMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many records to store between flushes\n   (more will be dropped) (default \u003ccode\u003e100000\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "maxBufferedRecords",
          "package": "greg-client",
          "signature": "Int",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "How many records to store between flushes more will be dropped default",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "maxBufferedRecords",
          "package": "greg-client",
          "partial": "Buffered Records",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:maxBufferedRecords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage port (default \u003ccode\u003e5676\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "port",
          "package": "greg-client",
          "signature": "Int",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Message port default",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "port",
          "package": "greg-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer hostname (default \u003ccode\u003elocalhost\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "server",
          "package": "greg-client",
          "signature": "String",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Server hostname default localhost",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "server",
          "package": "greg-client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to use gzip compression \n   (default \u003ccode\u003eFalse\u003c/code\u003e, \u003ccode\u003eTrue\u003c/code\u003e is unsupported)\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "useCompression",
          "package": "greg-client",
          "signature": "Bool",
          "source": "src/System-Log-Greg.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Whether to use gzip compression default False True is unsupported",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "useCompression",
          "package": "greg-client",
          "partial": "Compression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:useCompression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an IO action with logging (will wait for all messages to flush).\n\u003c/p\u003e",
          "module": "System.Log.Greg",
          "name": "withGregDo",
          "package": "greg-client",
          "signature": "Configuration -\u003e IO () -\u003e IO ()",
          "source": "src/System-Log-Greg.html#withGregDo",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action with logging will wait for all messages to flush",
          "hierarchy": "System Log Greg",
          "module": "System.Log.Greg",
          "name": "withGregDo",
          "normalized": "Configuration-\u003eIO()-\u003eIO()",
          "package": "greg-client",
          "partial": "Greg Do",
          "signature": "Configuration-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/greg-client/docs/System-Log-Greg.html#v:withGregDo"
      }
    }
  ]
]