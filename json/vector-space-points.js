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
        "word": "vector-space-points"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type for \u003cem\u003epoints\u003c/em\u003e (as distinct from vectors), with an appropriate\n AffineSpace instance.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "Point",
          "package": "vector-space-points",
          "source": "src/Data-AffineSpace-Point.html",
          "type": "module"
        },
        "index": {
          "description": "type for points as distinct from vectors with an appropriate AffineSpace instance",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "Point",
          "package": "vector-space-points",
          "partial": "Point",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ePoint\u003c/code\u003e is a newtype wrapper around vectors used to represent\n   points, so we don't get them mixed up. The distinction between\n   vectors and points is important: translations affect points, but\n   leave vectors unchanged.  Points are instances of the\n   \u003ccode\u003e\u003ca\u003eAffineSpace\u003c/a\u003e\u003c/code\u003e class from \u003ca\u003eData.AffineSpace\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "Point",
          "package": "vector-space-points",
          "source": "src/Data-AffineSpace-Point.html#Point",
          "type": "newtype"
        },
        "index": {
          "description": "Point is newtype wrapper around vectors used to represent points so we don get them mixed up The distinction between vectors and points is important translations affect points but leave vectors unchanged Points are instances of the AffineSpace class from Data.AffineSpace",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "Point",
          "package": "vector-space-points",
          "partial": "Point",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#t:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a point by a scalar.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "(*.)",
          "package": "vector-space-points",
          "signature": "Scalar v -\u003e Point v -\u003e Point v",
          "source": "src/Data-AffineSpace-Point.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "Scale point by scalar",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "(*.) *.",
          "normalized": "Scalar a-\u003ePoint a-\u003ePoint a",
          "package": "vector-space-points",
          "signature": "Scalar v-\u003ePoint v-\u003ePoint v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.AffineSpace.Point",
          "name": "P",
          "package": "vector-space-points",
          "signature": "P v",
          "source": "src/Data-AffineSpace-Point.html#Point",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "P",
          "package": "vector-space-points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReflect a point through the \u003ccode\u003e\u003ca\u003eorigin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "mirror",
          "package": "vector-space-points",
          "signature": "Point v -\u003e Point v",
          "source": "src/Data-AffineSpace-Point.html#mirror",
          "type": "function"
        },
        "index": {
          "description": "Reflect point through the origin",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "mirror",
          "normalized": "Point a-\u003ePoint a",
          "package": "vector-space-points",
          "signature": "Point v-\u003ePoint v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin of the vector space \u003ccode\u003ev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "origin",
          "package": "vector-space-points",
          "signature": "Point v",
          "source": "src/Data-AffineSpace-Point.html#origin",
          "type": "function"
        },
        "index": {
          "description": "The origin of the vector space",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "origin",
          "package": "vector-space-points",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMirror a point through a given point.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "reflectThrough",
          "package": "vector-space-points",
          "signature": "p -\u003e p -\u003e p",
          "source": "src/Data-AffineSpace-Point.html#reflectThrough",
          "type": "function"
        },
        "index": {
          "description": "Mirror point through given point",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "reflectThrough",
          "normalized": "a-\u003ea-\u003ea",
          "package": "vector-space-points",
          "partial": "Through",
          "signature": "p-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:reflectThrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation relative to the given point.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "relative",
          "package": "vector-space-points",
          "signature": "p -\u003e (Diff p -\u003e Diff p) -\u003e p -\u003e p",
          "source": "src/Data-AffineSpace-Point.html#relative",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation relative to the given point",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "relative",
          "normalized": "a-\u003e(Diff a-\u003eDiff a)-\u003ea-\u003ea",
          "package": "vector-space-points",
          "signature": "p-\u003e(Diff p-\u003eDiff p)-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:relative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation relative to the given point.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "relative2",
          "package": "vector-space-points",
          "signature": "p -\u003e (Diff p -\u003e Diff p -\u003e Diff p) -\u003e p -\u003e p -\u003e p",
          "source": "src/Data-AffineSpace-Point.html#relative2",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation relative to the given point",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "relative2",
          "normalized": "a-\u003e(Diff a-\u003eDiff a-\u003eDiff a)-\u003ea-\u003ea-\u003ea",
          "package": "vector-space-points",
          "signature": "p-\u003e(Diff p-\u003eDiff p-\u003eDiff p)-\u003ep-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:relative2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation relative to the given point.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "relative3",
          "package": "vector-space-points",
          "signature": "p -\u003e (Diff p -\u003e Diff p -\u003e Diff p -\u003e Diff p) -\u003e p -\u003e p -\u003e p -\u003e p",
          "source": "src/Data-AffineSpace-Point.html#relative3",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation relative to the given point",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "relative3",
          "normalized": "a-\u003e(Diff a-\u003eDiff a-\u003eDiff a-\u003eDiff a)-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "vector-space-points",
          "signature": "p-\u003e(Diff p-\u003eDiff p-\u003eDiff p-\u003eDiff p)-\u003ep-\u003ep-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:relative3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a point \u003ccode\u003ep\u003c/code\u003e into the vector from the origin to \u003ccode\u003ep\u003c/code\u003e.  This\n   should be considered a \"semantically unsafe\" operation; think\n   carefully about whether and why you need to use it.  The\n   recommended way to do this conversion would be to write \u003ccode\u003e(p\n   \u003ccode\u003e\u003ca\u003e.-.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eorigin\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.AffineSpace.Point",
          "name": "unPoint",
          "package": "vector-space-points",
          "signature": "Point v -\u003e v",
          "source": "src/Data-AffineSpace-Point.html#unPoint",
          "type": "function"
        },
        "index": {
          "description": "Convert point into the vector from the origin to This should be considered semantically unsafe operation think carefully about whether and why you need to use it The recommended way to do this conversion would be to write origin",
          "hierarchy": "Data AffineSpace Point",
          "module": "Data.AffineSpace.Point",
          "name": "unPoint",
          "normalized": "Point a-\u003ea",
          "package": "vector-space-points",
          "partial": "Point",
          "signature": "Point v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-points/docs/Data-AffineSpace-Point.html#v:unPoint"
      }
    }
  ]
]