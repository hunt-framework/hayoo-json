[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Web.Simple.Controller\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e provides a convenient syntax for writting \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n  code as a Monadic action with access to an HTTP request, rather than a\n  function that takes the request as an argument. This module also defines some\n  helper functions that leverage this feature. For example, \u003ccode\u003e\u003ca\u003eredirectBack\u003c/a\u003e\u003c/code\u003e\n  reads the underlying request to extract the referer and returns a redirect\n  response:\n\u003c/p\u003e\u003cpre\u003e\n    myController = do\n      ...\n      if badLogin then\n        redirectBack\n        else\n          ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Controller.html",
        "fct-type": "module",
        "title": "Controller"
      },
      "index": {
        "description": "Deprecated Use Web.Simple.Controller Controller provides convenient syntax for writting Application code as Monadic action with access to an HTTP request rather than function that takes the request as an argument This module also defines some helper functions that leverage this feature For example redirectBack reads the underlying request to extract the referer and returns redirect response myController do if badLogin then redirectBack else",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#t:Controller",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad that contains the HTTP request in its\n environment. A \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e simply by running the \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-Controller.html#Controller",
        "fct-type": "type",
        "title": "Controller"
      },
      "index": {
        "description": "Controller is Reader monad that contains the HTTP request in its environment Controller is Routeable simply by running the Reader",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eReads and returns the body of the HTTP request.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller ByteString",
        "fct-source": "src/Network-Wai-Controller.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Reads and returns the body of the HTTP request",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "body",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:parseForm",
      "description": {
        "fct-descr": "\u003cp\u003eParses a HTML form from the request body. It returns a list of \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es as\n well as a list of \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, which are pairs mapping the name of a \u003cem\u003efile\u003c/em\u003e form\n field to a \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e pointing to a temporary file with the contents of the\n upload.\n\u003c/p\u003e\u003cpre\u003e\n   myController = do\n     (prms, files) \u003c- parseForm\n     let mPicFile = lookup \"profile_pic\" files\n     case mPicFile of\n       Just (picFile) -\u003e do\n         sourceFile (fileContent picFile) $$\n           sinkFile (\"images/\" ++ (fileName picFile))\n         respond $ redirectTo \"/\"\n       Nothing -\u003e redirectBack\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller ([Param], [(ByteString, FileInfo FilePath)])",
        "fct-source": "src/Network-Wai-Controller.html#parseForm",
        "fct-type": "function",
        "title": "parseForm"
      },
      "index": {
        "description": "Parses HTML form from the request body It returns list of Param as well as list of File which are pairs mapping the name of file form field to FileInfo pointing to temporary file with the contents of the upload myController do prms files parseForm let mPicFile lookup profile pic files case mPicFile of Just picFile do sourceFile fileContent picFile sinkFile images fileName picFile respond redirectTo Nothing redirectBack",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "parseForm",
        "normalized": "Controller([Param],[(ByteString,FileInfo FilePath)])",
        "package": "wai-lite",
        "partial": "Form",
        "signature": "Controller([Param],[(ByteString,FileInfo FilePath)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:queryParam",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up the parameter name in the request's query string and returns the\n value as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, for a request with query string: \"?foo=bar&baz=7\",\n \u003ccode\u003e\n   queryParam \"foo\"\n \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ewould return \u003cem\u003eJust \"bar\"\u003c/em\u003e, but\n\u003c/p\u003e\u003cpre\u003e\n   queryParam \"zap\"\n\u003c/pre\u003e\u003cp\u003ewould return \u003cem\u003eNothing\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString-\u003e Controller (Maybe ByteString)",
        "fct-type": "function",
        "title": "queryParam"
      },
      "index": {
        "description": "Looks up the parameter name in the request query string and returns the value as ByteString or Nothing For example for request with query string foo bar baz queryParam foo would return Just bar but queryParam zap would return Nothing",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "queryParam",
        "normalized": "ByteString-\u003eController(Maybe ByteString)",
        "package": "wai-lite",
        "partial": "Param",
        "signature": "ByteString-\u003eController(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:redirectBack",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n redirect to root (i.e., \u003ccode\u003e/\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller Response",
        "fct-source": "src/Network-Wai-Controller.html#redirectBack",
        "fct-type": "function",
        "title": "redirectBack"
      },
      "index": {
        "description": "Redirect back to the referer If the referer header is not present redirect to root i.e",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "redirectBack",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:redirectBackOr",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n fallback on the given \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Response-\u003e Controller Response",
        "fct-type": "function",
        "title": "redirectBackOr"
      },
      "index": {
        "description": "Redirect back to the referer If the referer header is not present fallback on the given Response",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "redirectBackOr",
        "normalized": "Response-\u003eController Response",
        "package": "wai-lite",
        "partial": "Back Or",
        "signature": "Response-\u003eController Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eReads the underlying \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller Request",
        "fct-source": "src/Network-Wai-Controller.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Reads the underlying Request",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "request",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Controller.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e that's helps the the compiler type a code block as a\n \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e. For example, when using the \u003ccode\u003e\u003ca\u003eFrank\u003c/a\u003e\u003c/code\u003e routing DSL to\n define a simple route that justs returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e can be used\n to avoid explicit typing of the argument:\n\u003c/p\u003e\u003cpre\u003e\n   get \"/\" $ do\n     someSideEffect\n     respond $ okHtml \"Hello World\"\n\u003c/pre\u003e\u003cp\u003einstead of:\n\u003c/p\u003e\u003cpre\u003e\n   get \"/\" $ (do\n     someSideEffect\n     return $ okHtml \"Hello World\") :: Controller Response\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Controller r",
        "fct-source": "src/Network-Wai-Controller.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "An alias for return that helps the the compiler type code block as Controller For example when using the Frank routing DSL to define simple route that justs returns Response respond can be used to avoid explicit typing of the argument get do someSideEffect respond okHtml Hello World instead of get do someSideEffect return okHtml Hello World Controller Response",
        "hierarchy": "Network Wai Controller",
        "module": "Network.Wai.Controller",
        "name": "respond",
        "normalized": "a-\u003eController a",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eController r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Web.Frank\u003c/p\u003e\u003c/div\u003e\u003cp\u003eFrank is a Sinatra-inspired DSL (see \u003ca\u003ehttp://www.sinatrarb.com\u003c/a\u003e) for creating\nroutes. It is composable with all \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types, but is designed to be used\nwith \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003es. Each verb (\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, etc') takes a\nURL pattern of the form \"/dir/:paramname/dir\" (see \u003ccode\u003e\u003ca\u003eroutePattern\u003c/a\u003e\u003c/code\u003e for\ndetails) and a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  main :: IO ()\n  main = runSettings defaultSettings $ mkRouter $ do\n    get \"/\" $ do\n      req \u003c- request\n      return $ okHtml $ fromString $\n        \"Welcome Home \" ++ (show $ serverName req)\n    get \"/user/:id\" $ do\n      userId \u003c- queryParam \"id\" \u003e\u003e= fromMaybe \"\"\n      return $ ok \"text/json\" $ fromString $\n        \"{\\\"myid\\\": \" ++ (show userId) ++ \"}\"\n    put \"/user/:id\" $ do\n      ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Frank.html",
        "fct-type": "module",
        "title": "Frank"
      },
      "index": {
        "description": "Deprecated Use Web.Frank Frank is Sinatra-inspired DSL see http www.sinatrarb.com for creating routes It is composable with all Routeable types but is designed to be used with Controller Each verb get post put etc takes URL pattern of the form dir paramname dir see routePattern for details and Routeable main IO main runSettings defaultSettings mkRouter do get do req request return okHtml fromString Welcome Home show serverName req get user id do userId queryParam id fromMaybe return ok text json fromString myid show userId put user id do",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "Frank",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Frank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the DELETE method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Frank.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Matches the DELETE method on the given URL pattern",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "delete",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the GET method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Frank.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Matches the GET method on the given URL pattern",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "get",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the OPTIONS method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Frank.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Matches the OPTIONS method on the given URL pattern",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "options",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the POST method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Frank.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Matches the POST method on the given URL pattern",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "post",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Frank.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the PUT method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Frank.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Matches the PUT method on the given URL pattern",
        "hierarchy": "Network Wai Frank",
        "module": "Network.Wai.Frank",
        "name": "put",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Web.REST\u003c/p\u003e\u003c/div\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-REST.html",
        "fct-type": "module",
        "title": "REST"
      },
      "index": {
        "description": "Deprecated Use Web.REST",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "REST",
        "normalized": "",
        "package": "wai-lite",
        "partial": "REST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#t:RESTController",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "type",
        "fct-source": "src/Network-Wai-REST.html#RESTController",
        "fct-type": "type",
        "title": "RESTController"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "RESTController",
        "normalized": "",
        "package": "wai-lite",
        "partial": "RESTController",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:create",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "create",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:delete",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "delete",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:edit",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#edit",
        "fct-type": "function",
        "title": "edit"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "edit",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:index",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "index",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:new",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "new",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:show",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "show",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-REST.html#v:update",
      "description": {
        "fct-module": "Network.Wai.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Network-Wai-REST.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai REST",
        "module": "Network.Wai.REST",
        "name": "update",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Web.Simple.Responses\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module defines some convenience functions for creating responses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Responses.html",
        "fct-type": "module",
        "title": "Responses"
      },
      "index": {
        "description": "Deprecated Use Web.Simple.Responses This module defines some convenience functions for creating responses",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "Responses",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Responses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:badRequest",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 400 (Bad Request) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Network-Wai-Responses.html#badRequest",
        "fct-type": "function",
        "title": "badRequest"
      },
      "index": {
        "description": "Returns Bad Request Response",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "badRequest",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:forbidden",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 403 (Forbidden) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Network-Wai-Responses.html#forbidden",
        "fct-type": "function",
        "title": "forbidden"
      },
      "index": {
        "description": "Returns Forbidden Response",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "forbidden",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:movedTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 301 (Moved Permanently) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to\n that URL.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Network-Wai-Responses.html#movedTo",
        "fct-type": "function",
        "title": "movedTo"
      },
      "index": {
        "description": "Given URL returns Moved Permanently Response redirecting to that URL",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "movedTo",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:notFound",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 404 (Not Found) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Network-Wai-Responses.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "Returns Not Found Response",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "notFound",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:ok",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the given content-type and resposne\n body\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "ContentType -\u003e ByteString -\u003e Response",
        "fct-source": "src/Network-Wai-Responses.html#ok",
        "fct-type": "function",
        "title": "ok"
      },
      "index": {
        "description": "Creates OK Response with the given content-type and resposne body",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "ok",
        "normalized": "ContentType-\u003eByteString-\u003eResponse",
        "package": "wai-lite",
        "partial": "",
        "signature": "ContentType-\u003eByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:okHtml",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with content-type \"text/html\" and the\n given resposne body\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e Response",
        "fct-source": "src/Network-Wai-Responses.html#okHtml",
        "fct-type": "function",
        "title": "okHtml"
      },
      "index": {
        "description": "Creates OK Response with content-type text html and the given resposne body",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "okHtml",
        "normalized": "ByteString-\u003eResponse",
        "package": "wai-lite",
        "partial": "Html",
        "signature": "ByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:redirectTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 303 (See Other) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to that URL.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Network-Wai-Responses.html#redirectTo",
        "fct-type": "function",
        "title": "redirectTo"
      },
      "index": {
        "description": "Given URL returns See Other Response redirecting to that URL",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "redirectTo",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:requireBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 401 (Authorization Required) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e requiring basic\n authentication in the given realm.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Network-Wai-Responses.html#requireBasicAuth",
        "fct-type": "function",
        "title": "requireBasicAuth"
      },
      "index": {
        "description": "Returns Authorization Required Response requiring basic authentication in the given realm",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "requireBasicAuth",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "Basic Auth",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Responses.html#v:serverError",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 500 (Server Error) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Network-Wai-Responses.html#serverError",
        "fct-type": "function",
        "title": "serverError"
      },
      "index": {
        "description": "Returns Server Error Response",
        "hierarchy": "Network Wai Responses",
        "module": "Network.Wai.Responses",
        "name": "serverError",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Simple.Web.Router\u003c/p\u003e\u003c/div\u003e\u003cp\u003eConceptually, a route is function that, given an HTTP request, may return\nan action (something that would return a response for the client if run).\nRoutes can be concatenated--where each route is evaluated until one\nmatches--and nested. Routes are expressed through the \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e type class.\n\u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e transforms an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e to a function from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nto a monadic action (in the \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e monad) that returns a\n\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. The return type was chosen to be monadic so routing\ndecisions can depend on side-effects (e.g. a random number or counter for A/B\ntesting, IP geolocation lookup etc').\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Router.html",
        "fct-type": "module",
        "title": "Router"
      },
      "index": {
        "description": "Deprecated Use Simple.Web.Router Conceptually route is function that given an HTTP request may return an action something that would return response for the client if run Routes can be concatenated--where each route is evaluated until one matches--and nested Routes are expressed through the Routeable type class runRoute transforms an instance of Routeable to function from Request to monadic action in the ResourceT monad that returns Maybe Response The return type was chosen to be monadic so routing decisions can depend on side-effects e.g random number or counter for testing IP geolocation lookup etc",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "Router",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e type is a basic instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that simply holds the\nrouting function and an arbitrary additional data parameter. The power is\nderived from the instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, which allow the\nsimple construction of complex routing rules using either lists (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e) or\ndo-notation. Moreover, because of it's simple type, any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e can be used\nas a \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003erouteAll\u003c/a\u003e\u003c/code\u003e or by applying it to \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e), making it\npossible to leverage the monadic or monoid syntax for any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCommonly, route functions that construct a \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e only inspect the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nand other parameters. For example, \u003ccode\u003e\u003ca\u003erouteHost\u003c/a\u003e\u003c/code\u003e looks at the hostname:\n\u003c/p\u003e\u003cpre\u003e\n  routeHost :: Routeable r =\u003e S.ByteString -\u003e r -\u003e Route ()\n  routeHost host route = Route func ()\n    where func req = if host == serverName req\n                       then runRoute route req\n                       else return Nothing\n\u003c/pre\u003e\u003cp\u003eHowever, because the result of a route is in the\n\u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e monad, routes have all the power of an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e and can make\nstate-dependant decisions. For example, it is trivial to implement a route that\nsucceeds for every other request (perhaps for A/B testing):\n\u003c/p\u003e\u003cpre\u003e\n  routeEveryOther :: (Routeable r1, Routeable r2)\n                  =\u003e TVar Int -\u003e r1 -\u003e r2 -\u003e Route ()\n  routeEveryOther counter r1 r2 = Route func ()\n    where func req = do\n            i \u003c- liftIO . atomically $ do\n                    i' \u003c- readTVar counter\n                    writeTVar counter (i' + 1)\n                    return i'\n            if i \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e 2 == 0\n              then runRoute r1 req\n              else runRoute r2 req\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Router.html#Route",
        "fct-type": "data",
        "title": "Route"
      },
      "index": {
        "description": "The Route type is basic instance of Routeable that simply holds the routing function and an arbitrary additional data parameter The power is derived from the instances of Monad and Monoid which allow the simple construction of complex routing rules using either lists Monoid or do-notation Moreover because of it simple type any Routeable can be used as Route using routeAll or by applying it to runRoute making it possible to leverage the monadic or monoid syntax for any Routeable Commonly route functions that construct Route only inspect the Request and other parameters For example routeHost looks at the hostname routeHost Routeable S.ByteString Route routeHost host route Route func where func req if host serverName req then runRoute route req else return Nothing However because the result of route is in the ResourceT monad routes have all the power of an Application and can make state-dependant decisions For example it is trivial to implement route that succeeds for every other request perhaps for testing routeEveryOther Routeable r1 Routeable r2 TVar Int r1 r2 Route routeEveryOther counter r1 r2 Route func where func req do liftIO atomically do readTVar counter writeTVar counter return if mod then runRoute r1 req else runRoute r2 req",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "Route",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#t:Routeable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types can be converted into a route function using \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e.\nIf the route is matched it returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general, \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003es are data-dependant (on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e), but don't have\nto be. For example, \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that always\nreturns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  instance Routeable Application where\n    runRoute app req = app req \u003e\u003e= return . Just\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "class",
        "fct-source": "src/Network-Wai-Router.html#Routeable",
        "fct-type": "class",
        "title": "Routeable"
      },
      "index": {
        "description": "Routeable types can be converted into route function using runRoute If the route is matched it returns Response otherwise Nothing In general Routeable are data-dependant on the Request but don have to be For example Application is an instance of Routeable that always returns Response instance Routeable Application where runRoute app req app req return Just",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "Routeable",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Routeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:Route",
      "description": {
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "Route (Request -\u003e ResourceT IO (Maybe Response)) a",
        "fct-source": "src/Network-Wai-Router.html#Route",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "Route",
        "normalized": "Route(Request-\u003eResourceT IO(Maybe Response))a",
        "package": "wai-lite",
        "partial": "Route",
        "signature": "Route(Request-\u003eResourceT IO(Maybe Response))a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:mkRouter",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e that can be passed directly\n to a WAI server.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Application",
        "fct-source": "src/Network-Wai-Router.html#mkRouter",
        "fct-type": "function",
        "title": "mkRouter"
      },
      "index": {
        "description": "Converts any Routeable into an Application that can be passed directly to WAI server",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "mkRouter",
        "normalized": "a-\u003eApplication",
        "package": "wai-lite",
        "partial": "Router",
        "signature": "r-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeAll",
      "description": {
        "fct-descr": "\u003cp\u003eA route that always matches (useful for converting a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeAll",
        "fct-type": "function",
        "title": "routeAll"
      },
      "index": {
        "description": "route that always matches useful for converting Routeable into Route",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeAll",
        "normalized": "a-\u003eRoute()",
        "package": "wai-lite",
        "partial": "All",
        "signature": "r-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeHost",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the hostname from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. The route only successeds on\n exact matches.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeHost",
        "fct-type": "function",
        "title": "routeHost"
      },
      "index": {
        "description": "Matches on the hostname from the Request The route only successeds on exact matches",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeHost",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Host",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeMethod",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the HTTP request method (e.g. \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "StdMethod -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeMethod",
        "fct-type": "function",
        "title": "routeMethod"
      },
      "index": {
        "description": "Matches on the HTTP request method e.g GET POST PUT",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeMethod",
        "normalized": "StdMethod-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Method",
        "signature": "StdMethod-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeName",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the first directory in the path matches the given \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeName",
        "fct-type": "function",
        "title": "routeName"
      },
      "index": {
        "description": "Matches if the first directory in the path matches the given ByteString",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeName",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Name",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routePattern",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes the given URL pattern. Patterns can include\n directories as well as variable patterns (prefixed with \u003ccode\u003e:\u003c/code\u003e) to be added\n to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erouteVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e /posts/:id\n\u003c/li\u003e\u003cli\u003e /posts/:id/new\n\u003c/li\u003e\u003cli\u003e /:date/posts/:category/new\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routePattern",
        "fct-type": "function",
        "title": "routePattern"
      },
      "index": {
        "description": "Routes the given URL pattern Patterns can include directories as well as variable patterns prefixed with to be added to queryString see routeVar posts id posts id new date posts category new",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routePattern",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Pattern",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeTop",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the path is empty. Note that this route checks that \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e\n is empty, so it works as expected when nested under namespaces or other\n routes that pop the \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeTop",
        "fct-type": "function",
        "title": "routeTop"
      },
      "index": {
        "description": "Matches if the path is empty Note that this route checks that pathInfo is empty so it works as expected when nested under namespaces or other routes that pop the pathInfo list",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeTop",
        "normalized": "a-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Top",
        "signature": "r-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:routeVar",
      "description": {
        "fct-descr": "\u003cp\u003eAlways matches if there is at least one directory in \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e but and\n adds a parameter to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e where the key is the first parameter and\n the value is the directory consumed from the path.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Network-Wai-Router.html#routeVar",
        "fct-type": "function",
        "title": "routeVar"
      },
      "index": {
        "description": "Always matches if there is at least one directory in pathInfo but and adds parameter to queryString where the key is the first parameter and the value is the directory consumed from the path",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "routeVar",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Var",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Network-Wai-Router.html#v:runRoute",
      "description": {
        "fct-module": "Network.Wai.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Request -\u003e ResourceT IO (Maybe Response)",
        "fct-source": "src/Network-Wai-Router.html#runRoute",
        "fct-type": "method",
        "title": "runRoute"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Router",
        "module": "Network.Wai.Router",
        "name": "runRoute",
        "normalized": "a-\u003eRequest-\u003eResourceT IO(Maybe Response)",
        "package": "wai-lite",
        "partial": "Route",
        "signature": "r-\u003eRequest-\u003eResourceT IO(Maybe Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFrank is a Sinatra-inspired DSL (see \u003ca\u003ehttp://www.sinatrarb.com\u003c/a\u003e) for creating\nroutes. It is composable with all \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types, but is designed to be used\nwith \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003es. Each verb (\u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, etc') takes a\nURL pattern of the form \"/dir/:paramname/dir\" (see \u003ccode\u003e\u003ca\u003eroutePattern\u003c/a\u003e\u003c/code\u003e for\ndetails) and a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  main :: IO ()\n  main = runSettings defaultSettings $ mkRouter $ do\n    get \"/\" $ do\n      req \u003c- request\n      return $ okHtml $ fromString $\n        \"Welcome Home \" ++ (show $ serverName req)\n    get \"/user/:id\" $ do\n      userId \u003c- queryParam \"id\" \u003e\u003e= fromMaybe \"\"\n      return $ ok \"text/json\" $ fromString $\n        \"{\\\"myid\\\": \" ++ (show userId) ++ \"}\"\n    put \"/user/:id\" $ do\n      ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-Frank.html",
        "fct-type": "module",
        "title": "Frank"
      },
      "index": {
        "description": "Frank is Sinatra-inspired DSL see http www.sinatrarb.com for creating routes It is composable with all Routeable types but is designed to be used with Controller Each verb get post put etc takes URL pattern of the form dir paramname dir see routePattern for details and Routeable main IO main runSettings defaultSettings mkRouter do get do req request return okHtml fromString Welcome Home show serverName req get user id do userId queryParam id fromMaybe return ok text json fromString myid show userId put user id do",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "Frank",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Frank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the DELETE method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Frank.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Matches the DELETE method on the given URL pattern",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "delete",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the GET method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Frank.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Matches the GET method on the given URL pattern",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "get",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the OPTIONS method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Frank.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Matches the OPTIONS method on the given URL pattern",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "options",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the POST method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Frank.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Matches the POST method on the given URL pattern",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "post",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Frank.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eMatches the PUT method on the given URL pattern\n\u003c/p\u003e",
        "fct-module": "Web.Frank",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Frank.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Matches the PUT method on the given URL pattern",
        "hierarchy": "Web Frank",
        "module": "Web.Frank",
        "name": "put",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-REST.html",
        "fct-type": "module",
        "title": "REST"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "REST",
        "normalized": "",
        "package": "wai-lite",
        "partial": "REST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#t:RESTController",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "type",
        "fct-source": "src/Web-REST.html#RESTController",
        "fct-type": "type",
        "title": "RESTController"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "RESTController",
        "normalized": "",
        "package": "wai-lite",
        "partial": "RESTController",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:create",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#create",
        "fct-type": "function",
        "title": "create"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "create",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:delete",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "delete",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:edit",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#edit",
        "fct-type": "function",
        "title": "edit"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "edit",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:index",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "index",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:new",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "new",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:show",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "show",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-REST.html#v:update",
      "description": {
        "fct-module": "Web.REST",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e RESTController",
        "fct-source": "src/Web-REST.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "",
        "hierarchy": "Web REST",
        "module": "Web.REST",
        "name": "update",
        "normalized": "a-\u003eRESTController",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eRESTController"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e provides a convenient syntax for writting \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e\n  code as a Monadic action with access to an HTTP request, rather than a\n  function that takes the request as an argument. This module also defines some\n  helper functions that leverage this feature. For example, \u003ccode\u003e\u003ca\u003eredirectBack\u003c/a\u003e\u003c/code\u003e\n  reads the underlying request to extract the referer and returns a redirect\n  response:\n\u003c/p\u003e\u003cpre\u003e\n    myController = do\n      ...\n      if badLogin then\n        redirectBack\n        else\n          ...\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Controller.html",
        "fct-type": "module",
        "title": "Controller"
      },
      "index": {
        "description": "Controller provides convenient syntax for writting Application code as Monadic action with access to an HTTP request rather than function that takes the request as an argument This module also defines some helper functions that leverage this feature For example redirectBack reads the underlying request to extract the referer and returns redirect response myController do if badLogin then redirectBack else",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#t:Controller",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e monad that contains the HTTP request in its\n environment. A \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e simply by running the \u003ccode\u003e\u003ca\u003eReader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "type",
        "fct-source": "src/Web-Simple-Controller.html#Controller",
        "fct-type": "type",
        "title": "Controller"
      },
      "index": {
        "description": "Controller is Reader monad that contains the HTTP request in its environment Controller is Routeable simply by running the Reader",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "Controller",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Controller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:body",
      "description": {
        "fct-descr": "\u003cp\u003eReads and returns the body of the HTTP request.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller ByteString",
        "fct-source": "src/Web-Simple-Controller.html#body",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "Reads and returns the body of the HTTP request",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "body",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:parseForm",
      "description": {
        "fct-descr": "\u003cp\u003eParses a HTML form from the request body. It returns a list of \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es as\n well as a list of \u003ccode\u003e\u003ca\u003eFile\u003c/a\u003e\u003c/code\u003es, which are pairs mapping the name of a \u003cem\u003efile\u003c/em\u003e form\n field to a \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e pointing to a temporary file with the contents of the\n upload.\n\u003c/p\u003e\u003cpre\u003e\n   myController = do\n     (prms, files) \u003c- parseForm\n     let mPicFile = lookup \"profile_pic\" files\n     case mPicFile of\n       Just (picFile) -\u003e do\n         sourceFile (fileContent picFile) $$\n           sinkFile (\"images/\" ++ (fileName picFile))\n         respond $ redirectTo \"/\"\n       Nothing -\u003e redirectBack\n\u003c/pre\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller ([Param], [(ByteString, FileInfo FilePath)])",
        "fct-source": "src/Web-Simple-Controller.html#parseForm",
        "fct-type": "function",
        "title": "parseForm"
      },
      "index": {
        "description": "Parses HTML form from the request body It returns list of Param as well as list of File which are pairs mapping the name of file form field to FileInfo pointing to temporary file with the contents of the upload myController do prms files parseForm let mPicFile lookup profile pic files case mPicFile of Just picFile do sourceFile fileContent picFile sinkFile images fileName picFile respond redirectTo Nothing redirectBack",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "parseForm",
        "normalized": "Controller([Param],[(ByteString,FileInfo FilePath)])",
        "package": "wai-lite",
        "partial": "Form",
        "signature": "Controller([Param],[(ByteString,FileInfo FilePath)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:queryParam",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up the parameter name in the request's query string and returns the\n value as a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, for a request with query string: \"?foo=bar&baz=7\",\n \u003ccode\u003e\n   queryParam \"foo\"\n \u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ewould return \u003cem\u003eJust \"bar\"\u003c/em\u003e, but\n\u003c/p\u003e\u003cpre\u003e\n   queryParam \"zap\"\n\u003c/pre\u003e\u003cp\u003ewould return \u003cem\u003eNothing\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString-\u003e Controller (Maybe ByteString)",
        "fct-type": "function",
        "title": "queryParam"
      },
      "index": {
        "description": "Looks up the parameter name in the request query string and returns the value as ByteString or Nothing For example for request with query string foo bar baz queryParam foo would return Just bar but queryParam zap would return Nothing",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "queryParam",
        "normalized": "ByteString-\u003eController(Maybe ByteString)",
        "package": "wai-lite",
        "partial": "Param",
        "signature": "ByteString-\u003eController(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:redirectBack",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n redirect to root (i.e., \u003ccode\u003e/\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller Response",
        "fct-source": "src/Web-Simple-Controller.html#redirectBack",
        "fct-type": "function",
        "title": "redirectBack"
      },
      "index": {
        "description": "Redirect back to the referer If the referer header is not present redirect to root i.e",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "redirectBack",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:redirectBackOr",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect back to the referer. If the referer header is not present\n fallback on the given \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Response-\u003e Controller Response",
        "fct-type": "function",
        "title": "redirectBackOr"
      },
      "index": {
        "description": "Redirect back to the referer If the referer header is not present fallback on the given Response",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "redirectBackOr",
        "normalized": "Response-\u003eController Response",
        "package": "wai-lite",
        "partial": "Back Or",
        "signature": "Response-\u003eController Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eReads the underlying \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "Controller Request",
        "fct-source": "src/Web-Simple-Controller.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Reads the underlying Request",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "request",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Controller.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e that's helps the the compiler type a code block as a\n \u003ccode\u003e\u003ca\u003eController\u003c/a\u003e\u003c/code\u003e. For example, when using the \u003ccode\u003e\u003ca\u003eFrank\u003c/a\u003e\u003c/code\u003e routing DSL to\n define a simple route that justs returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erespond\u003c/a\u003e\u003c/code\u003e can be used\n to avoid explicit typing of the argument:\n\u003c/p\u003e\u003cpre\u003e\n   get \"/\" $ do\n     someSideEffect\n     respond $ okHtml \"Hello World\"\n\u003c/pre\u003e\u003cp\u003einstead of:\n\u003c/p\u003e\u003cpre\u003e\n   get \"/\" $ (do\n     someSideEffect\n     return $ okHtml \"Hello World\") :: Controller Response\n\u003c/pre\u003e",
        "fct-module": "Web.Simple.Controller",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Controller r",
        "fct-source": "src/Web-Simple-Controller.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "An alias for return that helps the the compiler type code block as Controller For example when using the Frank routing DSL to define simple route that justs returns Response respond can be used to avoid explicit typing of the argument get do someSideEffect respond okHtml Hello World instead of get do someSideEffect return okHtml Hello World Controller Response",
        "hierarchy": "Web Simple Controller",
        "module": "Web.Simple.Controller",
        "name": "respond",
        "normalized": "a-\u003eController a",
        "package": "wai-lite",
        "partial": "",
        "signature": "r-\u003eController r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines some convenience functions for creating responses.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Responses.html",
        "fct-type": "module",
        "title": "Responses"
      },
      "index": {
        "description": "This module defines some convenience functions for creating responses",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "Responses",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Responses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:badRequest",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 400 (Bad Request) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Web-Simple-Responses.html#badRequest",
        "fct-type": "function",
        "title": "badRequest"
      },
      "index": {
        "description": "Returns Bad Request Response",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "badRequest",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:forbidden",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 403 (Forbidden) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Web-Simple-Responses.html#forbidden",
        "fct-type": "function",
        "title": "forbidden"
      },
      "index": {
        "description": "Returns Forbidden Response",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "forbidden",
        "normalized": "",
        "package": "wai-lite",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:movedTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 301 (Moved Permanently) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to\n that URL.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Web-Simple-Responses.html#movedTo",
        "fct-type": "function",
        "title": "movedTo"
      },
      "index": {
        "description": "Given URL returns Moved Permanently Response redirecting to that URL",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "movedTo",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:notFound",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 404 (Not Found) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Web-Simple-Responses.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "Returns Not Found Response",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "notFound",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:ok",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with the given content-type and resposne\n body\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "ContentType -\u003e ByteString -\u003e Response",
        "fct-source": "src/Web-Simple-Responses.html#ok",
        "fct-type": "function",
        "title": "ok"
      },
      "index": {
        "description": "Creates OK Response with the given content-type and resposne body",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "ok",
        "normalized": "ContentType-\u003eByteString-\u003eResponse",
        "package": "wai-lite",
        "partial": "",
        "signature": "ContentType-\u003eByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:okHtml",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a 200 (OK) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e with content-type \"text/html\" and the\n given resposne body\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e Response",
        "fct-source": "src/Web-Simple-Responses.html#okHtml",
        "fct-type": "function",
        "title": "okHtml"
      },
      "index": {
        "description": "Creates OK Response with content-type text html and the given resposne body",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "okHtml",
        "normalized": "ByteString-\u003eResponse",
        "package": "wai-lite",
        "partial": "Html",
        "signature": "ByteString-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:redirectTo",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a URL returns a 303 (See Other) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e redirecting to that URL.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Web-Simple-Responses.html#redirectTo",
        "fct-type": "function",
        "title": "redirectTo"
      },
      "index": {
        "description": "Given URL returns See Other Response redirecting to that URL",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "redirectTo",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "To",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:requireBasicAuth",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 401 (Authorization Required) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e requiring basic\n authentication in the given realm.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "String -\u003e Response",
        "fct-source": "src/Web-Simple-Responses.html#requireBasicAuth",
        "fct-type": "function",
        "title": "requireBasicAuth"
      },
      "index": {
        "description": "Returns Authorization Required Response requiring basic authentication in the given realm",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "requireBasicAuth",
        "normalized": "String-\u003eResponse",
        "package": "wai-lite",
        "partial": "Basic Auth",
        "signature": "String-\u003eResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Responses.html#v:serverError",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a 500 (Server Error) \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Responses",
        "fct-package": "wai-lite",
        "fct-signature": "Response",
        "fct-source": "src/Web-Simple-Responses.html#serverError",
        "fct-type": "function",
        "title": "serverError"
      },
      "index": {
        "description": "Returns Server Error Response",
        "hierarchy": "Web Simple Responses",
        "module": "Web.Simple.Responses",
        "name": "serverError",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConceptually, a route is function that, given an HTTP request, may return\nan action (something that would return a response for the client if run).\nRoutes can be concatenated--where each route is evaluated until one\nmatches--and nested. Routes are expressed through the \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e type class.\n\u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e transforms an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e to a function from \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nto a monadic action (in the \u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e monad) that returns a\n\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e. The return type was chosen to be monadic so routing\ndecisions can depend on side-effects (e.g. a random number or counter for A/B\ntesting, IP geolocation lookup etc').\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple-Router.html",
        "fct-type": "module",
        "title": "Router"
      },
      "index": {
        "description": "Conceptually route is function that given an HTTP request may return an action something that would return response for the client if run Routes can be concatenated--where each route is evaluated until one matches--and nested Routes are expressed through the Routeable type class runRoute transforms an instance of Routeable to function from Request to monadic action in the ResourceT monad that returns Maybe Response The return type was chosen to be monadic so routing decisions can depend on side-effects e.g random number or counter for testing IP geolocation lookup etc",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "Router",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Router",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e type is a basic instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that simply holds the\nrouting function and an arbitrary additional data parameter. The power is\nderived from the instances of \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e, which allow the\nsimple construction of complex routing rules using either lists (\u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e) or\ndo-notation. Moreover, because of it's simple type, any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e can be used\nas a \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e (using \u003ccode\u003e\u003ca\u003erouteAll\u003c/a\u003e\u003c/code\u003e or by applying it to \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e), making it\npossible to leverage the monadic or monoid syntax for any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCommonly, route functions that construct a \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e only inspect the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e\nand other parameters. For example, \u003ccode\u003e\u003ca\u003erouteHost\u003c/a\u003e\u003c/code\u003e looks at the hostname:\n\u003c/p\u003e\u003cpre\u003e\n  routeHost :: Routeable r =\u003e S.ByteString -\u003e r -\u003e Route ()\n  routeHost host route = Route func ()\n    where func req = if host == serverName req\n                       then runRoute route req\n                       else return Nothing\n\u003c/pre\u003e\u003cp\u003eHowever, because the result of a route is in the\n\u003ccode\u003e\u003ca\u003eResourceT\u003c/a\u003e\u003c/code\u003e monad, routes have all the power of an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e and can make\nstate-dependant decisions. For example, it is trivial to implement a route that\nsucceeds for every other request (perhaps for A/B testing):\n\u003c/p\u003e\u003cpre\u003e\n  routeEveryOther :: (Routeable r1, Routeable r2)\n                  =\u003e TVar Int -\u003e r1 -\u003e r2 -\u003e Route ()\n  routeEveryOther counter r1 r2 = Route func ()\n    where func req = do\n            i \u003c- liftIO . atomically $ do\n                    i' \u003c- readTVar counter\n                    writeTVar counter (i' + 1)\n                    return i'\n            if i \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e 2 == 0\n              then runRoute r1 req\n              else runRoute r2 req\n\u003c/pre\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "data",
        "fct-source": "src/Web-Simple-Router.html#Route",
        "fct-type": "data",
        "title": "Route"
      },
      "index": {
        "description": "The Route type is basic instance of Routeable that simply holds the routing function and an arbitrary additional data parameter The power is derived from the instances of Monad and Monoid which allow the simple construction of complex routing rules using either lists Monoid or do-notation Moreover because of it simple type any Routeable can be used as Route using routeAll or by applying it to runRoute making it possible to leverage the monadic or monoid syntax for any Routeable Commonly route functions that construct Route only inspect the Request and other parameters For example routeHost looks at the hostname routeHost Routeable S.ByteString Route routeHost host route Route func where func req if host serverName req then runRoute route req else return Nothing However because the result of route is in the ResourceT monad routes have all the power of an Application and can make state-dependant decisions For example it is trivial to implement route that succeeds for every other request perhaps for testing routeEveryOther Routeable r1 Routeable r2 TVar Int r1 r2 Route routeEveryOther counter r1 r2 Route func where func req do liftIO atomically do readTVar counter writeTVar counter return if mod then runRoute r1 req else runRoute r2 req",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "Route",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#t:Routeable",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e types can be converted into a route function using \u003ccode\u003e\u003ca\u003erunRoute\u003c/a\u003e\u003c/code\u003e.\nIf the route is matched it returns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn general, \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003es are data-dependant (on the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e), but don't have\nto be. For example, \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e is an instance of \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e that always\nreturns a \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n  instance Routeable Application where\n    runRoute app req = app req \u003e\u003e= return . Just\n\u003c/pre\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "class",
        "fct-source": "src/Web-Simple-Router.html#Routeable",
        "fct-type": "class",
        "title": "Routeable"
      },
      "index": {
        "description": "Routeable types can be converted into route function using runRoute If the route is matched it returns Response otherwise Nothing In general Routeable are data-dependant on the Request but don have to be For example Application is an instance of Routeable that always returns Response instance Routeable Application where runRoute app req app req return Just",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "Routeable",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Routeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:Route",
      "description": {
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "Route (Request -\u003e ResourceT IO (Maybe Response)) a",
        "fct-source": "src/Web-Simple-Router.html#Route",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "Route",
        "normalized": "Route(Request-\u003eResourceT IO(Maybe Response))a",
        "package": "wai-lite",
        "partial": "Route",
        "signature": "Route(Request-\u003eResourceT IO(Maybe Response))a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:mkRouter",
      "description": {
        "fct-descr": "\u003cp\u003eConverts any \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e that can be passed directly\n to a WAI server.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Application",
        "fct-source": "src/Web-Simple-Router.html#mkRouter",
        "fct-type": "function",
        "title": "mkRouter"
      },
      "index": {
        "description": "Converts any Routeable into an Application that can be passed directly to WAI server",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "mkRouter",
        "normalized": "a-\u003eApplication",
        "package": "wai-lite",
        "partial": "Router",
        "signature": "r-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeAll",
      "description": {
        "fct-descr": "\u003cp\u003eA route that always matches (useful for converting a \u003ccode\u003e\u003ca\u003eRouteable\u003c/a\u003e\u003c/code\u003e into a\n \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeAll",
        "fct-type": "function",
        "title": "routeAll"
      },
      "index": {
        "description": "route that always matches useful for converting Routeable into Route",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeAll",
        "normalized": "a-\u003eRoute()",
        "package": "wai-lite",
        "partial": "All",
        "signature": "r-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeHost",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the hostname from the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. The route only successeds on\n exact matches.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeHost",
        "fct-type": "function",
        "title": "routeHost"
      },
      "index": {
        "description": "Matches on the hostname from the Request The route only successeds on exact matches",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeHost",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Host",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeMethod",
      "description": {
        "fct-descr": "\u003cp\u003eMatches on the HTTP request method (e.g. \u003ccode\u003e\u003ca\u003eGET\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePOST\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePUT\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "StdMethod -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeMethod",
        "fct-type": "function",
        "title": "routeMethod"
      },
      "index": {
        "description": "Matches on the HTTP request method e.g GET POST PUT",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeMethod",
        "normalized": "StdMethod-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Method",
        "signature": "StdMethod-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeName",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the first directory in the path matches the given \u003ccode\u003eByteString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeName",
        "fct-type": "function",
        "title": "routeName"
      },
      "index": {
        "description": "Matches if the first directory in the path matches the given ByteString",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeName",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Name",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routePattern",
      "description": {
        "fct-descr": "\u003cp\u003eRoutes the given URL pattern. Patterns can include\n directories as well as variable patterns (prefixed with \u003ccode\u003e:\u003c/code\u003e) to be added\n to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003erouteVar\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e /posts/:id\n\u003c/li\u003e\u003cli\u003e /posts/:id/new\n\u003c/li\u003e\u003cli\u003e /:date/posts/:category/new\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routePattern",
        "fct-type": "function",
        "title": "routePattern"
      },
      "index": {
        "description": "Routes the given URL pattern Patterns can include directories as well as variable patterns prefixed with to be added to queryString see routeVar posts id posts id new date posts category new",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routePattern",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Pattern",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeTop",
      "description": {
        "fct-descr": "\u003cp\u003eMatches if the path is empty. Note that this route checks that \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e\n is empty, so it works as expected when nested under namespaces or other\n routes that pop the \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeTop",
        "fct-type": "function",
        "title": "routeTop"
      },
      "index": {
        "description": "Matches if the path is empty Note that this route checks that pathInfo is empty so it works as expected when nested under namespaces or other routes that pop the pathInfo list",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeTop",
        "normalized": "a-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Top",
        "signature": "r-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:routeVar",
      "description": {
        "fct-descr": "\u003cp\u003eAlways matches if there is at least one directory in \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e but and\n adds a parameter to \u003ccode\u003e\u003ca\u003equeryString\u003c/a\u003e\u003c/code\u003e where the key is the first parameter and\n the value is the directory consumed from the path.\n\u003c/p\u003e",
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "ByteString -\u003e r -\u003e Route ()",
        "fct-source": "src/Web-Simple-Router.html#routeVar",
        "fct-type": "function",
        "title": "routeVar"
      },
      "index": {
        "description": "Always matches if there is at least one directory in pathInfo but and adds parameter to queryString where the key is the first parameter and the value is the directory consumed from the path",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "routeVar",
        "normalized": "ByteString-\u003ea-\u003eRoute()",
        "package": "wai-lite",
        "partial": "Var",
        "signature": "ByteString-\u003er-\u003eRoute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple-Router.html#v:runRoute",
      "description": {
        "fct-module": "Web.Simple.Router",
        "fct-package": "wai-lite",
        "fct-signature": "r -\u003e Request -\u003e ResourceT IO (Maybe Response)",
        "fct-source": "src/Web-Simple-Router.html#runRoute",
        "fct-type": "method",
        "title": "runRoute"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple Router",
        "module": "Web.Simple.Router",
        "name": "runRoute",
        "normalized": "a-\u003eRequest-\u003eResourceT IO(Maybe Response)",
        "package": "wai-lite",
        "partial": "Route",
        "signature": "r-\u003eRequest-\u003eResourceT IO(Maybe Response)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-lite/docs/Web-Simple.html#",
      "description": {
        "fct-module": "Web.Simple",
        "fct-package": "wai-lite",
        "fct-signature": "module",
        "fct-source": "src/Web-Simple.html",
        "fct-type": "module",
        "title": "Simple"
      },
      "index": {
        "description": "",
        "hierarchy": "Web Simple",
        "module": "Web.Simple",
        "name": "Simple",
        "normalized": "",
        "package": "wai-lite",
        "partial": "Simple",
        "signature": ""
      }
    }
  }
]