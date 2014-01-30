[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Core",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Core functionality",
        "hierarchy": "WebWire Core",
        "module": "WebWire.Core",
        "name": "Core",
        "normalized": "",
        "package": "webwire",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:simpleError",
      "description": {
        "fct-descr": "\u003cp\u003ePresent a very simple plaintext error page for the given status.\n\u003c/p\u003e",
        "fct-module": "WebWire.Core",
        "fct-package": "webwire",
        "fct-signature": "WebWire site Status Response",
        "fct-source": "src/WebWire-Core.html#simpleError",
        "fct-type": "function",
        "title": "simpleError"
      },
      "index": {
        "description": "Present very simple plaintext error page for the given status",
        "hierarchy": "WebWire Core",
        "module": "WebWire.Core",
        "name": "simpleError",
        "normalized": "",
        "package": "webwire",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:simpleWire",
      "description": {
        "fct-descr": "\u003cp\u003eRun a simple webwire.  This wire type is for simple sites (usually\n just test sites or temporary sites), which don't need a custom\n \u003ccode\u003eWebSite\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "WebWire.Core",
        "fct-package": "webwire",
        "fct-signature": "(Application -\u003e IO a) -\u003e SimpleWire () Response -\u003e IO a",
        "fct-source": "src/WebWire-Core.html#simpleWire",
        "fct-type": "function",
        "title": "simpleWire"
      },
      "index": {
        "description": "Run simple webwire This wire type is for simple sites usually just test sites or temporary sites which don need custom WebSite instance",
        "hierarchy": "WebWire Core",
        "module": "WebWire.Core",
        "name": "simpleWire",
        "normalized": "(Application-\u003eIO a)-\u003eSimpleWire()Response-\u003eIO a",
        "package": "webwire",
        "partial": "Wire",
        "signature": "(Application-\u003eIO a)-\u003eSimpleWire()Response-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:webWire",
      "description": {
        "fct-descr": "\u003cp\u003eRun a webwire application using the given WAI handler.\n\u003c/p\u003e",
        "fct-module": "WebWire.Core",
        "fct-package": "webwire",
        "fct-signature": "(Application -\u003e IO a)-\u003e site-\u003e WebWire site () Response-\u003e IO a",
        "fct-type": "function",
        "title": "webWire"
      },
      "index": {
        "description": "Run webwire application using the given WAI handler",
        "hierarchy": "WebWire Core",
        "module": "WebWire.Core",
        "name": "webWire",
        "normalized": "(Application-\u003eIO a)-\u003eb-\u003eWebWire b()Response-\u003eIO a",
        "package": "webwire",
        "partial": "Wire",
        "signature": "(Application-\u003eIO a)-\u003esite-\u003eWebWire site()Response-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Render.html",
        "fct-type": "module",
        "title": "Render"
      },
      "index": {
        "description": "Rendering module",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "Render",
        "normalized": "",
        "package": "webwire",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#t:Renderable",
      "description": {
        "fct-descr": "\u003cp\u003eThis class represents renderable types.  Each renderable type can\n support rendering to several target representations like HTML, JSON,\n XML, etc.\n\u003c/p\u003e\u003cp\u003eFor simple applications the predefined instances should suffice.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "class",
        "fct-source": "src/WebWire-Render.html#Renderable",
        "fct-type": "class",
        "title": "Renderable"
      },
      "index": {
        "description": "This class represents renderable types Each renderable type can support rendering to several target representations like HTML JSON XML etc For simple applications the predefined instances should suffice",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "Renderable",
        "normalized": "",
        "package": "webwire",
        "partial": "Renderable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:addWidget",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the input widget to the current default widget.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site Widget ()",
        "fct-source": "src/WebWire-Render.html#addWidget",
        "fct-type": "function",
        "title": "addWidget"
      },
      "index": {
        "description": "Add the input widget to the current default widget",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "addWidget",
        "normalized": "WebWire a Widget()",
        "package": "webwire",
        "partial": "Widget",
        "signature": "WebWire site Widget()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRender the given renderable value as a response to the user.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site src Response",
        "fct-source": "src/WebWire-Render.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Render the given renderable value as response to the user",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "render",
        "normalized": "",
        "package": "webwire",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:renderDef",
      "description": {
        "fct-descr": "\u003cp\u003eRender the default widget.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a Response",
        "fct-source": "src/WebWire-Render.html#renderDef",
        "fct-type": "function",
        "title": "renderDef"
      },
      "index": {
        "description": "Render the default widget",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "renderDef",
        "normalized": "",
        "package": "webwire",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:respondOutput",
      "description": {
        "fct-descr": "\u003cp\u003eRender the given output as a response to the user.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site WebOutput Response",
        "fct-source": "src/WebWire-Render.html#respondOutput",
        "fct-type": "function",
        "title": "respondOutput"
      },
      "index": {
        "description": "Render the given output as response to the user",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "respondOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutput",
      "description": {
        "fct-descr": "\u003cp\u003eRender the input value as the most appropriate output type.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site src WebOutput",
        "fct-source": "src/WebWire-Render.html#toWebOutput",
        "fct-type": "method",
        "title": "toWebOutput"
      },
      "index": {
        "description": "Render the input value as the most appropriate output type",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "toWebOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputGen",
      "description": {
        "fct-descr": "\u003cp\u003eRender the input value as some appropriate output type.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site src WebOutput",
        "fct-source": "src/WebWire-Render.html#toWebOutputGen",
        "fct-type": "method",
        "title": "toWebOutputGen"
      },
      "index": {
        "description": "Render the input value as some appropriate output type",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "toWebOutputGen",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Output Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputHtml",
      "description": {
        "fct-descr": "\u003cp\u003eRender the input value as HTML.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site src WebOutput",
        "fct-source": "src/WebWire-Render.html#toWebOutputHtml",
        "fct-type": "method",
        "title": "toWebOutputHtml"
      },
      "index": {
        "description": "Render the input value as HTML",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "toWebOutputHtml",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Output Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputPlain",
      "description": {
        "fct-descr": "\u003cp\u003eRender the input value as plain text.\n\u003c/p\u003e",
        "fct-module": "WebWire.Render",
        "fct-package": "webwire",
        "fct-signature": "WebWire site src WebOutput",
        "fct-source": "src/WebWire-Render.html#toWebOutputPlain",
        "fct-type": "method",
        "title": "toWebOutputPlain"
      },
      "index": {
        "description": "Render the input value as plain text",
        "hierarchy": "WebWire Render",
        "module": "WebWire.Render",
        "name": "toWebOutputPlain",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Output Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRouting functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Routing.html",
        "fct-type": "module",
        "title": "Routing"
      },
      "index": {
        "description": "Routing functionality",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "Routing",
        "normalized": "",
        "package": "webwire",
        "partial": "Routing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:cdIn",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the root request segment and add it to the current path.\n Inhibits with a 404 error, if the request path is empty.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a ()",
        "fct-source": "src/WebWire-Routing.html#cdIn",
        "fct-type": "function",
        "title": "cdIn"
      },
      "index": {
        "description": "Remove the root request segment and add it to the current path Inhibits with error if the request path is empty",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "cdIn",
        "normalized": "WebWire a b()",
        "package": "webwire",
        "partial": "In",
        "signature": "WebWire site a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:cdOut",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the current tail segment and add it to the request path.\n Inhibits with a 404 error, if the current path is empty.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a ()",
        "fct-source": "src/WebWire-Routing.html#cdOut",
        "fct-type": "function",
        "title": "cdOut"
      },
      "index": {
        "description": "Remove the current tail segment and add it to the request path Inhibits with error if the current path is empty",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "cdOut",
        "normalized": "WebWire a b()",
        "package": "webwire",
        "partial": "Out",
        "signature": "WebWire site a()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:currentDir",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the current path segment, if there is one.  Outputs\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there are no further path segments.  In particular, if\n the root path is requested, this wire always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a (Maybe Text)",
        "fct-source": "src/WebWire-Routing.html#currentDir",
        "fct-type": "function",
        "title": "currentDir"
      },
      "index": {
        "description": "Output the current path segment if there is one Outputs Nothing if there are no further path segments In particular if the root path is requested this wire always returns Nothing",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "currentDir",
        "normalized": "",
        "package": "webwire",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:currentPath",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the current rest of the path segment.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a [Text]",
        "fct-source": "src/WebWire-Routing.html#currentPath",
        "fct-type": "function",
        "title": "currentPath"
      },
      "index": {
        "description": "Output the current rest of the path segment",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "currentPath",
        "normalized": "WebWire a b[Text]",
        "package": "webwire",
        "partial": "Path",
        "signature": "WebWire site a[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:directory",
      "description": {
        "fct-descr": "\u003cp\u003eIf the request root segment is the given directory, then removes\n the root segment and adds it to the current path for the given wire.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e WebWire site a b -\u003e WebWire site a b",
        "fct-source": "src/WebWire-Routing.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "If the request root segment is the given directory then removes the root segment and adds it to the current path for the given wire",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "directory",
        "normalized": "Text-\u003eWebWire a b c-\u003eWebWire a b c",
        "package": "webwire",
        "partial": "",
        "signature": "Text-\u003eWebWire site a b-\u003eWebWire site a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:file",
      "description": {
        "fct-descr": "\u003cp\u003eIf the request root segment is the given file and there are no more\n segments, then removes the last segment and adds it to the current\n path for the given wire.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e WebWire site a b -\u003e WebWire site a b",
        "fct-source": "src/WebWire-Routing.html#file",
        "fct-type": "function",
        "title": "file"
      },
      "index": {
        "description": "If the request root segment is the given file and there are no more segments then removes the last segment and adds it to the current path for the given wire",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "file",
        "normalized": "Text-\u003eWebWire a b c-\u003eWebWire a b c",
        "package": "webwire",
        "partial": "",
        "signature": "Text-\u003eWebWire site a b-\u003eWebWire site a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:pathAbs",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the full URI to the given path from the root path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site [Text] Text",
        "fct-source": "src/WebWire-Routing.html#pathAbs",
        "fct-type": "function",
        "title": "pathAbs"
      },
      "index": {
        "description": "Construct the full URI to the given path from the root path",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "pathAbs",
        "normalized": "WebWire a[Text]Text",
        "package": "webwire",
        "partial": "Abs",
        "signature": "WebWire site[Text]Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:pathRel",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct the full URI to the given path from the current path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site [Text] Text",
        "fct-source": "src/WebWire-Routing.html#pathRel",
        "fct-type": "function",
        "title": "pathRel"
      },
      "index": {
        "description": "Construct the full URI to the given path from the current path",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "pathRel",
        "normalized": "WebWire a[Text]Text",
        "package": "webwire",
        "partial": "Rel",
        "signature": "WebWire site[Text]Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:redirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect to the input URI.  Inhibits with the appropriate\n exception.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "RedirectType -\u003e WebWire site Text b",
        "fct-source": "src/WebWire-Routing.html#redirect",
        "fct-type": "function",
        "title": "redirect"
      },
      "index": {
        "description": "Redirect to the input URI Inhibits with the appropriate exception",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "redirect",
        "normalized": "RedirectType-\u003eWebWire a Text b",
        "package": "webwire",
        "partial": "",
        "signature": "RedirectType-\u003eWebWire site Text b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:redirectRaw",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect to the input URI.  Inhibits with the appropriate\n exception.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "RedirectType -\u003e WebWire site Text b",
        "fct-source": "src/WebWire-Routing.html#redirectRaw",
        "fct-type": "function",
        "title": "redirectRaw"
      },
      "index": {
        "description": "Redirect to the input URI Inhibits with the appropriate exception",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "redirectRaw",
        "normalized": "RedirectType-\u003eWebWire a Text b",
        "package": "webwire",
        "partial": "Raw",
        "signature": "RedirectType-\u003eWebWire site Text b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:requestDir",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the root request path segment, if there is one.  Outputs\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there are no further path segments.  In particular, if\n the root path is requested, this wire always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a (Maybe Text)",
        "fct-source": "src/WebWire-Routing.html#requestDir",
        "fct-type": "function",
        "title": "requestDir"
      },
      "index": {
        "description": "Output the root request path segment if there is one Outputs Nothing if there are no further path segments In particular if the root path is requested this wire always returns Nothing",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "requestDir",
        "normalized": "",
        "package": "webwire",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:requestPath",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the rest of the request path segment.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a [Text]",
        "fct-source": "src/WebWire-Routing.html#requestPath",
        "fct-type": "function",
        "title": "requestPath"
      },
      "index": {
        "description": "Output the rest of the request path segment",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "requestPath",
        "normalized": "WebWire a b[Text]",
        "package": "webwire",
        "partial": "Path",
        "signature": "WebWire site a[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:rootDir",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given wire, if the current request path is empty.\n Otherwise inhibit with 404.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a b -\u003e WebWire site a b",
        "fct-source": "src/WebWire-Routing.html#rootDir",
        "fct-type": "function",
        "title": "rootDir"
      },
      "index": {
        "description": "Run the given wire if the current request path is empty Otherwise inhibit with",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "rootDir",
        "normalized": "WebWire a b c-\u003eWebWire a b c",
        "package": "webwire",
        "partial": "Dir",
        "signature": "WebWire site a b-\u003eWebWire site a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:rootPath",
      "description": {
        "fct-descr": "\u003cp\u003eOutput the current root path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a [Text]",
        "fct-source": "src/WebWire-Routing.html#rootPath",
        "fct-type": "function",
        "title": "rootPath"
      },
      "index": {
        "description": "Output the current root path",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "rootPath",
        "normalized": "WebWire a b[Text]",
        "package": "webwire",
        "partial": "Path",
        "signature": "WebWire site a[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:seeOther",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e for the very common 303\n redirection.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site Text b",
        "fct-source": "src/WebWire-Routing.html#seeOther",
        "fct-type": "function",
        "title": "seeOther"
      },
      "index": {
        "description": "Convenience interface to redirect for the very common redirection",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "seeOther",
        "normalized": "",
        "package": "webwire",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:seeOtherRaw",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e for the very common 303\n redirection.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site Text b",
        "fct-source": "src/WebWire-Routing.html#seeOtherRaw",
        "fct-type": "function",
        "title": "seeOtherRaw"
      },
      "index": {
        "description": "Convenience interface to redirect for the very common redirection",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "seeOtherRaw",
        "normalized": "",
        "package": "webwire",
        "partial": "Other Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:setRoot",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current root path.  This wire also resets the current path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Routing",
        "fct-package": "webwire",
        "fct-signature": "WebWire site [Text] ()",
        "fct-source": "src/WebWire-Routing.html#setRoot",
        "fct-type": "function",
        "title": "setRoot"
      },
      "index": {
        "description": "Set the current root path This wire also resets the current path",
        "hierarchy": "WebWire Routing",
        "module": "WebWire.Routing",
        "name": "setRoot",
        "normalized": "WebWire a[Text]()",
        "package": "webwire",
        "partial": "Root",
        "signature": "WebWire site[Text]()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReactive web session handling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Session.html",
        "fct-type": "module",
        "title": "Session"
      },
      "index": {
        "description": "Reactive web session handling",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "Session",
        "normalized": "",
        "package": "webwire",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#t:SessionCfg",
      "description": {
        "fct-descr": "\u003cp\u003eSession configuration.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Session.html#SessionCfg",
        "fct-type": "data",
        "title": "SessionCfg"
      },
      "index": {
        "description": "Session configuration",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "SessionCfg",
        "normalized": "",
        "package": "webwire",
        "partial": "Session Cfg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#t:WebSession",
      "description": {
        "fct-descr": "\u003cp\u003eSession identifiers.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "type",
        "fct-source": "src/WebWire-Session.html#WebSession",
        "fct-type": "type",
        "title": "WebSession"
      },
      "index": {
        "description": "Session identifiers",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "WebSession",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:SessionCfg",
      "description": {
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "SessionCfg",
        "fct-source": "src/WebWire-Session.html#SessionCfg",
        "fct-type": "function",
        "title": "SessionCfg"
      },
      "index": {
        "description": "",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "SessionCfg",
        "normalized": "",
        "package": "webwire",
        "partial": "Session Cfg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:defSessionCfg",
      "description": {
        "fct-descr": "\u003cp\u003eDefault session configuration.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "SessionCfg",
        "fct-source": "src/WebWire-Session.html#defSessionCfg",
        "fct-type": "function",
        "title": "defSessionCfg"
      },
      "index": {
        "description": "Default session configuration",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "defSessionCfg",
        "normalized": "",
        "package": "webwire",
        "partial": "Session Cfg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:getSessId",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current session id.  Inhibits, if the client didn't have\n one.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "WebWire site (Maybe NominalDiffTime) WebSession",
        "fct-source": "src/WebWire-Session.html#getSessId",
        "fct-type": "function",
        "title": "getSessId"
      },
      "index": {
        "description": "Get the current session id Inhibits if the client didn have one",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "getSessId",
        "normalized": "",
        "package": "webwire",
        "partial": "Sess Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessDuration",
      "description": {
        "fct-descr": "\u003cp\u003eValidity duration of the session cookies.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "Maybe NominalDiffTime",
        "fct-source": "src/WebWire-Session.html#SessionCfg",
        "fct-type": "function",
        "title": "sessDuration"
      },
      "index": {
        "description": "Validity duration of the session cookies",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "sessDuration",
        "normalized": "",
        "package": "webwire",
        "partial": "Duration",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessThreshold",
      "description": {
        "fct-descr": "\u003cp\u003eThreshold of saved sessions, after which sessions can be\n deleted.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "Int",
        "fct-source": "src/WebWire-Session.html#SessionCfg",
        "fct-type": "function",
        "title": "sessThreshold"
      },
      "index": {
        "description": "Threshold of saved sessions after which sessions can be deleted",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "sessThreshold",
        "normalized": "",
        "package": "webwire",
        "partial": "Threshold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessTimeLimit",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum validitity time.  Younger sessions won't be killed on\n the server side.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "Time",
        "fct-source": "src/WebWire-Session.html#SessionCfg",
        "fct-type": "function",
        "title": "sessTimeLimit"
      },
      "index": {
        "description": "Minimum validitity time Younger sessions won be killed on the server side",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "sessTimeLimit",
        "normalized": "",
        "package": "webwire",
        "partial": "Time Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:session",
      "description": {
        "fct-descr": "\u003cp\u003eReactive session handling.  The given wire is evolved for each user\n session individually.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "SessionCfg -\u003e WebWire site (WebSession, a) b -\u003e WebWire site a b",
        "fct-source": "src/WebWire-Session.html#session",
        "fct-type": "function",
        "title": "session"
      },
      "index": {
        "description": "Reactive session handling The given wire is evolved for each user session individually",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "session",
        "normalized": "SessionCfg-\u003eWebWire a(WebSession,b)c-\u003eWebWire a b c",
        "package": "webwire",
        "partial": "",
        "signature": "SessionCfg-\u003eWebWire site(WebSession,a)b-\u003eWebWire site a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:setNewSessId",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new session id and sends a cookie to the client.  The\n input signal specifies the validity duration.  If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then the\n session is valid for the duration of the browser session.\n\u003c/p\u003e",
        "fct-module": "WebWire.Session",
        "fct-package": "webwire",
        "fct-signature": "WebWire site (Maybe NominalDiffTime) ByteString",
        "fct-source": "src/WebWire-Session.html#setNewSessId",
        "fct-type": "function",
        "title": "setNewSessId"
      },
      "index": {
        "description": "Generate new session id and sends cookie to the client The input signal specifies the validity duration If Nothing then the session is valid for the duration of the browser session",
        "hierarchy": "WebWire Session",
        "module": "WebWire.Session",
        "name": "setNewSessId",
        "normalized": "",
        "package": "webwire",
        "partial": "New Sess Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious webwire tools.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Tools.html",
        "fct-type": "module",
        "title": "Tools"
      },
      "index": {
        "description": "Various webwire tools",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "Tools",
        "normalized": "",
        "package": "webwire",
        "partial": "Tools",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:addHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an additional header to the response.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site (CI Ascii, Ascii) ()",
        "fct-source": "src/WebWire-Tools.html#addHeader",
        "fct-type": "function",
        "title": "addHeader"
      },
      "index": {
        "description": "Add an additional header to the response",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "addHeader",
        "normalized": "WebWire a(CI Ascii,Ascii)()",
        "package": "webwire",
        "partial": "Header",
        "signature": "WebWire site(CI Ascii,Ascii)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:getCookie",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the given cookie from the request.  Inhibits, if the\n cookie doesn't exist.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site ByteString ByteString",
        "fct-source": "src/WebWire-Tools.html#getCookie",
        "fct-type": "function",
        "title": "getCookie"
      },
      "index": {
        "description": "Retrieves the given cookie from the request Inhibits if the cookie doesn exist",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "getCookie",
        "normalized": "",
        "package": "webwire",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:getQueryParam",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the given query parameter.  Inhibits with 404, if the\n parameter does not exist.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site ByteString ByteString",
        "fct-source": "src/WebWire-Tools.html#getQueryParam",
        "fct-type": "function",
        "title": "getQueryParam"
      },
      "index": {
        "description": "Retrieve the given query parameter Inhibits with if the parameter does not exist",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "getQueryParam",
        "normalized": "",
        "package": "webwire",
        "partial": "Query Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:notFound",
      "description": {
        "fct-descr": "\u003cp\u003eInhibits with a 404 error.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site a b",
        "fct-source": "src/WebWire-Tools.html#notFound",
        "fct-type": "function",
        "title": "notFound"
      },
      "index": {
        "description": "Inhibits with error",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "notFound",
        "normalized": "",
        "package": "webwire",
        "partial": "Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:setCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSets the given cookie.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site SetCookie ()",
        "fct-source": "src/WebWire-Tools.html#setCookie",
        "fct-type": "function",
        "title": "setCookie"
      },
      "index": {
        "description": "Sets the given cookie",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "setCookie",
        "normalized": "WebWire a SetCookie()",
        "package": "webwire",
        "partial": "Cookie",
        "signature": "WebWire site SetCookie()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:setCookieSimple",
      "description": {
        "fct-descr": "\u003cp\u003eSets the given cookie for the root path of the current domain with\n the given validity duration.  If no duration is given, it becomes a\n session cookie.\n\u003c/p\u003e",
        "fct-module": "WebWire.Tools",
        "fct-package": "webwire",
        "fct-signature": "WebWire site (ByteString, ByteString, Maybe NominalDiffTime) ()",
        "fct-source": "src/WebWire-Tools.html#setCookieSimple",
        "fct-type": "function",
        "title": "setCookieSimple"
      },
      "index": {
        "description": "Sets the given cookie for the root path of the current domain with the given validity duration If no duration is given it becomes session cookie",
        "hierarchy": "WebWire Tools",
        "module": "WebWire.Tools",
        "name": "setCookieSimple",
        "normalized": "WebWire a(ByteString,ByteString,Maybe NominalDiffTime)()",
        "package": "webwire",
        "partial": "Cookie Simple",
        "signature": "WebWire site(ByteString,ByteString,Maybe NominalDiffTime)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used in webwire.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types used in webwire",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "Types",
        "normalized": "",
        "package": "webwire",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:RedirectType",
      "description": {
        "fct-descr": "\u003cp\u003eTypes of redirection.  For temporary redirections, especially in\n response to handling a form, you will want to use \u003ccode\u003e\u003ca\u003eRedirectSeeOther\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Types.html#RedirectType",
        "fct-type": "data",
        "title": "RedirectType"
      },
      "index": {
        "description": "Types of redirection For temporary redirections especially in response to handling form you will want to use RedirectSeeOther",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "RedirectType",
        "normalized": "",
        "package": "webwire",
        "partial": "Redirect Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:SimpleWire",
      "description": {
        "fct-descr": "\u003cp\u003eWire type for simple sites.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "type",
        "fct-source": "src/WebWire-Types.html#SimpleWire",
        "fct-type": "type",
        "title": "SimpleWire"
      },
      "index": {
        "description": "Wire type for simple sites",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "SimpleWire",
        "normalized": "",
        "package": "webwire",
        "partial": "Simple Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebConfig",
      "description": {
        "fct-descr": "\u003cp\u003eRuntime configuration of a wire.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "data",
        "title": "WebConfig"
      },
      "index": {
        "description": "Runtime configuration of wire",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebConfig",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebException",
      "description": {
        "fct-descr": "\u003cp\u003eA web exception is an HTTP status code possibly with additional\n data.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Types.html#WebException",
        "fct-type": "data",
        "title": "WebException"
      },
      "index": {
        "description": "web exception is an HTTP status code possibly with additional data",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebException",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebOutput",
      "description": {
        "fct-descr": "\u003cp\u003eVarious output types.  The boolean argument taken by the\n constructors specifies whether a Content-length header should be\n sent.  If true, the string will be fully built, before being sent to\n the client.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Types.html#WebOutput",
        "fct-type": "data",
        "title": "WebOutput"
      },
      "index": {
        "description": "Various output types The boolean argument taken by the constructors specifies whether Content-length header should be sent If true the string will be fully built before being sent to the client",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebWire",
      "description": {
        "fct-descr": "\u003cp\u003eWeb request handling wires.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "type",
        "fct-source": "src/WebWire-Types.html#WebWire",
        "fct-type": "type",
        "title": "WebWire"
      },
      "index": {
        "description": "Web request handling wires",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebWire",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Wire",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:GenOutput",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric data output\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "GenOutput Bool Ascii Builder",
        "fct-source": "src/WebWire-Types.html#WebOutput",
        "fct-type": "function",
        "title": "GenOutput"
      },
      "index": {
        "description": "Generic data output",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "GenOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Gen Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:HtmlOutput",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8-encoded HTML.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "HtmlOutput Bool Html",
        "fct-source": "src/WebWire-Types.html#WebOutput",
        "fct-type": "function",
        "title": "HtmlOutput"
      },
      "index": {
        "description": "UTF-8-encoded HTML",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "HtmlOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Html Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectPermanent",
      "description": {
        "fct-descr": "\u003cp\u003ePermanently moved (301).\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "RedirectPermanent",
        "fct-source": "src/WebWire-Types.html#RedirectType",
        "fct-type": "function",
        "title": "RedirectPermanent"
      },
      "index": {
        "description": "Permanently moved",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "RedirectPermanent",
        "normalized": "",
        "package": "webwire",
        "partial": "Redirect Permanent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectSeeOther",
      "description": {
        "fct-descr": "\u003cp\u003eSee other (303).\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "RedirectSeeOther",
        "fct-source": "src/WebWire-Types.html#RedirectType",
        "fct-type": "function",
        "title": "RedirectSeeOther"
      },
      "index": {
        "description": "See other",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "RedirectSeeOther",
        "normalized": "",
        "package": "webwire",
        "partial": "Redirect See Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectTemporary",
      "description": {
        "fct-descr": "\u003cp\u003eTemporary redirection (307).\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "RedirectTemporary",
        "fct-source": "src/WebWire-Types.html#RedirectType",
        "fct-type": "function",
        "title": "RedirectTemporary"
      },
      "index": {
        "description": "Temporary redirection",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "RedirectTemporary",
        "normalized": "",
        "package": "webwire",
        "partial": "Redirect Temporary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:TextOutput",
      "description": {
        "fct-descr": "\u003cp\u003eUTF-8-encoded string.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "TextOutput Bool Builder",
        "fct-source": "src/WebWire-Types.html#WebOutput",
        "fct-type": "function",
        "title": "TextOutput"
      },
      "index": {
        "description": "UTF-8-encoded string",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "TextOutput",
        "normalized": "",
        "package": "webwire",
        "partial": "Text Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebConfig",
      "description": {
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "WebConfig",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "WebConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebConfig",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebException",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric web exception.  This can be an internal server error\n (5xx) or document error (4xx), which don't need additional data.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "WebException Status",
        "fct-source": "src/WebWire-Types.html#WebException",
        "fct-type": "function",
        "title": "WebException"
      },
      "index": {
        "description": "Generic web exception This can be an internal server error xx or document error xx which don need additional data",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebException",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebRedirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirection exception.  The second argument specifies the URI\n to redirect to.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "WebRedirect Status Text",
        "fct-source": "src/WebWire-Types.html#WebException",
        "fct-type": "function",
        "title": "WebRedirect"
      },
      "index": {
        "description": "Redirection exception The second argument specifies the URI to redirect to",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "WebRedirect",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Redirect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcCookies",
      "description": {
        "fct-descr": "\u003cp\u003eReceived cookies.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcCookies"
      },
      "index": {
        "description": "Received cookies",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcCookies",
        "normalized": "",
        "package": "webwire",
        "partial": "Cookies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcCurrentPath",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcCurrentPath"
      },
      "index": {
        "description": "Current path",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcCurrentPath",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Current Path",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcPostFiles",
      "description": {
        "fct-descr": "\u003cp\u003ePOST files.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Map ByteString (FileInfo FilePath)",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcPostFiles"
      },
      "index": {
        "description": "POST files",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcPostFiles",
        "normalized": "",
        "package": "webwire",
        "partial": "Post Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcPostParams",
      "description": {
        "fct-descr": "\u003cp\u003ePOST parameters.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcPostParams"
      },
      "index": {
        "description": "POST parameters",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcPostParams",
        "normalized": "",
        "package": "webwire",
        "partial": "Post Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcQueryParams",
      "description": {
        "fct-descr": "\u003cp\u003eQuery parameters.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcQueryParams"
      },
      "index": {
        "description": "Query parameters",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcQueryParams",
        "normalized": "",
        "package": "webwire",
        "partial": "Query Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRequest",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent request.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Request",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcRequest"
      },
      "index": {
        "description": "Current request",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcRequest",
        "normalized": "",
        "package": "webwire",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRequestPath",
      "description": {
        "fct-descr": "\u003cp\u003eRequest path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcRequestPath"
      },
      "index": {
        "description": "Request path",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcRequestPath",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Request Path",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRootPath",
      "description": {
        "fct-descr": "\u003cp\u003eSite's root path.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcRootPath"
      },
      "index": {
        "description": "Site root path",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcRootPath",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Root Path",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSetCookies",
      "description": {
        "fct-descr": "\u003cp\u003eCookies to add to the response.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Map ByteString ByteString",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcSetCookies"
      },
      "index": {
        "description": "Cookies to add to the response",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcSetCookies",
        "normalized": "",
        "package": "webwire",
        "partial": "Set Cookies",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSetHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eHeaders to add to the response.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "[(CI Ascii, Ascii)]",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcSetHeaders"
      },
      "index": {
        "description": "Headers to add to the response",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcSetHeaders",
        "normalized": "[(CI Ascii,Ascii)]",
        "package": "webwire",
        "partial": "Set Headers",
        "signature": "[(CI Ascii,Ascii)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSite",
      "description": {
        "fct-descr": "\u003cp\u003eUser site argument.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "site",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcSite"
      },
      "index": {
        "description": "User site argument",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcSite",
        "normalized": "",
        "package": "webwire",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcWidget",
      "description": {
        "fct-descr": "\u003cp\u003eDefault rendering widget.\n\u003c/p\u003e",
        "fct-module": "WebWire.Types",
        "fct-package": "webwire",
        "fct-signature": "Widget",
        "fct-source": "src/WebWire-Types.html#WebConfig",
        "fct-type": "function",
        "title": "wcWidget"
      },
      "index": {
        "description": "Default rendering widget",
        "hierarchy": "WebWire Types",
        "module": "WebWire.Types",
        "name": "wcWidget",
        "normalized": "",
        "package": "webwire",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTML widgets, inspired by Yesod.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire-Widget.html",
        "fct-type": "module",
        "title": "Widget"
      },
      "index": {
        "description": "HTML widgets inspired by Yesod",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "Widget",
        "normalized": "",
        "package": "webwire",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#t:Widget",
      "description": {
        "fct-descr": "\u003cp\u003eA widget is essentially a full HTML page splitted into the actual\n HTML markup and its dependencies like CSS and JavaScript.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "data",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "data",
        "title": "Widget"
      },
      "index": {
        "description": "widget is essentially full HTML page splitted into the actual HTML markup and its dependencies like CSS and JavaScript",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "Widget",
        "normalized": "",
        "package": "webwire",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:Widget",
      "description": {
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Widget",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "Widget"
      },
      "index": {
        "description": "",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "Widget",
        "normalized": "",
        "package": "webwire",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:bodyW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an HTML body fragment.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Html -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#bodyW",
        "fct-type": "function",
        "title": "bodyW"
      },
      "index": {
        "description": "Widget with an HTML body fragment",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "bodyW",
        "normalized": "Html-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "Html-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cassiusW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an inline CSS stylesheet rendered by Cassius or Lucius.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "CssUrl a -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#cassiusW",
        "fct-type": "function",
        "title": "cassiusW"
      },
      "index": {
        "description": "Widget with an inline CSS stylesheet rendered by Cassius or Lucius",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "cassiusW",
        "normalized": "CssUrl a-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "CssUrl a-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cssLinkW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an external CSS link.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#cssLinkW",
        "fct-type": "function",
        "title": "cssLinkW"
      },
      "index": {
        "description": "Widget with an external CSS link",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "cssLinkW",
        "normalized": "Text-\u003eWidget",
        "package": "webwire",
        "partial": "Link",
        "signature": "Text-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cssW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an inline CSS stylesheet.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#cssW",
        "fct-type": "function",
        "title": "cssW"
      },
      "index": {
        "description": "Widget with an inline CSS stylesheet",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "cssW",
        "normalized": "Text-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "Text-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:hamletW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an HTML body fragment from Hamlet.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "HtmlUrl a -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#hamletW",
        "fct-type": "function",
        "title": "hamletW"
      },
      "index": {
        "description": "Widget with an HTML body fragment from Hamlet",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "hamletW",
        "normalized": "HtmlUrl a-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "HtmlUrl a-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:jsLinkW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with an external JavaScript link.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#jsLinkW",
        "fct-type": "function",
        "title": "jsLinkW"
      },
      "index": {
        "description": "Widget with an external JavaScript link",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "jsLinkW",
        "normalized": "Text-\u003eWidget",
        "package": "webwire",
        "partial": "Link",
        "signature": "Text-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:jsW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with inline JavaScript.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#jsW",
        "fct-type": "function",
        "title": "jsW"
      },
      "index": {
        "description": "Widget with inline JavaScript",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "jsW",
        "normalized": "Text-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "Text-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:juliusW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with inline JavaScript rendered by Julius.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "JavascriptUrl a -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#juliusW",
        "fct-type": "function",
        "title": "juliusW"
      },
      "index": {
        "description": "Widget with inline JavaScript rendered by Julius",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "juliusW",
        "normalized": "JavascriptUrl a-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "JavascriptUrl a-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:titleW",
      "description": {
        "fct-descr": "\u003cp\u003eWidget with a title segment.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Text -\u003e Widget",
        "fct-source": "src/WebWire-Widget.html#titleW",
        "fct-type": "function",
        "title": "titleW"
      },
      "index": {
        "description": "Widget with title segment",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "titleW",
        "normalized": "Text-\u003eWidget",
        "package": "webwire",
        "partial": "",
        "signature": "Text-\u003eWidget"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtBody",
      "description": {
        "fct-descr": "\u003cp\u003eHTML body.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "Html",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtBody"
      },
      "index": {
        "description": "HTML body",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtBody",
        "normalized": "",
        "package": "webwire",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtHeadCSS",
      "description": {
        "fct-descr": "\u003cp\u003eCSS source code to add.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtHeadCSS"
      },
      "index": {
        "description": "CSS source code to add",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtHeadCSS",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Head CSS",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtHeadJS",
      "description": {
        "fct-descr": "\u003cp\u003eJavaScript source code to add.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtHeadJS"
      },
      "index": {
        "description": "JavaScript source code to add",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtHeadJS",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Head JS",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtLinkCSS",
      "description": {
        "fct-descr": "\u003cp\u003eCSS links to add.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtLinkCSS"
      },
      "index": {
        "description": "CSS links to add",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtLinkCSS",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Link CSS",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtLinkJS",
      "description": {
        "fct-descr": "\u003cp\u003eJavaScript links to add.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtLinkJS"
      },
      "index": {
        "description": "JavaScript links to add",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtLinkJS",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Link JS",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtTitle",
      "description": {
        "fct-descr": "\u003cp\u003ePage title parts.\n\u003c/p\u003e",
        "fct-module": "WebWire.Widget",
        "fct-package": "webwire",
        "fct-signature": "[Text]",
        "fct-source": "src/WebWire-Widget.html#Widget",
        "fct-type": "function",
        "title": "wgtTitle"
      },
      "index": {
        "description": "Page title parts",
        "hierarchy": "WebWire Widget",
        "module": "WebWire.Widget",
        "name": "wgtTitle",
        "normalized": "[Text]",
        "package": "webwire",
        "partial": "Title",
        "signature": "[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "WebWire",
        "fct-package": "webwire",
        "fct-signature": "module",
        "fct-source": "src/WebWire.html",
        "fct-type": "module",
        "title": "WebWire"
      },
      "index": {
        "description": "Convenience module",
        "hierarchy": "WebWire",
        "module": "WebWire",
        "name": "WebWire",
        "normalized": "",
        "package": "webwire",
        "partial": "Web Wire",
        "signature": ""
      }
    }
  }
]