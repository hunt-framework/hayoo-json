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
        "word": "RandomDotOrg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Used to check how much of your random.org quota you have. Please see\n \u003ca\u003ehttp://random.org/quota\u003c/a\u003e for more info.\n",
          "module": "System.Random.Atmosphere",
          "name": "3AgetQuota",
          "package": "RandomDotOrg",
          "signature": "IO (Either String Int)",
          "source": "http://hackage.haskell.org/package/RandomDotOrg/docs/src/System-Random-Atmosphere.html#getQuota",
          "type": "function"
        },
        "index": {
          "description": "Used to check how much of your random.org quota you have Please see http random.org quota for more info",
          "hierarchy": "System Random Atmosphere",
          "module": "System.Random.Atmosphere",
          "name": "3AgetQuota",
          "package": "RandomDotOrg",
          "partial": "Aget Quota",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RandomDotOrg/docs/System-Random-Atmosphere.html#v:3AgetQuota"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Number of integers to get\nMinimum number\nMaximum number\nReturns either an error string or the list of integers\n",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomNumbers",
          "package": "RandomDotOrg",
          "signature": "Int-\u003e Int-\u003e Int-\u003e IO (Either String [Int])",
          "source": "http://hackage.haskell.org/package/RandomDotOrg/docs/src/System-Random-Atmosphere.html#getRandomNumbers",
          "type": "function"
        },
        "index": {
          "description": "Number of integers to get Minimum number Maximum number Returns either an error string or the list of integers",
          "hierarchy": "System Random Atmosphere",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomNumbers",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eIO(Either String[Int])",
          "package": "RandomDotOrg",
          "partial": "Aget Random Numbers",
          "signature": "Int-\u003eInt-\u003eInt-\u003eIO(Either String[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RandomDotOrg/docs/System-Random-Atmosphere.html#v:3AgetRandomNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Minimum\nMaximum\n",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomSequence",
          "package": "RandomDotOrg",
          "signature": "Int-\u003e Int-\u003e IO (Either String [Int])",
          "source": "http://hackage.haskell.org/package/RandomDotOrg/docs/src/System-Random-Atmosphere.html#getRandomSequence",
          "type": "function"
        },
        "index": {
          "description": "Minimum Maximum",
          "hierarchy": "System Random Atmosphere",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomSequence",
          "normalized": "Int-\u003eInt-\u003eIO(Either String[Int])",
          "package": "RandomDotOrg",
          "partial": "Aget Random Sequence",
          "signature": "Int-\u003eInt-\u003eIO(Either String[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RandomDotOrg/docs/System-Random-Atmosphere.html#v:3AgetRandomSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Number of strings requested, max is 10,000\nLength of each string, max is 20\nShould digits be allowed?\nShould uppercase be allowed?\nShould lowercase be allowed?\nShould each string be unique?\n",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomStrings",
          "package": "RandomDotOrg",
          "signature": "Int-\u003e Int-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e IO (Either String [String])",
          "source": "http://hackage.haskell.org/package/RandomDotOrg/docs/src/System-Random-Atmosphere.html#getRandomStrings",
          "type": "function"
        },
        "index": {
          "description": "Number of strings requested max is Length of each string max is Should digits be allowed Should uppercase be allowed Should lowercase be allowed Should each string be unique",
          "hierarchy": "System Random Atmosphere",
          "module": "System.Random.Atmosphere",
          "name": "3AgetRandomStrings",
          "normalized": "Int-\u003eInt-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Either String[String])",
          "package": "RandomDotOrg",
          "partial": "Aget Random Strings",
          "signature": "Int-\u003eInt-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eIO(Either String[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RandomDotOrg/docs/System-Random-Atmosphere.html#v:3AgetRandomStrings"
      }
    }
  ]
]