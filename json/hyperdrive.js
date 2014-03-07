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
        "word": "hyperdrive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network",
          "name": "Network",
          "package": "hyperdrive",
          "source": "src/Network.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network",
          "module": "Network",
          "name": "Network",
          "package": "hyperdrive",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart TCP listening on a port\n\u003c/p\u003e",
          "module": "Network",
          "name": "listenOn",
          "package": "hyperdrive",
          "signature": "Int-\u003e IO Socket",
          "type": "function"
        },
        "index": {
          "description": "start TCP listening on port",
          "hierarchy": "Network",
          "module": "Network",
          "name": "listenOn",
          "normalized": "Int-\u003eIO Socket",
          "package": "hyperdrive",
          "partial": "On",
          "signature": "Int-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:listenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream data from the socket.\n\u003c/p\u003e\u003cp\u003eFIXME: what should happen if \u003ccode\u003e\u003ca\u003erecv\u003c/a\u003e\u003c/code\u003e raises an exception?\n\u003c/p\u003e",
          "module": "Network",
          "name": "socketReader",
          "package": "hyperdrive",
          "signature": "Socket-\u003e () -\u003e Producer p ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Stream data from the socket FIXME what should happen if recv raises an exception",
          "hierarchy": "Network",
          "module": "Network",
          "name": "socketReader",
          "normalized": "Socket-\u003e()-\u003eProducer a ByteString b()",
          "package": "hyperdrive",
          "partial": "Reader",
          "signature": "Socket-\u003e()-\u003eProducer p ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:socketReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStream data to the socket.\n\u003c/p\u003e\u003cp\u003eFIXME: what should happen if \u003ccode\u003e\u003ca\u003esendAll\u003c/a\u003e\u003c/code\u003e raises an exception?\n\u003c/p\u003e",
          "module": "Network",
          "name": "socketWriter",
          "package": "hyperdrive",
          "signature": "Socket-\u003e () -\u003e Consumer p ByteString m ()",
          "type": "function"
        },
        "index": {
          "description": "Stream data to the socket FIXME what should happen if sendAll raises an exception",
          "hierarchy": "Network",
          "module": "Network",
          "name": "socketWriter",
          "normalized": "Socket-\u003e()-\u003eConsumer a ByteString b()",
          "package": "hyperdrive",
          "partial": "Writer",
          "signature": "Socket-\u003e()-\u003eConsumer p ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Network.html#v:socketWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "Request",
          "package": "hyperdrive",
          "source": "src/Request.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "Request",
          "package": "hyperdrive",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "ParseError",
          "package": "hyperdrive",
          "source": "src/Request.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "ParseError",
          "package": "hyperdrive",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "MalformedHeader",
          "package": "hyperdrive",
          "signature": "MalformedHeader ByteString",
          "source": "src/Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "MalformedHeader",
          "package": "hyperdrive",
          "partial": "Malformed Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:MalformedHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "MalformedRequestLine",
          "package": "hyperdrive",
          "signature": "MalformedRequestLine ByteString",
          "source": "src/Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "MalformedRequestLine",
          "package": "hyperdrive",
          "partial": "Malformed Request Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:MalformedRequestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "Unexpected",
          "package": "hyperdrive",
          "signature": "Unexpected",
          "source": "src/Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "Unexpected",
          "package": "hyperdrive",
          "partial": "Unexpected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:Unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "UnknownHTTPVersion",
          "package": "hyperdrive",
          "signature": "UnknownHTTPVersion ByteString",
          "source": "src/Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "UnknownHTTPVersion",
          "package": "hyperdrive",
          "partial": "Unknown HTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:UnknownHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "colon",
          "package": "hyperdrive",
          "signature": "Word8",
          "source": "src/Request.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "colon",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "cr",
          "package": "hyperdrive",
          "signature": "Word8",
          "source": "src/Request.html#cr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "cr",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "nl",
          "package": "hyperdrive",
          "signature": "Word8",
          "source": "src/Request.html#nl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "nl",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseHTTPVersion",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e HTTPVersion",
          "source": "src/Request.html#parseHTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseHTTPVersion",
          "normalized": "ByteString-\u003eHTTPVersion",
          "package": "hyperdrive",
          "partial": "HTTPVersion",
          "signature": "ByteString-\u003eHTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseHeader",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Request.html#parseHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseHeader",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "hyperdrive",
          "partial": "Header",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseHeaders",
          "package": "hyperdrive",
          "signature": "StateP ByteString p () ByteString a b m [(ByteString, ByteString)]",
          "source": "src/Request.html#parseHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseHeaders",
          "normalized": "StateP ByteString a()ByteString b c d[(ByteString,ByteString)]",
          "package": "hyperdrive",
          "partial": "Headers",
          "signature": "StateP ByteString p()ByteString a b m[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseMethod",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e Method",
          "source": "src/Request.html#parseMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseMethod",
          "normalized": "ByteString-\u003eMethod",
          "package": "hyperdrive",
          "partial": "Method",
          "signature": "ByteString-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseRequest",
          "package": "hyperdrive",
          "signature": "Bool-\u003e SockAddr-\u003e StateP ByteString p () ByteString a b m Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseRequest",
          "normalized": "Bool-\u003eSockAddr-\u003eStateP ByteString a()ByteString b c d Request",
          "package": "hyperdrive",
          "partial": "Request",
          "signature": "Bool-\u003eSockAddr-\u003eStateP ByteString p()ByteString a b m Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseRequestLine",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e (Method, ByteString, HTTPVersion)",
          "source": "src/Request.html#parseRequestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseRequestLine",
          "normalized": "ByteString-\u003e(Method,ByteString,HTTPVersion)",
          "package": "hyperdrive",
          "partial": "Request Line",
          "signature": "ByteString-\u003e(Method,ByteString,HTTPVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseRequestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "parseToken",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Request.html#parseToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "parseToken",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "hyperdrive",
          "partial": "Token",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:parseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently if you consume the entire request body this will\n terminate and return the \u003ccode\u003eret\u003c/code\u003e value that you supplied. But, that\n seems wrong, because that will tear down the whole pipeline and\n return that value instead of what you really wanted to return.\n\u003c/p\u003e\u003cp\u003ePerhaps this should return a 'Maybe ByteString' instead so you can\n detect when the body ends? But that interfers with using\n \u003ccode\u003e\u003ca\u003eparseRequest\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003ehttpPipe\u003c/code\u003e. For now we will just return \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\n forever when you get to the end.\n\u003c/p\u003e\u003cp\u003ePerhaps pipes 2.5 will provide a better solution as it is supposed\n to allow you to catch termination of the upstream pipe.\n\u003c/p\u003e",
          "module": "Request",
          "name": "pipeBody",
          "package": "hyperdrive",
          "signature": "Request -\u003e () -\u003e StateP ByteString p () ByteString a ByteString m r",
          "source": "src/Request.html#pipeBody",
          "type": "function"
        },
        "index": {
          "description": "currently if you consume the entire request body this will terminate and return the ret value that you supplied But that seems wrong because that will tear down the whole pipeline and return that value instead of what you really wanted to return Perhaps this should return Maybe ByteString instead so you can detect when the body ends But that interfers with using parseRequest in httpPipe For now we will just return empty forever when you get to the end Perhaps pipes will provide better solution as it is supposed to allow you to catch termination of the upstream pipe",
          "hierarchy": "Request",
          "module": "Request",
          "name": "pipeBody",
          "normalized": "Request-\u003e()-\u003eStateP ByteString a()ByteString b ByteString c d",
          "package": "hyperdrive",
          "partial": "Body",
          "signature": "Request-\u003e()-\u003eStateP ByteString p()ByteString a ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:pipeBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Request",
          "name": "space",
          "package": "hyperdrive",
          "signature": "Word8",
          "source": "src/Request.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Request",
          "module": "Request",
          "name": "space",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind a line terminated by a '\\r\\n'\n\u003c/p\u003e",
          "module": "Request",
          "name": "takeLine",
          "package": "hyperdrive",
          "signature": "StateP ByteString p () ByteString a b m ByteString",
          "source": "src/Request.html#takeLine",
          "type": "function"
        },
        "index": {
          "description": "find line terminated by",
          "hierarchy": "Request",
          "module": "Request",
          "name": "takeLine",
          "normalized": "StateP ByteString a()ByteString b c d ByteString",
          "package": "hyperdrive",
          "partial": "Line",
          "signature": "StateP ByteString p()ByteString a b m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Request.html#v:takeLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "Response",
          "package": "hyperdrive",
          "source": "src/Response.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "Response",
          "package": "hyperdrive",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "not_found_status",
          "package": "hyperdrive",
          "signature": "ByteString",
          "source": "src/Response.html#not_found_status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "not_found_status",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:not_found_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "ok_status",
          "package": "hyperdrive",
          "signature": "ByteString",
          "source": "src/Response.html#ok_status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "ok_status",
          "package": "hyperdrive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:ok_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "renderHeader",
          "package": "hyperdrive",
          "signature": "(ByteString, ByteString) -\u003e ByteString",
          "source": "src/Response.html#renderHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "renderHeader",
          "normalized": "(ByteString,ByteString)-\u003eByteString",
          "package": "hyperdrive",
          "partial": "Header",
          "signature": "(ByteString,ByteString)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:renderHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "renderHeaders",
          "package": "hyperdrive",
          "signature": "[(ByteString, ByteString)] -\u003e ByteString",
          "source": "src/Response.html#renderHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "renderHeaders",
          "normalized": "[(ByteString,ByteString)]-\u003eByteString",
          "package": "hyperdrive",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:renderHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "responseWriter",
          "package": "hyperdrive",
          "signature": "Response m -\u003e Pipe ProxyFast ByteString ByteString m ()",
          "source": "src/Response.html#responseWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "responseWriter",
          "normalized": "Response a-\u003ePipe ProxyFast ByteString ByteString a()",
          "package": "hyperdrive",
          "partial": "Writer",
          "signature": "Response m-\u003ePipe ProxyFast ByteString ByteString m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:responseWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Response",
          "name": "statusLine",
          "package": "hyperdrive",
          "signature": "Int -\u003e ByteString",
          "source": "src/Response.html#statusLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Response",
          "module": "Response",
          "name": "statusLine",
          "normalized": "Int-\u003eByteString",
          "package": "hyperdrive",
          "partial": "Line",
          "signature": "Int-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Response.html#v:statusLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Serve",
          "name": "Serve",
          "package": "hyperdrive",
          "source": "src/Serve.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "Serve",
          "package": "hyperdrive",
          "partial": "Serve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e essentially a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e and returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe Pipe allows use to incrementally read \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chuncks from\n the Request body and incrementally write \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e chunks in the\n \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e body.\n\u003c/p\u003e",
          "module": "Serve",
          "name": "Handler",
          "package": "hyperdrive",
          "source": "src/Serve.html#Handler",
          "type": "type"
        },
        "index": {
          "description": "Handler essentially Request and returns Response The Pipe allows use to incrementally read ByteString chuncks from the Request body and incrementally write ByteString chunks in the Response body",
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "Handler",
          "package": "hyperdrive",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eand this is the real heart of things\n\u003c/p\u003e",
          "module": "Serve",
          "name": "httpPipe",
          "package": "hyperdrive",
          "signature": "Bool-\u003e SockAddr-\u003e Handler IO-\u003e ()-\u003e StateP ByteString ProxyFast () ByteString () ByteString IO b",
          "type": "function"
        },
        "index": {
          "description": "and this is the real heart of things",
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "httpPipe",
          "normalized": "Bool-\u003eSockAddr-\u003eHandler IO-\u003e()-\u003eStateP ByteString ProxyFast()ByteString()ByteString IO a",
          "package": "hyperdrive",
          "partial": "Pipe",
          "signature": "Bool-\u003eSockAddr-\u003eHandler IO-\u003e()-\u003eStateP ByteString ProxyFast()ByteString()ByteString IO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:httpPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethis is where we construct the pipe that reads from the socket,\n processes the request, and sends the response\n\u003c/p\u003e",
          "module": "Serve",
          "name": "requestLoop",
          "package": "hyperdrive",
          "signature": "Bool-\u003e SockAddr-\u003e (() -\u003e Server ProxyFast () ByteString IO ())-\u003e (() -\u003e Client ProxyFast () ByteString IO ())-\u003e Handler IO-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "this is where we construct the pipe that reads from the socket processes the request and sends the response",
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "requestLoop",
          "normalized": "Bool-\u003eSockAddr-\u003e(()-\u003eServer ProxyFast()ByteString IO())-\u003e(()-\u003eClient ProxyFast()ByteString IO())-\u003eHandler IO-\u003eIO()",
          "package": "hyperdrive",
          "partial": "Loop",
          "signature": "Bool-\u003eSockAddr-\u003e(()-\u003eServer ProxyFast()ByteString IO())-\u003e(()-\u003eClient ProxyFast()ByteString IO())-\u003eHandler IO-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:requestLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elisten on a port and handle \u003ccode\u003eRequests\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Serve",
          "name": "serve",
          "package": "hyperdrive",
          "signature": "Int-\u003e Handler IO-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "listen on port and handle Requests",
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "serve",
          "normalized": "Int-\u003eHandler IO-\u003eIO()",
          "package": "hyperdrive",
          "signature": "Int-\u003eHandler IO-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Serve",
          "name": "serveSocket",
          "package": "hyperdrive",
          "signature": "Socket-\u003e Handler IO-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Serve",
          "module": "Serve",
          "name": "serveSocket",
          "normalized": "Socket-\u003eHandler IO-\u003eIO()",
          "package": "hyperdrive",
          "partial": "Socket",
          "signature": "Socket-\u003eHandler IO-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Serve.html#v:serveSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Types",
          "package": "hyperdrive",
          "source": "src/Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Types",
          "package": "hyperdrive",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "HTTPVersion",
          "package": "hyperdrive",
          "source": "src/Types.html#HTTPVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "HTTPVersion",
          "package": "hyperdrive",
          "partial": "HTTPVersion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:HTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "MessageBody",
          "package": "hyperdrive",
          "source": "src/Types.html#MessageBody",
          "type": "type"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "MessageBody",
          "package": "hyperdrive",
          "partial": "Message Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:MessageBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Method",
          "package": "hyperdrive",
          "source": "src/Types.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Method",
          "package": "hyperdrive",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Request",
          "package": "hyperdrive",
          "source": "src/Types.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Request",
          "package": "hyperdrive",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Response",
          "package": "hyperdrive",
          "source": "src/Types.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Response",
          "package": "hyperdrive",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "CONNECT",
          "package": "hyperdrive",
          "signature": "CONNECT",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "CONNECT",
          "package": "hyperdrive",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "DELETE",
          "package": "hyperdrive",
          "signature": "DELETE",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "DELETE",
          "package": "hyperdrive",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "EXTENSION",
          "package": "hyperdrive",
          "signature": "EXTENSION ByteString",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "EXTENSION",
          "package": "hyperdrive",
          "partial": "EXTENSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:EXTENSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "GET",
          "package": "hyperdrive",
          "signature": "GET",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "GET",
          "package": "hyperdrive",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "GETONLY",
          "package": "hyperdrive",
          "signature": "GETONLY",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "GETONLY",
          "package": "hyperdrive",
          "partial": "GETONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:GETONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "HEAD",
          "package": "hyperdrive",
          "signature": "HEAD",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "HEAD",
          "package": "hyperdrive",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "HTTP10",
          "package": "hyperdrive",
          "signature": "HTTP10",
          "source": "src/Types.html#HTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "HTTP10",
          "package": "hyperdrive",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HTTP10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "HTTP11",
          "package": "hyperdrive",
          "signature": "HTTP11",
          "source": "src/Types.html#HTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "HTTP11",
          "package": "hyperdrive",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:HTTP11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "OPTIONS",
          "package": "hyperdrive",
          "signature": "OPTIONS",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "OPTIONS",
          "package": "hyperdrive",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "POST",
          "package": "hyperdrive",
          "signature": "POST",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "POST",
          "package": "hyperdrive",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "PUT",
          "package": "hyperdrive",
          "signature": "PUT",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "PUT",
          "package": "hyperdrive",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Request",
          "package": "hyperdrive",
          "signature": "Request",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Request",
          "package": "hyperdrive",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "Response",
          "package": "hyperdrive",
          "signature": "Response",
          "source": "src/Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "Response",
          "package": "hyperdrive",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "TRACE",
          "package": "hyperdrive",
          "signature": "TRACE",
          "source": "src/Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "TRACE",
          "package": "hyperdrive",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "bytestring",
          "package": "hyperdrive",
          "signature": "ByteString -\u003e Doc",
          "source": "src/Types.html#bytestring",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "bytestring",
          "normalized": "ByteString-\u003eDoc",
          "package": "hyperdrive",
          "signature": "ByteString-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:bytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "field",
          "package": "hyperdrive",
          "signature": "String -\u003e Doc -\u003e Doc",
          "source": "src/Types.html#field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "field",
          "normalized": "String-\u003eDoc-\u003eDoc",
          "package": "hyperdrive",
          "signature": "String-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "ppHTTPVersion",
          "package": "hyperdrive",
          "signature": "HTTPVersion -\u003e Doc",
          "source": "src/Types.html#ppHTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "ppHTTPVersion",
          "normalized": "HTTPVersion-\u003eDoc",
          "package": "hyperdrive",
          "partial": "HTTPVersion",
          "signature": "HTTPVersion-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "ppHeader",
          "package": "hyperdrive",
          "signature": "(ByteString, ByteString) -\u003e Doc",
          "source": "src/Types.html#ppHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "ppHeader",
          "normalized": "(ByteString,ByteString)-\u003eDoc",
          "package": "hyperdrive",
          "partial": "Header",
          "signature": "(ByteString,ByteString)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "ppMethod",
          "package": "hyperdrive",
          "signature": "Method -\u003e Doc",
          "source": "src/Types.html#ppMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "ppMethod",
          "normalized": "Method-\u003eDoc",
          "package": "hyperdrive",
          "partial": "Method",
          "signature": "Method-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "ppRequest",
          "package": "hyperdrive",
          "signature": "Request -\u003e Doc",
          "source": "src/Types.html#ppRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "ppRequest",
          "normalized": "Request-\u003eDoc",
          "package": "hyperdrive",
          "partial": "Request",
          "signature": "Request-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "ppResponse",
          "package": "hyperdrive",
          "signature": "Response m -\u003e Doc",
          "source": "src/Types.html#ppResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "ppResponse",
          "normalized": "Response a-\u003eDoc",
          "package": "hyperdrive",
          "partial": "Response",
          "signature": "Response m-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:ppResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqClient",
          "package": "hyperdrive",
          "signature": "SockAddr",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqClient",
          "package": "hyperdrive",
          "partial": "Client",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqHTTPVersion",
          "package": "hyperdrive",
          "signature": "HTTPVersion",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqHTTPVersion",
          "package": "hyperdrive",
          "partial": "HTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqHeaders",
          "package": "hyperdrive",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "hyperdrive",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqMethod",
          "package": "hyperdrive",
          "signature": "Method",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqMethod",
          "package": "hyperdrive",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqSecure",
          "package": "hyperdrive",
          "signature": "Bool",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqSecure",
          "package": "hyperdrive",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rqURIbs",
          "package": "hyperdrive",
          "signature": "ByteString",
          "source": "src/Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rqURIbs",
          "package": "hyperdrive",
          "partial": "URIbs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rqURIbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rsBody",
          "package": "hyperdrive",
          "signature": "Pipe ProxyFast ByteString MessageBody m ()",
          "source": "src/Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rsBody",
          "normalized": "Pipe ProxyFast ByteString MessageBody a()",
          "package": "hyperdrive",
          "partial": "Body",
          "signature": "Pipe ProxyFast ByteString MessageBody m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rsCode",
          "package": "hyperdrive",
          "signature": "Int",
          "source": "src/Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rsCode",
          "package": "hyperdrive",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Types",
          "name": "rsHeaders",
          "package": "hyperdrive",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Types",
          "module": "Types",
          "name": "rsHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "hyperdrive",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hyperdrive/docs/Types.html#v:rsHeaders"
      }
    }
  ]
]