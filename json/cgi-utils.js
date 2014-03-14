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
        "word": "cgi-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e module Main where\n \n import Data.Maybe\n import Network.CGI\n import Network.CGI.Session\n import Network.FastCGI\n \n main = do\n   runSessionCGI \"myapp\" runFastCGI $ do\n     n \u003c- fmap (fromMaybe 0) $ sessionGet \"age\"\n     sessionIns \"age\" 1 (+)\n     output $ show n ++ \" visits to this page.\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "source": "src/Network-CGI-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Example usage module Main where import Data.Maybe import Network.CGI import Network.CGI.Session import Network.FastCGI main do runSessionCGI myapp runFastCGI do fmap fromMaybe sessionGet age sessionIns age output show visits to this page",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA session consists of a unique id and a map.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "source": "src/Network-CGI-Session.html#Session",
          "type": "data"
        },
        "index": {
          "description": "session consists of unique id and map",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "partial": "Session",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple Session monad. Recommend you define your own.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "SessionM",
          "package": "cgi-utils",
          "source": "src/Network-CGI-Session.html#SessionM",
          "type": "type"
        },
        "index": {
          "description": "simple Session monad Recommend you define your own",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "SessionM",
          "package": "cgi-utils",
          "partial": "Session",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:SessionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe cookie prefix (e.g. MYHASKELLCOOKIE).\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "SessionName",
          "package": "cgi-utils",
          "source": "src/Network-CGI-Session.html#SessionName",
          "type": "type"
        },
        "index": {
          "description": "The cookie prefix e.g MYHASKELLCOOKIE",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "SessionName",
          "package": "cgi-utils",
          "partial": "Session Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:SessionName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSessions and unique ids are stored in an MVar.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "Sessions",
          "package": "cgi-utils",
          "source": "src/Network-CGI-Session.html#Sessions",
          "type": "type"
        },
        "index": {
          "description": "Sessions and unique ids are stored in an MVar",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "Sessions",
          "package": "cgi-utils",
          "partial": "Sessions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#t:Sessions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "signature": "Session",
          "source": "src/Network-CGI-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "Session",
          "package": "cgi-utils",
          "partial": "Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:Session"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to get the current session.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "getSession",
          "package": "cgi-utils",
          "signature": "SessionName -\u003e Sessions -\u003e CGI (Maybe Session)",
          "source": "src/Network-CGI-Session.html#getSession",
          "type": "function"
        },
        "index": {
          "description": "Try to get the current session",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "getSession",
          "normalized": "SessionName-\u003eSessions-\u003eCGI(Maybe Session)",
          "package": "cgi-utils",
          "partial": "Session",
          "signature": "SessionName-\u003eSessions-\u003eCGI(Maybe Session)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab the session or create a new one.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "initSession",
          "package": "cgi-utils",
          "signature": "SessionName -\u003e Sessions -\u003e CGI Session",
          "source": "src/Network-CGI-Session.html#initSession",
          "type": "function"
        },
        "index": {
          "description": "Grab the session or create new one",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "initSession",
          "normalized": "SessionName-\u003eSessions-\u003eCGI Session",
          "package": "cgi-utils",
          "partial": "Session",
          "signature": "SessionName-\u003eSessions-\u003eCGI Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:initSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new session and update the Mvar.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "makeSession",
          "package": "cgi-utils",
          "signature": "SessionName -\u003e Sessions -\u003e CGI Session",
          "source": "src/Network-CGI-Session.html#makeSession",
          "type": "function"
        },
        "index": {
          "description": "Create new session and update the Mvar",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "makeSession",
          "normalized": "SessionName-\u003eSessions-\u003eCGI Session",
          "package": "cgi-utils",
          "partial": "Session",
          "signature": "SessionName-\u003eSessions-\u003eCGI Session",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:makeSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the sessions state.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "makeSessions",
          "package": "cgi-utils",
          "signature": "IO Sessions",
          "source": "src/Network-CGI-Session.html#makeSessions",
          "type": "function"
        },
        "index": {
          "description": "Make the sessions state",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "makeSessions",
          "package": "cgi-utils",
          "partial": "Sessions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:makeSessions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple session runner.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "runSession",
          "package": "cgi-utils",
          "signature": "Sessions -\u003e SessionM a -\u003e Session -\u003e CGI a",
          "source": "src/Network-CGI-Session.html#runSession",
          "type": "function"
        },
        "index": {
          "description": "Simple session runner",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "runSession",
          "normalized": "Sessions-\u003eSessionM a-\u003eSession-\u003eCGI a",
          "package": "cgi-utils",
          "partial": "Session",
          "signature": "Sessions-\u003eSessionM a-\u003eSession-\u003eCGI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:runSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialise a session state and start a F/CGI process. This is a\n   bit of a pattern so I've included it here for convenience.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "runSessionCGI",
          "package": "cgi-utils",
          "signature": "SessionName -\u003e (CGI CGIResult -\u003e IO ()) -\u003e SessionM CGIResult -\u003e IO ()",
          "source": "src/Network-CGI-Session.html#runSessionCGI",
          "type": "function"
        },
        "index": {
          "description": "Initialise session state and start CGI process This is bit of pattern so ve included it here for convenience",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "runSessionCGI",
          "normalized": "SessionName-\u003e(CGI CGIResult-\u003eIO())-\u003eSessionM CGIResult-\u003eIO()",
          "package": "cgi-utils",
          "partial": "Session CGI",
          "signature": "SessionName-\u003e(CGI CGIResult-\u003eIO())-\u003eSessionM CGIResult-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:runSessionCGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CGI.Session",
          "name": "sess_id",
          "package": "cgi-utils",
          "signature": "Integer",
          "source": "src/Network-CGI-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sess_id",
          "package": "cgi-utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sess_id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.CGI.Session",
          "name": "sess_values",
          "package": "cgi-utils",
          "signature": "Map String String",
          "source": "src/Network-CGI-Session.html#Session",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sess_values",
          "package": "cgi-utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sess_values"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession value deleter.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "sessionDel",
          "package": "cgi-utils",
          "signature": "String -\u003e SessionM ()",
          "source": "src/Network-CGI-Session.html#sessionDel",
          "type": "function"
        },
        "index": {
          "description": "Session value deleter",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sessionDel",
          "normalized": "String-\u003eSessionM()",
          "package": "cgi-utils",
          "partial": "Del",
          "signature": "String-\u003eSessionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession value getter.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "sessionGet",
          "package": "cgi-utils",
          "signature": "String -\u003e SessionM (Maybe a)",
          "source": "src/Network-CGI-Session.html#sessionGet",
          "type": "function"
        },
        "index": {
          "description": "Session value getter",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sessionGet",
          "normalized": "String-\u003eSessionM(Maybe a)",
          "package": "cgi-utils",
          "partial": "Get",
          "signature": "String-\u003eSessionM(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession value getter.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "sessionId",
          "package": "cgi-utils",
          "signature": "SessionM Integer",
          "source": "src/Network-CGI-Session.html#sessionId",
          "type": "function"
        },
        "index": {
          "description": "Session value getter",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sessionId",
          "package": "cgi-utils",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession value inserter/updater.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "sessionIns",
          "package": "cgi-utils",
          "signature": "String -\u003e a -\u003e (a -\u003e a -\u003e a) -\u003e SessionM ()",
          "source": "src/Network-CGI-Session.html#sessionIns",
          "type": "function"
        },
        "index": {
          "description": "Session value inserter updater",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "sessionIns",
          "normalized": "String-\u003ea-\u003e(a-\u003ea-\u003ea)-\u003eSessionM()",
          "package": "cgi-utils",
          "partial": "Ins",
          "signature": "String-\u003ea-\u003e(a-\u003ea-\u003ea)-\u003eSessionM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:sessionIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a session in the map.\n\u003c/p\u003e",
          "module": "Network.CGI.Session",
          "name": "updateSession",
          "package": "cgi-utils",
          "signature": "Sessions -\u003e Session -\u003e CGI ()",
          "source": "src/Network-CGI-Session.html#updateSession",
          "type": "function"
        },
        "index": {
          "description": "Update session in the map",
          "hierarchy": "Network CGI Session",
          "module": "Network.CGI.Session",
          "name": "updateSession",
          "normalized": "Sessions-\u003eSession-\u003eCGI()",
          "package": "cgi-utils",
          "partial": "Session",
          "signature": "Sessions-\u003eSession-\u003eCGI()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cgi-utils/docs/Network-CGI-Session.html#v:updateSession"
      }
    }
  ]
]