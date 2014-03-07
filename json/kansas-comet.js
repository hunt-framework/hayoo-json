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
        "word": "kansas-comet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KansasComet",
          "name": "KansasComet",
          "package": "kansas-comet",
          "source": "src/Web-KansasComet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "KansasComet",
          "package": "kansas-comet",
          "partial": "Kansas Comet",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e is the Handle into a specific interaction with a web page.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "Document",
          "package": "kansas-comet",
          "source": "src/Web-KansasComet.html#Document",
          "type": "data"
        },
        "index": {
          "description": "Document is the Handle into specific interaction with web page",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "Document",
          "package": "kansas-comet",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KansasComet",
          "name": "Options",
          "package": "kansas-comet",
          "source": "src/Web-KansasComet.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "Options",
          "package": "kansas-comet",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.KansasComet",
          "name": "Options",
          "package": "kansas-comet",
          "signature": "Options",
          "source": "src/Web-KansasComet.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "Options",
          "package": "kansas-comet",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econnect \u003ca\u003e/foobar\u003c/a\u003e (...) gives a scotty session that:\n\u003c/p\u003e\u003cpre\u003e  POST http://.../foobar/                       \u003c- bootstrap the interaction\n  GET  http://.../foobar/act/\u003cid#\u003e/\u003cact#\u003e       \u003c- get a specific action\n  POST http://.../foobar/reply/\u003cid#\u003e/\u003creply#\u003e   \u003c- send a reply as a JSON object\n\u003c/pre\u003e",
          "module": "Web.KansasComet",
          "name": "connect",
          "package": "kansas-comet",
          "signature": "Options-\u003e (Document -\u003e IO ())-\u003e ScottyM ()",
          "type": "function"
        },
        "index": {
          "description": "connect foobar gives scotty session that POST http foobar bootstrap the interaction GET http foobar act id act get specific action POST http foobar reply id reply send reply as JSON object",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "connect",
          "normalized": "Options-\u003e(Document-\u003eIO())-\u003eScottyM()",
          "package": "kansas-comet",
          "signature": "Options-\u003e(Document-\u003eIO())-\u003eScottyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a \u003ccode\u003eDocument\u003c/code\u003e that prints what is would send to the server.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "debugDocument",
          "package": "kansas-comet",
          "signature": "IO Document",
          "source": "src/Web-KansasComet.html#debugDocument",
          "type": "function"
        },
        "index": {
          "description": "Generate Document that prints what is would send to the server",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "debugDocument",
          "package": "kansas-comet",
          "partial": "Document",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:debugDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFake a specific reply on a virtual \u003ccode\u003eDocument\u003c/code\u003e port.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "debugReplyDocument",
          "package": "kansas-comet",
          "signature": "Document -\u003e Int -\u003e Value -\u003e IO ()",
          "source": "src/Web-KansasComet.html#debugReplyDocument",
          "type": "function"
        },
        "index": {
          "description": "Fake specific reply on virtual Document port",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "debugReplyDocument",
          "normalized": "Document-\u003eInt-\u003eValue-\u003eIO()",
          "package": "kansas-comet",
          "partial": "Reply Document",
          "signature": "Document-\u003eInt-\u003eValue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:debugReplyDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewait for a virtual-to-this-document's port numbers' reply.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "getReply",
          "package": "kansas-comet",
          "signature": "Document -\u003e Int -\u003e IO Value",
          "source": "src/Web-KansasComet.html#getReply",
          "type": "function"
        },
        "index": {
          "description": "wait for virtual-to-this-document port numbers reply",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "getReply",
          "normalized": "Document-\u003eInt-\u003eIO Value",
          "package": "kansas-comet",
          "partial": "Reply",
          "signature": "Document-\u003eInt-\u003eIO Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:getReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ekCometPlugin\u003c/a\u003e\u003c/code\u003e provides the location of the Kansas Comet jQuery plugin.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "kCometPlugin",
          "package": "kansas-comet",
          "signature": "IO String",
          "source": "src/Web-KansasComet.html#kCometPlugin",
          "type": "function"
        },
        "index": {
          "description": "kCometPlugin provides the location of the Kansas Comet jQuery plugin",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "kCometPlugin",
          "package": "kansas-comet",
          "partial": "Comet Plugin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:kCometPlugin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat is the prefix at at start of the URL (for example \"ajax\")\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "prefix",
          "package": "kansas-comet",
          "signature": "String",
          "source": "src/Web-KansasComet.html#Options",
          "type": "function"
        },
        "index": {
          "description": "what is the prefix at at start of the URL for example ajax",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "prefix",
          "package": "kansas-comet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e sends a javascript fragement to a document.\n The string argument will be evaluated before sending (in case there is an error,\n or some costly evaluation needs done first).\n \u003ccode\u003e\u003ca\u003esend\u003c/a\u003e\u003c/code\u003e suspends the thread if the last javascript has not been *dispatched*\n the the browser.\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "send",
          "package": "kansas-comet",
          "signature": "Document -\u003e String -\u003e IO ()",
          "source": "src/Web-KansasComet.html#send",
          "type": "function"
        },
        "index": {
          "description": "send sends javascript fragement to document The string argument will be evaluated before sending in case there is an error or some costly evaluation needs done first send suspends the thread if the last javascript has not been dispatched the the browser",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "send",
          "normalized": "Document-\u003eString-\u003eIO()",
          "package": "kansas-comet",
          "signature": "Document-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0 == none, 1 == inits, 2 == cmds done, 3 == complete log\n\u003c/p\u003e",
          "module": "Web.KansasComet",
          "name": "verbose",
          "package": "kansas-comet",
          "signature": "Int",
          "source": "src/Web-KansasComet.html#Options",
          "type": "function"
        },
        "index": {
          "description": "none inits cmds done complete log",
          "hierarchy": "Web KansasComet",
          "module": "Web.KansasComet",
          "name": "verbose",
          "package": "kansas-comet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kansas-comet/docs/Web-KansasComet.html#v:verbose"
      }
    }
  ]
]