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
        "word": "wai-middleware-route"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains helpers for use \u003ca\u003eYesod.Routes.Dispatch\u003c/a\u003e with \n   \u003ca\u003eNetwork.Wai\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003eMiddleware\u003c/code\u003e uses first \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e in path to route \u003ccode\u003eHTTP\u003c/code\u003e method.\n   \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e means concrete method. \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e means any method.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Route",
          "package": "wai-middleware-route",
          "source": "src/Network-Wai-Middleware-Route.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains helpers for use Yesod.Routes.Dispatch with Network.Wai This Middleware uses first Piece in path to route HTTP method Static means concrete method Dynamic means any method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Route",
          "package": "wai-middleware-route",
          "partial": "Route",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule for route. Rules without single quotes (\u003ccode\u003e'\u003c/code\u003e) means fixed length\n   paths. And vice versa, rules with single quotes (\u003ccode\u003e'\u003c/code\u003e) means paths with\n   variable lengh \n\u003c/p\u003e\u003cp\u003ePaths converts to \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003es by following rules:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Paths splits by slashes (\u003ccode\u003e/\u003c/code\u003e).\n\u003c/li\u003e\u003cli\u003e Text between slashes becomes \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e. The same thing \n     happens with the text at the ends of paths.\n\u003c/li\u003e\u003cli\u003e Hashes (\u003ccode\u003e#\u003c/code\u003e) inside slashes becomes \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e To make route with variable length just add asterisk (\u003ccode\u003e*\u003c/code\u003e) after last\n     slash.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e \"foo\"\n [Static \"foo\"] Fixed\n \n \"foo/bar\"\n [Static \"foo\", Static \"bar\"] Fixed\n \n \"foo/#/bar\"\n [Static \"foo\", Dynamic, Static \"bar\"] Fixed\n \n \"foo/#/bar/baz/*\"\n [Dynamic, Static \"foo\", Dynamic, Static \"bar\", Static \"baz\"] Variable\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Rule",
          "package": "wai-middleware-route",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "Rule for route Rules without single quotes means fixed length paths And vice versa rules with single quotes means paths with variable lengh Paths converts to Piece by following rules Paths splits by slashes Text between slashes becomes Static Piece The same thing happens with the text at the ends of paths Hashes inside slashes becomes Dynamic Piece To make route with variable length just add asterisk after last slash foo Static foo Fixed foo bar Static foo Static bar Fixed foo bar Static foo Dynamic Static bar Fixed foo bar baz Dynamic Static foo Dynamic Static bar Static baz Variable",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Rule",
          "package": "wai-middleware-route",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny \u003ccode\u003eHTTP\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Any",
          "package": "wai-middleware-route",
          "signature": "Any Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Any HTTP method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Any",
          "package": "wai-middleware-route",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eCONNECT\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Connect",
          "package": "wai-middleware-route",
          "signature": "Connect Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "CONNECT method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Connect",
          "package": "wai-middleware-route",
          "partial": "Connect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Connect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDELETE\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Delete",
          "package": "wai-middleware-route",
          "signature": "Delete Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "DELETE method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Delete",
          "package": "wai-middleware-route",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric rule with \u003ccode\u003eHTTP\u003c/code\u003e method and path\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Gen",
          "package": "wai-middleware-route",
          "signature": "Gen Text Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Generic rule with HTTP method and path",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Gen",
          "package": "wai-middleware-route",
          "partial": "Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eGET\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Get",
          "package": "wai-middleware-route",
          "signature": "Get Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "GET method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Get",
          "package": "wai-middleware-route",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eHEAD\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Head",
          "package": "wai-middleware-route",
          "signature": "Head Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "HEAD method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Head",
          "package": "wai-middleware-route",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eOPTIONS\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Options",
          "package": "wai-middleware-route",
          "signature": "Options Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "OPTIONS method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Options",
          "package": "wai-middleware-route",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePOST\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Post",
          "package": "wai-middleware-route",
          "signature": "Post Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "POST method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Post",
          "package": "wai-middleware-route",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePUT\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Put",
          "package": "wai-middleware-route",
          "signature": "Put Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "PUT method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Put",
          "package": "wai-middleware-route",
          "partial": "Put",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTRACE\u003c/code\u003e method\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "Trace",
          "package": "wai-middleware-route",
          "signature": "Trace Text Application",
          "source": "src/Network-Wai-Middleware-Route.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "TRACE method",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "Trace",
          "package": "wai-middleware-route",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDispatch \u003ccode\u003eMiddleware\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e rs :: Dispatch Application\n rs = toDispatch . mkRoutes [\n      Get  \"foo\"  fooGetApp\n    , Post \"foo\"  fooPostApp\n    , Get \"foo//bar\" fooDynBarApp\n \n    , Any  \"any\"  anyMethodApp\n    ]\n \n app :: Application\n app = dispatch True rs (error \"Not dispatched\")\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "dispatch",
          "package": "wai-middleware-route",
          "signature": "Bool-\u003e Dispatch Application-\u003e Application-\u003e Application",
          "type": "function"
        },
        "index": {
          "description": "Dispatch Middleware rs Dispatch Application rs toDispatch mkRoutes Get foo fooGetApp Post foo fooPostApp Get foo bar fooDynBarApp Any any anyMethodApp app Application app dispatch True rs error Not dispatched",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "dispatch",
          "normalized": "Bool-\u003eDispatch Application-\u003eApplication-\u003eApplication",
          "package": "wai-middleware-route",
          "signature": "Bool-\u003eDispatch Application-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:dispatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Route",
          "name": "dispatch_",
          "package": "wai-middleware-route",
          "signature": "Dispatch Application-\u003e Application-\u003e Application",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "dispatch_",
          "normalized": "Dispatch Application-\u003eApplication-\u003eApplication",
          "package": "wai-middleware-route",
          "signature": "Dispatch Application-\u003eApplication-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:dispatch_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003erhPieces\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003e will be\n   prepended with \u003ccode\u003e\u003ca\u003ePiece\u003c/a\u003e\u003c/code\u003e with corresponding \u003ccode\u003eHTTP\u003c/code\u003e method. \n   \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e means concrete method. \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e means any method.\n\u003c/p\u003e\u003cpre\u003e mkRoute $ Get \"foo/bar\" app\n Route [Static \"foo\", Static \"bar\"] False (const $ Just app) \n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoute",
          "package": "wai-middleware-route",
          "signature": "Rule -\u003e Route Application",
          "source": "src/Network-Wai-Middleware-Route.html#mkRoute",
          "type": "function"
        },
        "index": {
          "description": "Make Route from Rule rhPieces of Route will be prepended with Piece with corresponding HTTP method Static means concrete method Dynamic means any method mkRoute Get foo bar app Route Static foo Static bar False const Just app",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoute",
          "normalized": "Rule-\u003eRoute Application",
          "package": "wai-middleware-route",
          "partial": "Route",
          "signature": "Rule-\u003eRoute Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eRoute\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003eRules\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEquivalent \u003ccode\u003emap mkRoute\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoutes",
          "package": "wai-middleware-route",
          "signature": "[Rule]-\u003e [Route Application]",
          "type": "function"
        },
        "index": {
          "description": "Make Route from Rules Equivalent map mkRoute",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoutes",
          "normalized": "[Rule]-\u003e[Route Application]",
          "package": "wai-middleware-route",
          "partial": "Routes",
          "signature": "[Rule]-\u003e[Route Application]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003eDispatch\u003c/a\u003e\u003c/code\u003es from \u003ccode\u003eRules\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eEquivalent \u003ccode\u003etoDispatch . mkRoutes\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoutes'",
          "package": "wai-middleware-route",
          "signature": "[Rule] -\u003e Dispatch Application",
          "source": "src/Network-Wai-Middleware-Route.html#mkRoutes%27",
          "type": "function"
        },
        "index": {
          "description": "Make Dispatch from Rules Equivalent toDispatch mkRoutes",
          "hierarchy": "Network Wai Middleware Route",
          "module": "Network.Wai.Middleware.Route",
          "name": "mkRoutes'",
          "normalized": "[Rule]-\u003eDispatch Application",
          "package": "wai-middleware-route",
          "partial": "Routes'",
          "signature": "[Rule]-\u003eDispatch Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-route/docs/Network-Wai-Middleware-Route.html#v:mkRoutes-39-"
      }
    }
  ]
]