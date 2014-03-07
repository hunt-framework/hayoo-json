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
        "word": "tianbar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA hook for XMonad window manager to send updates to the\n corresponding Tianbar widget.\n\u003c/p\u003e\u003cp\u003eYou must include tianbar:scripts/xmonad.js in Tianbar configuration to\n receive the updates.\n\u003c/p\u003e\u003cp\u003eA \u003ca\u003eRenderer\u003c/a\u003e can be used to fully customize the output. A renderer is a\n function receiving all the status information and returning HTML\n which will be displayed in the corresponding element of the status bar.\n\u003c/p\u003e\u003cp\u003eFor convenience, a renderer returning \u003ccode\u003e\u003ca\u003eMarkup\u003c/a\u003e\u003c/code\u003e can be used as well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "XMonadLog",
          "package": "tianbar",
          "source": "src/System-Tianbar-XMonadLog.html",
          "type": "module"
        },
        "index": {
          "description": "hook for XMonad window manager to send updates to the corresponding Tianbar widget You must include tianbar scripts xmonad.js in Tianbar configuration to receive the updates Renderer can be used to fully customize the output renderer is function receiving all the status information and returning HTML which will be displayed in the corresponding element of the status bar For convenience renderer returning Markup can be used as well",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "XMonadLog",
          "package": "tianbar",
          "partial": "XMonad Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Tianbar.XMonadLog",
          "name": "MarkupRenderer",
          "package": "tianbar",
          "source": "src/System-Tianbar-XMonadLog.html#MarkupRenderer",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "MarkupRenderer",
          "package": "tianbar",
          "partial": "Markup Renderer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#t:MarkupRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to format the status information.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "Renderer",
          "package": "tianbar",
          "source": "src/System-Tianbar-XMonadLog.html#Renderer",
          "type": "type"
        },
        "index": {
          "description": "function to format the status information",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "Renderer",
          "package": "tianbar",
          "partial": "Renderer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#t:Renderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorkspace information.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "WindowSpaceInfo",
          "package": "tianbar",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "data"
        },
        "index": {
          "description": "Workspace information",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "WindowSpaceInfo",
          "package": "tianbar",
          "partial": "Window Space Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#t:WindowSpaceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Tianbar.XMonadLog",
          "name": "WindowSpaceInfo",
          "package": "tianbar",
          "signature": "WindowSpaceInfo",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "WindowSpaceInfo",
          "package": "tianbar",
          "partial": "Window Space Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:WindowSpaceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTianbar logger with a default renderer.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLog",
          "package": "tianbar",
          "signature": "Client -\u003e X ()",
          "source": "src/System-Tianbar-XMonadLog.html#dbusLog",
          "type": "function"
        },
        "index": {
          "description": "Tianbar logger with default renderer",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLog",
          "normalized": "Client-\u003eX()",
          "package": "tianbar",
          "partial": "Log",
          "signature": "Client-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:dbusLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTianbar logger with a Blaze renderer.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLogWithMarkup",
          "package": "tianbar",
          "signature": "Client -\u003e MarkupRenderer -\u003e X ()",
          "source": "src/System-Tianbar-XMonadLog.html#dbusLogWithMarkup",
          "type": "function"
        },
        "index": {
          "description": "Tianbar logger with Blaze renderer",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLogWithMarkup",
          "normalized": "Client-\u003eMarkupRenderer-\u003eX()",
          "package": "tianbar",
          "partial": "Log With Markup",
          "signature": "Client-\u003eMarkupRenderer-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:dbusLogWithMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTianbar logger with a renderer emitting a string.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLogWithRenderer",
          "package": "tianbar",
          "signature": "Client -\u003e Renderer String -\u003e X ()",
          "source": "src/System-Tianbar-XMonadLog.html#dbusLogWithRenderer",
          "type": "function"
        },
        "index": {
          "description": "Tianbar logger with renderer emitting string",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "dbusLogWithRenderer",
          "normalized": "Client-\u003eRenderer String-\u003eX()",
          "package": "tianbar",
          "partial": "Log With Renderer",
          "signature": "Client-\u003eRenderer String-\u003eX()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:dbusLogWithRenderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Tianbar renderer.\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "tianbarMarkup",
          "package": "tianbar",
          "signature": "MarkupRenderer",
          "source": "src/System-Tianbar-XMonadLog.html#tianbarMarkup",
          "type": "function"
        },
        "index": {
          "description": "Default Tianbar renderer",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "tianbarMarkup",
          "package": "tianbar",
          "partial": "Markup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:tianbarMarkup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether the workspace is current\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsCurrent",
          "package": "tianbar",
          "signature": "Bool",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "description": "whether the workspace is current",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsCurrent",
          "package": "tianbar",
          "partial": "Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:wsCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether the workspace is empty\n (has no windows)\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsEmpty",
          "package": "tianbar",
          "signature": "Bool",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "description": "whether the workspace is empty has no windows",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsEmpty",
          "package": "tianbar",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:wsEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether the workspace is hidden\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsHidden",
          "package": "tianbar",
          "signature": "Bool",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "description": "whether the workspace is hidden",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsHidden",
          "package": "tianbar",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:wsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eworkspace tag\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsTag",
          "package": "tianbar",
          "signature": "String",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "description": "workspace tag",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsTag",
          "package": "tianbar",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:wsTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhether the workspace has any\n urgent windows\n\u003c/p\u003e",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsUrgent",
          "package": "tianbar",
          "signature": "Bool",
          "source": "src/System-Tianbar-XMonadLog.html#WindowSpaceInfo",
          "type": "function"
        },
        "index": {
          "description": "whether the workspace has any urgent windows",
          "hierarchy": "System Tianbar XMonadLog",
          "module": "System.Tianbar.XMonadLog",
          "name": "wsUrgent",
          "package": "tianbar",
          "partial": "Urgent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tianbar/docs/System-Tianbar-XMonadLog.html#v:wsUrgent"
      }
    }
  ]
]