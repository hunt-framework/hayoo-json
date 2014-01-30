[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-hamlet/docs/Happstack-Server-Hamlet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for using Hamlet with Happstack. Hamlet provides type-safe HTML generation. More information can be found at \u003ca\u003ehttp://patch-tag.com/r/mae/happstack/snapshot/current/content/pretty/happstack-hamlet/demo.hs\u003c/a\u003e and \u003ca\u003ehttp://hackage.haskell.org/package/hamlet\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Happstack.Server.Hamlet",
        "fct-package": "happstack-hamlet",
        "fct-signature": "module",
        "fct-source": "src/Happstack-Server-Hamlet.html",
        "fct-type": "module",
        "title": "Hamlet"
      },
      "index": {
        "description": "This module provides support for using Hamlet with Happstack Hamlet provides type-safe HTML generation More information can be found at http patch-tag.com mae happstack snapshot current content pretty happstack-hamlet demo.hs and http hackage.haskell.org package hamlet",
        "hierarchy": "Happstack Server Hamlet",
        "module": "Happstack.Server.Hamlet",
        "name": "Hamlet",
        "normalized": "",
        "package": "happstack-hamlet",
        "partial": "Hamlet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-hamlet/docs/Happstack-Server-Hamlet.html#v:hamletToResponse",
      "description": {
        "fct-descr": "\u003cp\u003eturn a \u003ccode\u003eHamlet\u003c/code\u003e template into a Happstack \u003ccode\u003e\u003ca\u003eResponse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDue to changes in Hamlet, this function is now just defined as:\n\u003c/p\u003e\u003cpre\u003e hamletToResponse showFn hamlet = toResponse $ hamlet showFn\n\u003c/pre\u003e\u003cp\u003eYou probably do not need to use this library at all these days.\n\u003c/p\u003e",
        "fct-module": "Happstack.Server.Hamlet",
        "fct-package": "happstack-hamlet",
        "fct-signature": "(url -\u003e [(Text, Text)] -\u003e Text)-\u003e HtmlUrl url-\u003e Response",
        "fct-type": "function",
        "title": "hamletToResponse"
      },
      "index": {
        "description": "turn Hamlet template into Happstack Response Due to changes in Hamlet this function is now just defined as hamletToResponse showFn hamlet toResponse hamlet showFn You probably do not need to use this library at all these days",
        "hierarchy": "Happstack Server Hamlet",
        "module": "Happstack.Server.Hamlet",
        "name": "hamletToResponse",
        "normalized": "(a-\u003e[(Text,Text)]-\u003eText)-\u003eHtmlUrl a-\u003eResponse",
        "package": "happstack-hamlet",
        "partial": "To Response",
        "signature": "(url-\u003e[(Text,Text)]-\u003eText)-\u003eHtmlUrl url-\u003eResponse"
      }
    }
  }
]