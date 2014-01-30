[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#",
      "description": {
        "fct-module": "Network",
        "fct-package": "hyperdrive",
        "fct-signature": "module",
        "fct-source": "src/Network.html",
        "fct-type": "module",
        "title": "Network"
      },
      "index": {
        "description": "",
        "hierarchy": "Network",
        "module": "Network",
        "name": "Network",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Network",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:listenOn",
      "description": {
        "fct-descr": "\u003cp\u003estart TCP listening on a port\n\u003c/p\u003e",
        "fct-module": "Network",
        "fct-package": "hyperdrive",
        "fct-signature": "Int-\u003e IO Socket",
        "fct-type": "function",
        "title": "listenOn"
      },
      "index": {
        "description": "start TCP listening on port",
        "hierarchy": "Network",
        "module": "Network",
        "name": "listenOn",
        "normalized": "Int-\u003eIO Socket",
        "package": "hyperdrive",
        "partial": "On",
        "signature": "Int-\u003eIO Socket"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:socketReader",
      "description": {
        "fct-descr": "\u003cp\u003eStream data from the socket.\n\u003c/p\u003e\u003cp\u003eFIXME: what should happen if \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e raises an exception?\n\u003c/p\u003e",
        "fct-module": "Network",
        "fct-package": "hyperdrive",
        "fct-signature": "Socket-\u003e () -\u003e Producer p ByteString m ()",
        "fct-type": "function",
        "title": "socketReader"
      },
      "index": {
        "description": "Stream data from the socket FIXME what should happen if recv raises an exception",
        "hierarchy": "Network",
        "module": "Network",
        "name": "socketReader",
        "normalized": "Socket-\u003e()-\u003eProducer a ByteString b()",
        "package": "hyperdrive",
        "partial": "Reader",
        "signature": "Socket-\u003e()-\u003eProducer p ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:socketWriter",
      "description": {
        "fct-descr": "\u003cp\u003eStream data to the socket.\n\u003c/p\u003e\u003cp\u003eFIXME: what should happen if \u003ccode\u003e\u003ca\u003esendAll\u003c/a\u003e\u003c/code\u003e raises an exception?\n\u003c/p\u003e",
        "fct-module": "Network",
        "fct-package": "hyperdrive",
        "fct-signature": "Socket-\u003e () -\u003e Consumer p ByteString m ()",
        "fct-type": "function",
        "title": "socketWriter"
      },
      "index": {
        "description": "Stream data to the socket FIXME what should happen if sendAll raises an exception",
        "hierarchy": "Network",
        "module": "Network",
        "name": "socketWriter",
        "normalized": "Socket-\u003e()-\u003eConsumer a ByteString b()",
        "package": "hyperdrive",
        "partial": "Writer",
        "signature": "Socket-\u003e()-\u003eConsumer p ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "module",
        "fct-source": "src/Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "Request",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#t:ParseError",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "data",
        "fct-source": "src/Request.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "ParseError",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:MalformedHeader",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "MalformedHeader ByteString",
        "fct-source": "src/Request.html#ParseError",
        "fct-type": "function",
        "title": "MalformedHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "MalformedHeader",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Malformed Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:MalformedRequestLine",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "MalformedRequestLine ByteString",
        "fct-source": "src/Request.html#ParseError",
        "fct-type": "function",
        "title": "MalformedRequestLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "MalformedRequestLine",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Malformed Request Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:Unexpected",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Unexpected",
        "fct-source": "src/Request.html#ParseError",
        "fct-type": "function",
        "title": "Unexpected"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "Unexpected",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Unexpected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:UnknownHTTPVersion",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "UnknownHTTPVersion ByteString",
        "fct-source": "src/Request.html#ParseError",
        "fct-type": "function",
        "title": "UnknownHTTPVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "UnknownHTTPVersion",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Unknown HTTPVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:colon",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Word8",
        "fct-source": "src/Request.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "colon",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:cr",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Word8",
        "fct-source": "src/Request.html#cr",
        "fct-type": "function",
        "title": "cr"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "cr",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:nl",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Word8",
        "fct-source": "src/Request.html#nl",
        "fct-type": "function",
        "title": "nl"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "nl",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHTTPVersion",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e HTTPVersion",
        "fct-source": "src/Request.html#parseHTTPVersion",
        "fct-type": "function",
        "title": "parseHTTPVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseHTTPVersion",
        "normalized": "ByteString-\u003eHTTPVersion",
        "package": "hyperdrive",
        "partial": "HTTPVersion",
        "signature": "ByteString-\u003eHTTPVersion"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHeader",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Request.html#parseHeader",
        "fct-type": "function",
        "title": "parseHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseHeader",
        "normalized": "ByteString-\u003e(ByteString,ByteString)",
        "package": "hyperdrive",
        "partial": "Header",
        "signature": "ByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHeaders",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "StateP ByteString p () ByteString a b m [(ByteString, ByteString)]",
        "fct-source": "src/Request.html#parseHeaders",
        "fct-type": "function",
        "title": "parseHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseHeaders",
        "normalized": "StateP ByteString a()ByteString b c d[(ByteString,ByteString)]",
        "package": "hyperdrive",
        "partial": "Headers",
        "signature": "StateP ByteString p()ByteString a b m[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseMethod",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e Method",
        "fct-source": "src/Request.html#parseMethod",
        "fct-type": "function",
        "title": "parseMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseMethod",
        "normalized": "ByteString-\u003eMethod",
        "package": "hyperdrive",
        "partial": "Method",
        "signature": "ByteString-\u003eMethod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseRequest",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Bool-\u003e SockAddr-\u003e StateP ByteString p () ByteString a b m Request",
        "fct-type": "function",
        "title": "parseRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseRequest",
        "normalized": "Bool-\u003eSockAddr-\u003eStateP ByteString a()ByteString b c d Request",
        "package": "hyperdrive",
        "partial": "Request",
        "signature": "Bool-\u003eSockAddr-\u003eStateP ByteString p()ByteString a b m Request"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseRequestLine",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e (Method, ByteString, HTTPVersion)",
        "fct-source": "src/Request.html#parseRequestLine",
        "fct-type": "function",
        "title": "parseRequestLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseRequestLine",
        "normalized": "ByteString-\u003e(Method,ByteString,HTTPVersion)",
        "package": "hyperdrive",
        "partial": "Request Line",
        "signature": "ByteString-\u003e(Method,ByteString,HTTPVersion)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseToken",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e (ByteString, ByteString)",
        "fct-source": "src/Request.html#parseToken",
        "fct-type": "function",
        "title": "parseToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "parseToken",
        "normalized": "ByteString-\u003e(ByteString,ByteString)",
        "package": "hyperdrive",
        "partial": "Token",
        "signature": "ByteString-\u003e(ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:pipeBody",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently if you consume the entire request body this will\n terminate and return the \u003ccode\u003eret\u003c/code\u003e value that you supplied. But, that\n seems wrong, because that will tear down the whole pipeline and\n return that value instead of what you really wanted to return.\n\u003c/p\u003e\u003cp\u003ePerhaps this should return a 'Maybe ByteString' instead so you can\n detect when the body ends? But that interfers with using\n \u003ccode\u003e\u003ca\u003eparseRequest\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ehttpPipe\u003c/code\u003e. For now we will just return \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n forever when you get to the end.\n\u003c/p\u003e\u003cp\u003ePerhaps pipes 2.5 will provide a better solution as it is supposed\n to allow you to catch termination of the upstream pipe.\n\u003c/p\u003e",
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Request -\u003e () -\u003e StateP ByteString p () ByteString a ByteString m r",
        "fct-source": "src/Request.html#pipeBody",
        "fct-type": "function",
        "title": "pipeBody"
      },
      "index": {
        "description": "currently if you consume the entire request body this will terminate and return the ret value that you supplied But that seems wrong because that will tear down the whole pipeline and return that value instead of what you really wanted to return Perhaps this should return Maybe ByteString instead so you can detect when the body ends But that interfers with using parseRequest in httpPipe For now we will just return empty forever when you get to the end Perhaps pipes will provide better solution as it is supposed to allow you to catch termination of the upstream pipe",
        "hierarchy": "Request",
        "module": "Request",
        "name": "pipeBody",
        "normalized": "Request-\u003e()-\u003eStateP ByteString a()ByteString b ByteString c d",
        "package": "hyperdrive",
        "partial": "Body",
        "signature": "Request-\u003e()-\u003eStateP ByteString p()ByteString a ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:space",
      "description": {
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "Word8",
        "fct-source": "src/Request.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "",
        "hierarchy": "Request",
        "module": "Request",
        "name": "space",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:takeLine",
      "description": {
        "fct-descr": "\u003cp\u003efind a line terminated by a '\\r\\n'\n\u003c/p\u003e",
        "fct-module": "Request",
        "fct-package": "hyperdrive",
        "fct-signature": "StateP ByteString p () ByteString a b m ByteString",
        "fct-source": "src/Request.html#takeLine",
        "fct-type": "function",
        "title": "takeLine"
      },
      "index": {
        "description": "find line terminated by",
        "hierarchy": "Request",
        "module": "Request",
        "name": "takeLine",
        "normalized": "StateP ByteString a()ByteString b c d ByteString",
        "package": "hyperdrive",
        "partial": "Line",
        "signature": "StateP ByteString p()ByteString a b m ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "module",
        "fct-source": "src/Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "Response",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:not_found_status",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString",
        "fct-source": "src/Response.html#not_found_status",
        "fct-type": "function",
        "title": "not_found_status"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "not_found_status",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:ok_status",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString",
        "fct-source": "src/Response.html#ok_status",
        "fct-type": "function",
        "title": "ok_status"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "ok_status",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:renderHeader",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "(ByteString, ByteString) -\u003e ByteString",
        "fct-source": "src/Response.html#renderHeader",
        "fct-type": "function",
        "title": "renderHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "renderHeader",
        "normalized": "(ByteString,ByteString)-\u003eByteString",
        "package": "hyperdrive",
        "partial": "Header",
        "signature": "(ByteString,ByteString)-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:renderHeaders",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "[(ByteString, ByteString)] -\u003e ByteString",
        "fct-source": "src/Response.html#renderHeaders",
        "fct-type": "function",
        "title": "renderHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "renderHeaders",
        "normalized": "[(ByteString,ByteString)]-\u003eByteString",
        "package": "hyperdrive",
        "partial": "Headers",
        "signature": "[(ByteString,ByteString)]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:responseWriter",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "Response m -\u003e Pipe ProxyFast ByteString ByteString m ()",
        "fct-source": "src/Response.html#responseWriter",
        "fct-type": "function",
        "title": "responseWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "responseWriter",
        "normalized": "Response a-\u003ePipe ProxyFast ByteString ByteString a()",
        "package": "hyperdrive",
        "partial": "Writer",
        "signature": "Response m-\u003ePipe ProxyFast ByteString ByteString m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:statusLine",
      "description": {
        "fct-module": "Response",
        "fct-package": "hyperdrive",
        "fct-signature": "Int -\u003e ByteString",
        "fct-source": "src/Response.html#statusLine",
        "fct-type": "function",
        "title": "statusLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Response",
        "module": "Response",
        "name": "statusLine",
        "normalized": "Int-\u003eByteString",
        "package": "hyperdrive",
        "partial": "Line",
        "signature": "Int-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#",
      "description": {
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "module",
        "fct-source": "src/Serve.html",
        "fct-type": "module",
        "title": "Serve"
      },
      "index": {
        "description": "",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "Serve",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Serve",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e essentially a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe Pipe allows use to incrementally read \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chuncks from\n the Request body and incrementally write \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks in the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e",
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "type",
        "fct-source": "src/Serve.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "Handler essentially Request and returns Response The Pipe allows use to incrementally read ByteString chuncks from the Request body and incrementally write ByteString chunks in the Response body",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "Handler",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:httpPipe",
      "description": {
        "fct-descr": "\u003cp\u003eand this is the real heart of things\n\u003c/p\u003e",
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "Bool-\u003e SockAddr-\u003e Handler IO-\u003e ()-\u003e StateP ByteString ProxyFast () ByteString () ByteString IO b",
        "fct-type": "function",
        "title": "httpPipe"
      },
      "index": {
        "description": "and this is the real heart of things",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "httpPipe",
        "normalized": "Bool-\u003eSockAddr-\u003eHandler IO-\u003e()-\u003eStateP ByteString ProxyFast()ByteString()ByteString IO a",
        "package": "hyperdrive",
        "partial": "Pipe",
        "signature": "Bool-\u003eSockAddr-\u003eHandler IO-\u003e()-\u003eStateP ByteString ProxyFast()ByteString()ByteString IO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:requestLoop",
      "description": {
        "fct-descr": "\u003cp\u003ethis is where we construct the pipe that reads from the socket,\n processes the request, and sends the response\n\u003c/p\u003e",
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "Bool-\u003e SockAddr-\u003e (() -\u003e Server ProxyFast () ByteString IO ())-\u003e (() -\u003e Client ProxyFast () ByteString IO ())-\u003e Handler IO-\u003e IO ()",
        "fct-type": "function",
        "title": "requestLoop"
      },
      "index": {
        "description": "this is where we construct the pipe that reads from the socket processes the request and sends the response",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "requestLoop",
        "normalized": "Bool-\u003eSockAddr-\u003e(()-\u003eServer ProxyFast()ByteString IO())-\u003e(()-\u003eClient ProxyFast()ByteString IO())-\u003eHandler IO-\u003eIO()",
        "package": "hyperdrive",
        "partial": "Loop",
        "signature": "Bool-\u003eSockAddr-\u003e(()-\u003eServer ProxyFast()ByteString IO())-\u003e(()-\u003eClient ProxyFast()ByteString IO())-\u003eHandler IO-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:serve",
      "description": {
        "fct-descr": "\u003cp\u003elisten on a port and handle \u003ccode\u003eRequests\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "Int-\u003e Handler IO-\u003e IO ()",
        "fct-type": "function",
        "title": "serve"
      },
      "index": {
        "description": "listen on port and handle Requests",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "serve",
        "normalized": "Int-\u003eHandler IO-\u003eIO()",
        "package": "hyperdrive",
        "partial": "",
        "signature": "Int-\u003eHandler IO-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:serveSocket",
      "description": {
        "fct-module": "Serve",
        "fct-package": "hyperdrive",
        "fct-signature": "Socket-\u003e Handler IO-\u003e IO ()",
        "fct-type": "function",
        "title": "serveSocket"
      },
      "index": {
        "description": "",
        "hierarchy": "Serve",
        "module": "Serve",
        "name": "serveSocket",
        "normalized": "Socket-\u003eHandler IO-\u003eIO()",
        "package": "hyperdrive",
        "partial": "Socket",
        "signature": "Socket-\u003eHandler IO-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "module",
        "fct-source": "src/Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Types",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:HTTPVersion",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "data",
        "fct-source": "src/Types.html#HTTPVersion",
        "fct-type": "data",
        "title": "HTTPVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "HTTPVersion",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "HTTPVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:MessageBody",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "type",
        "fct-source": "src/Types.html#MessageBody",
        "fct-type": "type",
        "title": "MessageBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "MessageBody",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Message Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Method",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "data",
        "fct-source": "src/Types.html#Method",
        "fct-type": "data",
        "title": "Method"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Method",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Request",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "data",
        "fct-source": "src/Types.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Request",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Response",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "data",
        "fct-source": "src/Types.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Response",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:CONNECT",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "CONNECT",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "CONNECT"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "CONNECT",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "CONNECT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:DELETE",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "DELETE",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "DELETE"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "DELETE",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "DELETE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:EXTENSION",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "EXTENSION ByteString",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "EXTENSION"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "EXTENSION",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "EXTENSION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:GET",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "GET",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "GET"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "GET",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "GET",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:GETONLY",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "GETONLY",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "GETONLY"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "GETONLY",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "GETONLY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HEAD",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "HEAD",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "HEAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "HEAD",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "HEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HTTP10",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "HTTP10",
        "fct-source": "src/Types.html#HTTPVersion",
        "fct-type": "function",
        "title": "HTTP10"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "HTTP10",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HTTP11",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "HTTP11",
        "fct-source": "src/Types.html#HTTPVersion",
        "fct-type": "function",
        "title": "HTTP11"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "HTTP11",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "HTTP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:OPTIONS",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "OPTIONS",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "OPTIONS"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "OPTIONS",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "OPTIONS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:POST",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "POST",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "POST"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "POST",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "POST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:PUT",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "PUT",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "PUT"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "PUT",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "PUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:Request",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Request",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Request",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:Response",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Response",
        "fct-source": "src/Types.html#Response",
        "fct-type": "function",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "Response",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:TRACE",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "TRACE",
        "fct-source": "src/Types.html#Method",
        "fct-type": "function",
        "title": "TRACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "TRACE",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "TRACE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:bytestring",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "ByteString -\u003e Doc",
        "fct-source": "src/Types.html#bytestring",
        "fct-type": "function",
        "title": "bytestring"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "bytestring",
        "normalized": "ByteString-\u003eDoc",
        "package": "hyperdrive",
        "partial": "",
        "signature": "ByteString-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:field",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "String -\u003e Doc -\u003e Doc",
        "fct-source": "src/Types.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "field",
        "normalized": "String-\u003eDoc-\u003eDoc",
        "package": "hyperdrive",
        "partial": "",
        "signature": "String-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppHTTPVersion",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "HTTPVersion -\u003e Doc",
        "fct-source": "src/Types.html#ppHTTPVersion",
        "fct-type": "function",
        "title": "ppHTTPVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "ppHTTPVersion",
        "normalized": "HTTPVersion-\u003eDoc",
        "package": "hyperdrive",
        "partial": "HTTPVersion",
        "signature": "HTTPVersion-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppHeader",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "(ByteString, ByteString) -\u003e Doc",
        "fct-source": "src/Types.html#ppHeader",
        "fct-type": "function",
        "title": "ppHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "ppHeader",
        "normalized": "(ByteString,ByteString)-\u003eDoc",
        "package": "hyperdrive",
        "partial": "Header",
        "signature": "(ByteString,ByteString)-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppMethod",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Method -\u003e Doc",
        "fct-source": "src/Types.html#ppMethod",
        "fct-type": "function",
        "title": "ppMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "ppMethod",
        "normalized": "Method-\u003eDoc",
        "package": "hyperdrive",
        "partial": "Method",
        "signature": "Method-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppRequest",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Request -\u003e Doc",
        "fct-source": "src/Types.html#ppRequest",
        "fct-type": "function",
        "title": "ppRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "ppRequest",
        "normalized": "Request-\u003eDoc",
        "package": "hyperdrive",
        "partial": "Request",
        "signature": "Request-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppResponse",
      "description": {
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Response m -\u003e Doc",
        "fct-source": "src/Types.html#ppResponse",
        "fct-type": "function",
        "title": "ppResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "ppResponse",
        "normalized": "Response a-\u003eDoc",
        "package": "hyperdrive",
        "partial": "Response",
        "signature": "Response m-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqClient",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!SockAddr",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqClient"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqClient",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqHTTPVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!HTTPVersion",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqHTTPVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqHTTPVersion",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "HTTPVersion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "![(ByteString, ByteString)]",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqHeaders",
        "normalized": "[(ByteString,ByteString)]",
        "package": "hyperdrive",
        "partial": "Headers",
        "signature": "[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqMethod",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!Method",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqMethod",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqSecure",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!Bool",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqSecure"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqSecure",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqURIbs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!ByteString",
        "fct-source": "src/Types.html#Request",
        "fct-type": "function",
        "title": "rqURIbs"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rqURIbs",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "URIbs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "Pipe ProxyFast ByteString MessageBody m ()",
        "fct-source": "src/Types.html#Response",
        "fct-type": "function",
        "title": "rsBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rsBody",
        "normalized": "Pipe ProxyFast ByteString MessageBody a()",
        "package": "hyperdrive",
        "partial": "Body",
        "signature": "Pipe ProxyFast ByteString MessageBody m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "!Int",
        "fct-source": "src/Types.html#Response",
        "fct-type": "function",
        "title": "rsCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rsCode",
        "normalized": "",
        "package": "hyperdrive",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsHeaders",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Types",
        "fct-package": "hyperdrive",
        "fct-signature": "[(ByteString, ByteString)]",
        "fct-source": "src/Types.html#Response",
        "fct-type": "function",
        "title": "rsHeaders"
      },
      "index": {
        "description": "",
        "hierarchy": "Types",
        "module": "Types",
        "name": "rsHeaders",
        "normalized": "[(ByteString,ByteString)]",
        "package": "hyperdrive",
        "partial": "Headers",
        "signature": "[(ByteString,ByteString)]"
      }
    }
  }
]