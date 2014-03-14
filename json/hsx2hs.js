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
        "word": "hsx2hs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.HSX.QQ",
          "name": "QQ",
          "package": "hsx2hs",
          "source": "src/Language-Haskell-HSX-QQ.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell HSX QQ",
          "module": "Language.Haskell.HSX.QQ",
          "name": "QQ",
          "package": "hsx2hs",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsx2hs/docs/Language-Haskell-HSX-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter which can be used to parse HSX syntax\n\u003c/p\u003e",
          "module": "Language.Haskell.HSX.QQ",
          "name": "hsx",
          "package": "hsx2hs",
          "signature": "QuasiQuoter",
          "source": "src/Language-Haskell-HSX-QQ.html#hsx",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter which can be used to parse HSX syntax",
          "hierarchy": "Language Haskell HSX QQ",
          "module": "Language.Haskell.HSX.QQ",
          "name": "hsx",
          "package": "hsx2hs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx2hs/docs/Language-Haskell-HSX-QQ.html#v:hsx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for transforming abstract Haskell code extended with regular\n patterns into semantically equivalent normal abstract Haskell code. In\n other words, we transform away regular patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.HSX.Transform",
          "name": "Transform",
          "package": "hsx2hs",
          "source": "src/Language-Haskell-HSX-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for transforming abstract Haskell code extended with regular patterns into semantically equivalent normal abstract Haskell code In other words we transform away regular patterns",
          "hierarchy": "Language Haskell HSX Transform",
          "module": "Language.Haskell.HSX.Transform",
          "name": "Transform",
          "package": "hsx2hs",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hsx2hs/docs/Language-Haskell-HSX-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform away occurences of regular patterns from an abstract\n Haskell module, preserving semantics.\n\u003c/p\u003e",
          "module": "Language.Haskell.HSX.Transform",
          "name": "transform",
          "package": "hsx2hs",
          "signature": "Module -\u003e Module",
          "source": "src/Language-Haskell-HSX-Transform.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Transform away occurences of regular patterns from an abstract Haskell module preserving semantics",
          "hierarchy": "Language Haskell HSX Transform",
          "module": "Language.Haskell.HSX.Transform",
          "name": "transform",
          "normalized": "Module-\u003eModule",
          "package": "hsx2hs",
          "signature": "Module-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx2hs/docs/Language-Haskell-HSX-Transform.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform expressions by traversing subterms.\n Of special interest are expressions that contain patterns as subterms,\n i.e. \u003ccode\u003elet\u003c/code\u003e, \u003ccode\u003ecase\u003c/code\u003e and lambda expressions, and also list comprehensions\n and \u003ccode\u003edo\u003c/code\u003e-expressions. All other expressions simply transform their\n sub-expressions, if any.\n Of special interest are of course also any xml expressions.\n\u003c/p\u003e",
          "module": "Language.Haskell.HSX.Transform",
          "name": "transformExp",
          "package": "hsx2hs",
          "signature": "Exp -\u003e Exp",
          "source": "src/Language-Haskell-HSX-Transform.html#transformExp",
          "type": "function"
        },
        "index": {
          "description": "Transform expressions by traversing subterms Of special interest are expressions that contain patterns as subterms i.e let case and lambda expressions and also list comprehensions and do expressions All other expressions simply transform their sub-expressions if any Of special interest are of course also any xml expressions",
          "hierarchy": "Language Haskell HSX Transform",
          "module": "Language.Haskell.HSX.Transform",
          "name": "transformExp",
          "normalized": "Exp-\u003eExp",
          "package": "hsx2hs",
          "partial": "Exp",
          "signature": "Exp-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hsx2hs/docs/Language-Haskell-HSX-Transform.html#v:transformExp"
      }
    }
  ]
]