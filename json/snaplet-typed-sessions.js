[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides an easy to use continuation-backed programming\n    model for interactive web applications, called Snap Dialogues.  A\n    dialogue is a procedural description of an interaction with the\n    user, which generally spans across many requests.  Dialogues are\n    specified in a monadic embedded domain-specific language.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "module",
        "fct-source": "src/Snap-Dialogues.html",
        "fct-type": "module",
        "title": "Dialogues"
      },
      "index": {
        "description": "This module provides an easy to use continuation-backed programming model for interactive web applications called Snap Dialogues dialogue is procedural description of an interaction with the user which generally spans across many requests Dialogues are specified in monadic embedded domain-specific language",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "Dialogues",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Dialogues",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#t:Dlg",
      "description": {
        "fct-descr": "\u003cp\u003eA value of a \u003ccode\u003e\u003ca\u003eDlg\u003c/a\u003e\u003c/code\u003e type represents a (possibly partial) dialogue\n    between the user and the application, producing a result of type\n    \u003ccode\u003ea\u003c/code\u003e.  Dialogues can be composed using the monadic interface to\n    describe complex interactions.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "data",
        "fct-source": "src/Snap-Dialogues.html#Dlg",
        "fct-type": "data",
        "title": "Dlg"
      },
      "index": {
        "description": "value of Dlg type represents possibly partial dialogue between the user and the application producing result of type Dialogues can be composed using the monadic interface to describe complex interactions",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "Dlg",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Dlg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#t:DlgManager",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDlgManager\u003c/a\u003e\u003c/code\u003e is user to keep track of ongoing dialogues with a\n    given user.  One of them should be stored in the user's session.\n    The manager is parameterized on the base and value types for the\n    underlying request handling monad.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "data",
        "fct-source": "src/Snap-Dialogues.html#DlgManager",
        "fct-type": "data",
        "title": "DlgManager"
      },
      "index": {
        "description": "DlgManager is user to keep track of ongoing dialogues with given user One of them should be stored in the user session The manager is parameterized on the base and value types for the underlying request handling monad",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "DlgManager",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Dlg Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#t:HasDlgManager",
      "description": {
        "fct-descr": "\u003cp\u003eThis type class identifies the location of the \u003ccode\u003e\u003ca\u003eDlgManager\u003c/a\u003e\u003c/code\u003e in the\n    session object.  In order to use dialogues, your session type must\n    be an instance of \u003ccode\u003e\u003ca\u003eHasDlgManager\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "class",
        "fct-source": "src/Snap-Dialogues.html#HasDlgManager",
        "fct-type": "class",
        "title": "HasDlgManager"
      },
      "index": {
        "description": "This type class identifies the location of the DlgManager in the session object In order to use dialogues your session type must be an instance of HasDlgManager",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "HasDlgManager",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Has Dlg Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#t:Page",
      "description": {
        "fct-descr": "\u003cp\u003eA value of \u003ccode\u003e\u003ca\u003ePage\u003c/a\u003e\u003c/code\u003e type represents a way of rendering a page, given\n    the request URI for continuing the dialogue in the future.\n    Typically you will build pages using some kind of templating system\n    such as Heist.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "type",
        "fct-source": "src/Snap-Dialogues.html#Page",
        "fct-type": "type",
        "title": "Page"
      },
      "index": {
        "description": "value of Page type represents way of rendering page given the request URI for continuing the dialogue in the future Typically you will build pages using some kind of templating system such as Heist",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "Page",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#v:dialogue",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edialogue\u003c/a\u003e\u003c/code\u003e function builds a \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e that handles a given\n    dialogue.  The URLs of the dialog are of the form \u003ca\u003e.../dlg-55555\u003c/a\u003e,\n    where \u003ca\u003edlg\u003c/a\u003e is the prefix (passed as a parameter) and 55555 is the\n    (numeric) dialogue ID.  Requests to \u003ca\u003e.../dlg\u003c/a\u003e create a new dialogue.\n\u003c/p\u003e\u003cp\u003eIn general, this can be combined in normal ways with other routing\n    constructs, so long as request URIs of the above forms reach this\n    handler.  When pages are served as part of a dialog, their relative\n    paths are passed on to later handlers, so images, stylesheets, etc.\n    can be served using \u003ccode\u003eserveDirectory\u003c/code\u003e just as you normally would.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "ByteString -\u003e Dlg (Handler b v) () -\u003e Handler b v ()",
        "fct-source": "src/Snap-Dialogues.html#dialogue",
        "fct-type": "function",
        "title": "dialogue"
      },
      "index": {
        "description": "The dialogue function builds Handler that handles given dialogue The URLs of the dialog are of the form dlg-55555 where dlg is the prefix passed as parameter and is the numeric dialogue ID Requests to dlg create new dialogue In general this can be combined in normal ways with other routing constructs so long as request URIs of the above forms reach this handler When pages are served as part of dialog their relative paths are passed on to later handlers so images stylesheets etc can be served using serveDirectory just as you normally would",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "dialogue",
        "normalized": "ByteString-\u003eDlg(Handler a b)()-\u003eHandler a b()",
        "package": "snaplet-typed-sessions",
        "partial": "",
        "signature": "ByteString-\u003eDlg(Handler b v)()-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#v:getDlgManager",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the \u003ccode\u003e\u003ca\u003eDlgManager\u003c/a\u003e\u003c/code\u003e from a session object.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "a -\u003e DlgManager b v",
        "fct-source": "src/Snap-Dialogues.html#getDlgManager",
        "fct-type": "method",
        "title": "getDlgManager"
      },
      "index": {
        "description": "Extracts the DlgManager from session object",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "getDlgManager",
        "normalized": "a-\u003eDlgManager b c",
        "package": "snaplet-typed-sessions",
        "partial": "Dlg Manager",
        "signature": "a-\u003eDlgManager b v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#v:makeDlgManager",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eDlgManager\u003c/a\u003e\u003c/code\u003e with the given timeout in seconds for\n    abandoned dialogues.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "Int -\u003e IO (DlgManager b v)",
        "fct-source": "src/Snap-Dialogues.html#makeDlgManager",
        "fct-type": "function",
        "title": "makeDlgManager"
      },
      "index": {
        "description": "Creates new DlgManager with the given timeout in seconds for abandoned dialogues",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "makeDlgManager",
        "normalized": "Int-\u003eIO(DlgManager a b)",
        "package": "snaplet-typed-sessions",
        "partial": "Dlg Manager",
        "signature": "Int-\u003eIO(DlgManager b v)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Dialogues.html#v:showPage",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the combination of rendering and parsing a page into a\n    step of a \u003ccode\u003e\u003ca\u003eDlg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Dialogues",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "Page m -\u003e m a -\u003e Dlg m a",
        "fct-source": "src/Snap-Dialogues.html#showPage",
        "fct-type": "function",
        "title": "showPage"
      },
      "index": {
        "description": "Converts the combination of rendering and parsing page into step of Dlg",
        "hierarchy": "Snap Dialogues",
        "module": "Snap.Dialogues",
        "name": "showPage",
        "normalized": "Page a-\u003ea b-\u003eDlg a b",
        "package": "snaplet-typed-sessions",
        "partial": "Page",
        "signature": "Page m-\u003em a-\u003eDlg m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the client-side cookie-backed implementation of typed\n    sessions.  Because all data is stored on the client, this session\n    back-end is easier to use in load balanced settings, and session\n    timeouts are optional.  All session data is encrypted so that it\n    cannot be read by the client itself.  However, it has the\n    disadvantage of only being able to store serializable data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Client",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-TypedSession-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "This is the client-side cookie-backed implementation of typed sessions Because all data is stored on the client this session back-end is easier to use in load balanced settings and session timeouts are optional All session data is encrypted so that it cannot be read by the client itself However it has the disadvantage of only being able to store serializable data types",
        "hierarchy": "Snap Snaplet TypedSession Client",
        "module": "Snap.Snaplet.TypedSession.Client",
        "name": "Client",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Client.html#t:ClientSessionManager",
      "description": {
        "fct-descr": "\u003cp\u003eThe typed session manager that stores session data directly in\n    encrypted client-side cookies.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Client",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-TypedSession-Client.html#ClientSessionManager",
        "fct-type": "data",
        "title": "ClientSessionManager"
      },
      "index": {
        "description": "The typed session manager that stores session data directly in encrypted client-side cookies",
        "hierarchy": "Snap Snaplet TypedSession Client",
        "module": "Snap.Snaplet.TypedSession.Client",
        "name": "ClientSessionManager",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Client Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Client.html#v:initClientSessions",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer for the cookie-backed typed session snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Client",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "FilePath-\u003e ByteString-\u003e Maybe Int-\u003e IO t-\u003e SnapletInit b (ClientSessionManager t)",
        "fct-type": "function",
        "title": "initClientSessions"
      },
      "index": {
        "description": "Initializer for the cookie-backed typed session snaplet",
        "hierarchy": "Snap Snaplet TypedSession Client",
        "module": "Snap.Snaplet.TypedSession.Client",
        "name": "initClientSessions",
        "normalized": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eIO a-\u003eSnapletInit b(ClientSessionManager a)",
        "package": "snaplet-typed-sessions",
        "partial": "Client Sessions",
        "signature": "FilePath-\u003eByteString-\u003eMaybe Int-\u003eIO t-\u003eSnapletInit b(ClientSessionManager t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Memory.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the server-side memory-backed implementation of typed\n    sessions.  It has the advantage of being able to store arbitrary\n    data structures including functions and other non-serializable data.\n    As a result, though, it is limited to a single server-side process\n    since it's not possible to migrate arbitrary data between nodes.\n    Load balancing with this snaplet requires \u003ca\u003esticky sessions\u003c/a\u003e or a\n    similar technique to ensure that a given client always reaches the\n    same server-side node.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Memory",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-TypedSession-Memory.html",
        "fct-type": "module",
        "title": "Memory"
      },
      "index": {
        "description": "This is the server-side memory-backed implementation of typed sessions It has the advantage of being able to store arbitrary data structures including functions and other non-serializable data As result though it is limited to single server-side process since it not possible to migrate arbitrary data between nodes Load balancing with this snaplet requires sticky sessions or similar technique to ensure that given client always reaches the same server-side node",
        "hierarchy": "Snap Snaplet TypedSession Memory",
        "module": "Snap.Snaplet.TypedSession.Memory",
        "name": "Memory",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Memory.html#t:MemorySessionManager",
      "description": {
        "fct-descr": "\u003cp\u003eA typed session manager that stores session data by session key in\n    a server-side map.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Memory",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "data",
        "fct-source": "src/Snap-Snaplet-TypedSession-Memory.html#MemorySessionManager",
        "fct-type": "data",
        "title": "MemorySessionManager"
      },
      "index": {
        "description": "typed session manager that stores session data by session key in server-side map",
        "hierarchy": "Snap Snaplet TypedSession Memory",
        "module": "Snap.Snaplet.TypedSession.Memory",
        "name": "MemorySessionManager",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Memory Session Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession-Memory.html#v:initMemorySessions",
      "description": {
        "fct-descr": "\u003cp\u003eInitializer for the memory-backed typed session snaplet.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession.Memory",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "FilePath-\u003e ByteString-\u003e Int-\u003e IO t-\u003e SnapletInit b (MemorySessionManager t)",
        "fct-type": "function",
        "title": "initMemorySessions"
      },
      "index": {
        "description": "Initializer for the memory-backed typed session snaplet",
        "hierarchy": "Snap Snaplet TypedSession Memory",
        "module": "Snap.Snaplet.TypedSession.Memory",
        "name": "initMemorySessions",
        "normalized": "FilePath-\u003eByteString-\u003eInt-\u003eIO a-\u003eSnapletInit b(MemorySessionManager a)",
        "package": "snaplet-typed-sessions",
        "partial": "Memory Sessions",
        "signature": "FilePath-\u003eByteString-\u003eInt-\u003eIO t-\u003eSnapletInit b(MemorySessionManager t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the generic interface to the various typed\n    session implementations, including both server-side and client-side\n    typed sessions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "module",
        "fct-source": "src/Snap-Snaplet-TypedSession.html",
        "fct-type": "module",
        "title": "TypedSession"
      },
      "index": {
        "description": "This module provides the generic interface to the various typed session implementations including both server-side and client-side typed sessions",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "TypedSession",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Typed Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#t:HasTypedSession",
      "description": {
        "fct-descr": "\u003cp\u003eThe generic interface to typed session implementations.  Both the\n    client-side and server-side implementations of sessions implement\n    the common interface specified here.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "class",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#HasTypedSession",
        "fct-type": "class",
        "title": "HasTypedSession"
      },
      "index": {
        "description": "The generic interface to typed session implementations Both the client-side and server-side implementations of sessions implement the common interface specified here",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "HasTypedSession",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Has Typed Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:clearSession",
      "description": {
        "fct-descr": "\u003cp\u003eCompletely clears the current session, removing all associated\n        cookies and server-side storage if applicable.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#clearSession",
        "fct-type": "method",
        "title": "clearSession"
      },
      "index": {
        "description": "Completely clears the current session removing all associated cookies and server-side storage if applicable",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "clearSession",
        "normalized": "Handler a b()",
        "package": "snaplet-typed-sessions",
        "partial": "Session",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:deleteFromSession",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a named value from a session that happens to be a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "k -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#deleteFromSession",
        "fct-type": "function",
        "title": "deleteFromSession"
      },
      "index": {
        "description": "Deletes named value from session that happens to be Map",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "deleteFromSession",
        "normalized": "a-\u003eHandler b c()",
        "package": "snaplet-typed-sessions",
        "partial": "From Session",
        "signature": "k-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:getFromSession",
      "description": {
        "fct-descr": "\u003cp\u003eGets a named value from a session that happens to be a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "k -\u003e Handler b v (Maybe a)",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#getFromSession",
        "fct-type": "function",
        "title": "getFromSession"
      },
      "index": {
        "description": "Gets named value from session that happens to be Map",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "getFromSession",
        "normalized": "a-\u003eHandler b c(Maybe d)",
        "package": "snaplet-typed-sessions",
        "partial": "From Session",
        "signature": "k-\u003eHandler b v(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:getSession",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieves the session for the current request, always creating\n        it if necessary.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "Handler b v t",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#getSession",
        "fct-type": "method",
        "title": "getSession"
      },
      "index": {
        "description": "Retrieves the session for the current request always creating it if necessary",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "getSession",
        "normalized": "",
        "package": "snaplet-typed-sessions",
        "partial": "Session",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:setInSession",
      "description": {
        "fct-descr": "\u003cp\u003eSets a named value in a session that happens to be a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "k -\u003e a -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#setInSession",
        "fct-type": "function",
        "title": "setInSession"
      },
      "index": {
        "description": "Sets named value in session that happens to be Map",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "setInSession",
        "normalized": "a-\u003eb-\u003eHandler c d()",
        "package": "snaplet-typed-sessions",
        "partial": "In Session",
        "signature": "k-\u003ea-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:setSession",
      "description": {
        "fct-descr": "\u003cp\u003eStores a new value for the current session.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "t -\u003e Handler b v ()",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#setSession",
        "fct-type": "method",
        "title": "setSession"
      },
      "index": {
        "description": "Stores new value for the current session",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "setSession",
        "normalized": "a-\u003eHandler b c()",
        "package": "snaplet-typed-sessions",
        "partial": "Session",
        "signature": "t-\u003eHandler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:touchSession",
      "description": {
        "fct-descr": "\u003cp\u003eMarks a session as recently used, resetting the session timeout\n        counter.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "Handler b v ()",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#touchSession",
        "fct-type": "method",
        "title": "touchSession"
      },
      "index": {
        "description": "Marks session as recently used resetting the session timeout counter",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "touchSession",
        "normalized": "Handler a b()",
        "package": "snaplet-typed-sessions",
        "partial": "Session",
        "signature": "Handler b v()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snaplet-typed-sessions/docs/Snap-Snaplet-TypedSession.html#v:withSession",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function for gaining access to the session.  The\n    session is touched and then passed to the nested \u003ccode\u003e\u003ca\u003eHandler\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Snaplet.TypedSession",
        "fct-package": "snaplet-typed-sessions",
        "fct-signature": "(t -\u003e Handler b v a) -\u003e Handler b v a",
        "fct-source": "src/Snap-Snaplet-TypedSession.html#withSession",
        "fct-type": "function",
        "title": "withSession"
      },
      "index": {
        "description": "convenience function for gaining access to the session The session is touched and then passed to the nested Handler",
        "hierarchy": "Snap Snaplet TypedSession",
        "module": "Snap.Snaplet.TypedSession",
        "name": "withSession",
        "normalized": "(a-\u003eHandler b c d)-\u003eHandler b c d",
        "package": "snaplet-typed-sessions",
        "partial": "Session",
        "signature": "(t-\u003eHandler b v a)-\u003eHandler b v a"
      }
    }
  }
]