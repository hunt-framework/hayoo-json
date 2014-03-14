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
        "word": "scalable-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Server.ScalableServer",
          "name": "ScalableServer",
          "package": "scalable-server",
          "source": "src/Network-Server-ScalableServer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "ScalableServer",
          "package": "scalable-server",
          "partial": "Scalable Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RequestCreator is an Attoparsec parser that yields some request\n object \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Server.ScalableServer",
          "name": "RequestCreator",
          "package": "scalable-server",
          "source": "src/Network-Server-ScalableServer.html#RequestCreator",
          "type": "type"
        },
        "index": {
          "description": "The RequestCreator is an Attoparsec parser that yields some request object",
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "RequestCreator",
          "package": "scalable-server",
          "partial": "Request Creator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestCreator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestPipeline\u003c/a\u003e\u003c/code\u003e acts as a specification for your service,\n indicating both a parser/request object generator, the RequestCreator,\n and the processor of these requests, one that ultimately generates a\n response expressed by a blaze \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Server.ScalableServer",
          "name": "RequestPipeline",
          "package": "scalable-server",
          "source": "src/Network-Server-ScalableServer.html#RequestPipeline",
          "type": "data"
        },
        "index": {
          "description": "The RequestPipeline acts as specification for your service indicating both parser request object generator the RequestCreator and the processor of these requests one that ultimately generates response expressed by blaze Builder",
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "RequestPipeline",
          "package": "scalable-server",
          "partial": "Request Pipeline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe RequestProcessor is a function in the IO monad (for DB access, etc)\n that returns a builder that can generate the response\n\u003c/p\u003e",
          "module": "Network.Server.ScalableServer",
          "name": "RequestProcessor",
          "package": "scalable-server",
          "source": "src/Network-Server-ScalableServer.html#RequestProcessor",
          "type": "type"
        },
        "index": {
          "description": "The RequestProcessor is function in the IO monad for DB access etc that returns builder that can generate the response",
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "RequestProcessor",
          "package": "scalable-server",
          "partial": "Request Processor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestProcessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Server.ScalableServer",
          "name": "RequestPipeline",
          "package": "scalable-server",
          "signature": "RequestPipeline (RequestCreator a) (RequestProcessor a) PipelineSize",
          "source": "src/Network-Server-ScalableServer.html#RequestPipeline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "RequestPipeline",
          "package": "scalable-server",
          "partial": "Request Pipeline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#v:RequestPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pipeline specification and a port, run TCP traffic using the\n pipeline for parsing, processing and response.\n\u003c/p\u003e\u003cp\u003eNote: there is currently no way for a server to specific the socket\n should be disconnected\n\u003c/p\u003e",
          "module": "Network.Server.ScalableServer",
          "name": "runServer",
          "package": "scalable-server",
          "signature": "RequestPipeline a -\u003e PortNumber -\u003e IO ()",
          "source": "src/Network-Server-ScalableServer.html#runServer",
          "type": "function"
        },
        "index": {
          "description": "Given pipeline specification and port run TCP traffic using the pipeline for parsing processing and response Note there is currently no way for server to specific the socket should be disconnected",
          "hierarchy": "Network Server ScalableServer",
          "module": "Network.Server.ScalableServer",
          "name": "runServer",
          "normalized": "RequestPipeline a-\u003ePortNumber-\u003eIO()",
          "package": "scalable-server",
          "partial": "Server",
          "signature": "RequestPipeline a-\u003ePortNumber-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#v:runServer"
      }
    }
  ]
]