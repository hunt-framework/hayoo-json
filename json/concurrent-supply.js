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
        "word": "concurrent-supply"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA fast unique identifier supply with local pooling and replay\n support.\n\u003c/p\u003e\u003cp\u003eOne often has a desire to generate a bunch of integer identifiers within\n a single process that are unique within that process. You could use\n UUIDs, but they can be expensive to generate; you don't want to have\n your threads contending for a single external counter if the identifier\n is not going to be used outside the process.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003econcurrent-supply\u003c/code\u003e builds a tree-like structure which can be split; you\n can make smaller unique supplies and then you allocate from your supplies\n locally. Internally it pulls from a unique supply one block at a time as\n you walk into parts of the tree that haven't been explored.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "Supply",
          "package": "concurrent-supply",
          "source": "src/Control-Concurrent-Supply.html",
          "type": "module"
        },
        "index": {
          "description": "fast unique identifier supply with local pooling and replay support One often has desire to generate bunch of integer identifiers within single process that are unique within that process You could use UUIDs but they can be expensive to generate you don want to have your threads contending for single external counter if the identifier is not going to be used outside the process concurrent-supply builds tree-like structure which can be split you can make smaller unique supplies and then you allocate from your supplies locally Internally it pulls from unique supply one block at time as you walk into parts of the tree that haven been explored",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "Supply",
          "package": "concurrent-supply",
          "partial": "Supply",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA user managed globally unique variable supply.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "Supply",
          "package": "concurrent-supply",
          "source": "src/Control-Concurrent-Supply.html#Supply",
          "type": "data"
        },
        "index": {
          "description": "user managed globally unique variable supply",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "Supply",
          "package": "concurrent-supply",
          "partial": "Supply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#t:Supply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain a fresh Id from a Supply.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "freshId",
          "package": "concurrent-supply",
          "signature": "Supply -\u003e (Int, Supply)",
          "source": "src/Control-Concurrent-Supply.html#freshId",
          "type": "function"
        },
        "index": {
          "description": "Obtain fresh Id from Supply",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "freshId",
          "normalized": "Supply-\u003e(Int,Supply)",
          "package": "concurrent-supply",
          "partial": "Id",
          "signature": "Supply-\u003e(Int,Supply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#v:freshId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unboxed version of freshId\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "freshId#",
          "package": "concurrent-supply",
          "signature": "Supply -\u003e (#Int#, Supply#)",
          "source": "src/Control-Concurrent-Supply.html#freshId%23",
          "type": "function"
        },
        "index": {
          "description": "An unboxed version of freshId",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "freshId#",
          "normalized": "Supply-\u003e(#Int #,Supply #)",
          "package": "concurrent-supply",
          "partial": "Id",
          "signature": "Supply-\u003e(#Int #,Supply #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#v:freshId-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGrab a new supply. Any two supplies obtained with newSupply are guaranteed to return\n disjoint sets of identifiers. Replaying the same sequence of operations on the same\n Supply will yield the same results.\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "newSupply",
          "package": "concurrent-supply",
          "signature": "IO Supply",
          "source": "src/Control-Concurrent-Supply.html#newSupply",
          "type": "function"
        },
        "index": {
          "description": "Grab new supply Any two supplies obtained with newSupply are guaranteed to return disjoint sets of identifiers Replaying the same sequence of operations on the same Supply will yield the same results",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "newSupply",
          "package": "concurrent-supply",
          "partial": "Supply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#v:newSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a supply into two supplies that will return disjoint identifiers\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "splitSupply",
          "package": "concurrent-supply",
          "signature": "Supply -\u003e (Supply, Supply)",
          "source": "src/Control-Concurrent-Supply.html#splitSupply",
          "type": "function"
        },
        "index": {
          "description": "Split supply into two supplies that will return disjoint identifiers",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "splitSupply",
          "normalized": "Supply-\u003e(Supply,Supply)",
          "package": "concurrent-supply",
          "partial": "Supply",
          "signature": "Supply-\u003e(Supply,Supply)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#v:splitSupply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unboxed version of splitSupply\n\u003c/p\u003e",
          "module": "Control.Concurrent.Supply",
          "name": "splitSupply#",
          "package": "concurrent-supply",
          "signature": "Supply -\u003e (#Supply, Supply#)",
          "source": "src/Control-Concurrent-Supply.html#splitSupply%23",
          "type": "function"
        },
        "index": {
          "description": "An unboxed version of splitSupply",
          "hierarchy": "Control Concurrent Supply",
          "module": "Control.Concurrent.Supply",
          "name": "splitSupply#",
          "normalized": "Supply-\u003e(#Supply,Supply #)",
          "package": "concurrent-supply",
          "partial": "Supply",
          "signature": "Supply-\u003e(#Supply,Supply #)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concurrent-supply/docs/Control-Concurrent-Supply.html#v:splitSupply-35-"
      }
    }
  ]
]