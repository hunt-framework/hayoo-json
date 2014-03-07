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
        "word": "gloss"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious ray casting algorithms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "RayCast",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Algorithms-RayCast.html",
          "type": "module"
        },
        "index": {
          "description": "Various ray casting algorithms",
          "hierarchy": "Graphics Gloss Algorithms RayCast",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "RayCast",
          "package": "gloss",
          "partial": "Ray Cast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe quadtree contains cells of unit extent (NetHack style).\n   Given a line segement (P1-P2) through the tree, get the cell \n   closest to P1 that intersects the segment, if any.\n\u003c/p\u003e\u003cp\u003eTODO: This currently uses a naive algorithm. It just calls \n         \u003ccode\u003e\u003ca\u003etraceSegIntoCellularQuadTree\u003c/a\u003e\u003c/code\u003e and sorts the results\n         to get the one closest to P1. It'd be better to do a \n         proper walk over the tree in the direction of the ray.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "castSegIntoCellularQuadTree",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Extent-\u003e QuadTree a-\u003e Maybe (Point, Extent, a)",
          "type": "function"
        },
        "index": {
          "description": "The quadtree contains cells of unit extent NetHack style Given line segement P1-P2 through the tree get the cell closest to P1 that intersects the segment if any TODO This currently uses naive algorithm It just calls traceSegIntoCellularQuadTree and sorts the results to get the one closest to P1 It be better to do proper walk over the tree in the direction of the ray",
          "hierarchy": "Graphics Gloss Algorithms RayCast",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "castSegIntoCellularQuadTree",
          "normalized": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003eMaybe(Point,Extent,a)",
          "package": "gloss",
          "partial": "Seg Into Cellular Quad Tree",
          "signature": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003eMaybe(Point,Extent,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#v:castSegIntoCellularQuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe quadtree contains cells of unit extent (NetHack style).\n   Given a line segment (P1-P2) through the tree, return the list of cells \n   that intersect the segment.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "traceSegIntoCellularQuadTree",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Extent-\u003e QuadTree a-\u003e [(Point, Extent, a)]",
          "type": "function"
        },
        "index": {
          "description": "The quadtree contains cells of unit extent NetHack style Given line segment P1-P2 through the tree return the list of cells that intersect the segment",
          "hierarchy": "Graphics Gloss Algorithms RayCast",
          "module": "Graphics.Gloss.Algorithms.RayCast",
          "name": "traceSegIntoCellularQuadTree",
          "normalized": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003e[(Point,Extent,a)]",
          "package": "gloss",
          "partial": "Seg Into Cellular Quad Tree",
          "signature": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003e[(Point,Extent,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#v:traceSegIntoCellularQuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined and custom colors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "Color",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Color.html",
          "type": "module"
        },
        "index": {
          "description": "Predefined and custom colors",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "Color",
          "package": "gloss",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract color value.\n\tWe keep the type abstract so we can be sure that the components\n\tare in the required range. To make a custom color use \u003ccode\u003e\u003ca\u003emakeColor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "Color",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Color.html#Color",
          "type": "data"
        },
        "index": {
          "description": "An abstract color value We keep the type abstract so we can be sure that the components are in the required range To make custom color use makeColor",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "Color",
          "package": "gloss",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd RGB components of a color component-wise, then normalise\n\tthem to the highest resulting one. The alpha components are averaged.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "addColors",
          "package": "gloss",
          "signature": "Color -\u003e Color -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#addColors",
          "type": "function"
        },
        "index": {
          "description": "Add RGB components of color component-wise then normalise them to the highest resulting one The alpha components are averaged",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "addColors",
          "normalized": "Color-\u003eColor-\u003eColor",
          "package": "gloss",
          "partial": "Colors",
          "signature": "Color-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:addColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "aquamarine",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#aquamarine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "aquamarine",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:aquamarine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "azure",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#azure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "azure",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:azure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "black",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "black",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "blue",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "blue",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a brighter version of a color, scaling towards white.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "bright",
          "package": "gloss",
          "signature": "Color -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#bright",
          "type": "function"
        },
        "index": {
          "description": "Make brighter version of color scaling towards white",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "bright",
          "normalized": "Color-\u003eColor",
          "package": "gloss",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:bright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "chartreuse",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#chartreuse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "chartreuse",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:chartreuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "cyan",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "cyan",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDarken a color, adding black.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "dark",
          "package": "gloss",
          "signature": "Color -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#dark",
          "type": "function"
        },
        "index": {
          "description": "Darken color adding black",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "dark",
          "normalized": "Color-\u003eColor",
          "package": "gloss",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:dark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a dimmer version of a color, scaling towards black.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "dim",
          "package": "gloss",
          "signature": "Color -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#dim",
          "type": "function"
        },
        "index": {
          "description": "Make dimmer version of color scaling towards black",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "dim",
          "normalized": "Color-\u003eColor",
          "package": "gloss",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "green",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "green",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA greyness of a given magnitude.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "greyN",
          "package": "gloss",
          "signature": "Float-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "greyness of given magnitude",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "greyN",
          "normalized": "Float-\u003eColor",
          "package": "gloss",
          "signature": "Float-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:greyN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLighten a color, adding white.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "light",
          "package": "gloss",
          "signature": "Color -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#light",
          "type": "function"
        },
        "index": {
          "description": "Lighten color adding white",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "light",
          "normalized": "Color-\u003eColor",
          "package": "gloss",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "magenta",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "magenta",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a custom color. All components are clamped to the range  [0..1].\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor",
          "package": "gloss",
          "signature": "Float-\u003e Float-\u003e Float-\u003e Float-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "Make custom color All components are clamped to the range",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "package": "gloss",
          "partial": "Color",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a custom color. \n   You promise that all components are clamped to the range [0..1]\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor'",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Float -\u003e Color",
          "source": "src/Graphics-Gloss-Data-Color.html#makeColor%27",
          "type": "function"
        },
        "index": {
          "description": "Make custom color You promise that all components are clamped to the range",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor'",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "package": "gloss",
          "partial": "Color'",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a custom color. All components are clamped to the range [0..255].\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor8",
          "package": "gloss",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "Make custom color All components are clamped to the range",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "makeColor8",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eColor",
          "package": "gloss",
          "partial": "Color",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMix two colors with the given ratios.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "mixColors",
          "package": "gloss",
          "signature": "Float-\u003e Float-\u003e Color-\u003e Color-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "Mix two colors with the given ratios",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "mixColors",
          "normalized": "Float-\u003eFloat-\u003eColor-\u003eColor-\u003eColor",
          "package": "gloss",
          "partial": "Colors",
          "signature": "Float-\u003eFloat-\u003eColor-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:mixColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "orange",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#orange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "orange",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:orange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a custom color.\n   Components should be in the range [0..1] but this is not checked.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "rawColor",
          "package": "gloss",
          "signature": "Float-\u003e Float-\u003e Float-\u003e Float-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "Make custom color Components should be in the range but this is not checked",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "rawColor",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "package": "gloss",
          "partial": "Color",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rawColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "red",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "red",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the RGBA components of a color.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Color",
          "name": "rgbaOfColor",
          "package": "gloss",
          "signature": "Color -\u003e (Float, Float, Float, Float)",
          "source": "src/Graphics-Gloss-Data-Color.html#rgbaOfColor",
          "type": "function"
        },
        "index": {
          "description": "Take the RGBA components of color",
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "rgbaOfColor",
          "normalized": "Color-\u003e(Float,Float,Float,Float)",
          "package": "gloss",
          "partial": "Of Color",
          "signature": "Color-\u003e(Float,Float,Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rgbaOfColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "rose",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#rose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "rose",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "violet",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#violet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "violet",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:violet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "white",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "white",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Color",
          "name": "yellow",
          "package": "gloss",
          "signature": "Color",
          "source": "src/Graphics-Gloss-Data-Color.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Color",
          "module": "Graphics.Gloss.Data.Color",
          "name": "yellow",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Display",
          "name": "Display",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Display.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Display",
          "module": "Graphics.Gloss.Data.Display",
          "name": "Display",
          "package": "gloss",
          "partial": "Display",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Display",
          "name": "Display",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Display.html#Display",
          "type": "data"
        },
        "index": {
          "description": "Describes how Gloss should display its output",
          "hierarchy": "Graphics Gloss Data Display",
          "module": "Graphics.Gloss.Data.Display",
          "name": "Display",
          "package": "gloss",
          "partial": "Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.Display\",\"Graphics.Gloss\"]",
          "name": "FullScreen",
          "package": "gloss",
          "signature": "FullScreen (Int, Int)",
          "source": "src/Graphics-Gloss-Data-Display.html#Display",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:FullScreen\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:FullScreen\"]"
        },
        "index": {
          "description": "Display full screen with drawing area of the given size",
          "hierarchy": "Graphics Gloss Data Display",
          "module": "Graphics.Gloss.Data.Display",
          "name": "FullScreen",
          "normalized": "FullScreen(Int,Int)",
          "package": "gloss",
          "partial": "Full Screen",
          "signature": "FullScreen(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:FullScreen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.Display\",\"Graphics.Gloss\"]",
          "name": "InWindow",
          "package": "gloss",
          "signature": "InWindow String (Int, Int) (Int, Int)",
          "source": "src/Graphics-Gloss-Data-Display.html#Display",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:InWindow\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:InWindow\"]"
        },
        "index": {
          "description": "Display in window with the given name size and position",
          "hierarchy": "Graphics Gloss Data Display",
          "module": "Graphics.Gloss.Data.Display",
          "name": "InWindow",
          "normalized": "InWindow String(Int,Int)(Int,Int)",
          "package": "gloss",
          "partial": "In Window",
          "signature": "InWindow String(Int,Int)(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:InWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents an integral rectangular area of the 2D plane.\n   Using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es (instead of \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es) for the bounds means we can safely\n   compare extents for equality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Extent",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Extent.html",
          "type": "module"
        },
        "index": {
          "description": "Represents an integral rectangular area of the plane Using Int instead of Float for the bounds means we can safely compare extents for equality",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Extent",
          "package": "gloss",
          "partial": "Extent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integral coordinate.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Coord",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Extent.html#Coord",
          "type": "type"
        },
        "index": {
          "description": "An integral coordinate",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Coord",
          "package": "gloss",
          "partial": "Coord",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#t:Coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular area of the 2D plane.\n   We keep the type abstract to ensure that invalid extents cannot be\n   constructed.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Extent",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Extent.html#Extent",
          "type": "data"
        },
        "index": {
          "description": "rectangular area of the plane We keep the type abstract to ensure that invalid extents cannot be constructed",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "Extent",
          "package": "gloss",
          "partial": "Extent",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#t:Extent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the coordinate that lies at the center of an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "centerCoordOfExtent",
          "package": "gloss",
          "signature": "Extent -\u003e (Int, Int)",
          "source": "src/Graphics-Gloss-Data-Extent.html#centerCoordOfExtent",
          "type": "function"
        },
        "index": {
          "description": "Get the coordinate that lies at the center of an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "centerCoordOfExtent",
          "normalized": "Extent-\u003e(Int,Int)",
          "package": "gloss",
          "partial": "Coord Of Extent",
          "signature": "Extent-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:centerCoordOfExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a coordinate lies inside an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "coordInExtent",
          "package": "gloss",
          "signature": "Extent -\u003e Coord -\u003e Bool",
          "source": "src/Graphics-Gloss-Data-Extent.html#coordInExtent",
          "type": "function"
        },
        "index": {
          "description": "Check whether coordinate lies inside an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "coordInExtent",
          "normalized": "Extent-\u003eCoord-\u003eBool",
          "package": "gloss",
          "partial": "In Extent",
          "signature": "Extent-\u003eCoord-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:coordInExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCut one quadrant out of an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "cutQuadOfExtent",
          "package": "gloss",
          "signature": "Quad -\u003e Extent -\u003e Extent",
          "source": "src/Graphics-Gloss-Data-Extent.html#cutQuadOfExtent",
          "type": "function"
        },
        "index": {
          "description": "Cut one quadrant out of an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "cutQuadOfExtent",
          "normalized": "Quad-\u003eExtent-\u003eExtent",
          "package": "gloss",
          "partial": "Quad Of Extent",
          "signature": "Quad-\u003eExtent-\u003eExtent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:cutQuadOfExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a line segment (P1-P2) intersects the outer edge of an extent then\n   return the intersection point, that is closest to P1, if any.\n   If P1 is inside the extent then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n                   P2\n                  /\n            ----/-\n            | /  |\n            +    |\n           /------\n         / \n        P1\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "intersectSegExtent",
          "package": "gloss",
          "signature": "Point -\u003e Point -\u003e Extent -\u003e Maybe Point",
          "source": "src/Graphics-Gloss-Data-Extent.html#intersectSegExtent",
          "type": "function"
        },
        "index": {
          "description": "If line segment P1-P2 intersects the outer edge of an extent then return the intersection point that is closest to P1 if any If P1 is inside the extent then Nothing P2 P1",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "intersectSegExtent",
          "normalized": "Point-\u003ePoint-\u003eExtent-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Extent",
          "signature": "Point-\u003ePoint-\u003eExtent-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:intersectSegExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an extent is a square with a width and height of 1.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "isUnitExtent",
          "package": "gloss",
          "signature": "Extent -\u003e Bool",
          "source": "src/Graphics-Gloss-Data-Extent.html#isUnitExtent",
          "type": "function"
        },
        "index": {
          "description": "Check if an extent is square with width and height of",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "isUnitExtent",
          "normalized": "Extent-\u003eBool",
          "package": "gloss",
          "partial": "Unit Extent",
          "signature": "Extent-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:isUnitExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an extent.\n\tThe north value must be \u003e south, and east \u003e west, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "makeExtent",
          "package": "gloss",
          "signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e Extent",
          "type": "function"
        },
        "index": {
          "description": "Construct an extent The north value must be south and east west else error",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "makeExtent",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eExtent",
          "package": "gloss",
          "partial": "Extent",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eExtent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:makeExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstuct a path to a particular coordinate in an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "pathToCoord",
          "package": "gloss",
          "signature": "Extent -\u003e Coord -\u003e Maybe [Quad]",
          "source": "src/Graphics-Gloss-Data-Extent.html#pathToCoord",
          "type": "function"
        },
        "index": {
          "description": "Constuct path to particular coordinate in an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "pathToCoord",
          "normalized": "Extent-\u003eCoord-\u003eMaybe[Quad]",
          "package": "gloss",
          "partial": "To Coord",
          "signature": "Extent-\u003eCoord-\u003eMaybe[Quad]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:pathToCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a point lies inside an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "pointInExtent",
          "package": "gloss",
          "signature": "Extent -\u003e Point -\u003e Bool",
          "source": "src/Graphics-Gloss-Data-Extent.html#pointInExtent",
          "type": "function"
        },
        "index": {
          "description": "Check whether point lies inside an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "pointInExtent",
          "normalized": "Extent-\u003ePoint-\u003eBool",
          "package": "gloss",
          "partial": "In Extent",
          "signature": "Extent-\u003ePoint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:pointInExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the quadrant that this coordinate lies in, if any.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "quadOfCoord",
          "package": "gloss",
          "signature": "Extent -\u003e Coord -\u003e Maybe Quad",
          "source": "src/Graphics-Gloss-Data-Extent.html#quadOfCoord",
          "type": "function"
        },
        "index": {
          "description": "Get the quadrant that this coordinate lies in if any",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "quadOfCoord",
          "normalized": "Extent-\u003eCoord-\u003eMaybe Quad",
          "package": "gloss",
          "partial": "Of Coord",
          "signature": "Extent-\u003eCoord-\u003eMaybe Quad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:quadOfCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the width and height of an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "sizeOfExtent",
          "package": "gloss",
          "signature": "Extent -\u003e (Int, Int)",
          "source": "src/Graphics-Gloss-Data-Extent.html#sizeOfExtent",
          "type": "function"
        },
        "index": {
          "description": "Get the width and height of an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "sizeOfExtent",
          "normalized": "Extent-\u003e(Int,Int)",
          "package": "gloss",
          "partial": "Of Extent",
          "signature": "Extent-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:sizeOfExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square extent of a given size.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "squareExtent",
          "package": "gloss",
          "signature": "Int -\u003e Extent",
          "source": "src/Graphics-Gloss-Data-Extent.html#squareExtent",
          "type": "function"
        },
        "index": {
          "description": "square extent of given size",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "squareExtent",
          "normalized": "Int-\u003eExtent",
          "package": "gloss",
          "partial": "Extent",
          "signature": "Int-\u003eExtent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:squareExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the NSEW components of an extent.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "takeExtent",
          "package": "gloss",
          "signature": "Extent -\u003e (Int, Int, Int, Int)",
          "source": "src/Graphics-Gloss-Data-Extent.html#takeExtent",
          "type": "function"
        },
        "index": {
          "description": "Take the NSEW components of an extent",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "takeExtent",
          "normalized": "Extent-\u003e(Int,Int,Int,Int)",
          "package": "gloss",
          "partial": "Extent",
          "signature": "Extent-\u003e(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:takeExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a line segment's endpoints are inside an extent, or if it\n   intersects with the boundary.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "touchesSegExtent",
          "package": "gloss",
          "signature": "Point -\u003e Point -\u003e Extent -\u003e Bool",
          "source": "src/Graphics-Gloss-Data-Extent.html#touchesSegExtent",
          "type": "function"
        },
        "index": {
          "description": "Check whether line segment endpoints are inside an extent or if it intersects with the boundary",
          "hierarchy": "Graphics Gloss Data Extent",
          "module": "Graphics.Gloss.Data.Extent",
          "name": "touchesSegExtent",
          "normalized": "Point-\u003ePoint-\u003eExtent-\u003eBool",
          "package": "gloss",
          "partial": "Seg Extent",
          "signature": "Point-\u003ePoint-\u003eExtent-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:touchesSegExtent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for representing pictures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Picture",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Picture.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for representing pictures",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Picture",
          "package": "gloss",
          "partial": "Picture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract 32-bit RGBA bitmap data.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "BitmapData",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Render-Bitmap.html#BitmapData",
          "type": "data"
        },
        "index": {
          "description": "Abstract bit RGBA bitmap data",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "BitmapData",
          "package": "gloss",
          "partial": "Bitmap Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:BitmapData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path through the x-y plane.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Path",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Picture.html#Path",
          "type": "type"
        },
        "index": {
          "description": "path through the x-y plane",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Path",
          "package": "gloss",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2D picture\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Picture",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "data"
        },
        "index": {
          "description": "picture",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Picture",
          "package": "gloss",
          "partial": "Picture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Picture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Point",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Point.html#Point",
          "type": "type"
        },
        "index": {
          "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Point",
          "package": "gloss",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector can be treated as a point, and vis-versa.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Vector",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Vector.html#Vector",
          "type": "type"
        },
        "index": {
          "description": "vector can be treated as point and vis-versa",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Vector",
          "package": "gloss",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles \n  (in degrees) at the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Arc",
          "package": "gloss",
          "signature": "Arc Float Float Float",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "circular arc drawn counter-clockwise between two angles in degrees at the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Arc",
          "package": "gloss",
          "partial": "Arc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmap image with a width, height and some 32-bit RGBA\n   bitmap data.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n  between frames for speed. If you are programatically generating\n  the image for each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. If you have loaded it\n  from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Bitmap",
          "package": "gloss",
          "signature": "Bitmap Int Int BitmapData Bool",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "bitmap image with width height and some bit RGBA bitmap data The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Bitmap",
          "package": "gloss",
          "partial": "Bitmap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Bitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blank picture, with nothing in it.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Blank",
          "package": "gloss",
          "signature": "Blank",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "blank picture with nothing in it",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Blank",
          "package": "gloss",
          "partial": "Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle with the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Circle",
          "package": "gloss",
          "signature": "Circle Float",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "circle with the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Circle",
          "package": "gloss",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture drawn with this color.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Color",
          "package": "gloss",
          "signature": "Color Color Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "picture drawn with this color",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Color",
          "package": "gloss",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line along an arbitrary path.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Line",
          "package": "gloss",
          "signature": "Line Path",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "line along an arbitrary path",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Line",
          "package": "gloss",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture consisting of several others.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Pictures",
          "package": "gloss",
          "signature": "Pictures [Picture]",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "picture consisting of several others",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Pictures",
          "normalized": "Pictures[Picture]",
          "package": "gloss",
          "partial": "Pictures",
          "signature": "Pictures[Picture]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Pictures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convex polygon filled with a solid color.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Polygon",
          "package": "gloss",
          "signature": "Polygon Path",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "convex polygon filled with solid color",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Polygon",
          "package": "gloss",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture rotated clockwise by the given angle (in degrees).\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Rotate",
          "package": "gloss",
          "signature": "Rotate Float Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "picture rotated clockwise by the given angle in degrees",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Rotate",
          "package": "gloss",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture scaled by the given x and y factors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Scale",
          "package": "gloss",
          "signature": "Scale Float Float Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "picture scaled by the given and factors",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Scale",
          "package": "gloss",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome text to draw with a vector font.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Text",
          "package": "gloss",
          "signature": "Text String",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "Some text to draw with vector font",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Text",
          "package": "gloss",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles \n  (in degrees), with the given radius  and thickness.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eArc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "ThickArc",
          "package": "gloss",
          "signature": "ThickArc Float Float Float Float",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "circular arc drawn counter-clockwise between two angles in degrees with the given radius and thickness If the thickness is then this is equivalent to Arc",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "ThickArc",
          "package": "gloss",
          "partial": "Thick Arc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:ThickArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle with the given thickness and radius.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "ThickCircle",
          "package": "gloss",
          "signature": "ThickCircle Float Float",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "circle with the given thickness and radius If the thickness is then this is equivalent to Circle",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "ThickCircle",
          "package": "gloss",
          "partial": "Thick Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:ThickCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture translated by the given x and y coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Translate",
          "package": "gloss",
          "signature": "Translate Float Float Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "description": "picture translated by the given and coordinates",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "Translate",
          "package": "gloss",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles (in degrees) \n   at the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "arc",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#arc",
          "type": "function"
        },
        "index": {
          "description": "circular arc drawn counter-clockwise between two angles in degrees at the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "arc",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solid arc, drawn counter-clockwise between two angles at the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "arcSolid",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#arcSolid",
          "type": "function"
        },
        "index": {
          "description": "solid arc drawn counter-clockwise between two angles at the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "arcSolid",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Solid",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:arcSolid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bitmap image with a width, height and a Vector holding the \n   32-bit RGBA bitmap data.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n  between frames for speed.\n  If you are programatically generating the image for\n  each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.  \n  If you have loaded it from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmap",
          "package": "gloss",
          "signature": "Int -\u003e Int -\u003e BitmapData -\u003e Bool -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#bitmap",
          "type": "function"
        },
        "index": {
          "description": "bitmap image with width height and Vector holding the bit RGBA bitmap data The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmap",
          "normalized": "Int-\u003eInt-\u003eBitmapData-\u003eBool-\u003ePicture",
          "package": "gloss",
          "signature": "Int-\u003eInt-\u003eBitmapData-\u003eBool-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(size). Copy a \u003ccode\u003e\u003ca\u003eBMP\u003c/a\u003e\u003c/code\u003e file into a bitmap.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfBMP",
          "package": "gloss",
          "signature": "BMP -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfBMP",
          "type": "function"
        },
        "index": {
          "description": "size Copy BMP file into bitmap",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfBMP",
          "normalized": "BMP-\u003ePicture",
          "package": "gloss",
          "partial": "Of BMP",
          "signature": "BMP-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(size). Copy a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e of RGBA data into a bitmap with the given\n   width and height.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n   between frames for speed. If you are programatically generating\n   the image for each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. If you have loaded it\n   from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfByteString",
          "package": "gloss",
          "signature": "Int -\u003e Int -\u003e ByteString -\u003e Bool -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfByteString",
          "type": "function"
        },
        "index": {
          "description": "size Copy ByteString of RGBA data into bitmap with the given width and height The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfByteString",
          "normalized": "Int-\u003eInt-\u003eByteString-\u003eBool-\u003ePicture",
          "package": "gloss",
          "partial": "Of Byte String",
          "signature": "Int-\u003eInt-\u003eByteString-\u003eBool-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Use a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e of RGBA data as a bitmap with the given\n   width and height.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfForeignPtr",
          "package": "gloss",
          "signature": "Int -\u003e Int -\u003e ForeignPtr Word8 -\u003e Bool -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfForeignPtr",
          "type": "function"
        },
        "index": {
          "description": "Use ForeignPtr of RGBA data as bitmap with the given width and height",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "bitmapOfForeignPtr",
          "normalized": "Int-\u003eInt-\u003eForeignPtr Word-\u003eBool-\u003ePicture",
          "package": "gloss",
          "partial": "Of Foreign Ptr",
          "signature": "Int-\u003eInt-\u003eForeignPtr Word-\u003eBool-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfForeignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA blank picture, with nothing in it.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "blank",
          "package": "gloss",
          "signature": "Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#blank",
          "type": "function"
        },
        "index": {
          "description": "blank picture with nothing in it",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "blank",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle with the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "circle",
          "package": "gloss",
          "signature": "Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#circle",
          "type": "function"
        },
        "index": {
          "description": "circle with the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "circle",
          "normalized": "Float-\u003ePicture",
          "package": "gloss",
          "signature": "Float-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solid circle with the given radius.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "circleSolid",
          "package": "gloss",
          "signature": "Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#circleSolid",
          "type": "function"
        },
        "index": {
          "description": "solid circle with the given radius",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "circleSolid",
          "normalized": "Float-\u003ePicture",
          "package": "gloss",
          "partial": "Solid",
          "signature": "Float-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:circleSolid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture drawn with this color.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "color",
          "package": "gloss",
          "signature": "Color -\u003e Picture -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#color",
          "type": "function"
        },
        "index": {
          "description": "picture drawn with this color",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "color",
          "normalized": "Color-\u003ePicture-\u003ePicture",
          "package": "gloss",
          "signature": "Color-\u003ePicture-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line along an arbitrary path.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "line",
          "package": "gloss",
          "signature": "Path -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#line",
          "type": "function"
        },
        "index": {
          "description": "line along an arbitrary path",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "line",
          "normalized": "Path-\u003ePicture",
          "package": "gloss",
          "signature": "Path-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed loop along a path.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "lineLoop",
          "package": "gloss",
          "signature": "Path -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#lineLoop",
          "type": "function"
        },
        "index": {
          "description": "closed loop along path",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "lineLoop",
          "normalized": "Path-\u003ePicture",
          "package": "gloss",
          "partial": "Loop",
          "signature": "Path-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:lineLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an uncompressed 24 or 32bit RGBA BMP file as a bitmap.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "loadBMP",
          "package": "gloss",
          "signature": "FilePath -\u003e IO Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#loadBMP",
          "type": "function"
        },
        "index": {
          "description": "Load an uncompressed or bit RGBA BMP file as bitmap",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "loadBMP",
          "normalized": "FilePath-\u003eIO Picture",
          "package": "gloss",
          "partial": "BMP",
          "signature": "FilePath-\u003eIO Picture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:loadBMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture consisting of several others.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "pictures",
          "package": "gloss",
          "signature": "[Picture] -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#pictures",
          "type": "function"
        },
        "index": {
          "description": "picture consisting of several others",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "pictures",
          "normalized": "[Picture]-\u003ePicture",
          "package": "gloss",
          "signature": "[Picture]-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:pictures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convex polygon filled with a solid color.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "polygon",
          "package": "gloss",
          "signature": "Path -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#polygon",
          "type": "function"
        },
        "index": {
          "description": "convex polygon filled with solid color",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "polygon",
          "normalized": "Path-\u003ePicture",
          "package": "gloss",
          "signature": "Path-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path representing a rectangle centered about the origin\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectanglePath",
          "package": "gloss",
          "signature": "Float-\u003e Float-\u003e Path",
          "type": "function"
        },
        "index": {
          "description": "path representing rectangle centered about the origin",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectanglePath",
          "normalized": "Float-\u003eFloat-\u003ePath",
          "package": "gloss",
          "partial": "Path",
          "signature": "Float-\u003eFloat-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectanglePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solid rectangle centered about the origin.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleSolid",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#rectangleSolid",
          "type": "function"
        },
        "index": {
          "description": "solid rectangle centered about the origin",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleSolid",
          "normalized": "Float-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Solid",
          "signature": "Float-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleSolid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path representing a rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperPath",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Path",
          "source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperPath",
          "type": "function"
        },
        "index": {
          "description": "path representing rectangle in the half of the x-y plane",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperPath",
          "normalized": "Float-\u003eFloat-\u003ePath",
          "package": "gloss",
          "partial": "Upper Path",
          "signature": "Float-\u003eFloat-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solid rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperSolid",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperSolid",
          "type": "function"
        },
        "index": {
          "description": "solid rectangle in the half of the x-y plane",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperSolid",
          "normalized": "Float-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Upper Solid",
          "signature": "Float-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperSolid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wireframe rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperWire",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperWire",
          "type": "function"
        },
        "index": {
          "description": "wireframe rectangle in the half of the x-y plane",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleUpperWire",
          "normalized": "Float-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Upper Wire",
          "signature": "Float-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wireframe rectangle centered about the origin.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleWire",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#rectangleWire",
          "type": "function"
        },
        "index": {
          "description": "wireframe rectangle centered about the origin",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rectangleWire",
          "normalized": "Float-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Wire",
          "signature": "Float-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture rotated clockwise by the given angle (in degrees).\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rotate",
          "package": "gloss",
          "signature": "Float -\u003e Picture -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "picture rotated clockwise by the given angle in degrees",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "rotate",
          "normalized": "Float-\u003ePicture-\u003ePicture",
          "package": "gloss",
          "signature": "Float-\u003ePicture-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture scaled by the given x and y factors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "scale",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#scale",
          "type": "function"
        },
        "index": {
          "description": "picture scaled by the given and factors",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "scale",
          "normalized": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
          "package": "gloss",
          "signature": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wireframe sector of a circle. \n   An arc is draw counter-clockwise from the first to the second angle at\n   the given radius. Lines are drawn from the origin to the ends of the arc.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "sectorWire",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#sectorWire",
          "type": "function"
        },
        "index": {
          "description": "wireframe sector of circle An arc is draw counter-clockwise from the first to the second angle at the given radius Lines are drawn from the origin to the ends of the arc",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "sectorWire",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Wire",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:sectorWire"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome text to draw with a vector font.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "text",
          "package": "gloss",
          "signature": "String -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#text",
          "type": "function"
        },
        "index": {
          "description": "Some text to draw with vector font",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "text",
          "normalized": "String-\u003ePicture",
          "package": "gloss",
          "signature": "String-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles (in degrees),\n   with the given radius  and thickness.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eArc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "thickArc",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#thickArc",
          "type": "function"
        },
        "index": {
          "description": "circular arc drawn counter-clockwise between two angles in degrees with the given radius and thickness If the thickness is then this is equivalent to Arc",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "thickArc",
          "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Arc",
          "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:thickArc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA circle with the given thickness and radius.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "thickCircle",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#thickCircle",
          "type": "function"
        },
        "index": {
          "description": "circle with the given thickness and radius If the thickness is then this is equivalent to Circle",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "thickCircle",
          "normalized": "Float-\u003eFloat-\u003ePicture",
          "package": "gloss",
          "partial": "Circle",
          "signature": "Float-\u003eFloat-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:thickCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture translated by the given x and y coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "translate",
          "package": "gloss",
          "signature": "Float -\u003e Float -\u003e Picture -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-Picture.html#translate",
          "type": "function"
        },
        "index": {
          "description": "picture translated by the given and coordinates",
          "hierarchy": "Graphics Gloss Data Picture",
          "module": "Graphics.Gloss.Data.Picture",
          "name": "translate",
          "normalized": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
          "package": "gloss",
          "signature": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Point",
          "name": "Point",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Point.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Point",
          "module": "Graphics.Gloss.Data.Point",
          "name": "Point",
          "package": "gloss",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Point",
          "name": "Point",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Point.html#Point",
          "type": "type"
        },
        "index": {
          "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
          "hierarchy": "Graphics Gloss Data Point",
          "module": "Graphics.Gloss.Data.Point",
          "name": "Point",
          "package": "gloss",
          "partial": "Point",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a point lies within a rectangular box that is oriented\n   on the x-y plane. The points P1-P2 are opposing points of the box,\n   but need not be in a particular order.\n\u003c/p\u003e\u003cpre\u003e\n    P2 +-------+\n       |       |\n       | + P0  |\n       |       |\n       +-------+ P1\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Data.Point",
          "name": "pointInBox",
          "package": "gloss",
          "signature": "Point -\u003e Point -\u003e Point -\u003e Bool",
          "source": "src/Graphics-Gloss-Data-Point.html#pointInBox",
          "type": "function"
        },
        "index": {
          "description": "Test whether point lies within rectangular box that is oriented on the x-y plane The points P1-P2 are opposing points of the box but need not be in particular order P2 P0 P1",
          "hierarchy": "Graphics Gloss Data Point",
          "module": "Graphics.Gloss.Data.Point",
          "name": "pointInBox",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003eBool",
          "package": "gloss",
          "partial": "In Box",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#v:pointInBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.Quad",
          "name": "Quad",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Quad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "Quad",
          "package": "gloss",
          "partial": "Quad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a Quadrant in the 2D plane.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "Quad",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Quad.html#Quad",
          "type": "data"
        },
        "index": {
          "description": "Represents Quadrant in the plane",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "Quad",
          "package": "gloss",
          "partial": "Quad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#t:Quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth East\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "NE",
          "package": "gloss",
          "signature": "NE",
          "source": "src/Graphics-Gloss-Data-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "description": "North East",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "NE",
          "package": "gloss",
          "partial": "NE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:NE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth West\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "NW",
          "package": "gloss",
          "signature": "NW",
          "source": "src/Graphics-Gloss-Data-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "description": "North West",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "NW",
          "package": "gloss",
          "partial": "NW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:NW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth East\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "SE",
          "package": "gloss",
          "signature": "SE",
          "source": "src/Graphics-Gloss-Data-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "description": "South East",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "SE",
          "package": "gloss",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth West\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "SW",
          "package": "gloss",
          "signature": "SW",
          "source": "src/Graphics-Gloss-Data-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "description": "South West",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "SW",
          "package": "gloss",
          "partial": "SW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:SW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all quadrants. Same as \u003ccode\u003e[NW .. SE]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "allQuads",
          "package": "gloss",
          "signature": "[Quad]",
          "source": "src/Graphics-Gloss-Data-Quad.html#allQuads",
          "type": "function"
        },
        "index": {
          "description": "list of all quadrants Same as NW SE",
          "hierarchy": "Graphics Gloss Data Quad",
          "module": "Graphics.Gloss.Data.Quad",
          "name": "allQuads",
          "normalized": "[Quad]",
          "package": "gloss",
          "partial": "Quads",
          "signature": "[Quad]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:allQuads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA QuadTree can be used to recursively divide up 2D space into quadrants.\n   The smallest division corresponds to an unit \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e, so the total depth \n   of the tree will depend on what sized \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e you start with.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "QuadTree",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-QuadTree.html",
          "type": "module"
        },
        "index": {
          "description": "QuadTree can be used to recursively divide up space into quadrants The smallest division corresponds to an unit Extent so the total depth of the tree will depend on what sized Extent you start with",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "QuadTree",
          "package": "gloss",
          "partial": "Quad Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe quad tree structure.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "QuadTree",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
          "type": "data"
        },
        "index": {
          "description": "The quad tree structure",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "QuadTree",
          "package": "gloss",
          "partial": "Quad Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#t:QuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA leaf containint some value.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TLeaf",
          "package": "gloss",
          "signature": "TLeaf a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
          "type": "function"
        },
        "index": {
          "description": "leaf containint some value",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TLeaf",
          "package": "gloss",
          "partial": "TLeaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty node.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TNil",
          "package": "gloss",
          "signature": "TNil",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
          "type": "function"
        },
        "index": {
          "description": "An empty node",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TNil",
          "package": "gloss",
          "partial": "TNil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node with four children.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TNode",
          "package": "gloss",
          "signature": "TNode (QuadTree a) (QuadTree a) (QuadTree a) (QuadTree a)",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
          "type": "function"
        },
        "index": {
          "description": "node with four children",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "TNode",
          "package": "gloss",
          "partial": "TNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA node with \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e. for all its branches.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "emptyNode",
          "package": "gloss",
          "signature": "QuadTree a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#emptyNode",
          "type": "function"
        },
        "index": {
          "description": "node with TNil for all its branches",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "emptyNode",
          "package": "gloss",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:emptyNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e tree.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "emptyTree",
          "package": "gloss",
          "signature": "QuadTree a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#emptyTree",
          "type": "function"
        },
        "index": {
          "description": "TNil tree",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "emptyTree",
          "package": "gloss",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:emptyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a QuadTree into a list of its contained values, with coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "flattenQuadTree",
          "package": "gloss",
          "signature": "Extent-\u003e QuadTree a-\u003e [(Coord, a)]",
          "type": "function"
        },
        "index": {
          "description": "Flatten QuadTree into list of its contained values with coordinates",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "flattenQuadTree",
          "normalized": "Extent-\u003eQuadTree a-\u003e[(Coord,a)]",
          "package": "gloss",
          "partial": "Quad Tree",
          "signature": "Extent-\u003eQuadTree a-\u003e[(Coord,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:flattenQuadTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a QuadTree into a list of its contained values, with coordinates.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "flattenQuadTreeWithExtents",
          "package": "gloss",
          "signature": "Extent-\u003e QuadTree a-\u003e [(Extent, a)]",
          "type": "function"
        },
        "index": {
          "description": "Flatten QuadTree into list of its contained values with coordinates",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "flattenQuadTreeWithExtents",
          "normalized": "Extent-\u003eQuadTree a-\u003e[(Extent,a)]",
          "package": "gloss",
          "partial": "Quad Tree With Extents",
          "signature": "Extent-\u003eQuadTree a-\u003e[(Extent,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:flattenQuadTreeWithExtents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into the node containing this coordinate.\n   The node is created at maximum depth, corresponding to an unit \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "insertByCoord",
          "package": "gloss",
          "signature": "Extent -\u003e Coord -\u003e a -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#insertByCoord",
          "type": "function"
        },
        "index": {
          "description": "Insert value into the node containing this coordinate The node is created at maximum depth corresponding to an unit Extent",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "insertByCoord",
          "normalized": "Extent-\u003eCoord-\u003ea-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "package": "gloss",
          "partial": "By Coord",
          "signature": "Extent-\u003eCoord-\u003ea-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:insertByCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into the tree at the position given by a path.\n   If the path intersects an existing \u003ccode\u003e\u003ca\u003eTLeaf\u003c/a\u003e\u003c/code\u003e then return the original tree.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "insertByPath",
          "package": "gloss",
          "signature": "[Quad] -\u003e a -\u003e QuadTree a -\u003e QuadTree a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#insertByPath",
          "type": "function"
        },
        "index": {
          "description": "Insert value into the tree at the position given by path If the path intersects an existing TLeaf then return the original tree",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "insertByPath",
          "normalized": "[Quad]-\u003ea-\u003eQuadTree a-\u003eQuadTree a",
          "package": "gloss",
          "partial": "By Path",
          "signature": "[Quad]-\u003ea-\u003eQuadTree a-\u003eQuadTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:insertByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to a quadrant of a node.\n   If the tree does not have an outer node then return the original tree.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "liftToQuad",
          "package": "gloss",
          "signature": "Quad -\u003e (QuadTree a -\u003e QuadTree a) -\u003e QuadTree a -\u003e QuadTree a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#liftToQuad",
          "type": "function"
        },
        "index": {
          "description": "Apply function to quadrant of node If the tree does not have an outer node then return the original tree",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "liftToQuad",
          "normalized": "Quad-\u003e(QuadTree a-\u003eQuadTree a)-\u003eQuadTree a-\u003eQuadTree a",
          "package": "gloss",
          "partial": "To Quad",
          "signature": "Quad-\u003e(QuadTree a-\u003eQuadTree a)-\u003eQuadTree a-\u003eQuadTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:liftToQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a node if a tree given a coordinate which it contains.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupByCoord",
          "package": "gloss",
          "signature": "Extent-\u003e Coord-\u003e QuadTree a-\u003e Maybe a",
          "type": "function"
        },
        "index": {
          "description": "Lookup node if tree given coordinate which it contains",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupByCoord",
          "normalized": "Extent-\u003eCoord-\u003eQuadTree a-\u003eMaybe a",
          "package": "gloss",
          "partial": "By Coord",
          "signature": "Extent-\u003eCoord-\u003eQuadTree a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupByCoord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup an element based given a path to it.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupByPath",
          "package": "gloss",
          "signature": "[Quad] -\u003e QuadTree a -\u003e Maybe a",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#lookupByPath",
          "type": "function"
        },
        "index": {
          "description": "Lookup an element based given path to it",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupByPath",
          "normalized": "[Quad]-\u003eQuadTree a-\u003eMaybe a",
          "package": "gloss",
          "partial": "By Path",
          "signature": "[Quad]-\u003eQuadTree a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a node based on a path to it.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupNodeByPath",
          "package": "gloss",
          "signature": "[Quad] -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#lookupNodeByPath",
          "type": "function"
        },
        "index": {
          "description": "Lookup node based on path to it",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "lookupNodeByPath",
          "normalized": "[Quad]-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "package": "gloss",
          "partial": "Node By Path",
          "signature": "[Quad]-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupNodeByPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a quadrant from a node.\n   If the tree does not have an outer node then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "takeQuadOfTree",
          "package": "gloss",
          "signature": "Quad -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
          "source": "src/Graphics-Gloss-Data-QuadTree.html#takeQuadOfTree",
          "type": "function"
        },
        "index": {
          "description": "Get quadrant from node If the tree does not have an outer node then Nothing",
          "hierarchy": "Graphics Gloss Data QuadTree",
          "module": "Graphics.Gloss.Data.QuadTree",
          "name": "takeQuadOfTree",
          "normalized": "Quad-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "package": "gloss",
          "partial": "Quad Of Tree",
          "signature": "Quad-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:takeQuadOfTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning vectors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "Vector",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Geometric functions concerning vectors",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "Vector",
          "package": "gloss",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector can be treated as a point, and vis-versa.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "Vector",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Vector.html#Vector",
          "type": "type"
        },
        "index": {
          "description": "vector can be treated as point and vis-versa",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "Vector",
          "package": "gloss",
          "partial": "Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the inner angle (in radians) between two vectors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "angleVV",
          "package": "gloss",
          "signature": "Vector -\u003e Vector -\u003e Float",
          "source": "src/Graphics-Gloss-Data-Vector.html#angleVV",
          "type": "function"
        },
        "index": {
          "description": "Compute the inner angle in radians between two vectors",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "angleVV",
          "normalized": "Vector-\u003eVector-\u003eFloat",
          "package": "gloss",
          "partial": "VV",
          "signature": "Vector-\u003eVector-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:angleVV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe angle of this vector, relative to the +ve x-axis.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "argV",
          "package": "gloss",
          "signature": "Vector -\u003e Float",
          "source": "src/Graphics-Gloss-Data-Vector.html#argV",
          "type": "function"
        },
        "index": {
          "description": "The angle of this vector relative to the ve x-axis",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "argV",
          "normalized": "Vector-\u003eFloat",
          "package": "gloss",
          "signature": "Vector-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:argV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe determinant of two vectors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "detV",
          "package": "gloss",
          "signature": "Vector -\u003e Vector -\u003e Float",
          "source": "src/Graphics-Gloss-Data-Vector.html#detV",
          "type": "function"
        },
        "index": {
          "description": "The determinant of two vectors",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "detV",
          "normalized": "Vector-\u003eVector-\u003eFloat",
          "package": "gloss",
          "signature": "Vector-\u003eVector-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:detV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dot product of two vectors.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "dotV",
          "package": "gloss",
          "signature": "Vector -\u003e Vector -\u003e Float",
          "source": "src/Graphics-Gloss-Data-Vector.html#dotV",
          "type": "function"
        },
        "index": {
          "description": "The dot product of two vectors",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "dotV",
          "normalized": "Vector-\u003eVector-\u003eFloat",
          "package": "gloss",
          "signature": "Vector-\u003eVector-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:dotV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe magnitude of a vector.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "magV",
          "package": "gloss",
          "signature": "Vector -\u003e Float",
          "source": "src/Graphics-Gloss-Data-Vector.html#magV",
          "type": "function"
        },
        "index": {
          "description": "The magnitude of vector",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "magV",
          "normalized": "Vector-\u003eFloat",
          "package": "gloss",
          "signature": "Vector-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:magV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a vector by a scalar.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "mulSV",
          "package": "gloss",
          "signature": "Float -\u003e Vector -\u003e Vector",
          "source": "src/Graphics-Gloss-Data-Vector.html#mulSV",
          "type": "function"
        },
        "index": {
          "description": "Multiply vector by scalar",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "mulSV",
          "normalized": "Float-\u003eVector-\u003eVector",
          "package": "gloss",
          "partial": "SV",
          "signature": "Float-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:mulSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a vector, so it has a magnitude of 1.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "normaliseV",
          "package": "gloss",
          "signature": "Vector -\u003e Vector",
          "source": "src/Graphics-Gloss-Data-Vector.html#normaliseV",
          "type": "function"
        },
        "index": {
          "description": "Normalise vector so it has magnitude of",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "normaliseV",
          "normalized": "Vector-\u003eVector",
          "package": "gloss",
          "signature": "Vector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:normaliseV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate a vector by an angle (in radians). +ve angle is counter-clockwise.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "rotateV",
          "package": "gloss",
          "signature": "Float -\u003e Vector -\u003e Vector",
          "source": "src/Graphics-Gloss-Data-Vector.html#rotateV",
          "type": "function"
        },
        "index": {
          "description": "Rotate vector by an angle in radians ve angle is counter-clockwise",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "rotateV",
          "normalized": "Float-\u003eVector-\u003eVector",
          "package": "gloss",
          "signature": "Float-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:rotateV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a unit vector at a given angle relative to the +ve x-axis.\n\tThe provided angle is in radians.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "unitVectorAtAngle",
          "package": "gloss",
          "signature": "Float -\u003e Vector",
          "source": "src/Graphics-Gloss-Data-Vector.html#unitVectorAtAngle",
          "type": "function"
        },
        "index": {
          "description": "Produce unit vector at given angle relative to the ve x-axis The provided angle is in radians",
          "hierarchy": "Graphics Gloss Data Vector",
          "module": "Graphics.Gloss.Data.Vector",
          "name": "unitVectorAtAngle",
          "normalized": "Float-\u003eVector",
          "package": "gloss",
          "partial": "Vector At Angle",
          "signature": "Float-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:unitVectorAtAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "ViewPort",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewPort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "ViewPort",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "data"
        },
        "index": {
          "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#t:ViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\",\"Graphics.Gloss.Interface.IO.Simulate\",\"Graphics.Gloss.Interface.Pure.Simulate\"]",
          "name": "ViewPort",
          "package": "gloss",
          "signature": "ViewPort",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:ViewPort\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:ViewPort\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:ViewPort\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:ViewPort\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:ViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslates, rotates, and scales an image according to the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\"]",
          "name": "applyViewPortToPicture",
          "package": "gloss",
          "signature": "ViewPort -\u003e Picture -\u003e Picture",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#applyViewPortToPicture",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:applyViewPortToPicture\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:applyViewPortToPicture\"]"
        },
        "index": {
          "description": "Translates rotates and scales an image according to the ViewPort",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "applyViewPortToPicture",
          "normalized": "ViewPort-\u003ePicture-\u003ePicture",
          "package": "gloss",
          "partial": "View Port To Picture",
          "signature": "ViewPort-\u003ePicture-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:applyViewPortToPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a point using screen coordinates, and uses the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e to convert\n   it to Picture coordinates. This is the inverse of \u003ccode\u003e\u003ca\u003eapplyViewPortToPicture\u003c/a\u003e\u003c/code\u003e \n   for points.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\"]",
          "name": "invertViewPort",
          "package": "gloss",
          "signature": "ViewPort -\u003e Point -\u003e Point",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#invertViewPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:invertViewPort\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:invertViewPort\"]"
        },
        "index": {
          "description": "Takes point using screen coordinates and uses the ViewPort to convert it to Picture coordinates This is the inverse of applyViewPortToPicture for points",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "invertViewPort",
          "normalized": "ViewPort-\u003ePoint-\u003ePoint",
          "package": "gloss",
          "partial": "View Port",
          "signature": "ViewPort-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:invertViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial state of the viewport.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "viewPortInit",
          "package": "gloss",
          "signature": "ViewPort",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#viewPortInit",
          "type": "function"
        },
        "index": {
          "description": "The initial state of the viewport",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "viewPortInit",
          "package": "gloss",
          "partial": "Port Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal rotation (in degrees).\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\",\"Graphics.Gloss.Interface.IO.Simulate\",\"Graphics.Gloss.Interface.Pure.Simulate\"]",
          "name": "viewPortRotate",
          "package": "gloss",
          "signature": "Float",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortRotate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortRotate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortRotate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortRotate\"]"
        },
        "index": {
          "description": "Global rotation in degrees",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "viewPortRotate",
          "package": "gloss",
          "partial": "Port Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal scaling (of both x and y coordinates).\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\",\"Graphics.Gloss.Interface.IO.Simulate\",\"Graphics.Gloss.Interface.Pure.Simulate\"]",
          "name": "viewPortScale",
          "package": "gloss",
          "signature": "Float",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortScale\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortScale\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortScale\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortScale\"]"
        },
        "index": {
          "description": "Global scaling of both and coordinates",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "viewPortScale",
          "package": "gloss",
          "partial": "Port Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal translation.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Data.ViewPort\",\"Graphics.Gloss.Data.ViewState\",\"Graphics.Gloss.Interface.IO.Simulate\",\"Graphics.Gloss.Interface.Pure.Simulate\"]",
          "name": "viewPortTranslate",
          "package": "gloss",
          "signature": "(Float, Float)",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortTranslate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortTranslate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortTranslate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortTranslate\"]"
        },
        "index": {
          "description": "Global translation",
          "hierarchy": "Graphics Gloss Data ViewPort",
          "module": "Graphics.Gloss.Data.ViewPort",
          "name": "viewPortTranslate",
          "normalized": "(Float,Float)",
          "package": "gloss",
          "partial": "Port Translate",
          "signature": "(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewState.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "partial": "View State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe commands suported by the view controller.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "Command",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "data"
        },
        "index": {
          "description": "The commands suported by the view controller",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "Command",
          "package": "gloss",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CommandConfig",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewState.html#CommandConfig",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CommandConfig",
          "package": "gloss",
          "partial": "Command Config",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:CommandConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewPort",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "data"
        },
        "index": {
          "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:ViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState for controlling the viewport.\n      These are used by the viewport control component.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "data"
        },
        "index": {
          "description": "State for controlling the viewport These are used by the viewport control component",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "partial": "View State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:ViewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpCClockwise",
          "package": "gloss",
          "signature": "CBumpCClockwise",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpCClockwise",
          "package": "gloss",
          "partial": "CBump CClockwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpCClockwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpClockwise",
          "package": "gloss",
          "signature": "CBumpClockwise",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpClockwise",
          "package": "gloss",
          "partial": "CBump Clockwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpClockwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpDown",
          "package": "gloss",
          "signature": "CBumpDown",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpDown",
          "package": "gloss",
          "partial": "CBump Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpLeft",
          "package": "gloss",
          "signature": "CBumpLeft",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpLeft",
          "package": "gloss",
          "partial": "CBump Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpRight",
          "package": "gloss",
          "signature": "CBumpRight",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpRight",
          "package": "gloss",
          "partial": "CBump Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpUp",
          "package": "gloss",
          "signature": "CBumpUp",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpUp",
          "package": "gloss",
          "partial": "CBump Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpZoomIn",
          "package": "gloss",
          "signature": "CBumpZoomIn",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpZoomIn",
          "package": "gloss",
          "partial": "CBump Zoom In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpZoomIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpZoomOut",
          "package": "gloss",
          "signature": "CBumpZoomOut",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CBumpZoomOut",
          "package": "gloss",
          "partial": "CBump Zoom Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpZoomOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CRestore",
          "package": "gloss",
          "signature": "CRestore",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CRestore",
          "package": "gloss",
          "partial": "CRestore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CRestore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CRotate",
          "package": "gloss",
          "signature": "CRotate",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CRotate",
          "package": "gloss",
          "partial": "CRotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CRotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CTranslate",
          "package": "gloss",
          "signature": "CTranslate",
          "source": "src/Graphics-Gloss-Data-ViewState.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "CTranslate",
          "package": "gloss",
          "partial": "CTranslate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "signature": "ViewState",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "ViewState",
          "package": "gloss",
          "partial": "View State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:ViewState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default commands.  Left click pans, wheel zooms, right click\n   rotates, \u003ca\u003er\u003c/a\u003e key resets.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "defaultCommandConfig",
          "package": "gloss",
          "signature": "CommandConfig",
          "source": "src/Graphics-Gloss-Data-ViewState.html#defaultCommandConfig",
          "type": "function"
        },
        "index": {
          "description": "The default commands Left click pans wheel zooms right click rotates key resets",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "defaultCommandConfig",
          "package": "gloss",
          "partial": "Command Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:defaultCommandConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an event to a \u003ccode\u003e\u003ca\u003eViewState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "updateViewStateWithEvent",
          "package": "gloss",
          "signature": "Event -\u003e ViewState -\u003e ViewState",
          "source": "src/Graphics-Gloss-Data-ViewState.html#updateViewStateWithEvent",
          "type": "function"
        },
        "index": {
          "description": "Apply an event to ViewState",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "updateViewStateWithEvent",
          "normalized": "Event-\u003eViewState-\u003eViewState",
          "package": "gloss",
          "partial": "View State With Event",
          "signature": "Event-\u003eViewState-\u003eViewState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:updateViewStateWithEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdateViewStateWithEvent\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no update\n   was needed.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "updateViewStateWithEventMaybe",
          "package": "gloss",
          "signature": "Event -\u003e ViewState -\u003e Maybe ViewState",
          "source": "src/Graphics-Gloss-Data-ViewState.html#updateViewStateWithEventMaybe",
          "type": "function"
        },
        "index": {
          "description": "Like updateViewStateWithEvent but returns Nothing if no update was needed",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "updateViewStateWithEventMaybe",
          "normalized": "Event-\u003eViewState-\u003eMaybe ViewState",
          "package": "gloss",
          "partial": "View State With Event Maybe",
          "signature": "Event-\u003eViewState-\u003eMaybe ViewState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:updateViewStateWithEventMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe command list for the viewport controller.\n      These can be safely overwridden at any time by deleting\n      or adding entries to the list.\n      Entries at the front of the list take precedence.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateCommands",
          "package": "gloss",
          "signature": "(Map Command [(Key, Maybe Modifiers)])",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "description": "The command list for the viewport controller These can be safely overwridden at any time by deleting or adding entries to the list Entries at the front of the list take precedence",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateCommands",
          "normalized": "(Map Command[(Key,Maybe Modifiers)])",
          "package": "gloss",
          "partial": "State Commands",
          "signature": "(Map Command[(Key,Maybe Modifiers)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial view state.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateInit",
          "package": "gloss",
          "signature": "ViewState",
          "source": "src/Graphics-Gloss-Data-ViewState.html#viewStateInit",
          "type": "function"
        },
        "index": {
          "description": "The initial view state",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateInit",
          "package": "gloss",
          "partial": "State Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial view state, with user defined config.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateInitWithConfig",
          "package": "gloss",
          "signature": "CommandConfig -\u003e ViewState",
          "source": "src/Graphics-Gloss-Data-ViewState.html#viewStateInitWithConfig",
          "type": "function"
        },
        "index": {
          "description": "Initial view state with user defined config",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateInitWithConfig",
          "normalized": "CommandConfig-\u003eViewState",
          "package": "gloss",
          "partial": "State Init With Config",
          "signature": "CommandConfig-\u003eViewState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateInitWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many degrees to rotate the world by for each pixel of x motion.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateRotateFactor",
          "package": "gloss",
          "signature": "Float",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "description": "How many degrees to rotate the world by for each pixel of motion",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateRotateFactor",
          "package": "gloss",
          "partial": "State Rotate Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateRotateFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuring viewport rotation,  \n      where the mouse was clicked on the window\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateRotateMark",
          "package": "gloss",
          "signature": "(Maybe (Float, Float))",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "description": "During viewport rotation where the mouse was clicked on the window",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateRotateMark",
          "normalized": "(Maybe(Float,Float))",
          "package": "gloss",
          "partial": "State Rotate Mark",
          "signature": "(Maybe(Float,Float))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateRotateMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow much to scale the world by for each step of the mouse wheel.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateScaleStep",
          "package": "gloss",
          "signature": "Float",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "description": "How much to scale the world by for each step of the mouse wheel",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateScaleStep",
          "package": "gloss",
          "partial": "State Scale Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateScaleStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuring viewport translation,\n      where the mouse was clicked on the window.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateTranslateMark",
          "package": "gloss",
          "signature": "(Maybe (Float, Float))",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "description": "During viewport translation where the mouse was clicked on the window",
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateTranslateMark",
          "normalized": "(Maybe(Float,Float))",
          "package": "gloss",
          "partial": "State Translate Mark",
          "signature": "(Maybe(Float,Float))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateTranslateMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateViewPort",
          "package": "gloss",
          "signature": "ViewPort",
          "source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Data ViewState",
          "module": "Graphics.Gloss.Data.ViewState",
          "name": "viewStateViewPort",
          "package": "gloss",
          "partial": "State View Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning angles. If not otherwise specified, all angles are in radians.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "Angle",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Geometry-Angle.html",
          "type": "module"
        },
        "index": {
          "description": "Geometric functions concerning angles If not otherwise specified all angles are in radians",
          "hierarchy": "Graphics Gloss Geometry Angle",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "Angle",
          "package": "gloss",
          "partial": "Angle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert degrees to radians\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "degToRad",
          "package": "gloss",
          "signature": "Float -\u003e Float",
          "source": "src/Graphics-Gloss-Geometry-Angle.html#degToRad",
          "type": "function"
        },
        "index": {
          "description": "Convert degrees to radians",
          "hierarchy": "Graphics Gloss Geometry Angle",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "degToRad",
          "normalized": "Float-\u003eFloat",
          "package": "gloss",
          "partial": "To Rad",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:degToRad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise an angle to be between 0 and 2*pi radians\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "normaliseAngle",
          "package": "gloss",
          "signature": "Float -\u003e Float",
          "source": "src/Graphics-Gloss-Geometry-Angle.html#normaliseAngle",
          "type": "function"
        },
        "index": {
          "description": "Normalise an angle to be between and pi radians",
          "hierarchy": "Graphics Gloss Geometry Angle",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "normaliseAngle",
          "normalized": "Float-\u003eFloat",
          "package": "gloss",
          "partial": "Angle",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:normaliseAngle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert radians to degrees\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "radToDeg",
          "package": "gloss",
          "signature": "Float -\u003e Float",
          "source": "src/Graphics-Gloss-Geometry-Angle.html#radToDeg",
          "type": "function"
        },
        "index": {
          "description": "Convert radians to degrees",
          "hierarchy": "Graphics Gloss Geometry Angle",
          "module": "Graphics.Gloss.Geometry.Angle",
          "name": "radToDeg",
          "normalized": "Float-\u003eFloat",
          "package": "gloss",
          "partial": "To Deg",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:radToDeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning lines and segments.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eLine\u003c/code\u003e is taken to be infinite in length, while a \u003ccode\u003eSeg\u003c/code\u003e is finite length\n   line segment represented by its two endpoints. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "Line",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Geometry-Line.html",
          "type": "module"
        },
        "index": {
          "description": "Geometric functions concerning lines and segments Line is taken to be infinite in length while Seg is finite length line segment represented by its two endpoints",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "Line",
          "package": "gloss",
          "partial": "Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an infinite line which intersects \u003ccode\u003eP1\u003c/code\u003e and \u003ccode\u003eP1\u003c/code\u003e,\n\treturn the point on that line that is closest to \u003ccode\u003eP3\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "closestPointOnLine",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Point",
          "type": "function"
        },
        "index": {
          "description": "Given an infinite line which intersects P1 and P1 return the point on that line that is closest to P3",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "closestPointOnLine",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint",
          "package": "gloss",
          "partial": "Point On Line",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:closestPointOnLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an infinite line which intersects P1 and P2,\n\tlet P4 be the point on the line that is closest to P3.\n\u003c/p\u003e\u003cp\u003eReturn an indication of where on the line P4 is relative to P1 and P2.\n\u003c/p\u003e\u003cpre\u003e\n      if P4 == P1 then 0\n      if P4 == P2 then 1\n      if P4 is halfway between P1 and P2 then 0.5\n\u003c/pre\u003e\u003cpre\u003e\n        |\n       P1\n        | \n     P4 +---- P3      \n        |\n       P2\n        |\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "closestPointOnLineParam",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Float",
          "type": "function"
        },
        "index": {
          "description": "Given an infinite line which intersects P1 and P2 let P4 be the point on the line that is closest to P3 Return an indication of where on the line P4 is relative to P1 and P2 if P4 P1 then if P4 P2 then if P4 is halfway between P1 and P2 then P1 P4 P3 P2",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "closestPointOnLineParam",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003eFloat",
          "package": "gloss",
          "partial": "Point On Line Param",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:closestPointOnLineParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven four points specifying two lines, get the point where the two lines\n   cross, if any. Note that the lines extend off to infinity, so the\n   intersection point might not line between either of the two pairs of points.\n\u003c/p\u003e\u003cpre\u003e\n     \\      /\n      P1  P4\n       \\ /\n        +\n       / \\\n      P3  P2\n     /     \\\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectLineLine",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Given four points specifying two lines get the point where the two lines cross if any Note that the lines extend off to infinity so the intersection point might not line between either of the two pairs of points P1 P4 P3 P2",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectLineLine",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Line Line",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectLineLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the point where a segment crosses a horizontal line, if any.\n\u003c/p\u003e\u003cpre\u003e \n                + P1\n               /\n       -------+---------\n             /        y0\n         P2 +\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegHorzLine",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Float-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Get the point where segment crosses horizontal line if any P1 y0 P2",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegHorzLine",
          "normalized": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Horz Line",
          "signature": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegHorzLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an arbitrary segment intersects a horizontal segment.\n\u003c/p\u003e\u003cpre\u003e\n                 + P2\n                /\n (xa, y3)  +---+----+ (xb, y3)\n              /\n          P1 +\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegHorzSeg",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Float-\u003e Float-\u003e Float-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Check if an arbitrary segment intersects horizontal segment P2 xa y3 xb y3 P1",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegHorzSeg",
          "normalized": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Horz Seg",
          "signature": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegHorzSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the point where a segment \u003ccode\u003eP1-P2\u003c/code\u003e crosses an infinite line \u003ccode\u003eP3-P4\u003c/code\u003e,\n   if any.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegLine",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Get the point where segment P1-P2 crosses an infinite line P3-P4 if any",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegLine",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Line",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the point where a segment \u003ccode\u003eP1-P2\u003c/code\u003e crosses another segement \u003ccode\u003eP3-P4\u003c/code\u003e,\n   if any.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegSeg",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Get the point where segment P1-P2 crosses another segement P3-P4 if any",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegSeg",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Seg",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the point where a segment crosses a vertical line, if any.\n\u003c/p\u003e\u003cpre\u003e\n              |\n              |   + P1\n              | /\n              +\n            / |\n       P2 +   |\n              | x0\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegVertLine",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Float-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Get the point where segment crosses vertical line if any P1 P2 x0",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegVertLine",
          "normalized": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Vert Line",
          "signature": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegVertLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an arbitrary segment intersects a vertical segment.\n\u003c/p\u003e\u003cpre\u003e\n      (x3, yb) +\n               |   + P1\n               | /\n               +\n             / |\n        P2 +   |\n               + (x3, ya)\n\u003c/pre\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegVertSeg",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Float-\u003e Float-\u003e Float-\u003e Maybe Point",
          "type": "function"
        },
        "index": {
          "description": "Check if an arbitrary segment intersects vertical segment x3 yb P1 P2 x3 ya",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "intersectSegVertSeg",
          "normalized": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
          "package": "gloss",
          "partial": "Seg Vert Seg",
          "signature": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegVertSeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if line segment (P1-P2) clears a box (P3-P4) by being well outside it.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "segClearsBox",
          "package": "gloss",
          "signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Check if line segment P1-P2 clears box P3-P4 by being well outside it",
          "hierarchy": "Graphics Gloss Geometry Line",
          "module": "Graphics.Gloss.Geometry.Line",
          "name": "segClearsBox",
          "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eBool",
          "package": "gloss",
          "partial": "Clears Box",
          "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:segClearsBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Geometry",
          "name": "Geometry",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Geometry.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Gloss Geometry",
          "module": "Graphics.Gloss.Geometry",
          "name": "Geometry",
          "package": "gloss",
          "partial": "Geometry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "Animate",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-IO-Animate.html",
          "type": "module"
        },
        "index": {
          "description": "Display mode is for drawing static picture",
          "hierarchy": "Graphics Gloss Interface IO Animate",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "Animate",
          "package": "gloss",
          "partial": "Animate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eanimateIO\u003c/a\u003e\u003c/code\u003e but don't allow the display to be panned around.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "animateFixedIO",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e (Float -\u003e IO Picture)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like animateIO but don allow the display to be panned around",
          "hierarchy": "Graphics Gloss Interface IO Animate",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "animateFixedIO",
          "normalized": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
          "package": "gloss",
          "partial": "Fixed IO",
          "signature": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#v:animateFixedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a new window and display the given animation.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "animateIO",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e (Float -\u003e IO Picture)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Open new window and display the given animation Once the window is open you can use the same commands as with display",
          "hierarchy": "Graphics Gloss Interface IO Animate",
          "module": "Graphics.Gloss.Interface.IO.Animate",
          "name": "animateIO",
          "normalized": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
          "package": "gloss",
          "partial": "IO",
          "signature": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#v:animateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis game mode lets you manage your own input. Pressing ESC will still abort the program,\n   but you don't get automatic pan and zoom controls like with \u003ccode\u003edisplayInWindow\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Game",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-IO-Game.html",
          "type": "module"
        },
        "index": {
          "description": "This game mode lets you manage your own input Pressing ESC will still abort the program but you don get automatic pan and zoom controls like with displayInWindow",
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Game",
          "package": "gloss",
          "partial": "Game",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible input events.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Event",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Possible input events",
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Event",
          "package": "gloss",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Key",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Key",
          "package": "gloss",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyState",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyState",
          "package": "gloss",
          "partial": "Key State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:KeyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Modifiers",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Modifiers",
          "package": "gloss",
          "partial": "Modifiers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Modifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "MouseButton",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "MouseButton",
          "package": "gloss",
          "partial": "Mouse Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "SpecialKey",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "SpecialKey",
          "package": "gloss",
          "partial": "Special Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "AdditionalButton",
          "package": "gloss",
          "signature": "AdditionalButton Int",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:AdditionalButton\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:AdditionalButton\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "AdditionalButton",
          "package": "gloss",
          "partial": "Additional Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:AdditionalButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "Char",
          "package": "gloss",
          "signature": "Char Char",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Char\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Char\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Char",
          "package": "gloss",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "Down",
          "package": "gloss",
          "signature": "Down",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Down\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Down\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Down",
          "package": "gloss",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "EventKey",
          "package": "gloss",
          "signature": "EventKey Key KeyState Modifiers (Float, Float)",
          "source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventKey\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "EventKey",
          "normalized": "EventKey Key KeyState Modifiers(Float,Float)",
          "package": "gloss",
          "partial": "Event Key",
          "signature": "EventKey Key KeyState Modifiers(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "EventMotion",
          "package": "gloss",
          "signature": "EventMotion (Float, Float)",
          "source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventMotion\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventMotion\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "EventMotion",
          "normalized": "EventMotion(Float,Float)",
          "package": "gloss",
          "partial": "Event Motion",
          "signature": "EventMotion(Float,Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventMotion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "EventResize",
          "package": "gloss",
          "signature": "EventResize (Int, Int)",
          "source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventResize\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventResize\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "EventResize",
          "normalized": "EventResize(Int,Int)",
          "package": "gloss",
          "partial": "Event Resize",
          "signature": "EventResize(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventResize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyBackspace",
          "package": "gloss",
          "signature": "KeyBackspace",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBackspace\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyBackspace\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyBackspace",
          "package": "gloss",
          "partial": "Key Backspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBackspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyBegin",
          "package": "gloss",
          "signature": "KeyBegin",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBegin\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyBegin\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyBegin",
          "package": "gloss",
          "partial": "Key Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyDelete",
          "package": "gloss",
          "signature": "KeyDelete",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDelete\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyDelete\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyDelete",
          "package": "gloss",
          "partial": "Key Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyDown",
          "package": "gloss",
          "signature": "KeyDown",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDown\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyDown\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyDown",
          "package": "gloss",
          "partial": "Key Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyEnd",
          "package": "gloss",
          "signature": "KeyEnd",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnd\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEnd\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyEnd",
          "package": "gloss",
          "partial": "Key End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyEnter",
          "package": "gloss",
          "signature": "KeyEnter",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnter\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEnter\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyEnter",
          "package": "gloss",
          "partial": "Key Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyEsc",
          "package": "gloss",
          "signature": "KeyEsc",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEsc\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEsc\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyEsc",
          "package": "gloss",
          "partial": "Key Esc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF1",
          "package": "gloss",
          "signature": "KeyF1",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF1\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF1\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF1",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF10",
          "package": "gloss",
          "signature": "KeyF10",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF10\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF10\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF10",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF11",
          "package": "gloss",
          "signature": "KeyF11",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF11\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF11\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF11",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF12",
          "package": "gloss",
          "signature": "KeyF12",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF12\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF12\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF12",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF13",
          "package": "gloss",
          "signature": "KeyF13",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF13\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF13\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF13",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF14",
          "package": "gloss",
          "signature": "KeyF14",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF14\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF14\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF14",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF15",
          "package": "gloss",
          "signature": "KeyF15",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF15\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF15\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF15",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF16",
          "package": "gloss",
          "signature": "KeyF16",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF16\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF16\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF16",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF17",
          "package": "gloss",
          "signature": "KeyF17",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF17\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF17\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF17",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF18",
          "package": "gloss",
          "signature": "KeyF18",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF18\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF18\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF18",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF19",
          "package": "gloss",
          "signature": "KeyF19",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF19\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF19\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF19",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF2",
          "package": "gloss",
          "signature": "KeyF2",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF2\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF2\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF2",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF20",
          "package": "gloss",
          "signature": "KeyF20",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF20\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF20\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF20",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF21",
          "package": "gloss",
          "signature": "KeyF21",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF21\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF21\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF21",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF22",
          "package": "gloss",
          "signature": "KeyF22",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF22\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF22\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF22",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF22"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF23",
          "package": "gloss",
          "signature": "KeyF23",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF23\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF23\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF23",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF24",
          "package": "gloss",
          "signature": "KeyF24",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF24\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF24\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF24",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF24"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF25",
          "package": "gloss",
          "signature": "KeyF25",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF25\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF25\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF25",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF25"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF3",
          "package": "gloss",
          "signature": "KeyF3",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF3\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF3\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF3",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF4",
          "package": "gloss",
          "signature": "KeyF4",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF4\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF4\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF4",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF5",
          "package": "gloss",
          "signature": "KeyF5",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF5\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF5\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF5",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF6",
          "package": "gloss",
          "signature": "KeyF6",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF6\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF6\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF6",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF7",
          "package": "gloss",
          "signature": "KeyF7",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF7\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF7\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF7",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF8",
          "package": "gloss",
          "signature": "KeyF8",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF8\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF8\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF8",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyF9",
          "package": "gloss",
          "signature": "KeyF9",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF9\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF9\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyF9",
          "package": "gloss",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyHome",
          "package": "gloss",
          "signature": "KeyHome",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyHome\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyHome\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyHome",
          "package": "gloss",
          "partial": "Key Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyInsert",
          "package": "gloss",
          "signature": "KeyInsert",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyInsert\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyInsert\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyInsert",
          "package": "gloss",
          "partial": "Key Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyLeft",
          "package": "gloss",
          "signature": "KeyLeft",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyLeft\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyLeft\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyLeft",
          "package": "gloss",
          "partial": "Key Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyNumLock",
          "package": "gloss",
          "signature": "KeyNumLock",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyNumLock\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyNumLock\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyNumLock",
          "package": "gloss",
          "partial": "Key Num Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyNumLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad0",
          "package": "gloss",
          "signature": "KeyPad0",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad0\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad0\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad0",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad1",
          "package": "gloss",
          "signature": "KeyPad1",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad1\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad1\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad1",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad2",
          "package": "gloss",
          "signature": "KeyPad2",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad2\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad2\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad2",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad3",
          "package": "gloss",
          "signature": "KeyPad3",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad3\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad3\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad3",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad4",
          "package": "gloss",
          "signature": "KeyPad4",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad4\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad4\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad4",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad5",
          "package": "gloss",
          "signature": "KeyPad5",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad5\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad5\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad5",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad6",
          "package": "gloss",
          "signature": "KeyPad6",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad6\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad6\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad6",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad7",
          "package": "gloss",
          "signature": "KeyPad7",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad7\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad7\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad7",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad8",
          "package": "gloss",
          "signature": "KeyPad8",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad8\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad8\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad8",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPad9",
          "package": "gloss",
          "signature": "KeyPad9",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad9\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad9\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPad9",
          "package": "gloss",
          "partial": "Key Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadAdd",
          "package": "gloss",
          "signature": "KeyPadAdd",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadAdd\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadAdd\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadAdd",
          "package": "gloss",
          "partial": "Key Pad Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadDecimal",
          "package": "gloss",
          "signature": "KeyPadDecimal",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDecimal\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadDecimal\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadDecimal",
          "package": "gloss",
          "partial": "Key Pad Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadDivide",
          "package": "gloss",
          "signature": "KeyPadDivide",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDivide\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadDivide\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadDivide",
          "package": "gloss",
          "partial": "Key Pad Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDivide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadEnter",
          "package": "gloss",
          "signature": "KeyPadEnter",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEnter\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadEnter\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadEnter",
          "package": "gloss",
          "partial": "Key Pad Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadEqual",
          "package": "gloss",
          "signature": "KeyPadEqual",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEqual\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadEqual\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadEqual",
          "package": "gloss",
          "partial": "Key Pad Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadMultiply",
          "package": "gloss",
          "signature": "KeyPadMultiply",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadMultiply\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadMultiply\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadMultiply",
          "package": "gloss",
          "partial": "Key Pad Multiply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadMultiply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPadSubtract",
          "package": "gloss",
          "signature": "KeyPadSubtract",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadSubtract\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadSubtract\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPadSubtract",
          "package": "gloss",
          "partial": "Key Pad Subtract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadSubtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPageDown",
          "package": "gloss",
          "signature": "KeyPageDown",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageDown\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPageDown\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPageDown",
          "package": "gloss",
          "partial": "Key Page Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyPageUp",
          "package": "gloss",
          "signature": "KeyPageUp",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageUp\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPageUp\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyPageUp",
          "package": "gloss",
          "partial": "Key Page Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyRight",
          "package": "gloss",
          "signature": "KeyRight",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyRight\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyRight\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyRight",
          "package": "gloss",
          "partial": "Key Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeySpace",
          "package": "gloss",
          "signature": "KeySpace",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeySpace\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeySpace\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeySpace",
          "package": "gloss",
          "partial": "Key Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeySpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyTab",
          "package": "gloss",
          "signature": "KeyTab",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyTab\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyTab\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyTab",
          "package": "gloss",
          "partial": "Key Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyUnknown",
          "package": "gloss",
          "signature": "KeyUnknown",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUnknown\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyUnknown\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyUnknown",
          "package": "gloss",
          "partial": "Key Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "KeyUp",
          "package": "gloss",
          "signature": "KeyUp",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUp\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyUp\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "KeyUp",
          "package": "gloss",
          "partial": "Key Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "LeftButton",
          "package": "gloss",
          "signature": "LeftButton",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:LeftButton\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:LeftButton\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "LeftButton",
          "package": "gloss",
          "partial": "Left Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:LeftButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "MiddleButton",
          "package": "gloss",
          "signature": "MiddleButton",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MiddleButton\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:MiddleButton\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "MiddleButton",
          "package": "gloss",
          "partial": "Middle Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MiddleButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "Modifiers",
          "package": "gloss",
          "signature": "Modifiers",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Modifiers\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Modifiers\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Modifiers",
          "package": "gloss",
          "partial": "Modifiers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Modifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "MouseButton",
          "package": "gloss",
          "signature": "MouseButton MouseButton",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MouseButton\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:MouseButton\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "MouseButton",
          "package": "gloss",
          "partial": "Mouse Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "RightButton",
          "package": "gloss",
          "signature": "RightButton",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:RightButton\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:RightButton\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "RightButton",
          "package": "gloss",
          "partial": "Right Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:RightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "SpecialKey",
          "package": "gloss",
          "signature": "SpecialKey SpecialKey",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:SpecialKey\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:SpecialKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "SpecialKey",
          "package": "gloss",
          "partial": "Special Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "Up",
          "package": "gloss",
          "signature": "Up",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Up\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Up\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "Up",
          "package": "gloss",
          "partial": "Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "WheelDown",
          "package": "gloss",
          "signature": "WheelDown",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelDown\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:WheelDown\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "WheelDown",
          "package": "gloss",
          "partial": "Wheel Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "WheelUp",
          "package": "gloss",
          "signature": "WheelUp",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelUp\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:WheelUp\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "WheelUp",
          "package": "gloss",
          "partial": "Wheel Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "alt",
          "package": "gloss",
          "signature": "KeyState",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:alt\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:alt\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "alt",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:alt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "ctrl",
          "package": "gloss",
          "signature": "KeyState",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:ctrl\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:ctrl\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "ctrl",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:ctrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game in a window, using IO actions to build the pictures. \n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "playIO",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e IO Picture)-\u003e (Event -\u003e world -\u003e IO world)-\u003e (Float -\u003e world -\u003e IO world)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Play game in window using IO actions to build the pictures",
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "playIO",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003eIO Picture)-\u003e(Event-\u003ea-\u003eIO a)-\u003e(Float-\u003ea-\u003eIO a)-\u003eIO()",
          "package": "gloss",
          "partial": "IO",
          "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003eIO Picture)-\u003e(Event-\u003eworld-\u003eIO world)-\u003e(Float-\u003eworld-\u003eIO world)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:playIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Gloss.Interface.IO.Game\",\"Graphics.Gloss.Interface.Pure.Game\"]",
          "name": "shift",
          "package": "gloss",
          "signature": "KeyState",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:shift\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:shift\"]"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Game",
          "module": "Graphics.Gloss.Interface.IO.Game",
          "name": "shift",
          "package": "gloss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:shift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulate mode is for producing an animation of some model who's picture\n   changes over finite time steps. The behavior of the model can also depent\n   on the current \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "Simulate",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-IO-Simulate.html",
          "type": "module"
        },
        "index": {
          "description": "Simulate mode is for producing an animation of some model who picture changes over finite time steps The behavior of the model can also depent on the current ViewPort",
          "hierarchy": "Graphics Gloss Interface IO Simulate",
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "Simulate",
          "package": "gloss",
          "partial": "Simulate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "ViewPort",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "data"
        },
        "index": {
          "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
          "hierarchy": "Graphics Gloss Interface IO Simulate",
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#t:ViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "simulateIO",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e Int-\u003e model-\u003e (model -\u003e IO Picture)-\u003e (ViewPort -\u003e Float -\u003e model -\u003e IO model)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface IO Simulate",
          "module": "Graphics.Gloss.Interface.IO.Simulate",
          "name": "simulateIO",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003eIO Picture)-\u003e(ViewPort-\u003eFloat-\u003ea-\u003eIO a)-\u003eIO()",
          "package": "gloss",
          "partial": "IO",
          "signature": "Display-\u003eColor-\u003eInt-\u003emodel-\u003e(model-\u003eIO Picture)-\u003e(ViewPort-\u003eFloat-\u003emodel-\u003eIO model)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:simulateIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Animate",
          "name": "Animate",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-Pure-Animate.html",
          "type": "module"
        },
        "index": {
          "description": "Display mode is for drawing static picture",
          "hierarchy": "Graphics Gloss Interface Pure Animate",
          "module": "Graphics.Gloss.Interface.Pure.Animate",
          "name": "Animate",
          "package": "gloss",
          "partial": "Animate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Animate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a new window and display the given animation.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Interface.Pure.Animate\",\"Graphics.Gloss\"]",
          "name": "animate",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e (Float -\u003e Picture)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Animate.html#v:animate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:animate\"]"
        },
        "index": {
          "description": "Open new window and display the given animation Once the window is open you can use the same commands as with display",
          "hierarchy": "Graphics Gloss Interface Pure Animate",
          "module": "Graphics.Gloss.Interface.Pure.Animate",
          "name": "animate",
          "normalized": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()",
          "package": "gloss",
          "signature": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Animate.html#v:animate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Display",
          "name": "Display",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-Pure-Display.html",
          "type": "module"
        },
        "index": {
          "description": "Display mode is for drawing static picture",
          "hierarchy": "Graphics Gloss Interface Pure Display",
          "module": "Graphics.Gloss.Interface.Pure.Display",
          "name": "Display",
          "package": "gloss",
          "partial": "Display",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Display.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a new window and display the given picture.\n\u003c/p\u003e\u003cp\u003eUse the following commands once the window is open:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Quit - esc-key.\n\u003c/li\u003e\u003cli\u003e Move Viewport - left-click drag, arrow keys.\n\u003c/li\u003e\u003cli\u003e Rotate Viewport - right-click drag, control-left-click drag, or home/end-keys.\n\u003c/li\u003e\u003cli\u003e Zoom Viewport - mouse wheel, or page up/down-keys.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "[\"Graphics.Gloss.Interface.Pure.Display\",\"Graphics.Gloss\"]",
          "name": "display",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e Picture-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Display.html#v:display\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:display\"]"
        },
        "index": {
          "description": "Open new window and display the given picture Use the following commands once the window is open Quit esc-key Move Viewport left-click drag arrow keys Rotate Viewport right-click drag control-left-click drag or home end-keys Zoom Viewport mouse wheel or page up down-keys",
          "hierarchy": "Graphics Gloss Interface Pure Display",
          "module": "Graphics.Gloss.Interface.Pure.Display",
          "name": "display",
          "normalized": "Display-\u003eColor-\u003ePicture-\u003eIO()",
          "package": "gloss",
          "signature": "Display-\u003eColor-\u003ePicture-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Display.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis game mode lets you manage your own input. Pressing ESC will still abort the program,\n   but you don't get automatic pan and zoom controls like with \u003ccode\u003edisplayInWindow\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Game",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-Pure-Game.html",
          "type": "module"
        },
        "index": {
          "description": "This game mode lets you manage your own input Pressing ESC will still abort the program but you don get automatic pan and zoom controls like with displayInWindow",
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Game",
          "package": "gloss",
          "partial": "Game",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible input events.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Event",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Possible input events",
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Event",
          "package": "gloss",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Key",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Key",
          "package": "gloss",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "KeyState",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "KeyState",
          "package": "gloss",
          "partial": "Key State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:KeyState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Modifiers",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "Modifiers",
          "package": "gloss",
          "partial": "Modifiers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Modifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "MouseButton",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "MouseButton",
          "package": "gloss",
          "partial": "Mouse Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:MouseButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "SpecialKey",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "SpecialKey",
          "package": "gloss",
          "partial": "Special Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:SpecialKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game in a window. \n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Interface.Pure.Game\",\"Graphics.Gloss\"]",
          "name": "play",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e Picture)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:play\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:play\"]"
        },
        "index": {
          "description": "Play game in window",
          "hierarchy": "Graphics Gloss Interface Pure Game",
          "module": "Graphics.Gloss.Interface.Pure.Game",
          "name": "play",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
          "package": "gloss",
          "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003ePicture)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulate mode is for producing an animation of some model who's picture\n   changes over finite time steps. The behavior of the model can also depent\n   on the current \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Simulate",
          "name": "Simulate",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Interface-Pure-Simulate.html",
          "type": "module"
        },
        "index": {
          "description": "Simulate mode is for producing an animation of some model who picture changes over finite time steps The behavior of the model can also depent on the current ViewPort",
          "hierarchy": "Graphics Gloss Interface Pure Simulate",
          "module": "Graphics.Gloss.Interface.Pure.Simulate",
          "name": "Simulate",
          "package": "gloss",
          "partial": "Simulate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Gloss.Interface.Pure.Simulate",
          "name": "ViewPort",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
          "type": "data"
        },
        "index": {
          "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
          "hierarchy": "Graphics Gloss Interface Pure Simulate",
          "module": "Graphics.Gloss.Interface.Pure.Simulate",
          "name": "ViewPort",
          "package": "gloss",
          "partial": "View Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#t:ViewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a finite-time-step simulation in a window. You decide how the model is represented,\n      how to convert the model to a picture, and how to advance the model for each unit of time. \n      This function does the rest.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Graphics.Gloss.Interface.Pure.Simulate\",\"Graphics.Gloss\"]",
          "name": "simulate",
          "package": "gloss",
          "signature": "Display-\u003e Color-\u003e Int-\u003e model-\u003e (model -\u003e Picture)-\u003e (ViewPort -\u003e Float -\u003e model -\u003e model)-\u003e IO ()",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:simulate\",\"http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:simulate\"]"
        },
        "index": {
          "description": "Run finite-time-step simulation in window You decide how the model is represented how to convert the model to picture and how to advance the model for each unit of time This function does the rest Once the window is open you can use the same commands as with display",
          "hierarchy": "Graphics Gloss Interface Pure Simulate",
          "module": "Graphics.Gloss.Interface.Pure.Simulate",
          "name": "simulate",
          "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003ea-\u003ea)-\u003eIO()",
          "package": "gloss",
          "signature": "Display-\u003eColor-\u003eInt-\u003emodel-\u003e(model-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003emodel-\u003emodel)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:simulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGloss hides the pain of drawing simple vector graphics behind a nice data type and\n\ta few display functions. \n\u003c/p\u003e\u003cp\u003eGetting something on the screen is as easy as:\n\u003c/p\u003e\u003cpre\u003e\n    import Graphics.Gloss\n    main = \u003ccode\u003e\u003ca\u003edisplay\u003c/a\u003e\u003c/code\u003e (InWindow \"Nice Window\" (200, 200) (10, 10)) \u003ccode\u003e\u003ca\u003ewhite\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e 80)\n\u003c/pre\u003e\u003cp\u003eOnce the window is open you can use the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Quit - esc-key.\n\u003c/li\u003e\u003cli\u003e Move Viewport - left-click drag, arrow keys.\n\u003c/li\u003e\u003cli\u003e Rotate Viewport - right-click drag, control-left-click drag, or home/end-keys.\n\u003c/li\u003e\u003cli\u003e Zoom Viewport - mouse wheel, or page up/down-keys.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAnimations can be constructed similarly using the \u003ccode\u003e\u003ca\u003eanimate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you want to run a simulation based around finite time steps then try\n   \u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you want to manage your own key/mouse events then use \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGloss uses OpenGL under the hood, but you don't have to worry about any of that.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n   will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eTo build gloss using the GLFW window manager instead of GLUT use\n        \u003ccode\u003ecabal install gloss --flags=\"GLFW -GLUT\"\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003eRelease Notes:\n\nFor 1.8.0\n  Thanks to Francesco Mazzoli\n   * Factored out ViewPort and ViewState handling into user visible modules.\n\nFor 1.7.0:\n   * Tweaked circle level-of-detail reduction code.\n   * Increased frame rate cap to 100hz.\n   Thanks to Doug Burke\n   * Primitives for drawing arcs and sectors.\n   Thanks to Thomas DuBuisson\n   * IO versions of animate, simplate and play.\n\nFor 1.6.0:\n   Thanks to Anthony Cowley\n   * Full screen display mode.\n\nFor 1.5.0:\n   * O(1) Conversion of ForeignPtrs to bitmaps.\n   * An extra flag on the Bitmap constructor allows bitmaps to be cached\n     in texture memory between frames.\n\u003c/pre\u003e\u003cp\u003eFor more information, check out \u003ca\u003ehttp://gloss.ouroborus.net\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Gloss",
          "name": "Gloss",
          "package": "gloss",
          "source": "src/Graphics-Gloss.html",
          "type": "module"
        },
        "index": {
          "description": "Gloss hides the pain of drawing simple vector graphics behind nice data type and few display functions Getting something on the screen is as easy as import Graphics.Gloss main display InWindow Nice Window white Circle Once the window is open you can use the following Quit esc-key Move Viewport left-click drag arrow keys Rotate Viewport right-click drag control-left-click drag or home end-keys Zoom Viewport mouse wheel or page up down-keys Animations can be constructed similarly using the animate If you want to run simulation based around finite time steps then try simulate If you want to manage your own key mouse events then use play Gloss uses OpenGL under the hood but you don have to worry about any of that Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz To build gloss using the GLFW window manager instead of GLUT use cabal install gloss flags GLFW GLUT Release Notes For Thanks to Francesco Mazzoli Factored out ViewPort and ViewState handling into user visible modules For Tweaked circle level-of-detail reduction code Increased frame rate cap to hz Thanks to Doug Burke Primitives for drawing arcs and sectors Thanks to Thomas DuBuisson IO versions of animate simplate and play For Thanks to Anthony Cowley Full screen display mode For Conversion of ForeignPtrs to bitmaps An extra flag on the Bitmap constructor allows bitmaps to be cached in texture memory between frames For more information check out http gloss.ouroborus.net",
          "hierarchy": "Graphics Gloss",
          "module": "Graphics.Gloss",
          "name": "Gloss",
          "package": "gloss",
          "partial": "Gloss",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
          "module": "Graphics.Gloss",
          "name": "Display",
          "package": "gloss",
          "source": "src/Graphics-Gloss-Data-Display.html#Display",
          "type": "data"
        },
        "index": {
          "description": "Describes how Gloss should display its output",
          "hierarchy": "Graphics Gloss",
          "module": "Graphics.Gloss",
          "name": "Display",
          "package": "gloss",
          "partial": "Display",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#t:Display"
      }
    }
  ]
]