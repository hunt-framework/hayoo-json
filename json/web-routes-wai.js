[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#",
      "description": {
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "module",
        "fct-source": "src/Web-Routes-Wai.html",
        "fct-type": "module",
        "title": "Wai"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "Wai",
        "normalized": "",
        "package": "web-routes-wai",
        "partial": "Wai",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWai",
      "description": {
        "fct-descr": "\u003cp\u003efunction to convert a routing function into an Application by\n leveraging \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e to do the url conversion\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "ByteString-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
        "fct-type": "function",
        "title": "handleWai"
      },
      "index": {
        "description": "function to convert routing function into an Application by leveraging PathInfo to do the url conversion",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "handleWai",
        "normalized": "ByteString-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Wai",
        "signature": "ByteString-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiError",
      "description": {
        "fct-descr": "\u003cp\u003ea low-level function for convert a parser, printer, and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e (String -\u003e Application)-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
        "fct-type": "function",
        "title": "handleWaiError"
      },
      "index": {
        "description": "low-level function for convert parser printer and routing function into an Application",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "handleWaiError",
        "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e(String-\u003eApplication)-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Wai Error",
        "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e(String-\u003eApplication)-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiRouteT",
      "description": {
        "fct-descr": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e based routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ePathInfo\u003c/a\u003e\u003c/code\u003e to do the url conversion\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "ByteString-\u003e (url -\u003e Request -\u003e RouteT url IO Response)-\u003e Application",
        "fct-type": "function",
        "title": "handleWaiRouteT"
      },
      "index": {
        "description": "convert RouteT based routing function into an Application using PathInfo to do the url conversion",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "handleWaiRouteT",
        "normalized": "ByteString-\u003e(a-\u003eRequest-\u003eRouteT a IO Response)-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Wai Route",
        "signature": "ByteString-\u003e(url-\u003eRequest-\u003eRouteT url IO Response)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWaiRouteT_",
      "description": {
        "fct-descr": "\u003cp\u003ea function to convert a parser, printer and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003ehandleWai_\u003c/a\u003e\u003c/code\u003e expect that it expects the routing function to use \u003ccode\u003e\u003ca\u003eRouteT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e (url -\u003e Request -\u003e RouteT url IO Response)-\u003e Application",
        "fct-type": "function",
        "title": "handleWaiRouteT_"
      },
      "index": {
        "description": "function to convert parser printer and routing function into an Application This is similar to handleWai expect that it expects the routing function to use RouteT",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "handleWaiRouteT_",
        "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e(a-\u003eRequest-\u003eRouteT a IO Response)-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Wai Route",
        "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e(url-\u003eRequest-\u003eRouteT url IO Response)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:handleWai_",
      "description": {
        "fct-descr": "\u003cp\u003ea low-level function for convert a parser, printer, and routing function into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ereturns 404 if the url parse fails.\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "(url -\u003e [(Text, Maybe Text)] -\u003e Text)-\u003e (ByteString -\u003e Either String url)-\u003e ByteString-\u003e ((url -\u003e [(Text, Maybe Text)] -\u003e Text) -\u003e url -\u003e Application)-\u003e Application",
        "fct-type": "function",
        "title": "handleWai_"
      },
      "index": {
        "description": "low-level function for convert parser printer and routing function into an Application returns if the url parse fails",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "handleWai_",
        "normalized": "(a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String a)-\u003eByteString-\u003e((a-\u003e[(Text,Maybe Text)]-\u003eText)-\u003ea-\u003eApplication)-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Wai",
        "signature": "(url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003e(ByteString-\u003eEither String url)-\u003eByteString-\u003e((url-\u003e[(Text,Maybe Text)]-\u003eText)-\u003eurl-\u003eApplication)-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/web-routes-wai/docs/Web-Routes-Wai.html#v:waiSite",
      "description": {
        "fct-descr": "\u003cp\u003econvert a 'Site url Application' into a plain-old \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Routes.Wai",
        "fct-package": "web-routes-wai",
        "fct-signature": "Site url Application-\u003e ByteString-\u003e Application",
        "fct-type": "function",
        "title": "waiSite"
      },
      "index": {
        "description": "convert Site url Application into plain-old Application",
        "hierarchy": "Web Routes Wai",
        "module": "Web.Routes.Wai",
        "name": "waiSite",
        "normalized": "Site a Application-\u003eByteString-\u003eApplication",
        "package": "web-routes-wai",
        "partial": "Site",
        "signature": "Site url Application-\u003eByteString-\u003eApplication"
      }
    }
  }
]