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
        "word": "scotty-session"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Session",
          "name": "Session",
          "package": "scotty-session",
          "source": "src/Web-Scotty-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Scotty Session",
          "module": "Web.Scotty.Session",
          "name": "Session",
          "package": "scotty-session",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/scotty-session/docs/Web-Scotty-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Scotty.Session",
          "name": "ScottySM",
          "package": "scotty-session",
          "source": "src/Web-Scotty-Session.html#ScottySM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Scotty Session",
          "module": "Web.Scotty.Session",
          "name": "ScottySM",
          "package": "scotty-session",
          "partial": "Scotty SM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/scotty-session/docs/Web-Scotty-Session.html#t:ScottySM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new session manager\n\u003c/p\u003e",
          "module": "Web.Scotty.Session",
          "name": "createSessionManager",
          "package": "scotty-session",
          "signature": "ScottyT e m (ScottySM a)",
          "source": "src/Web-Scotty-Session.html#createSessionManager",
          "type": "function"
        },
        "index": {
          "description": "Create new session manager",
          "hierarchy": "Web Scotty Session",
          "module": "Web.Scotty.Session",
          "name": "createSessionManager",
          "package": "scotty-session",
          "partial": "Session Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-session/docs/Web-Scotty-Session.html#v:createSessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the current users session\n\u003c/p\u003e",
          "module": "Web.Scotty.Session",
          "name": "modifySession",
          "package": "scotty-session",
          "signature": "ScottySM a -\u003e (Maybe a -\u003e Maybe a) -\u003e ActionT e m ()",
          "source": "src/Web-Scotty-Session.html#modifySession",
          "type": "function"
        },
        "index": {
          "description": "Modify the current users session",
          "hierarchy": "Web Scotty Session",
          "module": "Web.Scotty.Session",
          "name": "modifySession",
          "normalized": "ScottySM a-\u003e(Maybe a-\u003eMaybe a)-\u003eActionT b c()",
          "package": "scotty-session",
          "partial": "Session",
          "signature": "ScottySM a-\u003e(Maybe a-\u003eMaybe a)-\u003eActionT e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-session/docs/Web-Scotty-Session.html#v:modifySession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the current users session\n\u003c/p\u003e",
          "module": "Web.Scotty.Session",
          "name": "readSession",
          "package": "scotty-session",
          "signature": "ScottySM a -\u003e ActionT e m (Maybe a)",
          "source": "src/Web-Scotty-Session.html#readSession",
          "type": "function"
        },
        "index": {
          "description": "Read the current users session",
          "hierarchy": "Web Scotty Session",
          "module": "Web.Scotty.Session",
          "name": "readSession",
          "normalized": "ScottySM a-\u003eActionT b c(Maybe a)",
          "package": "scotty-session",
          "partial": "Session",
          "signature": "ScottySM a-\u003eActionT e m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/scotty-session/docs/Web-Scotty-Session.html#v:readSession"
      }
    }
  ]
]