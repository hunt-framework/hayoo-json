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
        "word": "X11-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "XineramaScreenInfo",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#XineramaScreenInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "XineramaScreenInfo",
          "package": "X11-extras",
          "partial": "Xinerama Screen Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#t:XineramaScreenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "compiledWithXinerama",
          "package": "X11-extras",
          "signature": "Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#compiledWithXinerama",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "compiledWithXinerama",
          "package": "X11-extras",
          "partial": "With Xinerama",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:compiledWithXinerama"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Wrapper around xineramaQueryScreens that fakes a single screen when\n Xinerama is not active. This is the preferred interface to\n Graphics.X11.Xinerama.\n",
          "module": "Graphics.X11.Xinerama",
          "name": "getScreenInfo",
          "package": "X11-extras",
          "signature": "Display -\u003e IO [Rectangle]",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#getScreenInfo",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around xineramaQueryScreens that fakes single screen when Xinerama is not active This is the preferred interface to Graphics.X11.Xinerama",
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "getScreenInfo",
          "normalized": "Display-\u003eIO[Rectangle]",
          "package": "X11-extras",
          "partial": "Screen Info",
          "signature": "Display-\u003eIO[Rectangle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:getScreenInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaIsActive",
          "package": "X11-extras",
          "signature": "Display -\u003e IO Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#xineramaIsActive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaIsActive",
          "normalized": "Display-\u003eIO Bool",
          "package": "X11-extras",
          "partial": "Is Active",
          "signature": "Display-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:xineramaIsActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryExtension",
          "package": "X11-extras",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#xineramaQueryExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryExtension",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-extras",
          "partial": "Query Extension",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:xineramaQueryExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryScreens",
          "package": "X11-extras",
          "signature": "Display -\u003e IO (Maybe [XineramaScreenInfo])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#xineramaQueryScreens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryScreens",
          "normalized": "Display-\u003eIO(Maybe[XineramaScreenInfo])",
          "package": "X11-extras",
          "partial": "Query Screens",
          "signature": "Display-\u003eIO(Maybe[XineramaScreenInfo])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:xineramaQueryScreens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryVersion",
          "package": "X11-extras",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xinerama.html#xineramaQueryVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xinerama",
          "module": "Graphics.X11.Xinerama",
          "name": "xineramaQueryVersion",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-extras",
          "partial": "Query Version",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xinerama.html#v:xineramaQueryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "ClassHint",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#ClassHint",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "ClassHint",
          "package": "X11-extras",
          "partial": "Class Hint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:ClassHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "Event",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "Event",
          "package": "X11-extras",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "FontSet",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#FontSet",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "FontSet",
          "package": "X11-extras",
          "partial": "Font Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:FontSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "SizeHints",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#SizeHints",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "SizeHints",
          "package": "X11-extras",
          "partial": "Size Hints",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:SizeHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "TextProperty",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#TextProperty",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "TextProperty",
          "package": "X11-extras",
          "partial": "Text Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:TextProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "WindowAttributes",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#WindowAttributes",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "WindowAttributes",
          "package": "X11-extras",
          "partial": "Window Attributes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:WindowAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "WindowChanges",
          "package": "X11-extras",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#WindowChanges",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "WindowChanges",
          "package": "X11-extras",
          "partial": "Window Changes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#t:WindowChanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyButton",
          "package": "X11-extras",
          "signature": "Button",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#anyButton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyButton",
          "package": "X11-extras",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:anyButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyKey",
          "package": "X11-extras",
          "signature": "KeyCode",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#anyKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyKey",
          "package": "X11-extras",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:anyKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyPropertyType",
          "package": "X11-extras",
          "signature": "Atom",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#anyPropertyType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "anyPropertyType",
          "package": "X11-extras",
          "partial": "Property Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:anyPropertyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty16",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e Atom -\u003e CInt -\u003e [Word16] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#changeProperty16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty16",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "package": "X11-extras",
          "partial": "Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:changeProperty16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty32",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e Atom -\u003e CInt -\u003e [Word32] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#changeProperty32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty32",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "package": "X11-extras",
          "partial": "Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:changeProperty32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty8",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e Atom -\u003e CInt -\u003e [Word8] -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#changeProperty8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeProperty8",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "package": "X11-extras",
          "partial": "Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003e[Word]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:changeProperty8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "interface to the X11 library function \u003ctt\u003eXChangeWindowAttributes()\u003c/tt\u003e.\n",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeWindowAttributes",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e AttributeMask -\u003e Ptr SetWindowAttributes -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#changeWindowAttributes",
          "type": "function"
        },
        "index": {
          "description": "interface to the X11 library function XChangeWindowAttributes",
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "changeWindowAttributes",
          "normalized": "Display-\u003eWindow-\u003eAttributeMask-\u003ePtr SetWindowAttributes-\u003eIO()",
          "package": "X11-extras",
          "partial": "Window Attributes",
          "signature": "Display-\u003eWindow-\u003eAttributeMask-\u003ePtr SetWindowAttributes-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:changeWindowAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "configureWindow",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e CULong -\u003e WindowChanges -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#configureWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "configureWindow",
          "normalized": "Display-\u003eWindow-\u003eCULong-\u003eWindowChanges-\u003eIO()",
          "package": "X11-extras",
          "partial": "Window",
          "signature": "Display-\u003eWindow-\u003eCULong-\u003eWindowChanges-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:configureWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "createFontSet",
          "package": "X11-extras",
          "signature": "Display -\u003e String -\u003e IO ([String], String, FontSet)",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#createFontSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "createFontSet",
          "normalized": "Display-\u003eString-\u003eIO([String],String,FontSet)",
          "package": "X11-extras",
          "partial": "Font Set",
          "signature": "Display-\u003eString-\u003eIO([String],String,FontSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:createFontSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "currentTime",
          "package": "X11-extras",
          "signature": "Time",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#currentTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "currentTime",
          "package": "X11-extras",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:currentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "eventName",
          "package": "X11-extras",
          "signature": "Event -\u003e String",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#eventName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "eventName",
          "normalized": "Event-\u003eString",
          "package": "X11-extras",
          "partial": "Name",
          "signature": "Event-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:eventName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "fetchName",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO (Maybe String)",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#fetchName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "fetchName",
          "normalized": "Display-\u003eWindow-\u003eIO(Maybe String)",
          "package": "X11-extras",
          "partial": "Name",
          "signature": "Display-\u003eWindow-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:fetchName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "freeFontSet",
          "package": "X11-extras",
          "signature": "Display -\u003e FontSet -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#freeFontSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "freeFontSet",
          "normalized": "Display-\u003eFontSet-\u003eIO()",
          "package": "X11-extras",
          "partial": "Font Set",
          "signature": "Display-\u003eFontSet-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:freeFontSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "freeStringList",
          "package": "X11-extras",
          "signature": "Ptr CString -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#freeStringList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "freeStringList",
          "normalized": "Ptr CString-\u003eIO()",
          "package": "X11-extras",
          "partial": "String List",
          "signature": "Ptr CString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:freeStringList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getClassHint",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO ClassHint",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getClassHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getClassHint",
          "normalized": "Display-\u003eWindow-\u003eIO ClassHint",
          "package": "X11-extras",
          "partial": "Class Hint",
          "signature": "Display-\u003eWindow-\u003eIO ClassHint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getClassHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getEvent",
          "package": "X11-extras",
          "signature": "XEventPtr -\u003e IO Event",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getEvent",
          "normalized": "XEventPtr-\u003eIO Event",
          "package": "X11-extras",
          "partial": "Event",
          "signature": "XEventPtr-\u003eIO Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getTextProperty",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e IO TextProperty",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getTextProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getTextProperty",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eIO TextProperty",
          "package": "X11-extras",
          "partial": "Text Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eIO TextProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getTextProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getTransientForHint",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO (Maybe Window)",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getTransientForHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getTransientForHint",
          "normalized": "Display-\u003eWindow-\u003eIO(Maybe Window)",
          "package": "X11-extras",
          "partial": "Transient For Hint",
          "signature": "Display-\u003eWindow-\u003eIO(Maybe Window)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getTransientForHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWMNormalHints",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO SizeHints",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getWMNormalHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWMNormalHints",
          "normalized": "Display-\u003eWindow-\u003eIO SizeHints",
          "package": "X11-extras",
          "partial": "WMNormal Hints",
          "signature": "Display-\u003eWindow-\u003eIO SizeHints",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getWMNormalHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The XGetWMProtocols function returns the list of atoms\n stored in the WM_PROTOCOLS property on the specified win\n dow.  These atoms describe window manager protocols in\n which the owner of this window is willing to participate.\n If the property exists, is of type ATOM, is of format 32,\n and the atom WM_PROTOCOLS can be interned, XGetWMProtocols\n sets the protocols_return argument to a list of atoms,\n sets the count_return argument to the number of elements\n in the list, and returns a nonzero status.  Otherwise, it\n sets neither of the return arguments and returns a zero\n status.  To release the list of atoms, use XFree.\n",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWMProtocols",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO [Atom]",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getWMProtocols",
          "type": "function"
        },
        "index": {
          "description": "The XGetWMProtocols function returns the list of atoms stored in the WM PROTOCOLS property on the specified win dow These atoms describe window manager protocols in which the owner of this window is willing to participate If the property exists is of type ATOM is of format and the atom WM PROTOCOLS can be interned XGetWMProtocols sets the protocols return argument to list of atoms sets the count return argument to the number of elements in the list and returns nonzero status Otherwise it sets neither of the return arguments and returns zero status To release the list of atoms use XFree",
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWMProtocols",
          "normalized": "Display-\u003eWindow-\u003eIO[Atom]",
          "package": "X11-extras",
          "partial": "WMProtocols",
          "signature": "Display-\u003eWindow-\u003eIO[Atom]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getWMProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty16",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e Window -\u003e IO (Maybe [Word16])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getWindowProperty16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty16",
          "normalized": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "package": "X11-extras",
          "partial": "Window Property",
          "signature": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getWindowProperty16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty32",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e Window -\u003e IO (Maybe [Word32])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getWindowProperty32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty32",
          "normalized": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "package": "X11-extras",
          "partial": "Window Property",
          "signature": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getWindowProperty32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty8",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e Window -\u003e IO (Maybe [Word8])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#getWindowProperty8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "getWindowProperty8",
          "normalized": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "package": "X11-extras",
          "partial": "Window Property",
          "signature": "Display-\u003eAtom-\u003eWindow-\u003eIO(Maybe[Word])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:getWindowProperty8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isCursorKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isCursorKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isCursorKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Cursor Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isCursorKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isFunctionKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isFunctionKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isFunctionKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Function Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isFunctionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isKeypadKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isKeypadKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isKeypadKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Keypad Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isKeypadKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isMiscFunctionKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isMiscFunctionKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isMiscFunctionKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Misc Function Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isMiscFunctionKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isModifierKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isModifierKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isModifierKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Modifier Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isModifierKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isPFKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isPFKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isPFKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "PFKey",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isPFKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isPrivateKeypadKey",
          "package": "X11-extras",
          "signature": "KeySym -\u003e Bool",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#isPrivateKeypadKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "isPrivateKeypadKey",
          "normalized": "KeySym-\u003eBool",
          "package": "X11-extras",
          "partial": "Private Keypad Key",
          "signature": "KeySym-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:isPrivateKeypadKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "killClient",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#killClient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "killClient",
          "normalized": "Display-\u003eWindow-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Client",
          "signature": "Display-\u003eWindow-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:killClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "none",
          "package": "X11-extras",
          "signature": "XID",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#none",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "none",
          "package": "X11-extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModeAppend",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#propModeAppend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModeAppend",
          "package": "X11-extras",
          "partial": "Mode Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:propModeAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModePrepend",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#propModePrepend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModePrepend",
          "package": "X11-extras",
          "partial": "Mode Prepend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:propModePrepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModeReplace",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#propModeReplace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "propModeReplace",
          "package": "X11-extras",
          "partial": "Mode Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:propModeReplace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "queryTree",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO (Window, Window, [Window])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#queryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "queryTree",
          "normalized": "Display-\u003eWindow-\u003eIO(Window,Window,[Window])",
          "package": "X11-extras",
          "partial": "Tree",
          "signature": "Display-\u003eWindow-\u003eIO(Window,Window,[Window])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:queryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "rawGetWindowProperty",
          "package": "X11-extras",
          "signature": "Int -\u003e Display -\u003e Atom -\u003e Window -\u003e IO (Maybe [a])",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#rawGetWindowProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "rawGetWindowProperty",
          "normalized": "Int-\u003eDisplay-\u003eAtom-\u003eWindow-\u003eIO(Maybe[a])",
          "package": "X11-extras",
          "partial": "Get Window Property",
          "signature": "Int-\u003eDisplay-\u003eAtom-\u003eWindow-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:rawGetWindowProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "refreshKeyboardMapping.  TODO Remove this binding when the fix has been commited to\n X11\n",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "refreshKeyboardMapping",
          "package": "X11-extras",
          "signature": "Event -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#refreshKeyboardMapping",
          "type": "function"
        },
        "index": {
          "description": "refreshKeyboardMapping TODO Remove this binding when the fix has been commited to X11",
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "refreshKeyboardMapping",
          "normalized": "Event-\u003eIO()",
          "package": "X11-extras",
          "partial": "Keyboard Mapping",
          "signature": "Event-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:refreshKeyboardMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setClientMessageEvent",
          "package": "X11-extras",
          "signature": "XEventPtr -\u003e Window -\u003e Atom -\u003e CInt -\u003e Atom -\u003e Time -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#setClientMessageEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setClientMessageEvent",
          "normalized": "XEventPtr-\u003eWindow-\u003eAtom-\u003eCInt-\u003eAtom-\u003eTime-\u003eIO()",
          "package": "X11-extras",
          "partial": "Client Message Event",
          "signature": "XEventPtr-\u003eWindow-\u003eAtom-\u003eCInt-\u003eAtom-\u003eTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:setClientMessageEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setConfigureEvent",
          "package": "X11-extras",
          "signature": "XEventPtr -\u003e Window -\u003e Window -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e Window -\u003e Bool -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#setConfigureEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setConfigureEvent",
          "normalized": "XEventPtr-\u003eWindow-\u003eWindow-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWindow-\u003eBool-\u003eIO()",
          "package": "X11-extras",
          "partial": "Configure Event",
          "signature": "XEventPtr-\u003eWindow-\u003eWindow-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eWindow-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:setConfigureEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setEventType",
          "package": "X11-extras",
          "signature": "XEventPtr -\u003e EventType -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#setEventType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setEventType",
          "normalized": "XEventPtr-\u003eEventType-\u003eIO()",
          "package": "X11-extras",
          "partial": "Event Type",
          "signature": "XEventPtr-\u003eEventType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:setEventType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setSelectionNotify",
          "package": "X11-extras",
          "signature": "XEventPtr -\u003e Window -\u003e Atom -\u003e Atom -\u003e Atom -\u003e Time -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#setSelectionNotify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "setSelectionNotify",
          "normalized": "XEventPtr-\u003eWindow-\u003eAtom-\u003eAtom-\u003eAtom-\u003eTime-\u003eIO()",
          "package": "X11-extras",
          "partial": "Selection Notify",
          "signature": "XEventPtr-\u003eWindow-\u003eAtom-\u003eAtom-\u003eAtom-\u003eTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:setSelectionNotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "unmapWindow",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#unmapWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "unmapWindow",
          "normalized": "Display-\u003eWindow-\u003eIO()",
          "package": "X11-extras",
          "partial": "Window",
          "signature": "Display-\u003eWindow-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:unmapWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsUnmapped",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#waIsUnmapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsUnmapped",
          "package": "X11-extras",
          "partial": "Is Unmapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:waIsUnmapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsUnviewable",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#waIsUnviewable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsUnviewable",
          "package": "X11-extras",
          "partial": "Is Unviewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:waIsUnviewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsViewable",
          "package": "X11-extras",
          "signature": "CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#waIsViewable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "waIsViewable",
          "package": "X11-extras",
          "partial": "Is Viewable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:waIsViewable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcDrawImageString",
          "package": "X11-extras",
          "signature": "Display -\u003e Drawable -\u003e FontSet -\u003e GC -\u003e Position -\u003e Position -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcDrawImageString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcDrawImageString",
          "normalized": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eString-\u003eIO()",
          "package": "X11-extras",
          "partial": "Draw Image String",
          "signature": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcDrawImageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcDrawString",
          "package": "X11-extras",
          "signature": "Display -\u003e Drawable -\u003e FontSet -\u003e GC -\u003e Position -\u003e Position -\u003e String -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcDrawString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcDrawString",
          "normalized": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eString-\u003eIO()",
          "package": "X11-extras",
          "partial": "Draw String",
          "signature": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcDrawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcFreeStringList",
          "package": "X11-extras",
          "signature": "Ptr CWString -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcFreeStringList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcFreeStringList",
          "normalized": "Ptr CWString-\u003eIO()",
          "package": "X11-extras",
          "partial": "Free String List",
          "signature": "Ptr CWString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcFreeStringList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextEscapement",
          "package": "X11-extras",
          "signature": "FontSet -\u003e String -\u003e Int32",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcTextEscapement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextEscapement",
          "normalized": "FontSet-\u003eString-\u003eInt",
          "package": "X11-extras",
          "partial": "Text Escapement",
          "signature": "FontSet-\u003eString-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcTextEscapement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextExtents",
          "package": "X11-extras",
          "signature": "FontSet -\u003e String -\u003e (Rectangle, Rectangle)",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcTextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextExtents",
          "normalized": "FontSet-\u003eString-\u003e(Rectangle,Rectangle)",
          "package": "X11-extras",
          "partial": "Text Extents",
          "signature": "FontSet-\u003eString-\u003e(Rectangle,Rectangle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcTextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextPropertyToTextList",
          "package": "X11-extras",
          "signature": "Display -\u003e TextProperty -\u003e IO [String]",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#wcTextPropertyToTextList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "wcTextPropertyToTextList",
          "normalized": "Display-\u003eTextProperty-\u003eIO[String]",
          "package": "X11-extras",
          "partial": "Text Property To Text List",
          "signature": "Display-\u003eTextProperty-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:wcTextPropertyToTextList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Run an action with the server\n",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "withServer",
          "package": "X11-extras",
          "signature": "Display -\u003e IO () -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#withServer",
          "type": "function"
        },
        "index": {
          "description": "Run an action with the server",
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "withServer",
          "normalized": "Display-\u003eIO()-\u003eIO()",
          "package": "X11-extras",
          "partial": "Server",
          "signature": "Display-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:withServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xChangeProperty",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e Atom -\u003e CInt -\u003e CInt -\u003e Ptr CUChar -\u003e CInt -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xChangeProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xChangeProperty",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003eCInt-\u003ePtr CUChar-\u003eCInt-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Change Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eAtom-\u003eCInt-\u003eCInt-\u003ePtr CUChar-\u003eCInt-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xChangeProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xConfigureWindow",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e CULong -\u003e Ptr WindowChanges -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xConfigureWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xConfigureWindow",
          "normalized": "Display-\u003eWindow-\u003eCULong-\u003ePtr WindowChanges-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Configure Window",
          "signature": "Display-\u003eWindow-\u003eCULong-\u003ePtr WindowChanges-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xConfigureWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xConvertSelection",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e Atom -\u003e Atom -\u003e Window -\u003e Time -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xConvertSelection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xConvertSelection",
          "normalized": "Display-\u003eAtom-\u003eAtom-\u003eAtom-\u003eWindow-\u003eTime-\u003eIO()",
          "package": "X11-extras",
          "partial": "Convert Selection",
          "signature": "Display-\u003eAtom-\u003eAtom-\u003eAtom-\u003eWindow-\u003eTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xConvertSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xCreateFontSet",
          "package": "X11-extras",
          "signature": "Display -\u003e CString -\u003e Ptr (Ptr CString) -\u003e Ptr CInt -\u003e Ptr CString -\u003e IO (Ptr FontSet)",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xCreateFontSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xCreateFontSet",
          "normalized": "Display-\u003eCString-\u003ePtr(Ptr CString)-\u003ePtr CInt-\u003ePtr CString-\u003eIO(Ptr FontSet)",
          "package": "X11-extras",
          "partial": "Create Font Set",
          "signature": "Display-\u003eCString-\u003ePtr(Ptr CString)-\u003ePtr CInt-\u003ePtr CString-\u003eIO(Ptr FontSet)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xCreateFontSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xFetchName",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr CString -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xFetchName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xFetchName",
          "normalized": "Display-\u003eWindow-\u003ePtr CString-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Fetch Name",
          "signature": "Display-\u003eWindow-\u003ePtr CString-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xFetchName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xFree",
          "package": "X11-extras",
          "signature": "Ptr a -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xFree",
          "normalized": "Ptr a-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Free",
          "signature": "Ptr a-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetClassHint",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr ClassHint -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetClassHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetClassHint",
          "normalized": "Display-\u003eWindow-\u003ePtr ClassHint-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get Class Hint",
          "signature": "Display-\u003eWindow-\u003ePtr ClassHint-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetClassHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetSelectionOwner",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e IO Window",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetSelectionOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetSelectionOwner",
          "normalized": "Display-\u003eAtom-\u003eIO Window",
          "package": "X11-extras",
          "partial": "Get Selection Owner",
          "signature": "Display-\u003eAtom-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetSelectionOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetTextProperty",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr TextProperty -\u003e Atom -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetTextProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetTextProperty",
          "normalized": "Display-\u003eWindow-\u003ePtr TextProperty-\u003eAtom-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get Text Property",
          "signature": "Display-\u003eWindow-\u003ePtr TextProperty-\u003eAtom-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetTextProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetTransientForHint",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr Window -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetTransientForHint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetTransientForHint",
          "normalized": "Display-\u003eWindow-\u003ePtr Window-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get Transient For Hint",
          "signature": "Display-\u003eWindow-\u003ePtr Window-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetTransientForHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWMNormalHints",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr SizeHints -\u003e Ptr CLong -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetWMNormalHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWMNormalHints",
          "normalized": "Display-\u003eWindow-\u003ePtr SizeHints-\u003ePtr CLong-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get WMNormal Hints",
          "signature": "Display-\u003eWindow-\u003ePtr SizeHints-\u003ePtr CLong-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetWMNormalHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWMProtocols",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr (Ptr Atom) -\u003e Ptr CInt -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetWMProtocols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWMProtocols",
          "normalized": "Display-\u003eWindow-\u003ePtr(Ptr Atom)-\u003ePtr CInt-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get WMProtocols",
          "signature": "Display-\u003eWindow-\u003ePtr(Ptr Atom)-\u003ePtr CInt-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetWMProtocols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWindowAttributes",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr WindowAttributes -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetWindowAttributes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWindowAttributes",
          "normalized": "Display-\u003eWindow-\u003ePtr WindowAttributes-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get Window Attributes",
          "signature": "Display-\u003eWindow-\u003ePtr WindowAttributes-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetWindowAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWindowProperty",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Atom -\u003e CLong -\u003e CLong -\u003e Bool -\u003e Atom -\u003e Ptr Atom -\u003e Ptr CInt -\u003e Ptr CULong -\u003e Ptr CULong -\u003e Ptr (Ptr CUChar) -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xGetWindowProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xGetWindowProperty",
          "normalized": "Display-\u003eWindow-\u003eAtom-\u003eCLong-\u003eCLong-\u003eBool-\u003eAtom-\u003ePtr Atom-\u003ePtr CInt-\u003ePtr CULong-\u003ePtr CULong-\u003ePtr(Ptr CUChar)-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Get Window Property",
          "signature": "Display-\u003eWindow-\u003eAtom-\u003eCLong-\u003eCLong-\u003eBool-\u003eAtom-\u003ePtr Atom-\u003ePtr CInt-\u003ePtr CULong-\u003ePtr CULong-\u003ePtr(Ptr CUChar)-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xGetWindowProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xQueryTree",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e Ptr Window -\u003e Ptr Window -\u003e Ptr (Ptr Window) -\u003e Ptr CInt -\u003e IO Status",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xQueryTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xQueryTree",
          "normalized": "Display-\u003eWindow-\u003ePtr Window-\u003ePtr Window-\u003ePtr(Ptr Window)-\u003ePtr CInt-\u003eIO Status",
          "package": "X11-extras",
          "partial": "Query Tree",
          "signature": "Display-\u003eWindow-\u003ePtr Window-\u003ePtr Window-\u003ePtr(Ptr Window)-\u003ePtr CInt-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xQueryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xRefreshKeyboardMapping",
          "package": "X11-extras",
          "signature": "Ptr () -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xRefreshKeyboardMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xRefreshKeyboardMapping",
          "normalized": "Ptr()-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Refresh Keyboard Mapping",
          "signature": "Ptr()-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xRefreshKeyboardMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xSetErrorHandler",
          "package": "X11-extras",
          "signature": "IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xSetErrorHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xSetErrorHandler",
          "normalized": "IO()",
          "package": "X11-extras",
          "partial": "Set Error Handler",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xSetErrorHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xSetSelectionOwner",
          "package": "X11-extras",
          "signature": "Display -\u003e Atom -\u003e Window -\u003e Time -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xSetSelectionOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xSetSelectionOwner",
          "normalized": "Display-\u003eAtom-\u003eWindow-\u003eTime-\u003eIO()",
          "package": "X11-extras",
          "partial": "Set Selection Owner",
          "signature": "Display-\u003eAtom-\u003eWindow-\u003eTime-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xSetSelectionOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xUnmapWindow",
          "package": "X11-extras",
          "signature": "Display -\u003e Window -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xUnmapWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xUnmapWindow",
          "normalized": "Display-\u003eWindow-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Unmap Window",
          "signature": "Display-\u003eWindow-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xUnmapWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcDrawImageString",
          "package": "X11-extras",
          "signature": "Display -\u003e Drawable -\u003e FontSet -\u003e GC -\u003e Position -\u003e Position -\u003e CWString -\u003e CInt -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xwcDrawImageString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcDrawImageString",
          "normalized": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eCWString-\u003eCInt-\u003eIO()",
          "package": "X11-extras",
          "partial": "Draw Image String",
          "signature": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eCWString-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xwcDrawImageString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcDrawString",
          "package": "X11-extras",
          "signature": "Display -\u003e Drawable -\u003e FontSet -\u003e GC -\u003e Position -\u003e Position -\u003e CWString -\u003e CInt -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xwcDrawString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcDrawString",
          "normalized": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eCWString-\u003eCInt-\u003eIO()",
          "package": "X11-extras",
          "partial": "Draw String",
          "signature": "Display-\u003eDrawable-\u003eFontSet-\u003eGC-\u003ePosition-\u003ePosition-\u003eCWString-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xwcDrawString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextEscapement",
          "package": "X11-extras",
          "signature": "FontSet -\u003e CWString -\u003e CInt -\u003e IO Int32",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xwcTextEscapement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextEscapement",
          "normalized": "FontSet-\u003eCWString-\u003eCInt-\u003eIO Int",
          "package": "X11-extras",
          "partial": "Text Escapement",
          "signature": "FontSet-\u003eCWString-\u003eCInt-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xwcTextEscapement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextExtents",
          "package": "X11-extras",
          "signature": "FontSet -\u003e CWString -\u003e CInt -\u003e Ptr Rectangle -\u003e Ptr Rectangle -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xwcTextExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextExtents",
          "normalized": "FontSet-\u003eCWString-\u003eCInt-\u003ePtr Rectangle-\u003ePtr Rectangle-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Text Extents",
          "signature": "FontSet-\u003eCWString-\u003eCInt-\u003ePtr Rectangle-\u003ePtr Rectangle-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xwcTextExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextPropertyToTextList",
          "package": "X11-extras",
          "signature": "Display -\u003e Ptr TextProperty -\u003e Ptr (Ptr CWString) -\u003e Ptr CInt -\u003e IO CInt",
          "source": "http://hackage.haskell.org/package/X11-extras/docs/src/Graphics-X11-Xlib-Extras.html#xwcTextPropertyToTextList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xlib Extras",
          "module": "Graphics.X11.Xlib.Extras",
          "name": "xwcTextPropertyToTextList",
          "normalized": "Display-\u003ePtr TextProperty-\u003ePtr(Ptr CWString)-\u003ePtr CInt-\u003eIO CInt",
          "package": "X11-extras",
          "partial": "Text Property To Text List",
          "signature": "Display-\u003ePtr TextProperty-\u003ePtr(Ptr CWString)-\u003ePtr CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-extras/docs/Graphics-X11-Xlib-Extras.html#v:xwcTextPropertyToTextList"
      }
    }
  ]
]