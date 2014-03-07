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
        "word": "elm-yesod"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a function for compiling Elm source code into a Yesod widget.\n\u003c/p\u003e\u003cp\u003eYou  need to define an instance of \u003ccode\u003e\u003ca\u003eYesodElm\u003c/a\u003e\u003c/code\u003e, which will specify\n     where to find the elm-min.js file.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e instance YesodElm App where\n   urlElmJs _ = Right $ \"http://link.to/elm-min.js\"\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e instance YesodElm App where\n   urlElmJs _ = Left $ StaticR js_elm_min_js\n\u003c/pre\u003e\u003cp\u003eA full example implementation is provided in the examples folder of the Elm github repository\n     at \u003ca\u003ehttps://github.com/tazjin/Elm/tree/master/Examples/elm-yesod\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Elm.Yesod",
          "name": "Yesod",
          "package": "elm-yesod",
          "source": "src/Language-Elm-Yesod.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides function for compiling Elm source code into Yesod widget You need to define an instance of YesodElm which will specify where to find the elm-min.js file For example instance YesodElm App where urlElmJs Right http link.to elm-min.js or instance YesodElm App where urlElmJs Left StaticR js elm min js full example implementation is provided in the examples folder of the Elm github repository at https github.com tazjin Elm tree master Examples elm-yesod",
          "hierarchy": "Language Elm Yesod",
          "module": "Language.Elm.Yesod",
          "name": "Yesod",
          "package": "elm-yesod",
          "partial": "Yesod",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn type of template-reading functions.\n\u003c/p\u003e",
          "module": "Language.Elm.Yesod",
          "name": "ElmUrl",
          "package": "elm-yesod",
          "source": "src/Language-Elm-Yesod.html#ElmUrl",
          "type": "type"
        },
        "index": {
          "description": "Return type of template-reading functions",
          "hierarchy": "Language Elm Yesod",
          "module": "Language.Elm.Yesod",
          "name": "ElmUrl",
          "package": "elm-yesod",
          "partial": "Elm Url",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#t:ElmUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Elm.Yesod",
          "name": "YesodElm",
          "package": "elm-yesod",
          "source": "src/Language-Elm-Yesod.html#YesodElm",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Elm Yesod",
          "module": "Language.Elm.Yesod",
          "name": "YesodElm",
          "package": "elm-yesod",
          "partial": "Yesod Elm",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#t:YesodElm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eelmWidget returns a Yesod widget from some Elm source code\n  with URL interpolation.\n\u003c/p\u003e",
          "module": "Language.Elm.Yesod",
          "name": "elmWidget",
          "package": "elm-yesod",
          "signature": "ElmUrl (Route master)-\u003e GWidget sub master ()",
          "type": "function"
        },
        "index": {
          "description": "elmWidget returns Yesod widget from some Elm source code with URL interpolation",
          "hierarchy": "Language Elm Yesod",
          "module": "Language.Elm.Yesod",
          "name": "elmWidget",
          "normalized": "ElmUrl(Route a)-\u003eGWidget b a()",
          "package": "elm-yesod",
          "partial": "Widget",
          "signature": "ElmUrl(Route master)-\u003eGWidget sub master()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#v:elmWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of the elm-min.js file. This can be either a type-safe\n route (\u003ccode\u003eLeft\u003c/code\u003e) or a raw string (\u003ccode\u003eRight\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Language.Elm.Yesod",
          "name": "urlElmJs",
          "package": "elm-yesod",
          "signature": "a -\u003e Either (Route master) Text",
          "source": "src/Language-Elm-Yesod.html#urlElmJs",
          "type": "method"
        },
        "index": {
          "description": "The location of the elm-min.js file This can be either type-safe route Left or raw string Right",
          "hierarchy": "Language Elm Yesod",
          "module": "Language.Elm.Yesod",
          "name": "urlElmJs",
          "normalized": "a-\u003eEither(Route b)Text",
          "package": "elm-yesod",
          "partial": "Elm Js",
          "signature": "a-\u003eEither(Route master)Text",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#v:urlElmJs"
      }
    }
  ]
]