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
        "word": "yesod-links"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "Links",
          "package": "yesod-links",
          "source": "src/Yesod-Links.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "Links",
          "package": "yesod-links",
          "partial": "Links",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn internal route or external url\n\u003c/p\u003e",
          "module": "Yesod.Links",
          "name": "Destination",
          "package": "yesod-links",
          "source": "src/Yesod-Links.html#Destination",
          "type": "data"
        },
        "index": {
          "description": "An internal route or external url",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "Destination",
          "package": "yesod-links",
          "partial": "Destination",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:Destination"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny type can represent a link.\n\u003c/p\u003e\u003cpre\u003e instance IsLink MyAppRoute where\n     toLink RootR  = Link (Internal RootR)  \"go home\"         \"home\"\n     toLink AboutR = Link (Internal AboutR) \"about this site\" \"about\"\n     ...\n\n getRootR :: Handler RepHtml\n getRootR = defaultLayout $ do\n     [hamlet|\n\n         be sure to visit our ^{link AboutR} page.\n\n         |]\n\u003c/pre\u003e",
          "module": "Yesod.Links",
          "name": "IsLink",
          "package": "yesod-links",
          "source": "src/Yesod-Links.html#IsLink",
          "type": "class"
        },
        "index": {
          "description": "Any type can represent link instance IsLink MyAppRoute where toLink RootR Link Internal RootR go home home toLink AboutR Link Internal AboutR about this site about getRootR Handler RepHtml getRootR defaultLayout do hamlet be sure to visit our link AboutR page",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "IsLink",
          "package": "yesod-links",
          "partial": "Is Link",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:IsLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA link to a \u003ccode\u003e\u003ca\u003eDestination\u003c/a\u003e\u003c/code\u003e with supplied titles and text to be used \n   when showing the html.\n\u003c/p\u003e",
          "module": "Yesod.Links",
          "name": "Link",
          "package": "yesod-links",
          "source": "src/Yesod-Links.html#Link",
          "type": "data"
        },
        "index": {
          "description": "link to Destination with supplied titles and text to be used when showing the html",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "Link",
          "package": "yesod-links",
          "partial": "Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type family class used to generalize widgets printing routes that \n   are internal to your site\n\u003c/p\u003e\u003cpre\u003e instance YesodLinked MySite where\n     type Linked = MySite\n\u003c/pre\u003e",
          "module": "Yesod.Links",
          "name": "YesodLinked",
          "package": "yesod-links",
          "source": "src/Yesod-Links.html#YesodLinked",
          "type": "class"
        },
        "index": {
          "description": "type family class used to generalize widgets printing routes that are internal to your site instance YesodLinked MySite where type Linked MySite",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "YesodLinked",
          "package": "yesod-links",
          "partial": "Yesod Linked",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#t:YesodLinked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "External",
          "package": "yesod-links",
          "signature": "External Text",
          "source": "src/Yesod-Links.html#Destination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "External",
          "package": "yesod-links",
          "partial": "External",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:External"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "Internal",
          "package": "yesod-links",
          "signature": "Internal (Route m)",
          "source": "src/Yesod-Links.html#Destination",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "Internal",
          "package": "yesod-links",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "Link",
          "package": "yesod-links",
          "signature": "Link",
          "source": "src/Yesod-Links.html#Link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "Link",
          "package": "yesod-links",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to any \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIsLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e type. This is simply \u003ccode\u003e\u003ccode\u003e\u003ca\u003elink'\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003etoLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Links",
          "name": "link",
          "package": "yesod-links",
          "signature": "a -\u003e WidgetT Linked IO ()",
          "source": "src/Yesod-Links.html#link",
          "type": "function"
        },
        "index": {
          "description": "Link to any IsLink type This is simply link toLink",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "link",
          "normalized": "a-\u003eWidgetT Linked IO()",
          "package": "yesod-links",
          "signature": "a-\u003eWidgetT Linked IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink to a raw \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLink\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Can be used even if your site is not an\n   instance of \u003ccode\u003e\u003ca\u003eYesodLinked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Yesod.Links",
          "name": "link'",
          "package": "yesod-links",
          "signature": "Link m -\u003e WidgetT m IO ()",
          "source": "src/Yesod-Links.html#link%27",
          "type": "function"
        },
        "index": {
          "description": "Link to raw Link Can be used even if your site is not an instance of YesodLinked",
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "link'",
          "normalized": "Link a-\u003eWidgetT a IO()",
          "package": "yesod-links",
          "signature": "Link m-\u003eWidgetT m IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:link-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "linkDest",
          "package": "yesod-links",
          "signature": "Destination m",
          "source": "src/Yesod-Links.html#Link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "linkDest",
          "package": "yesod-links",
          "partial": "Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "linkText",
          "package": "yesod-links",
          "signature": "Text",
          "source": "src/Yesod-Links.html#Link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "linkText",
          "package": "yesod-links",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "linkTitle",
          "package": "yesod-links",
          "signature": "Text",
          "source": "src/Yesod-Links.html#Link",
          "type": "function"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "linkTitle",
          "package": "yesod-links",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:linkTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Yesod.Links",
          "name": "toLink",
          "package": "yesod-links",
          "signature": "a -\u003e Link Linked",
          "source": "src/Yesod-Links.html#toLink",
          "type": "method"
        },
        "index": {
          "hierarchy": "Yesod Links",
          "module": "Yesod.Links",
          "name": "toLink",
          "normalized": "a-\u003eLink Linked",
          "package": "yesod-links",
          "partial": "Link",
          "signature": "a-\u003eLink Linked",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/yesod-links/docs/Yesod-Links.html#v:toLink"
      }
    }
  ]
]