[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e module Main where\n \n import Data.Maybe\n import Network.CGI\n import Network.CGI.Session\n import Network.FastCGI\n \n main = do\n   runSessionCGI \"myapp\" runFastCGI $ do\n     n \u003c- fmap (fromMaybe 0) $ sessionGet \"age\"\n     sessionIns \"age\" 1 (+)\n     output $ show n ++ \" visits to this page.\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI-Session.html",
        "fct-type": "module",
        "title": "Session"
      },
      "index": {
        "description": "Example usage module Main where import Data.Maybe import Network.CGI import Network.CGI.Session import Network.FastCGI main do runSessionCGI myapp runFastCGI do fmap fromMaybe sessionGet age sessionIns age output show visits to this page",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "Session",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:Session",
      "description": {
        "fct-descr": "\u003cp\u003eA session consists of a unique id and a map.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Session.html#Session",
        "fct-type": "data",
        "title": "Session"
      },
      "index": {
        "description": "session consists of unique id and map",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "Session",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:SessionM",
      "description": {
        "fct-descr": "\u003cp\u003eA simple Session monad. Recommend you define your own.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Session.html#SessionM",
        "fct-type": "type",
        "title": "SessionM"
      },
      "index": {
        "description": "simple Session monad Recommend you define your own",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "SessionM",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:SessionName",
      "description": {
        "fct-descr": "\u003cp\u003eThe cookie prefix (e.g. MYHASKELLCOOKIE).\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Session.html#SessionName",
        "fct-type": "type",
        "title": "SessionName"
      },
      "index": {
        "description": "The cookie prefix e.g MYHASKELLCOOKIE",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "SessionName",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Session Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:Sessions",
      "description": {
        "fct-descr": "\u003cp\u003eSessions and unique ids are stored in an MVar.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Session.html#Sessions",
        "fct-type": "type",
        "title": "Sessions"
      },
      "index": {
        "description": "Sessions and unique ids are stored in an MVar",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "Sessions",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Sessions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:Session",
      "description": {
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "Session",
        "fct-source": "src/Network-CGI-Session.html#Session",
        "fct-type": "function",
        "title": "Session"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "Session",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:getSession",
      "description": {
        "fct-descr": "\u003cp\u003eTry to get the current session.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "SessionName -\u003e Sessions -\u003e CGI (Maybe Session)",
        "fct-source": "src/Network-CGI-Session.html#getSession",
        "fct-type": "function",
        "title": "getSession"
      },
      "index": {
        "description": "Try to get the current session",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "getSession",
        "normalized": "SessionName-\u003eSessions-\u003eCGI(Maybe Session)",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": "SessionName-\u003eSessions-\u003eCGI(Maybe Session)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:initSession",
      "description": {
        "fct-descr": "\u003cp\u003eGrab the session or create a new one.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "SessionName -\u003e Sessions -\u003e CGI Session",
        "fct-source": "src/Network-CGI-Session.html#initSession",
        "fct-type": "function",
        "title": "initSession"
      },
      "index": {
        "description": "Grab the session or create new one",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "initSession",
        "normalized": "SessionName-\u003eSessions-\u003eCGI Session",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": "SessionName-\u003eSessions-\u003eCGI Session"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:makeSession",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new session and update the Mvar.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "SessionName -\u003e Sessions -\u003e CGI Session",
        "fct-source": "src/Network-CGI-Session.html#makeSession",
        "fct-type": "function",
        "title": "makeSession"
      },
      "index": {
        "description": "Create new session and update the Mvar",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "makeSession",
        "normalized": "SessionName-\u003eSessions-\u003eCGI Session",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": "SessionName-\u003eSessions-\u003eCGI Session"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:makeSessions",
      "description": {
        "fct-descr": "\u003cp\u003eMake the sessions state.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "IO Sessions",
        "fct-source": "src/Network-CGI-Session.html#makeSessions",
        "fct-type": "function",
        "title": "makeSessions"
      },
      "index": {
        "description": "Make the sessions state",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "makeSessions",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Sessions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:runSession",
      "description": {
        "fct-descr": "\u003cp\u003eSimple session runner.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "Sessions -\u003e SessionM a -\u003e Session -\u003e CGI a",
        "fct-source": "src/Network-CGI-Session.html#runSession",
        "fct-type": "function",
        "title": "runSession"
      },
      "index": {
        "description": "Simple session runner",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "runSession",
        "normalized": "Sessions-\u003eSessionM a-\u003eSession-\u003eCGI a",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": "Sessions-\u003eSessionM a-\u003eSession-\u003eCGI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:runSessionCGI",
      "description": {
        "fct-descr": "\u003cp\u003eInitialise a session state and start a F/CGI process. This is a\n   bit of a pattern so I've included it here for convenience.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "SessionName -\u003e (CGI CGIResult -\u003e IO ()) -\u003e SessionM CGIResult -\u003e IO ()",
        "fct-source": "src/Network-CGI-Session.html#runSessionCGI",
        "fct-type": "function",
        "title": "runSessionCGI"
      },
      "index": {
        "description": "Initialise session state and start CGI process This is bit of pattern so ve included it here for convenience",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "runSessionCGI",
        "normalized": "SessionName-\u003e(CGI CGIResult-\u003eIO())-\u003eSessionM CGIResult-\u003eIO()",
        "package": "cgi-utils",
        "partial": "Session CGI",
        "signature": "SessionName-\u003e(CGI CGIResult-\u003eIO())-\u003eSessionM CGIResult-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sess_id",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "Integer",
        "fct-source": "src/Network-CGI-Session.html#Session",
        "fct-type": "function",
        "title": "sess_id"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sess_id",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sess_values",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "Map String String",
        "fct-source": "src/Network-CGI-Session.html#Session",
        "fct-type": "function",
        "title": "sess_values"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sess_values",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionDel",
      "description": {
        "fct-descr": "\u003cp\u003eSession value deleter.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "String -\u003e SessionM ()",
        "fct-source": "src/Network-CGI-Session.html#sessionDel",
        "fct-type": "function",
        "title": "sessionDel"
      },
      "index": {
        "description": "Session value deleter",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sessionDel",
        "normalized": "String-\u003eSessionM()",
        "package": "cgi-utils",
        "partial": "Del",
        "signature": "String-\u003eSessionM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionGet",
      "description": {
        "fct-descr": "\u003cp\u003eSession value getter.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "String -\u003e SessionM (Maybe a)",
        "fct-source": "src/Network-CGI-Session.html#sessionGet",
        "fct-type": "function",
        "title": "sessionGet"
      },
      "index": {
        "description": "Session value getter",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sessionGet",
        "normalized": "String-\u003eSessionM(Maybe a)",
        "package": "cgi-utils",
        "partial": "Get",
        "signature": "String-\u003eSessionM(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionId",
      "description": {
        "fct-descr": "\u003cp\u003eSession value getter.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "SessionM Integer",
        "fct-source": "src/Network-CGI-Session.html#sessionId",
        "fct-type": "function",
        "title": "sessionId"
      },
      "index": {
        "description": "Session value getter",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sessionId",
        "normalized": "",
        "package": "cgi-utils",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionIns",
      "description": {
        "fct-descr": "\u003cp\u003eSession value inserter/updater.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "String -\u003e a -\u003e (a -\u003e a -\u003e a) -\u003e SessionM ()",
        "fct-source": "src/Network-CGI-Session.html#sessionIns",
        "fct-type": "function",
        "title": "sessionIns"
      },
      "index": {
        "description": "Session value inserter updater",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "sessionIns",
        "normalized": "String-\u003ea-\u003e(a-\u003ea-\u003ea)-\u003eSessionM()",
        "package": "cgi-utils",
        "partial": "Ins",
        "signature": "String-\u003ea-\u003e(a-\u003ea-\u003ea)-\u003eSessionM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:updateSession",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a session in the map.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Session",
        "fct-package": "cgi-utils",
        "fct-signature": "Sessions -\u003e Session -\u003e CGI ()",
        "fct-source": "src/Network-CGI-Session.html#updateSession",
        "fct-type": "function",
        "title": "updateSession"
      },
      "index": {
        "description": "Update session in the map",
        "hierarchy": "Network CGI Session",
        "module": "Network.CGI.Session",
        "name": "updateSession",
        "normalized": "Sessions-\u003eSession-\u003eCGI()",
        "package": "cgi-utils",
        "partial": "Session",
        "signature": "Sessions-\u003eSession-\u003eCGI()"
      }
    }
  }
]