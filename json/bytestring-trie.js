[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdditional convenience functions. In order to keep \u003ca\u003eData.Trie\u003c/a\u003e\n concise, non-essential and uncommonly used functions have been\n moved here. Most of these functions simplify the generic functions\n from \u003ca\u003eData.Trie\u003c/a\u003e, following after the interface for \u003ca\u003eData.Map\u003c/a\u003e\n and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "module",
        "fct-source": "src/Data-Trie-Convenience.html",
        "fct-type": "module",
        "title": "Convenience"
      },
      "index": {
        "description": "Additional convenience functions In order to keep Data.Trie concise non-essential and uncommonly used functions have been moved here Most of these functions simplify the generic functions from Data.Trie following after the interface for Data.Map and Data.IntMap",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "Convenience",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "Convenience",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:adjustWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to change the value at a key.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "Apply function to change the value at key",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "adjustWithKey",
        "normalized": "(ByteString-\u003ea-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With Key",
        "signature": "(ByteString-\u003ea-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:disunion",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, a la symmetric difference. If they define\n the same key, it is removed; otherwise it is retained with the\n value it has in whichever trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#disunion",
        "fct-type": "function",
        "title": "disunion"
      },
      "index": {
        "description": "Combine two tries la symmetric difference If they define the same key it is removed otherwise it is retained with the value it has in whichever trie",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "disunion",
        "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListL",
      "description": {
        "fct-descr": "\u003cp\u003eA left-fold version of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e. If you run into issues with\n stack overflows when using \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e, then you\n should use this function instead.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "[(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListL",
        "fct-type": "function",
        "title": "fromListL"
      },
      "index": {
        "description": "left-fold version of fromList If you run into issues with stack overflows when using fromList or fromListR then you should use this function instead",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListL",
        "normalized": "[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List",
        "signature": "[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListR",
      "description": {
        "fct-descr": "\u003cp\u003eAn explicitly right-fold variant of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e. It is a good\n consumer for list fusion. Worst-case behavior is somewhat worse\n than worst-case for \u003ccode\u003e\u003ca\u003efromListL\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e function is\n currently just an alias for \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "[(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListR",
        "fct-type": "function",
        "title": "fromListR"
      },
      "index": {
        "description": "An explicitly right-fold variant of fromList It is good consumer for list fusion Worst-case behavior is somewhat worse than worst-case for fromListL The fromList function is currently just an alias for fromListR",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListR",
        "normalized": "[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List",
        "signature": "[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListS",
      "description": {
        "fct-descr": "\u003cp\u003eThis variant sorts the list before folding over it. This adds\n \u003cem\u003eO(n log n)\u003c/em\u003e overhead and requires the whole list be in memory\n at once, but it ensures that the list is in best-case order. The\n benefits generally outweigh the costs.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "[(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListS",
        "fct-type": "function",
        "title": "fromListS"
      },
      "index": {
        "description": "This variant sorts the list before folding over it This adds log overhead and requires the whole list be in memory at once but it ensures that the list is in best-case order The benefits generally outweigh the costs",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListS",
        "normalized": "[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List",
        "signature": "[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWith",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e that takes a function for combining\n values on conflict. The first argument to the combining function\n is the `\u003ccode\u003enew'\u003c/code\u003e value from the initial portion of the list; the\n second argument is the value that has been accumulated into the\n trie from the tail of the list (just like the first argument to\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e). Thus, \u003ccode\u003efromList = fromListWith const\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListWith",
        "fct-type": "function",
        "title": "fromListWith"
      },
      "index": {
        "description": "variant of fromListR that takes function for combining values on conflict The first argument to the combining function is the new value from the initial portion of the list the second argument is the value that has been accumulated into the trie from the tail of the list just like the first argument to foldr Thus fromList fromListWith const",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly. This function is a good consumer for list\n fusion. If you need list fusion and are running into stack\n overflow problems with \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, then this function may\n solve the problem.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListWith%27",
        "fct-type": "function",
        "title": "fromListWith'"
      },
      "index": {
        "description": "variant of fromListWith which applies the combining function strictly This function is good consumer for list fusion If you need list fusion and are running into stack overflow problems with fromListWith then this function may solve the problem",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List With'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWithL",
      "description": {
        "fct-descr": "\u003cp\u003eA left-fold variant of \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e. Note that the arguments\n to the combining function are swapped: the first is the value\n in the trie which has been accumulated from the initial part of\n the list; the second argument is the `\u003ccode\u003enew'\u003c/code\u003e value from the\n remaining tail of the list (just like the first argument to\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e). Thus, \u003ccode\u003efromListL = fromListWithL const\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListWithL",
        "fct-type": "function",
        "title": "fromListWithL"
      },
      "index": {
        "description": "left-fold variant of fromListWith Note that the arguments to the combining function are swapped the first is the value in the trie which has been accumulated from the initial part of the list the second argument is the new value from the remaining tail of the list just like the first argument to foldl Thus fromListL fromListWithL const",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListWithL",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List With",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWithL-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListWithL\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#fromListWithL%27",
        "fct-type": "function",
        "title": "fromListWithL'"
      },
      "index": {
        "description": "variant of fromListWithL which applies the combining function strictly",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "fromListWithL'",
        "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List With L'",
        "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertIfAbsent",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key, retaining old value on conflict.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#insertIfAbsent",
        "fct-type": "function",
        "title": "insertIfAbsent"
      },
      "index": {
        "description": "Insert new key retaining old value on conflict",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "insertIfAbsent",
        "normalized": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "If Absent",
        "signature": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key, with a function to resolve conflicts.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "Insert new key with function to resolve conflicts",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e which applies the combining function\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#insertWith%27",
        "fct-type": "function",
        "title": "insertWith'"
      },
      "index": {
        "description": "variant of insertWith which applies the combining function strictly",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "insertWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e which also provides the key to the\n combining function.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "variant of insertWith which also provides the key to the combining function",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "insertWithKey",
        "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With Key",
        "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWithKey-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#insertWithKey%27",
        "fct-type": "function",
        "title": "insertWithKey'"
      },
      "index": {
        "description": "variant of insertWithKey which applies the combining function strictly",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "insertWithKey'",
        "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With Key'",
        "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:lookupWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a key, returning a default value if it's not found.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "a -\u003e ByteString -\u003e Trie a -\u003e a",
        "fct-source": "src/Data-Trie-Convenience.html#lookupWithDefault",
        "fct-type": "function",
        "title": "lookupWithDefault"
      },
      "index": {
        "description": "Lookup key returning default value if it not found",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "lookupWithDefault",
        "normalized": "a-\u003eByteString-\u003eTrie a-\u003ea",
        "package": "bytestring-trie",
        "partial": "With Default",
        "signature": "a-\u003eByteString-\u003eTrie a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, using a function to resolve conflicts.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Combine two tries using function to resolve conflicts",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:unionWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e which applies the combining function\n strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#unionWith%27",
        "fct-type": "function",
        "title": "unionWith'"
      },
      "index": {
        "description": "variant of unionWith which applies the combining function strictly",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "unionWith'",
        "normalized": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With'",
        "signature": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the value at a key, possibly removing it.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Maybe a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Apply function to the value at key possibly removing it",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e which also provides the key to the function.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Convenience",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Convenience.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "variant of update which also provides the key to the function",
        "hierarchy": "Data Trie Convenience",
        "module": "Data.Trie.Convenience",
        "name": "updateWithKey",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "With Key",
        "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal definition of the \u003ccode\u003e\u003ca\u003eTrie\u003c/a\u003e\u003c/code\u003e data type and generic functions\n for manipulating them. Almost everything here is re-exported\n from \u003ca\u003eData.Trie\u003c/a\u003e, which is the preferred API for users. This\n module is for developers who need deeper (and potentially fragile)\n access to the abstract type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "module",
        "fct-source": "src/Data-Trie-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Internal definition of the Trie data type and generic functions for manipulating them Almost everything here is re-exported from Data.Trie which is the preferred API for users This module is for developers who need deeper and potentially fragile access to the abstract type",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#t:Trie",
      "description": {
        "fct-descr": "\u003cp\u003eA map from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003ea\u003c/code\u003e. For all the generic functions,\n note that tries are strict in the \u003ccode\u003eMaybe\u003c/code\u003e but not in \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance is strange. If a key \u003ccode\u003ek1\u003c/code\u003e is a prefix of\n other keys, then results from binding the value at \u003ccode\u003ek1\u003c/code\u003e will\n override values from longer keys when they collide. If this is\n useful for anything, or if there's a more sensible instance, I'd\n be curious to know.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "data",
        "fct-source": "src/Data-Trie-Internal.html#Trie",
        "fct-type": "data",
        "title": "Trie"
      },
      "index": {
        "description": "map from ByteString to For all the generic functions note that tries are strict in the Maybe but not in The Monad instance is strange If key k1 is prefix of other keys then results from binding the value at k1 will override values from longer keys when they collide If this is useful for anything or if there more sensible instance be curious to know",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "Trie",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:adjustBy",
      "description": {
        "fct-descr": "\u003cp\u003eAlter the value associated with a given key. If the key is not\n present, then the trie is returned unaltered. See \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e if\n you are interested in inserting new keys or deleting old keys.\n Because this function does not need to worry about changing the\n trie structure, it is somewhat faster than \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#adjustBy",
        "fct-type": "function",
        "title": "adjustBy"
      },
      "index": {
        "description": "Alter the value associated with given key If the key is not present then the trie is returned unaltered See alterBy if you are interested in inserting new keys or deleting old keys Because this function does not need to worry about changing the trie structure it is somewhat faster than alterBy",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "adjustBy",
        "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:alterBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function to alter a trie by one element with a function\n to resolve conflicts (or non-conflicts).\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a -\u003e Maybe a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#alterBy",
        "fct-type": "function",
        "title": "alterBy"
      },
      "index": {
        "description": "Generic function to alter trie by one element with function to resolve conflicts or non-conflicts",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "alterBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:alterBy_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e which also allows modifying the sub-trie. \n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a -\u003e Trie a -\u003e (Maybe a, Trie a)) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#alterBy_",
        "fct-type": "function",
        "title": "alterBy_"
      },
      "index": {
        "description": "variant of alterBy which also allows modifying the sub-trie",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "alterBy_",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a-\u003eTrie a-\u003e(Maybe a,Trie a))-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003eMaybe a-\u003eTrie a-\u003e(Maybe a,Trie a))-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:breakMaximalPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the longest shared prefix and the two remaining suffixes\n for a pair of strings.\n\u003c/p\u003e\u003cpre\u003e    s == (\\(pre,s',z') -\u003e pre `append` s') (breakMaximalPrefix s z)\n    z == (\\(pre,s',z') -\u003e pre `append` z') (breakMaximalPrefix s z)\n\u003c/pre\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e ByteString -\u003e (ByteString, ByteString, ByteString)",
        "fct-source": "src/Data-Trie-ByteStringInternal.html#breakMaximalPrefix",
        "fct-type": "function",
        "title": "breakMaximalPrefix"
      },
      "index": {
        "description": "Returns the longest shared prefix and the two remaining suffixes for pair of strings pre pre append breakMaximalPrefix pre pre append breakMaximalPrefix",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "breakMaximalPrefix",
        "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString,ByteString)",
        "package": "bytestring-trie",
        "partial": "Maximal Prefix",
        "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualFilterMap",
      "description": {
        "fct-descr": "\u003cp\u003eA contextual variant of \u003ccode\u003e\u003ca\u003efilterMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Trie a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#contextualFilterMap",
        "fct-type": "function",
        "title": "contextualFilterMap"
      },
      "index": {
        "description": "contextual variant of filterMap",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "contextualFilterMap",
        "normalized": "(a-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Filter Map",
        "signature": "(a-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMap",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e which provides access to the subtrie rooted\n at each value.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Trie a -\u003e b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#contextualMap",
        "fct-type": "function",
        "title": "contextualMap"
      },
      "index": {
        "description": "variant of fmap which provides access to the subtrie rooted at each value",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "contextualMap",
        "normalized": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Map",
        "signature": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMap-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003econtextualMap\u003c/a\u003e\u003c/code\u003e which applies the function strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Trie a -\u003e b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#contextualMap%27",
        "fct-type": "function",
        "title": "contextualMap'"
      },
      "index": {
        "description": "variant of contextualMap which applies the function strictly",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "contextualMap'",
        "normalized": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Map'",
        "signature": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMapBy",
      "description": {
        "fct-descr": "\u003cp\u003eA contextual variant of \u003ccode\u003e\u003ca\u003emapBy\u003c/a\u003e\u003c/code\u003e. Again note that this is\n expensive since we must reconstruct the keys.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Trie a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#contextualMapBy",
        "fct-type": "function",
        "title": "contextualMapBy"
      },
      "index": {
        "description": "contextual variant of mapBy Again note that this is expensive since we must reconstruct the keys",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "contextualMapBy",
        "normalized": "(ByteString-\u003ea-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Map By",
        "signature": "(ByteString-\u003ea-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct the empty trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a",
        "fct-source": "src/Data-Trie-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct the empty trie",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "empty",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:filterMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all values, potentially removing them.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#filterMap",
        "fct-type": "function",
        "title": "filterMap"
      },
      "index": {
        "description": "Apply function to all values potentially removing them",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "filterMap",
        "normalized": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Map",
        "signature": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:foldrWithKey",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a trie into a list (in key-sorted order) using a\n function, folding the list as we go.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Trie a -\u003e b",
        "fct-source": "src/Data-Trie-Internal.html#foldrWithKey",
        "fct-type": "function",
        "title": "foldrWithKey"
      },
      "index": {
        "description": "Convert trie into list in key-sorted order using function folding the list as we go",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "foldrWithKey",
        "normalized": "(ByteString-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrie a-\u003eb",
        "package": "bytestring-trie",
        "partial": "With Key",
        "signature": "(ByteString-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrie a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:lookupBy_",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function to find a value (if it exists) and the subtrie\n rooted at the prefix. The first function argument is called if and\n only if a node is exactly reachable by the query; if no node is\n exactly reachable the default value is used; if the middle of\n an arc is reached, the second function argument is used.\n\u003c/p\u003e\u003cp\u003eThis function is intended for internal use. For the public-facing\n version, see \u003ccode\u003elookupBy\u003c/code\u003e in \u003ca\u003eData.Trie\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(Maybe a -\u003e Trie a -\u003e b) -\u003e b -\u003e (Trie a -\u003e b) -\u003e ByteString -\u003e Trie a -\u003e b",
        "fct-source": "src/Data-Trie-Internal.html#lookupBy_",
        "fct-type": "function",
        "title": "lookupBy_"
      },
      "index": {
        "description": "Generic function to find value if it exists and the subtrie rooted at the prefix The first function argument is called if and only if node is exactly reachable by the query if no node is exactly reachable the default value is used if the middle of an arc is reached the second function argument is used This function is intended for internal use For the public-facing version see lookupBy in Data.Trie",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "lookupBy_",
        "normalized": "(Maybe a-\u003eTrie a-\u003eb)-\u003eb-\u003e(Trie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(Maybe a-\u003eTrie a-\u003eb)-\u003eb-\u003e(Trie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mapBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e. This function is notably more\n expensive than \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efilterMap\u003c/a\u003e\u003c/code\u003e because we have to reconstruct\n the keys.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#mapBy",
        "fct-type": "function",
        "title": "mapBy"
      },
      "index": {
        "description": "Generic version of fmap This function is notably more expensive than fmap or filterMap because we have to reconstruct the keys",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "mapBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:maxAssoc",
      "description": {
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Maybe (ByteString, a)",
        "fct-source": "src/Data-Trie-Internal.html#maxAssoc",
        "fct-type": "function",
        "title": "maxAssoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "maxAssoc",
        "normalized": "Trie a-\u003eMaybe(ByteString,a)",
        "package": "bytestring-trie",
        "partial": "Assoc",
        "signature": "Trie a-\u003eMaybe(ByteString,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, using a function to resolve collisions.\n This can only define the space of functions between union and\n symmetric difference but, with those two, all set operations can\n be defined (albeit inefficiently).\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "Combine two tries using function to resolve collisions This can only define the space of functions between union and symmetric difference but with those two all set operations can be defined albeit inefficiently",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:minAssoc",
      "description": {
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Maybe (ByteString, a)",
        "fct-source": "src/Data-Trie-Internal.html#minAssoc",
        "fct-type": "function",
        "title": "minAssoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "minAssoc",
        "normalized": "Trie a-\u003eMaybe(ByteString,a)",
        "package": "bytestring-trie",
        "partial": "Assoc",
        "signature": "Trie a-\u003eMaybe(ByteString,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Is the trie empty?\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Bool",
        "fct-source": "src/Data-Trie-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the trie empty",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "null",
        "normalized": "Trie a-\u003eBool",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:showTrie",
      "description": {
        "fct-descr": "\u003cp\u003eVisualization fuction for debugging.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e String",
        "fct-source": "src/Data-Trie-Internal.html#showTrie",
        "fct-type": "function",
        "title": "showTrie"
      },
      "index": {
        "description": "Visualization fuction for debugging",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "showTrie",
        "normalized": "Trie a-\u003eString",
        "package": "bytestring-trie",
        "partial": "Trie",
        "signature": "Trie a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct a singleton trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct singleton trie",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "singleton",
        "normalized": "ByteString-\u003ea-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, Get count of elements in trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Int",
        "fct-source": "src/Data-Trie-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get count of elements in trie",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "size",
        "normalized": "Trie a-\u003eInt",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:submap",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the subtrie containing all keys beginning with a prefix.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#submap",
        "fct-type": "function",
        "title": "submap"
      },
      "index": {
        "description": "Return the subtrie containing all keys beginning with prefix",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "submap",
        "normalized": "ByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:toListBy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a trie into a list using a function. Resulting values\n are in key-sorted order.\n\u003c/p\u003e",
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e b) -\u003e Trie a -\u003e [b]",
        "fct-source": "src/Data-Trie-Internal.html#toListBy",
        "fct-type": "function",
        "title": "toListBy"
      },
      "index": {
        "description": "Convert trie into list using function Resulting values are in key-sorted order",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "toListBy",
        "normalized": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]",
        "package": "bytestring-trie",
        "partial": "List By",
        "signature": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:updateMaxViewBy",
      "description": {
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Maybe (ByteString, a, Trie a)",
        "fct-source": "src/Data-Trie-Internal.html#updateMaxViewBy",
        "fct-type": "function",
        "title": "updateMaxViewBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "updateMaxViewBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
        "package": "bytestring-trie",
        "partial": "Max View By",
        "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:updateMinViewBy",
      "description": {
        "fct-module": "Data.Trie.Internal",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Maybe (ByteString, a, Trie a)",
        "fct-source": "src/Data-Trie-Internal.html#updateMinViewBy",
        "fct-type": "function",
        "title": "updateMinViewBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Trie Internal",
        "module": "Data.Trie.Internal",
        "name": "updateMinViewBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
        "package": "bytestring-trie",
        "partial": "Min View By",
        "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of finite maps from strings to values.\n The implementation is based on \u003cem\u003ebig-endian patricia trees\u003c/em\u003e, like\n \u003ca\u003eData.IntMap\u003c/a\u003e. We first trie on the elements of \u003ca\u003eData.ByteString\u003c/a\u003e\n and then trie on the big-endian bit representation of those\n elements. For further details on the latter, see\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki and Andy Gill,  \"\u003cem\u003eFast Mergeable Integer Maps\u003c/em\u003e\",\n    Workshop on ML, September 1998, pages 77-86,\n    \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.37.5452\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e D.R. Morrison, \"\u003cem\u003ePATRICIA -- Practical Algorithm To Retrieve\u003c/em\u003e\n    \u003cem\u003eInformation Coded In Alphanumeric\u003c/em\u003e\", Journal of the ACM, 15(4),\n    October 1968, pages 514-534.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module aims to provide an austere interface, while being\n detailed enough for most users. For an extended interface with\n many additional functions, see \u003ca\u003eData.Trie.Convenience\u003c/a\u003e. For\n functions that give more detailed (potentially abstraction-breaking)\n access to the data strucuture, or for experimental functions\n which aren't quite ready for the public API, see \u003ca\u003eData.Trie.Internal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "module",
        "fct-source": "src/Data-Trie.html",
        "fct-type": "module",
        "title": "Trie"
      },
      "index": {
        "description": "An efficient implementation of finite maps from strings to values The implementation is based on big-endian patricia trees like Data.IntMap We first trie on the elements of Data.ByteString and then trie on the big-endian bit representation of those elements For further details on the latter see Chris Okasaki and Andy Gill Fast Mergeable Integer Maps Workshop on ML September pages http citeseerx.ist.psu.edu viewdoc summary doi D.R Morrison PATRICIA Practical Algorithm To Retrieve Information Coded In Alphanumeric Journal of the ACM October pages This module aims to provide an austere interface while being detailed enough for most users For an extended interface with many additional functions see Data.Trie.Convenience For functions that give more detailed potentially abstraction-breaking access to the data strucuture or for experimental functions which aren quite ready for the public API see Data.Trie.Internal",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "Trie",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#t:Trie",
      "description": {
        "fct-descr": "\u003cp\u003eA map from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003ea\u003c/code\u003e. For all the generic functions,\n note that tries are strict in the \u003ccode\u003eMaybe\u003c/code\u003e but not in \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance is strange. If a key \u003ccode\u003ek1\u003c/code\u003e is a prefix of\n other keys, then results from binding the value at \u003ccode\u003ek1\u003c/code\u003e will\n override values from longer keys when they collide. If this is\n useful for anything, or if there's a more sensible instance, I'd\n be curious to know.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "data",
        "fct-source": "src/Data-Trie-Internal.html#Trie",
        "fct-type": "data",
        "title": "Trie"
      },
      "index": {
        "description": "map from ByteString to For all the generic functions note that tries are strict in the Maybe but not in The Monad instance is strange If key k1 is prefix of other keys then results from binding the value at k1 will override values from longer keys when they collide If this is useful for anything or if there more sensible instance be curious to know",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "Trie",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "Trie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the value at a key.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "Apply function to the value at key",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:alterBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function to alter a trie by one element with a function\n to resolve conflicts (or non-conflicts).\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe a -\u003e Maybe a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#alterBy",
        "fct-type": "function",
        "title": "alterBy"
      },
      "index": {
        "description": "Generic function to alter trie by one element with function to resolve conflicts or non-conflicts",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "alterBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the value stored at a key.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Remove the value stored at key",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "delete",
        "normalized": "ByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all values in the trie, in sorted order according to the keys.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e [a]",
        "fct-source": "src/Data-Trie.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Return all values in the trie in sorted order according to the keys",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "elems",
        "normalized": "Trie a-\u003e[a]",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct the empty trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a",
        "fct-source": "src/Data-Trie-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Construct the empty trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "empty",
        "normalized": "",
        "package": "bytestring-trie",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:filterMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to all values, potentially removing them.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#filterMap",
        "fct-type": "function",
        "title": "filterMap"
      },
      "index": {
        "description": "Apply function to all values potentially removing them",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "filterMap",
        "normalized": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "Map",
        "signature": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert association list into a trie. On key conflict, values\n earlier in the list shadow later ones.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "[(ByteString, a)] -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert association list into trie On key conflict values earlier in the list shadow later ones",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "fromList",
        "normalized": "[(ByteString,a)]-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "List",
        "signature": "[(ByteString,a)]-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a new key. If the key is already present, overrides the\n old value\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert new key If the key is already present overrides the old value",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "insert",
        "normalized": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all keys in the trie, in sorted order.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e [ByteString]",
        "fct-source": "src/Data-Trie.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Return all keys in the trie in sorted order",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "keys",
        "normalized": "Trie a-\u003e[ByteString]",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003e[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the value associated with a query string if it exists.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e Trie a -\u003e Maybe a",
        "fct-source": "src/Data-Trie.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Return the value associated with query string if it exists",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "lookup",
        "normalized": "ByteString-\u003eTrie a-\u003eMaybe a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003eTrie a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:lookupBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric function to find a value (if it exists) and the subtrie\n rooted at the prefix.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(Maybe a -\u003e Trie a -\u003e b) -\u003e ByteString -\u003e Trie a -\u003e b",
        "fct-source": "src/Data-Trie.html#lookupBy",
        "fct-type": "function",
        "title": "lookupBy"
      },
      "index": {
        "description": "Generic function to find value if it exists and the subtrie rooted at the prefix",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "lookupBy",
        "normalized": "(Maybe a-\u003eTrie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(Maybe a-\u003eTrie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:mapBy",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e. This function is notably more\n expensive than \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efilterMap\u003c/a\u003e\u003c/code\u003e because we have to reconstruct\n the keys.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
        "fct-source": "src/Data-Trie-Internal.html#mapBy",
        "fct-type": "function",
        "title": "mapBy"
      },
      "index": {
        "description": "Generic version of fmap This function is notably more expensive than fmap or filterMap because we have to reconstruct the keys",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "mapBy",
        "normalized": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003eDoes a string have a value in the trie?\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e Trie a -\u003e Bool",
        "fct-source": "src/Data-Trie.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Does string have value in the trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "member",
        "normalized": "ByteString-\u003eTrie a-\u003eBool",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003eTrie a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:mergeBy",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, using a function to resolve collisions.\n This can only define the space of functions between union and\n symmetric difference but, with those two, all set operations can\n be defined (albeit inefficiently).\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(a -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#mergeBy",
        "fct-type": "function",
        "title": "mergeBy"
      },
      "index": {
        "description": "Combine two tries using function to resolve collisions This can only define the space of functions between union and symmetric difference but with those two all set operations can be defined albeit inefficiently",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "mergeBy",
        "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Is the trie empty?\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Bool",
        "fct-source": "src/Data-Trie-Internal.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the trie empty",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "null",
        "normalized": "Trie a-\u003eBool",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct a singleton trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Construct singleton trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "singleton",
        "normalized": "ByteString-\u003ea-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003ea-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, Get count of elements in trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Int",
        "fct-source": "src/Data-Trie-Internal.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "Get count of elements in trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "size",
        "normalized": "Trie a-\u003eInt",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:submap",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the subtrie containing all keys beginning with a prefix.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "ByteString -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie-Internal.html#submap",
        "fct-type": "function",
        "title": "submap"
      },
      "index": {
        "description": "Return the subtrie containing all keys beginning with prefix",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "submap",
        "normalized": "ByteString-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "ByteString-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert trie into association list. Keys will be in sorted order.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e [(ByteString, a)]",
        "fct-source": "src/Data-Trie.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert trie into association list Keys will be in sorted order",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "toList",
        "normalized": "Trie a-\u003e[(ByteString,a)]",
        "package": "bytestring-trie",
        "partial": "List",
        "signature": "Trie a-\u003e[(ByteString,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:toListBy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a trie into a list using a function. Resulting values\n are in key-sorted order.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "(ByteString -\u003e a -\u003e b) -\u003e Trie a -\u003e [b]",
        "fct-source": "src/Data-Trie-Internal.html#toListBy",
        "fct-type": "function",
        "title": "toListBy"
      },
      "index": {
        "description": "Convert trie into list using function Resulting values are in key-sorted order",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "toListBy",
        "normalized": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]",
        "package": "bytestring-trie",
        "partial": "List By",
        "signature": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:unionL",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, resolving conflicts by choosing the value\n from the left trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#unionL",
        "fct-type": "function",
        "title": "unionL"
      },
      "index": {
        "description": "Combine two tries resolving conflicts by choosing the value from the left trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "unionL",
        "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eTrie a-\u003eTrie a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:unionR",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two tries, resolving conflicts by choosing the value\n from the right trie.\n\u003c/p\u003e",
        "fct-module": "Data.Trie",
        "fct-package": "bytestring-trie",
        "fct-signature": "Trie a -\u003e Trie a -\u003e Trie a",
        "fct-source": "src/Data-Trie.html#unionR",
        "fct-type": "function",
        "title": "unionR"
      },
      "index": {
        "description": "Combine two tries resolving conflicts by choosing the value from the right trie",
        "hierarchy": "Data Trie",
        "module": "Data.Trie",
        "name": "unionR",
        "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
        "package": "bytestring-trie",
        "partial": "",
        "signature": "Trie a-\u003eTrie a-\u003eTrie a"
      }
    }
  }
]