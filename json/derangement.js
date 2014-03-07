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
        "word": "derangement"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Returns a derangement of a multiset or of a maximal fixed-point free subset represented here as (a,b) where a is paired with b\n",
          "module": "Data.List.Derangement",
          "name": "3Aderangement",
          "package": "derangement",
          "signature": "[a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Returns derangement of multiset or of maximal fixed-point free subset represented here as where is paired with",
          "hierarchy": "Data List Derangement",
          "module": "Data.List.Derangement",
          "name": "3Aderangement",
          "normalized": "[a]-\u003e[a]",
          "package": "derangement",
          "partial": "Aderangement",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derangement/docs/Data-List-Derangement.html#v:3Aderangement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like derangement this returns a zipped derangement but applies \u003ctt\u003ef :: (a -\u003e b)\u003c/tt\u003e before doing equality tests.\n",
          "module": "Data.List.Derangement",
          "name": "3AderangementBy",
          "package": "derangement",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Like derangement this returns zipped derangement but applies before doing equality tests",
          "hierarchy": "Data List Derangement",
          "module": "Data.List.Derangement",
          "name": "3AderangementBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "derangement",
          "partial": "Aderangement By",
          "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derangement/docs/Data-List-Derangement.html#v:3AderangementBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Like derangement but applies \u003ctt\u003ef :: (Eq b) =\u003e (a -\u003e b)\u003c/tt\u003e\n",
          "module": "Data.List.Derangement",
          "name": "3AderangementWRT",
          "package": "derangement",
          "signature": "(a -\u003e b) -\u003e [a] -\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Like derangement but applies Eq",
          "hierarchy": "Data List Derangement",
          "module": "Data.List.Derangement",
          "name": "3AderangementWRT",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "package": "derangement",
          "partial": "Aderangement WRT",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/derangement/docs/Data-List-Derangement.html#v:3AderangementWRT"
      }
    }
  ]
]