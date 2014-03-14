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
        "word": "hlcm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLCM",
          "name": "Frequency",
          "package": "hlcm",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#Frequency",
          "type": "type"
        },
        "index": {
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "Frequency",
          "package": "hlcm",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HLCM",
          "name": "Item",
          "package": "hlcm",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#Item",
          "type": "type"
        },
        "index": {
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "Item",
          "package": "hlcm",
          "partial": "Item",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The transaction database as a big string. Transactions are separated by newlines, items are separated by spaces\nMinimum frequency threshold for the frequent itemsets\nvalue for parBuffer\ndepth for cutting parallelism\nOutput: list of closed frequent itemsets\n",
          "module": "HLCM",
          "name": "benchLCM_parBuffer",
          "package": "hlcm",
          "signature": "ByteString-\u003e Frequency-\u003e Int-\u003e Int-\u003e [[Item]]",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#benchLCM_parBuffer",
          "type": "function"
        },
        "index": {
          "description": "The transaction database as big string Transactions are separated by newlines items are separated by spaces Minimum frequency threshold for the frequent itemsets value for parBuffer depth for cutting parallelism Output list of closed frequent itemsets",
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "benchLCM_parBuffer",
          "normalized": "ByteString-\u003eFrequency-\u003eInt-\u003eInt-\u003e[[Item]]",
          "package": "hlcm",
          "partial": "LCM Buffer",
          "signature": "ByteString-\u003eFrequency-\u003eInt-\u003eInt-\u003e[[Item]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#v:benchLCM_parBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The transaction database as a big string. Transactions are separated by newlines, items are separated by spaces\nMinimum frequency threshold for the frequent itemsets\ndepth for cutting parallelism\nOutput: list of closed frequent itemsets\n",
          "module": "HLCM",
          "name": "benchLCM_parMap",
          "package": "hlcm",
          "signature": "ByteString-\u003e Frequency-\u003e Int-\u003e [[Item]]",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#benchLCM_parMap",
          "type": "function"
        },
        "index": {
          "description": "The transaction database as big string Transactions are separated by newlines items are separated by spaces Minimum frequency threshold for the frequent itemsets depth for cutting parallelism Output list of closed frequent itemsets",
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "benchLCM_parMap",
          "normalized": "ByteString-\u003eFrequency-\u003eInt-\u003e[[Item]]",
          "package": "hlcm",
          "partial": "LCM Map",
          "signature": "ByteString-\u003eFrequency-\u003eInt-\u003e[[Item]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#v:benchLCM_parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The transaction database as matrix of items (List of List)\nMinimum frequency threshold for the frequent itemsets\nOutput: list of closed frequent itemsets\n",
          "module": "HLCM",
          "name": "runLCMmatrix",
          "package": "hlcm",
          "signature": "[[Item]]-\u003e Frequency-\u003e [[Item]]",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#runLCMmatrix",
          "type": "function"
        },
        "index": {
          "description": "The transaction database as matrix of items List of List Minimum frequency threshold for the frequent itemsets Output list of closed frequent itemsets",
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "runLCMmatrix",
          "normalized": "[[Item]]-\u003eFrequency-\u003e[[Item]]",
          "package": "hlcm",
          "partial": "LCMmatrix",
          "signature": "[[Item]]-\u003eFrequency-\u003e[[Item]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#v:runLCMmatrix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The transaction database as a big string. Transactions are separated by newlines, items are separated by spaces\nMinimum frequency threshold for the frequent itemsets\nOutput: list of closed frequent itemsets\n",
          "module": "HLCM",
          "name": "runLCMstring",
          "package": "hlcm",
          "signature": "ByteString-\u003e Frequency-\u003e [[Item]]",
          "source": "http://hackage.haskell.org/package/hlcm/docs/src/HLCM.html#runLCMstring",
          "type": "function"
        },
        "index": {
          "description": "The transaction database as big string Transactions are separated by newlines items are separated by spaces Minimum frequency threshold for the frequent itemsets Output list of closed frequent itemsets",
          "hierarchy": "HLCM",
          "module": "HLCM",
          "name": "runLCMstring",
          "normalized": "ByteString-\u003eFrequency-\u003e[[Item]]",
          "package": "hlcm",
          "partial": "LCMstring",
          "signature": "ByteString-\u003eFrequency-\u003e[[Item]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hlcm/docs/HLCM.html#v:runLCMstring"
      }
    }
  ]
]