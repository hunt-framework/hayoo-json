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
        "word": "majority"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algorithms.Majority",
          "name": "Majority",
          "package": "majority",
          "source": "src/Algorithms-Majority.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algorithms Majority",
          "module": "Algorithms.Majority",
          "name": "Majority",
          "package": "majority",
          "partial": "Majority",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/majority/docs/Algorithms-Majority.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(length xs)\u003c/em\u003e, Determines if there in a list of votes \u003cem\u003exs\u003c/em\u003e is a candidate\n that has more than half of the votes, and if so, returns that canditate.\n\u003c/p\u003e\u003cp\u003eE.g. applying \u003ccode\u003emajority\u003c/code\u003e on the string \u003ccode\u003e\"AAACCBBCCCBCC\"\u003c/code\u003e yields\n \u003ccode\u003eJust 'C'\u003c/code\u003e, since \u003ccode\u003e'C'\u003c/code\u003e has 7 out of 13 votes.\n\u003c/p\u003e",
          "module": "Algorithms.Majority",
          "name": "majority",
          "package": "majority",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Algorithms-Majority.html#majority",
          "type": "function"
        },
        "index": {
          "description": "length xs Determines if there in list of votes xs is candidate that has more than half of the votes and if so returns that canditate E.g applying majority on the string AAACCBBCCCBCC yields Just since has out of votes",
          "hierarchy": "Algorithms Majority",
          "module": "Algorithms.Majority",
          "name": "majority",
          "normalized": "[a]-\u003eMaybe a",
          "package": "majority",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/majority/docs/Algorithms-Majority.html#v:majority"
      }
    }
  ]
]