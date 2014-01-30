[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "Base",
        "normalized": "",
        "package": "URLT",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:Link",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "type",
        "fct-source": "src/URLT-Base.html#Link",
        "fct-type": "type",
        "title": "Link"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "Link",
        "normalized": "",
        "package": "URLT",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:ShowURL",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "class",
        "fct-source": "src/URLT-Base.html#ShowURL",
        "fct-type": "class",
        "title": "ShowURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "ShowURL",
        "normalized": "",
        "package": "URLT",
        "partial": "Show URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#t:URLT",
      "description": {
        "fct-descr": "\u003cp\u003emonad transformer for generating URLs\n\u003c/p\u003e",
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "newtype",
        "fct-source": "src/URLT-Base.html#URLT",
        "fct-type": "newtype",
        "title": "URLT"
      },
      "index": {
        "description": "monad transformer for generating URLs",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "URLT",
        "normalized": "",
        "package": "URLT",
        "partial": "URLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:URLT",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "URLT",
        "fct-source": "src/URLT-Base.html#URLT",
        "fct-type": "function",
        "title": "URLT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "URLT",
        "normalized": "",
        "package": "URLT",
        "partial": "URLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:crossURL",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "(url2 -\u003e url1) -\u003e URLT url1 m (url2 -\u003e Link)",
        "fct-source": "src/URLT-Base.html#crossURL",
        "fct-type": "function",
        "title": "crossURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "crossURL",
        "normalized": "(a-\u003ea)-\u003eURLT a b(a-\u003eLink)",
        "package": "URLT",
        "partial": "URL",
        "signature": "(url-\u003eurl)-\u003eURLT url m(url-\u003eLink)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:mapURLT",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "(m a -\u003e n b) -\u003e URLT url m a -\u003e URLT url n b",
        "fct-source": "src/URLT-Base.html#mapURLT",
        "fct-type": "function",
        "title": "mapURLT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "mapURLT",
        "normalized": "(a b-\u003ec d)-\u003eURLT e a b-\u003eURLT e c d",
        "package": "URLT",
        "partial": "URLT",
        "signature": "(m a-\u003en b)-\u003eURLT url m a-\u003eURLT url n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:nestURL",
      "description": {
        "fct-descr": "\u003cp\u003eused to embed a URLT into a larger parent url\n\u003c/p\u003e",
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "(url2 -\u003e url1) -\u003e URLT url2 m a -\u003e URLT url1 m a",
        "fct-source": "src/URLT-Base.html#nestURL",
        "fct-type": "function",
        "title": "nestURL"
      },
      "index": {
        "description": "used to embed URLT into larger parent url",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "nestURL",
        "normalized": "(a-\u003ea)-\u003eURLT a b c-\u003eURLT a b c",
        "package": "URLT",
        "partial": "URL",
        "signature": "(url-\u003eurl)-\u003eURLT url m a-\u003eURLT url m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:showURL",
      "description": {
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "showURL",
        "fct-source": "src/URLT-Base.html#showURL",
        "fct-type": "method",
        "title": "showURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "showURL",
        "normalized": "",
        "package": "URLT",
        "partial": "URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:unURLT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "ReaderT (url -\u003e Link) m a",
        "fct-source": "src/URLT-Base.html#URLT",
        "fct-type": "function",
        "title": "unURLT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "unURLT",
        "normalized": "ReaderT(a-\u003eLink)b c",
        "package": "URLT",
        "partial": "URLT",
        "signature": "ReaderT(url-\u003eLink)m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Base.html#v:withURLT",
      "description": {
        "fct-descr": "\u003cp\u003esimilar to withReaderT\n\u003c/p\u003e",
        "fct-module": "URLT.Base",
        "fct-package": "URLT",
        "fct-signature": "((url' -\u003e Link) -\u003e url -\u003e Link) -\u003e URLT url m a -\u003e URLT url' m a",
        "fct-source": "src/URLT-Base.html#withURLT",
        "fct-type": "function",
        "title": "withURLT"
      },
      "index": {
        "description": "similar to withReaderT",
        "hierarchy": "URLT Base",
        "module": "URLT.Base",
        "name": "withURLT",
        "normalized": "((a-\u003eLink)-\u003eb-\u003eLink)-\u003eURLT b c d-\u003eURLT a c d",
        "package": "URLT",
        "partial": "URLT",
        "signature": "((url'-\u003eLink)-\u003eurl-\u003eLink)-\u003eURLT url m a-\u003eURLT url' m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#",
      "description": {
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-HandleT.html",
        "fct-type": "module",
        "title": "HandleT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "HandleT",
        "normalized": "",
        "package": "URLT",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#t:Site",
      "description": {
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "data",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "data",
        "title": "Site"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "Site",
        "normalized": "",
        "package": "URLT",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:Site",
      "description": {
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "Site",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "function",
        "title": "Site"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "Site",
        "normalized": "",
        "package": "URLT",
        "partial": "Site",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:defaultPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "link",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "function",
        "title": "defaultPage"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "defaultPage",
        "normalized": "",
        "package": "URLT",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:formatLink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "link -\u003e url",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "function",
        "title": "formatLink"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "formatLink",
        "normalized": "a-\u003eb",
        "package": "URLT",
        "partial": "Link",
        "signature": "link-\u003eurl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:handleLink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "link -\u003e URLT link m a",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "function",
        "title": "handleLink"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "handleLink",
        "normalized": "a-\u003eURLT a b c",
        "package": "URLT",
        "partial": "Link",
        "signature": "link-\u003eURLT link m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:parseLink",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "url -\u003e Failing link",
        "fct-source": "src/URLT-HandleT.html#Site",
        "fct-type": "function",
        "title": "parseLink"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "parseLink",
        "normalized": "a-\u003eFailing b",
        "package": "URLT",
        "partial": "Link",
        "signature": "url-\u003eFailing link"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-HandleT.html#v:runSite",
      "description": {
        "fct-module": "URLT.HandleT",
        "fct-package": "URLT",
        "fct-signature": "String -\u003e Site link Link m a -\u003e Link -\u003e m (Failing a)",
        "fct-source": "src/URLT-HandleT.html#runSite",
        "fct-type": "function",
        "title": "runSite"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT HandleT",
        "module": "URLT.HandleT",
        "name": "runSite",
        "normalized": "String-\u003eSite a Link b c-\u003eLink-\u003eb(Failing c)",
        "package": "URLT",
        "partial": "Site",
        "signature": "String-\u003eSite link Link m a-\u003eLink-\u003em(Failing a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Happstack.html#",
      "description": {
        "fct-module": "URLT.Happstack",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-Happstack.html",
        "fct-type": "module",
        "title": "Happstack"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Happstack",
        "module": "URLT.Happstack",
        "name": "Happstack",
        "normalized": "",
        "package": "URLT",
        "partial": "Happstack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Happstack.html#v:implSite",
      "description": {
        "fct-module": "URLT.Happstack",
        "fct-package": "URLT",
        "fct-signature": "String -\u003e String -\u003e Site link Link (ServerPartT m) a -\u003e ServerPartT m a",
        "fct-source": "src/URLT-Happstack.html#implSite",
        "fct-type": "function",
        "title": "implSite"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Happstack",
        "module": "URLT.Happstack",
        "name": "implSite",
        "normalized": "String-\u003eString-\u003eSite a Link(ServerPartT b)c-\u003eServerPartT b c",
        "package": "URLT",
        "partial": "Site",
        "signature": "String-\u003eString-\u003eSite link Link(ServerPartT m)a-\u003eServerPartT m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-QuickCheck.html#",
      "description": {
        "fct-module": "URLT.QuickCheck",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-QuickCheck.html",
        "fct-type": "module",
        "title": "QuickCheck"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT QuickCheck",
        "module": "URLT.QuickCheck",
        "name": "QuickCheck",
        "normalized": "",
        "package": "URLT",
        "partial": "Quick Check",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-QuickCheck.html#v:asURLInverse_prop",
      "description": {
        "fct-module": "URLT.QuickCheck",
        "fct-package": "URLT",
        "fct-signature": "url -\u003e Bool",
        "fct-source": "src/URLT-QuickCheck.html#asURLInverse_prop",
        "fct-type": "function",
        "title": "asURLInverse_prop"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT QuickCheck",
        "module": "URLT.QuickCheck",
        "name": "asURLInverse_prop",
        "normalized": "a-\u003eBool",
        "package": "URLT",
        "partial": "URLInverse",
        "signature": "url-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#",
      "description": {
        "fct-module": "URLT.Regular",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-Regular.html",
        "fct-type": "module",
        "title": "Regular"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Regular",
        "module": "URLT.Regular",
        "name": "Regular",
        "normalized": "",
        "package": "URLT",
        "partial": "Regular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#t:GToURL",
      "description": {
        "fct-module": "URLT.Regular",
        "fct-package": "URLT",
        "fct-signature": "class",
        "fct-source": "src/URLT-Regular.html#GToURL",
        "fct-type": "class",
        "title": "GToURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Regular",
        "module": "URLT.Regular",
        "name": "GToURL",
        "normalized": "",
        "package": "URLT",
        "partial": "GTo URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#v:gfromURLC",
      "description": {
        "fct-module": "URLT.Regular",
        "fct-package": "URLT",
        "fct-signature": "Consumer String (Failing (f a))",
        "fct-source": "src/URLT-Regular.html#gfromURLC",
        "fct-type": "method",
        "title": "gfromURLC"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Regular",
        "module": "URLT.Regular",
        "name": "gfromURLC",
        "normalized": "",
        "package": "URLT",
        "partial": "URLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-Regular.html#v:gtoURLS",
      "description": {
        "fct-module": "URLT.Regular",
        "fct-package": "URLT",
        "fct-signature": "f a -\u003e ShowS",
        "fct-source": "src/URLT-Regular.html#gtoURLS",
        "fct-type": "method",
        "title": "gtoURLS"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT Regular",
        "module": "URLT.Regular",
        "name": "gtoURLS",
        "normalized": "a b-\u003eShowS",
        "package": "URLT",
        "partial": "URLS",
        "signature": "f a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "TH",
        "normalized": "",
        "package": "URLT",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#t:AsURL",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "class",
        "fct-source": "src/URLT-TH.html#AsURL",
        "fct-type": "class",
        "title": "AsURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "AsURL",
        "normalized": "",
        "package": "URLT",
        "partial": "As URL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#t:Class",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "data",
        "fct-source": "src/URLT-TH.html#Class",
        "fct-type": "data",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "Class",
        "normalized": "",
        "package": "URLT",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:Tagged",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "Tagged [(Name, Int)] Cxt [Name]",
        "fct-source": "src/URLT-TH.html#Class",
        "fct-type": "function",
        "title": "Tagged"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "Tagged",
        "normalized": "Tagged[(Name,Int)]Cxt[Name]",
        "package": "URLT",
        "partial": "Tagged",
        "signature": "Tagged[(Name,Int)]Cxt[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:deriveAsURL",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/URLT-TH.html#deriveAsURL",
        "fct-type": "function",
        "title": "deriveAsURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "deriveAsURL",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "URLT",
        "partial": "As URL",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:fromURL",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "String -\u003e Failing a",
        "fct-source": "src/URLT-TH.html#fromURL",
        "fct-type": "function",
        "title": "fromURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "fromURL",
        "normalized": "String-\u003eFailing a",
        "package": "URLT",
        "partial": "URL",
        "signature": "String-\u003eFailing a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:fromURLC",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "Consumer String (Failing a)",
        "fct-source": "src/URLT-TH.html#fromURLC",
        "fct-type": "method",
        "title": "fromURLC"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "fromURLC",
        "normalized": "",
        "package": "URLT",
        "partial": "URLC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:mkType",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "Name -\u003e [TypeQ] -\u003e TypeQ",
        "fct-source": "src/URLT-TH.html#mkType",
        "fct-type": "function",
        "title": "mkType"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "mkType",
        "normalized": "Name-\u003e[TypeQ]-\u003eTypeQ",
        "package": "URLT",
        "partial": "Type",
        "signature": "Name-\u003e[TypeQ]-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:parseInfo",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "Name -\u003e Q Class",
        "fct-source": "src/URLT-TH.html#parseInfo",
        "fct-type": "function",
        "title": "parseInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "parseInfo",
        "normalized": "Name-\u003eQ Class",
        "package": "URLT",
        "partial": "Info",
        "signature": "Name-\u003eQ Class"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:toURL",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/URLT-TH.html#toURL",
        "fct-type": "function",
        "title": "toURL"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "toURL",
        "normalized": "a-\u003eString",
        "package": "URLT",
        "partial": "URL",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-TH.html#v:toURLS",
      "description": {
        "fct-module": "URLT.TH",
        "fct-package": "URLT",
        "fct-signature": "a -\u003e ShowS",
        "fct-source": "src/URLT-TH.html#toURLS",
        "fct-type": "method",
        "title": "toURLS"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT TH",
        "module": "URLT.TH",
        "name": "toURLS",
        "normalized": "a-\u003eShowS",
        "package": "URLT",
        "partial": "URLS",
        "signature": "a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-XMLGenT.html#",
      "description": {
        "fct-module": "URLT.XMLGenT",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT-XMLGenT.html",
        "fct-type": "module",
        "title": "XMLGenT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT XMLGenT",
        "module": "URLT.XMLGenT",
        "name": "XMLGenT",
        "normalized": "",
        "package": "URLT",
        "partial": "XMLGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT-XMLGenT.html#v:flattenCDATA",
      "description": {
        "fct-module": "URLT.XMLGenT",
        "fct-package": "URLT",
        "fct-signature": "[XML] -\u003e [XML]",
        "fct-source": "src/URLT-XMLGenT.html#flattenCDATA",
        "fct-type": "function",
        "title": "flattenCDATA"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT XMLGenT",
        "module": "URLT.XMLGenT",
        "name": "flattenCDATA",
        "normalized": "[XML]-\u003e[XML]",
        "package": "URLT",
        "partial": "CDATA",
        "signature": "[XML]-\u003e[XML]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/URLT/docs/URLT.html#",
      "description": {
        "fct-module": "URLT",
        "fct-package": "URLT",
        "fct-signature": "module",
        "fct-source": "src/URLT.html",
        "fct-type": "module",
        "title": "URLT"
      },
      "index": {
        "description": "",
        "hierarchy": "URLT",
        "module": "URLT",
        "name": "URLT",
        "normalized": "",
        "package": "URLT",
        "partial": "URLT",
        "signature": ""
      }
    }
  }
]