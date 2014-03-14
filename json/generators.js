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
        "word": "generators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "Generators",
          "package": "generators",
          "source": "src/System-Random-Generators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "Generators",
          "package": "generators",
          "partial": "Generators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "Generator",
          "package": "generators",
          "source": "src/System-Random-Generators.html#Generator",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "Generator",
          "package": "generators",
          "partial": "Generator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#t:Generator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "constantG",
          "package": "generators",
          "signature": "v -\u003e Generator v",
          "source": "src/System-Random-Generators.html#constantG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "constantG",
          "normalized": "a-\u003eGenerator a",
          "package": "generators",
          "signature": "v-\u003eGenerator v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:constantG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "listG",
          "package": "generators",
          "signature": "[a] -\u003e Generator a",
          "source": "src/System-Random-Generators.html#listG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "listG",
          "normalized": "[a]-\u003eGenerator a",
          "package": "generators",
          "signature": "[a]-\u003eGenerator a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:listG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "randomG",
          "package": "generators",
          "signature": "Generator r",
          "source": "src/System-Random-Generators.html#randomG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "randomG",
          "package": "generators",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:randomG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "rangeG",
          "package": "generators",
          "signature": "(r, r) -\u003e Generator r",
          "source": "src/System-Random-Generators.html#rangeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "rangeG",
          "normalized": "(a,a)-\u003eGenerator a",
          "package": "generators",
          "signature": "(r,r)-\u003eGenerator r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:rangeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "runGenerator",
          "package": "generators",
          "signature": "Int -\u003e Generator v -\u003e [v]",
          "source": "src/System-Random-Generators.html#runGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "runGenerator",
          "normalized": "Int-\u003eGenerator a-\u003e[a]",
          "package": "generators",
          "partial": "Generator",
          "signature": "Int-\u003eGenerator v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:runGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "runGeneratorWith",
          "package": "generators",
          "signature": "StdGen -\u003e Generator v -\u003e [v]",
          "source": "src/System-Random-Generators.html#runGeneratorWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "runGeneratorWith",
          "normalized": "StdGen-\u003eGenerator a-\u003e[a]",
          "package": "generators",
          "partial": "Generator With",
          "signature": "StdGen-\u003eGenerator v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:runGeneratorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Random.Generators",
          "name": "weightedG",
          "package": "generators",
          "signature": "[(Float, a)] -\u003e Generator a",
          "source": "src/System-Random-Generators.html#weightedG",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Random Generators",
          "module": "System.Random.Generators",
          "name": "weightedG",
          "normalized": "[(Float,a)]-\u003eGenerator a",
          "package": "generators",
          "signature": "[(Float,a)]-\u003eGenerator a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generators/docs/System-Random-Generators.html#v:weightedG"
      }
    }
  ]
]