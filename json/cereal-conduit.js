[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#",
      "description": {
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:ConduitErrorHandler",
      "description": {
        "fct-descr": "\u003cp\u003eWhat should we do if the Get fails?\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html#ConduitErrorHandler",
        "fct-type": "type",
        "title": "ConduitErrorHandler"
      },
      "index": {
        "description": "What should we do if the Get fails",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "ConduitErrorHandler",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Conduit Error Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:SinkErrorHandler",
      "description": {
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html#SinkErrorHandler",
        "fct-type": "type",
        "title": "SinkErrorHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "SinkErrorHandler",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Sink Error Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:SinkTerminationHandler",
      "description": {
        "fct-descr": "\u003cp\u003eWhat should we do if the stream is done before the Get is done?\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "type",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html#SinkTerminationHandler",
        "fct-type": "type",
        "title": "SinkTerminationHandler"
      },
      "index": {
        "description": "What should we do if the stream is done before the Get is done",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "SinkTerminationHandler",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Sink Termination Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#v:mkConduitGet",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a conduitGet with the specified \u003ccode\u003eErrorHandler\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "ConduitErrorHandler m o -\u003e Get o -\u003e Conduit ByteString m o",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html#mkConduitGet",
        "fct-type": "function",
        "title": "mkConduitGet"
      },
      "index": {
        "description": "Construct conduitGet with the specified ErrorHandler",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "mkConduitGet",
        "normalized": "ConduitErrorHandler a b-\u003eGet b-\u003eConduit ByteString a b",
        "package": "cereal-conduit",
        "partial": "Conduit Get",
        "signature": "ConduitErrorHandler m o-\u003eGet o-\u003eConduit ByteString m o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#v:mkSinkGet",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a sinkGet with the specified \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal.Internal",
        "fct-package": "cereal-conduit",
        "fct-signature": "SinkErrorHandler m r -\u003e SinkTerminationHandler m r -\u003e Get r -\u003e Consumer ByteString m r",
        "fct-source": "src/Data-Conduit-Cereal-Internal.html#mkSinkGet",
        "fct-type": "function",
        "title": "mkSinkGet"
      },
      "index": {
        "description": "Construct sinkGet with the specified ErrorHandler and TerminationHandler",
        "hierarchy": "Data Conduit Cereal Internal",
        "module": "Data.Conduit.Cereal.Internal",
        "name": "mkSinkGet",
        "normalized": "SinkErrorHandler a b-\u003eSinkTerminationHandler a b-\u003eGet b-\u003eConsumer ByteString a b",
        "package": "cereal-conduit",
        "partial": "Sink Get",
        "signature": "SinkErrorHandler m r-\u003eSinkTerminationHandler m r-\u003eGet r-\u003eConsumer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSink\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e\n These functions are built upno the Data.Conduit.Cereal.Internal functions with default\n implementations of \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e both throw a \u003ccode\u003e\u003ca\u003eGetException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-Cereal.html",
        "fct-type": "module",
        "title": "Cereal"
      },
      "index": {
        "description": "Turn Get into Sink and Put into Source These functions are built upno the Data.Conduit.Cereal.Internal functions with default implementations of ErrorHandler and TerminationHandler The default ErrorHandler and TerminationHandler both throw GetException",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "Cereal",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Cereal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#t:GetException",
      "description": {
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "data",
        "fct-source": "src/Data-Conduit-Cereal.html#GetException",
        "fct-type": "data",
        "title": "GetException"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "GetException",
        "normalized": "",
        "package": "cereal-conduit",
        "partial": "Get Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:conduitGet",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e repeatedly on the input stream, producing an output stream of whatever the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e outputs.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "Get o -\u003e Conduit ByteString m o",
        "fct-source": "src/Data-Conduit-Cereal.html#conduitGet",
        "fct-type": "function",
        "title": "conduitGet"
      },
      "index": {
        "description": "Run Get repeatedly on the input stream producing an output stream of whatever the Get outputs",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "conduitGet",
        "normalized": "Get a-\u003eConduit ByteString b a",
        "package": "cereal-conduit",
        "partial": "Get",
        "signature": "Get o-\u003eConduit ByteString m o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:conduitPut",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e repeatedly on the input stream, producing a concatenated \u003ccode\u003eByteString\u003c/code\u003e stream.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "Putter a -\u003e Conduit a m ByteString",
        "fct-source": "src/Data-Conduit-Cereal.html#conduitPut",
        "fct-type": "function",
        "title": "conduitPut"
      },
      "index": {
        "description": "Run Putter repeatedly on the input stream producing concatenated ByteString stream",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "conduitPut",
        "normalized": "Putter a-\u003eConduit a b ByteString",
        "package": "cereal-conduit",
        "partial": "Put",
        "signature": "Putter a-\u003eConduit a m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:sinkGet",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSink\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e will be streamed bytes until it returns \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e succeed it will return the data read and unconsumed part of the input stream.\n If the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e fails due to deserialization error or early termination of the input stream it raise an error.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "Get r -\u003e Consumer ByteString m r",
        "fct-source": "src/Data-Conduit-Cereal.html#sinkGet",
        "fct-type": "function",
        "title": "sinkGet"
      },
      "index": {
        "description": "Convert Get into Sink The Get will be streamed bytes until it returns Done or Fail If Get succeed it will return the data read and unconsumed part of the input stream If the Get fails due to deserialization error or early termination of the input stream it raise an error",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "sinkGet",
        "normalized": "Get a-\u003eConsumer ByteString b a",
        "package": "cereal-conduit",
        "partial": "Get",
        "signature": "Get r-\u003eConsumer ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:sourcePut",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e. Runs in constant memory.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.Cereal",
        "fct-package": "cereal-conduit",
        "fct-signature": "Put -\u003e Producer m ByteString",
        "fct-source": "src/Data-Conduit-Cereal.html#sourcePut",
        "fct-type": "function",
        "title": "sourcePut"
      },
      "index": {
        "description": "Convert Put into Source Runs in constant memory",
        "hierarchy": "Data Conduit Cereal",
        "module": "Data.Conduit.Cereal",
        "name": "sourcePut",
        "normalized": "Put-\u003eProducer a ByteString",
        "package": "cereal-conduit",
        "partial": "Put",
        "signature": "Put-\u003eProducer m ByteString"
      }
    }
  }
]