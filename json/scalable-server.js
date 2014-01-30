[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#",
      "description": {
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "module",
        "fct-source": "src/Network-Server-ScalableServer.html",
        "fct-type": "module",
        "title": "ScalableServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "ScalableServer",
        "normalized": "",
        "package": "scalable-server",
        "partial": "Scalable Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestCreator",
      "description": {
        "fct-descr": "\u003cp\u003eThe RequestCreator is an Attoparsec parser that yields some request\n object \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "type",
        "fct-source": "src/Network-Server-ScalableServer.html#RequestCreator",
        "fct-type": "type",
        "title": "RequestCreator"
      },
      "index": {
        "description": "The RequestCreator is an Attoparsec parser that yields some request object",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "RequestCreator",
        "normalized": "",
        "package": "scalable-server",
        "partial": "Request Creator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestPipeline",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRequestPipeline\u003c/a\u003e\u003c/code\u003e acts as a specification for your service,\n indicating both a parser/request object generator, the RequestCreator,\n and the processor of these requests, one that ultimately generates a\n response expressed by a blaze \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "data",
        "fct-source": "src/Network-Server-ScalableServer.html#RequestPipeline",
        "fct-type": "data",
        "title": "RequestPipeline"
      },
      "index": {
        "description": "The RequestPipeline acts as specification for your service indicating both parser request object generator the RequestCreator and the processor of these requests one that ultimately generates response expressed by blaze Builder",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "RequestPipeline",
        "normalized": "",
        "package": "scalable-server",
        "partial": "Request Pipeline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#t:RequestProcessor",
      "description": {
        "fct-descr": "\u003cp\u003eThe RequestProcessor is a function in the IO monad (for DB access, etc)\n that returns a builder that can generate the response\n\u003c/p\u003e",
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "type",
        "fct-source": "src/Network-Server-ScalableServer.html#RequestProcessor",
        "fct-type": "type",
        "title": "RequestProcessor"
      },
      "index": {
        "description": "The RequestProcessor is function in the IO monad for DB access etc that returns builder that can generate the response",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "RequestProcessor",
        "normalized": "",
        "package": "scalable-server",
        "partial": "Request Processor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#v:RequestPipeline",
      "description": {
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "RequestPipeline (RequestCreator a) (RequestProcessor a) PipelineSize",
        "fct-source": "src/Network-Server-ScalableServer.html#RequestPipeline",
        "fct-type": "function",
        "title": "RequestPipeline"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "RequestPipeline",
        "normalized": "",
        "package": "scalable-server",
        "partial": "Request Pipeline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/scalable-server/docs/Network-Server-ScalableServer.html#v:runServer",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a pipeline specification and a port, run TCP traffic using the\n pipeline for parsing, processing and response.\n\u003c/p\u003e\u003cp\u003eNote: there is currently no way for a server to specific the socket\n should be disconnected\n\u003c/p\u003e",
        "fct-module": "Network.Server.ScalableServer",
        "fct-package": "scalable-server",
        "fct-signature": "RequestPipeline a -\u003e PortNumber -\u003e IO ()",
        "fct-source": "src/Network-Server-ScalableServer.html#runServer",
        "fct-type": "function",
        "title": "runServer"
      },
      "index": {
        "description": "Given pipeline specification and port run TCP traffic using the pipeline for parsing processing and response Note there is currently no way for server to specific the socket should be disconnected",
        "hierarchy": "Network Server ScalableServer",
        "module": "Network.Server.ScalableServer",
        "name": "runServer",
        "normalized": "RequestPipeline a-\u003ePortNumber-\u003eIO()",
        "package": "scalable-server",
        "partial": "Server",
        "signature": "RequestPipeline a-\u003ePortNumber-\u003eIO()"
      }
    }
  }
]