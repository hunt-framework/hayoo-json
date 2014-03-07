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
        "word": "cereal-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Cereal.Internal",
          "name": "Internal",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "Internal",
          "package": "cereal-conduit",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat should we do if the Get fails?\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "ConduitErrorHandler",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal-Internal.html#ConduitErrorHandler",
          "type": "type"
        },
        "index": {
          "description": "What should we do if the Get fails",
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "ConduitErrorHandler",
          "package": "cereal-conduit",
          "partial": "Conduit Error Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:ConduitErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Cereal.Internal",
          "name": "SinkErrorHandler",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal-Internal.html#SinkErrorHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "SinkErrorHandler",
          "package": "cereal-conduit",
          "partial": "Sink Error Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:SinkErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat should we do if the stream is done before the Get is done?\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "SinkTerminationHandler",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal-Internal.html#SinkTerminationHandler",
          "type": "type"
        },
        "index": {
          "description": "What should we do if the stream is done before the Get is done",
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "SinkTerminationHandler",
          "package": "cereal-conduit",
          "partial": "Sink Termination Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#t:SinkTerminationHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a conduitGet with the specified \u003ccode\u003eErrorHandler\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "mkConduitGet",
          "package": "cereal-conduit",
          "signature": "ConduitErrorHandler m o -\u003e Get o -\u003e Conduit ByteString m o",
          "source": "src/Data-Conduit-Cereal-Internal.html#mkConduitGet",
          "type": "function"
        },
        "index": {
          "description": "Construct conduitGet with the specified ErrorHandler",
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "mkConduitGet",
          "normalized": "ConduitErrorHandler a b-\u003eGet b-\u003eConduit ByteString a b",
          "package": "cereal-conduit",
          "partial": "Conduit Get",
          "signature": "ConduitErrorHandler m o-\u003eGet o-\u003eConduit ByteString m o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#v:mkConduitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a sinkGet with the specified \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "mkSinkGet",
          "package": "cereal-conduit",
          "signature": "SinkErrorHandler m r -\u003e SinkTerminationHandler m r -\u003e Get r -\u003e Consumer ByteString m r",
          "source": "src/Data-Conduit-Cereal-Internal.html#mkSinkGet",
          "type": "function"
        },
        "index": {
          "description": "Construct sinkGet with the specified ErrorHandler and TerminationHandler",
          "hierarchy": "Data Conduit Cereal Internal",
          "module": "Data.Conduit.Cereal.Internal",
          "name": "mkSinkGet",
          "normalized": "SinkErrorHandler a b-\u003eSinkTerminationHandler a b-\u003eGet b-\u003eConsumer ByteString a b",
          "package": "cereal-conduit",
          "partial": "Sink Get",
          "signature": "SinkErrorHandler m r-\u003eSinkTerminationHandler m r-\u003eGet r-\u003eConsumer ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal-Internal.html#v:mkSinkGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTurn a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSink\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e\n These functions are built upno the Data.Conduit.Cereal.Internal functions with default\n implementations of \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default \u003ccode\u003eErrorHandler\u003c/code\u003e and \u003ccode\u003eTerminationHandler\u003c/code\u003e both throw a \u003ccode\u003e\u003ca\u003eGetException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Conduit.Cereal",
          "name": "Cereal",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal.html",
          "type": "module"
        },
        "index": {
          "description": "Turn Get into Sink and Put into Source These functions are built upno the Data.Conduit.Cereal.Internal functions with default implementations of ErrorHandler and TerminationHandler The default ErrorHandler and TerminationHandler both throw GetException",
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "Cereal",
          "package": "cereal-conduit",
          "partial": "Cereal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Cereal",
          "name": "GetException",
          "package": "cereal-conduit",
          "source": "src/Data-Conduit-Cereal.html#GetException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "GetException",
          "package": "cereal-conduit",
          "partial": "Get Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#t:GetException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e repeatedly on the input stream, producing an output stream of whatever the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e outputs.\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal",
          "name": "conduitGet",
          "package": "cereal-conduit",
          "signature": "Get o -\u003e Conduit ByteString m o",
          "source": "src/Data-Conduit-Cereal.html#conduitGet",
          "type": "function"
        },
        "index": {
          "description": "Run Get repeatedly on the input stream producing an output stream of whatever the Get outputs",
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "conduitGet",
          "normalized": "Get a-\u003eConduit ByteString b a",
          "package": "cereal-conduit",
          "partial": "Get",
          "signature": "Get o-\u003eConduit ByteString m o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:conduitGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003ePutter\u003c/a\u003e\u003c/code\u003e repeatedly on the input stream, producing a concatenated \u003ccode\u003eByteString\u003c/code\u003e stream.\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal",
          "name": "conduitPut",
          "package": "cereal-conduit",
          "signature": "Putter a -\u003e Conduit a m ByteString",
          "source": "src/Data-Conduit-Cereal.html#conduitPut",
          "type": "function"
        },
        "index": {
          "description": "Run Putter repeatedly on the input stream producing concatenated ByteString stream",
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "conduitPut",
          "normalized": "Putter a-\u003eConduit a b ByteString",
          "package": "cereal-conduit",
          "partial": "Put",
          "signature": "Putter a-\u003eConduit a m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:conduitPut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSink\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e will be streamed bytes until it returns \u003ccode\u003e\u003ca\u003eDone\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e succeed it will return the data read and unconsumed part of the input stream.\n If the \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e fails due to deserialization error or early termination of the input stream it raise an error.\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal",
          "name": "sinkGet",
          "package": "cereal-conduit",
          "signature": "Get r -\u003e Consumer ByteString m r",
          "source": "src/Data-Conduit-Cereal.html#sinkGet",
          "type": "function"
        },
        "index": {
          "description": "Convert Get into Sink The Get will be streamed bytes until it returns Done or Fail If Get succeed it will return the data read and unconsumed part of the input stream If the Get fails due to deserialization error or early termination of the input stream it raise an error",
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "sinkGet",
          "normalized": "Get a-\u003eConsumer ByteString b a",
          "package": "cereal-conduit",
          "partial": "Get",
          "signature": "Get r-\u003eConsumer ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:sinkGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePut\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eSource\u003c/code\u003e. Runs in constant memory.\n\u003c/p\u003e",
          "module": "Data.Conduit.Cereal",
          "name": "sourcePut",
          "package": "cereal-conduit",
          "signature": "Put -\u003e Producer m ByteString",
          "source": "src/Data-Conduit-Cereal.html#sourcePut",
          "type": "function"
        },
        "index": {
          "description": "Convert Put into Source Runs in constant memory",
          "hierarchy": "Data Conduit Cereal",
          "module": "Data.Conduit.Cereal",
          "name": "sourcePut",
          "normalized": "Put-\u003eProducer a ByteString",
          "package": "cereal-conduit",
          "partial": "Put",
          "signature": "Put-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cereal-conduit/docs/Data-Conduit-Cereal.html#v:sourcePut"
      }
    }
  ]
]