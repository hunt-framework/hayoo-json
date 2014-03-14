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
        "word": "fastcgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for FastCGI \u003ca\u003ehttp://fastcgi.com/\u003c/a\u003e, using the fcgiapp API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.FastCGI",
          "name": "FastCGI",
          "package": "fastcgi",
          "source": "src/Network-FastCGI.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for FastCGI http fastcgi.com using the fcgiapp API",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "FastCGI",
          "package": "fastcgi",
          "partial": "Fast CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle FastCGI requests in an infinite loop.\n\u003c/p\u003e",
          "module": "Network.FastCGI",
          "name": "runFastCGI",
          "package": "fastcgi",
          "signature": "CGI CGIResult -\u003e IO ()",
          "source": "src/Network-FastCGI.html#runFastCGI",
          "type": "function"
        },
        "index": {
          "description": "Handle FastCGI requests in an infinite loop",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runFastCGI",
          "normalized": "CGI CGIResult-\u003eIO()",
          "package": "fastcgi",
          "partial": "Fast CGI",
          "signature": "CGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunCGI\u003c/a\u003e\u003c/code\u003e, but uses the FastCGI interface\n   and forks off a new thread (using \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e) for every request.\n\u003c/p\u003e",
          "module": "Network.FastCGI",
          "name": "runFastCGIConcurrent",
          "package": "fastcgi",
          "signature": "Int-\u003e CGI CGIResult-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like runCGI but uses the FastCGI interface and forks off new thread using forkOS for every request",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runFastCGIConcurrent",
          "normalized": "Int-\u003eCGI CGIResult-\u003eIO()",
          "package": "fastcgi",
          "partial": "Fast CGIConcurrent",
          "signature": "Int-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIConcurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.FastCGI",
          "name": "runFastCGIConcurrent'",
          "package": "fastcgi",
          "signature": "(IO () -\u003e IO a)-\u003e Int-\u003e CGI CGIResult-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runFastCGIConcurrent'",
          "normalized": "(IO()-\u003eIO a)-\u003eInt-\u003eCGI CGIResult-\u003eIO()",
          "package": "fastcgi",
          "partial": "Fast CGIConcurrent'",
          "signature": "(IO()-\u003eIO a)-\u003eInt-\u003eCGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIConcurrent-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a single CGI request, or FastCGI requests in an infinite loop.\n   This function only returns normally if it was a CGI request.\n   This lets you use the same program\n   as either a FastCGI or CGI program, depending on what the server\n   treats it as.\n\u003c/p\u003e",
          "module": "Network.FastCGI",
          "name": "runFastCGIorCGI",
          "package": "fastcgi",
          "signature": "CGI CGIResult -\u003e IO ()",
          "source": "src/Network-FastCGI.html#runFastCGIorCGI",
          "type": "function"
        },
        "index": {
          "description": "Handle single CGI request or FastCGI requests in an infinite loop This function only returns normally if it was CGI request This lets you use the same program as either FastCGI or CGI program depending on what the server treats it as",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runFastCGIorCGI",
          "normalized": "CGI CGIResult-\u003eIO()",
          "package": "fastcgi",
          "partial": "Fast CGIor CGI",
          "signature": "CGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIorCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a single FastCGI request.\n\u003c/p\u003e",
          "module": "Network.FastCGI",
          "name": "runOneFastCGI",
          "package": "fastcgi",
          "signature": "CGI CGIResult -\u003e IO ()",
          "source": "src/Network-FastCGI.html#runOneFastCGI",
          "type": "function"
        },
        "index": {
          "description": "Handle single FastCGI request",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runOneFastCGI",
          "normalized": "CGI CGIResult-\u003eIO()",
          "package": "fastcgi",
          "partial": "One Fast CGI",
          "signature": "CGI CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runOneFastCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a single FastCGI or CGI request. This lets you use the same program\n   as either a FastCGI or CGI program, depending on what the server\n   treats it as.\n\u003c/p\u003e",
          "module": "Network.FastCGI",
          "name": "runOneFastCGIorCGI",
          "package": "fastcgi",
          "signature": "CGI CGIResult-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Handle single FastCGI or CGI request This lets you use the same program as either FastCGI or CGI program depending on what the server treats it as",
          "hierarchy": "Network FastCGI",
          "module": "Network.FastCGI",
          "name": "runOneFastCGIorCGI",
          "normalized": "CGI CGIResult-\u003eIO Bool",
          "package": "fastcgi",
          "partial": "One Fast CGIor CGI",
          "signature": "CGI CGIResult-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runOneFastCGIorCGI"
      }
    }
  ]
]