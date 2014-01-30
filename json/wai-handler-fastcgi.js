[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for FastCGI \u003ca\u003ehttp://fastcgi.com/\u003c/a\u003e, using the fcgiapp API.\n Totally ripped off by Michael Snoyman to work with Hack, then WAI.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Handler.FastCGI",
        "fct-package": "wai-handler-fastcgi",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Handler-FastCGI.html",
        "fct-type": "module",
        "title": "FastCGI"
      },
      "index": {
        "description": "Interface for FastCGI http fastcgi.com using the fcgiapp API Totally ripped off by Michael Snoyman to work with Hack then WAI",
        "hierarchy": "Network Wai Handler FastCGI",
        "module": "Network.Wai.Handler.FastCGI",
        "name": "FastCGI",
        "normalized": "",
        "package": "wai-handler-fastcgi",
        "partial": "Fast CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eHandle FastCGI requests in an infinite loop.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Handler.FastCGI",
        "fct-package": "wai-handler-fastcgi",
        "fct-signature": "Application -\u003e IO ()",
        "fct-source": "src/Network-Wai-Handler-FastCGI.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Handle FastCGI requests in an infinite loop",
        "hierarchy": "Network Wai Handler FastCGI",
        "module": "Network.Wai.Handler.FastCGI",
        "name": "run",
        "normalized": "Application-\u003eIO()",
        "package": "wai-handler-fastcgi",
        "partial": "",
        "signature": "Application-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:runFork",
      "description": {
        "fct-module": "Network.Wai.Handler.FastCGI",
        "fct-package": "wai-handler-fastcgi",
        "fct-signature": "Maybe ByteString -\u003e (IO () -\u003e IO a) -\u003e Int -\u003e Application -\u003e IO ()",
        "fct-source": "src/Network-Wai-Handler-FastCGI.html#runFork",
        "fct-type": "function",
        "title": "runFork"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Handler FastCGI",
        "module": "Network.Wai.Handler.FastCGI",
        "name": "runFork",
        "normalized": "Maybe ByteString-\u003e(IO()-\u003eIO a)-\u003eInt-\u003eApplication-\u003eIO()",
        "package": "wai-handler-fastcgi",
        "partial": "Fork",
        "signature": "Maybe ByteString-\u003e(IO()-\u003eIO a)-\u003eInt-\u003eApplication-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:runSendfile",
      "description": {
        "fct-descr": "\u003cp\u003eHandle FastCGI requests in an infinite loop. For a server which supports\n the X-Sendfile header.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Handler.FastCGI",
        "fct-package": "wai-handler-fastcgi",
        "fct-signature": "ByteString -\u003e Application -\u003e IO ()",
        "fct-source": "src/Network-Wai-Handler-FastCGI.html#runSendfile",
        "fct-type": "function",
        "title": "runSendfile"
      },
      "index": {
        "description": "Handle FastCGI requests in an infinite loop For server which supports the X-Sendfile header",
        "hierarchy": "Network Wai Handler FastCGI",
        "module": "Network.Wai.Handler.FastCGI",
        "name": "runSendfile",
        "normalized": "ByteString-\u003eApplication-\u003eIO()",
        "package": "wai-handler-fastcgi",
        "partial": "Sendfile",
        "signature": "ByteString-\u003eApplication-\u003eIO()"
      }
    }
  }
]