[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for FastCGI \u003ca\u003ehttp://fastcgi.com/\u003c/a\u003e, using the fcgiapp API.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "module",
        "fct-source": "src/Network-FastCGI.html",
        "fct-type": "module",
        "title": "FastCGI"
      },
      "index": {
        "description": "Interface for FastCGI http fastcgi.com using the fcgiapp API",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "FastCGI",
        "normalized": "",
        "package": "fastcgi",
        "partial": "Fast CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandle FastCGI requests in an infinite loop.\n\u003c/p\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "CGI CGIResult -\u003e IO ()",
        "fct-source": "src/Network-FastCGI.html#runFastCGI",
        "fct-type": "function",
        "title": "runFastCGI"
      },
      "index": {
        "description": "Handle FastCGI requests in an infinite loop",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runFastCGI",
        "normalized": "CGI CGIResult-\u003eIO()",
        "package": "fastcgi",
        "partial": "Fast CGI",
        "signature": "CGI CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIConcurrent",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunCGI\u003c/a\u003e\u003c/code\u003e, but uses the FastCGI interface\n   and forks off a new thread (using \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e) for every request.\n\u003c/p\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "Int-\u003e CGI CGIResult-\u003e IO ()",
        "fct-type": "function",
        "title": "runFastCGIConcurrent"
      },
      "index": {
        "description": "Like runCGI but uses the FastCGI interface and forks off new thread using forkOS for every request",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runFastCGIConcurrent",
        "normalized": "Int-\u003eCGI CGIResult-\u003eIO()",
        "package": "fastcgi",
        "partial": "Fast CGIConcurrent",
        "signature": "Int-\u003eCGI CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIConcurrent-39-",
      "description": {
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "(IO () -\u003e IO a)-\u003e Int-\u003e CGI CGIResult-\u003e IO ()",
        "fct-type": "function",
        "title": "runFastCGIConcurrent'"
      },
      "index": {
        "description": "",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runFastCGIConcurrent'",
        "normalized": "(IO()-\u003eIO a)-\u003eInt-\u003eCGI CGIResult-\u003eIO()",
        "package": "fastcgi",
        "partial": "Fast CGIConcurrent'",
        "signature": "(IO()-\u003eIO a)-\u003eInt-\u003eCGI CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runFastCGIorCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandle a single CGI request, or FastCGI requests in an infinite loop.\n   This function only returns normally if it was a CGI request.\n   This lets you use the same program\n   as either a FastCGI or CGI program, depending on what the server\n   treats it as.\n\u003c/p\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "CGI CGIResult -\u003e IO ()",
        "fct-source": "src/Network-FastCGI.html#runFastCGIorCGI",
        "fct-type": "function",
        "title": "runFastCGIorCGI"
      },
      "index": {
        "description": "Handle single CGI request or FastCGI requests in an infinite loop This function only returns normally if it was CGI request This lets you use the same program as either FastCGI or CGI program depending on what the server treats it as",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runFastCGIorCGI",
        "normalized": "CGI CGIResult-\u003eIO()",
        "package": "fastcgi",
        "partial": "Fast CGIor CGI",
        "signature": "CGI CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runOneFastCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandle a single FastCGI request.\n\u003c/p\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "CGI CGIResult -\u003e IO ()",
        "fct-source": "src/Network-FastCGI.html#runOneFastCGI",
        "fct-type": "function",
        "title": "runOneFastCGI"
      },
      "index": {
        "description": "Handle single FastCGI request",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runOneFastCGI",
        "normalized": "CGI CGIResult-\u003eIO()",
        "package": "fastcgi",
        "partial": "One Fast CGI",
        "signature": "CGI CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fastcgi/docs/Network-FastCGI.html#v:runOneFastCGIorCGI",
      "description": {
        "fct-descr": "\u003cp\u003eHandle a single FastCGI or CGI request. This lets you use the same program\n   as either a FastCGI or CGI program, depending on what the server\n   treats it as.\n\u003c/p\u003e",
        "fct-module": "Network.FastCGI",
        "fct-package": "fastcgi",
        "fct-signature": "CGI CGIResult-\u003e IO Bool",
        "fct-type": "function",
        "title": "runOneFastCGIorCGI"
      },
      "index": {
        "description": "Handle single FastCGI or CGI request This lets you use the same program as either FastCGI or CGI program depending on what the server treats it as",
        "hierarchy": "Network FastCGI",
        "module": "Network.FastCGI",
        "name": "runOneFastCGIorCGI",
        "normalized": "CGI CGIResult-\u003eIO Bool",
        "package": "fastcgi",
        "partial": "One Fast CGIor CGI",
        "signature": "CGI CGIResult-\u003eIO Bool"
      }
    }
  }
]