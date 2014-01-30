[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubstitution tiling API.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "module",
        "fct-source": "src/Data-Tiling-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Substitution tiling API",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "Class",
        "normalized": "",
        "package": "tilings",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#t:Rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eAn axis-aligned rectangle with \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e coordinates.\n\u003c/p\u003e\u003cp\u003eInvariant:\n\u003c/p\u003e\u003cpre\u003e westEdge r \u003c= eastEdge r && southEdge r \u003c= northEdge r\n\u003c/pre\u003e\u003cp\u003eFor substitution tilings that contain irrational lengths and/or scale\n   factors, the intention is that the implementations of \u003ccode\u003e\u003ca\u003eexterior\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003einterior\u003c/a\u003e\u003c/code\u003e provide reasonably tight bounds, within a percent\n   or two, say, while the data type maintains full precision internally\n   (perhaps using algebraic field extensions over \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "data",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "data",
        "title": "Rectangle"
      },
      "index": {
        "description": "An axis-aligned rectangle with Rational coordinates Invariant westEdge eastEdge southEdge northEdge For substitution tilings that contain irrational lengths and or scale factors the intention is that the implementations of exterior and interior provide reasonably tight bounds within percent or two say while the data type maintains full precision internally perhaps using algebraic field extensions over Rational",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "Rectangle",
        "normalized": "",
        "package": "tilings",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#t:Tiling",
      "description": {
        "fct-descr": "\u003cp\u003eSubstitution tilings.  Instances must obey the following laws:\n\u003c/p\u003e\u003cpre\u003e parent root == Nothing\n all (== Just t) . map parent . children $ t\n t `inside`   exterior t\n t `encloses` interior t\n interior t `insideR` exterior t\n t `inside` r  ==\u003e  t `overlaps` r\n t `encloses` r  ==\u003e  t `overlaps` r\n t `overlaps` r  ==\u003e not (t `outside` r)\n t `encloses` r && n \u003e= 0  ==\u003e  not $ any (`outside` r) (tile t r n)\n\u003c/pre\u003e\u003cp\u003eMinimal complete definition: all except \u003ccode\u003e\u003ca\u003etile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "class",
        "fct-source": "src/Data-Tiling-Class.html#Tiling",
        "fct-type": "class",
        "title": "Tiling"
      },
      "index": {
        "description": "Substitution tilings Instances must obey the following laws parent root Nothing all Just map parent children inside exterior encloses interior interior insideR exterior inside overlaps encloses overlaps overlaps not outside encloses not any outside tile Minimal complete definition all except tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "Tiling",
        "normalized": "",
        "package": "tilings",
        "partial": "Tiling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:Rectangle",
      "description": {
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "Rectangle",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "function",
        "title": "Rectangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "Rectangle",
        "normalized": "",
        "package": "tilings",
        "partial": "Rectangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eThe smaller children of a tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e [t]",
        "fct-source": "src/Data-Tiling-Class.html#children",
        "fct-type": "method",
        "title": "children"
      },
      "index": {
        "description": "The smaller children of tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "children",
        "normalized": "a-\u003e[a]",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:eastEdge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "!Rational",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "function",
        "title": "eastEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "eastEdge",
        "normalized": "",
        "package": "tilings",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:encloses",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a rectangle is completely enclosed by the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#encloses",
        "fct-type": "method",
        "title": "encloses"
      },
      "index": {
        "description": "Test if rectangle is completely enclosed by the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "encloses",
        "normalized": "a-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:exterior",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangle that completely encloses the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle",
        "fct-source": "src/Data-Tiling-Class.html#exterior",
        "fct-type": "method",
        "title": "exterior"
      },
      "index": {
        "description": "rectangle that completely encloses the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "exterior",
        "normalized": "a-\u003eRectangle",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:inside",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a rectangle completely encloses the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#inside",
        "fct-type": "method",
        "title": "inside"
      },
      "index": {
        "description": "Test if rectangle completely encloses the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "inside",
        "normalized": "a-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:insideR",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a rectangle is inside another rectangle.  The comparison\n   is not strict, so that a rectangle is inside itself.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "Rectangle -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#insideR",
        "fct-type": "function",
        "title": "insideR"
      },
      "index": {
        "description": "Check if rectangle is inside another rectangle The comparison is not strict so that rectangle is inside itself",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "insideR",
        "normalized": "Rectangle-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "Rectangle-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:interior",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangle that is completely enclosed by the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle",
        "fct-source": "src/Data-Tiling-Class.html#interior",
        "fct-type": "method",
        "title": "interior"
      },
      "index": {
        "description": "rectangle that is completely enclosed by the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "interior",
        "normalized": "a-\u003eRectangle",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:northEdge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "!Rational",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "function",
        "title": "northEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "northEdge",
        "normalized": "",
        "package": "tilings",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:outside",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a rectangle is completely disjoint from the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#outside",
        "fct-type": "method",
        "title": "outside"
      },
      "index": {
        "description": "Test if rectangle is completely disjoint from the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "outside",
        "normalized": "a-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:outsideR",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a rectangle is disjoint from another rectangle.  The comparison\n   is strict, so that neighbouring rectangles that share an edge will\n   not be outside each other.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "Rectangle -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#outsideR",
        "fct-type": "function",
        "title": "outsideR"
      },
      "index": {
        "description": "Check if rectangle is disjoint from another rectangle The comparison is strict so that neighbouring rectangles that share an edge will not be outside each other",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "outsideR",
        "normalized": "Rectangle-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "Rectangle-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:overlaps",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a rectangle has any overlap with the tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#overlaps",
        "fct-type": "method",
        "title": "overlaps"
      },
      "index": {
        "description": "Test if rectangle has any overlap with the tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "overlaps",
        "normalized": "a-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:overlapsR",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if a rectangle overlaps with another rectangle.  The comparison\n   is not strict, so that neighbouring rectangles that share an edge\n   will overlap each other.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "Rectangle -\u003e Rectangle -\u003e Bool",
        "fct-source": "src/Data-Tiling-Class.html#overlapsR",
        "fct-type": "function",
        "title": "overlapsR"
      },
      "index": {
        "description": "Check if rectangle overlaps with another rectangle The comparison is not strict so that neighbouring rectangles that share an edge will overlap each other",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "overlapsR",
        "normalized": "Rectangle-\u003eRectangle-\u003eBool",
        "package": "tilings",
        "partial": "",
        "signature": "Rectangle-\u003eRectangle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:parent",
      "description": {
        "fct-descr": "\u003cp\u003eThe unique parent of a tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Maybe t",
        "fct-source": "src/Data-Tiling-Class.html#parent",
        "fct-type": "method",
        "title": "parent"
      },
      "index": {
        "description": "The unique parent of tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "parent",
        "normalized": "a-\u003eMaybe a",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eMaybe t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:rectangle",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a valid rectangle, sorting the edges to meet the invariant.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "Rational-\u003e Rational-\u003e Rational-\u003e Rational-\u003e Rectangle",
        "fct-type": "function",
        "title": "rectangle"
      },
      "index": {
        "description": "Create valid rectangle sorting the edges to meet the invariant",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "rectangle",
        "normalized": "Rational-\u003eRational-\u003eRational-\u003eRational-\u003eRectangle",
        "package": "tilings",
        "partial": "",
        "signature": "Rational-\u003eRational-\u003eRational-\u003eRational-\u003eRectangle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eThe largest tile to start from.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t",
        "fct-source": "src/Data-Tiling-Class.html#root",
        "fct-type": "method",
        "title": "root"
      },
      "index": {
        "description": "The largest tile to start from",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "root",
        "normalized": "",
        "package": "tilings",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:southEdge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "!Rational",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "function",
        "title": "southEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "southEdge",
        "normalized": "",
        "package": "tilings",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:tile",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a tiling that completely fills the given rectangle.\n\u003c/p\u003e\u003cp\u003ePreconditions:\n\u003c/p\u003e\u003cpre\u003e t `encloses` r\n n \u003e= 0\n\u003c/pre\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Int -\u003e [t]",
        "fct-source": "src/Data-Tiling-Class.html#tile",
        "fct-type": "method",
        "title": "tile"
      },
      "index": {
        "description": "Generate tiling that completely fills the given rectangle Preconditions encloses",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "tile",
        "normalized": "a-\u003eRectangle-\u003eInt-\u003e[a]",
        "package": "tilings",
        "partial": "",
        "signature": "t-\u003eRectangle-\u003eInt-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:tileDefault",
      "description": {
        "fct-descr": "\u003cp\u003eDefault implementation for \u003ccode\u003e\u003ca\u003etile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "t -\u003e Rectangle -\u003e Int -\u003e [t]",
        "fct-source": "src/Data-Tiling-Class.html#tileDefault",
        "fct-type": "function",
        "title": "tileDefault"
      },
      "index": {
        "description": "Default implementation for tile",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "tileDefault",
        "normalized": "a-\u003eRectangle-\u003eInt-\u003e[a]",
        "package": "tilings",
        "partial": "Default",
        "signature": "t-\u003eRectangle-\u003eInt-\u003e[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Class.html#v:westEdge",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Class",
        "fct-package": "tilings",
        "fct-signature": "!Rational",
        "fct-source": "src/Data-Tiling-Class.html#Rectangle",
        "fct-type": "function",
        "title": "westEdge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Class",
        "module": "Data.Tiling.Class",
        "name": "westEdge",
        "normalized": "",
        "package": "tilings",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple substitution tiling with each square divided into four quadrants\n(with no rotation).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "module",
        "fct-source": "src/Data-Tiling-Quad.html",
        "fct-type": "module",
        "title": "Quad"
      },
      "index": {
        "description": "Simple substitution tiling with each square divided into four quadrants with no rotation",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "Quad",
        "normalized": "",
        "package": "tilings",
        "partial": "Quad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#t:Quad",
      "description": {
        "fct-descr": "\u003cp\u003eA square tile.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "data",
        "fct-source": "src/Data-Tiling-Quad.html#Quad",
        "fct-type": "data",
        "title": "Quad"
      },
      "index": {
        "description": "square tile",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "Quad",
        "normalized": "",
        "package": "tilings",
        "partial": "Quad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#t:Quadrant",
      "description": {
        "fct-descr": "\u003cp\u003eWhich quadrant.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "data",
        "fct-source": "src/Data-Tiling-Quad.html#Quadrant",
        "fct-type": "data",
        "title": "Quadrant"
      },
      "index": {
        "description": "Which quadrant",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "Quadrant",
        "normalized": "",
        "package": "tilings",
        "partial": "Quadrant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:NorthEast",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "NorthEast",
        "fct-source": "src/Data-Tiling-Quad.html#Quadrant",
        "fct-type": "function",
        "title": "NorthEast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "NorthEast",
        "normalized": "",
        "package": "tilings",
        "partial": "North East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:NorthWest",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "NorthWest",
        "fct-source": "src/Data-Tiling-Quad.html#Quadrant",
        "fct-type": "function",
        "title": "NorthWest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "NorthWest",
        "normalized": "",
        "package": "tilings",
        "partial": "North West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:Quad",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quad",
        "fct-source": "src/Data-Tiling-Quad.html#Quad",
        "fct-type": "function",
        "title": "Quad"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "Quad",
        "normalized": "",
        "package": "tilings",
        "partial": "Quad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:SouthEast",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "SouthEast",
        "fct-source": "src/Data-Tiling-Quad.html#Quadrant",
        "fct-type": "function",
        "title": "SouthEast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "SouthEast",
        "normalized": "",
        "package": "tilings",
        "partial": "South East",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:SouthWest",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "SouthWest",
        "fct-source": "src/Data-Tiling-Quad.html#Quadrant",
        "fct-type": "function",
        "title": "SouthWest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "SouthWest",
        "normalized": "",
        "package": "tilings",
        "partial": "South West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isEast",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quadrant -\u003e Bool",
        "fct-source": "src/Data-Tiling-Quad.html#isEast",
        "fct-type": "function",
        "title": "isEast"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "isEast",
        "normalized": "Quadrant-\u003eBool",
        "package": "tilings",
        "partial": "East",
        "signature": "Quadrant-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isNorth",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quadrant -\u003e Bool",
        "fct-source": "src/Data-Tiling-Quad.html#isNorth",
        "fct-type": "function",
        "title": "isNorth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "isNorth",
        "normalized": "Quadrant-\u003eBool",
        "package": "tilings",
        "partial": "North",
        "signature": "Quadrant-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isSouth",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quadrant -\u003e Bool",
        "fct-source": "src/Data-Tiling-Quad.html#isSouth",
        "fct-type": "function",
        "title": "isSouth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "isSouth",
        "normalized": "Quadrant-\u003eBool",
        "package": "tilings",
        "partial": "South",
        "signature": "Quadrant-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:isWest",
      "description": {
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quadrant -\u003e Bool",
        "fct-source": "src/Data-Tiling-Quad.html#isWest",
        "fct-type": "function",
        "title": "isWest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "isWest",
        "normalized": "Quadrant-\u003eBool",
        "package": "tilings",
        "partial": "West",
        "signature": "Quadrant-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadChild",
      "description": {
        "fct-descr": "\u003cp\u003eThe child tile at a given quadrant.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quadrant -\u003e Quad -\u003e Quad",
        "fct-source": "src/Data-Tiling-Quad.html#quadChild",
        "fct-type": "function",
        "title": "quadChild"
      },
      "index": {
        "description": "The child tile at given quadrant",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadChild",
        "normalized": "Quadrant-\u003eQuad-\u003eQuad",
        "package": "tilings",
        "partial": "Child",
        "signature": "Quadrant-\u003eQuad-\u003eQuad"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadFile",
      "description": {
        "fct-descr": "\u003cp\u003eSuggested file system location for data pertaining to a \u003ccode\u003e\u003ca\u003eQuad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quad -\u003e Maybe ([FilePath], FilePath)",
        "fct-source": "src/Data-Tiling-Quad.html#quadFile",
        "fct-type": "function",
        "title": "quadFile"
      },
      "index": {
        "description": "Suggested file system location for data pertaining to Quad",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadFile",
        "normalized": "Quad-\u003eMaybe([FilePath],FilePath)",
        "package": "tilings",
        "partial": "File",
        "signature": "Quad-\u003eMaybe([FilePath],FilePath)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadLevel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Tiling-Quad.html#Quad",
        "fct-type": "function",
        "title": "quadLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadLevel",
        "normalized": "",
        "package": "tilings",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadNorth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "!Integer",
        "fct-source": "src/Data-Tiling-Quad.html#Quad",
        "fct-type": "function",
        "title": "quadNorth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadNorth",
        "normalized": "",
        "package": "tilings",
        "partial": "North",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadParent",
      "description": {
        "fct-descr": "\u003cp\u003eThe parent with quadrant information for the tile.  Satisfies:\n\u003c/p\u003e\u003cpre\u003e quadParent (quadChild c q) == Just (c, q)\n\u003c/pre\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quad -\u003e Maybe (Quadrant, Quad)",
        "fct-source": "src/Data-Tiling-Quad.html#quadParent",
        "fct-type": "function",
        "title": "quadParent"
      },
      "index": {
        "description": "The parent with quadrant information for the tile Satisfies quadParent quadChild Just",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadParent",
        "normalized": "Quad-\u003eMaybe(Quadrant,Quad)",
        "package": "tilings",
        "partial": "Parent",
        "signature": "Quad-\u003eMaybe(Quadrant,Quad)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadPath",
      "description": {
        "fct-descr": "\u003cp\u003eThe path from this tile to the root.  Satisfies:\n\u003c/p\u003e\u003cpre\u003e foldr quadChild root (quadPath q) == q\n\u003c/pre\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "Quad -\u003e [Quadrant]",
        "fct-source": "src/Data-Tiling-Quad.html#quadPath",
        "fct-type": "function",
        "title": "quadPath"
      },
      "index": {
        "description": "The path from this tile to the root Satisfies foldr quadChild root quadPath",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadPath",
        "normalized": "Quad-\u003e[Quadrant]",
        "package": "tilings",
        "partial": "Path",
        "signature": "Quad-\u003e[Quadrant]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadWest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "!Integer",
        "fct-source": "src/Data-Tiling-Quad.html#Quad",
        "fct-type": "function",
        "title": "quadWest"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadWest",
        "normalized": "",
        "package": "tilings",
        "partial": "West",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling-Quad.html#v:quadrants",
      "description": {
        "fct-descr": "\u003cp\u003eAll quadrants.\n\u003c/p\u003e",
        "fct-module": "Data.Tiling.Quad",
        "fct-package": "tilings",
        "fct-signature": "[Quadrant]",
        "fct-source": "src/Data-Tiling-Quad.html#quadrants",
        "fct-type": "function",
        "title": "quadrants"
      },
      "index": {
        "description": "All quadrants",
        "hierarchy": "Data Tiling Quad",
        "module": "Data.Tiling.Quad",
        "name": "quadrants",
        "normalized": "[Quadrant]",
        "package": "tilings",
        "partial": "",
        "signature": "[Quadrant]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tilings/docs/Data-Tiling.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSubstitution tilings.  The term substitution, in connection with tilings,\ndescribes a simple but powerful method to produce tilings with many\ninteresting properties.\n\u003c/p\u003e\u003cp\u003eThe main idea is to use a finite set of building blocks called prototiles,\nan expanding linear map (the inflation factor), and a rule how to dissect\neach scaled tile into copies of the original prototiles.\n\u003c/p\u003e\u003cp\u003eFor some examples of substitution tilings, and a glossary of terminology,\nsee the \u003cem\u003etilings encyclopedia\u003c/em\u003e\nat \u003ca\u003ehttp://tilings.math.uni-bielefeld.de/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tiling",
        "fct-package": "tilings",
        "fct-signature": "module",
        "fct-source": "src/Data-Tiling.html",
        "fct-type": "module",
        "title": "Tiling"
      },
      "index": {
        "description": "Substitution tilings The term substitution in connection with tilings describes simple but powerful method to produce tilings with many interesting properties The main idea is to use finite set of building blocks called prototiles an expanding linear map the inflation factor and rule how to dissect each scaled tile into copies of the original prototiles For some examples of substitution tilings and glossary of terminology see the tilings encyclopedia at http tilings.math.uni-bielefeld.de",
        "hierarchy": "Data Tiling",
        "module": "Data.Tiling",
        "name": "Tiling",
        "normalized": "",
        "package": "tilings",
        "partial": "Tiling",
        "signature": ""
      }
    }
  }
]