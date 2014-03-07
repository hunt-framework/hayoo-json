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
        "word": "webwire"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Core",
          "name": "Core",
          "package": "webwire",
          "source": "src/WebWire-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Core functionality",
          "hierarchy": "WebWire Core",
          "module": "WebWire.Core",
          "name": "Core",
          "package": "webwire",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePresent a very simple plaintext error page for the given status.\n\u003c/p\u003e",
          "module": "WebWire.Core",
          "name": "simpleError",
          "package": "webwire",
          "signature": "WebWire site Status Response",
          "source": "src/WebWire-Core.html#simpleError",
          "type": "function"
        },
        "index": {
          "description": "Present very simple plaintext error page for the given status",
          "hierarchy": "WebWire Core",
          "module": "WebWire.Core",
          "name": "simpleError",
          "package": "webwire",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:simpleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a simple webwire.  This wire type is for simple sites (usually\n just test sites or temporary sites), which don't need a custom\n \u003ccode\u003eWebSite\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "WebWire.Core",
          "name": "simpleWire",
          "package": "webwire",
          "signature": "(Application -\u003e IO a) -\u003e SimpleWire () Response -\u003e IO a",
          "source": "src/WebWire-Core.html#simpleWire",
          "type": "function"
        },
        "index": {
          "description": "Run simple webwire This wire type is for simple sites usually just test sites or temporary sites which don need custom WebSite instance",
          "hierarchy": "WebWire Core",
          "module": "WebWire.Core",
          "name": "simpleWire",
          "normalized": "(Application-\u003eIO a)-\u003eSimpleWire()Response-\u003eIO a",
          "package": "webwire",
          "partial": "Wire",
          "signature": "(Application-\u003eIO a)-\u003eSimpleWire()Response-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:simpleWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a webwire application using the given WAI handler.\n\u003c/p\u003e",
          "module": "WebWire.Core",
          "name": "webWire",
          "package": "webwire",
          "signature": "(Application -\u003e IO a)-\u003e site-\u003e WebWire site () Response-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run webwire application using the given WAI handler",
          "hierarchy": "WebWire Core",
          "module": "WebWire.Core",
          "name": "webWire",
          "normalized": "(Application-\u003eIO a)-\u003eb-\u003eWebWire b()Response-\u003eIO a",
          "package": "webwire",
          "partial": "Wire",
          "signature": "(Application-\u003eIO a)-\u003esite-\u003eWebWire site()Response-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Core.html#v:webWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRendering module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Render",
          "name": "Render",
          "package": "webwire",
          "source": "src/WebWire-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Rendering module",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "Render",
          "package": "webwire",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class represents renderable types.  Each renderable type can\n support rendering to several target representations like HTML, JSON,\n XML, etc.\n\u003c/p\u003e\u003cp\u003eFor simple applications the predefined instances should suffice.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "Renderable",
          "package": "webwire",
          "source": "src/WebWire-Render.html#Renderable",
          "type": "class"
        },
        "index": {
          "description": "This class represents renderable types Each renderable type can support rendering to several target representations like HTML JSON XML etc For simple applications the predefined instances should suffice",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "Renderable",
          "package": "webwire",
          "partial": "Renderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#t:Renderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the input widget to the current default widget.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "addWidget",
          "package": "webwire",
          "signature": "WebWire site Widget ()",
          "source": "src/WebWire-Render.html#addWidget",
          "type": "function"
        },
        "index": {
          "description": "Add the input widget to the current default widget",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "addWidget",
          "normalized": "WebWire a Widget()",
          "package": "webwire",
          "partial": "Widget",
          "signature": "WebWire site Widget()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:addWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given renderable value as a response to the user.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "render",
          "package": "webwire",
          "signature": "WebWire site src Response",
          "source": "src/WebWire-Render.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render the given renderable value as response to the user",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "render",
          "package": "webwire",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the default widget.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "renderDef",
          "package": "webwire",
          "signature": "WebWire site a Response",
          "source": "src/WebWire-Render.html#renderDef",
          "type": "function"
        },
        "index": {
          "description": "Render the default widget",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "renderDef",
          "package": "webwire",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:renderDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the given output as a response to the user.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "respondOutput",
          "package": "webwire",
          "signature": "WebWire site WebOutput Response",
          "source": "src/WebWire-Render.html#respondOutput",
          "type": "function"
        },
        "index": {
          "description": "Render the given output as response to the user",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "respondOutput",
          "package": "webwire",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:respondOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the input value as the most appropriate output type.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "toWebOutput",
          "package": "webwire",
          "signature": "WebWire site src WebOutput",
          "source": "src/WebWire-Render.html#toWebOutput",
          "type": "method"
        },
        "index": {
          "description": "Render the input value as the most appropriate output type",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "toWebOutput",
          "package": "webwire",
          "partial": "Web Output",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the input value as some appropriate output type.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "toWebOutputGen",
          "package": "webwire",
          "signature": "WebWire site src WebOutput",
          "source": "src/WebWire-Render.html#toWebOutputGen",
          "type": "method"
        },
        "index": {
          "description": "Render the input value as some appropriate output type",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "toWebOutputGen",
          "package": "webwire",
          "partial": "Web Output Gen",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the input value as HTML.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "toWebOutputHtml",
          "package": "webwire",
          "signature": "WebWire site src WebOutput",
          "source": "src/WebWire-Render.html#toWebOutputHtml",
          "type": "method"
        },
        "index": {
          "description": "Render the input value as HTML",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "toWebOutputHtml",
          "package": "webwire",
          "partial": "Web Output Html",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the input value as plain text.\n\u003c/p\u003e",
          "module": "WebWire.Render",
          "name": "toWebOutputPlain",
          "package": "webwire",
          "signature": "WebWire site src WebOutput",
          "source": "src/WebWire-Render.html#toWebOutputPlain",
          "type": "method"
        },
        "index": {
          "description": "Render the input value as plain text",
          "hierarchy": "WebWire Render",
          "module": "WebWire.Render",
          "name": "toWebOutputPlain",
          "package": "webwire",
          "partial": "Web Output Plain",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Render.html#v:toWebOutputPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRouting functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Routing",
          "name": "Routing",
          "package": "webwire",
          "source": "src/WebWire-Routing.html",
          "type": "module"
        },
        "index": {
          "description": "Routing functionality",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "Routing",
          "package": "webwire",
          "partial": "Routing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the root request segment and add it to the current path.\n Inhibits with a 404 error, if the request path is empty.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "cdIn",
          "package": "webwire",
          "signature": "WebWire site a ()",
          "source": "src/WebWire-Routing.html#cdIn",
          "type": "function"
        },
        "index": {
          "description": "Remove the root request segment and add it to the current path Inhibits with error if the request path is empty",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "cdIn",
          "normalized": "WebWire a b()",
          "package": "webwire",
          "partial": "In",
          "signature": "WebWire site a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:cdIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the current tail segment and add it to the request path.\n Inhibits with a 404 error, if the current path is empty.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "cdOut",
          "package": "webwire",
          "signature": "WebWire site a ()",
          "source": "src/WebWire-Routing.html#cdOut",
          "type": "function"
        },
        "index": {
          "description": "Remove the current tail segment and add it to the request path Inhibits with error if the current path is empty",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "cdOut",
          "normalized": "WebWire a b()",
          "package": "webwire",
          "partial": "Out",
          "signature": "WebWire site a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:cdOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the current path segment, if there is one.  Outputs\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there are no further path segments.  In particular, if\n the root path is requested, this wire always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "currentDir",
          "package": "webwire",
          "signature": "WebWire site a (Maybe Text)",
          "source": "src/WebWire-Routing.html#currentDir",
          "type": "function"
        },
        "index": {
          "description": "Output the current path segment if there is one Outputs Nothing if there are no further path segments In particular if the root path is requested this wire always returns Nothing",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "currentDir",
          "package": "webwire",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:currentDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the current rest of the path segment.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "currentPath",
          "package": "webwire",
          "signature": "WebWire site a [Text]",
          "source": "src/WebWire-Routing.html#currentPath",
          "type": "function"
        },
        "index": {
          "description": "Output the current rest of the path segment",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "currentPath",
          "normalized": "WebWire a b[Text]",
          "package": "webwire",
          "partial": "Path",
          "signature": "WebWire site a[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:currentPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the request root segment is the given directory, then removes\n the root segment and adds it to the current path for the given wire.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "directory",
          "package": "webwire",
          "signature": "Text -\u003e WebWire site a b -\u003e WebWire site a b",
          "source": "src/WebWire-Routing.html#directory",
          "type": "function"
        },
        "index": {
          "description": "If the request root segment is the given directory then removes the root segment and adds it to the current path for the given wire",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "directory",
          "normalized": "Text-\u003eWebWire a b c-\u003eWebWire a b c",
          "package": "webwire",
          "signature": "Text-\u003eWebWire site a b-\u003eWebWire site a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the request root segment is the given file and there are no more\n segments, then removes the last segment and adds it to the current\n path for the given wire.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "file",
          "package": "webwire",
          "signature": "Text -\u003e WebWire site a b -\u003e WebWire site a b",
          "source": "src/WebWire-Routing.html#file",
          "type": "function"
        },
        "index": {
          "description": "If the request root segment is the given file and there are no more segments then removes the last segment and adds it to the current path for the given wire",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "file",
          "normalized": "Text-\u003eWebWire a b c-\u003eWebWire a b c",
          "package": "webwire",
          "signature": "Text-\u003eWebWire site a b-\u003eWebWire site a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the full URI to the given path from the root path.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "pathAbs",
          "package": "webwire",
          "signature": "WebWire site [Text] Text",
          "source": "src/WebWire-Routing.html#pathAbs",
          "type": "function"
        },
        "index": {
          "description": "Construct the full URI to the given path from the root path",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "pathAbs",
          "normalized": "WebWire a[Text]Text",
          "package": "webwire",
          "partial": "Abs",
          "signature": "WebWire site[Text]Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:pathAbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct the full URI to the given path from the current path.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "pathRel",
          "package": "webwire",
          "signature": "WebWire site [Text] Text",
          "source": "src/WebWire-Routing.html#pathRel",
          "type": "function"
        },
        "index": {
          "description": "Construct the full URI to the given path from the current path",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "pathRel",
          "normalized": "WebWire a[Text]Text",
          "package": "webwire",
          "partial": "Rel",
          "signature": "WebWire site[Text]Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:pathRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect to the input URI.  Inhibits with the appropriate\n exception.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "redirect",
          "package": "webwire",
          "signature": "RedirectType -\u003e WebWire site Text b",
          "source": "src/WebWire-Routing.html#redirect",
          "type": "function"
        },
        "index": {
          "description": "Redirect to the input URI Inhibits with the appropriate exception",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "redirect",
          "normalized": "RedirectType-\u003eWebWire a Text b",
          "package": "webwire",
          "signature": "RedirectType-\u003eWebWire site Text b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:redirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect to the input URI.  Inhibits with the appropriate\n exception.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "redirectRaw",
          "package": "webwire",
          "signature": "RedirectType -\u003e WebWire site Text b",
          "source": "src/WebWire-Routing.html#redirectRaw",
          "type": "function"
        },
        "index": {
          "description": "Redirect to the input URI Inhibits with the appropriate exception",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "redirectRaw",
          "normalized": "RedirectType-\u003eWebWire a Text b",
          "package": "webwire",
          "partial": "Raw",
          "signature": "RedirectType-\u003eWebWire site Text b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:redirectRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the root request path segment, if there is one.  Outputs\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there are no further path segments.  In particular, if\n the root path is requested, this wire always returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "requestDir",
          "package": "webwire",
          "signature": "WebWire site a (Maybe Text)",
          "source": "src/WebWire-Routing.html#requestDir",
          "type": "function"
        },
        "index": {
          "description": "Output the root request path segment if there is one Outputs Nothing if there are no further path segments In particular if the root path is requested this wire always returns Nothing",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "requestDir",
          "package": "webwire",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:requestDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the rest of the request path segment.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "requestPath",
          "package": "webwire",
          "signature": "WebWire site a [Text]",
          "source": "src/WebWire-Routing.html#requestPath",
          "type": "function"
        },
        "index": {
          "description": "Output the rest of the request path segment",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "requestPath",
          "normalized": "WebWire a b[Text]",
          "package": "webwire",
          "partial": "Path",
          "signature": "WebWire site a[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:requestPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given wire, if the current request path is empty.\n Otherwise inhibit with 404.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "rootDir",
          "package": "webwire",
          "signature": "WebWire site a b -\u003e WebWire site a b",
          "source": "src/WebWire-Routing.html#rootDir",
          "type": "function"
        },
        "index": {
          "description": "Run the given wire if the current request path is empty Otherwise inhibit with",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "rootDir",
          "normalized": "WebWire a b c-\u003eWebWire a b c",
          "package": "webwire",
          "partial": "Dir",
          "signature": "WebWire site a b-\u003eWebWire site a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:rootDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the current root path.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "rootPath",
          "package": "webwire",
          "signature": "WebWire site a [Text]",
          "source": "src/WebWire-Routing.html#rootPath",
          "type": "function"
        },
        "index": {
          "description": "Output the current root path",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "rootPath",
          "normalized": "WebWire a b[Text]",
          "package": "webwire",
          "partial": "Path",
          "signature": "WebWire site a[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:rootPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e for the very common 303\n redirection.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "seeOther",
          "package": "webwire",
          "signature": "WebWire site Text b",
          "source": "src/WebWire-Routing.html#seeOther",
          "type": "function"
        },
        "index": {
          "description": "Convenience interface to redirect for the very common redirection",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "seeOther",
          "package": "webwire",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:seeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience interface to \u003ccode\u003e\u003ca\u003eredirect\u003c/a\u003e\u003c/code\u003e for the very common 303\n redirection.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "seeOtherRaw",
          "package": "webwire",
          "signature": "WebWire site Text b",
          "source": "src/WebWire-Routing.html#seeOtherRaw",
          "type": "function"
        },
        "index": {
          "description": "Convenience interface to redirect for the very common redirection",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "seeOtherRaw",
          "package": "webwire",
          "partial": "Other Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:seeOtherRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current root path.  This wire also resets the current path.\n\u003c/p\u003e",
          "module": "WebWire.Routing",
          "name": "setRoot",
          "package": "webwire",
          "signature": "WebWire site [Text] ()",
          "source": "src/WebWire-Routing.html#setRoot",
          "type": "function"
        },
        "index": {
          "description": "Set the current root path This wire also resets the current path",
          "hierarchy": "WebWire Routing",
          "module": "WebWire.Routing",
          "name": "setRoot",
          "normalized": "WebWire a[Text]()",
          "package": "webwire",
          "partial": "Root",
          "signature": "WebWire site[Text]()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Routing.html#v:setRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReactive web session handling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Session",
          "name": "Session",
          "package": "webwire",
          "source": "src/WebWire-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Reactive web session handling",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "Session",
          "package": "webwire",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession configuration.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "SessionCfg",
          "package": "webwire",
          "source": "src/WebWire-Session.html#SessionCfg",
          "type": "data"
        },
        "index": {
          "description": "Session configuration",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "SessionCfg",
          "package": "webwire",
          "partial": "Session Cfg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#t:SessionCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession identifiers.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "WebSession",
          "package": "webwire",
          "source": "src/WebWire-Session.html#WebSession",
          "type": "type"
        },
        "index": {
          "description": "Session identifiers",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "WebSession",
          "package": "webwire",
          "partial": "Web Session",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#t:WebSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebWire.Session",
          "name": "SessionCfg",
          "package": "webwire",
          "signature": "SessionCfg",
          "source": "src/WebWire-Session.html#SessionCfg",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "SessionCfg",
          "package": "webwire",
          "partial": "Session Cfg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:SessionCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault session configuration.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "defSessionCfg",
          "package": "webwire",
          "signature": "SessionCfg",
          "source": "src/WebWire-Session.html#defSessionCfg",
          "type": "function"
        },
        "index": {
          "description": "Default session configuration",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "defSessionCfg",
          "package": "webwire",
          "partial": "Session Cfg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:defSessionCfg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current session id.  Inhibits, if the client didn't have\n one.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "getSessId",
          "package": "webwire",
          "signature": "WebWire site (Maybe NominalDiffTime) WebSession",
          "source": "src/WebWire-Session.html#getSessId",
          "type": "function"
        },
        "index": {
          "description": "Get the current session id Inhibits if the client didn have one",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "getSessId",
          "package": "webwire",
          "partial": "Sess Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:getSessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidity duration of the session cookies.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "sessDuration",
          "package": "webwire",
          "signature": "Maybe NominalDiffTime",
          "source": "src/WebWire-Session.html#SessionCfg",
          "type": "function"
        },
        "index": {
          "description": "Validity duration of the session cookies",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "sessDuration",
          "package": "webwire",
          "partial": "Duration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessDuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreshold of saved sessions, after which sessions can be\n deleted.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "sessThreshold",
          "package": "webwire",
          "signature": "Int",
          "source": "src/WebWire-Session.html#SessionCfg",
          "type": "function"
        },
        "index": {
          "description": "Threshold of saved sessions after which sessions can be deleted",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "sessThreshold",
          "package": "webwire",
          "partial": "Threshold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum validitity time.  Younger sessions won't be killed on\n the server side.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "sessTimeLimit",
          "package": "webwire",
          "signature": "Time",
          "source": "src/WebWire-Session.html#SessionCfg",
          "type": "function"
        },
        "index": {
          "description": "Minimum validitity time Younger sessions won be killed on the server side",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "sessTimeLimit",
          "package": "webwire",
          "partial": "Time Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:sessTimeLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReactive session handling.  The given wire is evolved for each user\n session individually.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "session",
          "package": "webwire",
          "signature": "SessionCfg -\u003e WebWire site (WebSession, a) b -\u003e WebWire site a b",
          "source": "src/WebWire-Session.html#session",
          "type": "function"
        },
        "index": {
          "description": "Reactive session handling The given wire is evolved for each user session individually",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "session",
          "normalized": "SessionCfg-\u003eWebWire a(WebSession,b)c-\u003eWebWire a b c",
          "package": "webwire",
          "signature": "SessionCfg-\u003eWebWire site(WebSession,a)b-\u003eWebWire site a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new session id and sends a cookie to the client.  The\n input signal specifies the validity duration.  If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, then the\n session is valid for the duration of the browser session.\n\u003c/p\u003e",
          "module": "WebWire.Session",
          "name": "setNewSessId",
          "package": "webwire",
          "signature": "WebWire site (Maybe NominalDiffTime) ByteString",
          "source": "src/WebWire-Session.html#setNewSessId",
          "type": "function"
        },
        "index": {
          "description": "Generate new session id and sends cookie to the client The input signal specifies the validity duration If Nothing then the session is valid for the duration of the browser session",
          "hierarchy": "WebWire Session",
          "module": "WebWire.Session",
          "name": "setNewSessId",
          "package": "webwire",
          "partial": "New Sess Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Session.html#v:setNewSessId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious webwire tools.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Tools",
          "name": "Tools",
          "package": "webwire",
          "source": "src/WebWire-Tools.html",
          "type": "module"
        },
        "index": {
          "description": "Various webwire tools",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "Tools",
          "package": "webwire",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an additional header to the response.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "addHeader",
          "package": "webwire",
          "signature": "WebWire site (CI Ascii, Ascii) ()",
          "source": "src/WebWire-Tools.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Add an additional header to the response",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "addHeader",
          "normalized": "WebWire a(CI Ascii,Ascii)()",
          "package": "webwire",
          "partial": "Header",
          "signature": "WebWire site(CI Ascii,Ascii)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves the given cookie from the request.  Inhibits, if the\n cookie doesn't exist.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "getCookie",
          "package": "webwire",
          "signature": "WebWire site ByteString ByteString",
          "source": "src/WebWire-Tools.html#getCookie",
          "type": "function"
        },
        "index": {
          "description": "Retrieves the given cookie from the request Inhibits if the cookie doesn exist",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "getCookie",
          "package": "webwire",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:getCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the given query parameter.  Inhibits with 404, if the\n parameter does not exist.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "getQueryParam",
          "package": "webwire",
          "signature": "WebWire site ByteString ByteString",
          "source": "src/WebWire-Tools.html#getQueryParam",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the given query parameter Inhibits with if the parameter does not exist",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "getQueryParam",
          "package": "webwire",
          "partial": "Query Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:getQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInhibits with a 404 error.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "notFound",
          "package": "webwire",
          "signature": "WebWire site a b",
          "source": "src/WebWire-Tools.html#notFound",
          "type": "function"
        },
        "index": {
          "description": "Inhibits with error",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "notFound",
          "package": "webwire",
          "partial": "Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:notFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the given cookie.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "setCookie",
          "package": "webwire",
          "signature": "WebWire site SetCookie ()",
          "source": "src/WebWire-Tools.html#setCookie",
          "type": "function"
        },
        "index": {
          "description": "Sets the given cookie",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "setCookie",
          "normalized": "WebWire a SetCookie()",
          "package": "webwire",
          "partial": "Cookie",
          "signature": "WebWire site SetCookie()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the given cookie for the root path of the current domain with\n the given validity duration.  If no duration is given, it becomes a\n session cookie.\n\u003c/p\u003e",
          "module": "WebWire.Tools",
          "name": "setCookieSimple",
          "package": "webwire",
          "signature": "WebWire site (ByteString, ByteString, Maybe NominalDiffTime) ()",
          "source": "src/WebWire-Tools.html#setCookieSimple",
          "type": "function"
        },
        "index": {
          "description": "Sets the given cookie for the root path of the current domain with the given validity duration If no duration is given it becomes session cookie",
          "hierarchy": "WebWire Tools",
          "module": "WebWire.Tools",
          "name": "setCookieSimple",
          "normalized": "WebWire a(ByteString,ByteString,Maybe NominalDiffTime)()",
          "package": "webwire",
          "partial": "Cookie Simple",
          "signature": "WebWire site(ByteString,ByteString,Maybe NominalDiffTime)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Tools.html#v:setCookieSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes used in webwire.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Types",
          "name": "Types",
          "package": "webwire",
          "source": "src/WebWire-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types used in webwire",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "Types",
          "package": "webwire",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes of redirection.  For temporary redirections, especially in\n response to handling a form, you will want to use \u003ccode\u003e\u003ca\u003eRedirectSeeOther\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "RedirectType",
          "package": "webwire",
          "source": "src/WebWire-Types.html#RedirectType",
          "type": "data"
        },
        "index": {
          "description": "Types of redirection For temporary redirections especially in response to handling form you will want to use RedirectSeeOther",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "RedirectType",
          "package": "webwire",
          "partial": "Redirect Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:RedirectType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWire type for simple sites.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "SimpleWire",
          "package": "webwire",
          "source": "src/WebWire-Types.html#SimpleWire",
          "type": "type"
        },
        "index": {
          "description": "Wire type for simple sites",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "SimpleWire",
          "package": "webwire",
          "partial": "Simple Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:SimpleWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuntime configuration of a wire.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebConfig",
          "package": "webwire",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "data"
        },
        "index": {
          "description": "Runtime configuration of wire",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebConfig",
          "package": "webwire",
          "partial": "Web Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA web exception is an HTTP status code possibly with additional\n data.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebException",
          "package": "webwire",
          "source": "src/WebWire-Types.html#WebException",
          "type": "data"
        },
        "index": {
          "description": "web exception is an HTTP status code possibly with additional data",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebException",
          "package": "webwire",
          "partial": "Web Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVarious output types.  The boolean argument taken by the\n constructors specifies whether a Content-length header should be\n sent.  If true, the string will be fully built, before being sent to\n the client.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebOutput",
          "package": "webwire",
          "source": "src/WebWire-Types.html#WebOutput",
          "type": "data"
        },
        "index": {
          "description": "Various output types The boolean argument taken by the constructors specifies whether Content-length header should be sent If true the string will be fully built before being sent to the client",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebOutput",
          "package": "webwire",
          "partial": "Web Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeb request handling wires.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebWire",
          "package": "webwire",
          "source": "src/WebWire-Types.html#WebWire",
          "type": "type"
        },
        "index": {
          "description": "Web request handling wires",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebWire",
          "package": "webwire",
          "partial": "Web Wire",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#t:WebWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric data output\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "GenOutput",
          "package": "webwire",
          "signature": "GenOutput Bool Ascii Builder",
          "source": "src/WebWire-Types.html#WebOutput",
          "type": "function"
        },
        "index": {
          "description": "Generic data output",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "GenOutput",
          "package": "webwire",
          "partial": "Gen Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:GenOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8-encoded HTML.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "HtmlOutput",
          "package": "webwire",
          "signature": "HtmlOutput Bool Html",
          "source": "src/WebWire-Types.html#WebOutput",
          "type": "function"
        },
        "index": {
          "description": "UTF-8-encoded HTML",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "HtmlOutput",
          "package": "webwire",
          "partial": "Html Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:HtmlOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermanently moved (301).\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "RedirectPermanent",
          "package": "webwire",
          "signature": "RedirectPermanent",
          "source": "src/WebWire-Types.html#RedirectType",
          "type": "function"
        },
        "index": {
          "description": "Permanently moved",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "RedirectPermanent",
          "package": "webwire",
          "partial": "Redirect Permanent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectPermanent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee other (303).\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "RedirectSeeOther",
          "package": "webwire",
          "signature": "RedirectSeeOther",
          "source": "src/WebWire-Types.html#RedirectType",
          "type": "function"
        },
        "index": {
          "description": "See other",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "RedirectSeeOther",
          "package": "webwire",
          "partial": "Redirect See Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectSeeOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporary redirection (307).\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "RedirectTemporary",
          "package": "webwire",
          "signature": "RedirectTemporary",
          "source": "src/WebWire-Types.html#RedirectType",
          "type": "function"
        },
        "index": {
          "description": "Temporary redirection",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "RedirectTemporary",
          "package": "webwire",
          "partial": "Redirect Temporary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:RedirectTemporary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUTF-8-encoded string.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "TextOutput",
          "package": "webwire",
          "signature": "TextOutput Bool Builder",
          "source": "src/WebWire-Types.html#WebOutput",
          "type": "function"
        },
        "index": {
          "description": "UTF-8-encoded string",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "TextOutput",
          "package": "webwire",
          "partial": "Text Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:TextOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebWire.Types",
          "name": "WebConfig",
          "package": "webwire",
          "signature": "WebConfig",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebConfig",
          "package": "webwire",
          "partial": "Web Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric web exception.  This can be an internal server error\n (5xx) or document error (4xx), which don't need additional data.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebException",
          "package": "webwire",
          "signature": "WebException Status",
          "source": "src/WebWire-Types.html#WebException",
          "type": "function"
        },
        "index": {
          "description": "Generic web exception This can be an internal server error xx or document error xx which don need additional data",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebException",
          "package": "webwire",
          "partial": "Web Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirection exception.  The second argument specifies the URI\n to redirect to.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "WebRedirect",
          "package": "webwire",
          "signature": "WebRedirect Status Text",
          "source": "src/WebWire-Types.html#WebException",
          "type": "function"
        },
        "index": {
          "description": "Redirection exception The second argument specifies the URI to redirect to",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "WebRedirect",
          "package": "webwire",
          "partial": "Web Redirect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:WebRedirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived cookies.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcCookies",
          "package": "webwire",
          "signature": "Map ByteString ByteString",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Received cookies",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcCookies",
          "package": "webwire",
          "partial": "Cookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent path.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcCurrentPath",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Current path",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcCurrentPath",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Current Path",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcCurrentPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOST files.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcPostFiles",
          "package": "webwire",
          "signature": "Map ByteString (FileInfo FilePath)",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "POST files",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcPostFiles",
          "package": "webwire",
          "partial": "Post Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcPostFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOST parameters.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcPostParams",
          "package": "webwire",
          "signature": "Map ByteString ByteString",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "POST parameters",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcPostParams",
          "package": "webwire",
          "partial": "Post Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcPostParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery parameters.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcQueryParams",
          "package": "webwire",
          "signature": "Map ByteString ByteString",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Query parameters",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcQueryParams",
          "package": "webwire",
          "partial": "Query Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent request.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcRequest",
          "package": "webwire",
          "signature": "Request",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Current request",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcRequest",
          "package": "webwire",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest path.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcRequestPath",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Request path",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcRequestPath",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Request Path",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRequestPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSite's root path.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcRootPath",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Site root path",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcRootPath",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Root Path",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcRootPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCookies to add to the response.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcSetCookies",
          "package": "webwire",
          "signature": "Map ByteString ByteString",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Cookies to add to the response",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcSetCookies",
          "package": "webwire",
          "partial": "Set Cookies",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSetCookies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeaders to add to the response.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcSetHeaders",
          "package": "webwire",
          "signature": "[(CI Ascii, Ascii)]",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Headers to add to the response",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcSetHeaders",
          "normalized": "[(CI Ascii,Ascii)]",
          "package": "webwire",
          "partial": "Set Headers",
          "signature": "[(CI Ascii,Ascii)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSetHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser site argument.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcSite",
          "package": "webwire",
          "signature": "site",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "User site argument",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcSite",
          "package": "webwire",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault rendering widget.\n\u003c/p\u003e",
          "module": "WebWire.Types",
          "name": "wcWidget",
          "package": "webwire",
          "signature": "Widget",
          "source": "src/WebWire-Types.html#WebConfig",
          "type": "function"
        },
        "index": {
          "description": "Default rendering widget",
          "hierarchy": "WebWire Types",
          "module": "WebWire.Types",
          "name": "wcWidget",
          "package": "webwire",
          "partial": "Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Types.html#v:wcWidget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHTML widgets, inspired by Yesod.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "source": "src/WebWire-Widget.html",
          "type": "module"
        },
        "index": {
          "description": "HTML widgets inspired by Yesod",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget is essentially a full HTML page splitted into the actual\n HTML markup and its dependencies like CSS and JavaScript.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "data"
        },
        "index": {
          "description": "widget is essentially full HTML page splitted into the actual HTML markup and its dependencies like CSS and JavaScript",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "partial": "Widget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "signature": "Widget",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "Widget",
          "package": "webwire",
          "partial": "Widget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an HTML body fragment.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "bodyW",
          "package": "webwire",
          "signature": "Html -\u003e Widget",
          "source": "src/WebWire-Widget.html#bodyW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an HTML body fragment",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "bodyW",
          "normalized": "Html-\u003eWidget",
          "package": "webwire",
          "signature": "Html-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:bodyW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an inline CSS stylesheet rendered by Cassius or Lucius.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "cassiusW",
          "package": "webwire",
          "signature": "CssUrl a -\u003e Widget",
          "source": "src/WebWire-Widget.html#cassiusW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an inline CSS stylesheet rendered by Cassius or Lucius",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "cassiusW",
          "normalized": "CssUrl a-\u003eWidget",
          "package": "webwire",
          "signature": "CssUrl a-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cassiusW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an external CSS link.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "cssLinkW",
          "package": "webwire",
          "signature": "Text -\u003e Widget",
          "source": "src/WebWire-Widget.html#cssLinkW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an external CSS link",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "cssLinkW",
          "normalized": "Text-\u003eWidget",
          "package": "webwire",
          "partial": "Link",
          "signature": "Text-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cssLinkW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an inline CSS stylesheet.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "cssW",
          "package": "webwire",
          "signature": "Text -\u003e Widget",
          "source": "src/WebWire-Widget.html#cssW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an inline CSS stylesheet",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "cssW",
          "normalized": "Text-\u003eWidget",
          "package": "webwire",
          "signature": "Text-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:cssW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an HTML body fragment from Hamlet.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "hamletW",
          "package": "webwire",
          "signature": "HtmlUrl a -\u003e Widget",
          "source": "src/WebWire-Widget.html#hamletW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an HTML body fragment from Hamlet",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "hamletW",
          "normalized": "HtmlUrl a-\u003eWidget",
          "package": "webwire",
          "signature": "HtmlUrl a-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:hamletW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with an external JavaScript link.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "jsLinkW",
          "package": "webwire",
          "signature": "Text -\u003e Widget",
          "source": "src/WebWire-Widget.html#jsLinkW",
          "type": "function"
        },
        "index": {
          "description": "Widget with an external JavaScript link",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "jsLinkW",
          "normalized": "Text-\u003eWidget",
          "package": "webwire",
          "partial": "Link",
          "signature": "Text-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:jsLinkW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with inline JavaScript.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "jsW",
          "package": "webwire",
          "signature": "Text -\u003e Widget",
          "source": "src/WebWire-Widget.html#jsW",
          "type": "function"
        },
        "index": {
          "description": "Widget with inline JavaScript",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "jsW",
          "normalized": "Text-\u003eWidget",
          "package": "webwire",
          "signature": "Text-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:jsW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with inline JavaScript rendered by Julius.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "juliusW",
          "package": "webwire",
          "signature": "JavascriptUrl a -\u003e Widget",
          "source": "src/WebWire-Widget.html#juliusW",
          "type": "function"
        },
        "index": {
          "description": "Widget with inline JavaScript rendered by Julius",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "juliusW",
          "normalized": "JavascriptUrl a-\u003eWidget",
          "package": "webwire",
          "signature": "JavascriptUrl a-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:juliusW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidget with a title segment.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "titleW",
          "package": "webwire",
          "signature": "Text -\u003e Widget",
          "source": "src/WebWire-Widget.html#titleW",
          "type": "function"
        },
        "index": {
          "description": "Widget with title segment",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "titleW",
          "normalized": "Text-\u003eWidget",
          "package": "webwire",
          "signature": "Text-\u003eWidget",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:titleW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML body.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtBody",
          "package": "webwire",
          "signature": "Html",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "HTML body",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtBody",
          "package": "webwire",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS source code to add.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtHeadCSS",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "CSS source code to add",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtHeadCSS",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Head CSS",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtHeadCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript source code to add.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtHeadJS",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "JavaScript source code to add",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtHeadJS",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Head JS",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtHeadJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCSS links to add.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtLinkCSS",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "CSS links to add",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtLinkCSS",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Link CSS",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtLinkCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript links to add.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtLinkJS",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "JavaScript links to add",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtLinkJS",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Link JS",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtLinkJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage title parts.\n\u003c/p\u003e",
          "module": "WebWire.Widget",
          "name": "wgtTitle",
          "package": "webwire",
          "signature": "[Text]",
          "source": "src/WebWire-Widget.html#Widget",
          "type": "function"
        },
        "index": {
          "description": "Page title parts",
          "hierarchy": "WebWire Widget",
          "module": "WebWire.Widget",
          "name": "wgtTitle",
          "normalized": "[Text]",
          "package": "webwire",
          "partial": "Title",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire-Widget.html#v:wgtTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "WebWire",
          "name": "WebWire",
          "package": "webwire",
          "source": "src/WebWire.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module",
          "hierarchy": "WebWire",
          "module": "WebWire",
          "name": "WebWire",
          "package": "webwire",
          "partial": "Web Wire",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/webwire/docs/WebWire.html#"
      }
    }
  ]
]