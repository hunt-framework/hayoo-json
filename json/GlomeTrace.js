[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bih.html#",
      "description": {
        "fct-module": "Data.Glome.Bih",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Bih.html",
        "fct-type": "module",
        "title": "Bih"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Bih",
        "module": "Data.Glome.Bih",
        "name": "Bih",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Bih",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bih.html#v:bih",
      "description": {
        "fct-descr": "\u003cp\u003eThe bih constructor creates a Bounding Interval Heirarchy\n from a list of primitives.  BIH is a type of data structure\n that groups primitives into a heirarchy of bounding objects,\n so that a ray need not be tested against every single\n primitive.  This can make the difference betweeen a rendering\n job that takes days or seconds.  BIH usually performs a little\n worse than a SAH-based KD-tree, but construction time is much\n better.\n\u003c/p\u003e\u003cp\u003eSee http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eBounding_interval_hierarchy\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Bih",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Bih.html#bih",
        "fct-type": "function",
        "title": "bih"
      },
      "index": {
        "description": "The bih constructor creates Bounding Interval Heirarchy from list of primitives BIH is type of data structure that groups primitives into heirarchy of bounding objects so that ray need not be tested against every single primitive This can make the difference betweeen rendering job that takes days or seconds BIH usually performs little worse than SAH-based KD-tree but construction time is much better See http en.wikipedia.org wiki Bounding interval hierarchy",
        "hierarchy": "Data Glome Bih",
        "module": "Data.Glome.Bih",
        "name": "bih",
        "normalized": "[SolidItem]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bound.html#",
      "description": {
        "fct-module": "Data.Glome.Bound",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Bound.html",
        "fct-type": "module",
        "title": "Bound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Bound",
        "module": "Data.Glome.Bound",
        "name": "Bound",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Bound.html#v:bound_object",
      "description": {
        "fct-descr": "\u003cp\u003eUse the first object as a bounding volume for the second\n object.  If a ray misses the first object, it is assumed to\n miss the second object.  Used primarily to improve performance.\n In general, bih will usually perform better than \n manually-constructed bounds, though.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Bound",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem -\u003e SolidItem -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Bound.html#bound_object",
        "fct-type": "function",
        "title": "bound_object"
      },
      "index": {
        "description": "Use the first object as bounding volume for the second object If ray misses the first object it is assumed to miss the second object Used primarily to improve performance In general bih will usually perform better than manually-constructed bounds though",
        "hierarchy": "Data Glome Bound",
        "module": "Data.Glome.Bound",
        "name": "bound_object",
        "normalized": "SolidItem-\u003eSolidItem-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "SolidItem-\u003eSolidItem-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Box.html#",
      "description": {
        "fct-module": "Data.Glome.Box",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Box.html",
        "fct-type": "module",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Box",
        "module": "Data.Glome.Box",
        "name": "Box",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Box.html#v:box",
      "description": {
        "fct-module": "Data.Glome.Box",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Box.html#box",
        "fct-type": "function",
        "title": "box"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Box",
        "module": "Data.Glome.Box",
        "name": "box",
        "normalized": "Vec-\u003eVec-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Clr.html",
        "fct-type": "module",
        "title": "Clr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "Clr",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Clr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#t:CFlt",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "type",
        "fct-source": "src/Data-Glome-Clr.html#CFlt",
        "fct-type": "type",
        "title": "CFlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "CFlt",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "CFlt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#t:Color",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Clr.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "Color",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:Color",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#Color",
        "fct-type": "function",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "Color",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:b",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "!CFlt",
        "fct-source": "src/Data-Glome-Clr.html#Color",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "b",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_black",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#c_black",
        "fct-type": "function",
        "title": "c_black"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "c_black",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_blue",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#c_blue",
        "fct-type": "function",
        "title": "c_blue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "c_blue",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_green",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#c_green",
        "fct-type": "function",
        "title": "c_green"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "c_green",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_red",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#c_red",
        "fct-type": "function",
        "title": "c_red"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "c_red",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:c_white",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Clr.html#c_white",
        "fct-type": "function",
        "title": "c_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "c_white",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cadd",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e Color -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cadd",
        "fct-type": "function",
        "title": "cadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cadd",
        "normalized": "Color-\u003eColor-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eColor-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cavg",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e Color -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cavg",
        "fct-type": "function",
        "title": "cavg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cavg",
        "normalized": "Color-\u003eColor-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eColor-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cclamp",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cclamp",
        "fct-type": "function",
        "title": "cclamp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cclamp",
        "normalized": "Color-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cdiv",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e CFlt -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cdiv",
        "fct-type": "function",
        "title": "cdiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cdiv",
        "normalized": "Color-\u003eCFlt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eCFlt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cmul",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e Color -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cmul",
        "fct-type": "function",
        "title": "cmul"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cmul",
        "normalized": "Color-\u003eColor-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eColor-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cscale",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e CFlt -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cscale",
        "fct-type": "function",
        "title": "cscale"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cscale",
        "normalized": "Color-\u003eCFlt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eCFlt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:cscaleadd",
      "description": {
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color -\u003e Color -\u003e CFlt -\u003e Color",
        "fct-source": "src/Data-Glome-Clr.html#cscaleadd",
        "fct-type": "function",
        "title": "cscaleadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "cscaleadd",
        "normalized": "Color-\u003eColor-\u003eCFlt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Color-\u003eColor-\u003eCFlt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:g",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "!CFlt",
        "fct-source": "src/Data-Glome-Clr.html#Color",
        "fct-type": "function",
        "title": "g"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "g",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Clr.html#v:r",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Clr",
        "fct-package": "GlomeTrace",
        "fct-signature": "!CFlt",
        "fct-source": "src/Data-Glome-Clr.html#Color",
        "fct-type": "function",
        "title": "r"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Clr",
        "module": "Data.Glome.Clr",
        "name": "r",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#",
      "description": {
        "fct-module": "Data.Glome.Cone",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Cone.html",
        "fct-type": "module",
        "title": "Cone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Cone",
        "module": "Data.Glome.Cone",
        "name": "Cone",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Cone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:cone",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a cone from p1 to p2.  R1 and r2 are the radii at each\n end.  A cone need not come to a point at either end.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Cone",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Flt -\u003e Vec -\u003e Flt -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Cone.html#cone",
        "fct-type": "function",
        "title": "cone"
      },
      "index": {
        "description": "Construct cone from p1 to p2 R1 and r2 are the radii at each end cone need not come to point at either end",
        "hierarchy": "Data Glome Cone",
        "module": "Data.Glome.Cone",
        "name": "cone",
        "normalized": "Vec-\u003eFlt-\u003eVec-\u003eFlt-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eFlt-\u003eVec-\u003eFlt-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:cylinder",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a general cylinder from p1 to p2 with radius r.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Cone",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e Flt -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Cone.html#cylinder",
        "fct-type": "function",
        "title": "cylinder"
      },
      "index": {
        "description": "Construct general cylinder from p1 to p2 with radius",
        "hierarchy": "Data Glome Cone",
        "module": "Data.Glome.Cone",
        "name": "cylinder",
        "normalized": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Cone.html#v:disc",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a disc.  These are used as the end-caps on cones and cylinders,\n but they can be constructed by themselves as well.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Cone",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e Flt -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Cone.html#disc",
        "fct-type": "function",
        "title": "disc"
      },
      "index": {
        "description": "Create disc These are used as the end-caps on cones and cylinders but they can be constructed by themselves as well",
        "hierarchy": "Data Glome Cone",
        "module": "Data.Glome.Cone",
        "name": "disc",
        "normalized": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eFlt-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#",
      "description": {
        "fct-module": "Data.Glome.Csg",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Csg.html",
        "fct-type": "module",
        "title": "Csg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Csg",
        "module": "Data.Glome.Csg",
        "name": "Csg",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Csg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new object based on the subtraction of the second item\n from the first.  This only works if the items have a well-defined\n inside and outside.  Triangles and discs, for instance, have no \n volume, so subtracting them from anything won't do anything.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Csg",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem -\u003e SolidItem -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Csg.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Create new object based on the subtraction of the second item from the first This only works if the items have well-defined inside and outside Triangles and discs for instance have no volume so subtracting them from anything won do anything",
        "hierarchy": "Data Glome Csg",
        "module": "Data.Glome.Csg",
        "name": "difference",
        "normalized": "SolidItem-\u003eSolidItem-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "SolidItem-\u003eSolidItem-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Csg.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new item from the boolean intersection of a\n list of solids.  A point is inside the object iff it is\n inside every primitive.  We can construct polyhedra from\n intersections of planes, but this isn't the most efficient\n way to do that.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Csg",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Csg.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Create new item from the boolean intersection of list of solids point is inside the object iff it is inside every primitive We can construct polyhedra from intersections of planes but this isn the most efficient way to do that",
        "hierarchy": "Data Glome Csg",
        "module": "Data.Glome.Csg",
        "name": "intersection",
        "normalized": "[SolidItem]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#",
      "description": {
        "fct-module": "Data.Glome.Plane",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Plane.html",
        "fct-type": "module",
        "title": "Plane"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Plane",
        "module": "Data.Glome.Plane",
        "name": "Plane",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Plane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#v:plane",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a plane (or, more accurately, a half-space)\n by specifying a point on the plane and a normal.\n The normal points towards the outside of the plane.\n Planes are often useful within CSG objects.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Plane",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Plane.html#plane",
        "fct-type": "function",
        "title": "plane"
      },
      "index": {
        "description": "Construct plane or more accurately half-space by specifying point on the plane and normal The normal points towards the outside of the plane Planes are often useful within CSG objects",
        "hierarchy": "Data Glome Plane",
        "module": "Data.Glome.Plane",
        "name": "plane",
        "normalized": "Vec-\u003eVec-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Plane.html#v:plane_offset",
      "description": {
        "fct-module": "Data.Glome.Plane",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Flt -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Plane.html#plane_offset",
        "fct-type": "function",
        "title": "plane_offset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Plane",
        "module": "Data.Glome.Plane",
        "name": "plane_offset",
        "normalized": "Vec-\u003eFlt-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eFlt-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Scene.html",
        "fct-type": "module",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Camera",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Scene.html#Camera",
        "fct-type": "data",
        "title": "Camera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Camera",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Camera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Light",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Scene.html#Light",
        "fct-type": "data",
        "title": "Light"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Light",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#t:Scene",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "data",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Camera",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Camera !Vec !Vec !Vec !Vec",
        "fct-source": "src/Data-Glome-Scene.html#Camera",
        "fct-type": "function",
        "title": "Camera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Camera",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Camera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Light",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Light !Vec !Color !Flt !Flt !Bool",
        "fct-source": "src/Data-Glome-Scene.html#Light",
        "fct-type": "function",
        "title": "Light"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Light",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:Scene",
      "description": {
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "Scene"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "Scene",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:bground",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Color",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "bground"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "bground",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:cam",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Camera",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "cam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "cam",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:camera",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a camera, given a position, a forward vector, \n a point that the camera should be pointed towards, an up vector,\n and a right vector.  The up and right vectors don't have to be\n normalized or perfectly orthogonal.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e Vec -\u003e Flt -\u003e Camera",
        "fct-source": "src/Data-Glome-Scene.html#camera",
        "fct-type": "function",
        "title": "camera"
      },
      "index": {
        "description": "Construct camera given position forward vector point that the camera should be pointed towards an up vector and right vector The up and right vectors don have to be normalized or perfectly orthogonal",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "camera",
        "normalized": "Vec-\u003eVec-\u003eVec-\u003eFlt-\u003eCamera",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec-\u003eFlt-\u003eCamera"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:dtex",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Texture",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "dtex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "dtex",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:light",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a light given a center location and a color.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Color -\u003e Light",
        "fct-source": "src/Data-Glome-Scene.html#light",
        "fct-type": "function",
        "title": "light"
      },
      "index": {
        "description": "Construct light given center location and color",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "light",
        "normalized": "Vec-\u003eColor-\u003eLight",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eColor-\u003eLight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:lits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "[Light]",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "lits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "lits",
        "normalized": "[Light]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[Light]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:primcount_scene",
      "description": {
        "fct-descr": "\u003cp\u003eCount the primitives in the scene.  See docs for primcount \n in Solid.hs.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Pcount",
        "fct-source": "src/Data-Glome-Scene.html#primcount_scene",
        "fct-type": "function",
        "title": "primcount_scene"
      },
      "index": {
        "description": "Count the primitives in the scene See docs for primcount in Solid.hs",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "primcount_scene",
        "normalized": "Scene-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:scene",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a scene from an item (which can be a composite item, such \n as a bih or group), a list of lights, a camera, a default texture,\n and a default background color.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem -\u003e [Light] -\u003e Camera -\u003e Texture -\u003e Color -\u003e Scene",
        "fct-source": "src/Data-Glome-Scene.html#scene",
        "fct-type": "function",
        "title": "scene"
      },
      "index": {
        "description": "Create scene from an item which can be composite item such as bih or group list of lights camera default texture and default background color",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "scene",
        "normalized": "SolidItem-\u003e[Light]-\u003eCamera-\u003eTexture-\u003eColor-\u003eScene",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "SolidItem-\u003e[Light]-\u003eCamera-\u003eTexture-\u003eColor-\u003eScene"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Scene.html#v:sld",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Scene",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem",
        "fct-source": "src/Data-Glome-Scene.html#Scene",
        "fct-type": "function",
        "title": "sld"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Scene",
        "module": "Data.Glome.Scene",
        "name": "sld",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Solid.html",
        "fct-type": "module",
        "title": "Solid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Solid",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Instance",
      "description": {
        "fct-descr": "\u003cp\u003eAn instance is a primitive that has been modified\n by a transformation (i.e. some combination of\n translation, rotation, and scaling).  This is a\n reasonably space-efficient way of making multiple copies\n of a complex object.\n\u003c/p\u003e\u003cp\u003eUsually, the application doesn't need to create an \n instance directly, but should use \u003ca\u003etransform\u003c/a\u003e on an\n existing object.\n\u003c/p\u003e\u003cp\u003eIt's unfortunate that \u003ca\u003einstance\u003c/a\u003e is also a reserved word.  \n \u003ca\u003einstance Solid Instance where...\u003c/a\u003e is a little confusing.\n\u003c/p\u003e\u003cp\u003eThis would be better in its own module, but we need\n \u003ca\u003eInstance\u003c/a\u003e to be defined here so we can define the default \n implementation of \u003ca\u003etransform\u003c/a\u003e in terms on Instance.\n (Mutually recursive modules would be useful, if I could\n get them to work.)\n\u003c/p\u003e\u003cp\u003eAnother good reason to include Instance in Solid.hs\n is that it's referenced from Cone.hs\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#Instance",
        "fct-type": "data",
        "title": "Instance"
      },
      "index": {
        "description": "An instance is primitive that has been modified by transformation i.e some combination of translation rotation and scaling This is reasonably space-efficient way of making multiple copies of complex object Usually the application doesn need to create an instance directly but should use transform on an existing object It unfortunate that instance is also reserved word instance Solid Instance where is little confusing This would be better in its own module but we need Instance to be defined here so we can define the default implementation of transform in terms on Instance Mutually recursive modules would be useful if could get them to work Another good reason to include Instance in Solid.hs is that it referenced from Cone.hs",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Instance",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Instance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Material",
      "description": {
        "fct-descr": "\u003cp\u003eSurface properties at a point on an object's surface.  We have color, \n reflection amount, refraction amount index of refraction, kd, ks, and shine.\n These are parameters to a Whitted - style illumination model.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "data",
        "title": "Material"
      },
      "index": {
        "description": "Surface properties at point on an object surface We have color reflection amount refraction amount index of refraction kd ks and shine These are parameters to Whitted style illumination model",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Material",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:PacketResult",
      "description": {
        "fct-descr": "\u003cp\u003eSometimes, it's more efficient to trace multiple rays against an \n acceleration structure at the same time, provided the rays are almost\n identical.  A PacketResult is the result of tracing 4 rays at once.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#PacketResult",
        "fct-type": "data",
        "title": "PacketResult"
      },
      "index": {
        "description": "Sometimes it more efficient to trace multiple rays against an acceleration structure at the same time provided the rays are almost identical PacketResult is the result of tracing rays at once",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "PacketResult",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Packet Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Pcount",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Glome-Solid.html#Pcount",
        "fct-type": "newtype",
        "title": "Pcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Pcount",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Pcount",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Rayint",
      "description": {
        "fct-descr": "\u003cp\u003eRay intersection type.  If we hit, we store the distance from the ray\n origin, the position, the normal, and the texture attached to the object.\n We could just as easily have created a hit type and wrapped it in a Maybe.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "data",
        "title": "Rayint"
      },
      "index": {
        "description": "Ray intersection type If we hit we store the distance from the ray origin the position the normal and the texture attached to the object We could just as easily have created hit type and wrapped it in Maybe",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Rayint",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Rayint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Solid",
      "description": {
        "fct-descr": "\u003cp\u003eA solid is something we can test a ray against or do inside/outside tests.\n Some of these are simple solids like Sphere or Triangle, but others\n are composite solids than have other solids as children.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "class",
        "fct-source": "src/Data-Glome-Solid.html#Solid",
        "fct-type": "class",
        "title": "Solid"
      },
      "index": {
        "description": "solid is something we can test ray against or do inside outside tests Some of these are simple solids like Sphere or Triangle but others are composite solids than have other solids as children",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Solid",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:SolidItem",
      "description": {
        "fct-descr": "\u003cp\u003eWe create an existential type for solids so we can emded them\n in composite types without know what kind of solid it is.\n http:\u003cem/\u003enotes-on-haskell.blogspot.com\u003cem\u003e2007\u003c/em\u003e01/proxies-and-delegation-vs-existential.html\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#SolidItem",
        "fct-type": "data",
        "title": "SolidItem"
      },
      "index": {
        "description": "We create an existential type for solids so we can emded them in composite types without know what kind of solid it is http notes-on-haskell.blogspot.com proxies-and-delegation-vs-existential.html",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "SolidItem",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Solid Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Texture",
      "description": {
        "fct-descr": "\u003cp\u003eA texture is a function that takes a Rayint and returns a Material.\n In other words, textures can vary based on location, normal, etc...\n in arbitrary ways.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "type",
        "fct-source": "src/Data-Glome-Solid.html#Texture",
        "fct-type": "type",
        "title": "Texture"
      },
      "index": {
        "description": "texture is function that takes Rayint and returns Material In other words textures can vary based on location normal etc in arbitrary ways",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Texture",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Texture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#t:Void",
      "description": {
        "fct-descr": "\u003cp\u003eA Void is a non-object, that we treat as if it were\n one.  This is functionally equivalent to an empty Group.\n (Originally I called this \u003ca\u003eNothing\u003c/a\u003e, but that\n conflicted with the prelude maybe type, so I call\n it \u003ca\u003eVoid\u003c/a\u003e instead) \n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Solid.html#Void",
        "fct-type": "data",
        "title": "Void"
      },
      "index": {
        "description": "Void is non-object that we treat as if it were one This is functionally equivalent to an empty Group Originally called this Nothing but that conflicted with the prelude maybe type so call it Void instead",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Void",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance SolidItem Xfm",
        "fct-source": "src/Data-Glome-Solid.html#Instance",
        "fct-type": "function",
        "title": "Instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Instance",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Instance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Material",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Material",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "Material"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Material",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:PacketResult",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "PacketResult !Rayint !Rayint !Rayint !Rayint",
        "fct-source": "src/Data-Glome-Solid.html#PacketResult",
        "fct-type": "function",
        "title": "PacketResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "PacketResult",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Packet Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Pcount",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount (Int, Int, Int)",
        "fct-source": "src/Data-Glome-Solid.html#Pcount",
        "fct-type": "function",
        "title": "Pcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Pcount",
        "normalized": "Pcount(Int,Int,Int)",
        "package": "GlomeTrace",
        "partial": "Pcount",
        "signature": "Pcount(Int,Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:RayHit",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "RayHit",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "RayHit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "RayHit",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Ray Hit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:RayMiss",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "RayMiss",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "RayMiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "RayMiss",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Ray Miss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:SolidItem",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem a",
        "fct-source": "src/Data-Glome-Solid.html#SolidItem",
        "fct-type": "function",
        "title": "SolidItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "SolidItem",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Solid Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:Void",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Void",
        "fct-source": "src/Data-Glome-Solid.html#Void",
        "fct-type": "function",
        "title": "Void"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "Void",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:asbound",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount -\u003e Pcount",
        "fct-source": "src/Data-Glome-Solid.html#asbound",
        "fct-type": "function",
        "title": "asbound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "asbound",
        "normalized": "Pcount-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Pcount-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an axis-aligned bounding box than completely encloses\n the object.  For performance, it is important that this fits as \n tight as possible.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Bbox",
        "fct-source": "src/Data-Glome-Solid.html#bound",
        "fct-type": "method",
        "title": "bound"
      },
      "index": {
        "description": "Generate an axis-aligned bounding box than completely encloses the object For performance it is important that this fits as tight as possible",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "bound",
        "normalized": "a-\u003eBbox",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003eBbox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Bbox",
        "fct-source": "src/Data-Glome-Solid.html#bound_group",
        "fct-type": "function",
        "title": "bound_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "bound_group",
        "normalized": "[SolidItem]-\u003eBbox",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eBbox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:bound_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Bbox",
        "fct-source": "src/Data-Glome-Solid.html#bound_instance",
        "fct-type": "function",
        "title": "bound_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "bound_instance",
        "normalized": "Instance-\u003eBbox",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eBbox"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:clr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Color",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "clr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "clr",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:debug_wrap",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "(Rayint, Int) -\u003e Int -\u003e (Rayint, Int)",
        "fct-source": "src/Data-Glome-Solid.html#debug_wrap",
        "fct-type": "function",
        "title": "debug_wrap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "debug_wrap",
        "normalized": "(Rayint,Int)-\u003eInt-\u003e(Rayint,Int)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "(Rayint,Int)-\u003eInt-\u003e(Rayint,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:depth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "depth",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:dist",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a distance from a Rayint, with infinity for a miss\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Flt",
        "fct-source": "src/Data-Glome-Solid.html#dist",
        "fct-type": "function",
        "title": "dist"
      },
      "index": {
        "description": "Extract distance from Rayint with infinity for miss",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "dist",
        "normalized": "Rayint-\u003eFlt",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eFlt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_group",
      "description": {
        "fct-descr": "\u003cp\u003eSmash a group of groups into a single group,\n so we can build an efficient bounding heirarchy\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Solid.html#flatten_group",
        "fct-type": "function",
        "title": "flatten_group"
      },
      "index": {
        "description": "Smash group of groups into single group so we can build an efficient bounding heirarchy",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "flatten_group",
        "normalized": "[SolidItem]-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003e[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_transform",
      "description": {
        "fct-descr": "\u003cp\u003eTake a composite object inside a transform, and turn it into\n a group of individually-transformed objects.  Most objects \n can use the defaut implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Solid.html#flatten_transform",
        "fct-type": "method",
        "title": "flatten_transform"
      },
      "index": {
        "description": "Take composite object inside transform and turn it into group of individually-transformed objects Most objects can use the defaut implementation",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "flatten_transform",
        "normalized": "a-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003e[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:flatten_transform_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Solid.html#flatten_transform_instance",
        "fct-type": "function",
        "title": "flatten_transform_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "flatten_transform_instance",
        "normalized": "Instance-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003e[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:furthest",
      "description": {
        "fct-descr": "\u003cp\u003ePick the furthest of two Rayints\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Rayint -\u003e Rayint",
        "fct-source": "src/Data-Glome-Solid.html#furthest",
        "fct-type": "function",
        "title": "furthest"
      },
      "index": {
        "description": "Pick the furthest of two Rayints",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "furthest",
        "normalized": "Rayint-\u003eRayint-\u003eRayint",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eRayint-\u003eRayint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eA group is just a list of objects.  Sometimes its convenient to be \n able to treat a group as if it were a single object, and that is \n exactly what we do here.  The ray intersection routine tests the ray \n against each object in turn.  Not very efficient\n for large groups, but this is a useful building block for\n constructing the leaves of acceleration structures.  (See the bih\n module.)\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "group is just list of objects Sometimes its convenient to be able to treat group as if it were single object and that is exactly what we do here The ray intersection routine tests the ray against each object in turn Not very efficient for large groups but this is useful building block for constructing the leaves of acceleration structures See the bih module",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "group",
        "normalized": "[SolidItem]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:hit",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a Rayint is a hit or a miss\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#hit",
        "fct-type": "function",
        "title": "hit"
      },
      "index": {
        "description": "Test if Rayint is hit or miss",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "hit",
        "normalized": "Rayint-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a point is inside an object.  Useful for CSG.\n Objects with no volume just return False.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Vec -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#inside",
        "fct-type": "method",
        "title": "inside"
      },
      "index": {
        "description": "Test if point is inside an object Useful for CSG Objects with no volume just return False",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "inside",
        "normalized": "a-\u003eVec-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003eVec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Vec -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#inside_group",
        "fct-type": "function",
        "title": "inside_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "inside_group",
        "normalized": "[SolidItem]-\u003eVec-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eVec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:inside_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Vec -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#inside_instance",
        "fct-type": "function",
        "title": "inside_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "inside_instance",
        "normalized": "Instance-\u003eVec-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eVec-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:interp",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Flt -\u003e Flt -\u003e Flt -\u003e Flt",
        "fct-source": "src/Data-Glome-Solid.html#interp",
        "fct-type": "function",
        "title": "interp"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "interp",
        "normalized": "Flt-\u003eFlt-\u003eFlt-\u003eFlt",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Flt-\u003eFlt-\u003eFlt-\u003eFlt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:ior",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "ior"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "ior",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:kd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "kd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "kd",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:ks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "ks"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "ks",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:m_interp",
      "description": {
        "fct-descr": "\u003cp\u003eInterpolate between textures.  \n Not really correct, but we'll go with it for now.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Material -\u003e Material -\u003e Flt -\u003e Material",
        "fct-source": "src/Data-Glome-Solid.html#m_interp",
        "fct-type": "function",
        "title": "m_interp"
      },
      "index": {
        "description": "Interpolate between textures Not really correct but we ll go with it for now",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "m_interp",
        "normalized": "Material-\u003eMaterial-\u003eFlt-\u003eMaterial",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Material-\u003eMaterial-\u003eFlt-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:m_white",
      "description": {
        "fct-descr": "\u003cp\u003eUniform white material\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Material",
        "fct-source": "src/Data-Glome-Solid.html#m_white",
        "fct-type": "function",
        "title": "m_white"
      },
      "index": {
        "description": "Uniform white material",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "m_white",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest",
      "description": {
        "fct-descr": "\u003cp\u003ePick the closest of two Rayints\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Rayint -\u003e Rayint",
        "fct-source": "src/Data-Glome-Solid.html#nearest",
        "fct-type": "function",
        "title": "nearest"
      },
      "index": {
        "description": "Pick the closest of two Rayints",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "nearest",
        "normalized": "Rayint-\u003eRayint-\u003eRayint",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eRayint-\u003eRayint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest_debug",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "(Rayint, Int) -\u003e (Rayint, Int) -\u003e (Rayint, Int)",
        "fct-source": "src/Data-Glome-Solid.html#nearest_debug",
        "fct-type": "function",
        "title": "nearest_debug"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "nearest_debug",
        "normalized": "(Rayint,Int)-\u003e(Rayint,Int)-\u003e(Rayint,Int)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "(Rayint,Int)-\u003e(Rayint,Int)-\u003e(Rayint,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nearest_packetresult",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "PacketResult -\u003e PacketResult -\u003e PacketResult",
        "fct-source": "src/Data-Glome-Solid.html#nearest_packetresult",
        "fct-type": "function",
        "title": "nearest_packetresult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "nearest_packetresult",
        "normalized": "PacketResult-\u003ePacketResult-\u003ePacketResult",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "PacketResult-\u003ePacketResult-\u003ePacketResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:norm",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Vec",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "norm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "norm",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:nothing",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#nothing",
        "fct-type": "function",
        "title": "nothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "nothing",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint",
      "description": {
        "fct-descr": "\u003cp\u003eTrace four rays at once against a solid.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
        "fct-source": "src/Data-Glome-Solid.html#packetint",
        "fct-type": "method",
        "title": "packetint"
      },
      "index": {
        "description": "Trace four rays at once against solid",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "packetint",
        "normalized": "a-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
        "fct-source": "src/Data-Glome-Solid.html#packetint_group",
        "fct-type": "function",
        "title": "packetint_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "packetint_group",
        "normalized": "[SolidItem]-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetint_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Texture -\u003e PacketResult",
        "fct-source": "src/Data-Glome-Solid.html#packetint_instance",
        "fct-type": "function",
        "title": "packetint_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "packetint_instance",
        "normalized": "Instance-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eTexture-\u003ePacketResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:packetmiss",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "PacketResult",
        "fct-source": "src/Data-Glome-Solid.html#packetmiss",
        "fct-type": "function",
        "title": "packetmiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "packetmiss",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcadd",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount -\u003e Pcount -\u003e Pcount",
        "fct-source": "src/Data-Glome-Solid.html#pcadd",
        "fct-type": "function",
        "title": "pcadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pcadd",
        "normalized": "Pcount-\u003ePcount-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Pcount-\u003ePcount-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcnone",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount",
        "fct-source": "src/Data-Glome-Solid.html#pcnone",
        "fct-type": "function",
        "title": "pcnone"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pcnone",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsinglebound",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount",
        "fct-source": "src/Data-Glome-Solid.html#pcsinglebound",
        "fct-type": "function",
        "title": "pcsinglebound"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pcsinglebound",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsingleprim",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount",
        "fct-source": "src/Data-Glome-Solid.html#pcsingleprim",
        "fct-type": "function",
        "title": "pcsingleprim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pcsingleprim",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pcsinglexfm",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Pcount",
        "fct-source": "src/Data-Glome-Solid.html#pcsinglexfm",
        "fct-type": "function",
        "title": "pcsinglexfm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pcsinglexfm",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:pos",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Vec",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "pos"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "pos",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount",
      "description": {
        "fct-descr": "\u003cp\u003eCount the number of primitives, transforms, and bounding\n objects in a scene.  Simple objects can just use the default,\n which is to return a single primitive.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Pcount",
        "fct-source": "src/Data-Glome-Solid.html#primcount",
        "fct-type": "method",
        "title": "primcount"
      },
      "index": {
        "description": "Count the number of primitives transforms and bounding objects in scene Simple objects can just use the default which is to return single primitive",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "primcount",
        "normalized": "a-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Pcount",
        "fct-source": "src/Data-Glome-Solid.html#primcount_group",
        "fct-type": "function",
        "title": "primcount_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "primcount_group",
        "normalized": "[SolidItem]-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:primcount_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Pcount",
        "fct-source": "src/Data-Glome-Solid.html#primcount_instance",
        "fct-type": "function",
        "title": "primcount_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "primcount_instance",
        "normalized": "Instance-\u003ePcount",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003ePcount"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint",
      "description": {
        "fct-descr": "\u003cp\u003eTest a ray against a solid, returning a ray intersection.\n The distance parameter is used to specify a max distance.\n If it's further away, we aren't interested in the intersection.\n The texture parameter is a default texture we use, if it's not\n overridden by a more specific texture.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "rayint",
        "fct-source": "src/Data-Glome-Solid.html#rayint",
        "fct-type": "method",
        "title": "rayint"
      },
      "index": {
        "description": "Test ray against solid returning ray intersection The distance parameter is used to specify max distance If it further away we aren interested in the intersection The texture parameter is default texture we use if it not overridden by more specific texture",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_advance",
      "description": {
        "fct-descr": "\u003cp\u003eMove a ray forward and test the new ray against an object.\n Fix the depth of the result.  Useful in CSG\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Flt -\u003e Rayint",
        "fct-source": "src/Data-Glome-Solid.html#rayint_advance",
        "fct-type": "function",
        "title": "rayint_advance"
      },
      "index": {
        "description": "Move ray forward and test the new ray against an object Fix the depth of the result Useful in CSG",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_advance",
        "normalized": "SolidItem-\u003eRay-\u003eFlt-\u003eTexture-\u003eFlt-\u003eRayint",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "SolidItem-\u003eRay-\u003eFlt-\u003eTexture-\u003eFlt-\u003eRayint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug",
      "description": {
        "fct-descr": "\u003cp\u003eSame as rayint, but return a count of the number of\n primitives checked.  Useful for optimizing acceleration structures.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
        "fct-source": "src/Data-Glome-Solid.html#rayint_debug",
        "fct-type": "method",
        "title": "rayint_debug"
      },
      "index": {
        "description": "Same as rayint but return count of the number of primitives checked Useful for optimizing acceleration structures",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_debug",
        "normalized": "a-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
        "fct-source": "src/Data-Glome-Solid.html#rayint_debug_group",
        "fct-type": "function",
        "title": "rayint_debug_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_debug_group",
        "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_debug_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Ray -\u003e Flt -\u003e Texture -\u003e (Rayint, Int)",
        "fct-source": "src/Data-Glome-Solid.html#rayint_debug_instance",
        "fct-type": "function",
        "title": "rayint_debug_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_debug_instance",
        "normalized": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003e(Rayint,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Rayint",
        "fct-source": "src/Data-Glome-Solid.html#rayint_group",
        "fct-type": "function",
        "title": "rayint_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_group",
        "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:rayint_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Ray -\u003e Flt -\u003e Texture -\u003e Rayint",
        "fct-source": "src/Data-Glome-Solid.html#rayint_instance",
        "fct-type": "function",
        "title": "rayint_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "rayint_instance",
        "normalized": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eRay-\u003eFlt-\u003eTexture-\u003eRayint"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:raymiss",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint",
        "fct-source": "src/Data-Glome-Solid.html#raymiss",
        "fct-type": "function",
        "title": "raymiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "raymiss",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:refl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "refl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "refl",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:refr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "refr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "refr",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow",
      "description": {
        "fct-descr": "\u003cp\u003eShadow test - we just return a Bool rather than return a \n a full Rayint.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e Ray -\u003e Flt -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#shadow",
        "fct-type": "method",
        "title": "shadow"
      },
      "index": {
        "description": "Shadow test we just return Bool rather than return full Rayint",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "shadow",
        "normalized": "a-\u003eRay-\u003eFlt-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003eRay-\u003eFlt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e Ray -\u003e Flt -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#shadow_group",
        "fct-type": "function",
        "title": "shadow_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "shadow_group",
        "normalized": "[SolidItem]-\u003eRay-\u003eFlt-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003eRay-\u003eFlt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shadow_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e Ray -\u003e Flt -\u003e Bool",
        "fct-source": "src/Data-Glome-Solid.html#shadow_instance",
        "fct-type": "function",
        "title": "shadow_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "shadow_instance",
        "normalized": "Instance-\u003eRay-\u003eFlt-\u003eBool",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003eRay-\u003eFlt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:shine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "!Flt",
        "fct-source": "src/Data-Glome-Solid.html#Material",
        "fct-type": "function",
        "title": "shine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "shine",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:showTexture",
      "description": {
        "fct-descr": "\u003cp\u003eThis is sort of a no-op; textures are functions, and we don't have a\n good way to show an arbitrary function\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Texture -\u003e String",
        "fct-source": "src/Data-Glome-Solid.html#showTexture",
        "fct-type": "function",
        "title": "showTexture"
      },
      "index": {
        "description": "This is sort of no-op textures are functions and we don have good way to show an arbitrary function",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "showTexture",
        "normalized": "Texture-\u003eString",
        "package": "GlomeTrace",
        "partial": "Texture",
        "signature": "Texture-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:t_uniform",
      "description": {
        "fct-descr": "\u003cp\u003eUniform texture\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Material -\u003e Texture",
        "fct-source": "src/Data-Glome-Solid.html#t_uniform",
        "fct-type": "function",
        "title": "t_uniform"
      },
      "index": {
        "description": "Uniform texture",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "t_uniform",
        "normalized": "Material-\u003eTexture",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Material-\u003eTexture"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:t_white",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "t -\u003e Material",
        "fct-source": "src/Data-Glome-Solid.html#t_white",
        "fct-type": "function",
        "title": "t_white"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "t_white",
        "normalized": "a-\u003eMaterial",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "t-\u003eMaterial"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:texture",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Texture",
        "fct-source": "src/Data-Glome-Solid.html#Rayint",
        "fct-type": "function",
        "title": "texture"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "texture",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:tolist",
      "description": {
        "fct-descr": "\u003cp\u003eMost simple objects just return themselves as a singleton list,\n but for composite objects, we flatten the structure out and \n return a list.  We usually do this prior to re-building a \n composite object in a (hopefully) more efficient fashion.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Solid.html#tolist",
        "fct-type": "method",
        "title": "tolist"
      },
      "index": {
        "description": "Most simple objects just return themselves as singleton list but for composite objects we flatten the structure out and return list We usually do this prior to re-building composite object in hopefully more efficient fashion",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "tolist",
        "normalized": "a-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003e[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new object transformed by some transformation.  The\n reason this method exists is so we can override it for the\n Instance type - if we transform a transformation, we should\n combine the two matricies into one.\n Most objects can use the default implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e [Xfm] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#transform",
        "fct-type": "method",
        "title": "transform"
      },
      "index": {
        "description": "Create new object transformed by some transformation The reason this method exists is so we can override it for the Instance type if we transform transformation we should combine the two matricies into one Most objects can use the default implementation",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "transform",
        "normalized": "a-\u003e[Xfm]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003e[Xfm]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e [Xfm] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#transform_instance",
        "fct-type": "function",
        "title": "transform_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "transform_instance",
        "normalized": "Instance-\u003e[Xfm]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003e[Xfm]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf",
      "description": {
        "fct-descr": "\u003cp\u003eUsed by flatten_transform.  I don't really remember how it works. \n\u003c/p\u003e",
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "a -\u003e [Xfm] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#transform_leaf",
        "fct-type": "method",
        "title": "transform_leaf"
      },
      "index": {
        "description": "Used by flatten transform don really remember how it works",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "transform_leaf",
        "normalized": "a-\u003e[Xfm]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "a-\u003e[Xfm]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf_group",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "[SolidItem] -\u003e [Xfm] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#transform_leaf_group",
        "fct-type": "function",
        "title": "transform_leaf_group"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "transform_leaf_group",
        "normalized": "[SolidItem]-\u003e[Xfm]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[SolidItem]-\u003e[Xfm]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Solid.html#v:transform_leaf_instance",
      "description": {
        "fct-module": "Data.Glome.Solid",
        "fct-package": "GlomeTrace",
        "fct-signature": "Instance -\u003e [Xfm] -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Solid.html#transform_leaf_instance",
        "fct-type": "function",
        "title": "transform_leaf_instance"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Solid",
        "module": "Data.Glome.Solid",
        "name": "transform_leaf_instance",
        "normalized": "Instance-\u003e[Xfm]-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Instance-\u003e[Xfm]-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Spd.html",
        "fct-type": "module",
        "title": "Spd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "Spd",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#t:BgColor",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Spd.html#BgColor",
        "fct-type": "data",
        "title": "BgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "BgColor",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Bg Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:BgColor",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "BgColor Color",
        "fct-source": "src/Data-Glome-Spd.html#BgColor",
        "fct-type": "function",
        "title": "BgColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "BgColor",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Bg Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:accum_rss",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "[Camera] -\u003e [Light] -\u003e [SolidItem] -\u003e [BgColor] -\u003e String -\u003e ([Camera], [Light], [SolidItem], [BgColor], String)",
        "fct-source": "src/Data-Glome-Spd.html#accum_rss",
        "fct-type": "function",
        "title": "accum_rss"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "accum_rss",
        "normalized": "[Camera]-\u003e[Light]-\u003e[SolidItem]-\u003e[BgColor]-\u003eString-\u003e([Camera],[Light],[SolidItem],[BgColor],String)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[Camera]-\u003e[Light]-\u003e[SolidItem]-\u003e[BgColor]-\u003eString-\u003e([Camera],[Light],[SolidItem],[BgColor],String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:lexcr",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "String -\u003e [(String, String)]",
        "fct-source": "src/Data-Glome-Spd.html#lexcr",
        "fct-type": "function",
        "title": "lexcr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "lexcr",
        "normalized": "String-\u003e[(String,String)]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "String-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:lexignore",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "[Char] -\u003e [(String, String)]",
        "fct-source": "src/Data-Glome-Spd.html#lexignore",
        "fct-type": "function",
        "title": "lexignore"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "lexignore",
        "normalized": "[Char]-\u003e[(String,String)]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[Char]-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdBackground",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS BgColor",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdBackground",
        "fct-type": "function",
        "title": "readsSpdBackground"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdBackground",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdCam",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Camera",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdCam",
        "fct-type": "function",
        "title": "readsSpdCam"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdCam",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Cam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdClr",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Color",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdClr",
        "fct-type": "function",
        "title": "readsSpdClr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdClr",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Clr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdFill",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Texture",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdFill",
        "fct-type": "function",
        "title": "readsSpdFill"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdFill",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdLight",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Light",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdLight",
        "fct-type": "function",
        "title": "readsSpdLight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdLight",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Light",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdPrims",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS [SolidItem]",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdPrims",
        "fct-type": "function",
        "title": "readsSpdPrims"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdPrims",
        "normalized": "ReadS[SolidItem]",
        "package": "GlomeTrace",
        "partial": "Spd Prims",
        "signature": "ReadS[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdScene",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Scene",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdScene",
        "fct-type": "function",
        "title": "readsSpdScene"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdScene",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Scene",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdSolid",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS SolidItem",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdSolid",
        "fct-type": "function",
        "title": "readsSpdSolid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdSolid",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdTextureGroup",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS SolidItem",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdTextureGroup",
        "fct-type": "function",
        "title": "readsSpdTextureGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdTextureGroup",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Texture Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVec",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS Vec",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdVec",
        "fct-type": "function",
        "title": "readsSpdVec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdVec",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Spd Vec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecNorm",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS (Vec, Vec)",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdVecNorm",
        "fct-type": "function",
        "title": "readsSpdVecNorm"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdVecNorm",
        "normalized": "ReadS(Vec,Vec)",
        "package": "GlomeTrace",
        "partial": "Spd Vec Norm",
        "signature": "ReadS(Vec,Vec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecs",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS [Vec]",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdVecs",
        "fct-type": "function",
        "title": "readsSpdVecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdVecs",
        "normalized": "ReadS[Vec]",
        "package": "GlomeTrace",
        "partial": "Spd Vecs",
        "signature": "ReadS[Vec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Spd.html#v:readsSpdVecsNorms",
      "description": {
        "fct-module": "Data.Glome.Spd",
        "fct-package": "GlomeTrace",
        "fct-signature": "ReadS [(Vec, Vec)]",
        "fct-source": "src/Data-Glome-Spd.html#readsSpdVecsNorms",
        "fct-type": "function",
        "title": "readsSpdVecsNorms"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Spd",
        "module": "Data.Glome.Spd",
        "name": "readsSpdVecsNorms",
        "normalized": "ReadS[(Vec,Vec)]",
        "package": "GlomeTrace",
        "partial": "Spd Vecs Norms",
        "signature": "ReadS[(Vec,Vec)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Sphere.html#",
      "description": {
        "fct-module": "Data.Glome.Sphere",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Sphere.html",
        "fct-type": "module",
        "title": "Sphere"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Sphere",
        "module": "Data.Glome.Sphere",
        "name": "Sphere",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Sphere",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Sphere.html#v:sphere",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a sphere given a center location and a radius.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Sphere",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Flt -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Sphere.html#sphere",
        "fct-type": "function",
        "title": "sphere"
      },
      "index": {
        "description": "Construct sphere given center location and radius",
        "hierarchy": "Data Glome Sphere",
        "module": "Data.Glome.Sphere",
        "name": "sphere",
        "normalized": "Vec-\u003eFlt-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eFlt-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Tex.html#",
      "description": {
        "fct-module": "Data.Glome.Tex",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Tex.html",
        "fct-type": "module",
        "title": "Tex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Tex",
        "module": "Data.Glome.Tex",
        "name": "Tex",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Tex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Tex.html#v:tex",
      "description": {
        "fct-descr": "\u003cp\u003eAssociate a texture with an object.  For composite\n objects, the shader uses the innermost texture.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Tex",
        "fct-package": "GlomeTrace",
        "fct-signature": "SolidItem -\u003e Texture -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Tex.html#tex",
        "fct-type": "function",
        "title": "tex"
      },
      "index": {
        "description": "Associate texture with an object For composite objects the shader uses the innermost texture",
        "hierarchy": "Data Glome Tex",
        "module": "Data.Glome.Tex",
        "name": "tex",
        "normalized": "SolidItem-\u003eTexture-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "SolidItem-\u003eTexture-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#",
      "description": {
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Trace.html",
        "fct-type": "module",
        "title": "Trace"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "Trace",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#t:PacketColor",
      "description": {
        "fct-descr": "\u003cp\u003eResult of tracing a packet of 4 rays at once.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "data",
        "fct-source": "src/Data-Glome-Trace.html#PacketColor",
        "fct-type": "data",
        "title": "PacketColor"
      },
      "index": {
        "description": "Result of tracing packet of rays at once",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "PacketColor",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Packet Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:PacketColor",
      "description": {
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "PacketColor !Color !Color !Color !Color",
        "fct-source": "src/Data-Glome-Trace.html#PacketColor",
        "fct-type": "function",
        "title": "PacketColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "PacketColor",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Packet Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:debug_norm_shade",
      "description": {
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Ray -\u003e Scene -\u003e Int -\u003e Int -\u003e Color",
        "fct-source": "src/Data-Glome-Trace.html#debug_norm_shade",
        "fct-type": "function",
        "title": "debug_norm_shade"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "debug_norm_shade",
        "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:flat_shade",
      "description": {
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint -\u003e Ray -\u003e Scene -\u003e Int -\u003e Int -\u003e Color",
        "fct-source": "src/Data-Glome-Trace.html#flat_shade",
        "fct-type": "function",
        "title": "flat_shade"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "flat_shade",
        "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:shade",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the lighting routine that handles diffuse light, shadows, \n specular highlights and reflection.  Given a ray intersection, the ray,\n a scene, and a recursion limit, return a color.  \u003ca\u003eDebug\u003c/a\u003e is a parameter\n useful for debugging; sometimes we might want to tint the color by \n the number of bounding boxes tested or something similar.\n Todo: refraction\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Rayint-\u003e Ray-\u003e Scene-\u003e Int-\u003e Int-\u003e Color",
        "fct-type": "function",
        "title": "shade"
      },
      "index": {
        "description": "This is the lighting routine that handles diffuse light shadows specular highlights and reflection Given ray intersection the ray scene and recursion limit return color Debug is parameter useful for debugging sometimes we might want to tint the color by the number of bounding boxes tested or something similar Todo refraction",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "shade",
        "normalized": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Rayint-\u003eRay-\u003eScene-\u003eInt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a scene, a ray, a maximum distance, and a maximum\n recursion depth, test the ray for intersection against \n the object within the scene, then pass the ray intersection\n to the shade routine (which may trace secondary rays of its \n own), which returns a color.  For most applications, this is\n the entry point into the ray tracer.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e Color",
        "fct-source": "src/Data-Glome-Trace.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Given scene ray maximum distance and maximum recursion depth test the ray for intersection against the object within the scene then pass the ray intersection to the shade routine which may trace secondary rays of its own which returns color For most applications this is the entry point into the ray tracer",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "trace",
        "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_debug",
      "description": {
        "fct-descr": "\u003cp\u003eA trace function which returns some additional debugging\n info, mainly for performance tuning.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e Color",
        "fct-source": "src/Data-Glome-Trace.html#trace_debug",
        "fct-type": "function",
        "title": "trace_debug"
      },
      "index": {
        "description": "trace function which returns some additional debugging info mainly for performance tuning",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "trace_debug",
        "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003eColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_depth",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to trace, but return depth as well as color.\n We might want the depth for post-processing effects.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e (Color, Flt)",
        "fct-source": "src/Data-Glome-Trace.html#trace_depth",
        "fct-type": "function",
        "title": "trace_depth"
      },
      "index": {
        "description": "Similar to trace but return depth as well as color We might want the depth for post-processing effects",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "trace_depth",
        "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Flt)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Flt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_packet",
      "description": {
        "fct-descr": "\u003cp\u003eTrace a packet of four rays at a time.  Sometimes, this\n may be a performance advantage.  However, ever since my \n transition to typeclasses, this has not performed any better\n than the mono-ray path.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Ray -\u003e Flt -\u003e Int -\u003e PacketColor",
        "fct-source": "src/Data-Glome-Trace.html#trace_packet",
        "fct-type": "function",
        "title": "trace_packet"
      },
      "index": {
        "description": "Trace packet of four rays at time Sometimes this may be performance advantage However ever since my transition to typeclasses this has not performed any better than the mono-ray path",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "trace_packet",
        "normalized": "Scene-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eInt-\u003ePacketColor",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003eRay-\u003eRay-\u003eRay-\u003eRay-\u003eFlt-\u003eInt-\u003ePacketColor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Trace.html#v:trace_pos",
      "description": {
        "fct-descr": "\u003cp\u003eSimilar to trace, but return hit position as well as color.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Trace",
        "fct-package": "GlomeTrace",
        "fct-signature": "Scene -\u003e Ray -\u003e Flt -\u003e Int -\u003e (Color, Vec)",
        "fct-source": "src/Data-Glome-Trace.html#trace_pos",
        "fct-type": "function",
        "title": "trace_pos"
      },
      "index": {
        "description": "Similar to trace but return hit position as well as color",
        "hierarchy": "Data Glome Trace",
        "module": "Data.Glome.Trace",
        "name": "trace_pos",
        "normalized": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Vec)",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Scene-\u003eRay-\u003eFlt-\u003eInt-\u003e(Color,Vec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#",
      "description": {
        "fct-module": "Data.Glome.Triangle",
        "fct-package": "GlomeTrace",
        "fct-signature": "module",
        "fct-source": "src/Data-Glome-Triangle.html",
        "fct-type": "module",
        "title": "Triangle"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Glome Triangle",
        "module": "Data.Glome.Triangle",
        "name": "Triangle",
        "normalized": "",
        "package": "GlomeTrace",
        "partial": "Triangle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:triangle",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a simple triangle from its 3 corners.\n The normals are computed automatically.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Triangle",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e Vec -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Triangle.html#triangle",
        "fct-type": "function",
        "title": "triangle"
      },
      "index": {
        "description": "Create simple triangle from its corners The normals are computed automatically",
        "hierarchy": "Data Glome Triangle",
        "module": "Data.Glome.Triangle",
        "name": "triangle",
        "normalized": "Vec-\u003eVec-\u003eVec-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:trianglenorm",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a triangle from a list of verticies, and \n a list of normal vectors (one for each vertex).\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Triangle",
        "fct-package": "GlomeTrace",
        "fct-signature": "Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e Vec -\u003e SolidItem",
        "fct-source": "src/Data-Glome-Triangle.html#trianglenorm",
        "fct-type": "function",
        "title": "trianglenorm"
      },
      "index": {
        "description": "Create triangle from list of verticies and list of normal vectors one for each vertex",
        "hierarchy": "Data Glome Triangle",
        "module": "Data.Glome.Triangle",
        "name": "trianglenorm",
        "normalized": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eSolidItem",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "Vec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eVec-\u003eSolidItem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:triangles",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a triangle fan from a list of verticies.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Triangle",
        "fct-package": "GlomeTrace",
        "fct-signature": "[Vec] -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Triangle.html#triangles",
        "fct-type": "function",
        "title": "triangles"
      },
      "index": {
        "description": "Create triangle fan from list of verticies",
        "hierarchy": "Data Glome Triangle",
        "module": "Data.Glome.Triangle",
        "name": "triangles",
        "normalized": "[Vec]-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[Vec]-\u003e[SolidItem]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GlomeTrace/docs/Data-Glome-Triangle.html#v:trianglesnorms",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a triangle fan from a list of verticies and normals.\n\u003c/p\u003e",
        "fct-module": "Data.Glome.Triangle",
        "fct-package": "GlomeTrace",
        "fct-signature": "[(Vec, Vec)] -\u003e [SolidItem]",
        "fct-source": "src/Data-Glome-Triangle.html#trianglesnorms",
        "fct-type": "function",
        "title": "trianglesnorms"
      },
      "index": {
        "description": "Create triangle fan from list of verticies and normals",
        "hierarchy": "Data Glome Triangle",
        "module": "Data.Glome.Triangle",
        "name": "trianglesnorms",
        "normalized": "[(Vec,Vec)]-\u003e[SolidItem]",
        "package": "GlomeTrace",
        "partial": "",
        "signature": "[(Vec,Vec)]-\u003e[SolidItem]"
      }
    }
  }
]