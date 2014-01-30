[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides two new operations, \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e,\nthat allow you to prevent the result of two evaluations of the same\nexpression to be shared.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.Dup",
        "fct-package": "ghc-dup",
        "fct-signature": "module",
        "fct-source": "src/GHC-Dup.html",
        "fct-type": "module",
        "title": "Dup"
      },
      "index": {
        "description": "This module provides two new operations dup and deepDup that allow you to prevent the result of two evaluations of the same expression to be shared",
        "hierarchy": "GHC Dup",
        "module": "GHC.Dup",
        "name": "Dup",
        "normalized": "",
        "package": "ghc-dup",
        "partial": "Dup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#t:Box",
      "description": {
        "fct-descr": "\u003cp\u003eThe Box datatype allows you to control the time of evaluations of \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e, by pattern-matching on the result.\n\u003c/p\u003e",
        "fct-module": "GHC.Dup",
        "fct-package": "ghc-dup",
        "fct-signature": "data",
        "fct-source": "src/GHC-Dup.html#Box",
        "fct-type": "data",
        "title": "Box"
      },
      "index": {
        "description": "The Box datatype allows you to control the time of evaluations of dup or deepDup by pattern-matching on the result",
        "hierarchy": "GHC Dup",
        "module": "GHC.Dup",
        "name": "Box",
        "normalized": "",
        "package": "ghc-dup",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:Box",
      "description": {
        "fct-module": "GHC.Dup",
        "fct-package": "ghc-dup",
        "fct-signature": "Box a",
        "fct-source": "src/GHC-Dup.html#Box",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Dup",
        "module": "GHC.Dup",
        "name": "Box",
        "normalized": "",
        "package": "ghc-dup",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:deepDup",
      "description": {
        "fct-descr": "\u003cp\u003eThis copies the parameter and changes all references therein so that when\n they are evaluated, they are copied again. This ensures that everything put on the heap by a function that wraps all is parameters in \u003ccode\u003e\u003ca\u003edeepDup\u003c/a\u003e\u003c/code\u003e can be freed after the evaluation.\n\u003c/p\u003e",
        "fct-module": "GHC.Dup",
        "fct-package": "ghc-dup",
        "fct-signature": "a -\u003e Box a",
        "fct-source": "src/GHC-Dup.html#deepDup",
        "fct-type": "function",
        "title": "deepDup"
      },
      "index": {
        "description": "This copies the parameter and changes all references therein so that when they are evaluated they are copied again This ensures that everything put on the heap by function that wraps all is parameters in deepDup can be freed after the evaluation",
        "hierarchy": "GHC Dup",
        "module": "GHC.Dup",
        "name": "deepDup",
        "normalized": "a-\u003eBox a",
        "package": "ghc-dup",
        "partial": "Dup",
        "signature": "a-\u003eBox a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-dup/docs/GHC-Dup.html#v:dup",
      "description": {
        "fct-descr": "\u003cp\u003eDup copies a the parameter and returns it. The copy is shallow, i.e.\n referenced thunks are still shared between the parameter and its copy.\n\u003c/p\u003e",
        "fct-module": "GHC.Dup",
        "fct-package": "ghc-dup",
        "fct-signature": "a -\u003e Box a",
        "fct-source": "src/GHC-Dup.html#dup",
        "fct-type": "function",
        "title": "dup"
      },
      "index": {
        "description": "Dup copies the parameter and returns it The copy is shallow i.e referenced thunks are still shared between the parameter and its copy",
        "hierarchy": "GHC Dup",
        "module": "GHC.Dup",
        "name": "dup",
        "normalized": "a-\u003eBox a",
        "package": "ghc-dup",
        "partial": "",
        "signature": "a-\u003eBox a"
      }
    }
  }
]