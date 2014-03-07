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
        "word": "xmonad-screenshot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an utility functions for easy and robust workspaces' screen capturing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "WorkspaceScreenshot",
          "package": "xmonad-screenshot",
          "source": "src/XMonad-Util-WorkspaceScreenshot.html",
          "type": "module"
        },
        "index": {
          "description": "Provides an utility functions for easy and robust workspaces screen capturing",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "WorkspaceScreenshot",
          "package": "xmonad-screenshot",
          "partial": "Workspace Screenshot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLayout for resulting capture.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "CapturingLayout",
          "package": "xmonad-screenshot",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#CapturingLayout",
          "type": "data"
        },
        "index": {
          "description": "Layout for resulting capture",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "CapturingLayout",
          "package": "xmonad-screenshot",
          "partial": "Capturing Layout",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#t:CapturingLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "CapturingLayout",
          "package": "xmonad-screenshot",
          "signature": "CapturingLayout",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#CapturingLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "CapturingLayout",
          "package": "xmonad-screenshot",
          "partial": "Capturing Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:CapturingLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture screens from workspaces satisfying given predicate.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "captureWorkspacesWhen",
          "package": "xmonad-screenshot",
          "signature": "(WindowSpace -\u003e X Bool) -\u003e (FilePath -\u003e IO ()) -\u003e CapturingLayout -\u003e X ()",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#captureWorkspacesWhen",
          "type": "function"
        },
        "index": {
          "description": "Capture screens from workspaces satisfying given predicate",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "captureWorkspacesWhen",
          "normalized": "(WindowSpace-\u003eX Bool)-\u003e(FilePath-\u003eIO())-\u003eCapturingLayout-\u003eX()",
          "package": "xmonad-screenshot",
          "partial": "Workspaces When",
          "signature": "(WindowSpace-\u003eX Bool)-\u003e(FilePath-\u003eIO())-\u003eCapturingLayout-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:captureWorkspacesWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture screens from workspaces which id satisfies given predicate.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "captureWorkspacesWhenId",
          "package": "xmonad-screenshot",
          "signature": "(WorkspaceId -\u003e X Bool) -\u003e (FilePath -\u003e IO ()) -\u003e CapturingLayout -\u003e X ()",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#captureWorkspacesWhenId",
          "type": "function"
        },
        "index": {
          "description": "Capture screens from workspaces which id satisfies given predicate",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "captureWorkspacesWhenId",
          "normalized": "(WorkspaceId-\u003eX Bool)-\u003e(FilePath-\u003eIO())-\u003eCapturingLayout-\u003eX()",
          "package": "xmonad-screenshot",
          "partial": "Workspaces When Id",
          "signature": "(WorkspaceId-\u003eX Bool)-\u003e(FilePath-\u003eIO())-\u003eCapturingLayout-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:captureWorkspacesWhenId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault hook. Does nothing.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "defaultHook",
          "package": "xmonad-screenshot",
          "signature": "a -\u003e IO ()",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#defaultHook",
          "type": "function"
        },
        "index": {
          "description": "Default hook Does nothing",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "defaultHook",
          "normalized": "a-\u003eIO()",
          "package": "xmonad-screenshot",
          "partial": "Hook",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:defaultHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault predicate. Accepts every available workspace.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "defaultPredicate",
          "package": "xmonad-screenshot",
          "signature": "a -\u003e X Bool",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#defaultPredicate",
          "type": "function"
        },
        "index": {
          "description": "Default predicate Accepts every available workspace",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "defaultPredicate",
          "normalized": "a-\u003eX Bool",
          "package": "xmonad-screenshot",
          "partial": "Predicate",
          "signature": "a-\u003eX Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:defaultPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum height and maximum width for capture\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "dimensions",
          "package": "xmonad-screenshot",
          "signature": "[Pixbuf] -\u003e IO (Int, Int)",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#CapturingLayout",
          "type": "function"
        },
        "index": {
          "description": "Maximum height and maximum width for capture",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "dimensions",
          "normalized": "[Pixbuf]-\u003eIO(Int,Int)",
          "package": "xmonad-screenshot",
          "signature": "[Pixbuf]-\u003eIO(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:dimensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilling algorithm\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "fill",
          "package": "xmonad-screenshot",
          "signature": "[Pixbuf] -\u003e Pixbuf -\u003e IO ()",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#CapturingLayout",
          "type": "function"
        },
        "index": {
          "description": "Filling algorithm",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "fill",
          "normalized": "[Pixbuf]-\u003ePixbuf-\u003eIO()",
          "package": "xmonad-screenshot",
          "signature": "[Pixbuf]-\u003ePixbuf-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture screens layout horizontally.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "horizontally",
          "package": "xmonad-screenshot",
          "signature": "CapturingLayout",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#horizontally",
          "type": "function"
        },
        "index": {
          "description": "Capture screens layout horizontally",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "horizontally",
          "package": "xmonad-screenshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:horizontally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInit gtk to enable a possibility of capturing workspaces.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "initCapturing",
          "package": "xmonad-screenshot",
          "signature": "IO ()",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#initCapturing",
          "type": "function"
        },
        "index": {
          "description": "Init gtk to enable possibility of capturing workspaces",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "initCapturing",
          "normalized": "IO()",
          "package": "xmonad-screenshot",
          "partial": "Capturing",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:initCapturing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture screens layout vertically.\n\u003c/p\u003e",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "vertically",
          "package": "xmonad-screenshot",
          "signature": "CapturingLayout",
          "source": "src/XMonad-Util-WorkspaceScreenshot-Internal.html#vertically",
          "type": "function"
        },
        "index": {
          "description": "Capture screens layout vertically",
          "hierarchy": "XMonad Util WorkspaceScreenshot",
          "module": "XMonad.Util.WorkspaceScreenshot",
          "name": "vertically",
          "package": "xmonad-screenshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xmonad-screenshot/docs/XMonad-Util-WorkspaceScreenshot.html#v:vertically"
      }
    }
  ]
]