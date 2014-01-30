[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious ray casting algorithms.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Algorithms.RayCast",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Algorithms-RayCast.html",
        "fct-type": "module",
        "title": "RayCast"
      },
      "index": {
        "description": "Various ray casting algorithms",
        "hierarchy": "Graphics Gloss Algorithms RayCast",
        "module": "Graphics.Gloss.Algorithms.RayCast",
        "name": "RayCast",
        "normalized": "",
        "package": "gloss",
        "partial": "Ray Cast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#v:castSegIntoCellularQuadTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe quadtree contains cells of unit extent (NetHack style).\n   Given a line segement (P1-P2) through the tree, get the cell \n   closest to P1 that intersects the segment, if any.\n\u003c/p\u003e\u003cp\u003eTODO: This currently uses a naive algorithm. It just calls \n         \u003ccode\u003e\u003ca\u003etraceSegIntoCellularQuadTree\u003c/a\u003e\u003c/code\u003e and sorts the results\n         to get the one closest to P1. It'd be better to do a \n         proper walk over the tree in the direction of the ray.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Algorithms.RayCast",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Extent-\u003e QuadTree a-\u003e Maybe (Point, Extent, a)",
        "fct-type": "function",
        "title": "castSegIntoCellularQuadTree"
      },
      "index": {
        "description": "The quadtree contains cells of unit extent NetHack style Given line segement P1-P2 through the tree get the cell closest to P1 that intersects the segment if any TODO This currently uses naive algorithm It just calls traceSegIntoCellularQuadTree and sorts the results to get the one closest to P1 It be better to do proper walk over the tree in the direction of the ray",
        "hierarchy": "Graphics Gloss Algorithms RayCast",
        "module": "Graphics.Gloss.Algorithms.RayCast",
        "name": "castSegIntoCellularQuadTree",
        "normalized": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003eMaybe(Point,Extent,a)",
        "package": "gloss",
        "partial": "Seg Into Cellular Quad Tree",
        "signature": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003eMaybe(Point,Extent,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Algorithms-RayCast.html#v:traceSegIntoCellularQuadTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe quadtree contains cells of unit extent (NetHack style).\n   Given a line segment (P1-P2) through the tree, return the list of cells \n   that intersect the segment.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Algorithms.RayCast",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Extent-\u003e QuadTree a-\u003e [(Point, Extent, a)]",
        "fct-type": "function",
        "title": "traceSegIntoCellularQuadTree"
      },
      "index": {
        "description": "The quadtree contains cells of unit extent NetHack style Given line segment P1-P2 through the tree return the list of cells that intersect the segment",
        "hierarchy": "Graphics Gloss Algorithms RayCast",
        "module": "Graphics.Gloss.Algorithms.RayCast",
        "name": "traceSegIntoCellularQuadTree",
        "normalized": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003e[(Point,Extent,a)]",
        "package": "gloss",
        "partial": "Seg Into Cellular Quad Tree",
        "signature": "Point-\u003ePoint-\u003eExtent-\u003eQuadTree a-\u003e[(Point,Extent,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined and custom colors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Color.html",
        "fct-type": "module",
        "title": "Color"
      },
      "index": {
        "description": "Predefined and custom colors",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "Color",
        "normalized": "",
        "package": "gloss",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract color value.\n\tWe keep the type abstract so we can be sure that the components\n\tare in the required range. To make a custom color use \u003ccode\u003e\u003ca\u003emakeColor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "An abstract color value We keep the type abstract so we can be sure that the components are in the required range To make custom color use makeColor",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "Color",
        "normalized": "",
        "package": "gloss",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:addColors",
      "description": {
        "fct-descr": "\u003cp\u003eAdd RGB components of a color component-wise, then normalise\n\tthem to the highest resulting one. The alpha components are averaged.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Color -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#addColors",
        "fct-type": "function",
        "title": "addColors"
      },
      "index": {
        "description": "Add RGB components of color component-wise then normalise them to the highest resulting one The alpha components are averaged",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "addColors",
        "normalized": "Color-\u003eColor-\u003eColor",
        "package": "gloss",
        "partial": "Colors",
        "signature": "Color-\u003eColor-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:aquamarine",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#aquamarine",
        "fct-type": "function",
        "title": "aquamarine"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "aquamarine",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:azure",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#azure",
        "fct-type": "function",
        "title": "azure"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "azure",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:black",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#black",
        "fct-type": "function",
        "title": "black"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "black",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:blue",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#blue",
        "fct-type": "function",
        "title": "blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "blue",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:bright",
      "description": {
        "fct-descr": "\u003cp\u003eMake a brighter version of a color, scaling towards white.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#bright",
        "fct-type": "function",
        "title": "bright"
      },
      "index": {
        "description": "Make brighter version of color scaling towards white",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "bright",
        "normalized": "Color-\u003eColor",
        "package": "gloss",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:chartreuse",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#chartreuse",
        "fct-type": "function",
        "title": "chartreuse"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "chartreuse",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:cyan",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#cyan",
        "fct-type": "function",
        "title": "cyan"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "cyan",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:dark",
      "description": {
        "fct-descr": "\u003cp\u003eDarken a color, adding black.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#dark",
        "fct-type": "function",
        "title": "dark"
      },
      "index": {
        "description": "Darken color adding black",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "dark",
        "normalized": "Color-\u003eColor",
        "package": "gloss",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:dim",
      "description": {
        "fct-descr": "\u003cp\u003eMake a dimmer version of a color, scaling towards black.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#dim",
        "fct-type": "function",
        "title": "dim"
      },
      "index": {
        "description": "Make dimmer version of color scaling towards black",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "dim",
        "normalized": "Color-\u003eColor",
        "package": "gloss",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:green",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#green",
        "fct-type": "function",
        "title": "green"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "green",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:greyN",
      "description": {
        "fct-descr": "\u003cp\u003eA greyness of a given magnitude.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Float-\u003e Color",
        "fct-type": "function",
        "title": "greyN"
      },
      "index": {
        "description": "greyness of given magnitude",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "greyN",
        "normalized": "Float-\u003eColor",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:light",
      "description": {
        "fct-descr": "\u003cp\u003eLighten a color, adding white.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#light",
        "fct-type": "function",
        "title": "light"
      },
      "index": {
        "description": "Lighten color adding white",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "light",
        "normalized": "Color-\u003eColor",
        "package": "gloss",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:magenta",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#magenta",
        "fct-type": "function",
        "title": "magenta"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "magenta",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor",
      "description": {
        "fct-descr": "\u003cp\u003eMake a custom color. All components are clamped to the range  [0..1].\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Float-\u003e Float-\u003e Float-\u003e Float-\u003e Color",
        "fct-type": "function",
        "title": "makeColor"
      },
      "index": {
        "description": "Make custom color All components are clamped to the range",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "makeColor",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
        "package": "gloss",
        "partial": "Color",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor-39-",
      "description": {
        "fct-descr": "\u003cp\u003eMake a custom color. \n   You promise that all components are clamped to the range [0..1]\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Float -\u003e Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#makeColor%27",
        "fct-type": "function",
        "title": "makeColor'"
      },
      "index": {
        "description": "Make custom color You promise that all components are clamped to the range",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "makeColor'",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
        "package": "gloss",
        "partial": "Color'",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:makeColor8",
      "description": {
        "fct-descr": "\u003cp\u003eMake a custom color. All components are clamped to the range [0..255].\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e Color",
        "fct-type": "function",
        "title": "makeColor8"
      },
      "index": {
        "description": "Make custom color All components are clamped to the range",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "makeColor8",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eColor",
        "package": "gloss",
        "partial": "Color",
        "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:mixColors",
      "description": {
        "fct-descr": "\u003cp\u003eMix two colors with the given ratios.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Float-\u003e Float-\u003e Color-\u003e Color-\u003e Color",
        "fct-type": "function",
        "title": "mixColors"
      },
      "index": {
        "description": "Mix two colors with the given ratios",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "mixColors",
        "normalized": "Float-\u003eFloat-\u003eColor-\u003eColor-\u003eColor",
        "package": "gloss",
        "partial": "Colors",
        "signature": "Float-\u003eFloat-\u003eColor-\u003eColor-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:orange",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#orange",
        "fct-type": "function",
        "title": "orange"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "orange",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rawColor",
      "description": {
        "fct-descr": "\u003cp\u003eMake a custom color.\n   Components should be in the range [0..1] but this is not checked.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Float-\u003e Float-\u003e Float-\u003e Float-\u003e Color",
        "fct-type": "function",
        "title": "rawColor"
      },
      "index": {
        "description": "Make custom color Components should be in the range but this is not checked",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "rawColor",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor",
        "package": "gloss",
        "partial": "Color",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:red",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#red",
        "fct-type": "function",
        "title": "red"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "red",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rgbaOfColor",
      "description": {
        "fct-descr": "\u003cp\u003eTake the RGBA components of a color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e (Float, Float, Float, Float)",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#rgbaOfColor",
        "fct-type": "function",
        "title": "rgbaOfColor"
      },
      "index": {
        "description": "Take the RGBA components of color",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "rgbaOfColor",
        "normalized": "Color-\u003e(Float,Float,Float,Float)",
        "package": "gloss",
        "partial": "Of Color",
        "signature": "Color-\u003e(Float,Float,Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:rose",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#rose",
        "fct-type": "function",
        "title": "rose"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "rose",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:violet",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#violet",
        "fct-type": "function",
        "title": "violet"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "violet",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:white",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#white",
        "fct-type": "function",
        "title": "white"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "white",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Color.html#v:yellow",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Color",
        "fct-package": "gloss",
        "fct-signature": "Color",
        "fct-source": "src/Graphics-Gloss-Data-Color.html#yellow",
        "fct-type": "function",
        "title": "yellow"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Color",
        "module": "Graphics.Gloss.Data.Color",
        "name": "yellow",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Display",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Display.html",
        "fct-type": "module",
        "title": "Display"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Display",
        "module": "Graphics.Gloss.Data.Display",
        "name": "Display",
        "normalized": "",
        "package": "gloss",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#t:Display",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Display",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "data",
        "title": "Display"
      },
      "index": {
        "description": "Describes how Gloss should display its output",
        "hierarchy": "Graphics Gloss Data Display",
        "module": "Graphics.Gloss.Data.Display",
        "name": "Display",
        "normalized": "",
        "package": "gloss",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:FullScreen",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Display",
        "fct-package": "gloss",
        "fct-signature": "FullScreen (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "function",
        "title": "FullScreen"
      },
      "index": {
        "description": "Display full screen with drawing area of the given size",
        "hierarchy": "Graphics Gloss Data Display",
        "module": "Graphics.Gloss.Data.Display",
        "name": "FullScreen",
        "normalized": "FullScreen(Int,Int)",
        "package": "gloss",
        "partial": "Full Screen",
        "signature": "FullScreen(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Display.html#v:InWindow",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Display",
        "fct-package": "gloss",
        "fct-signature": "InWindow String (Int, Int) (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "function",
        "title": "InWindow"
      },
      "index": {
        "description": "Display in window with the given name size and position",
        "hierarchy": "Graphics Gloss Data Display",
        "module": "Graphics.Gloss.Data.Display",
        "name": "InWindow",
        "normalized": "InWindow String(Int,Int)(Int,Int)",
        "package": "gloss",
        "partial": "In Window",
        "signature": "InWindow String(Int,Int)(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRepresents an integral rectangular area of the 2D plane.\n   Using \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es (instead of \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es) for the bounds means we can safely\n   compare extents for equality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html",
        "fct-type": "module",
        "title": "Extent"
      },
      "index": {
        "description": "Represents an integral rectangular area of the plane Using Int instead of Float for the bounds means we can safely compare extents for equality",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "Extent",
        "normalized": "",
        "package": "gloss",
        "partial": "Extent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#t:Coord",
      "description": {
        "fct-descr": "\u003cp\u003eAn integral coordinate.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#Coord",
        "fct-type": "type",
        "title": "Coord"
      },
      "index": {
        "description": "An integral coordinate",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "Coord",
        "normalized": "",
        "package": "gloss",
        "partial": "Coord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#t:Extent",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular area of the 2D plane.\n   We keep the type abstract to ensure that invalid extents cannot be\n   constructed.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#Extent",
        "fct-type": "data",
        "title": "Extent"
      },
      "index": {
        "description": "rectangular area of the plane We keep the type abstract to ensure that invalid extents cannot be constructed",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "Extent",
        "normalized": "",
        "package": "gloss",
        "partial": "Extent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:centerCoordOfExtent",
      "description": {
        "fct-descr": "\u003cp\u003eGet the coordinate that lies at the center of an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#centerCoordOfExtent",
        "fct-type": "function",
        "title": "centerCoordOfExtent"
      },
      "index": {
        "description": "Get the coordinate that lies at the center of an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "centerCoordOfExtent",
        "normalized": "Extent-\u003e(Int,Int)",
        "package": "gloss",
        "partial": "Coord Of Extent",
        "signature": "Extent-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:coordInExtent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a coordinate lies inside an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Coord -\u003e Bool",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#coordInExtent",
        "fct-type": "function",
        "title": "coordInExtent"
      },
      "index": {
        "description": "Check whether coordinate lies inside an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "coordInExtent",
        "normalized": "Extent-\u003eCoord-\u003eBool",
        "package": "gloss",
        "partial": "In Extent",
        "signature": "Extent-\u003eCoord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:cutQuadOfExtent",
      "description": {
        "fct-descr": "\u003cp\u003eCut one quadrant out of an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Quad -\u003e Extent -\u003e Extent",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#cutQuadOfExtent",
        "fct-type": "function",
        "title": "cutQuadOfExtent"
      },
      "index": {
        "description": "Cut one quadrant out of an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "cutQuadOfExtent",
        "normalized": "Quad-\u003eExtent-\u003eExtent",
        "package": "gloss",
        "partial": "Quad Of Extent",
        "signature": "Quad-\u003eExtent-\u003eExtent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:intersectSegExtent",
      "description": {
        "fct-descr": "\u003cp\u003eIf a line segment (P1-P2) intersects the outer edge of an extent then\n   return the intersection point, that is closest to P1, if any.\n   If P1 is inside the extent then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n                   P2\n                  /\n            ----/-\n            | /  |\n            +    |\n           /------\n         / \n        P1\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Point -\u003e Point -\u003e Extent -\u003e Maybe Point",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#intersectSegExtent",
        "fct-type": "function",
        "title": "intersectSegExtent"
      },
      "index": {
        "description": "If line segment P1-P2 intersects the outer edge of an extent then return the intersection point that is closest to P1 if any If P1 is inside the extent then Nothing P2 P1",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "intersectSegExtent",
        "normalized": "Point-\u003ePoint-\u003eExtent-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Extent",
        "signature": "Point-\u003ePoint-\u003eExtent-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:isUnitExtent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an extent is a square with a width and height of 1.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Bool",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#isUnitExtent",
        "fct-type": "function",
        "title": "isUnitExtent"
      },
      "index": {
        "description": "Check if an extent is square with width and height of",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "isUnitExtent",
        "normalized": "Extent-\u003eBool",
        "package": "gloss",
        "partial": "Unit Extent",
        "signature": "Extent-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:makeExtent",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an extent.\n\tThe north value must be \u003e south, and east \u003e west, else \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Int-\u003e Int-\u003e Int-\u003e Int-\u003e Extent",
        "fct-type": "function",
        "title": "makeExtent"
      },
      "index": {
        "description": "Construct an extent The north value must be south and east west else error",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "makeExtent",
        "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eExtent",
        "package": "gloss",
        "partial": "Extent",
        "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003eExtent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:pathToCoord",
      "description": {
        "fct-descr": "\u003cp\u003eConstuct a path to a particular coordinate in an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Coord -\u003e Maybe [Quad]",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#pathToCoord",
        "fct-type": "function",
        "title": "pathToCoord"
      },
      "index": {
        "description": "Constuct path to particular coordinate in an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "pathToCoord",
        "normalized": "Extent-\u003eCoord-\u003eMaybe[Quad]",
        "package": "gloss",
        "partial": "To Coord",
        "signature": "Extent-\u003eCoord-\u003eMaybe[Quad]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:pointInExtent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a point lies inside an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Point -\u003e Bool",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#pointInExtent",
        "fct-type": "function",
        "title": "pointInExtent"
      },
      "index": {
        "description": "Check whether point lies inside an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "pointInExtent",
        "normalized": "Extent-\u003ePoint-\u003eBool",
        "package": "gloss",
        "partial": "In Extent",
        "signature": "Extent-\u003ePoint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:quadOfCoord",
      "description": {
        "fct-descr": "\u003cp\u003eGet the quadrant that this coordinate lies in, if any.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Coord -\u003e Maybe Quad",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#quadOfCoord",
        "fct-type": "function",
        "title": "quadOfCoord"
      },
      "index": {
        "description": "Get the quadrant that this coordinate lies in if any",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "quadOfCoord",
        "normalized": "Extent-\u003eCoord-\u003eMaybe Quad",
        "package": "gloss",
        "partial": "Of Coord",
        "signature": "Extent-\u003eCoord-\u003eMaybe Quad"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:sizeOfExtent",
      "description": {
        "fct-descr": "\u003cp\u003eGet the width and height of an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#sizeOfExtent",
        "fct-type": "function",
        "title": "sizeOfExtent"
      },
      "index": {
        "description": "Get the width and height of an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "sizeOfExtent",
        "normalized": "Extent-\u003e(Int,Int)",
        "package": "gloss",
        "partial": "Of Extent",
        "signature": "Extent-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:squareExtent",
      "description": {
        "fct-descr": "\u003cp\u003eA square extent of a given size.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Int -\u003e Extent",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#squareExtent",
        "fct-type": "function",
        "title": "squareExtent"
      },
      "index": {
        "description": "square extent of given size",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "squareExtent",
        "normalized": "Int-\u003eExtent",
        "package": "gloss",
        "partial": "Extent",
        "signature": "Int-\u003eExtent"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:takeExtent",
      "description": {
        "fct-descr": "\u003cp\u003eTake the NSEW components of an extent.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e (Int, Int, Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#takeExtent",
        "fct-type": "function",
        "title": "takeExtent"
      },
      "index": {
        "description": "Take the NSEW components of an extent",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "takeExtent",
        "normalized": "Extent-\u003e(Int,Int,Int,Int)",
        "package": "gloss",
        "partial": "Extent",
        "signature": "Extent-\u003e(Int,Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Extent.html#v:touchesSegExtent",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a line segment's endpoints are inside an extent, or if it\n   intersects with the boundary.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Extent",
        "fct-package": "gloss",
        "fct-signature": "Point -\u003e Point -\u003e Extent -\u003e Bool",
        "fct-source": "src/Graphics-Gloss-Data-Extent.html#touchesSegExtent",
        "fct-type": "function",
        "title": "touchesSegExtent"
      },
      "index": {
        "description": "Check whether line segment endpoints are inside an extent or if it intersects with the boundary",
        "hierarchy": "Graphics Gloss Data Extent",
        "module": "Graphics.Gloss.Data.Extent",
        "name": "touchesSegExtent",
        "normalized": "Point-\u003ePoint-\u003eExtent-\u003eBool",
        "package": "gloss",
        "partial": "Seg Extent",
        "signature": "Point-\u003ePoint-\u003eExtent-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for representing pictures.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html",
        "fct-type": "module",
        "title": "Picture"
      },
      "index": {
        "description": "Data types for representing pictures",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Picture",
        "normalized": "",
        "package": "gloss",
        "partial": "Picture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:BitmapData",
      "description": {
        "fct-descr": "\u003cp\u003eAbstract 32-bit RGBA bitmap data.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Render-Bitmap.html#BitmapData",
        "fct-type": "data",
        "title": "BitmapData"
      },
      "index": {
        "description": "Abstract bit RGBA bitmap data",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "BitmapData",
        "normalized": "",
        "package": "gloss",
        "partial": "Bitmap Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA path through the x-y plane.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Path",
        "fct-type": "type",
        "title": "Path"
      },
      "index": {
        "description": "path through the x-y plane",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Path",
        "normalized": "",
        "package": "gloss",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Picture",
      "description": {
        "fct-descr": "\u003cp\u003eA 2D picture\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "data",
        "title": "Picture"
      },
      "index": {
        "description": "picture",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Picture",
        "normalized": "",
        "package": "gloss",
        "partial": "Picture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Point.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Point",
        "normalized": "",
        "package": "gloss",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eA vector can be treated as a point, and vis-versa.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "vector can be treated as point and vis-versa",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Vector",
        "normalized": "",
        "package": "gloss",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Arc",
      "description": {
        "fct-descr": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles \n  (in degrees) at the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Arc Float Float Float",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Arc"
      },
      "index": {
        "description": "circular arc drawn counter-clockwise between two angles in degrees at the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Arc",
        "normalized": "",
        "package": "gloss",
        "partial": "Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Bitmap",
      "description": {
        "fct-descr": "\u003cp\u003eA bitmap image with a width, height and some 32-bit RGBA\n   bitmap data.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n  between frames for speed. If you are programatically generating\n  the image for each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. If you have loaded it\n  from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Bitmap Int Int BitmapData Bool",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Bitmap"
      },
      "index": {
        "description": "bitmap image with width height and some bit RGBA bitmap data The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Bitmap",
        "normalized": "",
        "package": "gloss",
        "partial": "Bitmap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Blank",
      "description": {
        "fct-descr": "\u003cp\u003eA blank picture, with nothing in it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Blank",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Blank"
      },
      "index": {
        "description": "blank picture with nothing in it",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Blank",
        "normalized": "",
        "package": "gloss",
        "partial": "Blank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Circle",
      "description": {
        "fct-descr": "\u003cp\u003eA circle with the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Circle Float",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "circle with the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Circle",
        "normalized": "",
        "package": "gloss",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Color",
      "description": {
        "fct-descr": "\u003cp\u003eA picture drawn with this color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Color Color Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "picture drawn with this color",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Color",
        "normalized": "",
        "package": "gloss",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Line",
      "description": {
        "fct-descr": "\u003cp\u003eA line along an arbitrary path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Line Path",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Line"
      },
      "index": {
        "description": "line along an arbitrary path",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Line",
        "normalized": "",
        "package": "gloss",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Pictures",
      "description": {
        "fct-descr": "\u003cp\u003eA picture consisting of several others.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Pictures [Picture]",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Pictures"
      },
      "index": {
        "description": "picture consisting of several others",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Pictures",
        "normalized": "Pictures[Picture]",
        "package": "gloss",
        "partial": "Pictures",
        "signature": "Pictures[Picture]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Polygon",
      "description": {
        "fct-descr": "\u003cp\u003eA convex polygon filled with a solid color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Polygon Path",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Polygon"
      },
      "index": {
        "description": "convex polygon filled with solid color",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Polygon",
        "normalized": "",
        "package": "gloss",
        "partial": "Polygon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Rotate",
      "description": {
        "fct-descr": "\u003cp\u003eA picture rotated clockwise by the given angle (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Rotate Float Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Rotate"
      },
      "index": {
        "description": "picture rotated clockwise by the given angle in degrees",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Rotate",
        "normalized": "",
        "package": "gloss",
        "partial": "Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Scale",
      "description": {
        "fct-descr": "\u003cp\u003eA picture scaled by the given x and y factors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Scale Float Float Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Scale"
      },
      "index": {
        "description": "picture scaled by the given and factors",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Scale",
        "normalized": "",
        "package": "gloss",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Text",
      "description": {
        "fct-descr": "\u003cp\u003eSome text to draw with a vector font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Text String",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "Some text to draw with vector font",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Text",
        "normalized": "",
        "package": "gloss",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:ThickArc",
      "description": {
        "fct-descr": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles \n  (in degrees), with the given radius  and thickness.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eArc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "ThickArc Float Float Float Float",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "ThickArc"
      },
      "index": {
        "description": "circular arc drawn counter-clockwise between two angles in degrees with the given radius and thickness If the thickness is then this is equivalent to Arc",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "ThickArc",
        "normalized": "",
        "package": "gloss",
        "partial": "Thick Arc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:ThickCircle",
      "description": {
        "fct-descr": "\u003cp\u003eA circle with the given thickness and radius.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "ThickCircle Float Float",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "ThickCircle"
      },
      "index": {
        "description": "circle with the given thickness and radius If the thickness is then this is equivalent to Circle",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "ThickCircle",
        "normalized": "",
        "package": "gloss",
        "partial": "Thick Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:Translate",
      "description": {
        "fct-descr": "\u003cp\u003eA picture translated by the given x and y coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Translate Float Float Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#Picture",
        "fct-type": "function",
        "title": "Translate"
      },
      "index": {
        "description": "picture translated by the given and coordinates",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "Translate",
        "normalized": "",
        "package": "gloss",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:arc",
      "description": {
        "fct-descr": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles (in degrees) \n   at the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#arc",
        "fct-type": "function",
        "title": "arc"
      },
      "index": {
        "description": "circular arc drawn counter-clockwise between two angles in degrees at the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "arc",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:arcSolid",
      "description": {
        "fct-descr": "\u003cp\u003eA solid arc, drawn counter-clockwise between two angles at the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#arcSolid",
        "fct-type": "function",
        "title": "arcSolid"
      },
      "index": {
        "description": "solid arc drawn counter-clockwise between two angles at the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "arcSolid",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Solid",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmap",
      "description": {
        "fct-descr": "\u003cp\u003eA bitmap image with a width, height and a Vector holding the \n   32-bit RGBA bitmap data.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n  between frames for speed.\n  If you are programatically generating the image for\n  each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.  \n  If you have loaded it from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Int -\u003e Int -\u003e BitmapData -\u003e Bool -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#bitmap",
        "fct-type": "function",
        "title": "bitmap"
      },
      "index": {
        "description": "bitmap image with width height and Vector holding the bit RGBA bitmap data The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "bitmap",
        "normalized": "Int-\u003eInt-\u003eBitmapData-\u003eBool-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBitmapData-\u003eBool-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfBMP",
      "description": {
        "fct-descr": "\u003cp\u003eO(size). Copy a \u003ccode\u003e\u003ca\u003eBMP\u003c/a\u003e\u003c/code\u003e file into a bitmap.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "BMP -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfBMP",
        "fct-type": "function",
        "title": "bitmapOfBMP"
      },
      "index": {
        "description": "size Copy BMP file into bitmap",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "bitmapOfBMP",
        "normalized": "BMP-\u003ePicture",
        "package": "gloss",
        "partial": "Of BMP",
        "signature": "BMP-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfByteString",
      "description": {
        "fct-descr": "\u003cp\u003eO(size). Copy a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e of RGBA data into a bitmap with the given\n   width and height.\n\u003c/p\u003e\u003cp\u003eThe boolean flag controls whether Gloss should cache the data\n   between frames for speed. If you are programatically generating\n   the image for each frame then use \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e. If you have loaded it\n   from a file then use \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Int -\u003e Int -\u003e ByteString -\u003e Bool -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfByteString",
        "fct-type": "function",
        "title": "bitmapOfByteString"
      },
      "index": {
        "description": "size Copy ByteString of RGBA data into bitmap with the given width and height The boolean flag controls whether Gloss should cache the data between frames for speed If you are programatically generating the image for each frame then use False If you have loaded it from file then use True",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "bitmapOfByteString",
        "normalized": "Int-\u003eInt-\u003eByteString-\u003eBool-\u003ePicture",
        "package": "gloss",
        "partial": "Of Byte String",
        "signature": "Int-\u003eInt-\u003eByteString-\u003eBool-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:bitmapOfForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003eO(1). Use a \u003ccode\u003e\u003ca\u003eForeignPtr\u003c/a\u003e\u003c/code\u003e of RGBA data as a bitmap with the given\n   width and height.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Int -\u003e Int -\u003e ForeignPtr Word8 -\u003e Bool -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#bitmapOfForeignPtr",
        "fct-type": "function",
        "title": "bitmapOfForeignPtr"
      },
      "index": {
        "description": "Use ForeignPtr of RGBA data as bitmap with the given width and height",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "bitmapOfForeignPtr",
        "normalized": "Int-\u003eInt-\u003eForeignPtr Word-\u003eBool-\u003ePicture",
        "package": "gloss",
        "partial": "Of Foreign Ptr",
        "signature": "Int-\u003eInt-\u003eForeignPtr Word-\u003eBool-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:blank",
      "description": {
        "fct-descr": "\u003cp\u003eA blank picture, with nothing in it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#blank",
        "fct-type": "function",
        "title": "blank"
      },
      "index": {
        "description": "blank picture with nothing in it",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "blank",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:circle",
      "description": {
        "fct-descr": "\u003cp\u003eA circle with the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#circle",
        "fct-type": "function",
        "title": "circle"
      },
      "index": {
        "description": "circle with the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "circle",
        "normalized": "Float-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:circleSolid",
      "description": {
        "fct-descr": "\u003cp\u003eA solid circle with the given radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#circleSolid",
        "fct-type": "function",
        "title": "circleSolid"
      },
      "index": {
        "description": "solid circle with the given radius",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "circleSolid",
        "normalized": "Float-\u003ePicture",
        "package": "gloss",
        "partial": "Solid",
        "signature": "Float-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:color",
      "description": {
        "fct-descr": "\u003cp\u003eA picture drawn with this color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Color -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#color",
        "fct-type": "function",
        "title": "color"
      },
      "index": {
        "description": "picture drawn with this color",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "color",
        "normalized": "Color-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Color-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eA line along an arbitrary path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Path -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "line along an arbitrary path",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "line",
        "normalized": "Path-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Path-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:lineLoop",
      "description": {
        "fct-descr": "\u003cp\u003eA closed loop along a path.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Path -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#lineLoop",
        "fct-type": "function",
        "title": "lineLoop"
      },
      "index": {
        "description": "closed loop along path",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "lineLoop",
        "normalized": "Path-\u003ePicture",
        "package": "gloss",
        "partial": "Loop",
        "signature": "Path-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:loadBMP",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an uncompressed 24 or 32bit RGBA BMP file as a bitmap.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "FilePath -\u003e IO Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#loadBMP",
        "fct-type": "function",
        "title": "loadBMP"
      },
      "index": {
        "description": "Load an uncompressed or bit RGBA BMP file as bitmap",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "loadBMP",
        "normalized": "FilePath-\u003eIO Picture",
        "package": "gloss",
        "partial": "BMP",
        "signature": "FilePath-\u003eIO Picture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:pictures",
      "description": {
        "fct-descr": "\u003cp\u003eA picture consisting of several others.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "[Picture] -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#pictures",
        "fct-type": "function",
        "title": "pictures"
      },
      "index": {
        "description": "picture consisting of several others",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "pictures",
        "normalized": "[Picture]-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "[Picture]-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:polygon",
      "description": {
        "fct-descr": "\u003cp\u003eA convex polygon filled with a solid color.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Path -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#polygon",
        "fct-type": "function",
        "title": "polygon"
      },
      "index": {
        "description": "convex polygon filled with solid color",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "polygon",
        "normalized": "Path-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Path-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectanglePath",
      "description": {
        "fct-descr": "\u003cp\u003eA path representing a rectangle centered about the origin\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float-\u003e Float-\u003e Path",
        "fct-type": "function",
        "title": "rectanglePath"
      },
      "index": {
        "description": "path representing rectangle centered about the origin",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectanglePath",
        "normalized": "Float-\u003eFloat-\u003ePath",
        "package": "gloss",
        "partial": "Path",
        "signature": "Float-\u003eFloat-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleSolid",
      "description": {
        "fct-descr": "\u003cp\u003eA solid rectangle centered about the origin.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rectangleSolid",
        "fct-type": "function",
        "title": "rectangleSolid"
      },
      "index": {
        "description": "solid rectangle centered about the origin",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectangleSolid",
        "normalized": "Float-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Solid",
        "signature": "Float-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperPath",
      "description": {
        "fct-descr": "\u003cp\u003eA path representing a rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Path",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperPath",
        "fct-type": "function",
        "title": "rectangleUpperPath"
      },
      "index": {
        "description": "path representing rectangle in the half of the x-y plane",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectangleUpperPath",
        "normalized": "Float-\u003eFloat-\u003ePath",
        "package": "gloss",
        "partial": "Upper Path",
        "signature": "Float-\u003eFloat-\u003ePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperSolid",
      "description": {
        "fct-descr": "\u003cp\u003eA solid rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperSolid",
        "fct-type": "function",
        "title": "rectangleUpperSolid"
      },
      "index": {
        "description": "solid rectangle in the half of the x-y plane",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectangleUpperSolid",
        "normalized": "Float-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Upper Solid",
        "signature": "Float-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleUpperWire",
      "description": {
        "fct-descr": "\u003cp\u003eA wireframe rectangle in the y \u003e 0 half of the x-y plane.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rectangleUpperWire",
        "fct-type": "function",
        "title": "rectangleUpperWire"
      },
      "index": {
        "description": "wireframe rectangle in the half of the x-y plane",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectangleUpperWire",
        "normalized": "Float-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Upper Wire",
        "signature": "Float-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rectangleWire",
      "description": {
        "fct-descr": "\u003cp\u003eA wireframe rectangle centered about the origin.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rectangleWire",
        "fct-type": "function",
        "title": "rectangleWire"
      },
      "index": {
        "description": "wireframe rectangle centered about the origin",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rectangleWire",
        "normalized": "Float-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Wire",
        "signature": "Float-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eA picture rotated clockwise by the given angle (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "picture rotated clockwise by the given angle in degrees",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "rotate",
        "normalized": "Float-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eA picture scaled by the given x and y factors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#scale",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "picture scaled by the given and factors",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "scale",
        "normalized": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:sectorWire",
      "description": {
        "fct-descr": "\u003cp\u003eA wireframe sector of a circle. \n   An arc is draw counter-clockwise from the first to the second angle at\n   the given radius. Lines are drawn from the origin to the ends of the arc.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#sectorWire",
        "fct-type": "function",
        "title": "sectorWire"
      },
      "index": {
        "description": "wireframe sector of circle An arc is draw counter-clockwise from the first to the second angle at the given radius Lines are drawn from the origin to the ends of the arc",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "sectorWire",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Wire",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eSome text to draw with a vector font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "String -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Some text to draw with vector font",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "text",
        "normalized": "String-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "String-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:thickArc",
      "description": {
        "fct-descr": "\u003cp\u003eA circular arc drawn counter-clockwise between two angles (in degrees),\n   with the given radius  and thickness.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eArc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#thickArc",
        "fct-type": "function",
        "title": "thickArc"
      },
      "index": {
        "description": "circular arc drawn counter-clockwise between two angles in degrees with the given radius and thickness If the thickness is then this is equivalent to Arc",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "thickArc",
        "normalized": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Arc",
        "signature": "Float-\u003eFloat-\u003eFloat-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:thickCircle",
      "description": {
        "fct-descr": "\u003cp\u003eA circle with the given thickness and radius.\n   If the thickness is 0 then this is equivalent to \u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#thickCircle",
        "fct-type": "function",
        "title": "thickCircle"
      },
      "index": {
        "description": "circle with the given thickness and radius If the thickness is then this is equivalent to Circle",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "thickCircle",
        "normalized": "Float-\u003eFloat-\u003ePicture",
        "package": "gloss",
        "partial": "Circle",
        "signature": "Float-\u003eFloat-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Picture.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eA picture translated by the given x and y coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Picture",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-Picture.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "picture translated by the given and coordinates",
        "hierarchy": "Graphics Gloss Data Picture",
        "module": "Graphics.Gloss.Data.Picture",
        "name": "translate",
        "normalized": "Float-\u003eFloat-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003eFloat-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Point",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Point.html",
        "fct-type": "module",
        "title": "Point"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Point",
        "module": "Graphics.Gloss.Data.Point",
        "name": "Point",
        "normalized": "",
        "package": "gloss",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#t:Point",
      "description": {
        "fct-descr": "\u003cp\u003eA point on the x-y plane.\n   Points can also be treated as \u003ccode\u003eVector\u003c/code\u003es, so \u003ca\u003eGraphics.Gloss.Data.Vector\u003c/a\u003e\n   may also be useful.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Point",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Point.html#Point",
        "fct-type": "type",
        "title": "Point"
      },
      "index": {
        "description": "point on the x-y plane Points can also be treated as Vector so Graphics.Gloss.Data.Vector may also be useful",
        "hierarchy": "Graphics Gloss Data Point",
        "module": "Graphics.Gloss.Data.Point",
        "name": "Point",
        "normalized": "",
        "package": "gloss",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Point.html#v:pointInBox",
      "description": {
        "fct-descr": "\u003cp\u003eTest whether a point lies within a rectangular box that is oriented\n   on the x-y plane. The points P1-P2 are opposing points of the box,\n   but need not be in a particular order.\n\u003c/p\u003e\u003cpre\u003e\n    P2 +-------+\n       |       |\n       | + P0  |\n       |       |\n       +-------+ P1\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Data.Point",
        "fct-package": "gloss",
        "fct-signature": "Point -\u003e Point -\u003e Point -\u003e Bool",
        "fct-source": "src/Graphics-Gloss-Data-Point.html#pointInBox",
        "fct-type": "function",
        "title": "pointInBox"
      },
      "index": {
        "description": "Test whether point lies within rectangular box that is oriented on the x-y plane The points P1-P2 are opposing points of the box but need not be in particular order P2 P0 P1",
        "hierarchy": "Graphics Gloss Data Point",
        "module": "Graphics.Gloss.Data.Point",
        "name": "pointInBox",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003eBool",
        "package": "gloss",
        "partial": "In Box",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html",
        "fct-type": "module",
        "title": "Quad"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "Quad",
        "normalized": "",
        "package": "gloss",
        "partial": "Quad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#t:Quad",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a Quadrant in the 2D plane.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#Quad",
        "fct-type": "data",
        "title": "Quad"
      },
      "index": {
        "description": "Represents Quadrant in the plane",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "Quad",
        "normalized": "",
        "package": "gloss",
        "partial": "Quad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:NE",
      "description": {
        "fct-descr": "\u003cp\u003eNorth East\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "NE",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#Quad",
        "fct-type": "function",
        "title": "NE"
      },
      "index": {
        "description": "North East",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "NE",
        "normalized": "",
        "package": "gloss",
        "partial": "NE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:NW",
      "description": {
        "fct-descr": "\u003cp\u003eNorth West\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "NW",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#Quad",
        "fct-type": "function",
        "title": "NW"
      },
      "index": {
        "description": "North West",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "NW",
        "normalized": "",
        "package": "gloss",
        "partial": "NW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:SE",
      "description": {
        "fct-descr": "\u003cp\u003eSouth East\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "SE",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#Quad",
        "fct-type": "function",
        "title": "SE"
      },
      "index": {
        "description": "South East",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "SE",
        "normalized": "",
        "package": "gloss",
        "partial": "SE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:SW",
      "description": {
        "fct-descr": "\u003cp\u003eSouth West\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "SW",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#Quad",
        "fct-type": "function",
        "title": "SW"
      },
      "index": {
        "description": "South West",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "SW",
        "normalized": "",
        "package": "gloss",
        "partial": "SW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Quad.html#v:allQuads",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all quadrants. Same as \u003ccode\u003e[NW .. SE]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Quad",
        "fct-package": "gloss",
        "fct-signature": "[Quad]",
        "fct-source": "src/Graphics-Gloss-Data-Quad.html#allQuads",
        "fct-type": "function",
        "title": "allQuads"
      },
      "index": {
        "description": "list of all quadrants Same as NW SE",
        "hierarchy": "Graphics Gloss Data Quad",
        "module": "Graphics.Gloss.Data.Quad",
        "name": "allQuads",
        "normalized": "[Quad]",
        "package": "gloss",
        "partial": "Quads",
        "signature": "[Quad]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA QuadTree can be used to recursively divide up 2D space into quadrants.\n   The smallest division corresponds to an unit \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e, so the total depth \n   of the tree will depend on what sized \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e you start with.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html",
        "fct-type": "module",
        "title": "QuadTree"
      },
      "index": {
        "description": "QuadTree can be used to recursively divide up space into quadrants The smallest division corresponds to an unit Extent so the total depth of the tree will depend on what sized Extent you start with",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "QuadTree",
        "normalized": "",
        "package": "gloss",
        "partial": "Quad Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#t:QuadTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe quad tree structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
        "fct-type": "data",
        "title": "QuadTree"
      },
      "index": {
        "description": "The quad tree structure",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "QuadTree",
        "normalized": "",
        "package": "gloss",
        "partial": "Quad Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TLeaf",
      "description": {
        "fct-descr": "\u003cp\u003eA leaf containint some value.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "TLeaf a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
        "fct-type": "function",
        "title": "TLeaf"
      },
      "index": {
        "description": "leaf containint some value",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "TLeaf",
        "normalized": "",
        "package": "gloss",
        "partial": "TLeaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TNil",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty node.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "TNil",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
        "fct-type": "function",
        "title": "TNil"
      },
      "index": {
        "description": "An empty node",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "TNil",
        "normalized": "",
        "package": "gloss",
        "partial": "TNil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:TNode",
      "description": {
        "fct-descr": "\u003cp\u003eA node with four children.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "TNode (QuadTree a) (QuadTree a) (QuadTree a) (QuadTree a)",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#QuadTree",
        "fct-type": "function",
        "title": "TNode"
      },
      "index": {
        "description": "node with four children",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "TNode",
        "normalized": "",
        "package": "gloss",
        "partial": "TNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:emptyNode",
      "description": {
        "fct-descr": "\u003cp\u003eA node with \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e. for all its branches.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "QuadTree a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#emptyNode",
        "fct-type": "function",
        "title": "emptyNode"
      },
      "index": {
        "description": "node with TNil for all its branches",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "emptyNode",
        "normalized": "",
        "package": "gloss",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:emptyTree",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eTNil\u003c/a\u003e\u003c/code\u003e tree.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "QuadTree a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#emptyTree",
        "fct-type": "function",
        "title": "emptyTree"
      },
      "index": {
        "description": "TNil tree",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "emptyTree",
        "normalized": "",
        "package": "gloss",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:flattenQuadTree",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a QuadTree into a list of its contained values, with coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Extent-\u003e QuadTree a-\u003e [(Coord, a)]",
        "fct-type": "function",
        "title": "flattenQuadTree"
      },
      "index": {
        "description": "Flatten QuadTree into list of its contained values with coordinates",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "flattenQuadTree",
        "normalized": "Extent-\u003eQuadTree a-\u003e[(Coord,a)]",
        "package": "gloss",
        "partial": "Quad Tree",
        "signature": "Extent-\u003eQuadTree a-\u003e[(Coord,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:flattenQuadTreeWithExtents",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a QuadTree into a list of its contained values, with coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Extent-\u003e QuadTree a-\u003e [(Extent, a)]",
        "fct-type": "function",
        "title": "flattenQuadTreeWithExtents"
      },
      "index": {
        "description": "Flatten QuadTree into list of its contained values with coordinates",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "flattenQuadTreeWithExtents",
        "normalized": "Extent-\u003eQuadTree a-\u003e[(Extent,a)]",
        "package": "gloss",
        "partial": "Quad Tree With Extents",
        "signature": "Extent-\u003eQuadTree a-\u003e[(Extent,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:insertByCoord",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into the node containing this coordinate.\n   The node is created at maximum depth, corresponding to an unit \u003ccode\u003e\u003ca\u003eExtent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Extent -\u003e Coord -\u003e a -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#insertByCoord",
        "fct-type": "function",
        "title": "insertByCoord"
      },
      "index": {
        "description": "Insert value into the node containing this coordinate The node is created at maximum depth corresponding to an unit Extent",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "insertByCoord",
        "normalized": "Extent-\u003eCoord-\u003ea-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
        "package": "gloss",
        "partial": "By Coord",
        "signature": "Extent-\u003eCoord-\u003ea-\u003eQuadTree a-\u003eMaybe(QuadTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:insertByPath",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into the tree at the position given by a path.\n   If the path intersects an existing \u003ccode\u003e\u003ca\u003eTLeaf\u003c/a\u003e\u003c/code\u003e then return the original tree.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "[Quad] -\u003e a -\u003e QuadTree a -\u003e QuadTree a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#insertByPath",
        "fct-type": "function",
        "title": "insertByPath"
      },
      "index": {
        "description": "Insert value into the tree at the position given by path If the path intersects an existing TLeaf then return the original tree",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "insertByPath",
        "normalized": "[Quad]-\u003ea-\u003eQuadTree a-\u003eQuadTree a",
        "package": "gloss",
        "partial": "By Path",
        "signature": "[Quad]-\u003ea-\u003eQuadTree a-\u003eQuadTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:liftToQuad",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to a quadrant of a node.\n   If the tree does not have an outer node then return the original tree.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Quad -\u003e (QuadTree a -\u003e QuadTree a) -\u003e QuadTree a -\u003e QuadTree a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#liftToQuad",
        "fct-type": "function",
        "title": "liftToQuad"
      },
      "index": {
        "description": "Apply function to quadrant of node If the tree does not have an outer node then return the original tree",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "liftToQuad",
        "normalized": "Quad-\u003e(QuadTree a-\u003eQuadTree a)-\u003eQuadTree a-\u003eQuadTree a",
        "package": "gloss",
        "partial": "To Quad",
        "signature": "Quad-\u003e(QuadTree a-\u003eQuadTree a)-\u003eQuadTree a-\u003eQuadTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupByCoord",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a node if a tree given a coordinate which it contains.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Extent-\u003e Coord-\u003e QuadTree a-\u003e Maybe a",
        "fct-type": "function",
        "title": "lookupByCoord"
      },
      "index": {
        "description": "Lookup node if tree given coordinate which it contains",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "lookupByCoord",
        "normalized": "Extent-\u003eCoord-\u003eQuadTree a-\u003eMaybe a",
        "package": "gloss",
        "partial": "By Coord",
        "signature": "Extent-\u003eCoord-\u003eQuadTree a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupByPath",
      "description": {
        "fct-descr": "\u003cp\u003eLookup an element based given a path to it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "[Quad] -\u003e QuadTree a -\u003e Maybe a",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#lookupByPath",
        "fct-type": "function",
        "title": "lookupByPath"
      },
      "index": {
        "description": "Lookup an element based given path to it",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "lookupByPath",
        "normalized": "[Quad]-\u003eQuadTree a-\u003eMaybe a",
        "package": "gloss",
        "partial": "By Path",
        "signature": "[Quad]-\u003eQuadTree a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:lookupNodeByPath",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a node based on a path to it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "[Quad] -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#lookupNodeByPath",
        "fct-type": "function",
        "title": "lookupNodeByPath"
      },
      "index": {
        "description": "Lookup node based on path to it",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "lookupNodeByPath",
        "normalized": "[Quad]-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
        "package": "gloss",
        "partial": "Node By Path",
        "signature": "[Quad]-\u003eQuadTree a-\u003eMaybe(QuadTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-QuadTree.html#v:takeQuadOfTree",
      "description": {
        "fct-descr": "\u003cp\u003eGet a quadrant from a node.\n   If the tree does not have an outer node then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.QuadTree",
        "fct-package": "gloss",
        "fct-signature": "Quad -\u003e QuadTree a -\u003e Maybe (QuadTree a)",
        "fct-source": "src/Graphics-Gloss-Data-QuadTree.html#takeQuadOfTree",
        "fct-type": "function",
        "title": "takeQuadOfTree"
      },
      "index": {
        "description": "Get quadrant from node If the tree does not have an outer node then Nothing",
        "hierarchy": "Graphics Gloss Data QuadTree",
        "module": "Graphics.Gloss.Data.QuadTree",
        "name": "takeQuadOfTree",
        "normalized": "Quad-\u003eQuadTree a-\u003eMaybe(QuadTree a)",
        "package": "gloss",
        "partial": "Quad Of Tree",
        "signature": "Quad-\u003eQuadTree a-\u003eMaybe(QuadTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning vectors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html",
        "fct-type": "module",
        "title": "Vector"
      },
      "index": {
        "description": "Geometric functions concerning vectors",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "gloss",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eA vector can be treated as a point, and vis-versa.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#Vector",
        "fct-type": "type",
        "title": "Vector"
      },
      "index": {
        "description": "vector can be treated as point and vis-versa",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "Vector",
        "normalized": "",
        "package": "gloss",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:angleVV",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the inner angle (in radians) between two vectors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Vector -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#angleVV",
        "fct-type": "function",
        "title": "angleVV"
      },
      "index": {
        "description": "Compute the inner angle in radians between two vectors",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "angleVV",
        "normalized": "Vector-\u003eVector-\u003eFloat",
        "package": "gloss",
        "partial": "VV",
        "signature": "Vector-\u003eVector-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:argV",
      "description": {
        "fct-descr": "\u003cp\u003eThe angle of this vector, relative to the +ve x-axis.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#argV",
        "fct-type": "function",
        "title": "argV"
      },
      "index": {
        "description": "The angle of this vector relative to the ve x-axis",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "argV",
        "normalized": "Vector-\u003eFloat",
        "package": "gloss",
        "partial": "",
        "signature": "Vector-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:detV",
      "description": {
        "fct-descr": "\u003cp\u003eThe determinant of two vectors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Vector -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#detV",
        "fct-type": "function",
        "title": "detV"
      },
      "index": {
        "description": "The determinant of two vectors",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "detV",
        "normalized": "Vector-\u003eVector-\u003eFloat",
        "package": "gloss",
        "partial": "",
        "signature": "Vector-\u003eVector-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:dotV",
      "description": {
        "fct-descr": "\u003cp\u003eThe dot product of two vectors.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Vector -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#dotV",
        "fct-type": "function",
        "title": "dotV"
      },
      "index": {
        "description": "The dot product of two vectors",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "dotV",
        "normalized": "Vector-\u003eVector-\u003eFloat",
        "package": "gloss",
        "partial": "",
        "signature": "Vector-\u003eVector-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:magV",
      "description": {
        "fct-descr": "\u003cp\u003eThe magnitude of a vector.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#magV",
        "fct-type": "function",
        "title": "magV"
      },
      "index": {
        "description": "The magnitude of vector",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "magV",
        "normalized": "Vector-\u003eFloat",
        "package": "gloss",
        "partial": "",
        "signature": "Vector-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:mulSV",
      "description": {
        "fct-descr": "\u003cp\u003eMultiply a vector by a scalar.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Vector -\u003e Vector",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#mulSV",
        "fct-type": "function",
        "title": "mulSV"
      },
      "index": {
        "description": "Multiply vector by scalar",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "mulSV",
        "normalized": "Float-\u003eVector-\u003eVector",
        "package": "gloss",
        "partial": "SV",
        "signature": "Float-\u003eVector-\u003eVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:normaliseV",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise a vector, so it has a magnitude of 1.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Vector -\u003e Vector",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#normaliseV",
        "fct-type": "function",
        "title": "normaliseV"
      },
      "index": {
        "description": "Normalise vector so it has magnitude of",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "normaliseV",
        "normalized": "Vector-\u003eVector",
        "package": "gloss",
        "partial": "",
        "signature": "Vector-\u003eVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:rotateV",
      "description": {
        "fct-descr": "\u003cp\u003eRotate a vector by an angle (in radians). +ve angle is counter-clockwise.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Vector -\u003e Vector",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#rotateV",
        "fct-type": "function",
        "title": "rotateV"
      },
      "index": {
        "description": "Rotate vector by an angle in radians ve angle is counter-clockwise",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "rotateV",
        "normalized": "Float-\u003eVector-\u003eVector",
        "package": "gloss",
        "partial": "",
        "signature": "Float-\u003eVector-\u003eVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-Vector.html#v:unitVectorAtAngle",
      "description": {
        "fct-descr": "\u003cp\u003eProduce a unit vector at a given angle relative to the +ve x-axis.\n\tThe provided angle is in radians.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.Vector",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Vector",
        "fct-source": "src/Graphics-Gloss-Data-Vector.html#unitVectorAtAngle",
        "fct-type": "function",
        "title": "unitVectorAtAngle"
      },
      "index": {
        "description": "Produce unit vector at given angle relative to the ve x-axis The provided angle is in radians",
        "hierarchy": "Graphics Gloss Data Vector",
        "module": "Graphics.Gloss.Data.Vector",
        "name": "unitVectorAtAngle",
        "normalized": "Float-\u003eVector",
        "package": "gloss",
        "partial": "Vector At Angle",
        "signature": "Float-\u003eVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html",
        "fct-type": "module",
        "title": "ViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#t:ViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "data",
        "title": "ViewPort"
      },
      "index": {
        "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:ViewPort",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "ViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:applyViewPortToPicture",
      "description": {
        "fct-descr": "\u003cp\u003eTranslates, rotates, and scales an image according to the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "ViewPort -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#applyViewPortToPicture",
        "fct-type": "function",
        "title": "applyViewPortToPicture"
      },
      "index": {
        "description": "Translates rotates and scales an image according to the ViewPort",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "applyViewPortToPicture",
        "normalized": "ViewPort-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "View Port To Picture",
        "signature": "ViewPort-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:invertViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a point using screen coordinates, and uses the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e to convert\n   it to Picture coordinates. This is the inverse of \u003ccode\u003e\u003ca\u003eapplyViewPortToPicture\u003c/a\u003e\u003c/code\u003e \n   for points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "ViewPort -\u003e Point -\u003e Point",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#invertViewPort",
        "fct-type": "function",
        "title": "invertViewPort"
      },
      "index": {
        "description": "Takes point using screen coordinates and uses the ViewPort to convert it to Picture coordinates This is the inverse of applyViewPortToPicture for points",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "invertViewPort",
        "normalized": "ViewPort-\u003ePoint-\u003ePoint",
        "package": "gloss",
        "partial": "View Port",
        "signature": "ViewPort-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial state of the viewport.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#viewPortInit",
        "fct-type": "function",
        "title": "viewPortInit"
      },
      "index": {
        "description": "The initial state of the viewport",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "viewPortInit",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortRotate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal rotation (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortRotate"
      },
      "index": {
        "description": "Global rotation in degrees",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "viewPortRotate",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortScale",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal scaling (of both x and y coordinates).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortScale"
      },
      "index": {
        "description": "Global scaling of both and coordinates",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "viewPortScale",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewPort.html#v:viewPortTranslate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal translation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewPort",
        "fct-package": "gloss",
        "fct-signature": "!(Float, Float)",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortTranslate"
      },
      "index": {
        "description": "Global translation",
        "hierarchy": "Graphics Gloss Data ViewPort",
        "module": "Graphics.Gloss.Data.ViewPort",
        "name": "viewPortTranslate",
        "normalized": "(Float,Float)",
        "package": "gloss",
        "partial": "Port Translate",
        "signature": "(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html",
        "fct-type": "module",
        "title": "ViewState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "ViewState",
        "normalized": "",
        "package": "gloss",
        "partial": "View State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:Command",
      "description": {
        "fct-descr": "\u003cp\u003eThe commands suported by the view controller.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "data",
        "title": "Command"
      },
      "index": {
        "description": "The commands suported by the view controller",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "Command",
        "normalized": "",
        "package": "gloss",
        "partial": "Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:CommandConfig",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#CommandConfig",
        "fct-type": "type",
        "title": "CommandConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CommandConfig",
        "normalized": "",
        "package": "gloss",
        "partial": "Command Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:ViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "data",
        "title": "ViewPort"
      },
      "index": {
        "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#t:ViewState",
      "description": {
        "fct-descr": "\u003cp\u003eState for controlling the viewport.\n      These are used by the viewport control component.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "data",
        "title": "ViewState"
      },
      "index": {
        "description": "State for controlling the viewport These are used by the viewport control component",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "ViewState",
        "normalized": "",
        "package": "gloss",
        "partial": "View State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpCClockwise",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpCClockwise",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpCClockwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpCClockwise",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump CClockwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpClockwise",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpClockwise",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpClockwise"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpClockwise",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Clockwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpDown",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpDown",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpDown",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpLeft",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpLeft",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpLeft",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpRight",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpRight",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpRight",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpUp",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpUp",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpUp",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpZoomIn",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpZoomIn",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpZoomIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpZoomIn",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Zoom In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CBumpZoomOut",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CBumpZoomOut",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CBumpZoomOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CBumpZoomOut",
        "normalized": "",
        "package": "gloss",
        "partial": "CBump Zoom Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CRestore",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CRestore",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CRestore"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CRestore",
        "normalized": "",
        "package": "gloss",
        "partial": "CRestore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CRotate",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CRotate",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CRotate"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CRotate",
        "normalized": "",
        "package": "gloss",
        "partial": "CRotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:CTranslate",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CTranslate",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#Command",
        "fct-type": "function",
        "title": "CTranslate"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "CTranslate",
        "normalized": "",
        "package": "gloss",
        "partial": "CTranslate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:ViewPort",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "ViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:ViewState",
      "description": {
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewState",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "ViewState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "ViewState",
        "normalized": "",
        "package": "gloss",
        "partial": "View State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:applyViewPortToPicture",
      "description": {
        "fct-descr": "\u003cp\u003eTranslates, rotates, and scales an image according to the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewPort -\u003e Picture -\u003e Picture",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#applyViewPortToPicture",
        "fct-type": "function",
        "title": "applyViewPortToPicture"
      },
      "index": {
        "description": "Translates rotates and scales an image according to the ViewPort",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "applyViewPortToPicture",
        "normalized": "ViewPort-\u003ePicture-\u003ePicture",
        "package": "gloss",
        "partial": "View Port To Picture",
        "signature": "ViewPort-\u003ePicture-\u003ePicture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:defaultCommandConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe default commands.  Left click pans, wheel zooms, right click\n   rotates, \u003ca\u003er\u003c/a\u003e key resets.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CommandConfig",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#defaultCommandConfig",
        "fct-type": "function",
        "title": "defaultCommandConfig"
      },
      "index": {
        "description": "The default commands Left click pans wheel zooms right click rotates key resets",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "defaultCommandConfig",
        "normalized": "",
        "package": "gloss",
        "partial": "Command Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:invertViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a point using screen coordinates, and uses the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e to convert\n   it to Picture coordinates. This is the inverse of \u003ccode\u003e\u003ca\u003eapplyViewPortToPicture\u003c/a\u003e\u003c/code\u003e \n   for points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewPort -\u003e Point -\u003e Point",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#invertViewPort",
        "fct-type": "function",
        "title": "invertViewPort"
      },
      "index": {
        "description": "Takes point using screen coordinates and uses the ViewPort to convert it to Picture coordinates This is the inverse of applyViewPortToPicture for points",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "invertViewPort",
        "normalized": "ViewPort-\u003ePoint-\u003ePoint",
        "package": "gloss",
        "partial": "View Port",
        "signature": "ViewPort-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:updateViewStateWithEvent",
      "description": {
        "fct-descr": "\u003cp\u003eApply an event to a \u003ccode\u003e\u003ca\u003eViewState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "Event -\u003e ViewState -\u003e ViewState",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#updateViewStateWithEvent",
        "fct-type": "function",
        "title": "updateViewStateWithEvent"
      },
      "index": {
        "description": "Apply an event to ViewState",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "updateViewStateWithEvent",
        "normalized": "Event-\u003eViewState-\u003eViewState",
        "package": "gloss",
        "partial": "View State With Event",
        "signature": "Event-\u003eViewState-\u003eViewState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:updateViewStateWithEventMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eupdateViewStateWithEvent\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if no update\n   was needed.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "Event -\u003e ViewState -\u003e Maybe ViewState",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#updateViewStateWithEventMaybe",
        "fct-type": "function",
        "title": "updateViewStateWithEventMaybe"
      },
      "index": {
        "description": "Like updateViewStateWithEvent but returns Nothing if no update was needed",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "updateViewStateWithEventMaybe",
        "normalized": "Event-\u003eViewState-\u003eMaybe ViewState",
        "package": "gloss",
        "partial": "View State With Event Maybe",
        "signature": "Event-\u003eViewState-\u003eMaybe ViewState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortRotate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal rotation (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortRotate"
      },
      "index": {
        "description": "Global rotation in degrees",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewPortRotate",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortScale",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal scaling (of both x and y coordinates).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortScale"
      },
      "index": {
        "description": "Global scaling of both and coordinates",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewPortScale",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewPortTranslate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal translation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!(Float, Float)",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortTranslate"
      },
      "index": {
        "description": "Global translation",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewPortTranslate",
        "normalized": "(Float,Float)",
        "package": "gloss",
        "partial": "Port Translate",
        "signature": "(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateCommands",
      "description": {
        "fct-descr": "\u003cp\u003eThe command list for the viewport controller.\n      These can be safely overwridden at any time by deleting\n      or adding entries to the list.\n      Entries at the front of the list take precedence.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!(Map Command [(Key, Maybe Modifiers)])",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateCommands"
      },
      "index": {
        "description": "The command list for the viewport controller These can be safely overwridden at any time by deleting or adding entries to the list Entries at the front of the list take precedence",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateCommands",
        "normalized": "(Map Command[(Key,Maybe Modifiers)])",
        "package": "gloss",
        "partial": "State Commands",
        "signature": "(Map Command[(Key,Maybe Modifiers)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateInit",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial view state.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewState",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#viewStateInit",
        "fct-type": "function",
        "title": "viewStateInit"
      },
      "index": {
        "description": "The initial view state",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateInit",
        "normalized": "",
        "package": "gloss",
        "partial": "State Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateInitWithConfig",
      "description": {
        "fct-descr": "\u003cp\u003eInitial view state, with user defined config.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "CommandConfig -\u003e ViewState",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#viewStateInitWithConfig",
        "fct-type": "function",
        "title": "viewStateInitWithConfig"
      },
      "index": {
        "description": "Initial view state with user defined config",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateInitWithConfig",
        "normalized": "CommandConfig-\u003eViewState",
        "package": "gloss",
        "partial": "State Init With Config",
        "signature": "CommandConfig-\u003eViewState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateRotateFactor",
      "description": {
        "fct-descr": "\u003cp\u003eHow many degrees to rotate the world by for each pixel of x motion.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateRotateFactor"
      },
      "index": {
        "description": "How many degrees to rotate the world by for each pixel of motion",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateRotateFactor",
        "normalized": "",
        "package": "gloss",
        "partial": "State Rotate Factor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateRotateMark",
      "description": {
        "fct-descr": "\u003cp\u003eDuring viewport rotation,  \n      where the mouse was clicked on the window\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!(Maybe (Float, Float))",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateRotateMark"
      },
      "index": {
        "description": "During viewport rotation where the mouse was clicked on the window",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateRotateMark",
        "normalized": "(Maybe(Float,Float))",
        "package": "gloss",
        "partial": "State Rotate Mark",
        "signature": "(Maybe(Float,Float))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateScaleStep",
      "description": {
        "fct-descr": "\u003cp\u003eHow much to scale the world by for each step of the mouse wheel.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateScaleStep"
      },
      "index": {
        "description": "How much to scale the world by for each step of the mouse wheel",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateScaleStep",
        "normalized": "",
        "package": "gloss",
        "partial": "State Scale Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateTranslateMark",
      "description": {
        "fct-descr": "\u003cp\u003eDuring viewport translation,\n      where the mouse was clicked on the window.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "!(Maybe (Float, Float))",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateTranslateMark"
      },
      "index": {
        "description": "During viewport translation where the mouse was clicked on the window",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateTranslateMark",
        "normalized": "(Maybe(Float,Float))",
        "package": "gloss",
        "partial": "State Translate Mark",
        "signature": "(Maybe(Float,Float))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Data-ViewState.html#v:viewStateViewPort",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Data.ViewState",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewState.html#ViewState",
        "fct-type": "function",
        "title": "viewStateViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Data ViewState",
        "module": "Graphics.Gloss.Data.ViewState",
        "name": "viewStateViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "State View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning angles. If not otherwise specified, all angles are in radians.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Angle",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Geometry-Angle.html",
        "fct-type": "module",
        "title": "Angle"
      },
      "index": {
        "description": "Geometric functions concerning angles If not otherwise specified all angles are in radians",
        "hierarchy": "Graphics Gloss Geometry Angle",
        "module": "Graphics.Gloss.Geometry.Angle",
        "name": "Angle",
        "normalized": "",
        "package": "gloss",
        "partial": "Angle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:degToRad",
      "description": {
        "fct-descr": "\u003cp\u003eConvert degrees to radians\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Angle",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Geometry-Angle.html#degToRad",
        "fct-type": "function",
        "title": "degToRad"
      },
      "index": {
        "description": "Convert degrees to radians",
        "hierarchy": "Graphics Gloss Geometry Angle",
        "module": "Graphics.Gloss.Geometry.Angle",
        "name": "degToRad",
        "normalized": "Float-\u003eFloat",
        "package": "gloss",
        "partial": "To Rad",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:normaliseAngle",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise an angle to be between 0 and 2*pi radians\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Angle",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Geometry-Angle.html#normaliseAngle",
        "fct-type": "function",
        "title": "normaliseAngle"
      },
      "index": {
        "description": "Normalise an angle to be between and pi radians",
        "hierarchy": "Graphics Gloss Geometry Angle",
        "module": "Graphics.Gloss.Geometry.Angle",
        "name": "normaliseAngle",
        "normalized": "Float-\u003eFloat",
        "package": "gloss",
        "partial": "Angle",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Angle.html#v:radToDeg",
      "description": {
        "fct-descr": "\u003cp\u003eConvert radians to degrees\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Angle",
        "fct-package": "gloss",
        "fct-signature": "Float -\u003e Float",
        "fct-source": "src/Graphics-Gloss-Geometry-Angle.html#radToDeg",
        "fct-type": "function",
        "title": "radToDeg"
      },
      "index": {
        "description": "Convert radians to degrees",
        "hierarchy": "Graphics Gloss Geometry Angle",
        "module": "Graphics.Gloss.Geometry.Angle",
        "name": "radToDeg",
        "normalized": "Float-\u003eFloat",
        "package": "gloss",
        "partial": "To Deg",
        "signature": "Float-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeometric functions concerning lines and segments.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003eLine\u003c/code\u003e is taken to be infinite in length, while a \u003ccode\u003eSeg\u003c/code\u003e is finite length\n   line segment represented by its two endpoints. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Geometry-Line.html",
        "fct-type": "module",
        "title": "Line"
      },
      "index": {
        "description": "Geometric functions concerning lines and segments Line is taken to be infinite in length while Seg is finite length line segment represented by its two endpoints",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "Line",
        "normalized": "",
        "package": "gloss",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:closestPointOnLine",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an infinite line which intersects \u003ccode\u003eP1\u003c/code\u003e and \u003ccode\u003eP1\u003c/code\u003e,\n\treturn the point on that line that is closest to \u003ccode\u003eP3\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Point",
        "fct-type": "function",
        "title": "closestPointOnLine"
      },
      "index": {
        "description": "Given an infinite line which intersects P1 and P1 return the point on that line that is closest to P3",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "closestPointOnLine",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint",
        "package": "gloss",
        "partial": "Point On Line",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:closestPointOnLineParam",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an infinite line which intersects P1 and P2,\n\tlet P4 be the point on the line that is closest to P3.\n\u003c/p\u003e\u003cp\u003eReturn an indication of where on the line P4 is relative to P1 and P2.\n\u003c/p\u003e\u003cpre\u003e\n      if P4 == P1 then 0\n      if P4 == P2 then 1\n      if P4 is halfway between P1 and P2 then 0.5\n\u003c/pre\u003e\u003cpre\u003e\n        |\n       P1\n        | \n     P4 +---- P3      \n        |\n       P2\n        |\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Float",
        "fct-type": "function",
        "title": "closestPointOnLineParam"
      },
      "index": {
        "description": "Given an infinite line which intersects P1 and P2 let P4 be the point on the line that is closest to P3 Return an indication of where on the line P4 is relative to P1 and P2 if P4 P1 then if P4 P2 then if P4 is halfway between P1 and P2 then P1 P4 P3 P2",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "closestPointOnLineParam",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003eFloat",
        "package": "gloss",
        "partial": "Point On Line Param",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectLineLine",
      "description": {
        "fct-descr": "\u003cp\u003eGiven four points specifying two lines, get the point where the two lines\n   cross, if any. Note that the lines extend off to infinity, so the\n   intersection point might not line between either of the two pairs of points.\n\u003c/p\u003e\u003cpre\u003e\n     \\      /\n      P1  P4\n       \\ /\n        +\n       / \\\n      P3  P2\n     /     \\\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectLineLine"
      },
      "index": {
        "description": "Given four points specifying two lines get the point where the two lines cross if any Note that the lines extend off to infinity so the intersection point might not line between either of the two pairs of points P1 P4 P3 P2",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectLineLine",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Line Line",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegHorzLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet the point where a segment crosses a horizontal line, if any.\n\u003c/p\u003e\u003cpre\u003e \n                + P1\n               /\n       -------+---------\n             /        y0\n         P2 +\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Float-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegHorzLine"
      },
      "index": {
        "description": "Get the point where segment crosses horizontal line if any P1 y0 P2",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegHorzLine",
        "normalized": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Horz Line",
        "signature": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegHorzSeg",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an arbitrary segment intersects a horizontal segment.\n\u003c/p\u003e\u003cpre\u003e\n                 + P2\n                /\n (xa, y3)  +---+----+ (xb, y3)\n              /\n          P1 +\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Float-\u003e Float-\u003e Float-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegHorzSeg"
      },
      "index": {
        "description": "Check if an arbitrary segment intersects horizontal segment P2 xa y3 xb y3 P1",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegHorzSeg",
        "normalized": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Horz Seg",
        "signature": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet the point where a segment \u003ccode\u003eP1-P2\u003c/code\u003e crosses an infinite line \u003ccode\u003eP3-P4\u003c/code\u003e,\n   if any.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegLine"
      },
      "index": {
        "description": "Get the point where segment P1-P2 crosses an infinite line P3-P4 if any",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegLine",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Line",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegSeg",
      "description": {
        "fct-descr": "\u003cp\u003eGet the point where a segment \u003ccode\u003eP1-P2\u003c/code\u003e crosses another segement \u003ccode\u003eP3-P4\u003c/code\u003e,\n   if any.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegSeg"
      },
      "index": {
        "description": "Get the point where segment P1-P2 crosses another segement P3-P4 if any",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegSeg",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Seg",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegVertLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet the point where a segment crosses a vertical line, if any.\n\u003c/p\u003e\u003cpre\u003e\n              |\n              |   + P1\n              | /\n              +\n            / |\n       P2 +   |\n              | x0\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Float-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegVertLine"
      },
      "index": {
        "description": "Get the point where segment crosses vertical line if any P1 P2 x0",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegVertLine",
        "normalized": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Vert Line",
        "signature": "Point-\u003ePoint-\u003eFloat-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:intersectSegVertSeg",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an arbitrary segment intersects a vertical segment.\n\u003c/p\u003e\u003cpre\u003e\n      (x3, yb) +\n               |   + P1\n               | /\n               +\n             / |\n        P2 +   |\n               + (x3, ya)\n\u003c/pre\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Float-\u003e Float-\u003e Float-\u003e Maybe Point",
        "fct-type": "function",
        "title": "intersectSegVertSeg"
      },
      "index": {
        "description": "Check if an arbitrary segment intersects vertical segment x3 yb P1 P2 x3 ya",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "intersectSegVertSeg",
        "normalized": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point",
        "package": "gloss",
        "partial": "Seg Vert Seg",
        "signature": "Point-\u003ePoint-\u003eFloat-\u003eFloat-\u003eFloat-\u003eMaybe Point"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry-Line.html#v:segClearsBox",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if line segment (P1-P2) clears a box (P3-P4) by being well outside it.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Geometry.Line",
        "fct-package": "gloss",
        "fct-signature": "Point-\u003e Point-\u003e Point-\u003e Point-\u003e Bool",
        "fct-type": "function",
        "title": "segClearsBox"
      },
      "index": {
        "description": "Check if line segment P1-P2 clears box P3-P4 by being well outside it",
        "hierarchy": "Graphics Gloss Geometry Line",
        "module": "Graphics.Gloss.Geometry.Line",
        "name": "segClearsBox",
        "normalized": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eBool",
        "package": "gloss",
        "partial": "Clears Box",
        "signature": "Point-\u003ePoint-\u003ePoint-\u003ePoint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Geometry.html#",
      "description": {
        "fct-module": "Graphics.Gloss.Geometry",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Geometry.html",
        "fct-type": "module",
        "title": "Geometry"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Geometry",
        "module": "Graphics.Gloss.Geometry",
        "name": "Geometry",
        "normalized": "",
        "package": "gloss",
        "partial": "Geometry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Animate",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-IO-Animate.html",
        "fct-type": "module",
        "title": "Animate"
      },
      "index": {
        "description": "Display mode is for drawing static picture",
        "hierarchy": "Graphics Gloss Interface IO Animate",
        "module": "Graphics.Gloss.Interface.IO.Animate",
        "name": "Animate",
        "normalized": "",
        "package": "gloss",
        "partial": "Animate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#v:animateFixedIO",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eanimateIO\u003c/a\u003e\u003c/code\u003e but don't allow the display to be panned around.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Animate",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e (Float -\u003e IO Picture)-\u003e IO ()",
        "fct-type": "function",
        "title": "animateFixedIO"
      },
      "index": {
        "description": "Like animateIO but don allow the display to be panned around",
        "hierarchy": "Graphics Gloss Interface IO Animate",
        "module": "Graphics.Gloss.Interface.IO.Animate",
        "name": "animateFixedIO",
        "normalized": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
        "package": "gloss",
        "partial": "Fixed IO",
        "signature": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Animate.html#v:animateIO",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a new window and display the given animation.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Animate",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e (Float -\u003e IO Picture)-\u003e IO ()",
        "fct-type": "function",
        "title": "animateIO"
      },
      "index": {
        "description": "Open new window and display the given animation Once the window is open you can use the same commands as with display",
        "hierarchy": "Graphics Gloss Interface IO Animate",
        "module": "Graphics.Gloss.Interface.IO.Animate",
        "name": "animateIO",
        "normalized": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()",
        "package": "gloss",
        "partial": "IO",
        "signature": "Display-\u003eColor-\u003e(Float-\u003eIO Picture)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis game mode lets you manage your own input. Pressing ESC will still abort the program,\n   but you don't get automatic pan and zoom controls like with \u003ccode\u003edisplayInWindow\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-IO-Game.html",
        "fct-type": "module",
        "title": "Game"
      },
      "index": {
        "description": "This game mode lets you manage your own input Pressing ESC will still abort the program but you don get automatic pan and zoom controls like with displayInWindow",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Game",
        "normalized": "",
        "package": "gloss",
        "partial": "Game",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003ePossible input events.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Possible input events",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Event",
        "normalized": "",
        "package": "gloss",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Key",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Key",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:KeyState",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "data",
        "title": "KeyState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyState",
        "normalized": "",
        "package": "gloss",
        "partial": "Key State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:Modifiers",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "data",
        "title": "Modifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Modifiers",
        "normalized": "",
        "package": "gloss",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:MouseButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "data",
        "title": "MouseButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "MouseButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Mouse Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#t:SpecialKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "data",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "SpecialKey",
        "normalized": "",
        "package": "gloss",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:AdditionalButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "AdditionalButton Int",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "AdditionalButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "AdditionalButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Additional Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Char",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "Char Char",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "Char"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Char",
        "normalized": "",
        "package": "gloss",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Down",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "Down",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Down",
        "normalized": "",
        "package": "gloss",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "EventKey Key KeyState Modifiers (Float, Float)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "EventKey",
        "normalized": "EventKey Key KeyState Modifiers(Float,Float)",
        "package": "gloss",
        "partial": "Event Key",
        "signature": "EventKey Key KeyState Modifiers(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventMotion",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "EventMotion (Float, Float)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventMotion"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "EventMotion",
        "normalized": "EventMotion(Float,Float)",
        "package": "gloss",
        "partial": "Event Motion",
        "signature": "EventMotion(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:EventResize",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "EventResize (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventResize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "EventResize",
        "normalized": "EventResize(Int,Int)",
        "package": "gloss",
        "partial": "Event Resize",
        "signature": "EventResize(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBackspace",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyBackspace",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyBackspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyBackspace",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Backspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyBegin",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyBegin",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyBegin",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDelete",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyDelete",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyDelete",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnd",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEnd",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyEnd",
        "normalized": "",
        "package": "gloss",
        "partial": "Key End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEnter",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEnter",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyEnter",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyEsc",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEsc",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyEsc",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Esc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF1",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF1",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF1",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF10",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF10",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF10"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF10",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF11",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF11",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF11"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF11",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF12",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF12",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF12"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF12",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF13",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF13",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF13"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF13",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF14",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF14",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF14"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF14",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF15",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF15",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF15"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF15",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF16",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF16",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF16"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF16",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF17",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF17",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF17"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF17",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF18",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF18",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF18"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF18",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF19",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF19",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF19"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF19",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF2",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF2",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF2",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF20",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF20",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF20"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF20",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF21",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF21",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF21"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF21",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF22",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF22",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF22"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF22",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF23",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF23",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF23"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF23",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF24",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF24",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF24"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF24",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF25",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF25",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF25"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF25",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF3",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF3",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF3"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF3",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF4",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF4",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF4"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF4",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF5",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF5",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF5",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF6",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF6",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF6"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF6",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF7",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF7",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF7"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF7",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF8",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF8",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF8",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyF9",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF9",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF9"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyF9",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyHome",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyHome",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyHome"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyHome",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyInsert",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyInsert",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyInsert",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyLeft",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyLeft",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyLeft",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyNumLock",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyNumLock",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyNumLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyNumLock",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Num Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad0",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad0",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad0"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad0",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad1",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad1",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad1",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad2",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad2",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad2",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad3",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad3",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad3"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad3",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad4",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad4",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad4"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad4",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad5",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad5",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad5",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad6",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad6",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad6"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad6",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad7",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad7",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad7"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad7",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad8",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad8",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad8"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad8",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPad9",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad9",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad9"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPad9",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadAdd",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadAdd",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadAdd",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDecimal",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadDecimal",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadDecimal",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadDivide",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadDivide",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadDivide"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadDivide",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Divide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEnter",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadEnter",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadEnter",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadEqual",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadEqual",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadEqual",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadMultiply",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadMultiply",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadMultiply"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadMultiply",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Multiply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPadSubtract",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadSubtract",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadSubtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPadSubtract",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Subtract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPageDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPageDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPageDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Page Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyPageUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPageUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPageUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyPageUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Page Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyRight",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyRight",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyRight",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeySpace",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeySpace",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeySpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeySpace",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyTab",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyTab",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyTab",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUnknown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyUnknown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyUnknown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:KeyUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "KeyUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:LeftButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "LeftButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "LeftButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "LeftButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Left Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MiddleButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "MiddleButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "MiddleButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "MiddleButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Middle Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Modifiers",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "Modifiers",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "Modifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Modifiers",
        "normalized": "",
        "package": "gloss",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:MouseButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "MouseButton MouseButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "MouseButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "MouseButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Mouse Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:RightButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "RightButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "RightButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "RightButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Right Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:SpecialKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "SpecialKey SpecialKey",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "SpecialKey",
        "normalized": "",
        "package": "gloss",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:Up",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "Up",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "function",
        "title": "Up"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "Up",
        "normalized": "",
        "package": "gloss",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "WheelDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "WheelDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "WheelDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Wheel Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:WheelUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "WheelUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "WheelUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "WheelUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Wheel Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:alt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "alt",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:ctrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "ctrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "ctrl",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:playIO",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a game in a window, using IO actions to build the pictures. \n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e IO Picture)-\u003e (Event -\u003e world -\u003e IO world)-\u003e (Float -\u003e world -\u003e IO world)-\u003e IO ()",
        "fct-type": "function",
        "title": "playIO"
      },
      "index": {
        "description": "Play game in window using IO actions to build the pictures",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "playIO",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003eIO Picture)-\u003e(Event-\u003ea-\u003eIO a)-\u003e(Float-\u003ea-\u003eIO a)-\u003eIO()",
        "package": "gloss",
        "partial": "IO",
        "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003eIO Picture)-\u003e(Event-\u003eworld-\u003eIO world)-\u003e(Float-\u003eworld-\u003eIO world)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Game.html#v:shift",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.IO.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Game",
        "module": "Graphics.Gloss.Interface.IO.Game",
        "name": "shift",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulate mode is for producing an animation of some model who's picture\n   changes over finite time steps. The behavior of the model can also depent\n   on the current \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-IO-Simulate.html",
        "fct-type": "module",
        "title": "Simulate"
      },
      "index": {
        "description": "Simulate mode is for producing an animation of some model who picture changes over finite time steps The behavior of the model can also depent on the current ViewPort",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "Simulate",
        "normalized": "",
        "package": "gloss",
        "partial": "Simulate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#t:ViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "data",
        "title": "ViewPort"
      },
      "index": {
        "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:ViewPort",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "ViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:simulateIO",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e model-\u003e (model -\u003e IO Picture)-\u003e (ViewPort -\u003e Float -\u003e model -\u003e IO model)-\u003e IO ()",
        "fct-type": "function",
        "title": "simulateIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "simulateIO",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003eIO Picture)-\u003e(ViewPort-\u003eFloat-\u003ea-\u003eIO a)-\u003eIO()",
        "package": "gloss",
        "partial": "IO",
        "signature": "Display-\u003eColor-\u003eInt-\u003emodel-\u003e(model-\u003eIO Picture)-\u003e(ViewPort-\u003eFloat-\u003emodel-\u003eIO model)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortRotate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal rotation (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortRotate"
      },
      "index": {
        "description": "Global rotation in degrees",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "viewPortRotate",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortScale",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal scaling (of both x and y coordinates).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortScale"
      },
      "index": {
        "description": "Global scaling of both and coordinates",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "viewPortScale",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-IO-Simulate.html#v:viewPortTranslate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal translation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.IO.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!(Float, Float)",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortTranslate"
      },
      "index": {
        "description": "Global translation",
        "hierarchy": "Graphics Gloss Interface IO Simulate",
        "module": "Graphics.Gloss.Interface.IO.Simulate",
        "name": "viewPortTranslate",
        "normalized": "(Float,Float)",
        "package": "gloss",
        "partial": "Port Translate",
        "signature": "(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Animate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Animate",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-Pure-Animate.html",
        "fct-type": "module",
        "title": "Animate"
      },
      "index": {
        "description": "Display mode is for drawing static picture",
        "hierarchy": "Graphics Gloss Interface Pure Animate",
        "module": "Graphics.Gloss.Interface.Pure.Animate",
        "name": "Animate",
        "normalized": "",
        "package": "gloss",
        "partial": "Animate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Animate.html#v:animate",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a new window and display the given animation.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Animate",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e (Float -\u003e Picture)-\u003e IO ()",
        "fct-type": "function",
        "title": "animate"
      },
      "index": {
        "description": "Open new window and display the given animation Once the window is open you can use the same commands as with display",
        "hierarchy": "Graphics Gloss Interface Pure Animate",
        "module": "Graphics.Gloss.Interface.Pure.Animate",
        "name": "animate",
        "normalized": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Display.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay mode is for drawing a static picture.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Display",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-Pure-Display.html",
        "fct-type": "module",
        "title": "Display"
      },
      "index": {
        "description": "Display mode is for drawing static picture",
        "hierarchy": "Graphics Gloss Interface Pure Display",
        "module": "Graphics.Gloss.Interface.Pure.Display",
        "name": "Display",
        "normalized": "",
        "package": "gloss",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Display.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a new window and display the given picture.\n\u003c/p\u003e\u003cp\u003eUse the following commands once the window is open:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Quit - esc-key.\n\u003c/li\u003e\u003cli\u003e Move Viewport - left-click drag, arrow keys.\n\u003c/li\u003e\u003cli\u003e Rotate Viewport - right-click drag, control-left-click drag, or home/end-keys.\n\u003c/li\u003e\u003cli\u003e Zoom Viewport - mouse wheel, or page up/down-keys.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Display",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Picture-\u003e IO ()",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Open new window and display the given picture Use the following commands once the window is open Quit esc-key Move Viewport left-click drag arrow keys Rotate Viewport right-click drag control-left-click drag or home end-keys Zoom Viewport mouse wheel or page up down-keys",
        "hierarchy": "Graphics Gloss Interface Pure Display",
        "module": "Graphics.Gloss.Interface.Pure.Display",
        "name": "display",
        "normalized": "Display-\u003eColor-\u003ePicture-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003ePicture-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis game mode lets you manage your own input. Pressing ESC will still abort the program,\n   but you don't get automatic pan and zoom controls like with \u003ccode\u003edisplayInWindow\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-Pure-Game.html",
        "fct-type": "module",
        "title": "Game"
      },
      "index": {
        "description": "This game mode lets you manage your own input Pressing ESC will still abort the program but you don get automatic pan and zoom controls like with displayInWindow",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Game",
        "normalized": "",
        "package": "gloss",
        "partial": "Game",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003ePossible input events.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Possible input events",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Event",
        "normalized": "",
        "package": "gloss",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Key",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Key",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:KeyState",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "data",
        "title": "KeyState"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyState",
        "normalized": "",
        "package": "gloss",
        "partial": "Key State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:Modifiers",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "data",
        "title": "Modifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Modifiers",
        "normalized": "",
        "package": "gloss",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:MouseButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "data",
        "title": "MouseButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "MouseButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Mouse Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#t:SpecialKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "data",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "SpecialKey",
        "normalized": "",
        "package": "gloss",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:AdditionalButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "AdditionalButton Int",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "AdditionalButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "AdditionalButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Additional Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Char",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "Char Char",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "Char"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Char",
        "normalized": "",
        "package": "gloss",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Down",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "Down",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Down",
        "normalized": "",
        "package": "gloss",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "EventKey Key KeyState Modifiers (Float, Float)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "EventKey",
        "normalized": "EventKey Key KeyState Modifiers(Float,Float)",
        "package": "gloss",
        "partial": "Event Key",
        "signature": "EventKey Key KeyState Modifiers(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventMotion",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "EventMotion (Float, Float)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventMotion"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "EventMotion",
        "normalized": "EventMotion(Float,Float)",
        "package": "gloss",
        "partial": "Event Motion",
        "signature": "EventMotion(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:EventResize",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "EventResize (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Event.html#Event",
        "fct-type": "function",
        "title": "EventResize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "EventResize",
        "normalized": "EventResize(Int,Int)",
        "package": "gloss",
        "partial": "Event Resize",
        "signature": "EventResize(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyBackspace",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyBackspace",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyBackspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyBackspace",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Backspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyBegin",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyBegin",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyBegin",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyDelete",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyDelete",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyDelete",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEnd",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEnd",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyEnd",
        "normalized": "",
        "package": "gloss",
        "partial": "Key End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEnter",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEnter",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyEnter",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyEsc",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyEsc",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyEsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyEsc",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Esc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF1",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF1",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF1",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF10",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF10",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF10"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF10",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF11",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF11",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF11"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF11",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF12",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF12",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF12"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF12",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF13",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF13",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF13"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF13",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF14",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF14",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF14"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF14",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF15",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF15",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF15"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF15",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF16",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF16",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF16"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF16",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF17",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF17",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF17"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF17",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF18",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF18",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF18"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF18",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF19",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF19",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF19"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF19",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF2",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF2",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF2",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF20",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF20",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF20"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF20",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF21",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF21",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF21"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF21",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF22",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF22",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF22"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF22",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF23",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF23",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF23"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF23",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF24",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF24",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF24"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF24",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF25",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF25",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF25"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF25",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF3",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF3",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF3"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF3",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF4",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF4",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF4"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF4",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF5",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF5",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF5",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF6",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF6",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF6"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF6",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF7",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF7",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF7"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF7",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF8",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF8",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF8"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF8",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyF9",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyF9",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyF9"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyF9",
        "normalized": "",
        "package": "gloss",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyHome",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyHome",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyHome"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyHome",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyInsert",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyInsert",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyInsert",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyLeft",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyLeft",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyLeft",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyNumLock",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyNumLock",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyNumLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyNumLock",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Num Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad0",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad0",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad0"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad0",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad1",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad1",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad1",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad2",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad2",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad2",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad3",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad3",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad3"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad3",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad4",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad4",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad4"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad4",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad5",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad5",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad5",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad6",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad6",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad6"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad6",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad7",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad7",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad7"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad7",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad8",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad8",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad8"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad8",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPad9",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPad9",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPad9"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPad9",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadAdd",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadAdd",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadAdd",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadDecimal",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadDecimal",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadDecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadDecimal",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Decimal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadDivide",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadDivide",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadDivide"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadDivide",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Divide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadEnter",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadEnter",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadEnter",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadEqual",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadEqual",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadEqual",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Equal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadMultiply",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadMultiply",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadMultiply"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadMultiply",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Multiply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPadSubtract",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPadSubtract",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPadSubtract"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPadSubtract",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Pad Subtract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPageDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPageDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPageDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPageDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Page Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyPageUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyPageUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyPageUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyPageUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Page Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyRight",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyRight",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyRight",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeySpace",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeySpace",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeySpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeySpace",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyTab",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyTab",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyTab",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyUnknown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyUnknown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyUnknown",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:KeyUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#SpecialKey",
        "fct-type": "function",
        "title": "KeyUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "KeyUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Key Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:LeftButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "LeftButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "LeftButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "LeftButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Left Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:MiddleButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "MiddleButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "MiddleButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "MiddleButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Middle Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Modifiers",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "Modifiers",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "Modifiers"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Modifiers",
        "normalized": "",
        "package": "gloss",
        "partial": "Modifiers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:MouseButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "MouseButton MouseButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "MouseButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "MouseButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Mouse Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:RightButton",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "RightButton",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "RightButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "RightButton",
        "normalized": "",
        "package": "gloss",
        "partial": "Right Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:SpecialKey",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "SpecialKey SpecialKey",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Key",
        "fct-type": "function",
        "title": "SpecialKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "SpecialKey",
        "normalized": "",
        "package": "gloss",
        "partial": "Special Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:Up",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "Up",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#KeyState",
        "fct-type": "function",
        "title": "Up"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "Up",
        "normalized": "",
        "package": "gloss",
        "partial": "Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:WheelDown",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "WheelDown",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "WheelDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "WheelDown",
        "normalized": "",
        "package": "gloss",
        "partial": "Wheel Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:WheelUp",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "WheelUp",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#MouseButton",
        "fct-type": "function",
        "title": "WheelUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "WheelUp",
        "normalized": "",
        "package": "gloss",
        "partial": "Wheel Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:alt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "alt"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "alt",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:ctrl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "ctrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "ctrl",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:play",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a game in a window. \n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e Picture)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
        "fct-type": "function",
        "title": "play"
      },
      "index": {
        "description": "Play game in window",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "play",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003ePicture)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Game.html#v:shift",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Graphics.Gloss.Interface.Pure.Game",
        "fct-package": "gloss",
        "fct-signature": "KeyState",
        "fct-source": "src/Graphics-Gloss-Internals-Interface-Backend-Types.html#Modifiers",
        "fct-type": "function",
        "title": "shift"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Game",
        "module": "Graphics.Gloss.Interface.Pure.Game",
        "name": "shift",
        "normalized": "",
        "package": "gloss",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimulate mode is for producing an animation of some model who's picture\n   changes over finite time steps. The behavior of the model can also depent\n   on the current \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss-Interface-Pure-Simulate.html",
        "fct-type": "module",
        "title": "Simulate"
      },
      "index": {
        "description": "Simulate mode is for producing an animation of some model who picture changes over finite time steps The behavior of the model can also depent on the current ViewPort",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "Simulate",
        "normalized": "",
        "package": "gloss",
        "partial": "Simulate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#t:ViewPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e represents the global transformation applied to the displayed picture.\n      When the user pans, zooms, or rotates the display then this changes the \u003ccode\u003e\u003ca\u003eViewPort\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "data",
        "title": "ViewPort"
      },
      "index": {
        "description": "The ViewPort represents the global transformation applied to the displayed picture When the user pans zooms or rotates the display then this changes the ViewPort",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:ViewPort",
      "description": {
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "ViewPort",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "ViewPort"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "ViewPort",
        "normalized": "",
        "package": "gloss",
        "partial": "View Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003eRun a finite-time-step simulation in a window. You decide how the model is represented,\n      how to convert the model to a picture, and how to advance the model for each unit of time. \n      This function does the rest.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e model-\u003e (model -\u003e Picture)-\u003e (ViewPort -\u003e Float -\u003e model -\u003e model)-\u003e IO ()",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "Run finite-time-step simulation in window You decide how the model is represented how to convert the model to picture and how to advance the model for each unit of time This function does the rest Once the window is open you can use the same commands as with display",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "simulate",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003eInt-\u003emodel-\u003e(model-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003emodel-\u003emodel)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortRotate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal rotation (in degrees).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortRotate"
      },
      "index": {
        "description": "Global rotation in degrees",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "viewPortRotate",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortScale",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal scaling (of both x and y coordinates).\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!Float",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortScale"
      },
      "index": {
        "description": "Global scaling of both and coordinates",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "viewPortScale",
        "normalized": "",
        "package": "gloss",
        "partial": "Port Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss-Interface-Pure-Simulate.html#v:viewPortTranslate",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal translation.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss.Interface.Pure.Simulate",
        "fct-package": "gloss",
        "fct-signature": "!(Float, Float)",
        "fct-source": "src/Graphics-Gloss-Data-ViewPort.html#ViewPort",
        "fct-type": "function",
        "title": "viewPortTranslate"
      },
      "index": {
        "description": "Global translation",
        "hierarchy": "Graphics Gloss Interface Pure Simulate",
        "module": "Graphics.Gloss.Interface.Pure.Simulate",
        "name": "viewPortTranslate",
        "normalized": "(Float,Float)",
        "package": "gloss",
        "partial": "Port Translate",
        "signature": "(Float,Float)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGloss hides the pain of drawing simple vector graphics behind a nice data type and\n\ta few display functions. \n\u003c/p\u003e\u003cp\u003eGetting something on the screen is as easy as:\n\u003c/p\u003e\u003cpre\u003e\n    import Graphics.Gloss\n    main = \u003ccode\u003e\u003ca\u003edisplay\u003c/a\u003e\u003c/code\u003e (InWindow \"Nice Window\" (200, 200) (10, 10)) \u003ccode\u003e\u003ca\u003ewhite\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eCircle\u003c/a\u003e\u003c/code\u003e 80)\n\u003c/pre\u003e\u003cp\u003eOnce the window is open you can use the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Quit - esc-key.\n\u003c/li\u003e\u003cli\u003e Move Viewport - left-click drag, arrow keys.\n\u003c/li\u003e\u003cli\u003e Rotate Viewport - right-click drag, control-left-click drag, or home/end-keys.\n\u003c/li\u003e\u003cli\u003e Zoom Viewport - mouse wheel, or page up/down-keys.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAnimations can be constructed similarly using the \u003ccode\u003e\u003ca\u003eanimate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you want to run a simulation based around finite time steps then try\n   \u003ccode\u003e\u003ca\u003esimulate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you want to manage your own key/mouse events then use \u003ccode\u003e\u003ca\u003eplay\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eGloss uses OpenGL under the hood, but you don't have to worry about any of that.\n\u003c/p\u003e\u003cp\u003eGloss programs should be compiled with \u003ccode\u003e-threaded\u003c/code\u003e, otherwise the GHC runtime\n   will limit the frame-rate to around 20Hz.\n\u003c/p\u003e\u003cp\u003eTo build gloss using the GLFW window manager instead of GLUT use\n        \u003ccode\u003ecabal install gloss --flags=\"GLFW -GLUT\"\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003eRelease Notes:\n\nFor 1.8.0\n  Thanks to Francesco Mazzoli\n   * Factored out ViewPort and ViewState handling into user visible modules.\n\nFor 1.7.0:\n   * Tweaked circle level-of-detail reduction code.\n   * Increased frame rate cap to 100hz.\n   Thanks to Doug Burke\n   * Primitives for drawing arcs and sectors.\n   Thanks to Thomas DuBuisson\n   * IO versions of animate, simplate and play.\n\nFor 1.6.0:\n   Thanks to Anthony Cowley\n   * Full screen display mode.\n\nFor 1.5.0:\n   * O(1) Conversion of ForeignPtrs to bitmaps.\n   * An extra flag on the Bitmap constructor allows bitmaps to be cached\n     in texture memory between frames.\n\u003c/pre\u003e\u003cp\u003eFor more information, check out \u003ca\u003ehttp://gloss.ouroborus.net\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Gloss.html",
        "fct-type": "module",
        "title": "Gloss"
      },
      "index": {
        "description": "Gloss hides the pain of drawing simple vector graphics behind nice data type and few display functions Getting something on the screen is as easy as import Graphics.Gloss main display InWindow Nice Window white Circle Once the window is open you can use the following Quit esc-key Move Viewport left-click drag arrow keys Rotate Viewport right-click drag control-left-click drag or home end-keys Zoom Viewport mouse wheel or page up down-keys Animations can be constructed similarly using the animate If you want to run simulation based around finite time steps then try simulate If you want to manage your own key mouse events then use play Gloss uses OpenGL under the hood but you don have to worry about any of that Gloss programs should be compiled with threaded otherwise the GHC runtime will limit the frame-rate to around Hz To build gloss using the GLFW window manager instead of GLUT use cabal install gloss flags GLFW GLUT Release Notes For Thanks to Francesco Mazzoli Factored out ViewPort and ViewState handling into user visible modules For Tweaked circle level-of-detail reduction code Increased frame rate cap to hz Thanks to Doug Burke Primitives for drawing arcs and sectors Thanks to Thomas DuBuisson IO versions of animate simplate and play For Thanks to Anthony Cowley Full screen display mode For Conversion of ForeignPtrs to bitmaps An extra flag on the Bitmap constructor allows bitmaps to be cached in texture memory between frames For more information check out http gloss.ouroborus.net",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "Gloss",
        "normalized": "",
        "package": "gloss",
        "partial": "Gloss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#t:Display",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes how Gloss should display its output.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "data",
        "title": "Display"
      },
      "index": {
        "description": "Describes how Gloss should display its output",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "Display",
        "normalized": "",
        "package": "gloss",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:FullScreen",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay full screen with a drawing area of the given size.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "FullScreen (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "function",
        "title": "FullScreen"
      },
      "index": {
        "description": "Display full screen with drawing area of the given size",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "FullScreen",
        "normalized": "FullScreen(Int,Int)",
        "package": "gloss",
        "partial": "Full Screen",
        "signature": "FullScreen(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:InWindow",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay in a window with the given name, size and position.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "InWindow String (Int, Int) (Int, Int)",
        "fct-source": "src/Graphics-Gloss-Data-Display.html#Display",
        "fct-type": "function",
        "title": "InWindow"
      },
      "index": {
        "description": "Display in window with the given name size and position",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "InWindow",
        "normalized": "InWindow String(Int,Int)(Int,Int)",
        "package": "gloss",
        "partial": "In Window",
        "signature": "InWindow String(Int,Int)(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:animate",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a new window and display the given animation.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e (Float -\u003e Picture)-\u003e IO ()",
        "fct-type": "function",
        "title": "animate"
      },
      "index": {
        "description": "Open new window and display the given animation Once the window is open you can use the same commands as with display",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "animate",
        "normalized": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003e(Float-\u003ePicture)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a new window and display the given picture.\n\u003c/p\u003e\u003cp\u003eUse the following commands once the window is open:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Quit - esc-key.\n\u003c/li\u003e\u003cli\u003e Move Viewport - left-click drag, arrow keys.\n\u003c/li\u003e\u003cli\u003e Rotate Viewport - right-click drag, control-left-click drag, or home/end-keys.\n\u003c/li\u003e\u003cli\u003e Zoom Viewport - mouse wheel, or page up/down-keys.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Picture-\u003e IO ()",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Open new window and display the given picture Use the following commands once the window is open Quit esc-key Move Viewport left-click drag arrow keys Rotate Viewport right-click drag control-left-click drag or home end-keys Zoom Viewport mouse wheel or page up down-keys",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "display",
        "normalized": "Display-\u003eColor-\u003ePicture-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003ePicture-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:play",
      "description": {
        "fct-descr": "\u003cp\u003ePlay a game in a window. \n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e world-\u003e (world -\u003e Picture)-\u003e (Event -\u003e world -\u003e world)-\u003e (Float -\u003e world -\u003e world)-\u003e IO ()",
        "fct-type": "function",
        "title": "play"
      },
      "index": {
        "description": "Play game in window",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "play",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(Event-\u003ea-\u003ea)-\u003e(Float-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003eInt-\u003eworld-\u003e(world-\u003ePicture)-\u003e(Event-\u003eworld-\u003eworld)-\u003e(Float-\u003eworld-\u003eworld)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gloss/docs/Graphics-Gloss.html#v:simulate",
      "description": {
        "fct-descr": "\u003cp\u003eRun a finite-time-step simulation in a window. You decide how the model is represented,\n      how to convert the model to a picture, and how to advance the model for each unit of time. \n      This function does the rest.\n\u003c/p\u003e\u003cp\u003eOnce the window is open you can use the same commands as with \u003ccode\u003edisplay\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.Gloss",
        "fct-package": "gloss",
        "fct-signature": "Display-\u003e Color-\u003e Int-\u003e model-\u003e (model -\u003e Picture)-\u003e (ViewPort -\u003e Float -\u003e model -\u003e model)-\u003e IO ()",
        "fct-type": "function",
        "title": "simulate"
      },
      "index": {
        "description": "Run finite-time-step simulation in window You decide how the model is represented how to convert the model to picture and how to advance the model for each unit of time This function does the rest Once the window is open you can use the same commands as with display",
        "hierarchy": "Graphics Gloss",
        "module": "Graphics.Gloss",
        "name": "simulate",
        "normalized": "Display-\u003eColor-\u003eInt-\u003ea-\u003e(a-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003ea-\u003ea)-\u003eIO()",
        "package": "gloss",
        "partial": "",
        "signature": "Display-\u003eColor-\u003eInt-\u003emodel-\u003e(model-\u003ePicture)-\u003e(ViewPort-\u003eFloat-\u003emodel-\u003emodel)-\u003eIO()"
      }
    }
  }
]