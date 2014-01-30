[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapAround is a convenience module which helps you perform calculations with\n  points that are supposed to exist on a 2-dimensional, finite, unbounded plane.\n  (Or infinite, bounded plane, depending on who you ask.) On such a plane, space\n  wraps around so that an object travelling vertically or horizontally eventually\n  comes back to the place where it started. This allows you to move objects\n  around on a seamless map. For example, in some video games when an object\n  crosses the bottom of the screen it reappears at the top.\n\u003c/p\u003e\u003cp\u003eWrapAround represents the points and handles the common calculations properly\n  so you don't have to bother with the messy math and edge cases. This is done\n  with two data structures: a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e, which stores information about the size\n  of the plane, and a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e, which stores information about the location of\n  the point.\n\u003c/p\u003e\u003cp\u003eWhen you need the actual x, y coordinates, use the \u003ccode\u003e\u003ca\u003etoCoords\u003c/a\u003e\u003c/code\u003e conversion\n  function.\n\u003c/p\u003e\u003cp\u003eA WrapPoint is represented internally as a pair of angles, like in a torus.\n  The WrapMap and WrapPoint structures are kept separate because some WrapPoint\n  calculations can be performed without a WrapMap context. Functions typically\n  only need a WrapMap when a WrapPoint must be converted to actual x, y\n  coordinates or vice versa. Typically you do not want perform calculations with\n  WrapPoints that were generated with different WrapMaps, but this is possible\n  and sometimes useful.\n\u003c/p\u003e\u003cp\u003eIf you are grateful for this software, I gladly accept donations!\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://frigidcode.com/donate/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "module",
        "fct-source": "src/Data-WrapAround.html",
        "fct-type": "module",
        "title": "WrapAround"
      },
      "index": {
        "description": "WrapAround is convenience module which helps you perform calculations with points that are supposed to exist on dimensional finite unbounded plane Or infinite bounded plane depending on who you ask On such plane space wraps around so that an object travelling vertically or horizontally eventually comes back to the place where it started This allows you to move objects around on seamless map For example in some video games when an object crosses the bottom of the screen it reappears at the top WrapAround represents the points and handles the common calculations properly so you don have to bother with the messy math and edge cases This is done with two data structures WrapMap which stores information about the size of the plane and WrapPoint which stores information about the location of the point When you need the actual coordinates use the toCoords conversion function WrapPoint is represented internally as pair of angles like in torus The WrapMap and WrapPoint structures are kept separate because some WrapPoint calculations can be performed without WrapMap context Functions typically only need WrapMap when WrapPoint must be converted to actual coordinates or vice versa Typically you do not want perform calculations with WrapPoints that were generated with different WrapMaps but this is possible and sometimes useful If you are grateful for this software gladly accept donations https frigidcode.com donate",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "WrapAround",
        "normalized": "",
        "package": "wraparound",
        "partial": "Wrap Around",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WM",
      "description": {
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "type",
        "fct-source": "src/Data-WrapAround.html#WM",
        "fct-type": "type",
        "title": "WM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "WM",
        "normalized": "",
        "package": "wraparound",
        "partial": "WM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WP",
      "description": {
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "type",
        "fct-source": "src/Data-WrapAround.html#WP",
        "fct-type": "type",
        "title": "WP"
      },
      "index": {
        "description": "",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "WP",
        "normalized": "",
        "package": "wraparound",
        "partial": "WP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WrapMap",
      "description": {
        "fct-descr": "\u003cp\u003eContains the contextual information necessary to convert a WrapPoint to\n coordinates and vice versa.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "data",
        "fct-source": "src/Data-WrapAround.html#WrapMap",
        "fct-type": "data",
        "title": "WrapMap"
      },
      "index": {
        "description": "Contains the contextual information necessary to convert WrapPoint to coordinates and vice versa",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "WrapMap",
        "normalized": "",
        "package": "wraparound",
        "partial": "Wrap Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#t:WrapPoint",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of a point location that allows for wrapping in the\n vertical or horizontal direction.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "data",
        "fct-source": "src/Data-WrapAround.html#WrapPoint",
        "fct-type": "data",
        "title": "WrapPoint"
      },
      "index": {
        "description": "representation of point location that allows for wrapping in the vertical or horizontal direction",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "WrapPoint",
        "normalized": "",
        "package": "wraparound",
        "partial": "Wrap Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eAdds two WrapPoints together (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Adds two WrapPoints together vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "add",
        "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:add-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a WrapPoint and a pair of x, y coordinates (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "add'"
      },
      "index": {
        "description": "Adds WrapPoint and pair of coordinates vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "add'",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:addPoints",
      "description": {
        "fct-descr": "\u003cp\u003eAdds two WrapPoints together (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
        "fct-type": "function",
        "title": "addPoints"
      },
      "index": {
        "description": "Adds two WrapPoints together vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "addPoints",
        "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "Points",
        "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:addPoints-39-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds a WrapPoint and a pair of x, y coordinates (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "addPoints'"
      },
      "index": {
        "description": "Adds WrapPoint and pair of coordinates vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "addPoints'",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "Points'",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:coords",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "coords"
      },
      "index": {
        "description": "Converts WrapPoint to coordinates",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "coords",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eSubtracts a WrapPoint from a WrapPoint (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "Subtracts WrapPoint from WrapPoint vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "diff",
        "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:diff-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtracts coordinates from a WrapPoint (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "Subtracts coordinates from WrapPoint vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "diff'",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:distance",
      "description": {
        "fct-descr": "\u003cp\u003eFinds the distance between two WrapPoints.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e Double",
        "fct-type": "function",
        "title": "distance"
      },
      "index": {
        "description": "Finds the distance between two WrapPoints",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "distance",
        "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003eDouble",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:relation",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the relationship between two WrapPoints as a pair of x, y\n coordinates (a vector).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "relation"
      },
      "index": {
        "description": "Returns the relationship between two WrapPoints as pair of coordinates vector",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "relation",
        "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:subtractPoints",
      "description": {
        "fct-descr": "\u003cp\u003eSubtracts a WrapPoint from a WrapPoint (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapPoint-\u003e WrapPoint-\u003e WrapPoint",
        "fct-type": "function",
        "title": "subtractPoints"
      },
      "index": {
        "description": "Subtracts WrapPoint from WrapPoint vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "subtractPoints",
        "normalized": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "Points",
        "signature": "WrapPoint-\u003eWrapPoint-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:subtractPoints-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSubtracts coordinates from a WrapPoint (vector style).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "subtractPoints'"
      },
      "index": {
        "description": "Subtracts coordinates from WrapPoint vector style",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "subtractPoints'",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "Points'",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:toCoords",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "toCoords"
      },
      "index": {
        "description": "Converts WrapPoint to coordinates",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "toCoords",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
        "package": "wraparound",
        "partial": "Coords",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:vec",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e to coordinates.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "vec"
      },
      "index": {
        "description": "Converts WrapPoint to coordinates",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "vec",
        "normalized": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003eWrapPoint-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:vectorRelation",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the relationship between two WrapPoints as a pair of x, y\n coordinates (a vector).\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e WrapPoint-\u003e WrapPoint-\u003e (Double, Double)",
        "fct-type": "function",
        "title": "vectorRelation"
      },
      "index": {
        "description": "Returns the relationship between two WrapPoints as pair of coordinates vector",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "vectorRelation",
        "normalized": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)",
        "package": "wraparound",
        "partial": "Relation",
        "signature": "WrapMap-\u003eWrapPoint-\u003eWrapPoint-\u003e(Double,Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wm",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "Double-\u003e Double-\u003e WrapMap",
        "fct-type": "function",
        "title": "wm"
      },
      "index": {
        "description": "Generates WrapMap",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "wm",
        "normalized": "Double-\u003eDouble-\u003eWrapMap",
        "package": "wraparound",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eWrapMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wp",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "wp"
      },
      "index": {
        "description": "Generates WrapPoint",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "wp",
        "normalized": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wrapmap",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "Double-\u003e Double-\u003e WrapMap",
        "fct-type": "function",
        "title": "wrapmap"
      },
      "index": {
        "description": "Generates WrapMap",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "wrapmap",
        "normalized": "Double-\u003eDouble-\u003eWrapMap",
        "package": "wraparound",
        "partial": "",
        "signature": "Double-\u003eDouble-\u003eWrapMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wraparound/docs/Data-WrapAround.html#v:wrappoint",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eWrapPoint\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.WrapAround",
        "fct-package": "wraparound",
        "fct-signature": "WrapMap-\u003e (Double, Double)-\u003e WrapPoint",
        "fct-type": "function",
        "title": "wrappoint"
      },
      "index": {
        "description": "Generates WrapPoint",
        "hierarchy": "Data WrapAround",
        "module": "Data.WrapAround",
        "name": "wrappoint",
        "normalized": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint",
        "package": "wraparound",
        "partial": "",
        "signature": "WrapMap-\u003e(Double,Double)-\u003eWrapPoint"
      }
    }
  }
]