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
        "word": "URLT"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "Base",
          "package": "URLT",
          "source": "src/URLT-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "Base",
          "package": "URLT",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "Link",
          "package": "URLT",
          "source": "src/URLT-Base.html#Link",
          "type": "type"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "Link",
          "package": "URLT",
          "partial": "Link",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "ShowURL",
          "package": "URLT",
          "source": "src/URLT-Base.html#ShowURL",
          "type": "class"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "ShowURL",
          "package": "URLT",
          "partial": "Show URL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:ShowURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emonad transformer for generating URLs\n\u003c/p\u003e",
          "module": "URLT.Base",
          "name": "URLT",
          "package": "URLT",
          "source": "src/URLT-Base.html#URLT",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer for generating URLs",
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "URLT",
          "package": "URLT",
          "partial": "URLT",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:URLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "URLT",
          "package": "URLT",
          "signature": "URLT",
          "source": "src/URLT-Base.html#URLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "URLT",
          "package": "URLT",
          "partial": "URLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:URLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "crossURL",
          "package": "URLT",
          "signature": "(url2 -\u003e url1) -\u003e URLT url1 m (url2 -\u003e Link)",
          "source": "src/URLT-Base.html#crossURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "crossURL",
          "normalized": "(a-\u003ea)-\u003eURLT a b(a-\u003eLink)",
          "package": "URLT",
          "partial": "URL",
          "signature": "(url-\u003eurl)-\u003eURLT url m(url-\u003eLink)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:crossURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "mapURLT",
          "package": "URLT",
          "signature": "(m a -\u003e n b) -\u003e URLT url m a -\u003e URLT url n b",
          "source": "src/URLT-Base.html#mapURLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "mapURLT",
          "normalized": "(a b-\u003ec d)-\u003eURLT e a b-\u003eURLT e c d",
          "package": "URLT",
          "partial": "URLT",
          "signature": "(m a-\u003en b)-\u003eURLT url m a-\u003eURLT url n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:mapURLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused to embed a URLT into a larger parent url\n\u003c/p\u003e",
          "module": "URLT.Base",
          "name": "nestURL",
          "package": "URLT",
          "signature": "(url2 -\u003e url1) -\u003e URLT url2 m a -\u003e URLT url1 m a",
          "source": "src/URLT-Base.html#nestURL",
          "type": "function"
        },
        "index": {
          "description": "used to embed URLT into larger parent url",
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "nestURL",
          "normalized": "(a-\u003ea)-\u003eURLT a b c-\u003eURLT a b c",
          "package": "URLT",
          "partial": "URL",
          "signature": "(url-\u003eurl)-\u003eURLT url m a-\u003eURLT url m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:nestURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "showURL",
          "package": "URLT",
          "signature": "showURL",
          "source": "src/URLT-Base.html#showURL",
          "type": "method"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "showURL",
          "package": "URLT",
          "partial": "URL",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:showURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Base",
          "name": "unURLT",
          "package": "URLT",
          "signature": "ReaderT (url -\u003e Link) m a",
          "source": "src/URLT-Base.html#URLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "unURLT",
          "normalized": "ReaderT(a-\u003eLink)b c",
          "package": "URLT",
          "partial": "URLT",
          "signature": "ReaderT(url-\u003eLink)m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:unURLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimilar to withReaderT\n\u003c/p\u003e",
          "module": "URLT.Base",
          "name": "withURLT",
          "package": "URLT",
          "signature": "((url' -\u003e Link) -\u003e url -\u003e Link) -\u003e URLT url m a -\u003e URLT url' m a",
          "source": "src/URLT-Base.html#withURLT",
          "type": "function"
        },
        "index": {
          "description": "similar to withReaderT",
          "hierarchy": "URLT Base",
          "module": "URLT.Base",
          "name": "withURLT",
          "normalized": "((a-\u003eLink)-\u003eb-\u003eLink)-\u003eURLT b c d-\u003eURLT a c d",
          "package": "URLT",
          "partial": "URLT",
          "signature": "((url'-\u003eLink)-\u003eurl-\u003eLink)-\u003eURLT url m a-\u003eURLT url' m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:withURLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "HandleT",
          "package": "URLT",
          "source": "src/URLT-HandleT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "HandleT",
          "package": "URLT",
          "partial": "Handle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "Site",
          "package": "URLT",
          "source": "src/URLT-HandleT.html#Site",
          "type": "data"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "Site",
          "package": "URLT",
          "partial": "Site",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#t:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "Site",
          "package": "URLT",
          "signature": "Site",
          "source": "src/URLT-HandleT.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "Site",
          "package": "URLT",
          "partial": "Site",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:Site"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "defaultPage",
          "package": "URLT",
          "signature": "link",
          "source": "src/URLT-HandleT.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "defaultPage",
          "package": "URLT",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:defaultPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "formatLink",
          "package": "URLT",
          "signature": "link -\u003e url",
          "source": "src/URLT-HandleT.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "formatLink",
          "normalized": "a-\u003eb",
          "package": "URLT",
          "partial": "Link",
          "signature": "link-\u003eurl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:formatLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "handleLink",
          "package": "URLT",
          "signature": "link -\u003e URLT link m a",
          "source": "src/URLT-HandleT.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "handleLink",
          "normalized": "a-\u003eURLT a b c",
          "package": "URLT",
          "partial": "Link",
          "signature": "link-\u003eURLT link m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:handleLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "parseLink",
          "package": "URLT",
          "signature": "url -\u003e Failing link",
          "source": "src/URLT-HandleT.html#Site",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "parseLink",
          "normalized": "a-\u003eFailing b",
          "package": "URLT",
          "partial": "Link",
          "signature": "url-\u003eFailing link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:parseLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.HandleT",
          "name": "runSite",
          "package": "URLT",
          "signature": "String -\u003e Site link Link m a -\u003e Link -\u003e m (Failing a)",
          "source": "src/URLT-HandleT.html#runSite",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT HandleT",
          "module": "URLT.HandleT",
          "name": "runSite",
          "normalized": "String-\u003eSite a Link b c-\u003eLink-\u003eb(Failing c)",
          "package": "URLT",
          "partial": "Site",
          "signature": "String-\u003eSite link Link m a-\u003eLink-\u003em(Failing a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:runSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Happstack",
          "name": "Happstack",
          "package": "URLT",
          "source": "src/URLT-Happstack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT Happstack",
          "module": "URLT.Happstack",
          "name": "Happstack",
          "package": "URLT",
          "partial": "Happstack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Happstack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Happstack",
          "name": "implSite",
          "package": "URLT",
          "signature": "String -\u003e String -\u003e Site link Link (ServerPartT m) a -\u003e ServerPartT m a",
          "source": "src/URLT-Happstack.html#implSite",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT Happstack",
          "module": "URLT.Happstack",
          "name": "implSite",
          "normalized": "String-\u003eString-\u003eSite a Link(ServerPartT b)c-\u003eServerPartT b c",
          "package": "URLT",
          "partial": "Site",
          "signature": "String-\u003eString-\u003eSite link Link(ServerPartT m)a-\u003eServerPartT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Happstack.html#v:implSite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.QuickCheck",
          "name": "QuickCheck",
          "package": "URLT",
          "source": "src/URLT-QuickCheck.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT QuickCheck",
          "module": "URLT.QuickCheck",
          "name": "QuickCheck",
          "package": "URLT",
          "partial": "Quick Check",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-QuickCheck.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.QuickCheck",
          "name": "asURLInverse_prop",
          "package": "URLT",
          "signature": "url -\u003e Bool",
          "source": "src/URLT-QuickCheck.html#asURLInverse_prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT QuickCheck",
          "module": "URLT.QuickCheck",
          "name": "asURLInverse_prop",
          "normalized": "a-\u003eBool",
          "package": "URLT",
          "partial": "URLInverse",
          "signature": "url-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-QuickCheck.html#v:asURLInverse_prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Regular",
          "name": "Regular",
          "package": "URLT",
          "source": "src/URLT-Regular.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT Regular",
          "module": "URLT.Regular",
          "name": "Regular",
          "package": "URLT",
          "partial": "Regular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Regular",
          "name": "GToURL",
          "package": "URLT",
          "source": "src/URLT-Regular.html#GToURL",
          "type": "class"
        },
        "index": {
          "hierarchy": "URLT Regular",
          "module": "URLT.Regular",
          "name": "GToURL",
          "package": "URLT",
          "partial": "GTo URL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#t:GToURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Regular",
          "name": "gfromURLC",
          "package": "URLT",
          "signature": "Consumer String (Failing (f a))",
          "source": "src/URLT-Regular.html#gfromURLC",
          "type": "method"
        },
        "index": {
          "hierarchy": "URLT Regular",
          "module": "URLT.Regular",
          "name": "gfromURLC",
          "package": "URLT",
          "partial": "URLC",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#v:gfromURLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.Regular",
          "name": "gtoURLS",
          "package": "URLT",
          "signature": "f a -\u003e ShowS",
          "source": "src/URLT-Regular.html#gtoURLS",
          "type": "method"
        },
        "index": {
          "hierarchy": "URLT Regular",
          "module": "URLT.Regular",
          "name": "gtoURLS",
          "normalized": "a b-\u003eShowS",
          "package": "URLT",
          "partial": "URLS",
          "signature": "f a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#v:gtoURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "TH",
          "package": "URLT",
          "source": "src/URLT-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "TH",
          "package": "URLT",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "AsURL",
          "package": "URLT",
          "source": "src/URLT-TH.html#AsURL",
          "type": "class"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "AsURL",
          "package": "URLT",
          "partial": "As URL",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#t:AsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "Class",
          "package": "URLT",
          "source": "src/URLT-TH.html#Class",
          "type": "data"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "Class",
          "package": "URLT",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "Tagged",
          "package": "URLT",
          "signature": "Tagged [(Name, Int)] Cxt [Name]",
          "source": "src/URLT-TH.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "Tagged",
          "normalized": "Tagged[(Name,Int)]Cxt[Name]",
          "package": "URLT",
          "partial": "Tagged",
          "signature": "Tagged[(Name,Int)]Cxt[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "deriveAsURL",
          "package": "URLT",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/URLT-TH.html#deriveAsURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "deriveAsURL",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "URLT",
          "partial": "As URL",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:deriveAsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "fromURL",
          "package": "URLT",
          "signature": "String -\u003e Failing a",
          "source": "src/URLT-TH.html#fromURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "fromURL",
          "normalized": "String-\u003eFailing a",
          "package": "URLT",
          "partial": "URL",
          "signature": "String-\u003eFailing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:fromURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "fromURLC",
          "package": "URLT",
          "signature": "Consumer String (Failing a)",
          "source": "src/URLT-TH.html#fromURLC",
          "type": "method"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "fromURLC",
          "package": "URLT",
          "partial": "URLC",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:fromURLC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "mkType",
          "package": "URLT",
          "signature": "Name -\u003e [TypeQ] -\u003e TypeQ",
          "source": "src/URLT-TH.html#mkType",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "mkType",
          "normalized": "Name-\u003e[TypeQ]-\u003eTypeQ",
          "package": "URLT",
          "partial": "Type",
          "signature": "Name-\u003e[TypeQ]-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:mkType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "parseInfo",
          "package": "URLT",
          "signature": "Name -\u003e Q Class",
          "source": "src/URLT-TH.html#parseInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "parseInfo",
          "normalized": "Name-\u003eQ Class",
          "package": "URLT",
          "partial": "Info",
          "signature": "Name-\u003eQ Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:parseInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "toURL",
          "package": "URLT",
          "signature": "a -\u003e String",
          "source": "src/URLT-TH.html#toURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "toURL",
          "normalized": "a-\u003eString",
          "package": "URLT",
          "partial": "URL",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:toURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.TH",
          "name": "toURLS",
          "package": "URLT",
          "signature": "a -\u003e ShowS",
          "source": "src/URLT-TH.html#toURLS",
          "type": "method"
        },
        "index": {
          "hierarchy": "URLT TH",
          "module": "URLT.TH",
          "name": "toURLS",
          "normalized": "a-\u003eShowS",
          "package": "URLT",
          "partial": "URLS",
          "signature": "a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:toURLS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.XMLGenT",
          "name": "XMLGenT",
          "package": "URLT",
          "source": "src/URLT-XMLGenT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT XMLGenT",
          "module": "URLT.XMLGenT",
          "name": "XMLGenT",
          "package": "URLT",
          "partial": "XMLGen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-XMLGenT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT.XMLGenT",
          "name": "flattenCDATA",
          "package": "URLT",
          "signature": "[XML] -\u003e [XML]",
          "source": "src/URLT-XMLGenT.html#flattenCDATA",
          "type": "function"
        },
        "index": {
          "hierarchy": "URLT XMLGenT",
          "module": "URLT.XMLGenT",
          "name": "flattenCDATA",
          "normalized": "[XML]-\u003e[XML]",
          "package": "URLT",
          "partial": "CDATA",
          "signature": "[XML]-\u003e[XML]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-XMLGenT.html#v:flattenCDATA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "URLT",
          "name": "URLT",
          "package": "URLT",
          "source": "src/URLT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "URLT",
          "module": "URLT",
          "name": "URLT",
          "package": "URLT",
          "partial": "URLT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/URLT/docs/URLT.html#"
      }
    }
  ]
]