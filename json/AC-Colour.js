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
        "word": "AC-Colour"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e, which stores linear RGB\n  (red, green, blue) colour values where each channel is a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e.\n  It also provides arithmetic over such colours, and a few predefined\n  colours.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Colour.Double",
          "name": "Double",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Double.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Colour which stores linear RGB red green blue colour values where each channel is Double It also provides arithmetic over such colours and few predefined colours",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "Double",
          "package": "AC-Colour",
          "partial": "Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main colour type. It stores three channels (red, green and\n  blue) as linear \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e values normally ranging from 0 to 1.\n  (0 represents minimum intensity, 1 represents maximum. Black is\n  therefore \u003ccode\u003eColour 0 0 0\u003c/code\u003e and white is \u003ccode\u003eColour 1 1 1\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThe channel values are stored as strict, unboxed fields, so\n  operating on \u003ccode\u003eColour\u003c/code\u003es should be quite efficient in time and space.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances provide arithmetic for\n  \u003ccode\u003eColour\u003c/code\u003es. Note that \u003ccode\u003e(*)\u003c/code\u003e acts channel-wise; this is usually what\n  is wanted.\n\u003c/p\u003e",
          "module": "Data.Colour.Double",
          "name": "Colour",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "data"
        },
        "index": {
          "description": "The main colour type It stores three channels red green and blue as linear Double values normally ranging from to represents minimum intensity represents maximum Black is therefore Colour and white is Colour The channel values are stored as strict unboxed fields so operating on Colour should be quite efficient in time and space The Num and Fractional instances provide arithmetic for Colour Note that acts channel-wise this is usually what is wanted",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "Colour",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#t:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "Colour",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:Colour\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:Colour\"]"
        },
        "index": {
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "Colour",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "blue",
          "package": "AC-Colour",
          "signature": "Double",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:blue\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:blue\"]"
        },
        "index": {
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "blue",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Black.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cBlack",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cBlack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cBlack\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cBlack\"]"
        },
        "index": {
          "description": "Constant Black",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cBlack",
          "package": "AC-Colour",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cBlack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Blue.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cBlue",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cBlue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cBlue\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cBlue\"]"
        },
        "index": {
          "description": "Constant Blue",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cBlue",
          "package": "AC-Colour",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cBlue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Cyan.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cCyan",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cCyan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cCyan\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cCyan\"]"
        },
        "index": {
          "description": "Constant Cyan",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cCyan",
          "package": "AC-Colour",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cCyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Green.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cGreen",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cGreen",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cGreen\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cGreen\"]"
        },
        "index": {
          "description": "Constant Green",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cGreen",
          "package": "AC-Colour",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cGreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Magenta.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cMagenta",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cMagenta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cMagenta\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cMagenta\"]"
        },
        "index": {
          "description": "Constant Magenta",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cMagenta",
          "package": "AC-Colour",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cMagenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Red.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cRed",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cRed",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cRed\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cRed\"]"
        },
        "index": {
          "description": "Constant Red",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cRed",
          "package": "AC-Colour",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cRed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: White.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cWhite",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cWhite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cWhite\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cWhite\"]"
        },
        "index": {
          "description": "Constant White",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cWhite",
          "package": "AC-Colour",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cWhite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Yellow.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cYellow",
          "package": "AC-Colour",
          "signature": "Colour",
          "source": "src/Data-Colour-Double.html#cYellow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cYellow\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cYellow\"]"
        },
        "index": {
          "description": "Constant Yellow",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cYellow",
          "package": "AC-Colour",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cYellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a function to collapse a \u003ccode\u003eColour\u003c/code\u003e into a \u003ccode\u003eDouble\u003c/code\u003e. No\n  particular order of application is promised.\n\u003c/p\u003e",
          "module": "Data.Colour.Double",
          "name": "cfold",
          "package": "AC-Colour",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e Colour -\u003e Double",
          "source": "src/Data-Colour-Double.html#cfold",
          "type": "function"
        },
        "index": {
          "description": "Use function to collapse Colour into Double No particular order of application is promised",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cfold",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eColour-\u003eDouble",
          "package": "AC-Colour",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eColour-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003eColour\u003c/code\u003e and clip all channels to the range 0--1\n  inclusive. Any value outside that range will be replaced\n  with the nearest endpoint (i.e., 0 for negative numbers,\n  1 for positive numbers higher than 1). Values inside\n  the range are unaffected.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "clip",
          "package": "AC-Colour",
          "signature": "Colour -\u003e Colour",
          "source": "src/Data-Colour-Double.html#clip",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:clip\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:clip\"]"
        },
        "index": {
          "description": "Take Colour and clip all channels to the range inclusive Any value outside that range will be replaced with the nearest endpoint i.e for negative numbers for positive numbers higher than Values inside the range are unaffected",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "clip",
          "normalized": "Colour-\u003eColour",
          "package": "AC-Colour",
          "signature": "Colour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:clip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every channel in a colour. (Mostly used\n  internally, but exposed here in case it may be useful.)\n\u003c/p\u003e",
          "module": "Data.Colour.Double",
          "name": "cmap",
          "package": "AC-Colour",
          "signature": "(Double -\u003e Double) -\u003e Colour -\u003e Colour",
          "source": "src/Data-Colour-Double.html#cmap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every channel in colour Mostly used internally but exposed here in case it may be useful",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cmap",
          "normalized": "(Double-\u003eDouble)-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Double-\u003eDouble)-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a \u003ccode\u003eColour\u003c/code\u003e by a specified amount. (That is, change the\n  brightness while not affecting the shade.)\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "cscale",
          "package": "AC-Colour",
          "signature": "Double -\u003e Colour -\u003e Colour",
          "source": "src/Data-Colour-Double.html#cscale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cscale\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cscale\"]"
        },
        "index": {
          "description": "Scale Colour by specified amount That is change the brightness while not affecting the shade",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "cscale",
          "normalized": "Double-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "Double-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:cscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is similar to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e. (Mostly used internally,\n  but exposed here in case it may be useful.)\n\u003c/p\u003e",
          "module": "Data.Colour.Double",
          "name": "czip",
          "package": "AC-Colour",
          "signature": "(Double -\u003e Double -\u003e Double) -\u003e Colour -\u003e Colour -\u003e Colour",
          "source": "src/Data-Colour-Double.html#czip",
          "type": "function"
        },
        "index": {
          "description": "This is similar to zipWith Mostly used internally but exposed here in case it may be useful",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "czip",
          "normalized": "(Double-\u003eDouble-\u003eDouble)-\u003eColour-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Double-\u003eDouble-\u003eDouble)-\u003eColour-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:czip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "green",
          "package": "AC-Colour",
          "signature": "Double",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:green\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:green\"]"
        },
        "index": {
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "green",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a \u003ccode\u003eDouble\u003c/code\u003e into a shade of grey. \n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "grey",
          "package": "AC-Colour",
          "signature": "Double -\u003e Colour",
          "source": "src/Data-Colour-Double.html#grey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:grey\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:grey\"]"
        },
        "index": {
          "description": "Turn Double into shade of grey",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "grey",
          "normalized": "Double-\u003eColour",
          "package": "AC-Colour",
          "signature": "Double-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:grey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tuple into a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "pack",
          "package": "AC-Colour",
          "signature": "(Double, Double, Double) -\u003e Colour",
          "source": "src/Data-Colour-Double.html#pack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:pack\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:pack\"]"
        },
        "index": {
          "description": "Convert tuple into Colour",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "pack",
          "normalized": "(Double,Double,Double)-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Double,Double,Double)-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "red",
          "package": "AC-Colour",
          "signature": "Double",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:red\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:red\"]"
        },
        "index": {
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "red",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e into a tuple.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Double\",\"Data.Colour\"]",
          "name": "unpack",
          "package": "AC-Colour",
          "signature": "Colour -\u003e (Double, Double, Double)",
          "source": "src/Data-Colour-Double.html#unpack",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:unpack\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:unpack\"]"
        },
        "index": {
          "description": "Convert Colour into tuple",
          "hierarchy": "Data Colour Double",
          "module": "Data.Colour.Double",
          "name": "unpack",
          "normalized": "Colour-\u003e(Double,Double,Double)",
          "package": "AC-Colour",
          "signature": "Colour-\u003e(Double,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Double.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides 1-dimensional colour maps with\n  smooth (linear) colour blending between control points.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Colour.Map",
          "name": "Map",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Map.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides dimensional colour maps with smooth linear colour blending between control points",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "Map",
          "package": "AC-Colour",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the basic colour map type. It consists of a list of\n  control points, each one being a parameter value and the\n  colour at that parameter value. The colour at other\n  parameter values is linearly interpolated between the\n  control points.\n\u003c/p\u003e\u003cp\u003eParameter values outside the range (i.e., below the first\n  point or above the last point) take the colour of the\n  end control point. This means that in the degenerate\n  case of a single control point, the colour is applied\n  everywhere (and the parameter value is ignored).\n\u003c/p\u003e\u003cp\u003eA map with \u003cem\u003ezero\u003c/em\u003e control points is not permitted.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "ColourMap",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Map.html#ColourMap",
          "type": "type"
        },
        "index": {
          "description": "This is the basic colour map type It consists of list of control points each one being parameter value and the colour at that parameter value The colour at other parameter values is linearly interpolated between the control points Parameter values outside the range i.e below the first point or above the last point take the colour of the end control point This means that in the degenerate case of single control point the colour is applied everywhere and the parameter value is ignored map with zero control points is not permitted",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "ColourMap",
          "package": "AC-Colour",
          "partial": "Colour Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#t:ColourMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a colour map with has optional repeating behaviour using\n  \u003ccode\u003e\u003ca\u003erange_cycle\u003c/a\u003e\u003c/code\u003e above.\n\u003c/p\u003e\u003cp\u003eNotice that the parameter range that gets repeated need not cover\n  the entire range of the underlying \u003ccode\u003e\u003ca\u003eColourMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "FullColourMap",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Map.html#FullColourMap",
          "type": "data"
        },
        "index": {
          "description": "This is colour map with has optional repeating behaviour using range cycle above Notice that the parameter range that gets repeated need not cover the entire range of the underlying ColourMap",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "FullColourMap",
          "package": "AC-Colour",
          "partial": "Full Colour Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#t:FullColourMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColour map which repeats.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "RepeatingMap",
          "package": "AC-Colour",
          "signature": "RepeatingMap (Double, Double) ColourMap",
          "source": "src/Data-Colour-Map.html#FullColourMap",
          "type": "function"
        },
        "index": {
          "description": "Colour map which repeats",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "RepeatingMap",
          "normalized": "RepeatingMap(Double,Double)ColourMap",
          "package": "AC-Colour",
          "partial": "Repeating Map",
          "signature": "RepeatingMap(Double,Double)ColourMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#v:RepeatingMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColour map which does not repeat.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "SimpleMap",
          "package": "AC-Colour",
          "signature": "SimpleMap ColourMap",
          "source": "src/Data-Colour-Map.html#FullColourMap",
          "type": "function"
        },
        "index": {
          "description": "Colour map which does not repeat",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "SimpleMap",
          "package": "AC-Colour",
          "partial": "Simple Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#v:SimpleMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the value of a colour map at a particular\n  parameter value.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "colour_map",
          "package": "AC-Colour",
          "signature": "ColourMap -\u003e Double -\u003e Colour",
          "source": "src/Data-Colour-Map.html#colour_map",
          "type": "function"
        },
        "index": {
          "description": "Compute the value of colour map at particular parameter value",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "colour_map",
          "normalized": "ColourMap-\u003eDouble-\u003eColour",
          "package": "AC-Colour",
          "signature": "ColourMap-\u003eDouble-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#v:colour_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the value of a full colour map at a particular\n  parameter value, similar to \u003ccode\u003e\u003ca\u003ecolour_map\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "full_colour_map",
          "package": "AC-Colour",
          "signature": "FullColourMap -\u003e Double -\u003e Colour",
          "source": "src/Data-Colour-Map.html#full_colour_map",
          "type": "function"
        },
        "index": {
          "description": "Compute the value of full colour map at particular parameter value similar to colour map",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "full_colour_map",
          "normalized": "FullColourMap-\u003eDouble-\u003eColour",
          "package": "AC-Colour",
          "signature": "FullColourMap-\u003eDouble-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#v:full_colour_map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a range and a value, and returns a value inside\n  the given range. If the value is already in the range,\n  it is unchanged. Otherwise it \"wraps around\". For\n  example, if the range is \u003ccode\u003e(0, 1)\u003c/code\u003e then, in effect,\n  the fractional part of the value is returned.\n\u003c/p\u003e\u003cp\u003eNote that extremely narrow ranges may exhibit numerical\n  instability.\n\u003c/p\u003e",
          "module": "Data.Colour.Map",
          "name": "range_cycle",
          "package": "AC-Colour",
          "signature": "(Double, Double) -\u003e Double -\u003e Double",
          "source": "src/Data-Colour-Map.html#range_cycle",
          "type": "function"
        },
        "index": {
          "description": "Takes range and value and returns value inside the given range If the value is already in the range it is unchanged Otherwise it wraps around For example if the range is then in effect the fractional part of the value is returned Note that extremely narrow ranges may exhibit numerical instability",
          "hierarchy": "Data Colour Map",
          "module": "Data.Colour.Map",
          "name": "range_cycle",
          "normalized": "(Double,Double)-\u003eDouble-\u003eDouble",
          "package": "AC-Colour",
          "signature": "(Double,Double)-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Map.html#v:range_cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for the \"sRGB\" colour space.\n\u003c/p\u003e\u003cp\u003eThis colour space is the \u003cem\u003ede facto\u003c/em\u003e standard colour space for\n  computer data, unless some more specific colour space is explicitly\n  specified. Unless you know differently, any image data received\n  from the outside world is probably sRGB, and and data output is\n  probably expected to be sRGB.\n\u003c/p\u003e\u003cp\u003eUnfortunately, sRGB is a non-linear colour space, so it is not\n  feasible to perform arithmetic in it directly. (The sRGB colour\n  space basically standardises the defective non-linear behaviour of\n  obsolete CRT display technology.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "Nonlinear",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Nonlinear.html",
          "type": "module"
        },
        "index": {
          "description": "Support for the sRGB colour space This colour space is the de facto standard colour space for computer data unless some more specific colour space is explicitly specified Unless you know differently any image data received from the outside world is probably sRGB and and data output is probably expected to be sRGB Unfortunately sRGB is non-linear colour space so it is not feasible to perform arithmetic in it directly The sRGB colour space basically standardises the defective non-linear behaviour of obsolete CRT display technology",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "Nonlinear",
          "package": "AC-Colour",
          "partial": "Nonlinear",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for holding sRGB colour values (with \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e components).\n\u003c/p\u003e\u003cp\u003eThe standard \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e type is for \u003cem\u003elinear\u003c/em\u003e RGB values. This type\n  is for sRGB colours, which are non-linear.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour8_sRGB",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Nonlinear.html#Colour8_sRGB",
          "type": "newtype"
        },
        "index": {
          "description": "Type for holding sRGB colour values with Word8 components The standard Colour8 type is for linear RGB values This type is for sRGB colours which are non-linear",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour8_sRGB",
          "package": "AC-Colour",
          "partial": "Colour RGB",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#t:Colour8_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for holding sRGB colour values (with \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e components).\n\u003c/p\u003e\u003cp\u003eThe standard \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e type is for \u003cem\u003elinear\u003c/em\u003e RGB values. This type\n  is for sRGB colours, which are non-linear.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour_sRGB",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Nonlinear.html#Colour_sRGB",
          "type": "newtype"
        },
        "index": {
          "description": "Type for holding sRGB colour values with Double components The standard Colour type is for linear RGB values This type is for sRGB colours which are non-linear",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour_sRGB",
          "package": "AC-Colour",
          "partial": "Colour RGB",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#t:Colour_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Colour.Nonlinear",
          "name": "Colour8_sRGB",
          "package": "AC-Colour",
          "signature": "Colour8_sRGB Colour8",
          "source": "src/Data-Colour-Nonlinear.html#Colour8_sRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour8_sRGB",
          "package": "AC-Colour",
          "partial": "Colour RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:Colour8_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Colour.Nonlinear",
          "name": "Colour_sRGB",
          "package": "AC-Colour",
          "signature": "Colour_sRGB Colour",
          "source": "src/Data-Colour-Nonlinear.html#Colour_sRGB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "Colour_sRGB",
          "package": "AC-Colour",
          "partial": "Colour RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:Colour_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e components to \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e components.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "cdemote_sRGB",
          "package": "AC-Colour",
          "signature": "Colour_sRGB -\u003e Colour8_sRGB",
          "source": "src/Data-Colour-Nonlinear.html#cdemote_sRGB",
          "type": "function"
        },
        "index": {
          "description": "Convert from Double components to Word8 components",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "cdemote_sRGB",
          "normalized": "Colour_sRGB-\u003eColour a",
          "package": "AC-Colour",
          "partial": "RGB",
          "signature": "Colour_sRGB-\u003eColour sRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:cdemote_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a non-linear sRGB value into a linear RGB value.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "colour_from_sRGB",
          "package": "AC-Colour",
          "signature": "Colour_sRGB -\u003e Colour",
          "source": "src/Data-Colour-Nonlinear.html#colour_from_sRGB",
          "type": "function"
        },
        "index": {
          "description": "Convert non-linear sRGB value into linear RGB value",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "colour_from_sRGB",
          "normalized": "Colour_sRGB-\u003eColour",
          "package": "AC-Colour",
          "partial": "RGB",
          "signature": "Colour_sRGB-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:colour_from_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a linear RGB value into a non-linear sRGB value.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "colour_to_sRGB",
          "package": "AC-Colour",
          "signature": "Colour -\u003e Colour_sRGB",
          "source": "src/Data-Colour-Nonlinear.html#colour_to_sRGB",
          "type": "function"
        },
        "index": {
          "description": "Convert linear RGB value into non-linear sRGB value",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "colour_to_sRGB",
          "normalized": "Colour-\u003eColour_sRGB",
          "package": "AC-Colour",
          "partial": "RGB",
          "signature": "Colour-\u003eColour_sRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:colour_to_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e components to \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e components.\n\u003c/p\u003e",
          "module": "Data.Colour.Nonlinear",
          "name": "cpromote_sRGB",
          "package": "AC-Colour",
          "signature": "Colour8_sRGB -\u003e Colour_sRGB",
          "source": "src/Data-Colour-Nonlinear.html#cpromote_sRGB",
          "type": "function"
        },
        "index": {
          "description": "Convert from Word8 components to Double components",
          "hierarchy": "Data Colour Nonlinear",
          "module": "Data.Colour.Nonlinear",
          "name": "cpromote_sRGB",
          "normalized": "Colour a-\u003eColour_sRGB",
          "package": "AC-Colour",
          "partial": "RGB",
          "signature": "Colour sRGB-\u003eColour_sRGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Nonlinear.html#v:cpromote_sRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e, which stores linear RGB (red,\n  green, blue) colour values where each channel is a \u003ccode\u003eWord8\u003c/code\u003e. It also\n  provides arithmetic over such colours, and a few predefined\n  colours.\n\u003c/p\u003e\u003cp\u003eIt is the general intention that \"most\" work will be done with\n  \u003ca\u003eData.Colour.Double\u003c/a\u003e, with values converted to \u003ccode\u003eColour8\u003c/code\u003e only as a\n  final step. However, full arithmetic is supported anyway, in case\n  anybody wants to work that way. It is slightly less efficient and\n  flexible, however.\n\u003c/p\u003e\u003cp\u003eBeware that \"most\" RGB data found in external sources is in the\n  (non-linear) sRGB colour space, not the \u003cem\u003elinear\u003c/em\u003e RGB colour space\n  used here. See \u003ca\u003eData.Colour.Nonlinear\u003c/a\u003e for conversion functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Colour.Word8",
          "name": "Word8",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Word8.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Colour8 which stores linear RGB red green blue colour values where each channel is Word8 It also provides arithmetic over such colours and few predefined colours It is the general intention that most work will be done with Data.Colour.Double with values converted to Colour8 only as final step However full arithmetic is supported anyway in case anybody wants to work that way It is slightly less efficient and flexible however Beware that most RGB data found in external sources is in the non-linear sRGB colour space not the linear RGB colour space used here See Data.Colour.Nonlinear for conversion functions",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "Word8",
          "package": "AC-Colour",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe integral colour. It stores three channels (red, green and\n  blue) as linear \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e values ranging from 0 to 255. (0 represents\n  minimum intensity, 255 represents maximum. Black is therefore\n  \u003ccode\u003eColour8 0 0 0\u003c/code\u003e and white is \u003ccode\u003eColour8 255 255 255\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThe channel values are stored as strict, unboxed fields, so\n  operating on \u003ccode\u003eColour8\u003c/code\u003es should be quite efficient in time and\n  space.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances provide arithmetic for\n  \u003ccode\u003eColour8\u003c/code\u003es. Note that \u003ccode\u003e(*)\u003c/code\u003e acts channel-wise; this is usually what\n  is wanted.\n\u003c/p\u003e",
          "module": "Data.Colour.Word8",
          "name": "Colour8",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "data"
        },
        "index": {
          "description": "The integral colour It stores three channels red green and blue as linear Word8 values ranging from to represents minimum intensity represents maximum Black is therefore Colour8 and white is Colour8 The channel values are stored as strict unboxed fields so operating on Colour8 should be quite efficient in time and space The Num and Fractional instances provide arithmetic for Colour8 Note that acts channel-wise this is usually what is wanted",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "Colour8",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#t:Colour8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "Colour8",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:Colour8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:Colour8\"]"
        },
        "index": {
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "Colour8",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:Colour8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "blue8",
          "package": "AC-Colour",
          "signature": "Word8",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:blue8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:blue8\"]"
        },
        "index": {
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "blue8",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:blue8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Black.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Black",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Black",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Black\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Black\"]"
        },
        "index": {
          "description": "Constant Black",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Black",
          "package": "AC-Colour",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Blue.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Blue",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Blue",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Blue\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Blue\"]"
        },
        "index": {
          "description": "Constant Blue",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Blue",
          "package": "AC-Colour",
          "partial": "Blue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Cyan.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Cyan",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Cyan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Cyan\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Cyan\"]"
        },
        "index": {
          "description": "Constant Cyan",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Cyan",
          "package": "AC-Colour",
          "partial": "Cyan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Green.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Green",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Green",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Green\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Green\"]"
        },
        "index": {
          "description": "Constant Green",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Green",
          "package": "AC-Colour",
          "partial": "Green",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Magenta.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Magenta",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Magenta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Magenta\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Magenta\"]"
        },
        "index": {
          "description": "Constant Magenta",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Magenta",
          "package": "AC-Colour",
          "partial": "Magenta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Red.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Red",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Red",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Red\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Red\"]"
        },
        "index": {
          "description": "Constant Red",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Red",
          "package": "AC-Colour",
          "partial": "Red",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: White.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8White",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8White",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8White\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8White\"]"
        },
        "index": {
          "description": "Constant White",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8White",
          "package": "AC-Colour",
          "partial": "White",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8White"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant: Yellow.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8Yellow",
          "package": "AC-Colour",
          "signature": "Colour8",
          "source": "src/Data-Colour-Word8.html#c8Yellow",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Yellow\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8Yellow\"]"
        },
        "index": {
          "description": "Constant Yellow",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8Yellow",
          "package": "AC-Colour",
          "partial": "Yellow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8Yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a function to fold the three values in a \u003ccode\u003eColour8\u003c/code\u003e into\n  a single value. No particular order of application is promised.\n\u003c/p\u003e",
          "module": "Data.Colour.Word8",
          "name": "c8fold",
          "package": "AC-Colour",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Colour8 -\u003e Word8",
          "source": "src/Data-Colour-Word8.html#c8fold",
          "type": "function"
        },
        "index": {
          "description": "Use function to fold the three values in Colour8 into single value No particular order of application is promised",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8fold",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eColour-\u003eWord",
          "package": "AC-Colour",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eColour-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every channel of a \u003ccode\u003eColour8\u003c/code\u003e. (Mostly used\n  internally; exposed here in case it might be useful.)\n\u003c/p\u003e",
          "module": "Data.Colour.Word8",
          "name": "c8map",
          "package": "AC-Colour",
          "signature": "(Word8 -\u003e Word8) -\u003e Colour8 -\u003e Colour8",
          "source": "src/Data-Colour-Word8.html#c8map",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every channel of Colour8 Mostly used internally exposed here in case it might be useful",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8map",
          "normalized": "(Word-\u003eWord)-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Word-\u003eWord)-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a \u003ccode\u003eColour8\u003c/code\u003e by the specified amount. Recall that 0x00\n  means zero, and 0xFF means one. This means that it is impossible\n  to make a colour \u003cem\u003ebrighter\u003c/em\u003e, only darker. It also means this\n  operation is modestly inefficient due to the renormalisation\n  steps.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "c8scale",
          "package": "AC-Colour",
          "signature": "Word8 -\u003e Colour8 -\u003e Colour8",
          "source": "src/Data-Colour-Word8.html#c8scale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8scale\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:c8scale\"]"
        },
        "index": {
          "description": "Scale Colour8 by the specified amount Recall that x00 means zero and xFF means one This means that it is impossible to make colour brighter only darker It also means this operation is modestly inefficient due to the renormalisation steps",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8scale",
          "normalized": "Word-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "Word-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe colour equivilent of \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e. (Mostly used\n  internally; exposed here in case it might be useful.)\n\u003c/p\u003e",
          "module": "Data.Colour.Word8",
          "name": "c8zip",
          "package": "AC-Colour",
          "signature": "(Word8 -\u003e Word8 -\u003e Word8) -\u003e Colour8 -\u003e Colour8 -\u003e Colour8",
          "source": "src/Data-Colour-Word8.html#c8zip",
          "type": "function"
        },
        "index": {
          "description": "The colour equivilent of zipWith Mostly used internally exposed here in case it might be useful",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "c8zip",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eColour-\u003eColour-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eColour-\u003eColour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:c8zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "green8",
          "package": "AC-Colour",
          "signature": "Word8",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:green8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:green8\"]"
        },
        "index": {
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "green8",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:green8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eWord8\u003c/code\u003e into a shade of grey. \n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "grey8",
          "package": "AC-Colour",
          "signature": "Word8 -\u003e Colour8",
          "source": "src/Data-Colour-Word8.html#grey8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:grey8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:grey8\"]"
        },
        "index": {
          "description": "Convert Word8 into shade of grey",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "grey8",
          "normalized": "Word-\u003eColour",
          "package": "AC-Colour",
          "signature": "Word-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:grey8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a tuple to a \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "pack8",
          "package": "AC-Colour",
          "signature": "(Word8, Word8, Word8) -\u003e Colour8",
          "source": "src/Data-Colour-Word8.html#pack8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:pack8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:pack8\"]"
        },
        "index": {
          "description": "Convert tuple to Colour8",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "pack8",
          "normalized": "(Word,Word,Word)-\u003eColour",
          "package": "AC-Colour",
          "signature": "(Word,Word,Word)-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:pack8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "red8",
          "package": "AC-Colour",
          "signature": "Word8",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:red8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:red8\"]"
        },
        "index": {
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "red8",
          "package": "AC-Colour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:red8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e to a tuple.\n\u003c/p\u003e",
          "module": "[\"Data.Colour.Word8\",\"Data.Colour\"]",
          "name": "unpack8",
          "package": "AC-Colour",
          "signature": "Colour8 -\u003e (Word8, Word8, Word8)",
          "source": "src/Data-Colour-Word8.html#unpack8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:unpack8\",\"http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:unpack8\"]"
        },
        "index": {
          "description": "Convert Colour8 to tuple",
          "hierarchy": "Data Colour Word8",
          "module": "Data.Colour.Word8",
          "name": "unpack8",
          "normalized": "Colour-\u003e(Word,Word,Word)",
          "package": "AC-Colour",
          "signature": "Colour-\u003e(Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour-Word8.html#v:unpack8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports all the main interesting parts of the various\n  colour modules. It also provides functions for converting between\n  \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is the general intention that \"most\" work will be done with\n  \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e, with values converted to \u003ccode\u003eColour8\u003c/code\u003e only as a final step.\n  However, full arithmetic on \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e is supported anyway,\n  in case anybody wants to work that way. It is slightly less\n  efficient and flexible, however.\n\u003c/p\u003e\u003cp\u003eNote that most colour values from external sources are typically\n  colour values in the non-linear sRGB colour space, rather than the\n  linear RGB values handled here. See \u003ca\u003eData.Colour.Nonlinear\u003c/a\u003e for\n  conversion functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Colour",
          "name": "Colour",
          "package": "AC-Colour",
          "source": "src/Data-Colour.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports all the main interesting parts of the various colour modules It also provides functions for converting between Colour and Colour8 It is the general intention that most work will be done with Colour with values converted to Colour8 only as final step However full arithmetic on Colour8 is supported anyway in case anybody wants to work that way It is slightly less efficient and flexible however Note that most colour values from external sources are typically colour values in the non-linear sRGB colour space rather than the linear RGB values handled here See Data.Colour.Nonlinear for conversion functions",
          "hierarchy": "Data Colour",
          "module": "Data.Colour",
          "name": "Colour",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main colour type. It stores three channels (red, green and\n  blue) as linear \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e values normally ranging from 0 to 1.\n  (0 represents minimum intensity, 1 represents maximum. Black is\n  therefore \u003ccode\u003eColour 0 0 0\u003c/code\u003e and white is \u003ccode\u003eColour 1 1 1\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThe channel values are stored as strict, unboxed fields, so\n  operating on \u003ccode\u003eColour\u003c/code\u003es should be quite efficient in time and space.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances provide arithmetic for\n  \u003ccode\u003eColour\u003c/code\u003es. Note that \u003ccode\u003e(*)\u003c/code\u003e acts channel-wise; this is usually what\n  is wanted.\n\u003c/p\u003e",
          "module": "Data.Colour",
          "name": "Colour",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Double.html#Colour",
          "type": "data"
        },
        "index": {
          "description": "The main colour type It stores three channels red green and blue as linear Double values normally ranging from to represents minimum intensity represents maximum Black is therefore Colour and white is Colour The channel values are stored as strict unboxed fields so operating on Colour should be quite efficient in time and space The Num and Fractional instances provide arithmetic for Colour Note that acts channel-wise this is usually what is wanted",
          "hierarchy": "Data Colour",
          "module": "Data.Colour",
          "name": "Colour",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#t:Colour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe integral colour. It stores three channels (red, green and\n  blue) as linear \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e values ranging from 0 to 255. (0 represents\n  minimum intensity, 255 represents maximum. Black is therefore\n  \u003ccode\u003eColour8 0 0 0\u003c/code\u003e and white is \u003ccode\u003eColour8 255 255 255\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eThe channel values are stored as strict, unboxed fields, so\n  operating on \u003ccode\u003eColour8\u003c/code\u003es should be quite efficient in time and\n  space.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e instances provide arithmetic for\n  \u003ccode\u003eColour8\u003c/code\u003es. Note that \u003ccode\u003e(*)\u003c/code\u003e acts channel-wise; this is usually what\n  is wanted.\n\u003c/p\u003e",
          "module": "Data.Colour",
          "name": "Colour8",
          "package": "AC-Colour",
          "source": "src/Data-Colour-Word8.html#Colour8",
          "type": "data"
        },
        "index": {
          "description": "The integral colour It stores three channels red green and blue as linear Word8 values ranging from to represents minimum intensity represents maximum Black is therefore Colour8 and white is Colour8 The channel values are stored as strict unboxed fields so operating on Colour8 should be quite efficient in time and space The Num and Fractional instances provide arithmetic for Colour8 Note that acts channel-wise this is usually what is wanted",
          "hierarchy": "Data Colour",
          "module": "Data.Colour",
          "name": "Colour8",
          "package": "AC-Colour",
          "partial": "Colour",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#t:Colour8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e. Any values outside\n  the range 0--1 will be \u003ccode\u003ewrapped\u003c/code\u003e to that range. You may\n  want to run \u003ccode\u003e\u003ca\u003eclip\u003c/a\u003e\u003c/code\u003e before calling this function to\n  prevent this behaviour (unless you know the values can't\n  be outside the permitted range). This function is the\n  exact inverse of \u003ccode\u003e\u003ca\u003ecpromote\u003c/a\u003e\u003c/code\u003e; 0 is mapped to 0x00 and\n  1 is mapped to 0xFF.\n\u003c/p\u003e",
          "module": "Data.Colour",
          "name": "cdemote",
          "package": "AC-Colour",
          "signature": "Colour -\u003e Colour8",
          "source": "src/Data-Colour.html#cdemote",
          "type": "function"
        },
        "index": {
          "description": "Convert Colour into Colour8 Any values outside the range will be wrapped to that range You may want to run clip before calling this function to prevent this behaviour unless you know the values can be outside the permitted range This function is the exact inverse of cpromote is mapped to x00 and is mapped to xFF",
          "hierarchy": "Data Colour",
          "module": "Data.Colour",
          "name": "cdemote",
          "normalized": "Colour-\u003eColour",
          "package": "AC-Colour",
          "signature": "Colour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cdemote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eColour8\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eColour\u003c/a\u003e\u003c/code\u003e. Recall that\n  0x00 means zero and 0xFF means one; this function will\n  remap such values appropriately.\n\u003c/p\u003e",
          "module": "Data.Colour",
          "name": "cpromote",
          "package": "AC-Colour",
          "signature": "Colour8 -\u003e Colour",
          "source": "src/Data-Colour.html#cpromote",
          "type": "function"
        },
        "index": {
          "description": "Convert Colour8 into Colour Recall that x00 means zero and xFF means one this function will remap such values appropriately",
          "hierarchy": "Data Colour",
          "module": "Data.Colour",
          "name": "cpromote",
          "normalized": "Colour-\u003eColour",
          "package": "AC-Colour",
          "signature": "Colour-\u003eColour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Colour/docs/Data-Colour.html#v:cpromote"
      }
    }
  ]
]