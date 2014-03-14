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
        "word": "fast-math"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlso rewrite \u003ccode\u003e0/x\u003c/code\u003e to \u003ccode\u003e+0\u003c/code\u003e, which should really be \u003ccode\u003e-0\u003c/code\u003e for negative \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FastMath.Infinitesimal",
          "name": "Infinitesimal",
          "package": "fast-math",
          "source": "src/Numeric-FastMath-Infinitesimal.html",
          "type": "module"
        },
        "index": {
          "description": "Also rewrite to which should really be for negative",
          "hierarchy": "Numeric FastMath Infinitesimal",
          "module": "Numeric.FastMath.Infinitesimal",
          "name": "Infinitesimal",
          "package": "fast-math",
          "partial": "Infinitesimal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fast-math/docs/Numeric-FastMath-Infinitesimal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompile-time optimisations for \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e that break IEEE-754\n compatibility.\n\u003c/p\u003e\u003cp\u003eNamely, this otherwise empty module contains RULES that rewrite \u003ccode\u003ex-x\u003c/code\u003e,\n \u003ccode\u003ex*0\u003c/code\u003e and \u003ccode\u003e0*x\u003c/code\u003e to \u003ccode\u003e0\u003c/code\u003e, which is incorrect (according to IEEE-754) when\n \u003ccode\u003ex\u003c/code\u003e is \u003ccode\u003eNaN\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAt the time of writing, \u003ccode\u003ebase-4.3.1.0:GHC/Base.lhs\u003c/code\u003e erroneously includes\n these rules for \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003es, but not for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003es. This has been reported\n as GHC bug #5178: \u003ca\u003ehttp://hackage.haskell.org/trac/ghc/ticket/5178\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.FastMath",
          "name": "FastMath",
          "package": "fast-math",
          "source": "src/Numeric-FastMath.html",
          "type": "module"
        },
        "index": {
          "description": "Compile-time optimisations for Float and Double that break IEEE-754 compatibility Namely this otherwise empty module contains RULES that rewrite x-x and to which is incorrect according to IEEE-754 when is NaN At the time of writing base-4.3.1.0 GHC Base.lhs erroneously includes these rules for Float but not for Double This has been reported as GHC bug http hackage.haskell.org trac ghc ticket",
          "hierarchy": "Numeric FastMath",
          "module": "Numeric.FastMath",
          "name": "FastMath",
          "package": "fast-math",
          "partial": "Fast Math",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fast-math/docs/Numeric-FastMath.html#"
      }
    }
  ]
]