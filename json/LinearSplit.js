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
        "word": "LinearSplit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe LinearSplit module implements partitioning the sequence of items to the \n subsequences in the order given. The next functions are exported:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e gPartition. Split the sequence of items items using greedy heuristic. \n\u003c/li\u003e\u003cli\u003e lPartition. Split the sequence of items to minimize the maximum cost over \n   all the subsequences using linear partition algorithm\n   (see the 'The Algorithm Design Manual' by Steven S. Skiena..)  \n\u003c/li\u003e\u003cli\u003e ltPartition. The approximation of the linear partition algorithm.\n   The large size of the work items space is decreased by\n   combining the consecutive items based on the threshold parameter.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.LinearSplit",
          "name": "LinearSplit",
          "package": "LinearSplit",
          "source": "src/Data-LinearSplit.html",
          "type": "module"
        },
        "index": {
          "description": "The LinearSplit module implements partitioning the sequence of items to the subsequences in the order given The next functions are exported gPartition Split the sequence of items items using greedy heuristic lPartition Split the sequence of items to minimize the maximum cost over all the subsequences using linear partition algorithm see the The Algorithm Design Manual by Steven Skiena ltPartition The approximation of the linear partition algorithm The large size of the work items space is decreased by combining the consecutive items based on the threshold parameter",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "LinearSplit",
          "package": "LinearSplit",
          "partial": "Linear Split",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of the work item\n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "Item",
          "package": "LinearSplit",
          "source": "src/Data-LinearSplit.html#Item",
          "type": "data"
        },
        "index": {
          "description": "Representation of the work item",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "Item",
          "package": "LinearSplit",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LinearSplit",
          "name": "Item",
          "package": "LinearSplit",
          "signature": "Item",
          "source": "src/Data-LinearSplit.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "Item",
          "package": "LinearSplit",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition the items based on the greedy algoritm\n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "gPartition",
          "package": "LinearSplit",
          "signature": "([Item a b] -\u003e Bool) -\u003e Int -\u003e [Item a b] -\u003e [[Item a b]]",
          "source": "src/Data-LinearSplit.html#gPartition",
          "type": "function"
        },
        "index": {
          "description": "Partition the items based on the greedy algoritm",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "gPartition",
          "normalized": "([Item a b]-\u003eBool)-\u003eInt-\u003e[Item a b]-\u003e[[Item a b]]",
          "package": "LinearSplit",
          "partial": "Partition",
          "signature": "([Item a b]-\u003eBool)-\u003eInt-\u003e[Item a b]-\u003e[[Item a b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:gPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eitem id\n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "item",
          "package": "LinearSplit",
          "signature": "a",
          "source": "src/Data-LinearSplit.html#Item",
          "type": "function"
        },
        "index": {
          "description": "item id",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "item",
          "package": "LinearSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition items to minimize the maximum cost over all ranges\n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "lPartition",
          "package": "LinearSplit",
          "signature": "Int -\u003e [Item a b] -\u003e [[Item a b]]",
          "source": "src/Data-LinearSplit.html#lPartition",
          "type": "function"
        },
        "index": {
          "description": "Partition items to minimize the maximum cost over all ranges",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "lPartition",
          "normalized": "Int-\u003e[Item a b]-\u003e[[Item a b]]",
          "package": "LinearSplit",
          "partial": "Partition",
          "signature": "Int-\u003e[Item a b]-\u003e[[Item a b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:lPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition items with accumulating items \n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "ltPartition",
          "package": "LinearSplit",
          "signature": "Int -\u003e [Item a b] -\u003e b -\u003e [[Item a b]]",
          "source": "src/Data-LinearSplit.html#ltPartition",
          "type": "function"
        },
        "index": {
          "description": "Partition items with accumulating items",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "ltPartition",
          "normalized": "Int-\u003e[Item a b]-\u003eb-\u003e[[Item a b]]",
          "package": "LinearSplit",
          "partial": "Partition",
          "signature": "Int-\u003e[Item a b]-\u003eb-\u003e[[Item a b]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:ltPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eweight of the item\n\u003c/p\u003e",
          "module": "Data.LinearSplit",
          "name": "weight",
          "package": "LinearSplit",
          "signature": "b",
          "source": "src/Data-LinearSplit.html#Item",
          "type": "function"
        },
        "index": {
          "description": "weight of the item",
          "hierarchy": "Data LinearSplit",
          "module": "Data.LinearSplit",
          "name": "weight",
          "package": "LinearSplit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:weight"
      }
    }
  ]
]