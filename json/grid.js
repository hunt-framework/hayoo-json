[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of hexagonal tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-Hexagonal.html",
        "fct-type": "module",
        "title": "Hexagonal"
      },
      "index": {
        "description": "regular arrangement of hexagonal tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "Hexagonal",
        "normalized": "",
        "package": "grid",
        "partial": "Hexagonal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:HexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
        "fct-type": "data",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "HexHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:ParaHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA parallelogramatical grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
        "fct-type": "data",
        "title": "ParaHexGrid"
      },
      "index": {
        "description": "parallelogramatical grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "ParaHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Para Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:UnboundedHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
        "fct-type": "data",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:hexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e HexHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#hexHexGrid",
        "fct-type": "function",
        "title": "hexHexGrid"
      },
      "index": {
        "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "hexHexGrid",
        "normalized": "Int-\u003eHexHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eHexHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:paraHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles. If \n   \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles.\n   Otherwise, the resulting grid will be null and the list of indices will \n   be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e ParaHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#paraHexGrid",
        "fct-type": "function",
        "title": "paraHexGrid"
      },
      "index": {
        "description": "paraHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Hexagonal",
        "module": "Math.Geometry.Grid.Hexagonal",
        "name": "paraHexGrid",
        "normalized": "Int-\u003eInt-\u003eParaHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eInt-\u003eParaHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHexagonal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, except the grids are\n oriented so that the flat part of the hexagonal tiles is on the top.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-Hexagonal2.html",
        "fct-type": "module",
        "title": "Hexagonal2"
      },
      "index": {
        "description": "Same as Hexagonal except the grids are oriented so that the flat part of the hexagonal tiles is on the top The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "Hexagonal2",
        "normalized": "",
        "package": "grid",
        "partial": "Hexagonal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:HexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
        "fct-type": "data",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "HexHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:RectHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
        "fct-type": "data",
        "title": "RectHexGrid"
      },
      "index": {
        "description": "rectangular grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "RectHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:UnboundedHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
        "fct-type": "data",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:hexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e HexHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#hexHexGrid",
        "fct-type": "function",
        "title": "hexHexGrid"
      },
      "index": {
        "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "hexHexGrid",
        "normalized": "Int-\u003eHexHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eHexHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:rectHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles.\n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have\n   \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the\n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Hexagonal2",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#rectHexGrid",
        "fct-type": "function",
        "title": "rectHexGrid"
      },
      "index": {
        "description": "rectHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Hexagonal2",
        "module": "Math.Geometry.Grid.Hexagonal2",
        "name": "rectHexGrid",
        "normalized": "Int-\u003eInt-\u003eRectHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eInt-\u003eRectHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eHexGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eHexGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html",
        "fct-type": "module",
        "title": "HexagonalInternal"
      },
      "index": {
        "description": "module containing private HexGrid internals Most developers should use HexGrid instead This module is subject to change without notice",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "HexagonalInternal",
        "normalized": "",
        "package": "grid",
        "partial": "Hexagonal Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:HexDirection",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "data",
        "title": "HexDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "HexDirection",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:HexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
        "fct-type": "data",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "HexHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:ParaHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA parallelogramatical grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
        "fct-type": "data",
        "title": "ParaHexGrid"
      },
      "index": {
        "description": "parallelogramatical grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "ParaHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Para Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:UnboundedHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
        "fct-type": "data",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:East",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "East",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "East"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "East",
        "normalized": "",
        "package": "grid",
        "partial": "East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:HexHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "HexHexGrid Int [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
        "fct-type": "function",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "HexHexGrid",
        "normalized": "HexHexGrid Int[(Int,Int)]",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": "HexHexGrid Int[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Northeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Northeast",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "Northeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "Northeast",
        "normalized": "",
        "package": "grid",
        "partial": "Northeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Northwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Northwest",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "Northwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "Northwest",
        "normalized": "",
        "package": "grid",
        "partial": "Northwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:ParaHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "ParaHexGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
        "fct-type": "function",
        "title": "ParaHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "ParaHexGrid",
        "normalized": "ParaHexGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Para Hex Grid",
        "signature": "ParaHexGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Southeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Southeast",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "Southeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "Southeast",
        "normalized": "",
        "package": "grid",
        "partial": "Southeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Southwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Southwest",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "Southwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "Southwest",
        "normalized": "",
        "package": "grid",
        "partial": "Southwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:UnboundedHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "UnboundedHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
        "fct-type": "function",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:West",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "West",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
        "fct-type": "function",
        "title": "West"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "West",
        "normalized": "",
        "package": "grid",
        "partial": "West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:hexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e HexHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#hexHexGrid",
        "fct-type": "function",
        "title": "hexHexGrid"
      },
      "index": {
        "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "hexHexGrid",
        "normalized": "Int-\u003eHexHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eHexHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:paraHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles. If \n   \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles.\n   Otherwise, the resulting grid will be null and the list of indices will \n   be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e ParaHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal.html#paraHexGrid",
        "fct-type": "function",
        "title": "paraHexGrid"
      },
      "index": {
        "description": "paraHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid HexagonalInternal",
        "module": "Math.Geometry.Grid.HexagonalInternal",
        "name": "paraHexGrid",
        "normalized": "Int-\u003eInt-\u003eParaHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eInt-\u003eParaHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eHexGrid2\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eHexGrid2\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html",
        "fct-type": "module",
        "title": "HexagonalInternal2"
      },
      "index": {
        "description": "module containing private HexGrid2 internals Most developers should use HexGrid2 instead This module is subject to change without notice",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "HexagonalInternal2",
        "normalized": "",
        "package": "grid",
        "partial": "Hexagonal Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:HexDirection",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "data",
        "title": "HexDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "HexDirection",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:HexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
        "fct-type": "data",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "HexHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:RectHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
        "fct-type": "data",
        "title": "RectHexGrid"
      },
      "index": {
        "description": "rectangular grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "RectHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:UnboundedHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
        "fct-type": "data",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:HexHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "HexHexGrid Int [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
        "fct-type": "function",
        "title": "HexHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "HexHexGrid",
        "normalized": "HexHexGrid Int[(Int,Int)]",
        "package": "grid",
        "partial": "Hex Hex Grid",
        "signature": "HexHexGrid Int[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:North",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "North",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "North"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "North",
        "normalized": "",
        "package": "grid",
        "partial": "North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Northeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Northeast",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "Northeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "Northeast",
        "normalized": "",
        "package": "grid",
        "partial": "Northeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Northwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Northwest",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "Northwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "Northwest",
        "normalized": "",
        "package": "grid",
        "partial": "Northwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:RectHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "RectHexGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
        "fct-type": "function",
        "title": "RectHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "RectHexGrid",
        "normalized": "RectHexGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Rect Hex Grid",
        "signature": "RectHexGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:South",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "South",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "South"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "South",
        "normalized": "",
        "package": "grid",
        "partial": "South",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Southeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Southeast",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "Southeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "Southeast",
        "normalized": "",
        "package": "grid",
        "partial": "Southeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Southwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Southwest",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
        "fct-type": "function",
        "title": "Southwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "Southwest",
        "normalized": "",
        "package": "grid",
        "partial": "Southwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:UnboundedHexGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "UnboundedHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
        "fct-type": "function",
        "title": "UnboundedHexGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "UnboundedHexGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Hex Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:hexHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e HexHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#hexHexGrid",
        "fct-type": "function",
        "title": "hexHexGrid"
      },
      "index": {
        "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "hexHexGrid",
        "normalized": "Int-\u003eHexHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eHexHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:rectHexGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles.\n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have\n   \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the\n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectHexGrid",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#rectHexGrid",
        "fct-type": "function",
        "title": "rectHexGrid"
      },
      "index": {
        "description": "rectHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "rectHexGrid",
        "normalized": "Int-\u003eInt-\u003eRectHexGrid",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eInt-\u003eRectHexGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:rectHexGridY",
      "description": {
        "fct-module": "Math.Geometry.Grid.HexagonalInternal2",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Math-Geometry-Grid-HexagonalInternal2.html#rectHexGridY",
        "fct-type": "function",
        "title": "rectHexGridY"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid HexagonalInternal2",
        "module": "Math.Geometry.Grid.HexagonalInternal2",
        "name": "rectHexGridY",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "grid",
        "partial": "Hex Grid",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of octagonal tiles.\n Octagons won't tile a regular plane (there will be diamond-shaped\n gaps between the tiles), but they will tile a \u003cem\u003ehyperbolic\u003c/em\u003e plane.\n (Alternatively, you can think of these as squares on a board game\n where diagonal moves are allowed.)\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-Octagonal.html",
        "fct-type": "module",
        "title": "Octagonal"
      },
      "index": {
        "description": "regular arrangement of octagonal tiles Octagons won tile regular plane there will be diamond-shaped gaps between the tiles but they will tile hyperbolic plane Alternatively you can think of these as squares on board game where diagonal moves are allowed The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "Octagonal",
        "normalized": "",
        "package": "grid",
        "partial": "Octagonal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:RectOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
        "fct-type": "data",
        "title": "RectOctGrid"
      },
      "index": {
        "description": "rectangular grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "RectOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:TorOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
        "fct-type": "data",
        "title": "TorOctGrid"
      },
      "index": {
        "description": "toroidal grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "TorOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:UnboundedOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
        "fct-type": "data",
        "title": "UnboundedOctGrid"
      },
      "index": {
        "description": "An unbounded grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "UnboundedOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:rectOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectOctGrid",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#rectOctGrid",
        "fct-type": "function",
        "title": "rectOctGrid"
      },
      "index": {
        "description": "rectOctGrid produces rectangular grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "rectOctGrid",
        "normalized": "Int-\u003eInt-\u003eRectOctGrid",
        "package": "grid",
        "partial": "Oct Grid",
        "signature": "Int-\u003eInt-\u003eRectOctGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:torOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Octagonal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorOctGrid",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#torOctGrid",
        "fct-type": "function",
        "title": "torOctGrid"
      },
      "index": {
        "description": "torOctGrid returns toroidal grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Octagonal",
        "module": "Math.Geometry.Grid.Octagonal",
        "name": "torOctGrid",
        "normalized": "Int-\u003eInt-\u003eTorOctGrid",
        "package": "grid",
        "partial": "Oct Grid",
        "signature": "Int-\u003eInt-\u003eTorOctGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eOctGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eOctGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html",
        "fct-type": "module",
        "title": "OctagonalInternal"
      },
      "index": {
        "description": "module containing private OctGrid internals Most developers should use OctGrid instead This module is subject to change without notice",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "OctagonalInternal",
        "normalized": "",
        "package": "grid",
        "partial": "Octagonal Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:OctDirection",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "data",
        "title": "OctDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "OctDirection",
        "normalized": "",
        "package": "grid",
        "partial": "Oct Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:RectOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
        "fct-type": "data",
        "title": "RectOctGrid"
      },
      "index": {
        "description": "rectangular grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "RectOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:TorOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
        "fct-type": "data",
        "title": "TorOctGrid"
      },
      "index": {
        "description": "toroidal grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "TorOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:UnboundedOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
        "fct-type": "data",
        "title": "UnboundedOctGrid"
      },
      "index": {
        "description": "An unbounded grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "UnboundedOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:East",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "East",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "East"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "East",
        "normalized": "",
        "package": "grid",
        "partial": "East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:North",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "North",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "North"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "North",
        "normalized": "",
        "package": "grid",
        "partial": "North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Northeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Northeast",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "Northeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "Northeast",
        "normalized": "",
        "package": "grid",
        "partial": "Northeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Northwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Northwest",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "Northwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "Northwest",
        "normalized": "",
        "package": "grid",
        "partial": "Northwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:RectOctGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "RectOctGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
        "fct-type": "function",
        "title": "RectOctGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "RectOctGrid",
        "normalized": "RectOctGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Rect Oct Grid",
        "signature": "RectOctGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:South",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "South",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "South"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "South",
        "normalized": "",
        "package": "grid",
        "partial": "South",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Southeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Southeast",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "Southeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "Southeast",
        "normalized": "",
        "package": "grid",
        "partial": "Southeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Southwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Southwest",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "Southwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "Southwest",
        "normalized": "",
        "package": "grid",
        "partial": "Southwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:TorOctGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "TorOctGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
        "fct-type": "function",
        "title": "TorOctGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "TorOctGrid",
        "normalized": "TorOctGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Tor Oct Grid",
        "signature": "TorOctGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:UnboundedOctGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "UnboundedOctGrid",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
        "fct-type": "function",
        "title": "UnboundedOctGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "UnboundedOctGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Oct Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:West",
      "description": {
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "West",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
        "fct-type": "function",
        "title": "West"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "West",
        "normalized": "",
        "package": "grid",
        "partial": "West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:rectOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectOctGrid",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#rectOctGrid",
        "fct-type": "function",
        "title": "rectOctGrid"
      },
      "index": {
        "description": "rectOctGrid produces rectangular grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "rectOctGrid",
        "normalized": "Int-\u003eInt-\u003eRectOctGrid",
        "package": "grid",
        "partial": "Oct Grid",
        "signature": "Int-\u003eInt-\u003eRectOctGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:torOctGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.OctagonalInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorOctGrid",
        "fct-source": "src/Math-Geometry-Grid-OctagonalInternal.html#torOctGrid",
        "fct-type": "function",
        "title": "torOctGrid"
      },
      "index": {
        "description": "torOctGrid returns toroidal grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid OctagonalInternal",
        "module": "Math.Geometry.Grid.OctagonalInternal",
        "name": "torOctGrid",
        "normalized": "Int-\u003eInt-\u003eTorOctGrid",
        "package": "grid",
        "partial": "Oct Grid",
        "signature": "Int-\u003eInt-\u003eTorOctGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of square tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-Square.html",
        "fct-type": "module",
        "title": "Square"
      },
      "index": {
        "description": "regular arrangement of square tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "Square",
        "normalized": "",
        "package": "grid",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:RectSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
        "fct-type": "data",
        "title": "RectSquareGrid"
      },
      "index": {
        "description": "rectangular grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "RectSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:TorSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
        "fct-type": "data",
        "title": "TorSquareGrid"
      },
      "index": {
        "description": "toroidal grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "TorSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:UnboundedSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
        "fct-type": "data",
        "title": "UnboundedSquareGrid"
      },
      "index": {
        "description": "An unbounded grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "UnboundedSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:rectSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectSquareGrid",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#rectSquareGrid",
        "fct-type": "function",
        "title": "rectSquareGrid"
      },
      "index": {
        "description": "rectSquareGrid produces rectangular grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "rectSquareGrid",
        "normalized": "Int-\u003eInt-\u003eRectSquareGrid",
        "package": "grid",
        "partial": "Square Grid",
        "signature": "Int-\u003eInt-\u003eRectSquareGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:torSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Square",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorSquareGrid",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#torSquareGrid",
        "fct-type": "function",
        "title": "torSquareGrid"
      },
      "index": {
        "description": "torSquareGrid returns toroidal grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Square",
        "module": "Math.Geometry.Grid.Square",
        "name": "torSquareGrid",
        "normalized": "Int-\u003eInt-\u003eTorSquareGrid",
        "package": "grid",
        "partial": "Square Grid",
        "signature": "Int-\u003eInt-\u003eTorSquareGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eSquareGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eSquareGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html",
        "fct-type": "module",
        "title": "SquareInternal"
      },
      "index": {
        "description": "module containing private SquareGrid internals Most developers should use SquareGrid instead This module is subject to change without notice",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "SquareInternal",
        "normalized": "",
        "package": "grid",
        "partial": "Square Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:RectSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
        "fct-type": "data",
        "title": "RectSquareGrid"
      },
      "index": {
        "description": "rectangular grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "RectSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:SquareDirection",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
        "fct-type": "data",
        "title": "SquareDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "SquareDirection",
        "normalized": "",
        "package": "grid",
        "partial": "Square Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:TorSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
        "fct-type": "data",
        "title": "TorSquareGrid"
      },
      "index": {
        "description": "toroidal grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "TorSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:UnboundedSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
        "fct-type": "data",
        "title": "UnboundedSquareGrid"
      },
      "index": {
        "description": "An unbounded grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "UnboundedSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:East",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "East",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
        "fct-type": "function",
        "title": "East"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "East",
        "normalized": "",
        "package": "grid",
        "partial": "East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:North",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "North",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
        "fct-type": "function",
        "title": "North"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "North",
        "normalized": "",
        "package": "grid",
        "partial": "North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:RectSquareGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "RectSquareGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
        "fct-type": "function",
        "title": "RectSquareGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "RectSquareGrid",
        "normalized": "RectSquareGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Rect Square Grid",
        "signature": "RectSquareGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:South",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "South",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
        "fct-type": "function",
        "title": "South"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "South",
        "normalized": "",
        "package": "grid",
        "partial": "South",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:TorSquareGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "TorSquareGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
        "fct-type": "function",
        "title": "TorSquareGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "TorSquareGrid",
        "normalized": "TorSquareGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Tor Square Grid",
        "signature": "TorSquareGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:UnboundedSquareGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "UnboundedSquareGrid",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
        "fct-type": "function",
        "title": "UnboundedSquareGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "UnboundedSquareGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Square Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:West",
      "description": {
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "West",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
        "fct-type": "function",
        "title": "West"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "West",
        "normalized": "",
        "package": "grid",
        "partial": "West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:rectSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectSquareGrid",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#rectSquareGrid",
        "fct-type": "function",
        "title": "rectSquareGrid"
      },
      "index": {
        "description": "rectSquareGrid produces rectangular grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "rectSquareGrid",
        "normalized": "Int-\u003eInt-\u003eRectSquareGrid",
        "package": "grid",
        "partial": "Square Grid",
        "signature": "Int-\u003eInt-\u003eRectSquareGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:torSquareGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.SquareInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorSquareGrid",
        "fct-source": "src/Math-Geometry-Grid-SquareInternal.html#torSquareGrid",
        "fct-type": "function",
        "title": "torSquareGrid"
      },
      "index": {
        "description": "torSquareGrid returns toroidal grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid SquareInternal",
        "module": "Math.Geometry.Grid.SquareInternal",
        "name": "torSquareGrid",
        "normalized": "Int-\u003eInt-\u003eTorSquareGrid",
        "package": "grid",
        "partial": "Square Grid",
        "signature": "Int-\u003eInt-\u003eTorSquareGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of triangular tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-Triangular.html",
        "fct-type": "module",
        "title": "Triangular"
      },
      "index": {
        "description": "regular arrangement of triangular tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "Triangular",
        "normalized": "",
        "package": "grid",
        "partial": "Triangular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:ParaTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA Parallelogrammatical grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
        "fct-type": "data",
        "title": "ParaTriGrid"
      },
      "index": {
        "description": "Parallelogrammatical grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "ParaTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Para Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:RectTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
        "fct-type": "data",
        "title": "RectTriGrid"
      },
      "index": {
        "description": "rectangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "RectTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:TorTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
        "fct-type": "data",
        "title": "TorTriGrid"
      },
      "index": {
        "description": "toroidal grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "TorTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:TriTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA triangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
        "fct-type": "data",
        "title": "TriTriGrid"
      },
      "index": {
        "description": "triangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "TriTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tri Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:UnboundedTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
        "fct-type": "data",
        "title": "UnboundedTriGrid"
      },
      "index": {
        "description": "An unbounded grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "UnboundedTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:XCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the x-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
        "fct-type": "data",
        "title": "XCylTriGrid"
      },
      "index": {
        "description": "cylindrical grid with triangular tiles where the cylinder is along the x-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "XCylTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "XCyl Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:YCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the y-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
        "fct-type": "data",
        "title": "YCylTriGrid"
      },
      "index": {
        "description": "cylindrical grid with triangular tiles where the cylinder is along the y-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "YCylTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "YCyl Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:paraTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using triangular \n   tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will\n   have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e ParaTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#paraTriGrid",
        "fct-type": "function",
        "title": "paraTriGrid"
      },
      "index": {
        "description": "paraTriGrid returns grid in the shape of parallelogram with rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "paraTriGrid",
        "normalized": "Int-\u003eInt-\u003eParaTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eParaTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:rectTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   rectangle (with jagged edges) that has \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, \n   using triangular tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#rectTriGrid",
        "fct-type": "function",
        "title": "rectTriGrid"
      },
      "index": {
        "description": "rectTriGrid returns grid in the shape of rectangle with jagged edges that has rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "rectTriGrid",
        "normalized": "Int-\u003eInt-\u003eRectTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eRectTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:torTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e\n   columns, using triangular tiles. The indexing method is the same as\n   for \u003ccode\u003eParaTriGrid\u003c/code\u003e. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting\n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#torTriGrid",
        "fct-type": "function",
        "title": "torTriGrid"
      },
      "index": {
        "description": "torTriGrid returns toroidal grid with rows and columns using triangular tiles The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "torTriGrid",
        "normalized": "Int-\u003eInt-\u003eTorTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eTorTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:triTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etriTriGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a triangular grid with sides of \n   length \u003ccode\u003es\u003c/code\u003e, using triangular tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003es^2\u003c/code\u003e tiles. Otherwise, the resulting grid\n   will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e TriTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#triTriGrid",
        "fct-type": "function",
        "title": "triTriGrid"
      },
      "index": {
        "description": "triTriGrid returns triangular grid with sides of length using triangular tiles If is nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "triTriGrid",
        "normalized": "Int-\u003eTriTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eTriTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:xCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003exCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e XCylTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#xCylTriGrid",
        "fct-type": "function",
        "title": "xCylTriGrid"
      },
      "index": {
        "description": "xCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "xCylTriGrid",
        "normalized": "Int-\u003eInt-\u003eXCylTriGrid",
        "package": "grid",
        "partial": "Cyl Tri Grid",
        "signature": "Int-\u003eInt-\u003eXCylTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:yCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eyCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.Triangular",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e YCylTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#yCylTriGrid",
        "fct-type": "function",
        "title": "yCylTriGrid"
      },
      "index": {
        "description": "yCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid Triangular",
        "module": "Math.Geometry.Grid.Triangular",
        "name": "yCylTriGrid",
        "normalized": "Int-\u003eInt-\u003eYCylTriGrid",
        "package": "grid",
        "partial": "Cyl Tri Grid",
        "signature": "Int-\u003eInt-\u003eYCylTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eTriGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eTriGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html",
        "fct-type": "module",
        "title": "TriangularInternal"
      },
      "index": {
        "description": "module containing private TriGrid internals Most developers should use TriGrid instead This module is subject to change without notice",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TriangularInternal",
        "normalized": "",
        "package": "grid",
        "partial": "Triangular Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:ParaTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA Parallelogrammatical grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
        "fct-type": "data",
        "title": "ParaTriGrid"
      },
      "index": {
        "description": "Parallelogrammatical grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "ParaTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Para Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:RectTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
        "fct-type": "data",
        "title": "RectTriGrid"
      },
      "index": {
        "description": "rectangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "RectTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Rect Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TorTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA toroidal grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
        "fct-type": "data",
        "title": "TorTriGrid"
      },
      "index": {
        "description": "toroidal grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TorTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tor Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TriDirection",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "data",
        "title": "TriDirection"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TriDirection",
        "normalized": "",
        "package": "grid",
        "partial": "Tri Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TriTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA triangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
        "fct-type": "data",
        "title": "TriTriGrid"
      },
      "index": {
        "description": "triangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TriTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Tri Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:UnboundedTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eAn unbounded grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
        "fct-type": "data",
        "title": "UnboundedTriGrid"
      },
      "index": {
        "description": "An unbounded grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "UnboundedTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:XCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the x-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
        "fct-type": "data",
        "title": "XCylTriGrid"
      },
      "index": {
        "description": "cylindrical grid with triangular tiles where the cylinder is along the x-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "XCylTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "XCyl Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:YCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the y-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
        "fct-type": "data",
        "title": "YCylTriGrid"
      },
      "index": {
        "description": "cylindrical grid with triangular tiles where the cylinder is along the y-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "YCylTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "YCyl Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:North",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "North",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "North"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "North",
        "normalized": "",
        "package": "grid",
        "partial": "North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Northeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Northeast",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "Northeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "Northeast",
        "normalized": "",
        "package": "grid",
        "partial": "Northeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Northwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Northwest",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "Northwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "Northwest",
        "normalized": "",
        "package": "grid",
        "partial": "Northwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:ParaTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "ParaTriGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
        "fct-type": "function",
        "title": "ParaTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "ParaTriGrid",
        "normalized": "ParaTriGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Para Tri Grid",
        "signature": "ParaTriGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:RectTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "RectTriGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
        "fct-type": "function",
        "title": "RectTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "RectTriGrid",
        "normalized": "RectTriGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Rect Tri Grid",
        "signature": "RectTriGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:South",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "South",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "South"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "South",
        "normalized": "",
        "package": "grid",
        "partial": "South",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Southeast",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Southeast",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "Southeast"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "Southeast",
        "normalized": "",
        "package": "grid",
        "partial": "Southeast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Southwest",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Southwest",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
        "fct-type": "function",
        "title": "Southwest"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "Southwest",
        "normalized": "",
        "package": "grid",
        "partial": "Southwest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:TorTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "TorTriGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
        "fct-type": "function",
        "title": "TorTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TorTriGrid",
        "normalized": "TorTriGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "Tor Tri Grid",
        "signature": "TorTriGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:TriTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "TriTriGrid Int [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
        "fct-type": "function",
        "title": "TriTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "TriTriGrid",
        "normalized": "TriTriGrid Int[(Int,Int)]",
        "package": "grid",
        "partial": "Tri Tri Grid",
        "signature": "TriTriGrid Int[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:UnboundedTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "UnboundedTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
        "fct-type": "function",
        "title": "UnboundedTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "UnboundedTriGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Unbounded Tri Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:XCylTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "XCylTriGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
        "fct-type": "function",
        "title": "XCylTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "XCylTriGrid",
        "normalized": "XCylTriGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "XCyl Tri Grid",
        "signature": "XCylTriGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:YCylTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "YCylTriGrid (Int, Int) [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
        "fct-type": "function",
        "title": "YCylTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "YCylTriGrid",
        "normalized": "YCylTriGrid(Int,Int)[(Int,Int)]",
        "package": "grid",
        "partial": "YCyl Tri Grid",
        "signature": "YCylTriGrid(Int,Int)[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:inTriTriGrid",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "(Int, Int) -\u003e Int -\u003e Bool",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#inTriTriGrid",
        "fct-type": "function",
        "title": "inTriTriGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "inTriTriGrid",
        "normalized": "(Int,Int)-\u003eInt-\u003eBool",
        "package": "grid",
        "partial": "Tri Tri Grid",
        "signature": "(Int,Int)-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:paraTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using triangular \n   tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will\n   have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e ParaTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#paraTriGrid",
        "fct-type": "function",
        "title": "paraTriGrid"
      },
      "index": {
        "description": "paraTriGrid returns grid in the shape of parallelogram with rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "paraTriGrid",
        "normalized": "Int-\u003eInt-\u003eParaTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eParaTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:parallelogramIndices",
      "description": {
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e [(Int, Int)]",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#parallelogramIndices",
        "fct-type": "function",
        "title": "parallelogramIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "parallelogramIndices",
        "normalized": "Int-\u003eInt-\u003e[(Int,Int)]",
        "package": "grid",
        "partial": "Indices",
        "signature": "Int-\u003eInt-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:rectTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   rectangle (with jagged edges) that has \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, \n   using triangular tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e RectTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#rectTriGrid",
        "fct-type": "function",
        "title": "rectTriGrid"
      },
      "index": {
        "description": "rectTriGrid returns grid in the shape of rectangle with jagged edges that has rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "rectTriGrid",
        "normalized": "Int-\u003eInt-\u003eRectTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eRectTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:torTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e\n   columns, using triangular tiles. The indexing method is the same as\n   for \u003ccode\u003eParaTriGrid\u003c/code\u003e. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting\n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e TorTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#torTriGrid",
        "fct-type": "function",
        "title": "torTriGrid"
      },
      "index": {
        "description": "torTriGrid returns toroidal grid with rows and columns using triangular tiles The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "torTriGrid",
        "normalized": "Int-\u003eInt-\u003eTorTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eInt-\u003eTorTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:triTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etriTriGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a triangular grid with sides of \n   length \u003ccode\u003es\u003c/code\u003e, using triangular tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003es^2\u003c/code\u003e tiles. Otherwise, the resulting grid\n   will be null and the list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e TriTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#triTriGrid",
        "fct-type": "function",
        "title": "triTriGrid"
      },
      "index": {
        "description": "triTriGrid returns triangular grid with sides of length using triangular tiles If is nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "triTriGrid",
        "normalized": "Int-\u003eTriTriGrid",
        "package": "grid",
        "partial": "Tri Grid",
        "signature": "Int-\u003eTriTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:triZ",
      "description": {
        "fct-descr": "\u003cp\u003eFor triangular tiles, it is convenient to define a third component \n   z.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e Int",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#triZ",
        "fct-type": "function",
        "title": "triZ"
      },
      "index": {
        "description": "For triangular tiles it is convenient to define third component",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "triZ",
        "normalized": "Int-\u003eInt-\u003eInt",
        "package": "grid",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:xCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003exCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e XCylTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#xCylTriGrid",
        "fct-type": "function",
        "title": "xCylTriGrid"
      },
      "index": {
        "description": "xCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "xCylTriGrid",
        "normalized": "Int-\u003eInt-\u003eXCylTriGrid",
        "package": "grid",
        "partial": "Cyl Tri Grid",
        "signature": "Int-\u003eInt-\u003eXCylTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:yCylTriGrid",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eyCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid.TriangularInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e Int -\u003e YCylTriGrid",
        "fct-source": "src/Math-Geometry-Grid-TriangularInternal.html#yCylTriGrid",
        "fct-type": "function",
        "title": "yCylTriGrid"
      },
      "index": {
        "description": "yCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
        "hierarchy": "Math Geometry Grid TriangularInternal",
        "module": "Math.Geometry.Grid.TriangularInternal",
        "name": "yCylTriGrid",
        "normalized": "Int-\u003eInt-\u003eYCylTriGrid",
        "package": "grid",
        "partial": "Cyl Tri Grid",
        "signature": "Int-\u003eInt-\u003eYCylTriGrid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of tiles. Grids have a variety of uses,\n including games and self-organising maps.\n The userguide is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn this package, tiles are called \"triangular\", \"square\", etc.,\n based on the number of \u003cem\u003eneighbours\u003c/em\u003e they have.\n For example, a square tile has four neighbours, and a hexagonal\n tile has six.\n There are only three regular polygons that can tile a plane:\n triangles, squares, and hexagons.\n Of course, other plane tilings are possible if you use irregular \n polygons, or curved shapes, or if you combine tiles of different \n shapes.\n\u003c/p\u003e\u003cp\u003eWhen you tile other surfaces, things get very interesting.\n Octagons will tile a \u003cem\u003ehyperbolic\u003c/em\u003e plane.\n (Alternatively, you can think of these as squares on a board game\n where diagonal moves are allowed.)\n\u003c/p\u003e\u003cp\u003eFor a board game, you probably want to choose the grid type based\n on the number of \u003cem\u003edirections\u003c/em\u003e a player can move, rather than the\n number of sides the tile will have when you display it.\n For example, for a game that uses square tiles and allows the user\n to move diagonally as well as horizontally and vertically,\n consider using one of the grids with \u003cem\u003eoctagonal\u003c/em\u003e tiles to model the\n board.\n You can still \u003cem\u003edisplay\u003c/em\u003e the tiles as squares, but for internal\n calculations they are octagons.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 6.0 moved the various grid flavours to sub-modules.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 4.0 uses associated (type) synonyms instead of \n multi-parameter type classes.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 3.0 changed the order of parameters for many functions.\n This makes it easier for the user to write mapping and folding\n operations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-Grid.html",
        "fct-type": "module",
        "title": "Grid"
      },
      "index": {
        "description": "regular arrangement of tiles Grids have variety of uses including games and self-organising maps The userguide is available at https github.com mhwombat grid wiki In this package tiles are called triangular square etc based on the number of neighbours they have For example square tile has four neighbours and hexagonal tile has six There are only three regular polygons that can tile plane triangles squares and hexagons Of course other plane tilings are possible if you use irregular polygons or curved shapes or if you combine tiles of different shapes When you tile other surfaces things get very interesting Octagons will tile hyperbolic plane Alternatively you can think of these as squares on board game where diagonal moves are allowed For board game you probably want to choose the grid type based on the number of directions player can move rather than the number of sides the tile will have when you display it For example for game that uses square tiles and allows the user to move diagonally as well as horizontally and vertically consider using one of the grids with octagonal tiles to model the board You can still display the tiles as squares but for internal calculations they are octagons NOTE Version moved the various grid flavours to sub-modules NOTE Version uses associated type synonyms instead of multi-parameter type classes NOTE Version changed the order of parameters for many functions This makes it easier for the user to write mapping and folding operations",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "Grid",
        "normalized": "",
        "package": "grid",
        "partial": "Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:BoundedGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles with an edge.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileSideCount\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#BoundedGrid",
        "fct-type": "class",
        "title": "BoundedGrid"
      },
      "index": {
        "description": "regular arrangement of tiles with an edge Minimal complete definition tileSideCount",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "BoundedGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Bounded Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:FiniteGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles where the number of tiles is finite.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emaxPossibleDistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#FiniteGrid",
        "fct-type": "class",
        "title": "FiniteGrid"
      },
      "index": {
        "description": "regular arrangement of tiles where the number of tiles is finite Minimal complete definition size maxPossibleDistance",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "FiniteGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Finite Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:Grid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDirection\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#Grid",
        "fct-type": "class",
        "title": "Grid"
      },
      "index": {
        "description": "regular arrangement of tiles Minimal complete definition Index Direction indices distance directionTo",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "Grid",
        "normalized": "",
        "package": "grid",
        "partial": "Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:adjacentTilesToward",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the indices of all tiles\n   which are neighbours of the tile at index \u003ccode\u003ea\u003c/code\u003e, and which are\n   closer to the tile at \u003ccode\u003eb\u003c/code\u003e than \u003ccode\u003ea\u003c/code\u003e is. In other words, it returns\n   the possible next steps on a minimal path from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e\n   or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, or if there is no path from\n   \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e (e.g., a disconnected grid), the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#adjacentTilesToward",
        "fct-type": "method",
        "title": "adjacentTilesToward"
      },
      "index": {
        "description": "adjacentTilesToward returns the indices of all tiles which are neighbours of the tile at index and which are closer to the tile at than is In other words it returns the possible next steps on minimal path from to If or are not contained within or if there is no path from to e.g disconnected grid the result is undefined",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "adjacentTilesToward",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "Tiles Toward",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:boundary",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a the indices of all the tiles at the boundary of a grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#boundary",
        "fct-type": "method",
        "title": "boundary"
      },
      "index": {
        "description": "Returns the indices of all the tiles at the boundary of grid",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "boundary",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:centre",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the index of the tile(s) that require the maximum number\n   of moves to reach the nearest boundary tile. A grid may have more\n   than one central tile (e.g., a rectangular grid with an even\n   number of rows and columns will have four central tiles).\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#centre",
        "fct-type": "method",
        "title": "centre"
      },
      "index": {
        "description": "Returns the index of the tile that require the maximum number of moves to reach the nearest boundary tile grid may have more than one central tile e.g rectangular grid with an even number of rows and columns will have four central tiles",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "centre",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eg `'contains'` a\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the index \u003ccode\u003ea\u003c/code\u003e is contained\n   within the grid \u003ccode\u003eg\u003c/code\u003e, otherwise it returns false.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#contains",
        "fct-type": "method",
        "title": "contains"
      },
      "index": {
        "description": "contains returns True if the index is contained within the grid otherwise it returns false",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "contains",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultBoundary",
      "description": {
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultBoundary",
        "fct-type": "method",
        "title": "defaultBoundary"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "defaultBoundary",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "Boundary",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultCentre",
      "description": {
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultCentre",
        "fct-type": "method",
        "title": "defaultCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "defaultCentre",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "Centre",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultIsBoundary",
      "description": {
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultIsBoundary",
        "fct-type": "method",
        "title": "defaultIsBoundary"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "defaultIsBoundary",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Is Boundary",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultIsCentre",
      "description": {
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultIsCentre",
        "fct-type": "method",
        "title": "defaultIsCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "defaultIsCentre",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Is Centre",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:directionTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the direction(s) of the next\n   tile(s) in a \u003cem\u003eminimal\u003c/em\u003e path from the tile at index \u003ccode\u003ea\u003c/code\u003e to the\n   tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#directionTo",
        "fct-type": "method",
        "title": "directionTo"
      },
      "index": {
        "description": "directionTo returns the direction of the next tile in minimal path from the tile at index to the tile at index in grid",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "directionTo",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Direction a]",
        "package": "grid",
        "partial": "To",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Direction g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the minimum number of moves required\n   to get from the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in\n   grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each step. (Two tiles\n   are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not\n   contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#distance",
        "fct-type": "method",
        "title": "distance"
      },
      "index": {
        "description": "distance returns the minimum number of moves required to get from the tile at index to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "distance",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:edges",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all edges in a grid, where the edges are represented by\n   a pair of indices of adjacent tiles.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [(Index g, Index g)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#edges",
        "fct-type": "method",
        "title": "edges"
      },
      "index": {
        "description": "list of all edges in grid where the edges are represented by pair of indices of adjacent tiles",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "edges",
        "normalized": "a-\u003e[(Index a,Index a)]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[(Index g,Index g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the indices of all tiles in a grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#indices",
        "fct-type": "method",
        "title": "indices"
      },
      "index": {
        "description": "Returns the indices of all tiles in grid",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "indices",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isAdjacent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisAdjacent\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the tile at index \u003ccode\u003ea\u003c/code\u003e is\n   adjacent to the tile at index \u003ccode\u003eb\u003c/code\u003e in \u003ccode\u003eg\u003c/code\u003e. (Two tiles are adjacent\n   if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within\n   \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isAdjacent",
        "fct-type": "method",
        "title": "isAdjacent"
      },
      "index": {
        "description": "isAdjacent returns True if the tile at index is adjacent to the tile at index in Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "isAdjacent",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Adjacent",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isBoundary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBoundary\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   on a boundary of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise. (Corner tiles are also\n   boundary tiles.)\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isBoundary",
        "fct-type": "method",
        "title": "isBoundary"
      },
      "index": {
        "description": "isBoundary returns True if the tile with index is on boundary of False otherwise Corner tiles are also boundary tiles",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "isBoundary",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Boundary",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isCentre",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisCentre\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   a centre tile of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isCentre",
        "fct-type": "method",
        "title": "isCentre"
      },
      "index": {
        "description": "isCentre returns True if the tile with index is centre tile of False otherwise",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "isCentre",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Centre",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:maxPossibleDistance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the largest possible distance between two tiles in the\n   grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#maxPossibleDistance",
        "fct-type": "method",
        "title": "maxPossibleDistance"
      },
      "index": {
        "description": "Returns the largest possible distance between two tiles in the grid",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "maxPossibleDistance",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Possible Distance",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:minDistance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminDistance\u003c/a\u003e\u003c/code\u003e g bs a\u003c/code\u003e returns the minimum number of moves\n   required to get from any of the tiles at indices \u003ccode\u003ebs\u003c/code\u003e to the tile\n   at index \u003ccode\u003ea\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each\n   step. (Two tiles are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or\n   any of \u003ccode\u003ebs\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the result is\n   undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#minDistance",
        "fct-type": "method",
        "title": "minDistance"
      },
      "index": {
        "description": "minDistance bs returns the minimum number of moves required to get from any of the tiles at indices bs to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or any of bs are not contained within the result is undefined",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "minDistance",
        "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "Distance",
        "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:minimalPaths",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns a list of all minimal paths from\n   the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e. A\n   path is a sequence of tiles where each tile in the sequence is\n   adjacent to the previous one. (Two tiles are adjacent if they\n   share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the\n   result is undefined.\n\u003c/p\u003e\u003cp\u003eTip: The default implementation of this function calls\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. If you want to use a custom algorithm,\n   consider modifying \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead of\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
        "fct-source": "src/Math-Geometry-GridInternal.html#minimalPaths",
        "fct-type": "method",
        "title": "minimalPaths"
      },
      "index": {
        "description": "minimalPaths returns list of all minimal paths from the tile at index to the tile at index in grid path is sequence of tiles where each tile in the sequence is adjacent to the previous one Two tiles are adjacent if they share an edge If or are not contained within the result is undefined Tip The default implementation of this function calls adjacentTilesToward If you want to use custom algorithm consider modifying adjacentTilesToward instead of minimalPaths",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "minimalPaths",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
        "package": "grid",
        "partial": "Paths",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:neighbour",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbour\u003c/a\u003e\u003c/code\u003e g d a\u003c/code\u003e returns the indices of the tile in the grid\n   \u003ccode\u003eg\u003c/code\u003e which is adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e, in the\n   direction \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighbour",
        "fct-type": "method",
        "title": "neighbour"
      },
      "index": {
        "description": "neighbour returns the indices of the tile in the grid which is adjacent to the tile with index in the direction",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "neighbour",
        "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:neighbours",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the indices of the tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighbours",
        "fct-type": "method",
        "title": "neighbours"
      },
      "index": {
        "description": "neighbours returns the indices of the tiles in the grid which are adjacent to the tile with index",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "neighbours",
        "normalized": "a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:nonNull",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eFalse\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eTrue\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#nonNull",
        "fct-type": "method",
        "title": "nonNull"
      },
      "index": {
        "description": "Returns False if the number of tiles in grid is zero True otherwise",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "nonNull",
        "normalized": "a-\u003eBool",
        "package": "grid",
        "partial": "Null",
        "signature": "g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eFalse\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Returns True if the number of tiles in grid is zero False otherwise",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the dimensions of the grid.\n   For example, if \u003ccode\u003eg\u003c/code\u003e is a 4x3 rectangular grid, \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would\n   return \u003ccode\u003e(4, 3)\u003c/code\u003e, while \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileCount\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would return \u003ccode\u003e12\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Size g",
        "fct-source": "src/Math-Geometry-GridInternal.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Returns the dimensions of the grid For example if is x3 rectangular grid size would return while tileCount would return",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "size",
        "normalized": "a-\u003eSize a",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eSize g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:tileCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of tiles in a grid. Compare with \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#tileCount",
        "fct-type": "method",
        "title": "tileCount"
      },
      "index": {
        "description": "Returns the number of tiles in grid Compare with size",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "tileCount",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Count",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:tileSideCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of sides a tile has\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#tileSideCount",
        "fct-type": "method",
        "title": "tileSideCount"
      },
      "index": {
        "description": "Returns the number of sides tile has",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "tileSideCount",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Side Count",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:viewpoint",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eviewpoint\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns a list of pairs associating the index\n   of each tile in \u003ccode\u003eg\u003c/code\u003e with its distance to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n   If \u003ccode\u003ea\u003c/code\u003e is not contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.Grid",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [(Index g, Int)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#viewpoint",
        "fct-type": "method",
        "title": "viewpoint"
      },
      "index": {
        "description": "viewpoint returns list of pairs associating the index of each tile in with its distance to the tile with index If is not contained within the result is undefined",
        "hierarchy": "Math Geometry Grid",
        "module": "Math.Geometry.Grid",
        "name": "viewpoint",
        "normalized": "a-\u003eIndex a-\u003e[(Index a,Int)]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003e[(Index g,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eGrid\u003c/code\u003e internals. Most developers should\n use \u003ccode\u003eGrid\u003c/code\u003e instead. This module is subject to change without notice.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-GridInternal.html",
        "fct-type": "module",
        "title": "GridInternal"
      },
      "index": {
        "description": "module containing private Grid internals Most developers should use Grid instead This module is subject to change without notice",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "GridInternal",
        "normalized": "",
        "package": "grid",
        "partial": "Grid Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:BoundedGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles with an edge.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileSideCount\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#BoundedGrid",
        "fct-type": "class",
        "title": "BoundedGrid"
      },
      "index": {
        "description": "regular arrangement of tiles with an edge Minimal complete definition tileSideCount",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "BoundedGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Bounded Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:FiniteGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles where the number of tiles is finite.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emaxPossibleDistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#FiniteGrid",
        "fct-type": "class",
        "title": "FiniteGrid"
      },
      "index": {
        "description": "regular arrangement of tiles where the number of tiles is finite Minimal complete definition size maxPossibleDistance",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "FiniteGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Finite Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:Grid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDirection\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#Grid",
        "fct-type": "class",
        "title": "Grid"
      },
      "index": {
        "description": "regular arrangement of tiles Minimal complete definition Index Direction indices distance directionTo",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "Grid",
        "normalized": "",
        "package": "grid",
        "partial": "Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:WrappedGrid",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles where the boundaries are joined.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003edenormalise\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridInternal.html#WrappedGrid",
        "fct-type": "class",
        "title": "WrappedGrid"
      },
      "index": {
        "description": "regular arrangement of tiles where the boundaries are joined Minimal complete definition normalise and denormalise",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "WrappedGrid",
        "normalized": "",
        "package": "grid",
        "partial": "Wrapped Grid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:adjacentEdges",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "Index g -\u003e g -\u003e [(Index g, Index g)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#adjacentEdges",
        "fct-type": "function",
        "title": "adjacentEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "adjacentEdges",
        "normalized": "Index a-\u003ea-\u003e[(Index a,Index a)]",
        "package": "grid",
        "partial": "Edges",
        "signature": "Index g-\u003eg-\u003e[(Index g,Index g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:adjacentTilesToward",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the indices of all tiles\n   which are neighbours of the tile at index \u003ccode\u003ea\u003c/code\u003e, and which are\n   closer to the tile at \u003ccode\u003eb\u003c/code\u003e than \u003ccode\u003ea\u003c/code\u003e is. In other words, it returns\n   the possible next steps on a minimal path from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e\n   or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, or if there is no path from\n   \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e (e.g., a disconnected grid), the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#adjacentTilesToward",
        "fct-type": "method",
        "title": "adjacentTilesToward"
      },
      "index": {
        "description": "adjacentTilesToward returns the indices of all tiles which are neighbours of the tile at index and which are closer to the tile at than is In other words it returns the possible next steps on minimal path from to If or are not contained within or if there is no path from to e.g disconnected grid the result is undefined",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "adjacentTilesToward",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "Tiles Toward",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:boundary",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a the indices of all the tiles at the boundary of a grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#boundary",
        "fct-type": "method",
        "title": "boundary"
      },
      "index": {
        "description": "Returns the indices of all the tiles at the boundary of grid",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "boundary",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianCentre",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "(Int, Int) -\u003e [(Int, Int)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#cartesianCentre",
        "fct-type": "function",
        "title": "cartesianCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "cartesianCentre",
        "normalized": "(Int,Int)-\u003e[(Int,Int)]",
        "package": "grid",
        "partial": "Centre",
        "signature": "(Int,Int)-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianIndices",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "(r, c) -\u003e [(c, r)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#cartesianIndices",
        "fct-type": "function",
        "title": "cartesianIndices"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "cartesianIndices",
        "normalized": "(a,b)-\u003e[(b,a)]",
        "package": "grid",
        "partial": "Indices",
        "signature": "(r,c)-\u003e[(c,r)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianMidpoints",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "Int -\u003e [Int]",
        "fct-source": "src/Math-Geometry-GridInternal.html#cartesianMidpoints",
        "fct-type": "function",
        "title": "cartesianMidpoints"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "cartesianMidpoints",
        "normalized": "Int-\u003e[Int]",
        "package": "grid",
        "partial": "Midpoints",
        "signature": "Int-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:centre",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the index of the tile(s) that require the maximum number\n   of moves to reach the nearest boundary tile. A grid may have more\n   than one central tile (e.g., a rectangular grid with an even\n   number of rows and columns will have four central tiles).\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#centre",
        "fct-type": "method",
        "title": "centre"
      },
      "index": {
        "description": "Returns the index of the tile that require the maximum number of moves to reach the nearest boundary tile grid may have more than one central tile e.g rectangular grid with an even number of rows and columns will have four central tiles",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "centre",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eg `'contains'` a\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the index \u003ccode\u003ea\u003c/code\u003e is contained\n   within the grid \u003ccode\u003eg\u003c/code\u003e, otherwise it returns false.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#contains",
        "fct-type": "method",
        "title": "contains"
      },
      "index": {
        "description": "contains returns True if the index is contained within the grid otherwise it returns false",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "contains",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultAdjacentTilesToward",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultAdjacentTilesToward",
        "fct-type": "method",
        "title": "defaultAdjacentTilesToward"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultAdjacentTilesToward",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "Adjacent Tiles Toward",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultBoundary",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultBoundary",
        "fct-type": "method",
        "title": "defaultBoundary"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultBoundary",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "Boundary",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultCentre",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultCentre",
        "fct-type": "method",
        "title": "defaultCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultCentre",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "Centre",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultEdges",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [(Index g, Index g)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultEdges",
        "fct-type": "method",
        "title": "defaultEdges"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultEdges",
        "normalized": "a-\u003e[(Index a,Index a)]",
        "package": "grid",
        "partial": "Edges",
        "signature": "g-\u003e[(Index g,Index g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsAdjacent",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultIsAdjacent",
        "fct-type": "method",
        "title": "defaultIsAdjacent"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultIsAdjacent",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Is Adjacent",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsBoundary",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultIsBoundary",
        "fct-type": "method",
        "title": "defaultIsBoundary"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultIsBoundary",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Is Boundary",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsCentre",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultIsCentre",
        "fct-type": "method",
        "title": "defaultIsCentre"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultIsCentre",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Is Centre",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultMinDistance",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultMinDistance",
        "fct-type": "method",
        "title": "defaultMinDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultMinDistance",
        "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "Min Distance",
        "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultMinimalPaths",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultMinimalPaths",
        "fct-type": "method",
        "title": "defaultMinimalPaths"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultMinimalPaths",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
        "package": "grid",
        "partial": "Minimal Paths",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighbour",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultNeighbour",
        "fct-type": "method",
        "title": "defaultNeighbour"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultNeighbour",
        "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
        "package": "grid",
        "partial": "Neighbour",
        "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighbours",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultNeighbours",
        "fct-type": "method",
        "title": "defaultNeighbours"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultNeighbours",
        "normalized": "a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "Neighbours",
        "signature": "g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighboursOfSet",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g] -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultNeighboursOfSet",
        "fct-type": "method",
        "title": "defaultNeighboursOfSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultNeighboursOfSet",
        "normalized": "a-\u003e[Index a]-\u003e[Index a]",
        "package": "grid",
        "partial": "Neighbours Of Set",
        "signature": "g-\u003e[Index g]-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultTileCount",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#defaultTileCount",
        "fct-type": "method",
        "title": "defaultTileCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "defaultTileCount",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Tile Count",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:denormalise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edenormalise\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns all of the indices in \u003ccode\u003ea\u003c/code\u003e's\n   translation group. In other words, it returns \u003ccode\u003ea\u003c/code\u003e plus the\n   indices obtained by translating \u003ccode\u003ea\u003c/code\u003e in each direction by the\n   extent of the grid along that direction.\n   TODO: need a clearer description and an illustration.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#denormalise",
        "fct-type": "method",
        "title": "denormalise"
      },
      "index": {
        "description": "denormalise returns all of the indices in translation group In other words it returns plus the indices obtained by translating in each direction by the extent of the grid along that direction TODO need clearer description and an illustration",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "denormalise",
        "normalized": "a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionTo",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the direction(s) of the next\n   tile(s) in a \u003cem\u003eminimal\u003c/em\u003e path from the tile at index \u003ccode\u003ea\u003c/code\u003e to the\n   tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#directionTo",
        "fct-type": "method",
        "title": "directionTo"
      },
      "index": {
        "description": "directionTo returns the direction of the next tile in minimal path from the tile at index to the tile at index in grid",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "directionTo",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Direction a]",
        "package": "grid",
        "partial": "To",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Direction g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionToBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#directionToBasedOn",
        "fct-type": "function",
        "title": "directionToBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "directionToBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003e[Direction b]",
        "package": "grid",
        "partial": "To Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003e[Direction g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionToWrappedBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#directionToWrappedBasedOn",
        "fct-type": "function",
        "title": "directionToWrappedBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "directionToWrappedBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003e[Direction b]",
        "package": "grid",
        "partial": "To Wrapped Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003e[Direction g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the minimum number of moves required\n   to get from the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in\n   grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each step. (Two tiles\n   are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not\n   contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#distance",
        "fct-type": "method",
        "title": "distance"
      },
      "index": {
        "description": "distance returns the minimum number of moves required to get from the tile at index to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "distance",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distanceBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#distanceBasedOn",
        "fct-type": "function",
        "title": "distanceBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "distanceBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003eInt",
        "package": "grid",
        "partial": "Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distanceWrappedBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#distanceWrappedBasedOn",
        "fct-type": "function",
        "title": "distanceWrappedBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "distanceWrappedBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003eInt",
        "package": "grid",
        "partial": "Wrapped Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:edges",
      "description": {
        "fct-descr": "\u003cp\u003eA list of all edges in a grid, where the edges are represented by\n   a pair of indices of adjacent tiles.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [(Index g, Index g)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#edges",
        "fct-type": "method",
        "title": "edges"
      },
      "index": {
        "description": "list of all edges in grid where the edges are represented by pair of indices of adjacent tiles",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "edges",
        "normalized": "a-\u003e[(Index a,Index a)]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[(Index g,Index g)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the indices of all tiles in a grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#indices",
        "fct-type": "method",
        "title": "indices"
      },
      "index": {
        "description": "Returns the indices of all tiles in grid",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "indices",
        "normalized": "a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isAdjacent",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisAdjacent\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the tile at index \u003ccode\u003ea\u003c/code\u003e is\n   adjacent to the tile at index \u003ccode\u003eb\u003c/code\u003e in \u003ccode\u003eg\u003c/code\u003e. (Two tiles are adjacent\n   if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within\n   \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isAdjacent",
        "fct-type": "method",
        "title": "isAdjacent"
      },
      "index": {
        "description": "isAdjacent returns True if the tile at index is adjacent to the tile at index in Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "isAdjacent",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Adjacent",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isBoundary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBoundary\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   on a boundary of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise. (Corner tiles are also\n   boundary tiles.)\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isBoundary",
        "fct-type": "method",
        "title": "isBoundary"
      },
      "index": {
        "description": "isBoundary returns True if the tile with index is on boundary of False otherwise Corner tiles are also boundary tiles",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "isBoundary",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Boundary",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isCentre",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisCentre\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   a centre tile of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#isCentre",
        "fct-type": "method",
        "title": "isCentre"
      },
      "index": {
        "description": "isCentre returns True if the tile with index is centre tile of False otherwise",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "isCentre",
        "normalized": "a-\u003eIndex a-\u003eBool",
        "package": "grid",
        "partial": "Centre",
        "signature": "g-\u003eIndex g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:maxPossibleDistance",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the largest possible distance between two tiles in the\n   grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#maxPossibleDistance",
        "fct-type": "method",
        "title": "maxPossibleDistance"
      },
      "index": {
        "description": "Returns the largest possible distance between two tiles in the grid",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "maxPossibleDistance",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Possible Distance",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:minDistance",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminDistance\u003c/a\u003e\u003c/code\u003e g bs a\u003c/code\u003e returns the minimum number of moves\n   required to get from any of the tiles at indices \u003ccode\u003ebs\u003c/code\u003e to the tile\n   at index \u003ccode\u003ea\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each\n   step. (Two tiles are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or\n   any of \u003ccode\u003ebs\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the result is\n   undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#minDistance",
        "fct-type": "method",
        "title": "minDistance"
      },
      "index": {
        "description": "minDistance bs returns the minimum number of moves required to get from any of the tiles at indices bs to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or any of bs are not contained within the result is undefined",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "minDistance",
        "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "Distance",
        "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:minimalPaths",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns a list of all minimal paths from\n   the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e. A\n   path is a sequence of tiles where each tile in the sequence is\n   adjacent to the previous one. (Two tiles are adjacent if they\n   share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the\n   result is undefined.\n\u003c/p\u003e\u003cp\u003eTip: The default implementation of this function calls\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. If you want to use a custom algorithm,\n   consider modifying \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead of\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
        "fct-source": "src/Math-Geometry-GridInternal.html#minimalPaths",
        "fct-type": "method",
        "title": "minimalPaths"
      },
      "index": {
        "description": "minimalPaths returns list of all minimal paths from the tile at index to the tile at index in grid path is sequence of tiles where each tile in the sequence is adjacent to the previous one Two tiles are adjacent if they share an edge If or are not contained within the result is undefined Tip The default implementation of this function calls adjacentTilesToward If you want to use custom algorithm consider modifying adjacentTilesToward instead of minimalPaths",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "minimalPaths",
        "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
        "package": "grid",
        "partial": "Paths",
        "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbour",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbour\u003c/a\u003e\u003c/code\u003e g d a\u003c/code\u003e returns the indices of the tile in the grid\n   \u003ccode\u003eg\u003c/code\u003e which is adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e, in the\n   direction \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighbour",
        "fct-type": "method",
        "title": "neighbour"
      },
      "index": {
        "description": "neighbour returns the indices of the tile in the grid which is adjacent to the tile with index in the direction",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighbour",
        "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbourWrappedBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighbourWrappedBasedOn",
        "fct-type": "function",
        "title": "neighbourWrappedBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighbourWrappedBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003eDirection b-\u003eMaybe(Index b)",
        "package": "grid",
        "partial": "Wrapped Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbours",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the indices of the tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighbours",
        "fct-type": "method",
        "title": "neighbours"
      },
      "index": {
        "description": "neighbours returns the indices of the tiles in the grid which are adjacent to the tile with index",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighbours",
        "normalized": "a-\u003eIndex a-\u003e[Index a]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighboursBasedOn",
        "fct-type": "function",
        "title": "neighboursBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighboursBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003e[Index b]",
        "package": "grid",
        "partial": "Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursOfSet",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighboursOfSet\u003c/a\u003e\u003c/code\u003e g as\u003c/code\u003e returns the indices of the tiles in the\n   grid \u003ccode\u003eg\u003c/code\u003e which are adjacent to any of the tiles with index in\n   \u003ccode\u003eas\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [Index g] -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighboursOfSet",
        "fct-type": "method",
        "title": "neighboursOfSet"
      },
      "index": {
        "description": "neighboursOfSet as returns the indices of the tiles in the grid which are adjacent to any of the tiles with index in as",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighboursOfSet",
        "normalized": "a-\u003e[Index a]-\u003e[Index a]",
        "package": "grid",
        "partial": "Of Set",
        "signature": "g-\u003e[Index g]-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursWrappedBasedOn",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "u -\u003e g -\u003e Index g -\u003e [Index g]",
        "fct-source": "src/Math-Geometry-GridInternal.html#neighboursWrappedBasedOn",
        "fct-type": "function",
        "title": "neighboursWrappedBasedOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "neighboursWrappedBasedOn",
        "normalized": "a-\u003eb-\u003eIndex b-\u003e[Index b]",
        "package": "grid",
        "partial": "Wrapped Based On",
        "signature": "u-\u003eg-\u003eIndex g-\u003e[Index g]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:nonNull",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eFalse\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eTrue\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#nonNull",
        "fct-type": "method",
        "title": "nonNull"
      },
      "index": {
        "description": "Returns False if the number of tiles in grid is zero True otherwise",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "nonNull",
        "normalized": "a-\u003eBool",
        "package": "grid",
        "partial": "Null",
        "signature": "g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:normalise",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the \u003ca\u003enormal\u003c/a\u003e indices for \u003ccode\u003ea\u003c/code\u003e.\n   TODO: need a clearer description and an illustration.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Index g",
        "fct-source": "src/Math-Geometry-GridInternal.html#normalise",
        "fct-type": "method",
        "title": "normalise"
      },
      "index": {
        "description": "normalise returns the normal indices for TODO need clearer description and an illustration",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "normalise",
        "normalized": "a-\u003eIndex a-\u003eIndex a",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003eIndex g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eFalse\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#null",
        "fct-type": "method",
        "title": "null"
      },
      "index": {
        "description": "Returns True if the number of tiles in grid is zero False otherwise",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "null",
        "normalized": "a-\u003eBool",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:numNeighbours",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enumNeighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the number of tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#numNeighbours",
        "fct-type": "method",
        "title": "numNeighbours"
      },
      "index": {
        "description": "numNeighbours returns the number of tiles in the grid which are adjacent to the tile with index",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "numNeighbours",
        "normalized": "a-\u003eIndex a-\u003eInt",
        "package": "grid",
        "partial": "Neighbours",
        "signature": "g-\u003eIndex g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:sameEdge",
      "description": {
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "(t, t) -\u003e (t, t) -\u003e Bool",
        "fct-source": "src/Math-Geometry-GridInternal.html#sameEdge",
        "fct-type": "function",
        "title": "sameEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "sameEdge",
        "normalized": "(a,a)-\u003e(a,a)-\u003eBool",
        "package": "grid",
        "partial": "Edge",
        "signature": "(t,t)-\u003e(t,t)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the dimensions of the grid.\n   For example, if \u003ccode\u003eg\u003c/code\u003e is a 4x3 rectangular grid, \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would\n   return \u003ccode\u003e(4, 3)\u003c/code\u003e, while \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileCount\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would return \u003ccode\u003e12\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Size g",
        "fct-source": "src/Math-Geometry-GridInternal.html#size",
        "fct-type": "method",
        "title": "size"
      },
      "index": {
        "description": "Returns the dimensions of the grid For example if is x3 rectangular grid size would return while tileCount would return",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "size",
        "normalized": "a-\u003eSize a",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eSize g"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:tileCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of tiles in a grid. Compare with \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#tileCount",
        "fct-type": "method",
        "title": "tileCount"
      },
      "index": {
        "description": "Returns the number of tiles in grid Compare with size",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "tileCount",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Count",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:tileSideCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of sides a tile has\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Int",
        "fct-source": "src/Math-Geometry-GridInternal.html#tileSideCount",
        "fct-type": "method",
        "title": "tileSideCount"
      },
      "index": {
        "description": "Returns the number of sides tile has",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "tileSideCount",
        "normalized": "a-\u003eInt",
        "package": "grid",
        "partial": "Side Count",
        "signature": "g-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:viewpoint",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eviewpoint\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns a list of pairs associating the index\n   of each tile in \u003ccode\u003eg\u003c/code\u003e with its distance to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n   If \u003ccode\u003ea\u003c/code\u003e is not contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridInternal",
        "fct-package": "grid",
        "fct-signature": "g -\u003e Index g -\u003e [(Index g, Int)]",
        "fct-source": "src/Math-Geometry-GridInternal.html#viewpoint",
        "fct-type": "method",
        "title": "viewpoint"
      },
      "index": {
        "description": "viewpoint returns list of pairs associating the index of each tile in with its distance to the tile with index If is not contained within the result is undefined",
        "hierarchy": "Math Geometry GridInternal",
        "module": "Math.Geometry.GridInternal",
        "name": "viewpoint",
        "normalized": "a-\u003eIndex a-\u003e[(Index a,Int)]",
        "package": "grid",
        "partial": "",
        "signature": "g-\u003eIndex g-\u003e[(Index g,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrdered maps from tiles on a grid to values.\n This module is a wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, in order to combine the functionality of grids and maps\n into a single type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.GridMap.Lazy",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-GridMap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Ordered maps from tiles on grid to values This module is wrapper around Grid and Map in order to combine the functionality of grids and maps into single type",
        "hierarchy": "Math Geometry GridMap Lazy",
        "module": "Math.Geometry.GridMap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "grid",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#t:LGridMap",
      "description": {
        "fct-descr": "\u003cp\u003eA map from tile positions in a grid to values.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap.Lazy",
        "fct-package": "grid",
        "fct-signature": "data",
        "fct-source": "src/Math-Geometry-GridMap-Lazy.html#LGridMap",
        "fct-type": "data",
        "title": "LGridMap"
      },
      "index": {
        "description": "map from tile positions in grid to values",
        "hierarchy": "Math Geometry GridMap Lazy",
        "module": "Math.Geometry.GridMap.Lazy",
        "name": "LGridMap",
        "normalized": "",
        "package": "grid",
        "partial": "LGrid Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#v:lazyGridMap",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a grid map which is strict in the keys (tile positions), but\n   lazy in the values.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap.Lazy",
        "fct-package": "grid",
        "fct-signature": "g -\u003e [v] -\u003e LGridMap g v",
        "fct-source": "src/Math-Geometry-GridMap-Lazy.html#lazyGridMap",
        "fct-type": "function",
        "title": "lazyGridMap"
      },
      "index": {
        "description": "Construct grid map which is strict in the keys tile positions but lazy in the values",
        "hierarchy": "Math Geometry GridMap Lazy",
        "module": "Math.Geometry.GridMap.Lazy",
        "name": "lazyGridMap",
        "normalized": "a-\u003e[b]-\u003eLGridMap a b",
        "package": "grid",
        "partial": "Grid Map",
        "signature": "g-\u003e[v]-\u003eLGridMap g v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrdered maps from tiles on a grid to values.\n This module is a wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, in order to combine the functionality of grids and maps\n into a single type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "module",
        "fct-source": "src/Math-Geometry-GridMap.html",
        "fct-type": "module",
        "title": "GridMap"
      },
      "index": {
        "description": "Ordered maps from tiles on grid to values This module is wrapper around Grid and Map in order to combine the functionality of grids and maps into single type",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "GridMap",
        "normalized": "",
        "package": "grid",
        "partial": "Grid Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#t:GridMap",
      "description": {
        "fct-descr": "\u003cp\u003eA regular arrangement of tiles, having a value associated with\n   each tile.\n   Minimal complete definition: \u003ccode\u003etoMap\u003c/code\u003e, \u003ccode\u003etoGrid\u003c/code\u003e, \u003ccode\u003eadjustWithKey\u003c/code\u003e,\n   \u003ccode\u003emapWithKey\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Some of the methods have an \u003ccode\u003eOrd\u003c/code\u003e constraint on the grid \n   index. This is purely to make it easier to write implementations.\n   While tile positions can be ordered (e.g., \u003ccode\u003e(1,2) \u003c (2,1)\u003c/code\u003e), the\n   ordering may not be particularly meaningful. (Comparisons such as \n   \u003cem\u003eeast of\u003c/em\u003e or \u003cem\u003esouth of\u003c/em\u003e may be more sensible.) However, it is\n   convenient to write implementations of this class using\n   \u003ccode\u003eData.Map\u003c/code\u003e, with the grid indices as keys. Many of the functions\n   in \u003ccode\u003eData.Map\u003c/code\u003e impose the \u003ccode\u003eOrd\u003c/code\u003e constraint on map keys, so we'll\n   live with it. In summary, to use some methods in this class, your\n   grid indices must be orderable.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "class",
        "fct-source": "src/Math-Geometry-GridMap.html#GridMap",
        "fct-type": "class",
        "title": "GridMap"
      },
      "index": {
        "description": "regular arrangement of tiles having value associated with each tile Minimal complete definition toMap toGrid adjustWithKey mapWithKey Note Some of the methods have an Ord constraint on the grid index This is purely to make it easier to write implementations While tile positions can be ordered e.g the ordering may not be particularly meaningful Comparisons such as east of or south of may be more sensible However it is convenient to write implementations of this class using Data.Map with the grid indices as keys Many of the functions in Data.Map impose the Ord constraint on map keys so we ll live with it In summary to use some methods in this class your grid indices must be orderable",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "GridMap",
        "normalized": "",
        "package": "grid",
        "partial": "Grid Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eFind the value at a tile position in the grid.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "gm v -\u003e k -\u003e v",
        "fct-source": "src/Math-Geometry-GridMap.html#%21",
        "fct-type": "method",
        "title": "(!)"
      },
      "index": {
        "description": "Find the value at tile position in the grid",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "(!) !",
        "normalized": "a b-\u003ec-\u003eb",
        "package": "grid",
        "partial": "",
        "signature": "gm v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust a value at a specific tile position. When the tile is not\n   within the bounds of the grid map, the original grid map is\n   returned.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(v -\u003e v) -\u003e k -\u003e gm v -\u003e gm v",
        "fct-source": "src/Math-Geometry-GridMap.html#adjust",
        "fct-type": "method",
        "title": "adjust"
      },
      "index": {
        "description": "Adjust value at specific tile position When the tile is not within the bounds of the grid map the original grid map is returned",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eb-\u003ec a-\u003ec a",
        "package": "grid",
        "partial": "",
        "signature": "(v-\u003ev)-\u003ek-\u003egm v-\u003egm v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust a value at a specific tile position. When the tile is not\n   within the bounds of the grid map, the original grid map is\n   returned.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(k -\u003e v -\u003e v) -\u003e k -\u003e gm v -\u003e gm v",
        "fct-source": "src/Math-Geometry-GridMap.html#adjustWithKey",
        "fct-type": "method",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "Adjust value at specific tile position When the tile is not within the bounds of the grid map the original grid map is returned",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "adjustWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ec b-\u003ec b",
        "package": "grid",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev)-\u003ek-\u003egm v-\u003egm v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all values in the map \n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "gm v -\u003e [v]",
        "fct-source": "src/Math-Geometry-GridMap.html#elems",
        "fct-type": "method",
        "title": "elems"
      },
      "index": {
        "description": "Returns all values in the map",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "elems",
        "normalized": "a b-\u003e[b]",
        "package": "grid",
        "partial": "",
        "signature": "gm v-\u003e[v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns the value\n   at tile position \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the tile is not within\n   the bounds of the grid map.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "v -\u003e k -\u003e gm v -\u003e v",
        "fct-source": "src/Math-Geometry-GridMap.html#findWithDefault",
        "fct-type": "method",
        "title": "findWithDefault"
      },
      "index": {
        "description": "The expression findWithDefault def map returns the value at tile position or returns def when the tile is not within the bounds of the grid map",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "findWithDefault",
        "normalized": "a-\u003eb-\u003ec a-\u003ea",
        "package": "grid",
        "partial": "With Default",
        "signature": "v-\u003ek-\u003egm v-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given left-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e elems = reverse . foldl (flip (:)) []\n\u003c/pre\u003e\u003cpre\u003e let f len a = len + (length a)\n foldl f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Map k b -\u003e a",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Fold the values in the map using the given left-associative binary operator such that foldl foldl elems For example elems reverse foldl flip let len len length foldl fromList bbb",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap c b-\u003ea",
        "package": "grid",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. Each application of the operator is\n evaluated before using the result in the next application. This\n function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Map k b -\u003e a",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "strict version of foldl Each application of the operator is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap c b-\u003ea",
        "package": "grid",
        "partial": "",
        "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap k b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given right-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e elems map = foldr (:) [] map\n\u003c/pre\u003e\u003cpre\u003e let f a len = len + (length a)\n foldr f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Fold the values in the map using the given right-associative binary operator such that foldr foldr elems For example elems map foldr map let len len length foldr fromList bbb",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
        "package": "grid",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldr-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e. Each application of the operator is\n evaluated before using the result in the next application. This\n function is strict in the starting value.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "strict version of foldr Each application of the operator is evaluated before using the result in the next application This function is strict in the starting value",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "foldr'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
        "package": "grid",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value at a tile position in the grid map.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "k -\u003e gm v -\u003e Maybe v",
        "fct-source": "src/Math-Geometry-GridMap.html#lookup",
        "fct-type": "method",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value at tile position in the grid map",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "lookup",
        "normalized": "a-\u003eb c-\u003eMaybe c",
        "package": "grid",
        "partial": "",
        "signature": "k-\u003egm v-\u003eMaybe v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(v -\u003e v2) -\u003e gm v -\u003e gm v2",
        "fct-source": "src/Math-Geometry-GridMap.html#map",
        "fct-type": "method",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "map",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
        "package": "grid",
        "partial": "",
        "signature": "(v-\u003ev)-\u003egm v-\u003egm v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:mapWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "(k -\u003e v -\u003e v2) -\u003e gm v -\u003e gm v2",
        "fct-source": "src/Math-Geometry-GridMap.html#mapWithKey",
        "fct-type": "method",
        "title": "mapWithKey"
      },
      "index": {
        "description": "Map function over all values in the map",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "mapWithKey",
        "normalized": "(a-\u003eb-\u003eb)-\u003ec b-\u003ec b",
        "package": "grid",
        "partial": "With Key",
        "signature": "(k-\u003ev-\u003ev)-\u003egm v-\u003egm v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toGrid",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the grid on which this map is based.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "gm v -\u003e BaseGrid gm v",
        "fct-source": "src/Math-Geometry-GridMap.html#toGrid",
        "fct-type": "method",
        "title": "toGrid"
      },
      "index": {
        "description": "Returns the grid on which this map is based",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "toGrid",
        "normalized": "a b-\u003eBaseGrid a b",
        "package": "grid",
        "partial": "Grid",
        "signature": "gm v-\u003eBaseGrid gm v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the map to a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "gm v -\u003e [(k, v)]",
        "fct-source": "src/Math-Geometry-GridMap.html#toList",
        "fct-type": "method",
        "title": "toList"
      },
      "index": {
        "description": "Convert the map to list of key value pairs",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "toList",
        "normalized": "a b-\u003e[(c,b)]",
        "package": "grid",
        "partial": "List",
        "signature": "gm v-\u003e[(k,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a map of grid indices to values.\n\u003c/p\u003e",
        "fct-module": "Math.Geometry.GridMap",
        "fct-package": "grid",
        "fct-signature": "gm v -\u003e Map k v",
        "fct-source": "src/Math-Geometry-GridMap.html#toMap",
        "fct-type": "method",
        "title": "toMap"
      },
      "index": {
        "description": "Returns map of grid indices to values",
        "hierarchy": "Math Geometry GridMap",
        "module": "Math.Geometry.GridMap",
        "name": "toMap",
        "normalized": "a b-\u003eMap c b",
        "package": "grid",
        "partial": "Map",
        "signature": "gm v-\u003eMap k v"
      }
    }
  }
]