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
        "word": "wai-handler-fastcgi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface for FastCGI \u003ca\u003ehttp://fastcgi.com/\u003c/a\u003e, using the fcgiapp API.\n Totally ripped off by Michael Snoyman to work with Hack, then WAI.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "FastCGI",
          "package": "wai-handler-fastcgi",
          "source": "src/Network-Wai-Handler-FastCGI.html",
          "type": "module"
        },
        "index": {
          "description": "Interface for FastCGI http fastcgi.com using the fcgiapp API Totally ripped off by Michael Snoyman to work with Hack then WAI",
          "hierarchy": "Network Wai Handler FastCGI",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "FastCGI",
          "package": "wai-handler-fastcgi",
          "partial": "Fast CGI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle FastCGI requests in an infinite loop.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "run",
          "package": "wai-handler-fastcgi",
          "signature": "Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-FastCGI.html#run",
          "type": "function"
        },
        "index": {
          "description": "Handle FastCGI requests in an infinite loop",
          "hierarchy": "Network Wai Handler FastCGI",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "run",
          "normalized": "Application-\u003eIO()",
          "package": "wai-handler-fastcgi",
          "signature": "Application-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Handler.FastCGI",
          "name": "runFork",
          "package": "wai-handler-fastcgi",
          "signature": "Maybe ByteString -\u003e (IO () -\u003e IO a) -\u003e Int -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-FastCGI.html#runFork",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Handler FastCGI",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "runFork",
          "normalized": "Maybe ByteString-\u003e(IO()-\u003eIO a)-\u003eInt-\u003eApplication-\u003eIO()",
          "package": "wai-handler-fastcgi",
          "partial": "Fork",
          "signature": "Maybe ByteString-\u003e(IO()-\u003eIO a)-\u003eInt-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:runFork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle FastCGI requests in an infinite loop. For a server which supports\n the X-Sendfile header.\n\u003c/p\u003e",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "runSendfile",
          "package": "wai-handler-fastcgi",
          "signature": "ByteString -\u003e Application -\u003e IO ()",
          "source": "src/Network-Wai-Handler-FastCGI.html#runSendfile",
          "type": "function"
        },
        "index": {
          "description": "Handle FastCGI requests in an infinite loop For server which supports the X-Sendfile header",
          "hierarchy": "Network Wai Handler FastCGI",
          "module": "Network.Wai.Handler.FastCGI",
          "name": "runSendfile",
          "normalized": "ByteString-\u003eApplication-\u003eIO()",
          "package": "wai-handler-fastcgi",
          "partial": "Sendfile",
          "signature": "ByteString-\u003eApplication-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-handler-fastcgi/docs/Network-Wai-Handler-FastCGI.html#v:runSendfile"
      }
    }
  ]
]