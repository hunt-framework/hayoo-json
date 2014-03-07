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
        "word": "Octree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "Octree",
          "package": "Octree",
          "source": "src/Data-Octree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "Octree",
          "package": "Octree",
          "partial": "Octree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for nodes within Octree.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "Octree",
          "package": "Octree",
          "source": "src/Data-Octree-Internal.html#Octree",
          "type": "data"
        },
        "index": {
          "description": "Datatype for nodes within Octree",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "Octree",
          "package": "Octree",
          "partial": "Octree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#t:Octree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "Vector3",
          "package": "Octree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "Vector3",
          "package": "Octree",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#t:Vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "Vector3",
          "package": "Octree",
          "signature": "Vector3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "Vector3",
          "package": "Octree",
          "partial": "Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:Vector3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "depth",
          "package": "Octree",
          "signature": "Octree a -\u003e Int",
          "source": "src/Data-Octree-Internal.html#depth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "depth",
          "normalized": "Octree a-\u003eInt",
          "package": "Octree",
          "signature": "Octree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edistance between two vectors\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "dist",
          "package": "Octree",
          "signature": "Vector3 -\u003e Vector3 -\u003e Double",
          "source": "src/Data-Octree-Internal.html#dist",
          "type": "function"
        },
        "index": {
          "description": "distance between two vectors",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "dist",
          "normalized": "Vector-\u003eVector-\u003eDouble",
          "package": "Octree",
          "signature": "Vector-\u003eVector-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:dist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an Octree from a list of (index, payload) tuples.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "fromList",
          "package": "Octree",
          "signature": "[(Vector3, a)] -\u003e Octree a",
          "source": "src/Data-Octree-Internal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates an Octree from list of index payload tuples",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "fromList",
          "normalized": "[(Vector,a)]-\u003eOctree a",
          "package": "Octree",
          "partial": "List",
          "signature": "[(Vector,a)]-\u003eOctree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a point into an Octree.\n | NOTE: insert accepts duplicate points, but lookup would not find them - use withinRange in such case.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "insert",
          "package": "Octree",
          "signature": "(Vector3, a) -\u003e Octree a -\u003e Octree a",
          "source": "src/Data-Octree-Internal.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts point into an Octree NOTE insert accepts duplicate points but lookup would not find them use withinRange in such case",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "insert",
          "normalized": "(Vector,a)-\u003eOctree a-\u003eOctree a",
          "package": "Octree",
          "signature": "(Vector,a)-\u003eOctree a-\u003eOctree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds a given point, if it is in the tree.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "lookup",
          "package": "Octree",
          "signature": "Octree a -\u003e Vector3 -\u003e Maybe (Vector3, a)",
          "source": "src/Data-Octree-Internal.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Finds given point if it is in the tree",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "lookup",
          "normalized": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
          "package": "Octree",
          "signature": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds nearest neighbour for a given point.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "nearest",
          "package": "Octree",
          "signature": "Octree a -\u003e Vector3 -\u003e Maybe (Vector3, a)",
          "source": "src/Data-Octree-Internal.html#nearest",
          "type": "function"
        },
        "index": {
          "description": "Finds nearest neighbour for given point",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "nearest",
          "normalized": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
          "package": "Octree",
          "signature": "Octree a-\u003eVector-\u003eMaybe(Vector,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:nearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "size",
          "package": "Octree",
          "signature": "Octree a -\u003e Int",
          "source": "src/Data-Octree-Internal.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "size",
          "normalized": "Octree a-\u003eInt",
          "package": "Octree",
          "signature": "Octree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an Octree from list, trying to keep split points near centers\n | of mass for each subtree.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "toList",
          "package": "Octree",
          "signature": "Octree t -\u003e [(Vector3, t)]",
          "source": "src/Data-Octree-Internal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Creates an Octree from list trying to keep split points near centers of mass for each subtree",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "toList",
          "normalized": "Octree a-\u003e[(Vector,a)]",
          "package": "Octree",
          "partial": "List",
          "signature": "Octree t-\u003e[(Vector,t)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "v3x",
          "package": "Octree",
          "signature": "Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "v3x",
          "package": "Octree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3x"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "v3y",
          "package": "Octree",
          "signature": "Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "v3y",
          "package": "Octree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Octree",
          "name": "v3z",
          "package": "Octree",
          "signature": "Scalar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "v3z",
          "package": "Octree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:v3z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all points within Octree that are within a given distance from argument.\n\u003c/p\u003e",
          "module": "Data.Octree",
          "name": "withinRange",
          "package": "Octree",
          "signature": "Octree a -\u003e Scalar -\u003e Vector3 -\u003e [(Vector3, a)]",
          "source": "src/Data-Octree-Internal.html#withinRange",
          "type": "function"
        },
        "index": {
          "description": "Returns all points within Octree that are within given distance from argument",
          "hierarchy": "Data Octree",
          "module": "Data.Octree",
          "name": "withinRange",
          "normalized": "Octree a-\u003eScalar-\u003eVector-\u003e[(Vector,a)]",
          "package": "Octree",
          "partial": "Range",
          "signature": "Octree a-\u003eScalar-\u003eVector-\u003e[(Vector,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Octree/docs/Data-Octree.html#v:withinRange"
      }
    }
  ]
]