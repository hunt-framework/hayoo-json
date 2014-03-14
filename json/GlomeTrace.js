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
        "word": "GlomeTrace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Bih",
          "name": "Bih",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Bih.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Bih",
          "module": "Data.Glome.Bih",
          "name": "Bih",
          "package": "GlomeTrace",
          "partial": "Bih",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bih.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bih constructor creates a Bounding Interval Heirarchy\n from a list of primitives.  BIH is a type of data structure\n that groups primitives into a heirarchy of bounding objects,\n so that a ray need not be tested against every single\n primitive.  This can make the difference betweeen a rendering\n job that takes days or seconds.  BIH usually performs a little\n worse than a SAH-based KD-tree, but construction time is much\n better.\n\u003c/p\u003e\u003cp\u003eSee http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eBounding_interval_hierarchy\n\u003c/p\u003e",
          "module": "Data.Glome.Bih",
          "name": "bih",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e SolidItem",
          "source": "src/Data-Glome-Bih.html#bih",
          "type": "function"
        },
        "index": {
          "description": "The bih constructor creates Bounding Interval Heirarchy from list of primitives BIH is type of data structure that groups primitives into heirarchy of bounding objects so that ray need not be tested against every single primitive This can make the difference betweeen rendering job that takes days or seconds BIH usually performs little worse than SAH-based KD-tree but construction time is much better See http en.wikipedia.org wiki Bounding interval hierarchy",
          "hierarchy": "Data Glome Bih",
          "module": "Data.Glome.Bih",
          "name": "bih",
          "normalized": "[SolidItem]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bih.html#v:bih"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Bound",
          "name": "Bound",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Bound.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Bound",
          "module": "Data.Glome.Bound",
          "name": "Bound",
          "package": "GlomeTrace",
          "partial": "Bound",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bound.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the first object as a bounding volume for the second\n object.  If a ray misses the first object, it is assumed to\n miss the second object.  Used primarily to improve performance.\n In general, bih will usually perform better than \n manually-constructed bounds, though.\n\u003c/p\u003e",
          "module": "Data.Glome.Bound",
          "name": "bound_object",
          "package": "GlomeTrace",
          "signature": "SolidItem -\u003e SolidItem -\u003e SolidItem",
          "source": "src/Data-Glome-Bound.html#bound_object",
          "type": "function"
        },
        "index": {
          "description": "Use the first object as bounding volume for the second object If ray misses the first object it is assumed to miss the second object Used primarily to improve performance In general bih will usually perform better than manually-constructed bounds though",
          "hierarchy": "Data Glome Bound",
          "module": "Data.Glome.Bound",
          "name": "bound_object",
          "normalized": "SolidItem-\u003eSolidItem-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "SolidItem-\u003eSolidItem-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bound.html#v:bound_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Box",
          "name": "Box",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Box.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Box",
          "module": "Data.Glome.Box",
          "name": "Box",
          "package": "GlomeTrace",
          "partial": "Box",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Box.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Box",
          "name": "box",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e SolidItem",
          "source": "src/Data-Glome-Box.html#box",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Box",
          "module": "Data.Glome.Box",
          "name": "box",
          "normalized": "Vec-\u003eVec-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Box.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "Clr",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Clr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "Clr",
          "package": "GlomeTrace",
          "partial": "Clr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "CFlt",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Clr.html#CFlt",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "CFlt",
          "package": "GlomeTrace",
          "partial": "CFlt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#t:CFlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "Color",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Clr.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "Color",
          "package": "GlomeTrace",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "Color",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "Color",
          "package": "GlomeTrace",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "b",
          "package": "GlomeTrace",
          "signature": "CFlt",
          "source": "src/Data-Glome-Clr.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "b",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "c_black",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#c_black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "c_black",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "c_blue",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#c_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "c_blue",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "c_green",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#c_green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "c_green",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "c_red",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#c_red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "c_red",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "c_white",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Clr.html#c_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "c_white",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cadd",
          "package": "GlomeTrace",
          "signature": "Color -\u003e Color -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cadd",
          "normalized": "Color-\u003eColor-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cavg",
          "package": "GlomeTrace",
          "signature": "Color -\u003e Color -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cavg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cavg",
          "normalized": "Color-\u003eColor-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cavg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cclamp",
          "package": "GlomeTrace",
          "signature": "Color -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cclamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cclamp",
          "normalized": "Color-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cclamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cdiv",
          "package": "GlomeTrace",
          "signature": "Color -\u003e CFlt -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cdiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cdiv",
          "normalized": "Color-\u003eCFlt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eCFlt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cmul",
          "package": "GlomeTrace",
          "signature": "Color -\u003e Color -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cmul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cmul",
          "normalized": "Color-\u003eColor-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eColor-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cscale",
          "package": "GlomeTrace",
          "signature": "Color -\u003e CFlt -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cscale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cscale",
          "normalized": "Color-\u003eCFlt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eCFlt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cscale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "cscaleadd",
          "package": "GlomeTrace",
          "signature": "Color -\u003e Color -\u003e CFlt -\u003e Color",
          "source": "src/Data-Glome-Clr.html#cscaleadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "cscaleadd",
          "normalized": "Color-\u003eColor-\u003eCFlt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Color-\u003eColor-\u003eCFlt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cscaleadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "g",
          "package": "GlomeTrace",
          "signature": "CFlt",
          "source": "src/Data-Glome-Clr.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "g",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:g"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Clr",
          "name": "r",
          "package": "GlomeTrace",
          "signature": "CFlt",
          "source": "src/Data-Glome-Clr.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Clr",
          "module": "Data.Glome.Clr",
          "name": "r",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Cone",
          "name": "Cone",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Cone.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Cone",
          "module": "Data.Glome.Cone",
          "name": "Cone",
          "package": "GlomeTrace",
          "partial": "Cone",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a cone from p1 to p2.  R1 and r2 are the radii at each\n end.  A cone need not come to a point at either end.\n\u003c/p\u003e",
          "module": "Data.Glome.Cone",
          "name": "cone",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Flt -\u003e Vec -\u003e Flt -\u003e SolidItem",
          "source": "src/Data-Glome-Cone.html#cone",
          "type": "function"
        },
        "index": {
          "description": "Construct cone from p1 to p2 R1 and r2 are the radii at each end cone need not come to point at either end",
          "hierarchy": "Data Glome Cone",
          "module": "Data.Glome.Cone",
          "name": "cone",
          "normalized": "Vec-\u003eFlt-\u003eVec-\u003eFlt-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eFlt-\u003eVec-\u003eFlt-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:cone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a general cylinder from p1 to p2 with radius r.\n\u003c/p\u003e",
          "module": "Data.Glome.Cone",
          "name": "cylinder",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e Flt -\u003e SolidItem",
          "source": "src/Data-Glome-Cone.html#cylinder",
          "type": "function"
        },
        "index": {
          "description": "Construct general cylinder from p1 to p2 with radius",
          "hierarchy": "Data Glome Cone",
          "module": "Data.Glome.Cone",
          "name": "cylinder",
          "normalized": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:cylinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a disc.  These are used as the end-caps on cones and cylinders,\n but they can be constructed by themselves as well.\n\u003c/p\u003e",
          "module": "Data.Glome.Cone",
          "name": "disc",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e Flt -\u003e SolidItem",
          "source": "src/Data-Glome-Cone.html#disc",
          "type": "function"
        },
        "index": {
          "description": "Create disc These are used as the end-caps on cones and cylinders but they can be constructed by themselves as well",
          "hierarchy": "Data Glome Cone",
          "module": "Data.Glome.Cone",
          "name": "disc",
          "normalized": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:disc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Csg",
          "name": "Csg",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Csg.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Csg",
          "module": "Data.Glome.Csg",
          "name": "Csg",
          "package": "GlomeTrace",
          "partial": "Csg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new object based on the subtraction of the second item\n from the first.  This only works if the items have a well-defined\n inside and outside.  Triangles and discs, for instance, have no \n volume, so subtracting them from anything won't do anything.\n\u003c/p\u003e",
          "module": "Data.Glome.Csg",
          "name": "difference",
          "package": "GlomeTrace",
          "signature": "SolidItem -\u003e SolidItem -\u003e SolidItem",
          "source": "src/Data-Glome-Csg.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Create new object based on the subtraction of the second item from the first This only works if the items have well-defined inside and outside Triangles and discs for instance have no volume so subtracting them from anything won do anything",
          "hierarchy": "Data Glome Csg",
          "module": "Data.Glome.Csg",
          "name": "difference",
          "normalized": "SolidItem-\u003eSolidItem-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "SolidItem-\u003eSolidItem-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new item from the boolean intersection of a\n list of solids.  A point is inside the object iff it is\n inside every primitive.  We can construct polyhedra from\n intersections of planes, but this isn't the most efficient\n way to do that.\n\u003c/p\u003e",
          "module": "Data.Glome.Csg",
          "name": "intersection",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e SolidItem",
          "source": "src/Data-Glome-Csg.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "Create new item from the boolean intersection of list of solids point is inside the object iff it is inside every primitive We can construct polyhedra from intersections of planes but this isn the most efficient way to do that",
          "hierarchy": "Data Glome Csg",
          "module": "Data.Glome.Csg",
          "name": "intersection",
          "normalized": "[SolidItem]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Plane",
          "name": "Plane",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Plane.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Plane",
          "module": "Data.Glome.Plane",
          "name": "Plane",
          "package": "GlomeTrace",
          "partial": "Plane",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a plane (or, more accurately, a half-space)\n by specifying a point on the plane and a normal.\n The normal points towards the outside of the plane.\n Planes are often useful within CSG objects.\n\u003c/p\u003e",
          "module": "Data.Glome.Plane",
          "name": "plane",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e SolidItem",
          "source": "src/Data-Glome-Plane.html#plane",
          "type": "function"
        },
        "index": {
          "description": "Construct plane or more accurately half-space by specifying point on the plane and normal The normal points towards the outside of the plane Planes are often useful within CSG objects",
          "hierarchy": "Data Glome Plane",
          "module": "Data.Glome.Plane",
          "name": "plane",
          "normalized": "Vec-\u003eVec-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#v:plane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Plane",
          "name": "plane_offset",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Flt -\u003e SolidItem",
          "source": "src/Data-Glome-Plane.html#plane_offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Plane",
          "module": "Data.Glome.Plane",
          "name": "plane_offset",
          "normalized": "Vec-\u003eFlt-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eFlt-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#v:plane_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Scene.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "partial": "Scene",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Camera",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Scene.html#Camera",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Camera",
          "package": "GlomeTrace",
          "partial": "Camera",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Light",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Scene.html#Light",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Light",
          "package": "GlomeTrace",
          "partial": "Light",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "partial": "Scene",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Camera",
          "package": "GlomeTrace",
          "signature": "Camera !Vec !Vec !Vec !Vec",
          "source": "src/Data-Glome-Scene.html#Camera",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Camera",
          "package": "GlomeTrace",
          "partial": "Camera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Light",
          "package": "GlomeTrace",
          "signature": "Light !Vec !Color !Flt !Flt !Bool",
          "source": "src/Data-Glome-Scene.html#Light",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Light",
          "package": "GlomeTrace",
          "partial": "Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "signature": "Scene",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "Scene",
          "package": "GlomeTrace",
          "partial": "Scene",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "bground",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "bground",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:bground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "cam",
          "package": "GlomeTrace",
          "signature": "Camera",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "cam",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:cam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a camera, given a position, a forward vector, \n a point that the camera should be pointed towards, an up vector,\n and a right vector.  The up and right vectors don't have to be\n normalized or perfectly orthogonal.\n\u003c/p\u003e",
          "module": "Data.Glome.Scene",
          "name": "camera",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e Vec -\u003e Flt -\u003e Camera",
          "source": "src/Data-Glome-Scene.html#camera",
          "type": "function"
        },
        "index": {
          "description": "Construct camera given position forward vector point that the camera should be pointed towards an up vector and right vector The up and right vectors don have to be normalized or perfectly orthogonal",
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "camera",
          "normalized": "Vec-\u003eVec-\u003eVec-\u003eFlt-\u003eCamera",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eVec-\u003eFlt-\u003eCamera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:camera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "dtex",
          "package": "GlomeTrace",
          "signature": "Texture",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "dtex",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:dtex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a light given a center location and a color.\n\u003c/p\u003e",
          "module": "Data.Glome.Scene",
          "name": "light",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Color -\u003e Light",
          "source": "src/Data-Glome-Scene.html#light",
          "type": "function"
        },
        "index": {
          "description": "Construct light given center location and color",
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "light",
          "normalized": "Vec-\u003eColor-\u003eLight",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eColor-\u003eLight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:light"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "lits",
          "package": "GlomeTrace",
          "signature": "[Light]",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "lits",
          "normalized": "[Light]",
          "package": "GlomeTrace",
          "signature": "[Light]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:lits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the primitives in the scene.  See docs for primcount \n in Solid.hs.\n\u003c/p\u003e",
          "module": "Data.Glome.Scene",
          "name": "primcount_scene",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Pcount",
          "source": "src/Data-Glome-Scene.html#primcount_scene",
          "type": "function"
        },
        "index": {
          "description": "Count the primitives in the scene See docs for primcount in Solid.hs",
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "primcount_scene",
          "normalized": "Scene-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "Scene-\u003ePcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:primcount_scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a scene from an item (which can be a composite item, such \n as a bih or group), a list of lights, a camera, a default texture,\n and a default background color.\n\u003c/p\u003e",
          "module": "Data.Glome.Scene",
          "name": "scene",
          "package": "GlomeTrace",
          "signature": "SolidItem -\u003e [Light] -\u003e Camera -\u003e Texture -\u003e Color -\u003e Scene",
          "source": "src/Data-Glome-Scene.html#scene",
          "type": "function"
        },
        "index": {
          "description": "Create scene from an item which can be composite item such as bih or group list of lights camera default texture and default background color",
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "scene",
          "normalized": "SolidItem-\u003e[Light]-\u003eCamera-\u003eTexture-\u003eColor-\u003eScene",
          "package": "GlomeTrace",
          "signature": "SolidItem-\u003e[Light]-\u003eCamera-\u003eTexture-\u003eColor-\u003eScene",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:scene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Scene",
          "name": "sld",
          "package": "GlomeTrace",
          "signature": "SolidItem",
          "source": "src/Data-Glome-Scene.html#Scene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Scene",
          "module": "Data.Glome.Scene",
          "name": "sld",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:sld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Solid",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Solid",
          "package": "GlomeTrace",
          "partial": "Solid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instance is a primitive that has been modified\n by a transformation (i.e. some combination of\n translation, rotation, and scaling).  This is a\n reasonably space-efficient way of making multiple copies\n of a complex object.\n\u003c/p\u003e\u003cp\u003eUsually, the application doesn't need to create an \n instance directly, but should use \u003ca\u003etransform\u003c/a\u003e on an\n existing object.\n\u003c/p\u003e\u003cp\u003eIt's unfortunate that \u003ca\u003einstance\u003c/a\u003e is also a reserved word.  \n \u003ca\u003einstance Solid Instance where...\u003c/a\u003e is a little confusing.\n\u003c/p\u003e\u003cp\u003eThis would be better in its own module, but we need\n \u003ca\u003eInstance\u003c/a\u003e to be defined here so we can define the default \n implementation of \u003ca\u003etransform\u003c/a\u003e in terms on Instance.\n (Mutually recursive modules would be useful, if I could\n get them to work.)\n\u003c/p\u003e\u003cp\u003eAnother good reason to include Instance in Solid.hs\n is that it's referenced from Cone.hs\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Instance",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Instance",
          "type": "data"
        },
        "index": {
          "description": "An instance is primitive that has been modified by transformation i.e some combination of translation rotation and scaling This is reasonably space-efficient way of making multiple copies of complex object Usually the application doesn need to create an instance directly but should use transform on an existing object It unfortunate that instance is also reserved word instance Solid Instance where is little confusing This would be better in its own module but we need Instance to be defined here so we can define the default implementation of transform in terms on Instance Mutually recursive modules would be useful if could get them to work Another good reason to include Instance in Solid.hs is that it referenced from Cone.hs",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Instance",
          "package": "GlomeTrace",
          "partial": "Instance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSurface properties at a point on an object's surface.  We have color, \n reflection amount, refraction amount index of refraction, kd, ks, and shine.\n These are parameters to a Whitted - style illumination model.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Material",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "data"
        },
        "index": {
          "description": "Surface properties at point on an object surface We have color reflection amount refraction amount index of refraction kd ks and shine These are parameters to Whitted style illumination model",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Material",
          "package": "GlomeTrace",
          "partial": "Material",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Material"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes, it's more efficient to trace multiple rays against an \n acceleration structure at the same time, provided the rays are almost\n identical.  A PacketResult is the result of tracing 4 rays at once.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "PacketResult",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#PacketResult",
          "type": "data"
        },
        "index": {
          "description": "Sometimes it more efficient to trace multiple rays against an acceleration structure at the same time provided the rays are almost identical PacketResult is the result of tracing rays at once",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "PacketResult",
          "package": "GlomeTrace",
          "partial": "Packet Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:PacketResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Pcount",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Pcount",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Pcount",
          "package": "GlomeTrace",
          "partial": "Pcount",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Pcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRay intersection type.  If we hit, we store the distance from the ray\n origin, the position, the normal, and the texture attached to the object.\n We could just as easily have created a hit type and wrapped it in a Maybe.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Rayint",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "data"
        },
        "index": {
          "description": "Ray intersection type If we hit we store the distance from the ray origin the position the normal and the texture attached to the object We could just as easily have created hit type and wrapped it in Maybe",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Rayint",
          "package": "GlomeTrace",
          "partial": "Rayint",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Rayint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA solid is something we can test a ray against or do inside/outside tests.\n Some of these are simple solids like Sphere or Triangle, but others\n are composite solids than have other solids as children.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Solid",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Solid",
          "type": "class"
        },
        "index": {
          "description": "solid is something we can test ray against or do inside outside tests Some of these are simple solids like Sphere or Triangle but others are composite solids than have other solids as children",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Solid",
          "package": "GlomeTrace",
          "partial": "Solid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Solid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe create an existential type for solids so we can emded them\n in composite types without know what kind of solid it is.\n http:\u003cem/\u003enotes-on-haskell.blogspot.com\u003cem\u003e2007\u003c/em\u003e01/proxies-and-delegation-vs-existential.html\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "SolidItem",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#SolidItem",
          "type": "data"
        },
        "index": {
          "description": "We create an existential type for solids so we can emded them in composite types without know what kind of solid it is http notes-on-haskell.blogspot.com proxies-and-delegation-vs-existential.html",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "SolidItem",
          "package": "GlomeTrace",
          "partial": "Solid Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:SolidItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA texture is a function that takes a Rayint and returns a Material.\n In other words, textures can vary based on location, normal, etc...\n in arbitrary ways.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Texture",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Texture",
          "type": "type"
        },
        "index": {
          "description": "texture is function that takes Rayint and returns Material In other words textures can vary based on location normal etc in arbitrary ways",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Texture",
          "package": "GlomeTrace",
          "partial": "Texture",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Void is a non-object, that we treat as if it were\n one.  This is functionally equivalent to an empty Group.\n (Originally I called this \u003ca\u003eNothing\u003c/a\u003e, but that\n conflicted with the prelude maybe type, so I call\n it \u003ca\u003eVoid\u003c/a\u003e instead) \n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "Void",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Solid.html#Void",
          "type": "data"
        },
        "index": {
          "description": "Void is non-object that we treat as if it were one This is functionally equivalent to an empty Group Originally called this Nothing but that conflicted with the prelude maybe type so call it Void instead",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Void",
          "package": "GlomeTrace",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Instance",
          "package": "GlomeTrace",
          "signature": "Instance SolidItem Xfm",
          "source": "src/Data-Glome-Solid.html#Instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Instance",
          "package": "GlomeTrace",
          "partial": "Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Material",
          "package": "GlomeTrace",
          "signature": "Material",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Material",
          "package": "GlomeTrace",
          "partial": "Material",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Material"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "PacketResult",
          "package": "GlomeTrace",
          "signature": "PacketResult !Rayint !Rayint !Rayint !Rayint",
          "source": "src/Data-Glome-Solid.html#PacketResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "PacketResult",
          "package": "GlomeTrace",
          "partial": "Packet Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:PacketResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Pcount",
          "package": "GlomeTrace",
          "signature": "Pcount (Int, Int, Int)",
          "source": "src/Data-Glome-Solid.html#Pcount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Pcount",
          "normalized": "Pcount(Int,Int,Int)",
          "package": "GlomeTrace",
          "partial": "Pcount",
          "signature": "Pcount(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Pcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "RayHit",
          "package": "GlomeTrace",
          "signature": "RayHit",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "RayHit",
          "package": "GlomeTrace",
          "partial": "Ray Hit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:RayHit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "RayMiss",
          "package": "GlomeTrace",
          "signature": "RayMiss",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "RayMiss",
          "package": "GlomeTrace",
          "partial": "Ray Miss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:RayMiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "SolidItem",
          "package": "GlomeTrace",
          "signature": "SolidItem a",
          "source": "src/Data-Glome-Solid.html#SolidItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "SolidItem",
          "package": "GlomeTrace",
          "partial": "Solid Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:SolidItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "Void",
          "package": "GlomeTrace",
          "signature": "Void",
          "source": "src/Data-Glome-Solid.html#Void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "Void",
          "package": "GlomeTrace",
          "partial": "Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "asbound",
          "package": "GlomeTrace",
          "signature": "Pcount -\u003e Pcount",
          "source": "src/Data-Glome-Solid.html#asbound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "asbound",
          "normalized": "Pcount-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "Pcount-\u003ePcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:asbound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an axis-aligned bounding box than completely encloses\n the object.  For performance, it is important that this fits as \n tight as possible.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "bound",
          "package": "GlomeTrace",
          "signature": "a -\u003e Bbox",
          "source": "src/Data-Glome-Solid.html#bound",
          "type": "method"
        },
        "index": {
          "description": "Generate an axis-aligned bounding box than completely encloses the object For performance it is important that this fits as tight as possible",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "bound",
          "normalized": "a-\u003eBbox",
          "package": "GlomeTrace",
          "signature": "a-\u003eBbox",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "bound_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Bbox",
          "source": "src/Data-Glome-Solid.html#bound_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "bound_group",
          "normalized": "[SolidItem]-\u003eBbox",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eBbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "bound_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Bbox",
          "source": "src/Data-Glome-Solid.html#bound_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "bound_instance",
          "normalized": "Instance-\u003eBbox",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eBbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "clr",
          "package": "GlomeTrace",
          "signature": "Color",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "clr",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:clr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "debug_wrap",
          "package": "GlomeTrace",
          "signature": "(Rayint, Int) -\u003e Int -\u003e (Rayint, Int)",
          "source": "src/Data-Glome-Solid.html#debug_wrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "debug_wrap",
          "normalized": "(Rayint,Int)-\u003eInt-\u003e(Rayint,Int)",
          "package": "GlomeTrace",
          "signature": "(Rayint,Int)-\u003eInt-\u003e(Rayint,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:debug_wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "depth",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "depth",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a distance from a Rayint, with infinity for a miss\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "dist",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Flt",
          "source": "src/Data-Glome-Solid.html#dist",
          "type": "function"
        },
        "index": {
          "description": "Extract distance from Rayint with infinity for miss",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "dist",
          "normalized": "Rayint-\u003eFlt",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eFlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmash a group of groups into a single group,\n so we can build an efficient bounding heirarchy\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "flatten_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e [SolidItem]",
          "source": "src/Data-Glome-Solid.html#flatten_group",
          "type": "function"
        },
        "index": {
          "description": "Smash group of groups into single group so we can build an efficient bounding heirarchy",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "flatten_group",
          "normalized": "[SolidItem]-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003e[SolidItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a composite object inside a transform, and turn it into\n a group of individually-transformed objects.  Most objects \n can use the defaut implementation.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "flatten_transform",
          "package": "GlomeTrace",
          "signature": "a -\u003e [SolidItem]",
          "source": "src/Data-Glome-Solid.html#flatten_transform",
          "type": "method"
        },
        "index": {
          "description": "Take composite object inside transform and turn it into group of individually-transformed objects Most objects can use the defaut implementation",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "flatten_transform",
          "normalized": "a-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "a-\u003e[SolidItem]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "flatten_transform_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e [SolidItem]",
          "source": "src/Data-Glome-Solid.html#flatten_transform_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "flatten_transform_instance",
          "normalized": "Instance-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "Instance-\u003e[SolidItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_transform_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePick the furthest of two Rayints\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "furthest",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Rayint -\u003e Rayint",
          "source": "src/Data-Glome-Solid.html#furthest",
          "type": "function"
        },
        "index": {
          "description": "Pick the furthest of two Rayints",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "furthest",
          "normalized": "Rayint-\u003eRayint-\u003eRayint",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eRayint-\u003eRayint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:furthest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA group is just a list of objects.  Sometimes its convenient to be \n able to treat a group as if it were a single object, and that is \n exactly what we do here.  The ray intersection routine tests the ray \n against each object in turn.  Not very efficient\n for large groups, but this is a useful building block for\n constructing the leaves of acceleration structures.  (See the bih\n module.)\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#group",
          "type": "function"
        },
        "index": {
          "description": "group is just list of objects Sometimes its convenient to be able to treat group as if it were single object and that is exactly what we do here The ray intersection routine tests the ray against each object in turn Not very efficient for large groups but this is useful building block for constructing the leaves of acceleration structures See the bih module",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "group",
          "normalized": "[SolidItem]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a Rayint is a hit or a miss\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "hit",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#hit",
          "type": "function"
        },
        "index": {
          "description": "Test if Rayint is hit or miss",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "hit",
          "normalized": "Rayint-\u003eBool",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:hit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a point is inside an object.  Useful for CSG.\n Objects with no volume just return False.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "inside",
          "package": "GlomeTrace",
          "signature": "a -\u003e Vec -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#inside",
          "type": "method"
        },
        "index": {
          "description": "Test if point is inside an object Useful for CSG Objects with no volume just return False",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "inside",
          "normalized": "a-\u003eVec-\u003eBool",
          "package": "GlomeTrace",
          "signature": "a-\u003eVec-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "inside_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Vec -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#inside_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "inside_group",
          "normalized": "[SolidItem]-\u003eVec-\u003eBool",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eVec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "inside_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Vec -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#inside_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "inside_instance",
          "normalized": "Instance-\u003eVec-\u003eBool",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eVec-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "interp",
          "package": "GlomeTrace",
          "signature": "Flt -\u003e Flt -\u003e Flt -\u003e Flt",
          "source": "src/Data-Glome-Solid.html#interp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "interp",
          "normalized": "Flt-\u003eFlt-\u003eFlt-\u003eFlt",
          "package": "GlomeTrace",
          "signature": "Flt-\u003eFlt-\u003eFlt-\u003eFlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "ior",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "ior",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:ior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "kd",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "kd",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:kd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "ks",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "ks",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:ks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate between textures.  \n Not really correct, but we'll go with it for now.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "m_interp",
          "package": "GlomeTrace",
          "signature": "Material -\u003e Material -\u003e Flt -\u003e Material",
          "source": "src/Data-Glome-Solid.html#m_interp",
          "type": "function"
        },
        "index": {
          "description": "Interpolate between textures Not really correct but we ll go with it for now",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "m_interp",
          "normalized": "Material-\u003eMaterial-\u003eFlt-\u003eMaterial",
          "package": "GlomeTrace",
          "signature": "Material-\u003eMaterial-\u003eFlt-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:m_interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform white material\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "m_white",
          "package": "GlomeTrace",
          "signature": "Material",
          "source": "src/Data-Glome-Solid.html#m_white",
          "type": "function"
        },
        "index": {
          "description": "Uniform white material",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "m_white",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:m_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePick the closest of two Rayints\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "nearest",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Rayint -\u003e Rayint",
          "source": "src/Data-Glome-Solid.html#nearest",
          "type": "function"
        },
        "index": {
          "description": "Pick the closest of two Rayints",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "nearest",
          "normalized": "Rayint-\u003eRayint-\u003eRayint",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eRayint-\u003eRayint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "nearest_debug",
          "package": "GlomeTrace",
          "signature": "(Rayint, Int) -\u003e (Rayint, Int) -\u003e (Rayint, Int)",
          "source": "src/Data-Glome-Solid.html#nearest_debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "nearest_debug",
          "normalized": "(Rayint,Int)-\u003e(Rayint,Int)-\u003e(Rayint,Int)",
          "package": "GlomeTrace",
          "signature": "(Rayint,Int)-\u003e(Rayint,Int)-\u003e(Rayint,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest_debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "nearest_packetresult",
          "package": "GlomeTrace",
          "signature": "PacketResult -\u003e PacketResult -\u003e PacketResult",
          "source": "src/Data-Glome-Solid.html#nearest_packetresult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "nearest_packetresult",
          "normalized": "PacketResult-\u003ePacketResult-\u003ePacketResult",
          "package": "GlomeTrace",
          "signature": "PacketResult-\u003ePacketResult-\u003ePacketResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest_packetresult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "norm",
          "package": "GlomeTrace",
          "signature": "Vec",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "norm",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "nothing",
          "package": "GlomeTrace",
          "signature": "SolidItem",
          "source": "src/Data-Glome-Solid.html#nothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "nothing",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace four rays at once against a solid.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "packetint",
          "package": "GlomeTrace",
          "signature": "a -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
          "source": "src/Data-Glome-Solid.html#packetint",
          "type": "method"
        },
        "index": {
          "description": "Trace four rays at once against solid",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "packetint",
          "normalized": "a-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "package": "GlomeTrace",
          "signature": "a-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "packetint_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
          "source": "src/Data-Glome-Solid.html#packetint_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "packetint_group",
          "normalized": "[SolidItem]-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "packetint_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
          "source": "src/Data-Glome-Solid.html#packetint_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "packetint_instance",
          "normalized": "Instance-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "packetmiss",
          "package": "GlomeTrace",
          "signature": "PacketResult",
          "source": "src/Data-Glome-Solid.html#packetmiss",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "packetmiss",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetmiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pcadd",
          "package": "GlomeTrace",
          "signature": "Pcount -\u003e Pcount -\u003e Pcount",
          "source": "src/Data-Glome-Solid.html#pcadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pcadd",
          "normalized": "Pcount-\u003ePcount-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "Pcount-\u003ePcount-\u003ePcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pcnone",
          "package": "GlomeTrace",
          "signature": "Pcount",
          "source": "src/Data-Glome-Solid.html#pcnone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pcnone",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcnone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pcsinglebound",
          "package": "GlomeTrace",
          "signature": "Pcount",
          "source": "src/Data-Glome-Solid.html#pcsinglebound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pcsinglebound",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsinglebound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pcsingleprim",
          "package": "GlomeTrace",
          "signature": "Pcount",
          "source": "src/Data-Glome-Solid.html#pcsingleprim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pcsingleprim",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsingleprim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pcsinglexfm",
          "package": "GlomeTrace",
          "signature": "Pcount",
          "source": "src/Data-Glome-Solid.html#pcsinglexfm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pcsinglexfm",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsinglexfm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "pos",
          "package": "GlomeTrace",
          "signature": "Vec",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "pos",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCount the number of primitives, transforms, and bounding\n objects in a scene.  Simple objects can just use the default,\n which is to return a single primitive.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "primcount",
          "package": "GlomeTrace",
          "signature": "a -\u003e Pcount",
          "source": "src/Data-Glome-Solid.html#primcount",
          "type": "method"
        },
        "index": {
          "description": "Count the number of primitives transforms and bounding objects in scene Simple objects can just use the default which is to return single primitive",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "primcount",
          "normalized": "a-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "a-\u003ePcount",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "primcount_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Pcount",
          "source": "src/Data-Glome-Solid.html#primcount_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "primcount_group",
          "normalized": "[SolidItem]-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003ePcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "primcount_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Pcount",
          "source": "src/Data-Glome-Solid.html#primcount_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "primcount_instance",
          "normalized": "Instance-\u003ePcount",
          "package": "GlomeTrace",
          "signature": "Instance-\u003ePcount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest a ray against a solid, returning a ray intersection.\n The distance parameter is used to specify a max distance.\n If it's further away, we aren't interested in the intersection.\n The texture parameter is a default texture we use, if it's not\n overridden by a more specific texture.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "rayint",
          "package": "GlomeTrace",
          "signature": "rayint",
          "source": "src/Data-Glome-Solid.html#rayint",
          "type": "method"
        },
        "index": {
          "description": "Test ray against solid returning ray intersection The distance parameter is used to specify max distance If it further away we aren interested in the intersection The texture parameter is default texture we use if it not overridden by more specific texture",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint",
          "package": "GlomeTrace",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a ray forward and test the new ray against an object.\n Fix the depth of the result.  Useful in CSG\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "rayint_advance",
          "package": "GlomeTrace",
          "signature": "SolidItem -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Flt -\u003e Rayint",
          "source": "src/Data-Glome-Solid.html#rayint_advance",
          "type": "function"
        },
        "index": {
          "description": "Move ray forward and test the new ray against an object Fix the depth of the result Useful in CSG",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_advance",
          "normalized": "SolidItem-\u003eRay-\u003eFlt-\u003eTexture-\u003eFlt-\u003eRayint",
          "package": "GlomeTrace",
          "signature": "SolidItem-\u003eRay-\u003eFlt-\u003eTexture-\u003eFlt-\u003eRayint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_advance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as rayint, but return a count of the number of\n primitives checked.  Useful for optimizing acceleration structures.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "rayint_debug",
          "package": "GlomeTrace",
          "signature": "a -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
          "source": "src/Data-Glome-Solid.html#rayint_debug",
          "type": "method"
        },
        "index": {
          "description": "Same as rayint but return count of the number of primitives checked Useful for optimizing acceleration structures",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_debug",
          "normalized": "a-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "package": "GlomeTrace",
          "signature": "a-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "rayint_debug_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
          "source": "src/Data-Glome-Solid.html#rayint_debug_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_debug_group",
          "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "rayint_debug_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
          "source": "src/Data-Glome-Solid.html#rayint_debug_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_debug_instance",
          "normalized": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "rayint_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Rayint",
          "source": "src/Data-Glome-Solid.html#rayint_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_group",
          "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "rayint_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Rayint",
          "source": "src/Data-Glome-Solid.html#rayint_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "rayint_instance",
          "normalized": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "raymiss",
          "package": "GlomeTrace",
          "signature": "Rayint",
          "source": "src/Data-Glome-Solid.html#raymiss",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "raymiss",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:raymiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "refl",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "refl",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "refr",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "refr",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:refr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShadow test - we just return a Bool rather than return a \n a full Rayint.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "shadow",
          "package": "GlomeTrace",
          "signature": "a -\u003e Ray -\u003e Flt -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#shadow",
          "type": "method"
        },
        "index": {
          "description": "Shadow test we just return Bool rather than return full Rayint",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "shadow",
          "normalized": "a-\u003eRay-\u003eFlt-\u003eBool",
          "package": "GlomeTrace",
          "signature": "a-\u003eRay-\u003eFlt-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "shadow_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#shadow_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "shadow_group",
          "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eBool",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "shadow_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e Ray -\u003e Flt -\u003e Bool",
          "source": "src/Data-Glome-Solid.html#shadow_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "shadow_instance",
          "normalized": "Instance-\u003eRay-\u003eFlt-\u003eBool",
          "package": "GlomeTrace",
          "signature": "Instance-\u003eRay-\u003eFlt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "shine",
          "package": "GlomeTrace",
          "signature": "Flt",
          "source": "src/Data-Glome-Solid.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "shine",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is sort of a no-op; textures are functions, and we don't have a\n good way to show an arbitrary function\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "showTexture",
          "package": "GlomeTrace",
          "signature": "Texture -\u003e String",
          "source": "src/Data-Glome-Solid.html#showTexture",
          "type": "function"
        },
        "index": {
          "description": "This is sort of no-op textures are functions and we don have good way to show an arbitrary function",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "showTexture",
          "normalized": "Texture-\u003eString",
          "package": "GlomeTrace",
          "partial": "Texture",
          "signature": "Texture-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:showTexture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform texture\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "t_uniform",
          "package": "GlomeTrace",
          "signature": "Material -\u003e Texture",
          "source": "src/Data-Glome-Solid.html#t_uniform",
          "type": "function"
        },
        "index": {
          "description": "Uniform texture",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "t_uniform",
          "normalized": "Material-\u003eTexture",
          "package": "GlomeTrace",
          "signature": "Material-\u003eTexture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:t_uniform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "t_white",
          "package": "GlomeTrace",
          "signature": "t -\u003e Material",
          "source": "src/Data-Glome-Solid.html#t_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "t_white",
          "normalized": "a-\u003eMaterial",
          "package": "GlomeTrace",
          "signature": "t-\u003eMaterial",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:t_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "texture",
          "package": "GlomeTrace",
          "signature": "Texture",
          "source": "src/Data-Glome-Solid.html#Rayint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "texture",
          "package": "GlomeTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:texture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost simple objects just return themselves as a singleton list,\n but for composite objects, we flatten the structure out and \n return a list.  We usually do this prior to re-building a \n composite object in a (hopefully) more efficient fashion.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "tolist",
          "package": "GlomeTrace",
          "signature": "a -\u003e [SolidItem]",
          "source": "src/Data-Glome-Solid.html#tolist",
          "type": "method"
        },
        "index": {
          "description": "Most simple objects just return themselves as singleton list but for composite objects we flatten the structure out and return list We usually do this prior to re-building composite object in hopefully more efficient fashion",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "tolist",
          "normalized": "a-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "a-\u003e[SolidItem]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:tolist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new object transformed by some transformation.  The\n reason this method exists is so we can override it for the\n Instance type - if we transform a transformation, we should\n combine the two matricies into one.\n Most objects can use the default implementation.\n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "transform",
          "package": "GlomeTrace",
          "signature": "a -\u003e [Xfm] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Create new object transformed by some transformation The reason this method exists is so we can override it for the Instance type if we transform transformation we should combine the two matricies into one Most objects can use the default implementation",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "transform",
          "normalized": "a-\u003e[Xfm]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "a-\u003e[Xfm]-\u003eSolidItem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "transform_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e [Xfm] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#transform_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "transform_instance",
          "normalized": "Instance-\u003e[Xfm]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Instance-\u003e[Xfm]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed by flatten_transform.  I don't really remember how it works. \n\u003c/p\u003e",
          "module": "Data.Glome.Solid",
          "name": "transform_leaf",
          "package": "GlomeTrace",
          "signature": "a -\u003e [Xfm] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#transform_leaf",
          "type": "method"
        },
        "index": {
          "description": "Used by flatten transform don really remember how it works",
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "transform_leaf",
          "normalized": "a-\u003e[Xfm]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "a-\u003e[Xfm]-\u003eSolidItem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "transform_leaf_group",
          "package": "GlomeTrace",
          "signature": "[SolidItem] -\u003e [Xfm] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#transform_leaf_group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "transform_leaf_group",
          "normalized": "[SolidItem]-\u003e[Xfm]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "[SolidItem]-\u003e[Xfm]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Solid",
          "name": "transform_leaf_instance",
          "package": "GlomeTrace",
          "signature": "Instance -\u003e [Xfm] -\u003e SolidItem",
          "source": "src/Data-Glome-Solid.html#transform_leaf_instance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Solid",
          "module": "Data.Glome.Solid",
          "name": "transform_leaf_instance",
          "normalized": "Instance-\u003e[Xfm]-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Instance-\u003e[Xfm]-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "Spd",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Spd.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "Spd",
          "package": "GlomeTrace",
          "partial": "Spd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "BgColor",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Spd.html#BgColor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "BgColor",
          "package": "GlomeTrace",
          "partial": "Bg Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#t:BgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "BgColor",
          "package": "GlomeTrace",
          "signature": "BgColor Color",
          "source": "src/Data-Glome-Spd.html#BgColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "BgColor",
          "package": "GlomeTrace",
          "partial": "Bg Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:BgColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "accum_rss",
          "package": "GlomeTrace",
          "signature": "[Camera] -\u003e [Light] -\u003e [SolidItem] -\u003e [BgColor] -\u003e String -\u003e ([Camera], [Light], [SolidItem], [BgColor], String)",
          "source": "src/Data-Glome-Spd.html#accum_rss",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "accum_rss",
          "normalized": "[Camera]-\u003e[Light]-\u003e[SolidItem]-\u003e[BgColor]-\u003eString-\u003e([Camera],[Light],[SolidItem],[BgColor],String)",
          "package": "GlomeTrace",
          "signature": "[Camera]-\u003e[Light]-\u003e[SolidItem]-\u003e[BgColor]-\u003eString-\u003e([Camera],[Light],[SolidItem],[BgColor],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:accum_rss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "lexcr",
          "package": "GlomeTrace",
          "signature": "String -\u003e [(String, String)]",
          "source": "src/Data-Glome-Spd.html#lexcr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "lexcr",
          "normalized": "String-\u003e[(String,String)]",
          "package": "GlomeTrace",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:lexcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "lexignore",
          "package": "GlomeTrace",
          "signature": "[Char] -\u003e [(String, String)]",
          "source": "src/Data-Glome-Spd.html#lexignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "lexignore",
          "normalized": "[Char]-\u003e[(String,String)]",
          "package": "GlomeTrace",
          "signature": "[Char]-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:lexignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdBackground",
          "package": "GlomeTrace",
          "signature": "ReadS BgColor",
          "source": "src/Data-Glome-Spd.html#readsSpdBackground",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdBackground",
          "package": "GlomeTrace",
          "partial": "Spd Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdCam",
          "package": "GlomeTrace",
          "signature": "ReadS Camera",
          "source": "src/Data-Glome-Spd.html#readsSpdCam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdCam",
          "package": "GlomeTrace",
          "partial": "Spd Cam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdCam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdClr",
          "package": "GlomeTrace",
          "signature": "ReadS Color",
          "source": "src/Data-Glome-Spd.html#readsSpdClr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdClr",
          "package": "GlomeTrace",
          "partial": "Spd Clr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdClr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdFill",
          "package": "GlomeTrace",
          "signature": "ReadS Texture",
          "source": "src/Data-Glome-Spd.html#readsSpdFill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdFill",
          "package": "GlomeTrace",
          "partial": "Spd Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdLight",
          "package": "GlomeTrace",
          "signature": "ReadS Light",
          "source": "src/Data-Glome-Spd.html#readsSpdLight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdLight",
          "package": "GlomeTrace",
          "partial": "Spd Light",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdLight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdPrims",
          "package": "GlomeTrace",
          "signature": "ReadS [SolidItem]",
          "source": "src/Data-Glome-Spd.html#readsSpdPrims",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdPrims",
          "normalized": "ReadS[SolidItem]",
          "package": "GlomeTrace",
          "partial": "Spd Prims",
          "signature": "ReadS[SolidItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdPrims"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdScene",
          "package": "GlomeTrace",
          "signature": "ReadS Scene",
          "source": "src/Data-Glome-Spd.html#readsSpdScene",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdScene",
          "package": "GlomeTrace",
          "partial": "Spd Scene",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdScene"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdSolid",
          "package": "GlomeTrace",
          "signature": "ReadS SolidItem",
          "source": "src/Data-Glome-Spd.html#readsSpdSolid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdSolid",
          "package": "GlomeTrace",
          "partial": "Spd Solid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdSolid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdTextureGroup",
          "package": "GlomeTrace",
          "signature": "ReadS SolidItem",
          "source": "src/Data-Glome-Spd.html#readsSpdTextureGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdTextureGroup",
          "package": "GlomeTrace",
          "partial": "Spd Texture Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdTextureGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdVec",
          "package": "GlomeTrace",
          "signature": "ReadS Vec",
          "source": "src/Data-Glome-Spd.html#readsSpdVec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdVec",
          "package": "GlomeTrace",
          "partial": "Spd Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecNorm",
          "package": "GlomeTrace",
          "signature": "ReadS (Vec, Vec)",
          "source": "src/Data-Glome-Spd.html#readsSpdVecNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecNorm",
          "normalized": "ReadS(Vec,Vec)",
          "package": "GlomeTrace",
          "partial": "Spd Vec Norm",
          "signature": "ReadS(Vec,Vec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecs",
          "package": "GlomeTrace",
          "signature": "ReadS [Vec]",
          "source": "src/Data-Glome-Spd.html#readsSpdVecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecs",
          "normalized": "ReadS[Vec]",
          "package": "GlomeTrace",
          "partial": "Spd Vecs",
          "signature": "ReadS[Vec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecsNorms",
          "package": "GlomeTrace",
          "signature": "ReadS [(Vec, Vec)]",
          "source": "src/Data-Glome-Spd.html#readsSpdVecsNorms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Spd",
          "module": "Data.Glome.Spd",
          "name": "readsSpdVecsNorms",
          "normalized": "ReadS[(Vec,Vec)]",
          "package": "GlomeTrace",
          "partial": "Spd Vecs Norms",
          "signature": "ReadS[(Vec,Vec)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecsNorms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Sphere",
          "name": "Sphere",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Sphere.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Sphere",
          "module": "Data.Glome.Sphere",
          "name": "Sphere",
          "package": "GlomeTrace",
          "partial": "Sphere",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Sphere.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a sphere given a center location and a radius.\n\u003c/p\u003e",
          "module": "Data.Glome.Sphere",
          "name": "sphere",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Flt -\u003e SolidItem",
          "source": "src/Data-Glome-Sphere.html#sphere",
          "type": "function"
        },
        "index": {
          "description": "Construct sphere given center location and radius",
          "hierarchy": "Data Glome Sphere",
          "module": "Data.Glome.Sphere",
          "name": "sphere",
          "normalized": "Vec-\u003eFlt-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eFlt-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Sphere.html#v:sphere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Tex",
          "name": "Tex",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Tex.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Tex",
          "module": "Data.Glome.Tex",
          "name": "Tex",
          "package": "GlomeTrace",
          "partial": "Tex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Tex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate a texture with an object.  For composite\n objects, the shader uses the innermost texture.\n\u003c/p\u003e",
          "module": "Data.Glome.Tex",
          "name": "tex",
          "package": "GlomeTrace",
          "signature": "SolidItem -\u003e Texture -\u003e SolidItem",
          "source": "src/Data-Glome-Tex.html#tex",
          "type": "function"
        },
        "index": {
          "description": "Associate texture with an object For composite objects the shader uses the innermost texture",
          "hierarchy": "Data Glome Tex",
          "module": "Data.Glome.Tex",
          "name": "tex",
          "normalized": "SolidItem-\u003eTexture-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "SolidItem-\u003eTexture-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Tex.html#v:tex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Trace",
          "name": "Trace",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Trace.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "Trace",
          "package": "GlomeTrace",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of tracing a packet of 4 rays at once.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "PacketColor",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Trace.html#PacketColor",
          "type": "data"
        },
        "index": {
          "description": "Result of tracing packet of rays at once",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "PacketColor",
          "package": "GlomeTrace",
          "partial": "Packet Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#t:PacketColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Trace",
          "name": "PacketColor",
          "package": "GlomeTrace",
          "signature": "PacketColor !Color !Color !Color !Color",
          "source": "src/Data-Glome-Trace.html#PacketColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "PacketColor",
          "package": "GlomeTrace",
          "partial": "Packet Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:PacketColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Trace",
          "name": "debug_norm_shade",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Ray -\u003e Scene -\u003e Int -\u003e Int -\u003e Color",
          "source": "src/Data-Glome-Trace.html#debug_norm_shade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "debug_norm_shade",
          "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:debug_norm_shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Trace",
          "name": "flat_shade",
          "package": "GlomeTrace",
          "signature": "Rayint -\u003e Ray -\u003e Scene -\u003e Int -\u003e Int -\u003e Color",
          "source": "src/Data-Glome-Trace.html#flat_shade",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "flat_shade",
          "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:flat_shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the lighting routine that handles diffuse light, shadows, \n specular highlights and reflection.  Given a ray intersection, the ray,\n a scene, and a recursion limit, return a color.  \u003ca\u003eDebug\u003c/a\u003e is a parameter\n useful for debugging; sometimes we might want to tint the color by \n the number of bounding boxes tested or something similar.\n Todo: refraction\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "shade",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003e Ray-\u003e Scene-\u003e Int-\u003e Int-\u003e Color",
          "type": "function"
        },
        "index": {
          "description": "This is the lighting routine that handles diffuse light shadows specular highlights and reflection Given ray intersection the ray scene and recursion limit return color Debug is parameter useful for debugging sometimes we might want to tint the color by the number of bounding boxes tested or something similar Todo refraction",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "shade",
          "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:shade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a scene, a ray, a maximum distance, and a maximum\n recursion depth, test the ray for intersection against \n the object within the scene, then pass the ray intersection\n to the shade routine (which may trace secondary rays of its \n own), which returns a color.  For most applications, this is\n the entry point into the ray tracer.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "trace",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e Color",
          "source": "src/Data-Glome-Trace.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Given scene ray maximum distance and maximum recursion depth test the ray for intersection against the object within the scene then pass the ray intersection to the shade routine which may trace secondary rays of its own which returns color For most applications this is the entry point into the ray tracer",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "trace",
          "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trace function which returns some additional debugging\n info, mainly for performance tuning.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "trace_debug",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e Color",
          "source": "src/Data-Glome-Trace.html#trace_debug",
          "type": "function"
        },
        "index": {
          "description": "trace function which returns some additional debugging info mainly for performance tuning",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "trace_debug",
          "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
          "package": "GlomeTrace",
          "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to trace, but return depth as well as color.\n We might want the depth for post-processing effects.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "trace_depth",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e (Color, Flt)",
          "source": "src/Data-Glome-Trace.html#trace_depth",
          "type": "function"
        },
        "index": {
          "description": "Similar to trace but return depth as well as color We might want the depth for post-processing effects",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "trace_depth",
          "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Flt)",
          "package": "GlomeTrace",
          "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Flt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace a packet of four rays at a time.  Sometimes, this\n may be a performance advantage.  However, ever since my \n transition to typeclasses, this has not performed any better\n than the mono-ray path.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "trace_packet",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Int -\u003e PacketColor",
          "source": "src/Data-Glome-Trace.html#trace_packet",
          "type": "function"
        },
        "index": {
          "description": "Trace packet of four rays at time Sometimes this may be performance advantage However ever since my transition to typeclasses this has not performed any better than the mono-ray path",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "trace_packet",
          "normalized": "Scene-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eInt-\u003ePacketColor",
          "package": "GlomeTrace",
          "signature": "Scene-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eInt-\u003ePacketColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_packet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to trace, but return hit position as well as color.\n\u003c/p\u003e",
          "module": "Data.Glome.Trace",
          "name": "trace_pos",
          "package": "GlomeTrace",
          "signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e (Color, Vec)",
          "source": "src/Data-Glome-Trace.html#trace_pos",
          "type": "function"
        },
        "index": {
          "description": "Similar to trace but return hit position as well as color",
          "hierarchy": "Data Glome Trace",
          "module": "Data.Glome.Trace",
          "name": "trace_pos",
          "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Vec)",
          "package": "GlomeTrace",
          "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Vec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Glome.Triangle",
          "name": "Triangle",
          "package": "GlomeTrace",
          "source": "src/Data-Glome-Triangle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Glome Triangle",
          "module": "Data.Glome.Triangle",
          "name": "Triangle",
          "package": "GlomeTrace",
          "partial": "Triangle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple triangle from its 3 corners.\n The normals are computed automatically.\n\u003c/p\u003e",
          "module": "Data.Glome.Triangle",
          "name": "triangle",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e Vec -\u003e SolidItem",
          "source": "src/Data-Glome-Triangle.html#triangle",
          "type": "function"
        },
        "index": {
          "description": "Create simple triangle from its corners The normals are computed automatically",
          "hierarchy": "Data Glome Triangle",
          "module": "Data.Glome.Triangle",
          "name": "triangle",
          "normalized": "Vec-\u003eVec-\u003eVec-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eVec-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a triangle from a list of verticies, and \n a list of normal vectors (one for each vertex).\n\u003c/p\u003e",
          "module": "Data.Glome.Triangle",
          "name": "trianglenorm",
          "package": "GlomeTrace",
          "signature": "Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e SolidItem",
          "source": "src/Data-Glome-Triangle.html#trianglenorm",
          "type": "function"
        },
        "index": {
          "description": "Create triangle from list of verticies and list of normal vectors one for each vertex",
          "hierarchy": "Data Glome Triangle",
          "module": "Data.Glome.Triangle",
          "name": "trianglenorm",
          "normalized": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eSolidItem",
          "package": "GlomeTrace",
          "signature": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eSolidItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:trianglenorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a triangle fan from a list of verticies.\n\u003c/p\u003e",
          "module": "Data.Glome.Triangle",
          "name": "triangles",
          "package": "GlomeTrace",
          "signature": "[Vec] -\u003e [SolidItem]",
          "source": "src/Data-Glome-Triangle.html#triangles",
          "type": "function"
        },
        "index": {
          "description": "Create triangle fan from list of verticies",
          "hierarchy": "Data Glome Triangle",
          "module": "Data.Glome.Triangle",
          "name": "triangles",
          "normalized": "[Vec]-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "[Vec]-\u003e[SolidItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:triangles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a triangle fan from a list of verticies and normals.\n\u003c/p\u003e",
          "module": "Data.Glome.Triangle",
          "name": "trianglesnorms",
          "package": "GlomeTrace",
          "signature": "[(Vec, Vec)] -\u003e [SolidItem]",
          "source": "src/Data-Glome-Triangle.html#trianglesnorms",
          "type": "function"
        },
        "index": {
          "description": "Create triangle fan from list of verticies and normals",
          "hierarchy": "Data Glome Triangle",
          "module": "Data.Glome.Triangle",
          "name": "trianglesnorms",
          "normalized": "[(Vec,Vec)]-\u003e[SolidItem]",
          "package": "GlomeTrace",
          "signature": "[(Vec,Vec)]-\u003e[SolidItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:trianglesnorms"
      }
    }
  ]
]