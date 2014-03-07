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
        "word": "web-routes-wai"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.Wai",
          "name": "Wai",
          "package": "web-routes-wai",
          "source": "src/Web-Routes-Wai.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "Wai",
          "package": "web-routes-wai",
          "partial": "Wai",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efunction to convert a routing function into an Application by\n leveraging \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e to do the url conversion\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "handleWai",
          "package": "web-routes-wai",
          "signature": "ByteString-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "function to convert routing function into an Application by leveraging PathInfo to do the url conversion",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "handleWai",
          "normalized": "ByteString-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Wai",
          "signature": "ByteString-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea low-level function for convert a parser, printer, and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "handleWaiError",
          "package": "web-routes-wai",
          "signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e (String -\u003e Application)-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "low-level function for convert parser printer and routing function into an Application",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "handleWaiError",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e(String-\u003eApplication)-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Wai Error",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e(String-\u003eApplication)-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e based routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e to do the url conversion\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "handleWaiRouteT",
          "package": "web-routes-wai",
          "signature": "ByteString-\u003e (url -\u003e Request -\u003e RouteT url IO Response)-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "convert RouteT based routing function into an Application using PathInfo to do the url conversion",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "handleWaiRouteT",
          "normalized": "ByteString-\u003e(a-\u003eRequest-\u003eRouteT a IO Response)-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Wai Route",
          "signature": "ByteString-\u003e(url-\u003eRequest-\u003eRouteT url IO Response)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiRouteT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea function to convert a parser, printer and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003ehandleWai_\u003c/a\u003e\u003c/code\u003e expect that it expects the routing function to use \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "handleWaiRouteT_",
          "package": "web-routes-wai",
          "signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e (url -\u003e Request -\u003e RouteT url IO Response)-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "function to convert parser printer and routing function into an Application This is similar to handleWai expect that it expects the routing function to use RouteT",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "handleWaiRouteT_",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e(a-\u003eRequest-\u003eRouteT a IO Response)-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Wai Route",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e(url-\u003eRequest-\u003eRouteT url IO Response)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiRouteT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea low-level function for convert a parser, printer, and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ereturns 404 if the url parse fails.\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "handleWai_",
          "package": "web-routes-wai",
          "signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "low-level function for convert parser printer and routing function into an Application returns if the url parse fails",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "handleWai_",
          "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Wai",
          "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWai_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a 'Site url Application' into a plain-old \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.Wai",
          "name": "waiSite",
          "package": "web-routes-wai",
          "signature": "Site url Application-\u003e ByteString-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "convert Site url Application into plain-old Application",
          "hierarchy": "Web Routes Wai",
          "module": "Web.Routes.Wai",
          "name": "waiSite",
          "normalized": "Site a Application-\u003eByteString-\u003eApplication",
          "package": "web-routes-wai",
          "partial": "Site",
          "signature": "Site url Application-\u003eByteString-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:waiSite"
      }
    }
  ]
]