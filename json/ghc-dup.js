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
        "word": "ghc-dup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides two new operations, \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e,\nthat allow you to prevent the result of two evaluations of the same\nexpression to be shared.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.Dup",
          "name": "Dup",
          "package": "ghc-dup",
          "source": "src/GHC-Dup.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides two new operations dup and deepDup that allow you to prevent the result of two evaluations of the same expression to be shared",
          "hierarchy": "GHC Dup",
          "module": "GHC.Dup",
          "name": "Dup",
          "package": "ghc-dup",
          "partial": "Dup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Box datatype allows you to control the time of evaluations of \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e, by pattern-matching on the result.\n\u003c/p\u003e",
          "module": "GHC.Dup",
          "name": "Box",
          "package": "ghc-dup",
          "source": "src/GHC-Dup.html#Box",
          "type": "data"
        },
        "index": {
          "description": "The Box datatype allows you to control the time of evaluations of dup or deepDup by pattern-matching on the result",
          "hierarchy": "GHC Dup",
          "module": "GHC.Dup",
          "name": "Box",
          "package": "ghc-dup",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Dup",
          "name": "Box",
          "package": "ghc-dup",
          "signature": "Box a",
          "source": "src/GHC-Dup.html#Box",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Dup",
          "module": "GHC.Dup",
          "name": "Box",
          "package": "ghc-dup",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis copies the parameter and changes all references therein so that when\n they are evaluated, they are copied again. This ensures that everything put on the heap by a function that wraps all is parameters in \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e can be freed after the evaluation.\n\u003c/p\u003e",
          "module": "GHC.Dup",
          "name": "deepDup",
          "package": "ghc-dup",
          "signature": "a -\u003e Box a",
          "source": "src/GHC-Dup.html#deepDup",
          "type": "function"
        },
        "index": {
          "description": "This copies the parameter and changes all references therein so that when they are evaluated they are copied again This ensures that everything put on the heap by function that wraps all is parameters in deepDup can be freed after the evaluation",
          "hierarchy": "GHC Dup",
          "module": "GHC.Dup",
          "name": "deepDup",
          "normalized": "a-\u003eBox a",
          "package": "ghc-dup",
          "partial": "Dup",
          "signature": "a-\u003eBox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:deepDup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDup copies a the parameter and returns it. The copy is shallow, i.e.\n referenced thunks are still shared between the parameter and its copy.\n\u003c/p\u003e",
          "module": "GHC.Dup",
          "name": "dup",
          "package": "ghc-dup",
          "signature": "a -\u003e Box a",
          "source": "src/GHC-Dup.html#dup",
          "type": "function"
        },
        "index": {
          "description": "Dup copies the parameter and returns it The copy is shallow i.e referenced thunks are still shared between the parameter and its copy",
          "hierarchy": "GHC Dup",
          "module": "GHC.Dup",
          "name": "dup",
          "normalized": "a-\u003eBox a",
          "package": "ghc-dup",
          "signature": "a-\u003eBox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:dup"
      }
    }
  ]
]