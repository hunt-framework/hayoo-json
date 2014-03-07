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
        "word": "erf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "Erf",
          "package": "erf",
          "source": "src/Data-Number-Erf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "Erf",
          "package": "erf",
          "partial": "Erf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError function related functions.\n\u003c/p\u003e\u003cp\u003eThe derivative of \u003ccode\u003e\u003ca\u003eerf\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e x -\u003e 2 / sqrt pi * exp (x^2)\u003c/code\u003e,\n and this uniquely determines \u003ccode\u003e\u003ca\u003eerf\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003eerf 0 = 0\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition is \u003ccode\u003e\u003ca\u003eerfc\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enormcdf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Erf",
          "name": "Erf",
          "package": "erf",
          "source": "src/Data-Number-Erf.html#Erf",
          "type": "class"
        },
        "index": {
          "description": "Error function related functions The derivative of erf is sqrt pi exp and this uniquely determines erf by erf Minimal complete definition is erfc or normcdf",
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "Erf",
          "package": "erf",
          "partial": "Erf",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#t:Erf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse error functions, e.g., \u003ccode\u003einverf . erf = id\u003c/code\u003e and \u003ccode\u003eerf . inverf = id\u003c/code\u003e assuming\n the appropriate codomain for \u003ccode\u003e\u003ca\u003einverf\u003c/a\u003e\u003c/code\u003e.\n Note that the accuracy may drop radically for extreme arguments.\n\u003c/p\u003e",
          "module": "Data.Number.Erf",
          "name": "InvErf",
          "package": "erf",
          "source": "src/Data-Number-Erf.html#InvErf",
          "type": "class"
        },
        "index": {
          "description": "Inverse error functions e.g inverf erf id and erf inverf id assuming the appropriate codomain for inverf Note that the accuracy may drop radically for extreme arguments",
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "InvErf",
          "package": "erf",
          "partial": "Inv Erf",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#t:InvErf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "erf",
          "package": "erf",
          "signature": "a -\u003e a",
          "source": "src/Data-Number-Erf.html#erf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "erf",
          "normalized": "a-\u003ea",
          "package": "erf",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:erf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "erfc",
          "package": "erf",
          "signature": "erfc",
          "source": "src/Data-Number-Erf.html#erfc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "erfc",
          "package": "erf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:erfc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "erfcx",
          "package": "erf",
          "signature": "erfcx",
          "source": "src/Data-Number-Erf.html#erfcx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "erfcx",
          "package": "erf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:erfcx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "inverf",
          "package": "erf",
          "signature": "a -\u003e a",
          "source": "src/Data-Number-Erf.html#inverf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "inverf",
          "normalized": "a-\u003ea",
          "package": "erf",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:inverf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "inverfc",
          "package": "erf",
          "signature": "a -\u003e a",
          "source": "src/Data-Number-Erf.html#inverfc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "inverfc",
          "normalized": "a-\u003ea",
          "package": "erf",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:inverfc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "invnormcdf",
          "package": "erf",
          "signature": "a -\u003e a",
          "source": "src/Data-Number-Erf.html#invnormcdf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "invnormcdf",
          "normalized": "a-\u003ea",
          "package": "erf",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:invnormcdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.Erf",
          "name": "normcdf",
          "package": "erf",
          "signature": "normcdf",
          "source": "src/Data-Number-Erf.html#normcdf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number Erf",
          "module": "Data.Number.Erf",
          "name": "normcdf",
          "package": "erf",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/erf/docs/Data-Number-Erf.html#v:normcdf"
      }
    }
  ]
]