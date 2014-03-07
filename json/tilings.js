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
        "word": "tilings"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubstitution tiling API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tiling.Class",
          "name": "Class",
          "package": "tilings",
          "source": "src/Data-Tiling-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Substitution tiling API",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "Class",
          "package": "tilings",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn axis-aligned rectangle with \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e coordinates.\n\u003c/p\u003e\u003cp\u003eInvariant:\n\u003c/p\u003e\u003cpre\u003e westEdge r \u003c= eastEdge r && southEdge r \u003c= northEdge r\n\u003c/pre\u003e\u003cp\u003eFor substitution tilings that contain irrational lengths and/or scale\n   factors, the intention is that the implementations of \u003ccode\u003e\u003ca\u003eexterior\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003einterior\u003c/a\u003e\u003c/code\u003e provide reasonably tight bounds, within a percent\n   or two, say, while the data type maintains full precision internally\n   (perhaps using algebraic field extensions over \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "Rectangle",
          "package": "tilings",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "data"
        },
        "index": {
          "description": "An axis-aligned rectangle with Rational coordinates Invariant westEdge eastEdge southEdge northEdge For substitution tilings that contain irrational lengths and or scale factors the intention is that the implementations of exterior and interior provide reasonably tight bounds within percent or two say while the data type maintains full precision internally perhaps using algebraic field extensions over Rational",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "Rectangle",
          "package": "tilings",
          "partial": "Rectangle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#t:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitution tilings.  Instances must obey the following laws:\n\u003c/p\u003e\u003cpre\u003e parent root == Nothing\n all (== Just t) . map parent . children $ t\n t `inside`   exterior t\n t `encloses` interior t\n interior t `insideR` exterior t\n t `inside` r  ==\u003e  t `overlaps` r\n t `encloses` r  ==\u003e  t `overlaps` r\n t `overlaps` r  ==\u003e not (t `outside` r)\n t `encloses` r && n \u003e= 0  ==\u003e  not $ any (`outside` r) (tile t r n)\n\u003c/pre\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003etile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "Tiling",
          "package": "tilings",
          "source": "src/Data-Tiling-Class.html#Tiling",
          "type": "class"
        },
        "index": {
          "description": "Substitution tilings Instances must obey the following laws parent root Nothing all Just map parent children inside exterior encloses interior interior insideR exterior inside overlaps encloses overlaps overlaps not outside encloses not any outside tile Minimal complete definition all except tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "Tiling",
          "package": "tilings",
          "partial": "Tiling",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#t:Tiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Class",
          "name": "Rectangle",
          "package": "tilings",
          "signature": "Rectangle",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "Rectangle",
          "package": "tilings",
          "partial": "Rectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:Rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smaller children of a tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "children",
          "package": "tilings",
          "signature": "t -\u003e [t]",
          "source": "src/Data-Tiling-Class.html#children",
          "type": "method"
        },
        "index": {
          "description": "The smaller children of tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "children",
          "normalized": "a-\u003e[a]",
          "package": "tilings",
          "signature": "t-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Class",
          "name": "eastEdge",
          "package": "tilings",
          "signature": "Rational",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "eastEdge",
          "package": "tilings",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:eastEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a rectangle is completely enclosed by the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "encloses",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#encloses",
          "type": "method"
        },
        "index": {
          "description": "Test if rectangle is completely enclosed by the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "encloses",
          "normalized": "a-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "t-\u003eRectangle-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:encloses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle that completely encloses the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "exterior",
          "package": "tilings",
          "signature": "t -\u003e Rectangle",
          "source": "src/Data-Tiling-Class.html#exterior",
          "type": "method"
        },
        "index": {
          "description": "rectangle that completely encloses the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "exterior",
          "normalized": "a-\u003eRectangle",
          "package": "tilings",
          "signature": "t-\u003eRectangle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:exterior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a rectangle completely encloses the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "inside",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#inside",
          "type": "method"
        },
        "index": {
          "description": "Test if rectangle completely encloses the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "inside",
          "normalized": "a-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "t-\u003eRectangle-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a rectangle is inside another rectangle.  The comparison\n   is not strict, so that a rectangle is inside itself.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "insideR",
          "package": "tilings",
          "signature": "Rectangle -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#insideR",
          "type": "function"
        },
        "index": {
          "description": "Check if rectangle is inside another rectangle The comparison is not strict so that rectangle is inside itself",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "insideR",
          "normalized": "Rectangle-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "Rectangle-\u003eRectangle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:insideR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle that is completely enclosed by the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "interior",
          "package": "tilings",
          "signature": "t -\u003e Rectangle",
          "source": "src/Data-Tiling-Class.html#interior",
          "type": "method"
        },
        "index": {
          "description": "rectangle that is completely enclosed by the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "interior",
          "normalized": "a-\u003eRectangle",
          "package": "tilings",
          "signature": "t-\u003eRectangle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:interior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Class",
          "name": "northEdge",
          "package": "tilings",
          "signature": "Rational",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "northEdge",
          "package": "tilings",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:northEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a rectangle is completely disjoint from the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "outside",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#outside",
          "type": "method"
        },
        "index": {
          "description": "Test if rectangle is completely disjoint from the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "outside",
          "normalized": "a-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "t-\u003eRectangle-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:outside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a rectangle is disjoint from another rectangle.  The comparison\n   is strict, so that neighbouring rectangles that share an edge will\n   not be outside each other.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "outsideR",
          "package": "tilings",
          "signature": "Rectangle -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#outsideR",
          "type": "function"
        },
        "index": {
          "description": "Check if rectangle is disjoint from another rectangle The comparison is strict so that neighbouring rectangles that share an edge will not be outside each other",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "outsideR",
          "normalized": "Rectangle-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "Rectangle-\u003eRectangle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:outsideR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a rectangle has any overlap with the tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "overlaps",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#overlaps",
          "type": "method"
        },
        "index": {
          "description": "Test if rectangle has any overlap with the tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "overlaps",
          "normalized": "a-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "t-\u003eRectangle-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a rectangle overlaps with another rectangle.  The comparison\n   is not strict, so that neighbouring rectangles that share an edge\n   will overlap each other.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "overlapsR",
          "package": "tilings",
          "signature": "Rectangle -\u003e Rectangle -\u003e Bool",
          "source": "src/Data-Tiling-Class.html#overlapsR",
          "type": "function"
        },
        "index": {
          "description": "Check if rectangle overlaps with another rectangle The comparison is not strict so that neighbouring rectangles that share an edge will overlap each other",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "overlapsR",
          "normalized": "Rectangle-\u003eRectangle-\u003eBool",
          "package": "tilings",
          "signature": "Rectangle-\u003eRectangle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:overlapsR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unique parent of a tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "parent",
          "package": "tilings",
          "signature": "t -\u003e Maybe t",
          "source": "src/Data-Tiling-Class.html#parent",
          "type": "method"
        },
        "index": {
          "description": "The unique parent of tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "parent",
          "normalized": "a-\u003eMaybe a",
          "package": "tilings",
          "signature": "t-\u003eMaybe t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:parent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a valid rectangle, sorting the edges to meet the invariant.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "rectangle",
          "package": "tilings",
          "signature": "Rational-\u003e Rational-\u003e Rational-\u003e Rational-\u003e Rectangle",
          "type": "function"
        },
        "index": {
          "description": "Create valid rectangle sorting the edges to meet the invariant",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "rectangle",
          "normalized": "Rational-\u003eRational-\u003eRational-\u003eRational-\u003eRectangle",
          "package": "tilings",
          "signature": "Rational-\u003eRational-\u003eRational-\u003eRational-\u003eRectangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe largest tile to start from.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "root",
          "package": "tilings",
          "signature": "t",
          "source": "src/Data-Tiling-Class.html#root",
          "type": "method"
        },
        "index": {
          "description": "The largest tile to start from",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "root",
          "package": "tilings",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Class",
          "name": "southEdge",
          "package": "tilings",
          "signature": "Rational",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "southEdge",
          "package": "tilings",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:southEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a tiling that completely fills the given rectangle.\n\u003c/p\u003e\u003cp\u003ePreconditions:\n\u003c/p\u003e\u003cpre\u003e t `encloses` r\n n \u003e= 0\n\u003c/pre\u003e",
          "module": "Data.Tiling.Class",
          "name": "tile",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Int -\u003e [t]",
          "source": "src/Data-Tiling-Class.html#tile",
          "type": "method"
        },
        "index": {
          "description": "Generate tiling that completely fills the given rectangle Preconditions encloses",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "tile",
          "normalized": "a-\u003eRectangle-\u003eInt-\u003e[a]",
          "package": "tilings",
          "signature": "t-\u003eRectangle-\u003eInt-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:tile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation for \u003ccode\u003e\u003ca\u003etile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tiling.Class",
          "name": "tileDefault",
          "package": "tilings",
          "signature": "t -\u003e Rectangle -\u003e Int -\u003e [t]",
          "source": "src/Data-Tiling-Class.html#tileDefault",
          "type": "function"
        },
        "index": {
          "description": "Default implementation for tile",
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "tileDefault",
          "normalized": "a-\u003eRectangle-\u003eInt-\u003e[a]",
          "package": "tilings",
          "partial": "Default",
          "signature": "t-\u003eRectangle-\u003eInt-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:tileDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Class",
          "name": "westEdge",
          "package": "tilings",
          "signature": "Rational",
          "source": "src/Data-Tiling-Class.html#Rectangle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Class",
          "module": "Data.Tiling.Class",
          "name": "westEdge",
          "package": "tilings",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:westEdge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple substitution tiling with each square divided into four quadrants\n(with no rotation).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "source": "src/Data-Tiling-Quad.html",
          "type": "module"
        },
        "index": {
          "description": "Simple substitution tiling with each square divided into four quadrants with no rotation",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "partial": "Quad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square tile.\n\u003c/p\u003e",
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "source": "src/Data-Tiling-Quad.html#Quad",
          "type": "data"
        },
        "index": {
          "description": "square tile",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "partial": "Quad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#t:Quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich quadrant.\n\u003c/p\u003e",
          "module": "Data.Tiling.Quad",
          "name": "Quadrant",
          "package": "tilings",
          "source": "src/Data-Tiling-Quad.html#Quadrant",
          "type": "data"
        },
        "index": {
          "description": "Which quadrant",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "Quadrant",
          "package": "tilings",
          "partial": "Quadrant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#t:Quadrant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "NorthEast",
          "package": "tilings",
          "signature": "NorthEast",
          "source": "src/Data-Tiling-Quad.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "NorthEast",
          "package": "tilings",
          "partial": "North East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:NorthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "NorthWest",
          "package": "tilings",
          "signature": "NorthWest",
          "source": "src/Data-Tiling-Quad.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "NorthWest",
          "package": "tilings",
          "partial": "North West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:NorthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "signature": "Quad",
          "source": "src/Data-Tiling-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "Quad",
          "package": "tilings",
          "partial": "Quad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:Quad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "SouthEast",
          "package": "tilings",
          "signature": "SouthEast",
          "source": "src/Data-Tiling-Quad.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "SouthEast",
          "package": "tilings",
          "partial": "South East",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:SouthEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "SouthWest",
          "package": "tilings",
          "signature": "SouthWest",
          "source": "src/Data-Tiling-Quad.html#Quadrant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "SouthWest",
          "package": "tilings",
          "partial": "South West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:SouthWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "isEast",
          "package": "tilings",
          "signature": "Quadrant -\u003e Bool",
          "source": "src/Data-Tiling-Quad.html#isEast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "isEast",
          "normalized": "Quadrant-\u003eBool",
          "package": "tilings",
          "partial": "East",
          "signature": "Quadrant-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isEast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "isNorth",
          "package": "tilings",
          "signature": "Quadrant -\u003e Bool",
          "source": "src/Data-Tiling-Quad.html#isNorth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "isNorth",
          "normalized": "Quadrant-\u003eBool",
          "package": "tilings",
          "partial": "North",
          "signature": "Quadrant-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isNorth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "isSouth",
          "package": "tilings",
          "signature": "Quadrant -\u003e Bool",
          "source": "src/Data-Tiling-Quad.html#isSouth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "isSouth",
          "normalized": "Quadrant-\u003eBool",
          "package": "tilings",
          "partial": "South",
          "signature": "Quadrant-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isSouth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "isWest",
          "package": "tilings",
          "signature": "Quadrant -\u003e Bool",
          "source": "src/Data-Tiling-Quad.html#isWest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "isWest",
          "normalized": "Quadrant-\u003eBool",
          "package": "tilings",
          "partial": "West",
          "signature": "Quadrant-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe child tile at a given quadrant.\n\u003c/p\u003e",
          "module": "Data.Tiling.Quad",
          "name": "quadChild",
          "package": "tilings",
          "signature": "Quadrant -\u003e Quad -\u003e Quad",
          "source": "src/Data-Tiling-Quad.html#quadChild",
          "type": "function"
        },
        "index": {
          "description": "The child tile at given quadrant",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadChild",
          "normalized": "Quadrant-\u003eQuad-\u003eQuad",
          "package": "tilings",
          "partial": "Child",
          "signature": "Quadrant-\u003eQuad-\u003eQuad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadChild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggested file system location for data pertaining to a \u003ccode\u003e\u003ca\u003eQuad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Tiling.Quad",
          "name": "quadFile",
          "package": "tilings",
          "signature": "Quad -\u003e Maybe ([FilePath], FilePath)",
          "source": "src/Data-Tiling-Quad.html#quadFile",
          "type": "function"
        },
        "index": {
          "description": "Suggested file system location for data pertaining to Quad",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadFile",
          "normalized": "Quad-\u003eMaybe([FilePath],FilePath)",
          "package": "tilings",
          "partial": "File",
          "signature": "Quad-\u003eMaybe([FilePath],FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "quadLevel",
          "package": "tilings",
          "signature": "Int",
          "source": "src/Data-Tiling-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadLevel",
          "package": "tilings",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "quadNorth",
          "package": "tilings",
          "signature": "Integer",
          "source": "src/Data-Tiling-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadNorth",
          "package": "tilings",
          "partial": "North",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadNorth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parent with quadrant information for the tile.  Satisfies:\n\u003c/p\u003e\u003cpre\u003e quadParent (quadChild c q) == Just (c, q)\n\u003c/pre\u003e",
          "module": "Data.Tiling.Quad",
          "name": "quadParent",
          "package": "tilings",
          "signature": "Quad -\u003e Maybe (Quadrant, Quad)",
          "source": "src/Data-Tiling-Quad.html#quadParent",
          "type": "function"
        },
        "index": {
          "description": "The parent with quadrant information for the tile Satisfies quadParent quadChild Just",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadParent",
          "normalized": "Quad-\u003eMaybe(Quadrant,Quad)",
          "package": "tilings",
          "partial": "Parent",
          "signature": "Quad-\u003eMaybe(Quadrant,Quad)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe path from this tile to the root.  Satisfies:\n\u003c/p\u003e\u003cpre\u003e foldr quadChild root (quadPath q) == q\n\u003c/pre\u003e",
          "module": "Data.Tiling.Quad",
          "name": "quadPath",
          "package": "tilings",
          "signature": "Quad -\u003e [Quadrant]",
          "source": "src/Data-Tiling-Quad.html#quadPath",
          "type": "function"
        },
        "index": {
          "description": "The path from this tile to the root Satisfies foldr quadChild root quadPath",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadPath",
          "normalized": "Quad-\u003e[Quadrant]",
          "package": "tilings",
          "partial": "Path",
          "signature": "Quad-\u003e[Quadrant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tiling.Quad",
          "name": "quadWest",
          "package": "tilings",
          "signature": "Integer",
          "source": "src/Data-Tiling-Quad.html#Quad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadWest",
          "package": "tilings",
          "partial": "West",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadWest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll quadrants.\n\u003c/p\u003e",
          "module": "Data.Tiling.Quad",
          "name": "quadrants",
          "package": "tilings",
          "signature": "[Quadrant]",
          "source": "src/Data-Tiling-Quad.html#quadrants",
          "type": "function"
        },
        "index": {
          "description": "All quadrants",
          "hierarchy": "Data Tiling Quad",
          "module": "Data.Tiling.Quad",
          "name": "quadrants",
          "normalized": "[Quadrant]",
          "package": "tilings",
          "signature": "[Quadrant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadrants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubstitution tilings.  The term substitution, in connection with tilings,\ndescribes a simple but powerful method to produce tilings with many\ninteresting properties.\n\u003c/p\u003e\u003cp\u003eThe main idea is to use a finite set of building blocks called prototiles,\nan expanding linear map (the inflation factor), and a rule how to dissect\neach scaled tile into copies of the original prototiles.\n\u003c/p\u003e\u003cp\u003eFor some examples of substitution tilings, and a glossary of terminology,\nsee the \u003cem\u003etilings encyclopedia\u003c/em\u003e\nat \u003ca\u003ehttp://tilings.math.uni-bielefeld.de/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Tiling",
          "name": "Tiling",
          "package": "tilings",
          "source": "src/Data-Tiling.html",
          "type": "module"
        },
        "index": {
          "description": "Substitution tilings The term substitution in connection with tilings describes simple but powerful method to produce tilings with many interesting properties The main idea is to use finite set of building blocks called prototiles an expanding linear map the inflation factor and rule how to dissect each scaled tile into copies of the original prototiles For some examples of substitution tilings and glossary of terminology see the tilings encyclopedia at http tilings.math.uni-bielefeld.de",
          "hierarchy": "Data Tiling",
          "module": "Data.Tiling",
          "name": "Tiling",
          "package": "tilings",
          "partial": "Tiling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling.html#"
      }
    }
  ]
]