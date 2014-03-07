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
        "word": "acme-http"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "Request",
          "package": "acme-http",
          "source": "src/Acme-Request.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "Request",
          "package": "acme-http",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "ParseError",
          "package": "acme-http",
          "source": "src/Acme-Request.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "ParseError",
          "package": "acme-http",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "MalformedHeader",
          "package": "acme-http",
          "signature": "MalformedHeader ByteString",
          "source": "src/Acme-Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "MalformedHeader",
          "package": "acme-http",
          "partial": "Malformed Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:MalformedHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "MalformedRequestLine",
          "package": "acme-http",
          "signature": "MalformedRequestLine ByteString",
          "source": "src/Acme-Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "MalformedRequestLine",
          "package": "acme-http",
          "partial": "Malformed Request Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:MalformedRequestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "Unexpected",
          "package": "acme-http",
          "signature": "Unexpected",
          "source": "src/Acme-Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "Unexpected",
          "package": "acme-http",
          "partial": "Unexpected",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:Unexpected"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "UnknownHTTPVersion",
          "package": "acme-http",
          "signature": "UnknownHTTPVersion ByteString",
          "source": "src/Acme-Request.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "UnknownHTTPVersion",
          "package": "acme-http",
          "partial": "Unknown HTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:UnknownHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseHTTPVersion",
          "package": "acme-http",
          "signature": "ByteString -\u003e HTTPVersion",
          "source": "src/Acme-Request.html#parseHTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseHTTPVersion",
          "normalized": "ByteString-\u003eHTTPVersion",
          "package": "acme-http",
          "partial": "HTTPVersion",
          "signature": "ByteString-\u003eHTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseHeader",
          "package": "acme-http",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Acme-Request.html#parseHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseHeader",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "acme-http",
          "partial": "Header",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseHeaders",
          "package": "acme-http",
          "signature": "IO ByteString -\u003e ByteString -\u003e IO ([(ByteString, ByteString)], ByteString)",
          "source": "src/Acme-Request.html#parseHeaders",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseHeaders",
          "normalized": "IO ByteString-\u003eByteString-\u003eIO([(ByteString,ByteString)],ByteString)",
          "package": "acme-http",
          "partial": "Headers",
          "signature": "IO ByteString-\u003eByteString-\u003eIO([(ByteString,ByteString)],ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseMethod",
          "package": "acme-http",
          "signature": "ByteString -\u003e Method",
          "source": "src/Acme-Request.html#parseMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseMethod",
          "normalized": "ByteString-\u003eMethod",
          "package": "acme-http",
          "partial": "Method",
          "signature": "ByteString-\u003eMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseRequest",
          "package": "acme-http",
          "signature": "IO ByteString -\u003e ByteString -\u003e Bool -\u003e IO (Request, ByteString)",
          "source": "src/Acme-Request.html#parseRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseRequest",
          "normalized": "IO ByteString-\u003eByteString-\u003eBool-\u003eIO(Request,ByteString)",
          "package": "acme-http",
          "partial": "Request",
          "signature": "IO ByteString-\u003eByteString-\u003eBool-\u003eIO(Request,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseRequestLine",
          "package": "acme-http",
          "signature": "ByteString -\u003e (Method, ByteString, HTTPVersion)",
          "source": "src/Acme-Request.html#parseRequestLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseRequestLine",
          "normalized": "ByteString-\u003e(Method,ByteString,HTTPVersion)",
          "package": "acme-http",
          "partial": "Request Line",
          "signature": "ByteString-\u003e(Method,ByteString,HTTPVersion)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseRequestLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Request",
          "name": "parseToken",
          "package": "acme-http",
          "signature": "ByteString -\u003e (ByteString, ByteString)",
          "source": "src/Acme-Request.html#parseToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "parseToken",
          "normalized": "ByteString-\u003e(ByteString,ByteString)",
          "package": "acme-http",
          "partial": "Token",
          "signature": "ByteString-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:parseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efind a line terminated by a '\\r\\n'\n\u003c/p\u003e",
          "module": "Acme.Request",
          "name": "takeLine",
          "package": "acme-http",
          "signature": "IO ByteString -\u003e ByteString -\u003e IO (ByteString, ByteString)",
          "source": "src/Acme-Request.html#takeLine",
          "type": "function"
        },
        "index": {
          "description": "find line terminated by",
          "hierarchy": "Acme Request",
          "module": "Acme.Request",
          "name": "takeLine",
          "normalized": "IO ByteString-\u003eByteString-\u003eIO(ByteString,ByteString)",
          "package": "acme-http",
          "partial": "Line",
          "signature": "IO ByteString-\u003eByteString-\u003eIO(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Request.html#v:takeLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Response",
          "name": "Response",
          "package": "acme-http",
          "source": "src/Acme-Response.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Response",
          "module": "Acme.Response",
          "name": "Response",
          "package": "acme-http",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Response",
          "name": "ok_status",
          "package": "acme-http",
          "signature": "ByteString",
          "source": "src/Acme-Response.html#ok_status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Response",
          "module": "Acme.Response",
          "name": "ok_status",
          "package": "acme-http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Response.html#v:ok_status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Response",
          "name": "pong",
          "package": "acme-http",
          "signature": "(ByteString -\u003e IO ()) -\u003e IO ()",
          "source": "src/Acme-Response.html#pong",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Response",
          "module": "Acme.Response",
          "name": "pong",
          "normalized": "(ByteString-\u003eIO())-\u003eIO()",
          "package": "acme-http",
          "signature": "(ByteString-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Response.html#v:pong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Response",
          "name": "sendResponse",
          "package": "acme-http",
          "signature": "(ByteString -\u003e IO ()) -\u003e Response -\u003e IO ()",
          "source": "src/Acme-Response.html#sendResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Response",
          "module": "Acme.Response",
          "name": "sendResponse",
          "normalized": "(ByteString-\u003eIO())-\u003eResponse-\u003eIO()",
          "package": "acme-http",
          "partial": "Response",
          "signature": "(ByteString-\u003eIO())-\u003eResponse-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Response.html#v:sendResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Response",
          "name": "statusLine",
          "package": "acme-http",
          "signature": "Int -\u003e ByteString",
          "source": "src/Acme-Response.html#statusLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Response",
          "module": "Acme.Response",
          "name": "statusLine",
          "normalized": "Int-\u003eByteString",
          "package": "acme-http",
          "partial": "Line",
          "signature": "Int-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Response.html#v:statusLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Serve",
          "name": "Serve",
          "package": "acme-http",
          "source": "src/Acme-Serve.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Serve",
          "module": "Acme.Serve",
          "name": "Serve",
          "package": "acme-http",
          "partial": "Serve",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Serve.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estart TCP listening on a port\n\u003c/p\u003e",
          "module": "Acme.Serve",
          "name": "listenOn",
          "package": "acme-http",
          "signature": "Int-\u003e IO Socket",
          "type": "function"
        },
        "index": {
          "description": "start TCP listening on port",
          "hierarchy": "Acme Serve",
          "module": "Acme.Serve",
          "name": "listenOn",
          "normalized": "Int-\u003eIO Socket",
          "package": "acme-http",
          "partial": "On",
          "signature": "Int-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Serve.html#v:listenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Serve",
          "name": "requestLoop",
          "package": "acme-http",
          "signature": "Bool -\u003e SockAddr -\u003e IO ByteString -\u003e (ByteString -\u003e IO ()) -\u003e (Request -\u003e IO Response) -\u003e IO ()",
          "source": "src/Acme-Serve.html#requestLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Serve",
          "module": "Acme.Serve",
          "name": "requestLoop",
          "normalized": "Bool-\u003eSockAddr-\u003eIO ByteString-\u003e(ByteString-\u003eIO())-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "acme-http",
          "partial": "Loop",
          "signature": "Bool-\u003eSockAddr-\u003eIO ByteString-\u003e(ByteString-\u003eIO())-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Serve.html#v:requestLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elisten on a port and handle \u003ccode\u003eRequests\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Acme.Serve",
          "name": "serve",
          "package": "acme-http",
          "signature": "Int-\u003e (Request -\u003e IO Response)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "listen on port and handle Requests",
          "hierarchy": "Acme Serve",
          "module": "Acme.Serve",
          "name": "serve",
          "normalized": "Int-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "acme-http",
          "signature": "Int-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Serve.html#v:serve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ehandle \u003ccode\u003eRequests\u003c/code\u003e from an already listening \u003ccode\u003e\u003ca\u003eSocket\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Acme.Serve",
          "name": "serveSocket",
          "package": "acme-http",
          "signature": "Socket-\u003e (Request -\u003e IO Response)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "handle Requests from an already listening Socket",
          "hierarchy": "Acme Serve",
          "module": "Acme.Serve",
          "name": "serveSocket",
          "normalized": "Socket-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "package": "acme-http",
          "partial": "Socket",
          "signature": "Socket-\u003e(Request-\u003eIO Response)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Serve.html#v:serveSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "Types",
          "package": "acme-http",
          "source": "src/Acme-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "Types",
          "package": "acme-http",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethrown when the remote-side closes the connection\n\u003c/p\u003e",
          "module": "Acme.Types",
          "name": "ConnectionClosed",
          "package": "acme-http",
          "source": "src/Acme-Types.html#ConnectionClosed",
          "type": "data"
        },
        "index": {
          "description": "thrown when the remote-side closes the connection",
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ConnectionClosed",
          "package": "acme-http",
          "partial": "Connection Closed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#t:ConnectionClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "HTTPVersion",
          "package": "acme-http",
          "source": "src/Acme-Types.html#HTTPVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "HTTPVersion",
          "package": "acme-http",
          "partial": "HTTPVersion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#t:HTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "Method",
          "package": "acme-http",
          "source": "src/Acme-Types.html#Method",
          "type": "data"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "Method",
          "package": "acme-http",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "Request",
          "package": "acme-http",
          "source": "src/Acme-Types.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "Request",
          "package": "acme-http",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "Response",
          "package": "acme-http",
          "source": "src/Acme-Types.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "Response",
          "package": "acme-http",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ByteStringResponse",
          "package": "acme-http",
          "signature": "ByteStringResponse",
          "source": "src/Acme-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ByteStringResponse",
          "package": "acme-http",
          "partial": "Byte String Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ByteStringResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "CONNECT",
          "package": "acme-http",
          "signature": "CONNECT",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "CONNECT",
          "package": "acme-http",
          "partial": "CONNECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:CONNECT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ConnectionClosed",
          "package": "acme-http",
          "signature": "ConnectionClosed",
          "source": "src/Acme-Types.html#ConnectionClosed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ConnectionClosed",
          "package": "acme-http",
          "partial": "Connection Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ConnectionClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "DELETE",
          "package": "acme-http",
          "signature": "DELETE",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "DELETE",
          "package": "acme-http",
          "partial": "DELETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:DELETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "EXTENSION",
          "package": "acme-http",
          "signature": "EXTENSION ByteString",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "EXTENSION",
          "package": "acme-http",
          "partial": "EXTENSION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:EXTENSION"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "GET",
          "package": "acme-http",
          "signature": "GET",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "GET",
          "package": "acme-http",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "GETONLY",
          "package": "acme-http",
          "signature": "GETONLY",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "GETONLY",
          "package": "acme-http",
          "partial": "GETONLY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:GETONLY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "HEAD",
          "package": "acme-http",
          "signature": "HEAD",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "HEAD",
          "package": "acme-http",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "HTTP10",
          "package": "acme-http",
          "signature": "HTTP10",
          "source": "src/Acme-Types.html#HTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "HTTP10",
          "package": "acme-http",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:HTTP10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "HTTP11",
          "package": "acme-http",
          "signature": "HTTP11",
          "source": "src/Acme-Types.html#HTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "HTTP11",
          "package": "acme-http",
          "partial": "HTTP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:HTTP11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "OPTIONS",
          "package": "acme-http",
          "signature": "OPTIONS",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "OPTIONS",
          "package": "acme-http",
          "partial": "OPTIONS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:OPTIONS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "POST",
          "package": "acme-http",
          "signature": "POST",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "POST",
          "package": "acme-http",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "PUT",
          "package": "acme-http",
          "signature": "PUT",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "PUT",
          "package": "acme-http",
          "partial": "PUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:PUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn PONG in the request body\n\u003c/p\u003e",
          "module": "Acme.Types",
          "name": "PongResponse",
          "package": "acme-http",
          "signature": "PongResponse",
          "source": "src/Acme-Types.html#Response",
          "type": "function"
        },
        "index": {
          "description": "return PONG in the request body",
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "PongResponse",
          "package": "acme-http",
          "partial": "Pong Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:PongResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "Request",
          "package": "acme-http",
          "signature": "Request",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "Request",
          "package": "acme-http",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "TRACE",
          "package": "acme-http",
          "signature": "TRACE",
          "source": "src/Acme-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "TRACE",
          "package": "acme-http",
          "partial": "TRACE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:TRACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Acme.Types",
          "name": "bytestring",
          "package": "acme-http",
          "signature": "ByteString -\u003e Doc",
          "source": "src/Acme-Types.html#bytestring",
          "type": "function"
        },
        "index": {
          "description": "render ByteString to Doc",
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "bytestring",
          "normalized": "ByteString-\u003eDoc",
          "package": "acme-http",
          "signature": "ByteString-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:bytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "colon",
          "package": "acme-http",
          "signature": "Word8",
          "source": "src/Acme-Types.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "colon",
          "package": "acme-http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "cr",
          "package": "acme-http",
          "signature": "Word8",
          "source": "src/Acme-Types.html#cr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "cr",
          "package": "acme-http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:cr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erender, field = value\n\u003c/p\u003e",
          "module": "Acme.Types",
          "name": "field",
          "package": "acme-http",
          "signature": "String-\u003e Doc-\u003e Doc",
          "type": "function"
        },
        "index": {
          "description": "render field value",
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "field",
          "normalized": "String-\u003eDoc-\u003eDoc",
          "package": "acme-http",
          "signature": "String-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "nl",
          "package": "acme-http",
          "signature": "Word8",
          "source": "src/Acme-Types.html#nl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "nl",
          "package": "acme-http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ppHTTPVersion",
          "package": "acme-http",
          "signature": "HTTPVersion -\u003e Doc",
          "source": "src/Acme-Types.html#ppHTTPVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ppHTTPVersion",
          "normalized": "HTTPVersion-\u003eDoc",
          "package": "acme-http",
          "partial": "HTTPVersion",
          "signature": "HTTPVersion-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ppHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty-print an HTTP header\n\u003c/p\u003e",
          "module": "Acme.Types",
          "name": "ppHeader",
          "package": "acme-http",
          "signature": "(ByteString, ByteString) -\u003e Doc",
          "source": "src/Acme-Types.html#ppHeader",
          "type": "function"
        },
        "index": {
          "description": "pretty-print an HTTP header",
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ppHeader",
          "normalized": "(ByteString,ByteString)-\u003eDoc",
          "package": "acme-http",
          "partial": "Header",
          "signature": "(ByteString,ByteString)-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ppHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ppMethod",
          "package": "acme-http",
          "signature": "Method -\u003e Doc",
          "source": "src/Acme-Types.html#ppMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ppMethod",
          "normalized": "Method-\u003eDoc",
          "package": "acme-http",
          "partial": "Method",
          "signature": "Method-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ppMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ppRequest",
          "package": "acme-http",
          "signature": "Request -\u003e Doc",
          "source": "src/Acme-Types.html#ppRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ppRequest",
          "normalized": "Request-\u003eDoc",
          "package": "acme-http",
          "partial": "Request",
          "signature": "Request-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ppRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "ppResponse",
          "package": "acme-http",
          "signature": "Response -\u003e Doc",
          "source": "src/Acme-Types.html#ppResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "ppResponse",
          "normalized": "Response-\u003eDoc",
          "package": "acme-http",
          "partial": "Response",
          "signature": "Response-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:ppResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqBody",
          "package": "acme-http",
          "signature": "ByteString",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqBody",
          "package": "acme-http",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqHTTPVersion",
          "package": "acme-http",
          "signature": "HTTPVersion",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqHTTPVersion",
          "package": "acme-http",
          "partial": "HTTPVersion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqHTTPVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqHeaders",
          "package": "acme-http",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "acme-http",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqMethod",
          "package": "acme-http",
          "signature": "Method",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqMethod",
          "package": "acme-http",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqSecure",
          "package": "acme-http",
          "signature": "Bool",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqSecure",
          "package": "acme-http",
          "partial": "Secure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqSecure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rqURIbs",
          "package": "acme-http",
          "signature": "ByteString",
          "source": "src/Acme-Types.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rqURIbs",
          "package": "acme-http",
          "partial": "URIbs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rqURIbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rsBody",
          "package": "acme-http",
          "signature": "ByteString",
          "source": "src/Acme-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rsBody",
          "package": "acme-http",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rsCode",
          "package": "acme-http",
          "signature": "Int",
          "source": "src/Acme-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rsCode",
          "package": "acme-http",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rsCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "rsHeaders",
          "package": "acme-http",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Acme-Types.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "rsHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "acme-http",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:rsHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Types",
          "name": "space",
          "package": "acme-http",
          "signature": "Word8",
          "source": "src/Acme-Types.html#space",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Types",
          "module": "Acme.Types",
          "name": "space",
          "package": "acme-http",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-http/docs/Acme-Types.html#v:space"
      }
    }
  ]
]