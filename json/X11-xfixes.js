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
        "word": "X11-xfixes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "Xfixes",
          "package": "X11-xfixes",
          "source": "src/Graphics-X11-Xfixes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "Xfixes",
          "package": "X11-xfixes",
          "partial": "Xfixes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "Region",
          "package": "X11-xfixes",
          "source": "src/Graphics-X11-Xfixes.html#Region",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "Region",
          "package": "X11-xfixes",
          "partial": "Region",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#t:Region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "WindowRegion",
          "package": "X11-xfixes",
          "source": "src/Graphics-X11-Xfixes.html#WindowRegion",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "WindowRegion",
          "package": "X11-xfixes",
          "partial": "Window Region",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#t:WindowRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "windowRegionBounding",
          "package": "X11-xfixes",
          "signature": "WindowRegion",
          "source": "src/Graphics-X11-Xfixes.html#windowRegionBounding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "windowRegionBounding",
          "package": "X11-xfixes",
          "partial": "Region Bounding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:windowRegionBounding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "windowRegionClip",
          "package": "X11-xfixes",
          "signature": "WindowRegion",
          "source": "src/Graphics-X11-Xfixes.html#windowRegionClip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "windowRegionClip",
          "package": "X11-xfixes",
          "partial": "Region Clip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:windowRegionClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCopyRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesCopyRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCopyRegion",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Copy Region",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesCopyRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Ptr Rectangle -\u003e CInt -\u003e IO Region",
          "source": "src/Graphics-X11-Xfixes.html#xfixesCreateRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegion",
          "normalized": "Display-\u003ePtr Rectangle-\u003eCInt-\u003eIO Region",
          "package": "X11-xfixes",
          "partial": "Create Region",
          "signature": "Display-\u003ePtr Rectangle-\u003eCInt-\u003eIO Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesCreateRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromBitmap",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Pixmap -\u003e IO Region",
          "source": "src/Graphics-X11-Xfixes.html#xfixesCreateRegionFromBitmap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromBitmap",
          "normalized": "Display-\u003ePixmap-\u003eIO Region",
          "package": "X11-xfixes",
          "partial": "Create Region From Bitmap",
          "signature": "Display-\u003ePixmap-\u003eIO Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesCreateRegionFromBitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromGC",
          "package": "X11-xfixes",
          "signature": "Display -\u003e GC -\u003e IO Region",
          "source": "src/Graphics-X11-Xfixes.html#xfixesCreateRegionFromGC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromGC",
          "normalized": "Display-\u003eGC-\u003eIO Region",
          "package": "X11-xfixes",
          "partial": "Create Region From GC",
          "signature": "Display-\u003eGC-\u003eIO Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesCreateRegionFromGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromWindow",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Window -\u003e WindowRegion -\u003e IO Region",
          "source": "src/Graphics-X11-Xfixes.html#xfixesCreateRegionFromWindow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesCreateRegionFromWindow",
          "normalized": "Display-\u003eWindow-\u003eWindowRegion-\u003eIO Region",
          "package": "X11-xfixes",
          "partial": "Create Region From Window",
          "signature": "Display-\u003eWindow-\u003eWindowRegion-\u003eIO Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesCreateRegionFromWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesDestroyRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesDestroyRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesDestroyRegion",
          "normalized": "Display-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Destroy Region",
          "signature": "Display-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesDestroyRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesExpandRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e CInt -\u003e CInt -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesExpandRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesExpandRegion",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Expand Region",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eCInt-\u003eCInt-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesExpandRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesFetchRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesFetchRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesFetchRegion",
          "normalized": "Display-\u003eRegion-\u003eCInt-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Fetch Region",
          "signature": "Display-\u003eRegion-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesFetchRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesIntersectRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesIntersectRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesIntersectRegion",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Intersect Region",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesIntersectRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesInvertRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Ptr Rectangle -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesInvertRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesInvertRegion",
          "normalized": "Display-\u003eRegion-\u003ePtr Rectangle-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Invert Region",
          "signature": "Display-\u003eRegion-\u003ePtr Rectangle-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesInvertRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesQueryExtension",
          "package": "X11-xfixes",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "src/Graphics-X11-Xfixes.html#xfixesQueryExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesQueryExtension",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-xfixes",
          "partial": "Query Extension",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesQueryExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesQueryVersion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e IO (Maybe (CInt, CInt))",
          "source": "src/Graphics-X11-Xfixes.html#xfixesQueryVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesQueryVersion",
          "normalized": "Display-\u003eIO(Maybe(CInt,CInt))",
          "package": "X11-xfixes",
          "partial": "Query Version",
          "signature": "Display-\u003eIO(Maybe(CInt,CInt))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesQueryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesRegionExtents",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesRegionExtents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesRegionExtents",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Region Extents",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesRegionExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSetGCClipRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e GC -\u003e CInt -\u003e CInt -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesSetGCClipRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSetGCClipRegion",
          "normalized": "Display-\u003eGC-\u003eCInt-\u003eCInt-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Set GCClip Region",
          "signature": "Display-\u003eGC-\u003eCInt-\u003eCInt-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesSetGCClipRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSetRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Ptr Rectangle -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesSetRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSetRegion",
          "normalized": "Display-\u003eRegion-\u003ePtr Rectangle-\u003eCInt-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Set Region",
          "signature": "Display-\u003eRegion-\u003ePtr Rectangle-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesSetRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSubtractRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesSubtractRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesSubtractRegion",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Subtract Region",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesSubtractRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesTranslateRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e CInt -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesTranslateRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesTranslateRegion",
          "normalized": "Display-\u003eRegion-\u003eCInt-\u003eCInt-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Translate Region",
          "signature": "Display-\u003eRegion-\u003eCInt-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesTranslateRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesUnionRegion",
          "package": "X11-xfixes",
          "signature": "Display -\u003e Region -\u003e Region -\u003e Region -\u003e IO ()",
          "source": "src/Graphics-X11-Xfixes.html#xfixesUnionRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics X11 Xfixes",
          "module": "Graphics.X11.Xfixes",
          "name": "xfixesUnionRegion",
          "normalized": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "package": "X11-xfixes",
          "partial": "Union Region",
          "signature": "Display-\u003eRegion-\u003eRegion-\u003eRegion-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/X11-xfixes/docs/Graphics-X11-Xfixes.html#v:xfixesUnionRegion"
      }
    }
  ]
]