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
        "word": "geocalc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Geocalc",
          "name": "Geocalc",
          "package": "geocalc",
          "source": "src/Numeric-Geocalc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Geocalc",
          "module": "Numeric.Geocalc",
          "name": "Geocalc",
          "package": "geocalc",
          "partial": "Geocalc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/geocalc/docs/Numeric-Geocalc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003egetDistance takes two Coordinates in WSG84 and checks if they are valid.\n If they are it calculets the distance between them in kilometres\n\u003c/p\u003e",
          "module": "Numeric.Geocalc",
          "name": "getDistance",
          "package": "geocalc",
          "signature": "(Double, Double) -\u003e (Double, Double) -\u003e Maybe Double",
          "source": "src/Numeric-Geocalc.html#getDistance",
          "type": "function"
        },
        "index": {
          "description": "getDistance takes two Coordinates in WSG84 and checks if they are valid If they are it calculets the distance between them in kilometres",
          "hierarchy": "Numeric Geocalc",
          "module": "Numeric.Geocalc",
          "name": "getDistance",
          "normalized": "(Double,Double)-\u003e(Double,Double)-\u003eMaybe Double",
          "package": "geocalc",
          "partial": "Distance",
          "signature": "(Double,Double)-\u003e(Double,Double)-\u003eMaybe Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/geocalc/docs/Numeric-Geocalc.html#v:getDistance"
      }
    }
  ]
]