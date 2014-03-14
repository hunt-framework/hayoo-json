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
        "word": "mysnapsession"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "Dialogues",
          "package": "mysnapsession",
          "source": "src/Snap-Dialogues.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "Dialogues",
          "package": "mysnapsession",
          "partial": "Dialogues",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of a \u003ccode\u003e\u003ca\u003eDlg\u003c/a\u003e\u003c/code\u003e type represents a dialogue between the user and the\n    application, after which the application builds a value of type \u003ccode\u003ea\u003c/code\u003e.  The\n    trivial case is that the value is already known.  Alternatively, it may be\n    that there is some action to be performed, or else that the user needs to\n    be asked or told something.\n\u003c/p\u003e",
          "module": "Snap.Dialogues",
          "name": "Dlg",
          "package": "mysnapsession",
          "source": "src/Snap-Dialogues.html#Dlg",
          "type": "data"
        },
        "index": {
          "description": "value of Dlg type represents dialogue between the user and the application after which the application builds value of type The trivial case is that the value is already known Alternatively it may be that there is some action to be performed or else that the user needs to be asked or told something",
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "Dlg",
          "package": "mysnapsession",
          "partial": "Dlg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#t:Dlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "DlgManager",
          "package": "mysnapsession",
          "source": "src/Snap-Dialogues.html#DlgManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "DlgManager",
          "package": "mysnapsession",
          "partial": "Dlg Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#t:DlgManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "HasDlgManager",
          "package": "mysnapsession",
          "source": "src/Snap-Dialogues.html#HasDlgManager",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "HasDlgManager",
          "package": "mysnapsession",
          "partial": "Has Dlg Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#t:HasDlgManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of \u003ccode\u003e\u003ca\u003ePage\u003c/a\u003e\u003c/code\u003e type represents a way of rendering a page, given a request URI\n    that should be used for subsequent requests in order to reassociate them with the\n    current dialogue.\n\u003c/p\u003e",
          "module": "Snap.Dialogues",
          "name": "Page",
          "package": "mysnapsession",
          "source": "src/Snap-Dialogues.html#Page",
          "type": "type"
        },
        "index": {
          "description": "value of Page type represents way of rendering page given request URI that should be used for subsequent requests in order to reassociate them with the current dialogue",
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "Page",
          "package": "mysnapsession",
          "partial": "Page",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "dialogue",
          "package": "mysnapsession",
          "signature": "ByteString -\u003e Dlg m () -\u003e m ()",
          "source": "src/Snap-Dialogues.html#dialogue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "dialogue",
          "normalized": "ByteString-\u003eDlg a()-\u003ea()",
          "package": "mysnapsession",
          "signature": "ByteString-\u003eDlg m()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#v:dialogue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "getDlgManager",
          "package": "mysnapsession",
          "signature": "a -\u003e DlgManager m",
          "source": "src/Snap-Dialogues.html#getDlgManager",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "getDlgManager",
          "normalized": "a-\u003eDlgManager b",
          "package": "mysnapsession",
          "partial": "Dlg Manager",
          "signature": "a-\u003eDlgManager m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#v:getDlgManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Dialogues",
          "name": "makeDlgManager",
          "package": "mysnapsession",
          "signature": "IO (DlgManager m)",
          "source": "src/Snap-Dialogues.html#makeDlgManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "makeDlgManager",
          "package": "mysnapsession",
          "partial": "Dlg Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#v:makeDlgManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts methods for rendering and parsing the result of a page into a\n    \u003ccode\u003e\u003ca\u003eDlg\u003c/a\u003e\u003c/code\u003e step.\n\u003c/p\u003e",
          "module": "Snap.Dialogues",
          "name": "showPage",
          "package": "mysnapsession",
          "signature": "Page m -\u003e m a -\u003e Dlg m a",
          "source": "src/Snap-Dialogues.html#showPage",
          "type": "function"
        },
        "index": {
          "description": "Converts methods for rendering and parsing the result of page into Dlg step",
          "hierarchy": "Snap Dialogues",
          "module": "Snap.Dialogues",
          "name": "showPage",
          "normalized": "Page a-\u003ea b-\u003eDlg a b",
          "package": "mysnapsession",
          "partial": "Page",
          "signature": "Page m-\u003em a-\u003eDlg m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Dialogues.html#v:showPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Client",
          "name": "Client",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap Extension Session Client",
          "module": "Snap.Extension.Session.Client",
          "name": "Client",
          "package": "mysnapsession",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Client",
          "name": "ClientSessionManager",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Client.html#ClientSessionManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Extension Session Client",
          "module": "Snap.Extension.Session.Client",
          "name": "ClientSessionManager",
          "package": "mysnapsession",
          "partial": "Client Session Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Client.html#t:ClientSessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Client",
          "name": "HasClientSessionManager",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Client.html#HasClientSessionManager",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Extension Session Client",
          "module": "Snap.Extension.Session.Client",
          "name": "HasClientSessionManager",
          "package": "mysnapsession",
          "partial": "Has Client Session Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Client.html#t:HasClientSessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Client",
          "name": "clientSessionInitializer",
          "package": "mysnapsession",
          "signature": "Key -\u003e Maybe NominalDiffTime -\u003e IO t -\u003e Initializer (ClientSessionManager t)",
          "source": "src/Snap-Extension-Session-Client.html#clientSessionInitializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session Client",
          "module": "Snap.Extension.Session.Client",
          "name": "clientSessionInitializer",
          "normalized": "Key-\u003eMaybe NominalDiffTime-\u003eIO a-\u003eInitializer(ClientSessionManager a)",
          "package": "mysnapsession",
          "partial": "Session Initializer",
          "signature": "Key-\u003eMaybe NominalDiffTime-\u003eIO t-\u003eInitializer(ClientSessionManager t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Client.html#v:clientSessionInitializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Client",
          "name": "clientSessionMgr",
          "package": "mysnapsession",
          "signature": "a -\u003e ClientSessionManager (ClientSession a)",
          "source": "src/Snap-Extension-Session-Client.html#clientSessionMgr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session Client",
          "module": "Snap.Extension.Session.Client",
          "name": "clientSessionMgr",
          "normalized": "a-\u003eClientSessionManager(ClientSession a)",
          "package": "mysnapsession",
          "partial": "Session Mgr",
          "signature": "a-\u003eClientSessionManager(ClientSession a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Client.html#v:clientSessionMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSnap.Extension.Session.Memory\u003c/code\u003e exports the \u003ccode\u003eMonadSessionMemory\u003c/code\u003e interface\n    which allows you to keep an in-memory session object for each client session\n    of a web application.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Extension.Session.Memory",
          "name": "Memory",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Memory.html",
          "type": "module"
        },
        "index": {
          "description": "Snap.Extension.Session.Memory exports the MonadSessionMemory interface which allows you to keep an in-memory session object for each client session of web application",
          "hierarchy": "Snap Extension Session Memory",
          "module": "Snap.Extension.Session.Memory",
          "name": "Memory",
          "package": "mysnapsession",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Memory",
          "name": "HasMemorySessionManager",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Memory.html#HasMemorySessionManager",
          "type": "class"
        },
        "index": {
          "hierarchy": "Snap Extension Session Memory",
          "module": "Snap.Extension.Session.Memory",
          "name": "HasMemorySessionManager",
          "package": "mysnapsession",
          "partial": "Has Memory Session Manager",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Memory.html#t:HasMemorySessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Memory",
          "name": "MemorySessionManager",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session-Memory.html#MemorySessionManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "Snap Extension Session Memory",
          "module": "Snap.Extension.Session.Memory",
          "name": "MemorySessionManager",
          "package": "mysnapsession",
          "partial": "Memory Session Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Memory.html#t:MemorySessionManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Memory",
          "name": "memorySessionInitializer",
          "package": "mysnapsession",
          "signature": "NominalDiffTime -\u003e IO t -\u003e Initializer (MemorySessionManager t)",
          "source": "src/Snap-Extension-Session-Memory.html#memorySessionInitializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session Memory",
          "module": "Snap.Extension.Session.Memory",
          "name": "memorySessionInitializer",
          "normalized": "NominalDiffTime-\u003eIO a-\u003eInitializer(MemorySessionManager a)",
          "package": "mysnapsession",
          "partial": "Session Initializer",
          "signature": "NominalDiffTime-\u003eIO t-\u003eInitializer(MemorySessionManager t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Memory.html#v:memorySessionInitializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session.Memory",
          "name": "memorySessionMgr",
          "package": "mysnapsession",
          "signature": "a -\u003e MemorySessionManager (MemorySession a)",
          "source": "src/Snap-Extension-Session-Memory.html#memorySessionMgr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session Memory",
          "module": "Snap.Extension.Session.Memory",
          "name": "memorySessionMgr",
          "normalized": "a-\u003eMemorySessionManager(MemorySession a)",
          "package": "mysnapsession",
          "partial": "Session Mgr",
          "signature": "a-\u003eMemorySessionManager(MemorySession a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session-Memory.html#v:memorySessionMgr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eSnap.Extension.Session\u003c/code\u003e exports the \u003ccode\u003e\u003ca\u003eMonadSession\u003c/a\u003e\u003c/code\u003e type class, which allows\n    you to keep a session object for each client session of a web application.\n    Convenience functions are provided for those cases where the session type\n    is a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Extension.Session",
          "name": "Session",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session.html",
          "type": "module"
        },
        "index": {
          "description": "Snap.Extension.Session exports the MonadSession type class which allows you to keep session object for each client session of web application Convenience functions are provided for those cases where the session type is Map",
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "Session",
          "package": "mysnapsession",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type class captures all Snap-related monads that contain a session.\n\u003c/p\u003e",
          "module": "Snap.Extension.Session",
          "name": "MonadSession",
          "package": "mysnapsession",
          "source": "src/Snap-Extension-Session.html#MonadSession",
          "type": "class"
        },
        "index": {
          "description": "This type class captures all Snap-related monads that contain session",
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "MonadSession",
          "package": "mysnapsession",
          "partial": "Monad Session",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#t:MonadSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "clearSession",
          "package": "mysnapsession",
          "signature": "m ()",
          "source": "src/Snap-Extension-Session.html#clearSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "clearSession",
          "normalized": "a()",
          "package": "mysnapsession",
          "partial": "Session",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:clearSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "deleteFromSession",
          "package": "mysnapsession",
          "signature": "k -\u003e m ()",
          "source": "src/Snap-Extension-Session.html#deleteFromSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "deleteFromSession",
          "normalized": "a-\u003eb()",
          "package": "mysnapsession",
          "partial": "From Session",
          "signature": "k-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:deleteFromSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "getFromSession",
          "package": "mysnapsession",
          "signature": "k -\u003e m (Maybe a)",
          "source": "src/Snap-Extension-Session.html#getFromSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "getFromSession",
          "normalized": "a-\u003eb(Maybe c)",
          "package": "mysnapsession",
          "partial": "From Session",
          "signature": "k-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:getFromSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "getSession",
          "package": "mysnapsession",
          "signature": "m (Session m)",
          "source": "src/Snap-Extension-Session.html#getSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "getSession",
          "package": "mysnapsession",
          "partial": "Session",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:getSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert this into your routes to renew sessions on each request.\n\u003c/p\u003e",
          "module": "Snap.Extension.Session",
          "name": "inSession",
          "package": "mysnapsession",
          "signature": "m a -\u003e m a",
          "source": "src/Snap-Extension-Session.html#inSession",
          "type": "function"
        },
        "index": {
          "description": "Insert this into your routes to renew sessions on each request",
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "inSession",
          "normalized": "a b-\u003ea b",
          "package": "mysnapsession",
          "partial": "Session",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:inSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "setInSession",
          "package": "mysnapsession",
          "signature": "k -\u003e a -\u003e m ()",
          "source": "src/Snap-Extension-Session.html#setInSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "setInSession",
          "normalized": "a-\u003eb-\u003ec()",
          "package": "mysnapsession",
          "partial": "In Session",
          "signature": "k-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:setInSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "setSession",
          "package": "mysnapsession",
          "signature": "Session m -\u003e m ()",
          "source": "src/Snap-Extension-Session.html#setSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "setSession",
          "normalized": "Session a-\u003ea()",
          "package": "mysnapsession",
          "partial": "Session",
          "signature": "Session m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:setSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "touchSession",
          "package": "mysnapsession",
          "signature": "m ()",
          "source": "src/Snap-Extension-Session.html#touchSession",
          "type": "method"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "touchSession",
          "normalized": "a()",
          "package": "mysnapsession",
          "partial": "Session",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:touchSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Extension.Session",
          "name": "withSession",
          "package": "mysnapsession",
          "signature": "(Session m -\u003e m a) -\u003e m a",
          "source": "src/Snap-Extension-Session.html#withSession",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Extension Session",
          "module": "Snap.Extension.Session",
          "name": "withSession",
          "normalized": "(Session a-\u003ea b)-\u003ea b",
          "package": "mysnapsession",
          "partial": "Session",
          "signature": "(Session m-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-Extension-Session.html#v:withSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.SessionUtil",
          "name": "SessionUtil",
          "package": "mysnapsession",
          "source": "src/Snap-SessionUtil.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "SessionUtil",
          "package": "mysnapsession",
          "partial": "Session Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSession keys are 64-bit integers with standard numeric type classes.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "SessionKey",
          "package": "mysnapsession",
          "source": "src/Snap-SessionUtil.html#SessionKey",
          "type": "newtype"
        },
        "index": {
          "description": "Session keys are bit integers with standard numeric type classes",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "SessionKey",
          "package": "mysnapsession",
          "partial": "Session Key",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#t:SessionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.SessionUtil",
          "name": "K",
          "package": "mysnapsession",
          "signature": "K Word64",
          "source": "src/Snap-SessionUtil.html#SessionKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "K",
          "package": "mysnapsession",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClears a cookie.  This involves setting the cookie to the empty string,\n    with an expiration time in the past.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "clearCookie",
          "package": "mysnapsession",
          "signature": "ByteString -\u003e m ()",
          "source": "src/Snap-SessionUtil.html#clearCookie",
          "type": "function"
        },
        "index": {
          "description": "Clears cookie This involves setting the cookie to the empty string with an expiration time in the past",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "clearCookie",
          "normalized": "ByteString-\u003ea()",
          "package": "mysnapsession",
          "partial": "Cookie",
          "signature": "ByteString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:clearCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that we're at the top level of a request, and expect that it be a\n    directory.  As with standard HTTP behavior, if a path to a directory is\n    given and the request URI doesn't end in a slash, then the user is\n    redirected to a path ending in a slash.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "ifTopDir",
          "package": "mysnapsession",
          "signature": "m a -\u003e m a",
          "source": "src/Snap-SessionUtil.html#ifTopDir",
          "type": "function"
        },
        "index": {
          "description": "Ensure that we re at the top level of request and expect that it be directory As with standard HTTP behavior if path to directory is given and the request URI doesn end in slash then the user is redirected to path ending in slash",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "ifTopDir",
          "normalized": "a b-\u003ea b",
          "package": "mysnapsession",
          "partial": "Top Dir",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:ifTopDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that we're at the top level of a request, and expect that it be a\n    file.  If a trailing slash is given, we pass on the request.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "ifTopFile",
          "package": "mysnapsession",
          "signature": "m a -\u003e m a",
          "source": "src/Snap-SessionUtil.html#ifTopFile",
          "type": "function"
        },
        "index": {
          "description": "Ensure that we re at the top level of request and expect that it be file If trailing slash is given we pass on the request",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "ifTopFile",
          "normalized": "a b-\u003ea b",
          "package": "mysnapsession",
          "partial": "Top File",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:ifTopFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieves a cookie, looking first in the response map, and if not there,\n    then in the request.  This ensures that the most recently set cookie is\n    retrieved.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "lookupCookie",
          "package": "mysnapsession",
          "signature": "ByteString -\u003e m (Maybe Cookie)",
          "source": "src/Snap-SessionUtil.html#lookupCookie",
          "type": "function"
        },
        "index": {
          "description": "Retrieves cookie looking first in the response map and if not there then in the request This ensures that the most recently set cookie is retrieved",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "lookupCookie",
          "normalized": "ByteString-\u003ea(Maybe Cookie)",
          "package": "mysnapsession",
          "partial": "Cookie",
          "signature": "ByteString-\u003em(Maybe Cookie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:lookupCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf there is another path component in the request path, pop it off, and\n    pass it as a parameter to the handler.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "popPathTo",
          "package": "mysnapsession",
          "signature": "(ByteString -\u003e m a) -\u003e m a",
          "source": "src/Snap-SessionUtil.html#popPathTo",
          "type": "function"
        },
        "index": {
          "description": "If there is another path component in the request path pop it off and pass it as parameter to the handler",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "popPathTo",
          "normalized": "(ByteString-\u003ea b)-\u003ea b",
          "package": "mysnapsession",
          "partial": "Path To",
          "signature": "(ByteString-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:popPathTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a cookie in both the request and the response.  This modifies the\n    list of cookies in the request, so that later attempts to get cookies will\n    find this one even within the same request.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "setCookie",
          "package": "mysnapsession",
          "signature": "Cookie -\u003e m ()",
          "source": "src/Snap-SessionUtil.html#setCookie",
          "type": "function"
        },
        "index": {
          "description": "Sets cookie in both the request and the response This modifies the list of cookies in the request so that later attempts to get cookies will find this one even within the same request",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "setCookie",
          "normalized": "Cookie-\u003ea()",
          "package": "mysnapsession",
          "partial": "Cookie",
          "signature": "Cookie-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:setCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random key that is not already used in the given map.  Though\n    not technically speaking guaranteed to terminate, this should be fast in\n    practice.\n\u003c/p\u003e",
          "module": "Snap.SessionUtil",
          "name": "uniqueKey",
          "package": "mysnapsession",
          "signature": "Map k a -\u003e IO k",
          "source": "src/Snap-SessionUtil.html#uniqueKey",
          "type": "function"
        },
        "index": {
          "description": "Generates random key that is not already used in the given map Though not technically speaking guaranteed to terminate this should be fast in practice",
          "hierarchy": "Snap SessionUtil",
          "module": "Snap.SessionUtil",
          "name": "uniqueKey",
          "normalized": "Map a b-\u003eIO a",
          "package": "mysnapsession",
          "partial": "Key",
          "signature": "Map k a-\u003eIO k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mysnapsession/docs/Snap-SessionUtil.html#v:uniqueKey"
      }
    }
  ]
]