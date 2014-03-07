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
        "word": "hfov"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHFOV is a library for calculating field of view in a 2D raster grid, such\n as those found in roguelike games.\n\u003c/p\u003e\u003cp\u003eThanks to Greg McIntyre for the original C library to which this Haskell\n library binds. It can be found at \u003ca\u003ehttp://libfov.sourceforge.net/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FOV",
          "name": "FOV",
          "package": "hfov",
          "source": "src/FOV.html",
          "type": "module"
        },
        "index": {
          "description": "HFOV is library for calculating field of view in raster grid such as those found in roguelike games Thanks to Greg McIntyre for the original library to which this Haskell library binds It can be found at http libfov.sourceforge.net wiki",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "FOV",
          "package": "hfov",
          "partial": "FOV",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "Direction",
          "package": "hfov",
          "source": "src/FOV.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Direction",
          "package": "hfov",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpaque data structure for holding information about FOV calculation.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "Settings",
          "package": "hfov",
          "source": "src/FOV.html#Settings",
          "type": "data"
        },
        "index": {
          "description": "Opaque data structure for holding information about FOV calculation",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Settings",
          "package": "hfov",
          "partial": "Settings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#t:Settings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape of the field.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "Shape",
          "package": "hfov",
          "source": "src/FOV.html#Shape",
          "type": "data"
        },
        "index": {
          "description": "Shape of the field",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Shape",
          "package": "hfov",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the field to a circle shape calculated on the fly.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "Circle",
          "package": "hfov",
          "signature": "Circle",
          "source": "src/FOV.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Limit the field to circle shape calculated on the fly",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Circle",
          "package": "hfov",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the field of view to a circle radius R by precalculating the\n circle shape. This consumes memory at the rate of 4*(R+2) bytes per R\n used in calls to fovCircle. Each radius is only calculated once.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "CirclePrecalculate",
          "package": "hfov",
          "signature": "CirclePrecalculate",
          "source": "src/FOV.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Limit the field of view to circle radius by precalculating the circle shape This consumes memory at the rate of bytes per used in calls to fovCircle Each radius is only calculated once",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "CirclePrecalculate",
          "package": "hfov",
          "partial": "Circle Precalculate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:CirclePrecalculate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "East",
          "package": "hfov",
          "signature": "East",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "East",
          "package": "hfov",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "North",
          "package": "hfov",
          "signature": "North",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "North",
          "package": "hfov",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "NorthEast",
          "package": "hfov",
          "signature": "NorthEast",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "NorthEast",
          "package": "hfov",
          "partial": "North East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:NorthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "NorthWest",
          "package": "hfov",
          "signature": "NorthWest",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "NorthWest",
          "package": "hfov",
          "partial": "North West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:NorthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the field to an octagon with maximum radius R.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "Octagon",
          "package": "hfov",
          "signature": "Octagon",
          "source": "src/FOV.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Limit the field to an octagon with maximum radius",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Octagon",
          "package": "hfov",
          "partial": "Octagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:Octagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "South",
          "package": "hfov",
          "signature": "South",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "South",
          "package": "hfov",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "SouthEast",
          "package": "hfov",
          "signature": "SouthEast",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "SouthEast",
          "package": "hfov",
          "partial": "South East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:SouthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "SouthWest",
          "package": "hfov",
          "signature": "SouthWest",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "SouthWest",
          "package": "hfov",
          "partial": "South West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:SouthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the field to an RxR square.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "Square",
          "package": "hfov",
          "signature": "Square",
          "source": "src/FOV.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Limit the field to an RxR square",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "Square",
          "package": "hfov",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FOV",
          "name": "West",
          "package": "hfov",
          "signature": "West",
          "source": "src/FOV.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "West",
          "package": "hfov",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a beam.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "beam",
          "package": "hfov",
          "signature": "Settings-\u003e (Int, Int)-\u003e Int-\u003e Direction-\u003e Float-\u003e (Int -\u003e Int -\u003e IO ())-\u003e (Int -\u003e Int -\u003e IO Bool)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Cast beam",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "beam",
          "normalized": "Settings-\u003e(Int,Int)-\u003eInt-\u003eDirection-\u003eFloat-\u003e(Int-\u003eInt-\u003eIO())-\u003e(Int-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "package": "hfov",
          "signature": "Settings-\u003e(Int,Int)-\u003eInt-\u003eDirection-\u003eFloat-\u003e(Int-\u003eInt-\u003eIO())-\u003e(Int-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:beam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a 360 degree field of view.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "circle",
          "package": "hfov",
          "signature": "Settings-\u003e (Int, Int)-\u003e Int-\u003e (Int -\u003e Int -\u003e IO ())-\u003e (Int -\u003e Int -\u003e IO Bool)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Cast degree field of view",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "circle",
          "normalized": "Settings-\u003e(Int,Int)-\u003eInt-\u003e(Int-\u003eInt-\u003eIO())-\u003e(Int-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "package": "hfov",
          "signature": "Settings-\u003e(Int,Int)-\u003eInt-\u003e(Int-\u003eInt-\u003eIO())-\u003e(Int-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new FOV settings structure.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "newSettings",
          "package": "hfov",
          "signature": "IO Settings",
          "source": "src/FOV.html#newSettings",
          "type": "function"
        },
        "index": {
          "description": "Create new FOV settings structure",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "newSettings",
          "package": "hfov",
          "partial": "Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:newSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets whether or not to apply lighting to opaque squares.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "setOpaqueApply",
          "package": "hfov",
          "signature": "Settings -\u003e Bool -\u003e IO ()",
          "source": "src/FOV.html#setOpaqueApply",
          "type": "function"
        },
        "index": {
          "description": "Sets whether or not to apply lighting to opaque squares",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "setOpaqueApply",
          "normalized": "Settings-\u003eBool-\u003eIO()",
          "package": "hfov",
          "partial": "Opaque Apply",
          "signature": "Settings-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:setOpaqueApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the shape of the field of view. The default is CirclePrecalculate.\n\u003c/p\u003e",
          "module": "FOV",
          "name": "setShape",
          "package": "hfov",
          "signature": "Settings -\u003e Shape -\u003e IO ()",
          "source": "src/FOV.html#setShape",
          "type": "function"
        },
        "index": {
          "description": "Set the shape of the field of view The default is CirclePrecalculate",
          "hierarchy": "FOV",
          "module": "FOV",
          "name": "setShape",
          "normalized": "Settings-\u003eShape-\u003eIO()",
          "package": "hfov",
          "partial": "Shape",
          "signature": "Settings-\u003eShape-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfov/docs/FOV.html#v:setShape"
      }
    }
  ]
]