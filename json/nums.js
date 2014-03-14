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
        "word": "nums"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Nums.Fractionals",
          "name": "Fractionals",
          "package": "nums",
          "source": "src/Nums-Fractionals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "Fractionals",
          "package": "nums",
          "partial": "Fractionals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound away from zero (ceiling if positive, floor otherwise).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "awayFromZero",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#awayFromZero",
          "type": "function"
        },
        "index": {
          "description": "Round away from zero ceiling if positive floor otherwise",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "awayFromZero",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "From Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:awayFromZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a number x.5?\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "isHalf",
          "package": "nums",
          "signature": "a -\u003e Bool",
          "source": "src/Nums-Fractionals.html#isHalf",
          "type": "function"
        },
        "index": {
          "description": "Is number x.5",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "isHalf",
          "normalized": "a-\u003eBool",
          "package": "nums",
          "partial": "Half",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:isHalf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but rounds away from zero (by positive or negative).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "nearestAwayFromZero",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#nearestAwayFromZero",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but rounds away from zero by positive or negative",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "nearestAwayFromZero",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Away From Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:nearestAwayFromZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound up (round).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "nearestBanker",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#nearestBanker",
          "type": "function"
        },
        "index": {
          "description": "Round up round",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "nearestBanker",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Banker",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:nearestBanker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but to infinity instead of zero.\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "nearestTowardInf",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#nearestTowardInf",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but to infinity instead of zero",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "nearestTowardInf",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Toward Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:nearestTowardInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ca\u003enearestTowardZero\u003c/a\u003e but towards negative instead of zero.\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "nearestTowardNegInf",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#nearestTowardNegInf",
          "type": "function"
        },
        "index": {
          "description": "Same as nearestTowardZero but towards negative instead of zero",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "nearestTowardNegInf",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Toward Neg Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:nearestTowardNegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound torwards zero (if half go towards zero, otherwise up to 1).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "nearestTowardZero",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#nearestTowardZero",
          "type": "function"
        },
        "index": {
          "description": "Round torwards zero if half go towards zero otherwise up to",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "nearestTowardZero",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Toward Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:nearestTowardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound upwards (ceiling).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "towardInf",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#towardInf",
          "type": "function"
        },
        "index": {
          "description": "Round upwards ceiling",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "towardInf",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:towardInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound backwards (floor).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "towardNegInf",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#towardNegInf",
          "type": "function"
        },
        "index": {
          "description": "Round backwards floor",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "towardNegInf",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Neg Inf",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:towardNegInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound toward zero (truncate).\n\u003c/p\u003e",
          "module": "Nums.Fractionals",
          "name": "towardZero",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums-Fractionals.html#towardZero",
          "type": "function"
        },
        "index": {
          "description": "Round toward zero truncate",
          "hierarchy": "Nums Fractionals",
          "module": "Nums.Fractionals",
          "name": "towardZero",
          "normalized": "a-\u003eb",
          "package": "nums",
          "partial": "Zero",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums-Fractionals.html#v:towardZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon functions for numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Nums",
          "name": "Nums",
          "package": "nums",
          "source": "src/Nums.html",
          "type": "module"
        },
        "index": {
          "description": "Common functions for numbers",
          "hierarchy": "Nums",
          "module": "Nums",
          "name": "Nums",
          "package": "nums",
          "partial": "Nums",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShort-hand for fromIntegral.\n\u003c/p\u003e",
          "module": "Nums",
          "name": "fi",
          "package": "nums",
          "signature": "a -\u003e b",
          "source": "src/Nums.html#fi",
          "type": "function"
        },
        "index": {
          "description": "Short-hand for fromIntegral",
          "hierarchy": "Nums",
          "module": "Nums",
          "name": "fi",
          "normalized": "a-\u003eb",
          "package": "nums",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nums/docs/Nums.html#v:fi"
      }
    }
  ]
]