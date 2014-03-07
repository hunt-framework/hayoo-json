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
        "word": "AC-Vector-Fancy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for generically handling bounding boxes, and things that possess bounding boxes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-BoundingBox-Fancy.html",
          "type": "module"
        },
        "index": {
          "description": "Classes for generically handling bounding boxes and things that possess bounding boxes",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "partial": "Fancy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for dealing with bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "BoundingBox",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-BoundingBox-Fancy.html#BoundingBox",
          "type": "class"
        },
        "index": {
          "description": "Class for dealing with bounding boxes",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "BoundingBox",
          "package": "AC-Vector-Fancy",
          "partial": "Bounding Box",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#t:BoundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass representing things that possess a bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "HasBBox",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-BoundingBox-Fancy.html#HasBBox",
          "type": "class"
        },
        "index": {
          "description": "Class representing things that possess bounding box",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "HasBBox",
          "package": "AC-Vector-Fancy",
          "partial": "Has BBox",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#t:HasBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a \u003ccode\u003e\u003ca\u003eRange\u003c/a\u003e\u003c/code\u003e representing the extent of a bounding box on a specified coordinate axis.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "axis_range",
          "package": "AC-Vector-Fancy",
          "signature": "axis -\u003e bbox -\u003e Range",
          "source": "src/Data-BoundingBox-Fancy.html#axis_range",
          "type": "function"
        },
        "index": {
          "description": "Get Range representing the extent of bounding box on specified coordinate axis",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "axis_range",
          "normalized": "a-\u003eb-\u003eRange",
          "package": "AC-Vector-Fancy",
          "signature": "axis-\u003ebbox-\u003eRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:axis_range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven two corner points, construct a bounding box containing them both. (You can use any two points, given in any order, provided that they are from \u003cem\u003eopposite\u003c/em\u003e corners.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "bound_corners",
          "package": "AC-Vector-Fancy",
          "signature": "Point b -\u003e Point b -\u003e b",
          "source": "src/Data-BoundingBox-Fancy.html#bound_corners",
          "type": "method"
        },
        "index": {
          "description": "Given two corner points construct bounding box containing them both You can use any two points given in any order provided that they are from opposite corners",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "bound_corners",
          "normalized": "Point a-\u003ePoint a-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "Point b-\u003ePoint b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:bound_corners"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of points, construct a bounding box containing them all. (Throws an exception if the list is empty.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "bound_points",
          "package": "AC-Vector-Fancy",
          "signature": "[Point b] -\u003e b",
          "source": "src/Data-BoundingBox-Fancy.html#bound_points",
          "type": "method"
        },
        "index": {
          "description": "Given list of points construct bounding box containing them all Throws an exception if the list is empty",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "bound_points",
          "normalized": "[Point a]-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "[Point b]-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:bound_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an object's bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "get_bbox",
          "package": "AC-Vector-Fancy",
          "signature": "x -\u003e b",
          "source": "src/Data-BoundingBox-Fancy.html#get_bbox",
          "type": "method"
        },
        "index": {
          "description": "Get an object bounding box",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "get_bbox",
          "normalized": "a-\u003eb",
          "package": "AC-Vector-Fancy",
          "signature": "x-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:get_bbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the intersection of two bounding boxes. If the boxes do not overlap, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. Otherwise return a bounding box containing only the points common to both original bounding boxes.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "isect",
          "package": "AC-Vector-Fancy",
          "signature": "b -\u003e b -\u003e Maybe b",
          "source": "src/Data-BoundingBox-Fancy.html#isect",
          "type": "method"
        },
        "index": {
          "description": "Take the intersection of two bounding boxes If the boxes do not overlap return Nothing Otherwise return bounding box containing only the points common to both original bounding boxes",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "isect",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "AC-Vector-Fancy",
          "signature": "b-\u003eb-\u003eMaybe b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:isect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a point containing the maximum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "max_point",
          "package": "AC-Vector-Fancy",
          "signature": "b -\u003e Point b",
          "source": "src/Data-BoundingBox-Fancy.html#max_point",
          "type": "method"
        },
        "index": {
          "description": "Return point containing the maximum values for all coordinates",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "max_point",
          "normalized": "a-\u003ePoint a",
          "package": "AC-Vector-Fancy",
          "signature": "b-\u003ePoint b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:max_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a point containing the minimum values for all coordinates.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "min_point",
          "package": "AC-Vector-Fancy",
          "signature": "b -\u003e Point b",
          "source": "src/Data-BoundingBox-Fancy.html#min_point",
          "type": "method"
        },
        "index": {
          "description": "Return point containing the minimum values for all coordinates",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "min_point",
          "normalized": "a-\u003ePoint a",
          "package": "AC-Vector-Fancy",
          "signature": "b-\u003ePoint b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:min_point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of two bounding boxes. The result is a new bounding box that contains every point that the original pair of boxes contained, and probably some extra space as well.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "union",
          "package": "AC-Vector-Fancy",
          "signature": "b -\u003e b -\u003e b",
          "source": "src/Data-BoundingBox-Fancy.html#union",
          "type": "method"
        },
        "index": {
          "description": "Take the union of two bounding boxes The result is new bounding box that contains every point that the original pair of boxes contained and probably some extra space as well",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "b-\u003eb-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the union of a list of bounding boxes. (This is more efficient than \u003ccode\u003efoldr1 union\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "unions",
          "package": "AC-Vector-Fancy",
          "signature": "[b] -\u003e b",
          "source": "src/Data-BoundingBox-Fancy.html#unions",
          "type": "method"
        },
        "index": {
          "description": "Take the union of list of bounding boxes This is more efficient than foldr1 union",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "unions",
          "normalized": "[a]-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "[b]-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a given point lies within a given bounding box.\n\u003c/p\u003e",
          "module": "Data.BoundingBox.Fancy",
          "name": "within_bounds",
          "package": "AC-Vector-Fancy",
          "signature": "Point b -\u003e b -\u003e Bool",
          "source": "src/Data-BoundingBox-Fancy.html#within_bounds",
          "type": "method"
        },
        "index": {
          "description": "Test whether given point lies within given bounding box",
          "hierarchy": "Data BoundingBox Fancy",
          "module": "Data.BoundingBox.Fancy",
          "name": "within_bounds",
          "normalized": "Point a-\u003ea-\u003eBool",
          "package": "AC-Vector-Fancy",
          "signature": "Point b-\u003eb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox-Fancy.html#v:within_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvinience module providing all bounding box functionallity in one place.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.BoundingBox",
          "name": "BoundingBox",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-BoundingBox.html",
          "type": "module"
        },
        "index": {
          "description": "Convinience module providing all bounding box functionallity in one place",
          "hierarchy": "Data BoundingBox",
          "module": "Data.BoundingBox",
          "name": "BoundingBox",
          "package": "AC-Vector-Fancy",
          "partial": "Bounding Box",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBBox1\u003c/a\u003e\u003c/code\u003e type is basically a \u003ccode\u003eRange\u003c/code\u003e, but all the operations over it work with \u003ccode\u003e\u003ca\u003eVector1\u003c/a\u003e\u003c/code\u003e (which is really \u003ccode\u003e\u003ca\u003eScalar\u003c/a\u003e\u003c/code\u003e). While it's called a bounding \u003cem\u003ebox\u003c/em\u003e, a 1-dimensional box is in truth a simple line interval, just like \u003ccode\u003eRange\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoundingBox",
          "name": "BBox1",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "The BBox1 type is basically Range but all the operations over it work with Vector1 which is really Scalar While it called bounding box dimensional box is in truth simple line interval just like Range",
          "hierarchy": "Data BoundingBox",
          "module": "Data.BoundingBox",
          "name": "BBox1",
          "package": "AC-Vector-Fancy",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox.html#t:BBox1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox2\u003c/a\u003e\u003c/code\u003e is a 2D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox",
          "name": "BBox2",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "BBox2 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox",
          "module": "Data.BoundingBox",
          "name": "BBox2",
          "package": "AC-Vector-Fancy",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox.html#t:BBox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox3\u003c/a\u003e\u003c/code\u003e is a 3D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox",
          "name": "BBox3",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "BBox3 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox",
          "module": "Data.BoundingBox",
          "name": "BBox3",
          "package": "AC-Vector-Fancy",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox.html#t:BBox3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBBox4\u003c/a\u003e\u003c/code\u003e is a 4D bounding box (aligned to the coordinate axies).\n\u003c/p\u003e",
          "module": "Data.BoundingBox",
          "name": "BBox4",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "BBox4 is bounding box aligned to the coordinate axies",
          "hierarchy": "Data BoundingBox",
          "module": "Data.BoundingBox",
          "name": "BBox4",
          "package": "AC-Vector-Fancy",
          "partial": "BBox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-BoundingBox.html#t:BBox4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious facilities for dealing with vectors, vector spaces and coordinate axies generically.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html",
          "type": "module"
        },
        "index": {
          "description": "Various facilities for dealing with vectors vector spaces and coordinate axies generically",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "partial": "Fancy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe W-axis (fourth axis).\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "AxisW",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#AxisW",
          "type": "data"
        },
        "index": {
          "description": "The W-axis fourth axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisW",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:AxisW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe X-axis (first axis).\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "AxisX",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#AxisX",
          "type": "data"
        },
        "index": {
          "description": "The X-axis first axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisX",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:AxisX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Y-axis (second axis).\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "AxisY",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#AxisY",
          "type": "data"
        },
        "index": {
          "description": "The Y-axis second axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisY",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:AxisY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Z-axis (third axis).\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "AxisZ",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#AxisZ",
          "type": "data"
        },
        "index": {
          "description": "The Z-axis third axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisZ",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:AxisZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class deals with any type that has a spatial dimensionallity.\n  This includes coordinate transforms, bounding boxes, and so on.\n\u003c/p\u003e\u003cp\u003eNull instances are provided for all the vector types. (E.g.,\n  \u003ccode\u003ePoint Vector3 = Vector3\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "HasSpace",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#HasSpace",
          "type": "class"
        },
        "index": {
          "description": "This class deals with any type that has spatial dimensionallity This includes coordinate transforms bounding boxes and so on Null instances are provided for all the vector types E.g Point Vector3 Vector3",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "HasSpace",
          "package": "AC-Vector-Fancy",
          "partial": "Has Space",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:HasSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class enables you to take a vector with N dimensions and\n  project it into an N+1 dimensional space (and also take the inverse\n  projection to get back again).\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "Project",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#Project",
          "type": "class"
        },
        "index": {
          "description": "This class enables you to take vector with dimensions and project it into an dimensional space and also take the inverse projection to get back again",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "Project",
          "package": "AC-Vector-Fancy",
          "partial": "Project",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:Project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for generically reading/writing vector coordinates.\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "VectorAxis",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Fancy.html#VectorAxis",
          "type": "class"
        },
        "index": {
          "description": "Class for generically reading writing vector coordinates",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "VectorAxis",
          "package": "AC-Vector-Fancy",
          "partial": "Vector Axis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#t:VectorAxis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Fancy",
          "name": "AxisW",
          "package": "AC-Vector-Fancy",
          "signature": "AxisW",
          "source": "src/Data-Vector-Fancy.html#AxisW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisW",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:AxisW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Fancy",
          "name": "AxisX",
          "package": "AC-Vector-Fancy",
          "signature": "AxisX",
          "source": "src/Data-Vector-Fancy.html#AxisX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisX",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:AxisX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Fancy",
          "name": "AxisY",
          "package": "AC-Vector-Fancy",
          "signature": "AxisY",
          "source": "src/Data-Vector-Fancy.html#AxisY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisY",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:AxisY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Vector.Fancy",
          "name": "AxisZ",
          "package": "AC-Vector-Fancy",
          "signature": "AxisZ",
          "source": "src/Data-Vector-Fancy.html#AxisZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "AxisZ",
          "package": "AC-Vector-Fancy",
          "partial": "Axis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:AxisZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead from the specified coordinate axis.\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "get_coord",
          "package": "AC-Vector-Fancy",
          "signature": "axis -\u003e vector -\u003e Scalar",
          "source": "src/Data-Vector-Fancy.html#get_coord",
          "type": "method"
        },
        "index": {
          "description": "Read from the specified coordinate axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "get_coord",
          "normalized": "a-\u003eb-\u003eScalar",
          "package": "AC-Vector-Fancy",
          "signature": "axis-\u003evector-\u003eScalar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:get_coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce number of dimensions by one. (Return the dropped dimension as a \u003ccode\u003eScalar\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "orthographic_down",
          "package": "AC-Vector-Fancy",
          "signature": "ProjectTo v -\u003e (v, Scalar)",
          "source": "src/Data-Vector-Fancy.html#orthographic_down",
          "type": "method"
        },
        "index": {
          "description": "Reduce number of dimensions by one Return the dropped dimension as Scalar",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "orthographic_down",
          "normalized": "ProjectTo a-\u003e(a,Scalar)",
          "package": "AC-Vector-Fancy",
          "signature": "ProjectTo v-\u003e(v,Scalar)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:orthographic_down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease number of dimensions by one. (Supply value for new dimension as a \u003ccode\u003eScalar\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "orthographic_up",
          "package": "AC-Vector-Fancy",
          "signature": "(v, Scalar) -\u003e ProjectTo v",
          "source": "src/Data-Vector-Fancy.html#orthographic_up",
          "type": "method"
        },
        "index": {
          "description": "Increase number of dimensions by one Supply value for new dimension as Scalar",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "orthographic_up",
          "normalized": "(a,Scalar)-\u003eProjectTo a",
          "package": "AC-Vector-Fancy",
          "signature": "(v,Scalar)-\u003eProjectTo v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:orthographic_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerspective-project to N-1 dimensions. (Also return the distance from the camera as a \u003ccode\u003eScalar\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "perspective_down",
          "package": "AC-Vector-Fancy",
          "signature": "ProjectTo v -\u003e (v, Scalar)",
          "source": "src/Data-Vector-Fancy.html#perspective_down",
          "type": "method"
        },
        "index": {
          "description": "Perspective-project to N-1 dimensions Also return the distance from the camera as Scalar",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "perspective_down",
          "normalized": "ProjectTo a-\u003e(a,Scalar)",
          "package": "AC-Vector-Fancy",
          "signature": "ProjectTo v-\u003e(v,Scalar)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:perspective_down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse-perspective project into N+1 dimension. (Supply the distance from the camera as a \u003ccode\u003eScalar\u003c/code\u003e.)\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "perspective_up",
          "package": "AC-Vector-Fancy",
          "signature": "(v, Scalar) -\u003e ProjectTo v",
          "source": "src/Data-Vector-Fancy.html#perspective_up",
          "type": "method"
        },
        "index": {
          "description": "Inverse-perspective project into dimension Supply the distance from the camera as Scalar",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "perspective_up",
          "normalized": "(a,Scalar)-\u003eProjectTo a",
          "package": "AC-Vector-Fancy",
          "signature": "(v,Scalar)-\u003eProjectTo v",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:perspective_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace the existing value of the given coordinate axis.\n\u003c/p\u003e",
          "module": "Data.Vector.Fancy",
          "name": "set_coord",
          "package": "AC-Vector-Fancy",
          "signature": "axis -\u003e Scalar -\u003e vector -\u003e vector",
          "source": "src/Data-Vector-Fancy.html#set_coord",
          "type": "method"
        },
        "index": {
          "description": "Replace the existing value of the given coordinate axis",
          "hierarchy": "Data Vector Fancy",
          "module": "Data.Vector.Fancy",
          "name": "set_coord",
          "normalized": "a-\u003eScalar-\u003eb-\u003eb",
          "package": "AC-Vector-Fancy",
          "signature": "axis-\u003eScalar-\u003evector-\u003evector",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Fancy.html#v:set_coord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerically handle transforms, and things that are transformable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Transform-Fancy.html",
          "type": "module"
        },
        "index": {
          "description": "Generically handle transforms and things that are transformable",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Fancy",
          "package": "AC-Vector-Fancy",
          "partial": "Fancy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for performing rotationes. (The rotations that exist vary with the number of spatial dimensions available.)\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Rotate",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Transform-Fancy.html#Rotate",
          "type": "class"
        },
        "index": {
          "description": "Class for performing rotationes The rotations that exist vary with the number of spatial dimensions available",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Rotate",
          "package": "AC-Vector-Fancy",
          "partial": "Rotate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#t:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for transforms.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Transform",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Transform-Fancy.html#Transform",
          "type": "class"
        },
        "index": {
          "description": "Class for transforms",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Transform",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for things that can be transformed. Includes instances for all the vector types.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Transformable",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Transform-Fancy.html#Transformable",
          "type": "class"
        },
        "index": {
          "description": "Class for things that can be transformed Includes instances for all the vector types",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "Transformable",
          "package": "AC-Vector-Fancy",
          "partial": "Transformable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#t:Transformable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild transform: rotate in the plane defined by the two axies.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "rotateT",
          "package": "AC-Vector-Fancy",
          "signature": "axis1 -\u003e axis2 -\u003e a Scalar -\u003e t",
          "source": "src/Data-Vector-Transform-Fancy.html#rotateT",
          "type": "method"
        },
        "index": {
          "description": "Build transform rotate in the plane defined by the two axies",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "rotateT",
          "normalized": "a-\u003ea-\u003eb Scalar-\u003ec",
          "package": "AC-Vector-Fancy",
          "signature": "axis-\u003eaxis-\u003ea Scalar-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:rotateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild transform: scale each coordinate axis according to the given vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "scaleT",
          "package": "AC-Vector-Fancy",
          "signature": "Point t -\u003e t",
          "source": "src/Data-Vector-Transform-Fancy.html#scaleT",
          "type": "method"
        },
        "index": {
          "description": "Build transform scale each coordinate axis according to the given vector",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "scaleT",
          "normalized": "Point a-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "Point t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:scaleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild transform: scale all axies uniformly.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "scaleT_",
          "package": "AC-Vector-Fancy",
          "signature": "Scalar -\u003e t",
          "source": "src/Data-Vector-Transform-Fancy.html#scaleT_",
          "type": "method"
        },
        "index": {
          "description": "Build transform scale all axies uniformly",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "scaleT_",
          "normalized": "Scalar-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "Scalar-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:scaleT_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "transform",
          "package": "AC-Vector-Fancy",
          "signature": "t -\u003e x -\u003e x",
          "source": "src/Data-Vector-Transform-Fancy.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Apply transformation",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "transform",
          "normalized": "a-\u003eb-\u003eb",
          "package": "AC-Vector-Fancy",
          "signature": "t-\u003ex-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "transformP",
          "package": "AC-Vector-Fancy",
          "signature": "t -\u003e Point t -\u003e Point t",
          "source": "src/Data-Vector-Transform-Fancy.html#transformP",
          "type": "method"
        },
        "index": {
          "description": "Transform vector",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "transformP",
          "normalized": "a-\u003ePoint a-\u003ePoint a",
          "package": "AC-Vector-Fancy",
          "signature": "t-\u003ePoint t-\u003ePoint t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:transformP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild transform: translate by the given vector.\n\u003c/p\u003e",
          "module": "Data.Vector.Transform.Fancy",
          "name": "translateT",
          "package": "AC-Vector-Fancy",
          "signature": "Point t -\u003e t",
          "source": "src/Data-Vector-Transform-Fancy.html#translateT",
          "type": "method"
        },
        "index": {
          "description": "Build transform translate by the given vector",
          "hierarchy": "Data Vector Transform Fancy",
          "module": "Data.Vector.Transform.Fancy",
          "name": "translateT",
          "normalized": "Point a-\u003ea",
          "package": "AC-Vector-Fancy",
          "signature": "Point t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform-Fancy.html#v:translateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvinience module providing all transform functionallity in one place.\n\u003c/p\u003e\u003cp\u003eNote that the transform constructors and fields are not exported from here,\n  since the names clash. However, \u003ca\u003eData.Vector.Transform.Fancy\u003c/a\u003e provides\n  methods for constructing transforms generically, so that shouldn't be\n  an issue.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector.Transform",
          "name": "Transform",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Convinience module providing all transform functionallity in one place Note that the transform constructors and fields are not exported from here since the names clash However Data.Vector.Transform.Fancy provides methods for constructing transforms generically so that shouldn be an issue",
          "hierarchy": "Data Vector Transform",
          "module": "Data.Vector.Transform",
          "name": "Transform",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 1D linear transformations. Essentially, this is applying a linear function to a number.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform",
          "name": "Transform1",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Essentially this is applying linear function to number Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform",
          "module": "Data.Vector.Transform",
          "name": "Transform1",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform.html#t:Transform1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 2D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform",
          "name": "Transform2",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform",
          "module": "Data.Vector.Transform",
          "name": "Transform2",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform.html#t:Transform2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 3D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform",
          "name": "Transform3",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform",
          "module": "Data.Vector.Transform",
          "name": "Transform3",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform.html#t:Transform3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of 4D linear transformations.\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003eMonoid\u003c/code\u003e instance, which gives you access to the identity transform (\u003ccode\u003emempty\u003c/code\u003e) and the ability to combine a series of transforms into a single transform (\u003ccode\u003emappend\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Vector.Transform",
          "name": "Transform4",
          "package": "AC-Vector-Fancy",
          "type": "data"
        },
        "index": {
          "description": "The type of linear transformations Note the Monoid instance which gives you access to the identity transform mempty and the ability to combine series of transforms into single transform mappend",
          "hierarchy": "Data Vector Transform",
          "module": "Data.Vector.Transform",
          "name": "Transform4",
          "package": "AC-Vector-Fancy",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector-Transform.html#t:Transform4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvinience module providing all directly vector-related functionallity in one place.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Vector",
          "name": "Vector",
          "package": "AC-Vector-Fancy",
          "source": "src/Data-Vector.html",
          "type": "module"
        },
        "index": {
          "description": "Convinience module providing all directly vector-related functionallity in one place",
          "hierarchy": "Data Vector",
          "module": "Data.Vector",
          "name": "Vector",
          "package": "AC-Vector-Fancy",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-Vector-Fancy/docs/Data-Vector.html#"
      }
    }
  ]
]