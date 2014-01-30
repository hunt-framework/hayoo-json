[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains helpers for use \u003ca\u003eYesod.Routes.Dispatch\u003c/a\u003e with \n   \u003ca\u003eNetwork.Wai\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003eMiddleware\u003c/code\u003e uses first \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e in path to route \u003ccode\u003eHTTP\u003c/code\u003e method.\n   \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e means concrete method. \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e means any method.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Route.html",
        "fct-type": "module",
        "title": "Route"
      },
      "index": {
        "description": "This module contains helpers for use Yesod.Routes.Dispatch with Network.Wai This Middleware uses first Piece in path to route HTTP method Static means concrete method Dynamic means any method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Route",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#t:Rule",
      "description": {
        "fct-descr": "\u003cp\u003eRule for route. Rules without single quotes (\u003ccode\u003e'\u003c/code\u003e) means fixed length\n   paths. And vice versa, rules with single quotes (\u003ccode\u003e'\u003c/code\u003e) means paths with\n   variable lengh \n\u003c/p\u003e\u003cp\u003ePaths converts to \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003es by following rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Paths splits by slashes (\u003ccode\u003e/\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Text between slashes becomes \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e. The same thing \n     happens with the text at the ends of paths.\n\u003c/li\u003e\u003cli\u003e Hashes (\u003ccode\u003e#\u003c/code\u003e) inside slashes becomes \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e To make route with variable length just add asterisk (\u003ccode\u003e*\u003c/code\u003e) after last\n     slash.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e \"foo\"\n [Static \"foo\"] Fixed\n \n \"foo/bar\"\n [Static \"foo\", Static \"bar\"] Fixed\n \n \"foo/#/bar\"\n [Static \"foo\", Dynamic, Static \"bar\"] Fixed\n \n \"foo/#/bar/baz/*\"\n [Dynamic, Static \"foo\", Dynamic, Static \"bar\", Static \"baz\"] Variable\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "data",
        "title": "Rule"
      },
      "index": {
        "description": "Rule for route Rules without single quotes means fixed length paths And vice versa rules with single quotes means paths with variable lengh Paths converts to Piece by following rules Paths splits by slashes Text between slashes becomes Static Piece The same thing happens with the text at the ends of paths Hashes inside slashes becomes Dynamic Piece To make route with variable length just add asterisk after last slash foo Static foo Fixed foo bar Static foo Static bar Fixed foo bar Static foo Dynamic Static bar Fixed foo bar baz Dynamic Static foo Dynamic Static bar Static baz Variable",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Rule",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Rule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Any",
      "description": {
        "fct-descr": "\u003cp\u003eAny \u003ccode\u003eHTTP\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Any Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Any"
      },
      "index": {
        "description": "Any HTTP method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Any",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Connect",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eCONNECT\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Connect Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Connect"
      },
      "index": {
        "description": "CONNECT method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Connect",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Connect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eDELETE\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Delete Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Delete"
      },
      "index": {
        "description": "DELETE method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Delete",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Gen",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric rule with \u003ccode\u003eHTTP\u003c/code\u003e method and path\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Gen Text Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Gen"
      },
      "index": {
        "description": "Generic rule with HTTP method and path",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Gen",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Get",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eGET\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Get Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Get"
      },
      "index": {
        "description": "GET method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Get",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eHEAD\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Head Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Head"
      },
      "index": {
        "description": "HEAD method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Head",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Options",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eOPTIONS\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Options Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "OPTIONS method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Options",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Post",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePOST\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Post Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Post"
      },
      "index": {
        "description": "POST method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Post",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Post",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Put",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ePUT\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Put Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Put"
      },
      "index": {
        "description": "PUT method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Put",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Put",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Trace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTRACE\u003c/code\u003e method\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Trace Text Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#Rule",
        "fct-type": "function",
        "title": "Trace"
      },
      "index": {
        "description": "TRACE method",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "Trace",
        "normalized": "",
        "package": "wai-middleware-route",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:dispatch",
      "description": {
        "fct-descr": "\u003cp\u003eDispatch \u003ccode\u003eMiddleware\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e rs :: Dispatch Application\n rs = toDispatch . mkRoutes [\n      Get  \"foo\"  fooGetApp\n    , Post \"foo\"  fooPostApp\n    , Get \"foo//bar\" fooDynBarApp\n \n    , Any  \"any\"  anyMethodApp\n    ]\n \n app :: Application\n app = dispatch True rs (error \"Not dispatched\")\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Bool-\u003e Dispatch Application-\u003e Application-\u003e Application",
        "fct-type": "function",
        "title": "dispatch"
      },
      "index": {
        "description": "Dispatch Middleware rs Dispatch Application rs toDispatch mkRoutes Get foo fooGetApp Post foo fooPostApp Get foo bar fooDynBarApp Any any anyMethodApp app Application app dispatch True rs error Not dispatched",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "dispatch",
        "normalized": "Bool-\u003eDispatch Application-\u003eApplication-\u003eApplication",
        "package": "wai-middleware-route",
        "partial": "",
        "signature": "Bool-\u003eDispatch Application-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:dispatch_",
      "description": {
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Dispatch Application-\u003e Application-\u003e Application",
        "fct-type": "function",
        "title": "dispatch_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "dispatch_",
        "normalized": "Dispatch Application-\u003eApplication-\u003eApplication",
        "package": "wai-middleware-route",
        "partial": "",
        "signature": "Dispatch Application-\u003eApplication-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoute",
      "description": {
        "fct-descr": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003erhPieces\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e will be\n   prepended with \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e with corresponding \u003ccode\u003eHTTP\u003c/code\u003e method. \n   \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e means concrete method. \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e means any method.\n\u003c/p\u003e\u003cpre\u003e mkRoute $ Get \"foo/bar\" app\n Route [Static \"foo\", Static \"bar\"] False (const $ Just app) \n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "Rule -\u003e Route Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#mkRoute",
        "fct-type": "function",
        "title": "mkRoute"
      },
      "index": {
        "description": "Make Route from Rule rhPieces of Route will be prepended with Piece with corresponding HTTP method Static means concrete method Dynamic means any method mkRoute Get foo bar app Route Static foo Static bar False const Just app",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "mkRoute",
        "normalized": "Rule-\u003eRoute Application",
        "package": "wai-middleware-route",
        "partial": "Route",
        "signature": "Rule-\u003eRoute Application"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoutes",
      "description": {
        "fct-descr": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003eRules\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEquivalent \u003ccode\u003emap mkRoute\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "[Rule]-\u003e [Route Application]",
        "fct-type": "function",
        "title": "mkRoutes"
      },
      "index": {
        "description": "Make Route from Rules Equivalent map mkRoute",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "mkRoutes",
        "normalized": "[Rule]-\u003e[Route Application]",
        "package": "wai-middleware-route",
        "partial": "Routes",
        "signature": "[Rule]-\u003e[Route Application]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoutes-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eDispatch\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003eRules\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEquivalent \u003ccode\u003etoDispatch . mkRoutes\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Route",
        "fct-package": "wai-middleware-route",
        "fct-signature": "[Rule] -\u003e Dispatch Application",
        "fct-source": "src/Network-Wai-Middleware-Route.html#mkRoutes%27",
        "fct-type": "function",
        "title": "mkRoutes'"
      },
      "index": {
        "description": "Make Dispatch from Rules Equivalent toDispatch mkRoutes",
        "hierarchy": "Network Wai Middleware Route",
        "module": "Network.Wai.Middleware.Route",
        "name": "mkRoutes'",
        "normalized": "[Rule]-\u003eDispatch Application",
        "package": "wai-middleware-route",
        "partial": "Routes'",
        "signature": "[Rule]-\u003eDispatch Application"
      }
    }
  }
]