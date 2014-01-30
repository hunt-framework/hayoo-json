[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-static-pages/docs/Network-WAI-Application-StaticPages.html#",
      "description": {
        "fct-module": "Network.WAI.Application.StaticPages",
        "fct-package": "wai-static-pages",
        "fct-signature": "module",
        "fct-source": "src/Network-WAI-Application-StaticPages.html",
        "fct-type": "module",
        "title": "StaticPages"
      },
      "index": {
        "description": "",
        "hierarchy": "Network WAI Application StaticPages",
        "module": "Network.WAI.Application.StaticPages",
        "name": "StaticPages",
        "normalized": "",
        "package": "wai-static-pages",
        "partial": "Static Pages",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-static-pages/docs/Network-WAI-Application-StaticPages.html#v:parseRoutePaths",
      "description": {
        "fct-descr": "\u003cp\u003eConveniently specify paths through nested indentation\n This is a partial function which calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e on\n invalid input.\n\u003c/p\u003e\u003cpre\u003e import Shakespeare.Text (st)\n\n staticPaths = parseRoutePaths [st|\n/pages\n        about\n        faq\n        /\n-- commented out\n|]\n\u003c/pre\u003e\u003cpre\u003e staticPaths == [\"/pages/about\", \"/pages/faq\", \"/pages\"]\n\u003c/pre\u003e",
        "fct-module": "Network.WAI.Application.StaticPages",
        "fct-package": "wai-static-pages",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Network-WAI-Application-StaticPages.html#parseRoutePaths",
        "fct-type": "function",
        "title": "parseRoutePaths"
      },
      "index": {
        "description": "Conveniently specify paths through nested indentation This is partial function which calls error on invalid input import Shakespeare.Text st staticPaths parseRoutePaths st pages about faq commented out staticPaths pages about pages faq pages",
        "hierarchy": "Network WAI Application StaticPages",
        "module": "Network.WAI.Application.StaticPages",
        "name": "parseRoutePaths",
        "normalized": "Text-\u003e[Text]",
        "package": "wai-static-pages",
        "partial": "Route Paths",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-static-pages/docs/Network-WAI-Application-StaticPages.html#v:renderStaticPages",
      "description": {
        "fct-descr": "\u003cp\u003eRender the paths in the application, writing the results to the given directory with an .html\n extension.\n\u003c/p\u003e",
        "fct-module": "Network.WAI.Application.StaticPages",
        "fct-package": "wai-static-pages",
        "fct-signature": "Application-\u003e Text-\u003e [Text]-\u003e IO ()",
        "fct-type": "function",
        "title": "renderStaticPages"
      },
      "index": {
        "description": "Render the paths in the application writing the results to the given directory with an html extension",
        "hierarchy": "Network WAI Application StaticPages",
        "module": "Network.WAI.Application.StaticPages",
        "name": "renderStaticPages",
        "normalized": "Application-\u003eText-\u003e[Text]-\u003eIO()",
        "package": "wai-static-pages",
        "partial": "Static Pages",
        "signature": "Application-\u003eText-\u003e[Text]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-static-pages/docs/Network-WAI-Application-StaticPages.html#v:renderStaticPagesTo",
      "description": {
        "fct-descr": "\u003cp\u003eRender the paths in the application, passing the path through the given function to determine\n the filepath on disk.\n\u003c/p\u003e",
        "fct-module": "Network.WAI.Application.StaticPages",
        "fct-package": "wai-static-pages",
        "fct-signature": "Application-\u003e [Text]-\u003e (Text -\u003e Request -\u003e FilePath)-\u003e IO ()",
        "fct-type": "function",
        "title": "renderStaticPagesTo"
      },
      "index": {
        "description": "Render the paths in the application passing the path through the given function to determine the filepath on disk",
        "hierarchy": "Network WAI Application StaticPages",
        "module": "Network.WAI.Application.StaticPages",
        "name": "renderStaticPagesTo",
        "normalized": "Application-\u003e[Text]-\u003e(Text-\u003eRequest-\u003eFilePath)-\u003eIO()",
        "package": "wai-static-pages",
        "partial": "Static Pages To",
        "signature": "Application-\u003e[Text]-\u003e(Text-\u003eRequest-\u003eFilePath)-\u003eIO()"
      }
    }
  }
]