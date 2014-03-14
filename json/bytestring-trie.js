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
        "word": "bytestring-trie"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdditional convenience functions. In order to keep \u003ca\u003eData.Trie\u003c/a\u003e\n concise, non-essential and uncommonly used functions have been\n moved here. Most of these functions simplify the generic functions\n from \u003ca\u003eData.Trie\u003c/a\u003e, following after the interface for \u003ca\u003eData.Map\u003c/a\u003e\n and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Trie.Convenience",
          "name": "Convenience",
          "package": "bytestring-trie",
          "source": "src/Data-Trie-Convenience.html",
          "type": "module"
        },
        "index": {
          "description": "Additional convenience functions In order to keep Data.Trie concise non-essential and uncommonly used functions have been moved here Most of these functions simplify the generic functions from Data.Trie following after the interface for Data.Map and Data.IntMap",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "Convenience",
          "package": "bytestring-trie",
          "partial": "Convenience",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to change the value at a key.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "adjustWithKey",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "description": "Apply function to change the value at key",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "adjustWithKey",
          "normalized": "(ByteString-\u003ea-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With Key",
          "signature": "(ByteString-\u003ea-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two tries, a la symmetric difference. If they define\n the same key, it is removed; otherwise it is retained with the\n value it has in whichever trie.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "disunion",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#disunion",
          "type": "function"
        },
        "index": {
          "description": "Combine two tries la symmetric difference If they define the same key it is removed otherwise it is retained with the value it has in whichever trie",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "disunion",
          "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:disunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-fold version of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e. If you run into issues with\n stack overflows when using \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e, then you\n should use this function instead.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListL",
          "package": "bytestring-trie",
          "signature": "[(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListL",
          "type": "function"
        },
        "index": {
          "description": "left-fold version of fromList If you run into issues with stack overflows when using fromList or fromListR then you should use this function instead",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListL",
          "normalized": "[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List",
          "signature": "[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn explicitly right-fold variant of \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e. It is a good\n consumer for list fusion. Worst-case behavior is somewhat worse\n than worst-case for \u003ccode\u003e\u003ca\u003efromListL\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e function is\n currently just an alias for \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListR",
          "package": "bytestring-trie",
          "signature": "[(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListR",
          "type": "function"
        },
        "index": {
          "description": "An explicitly right-fold variant of fromList It is good consumer for list fusion Worst-case behavior is somewhat worse than worst-case for fromListL The fromList function is currently just an alias for fromListR",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListR",
          "normalized": "[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List",
          "signature": "[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant sorts the list before folding over it. This adds\n \u003cem\u003eO(n log n)\u003c/em\u003e overhead and requires the whole list be in memory\n at once, but it ensures that the list is in best-case order. The\n benefits generally outweigh the costs.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListS",
          "package": "bytestring-trie",
          "signature": "[(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListS",
          "type": "function"
        },
        "index": {
          "description": "This variant sorts the list before folding over it This adds log overhead and requires the whole list be in memory at once but it ensures that the list is in best-case order The benefits generally outweigh the costs",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListS",
          "normalized": "[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List",
          "signature": "[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListR\u003c/a\u003e\u003c/code\u003e that takes a function for combining\n values on conflict. The first argument to the combining function\n is the `\u003ccode\u003enew'\u003c/code\u003e value from the initial portion of the list; the\n second argument is the value that has been accumulated into the\n trie from the tail of the list (just like the first argument to\n \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e). Thus, \u003ccode\u003efromList = fromListWith const\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListWith",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "variant of fromListR that takes function for combining values on conflict The first argument to the combining function is the new value from the initial portion of the list the second argument is the value that has been accumulated into the trie from the tail of the list just like the first argument to foldr Thus fromList fromListWith const",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly. This function is a good consumer for list\n fusion. If you need list fusion and are running into stack\n overflow problems with \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e, then this function may\n solve the problem.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListWith'",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListWith%27",
          "type": "function"
        },
        "index": {
          "description": "variant of fromListWith which applies the combining function strictly This function is good consumer for list fusion If you need list fusion and are running into stack overflow problems with fromListWith then this function may solve the problem",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List With'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA left-fold variant of \u003ccode\u003e\u003ca\u003efromListWith\u003c/a\u003e\u003c/code\u003e. Note that the arguments\n to the combining function are swapped: the first is the value\n in the trie which has been accumulated from the initial part of\n the list; the second argument is the `\u003ccode\u003enew'\u003c/code\u003e value from the\n remaining tail of the list (just like the first argument to\n \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e). Thus, \u003ccode\u003efromListL = fromListWithL const\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListWithL",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListWithL",
          "type": "function"
        },
        "index": {
          "description": "left-fold variant of fromListWith Note that the arguments to the combining function are swapped the first is the value in the trie which has been accumulated from the initial part of the list the second argument is the new value from the remaining tail of the list just like the first argument to foldl Thus fromListL fromListWithL const",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListWithL",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWithL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efromListWithL\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "fromListWithL'",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#fromListWithL%27",
          "type": "function"
        },
        "index": {
          "description": "variant of fromListWithL which applies the combining function strictly",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "fromListWithL'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List With L'",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:fromListWithL-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new key, retaining old value on conflict.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "insertIfAbsent",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#insertIfAbsent",
          "type": "function"
        },
        "index": {
          "description": "Insert new key retaining old value on conflict",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "insertIfAbsent",
          "normalized": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "If Absent",
          "signature": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertIfAbsent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new key, with a function to resolve conflicts.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "insertWith",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Insert new key with function to resolve conflicts",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e which applies the combining function\n strictly.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "insertWith'",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "variant of insertWith which applies the combining function strictly",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e which also provides the key to the\n combining function.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "insertWithKey",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "variant of insertWith which also provides the key to the combining function",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "insertWithKey",
          "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With Key",
          "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003einsertWithKey\u003c/a\u003e\u003c/code\u003e which applies the combining\n function strictly.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "insertWithKey'",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#insertWithKey%27",
          "type": "function"
        },
        "index": {
          "description": "variant of insertWithKey which applies the combining function strictly",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "insertWithKey'",
          "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With Key'",
          "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:insertWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a key, returning a default value if it's not found.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "lookupWithDefault",
          "package": "bytestring-trie",
          "signature": "a -\u003e ByteString -\u003e Trie a -\u003e a",
          "source": "src/Data-Trie-Convenience.html#lookupWithDefault",
          "type": "function"
        },
        "index": {
          "description": "Lookup key returning default value if it not found",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "lookupWithDefault",
          "normalized": "a-\u003eByteString-\u003eTrie a-\u003ea",
          "package": "bytestring-trie",
          "partial": "With Default",
          "signature": "a-\u003eByteString-\u003eTrie a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:lookupWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two tries, using a function to resolve conflicts.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "unionWith",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#unionWith",
          "type": "function"
        },
        "index": {
          "description": "Combine two tries using function to resolve conflicts",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e which applies the combining function\n strictly.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "unionWith'",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#unionWith%27",
          "type": "function"
        },
        "index": {
          "description": "variant of unionWith which applies the combining function strictly",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "unionWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:unionWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the value at a key, possibly removing it.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "update",
          "package": "bytestring-trie",
          "signature": "(a -\u003e Maybe a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#update",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the value at key possibly removing it",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "(a-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e which also provides the key to the function.\n\u003c/p\u003e",
          "module": "Data.Trie.Convenience",
          "name": "updateWithKey",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Convenience.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "description": "variant of update which also provides the key to the function",
          "hierarchy": "Data Trie Convenience",
          "module": "Data.Trie.Convenience",
          "name": "updateWithKey",
          "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "With Key",
          "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Convenience.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal definition of the \u003ccode\u003e\u003ca\u003eTrie\u003c/a\u003e\u003c/code\u003e data type and generic functions\n for manipulating them. Almost everything here is re-exported\n from \u003ca\u003eData.Trie\u003c/a\u003e, which is the preferred API for users. This\n module is for developers who need deeper (and potentially fragile)\n access to the abstract type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Trie.Internal",
          "name": "Internal",
          "package": "bytestring-trie",
          "source": "src/Data-Trie-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Internal definition of the Trie data type and generic functions for manipulating them Almost everything here is re-exported from Data.Trie which is the preferred API for users This module is for developers who need deeper and potentially fragile access to the abstract type",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "Internal",
          "package": "bytestring-trie",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003ea\u003c/code\u003e. For all the generic functions,\n note that tries are strict in the \u003ccode\u003eMaybe\u003c/code\u003e but not in \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance is strange. If a key \u003ccode\u003ek1\u003c/code\u003e is a prefix of\n other keys, then results from binding the value at \u003ccode\u003ek1\u003c/code\u003e will\n override values from longer keys when they collide. If this is\n useful for anything, or if there's a more sensible instance, I'd\n be curious to know.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "Trie",
          "package": "bytestring-trie",
          "source": "src/Data-Trie-Internal.html#Trie",
          "type": "data"
        },
        "index": {
          "description": "map from ByteString to For all the generic functions note that tries are strict in the Maybe but not in The Monad instance is strange If key k1 is prefix of other keys then results from binding the value at k1 will override values from longer keys when they collide If this is useful for anything or if there more sensible instance be curious to know",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "Trie",
          "package": "bytestring-trie",
          "partial": "Trie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#t:Trie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlter the value associated with a given key. If the key is not\n present, then the trie is returned unaltered. See \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e if\n you are interested in inserting new keys or deleting old keys.\n Because this function does not need to worry about changing the\n trie structure, it is somewhat faster than \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "adjustBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e a -\u003e a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#adjustBy",
          "type": "function"
        },
        "index": {
          "description": "Alter the value associated with given key If the key is not present then the trie is returned unaltered See alterBy if you are interested in inserting new keys or deleting old keys Because this function does not need to worry about changing the trie structure it is somewhat faster than alterBy",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "adjustBy",
          "normalized": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(ByteString-\u003ea-\u003ea-\u003ea)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:adjustBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric function to alter a trie by one element with a function\n to resolve conflicts (or non-conflicts).\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "alterBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe a -\u003e Maybe a) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#alterBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:alterBy\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:alterBy\"]"
        },
        "index": {
          "description": "Generic function to alter trie by one element with function to resolve conflicts or non-conflicts",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "alterBy",
          "normalized": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(ByteString-\u003ea-\u003eMaybe a-\u003eMaybe a)-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:alterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ealterBy\u003c/a\u003e\u003c/code\u003e which also allows modifying the sub-trie. \n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "alterBy_",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe a -\u003e Trie a -\u003e (Maybe a, Trie a)) -\u003e ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#alterBy_",
          "type": "function"
        },
        "index": {
          "description": "variant of alterBy which also allows modifying the sub-trie",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "alterBy_",
          "normalized": "(ByteString-\u003ea-\u003eMaybe a-\u003eTrie a-\u003e(Maybe a,Trie a))-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(ByteString-\u003ea-\u003eMaybe a-\u003eTrie a-\u003e(Maybe a,Trie a))-\u003eByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:alterBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the longest shared prefix and the two remaining suffixes\n for a pair of strings.\n\u003c/p\u003e\u003cpre\u003e    s == (\\(pre,s',z') -\u003e pre `append` s') (breakMaximalPrefix s z)\n    z == (\\(pre,s',z') -\u003e pre `append` z') (breakMaximalPrefix s z)\n\u003c/pre\u003e",
          "module": "Data.Trie.Internal",
          "name": "breakMaximalPrefix",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e ByteString -\u003e (ByteString, ByteString, ByteString)",
          "source": "src/Data-Trie-ByteStringInternal.html#breakMaximalPrefix",
          "type": "function"
        },
        "index": {
          "description": "Returns the longest shared prefix and the two remaining suffixes for pair of strings pre pre append breakMaximalPrefix pre pre append breakMaximalPrefix",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "breakMaximalPrefix",
          "normalized": "ByteString-\u003eByteString-\u003e(ByteString,ByteString,ByteString)",
          "package": "bytestring-trie",
          "partial": "Maximal Prefix",
          "signature": "ByteString-\u003eByteString-\u003e(ByteString,ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:breakMaximalPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA contextual variant of \u003ccode\u003e\u003ca\u003efilterMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "contextualFilterMap",
          "package": "bytestring-trie",
          "signature": "(a -\u003e Trie a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#contextualFilterMap",
          "type": "function"
        },
        "index": {
          "description": "contextual variant of filterMap",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "contextualFilterMap",
          "normalized": "(a-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "Filter Map",
          "signature": "(a-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualFilterMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e which provides access to the subtrie rooted\n at each value.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "contextualMap",
          "package": "bytestring-trie",
          "signature": "(a -\u003e Trie a -\u003e b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#contextualMap",
          "type": "function"
        },
        "index": {
          "description": "variant of fmap which provides access to the subtrie rooted at each value",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "contextualMap",
          "normalized": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "Map",
          "signature": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003econtextualMap\u003c/a\u003e\u003c/code\u003e which applies the function strictly.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "contextualMap'",
          "package": "bytestring-trie",
          "signature": "(a -\u003e Trie a -\u003e b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#contextualMap%27",
          "type": "function"
        },
        "index": {
          "description": "variant of contextualMap which applies the function strictly",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "contextualMap'",
          "normalized": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "Map'",
          "signature": "(a-\u003eTrie a-\u003eb)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMap-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA contextual variant of \u003ccode\u003e\u003ca\u003emapBy\u003c/a\u003e\u003c/code\u003e. Again note that this is\n expensive since we must reconstruct the keys.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "contextualMapBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Trie a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#contextualMapBy",
          "type": "function"
        },
        "index": {
          "description": "contextual variant of mapBy Again note that this is expensive since we must reconstruct the keys",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "contextualMapBy",
          "normalized": "(ByteString-\u003ea-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "Map By",
          "signature": "(ByteString-\u003ea-\u003eTrie a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:contextualMapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct the empty trie.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "empty",
          "package": "bytestring-trie",
          "signature": "Trie a",
          "source": "src/Data-Trie-Internal.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:empty\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:empty\"]"
        },
        "index": {
          "description": "Construct the empty trie",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "empty",
          "package": "bytestring-trie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to all values, potentially removing them.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "filterMap",
          "package": "bytestring-trie",
          "signature": "(a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#filterMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:filterMap\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:filterMap\"]"
        },
        "index": {
          "description": "Apply function to all values potentially removing them",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "filterMap",
          "normalized": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "Map",
          "signature": "(a-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:filterMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a trie into a list (in key-sorted order) using a\n function, folding the list as we go.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "foldrWithKey",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e Trie a -\u003e b",
          "source": "src/Data-Trie-Internal.html#foldrWithKey",
          "type": "function"
        },
        "index": {
          "description": "Convert trie into list in key-sorted order using function folding the list as we go",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "foldrWithKey",
          "normalized": "(ByteString-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrie a-\u003eb",
          "package": "bytestring-trie",
          "partial": "With Key",
          "signature": "(ByteString-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eTrie a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric function to find a value (if it exists) and the subtrie\n rooted at the prefix. The first function argument is called if and\n only if a node is exactly reachable by the query; if no node is\n exactly reachable the default value is used; if the middle of\n an arc is reached, the second function argument is used.\n\u003c/p\u003e\u003cp\u003eThis function is intended for internal use. For the public-facing\n version, see \u003ccode\u003elookupBy\u003c/code\u003e in \u003ca\u003eData.Trie\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "lookupBy_",
          "package": "bytestring-trie",
          "signature": "(Maybe a -\u003e Trie a -\u003e b) -\u003e b -\u003e (Trie a -\u003e b) -\u003e ByteString -\u003e Trie a -\u003e b",
          "source": "src/Data-Trie-Internal.html#lookupBy_",
          "type": "function"
        },
        "index": {
          "description": "Generic function to find value if it exists and the subtrie rooted at the prefix The first function argument is called if and only if node is exactly reachable by the query if no node is exactly reachable the default value is used if the middle of an arc is reached the second function argument is used This function is intended for internal use For the public-facing version see lookupBy in Data.Trie",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "lookupBy_",
          "normalized": "(Maybe a-\u003eTrie a-\u003eb)-\u003eb-\u003e(Trie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(Maybe a-\u003eTrie a-\u003eb)-\u003eb-\u003e(Trie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:lookupBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric version of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e. This function is notably more\n expensive than \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efilterMap\u003c/a\u003e\u003c/code\u003e because we have to reconstruct\n the keys.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "mapBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe b) -\u003e Trie a -\u003e Trie b",
          "source": "src/Data-Trie-Internal.html#mapBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mapBy\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:mapBy\"]"
        },
        "index": {
          "description": "Generic version of fmap This function is notably more expensive than fmap or filterMap because we have to reconstruct the keys",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "mapBy",
          "normalized": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(ByteString-\u003ea-\u003eMaybe b)-\u003eTrie a-\u003eTrie b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mapBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Trie.Internal",
          "name": "maxAssoc",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Maybe (ByteString, a)",
          "source": "src/Data-Trie-Internal.html#maxAssoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "maxAssoc",
          "normalized": "Trie a-\u003eMaybe(ByteString,a)",
          "package": "bytestring-trie",
          "partial": "Assoc",
          "signature": "Trie a-\u003eMaybe(ByteString,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:maxAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two tries, using a function to resolve collisions.\n This can only define the space of functions between union and\n symmetric difference but, with those two, all set operations can\n be defined (albeit inefficiently).\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "mergeBy",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#mergeBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mergeBy\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:mergeBy\"]"
        },
        "index": {
          "description": "Combine two tries using function to resolve collisions This can only define the space of functions between union and symmetric difference but with those two all set operations can be defined albeit inefficiently",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Trie.Internal",
          "name": "minAssoc",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Maybe (ByteString, a)",
          "source": "src/Data-Trie-Internal.html#minAssoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "minAssoc",
          "normalized": "Trie a-\u003eMaybe(ByteString,a)",
          "package": "bytestring-trie",
          "partial": "Assoc",
          "signature": "Trie a-\u003eMaybe(ByteString,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:minAssoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Is the trie empty?\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "null",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Bool",
          "source": "src/Data-Trie-Internal.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:null\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:null\"]"
        },
        "index": {
          "description": "Is the trie empty",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "null",
          "normalized": "Trie a-\u003eBool",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisualization fuction for debugging.\n\u003c/p\u003e",
          "module": "Data.Trie.Internal",
          "name": "showTrie",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e String",
          "source": "src/Data-Trie-Internal.html#showTrie",
          "type": "function"
        },
        "index": {
          "description": "Visualization fuction for debugging",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "showTrie",
          "normalized": "Trie a-\u003eString",
          "package": "bytestring-trie",
          "partial": "Trie",
          "signature": "Trie a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:showTrie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, Construct a singleton trie.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "singleton",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#singleton",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:singleton\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:singleton\"]"
        },
        "index": {
          "description": "Construct singleton trie",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "singleton",
          "normalized": "ByteString-\u003ea-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003ea-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, Get count of elements in trie.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "size",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Int",
          "source": "src/Data-Trie-Internal.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:size\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:size\"]"
        },
        "index": {
          "description": "Get count of elements in trie",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "size",
          "normalized": "Trie a-\u003eInt",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the subtrie containing all keys beginning with a prefix.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "submap",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie-Internal.html#submap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:submap\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:submap\"]"
        },
        "index": {
          "description": "Return the subtrie containing all keys beginning with prefix",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "submap",
          "normalized": "ByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:submap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a trie into a list using a function. Resulting values\n are in key-sorted order.\n\u003c/p\u003e",
          "module": "[\"Data.Trie.Internal\",\"Data.Trie\"]",
          "name": "toListBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e b) -\u003e Trie a -\u003e [b]",
          "source": "src/Data-Trie-Internal.html#toListBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:toListBy\",\"http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:toListBy\"]"
        },
        "index": {
          "description": "Convert trie into list using function Resulting values are in key-sorted order",
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "toListBy",
          "normalized": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]",
          "package": "bytestring-trie",
          "partial": "List By",
          "signature": "(ByteString-\u003ea-\u003eb)-\u003eTrie a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:toListBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Trie.Internal",
          "name": "updateMaxViewBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Maybe (ByteString, a, Trie a)",
          "source": "src/Data-Trie-Internal.html#updateMaxViewBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "updateMaxViewBy",
          "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
          "package": "bytestring-trie",
          "partial": "Max View By",
          "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:updateMaxViewBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Trie.Internal",
          "name": "updateMinViewBy",
          "package": "bytestring-trie",
          "signature": "(ByteString -\u003e a -\u003e Maybe a) -\u003e Trie a -\u003e Maybe (ByteString, a, Trie a)",
          "source": "src/Data-Trie-Internal.html#updateMinViewBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Trie Internal",
          "module": "Data.Trie.Internal",
          "name": "updateMinViewBy",
          "normalized": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
          "package": "bytestring-trie",
          "partial": "Min View By",
          "signature": "(ByteString-\u003ea-\u003eMaybe a)-\u003eTrie a-\u003eMaybe(ByteString,a,Trie a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie-Internal.html#v:updateMinViewBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of finite maps from strings to values.\n The implementation is based on \u003cem\u003ebig-endian patricia trees\u003c/em\u003e, like\n \u003ca\u003eData.IntMap\u003c/a\u003e. We first trie on the elements of \u003ca\u003eData.ByteString\u003c/a\u003e\n and then trie on the big-endian bit representation of those\n elements. For further details on the latter, see\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Chris Okasaki and Andy Gill,  \"\u003cem\u003eFast Mergeable Integer Maps\u003c/em\u003e\",\n    Workshop on ML, September 1998, pages 77-86,\n    \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.37.5452\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e D.R. Morrison, \"\u003cem\u003ePATRICIA -- Practical Algorithm To Retrieve\u003c/em\u003e\n    \u003cem\u003eInformation Coded In Alphanumeric\u003c/em\u003e\", Journal of the ACM, 15(4),\n    October 1968, pages 514-534.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module aims to provide an austere interface, while being\n detailed enough for most users. For an extended interface with\n many additional functions, see \u003ca\u003eData.Trie.Convenience\u003c/a\u003e. For\n functions that give more detailed (potentially abstraction-breaking)\n access to the data strucuture, or for experimental functions\n which aren't quite ready for the public API, see \u003ca\u003eData.Trie.Internal\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Trie",
          "name": "Trie",
          "package": "bytestring-trie",
          "source": "src/Data-Trie.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of finite maps from strings to values The implementation is based on big-endian patricia trees like Data.IntMap We first trie on the elements of Data.ByteString and then trie on the big-endian bit representation of those elements For further details on the latter see Chris Okasaki and Andy Gill Fast Mergeable Integer Maps Workshop on ML September pages http citeseerx.ist.psu.edu viewdoc summary doi D.R Morrison PATRICIA Practical Algorithm To Retrieve Information Coded In Alphanumeric Journal of the ACM October pages This module aims to provide an austere interface while being detailed enough for most users For an extended interface with many additional functions see Data.Trie.Convenience For functions that give more detailed potentially abstraction-breaking access to the data strucuture or for experimental functions which aren quite ready for the public API see Data.Trie.Internal",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "Trie",
          "package": "bytestring-trie",
          "partial": "Trie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003ea\u003c/code\u003e. For all the generic functions,\n note that tries are strict in the \u003ccode\u003eMaybe\u003c/code\u003e but not in \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e instance is strange. If a key \u003ccode\u003ek1\u003c/code\u003e is a prefix of\n other keys, then results from binding the value at \u003ccode\u003ek1\u003c/code\u003e will\n override values from longer keys when they collide. If this is\n useful for anything, or if there's a more sensible instance, I'd\n be curious to know.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "Trie",
          "package": "bytestring-trie",
          "source": "src/Data-Trie-Internal.html#Trie",
          "type": "data"
        },
        "index": {
          "description": "map from ByteString to For all the generic functions note that tries are strict in the Maybe but not in The Monad instance is strange If key k1 is prefix of other keys then results from binding the value at k1 will override values from longer keys when they collide If this is useful for anything or if there more sensible instance be curious to know",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "Trie",
          "package": "bytestring-trie",
          "partial": "Trie",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#t:Trie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the value at a key.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "adjust",
          "package": "bytestring-trie",
          "signature": "(a -\u003e a) -\u003e ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the value at key",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "(a-\u003ea)-\u003eByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the value stored at a key.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "delete",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove the value stored at key",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "delete",
          "normalized": "ByteString-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all values in the trie, in sorted order according to the keys.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "elems",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e [a]",
          "source": "src/Data-Trie.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all values in the trie in sorted order according to the keys",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "elems",
          "normalized": "Trie a-\u003e[a]",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert association list into a trie. On key conflict, values\n earlier in the list shadow later ones.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "fromList",
          "package": "bytestring-trie",
          "signature": "[(ByteString, a)] -\u003e Trie a",
          "source": "src/Data-Trie.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert association list into trie On key conflict values earlier in the list shadow later ones",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "fromList",
          "normalized": "[(ByteString,a)]-\u003eTrie a",
          "package": "bytestring-trie",
          "partial": "List",
          "signature": "[(ByteString,a)]-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new key. If the key is already present, overrides the\n old value\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "insert",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new key If the key is already present overrides the old value",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "insert",
          "normalized": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003ea-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all keys in the trie, in sorted order.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "keys",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e [ByteString]",
          "source": "src/Data-Trie.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys in the trie in sorted order",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "keys",
          "normalized": "Trie a-\u003e[ByteString]",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the value associated with a query string if it exists.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "lookup",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e Trie a -\u003e Maybe a",
          "source": "src/Data-Trie.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Return the value associated with query string if it exists",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "lookup",
          "normalized": "ByteString-\u003eTrie a-\u003eMaybe a",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003eTrie a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric function to find a value (if it exists) and the subtrie\n rooted at the prefix.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "lookupBy",
          "package": "bytestring-trie",
          "signature": "(Maybe a -\u003e Trie a -\u003e b) -\u003e ByteString -\u003e Trie a -\u003e b",
          "source": "src/Data-Trie.html#lookupBy",
          "type": "function"
        },
        "index": {
          "description": "Generic function to find value if it exists and the subtrie rooted at the prefix",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "lookupBy",
          "normalized": "(Maybe a-\u003eTrie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
          "package": "bytestring-trie",
          "partial": "By",
          "signature": "(Maybe a-\u003eTrie a-\u003eb)-\u003eByteString-\u003eTrie a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:lookupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a string have a value in the trie?\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "member",
          "package": "bytestring-trie",
          "signature": "ByteString -\u003e Trie a -\u003e Bool",
          "source": "src/Data-Trie.html#member",
          "type": "function"
        },
        "index": {
          "description": "Does string have value in the trie",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "member",
          "normalized": "ByteString-\u003eTrie a-\u003eBool",
          "package": "bytestring-trie",
          "signature": "ByteString-\u003eTrie a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert trie into association list. Keys will be in sorted order.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "toList",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e [(ByteString, a)]",
          "source": "src/Data-Trie.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert trie into association list Keys will be in sorted order",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "toList",
          "normalized": "Trie a-\u003e[(ByteString,a)]",
          "package": "bytestring-trie",
          "partial": "List",
          "signature": "Trie a-\u003e[(ByteString,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two tries, resolving conflicts by choosing the value\n from the left trie.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "unionL",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie.html#unionL",
          "type": "function"
        },
        "index": {
          "description": "Combine two tries resolving conflicts by choosing the value from the left trie",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "unionL",
          "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:unionL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two tries, resolving conflicts by choosing the value\n from the right trie.\n\u003c/p\u003e",
          "module": "Data.Trie",
          "name": "unionR",
          "package": "bytestring-trie",
          "signature": "Trie a -\u003e Trie a -\u003e Trie a",
          "source": "src/Data-Trie.html#unionR",
          "type": "function"
        },
        "index": {
          "description": "Combine two tries resolving conflicts by choosing the value from the right trie",
          "hierarchy": "Data Trie",
          "module": "Data.Trie",
          "name": "unionR",
          "normalized": "Trie a-\u003eTrie a-\u003eTrie a",
          "package": "bytestring-trie",
          "signature": "Trie a-\u003eTrie a-\u003eTrie a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestring-trie/docs/Data-Trie.html#v:unionR"
      }
    }
  ]
]