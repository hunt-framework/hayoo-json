[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#",
      "description": {
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "module",
        "fct-source": "src/Yesod-Links.html",
        "fct-type": "module",
        "title": "Links"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "Links",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Links",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:Destination",
      "description": {
        "fct-descr": "\u003cp\u003eAn internal route or external url\n\u003c/p\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Links.html#Destination",
        "fct-type": "data",
        "title": "Destination"
      },
      "index": {
        "description": "An internal route or external url",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "Destination",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Destination",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:IsLink",
      "description": {
        "fct-descr": "\u003cp\u003eAny type can represent a link.\n\u003c/p\u003e\u003cpre\u003e instance IsLink MyAppRoute where\n     toLink RootR  = Link (Internal RootR)  \"go home\"         \"home\"\n     toLink AboutR = Link (Internal AboutR) \"about this site\" \"about\"\n     ...\n\n getRootR :: Handler RepHtml\n getRootR = defaultLayout $ do\n     [hamlet|\n\n         be sure to visit our ^{link AboutR} page.\n\n         |]\n\u003c/pre\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Links.html#IsLink",
        "fct-type": "class",
        "title": "IsLink"
      },
      "index": {
        "description": "Any type can represent link instance IsLink MyAppRoute where toLink RootR Link Internal RootR go home home toLink AboutR Link Internal AboutR about this site about getRootR Handler RepHtml getRootR defaultLayout do hamlet be sure to visit our link AboutR page",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "IsLink",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Is Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:Link",
      "description": {
        "fct-descr": "\u003cp\u003eA link to a \u003ccode\u003e\u003ca\u003eDestination\u003c/a\u003e\u003c/code\u003e with supplied titles and text to be used \n   when showing the html.\n\u003c/p\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "data",
        "fct-source": "src/Yesod-Links.html#Link",
        "fct-type": "data",
        "title": "Link"
      },
      "index": {
        "description": "link to Destination with supplied titles and text to be used when showing the html",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "Link",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:YesodLinked",
      "description": {
        "fct-descr": "\u003cp\u003eA type family class used to generalize widgets printing routes that \n   are internal to your site\n\u003c/p\u003e\u003cpre\u003e instance YesodLinked MySite where\n     type Linked = MySite\n\u003c/pre\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "class",
        "fct-source": "src/Yesod-Links.html#YesodLinked",
        "fct-type": "class",
        "title": "YesodLinked"
      },
      "index": {
        "description": "type family class used to generalize widgets printing routes that are internal to your site instance YesodLinked MySite where type Linked MySite",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "YesodLinked",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Yesod Linked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:External",
      "description": {
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "External Text",
        "fct-source": "src/Yesod-Links.html#Destination",
        "fct-type": "function",
        "title": "External"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "External",
        "normalized": "",
        "package": "yesod-links",
        "partial": "External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:Internal",
      "description": {
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Internal (Route m)",
        "fct-source": "src/Yesod-Links.html#Destination",
        "fct-type": "function",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "Internal",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:Link",
      "description": {
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Link",
        "fct-source": "src/Yesod-Links.html#Link",
        "fct-type": "function",
        "title": "Link"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "Link",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eLink to any \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIsLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type. This is simply \u003ccode\u003e\u003ccode\u003e\u003ca\u003elink'\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "a -\u003e WidgetT Linked IO ()",
        "fct-source": "src/Yesod-Links.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Link to any IsLink type This is simply link toLink",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "link",
        "normalized": "a-\u003eWidgetT Linked IO()",
        "package": "yesod-links",
        "partial": "",
        "signature": "a-\u003eWidgetT Linked IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:link-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLink to a raw \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Can be used even if your site is not an\n   instance of \u003ccode\u003e\u003ca\u003eYesodLinked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Link m -\u003e WidgetT m IO ()",
        "fct-source": "src/Yesod-Links.html#link%27",
        "fct-type": "function",
        "title": "link'"
      },
      "index": {
        "description": "Link to raw Link Can be used even if your site is not an instance of YesodLinked",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "link'",
        "normalized": "Link a-\u003eWidgetT a IO()",
        "package": "yesod-links",
        "partial": "",
        "signature": "Link m-\u003eWidgetT m IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkDest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Destination m",
        "fct-source": "src/Yesod-Links.html#Link",
        "fct-type": "function",
        "title": "linkDest"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "linkDest",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkText",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Links.html#Link",
        "fct-type": "function",
        "title": "linkText"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "linkText",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "Text",
        "fct-source": "src/Yesod-Links.html#Link",
        "fct-type": "function",
        "title": "linkTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "linkTitle",
        "normalized": "",
        "package": "yesod-links",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:toLink",
      "description": {
        "fct-module": "Yesod.Links",
        "fct-package": "yesod-links",
        "fct-signature": "a -\u003e Link Linked",
        "fct-source": "src/Yesod-Links.html#toLink",
        "fct-type": "method",
        "title": "toLink"
      },
      "index": {
        "description": "",
        "hierarchy": "Yesod Links",
        "module": "Yesod.Links",
        "name": "toLink",
        "normalized": "a-\u003eLink Linked",
        "package": "yesod-links",
        "partial": "Link",
        "signature": "a-\u003eLink Linked"
      }
    }
  }
]