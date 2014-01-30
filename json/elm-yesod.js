[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a function for compiling Elm source code into a Yesod widget.\n\u003c/p\u003e\u003cp\u003eYou  need to define an instance of \u003ccode\u003e\u003ca\u003eYesodElm\u003c/a\u003e\u003c/code\u003e, which will specify\n     where to find the elm-min.js file.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e instance YesodElm App where\n   urlElmJs _ = Right $ \"http://link.to/elm-min.js\"\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e instance YesodElm App where\n   urlElmJs _ = Left $ StaticR js_elm_min_js\n\u003c/pre\u003e\u003cp\u003eA full example implementation is provided in the examples folder of the Elm github repository\n     at \u003ca\u003ehttps://github.com/tazjin/Elm/tree/master/Examples/elm-yesod\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Elm.Yesod",
        "fct-package": "elm-yesod",
        "fct-signature": "module",
        "fct-source": "src/Language-Elm-Yesod.html",
        "fct-type": "module",
        "title": "Yesod"
      },
      "index": {
        "description": "This module provides function for compiling Elm source code into Yesod widget You need to define an instance of YesodElm which will specify where to find the elm-min.js file For example instance YesodElm App where urlElmJs Right http link.to elm-min.js or instance YesodElm App where urlElmJs Left StaticR js elm min js full example implementation is provided in the examples folder of the Elm github repository at https github.com tazjin Elm tree master Examples elm-yesod",
        "hierarchy": "Language Elm Yesod",
        "module": "Language.Elm.Yesod",
        "name": "Yesod",
        "normalized": "",
        "package": "elm-yesod",
        "partial": "Yesod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#t:ElmUrl",
      "description": {
        "fct-descr": "\u003cp\u003eReturn type of template-reading functions.\n\u003c/p\u003e",
        "fct-module": "Language.Elm.Yesod",
        "fct-package": "elm-yesod",
        "fct-signature": "type",
        "fct-source": "src/Language-Elm-Yesod.html#ElmUrl",
        "fct-type": "type",
        "title": "ElmUrl"
      },
      "index": {
        "description": "Return type of template-reading functions",
        "hierarchy": "Language Elm Yesod",
        "module": "Language.Elm.Yesod",
        "name": "ElmUrl",
        "normalized": "",
        "package": "elm-yesod",
        "partial": "Elm Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#t:YesodElm",
      "description": {
        "fct-module": "Language.Elm.Yesod",
        "fct-package": "elm-yesod",
        "fct-signature": "class",
        "fct-source": "src/Language-Elm-Yesod.html#YesodElm",
        "fct-type": "class",
        "title": "YesodElm"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Elm Yesod",
        "module": "Language.Elm.Yesod",
        "name": "YesodElm",
        "normalized": "",
        "package": "elm-yesod",
        "partial": "Yesod Elm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#v:elmWidget",
      "description": {
        "fct-descr": "\u003cp\u003eelmWidget returns a Yesod widget from some Elm source code\n  with URL interpolation.\n\u003c/p\u003e",
        "fct-module": "Language.Elm.Yesod",
        "fct-package": "elm-yesod",
        "fct-signature": "ElmUrl (Route master)-\u003e GWidget sub master ()",
        "fct-type": "function",
        "title": "elmWidget"
      },
      "index": {
        "description": "elmWidget returns Yesod widget from some Elm source code with URL interpolation",
        "hierarchy": "Language Elm Yesod",
        "module": "Language.Elm.Yesod",
        "name": "elmWidget",
        "normalized": "ElmUrl(Route a)-\u003eGWidget b a()",
        "package": "elm-yesod",
        "partial": "Widget",
        "signature": "ElmUrl(Route master)-\u003eGWidget sub master()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/elm-yesod/docs/Language-Elm-Yesod.html#v:urlElmJs",
      "description": {
        "fct-descr": "\u003cp\u003eThe location of the elm-min.js file. This can be either a type-safe\n route (\u003ccode\u003eLeft\u003c/code\u003e) or a raw string (\u003ccode\u003eRight\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Elm.Yesod",
        "fct-package": "elm-yesod",
        "fct-signature": "a -\u003e Either (Route master) Text",
        "fct-source": "src/Language-Elm-Yesod.html#urlElmJs",
        "fct-type": "method",
        "title": "urlElmJs"
      },
      "index": {
        "description": "The location of the elm-min.js file This can be either type-safe route Left or raw string Right",
        "hierarchy": "Language Elm Yesod",
        "module": "Language.Elm.Yesod",
        "name": "urlElmJs",
        "normalized": "a-\u003eEither(Route b)Text",
        "package": "elm-yesod",
        "partial": "Elm Js",
        "signature": "a-\u003eEither(Route master)Text"
      }
    }
  }
]