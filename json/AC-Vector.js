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
        "word": "AC-Vector"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e type (mainly for completeness).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "B1",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B1.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the BBox1 type mainly for completeness",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "B1",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e type is basically a \u003ccode\u003eRange\u003c/code\u003e, but all the operations over it work with \u003ccode\u003e\u003ca\u003eVector1\u003c/a\u003e\u003c/code\u003e (which is really \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e). While it's called a bounding \u003cem\u003ebox\u003c/em\u003e, a 1-dimensional box is in truth a simple line interval, just like \u003ccode\u003eRange\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "BBox1",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B1.html#BBox1",
          "type": "newtype"
        },
        "index": {
          "description": "The BBox1 type is basically Range but all the operations over it work with Vector1 which is really Scalar While it called bounding box dimensional box is in truth simple line interval just like Range",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "BBox1",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#t:BBox1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B1",
          "name": "BBox1",
          "package": "AC-Vector",
          "signature": "BBox1",
          "source": "src/Data-BoundingBox-B1.html#BBox1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "BBox1",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:BBox1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two vectors, construct a bounding box (swapping the endpoints if necessary).\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "bound_corners",
          "package": "AC-Vector",
          "signature": "Vector1 -\u003e Vector1 -\u003e BBox1",
          "source": "src/Data-BoundingBox-B1.html#bound_corners",
          "type": "function"
        },
        "index": {
          "description": "Given two vectors construct bounding box swapping the endpoints if necessary",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "bound_corners",
          "normalized": "Vector-\u003eVector-\u003eBBox",
          "package": "AC-Vector",
          "signature": "Vector-\u003eVector-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the bounds of a list of points. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "bound_points",
          "package": "AC-Vector",
          "signature": "[Vector1] -\u003e BBox1",
          "source": "src/Data-BoundingBox-B1.html#bound_points",
          "type": "function"
        },
        "index": {
          "description": "Find the bounds of list of points Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "bound_points",
          "normalized": "[Vector]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[Vector]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e values. If the boxes do not overlap, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise return a \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e containing only the points common to both argument boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "isect",
          "package": "AC-Vector",
          "signature": "BBox1 -\u003e BBox1 -\u003e Maybe BBox1",
          "source": "src/Data-BoundingBox-B1.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Take the intersection of two BBox1 values If the boxes do not overlap return Nothing Otherwise return BBox1 containing only the points common to both argument boxes",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "isect",
          "normalized": "BBox-\u003eBBox-\u003eMaybe BBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum endpoint for a \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "max_point",
          "package": "AC-Vector",
          "signature": "BBox1 -\u003e Vector1",
          "source": "src/Data-BoundingBox-B1.html#max_point",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum endpoint for BBox1",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "max_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum endpoint for a \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "min_point",
          "package": "AC-Vector",
          "signature": "BBox1 -\u003e Vector1",
          "source": "src/Data-BoundingBox-B1.html#min_point",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum endpoint for BBox1",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "min_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B1",
          "name": "range",
          "package": "AC-Vector",
          "signature": "Range",
          "source": "src/Data-BoundingBox-B1.html#BBox1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "range",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e values. The result is a new \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e that contains all the points the original boxes contained, plus any extra space between them.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "union",
          "package": "AC-Vector",
          "signature": "BBox1 -\u003e BBox1 -\u003e BBox1",
          "source": "src/Data-BoundingBox-B1.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take the union of two BBox1 values The result is new BBox1 that contains all the points the original boxes contained plus any extra space between them",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "union",
          "normalized": "BBox-\u003eBBox-\u003eBBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the union of a list of bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "unions",
          "package": "AC-Vector",
          "signature": "[BBox1] -\u003e BBox1",
          "source": "src/Data-BoundingBox-B1.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the union of list of bounding boxes",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "unions",
          "normalized": "[BBox]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[BBox]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a \u003ccode\u003e\u003ca\u003eVector1\u003c/a\u003e\u003c/code\u003e lies within a \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B1",
          "name": "within_bounds",
          "package": "AC-Vector",
          "signature": "Vector1 -\u003e BBox1 -\u003e Bool",
          "source": "src/Data-BoundingBox-B1.html#within_bounds",
          "type": "function"
        },
        "index": {
          "description": "Test whether Vector1 lies within BBox1",
          "hierarchy": "Data BoundingBox B1",
          "module": "Data.BoundingBox.B1",
          "name": "within_bounds",
          "normalized": "Vector-\u003eBBox-\u003eBool",
          "package": "AC-Vector",
          "signature": "Vector-\u003eBBox-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B1.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBBox2\u003c/a\u003e\u003c/code\u003e type for 2-dimensional bounding boxes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "B2",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B2.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the BBox2 type for dimensional bounding boxes",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "B2",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox2\u003c/a\u003e\u003c/code\u003e is a 2D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "BBox2",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "data"
        },
        "index": {
          "description": "BBox2 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "BBox2",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#t:BBox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B2",
          "name": "BBox2",
          "package": "AC-Vector",
          "signature": "BBox2",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "BBox2",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:BBox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of corner points, construct a bounding box. (The points must be from opposite corners, but it doesn't matter \u003cem\u003ewhich\u003c/em\u003e corners nor which order they are given in.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "bound_corners",
          "package": "AC-Vector",
          "signature": "Vector2 -\u003e Vector2 -\u003e BBox2",
          "source": "src/Data-BoundingBox-B2.html#bound_corners",
          "type": "function"
        },
        "index": {
          "description": "Given pair of corner points construct bounding box The points must be from opposite corners but it doesn matter which corners nor which order they are given in",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "bound_corners",
          "normalized": "Vector-\u003eVector-\u003eBBox",
          "package": "AC-Vector",
          "signature": "Vector-\u003eVector-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the bounds of a list of points. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "bound_points",
          "package": "AC-Vector",
          "signature": "[Vector2] -\u003e BBox2",
          "source": "src/Data-BoundingBox-B2.html#bound_points",
          "type": "function"
        },
        "index": {
          "description": "Find the bounds of list of points Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "bound_points",
          "normalized": "[Vector]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[Vector]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two bounding boxes. If the boxes do not overlap, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise return a new bounding box containing only the points common to both argument boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "isect",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e BBox2 -\u003e Maybe BBox2",
          "source": "src/Data-BoundingBox-B2.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Take the intersection of two bounding boxes If the boxes do not overlap return Nothing Otherwise return new bounding box containing only the points common to both argument boxes",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "isect",
          "normalized": "BBox-\u003eBBox-\u003eMaybe BBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B2",
          "name": "maxX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "maxX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:maxX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B2",
          "name": "maxY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "maxY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:maxY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum values for both coordinates. (In usual 2D space, the top-right corner point.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "max_point",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e Vector2",
          "source": "src/Data-BoundingBox-B2.html#max_point",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum values for both coordinates In usual space the top-right corner point",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "max_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B2",
          "name": "minX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "minX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:minX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B2",
          "name": "minY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B2.html#BBox2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "minY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:minY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum values for both coordinates. (In usual 2D space, the bottom-left corner point.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "min_point",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e Vector2",
          "source": "src/Data-BoundingBox-B2.html#min_point",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum values for both coordinates In usual space the bottom-left corner point",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "min_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the X-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "rangeX",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e Range",
          "source": "src/Data-BoundingBox-B2.html#rangeX",
          "type": "function"
        },
        "index": {
          "description": "Return the X-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "rangeX",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:rangeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven ranges for each coordinate axis, construct a bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "rangeXY",
          "package": "AC-Vector",
          "signature": "Range -\u003e Range -\u003e BBox2",
          "source": "src/Data-BoundingBox-B2.html#rangeXY",
          "type": "function"
        },
        "index": {
          "description": "Given ranges for each coordinate axis construct bounding box",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "rangeXY",
          "normalized": "Range-\u003eRange-\u003eBBox",
          "package": "AC-Vector",
          "partial": "XY",
          "signature": "Range-\u003eRange-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:rangeXY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Y-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "rangeY",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e Range",
          "source": "src/Data-BoundingBox-B2.html#rangeY",
          "type": "function"
        },
        "index": {
          "description": "Return the Y-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "rangeY",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:rangeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two bounding boxes. The result is a new bounding box that contains all the points the original boxes contained, plus any extra space between them.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "union",
          "package": "AC-Vector",
          "signature": "BBox2 -\u003e BBox2 -\u003e BBox2",
          "source": "src/Data-BoundingBox-B2.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take the union of two bounding boxes The result is new bounding box that contains all the points the original boxes contained plus any extra space between them",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "union",
          "normalized": "BBox-\u003eBBox-\u003eBBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the union of a list of bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "unions",
          "package": "AC-Vector",
          "signature": "[BBox2] -\u003e BBox2",
          "source": "src/Data-BoundingBox-B2.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the union of list of bounding boxes",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "unions",
          "normalized": "[BBox]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[BBox]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given 2D vector is inside this bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B2",
          "name": "within_bounds",
          "package": "AC-Vector",
          "signature": "Vector2 -\u003e BBox2 -\u003e Bool",
          "source": "src/Data-BoundingBox-B2.html#within_bounds",
          "type": "function"
        },
        "index": {
          "description": "Test whether given vector is inside this bounding box",
          "hierarchy": "Data BoundingBox B2",
          "module": "Data.BoundingBox.B2",
          "name": "within_bounds",
          "normalized": "Vector-\u003eBBox-\u003eBool",
          "package": "AC-Vector",
          "signature": "Vector-\u003eBBox-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B2.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBBox3\u003c/a\u003e\u003c/code\u003e type for 3-dimensional bounding boxes (\"bounding volumes\").\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "B3",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B3.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the BBox3 type for dimensional bounding boxes bounding volumes",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "B3",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox3\u003c/a\u003e\u003c/code\u003e is a 3D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "BBox3",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "data"
        },
        "index": {
          "description": "BBox3 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "BBox3",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#t:BBox3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "BBox3",
          "package": "AC-Vector",
          "signature": "BBox3",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "BBox3",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:BBox3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of corner points, construct a bounding box. (The points must be from opposite corners, but it doesn't matter \u003cem\u003ewhich\u003c/em\u003e corners nor which order they are given in.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "bound_corners",
          "package": "AC-Vector",
          "signature": "Vector3 -\u003e Vector3 -\u003e BBox3",
          "source": "src/Data-BoundingBox-B3.html#bound_corners",
          "type": "function"
        },
        "index": {
          "description": "Given pair of corner points construct bounding box The points must be from opposite corners but it doesn matter which corners nor which order they are given in",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "bound_corners",
          "normalized": "Vector-\u003eVector-\u003eBBox",
          "package": "AC-Vector",
          "signature": "Vector-\u003eVector-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the bounds of a list of points. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "bound_points",
          "package": "AC-Vector",
          "signature": "[Vector3] -\u003e BBox3",
          "source": "src/Data-BoundingBox-B3.html#bound_points",
          "type": "function"
        },
        "index": {
          "description": "Find the bounds of list of points Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "bound_points",
          "normalized": "[Vector]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[Vector]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two bounding boxes. If the boxes do not overlap, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise return a new bounding box containing only the points common to both argument boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "isect",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e BBox3 -\u003e Maybe BBox3",
          "source": "src/Data-BoundingBox-B3.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Take the intersection of two bounding boxes If the boxes do not overlap return Nothing Otherwise return new bounding box containing only the points common to both argument boxes",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "isect",
          "normalized": "BBox-\u003eBBox-\u003eMaybe BBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "maxX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "maxX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:maxX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "maxY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "maxY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:maxY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "maxZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "maxZ",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:maxZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "max_point",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e Vector3",
          "source": "src/Data-BoundingBox-B3.html#max_point",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum values for all coordinates",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "max_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "minX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "minX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:minX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "minY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "minY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:minY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B3",
          "name": "minZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B3.html#BBox3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "minZ",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:minZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "min_point",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e Vector3",
          "source": "src/Data-BoundingBox-B3.html#min_point",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum values for all coordinates",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "min_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the X-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "rangeX",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e Range",
          "source": "src/Data-BoundingBox-B3.html#rangeX",
          "type": "function"
        },
        "index": {
          "description": "Return the X-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "rangeX",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:rangeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven ranges for each coordinate axis, construct a bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "rangeXYZ",
          "package": "AC-Vector",
          "signature": "Range -\u003e Range -\u003e Range -\u003e BBox3",
          "source": "src/Data-BoundingBox-B3.html#rangeXYZ",
          "type": "function"
        },
        "index": {
          "description": "Given ranges for each coordinate axis construct bounding box",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "rangeXYZ",
          "normalized": "Range-\u003eRange-\u003eRange-\u003eBBox",
          "package": "AC-Vector",
          "partial": "XYZ",
          "signature": "Range-\u003eRange-\u003eRange-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:rangeXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Y-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "rangeY",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e Range",
          "source": "src/Data-BoundingBox-B3.html#rangeY",
          "type": "function"
        },
        "index": {
          "description": "Return the Y-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "rangeY",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:rangeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Z-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "rangeZ",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e Range",
          "source": "src/Data-BoundingBox-B3.html#rangeZ",
          "type": "function"
        },
        "index": {
          "description": "Return the Z-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "rangeZ",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:rangeZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two bounding boxes. The result is a new bounding box that contains all the points the original boxes contained, plus any extra space between them.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "union",
          "package": "AC-Vector",
          "signature": "BBox3 -\u003e BBox3 -\u003e BBox3",
          "source": "src/Data-BoundingBox-B3.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take the union of two bounding boxes The result is new bounding box that contains all the points the original boxes contained plus any extra space between them",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "union",
          "normalized": "BBox-\u003eBBox-\u003eBBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the union of a list of bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "unions",
          "package": "AC-Vector",
          "signature": "[BBox3] -\u003e BBox3",
          "source": "src/Data-BoundingBox-B3.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the union of list of bounding boxes",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "unions",
          "normalized": "[BBox]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[BBox]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given 3D vector is inside this bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B3",
          "name": "within_bounds",
          "package": "AC-Vector",
          "signature": "Vector3 -\u003e BBox3 -\u003e Bool",
          "source": "src/Data-BoundingBox-B3.html#within_bounds",
          "type": "function"
        },
        "index": {
          "description": "Test whether given vector is inside this bounding box",
          "hierarchy": "Data BoundingBox B3",
          "module": "Data.BoundingBox.B3",
          "name": "within_bounds",
          "normalized": "Vector-\u003eBBox-\u003eBool",
          "package": "AC-Vector",
          "signature": "Vector-\u003eBBox-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B3.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eBBox4\u003c/a\u003e\u003c/code\u003e type for 4-dimensional bounding boxes (bounding hyper-volumes).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "B4",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B4.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the BBox4 type for dimensional bounding boxes bounding hyper-volumes",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "B4",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox4\u003c/a\u003e\u003c/code\u003e is a 4D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "BBox4",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "data"
        },
        "index": {
          "description": "BBox4 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "BBox4",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#t:BBox4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "BBox4",
          "package": "AC-Vector",
          "signature": "BBox4",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "BBox4",
          "package": "AC-Vector",
          "partial": "BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:BBox4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pair of corner points, construct a bounding box. (The points must be from opposite corners, but it doesn't matter \u003cem\u003ewhich\u003c/em\u003e corners nor which order they are given in.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "bound_corners",
          "package": "AC-Vector",
          "signature": "Vector4 -\u003e Vector4 -\u003e BBox4",
          "source": "src/Data-BoundingBox-B4.html#bound_corners",
          "type": "function"
        },
        "index": {
          "description": "Given pair of corner points construct bounding box The points must be from opposite corners but it doesn matter which corners nor which order they are given in",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "bound_corners",
          "normalized": "Vector-\u003eVector-\u003eBBox",
          "package": "AC-Vector",
          "signature": "Vector-\u003eVector-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the bounds of a list of points. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "bound_points",
          "package": "AC-Vector",
          "signature": "[Vector4] -\u003e BBox4",
          "source": "src/Data-BoundingBox-B4.html#bound_points",
          "type": "function"
        },
        "index": {
          "description": "Find the bounds of list of points Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "bound_points",
          "normalized": "[Vector]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[Vector]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two bounding boxes. If the boxes do not overlap, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise return a new bounding box containing only the points common to both argument boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "isect",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e BBox4 -\u003e Maybe BBox4",
          "source": "src/Data-BoundingBox-B4.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Take the intersection of two bounding boxes If the boxes do not overlap return Nothing Otherwise return new bounding box containing only the points common to both argument boxes",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "isect",
          "normalized": "BBox-\u003eBBox-\u003eMaybe BBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eMaybe BBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "maxW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "maxW",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:maxW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "maxX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "maxX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:maxX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "maxY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "maxY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:maxY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "maxZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "maxZ",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:maxZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the maximum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "max_point",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Vector4",
          "source": "src/Data-BoundingBox-B4.html#max_point",
          "type": "function"
        },
        "index": {
          "description": "Return the maximum values for all coordinates",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "max_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "minW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "minW",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:minW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "minX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "minX",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:minX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "minY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "minY",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:minY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.B4",
          "name": "minZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-B4.html#BBox4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "minZ",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:minZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the minimum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "min_point",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Vector4",
          "source": "src/Data-BoundingBox-B4.html#min_point",
          "type": "function"
        },
        "index": {
          "description": "Return the minimum values for all coordinates",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "min_point",
          "normalized": "BBox-\u003eVector",
          "package": "AC-Vector",
          "signature": "BBox-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the W-range (4th coordinate) that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "rangeW",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Range",
          "source": "src/Data-BoundingBox-B4.html#rangeW",
          "type": "function"
        },
        "index": {
          "description": "Return the W-range th coordinate that this bounding box covers",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "rangeW",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:rangeW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the X-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "rangeX",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Range",
          "source": "src/Data-BoundingBox-B4.html#rangeX",
          "type": "function"
        },
        "index": {
          "description": "Return the X-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "rangeX",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:rangeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven ranges for each coordinate axis, construct a bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "rangeXYZW",
          "package": "AC-Vector",
          "signature": "Range -\u003e Range -\u003e Range -\u003e Range -\u003e BBox4",
          "source": "src/Data-BoundingBox-B4.html#rangeXYZW",
          "type": "function"
        },
        "index": {
          "description": "Given ranges for each coordinate axis construct bounding box",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "rangeXYZW",
          "normalized": "Range-\u003eRange-\u003eRange-\u003eRange-\u003eBBox",
          "package": "AC-Vector",
          "partial": "XYZW",
          "signature": "Range-\u003eRange-\u003eRange-\u003eRange-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:rangeXYZW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Y-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "rangeY",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Range",
          "source": "src/Data-BoundingBox-B4.html#rangeY",
          "type": "function"
        },
        "index": {
          "description": "Return the Y-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "rangeY",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:rangeY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the Z-range that this bounding box covers.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "rangeZ",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e Range",
          "source": "src/Data-BoundingBox-B4.html#rangeZ",
          "type": "function"
        },
        "index": {
          "description": "Return the Z-range that this bounding box covers",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "rangeZ",
          "normalized": "BBox-\u003eRange",
          "package": "AC-Vector",
          "signature": "BBox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:rangeZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two bounding boxes. The result is a new bounding box that contains all the points the original boxes contained, plus any extra space between them.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "union",
          "package": "AC-Vector",
          "signature": "BBox4 -\u003e BBox4 -\u003e BBox4",
          "source": "src/Data-BoundingBox-B4.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take the union of two bounding boxes The result is new bounding box that contains all the points the original boxes contained plus any extra space between them",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "union",
          "normalized": "BBox-\u003eBBox-\u003eBBox",
          "package": "AC-Vector",
          "signature": "BBox-\u003eBBox-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the union of a list of bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "unions",
          "package": "AC-Vector",
          "signature": "[BBox4] -\u003e BBox4",
          "source": "src/Data-BoundingBox-B4.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the union of list of bounding boxes",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "unions",
          "normalized": "[BBox]-\u003eBBox",
          "package": "AC-Vector",
          "signature": "[BBox]-\u003eBBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given 4D vector is inside this bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.B4",
          "name": "within_bounds",
          "package": "AC-Vector",
          "signature": "Vector4 -\u003e BBox4 -\u003e Bool",
          "source": "src/Data-BoundingBox-B4.html#within_bounds",
          "type": "function"
        },
        "index": {
          "description": "Test whether given vector is inside this bounding box",
          "hierarchy": "Data BoundingBox B4",
          "module": "Data.BoundingBox.B4",
          "name": "within_bounds",
          "normalized": "Vector-\u003eBBox-\u003eBool",
          "package": "AC-Vector",
          "signature": "Vector-\u003eBBox-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-B4.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e type and several functions for working with ranges.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-Range.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the Range type and several functions for working with ranges",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "partial": "Range",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e represents a continuous interval between two \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e endpoints.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "source": "src/Data-BoundingBox-Range.html#Range",
          "type": "data"
        },
        "index": {
          "description": "Range represents continuous interval between two Scalar endpoints",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "signature": "Range",
          "source": "src/Data-BoundingBox-Range.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "Range",
          "package": "AC-Vector",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003es, construct a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e (swapping the endpoints if necessary so that they are in the correct order.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "bound_corners",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e Scalar -\u003e Range",
          "source": "src/Data-BoundingBox-Range.html#bound_corners",
          "type": "function"
        },
        "index": {
          "description": "Given two Scalar construct Range swapping the endpoints if necessary so that they are in the correct order",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "bound_corners",
          "normalized": "Scalar-\u003eScalar-\u003eRange",
          "package": "AC-Vector",
          "signature": "Scalar-\u003eScalar-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the bounds of a list of points. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "bound_points",
          "package": "AC-Vector",
          "signature": "[Scalar] -\u003e Range",
          "source": "src/Data-BoundingBox-Range.html#bound_points",
          "type": "function"
        },
        "index": {
          "description": "Find the bounds of list of points Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "bound_points",
          "normalized": "[Scalar]-\u003eRange",
          "package": "AC-Vector",
          "signature": "[Scalar]-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two ranges. If the ranges do not overlap, the intersection is empty, and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned. (This is a good way to check whether two ranges overlap or not.) Otherwise a new \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e is returned that contains only the points common to both ranges.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "isect",
          "package": "AC-Vector",
          "signature": "Range -\u003e Range -\u003e Maybe Range",
          "source": "src/Data-BoundingBox-Range.html#isect",
          "type": "function"
        },
        "index": {
          "description": "Take the intersection of two ranges If the ranges do not overlap the intersection is empty and Nothing is returned This is good way to check whether two ranges overlap or not Otherwise new Range is returned that contains only the points common to both ranges",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "isect",
          "normalized": "Range-\u003eRange-\u003eMaybe Range",
          "package": "AC-Vector",
          "signature": "Range-\u003eRange-\u003eMaybe Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.Range",
          "name": "max_point",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-Range.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "max_point",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoundingBox.Range",
          "name": "min_point",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-BoundingBox-Range.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "min_point",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two ranges. The resulting \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e contains all points that the original ranges contained, plus any points between them (if the original ranges don't overlap).\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "union",
          "package": "AC-Vector",
          "signature": "Range -\u003e Range -\u003e Range",
          "source": "src/Data-BoundingBox-Range.html#union",
          "type": "function"
        },
        "index": {
          "description": "Take the union of two ranges The resulting Range contains all points that the original ranges contained plus any points between them if the original ranges don overlap",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "union",
          "normalized": "Range-\u003eRange-\u003eRange",
          "package": "AC-Vector",
          "signature": "Range-\u003eRange-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEfficiently compute the union of a list of ranges.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "unions",
          "package": "AC-Vector",
          "signature": "[Range] -\u003e Range",
          "source": "src/Data-BoundingBox-Range.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Efficiently compute the union of list of ranges",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "unions",
          "normalized": "[Range]-\u003eRange",
          "package": "AC-Vector",
          "signature": "[Range]-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e falls within a particular \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Range",
          "name": "within_bounds",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e Range -\u003e Bool",
          "source": "src/Data-BoundingBox-Range.html#within_bounds",
          "type": "function"
        },
        "index": {
          "description": "Test whether given Scalar falls within particular Range",
          "hierarchy": "Data BoundingBox Range",
          "module": "Data.BoundingBox.Range",
          "name": "within_bounds",
          "normalized": "Scalar-\u003eRange-\u003eBool",
          "package": "AC-Vector",
          "signature": "Scalar-\u003eRange-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-BoundingBox-Range.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral functions applicable to all vector types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Class",
          "name": "Class",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Class.html",
          "type": "module"
        },
        "index": {
          "description": "General functions applicable to all vector types",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "Class",
          "package": "AC-Vector",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll vector types belong to this class. Aside from \u003ccode\u003e\u003ca\u003evpack\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003evunpack\u003c/a\u003e\u003c/code\u003e, these methods aren't especially useful to end-users; they're used internally by the vector arithmetic implementations.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "BasicVector",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Class.html#BasicVector",
          "type": "class"
        },
        "index": {
          "description": "All vector types belong to this class Aside from vpack and vunpack these methods aren especially useful to end-users they re used internally by the vector arithmetic implementations",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "BasicVector",
          "package": "AC-Vector",
          "partial": "Basic Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#t:BasicVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of vector field values.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "Scalar",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Class.html#Scalar",
          "type": "type"
        },
        "index": {
          "description": "The type of vector field values",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "Scalar",
          "package": "AC-Vector",
          "partial": "Scalar",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#t:Scalar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDummy class that enables you to request a vector in a type signature without needing to explicitly list \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e as well.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "Vector",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Class.html#Vector",
          "type": "class"
        },
        "index": {
          "description": "Dummy class that enables you to request vector in type signature without needing to explicitly list Num or Fractional as well",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "Vector",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector (i.e., change its length but not its direction). This operator has the same precedence as the usual \u003ccode\u003e(*)\u003c/code\u003e operator.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e(*|)\u003c/code\u003e and \u003ccode\u003e(|*)\u003c/code\u003e operators are identical, but with their argument flipped. Just remember that the '\u003ccode\u003e|\u003c/code\u003e' denotes the scalar part.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "(|*)",
          "package": "AC-Vector",
          "signature": "v -\u003e Scalar -\u003e v",
          "source": "src/Data-Vector-Class.html#%7C%2A",
          "type": "function"
        },
        "index": {
          "description": "Scale vector i.e change its length but not its direction This operator has the same precedence as the usual operator The and operators are identical but with their argument flipped Just remember that the denotes the scalar part",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "(|*) |*",
          "normalized": "a-\u003eScalar-\u003ea",
          "package": "AC-Vector",
          "signature": "v-\u003eScalar-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:-124--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector (i.e., change its length but not its direction). This operator has the same precedence as the usual \u003ccode\u003e(/)\u003c/code\u003e operator.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e(\u003cem\u003e|)@ and @(|\u003c/em\u003e)\u003c/code\u003e operators are identical, but with their argument flipped. Just remember that the '\u003ccode\u003e|\u003c/code\u003e' denotes the scalar part.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "(|/)",
          "package": "AC-Vector",
          "signature": "v -\u003e Scalar -\u003e v",
          "source": "src/Data-Vector-Class.html#%7C%2F",
          "type": "function"
        },
        "index": {
          "description": "Scale vector i.e change its length but not its direction This operator has the same precedence as the usual operator The and operators are identical but with their argument flipped Just remember that the denotes the scalar part",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "(|/) |/",
          "normalized": "a-\u003eScalar-\u003ea",
          "package": "AC-Vector",
          "signature": "v-\u003eScalar-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:-124--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector (i.e., change its length but not its direction). This operator has the same precedence as the usual \u003ccode\u003e(*)\u003c/code\u003e operator.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e(*|)\u003c/code\u003e and \u003ccode\u003e(|*)\u003c/code\u003e operators are identical, but with their argument flipped. Just remember that the '\u003ccode\u003e|\u003c/code\u003e' denotes the scalar part.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "(*|)",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e v -\u003e v",
          "source": "src/Data-Vector-Class.html#%2A%7C",
          "type": "function"
        },
        "index": {
          "description": "Scale vector i.e change its length but not its direction This operator has the same precedence as the usual operator The and operators are identical but with their argument flipped Just remember that the denotes the scalar part",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "(*|) *|",
          "normalized": "Scalar-\u003ea-\u003ea",
          "package": "AC-Vector",
          "signature": "Scalar-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:-42--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale a vector (i.e., change its length but not its direction). This operator has the same precedence as the usual \u003ccode\u003e(/)\u003c/code\u003e operator.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e(\u003cem\u003e|)@ and @(|\u003c/em\u003e)\u003c/code\u003e operators are identical, but with their argument flipped. Just remember that the '\u003ccode\u003e|\u003c/code\u003e' denotes the scalar part.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "(/|)",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e v -\u003e v",
          "source": "src/Data-Vector-Class.html#%2F%7C",
          "type": "function"
        },
        "index": {
          "description": "Scale vector i.e change its length but not its direction This operator has the same precedence as the usual operator The and operators are identical but with their argument flipped Just remember that the denotes the scalar part",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "(/|) /|",
          "normalized": "Scalar-\u003ea-\u003ea",
          "package": "AC-Vector",
          "signature": "Scalar-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:-47--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the \u003cem\u003edot product\u003c/em\u003e of two vectors. This is a scalar equal to the cosine of the angle between the two vectors multiplied by the length of each vectors.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vdot",
          "package": "AC-Vector",
          "signature": "v -\u003e v -\u003e Scalar",
          "source": "src/Data-Vector-Class.html#vdot",
          "type": "function"
        },
        "index": {
          "description": "Take the dot product of two vectors This is scalar equal to the cosine of the angle between the two vectors multiplied by the length of each vectors",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vdot",
          "normalized": "a-\u003ea-\u003eScalar",
          "package": "AC-Vector",
          "signature": "v-\u003ev-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vdot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a vector down to a single value using the supplied binary operator. The ordering in which this happens isn't guaranteed, so the operator should probably be associative and commutative.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vfold",
          "package": "AC-Vector",
          "signature": "(Scalar -\u003e Scalar -\u003e Scalar) -\u003e v -\u003e Scalar",
          "source": "src/Data-Vector-Class.html#vfold",
          "type": "method"
        },
        "index": {
          "description": "Reduce vector down to single value using the supplied binary operator The ordering in which this happens isn guaranteed so the operator should probably be associative and commutative",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vfold",
          "normalized": "(Scalar-\u003eScalar-\u003eScalar)-\u003ea-\u003eScalar",
          "package": "AC-Vector",
          "signature": "(Scalar-\u003eScalar-\u003eScalar)-\u003ev-\u003eScalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinearly interpolate between two points in space.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003evlinear 0 a b = a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003evlinear 1 a b = b\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003evlinear 0.5 a b\u003c/code\u003e would give a point exactly half way between \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e in a straight line.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Vector.Class",
          "name": "vlinear",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e v -\u003e v -\u003e v",
          "source": "src/Data-Vector-Class.html#vlinear",
          "type": "function"
        },
        "index": {
          "description": "Linearly interpolate between two points in space vlinear vlinear vlinear would give point exactly half way between and in straight line",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vlinear",
          "normalized": "Scalar-\u003ea-\u003ea-\u003ea",
          "package": "AC-Vector",
          "signature": "Scalar-\u003ev-\u003ev-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vlinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the length or \u003cem\u003emagnitude\u003c/em\u003e of a vector. (Note that this involves a slow square root operation.)\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vmag",
          "package": "AC-Vector",
          "signature": "v -\u003e Scalar",
          "source": "src/Data-Vector-Class.html#vmag",
          "type": "function"
        },
        "index": {
          "description": "Return the length or magnitude of vector Note that this involves slow square root operation",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vmag",
          "normalized": "a-\u003eScalar",
          "package": "AC-Vector",
          "signature": "v-\u003eScalar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vmag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all vector fields.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vmap",
          "package": "AC-Vector",
          "signature": "(Scalar -\u003e Scalar) -\u003e v -\u003e v",
          "source": "src/Data-Vector-Class.html#vmap",
          "type": "method"
        },
        "index": {
          "description": "Apply function to all vector fields",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vmap",
          "normalized": "(Scalar-\u003eScalar)-\u003ea-\u003ea",
          "package": "AC-Vector",
          "signature": "(Scalar-\u003eScalar)-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a vector. In order words, return a new vector with the same direction, but a length of exactly one. (If the vector's length is zero or very near to zero, the vector is returned unchanged.)\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vnormalise",
          "package": "AC-Vector",
          "signature": "v -\u003e v",
          "source": "src/Data-Vector-Class.html#vnormalise",
          "type": "function"
        },
        "index": {
          "description": "Normalise vector In order words return new vector with the same direction but length of exactly one If the vector length is zero or very near to zero the vector is returned unchanged",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vnormalise",
          "normalized": "a-\u003ea",
          "package": "AC-Vector",
          "signature": "v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vnormalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a list of values into a vector. Extra values are ignored, too few values yields \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vpack",
          "package": "AC-Vector",
          "signature": "[Scalar] -\u003e Maybe v",
          "source": "src/Data-Vector-Class.html#vpack",
          "type": "method"
        },
        "index": {
          "description": "Pack list of values into vector Extra values are ignored too few values yields Nothing",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vpack",
          "normalized": "[Scalar]-\u003eMaybe a",
          "package": "AC-Vector",
          "signature": "[Scalar]-\u003eMaybe v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e to a vector (with all components the same).\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vpromote",
          "package": "AC-Vector",
          "signature": "Scalar -\u003e v",
          "source": "src/Data-Vector-Class.html#vpromote",
          "type": "method"
        },
        "index": {
          "description": "Convert Scalar to vector with all components the same",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vpromote",
          "normalized": "Scalar-\u003ea",
          "package": "AC-Vector",
          "signature": "Scalar-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vpromote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack a vector into a list of values. (Always succeeds.)\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vunpack",
          "package": "AC-Vector",
          "signature": "v -\u003e [Scalar]",
          "source": "src/Data-Vector-Class.html#vunpack",
          "type": "method"
        },
        "index": {
          "description": "Unpack vector into list of values Always succeeds",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vunpack",
          "normalized": "a-\u003e[Scalar]",
          "package": "AC-Vector",
          "signature": "v-\u003e[Scalar]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vunpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip two vectors together field-by-field using the supplied function (in the style of \u003ccode\u003eData.List.zipWith\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Class",
          "name": "vzip",
          "package": "AC-Vector",
          "signature": "(Scalar -\u003e Scalar -\u003e Scalar) -\u003e v -\u003e v -\u003e v",
          "source": "src/Data-Vector-Class.html#vzip",
          "type": "method"
        },
        "index": {
          "description": "Zip two vectors together field-by-field using the supplied function in the style of Data.List.zipWith",
          "hierarchy": "Data Vector Class",
          "module": "Data.Vector.Class",
          "name": "vzip",
          "normalized": "(Scalar-\u003eScalar-\u003eScalar)-\u003ea-\u003ea-\u003ea",
          "package": "AC-Vector",
          "signature": "(Scalar-\u003eScalar-\u003eScalar)-\u003ev-\u003ev-\u003ev",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Class.html#v:vzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e1-dimensional linear transformations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform.T1",
          "name": "T1",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T1.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional linear transformations",
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "T1",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 1D linear transformations. Essentially, this is applying a linear function to a number.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T1",
          "name": "Transform1",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T1.html#Transform1",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Essentially this is applying linear function to number Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "Transform1",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#t:Transform1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T1",
          "name": "Transform1",
          "package": "AC-Vector",
          "signature": "Transform1",
          "source": "src/Data-Vector-Transform-T1.html#Transform1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "Transform1",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#v:Transform1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T1",
          "name": "t1_1X",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T1.html#Transform1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "t1_1X",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#v:t1_1X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T1",
          "name": "t1_XX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T1.html#Transform1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "t1_XX",
          "package": "AC-Vector",
          "partial": "XX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#v:t1_XX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a 1D transformation to a 1D point, yielding a new 1D point.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T1",
          "name": "transformP1",
          "package": "AC-Vector",
          "signature": "Transform1 -\u003e Vector1 -\u003e Vector1",
          "source": "src/Data-Vector-Transform-T1.html#transformP1",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to point yielding new point",
          "hierarchy": "Data Vector Transform T1",
          "module": "Data.Vector.Transform.T1",
          "name": "transformP1",
          "normalized": "Transform-\u003eVector-\u003eVector",
          "package": "AC-Vector",
          "signature": "Transform-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T1.html#v:transformP1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2-dimensional linear transformations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform.T2",
          "name": "T2",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T2.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional linear transformations",
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "T2",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 2D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T2",
          "name": "Transform2",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "Transform2",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#t:Transform2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "Transform2",
          "package": "AC-Vector",
          "signature": "Transform2",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "Transform2",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:Transform2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_1X",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_1X",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_1X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_1Y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_1Y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_1Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_XX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_XX",
          "package": "AC-Vector",
          "partial": "XX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_XX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_XY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_XY",
          "package": "AC-Vector",
          "partial": "XY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_XY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_YX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_YX",
          "package": "AC-Vector",
          "partial": "YX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_YX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T2",
          "name": "t2_YY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T2.html#Transform2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "t2_YY",
          "package": "AC-Vector",
          "partial": "YY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:t2_YY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a 2D transformation to a 2D point, yielding a new 2D point.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T2",
          "name": "transformP2",
          "package": "AC-Vector",
          "signature": "Transform2 -\u003e Vector2 -\u003e Vector2",
          "source": "src/Data-Vector-Transform-T2.html#transformP2",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to point yielding new point",
          "hierarchy": "Data Vector Transform T2",
          "module": "Data.Vector.Transform.T2",
          "name": "transformP2",
          "normalized": "Transform-\u003eVector-\u003eVector",
          "package": "AC-Vector",
          "signature": "Transform-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T2.html#v:transformP2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e3-dimensional linear transformations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform.T3",
          "name": "T3",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T3.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional linear transformations",
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "T3",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 3D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T3",
          "name": "Transform3",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "Transform3",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#t:Transform3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "Transform3",
          "package": "AC-Vector",
          "signature": "Transform3",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "Transform3",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:Transform3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1X",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1X",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_1X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1Y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1Y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_1Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1Z",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_1Z",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_1Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XX",
          "package": "AC-Vector",
          "partial": "XX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_XX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XY",
          "package": "AC-Vector",
          "partial": "XY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_XY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_XZ",
          "package": "AC-Vector",
          "partial": "XZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_XZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YX",
          "package": "AC-Vector",
          "partial": "YX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_YX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YY",
          "package": "AC-Vector",
          "partial": "YY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_YY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_YZ",
          "package": "AC-Vector",
          "partial": "YZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_YZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZX",
          "package": "AC-Vector",
          "partial": "ZX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_ZX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZY",
          "package": "AC-Vector",
          "partial": "ZY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_ZY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T3.html#Transform3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "t3_ZZ",
          "package": "AC-Vector",
          "partial": "ZZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:t3_ZZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a 3D transformation to a 3D point, yielding a new 3D point.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T3",
          "name": "transformP3",
          "package": "AC-Vector",
          "signature": "Transform3 -\u003e Vector3 -\u003e Vector3",
          "source": "src/Data-Vector-Transform-T3.html#transformP3",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to point yielding new point",
          "hierarchy": "Data Vector Transform T3",
          "module": "Data.Vector.Transform.T3",
          "name": "transformP3",
          "normalized": "Transform-\u003eVector-\u003eVector",
          "package": "AC-Vector",
          "signature": "Transform-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T3.html#v:transformP3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e4-dimensional linear transformations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform.T4",
          "name": "T4",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T4.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional linear transformations",
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "T4",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 4D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T4",
          "name": "Transform4",
          "package": "AC-Vector",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "Transform4",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#t:Transform4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "Transform4",
          "package": "AC-Vector",
          "signature": "Transform4",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "Transform4",
          "package": "AC-Vector",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:Transform4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1W",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1W",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_1W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1X",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1X",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_1X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1Y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1Y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_1Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1Z",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_1Z",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_1Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WW",
          "package": "AC-Vector",
          "partial": "WW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_WW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WX",
          "package": "AC-Vector",
          "partial": "WX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_WX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WY",
          "package": "AC-Vector",
          "partial": "WY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_WY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_WZ",
          "package": "AC-Vector",
          "partial": "WZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_WZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XW",
          "package": "AC-Vector",
          "partial": "XW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_XW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XX",
          "package": "AC-Vector",
          "partial": "XX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_XX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XY",
          "package": "AC-Vector",
          "partial": "XY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_XY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_XZ",
          "package": "AC-Vector",
          "partial": "XZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_XZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YW",
          "package": "AC-Vector",
          "partial": "YW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_YW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YX",
          "package": "AC-Vector",
          "partial": "YX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_YX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YY",
          "package": "AC-Vector",
          "partial": "YY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_YY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_YZ",
          "package": "AC-Vector",
          "partial": "YZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_YZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZW",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZW",
          "package": "AC-Vector",
          "partial": "ZW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_ZW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZX",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZX",
          "package": "AC-Vector",
          "partial": "ZX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_ZX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZY",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZY",
          "package": "AC-Vector",
          "partial": "ZY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_ZY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZZ",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-Transform-T4.html#Transform4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "t4_ZZ",
          "package": "AC-Vector",
          "partial": "ZZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:t4_ZZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a 4D transformation to a 4D point, yielding a new 4D point.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.T4",
          "name": "transformP4",
          "package": "AC-Vector",
          "signature": "Transform4 -\u003e Vector4 -\u003e Vector4",
          "source": "src/Data-Vector-Transform-T4.html#transformP4",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation to point yielding new point",
          "hierarchy": "Data Vector Transform T4",
          "module": "Data.Vector.Transform.T4",
          "name": "transformP4",
          "normalized": "Transform-\u003eVector-\u003eVector",
          "package": "AC-Vector",
          "signature": "Transform-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-Transform-T4.html#v:transformP4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e1-dimensional vectors with vector arithmetic.\n\u003c/p\u003e\u003cp\u003eThis isn't especially useful. Usually if you want to calculate with scalars, you can just use the \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e type directly. However, this module provides a \u003ccode\u003e\u003ca\u003eVector1\u003c/a\u003e\u003c/code\u003e newtype over \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e that allows a scalar to be treated as a sort of vector, which is very occasionally useful.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.V1",
          "name": "V1",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V1.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional vectors with vector arithmetic This isn especially useful Usually if you want to calculate with scalars you can just use the Scalar type directly However this module provides Vector1 newtype over Scalar that allows scalar to be treated as sort of vector which is very occasionally useful",
          "hierarchy": "Data Vector V1",
          "module": "Data.Vector.V1",
          "name": "V1",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 1D vectors.\n\u003c/p\u003e\u003cp\u003eOwing to its particularly simple structure, this type has more class instances than 'propper' vectors have. Still, for the most part you'll probably want to just use \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e itself directly.\n\u003c/p\u003e",
          "module": "Data.Vector.V1",
          "name": "Vector1",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V1.html#Vector1",
          "type": "newtype"
        },
        "index": {
          "description": "The type of vectors Owing to its particularly simple structure this type has more class instances than propper vectors have Still for the most part you ll probably want to just use Scalar itself directly",
          "hierarchy": "Data Vector V1",
          "module": "Data.Vector.V1",
          "name": "Vector1",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V1.html#t:Vector1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V1",
          "name": "Vector1",
          "package": "AC-Vector",
          "signature": "Vector1",
          "source": "src/Data-Vector-V1.html#Vector1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V1",
          "module": "Data.Vector.V1",
          "name": "Vector1",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V1.html#v:Vector1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V1",
          "name": "v1x",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V1.html#Vector1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V1",
          "module": "Data.Vector.V1",
          "name": "v1x",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V1.html#v:v1x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e2-dimensional vectors with vector arithmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.V2",
          "name": "V2",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V2.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional vectors with vector arithmetic",
          "hierarchy": "Data Vector V2",
          "module": "Data.Vector.V2",
          "name": "V2",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V2",
          "name": "Vector2",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V2.html#Vector2",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector V2",
          "module": "Data.Vector.V2",
          "name": "Vector2",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V2.html#t:Vector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V2",
          "name": "Vector2",
          "package": "AC-Vector",
          "signature": "Vector2",
          "source": "src/Data-Vector-V2.html#Vector2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V2",
          "module": "Data.Vector.V2",
          "name": "Vector2",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V2.html#v:Vector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V2",
          "name": "v2x",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V2.html#Vector2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V2",
          "module": "Data.Vector.V2",
          "name": "v2x",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V2.html#v:v2x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V2",
          "name": "v2y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V2.html#Vector2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V2",
          "module": "Data.Vector.V2",
          "name": "v2y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V2.html#v:v2y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e3-dimensional vectors with vector arithmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.V3",
          "name": "V3",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V3.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional vectors with vector arithmetic",
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "V3",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V3",
          "name": "Vector3",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V3.html#Vector3",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "Vector3",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#t:Vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V3",
          "name": "Vector3",
          "package": "AC-Vector",
          "signature": "Vector3",
          "source": "src/Data-Vector-V3.html#Vector3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "Vector3",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#v:Vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V3",
          "name": "v3x",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V3.html#Vector3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "v3x",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#v:v3x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V3",
          "name": "v3y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V3.html#Vector3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "v3y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#v:v3y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V3",
          "name": "v3z",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V3.html#Vector3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "v3z",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#v:v3z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the \u003cem\u003ecross product\u003c/em\u003e of two 3D vectors. This produces a new 3D vector that is perpendicular to the plane of the first two vectors, and who's length is equal to the sine of the angle between those vectors multiplied by their lengths.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003ea `vcross` b = negate (b `vcross` a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Vector.V3",
          "name": "vcross",
          "package": "AC-Vector",
          "signature": "Vector3 -\u003e Vector3 -\u003e Vector3",
          "source": "src/Data-Vector-V3.html#vcross",
          "type": "function"
        },
        "index": {
          "description": "Take the cross product of two vectors This produces new vector that is perpendicular to the plane of the first two vectors and who length is equal to the sine of the angle between those vectors multiplied by their lengths Note that vcross negate vcross",
          "hierarchy": "Data Vector V3",
          "module": "Data.Vector.V3",
          "name": "vcross",
          "normalized": "Vector-\u003eVector-\u003eVector",
          "package": "AC-Vector",
          "signature": "Vector-\u003eVector-\u003eVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V3.html#v:vcross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e4-dimensional vectors with vector arithmetic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.V4",
          "name": "V4",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V4.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional vectors with vector arithmetic",
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "V4",
          "package": "AC-Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "Vector4",
          "package": "AC-Vector",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "Vector4",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#t:Vector4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "Vector4",
          "package": "AC-Vector",
          "signature": "Vector4",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "Vector4",
          "package": "AC-Vector",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#v:Vector4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "v4w",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "v4w",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#v:v4w"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "v4x",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "v4x",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#v:v4x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "v4y",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "v4y",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#v:v4y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.V4",
          "name": "v4z",
          "package": "AC-Vector",
          "signature": "Scalar",
          "source": "src/Data-Vector-V4.html#Vector4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector V4",
          "module": "Data.Vector.V4",
          "name": "v4z",
          "package": "AC-Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector/docs/Data-Vector-V4.html#v:v4z"
      }
    }
  ]
]