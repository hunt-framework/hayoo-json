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
        "word": "grid"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of hexagonal tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "Hexagonal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-Hexagonal.html",
          "type": "module"
        },
        "index": {
          "description": "regular arrangement of hexagonal tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "Hexagonal",
          "package": "grid",
          "partial": "Hexagonal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "HexHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
          "type": "data"
        },
        "index": {
          "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "HexHexGrid",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallelogramatical grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "ParaHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
          "type": "data"
        },
        "index": {
          "description": "parallelogramatical grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "ParaHexGrid",
          "package": "grid",
          "partial": "Para Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:ParaHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#t:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Hexagonal\",\"Math.Geometry.Grid.HexagonalInternal\"]",
          "name": "hexHexGrid",
          "package": "grid",
          "signature": "Int -\u003e HexHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#hexHexGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:hexHexGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:hexHexGrid\"]"
        },
        "index": {
          "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "hexHexGrid",
          "normalized": "Int-\u003eHexHexGrid",
          "package": "grid",
          "partial": "Hex Grid",
          "signature": "Int-\u003eHexHexGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:hexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles. If \n   \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles.\n   Otherwise, the resulting grid will be null and the list of indices will \n   be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Hexagonal\",\"Math.Geometry.Grid.HexagonalInternal\"]",
          "name": "paraHexGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e ParaHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#paraHexGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:paraHexGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:paraHexGrid\"]"
        },
        "index": {
          "description": "paraHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Hexagonal",
          "module": "Math.Geometry.Grid.Hexagonal",
          "name": "paraHexGrid",
          "normalized": "Int-\u003eInt-\u003eParaHexGrid",
          "package": "grid",
          "partial": "Hex Grid",
          "signature": "Int-\u003eInt-\u003eParaHexGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal.html#v:paraHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eHexagonal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, except the grids are\n oriented so that the flat part of the hexagonal tiles is on the top.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "Hexagonal2",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-Hexagonal2.html",
          "type": "module"
        },
        "index": {
          "description": "Same as Hexagonal except the grids are oriented so that the flat part of the hexagonal tiles is on the top The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "Hexagonal2",
          "package": "grid",
          "partial": "Hexagonal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "HexHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
          "type": "data"
        },
        "index": {
          "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "HexHexGrid",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "RectHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "RectHexGrid",
          "package": "grid",
          "partial": "Rect Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:RectHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#t:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehexHexGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a grid of hexagonal shape, with\n   sides of length \u003ccode\u003es\u003c/code\u003e, using hexagonal tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003e3*s*(s-1) + 1\u003c/code\u003e tiles. Otherwise, the resulting \n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Hexagonal2\",\"Math.Geometry.Grid.HexagonalInternal2\"]",
          "name": "hexHexGrid",
          "package": "grid",
          "signature": "Int -\u003e HexHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#hexHexGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:hexHexGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:hexHexGrid\"]"
        },
        "index": {
          "description": "hexHexGrid returns grid of hexagonal shape with sides of length using hexagonal tiles If is nonnegative the resulting grid will have s-1 tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "hexHexGrid",
          "normalized": "Int-\u003eHexHexGrid",
          "package": "grid",
          "partial": "Hex Grid",
          "signature": "Int-\u003eHexHexGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:hexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectHexGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using hexagonal tiles.\n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have\n   \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the\n   list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Hexagonal2\",\"Math.Geometry.Grid.HexagonalInternal2\"]",
          "name": "rectHexGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e RectHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#rectHexGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:rectHexGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:rectHexGrid\"]"
        },
        "index": {
          "description": "rectHexGrid returns grid in the shape of parallelogram with rows and columns using hexagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Hexagonal2",
          "module": "Math.Geometry.Grid.Hexagonal2",
          "name": "rectHexGrid",
          "normalized": "Int-\u003eInt-\u003eRectHexGrid",
          "package": "grid",
          "partial": "Hex Grid",
          "signature": "Int-\u003eInt-\u003eRectHexGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Hexagonal2.html#v:rectHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eHexGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eHexGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexagonalInternal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private HexGrid internals Most developers should use HexGrid instead This module is subject to change without notice",
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexagonalInternal",
          "package": "grid",
          "partial": "Hexagonal Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexDirection",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexDirection",
          "package": "grid",
          "partial": "Hex Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:HexDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
          "type": "data"
        },
        "index": {
          "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexHexGrid",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parallelogramatical grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "ParaHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
          "type": "data"
        },
        "index": {
          "description": "parallelogramatical grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "ParaHexGrid",
          "package": "grid",
          "partial": "Para Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:ParaHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#t:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "East",
          "package": "grid",
          "signature": "East",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "East",
          "package": "grid",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexHexGrid",
          "package": "grid",
          "signature": "HexHexGrid Int [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "HexHexGrid",
          "normalized": "HexHexGrid Int[(Int,Int)]",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "signature": "HexHexGrid Int[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Northeast",
          "package": "grid",
          "signature": "Northeast",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Northeast",
          "package": "grid",
          "partial": "Northeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Northeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Northwest",
          "package": "grid",
          "signature": "Northwest",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Northwest",
          "package": "grid",
          "partial": "Northwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Northwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "ParaHexGrid",
          "package": "grid",
          "signature": "ParaHexGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#ParaHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "ParaHexGrid",
          "normalized": "ParaHexGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Para Hex Grid",
          "signature": "ParaHexGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:ParaHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Southeast",
          "package": "grid",
          "signature": "Southeast",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Southeast",
          "package": "grid",
          "partial": "Southeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Southeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Southwest",
          "package": "grid",
          "signature": "Southwest",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "Southwest",
          "package": "grid",
          "partial": "Southwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:Southwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "signature": "UnboundedHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#UnboundedHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "West",
          "package": "grid",
          "signature": "West",
          "source": "src/Math-Geometry-Grid-HexagonalInternal.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal",
          "module": "Math.Geometry.Grid.HexagonalInternal",
          "name": "West",
          "package": "grid",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eHexGrid2\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eHexGrid2\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexagonalInternal2",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private HexGrid2 internals Most developers should use HexGrid2 instead This module is subject to change without notice",
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexagonalInternal2",
          "package": "grid",
          "partial": "Hexagonal Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexDirection",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexDirection",
          "package": "grid",
          "partial": "Hex Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:HexDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hexagonal grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
          "type": "data"
        },
        "index": {
          "description": "hexagonal grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexHexGrid",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "RectHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "RectHexGrid",
          "package": "grid",
          "partial": "Rect Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:RectHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with hexagonal tiles\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with hexagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#t:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexHexGrid",
          "package": "grid",
          "signature": "HexHexGrid Int [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "HexHexGrid",
          "normalized": "HexHexGrid Int[(Int,Int)]",
          "package": "grid",
          "partial": "Hex Hex Grid",
          "signature": "HexHexGrid Int[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:HexHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "North",
          "package": "grid",
          "signature": "North",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "North",
          "package": "grid",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Northeast",
          "package": "grid",
          "signature": "Northeast",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Northeast",
          "package": "grid",
          "partial": "Northeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Northeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Northwest",
          "package": "grid",
          "signature": "Northwest",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Northwest",
          "package": "grid",
          "partial": "Northwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Northwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "RectHexGrid",
          "package": "grid",
          "signature": "RectHexGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#RectHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "RectHexGrid",
          "normalized": "RectHexGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Rect Hex Grid",
          "signature": "RectHexGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:RectHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "South",
          "package": "grid",
          "signature": "South",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "South",
          "package": "grid",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Southeast",
          "package": "grid",
          "signature": "Southeast",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Southeast",
          "package": "grid",
          "partial": "Southeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Southeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Southwest",
          "package": "grid",
          "signature": "Southwest",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#HexDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "Southwest",
          "package": "grid",
          "partial": "Southwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:Southwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "signature": "UnboundedHexGrid",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#UnboundedHexGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "UnboundedHexGrid",
          "package": "grid",
          "partial": "Unbounded Hex Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:UnboundedHexGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "rectHexGridY",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Math-Geometry-Grid-HexagonalInternal2.html#rectHexGridY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid HexagonalInternal2",
          "module": "Math.Geometry.Grid.HexagonalInternal2",
          "name": "rectHexGridY",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "grid",
          "partial": "Hex Grid",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-HexagonalInternal2.html#v:rectHexGridY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of octagonal tiles.\n Octagons won't tile a regular plane (there will be diamond-shaped\n gaps between the tiles), but they will tile a \u003cem\u003ehyperbolic\u003c/em\u003e plane.\n (Alternatively, you can think of these as squares on a board game\n where diagonal moves are allowed.)\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "Octagonal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-Octagonal.html",
          "type": "module"
        },
        "index": {
          "description": "regular arrangement of octagonal tiles Octagons won tile regular plane there will be diamond-shaped gaps between the tiles but they will tile hyperbolic plane Alternatively you can think of these as squares on board game where diagonal moves are allowed The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "Octagonal",
          "package": "grid",
          "partial": "Octagonal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "RectOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "RectOctGrid",
          "package": "grid",
          "partial": "Rect Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:RectOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "TorOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "TorOctGrid",
          "package": "grid",
          "partial": "Tor Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:TorOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "partial": "Unbounded Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#t:UnboundedOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Octagonal\",\"Math.Geometry.Grid.OctagonalInternal\"]",
          "name": "rectOctGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e RectOctGrid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#rectOctGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:rectOctGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:rectOctGrid\"]"
        },
        "index": {
          "description": "rectOctGrid produces rectangular grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "rectOctGrid",
          "normalized": "Int-\u003eInt-\u003eRectOctGrid",
          "package": "grid",
          "partial": "Oct Grid",
          "signature": "Int-\u003eInt-\u003eRectOctGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:rectOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorOctGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using octagonal tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Octagonal\",\"Math.Geometry.Grid.OctagonalInternal\"]",
          "name": "torOctGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e TorOctGrid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#torOctGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:torOctGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:torOctGrid\"]"
        },
        "index": {
          "description": "torOctGrid returns toroidal grid with rows and columns using octagonal tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Octagonal",
          "module": "Math.Geometry.Grid.Octagonal",
          "name": "torOctGrid",
          "normalized": "Int-\u003eInt-\u003eTorOctGrid",
          "package": "grid",
          "partial": "Oct Grid",
          "signature": "Int-\u003eInt-\u003eTorOctGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Octagonal.html#v:torOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eOctGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eOctGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "OctagonalInternal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private OctGrid internals Most developers should use OctGrid instead This module is subject to change without notice",
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "OctagonalInternal",
          "package": "grid",
          "partial": "Octagonal Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "OctDirection",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "OctDirection",
          "package": "grid",
          "partial": "Oct Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:OctDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "RectOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "RectOctGrid",
          "package": "grid",
          "partial": "Rect Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:RectOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "TorOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "TorOctGrid",
          "package": "grid",
          "partial": "Tor Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:TorOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with octagonal tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with octagonal tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "partial": "Unbounded Oct Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#t:UnboundedOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "East",
          "package": "grid",
          "signature": "East",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "East",
          "package": "grid",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "North",
          "package": "grid",
          "signature": "North",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "North",
          "package": "grid",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Northeast",
          "package": "grid",
          "signature": "Northeast",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Northeast",
          "package": "grid",
          "partial": "Northeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Northeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Northwest",
          "package": "grid",
          "signature": "Northwest",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Northwest",
          "package": "grid",
          "partial": "Northwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Northwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "RectOctGrid",
          "package": "grid",
          "signature": "RectOctGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#RectOctGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "RectOctGrid",
          "normalized": "RectOctGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Rect Oct Grid",
          "signature": "RectOctGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:RectOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "South",
          "package": "grid",
          "signature": "South",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "South",
          "package": "grid",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Southeast",
          "package": "grid",
          "signature": "Southeast",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Southeast",
          "package": "grid",
          "partial": "Southeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Southeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Southwest",
          "package": "grid",
          "signature": "Southwest",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "Southwest",
          "package": "grid",
          "partial": "Southwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:Southwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "TorOctGrid",
          "package": "grid",
          "signature": "TorOctGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#TorOctGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "TorOctGrid",
          "normalized": "TorOctGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Tor Oct Grid",
          "signature": "TorOctGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:TorOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "signature": "UnboundedOctGrid",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#UnboundedOctGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "UnboundedOctGrid",
          "package": "grid",
          "partial": "Unbounded Oct Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:UnboundedOctGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "West",
          "package": "grid",
          "signature": "West",
          "source": "src/Math-Geometry-Grid-OctagonalInternal.html#OctDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid OctagonalInternal",
          "module": "Math.Geometry.Grid.OctagonalInternal",
          "name": "West",
          "package": "grid",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-OctagonalInternal.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of square tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.Square",
          "name": "Square",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-Square.html",
          "type": "module"
        },
        "index": {
          "description": "regular arrangement of square tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "Square",
          "package": "grid",
          "partial": "Square",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Square",
          "name": "RectSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "RectSquareGrid",
          "package": "grid",
          "partial": "Rect Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:RectSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Square",
          "name": "TorSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "TorSquareGrid",
          "package": "grid",
          "partial": "Tor Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:TorSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Square",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "partial": "Unbounded Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#t:UnboundedSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e produces a rectangular grid with \u003ccode\u003er\u003c/code\u003e rows\n   and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both \n   nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be \n   null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Square\",\"Math.Geometry.Grid.SquareInternal\"]",
          "name": "rectSquareGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e RectSquareGrid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#rectSquareGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:rectSquareGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:rectSquareGrid\"]"
        },
        "index": {
          "description": "rectSquareGrid produces rectangular grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "rectSquareGrid",
          "normalized": "Int-\u003eInt-\u003eRectSquareGrid",
          "package": "grid",
          "partial": "Square Grid",
          "signature": "Int-\u003eInt-\u003eRectSquareGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:rectSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorSquareGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e \n   rows and \u003ccode\u003ec\u003c/code\u003e columns, using square tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are \n   both nonnegative, the resulting grid will have \u003ccode\u003er*c\u003c/code\u003e tiles. Otherwise, \n   the resulting grid will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Square\",\"Math.Geometry.Grid.SquareInternal\"]",
          "name": "torSquareGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e TorSquareGrid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#torSquareGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:torSquareGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:torSquareGrid\"]"
        },
        "index": {
          "description": "torSquareGrid returns toroidal grid with rows and columns using square tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Square",
          "module": "Math.Geometry.Grid.Square",
          "name": "torSquareGrid",
          "normalized": "Int-\u003eInt-\u003eTorSquareGrid",
          "package": "grid",
          "partial": "Square Grid",
          "signature": "Int-\u003eInt-\u003eTorSquareGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Square.html#v:torSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eSquareGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eSquareGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "SquareInternal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private SquareGrid internals Most developers should use SquareGrid instead This module is subject to change without notice",
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "SquareInternal",
          "package": "grid",
          "partial": "Square Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "RectSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "RectSquareGrid",
          "package": "grid",
          "partial": "Rect Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:RectSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "SquareDirection",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "SquareDirection",
          "package": "grid",
          "partial": "Square Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:SquareDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "TorSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "TorSquareGrid",
          "package": "grid",
          "partial": "Tor Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:TorSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with square tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with square tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "partial": "Unbounded Square Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#t:UnboundedSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "East",
          "package": "grid",
          "signature": "East",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "East",
          "package": "grid",
          "partial": "East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:East"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "North",
          "package": "grid",
          "signature": "North",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "North",
          "package": "grid",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "RectSquareGrid",
          "package": "grid",
          "signature": "RectSquareGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#RectSquareGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "RectSquareGrid",
          "normalized": "RectSquareGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Rect Square Grid",
          "signature": "RectSquareGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:RectSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "South",
          "package": "grid",
          "signature": "South",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "South",
          "package": "grid",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "TorSquareGrid",
          "package": "grid",
          "signature": "TorSquareGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#TorSquareGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "TorSquareGrid",
          "normalized": "TorSquareGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Tor Square Grid",
          "signature": "TorSquareGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:TorSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "signature": "UnboundedSquareGrid",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#UnboundedSquareGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "UnboundedSquareGrid",
          "package": "grid",
          "partial": "Unbounded Square Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:UnboundedSquareGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "West",
          "package": "grid",
          "signature": "West",
          "source": "src/Math-Geometry-Grid-SquareInternal.html#SquareDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid SquareInternal",
          "module": "Math.Geometry.Grid.SquareInternal",
          "name": "West",
          "package": "grid",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-SquareInternal.html#v:West"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of triangular tiles.\n The userguide, with illustrations, is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n Also see \u003ccode\u003eMath.Geometry.Grid\u003c/code\u003e for examples of how to use this class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "Triangular",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-Triangular.html",
          "type": "module"
        },
        "index": {
          "description": "regular arrangement of triangular tiles The userguide with illustrations is available at https github.com mhwombat grid wiki Also see Math.Geometry.Grid for examples of how to use this class",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "Triangular",
          "package": "grid",
          "partial": "Triangular",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Parallelogrammatical grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "ParaTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
          "type": "data"
        },
        "index": {
          "description": "Parallelogrammatical grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "ParaTriGrid",
          "package": "grid",
          "partial": "Para Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:ParaTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "RectTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "RectTriGrid",
          "package": "grid",
          "partial": "Rect Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:RectTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "TorTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "TorTriGrid",
          "package": "grid",
          "partial": "Tor Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:TorTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "TriTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
          "type": "data"
        },
        "index": {
          "description": "triangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "TriTriGrid",
          "package": "grid",
          "partial": "Tri Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:TriTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "partial": "Unbounded Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:UnboundedTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the x-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "XCylTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
          "type": "data"
        },
        "index": {
          "description": "cylindrical grid with triangular tiles where the cylinder is along the x-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "XCylTriGrid",
          "package": "grid",
          "partial": "XCyl Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:XCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the y-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "YCylTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
          "type": "data"
        },
        "index": {
          "description": "cylindrical grid with triangular tiles where the cylinder is along the y-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "YCylTriGrid",
          "package": "grid",
          "partial": "YCyl Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#t:YCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eparaTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   parallelogram with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, using triangular \n   tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will\n   have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "paraTriGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e ParaTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#paraTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:paraTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:paraTriGrid\"]"
        },
        "index": {
          "description": "paraTriGrid returns grid in the shape of parallelogram with rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "paraTriGrid",
          "normalized": "Int-\u003eInt-\u003eParaTriGrid",
          "package": "grid",
          "partial": "Tri Grid",
          "signature": "Int-\u003eInt-\u003eParaTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:paraTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a grid in the shape of a \n   rectangle (with jagged edges) that has \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns, \n   using triangular tiles. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and\n   the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "rectTriGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e RectTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#rectTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:rectTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:rectTriGrid\"]"
        },
        "index": {
          "description": "rectTriGrid returns grid in the shape of rectangle with jagged edges that has rows and columns using triangular tiles If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "rectTriGrid",
          "normalized": "Int-\u003eInt-\u003eRectTriGrid",
          "package": "grid",
          "partial": "Tri Grid",
          "signature": "Int-\u003eInt-\u003eRectTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:rectTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etorTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a toroidal grid with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e\n   columns, using triangular tiles. The indexing method is the same as\n   for \u003ccode\u003eParaTriGrid\u003c/code\u003e. If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the \n   resulting grid will have \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting\n   grid will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "torTriGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e TorTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#torTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:torTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:torTriGrid\"]"
        },
        "index": {
          "description": "torTriGrid returns toroidal grid with rows and columns using triangular tiles The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "torTriGrid",
          "normalized": "Int-\u003eInt-\u003eTorTriGrid",
          "package": "grid",
          "partial": "Tri Grid",
          "signature": "Int-\u003eInt-\u003eTorTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:torTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etriTriGrid\u003c/a\u003e\u003c/code\u003e s\u003c/code\u003e returns a triangular grid with sides of \n   length \u003ccode\u003es\u003c/code\u003e, using triangular tiles. If \u003ccode\u003es\u003c/code\u003e is nonnegative, the \n   resulting grid will have \u003ccode\u003es^2\u003c/code\u003e tiles. Otherwise, the resulting grid\n   will be null and the list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "triTriGrid",
          "package": "grid",
          "signature": "Int -\u003e TriTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#triTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:triTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:triTriGrid\"]"
        },
        "index": {
          "description": "triTriGrid returns triangular grid with sides of length using triangular tiles If is nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "triTriGrid",
          "normalized": "Int-\u003eTriTriGrid",
          "package": "grid",
          "partial": "Tri Grid",
          "signature": "Int-\u003eTriTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:triTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003exCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "xCylTriGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e XCylTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#xCylTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:xCylTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:xCylTriGrid\"]"
        },
        "index": {
          "description": "xCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "xCylTriGrid",
          "normalized": "Int-\u003eInt-\u003eXCylTriGrid",
          "package": "grid",
          "partial": "Cyl Tri Grid",
          "signature": "Int-\u003eInt-\u003eXCylTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:xCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eyCylTriGrid\u003c/a\u003e\u003c/code\u003e r c\u003c/code\u003e returns a cylindrical grid with \u003ccode\u003er\u003c/code\u003e rows and \n   \u003ccode\u003ec\u003c/code\u003e columns, using triangular tiles, where the cylinder is along \n   the y-axis. The indexing method is the same as for \u003ccode\u003eParaTriGrid\u003c/code\u003e. \n   If \u003ccode\u003er\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e are both nonnegative, the resulting grid will have \n   \u003ccode\u003e2*r*c\u003c/code\u003e tiles. Otherwise, the resulting grid will be null and the \n   list of indices will be null.\n\u003c/p\u003e",
          "module": "[\"Math.Geometry.Grid.Triangular\",\"Math.Geometry.Grid.TriangularInternal\"]",
          "name": "yCylTriGrid",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e YCylTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#yCylTriGrid",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:yCylTriGrid\",\"http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:yCylTriGrid\"]"
        },
        "index": {
          "description": "yCylTriGrid returns cylindrical grid with rows and columns using triangular tiles where the cylinder is along the y-axis The indexing method is the same as for ParaTriGrid If and are both nonnegative the resulting grid will have tiles Otherwise the resulting grid will be null and the list of indices will be null",
          "hierarchy": "Math Geometry Grid Triangular",
          "module": "Math.Geometry.Grid.Triangular",
          "name": "yCylTriGrid",
          "normalized": "Int-\u003eInt-\u003eYCylTriGrid",
          "package": "grid",
          "partial": "Cyl Tri Grid",
          "signature": "Int-\u003eInt-\u003eYCylTriGrid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-Triangular.html#v:yCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eTriGrid\u003c/code\u003e internals. Most developers \n should use \u003ccode\u003eTriGrid\u003c/code\u003e instead. This module is subject to change \n without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriangularInternal",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private TriGrid internals Most developers should use TriGrid instead This module is subject to change without notice",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriangularInternal",
          "package": "grid",
          "partial": "Triangular Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Parallelogrammatical grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "ParaTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
          "type": "data"
        },
        "index": {
          "description": "Parallelogrammatical grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "ParaTriGrid",
          "package": "grid",
          "partial": "Para Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:ParaTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "RectTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
          "type": "data"
        },
        "index": {
          "description": "rectangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "RectTriGrid",
          "package": "grid",
          "partial": "Rect Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:RectTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA toroidal grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TorTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
          "type": "data"
        },
        "index": {
          "description": "toroidal grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TorTriGrid",
          "package": "grid",
          "partial": "Tor Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TorTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriDirection",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriDirection",
          "package": "grid",
          "partial": "Tri Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TriDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triangular grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
          "type": "data"
        },
        "index": {
          "description": "triangular grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriTriGrid",
          "package": "grid",
          "partial": "Tri Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:TriTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unbounded grid with triangular tiles.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
          "type": "data"
        },
        "index": {
          "description": "An unbounded grid with triangular tiles The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "partial": "Unbounded Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:UnboundedTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the x-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "XCylTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
          "type": "data"
        },
        "index": {
          "description": "cylindrical grid with triangular tiles where the cylinder is along the x-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "XCylTriGrid",
          "package": "grid",
          "partial": "XCyl Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:XCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cylindrical grid with triangular tiles, where the cylinder is\n   along the y-axis.\n   The grid and its indexing scheme are illustrated in the user guide,\n   available at \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "YCylTriGrid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
          "type": "data"
        },
        "index": {
          "description": "cylindrical grid with triangular tiles where the cylinder is along the y-axis The grid and its indexing scheme are illustrated in the user guide available at https github.com mhwombat grid wiki",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "YCylTriGrid",
          "package": "grid",
          "partial": "YCyl Tri Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#t:YCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "North",
          "package": "grid",
          "signature": "North",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "North",
          "package": "grid",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:North"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Northeast",
          "package": "grid",
          "signature": "Northeast",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Northeast",
          "package": "grid",
          "partial": "Northeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Northeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Northwest",
          "package": "grid",
          "signature": "Northwest",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Northwest",
          "package": "grid",
          "partial": "Northwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Northwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "ParaTriGrid",
          "package": "grid",
          "signature": "ParaTriGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#ParaTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "ParaTriGrid",
          "normalized": "ParaTriGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Para Tri Grid",
          "signature": "ParaTriGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:ParaTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "RectTriGrid",
          "package": "grid",
          "signature": "RectTriGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#RectTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "RectTriGrid",
          "normalized": "RectTriGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Rect Tri Grid",
          "signature": "RectTriGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:RectTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "South",
          "package": "grid",
          "signature": "South",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "South",
          "package": "grid",
          "partial": "South",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:South"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Southeast",
          "package": "grid",
          "signature": "Southeast",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Southeast",
          "package": "grid",
          "partial": "Southeast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Southeast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Southwest",
          "package": "grid",
          "signature": "Southwest",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriDirection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "Southwest",
          "package": "grid",
          "partial": "Southwest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:Southwest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TorTriGrid",
          "package": "grid",
          "signature": "TorTriGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TorTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TorTriGrid",
          "normalized": "TorTriGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "Tor Tri Grid",
          "signature": "TorTriGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:TorTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriTriGrid",
          "package": "grid",
          "signature": "TriTriGrid Int [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#TriTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "TriTriGrid",
          "normalized": "TriTriGrid Int[(Int,Int)]",
          "package": "grid",
          "partial": "Tri Tri Grid",
          "signature": "TriTriGrid Int[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:TriTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "signature": "UnboundedTriGrid",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#UnboundedTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "UnboundedTriGrid",
          "package": "grid",
          "partial": "Unbounded Tri Grid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:UnboundedTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "XCylTriGrid",
          "package": "grid",
          "signature": "XCylTriGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#XCylTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "XCylTriGrid",
          "normalized": "XCylTriGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "XCyl Tri Grid",
          "signature": "XCylTriGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:XCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "YCylTriGrid",
          "package": "grid",
          "signature": "YCylTriGrid (Int, Int) [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#YCylTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "YCylTriGrid",
          "normalized": "YCylTriGrid(Int,Int)[(Int,Int)]",
          "package": "grid",
          "partial": "YCyl Tri Grid",
          "signature": "YCylTriGrid(Int,Int)[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:YCylTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "inTriTriGrid",
          "package": "grid",
          "signature": "(Int, Int) -\u003e Int -\u003e Bool",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#inTriTriGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "inTriTriGrid",
          "normalized": "(Int,Int)-\u003eInt-\u003eBool",
          "package": "grid",
          "partial": "Tri Tri Grid",
          "signature": "(Int,Int)-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:inTriTriGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "parallelogramIndices",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e [(Int, Int)]",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#parallelogramIndices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "parallelogramIndices",
          "normalized": "Int-\u003eInt-\u003e[(Int,Int)]",
          "package": "grid",
          "partial": "Indices",
          "signature": "Int-\u003eInt-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:parallelogramIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor triangular tiles, it is convenient to define a third component \n   z.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "triZ",
          "package": "grid",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Math-Geometry-Grid-TriangularInternal.html#triZ",
          "type": "function"
        },
        "index": {
          "description": "For triangular tiles it is convenient to define third component",
          "hierarchy": "Math Geometry Grid TriangularInternal",
          "module": "Math.Geometry.Grid.TriangularInternal",
          "name": "triZ",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "grid",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid-TriangularInternal.html#v:triZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA regular arrangement of tiles. Grids have a variety of uses,\n including games and self-organising maps.\n The userguide is available at \n \u003ca\u003ehttps://github.com/mhwombat/grid/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn this package, tiles are called \"triangular\", \"square\", etc.,\n based on the number of \u003cem\u003eneighbours\u003c/em\u003e they have.\n For example, a square tile has four neighbours, and a hexagonal\n tile has six.\n There are only three regular polygons that can tile a plane:\n triangles, squares, and hexagons.\n Of course, other plane tilings are possible if you use irregular \n polygons, or curved shapes, or if you combine tiles of different \n shapes.\n\u003c/p\u003e\u003cp\u003eWhen you tile other surfaces, things get very interesting.\n Octagons will tile a \u003cem\u003ehyperbolic\u003c/em\u003e plane.\n (Alternatively, you can think of these as squares on a board game\n where diagonal moves are allowed.)\n\u003c/p\u003e\u003cp\u003eFor a board game, you probably want to choose the grid type based\n on the number of \u003cem\u003edirections\u003c/em\u003e a player can move, rather than the\n number of sides the tile will have when you display it.\n For example, for a game that uses square tiles and allows the user\n to move diagonally as well as horizontally and vertically,\n consider using one of the grids with \u003cem\u003eoctagonal\u003c/em\u003e tiles to model the\n board.\n You can still \u003cem\u003edisplay\u003c/em\u003e the tiles as squares, but for internal\n calculations they are octagons.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 6.0 moved the various grid flavours to sub-modules.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 4.0 uses associated (type) synonyms instead of \n multi-parameter type classes.\n\u003c/p\u003e\u003cp\u003eNOTE: Version 3.0 changed the order of parameters for many functions.\n This makes it easier for the user to write mapping and folding\n operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.Grid",
          "name": "Grid",
          "package": "grid",
          "source": "src/Math-Geometry-Grid.html",
          "type": "module"
        },
        "index": {
          "description": "regular arrangement of tiles Grids have variety of uses including games and self-organising maps The userguide is available at https github.com mhwombat grid wiki In this package tiles are called triangular square etc based on the number of neighbours they have For example square tile has four neighbours and hexagonal tile has six There are only three regular polygons that can tile plane triangles squares and hexagons Of course other plane tilings are possible if you use irregular polygons or curved shapes or if you combine tiles of different shapes When you tile other surfaces things get very interesting Octagons will tile hyperbolic plane Alternatively you can think of these as squares on board game where diagonal moves are allowed For board game you probably want to choose the grid type based on the number of directions player can move rather than the number of sides the tile will have when you display it For example for game that uses square tiles and allows the user to move diagonally as well as horizontally and vertically consider using one of the grids with octagonal tiles to model the board You can still display the tiles as squares but for internal calculations they are octagons NOTE Version moved the various grid flavours to sub-modules NOTE Version uses associated type synonyms instead of multi-parameter type classes NOTE Version changed the order of parameters for many functions This makes it easier for the user to write mapping and folding operations",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "Grid",
          "package": "grid",
          "partial": "Grid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles with an edge.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileSideCount\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "BoundedGrid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#BoundedGrid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles with an edge Minimal complete definition tileSideCount",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "BoundedGrid",
          "package": "grid",
          "partial": "Bounded Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:BoundedGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles where the number of tiles is finite.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emaxPossibleDistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "FiniteGrid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#FiniteGrid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles where the number of tiles is finite Minimal complete definition size maxPossibleDistance",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "FiniteGrid",
          "package": "grid",
          "partial": "Finite Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:FiniteGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDirection\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "Grid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#Grid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles Minimal complete definition Index Direction indices distance directionTo",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "Grid",
          "package": "grid",
          "partial": "Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#t:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the indices of all tiles\n   which are neighbours of the tile at index \u003ccode\u003ea\u003c/code\u003e, and which are\n   closer to the tile at \u003ccode\u003eb\u003c/code\u003e than \u003ccode\u003ea\u003c/code\u003e is. In other words, it returns\n   the possible next steps on a minimal path from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e\n   or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, or if there is no path from\n   \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e (e.g., a disconnected grid), the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "adjacentTilesToward",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#adjacentTilesToward",
          "type": "method"
        },
        "index": {
          "description": "adjacentTilesToward returns the indices of all tiles which are neighbours of the tile at index and which are closer to the tile at than is In other words it returns the possible next steps on minimal path from to If or are not contained within or if there is no path from to e.g disconnected grid the result is undefined",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "adjacentTilesToward",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "partial": "Tiles Toward",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:adjacentTilesToward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a the indices of all the tiles at the boundary of a grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "boundary",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#boundary",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all the tiles at the boundary of grid",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "boundary",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index of the tile(s) that require the maximum number\n   of moves to reach the nearest boundary tile. A grid may have more\n   than one central tile (e.g., a rectangular grid with an even\n   number of rows and columns will have four central tiles).\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "centre",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#centre",
          "type": "method"
        },
        "index": {
          "description": "Returns the index of the tile that require the maximum number of moves to reach the nearest boundary tile grid may have more than one central tile e.g rectangular grid with an even number of rows and columns will have four central tiles",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "centre",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:centre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg `'contains'` a\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the index \u003ccode\u003ea\u003c/code\u003e is contained\n   within the grid \u003ccode\u003eg\u003c/code\u003e, otherwise it returns false.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "contains",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#contains",
          "type": "method"
        },
        "index": {
          "description": "contains returns True if the index is contained within the grid otherwise it returns false",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "contains",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid",
          "name": "defaultBoundary",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultBoundary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "defaultBoundary",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "partial": "Boundary",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid",
          "name": "defaultCentre",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultCentre",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "defaultCentre",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "partial": "Centre",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid",
          "name": "defaultIsBoundary",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#defaultIsBoundary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "defaultIsBoundary",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Is Boundary",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultIsBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.Grid",
          "name": "defaultIsCentre",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#defaultIsCentre",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "defaultIsCentre",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Is Centre",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:defaultIsCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the direction(s) of the next\n   tile(s) in a \u003cem\u003eminimal\u003c/em\u003e path from the tile at index \u003ccode\u003ea\u003c/code\u003e to the\n   tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "directionTo",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
          "source": "src/Math-Geometry-GridInternal.html#directionTo",
          "type": "method"
        },
        "index": {
          "description": "directionTo returns the direction of the next tile in minimal path from the tile at index to the tile at index in grid",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "directionTo",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Direction a]",
          "package": "grid",
          "partial": "To",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Direction g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:directionTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the minimum number of moves required\n   to get from the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in\n   grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each step. (Two tiles\n   are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not\n   contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "distance",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#distance",
          "type": "method"
        },
        "index": {
          "description": "distance returns the minimum number of moves required to get from the tile at index to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "distance",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eInt",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all edges in a grid, where the edges are represented by\n   a pair of indices of adjacent tiles.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "edges",
          "package": "grid",
          "signature": "g -\u003e [(Index g, Index g)]",
          "source": "src/Math-Geometry-GridInternal.html#edges",
          "type": "method"
        },
        "index": {
          "description": "list of all edges in grid where the edges are represented by pair of indices of adjacent tiles",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "edges",
          "normalized": "a-\u003e[(Index a,Index a)]",
          "package": "grid",
          "signature": "g-\u003e[(Index g,Index g)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of all tiles in a grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "indices",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#indices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all tiles in grid",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "indices",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisAdjacent\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the tile at index \u003ccode\u003ea\u003c/code\u003e is\n   adjacent to the tile at index \u003ccode\u003eb\u003c/code\u003e in \u003ccode\u003eg\u003c/code\u003e. (Two tiles are adjacent\n   if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within\n   \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "isAdjacent",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isAdjacent",
          "type": "method"
        },
        "index": {
          "description": "isAdjacent returns True if the tile at index is adjacent to the tile at index in Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "isAdjacent",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Adjacent",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBoundary\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   on a boundary of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise. (Corner tiles are also\n   boundary tiles.)\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "isBoundary",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isBoundary",
          "type": "method"
        },
        "index": {
          "description": "isBoundary returns True if the tile with index is on boundary of False otherwise Corner tiles are also boundary tiles",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "isBoundary",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Boundary",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisCentre\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   a centre tile of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "isCentre",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isCentre",
          "type": "method"
        },
        "index": {
          "description": "isCentre returns True if the tile with index is centre tile of False otherwise",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "isCentre",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Centre",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:isCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the largest possible distance between two tiles in the\n   grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "maxPossibleDistance",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#maxPossibleDistance",
          "type": "method"
        },
        "index": {
          "description": "Returns the largest possible distance between two tiles in the grid",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "maxPossibleDistance",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Possible Distance",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:maxPossibleDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminDistance\u003c/a\u003e\u003c/code\u003e g bs a\u003c/code\u003e returns the minimum number of moves\n   required to get from any of the tiles at indices \u003ccode\u003ebs\u003c/code\u003e to the tile\n   at index \u003ccode\u003ea\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each\n   step. (Two tiles are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or\n   any of \u003ccode\u003ebs\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the result is\n   undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "minDistance",
          "package": "grid",
          "signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#minDistance",
          "type": "method"
        },
        "index": {
          "description": "minDistance bs returns the minimum number of moves required to get from any of the tiles at indices bs to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or any of bs are not contained within the result is undefined",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "minDistance",
          "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
          "package": "grid",
          "partial": "Distance",
          "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:minDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns a list of all minimal paths from\n   the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e. A\n   path is a sequence of tiles where each tile in the sequence is\n   adjacent to the previous one. (Two tiles are adjacent if they\n   share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the\n   result is undefined.\n\u003c/p\u003e\u003cp\u003eTip: The default implementation of this function calls\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. If you want to use a custom algorithm,\n   consider modifying \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead of\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "minimalPaths",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
          "source": "src/Math-Geometry-GridInternal.html#minimalPaths",
          "type": "method"
        },
        "index": {
          "description": "minimalPaths returns list of all minimal paths from the tile at index to the tile at index in grid path is sequence of tiles where each tile in the sequence is adjacent to the previous one Two tiles are adjacent if they share an edge If or are not contained within the result is undefined Tip The default implementation of this function calls adjacentTilesToward If you want to use custom algorithm consider modifying adjacentTilesToward instead of minimalPaths",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "minimalPaths",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
          "package": "grid",
          "partial": "Paths",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:minimalPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbour\u003c/a\u003e\u003c/code\u003e g d a\u003c/code\u003e returns the indices of the tile in the grid\n   \u003ccode\u003eg\u003c/code\u003e which is adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e, in the\n   direction \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "neighbour",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
          "source": "src/Math-Geometry-GridInternal.html#neighbour",
          "type": "method"
        },
        "index": {
          "description": "neighbour returns the indices of the tile in the grid which is adjacent to the tile with index in the direction",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "neighbour",
          "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:neighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the indices of the tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "neighbours",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#neighbours",
          "type": "method"
        },
        "index": {
          "description": "neighbours returns the indices of the tiles in the grid which are adjacent to the tile with index",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "neighbours",
          "normalized": "a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eFalse\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eTrue\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "nonNull",
          "package": "grid",
          "signature": "g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#nonNull",
          "type": "method"
        },
        "index": {
          "description": "Returns False if the number of tiles in grid is zero True otherwise",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "nonNull",
          "normalized": "a-\u003eBool",
          "package": "grid",
          "partial": "Null",
          "signature": "g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:nonNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eFalse\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "null",
          "package": "grid",
          "signature": "g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#null",
          "type": "method"
        },
        "index": {
          "description": "Returns True if the number of tiles in grid is zero False otherwise",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "grid",
          "signature": "g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the dimensions of the grid.\n   For example, if \u003ccode\u003eg\u003c/code\u003e is a 4x3 rectangular grid, \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would\n   return \u003ccode\u003e(4, 3)\u003c/code\u003e, while \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileCount\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would return \u003ccode\u003e12\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "size",
          "package": "grid",
          "signature": "g -\u003e Size g",
          "source": "src/Math-Geometry-GridInternal.html#size",
          "type": "method"
        },
        "index": {
          "description": "Returns the dimensions of the grid For example if is x3 rectangular grid size would return while tileCount would return",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "size",
          "normalized": "a-\u003eSize a",
          "package": "grid",
          "signature": "g-\u003eSize g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of tiles in a grid. Compare with \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "tileCount",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#tileCount",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of tiles in grid Compare with size",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "tileCount",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Count",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:tileCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of sides a tile has\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "tileSideCount",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#tileSideCount",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of sides tile has",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "tileSideCount",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Side Count",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:tileSideCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eviewpoint\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns a list of pairs associating the index\n   of each tile in \u003ccode\u003eg\u003c/code\u003e with its distance to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n   If \u003ccode\u003ea\u003c/code\u003e is not contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.Grid",
          "name": "viewpoint",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [(Index g, Int)]",
          "source": "src/Math-Geometry-GridInternal.html#viewpoint",
          "type": "method"
        },
        "index": {
          "description": "viewpoint returns list of pairs associating the index of each tile in with its distance to the tile with index If is not contained within the result is undefined",
          "hierarchy": "Math Geometry Grid",
          "module": "Math.Geometry.Grid",
          "name": "viewpoint",
          "normalized": "a-\u003eIndex a-\u003e[(Index a,Int)]",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003e[(Index g,Int)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-Grid.html#v:viewpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eGrid\u003c/code\u003e internals. Most developers should\n use \u003ccode\u003eGrid\u003c/code\u003e instead. This module is subject to change without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "GridInternal",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private Grid internals Most developers should use Grid instead This module is subject to change without notice",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "GridInternal",
          "package": "grid",
          "partial": "Grid Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles with an edge.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileSideCount\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "BoundedGrid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#BoundedGrid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles with an edge Minimal complete definition tileSideCount",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "BoundedGrid",
          "package": "grid",
          "partial": "Bounded Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:BoundedGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles where the number of tiles is finite.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emaxPossibleDistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "FiniteGrid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#FiniteGrid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles where the number of tiles is finite Minimal complete definition size maxPossibleDistance",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "FiniteGrid",
          "package": "grid",
          "partial": "Finite Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:FiniteGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDirection\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eindices\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "Grid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#Grid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles Minimal complete definition Index Direction indices distance directionTo",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "Grid",
          "package": "grid",
          "partial": "Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles where the boundaries are joined.\n   Minimal complete definition: \u003ccode\u003e\u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003edenormalise\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "WrappedGrid",
          "package": "grid",
          "source": "src/Math-Geometry-GridInternal.html#WrappedGrid",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles where the boundaries are joined Minimal complete definition normalise and denormalise",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "WrappedGrid",
          "package": "grid",
          "partial": "Wrapped Grid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#t:WrappedGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "adjacentEdges",
          "package": "grid",
          "signature": "Index g -\u003e g -\u003e [(Index g, Index g)]",
          "source": "src/Math-Geometry-GridInternal.html#adjacentEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "adjacentEdges",
          "normalized": "Index a-\u003ea-\u003e[(Index a,Index a)]",
          "package": "grid",
          "partial": "Edges",
          "signature": "Index g-\u003eg-\u003e[(Index g,Index g)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:adjacentEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the indices of all tiles\n   which are neighbours of the tile at index \u003ccode\u003ea\u003c/code\u003e, and which are\n   closer to the tile at \u003ccode\u003eb\u003c/code\u003e than \u003ccode\u003ea\u003c/code\u003e is. In other words, it returns\n   the possible next steps on a minimal path from \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e. If \u003ccode\u003ea\u003c/code\u003e\n   or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, or if there is no path from\n   \u003ccode\u003ea\u003c/code\u003e to \u003ccode\u003eb\u003c/code\u003e (e.g., a disconnected grid), the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "adjacentTilesToward",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#adjacentTilesToward",
          "type": "method"
        },
        "index": {
          "description": "adjacentTilesToward returns the indices of all tiles which are neighbours of the tile at index and which are closer to the tile at than is In other words it returns the possible next steps on minimal path from to If or are not contained within or if there is no path from to e.g disconnected grid the result is undefined",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "adjacentTilesToward",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "partial": "Tiles Toward",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:adjacentTilesToward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a the indices of all the tiles at the boundary of a grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "boundary",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#boundary",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all the tiles at the boundary of grid",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "boundary",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianCentre",
          "package": "grid",
          "signature": "(Int, Int) -\u003e [(Int, Int)]",
          "source": "src/Math-Geometry-GridInternal.html#cartesianCentre",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianCentre",
          "normalized": "(Int,Int)-\u003e[(Int,Int)]",
          "package": "grid",
          "partial": "Centre",
          "signature": "(Int,Int)-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianIndices",
          "package": "grid",
          "signature": "(r, c) -\u003e [(c, r)]",
          "source": "src/Math-Geometry-GridInternal.html#cartesianIndices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianIndices",
          "normalized": "(a,b)-\u003e[(b,a)]",
          "package": "grid",
          "partial": "Indices",
          "signature": "(r,c)-\u003e[(c,r)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianMidpoints",
          "package": "grid",
          "signature": "Int -\u003e [Int]",
          "source": "src/Math-Geometry-GridInternal.html#cartesianMidpoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "cartesianMidpoints",
          "normalized": "Int-\u003e[Int]",
          "package": "grid",
          "partial": "Midpoints",
          "signature": "Int-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:cartesianMidpoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the index of the tile(s) that require the maximum number\n   of moves to reach the nearest boundary tile. A grid may have more\n   than one central tile (e.g., a rectangular grid with an even\n   number of rows and columns will have four central tiles).\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "centre",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#centre",
          "type": "method"
        },
        "index": {
          "description": "Returns the index of the tile that require the maximum number of moves to reach the nearest boundary tile grid may have more than one central tile e.g rectangular grid with an even number of rows and columns will have four central tiles",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "centre",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:centre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg `'contains'` a\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the index \u003ccode\u003ea\u003c/code\u003e is contained\n   within the grid \u003ccode\u003eg\u003c/code\u003e, otherwise it returns false.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "contains",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#contains",
          "type": "method"
        },
        "index": {
          "description": "contains returns True if the index is contained within the grid otherwise it returns false",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "contains",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultAdjacentTilesToward",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultAdjacentTilesToward",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultAdjacentTilesToward",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "partial": "Adjacent Tiles Toward",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultAdjacentTilesToward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultBoundary",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultBoundary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultBoundary",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "partial": "Boundary",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultCentre",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultCentre",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultCentre",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "partial": "Centre",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultEdges",
          "package": "grid",
          "signature": "g -\u003e [(Index g, Index g)]",
          "source": "src/Math-Geometry-GridInternal.html#defaultEdges",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultEdges",
          "normalized": "a-\u003e[(Index a,Index a)]",
          "package": "grid",
          "partial": "Edges",
          "signature": "g-\u003e[(Index g,Index g)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsAdjacent",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#defaultIsAdjacent",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsAdjacent",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Is Adjacent",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsBoundary",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#defaultIsBoundary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsBoundary",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Is Boundary",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsCentre",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#defaultIsCentre",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultIsCentre",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Is Centre",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultIsCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultMinDistance",
          "package": "grid",
          "signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#defaultMinDistance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultMinDistance",
          "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
          "package": "grid",
          "partial": "Min Distance",
          "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultMinDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultMinimalPaths",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
          "source": "src/Math-Geometry-GridInternal.html#defaultMinimalPaths",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultMinimalPaths",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
          "package": "grid",
          "partial": "Minimal Paths",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultMinimalPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighbour",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
          "source": "src/Math-Geometry-GridInternal.html#defaultNeighbour",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighbour",
          "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
          "package": "grid",
          "partial": "Neighbour",
          "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighbours",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultNeighbours",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighbours",
          "normalized": "a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "partial": "Neighbours",
          "signature": "g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighboursOfSet",
          "package": "grid",
          "signature": "g -\u003e [Index g] -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#defaultNeighboursOfSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultNeighboursOfSet",
          "normalized": "a-\u003e[Index a]-\u003e[Index a]",
          "package": "grid",
          "partial": "Neighbours Of Set",
          "signature": "g-\u003e[Index g]-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultNeighboursOfSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "defaultTileCount",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#defaultTileCount",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "defaultTileCount",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Tile Count",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:defaultTileCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edenormalise\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns all of the indices in \u003ccode\u003ea\u003c/code\u003e's\n   translation group. In other words, it returns \u003ccode\u003ea\u003c/code\u003e plus the\n   indices obtained by translating \u003ccode\u003ea\u003c/code\u003e in each direction by the\n   extent of the grid along that direction.\n   TODO: need a clearer description and an illustration.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "denormalise",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#denormalise",
          "type": "method"
        },
        "index": {
          "description": "denormalise returns all of the indices in translation group In other words it returns plus the indices obtained by translating in each direction by the extent of the grid along that direction TODO need clearer description and an illustration",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "denormalise",
          "normalized": "a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:denormalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edirectionTo\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the direction(s) of the next\n   tile(s) in a \u003cem\u003eminimal\u003c/em\u003e path from the tile at index \u003ccode\u003ea\u003c/code\u003e to the\n   tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "directionTo",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
          "source": "src/Math-Geometry-GridInternal.html#directionTo",
          "type": "method"
        },
        "index": {
          "description": "directionTo returns the direction of the next tile in minimal path from the tile at index to the tile at index in grid",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "directionTo",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[Direction a]",
          "package": "grid",
          "partial": "To",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[Direction g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "directionToBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
          "source": "src/Math-Geometry-GridInternal.html#directionToBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "directionToBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003e[Direction b]",
          "package": "grid",
          "partial": "To Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003e[Direction g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionToBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "directionToWrappedBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e [Direction g]",
          "source": "src/Math-Geometry-GridInternal.html#directionToWrappedBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "directionToWrappedBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003e[Direction b]",
          "package": "grid",
          "partial": "To Wrapped Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003e[Direction g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:directionToWrappedBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns the minimum number of moves required\n   to get from the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in\n   grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each step. (Two tiles\n   are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not\n   contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "distance",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#distance",
          "type": "method"
        },
        "index": {
          "description": "distance returns the minimum number of moves required to get from the tile at index to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "distance",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eInt",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "distanceBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#distanceBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "distanceBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003eInt",
          "package": "grid",
          "partial": "Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distanceBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "distanceWrappedBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#distanceWrappedBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "distanceWrappedBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003eIndex b-\u003eInt",
          "package": "grid",
          "partial": "Wrapped Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003eIndex g-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:distanceWrappedBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all edges in a grid, where the edges are represented by\n   a pair of indices of adjacent tiles.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "edges",
          "package": "grid",
          "signature": "g -\u003e [(Index g, Index g)]",
          "source": "src/Math-Geometry-GridInternal.html#edges",
          "type": "method"
        },
        "index": {
          "description": "list of all edges in grid where the edges are represented by pair of indices of adjacent tiles",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "edges",
          "normalized": "a-\u003e[(Index a,Index a)]",
          "package": "grid",
          "signature": "g-\u003e[(Index g,Index g)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the indices of all tiles in a grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "indices",
          "package": "grid",
          "signature": "g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#indices",
          "type": "method"
        },
        "index": {
          "description": "Returns the indices of all tiles in grid",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "indices",
          "normalized": "a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisAdjacent\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns \u003ccode\u003eTrue\u003c/code\u003e if the tile at index \u003ccode\u003ea\u003c/code\u003e is\n   adjacent to the tile at index \u003ccode\u003eb\u003c/code\u003e in \u003ccode\u003eg\u003c/code\u003e. (Two tiles are adjacent\n   if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within\n   \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "isAdjacent",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isAdjacent",
          "type": "method"
        },
        "index": {
          "description": "isAdjacent returns True if the tile at index is adjacent to the tile at index in Two tiles are adjacent if they share an edge If or are not contained within the result is undefined",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "isAdjacent",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Adjacent",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isAdjacent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisBoundary\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   on a boundary of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise. (Corner tiles are also\n   boundary tiles.)\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "isBoundary",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isBoundary",
          "type": "method"
        },
        "index": {
          "description": "isBoundary returns True if the tile with index is on boundary of False otherwise Corner tiles are also boundary tiles",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "isBoundary",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Boundary",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isBoundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eisCentre\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e' returns \u003ccode\u003eTrue\u003c/code\u003e if the tile with index \u003ccode\u003ea\u003c/code\u003e is\n   a centre tile of \u003ccode\u003eg\u003c/code\u003e, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "isCentre",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#isCentre",
          "type": "method"
        },
        "index": {
          "description": "isCentre returns True if the tile with index is centre tile of False otherwise",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "isCentre",
          "normalized": "a-\u003eIndex a-\u003eBool",
          "package": "grid",
          "partial": "Centre",
          "signature": "g-\u003eIndex g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:isCentre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the largest possible distance between two tiles in the\n   grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "maxPossibleDistance",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#maxPossibleDistance",
          "type": "method"
        },
        "index": {
          "description": "Returns the largest possible distance between two tiles in the grid",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "maxPossibleDistance",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Possible Distance",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:maxPossibleDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminDistance\u003c/a\u003e\u003c/code\u003e g bs a\u003c/code\u003e returns the minimum number of moves\n   required to get from any of the tiles at indices \u003ccode\u003ebs\u003c/code\u003e to the tile\n   at index \u003ccode\u003ea\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e, moving between adjacent tiles at each\n   step. (Two tiles are adjacent if they share an edge.) If \u003ccode\u003ea\u003c/code\u003e or\n   any of \u003ccode\u003ebs\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the result is\n   undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "minDistance",
          "package": "grid",
          "signature": "g -\u003e [Index g] -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#minDistance",
          "type": "method"
        },
        "index": {
          "description": "minDistance bs returns the minimum number of moves required to get from any of the tiles at indices bs to the tile at index in grid moving between adjacent tiles at each step Two tiles are adjacent if they share an edge If or any of bs are not contained within the result is undefined",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "minDistance",
          "normalized": "a-\u003e[Index a]-\u003eIndex a-\u003eInt",
          "package": "grid",
          "partial": "Distance",
          "signature": "g-\u003e[Index g]-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:minDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e g a b\u003c/code\u003e returns a list of all minimal paths from\n   the tile at index \u003ccode\u003ea\u003c/code\u003e to the tile at index \u003ccode\u003eb\u003c/code\u003e in grid \u003ccode\u003eg\u003c/code\u003e. A\n   path is a sequence of tiles where each tile in the sequence is\n   adjacent to the previous one. (Two tiles are adjacent if they\n   share an edge.) If \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e are not contained within \u003ccode\u003eg\u003c/code\u003e, the\n   result is undefined.\n\u003c/p\u003e\u003cp\u003eTip: The default implementation of this function calls\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. If you want to use a custom algorithm,\n   consider modifying \u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjacentTilesToward\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instead of\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eminimalPaths\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "minimalPaths",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g -\u003e [[Index g]]",
          "source": "src/Math-Geometry-GridInternal.html#minimalPaths",
          "type": "method"
        },
        "index": {
          "description": "minimalPaths returns list of all minimal paths from the tile at index to the tile at index in grid path is sequence of tiles where each tile in the sequence is adjacent to the previous one Two tiles are adjacent if they share an edge If or are not contained within the result is undefined Tip The default implementation of this function calls adjacentTilesToward If you want to use custom algorithm consider modifying adjacentTilesToward instead of minimalPaths",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "minimalPaths",
          "normalized": "a-\u003eIndex a-\u003eIndex a-\u003e[[Index a]]",
          "package": "grid",
          "partial": "Paths",
          "signature": "g-\u003eIndex g-\u003eIndex g-\u003e[[Index g]]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:minimalPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbour\u003c/a\u003e\u003c/code\u003e g d a\u003c/code\u003e returns the indices of the tile in the grid\n   \u003ccode\u003eg\u003c/code\u003e which is adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e, in the\n   direction \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "neighbour",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
          "source": "src/Math-Geometry-GridInternal.html#neighbour",
          "type": "method"
        },
        "index": {
          "description": "neighbour returns the indices of the tile in the grid which is adjacent to the tile with index in the direction",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighbour",
          "normalized": "a-\u003eIndex a-\u003eDirection a-\u003eMaybe(Index a)",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "neighbourWrappedBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e Direction g -\u003e Maybe (Index g)",
          "source": "src/Math-Geometry-GridInternal.html#neighbourWrappedBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighbourWrappedBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003eDirection b-\u003eMaybe(Index b)",
          "package": "grid",
          "partial": "Wrapped Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003eDirection g-\u003eMaybe(Index g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbourWrappedBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the indices of the tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "neighbours",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#neighbours",
          "type": "method"
        },
        "index": {
          "description": "neighbours returns the indices of the tiles in the grid which are adjacent to the tile with index",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighbours",
          "normalized": "a-\u003eIndex a-\u003e[Index a]",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#neighboursBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003e[Index b]",
          "package": "grid",
          "partial": "Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003e[Index g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eneighboursOfSet\u003c/a\u003e\u003c/code\u003e g as\u003c/code\u003e returns the indices of the tiles in the\n   grid \u003ccode\u003eg\u003c/code\u003e which are adjacent to any of the tiles with index in\n   \u003ccode\u003eas\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursOfSet",
          "package": "grid",
          "signature": "g -\u003e [Index g] -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#neighboursOfSet",
          "type": "method"
        },
        "index": {
          "description": "neighboursOfSet as returns the indices of the tiles in the grid which are adjacent to any of the tiles with index in as",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursOfSet",
          "normalized": "a-\u003e[Index a]-\u003e[Index a]",
          "package": "grid",
          "partial": "Of Set",
          "signature": "g-\u003e[Index g]-\u003e[Index g]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursOfSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursWrappedBasedOn",
          "package": "grid",
          "signature": "u -\u003e g -\u003e Index g -\u003e [Index g]",
          "source": "src/Math-Geometry-GridInternal.html#neighboursWrappedBasedOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "neighboursWrappedBasedOn",
          "normalized": "a-\u003eb-\u003eIndex b-\u003e[Index b]",
          "package": "grid",
          "partial": "Wrapped Based On",
          "signature": "u-\u003eg-\u003eIndex g-\u003e[Index g]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:neighboursWrappedBasedOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eFalse\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eTrue\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "nonNull",
          "package": "grid",
          "signature": "g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#nonNull",
          "type": "method"
        },
        "index": {
          "description": "Returns False if the number of tiles in grid is zero True otherwise",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "nonNull",
          "normalized": "a-\u003eBool",
          "package": "grid",
          "partial": "Null",
          "signature": "g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:nonNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enormalise\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the \u003ca\u003enormal\u003c/a\u003e indices for \u003ccode\u003ea\u003c/code\u003e.\n   TODO: need a clearer description and an illustration.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "normalise",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Index g",
          "source": "src/Math-Geometry-GridInternal.html#normalise",
          "type": "method"
        },
        "index": {
          "description": "normalise returns the normal indices for TODO need clearer description and an illustration",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "normalise",
          "normalized": "a-\u003eIndex a-\u003eIndex a",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003eIndex g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the number of tiles in a grid is zero, \u003ccode\u003eFalse\u003c/code\u003e\n   otherwise.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "null",
          "package": "grid",
          "signature": "g -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#null",
          "type": "method"
        },
        "index": {
          "description": "Returns True if the number of tiles in grid is zero False otherwise",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "null",
          "normalized": "a-\u003eBool",
          "package": "grid",
          "signature": "g-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enumNeighbours\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns the number of tiles in the grid\n   \u003ccode\u003eg\u003c/code\u003e which are adjacent to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "numNeighbours",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#numNeighbours",
          "type": "method"
        },
        "index": {
          "description": "numNeighbours returns the number of tiles in the grid which are adjacent to the tile with index",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "numNeighbours",
          "normalized": "a-\u003eIndex a-\u003eInt",
          "package": "grid",
          "partial": "Neighbours",
          "signature": "g-\u003eIndex g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:numNeighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Geometry.GridInternal",
          "name": "sameEdge",
          "package": "grid",
          "signature": "(t, t) -\u003e (t, t) -\u003e Bool",
          "source": "src/Math-Geometry-GridInternal.html#sameEdge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "sameEdge",
          "normalized": "(a,a)-\u003e(a,a)-\u003eBool",
          "package": "grid",
          "partial": "Edge",
          "signature": "(t,t)-\u003e(t,t)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:sameEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the dimensions of the grid.\n   For example, if \u003ccode\u003eg\u003c/code\u003e is a 4x3 rectangular grid, \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would\n   return \u003ccode\u003e(4, 3)\u003c/code\u003e, while \u003ccode\u003e\u003ccode\u003e\u003ca\u003etileCount\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e would return \u003ccode\u003e12\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "size",
          "package": "grid",
          "signature": "g -\u003e Size g",
          "source": "src/Math-Geometry-GridInternal.html#size",
          "type": "method"
        },
        "index": {
          "description": "Returns the dimensions of the grid For example if is x3 rectangular grid size would return while tileCount would return",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "size",
          "normalized": "a-\u003eSize a",
          "package": "grid",
          "signature": "g-\u003eSize g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of tiles in a grid. Compare with \u003ccode\u003e\u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "tileCount",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#tileCount",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of tiles in grid Compare with size",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "tileCount",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Count",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:tileCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of sides a tile has\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "tileSideCount",
          "package": "grid",
          "signature": "g -\u003e Int",
          "source": "src/Math-Geometry-GridInternal.html#tileSideCount",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of sides tile has",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "tileSideCount",
          "normalized": "a-\u003eInt",
          "package": "grid",
          "partial": "Side Count",
          "signature": "g-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:tileSideCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eviewpoint\u003c/a\u003e\u003c/code\u003e g a\u003c/code\u003e returns a list of pairs associating the index\n   of each tile in \u003ccode\u003eg\u003c/code\u003e with its distance to the tile with index \u003ccode\u003ea\u003c/code\u003e.\n   If \u003ccode\u003ea\u003c/code\u003e is not contained within \u003ccode\u003eg\u003c/code\u003e, the result is undefined.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridInternal",
          "name": "viewpoint",
          "package": "grid",
          "signature": "g -\u003e Index g -\u003e [(Index g, Int)]",
          "source": "src/Math-Geometry-GridInternal.html#viewpoint",
          "type": "method"
        },
        "index": {
          "description": "viewpoint returns list of pairs associating the index of each tile in with its distance to the tile with index If is not contained within the result is undefined",
          "hierarchy": "Math Geometry GridInternal",
          "module": "Math.Geometry.GridInternal",
          "name": "viewpoint",
          "normalized": "a-\u003eIndex a-\u003e[(Index a,Int)]",
          "package": "grid",
          "signature": "g-\u003eIndex g-\u003e[(Index g,Int)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridInternal.html#v:viewpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrdered maps from tiles on a grid to values.\n This module is a wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, in order to combine the functionality of grids and maps\n into a single type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "Lazy",
          "package": "grid",
          "source": "src/Math-Geometry-GridMap-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Ordered maps from tiles on grid to values This module is wrapper around Grid and Map in order to combine the functionality of grids and maps into single type",
          "hierarchy": "Math Geometry GridMap Lazy",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "Lazy",
          "package": "grid",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from tile positions in a grid to values.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "LGridMap",
          "package": "grid",
          "source": "src/Math-Geometry-GridMap-Lazy.html#LGridMap",
          "type": "data"
        },
        "index": {
          "description": "map from tile positions in grid to values",
          "hierarchy": "Math Geometry GridMap Lazy",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "LGridMap",
          "package": "grid",
          "partial": "LGrid Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#t:LGridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a grid map which is strict in the keys (tile positions), but\n   lazy in the values.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "lazyGridMap",
          "package": "grid",
          "signature": "g -\u003e [v] -\u003e LGridMap g v",
          "source": "src/Math-Geometry-GridMap-Lazy.html#lazyGridMap",
          "type": "function"
        },
        "index": {
          "description": "Construct grid map which is strict in the keys tile positions but lazy in the values",
          "hierarchy": "Math Geometry GridMap Lazy",
          "module": "Math.Geometry.GridMap.Lazy",
          "name": "lazyGridMap",
          "normalized": "a-\u003e[b]-\u003eLGridMap a b",
          "package": "grid",
          "partial": "Grid Map",
          "signature": "g-\u003e[v]-\u003eLGridMap g v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap-Lazy.html#v:lazyGridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOrdered maps from tiles on a grid to values.\n This module is a wrapper around \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, in order to combine the functionality of grids and maps\n into a single type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "GridMap",
          "package": "grid",
          "source": "src/Math-Geometry-GridMap.html",
          "type": "module"
        },
        "index": {
          "description": "Ordered maps from tiles on grid to values This module is wrapper around Grid and Map in order to combine the functionality of grids and maps into single type",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "GridMap",
          "package": "grid",
          "partial": "Grid Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regular arrangement of tiles, having a value associated with\n   each tile.\n   Minimal complete definition: \u003ccode\u003etoMap\u003c/code\u003e, \u003ccode\u003etoGrid\u003c/code\u003e, \u003ccode\u003eadjustWithKey\u003c/code\u003e,\n   \u003ccode\u003emapWithKey\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: Some of the methods have an \u003ccode\u003eOrd\u003c/code\u003e constraint on the grid \n   index. This is purely to make it easier to write implementations.\n   While tile positions can be ordered (e.g., \u003ccode\u003e(1,2) \u003c (2,1)\u003c/code\u003e), the\n   ordering may not be particularly meaningful. (Comparisons such as \n   \u003cem\u003eeast of\u003c/em\u003e or \u003cem\u003esouth of\u003c/em\u003e may be more sensible.) However, it is\n   convenient to write implementations of this class using\n   \u003ccode\u003eData.Map\u003c/code\u003e, with the grid indices as keys. Many of the functions\n   in \u003ccode\u003eData.Map\u003c/code\u003e impose the \u003ccode\u003eOrd\u003c/code\u003e constraint on map keys, so we'll\n   live with it. In summary, to use some methods in this class, your\n   grid indices must be orderable.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "GridMap",
          "package": "grid",
          "source": "src/Math-Geometry-GridMap.html#GridMap",
          "type": "class"
        },
        "index": {
          "description": "regular arrangement of tiles having value associated with each tile Minimal complete definition toMap toGrid adjustWithKey mapWithKey Note Some of the methods have an Ord constraint on the grid index This is purely to make it easier to write implementations While tile positions can be ordered e.g the ordering may not be particularly meaningful Comparisons such as east of or south of may be more sensible However it is convenient to write implementations of this class using Data.Map with the grid indices as keys Many of the functions in Data.Map impose the Ord constraint on map keys so we ll live with it In summary to use some methods in this class your grid indices must be orderable",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "GridMap",
          "package": "grid",
          "partial": "Grid Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#t:GridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the value at a tile position in the grid.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "(!)",
          "package": "grid",
          "signature": "gm v -\u003e k -\u003e v",
          "source": "src/Math-Geometry-GridMap.html#%21",
          "type": "method"
        },
        "index": {
          "description": "Find the value at tile position in the grid",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "(!) !",
          "normalized": "a b-\u003ec-\u003eb",
          "package": "grid",
          "signature": "gm v-\u003ek-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust a value at a specific tile position. When the tile is not\n   within the bounds of the grid map, the original grid map is\n   returned.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "adjust",
          "package": "grid",
          "signature": "(v -\u003e v) -\u003e k -\u003e gm v -\u003e gm v",
          "source": "src/Math-Geometry-GridMap.html#adjust",
          "type": "method"
        },
        "index": {
          "description": "Adjust value at specific tile position When the tile is not within the bounds of the grid map the original grid map is returned",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003ec a-\u003ec a",
          "package": "grid",
          "signature": "(v-\u003ev)-\u003ek-\u003egm v-\u003egm v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdjust a value at a specific tile position. When the tile is not\n   within the bounds of the grid map, the original grid map is\n   returned.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "adjustWithKey",
          "package": "grid",
          "signature": "(k -\u003e v -\u003e v) -\u003e k -\u003e gm v -\u003e gm v",
          "source": "src/Math-Geometry-GridMap.html#adjustWithKey",
          "type": "method"
        },
        "index": {
          "description": "Adjust value at specific tile position When the tile is not within the bounds of the grid map the original grid map is returned",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003ec b-\u003ec b",
          "package": "grid",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003ev)-\u003ek-\u003egm v-\u003egm v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all values in the map \n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "elems",
          "package": "grid",
          "signature": "gm v -\u003e [v]",
          "source": "src/Math-Geometry-GridMap.html#elems",
          "type": "method"
        },
        "index": {
          "description": "Returns all values in the map",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "elems",
          "normalized": "a b-\u003e[b]",
          "package": "grid",
          "signature": "gm v-\u003e[v]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns the value\n   at tile position \u003ccode\u003ek\u003c/code\u003e or returns \u003ccode\u003edef\u003c/code\u003e when the tile is not within\n   the bounds of the grid map.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "findWithDefault",
          "package": "grid",
          "signature": "v -\u003e k -\u003e gm v -\u003e v",
          "source": "src/Math-Geometry-GridMap.html#findWithDefault",
          "type": "method"
        },
        "index": {
          "description": "The expression findWithDefault def map returns the value at tile position or returns def when the tile is not within the bounds of the grid map",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003ec a-\u003ea",
          "package": "grid",
          "partial": "With Default",
          "signature": "v-\u003ek-\u003egm v-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given left-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e elems = reverse . foldl (flip (:)) []\n\u003c/pre\u003e\u003cpre\u003e let f len a = len + (length a)\n foldl f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "foldl",
          "package": "grid",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Map k b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map using the given left-associative binary operator such that foldl foldl elems For example elems reverse foldl flip let len len length foldl fromList bbb",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap c b-\u003ea",
          "package": "grid",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e. Each application of the operator is\n evaluated before using the result in the next application. This\n function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "foldl'",
          "package": "grid",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Map k b -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldl Each application of the operator is evaluated before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap c b-\u003ea",
          "package": "grid",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Fold the values in the map using the given right-associative\n binary operator, such that \u003ccode\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eelems\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e elems map = foldr (:) [] map\n\u003c/pre\u003e\u003cpre\u003e let f a len = len + (length a)\n foldr f 0 (fromList [(5,\"a\"), (3,\"bbb\")]) == 4\n\u003c/pre\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "foldr",
          "package": "grid",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "Fold the values in the map using the given right-associative binary operator such that foldr foldr elems For example elems map foldr map let len len length foldr fromList bbb",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
          "package": "grid",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. A strict version of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e. Each application of the operator is\n evaluated before using the result in the next application. This\n function is strict in the starting value.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "foldr'",
          "package": "grid",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Map k a -\u003e b",
          "type": "function"
        },
        "index": {
          "description": "strict version of foldr Each application of the operator is evaluated before using the result in the next application This function is strict in the starting value",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap c a-\u003eb",
          "package": "grid",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value at a tile position in the grid map.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "lookup",
          "package": "grid",
          "signature": "k -\u003e gm v -\u003e Maybe v",
          "source": "src/Math-Geometry-GridMap.html#lookup",
          "type": "method"
        },
        "index": {
          "description": "Lookup the value at tile position in the grid map",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "lookup",
          "normalized": "a-\u003eb c-\u003eMaybe c",
          "package": "grid",
          "signature": "k-\u003egm v-\u003eMaybe v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "map",
          "package": "grid",
          "signature": "(v -\u003e v2) -\u003e gm v -\u003e gm v2",
          "source": "src/Math-Geometry-GridMap.html#map",
          "type": "method"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "map",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "grid",
          "signature": "(v-\u003ev)-\u003egm v-\u003egm v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over all values in the map.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "mapWithKey",
          "package": "grid",
          "signature": "(k -\u003e v -\u003e v2) -\u003e gm v -\u003e gm v2",
          "source": "src/Math-Geometry-GridMap.html#mapWithKey",
          "type": "method"
        },
        "index": {
          "description": "Map function over all values in the map",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ec b-\u003ec b",
          "package": "grid",
          "partial": "With Key",
          "signature": "(k-\u003ev-\u003ev)-\u003egm v-\u003egm v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the grid on which this map is based.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "toGrid",
          "package": "grid",
          "signature": "gm v -\u003e BaseGrid gm v",
          "source": "src/Math-Geometry-GridMap.html#toGrid",
          "type": "method"
        },
        "index": {
          "description": "Returns the grid on which this map is based",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "toGrid",
          "normalized": "a b-\u003eBaseGrid a b",
          "package": "grid",
          "partial": "Grid",
          "signature": "gm v-\u003eBaseGrid gm v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the map to a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "toList",
          "package": "grid",
          "signature": "gm v -\u003e [(k, v)]",
          "source": "src/Math-Geometry-GridMap.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Convert the map to list of key value pairs",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "toList",
          "normalized": "a b-\u003e[(c,b)]",
          "package": "grid",
          "partial": "List",
          "signature": "gm v-\u003e[(k,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a map of grid indices to values.\n\u003c/p\u003e",
          "module": "Math.Geometry.GridMap",
          "name": "toMap",
          "package": "grid",
          "signature": "gm v -\u003e Map k v",
          "source": "src/Math-Geometry-GridMap.html#toMap",
          "type": "method"
        },
        "index": {
          "description": "Returns map of grid indices to values",
          "hierarchy": "Math Geometry GridMap",
          "module": "Math.Geometry.GridMap",
          "name": "toMap",
          "normalized": "a b-\u003eMap c b",
          "package": "grid",
          "partial": "Map",
          "signature": "gm v-\u003eMap k v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/grid/docs/Math-Geometry-GridMap.html#v:toMap"
      }
    }
  ]
]