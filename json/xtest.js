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
        "word": "xtest"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.XTest",
          "name": "XTest",
          "package": "xtest",
          "source": "src/Graphics-X11-XTest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "XTest",
          "package": "xtest",
          "partial": "XTest",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate fake mouse button click event.\n\u003c/p\u003e",
          "module": "Graphics.X11.XTest",
          "name": "fakeButtonPress",
          "package": "xtest",
          "signature": "Display-\u003e Button-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create fake mouse button click event",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "fakeButtonPress",
          "normalized": "Display-\u003eButton-\u003eIO()",
          "package": "xtest",
          "partial": "Button Press",
          "signature": "Display-\u003eButton-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:fakeButtonPress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate fake pointer motion event.\n\u003c/p\u003e",
          "module": "Graphics.X11.XTest",
          "name": "fakeMotion",
          "package": "xtest",
          "signature": "Display-\u003e ScreenNumber-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Create fake pointer motion event",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "fakeMotion",
          "normalized": "Display-\u003eScreenNumber-\u003eInt-\u003eInt-\u003eIO()",
          "package": "xtest",
          "partial": "Motion",
          "signature": "Display-\u003eScreenNumber-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:fakeMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove mouse pointer.\n\u003c/p\u003e",
          "module": "Graphics.X11.XTest",
          "name": "movePointer",
          "package": "xtest",
          "signature": "Display-\u003e ScreenNumber-\u003e XID-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Move mouse pointer",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "movePointer",
          "normalized": "Display-\u003eScreenNumber-\u003eXID-\u003eInt-\u003eInt-\u003eIO()",
          "package": "xtest",
          "partial": "Pointer",
          "signature": "Display-\u003eScreenNumber-\u003eXID-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:movePointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk the X server if XTest extension is supported.\n Returns Nothing, if extension is not supported.\n Otherwise, it returns:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Event number for the first event for this extension (undefined for current version of XTest).\n\u003c/li\u003e\u003cli\u003e Error number for the first error for this extension (undefined for current version of XTest).\n\u003c/li\u003e\u003cli\u003e Major and\n\u003c/li\u003e\u003cli\u003e minor versions of the extension.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Graphics.X11.XTest",
          "name": "queryXTestSupport",
          "package": "xtest",
          "signature": "Display -\u003e IO (Maybe (Int, Int, Int, Int))",
          "source": "src/Graphics-X11-XTest.html#queryXTestSupport",
          "type": "function"
        },
        "index": {
          "description": "Ask the server if XTest extension is supported Returns Nothing if extension is not supported Otherwise it returns Event number for the first event for this extension undefined for current version of XTest Error number for the first error for this extension undefined for current version of XTest Major and minor versions of the extension",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "queryXTestSupport",
          "normalized": "Display-\u003eIO(Maybe(Int,Int,Int,Int))",
          "package": "xtest",
          "partial": "XTest Support",
          "signature": "Display-\u003eIO(Maybe(Int,Int,Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:queryXTestSupport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend fake key press\n\u003c/p\u003e",
          "module": "Graphics.X11.XTest",
          "name": "sendKey",
          "package": "xtest",
          "signature": "Display-\u003e [KeySym]-\u003e KeySym-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Send fake key press",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "sendKey",
          "normalized": "Display-\u003e[KeySym]-\u003eKeySym-\u003eIO()",
          "package": "xtest",
          "partial": "Key",
          "signature": "Display-\u003e[KeySym]-\u003eKeySym-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:sendKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform some IO actions while control grabbed by XTest\n\u003c/p\u003e",
          "module": "Graphics.X11.XTest",
          "name": "withGrabbedControl",
          "package": "xtest",
          "signature": "Display -\u003e IO a -\u003e IO a",
          "source": "src/Graphics-X11-XTest.html#withGrabbedControl",
          "type": "function"
        },
        "index": {
          "description": "Perform some IO actions while control grabbed by XTest",
          "hierarchy": "Graphics X11 XTest",
          "module": "Graphics.X11.XTest",
          "name": "withGrabbedControl",
          "normalized": "Display-\u003eIO a-\u003eIO a",
          "package": "xtest",
          "partial": "Grabbed Control",
          "signature": "Display-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xtest/docs/Graphics-X11-XTest.html#v:withGrabbedControl"
      }
    }
  ]
]