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
        "word": "web-fpco"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.Server.Env",
          "name": "Env",
          "package": "web-fpco",
          "source": "src/Happstack-Server-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack Server Env",
          "module": "Happstack.Server.Env",
          "name": "Env",
          "package": "web-fpco",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-fpco/docs/Happstack-Server-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternate \u003ccode\u003esimpleHTTP\u003c/code\u003e which reads the port to listen to from the PORT\n environment variable. This configuration approach is used by the FP Complete\n School of Haskell and the Keter deployment manager.\n\u003c/p\u003e",
          "module": "Happstack.Server.Env",
          "name": "simpleHTTP",
          "package": "web-fpco",
          "signature": "Conf -\u003e ServerPartT IO a -\u003e IO ()",
          "source": "src/Happstack-Server-Env.html#simpleHTTP",
          "type": "function"
        },
        "index": {
          "description": "An alternate simpleHTTP which reads the port to listen to from the PORT environment variable This configuration approach is used by the FP Complete School of Haskell and the Keter deployment manager",
          "hierarchy": "Happstack Server Env",
          "module": "Happstack.Server.Env",
          "name": "simpleHTTP",
          "normalized": "Conf-\u003eServerPartT IO a-\u003eIO()",
          "package": "web-fpco",
          "partial": "HTTP",
          "signature": "Conf-\u003eServerPartT IO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-fpco/docs/Happstack-Server-Env.html#v:simpleHTTP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Http.Server.Env",
          "name": "Env",
          "package": "web-fpco",
          "source": "src/Snap-Http-Server-Env.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Http Server Env",
          "module": "Snap.Http.Server.Env",
          "name": "Env",
          "package": "web-fpco",
          "partial": "Env",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-fpco/docs/Snap-Http-Server-Env.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alternate \u003ccode\u003ehttpServe\u003c/code\u003e which reads the port to listen to from the PORT\n environment variable. This configuration approach is used by the FP Complete\n School of Haskell and the Keter deployment manager.\n\u003c/p\u003e",
          "module": "Snap.Http.Server.Env",
          "name": "httpServe",
          "package": "web-fpco",
          "signature": "Config Snap a -\u003e Snap () -\u003e IO ()",
          "source": "src/Snap-Http-Server-Env.html#httpServe",
          "type": "function"
        },
        "index": {
          "description": "An alternate httpServe which reads the port to listen to from the PORT environment variable This configuration approach is used by the FP Complete School of Haskell and the Keter deployment manager",
          "hierarchy": "Snap Http Server Env",
          "module": "Snap.Http.Server.Env",
          "name": "httpServe",
          "normalized": "Config Snap a-\u003eSnap()-\u003eIO()",
          "package": "web-fpco",
          "partial": "Serve",
          "signature": "Config Snap a-\u003eSnap()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-fpco/docs/Snap-Http-Server-Env.html#v:httpServe"
      }
    }
  ]
]