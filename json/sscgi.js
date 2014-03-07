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
        "word": "sscgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "sscgi",
          "source": "src/Network-SCGI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "sscgi",
          "partial": "SCGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "Body",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#Body",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "Body",
          "package": "sscgi",
          "partial": "Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "Headers",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#Headers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "Headers",
          "package": "sscgi",
          "partial": "Headers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:Headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "Response",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "Response",
          "package": "sscgi",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#SCGI",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "SCGI",
          "package": "sscgi",
          "partial": "SCGI",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:SCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "SCGIT",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#SCGIT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "SCGIT",
          "package": "sscgi",
          "partial": "SCGIT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:SCGIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "Status",
          "package": "sscgi",
          "source": "src/Network-SCGI.html#Status",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "Status",
          "package": "sscgi",
          "partial": "Status",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "Response",
          "package": "sscgi",
          "signature": "Response Status Body",
          "source": "src/Network-SCGI.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "Response",
          "package": "sscgi",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all request headers as a list in the format they were received from the web server.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "allHeaders",
          "package": "sscgi",
          "signature": "SCGIT m [(ByteString, ByteString)]",
          "type": "function"
        },
        "index": {
          "description": "Return all request headers as list in the format they were received from the web server",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "allHeaders",
          "normalized": "SCGIT a[(ByteString,ByteString)]",
          "package": "sscgi",
          "partial": "Headers",
          "signature": "SCGIT m[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:allHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the request body.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "body",
          "package": "sscgi",
          "signature": "SCGIT m ByteString",
          "source": "src/Network-SCGI.html#body",
          "type": "function"
        },
        "index": {
          "description": "Return the request body",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "body",
          "package": "sscgi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a request header.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "header",
          "package": "sscgi",
          "signature": "ByteString-\u003e SCGIT m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Look up request header",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "header",
          "normalized": "ByteString-\u003eSCGIT a(Maybe ByteString)",
          "package": "sscgi",
          "signature": "ByteString-\u003eSCGIT m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request method (GET, POST, etc.). You could look the header up\n yourself, but this normalizes the method name to uppercase.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "method",
          "package": "sscgi",
          "signature": "SCGIT m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Get the request method GET POST etc You could look the header up yourself but this normalizes the method name to uppercase",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "method",
          "package": "sscgi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.SCGI",
          "name": "negotiate",
          "package": "sscgi",
          "signature": "[ByteString] -\u003e SCGIT m [ByteString]",
          "source": "src/Network-SCGI.html#negotiate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "negotiate",
          "normalized": "[ByteString]-\u003eSCGIT a[ByteString]",
          "package": "sscgi",
          "signature": "[ByteString]-\u003eSCGIT m[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:negotiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the requested path. According to the spec, this can be complex, and\n actual CGI implementations diverge from the spec. I've found this to work,\n even though it doesn't seem correct or intuitive.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "path",
          "package": "sscgi",
          "signature": "SCGIT m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Get the requested path According to the spec this can be complex and actual CGI implementations diverge from the spec ve found this to work even though it doesn seem correct or intuitive",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "path",
          "package": "sscgi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up a response header (one set during this request). This is useful when you need to check if a header has been set already (in case you want to modify it, for example).\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "responseHeader",
          "package": "sscgi",
          "signature": "ByteString-\u003e SCGIT m (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Look up response header one set during this request This is useful when you need to check if header has been set already in case you want to modify it for example",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "responseHeader",
          "normalized": "ByteString-\u003eSCGIT a(Maybe ByteString)",
          "package": "sscgi",
          "partial": "Header",
          "signature": "ByteString-\u003eSCGIT m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:responseHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a request in the SCGI monad.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "runRequest",
          "package": "sscgi",
          "signature": "Handle-\u003e SCGIT m Response-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Run request in the SCGI monad",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "runRequest",
          "normalized": "Handle-\u003eSCGIT a Response-\u003ea()",
          "package": "sscgi",
          "partial": "Request",
          "signature": "Handle-\u003eSCGIT m Response-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:runRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a response header.\n\u003c/p\u003e",
          "module": "Network.SCGI",
          "name": "setHeader",
          "package": "sscgi",
          "signature": "ByteString-\u003e ByteString-\u003e SCGIT m ()",
          "type": "function"
        },
        "index": {
          "description": "Set response header",
          "hierarchy": "Network SCGI",
          "module": "Network.SCGI",
          "name": "setHeader",
          "normalized": "ByteString-\u003eByteString-\u003eSCGIT a()",
          "package": "sscgi",
          "partial": "Header",
          "signature": "ByteString-\u003eByteString-\u003eSCGIT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sscgi/docs/Network-SCGI.html#v:setHeader"
      }
    }
  ]
]