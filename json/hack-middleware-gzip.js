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
        "word": "hack-middleware-gzip"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAutomatic gzip compression of responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hack.Middleware.Gzip",
          "name": "Gzip",
          "package": "hack-middleware-gzip",
          "source": "src/Hack-Middleware-Gzip.html",
          "type": "module"
        },
        "index": {
          "description": "Automatic gzip compression of responses",
          "hierarchy": "Hack Middleware Gzip",
          "module": "Hack.Middleware.Gzip",
          "name": "Gzip",
          "package": "hack-middleware-gzip",
          "partial": "Gzip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hack-middleware-gzip/docs/Hack-Middleware-Gzip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse gzip to compress the body of the response.\n\u003c/p\u003e\u003cp\u003eAnalyzes the \"Accept-Encoding\" header from the client to determine\n if gzip is supported.\n\u003c/p\u003e\u003cp\u003ePossible future enhancements:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Only compress if the response is above a certain size.\n\u003c/li\u003e\u003cli\u003e Add Content-Length.\n\u003c/li\u003e\u003cli\u003e I read somewhere that \"the beast\" (MSIE) can't support compression\n for Javascript files..\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Hack.Middleware.Gzip",
          "name": "gzip",
          "package": "hack-middleware-gzip",
          "signature": "Middleware",
          "source": "src/Hack-Middleware-Gzip.html#gzip",
          "type": "function"
        },
        "index": {
          "description": "Use gzip to compress the body of the response Analyzes the Accept-Encoding header from the client to determine if gzip is supported Possible future enhancements Only compress if the response is above certain size Add Content-Length read somewhere that the beast MSIE can support compression for Javascript files",
          "hierarchy": "Hack Middleware Gzip",
          "module": "Hack.Middleware.Gzip",
          "name": "gzip",
          "package": "hack-middleware-gzip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-middleware-gzip/docs/Hack-Middleware-Gzip.html#v:gzip"
      }
    }
  ]
]