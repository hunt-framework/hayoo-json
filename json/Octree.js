[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#",
      "description": {
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "module",
        "fct-source": "src/Data-Octree.html",
        "fct-type": "module",
        "title": "Octree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "Octree",
        "normalized": "",
        "package": "Octree",
        "partial": "Octree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#t:Octree",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for nodes within Octree.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "data",
        "fct-source": "src/Data-Octree-Internal.html#Octree",
        "fct-type": "data",
        "title": "Octree"
      },
      "index": {
        "description": "Datatype for nodes within Octree",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "Octree",
        "normalized": "",
        "package": "Octree",
        "partial": "Octree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#t:Vector3",
      "description": {
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Vector3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "Vector3",
        "normalized": "",
        "package": "Octree",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:Vector3",
      "description": {
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Vector3",
        "fct-type": "function",
        "title": "Vector3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "Vector3",
        "normalized": "",
        "package": "Octree",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:depth",
      "description": {
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree a -\u003e Int",
        "fct-source": "src/Data-Octree-Internal.html#depth",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "depth",
        "normalized": "Octree a-\u003eInt",
        "package": "Octree",
        "partial": "",
        "signature": "Octree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:dist",
      "description": {
        "fct-descr": "\u003cp\u003edistance between two vectors\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Vector3 -\u003e Vector3 -\u003e Double",
        "fct-source": "src/Data-Octree-Internal.html#dist",
        "fct-type": "function",
        "title": "dist"
      },
      "index": {
        "description": "distance between two vectors",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "dist",
        "normalized": "Vector-\u003eVector-\u003eDouble",
        "package": "Octree",
        "partial": "",
        "signature": "Vector-\u003eVector-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an Octree from a list of (index, payload) tuples.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "[(Vector3, a)] -\u003e Octree a",
        "fct-source": "src/Data-Octree-Internal.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates an Octree from list of index payload tuples",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "fromList",
        "normalized": "[(Vector,a)]-\u003eOctree a",
        "package": "Octree",
        "partial": "List",
        "signature": "[(Vector,a)]-\u003eOctree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInserts a point into an Octree.\n | NOTE: insert accepts duplicate points, but lookup would not find them - use withinRange in such case.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "(Vector3, a) -\u003e Octree a -\u003e Octree a",
        "fct-source": "src/Data-Octree-Internal.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Inserts point into an Octree NOTE insert accepts duplicate points but lookup would not find them use withinRange in such case",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "insert",
        "normalized": "(Vector,a)-\u003eOctree a-\u003eOctree a",
        "package": "Octree",
        "partial": "",
        "signature": "(Vector,a)-\u003eOctree a-\u003eOctree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eFinds a given point, if it is in the tree.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree a -\u003e Vector3 -\u003e Maybe (Vector3, a)",
        "fct-source": "src/Data-Octree-Internal.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Finds given point if it is in the tree",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "lookup",
        "normalized": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
        "package": "Octree",
        "partial": "",
        "signature": "Octree a-\u003eVector-\u003eMaybe(Vector,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:nearest",
      "description": {
        "fct-descr": "\u003cp\u003eFinds nearest neighbour for a given point.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree a -\u003e Vector3 -\u003e Maybe (Vector3, a)",
        "fct-source": "src/Data-Octree-Internal.html#nearest",
        "fct-type": "function",
        "title": "nearest"
      },
      "index": {
        "description": "Finds nearest neighbour for given point",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "nearest",
        "normalized": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
        "package": "Octree",
        "partial": "",
        "signature": "Octree a-\u003eVector-\u003eMaybe(Vector,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:size",
      "description": {
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree a -\u003e Int",
        "fct-source": "src/Data-Octree-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "size",
        "normalized": "Octree a-\u003eInt",
        "package": "Octree",
        "partial": "",
        "signature": "Octree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an Octree from list, trying to keep split points near centers\n | of mass for each subtree.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree t -\u003e [(Vector3, t)]",
        "fct-source": "src/Data-Octree-Internal.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Creates an Octree from list trying to keep split points near centers of mass for each subtree",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "toList",
        "normalized": "Octree a-\u003e[(Vector,a)]",
        "package": "Octree",
        "partial": "List",
        "signature": "Octree t-\u003e[(Vector,t)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3x",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "!Scalar",
        "fct-type": "function",
        "title": "v3x"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "v3x",
        "normalized": "",
        "package": "Octree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3y",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "!Scalar",
        "fct-type": "function",
        "title": "v3y"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "v3y",
        "normalized": "",
        "package": "Octree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3z",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "!Scalar",
        "fct-type": "function",
        "title": "v3z"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "v3z",
        "normalized": "",
        "package": "Octree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:withinRange",
      "description": {
        "fct-descr": "\u003cp\u003eReturns all points within Octree that are within a given distance from argument.\n\u003c/p\u003e",
        "fct-module": "Data.Octree",
        "fct-package": "Octree",
        "fct-signature": "Octree a -\u003e Scalar -\u003e Vector3 -\u003e [(Vector3, a)]",
        "fct-source": "src/Data-Octree-Internal.html#withinRange",
        "fct-type": "function",
        "title": "withinRange"
      },
      "index": {
        "description": "Returns all points within Octree that are within given distance from argument",
        "hierarchy": "Data Octree",
        "module": "Data.Octree",
        "name": "withinRange",
        "normalized": "Octree a-\u003eScalar-\u003eVector-\u003e[(Vector,a)]",
        "package": "Octree",
        "partial": "Range",
        "signature": "Octree a-\u003eScalar-\u003eVector-\u003e[(Vector,a)]"
      }
    }
  }
]