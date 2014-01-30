[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe LinearSplit module implements partitioning the sequence of items to the \n subsequences in the order given. The next functions are exported:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e gPartition. Split the sequence of items items using greedy heuristic. \n\u003c/li\u003e\u003cli\u003e lPartition. Split the sequence of items to minimize the maximum cost over \n   all the subsequences using linear partition algorithm\n   (see the 'The Algorithm Design Manual' by Steven S. Skiena..)  \n\u003c/li\u003e\u003cli\u003e ltPartition. The approximation of the linear partition algorithm.\n   The large size of the work items space is decreased by\n   combining the consecutive items based on the threshold parameter.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "module",
        "fct-source": "src/Data-LinearSplit.html",
        "fct-type": "module",
        "title": "LinearSplit"
      },
      "index": {
        "description": "The LinearSplit module implements partitioning the sequence of items to the subsequences in the order given The next functions are exported gPartition Split the sequence of items items using greedy heuristic lPartition Split the sequence of items to minimize the maximum cost over all the subsequences using linear partition algorithm see the The Algorithm Design Manual by Steven Skiena ltPartition The approximation of the linear partition algorithm The large size of the work items space is decreased by combining the consecutive items based on the threshold parameter",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "LinearSplit",
        "normalized": "",
        "package": "LinearSplit",
        "partial": "Linear Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#t:Item",
      "description": {
        "fct-descr": "\u003cp\u003eRepresentation of the work item\n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "data",
        "fct-source": "src/Data-LinearSplit.html#Item",
        "fct-type": "data",
        "title": "Item"
      },
      "index": {
        "description": "Representation of the work item",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "Item",
        "normalized": "",
        "package": "LinearSplit",
        "partial": "Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:Item",
      "description": {
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "Item",
        "fct-source": "src/Data-LinearSplit.html#Item",
        "fct-type": "function",
        "title": "Item"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "Item",
        "normalized": "",
        "package": "LinearSplit",
        "partial": "Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:gPartition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition the items based on the greedy algoritm\n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "([Item a b] -\u003e Bool) -\u003e Int -\u003e [Item a b] -\u003e [[Item a b]]",
        "fct-source": "src/Data-LinearSplit.html#gPartition",
        "fct-type": "function",
        "title": "gPartition"
      },
      "index": {
        "description": "Partition the items based on the greedy algoritm",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "gPartition",
        "normalized": "([Item a b]-\u003eBool)-\u003eInt-\u003e[Item a b]-\u003e[[Item a b]]",
        "package": "LinearSplit",
        "partial": "Partition",
        "signature": "([Item a b]-\u003eBool)-\u003eInt-\u003e[Item a b]-\u003e[[Item a b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:item",
      "description": {
        "fct-descr": "\u003cp\u003eitem id\n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "a",
        "fct-source": "src/Data-LinearSplit.html#Item",
        "fct-type": "function",
        "title": "item"
      },
      "index": {
        "description": "item id",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "item",
        "normalized": "",
        "package": "LinearSplit",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:lPartition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition items to minimize the maximum cost over all ranges\n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "Int -\u003e [Item a b] -\u003e [[Item a b]]",
        "fct-source": "src/Data-LinearSplit.html#lPartition",
        "fct-type": "function",
        "title": "lPartition"
      },
      "index": {
        "description": "Partition items to minimize the maximum cost over all ranges",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "lPartition",
        "normalized": "Int-\u003e[Item a b]-\u003e[[Item a b]]",
        "package": "LinearSplit",
        "partial": "Partition",
        "signature": "Int-\u003e[Item a b]-\u003e[[Item a b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:ltPartition",
      "description": {
        "fct-descr": "\u003cp\u003ePartition items with accumulating items \n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "Int -\u003e [Item a b] -\u003e b -\u003e [[Item a b]]",
        "fct-source": "src/Data-LinearSplit.html#ltPartition",
        "fct-type": "function",
        "title": "ltPartition"
      },
      "index": {
        "description": "Partition items with accumulating items",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "ltPartition",
        "normalized": "Int-\u003e[Item a b]-\u003eb-\u003e[[Item a b]]",
        "package": "LinearSplit",
        "partial": "Partition",
        "signature": "Int-\u003e[Item a b]-\u003eb-\u003e[[Item a b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/LinearSplit/docs/Data-LinearSplit.html#v:weight",
      "description": {
        "fct-descr": "\u003cp\u003eweight of the item\n\u003c/p\u003e",
        "fct-module": "Data.LinearSplit",
        "fct-package": "LinearSplit",
        "fct-signature": "b",
        "fct-source": "src/Data-LinearSplit.html#Item",
        "fct-type": "function",
        "title": "weight"
      },
      "index": {
        "description": "weight of the item",
        "hierarchy": "Data LinearSplit",
        "module": "Data.LinearSplit",
        "name": "weight",
        "normalized": "",
        "package": "LinearSplit",
        "partial": "",
        "signature": ""
      }
    }
  }
]