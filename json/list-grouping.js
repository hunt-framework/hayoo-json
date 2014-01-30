[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides functions for the awkward task of dividing a list into \n sub-lists, based on some predicate function, or based on some integer\n offset (e.g. dividing a list into lists of three elements each.\n\u003c/p\u003e\u003cp\u003eWe could abstract out some common patterns, but I want the code to \n be copy-and-pasteable. I'm hoping that this module can eventually\n contain the most efficient implementation possible of these functions,\n and would appreciate any suggestions or patches. Please also send\n any suggestions for other useful list-grouping functions.\n\u003c/p\u003e\u003cp\u003ePlease send me any requests, bugs, or improvements to this module!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "module",
        "fct-source": "src/Data-List-Grouping.html",
        "fct-type": "module",
        "title": "Grouping"
      },
      "index": {
        "description": "Provides functions for the awkward task of dividing list into sub-lists based on some predicate function or based on some integer offset e.g dividing list into lists of three elements each We could abstract out some common patterns but want the code to be copy-and-pasteable hoping that this module can eventually contain the most efficient implementation possible of these functions and would appreciate any suggestions or patches Please also send any suggestions for other useful list-grouping functions Please send me any requests bugs or improvements to this module",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "Grouping",
        "normalized": "",
        "package": "list-grouping",
        "partial": "Grouping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:breakAfter",
      "description": {
        "fct-descr": "\u003cp\u003epartitions list after every element matching predicate:\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#breakAfter",
        "fct-type": "function",
        "title": "breakAfter"
      },
      "index": {
        "description": "partitions list after every element matching predicate",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "breakAfter",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "After",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:breakBefore",
      "description": {
        "fct-descr": "\u003cp\u003epartitions list before every element matching predicate:\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#breakBefore",
        "fct-type": "function",
        "title": "breakBefore"
      },
      "index": {
        "description": "partitions list before every element matching predicate",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "breakBefore",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "Before",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:breakDrop",
      "description": {
        "fct-descr": "\u003cp\u003epartitions the list at the points matching predicate, dropping those\n elements that match.\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#breakDrop",
        "fct-type": "function",
        "title": "breakDrop"
      },
      "index": {
        "description": "partitions the list at the points matching predicate dropping those elements that match",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "breakDrop",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "Drop",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:splitEvery",
      "description": {
        "fct-descr": "\u003cp\u003epartitions list into sub-lists of length given by the Int:\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "Int -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#splitEvery",
        "fct-type": "function",
        "title": "splitEvery"
      },
      "index": {
        "description": "partitions list into sub-lists of length given by the Int",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "splitEvery",
        "normalized": "Int-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "Every",
        "signature": "Int-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:splitWith",
      "description": {
        "fct-descr": "\u003cp\u003epartitions list into lengths corresponding the list of Ints supplied.\n if we run out of lengths, the remaining tail is returned as last element.\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "[Int] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#splitWith",
        "fct-type": "function",
        "title": "splitWith"
      },
      "index": {
        "description": "partitions list into lengths corresponding the list of Ints supplied if we run out of lengths the remaining tail is returned as last element",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "splitWith",
        "normalized": "[Int]-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "With",
        "signature": "[Int]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/list-grouping/docs/Data-List-Grouping.html#v:splitWithDrop",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003esplitWith\u003c/a\u003e\u003c/code\u003e but we drop the end of our list should we run out of\n integer lengths.\n\u003c/p\u003e",
        "fct-module": "Data.List.Grouping",
        "fct-package": "list-grouping",
        "fct-signature": "[Int] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-List-Grouping.html#splitWithDrop",
        "fct-type": "function",
        "title": "splitWithDrop"
      },
      "index": {
        "description": "same as splitWith but we drop the end of our list should we run out of integer lengths",
        "hierarchy": "Data List Grouping",
        "module": "Data.List.Grouping",
        "name": "splitWithDrop",
        "normalized": "[Int]-\u003e[a]-\u003e[[a]]",
        "package": "list-grouping",
        "partial": "With Drop",
        "signature": "[Int]-\u003e[a]-\u003e[[a]]"
      }
    }
  }
]