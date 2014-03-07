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
        "word": "web-routes-happstack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Routes.Happstack",
          "name": "Happstack",
          "package": "web-routes-happstack",
          "source": "src/Web-Routes-Happstack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Routes Happstack",
          "module": "Web.Routes.Happstack",
          "name": "Happstack",
          "package": "web-routes-happstack",
          "partial": "Happstack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-happstack/docs/Web-Routes-Happstack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e to a normal Happstack route\n\u003c/p\u003e\u003cp\u003ecalls \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e if the route can be decoded.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eimplSite_\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.Happstack",
          "name": "implSite",
          "package": "web-routes-happstack",
          "signature": "Text-\u003e Text-\u003e Site url (m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "convert Site to normal Happstack route calls mzero if the route can be decoded see also implSite",
          "hierarchy": "Web Routes Happstack",
          "module": "Web.Routes.Happstack",
          "name": "implSite",
          "normalized": "Text-\u003eText-\u003eSite a(b c)-\u003eb c",
          "package": "web-routes-happstack",
          "partial": "Site",
          "signature": "Text-\u003eText-\u003eSite url(m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-happstack/docs/Web-Routes-Happstack.html#v:implSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eSite\u003c/a\u003e\u003c/code\u003e to a normal Happstack route\n\u003c/p\u003e\u003cp\u003eIf url decoding fails, it returns \u003ccode\u003eLeft \u003ca\u003ethe parse error\u003c/a\u003e\u003c/code\u003e,\n otherwise \u003ccode\u003eRight a\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003esee also: \u003ccode\u003e\u003ca\u003eimplSite\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Web.Routes.Happstack",
          "name": "implSite_",
          "package": "web-routes-happstack",
          "signature": "Text-\u003e Text-\u003e Site url (m a)-\u003e m (Either String a)",
          "type": "function"
        },
        "index": {
          "description": "convert Site to normal Happstack route If url decoding fails it returns Left the parse error otherwise Right see also implSite",
          "hierarchy": "Web Routes Happstack",
          "module": "Web.Routes.Happstack",
          "name": "implSite_",
          "normalized": "Text-\u003eText-\u003eSite a(b c)-\u003eb(Either String c)",
          "package": "web-routes-happstack",
          "partial": "Site",
          "signature": "Text-\u003eText-\u003eSite url(m a)-\u003em(Either String a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-happstack/docs/Web-Routes-Happstack.html#v:implSite_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to \u003ccode\u003e\u003ca\u003eseeOther\u003c/a\u003e\u003c/code\u003e but takes a \u003ccode\u003e\u003ca\u003eURL\u003c/a\u003e\u003c/code\u003e \u003ccode\u003em\u003c/code\u003e as an argument\n\u003c/p\u003e",
          "module": "Web.Routes.Happstack",
          "name": "seeOtherURL",
          "package": "web-routes-happstack",
          "signature": "URL m -\u003e m Response",
          "source": "src/Web-Routes-Happstack.html#seeOtherURL",
          "type": "function"
        },
        "index": {
          "description": "similar to seeOther but takes URL as an argument",
          "hierarchy": "Web Routes Happstack",
          "module": "Web.Routes.Happstack",
          "name": "seeOtherURL",
          "normalized": "URL a-\u003ea Response",
          "package": "web-routes-happstack",
          "partial": "Other URL",
          "signature": "URL m-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-routes-happstack/docs/Web-Routes-Happstack.html#v:seeOtherURL"
      }
    }
  ]
]