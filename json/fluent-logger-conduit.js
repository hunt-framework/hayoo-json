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
        "word": "fluent-logger-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFluent Logger with Conduit Interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Fluent.Conduit",
          "name": "Conduit",
          "package": "fluent-logger-conduit",
          "source": "src/Network-Fluent-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "Fluent Logger with Conduit Interface",
          "hierarchy": "Network Fluent Conduit",
          "module": "Network.Fluent.Conduit",
          "name": "Conduit",
          "package": "fluent-logger-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fluent-logger-conduit/docs/Network-Fluent-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream all incoming pair ( label, data ) to the given Fluent.\n\u003c/p\u003e\u003cp\u003eSince 0.2.0.0\n\u003c/p\u003e",
          "module": "Network.Fluent.Conduit",
          "name": "sinkFluent",
          "package": "fluent-logger-conduit",
          "signature": "FluentSettings -\u003e Consumer (ByteString, a) m ()",
          "source": "src/Network-Fluent-Conduit.html#sinkFluent",
          "type": "function"
        },
        "index": {
          "description": "Stream all incoming pair label data to the given Fluent Since",
          "hierarchy": "Network Fluent Conduit",
          "module": "Network.Fluent.Conduit",
          "name": "sinkFluent",
          "normalized": "FluentSettings-\u003eConsumer(ByteString,a)b()",
          "package": "fluent-logger-conduit",
          "partial": "Fluent",
          "signature": "FluentSettings-\u003eConsumer(ByteString,a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fluent-logger-conduit/docs/Network-Fluent-Conduit.html#v:sinkFluent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream all incoming pair ( label, data ) to the given Fluent logger.\n\u003c/p\u003e\u003cp\u003eSince 0.2.0.0\n\u003c/p\u003e",
          "module": "Network.Fluent.Conduit",
          "name": "sinkFluentWithLogger",
          "package": "fluent-logger-conduit",
          "signature": "FluentLogger -\u003e Consumer (ByteString, a) m ()",
          "source": "src/Network-Fluent-Conduit.html#sinkFluentWithLogger",
          "type": "function"
        },
        "index": {
          "description": "Stream all incoming pair label data to the given Fluent logger Since",
          "hierarchy": "Network Fluent Conduit",
          "module": "Network.Fluent.Conduit",
          "name": "sinkFluentWithLogger",
          "normalized": "FluentLogger-\u003eConsumer(ByteString,a)b()",
          "package": "fluent-logger-conduit",
          "partial": "Fluent With Logger",
          "signature": "FluentLogger-\u003eConsumer(ByteString,a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fluent-logger-conduit/docs/Network-Fluent-Conduit.html#v:sinkFluentWithLogger"
      }
    }
  ]
]