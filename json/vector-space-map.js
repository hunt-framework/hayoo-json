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
        "word": "vector-space-map"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.Vector",
          "name": "Vector",
          "package": "vector-space-map",
          "source": "src/Data-Map-Vector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map Vector",
          "module": "Data.Map.Vector",
          "name": "Vector",
          "package": "vector-space-map",
          "partial": "Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-map/docs/Data-Map-Vector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instance operates under \u003cem\u003eintersection\u003c/em\u003e.  i.e.:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(MapVector $ Map.fromList [(\"x\", id)]) \u003c*\u003e (MapVector $ Map.fromList [(\"y\", 3)])\n\u003c/code\u003e\u003c/strong\u003eMapVector (Map.fromList [])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance performs elementwise multiplication.  It is defined in terms of\n \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e and therefore also operates under intersection:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(MapVector $ Map.fromList [(\"x\", 2), (\"y\", 3)]) * (MapVector $ Map.fromList [(\"x\", 5),(\"y\", 7)])\n\u003c/code\u003e\u003c/strong\u003eMapVector (Map.fromList [(\"x\", 10), (\"y\", 21)])\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(MapVector $ Map.fromList [(\"x\", 2), (\"y\", 3)]) * (MapVector $ Map.fromList [(\"y\", 7)])\n\u003c/code\u003e\u003c/strong\u003eMapVector (Map.fromList [(\"y\", 21)])\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003e*^\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eVectorSpace\u003c/a\u003e\u003c/code\u003e instance multiplies by the scalar of v.  Nesting MapVectors preserves\n the scalar type, e.g. \u003ccode\u003eScalar (MapVector k (MapVector k' v))\u003c/code\u003e = \u003ccode\u003eScalar v\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e2 *^ (ConstantMap $ MapVector $ Map.fromList [(\"x\", 3 :: Int), (\"y\", 5)])\n\u003c/code\u003e\u003c/strong\u003eConstantMap (MapVector (fromList [(\"x\",6),(\"y\",10)]))\n\u003c/pre\u003e\u003cp\u003eFinally, \u003ccode\u003e\u003ca\u003e\u003c.\u003e\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eInnerSpace\u003c/a\u003e\u003c/code\u003e is the dot-product operator.  Again, it operates under intersection.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(MapVector $ Map.fromList [(\"x\", 2 :: Int), (\"y\", 3)]) \u003c.\u003e (MapVector $ Map.fromList [(\"x\", 5),(\"y\", 7)])\n\u003c/code\u003e\u003c/strong\u003e31\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(pure . MapVector $ Map.fromList [(\"x\", 2 :: Int), (\"y\", 3)]) \u003c.\u003e (MapVector $ Map.fromList [(\"a\", pure (5::Int))])\n\u003c/code\u003e\u003c/strong\u003e25\n\u003c/pre\u003e\u003cp\u003eAddition, using either \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e^+^\u003c/a\u003e\u003c/code\u003e, operates under union.\n\u003c/p\u003e",
          "module": "Data.Map.Vector",
          "name": "MapVector",
          "package": "vector-space-map",
          "source": "src/Data-Map-Vector.html#MapVector",
          "type": "data"
        },
        "index": {
          "description": "Note in the Applicative instance operates under intersection i.e MapVector Map.fromList id MapVector Map.fromList MapVector Map.fromList in the Num instance performs elementwise multiplication It is defined in terms of and therefore also operates under intersection MapVector Map.fromList MapVector Map.fromList MapVector Map.fromList MapVector Map.fromList MapVector Map.fromList MapVector Map.fromList in the VectorSpace instance multiplies by the scalar of Nesting MapVectors preserves the scalar type e.g Scalar MapVector MapVector Scalar ConstantMap MapVector Map.fromList Int ConstantMap MapVector fromList Finally in InnerSpace is the dot-product operator Again it operates under intersection MapVector Map.fromList Int MapVector Map.fromList pure MapVector Map.fromList Int MapVector Map.fromList pure Int Addition using either or operates under union",
          "hierarchy": "Data Map Vector",
          "module": "Data.Map.Vector",
          "name": "MapVector",
          "package": "vector-space-map",
          "partial": "Map Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-map/docs/Data-Map-Vector.html#t:MapVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite-dimensional vector with the same value on all dimensions\n\u003c/p\u003e",
          "module": "Data.Map.Vector",
          "name": "ConstantMap",
          "package": "vector-space-map",
          "signature": "ConstantMap v",
          "source": "src/Data-Map-Vector.html#MapVector",
          "type": "function"
        },
        "index": {
          "description": "An infinite-dimensional vector with the same value on all dimensions",
          "hierarchy": "Data Map Vector",
          "module": "Data.Map.Vector",
          "name": "ConstantMap",
          "package": "vector-space-map",
          "partial": "Constant Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-map/docs/Data-Map-Vector.html#v:ConstantMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.Vector",
          "name": "MapVector",
          "package": "vector-space-map",
          "signature": "MapVector (Map k v)",
          "source": "src/Data-Map-Vector.html#MapVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map Vector",
          "module": "Data.Map.Vector",
          "name": "MapVector",
          "package": "vector-space-map",
          "partial": "Map Vector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vector-space-map/docs/Data-Map-Vector.html#v:MapVector"
      }
    }
  ]
]