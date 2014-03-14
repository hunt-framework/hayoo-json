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
        "word": "wraparound"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapAround is a convenience module which helps you perform calculations with\n  points that are supposed to exist on a 2-dimensional, finite, unbounded plane.\n  (Or infinite, bounded plane, depending on who you ask.) On such a plane, space\n  wraps around so that an object travelling vertically or horizontally eventually\n  comes back to the place where it started. This allows you to move objects\n  around on a seamless map. For example, in some video games when an object\n  crosses the bottom of the screen it reappears at the top.\n\u003c/p\u003e\u003cp\u003eWrapAround represents the points and handles the common calculations properly\n  so you don't have to bother with the messy math and edge cases. This is done\n  with two data structures: a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e, which stores information about the size\n  of the plane, and a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e, which stores information about the location of\n  the point.\n\u003c/p\u003e\u003cp\u003eWhen you need the actual x, y coordinates, use the \u003ccode\u003e\u003ca\u003etoCoords\u003c/a\u003e\u003c/code\u003e conversion\n  function.\n\u003c/p\u003e\u003cp\u003eA WrapPoint is represented internally as a pair of angles, like in a torus.\n  The WrapMap and WrapPoint structures are kept separate because some WrapPoint\n  calculations can be performed without a WrapMap context. Functions typically\n  only need a WrapMap when a WrapPoint must be converted to actual x, y\n  coordinates or vice versa. Typically you do not want perform calculations with\n  WrapPoints that were generated with different WrapMaps, but this is possible\n  and sometimes useful.\n\u003c/p\u003e\u003cp\u003eIf you are grateful for this software, I gladly accept donations!\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://frigidcode.com/donate/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.WrapAround",
          "name": "WrapAround",
          "package": "wraparound",
          "source": "src/Data-WrapAround.html",
          "type": "module"
        },
        "index": {
          "description": "WrapAround is convenience module which helps you perform calculations with points that are supposed to exist on dimensional finite unbounded plane Or infinite bounded plane depending on who you ask On such plane space wraps around so that an object travelling vertically or horizontally eventually comes back to the place where it started This allows you to move objects around on seamless map For example in some video games when an object crosses the bottom of the screen it reappears at the top WrapAround represents the points and handles the common calculations properly so you don have to bother with the messy math and edge cases This is done with two data structures WrapMap which stores information about the size of the plane and WrapPoint which stores information about the location of the point When you need the actual coordinates use the toCoords conversion function WrapPoint is represented internally as pair of angles like in torus The WrapMap and WrapPoint structures are kept separate because some WrapPoint calculations can be performed without WrapMap context Functions typically only need WrapMap when WrapPoint must be converted to actual coordinates or vice versa Typically you do not want perform calculations with WrapPoints that were generated with different WrapMaps but this is possible and sometimes useful If you are grateful for this software gladly accept donations https frigidcode.com donate",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "WrapAround",
          "package": "wraparound",
          "partial": "Wrap Around",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WrapAround",
          "name": "WM",
          "package": "wraparound",
          "source": "src/Data-WrapAround.html#WM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "WM",
          "package": "wraparound",
          "partial": "WM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.WrapAround",
          "name": "WP",
          "package": "wraparound",
          "source": "src/Data-WrapAround.html#WP",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "WP",
          "package": "wraparound",
          "partial": "WP",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the contextual information necessary to convert a WrapPoint to\n coordinates and vice versa.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "WrapMap",
          "package": "wraparound",
          "source": "src/Data-WrapAround.html#WrapMap",
          "type": "data"
        },
        "index": {
          "description": "Contains the contextual information necessary to convert WrapPoint to coordinates and vice versa",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "WrapMap",
          "package": "wraparound",
          "partial": "Wrap Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WrapMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA representation of a point location that allows for wrapping in the\n vertical or horizontal direction.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "WrapPoint",
          "package": "wraparound",
          "source": "src/Data-WrapAround.html#WrapPoint",
          "type": "data"
        },
        "index": {
          "description": "representation of point location that allows for wrapping in the vertical or horizontal direction",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "WrapPoint",
          "package": "wraparound",
          "partial": "Wrap Point",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WrapPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds two WrapPoints together (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "add",
          "package": "wraparound",
          "signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Adds two WrapPoints together vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "add",
          "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a WrapPoint and a pair of x, y coordinates (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "add'",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Adds WrapPoint and pair of coordinates vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "add'",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:add-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds two WrapPoints together (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "addPoints",
          "package": "wraparound",
          "signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Adds two WrapPoints together vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "addPoints",
          "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "package": "wraparound",
          "partial": "Points",
          "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:addPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a WrapPoint and a pair of x, y coordinates (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "addPoints'",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Adds WrapPoint and pair of coordinates vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "addPoints'",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "partial": "Points'",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:addPoints-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "coords",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Converts WrapPoint to coordinates",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "coords",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts a WrapPoint from a WrapPoint (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "diff",
          "package": "wraparound",
          "signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Subtracts WrapPoint from WrapPoint vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "diff",
          "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts coordinates from a WrapPoint (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "diff'",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Subtracts coordinates from WrapPoint vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "diff'",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the distance between two WrapPoints.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "distance",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Finds the distance between two WrapPoints",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "distance",
          "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003eDouble",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the relationship between two WrapPoints as a pair of x, y\n coordinates (a vector).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "relation",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Returns the relationship between two WrapPoints as pair of coordinates vector",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "relation",
          "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:relation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts a WrapPoint from a WrapPoint (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "subtractPoints",
          "package": "wraparound",
          "signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Subtracts WrapPoint from WrapPoint vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "subtractPoints",
          "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "package": "wraparound",
          "partial": "Points",
          "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:subtractPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubtracts coordinates from a WrapPoint (vector style).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "subtractPoints'",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Subtracts coordinates from WrapPoint vector style",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "subtractPoints'",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "partial": "Points'",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:subtractPoints-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "toCoords",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Converts WrapPoint to coordinates",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "toCoords",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "package": "wraparound",
          "partial": "Coords",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:toCoords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "vec",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Converts WrapPoint to coordinates",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "vec",
          "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "package": "wraparound",
          "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the relationship between two WrapPoints as a pair of x, y\n coordinates (a vector).\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "vectorRelation",
          "package": "wraparound",
          "signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e (Double, Double)",
          "type": "function"
        },
        "index": {
          "description": "Returns the relationship between two WrapPoints as pair of coordinates vector",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "vectorRelation",
          "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
          "package": "wraparound",
          "partial": "Relation",
          "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:vectorRelation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "wm",
          "package": "wraparound",
          "signature": "Double-\u003e Double-\u003e WrapMap",
          "type": "function"
        },
        "index": {
          "description": "Generates WrapMap",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "wm",
          "normalized": "Double-\u003eDouble-\u003eWrapMap",
          "package": "wraparound",
          "signature": "Double-\u003eDouble-\u003eWrapMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "wp",
          "package": "wraparound",
          "signature": "WrapMap-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Generates WrapPoint",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "wp",
          "normalized": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "wrapmap",
          "package": "wraparound",
          "signature": "Double-\u003e Double-\u003e WrapMap",
          "type": "function"
        },
        "index": {
          "description": "Generates WrapMap",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "wrapmap",
          "normalized": "Double-\u003eDouble-\u003eWrapMap",
          "package": "wraparound",
          "signature": "Double-\u003eDouble-\u003eWrapMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wrapmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.WrapAround",
          "name": "wrappoint",
          "package": "wraparound",
          "signature": "WrapMap-\u003e (Double, Double)-\u003e WrapPoint",
          "type": "function"
        },
        "index": {
          "description": "Generates WrapPoint",
          "hierarchy": "Data WrapAround",
          "module": "Data.WrapAround",
          "name": "wrappoint",
          "normalized": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
          "package": "wraparound",
          "signature": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wrappoint"
      }
    }
  ]
]