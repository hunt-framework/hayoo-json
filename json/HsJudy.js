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
        "word": "HsJudy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-BitSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "partial": "Bit Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-BitSet.html#BitSet",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "partial": "Bit Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#t:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "signature": "BitSet",
          "source": "src/Data-Array-Judy-BitSet.html#BitSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "BitSet",
          "package": "HsJudy",
          "partial": "Bit Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:BitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake the set empty.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "clear",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e IO ()",
          "source": "src/Data-Array-Judy-BitSet.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Make the set empty",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "clear",
          "normalized": "BitSet a-\u003eIO()",
          "package": "HsJudy",
          "signature": "BitSet a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a value in the set.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "delete",
          "package": "HsJudy",
          "signature": "a -\u003e BitSet a -\u003e IO ()",
          "source": "src/Data-Array-Judy-BitSet.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete value in the set",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "delete",
          "normalized": "a-\u003eBitSet a-\u003eIO()",
          "package": "HsJudy",
          "signature": "a-\u003eBitSet a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a frozen, immutable version of a bitset, the original mutable version is cleared.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "freezeBitSet",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e IO (Frozen (BitSet a))",
          "source": "src/Data-Array-Judy-BitSet.html#freezeBitSet",
          "type": "function"
        },
        "index": {
          "description": "Create frozen immutable version of bitset the original mutable version is cleared",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "freezeBitSet",
          "normalized": "BitSet a-\u003eIO(Frozen(BitSet a))",
          "package": "HsJudy",
          "partial": "Bit Set",
          "signature": "BitSet a-\u003eIO(Frozen(BitSet a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:freezeBitSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set from a list of elements.\n FIXME: should I create the list here maybe?\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "fromList",
          "package": "HsJudy",
          "signature": "[a] -\u003e BitSet a -\u003e IO ()",
          "source": "src/Data-Array-Judy-BitSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create set from list of elements FIXME should create the list here maybe",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "fromList",
          "normalized": "[a]-\u003eBitSet a-\u003eIO()",
          "package": "HsJudy",
          "partial": "List",
          "signature": "[a]-\u003eBitSet a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "fromListF",
          "package": "HsJudy",
          "signature": "[a] -\u003e Frozen (BitSet a)",
          "source": "src/Data-Array-Judy-BitSet.html#fromListF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "fromListF",
          "normalized": "[a]-\u003eFrozen(BitSet a)",
          "package": "HsJudy",
          "partial": "List",
          "signature": "[a]-\u003eFrozen(BitSet a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:fromListF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "get",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e a -\u003e IO Bool",
          "source": "src/Data-Array-Judy-BitSet.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "get",
          "normalized": "BitSet a-\u003ea-\u003eIO Bool",
          "package": "HsJudy",
          "signature": "BitSet a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a value to the set.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "insert",
          "package": "HsJudy",
          "signature": "a -\u003e BitSet a -\u003e IO ()",
          "source": "src/Data-Array-Judy-BitSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Add value to the set",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "insert",
          "normalized": "a-\u003eBitSet a-\u003eIO()",
          "package": "HsJudy",
          "signature": "a-\u003eBitSet a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "judy",
          "package": "HsJudy",
          "signature": "ForeignPtr Judy1",
          "source": "src/Data-Array-Judy-BitSet.html#BitSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "judy",
          "package": "HsJudy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:judy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the value a member of the set?\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "member",
          "package": "HsJudy",
          "signature": "a -\u003e BitSet a -\u003e IO Bool",
          "source": "src/Data-Array-Judy-BitSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the value member of the set",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "member",
          "normalized": "a-\u003eBitSet a-\u003eIO Bool",
          "package": "HsJudy",
          "signature": "a-\u003eBitSet a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "memberF",
          "package": "HsJudy",
          "signature": "a -\u003e Frozen (BitSet a) -\u003e Bool",
          "source": "src/Data-Array-Judy-BitSet.html#memberF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "memberF",
          "normalized": "a-\u003eFrozen(BitSet a)-\u003eBool",
          "package": "HsJudy",
          "signature": "a-\u003eFrozen(BitSet a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:memberF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a set.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "new",
          "package": "HsJudy",
          "signature": "IO (BitSet a)",
          "source": "src/Data-Array-Judy-BitSet.html#new",
          "type": "function"
        },
        "index": {
          "description": "Create set",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "new",
          "package": "HsJudy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the set empty?\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "null",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e IO Bool",
          "source": "src/Data-Array-Judy-BitSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the set empty",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "null",
          "normalized": "BitSet a-\u003eIO Bool",
          "package": "HsJudy",
          "signature": "BitSet a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet value in or out the set and return its old value.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "set",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e a -\u003e Bool -\u003e IO Bool",
          "source": "src/Data-Array-Judy-BitSet.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set value in or out the set and return its old value",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "set",
          "normalized": "BitSet a-\u003ea-\u003eBool-\u003eIO Bool",
          "package": "HsJudy",
          "signature": "BitSet a-\u003ea-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCardinality of the set.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "size",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e IO Int",
          "source": "src/Data-Array-Judy-BitSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Cardinality of the set",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "size",
          "normalized": "BitSet a-\u003eIO Int",
          "package": "HsJudy",
          "signature": "BitSet a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap contents of two sets.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "swapBitSets",
          "package": "HsJudy",
          "signature": "BitSet a -\u003e BitSet a -\u003e IO ()",
          "source": "src/Data-Array-Judy-BitSet.html#swapBitSets",
          "type": "function"
        },
        "index": {
          "description": "Swap contents of two sets",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "swapBitSets",
          "normalized": "BitSet a-\u003eBitSet a-\u003eIO()",
          "package": "HsJudy",
          "partial": "Bit Sets",
          "signature": "BitSet a-\u003eBitSet a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:swapBitSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the set to a list of elements.\n\u003c/p\u003e",
          "module": "Data.Array.Judy.BitSet",
          "name": "toList",
          "package": "HsJudy",
          "signature": "BitSet t -\u003e IO [a]",
          "source": "src/Data-Array-Judy-BitSet.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the set to list of elements",
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "toList",
          "normalized": "BitSet a-\u003eIO[b]",
          "package": "HsJudy",
          "partial": "List",
          "signature": "BitSet t-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.BitSet",
          "name": "toListF",
          "package": "HsJudy",
          "signature": "Frozen (BitSet t) -\u003e [a]",
          "source": "src/Data-Array-Judy-BitSet.html#toListF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy BitSet",
          "module": "Data.Array.Judy.BitSet",
          "name": "toListF",
          "normalized": "Frozen(BitSet a)-\u003e[b]",
          "package": "HsJudy",
          "partial": "List",
          "signature": "Frozen(BitSet t)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-BitSet.html#v:toListF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "CollectionsM",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-CollectionsM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "CollectionsM",
          "package": "HsJudy",
          "partial": "Collections",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "MapF",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-CollectionsM.html#MapF",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "MapF",
          "package": "HsJudy",
          "partial": "Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#t:MapF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "MapM",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-CollectionsM.html#MapM",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "MapM",
          "package": "HsJudy",
          "partial": "Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#t:MapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "alter",
          "package": "HsJudy",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e c -\u003e m (Maybe a)",
          "source": "src/Data-Array-Judy-CollectionsM.html#alter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003ec-\u003ed(Maybe a)",
          "package": "HsJudy",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003ec-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "delete",
          "package": "HsJudy",
          "signature": "k -\u003e c -\u003e m Bool",
          "source": "src/Data-Array-Judy-CollectionsM.html#delete",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "delete",
          "normalized": "a-\u003eb-\u003ec Bool",
          "package": "HsJudy",
          "signature": "k-\u003ec-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "elems",
          "package": "HsJudy",
          "signature": "c -\u003e m [a]",
          "source": "src/Data-Array-Judy-CollectionsM.html#elems",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "elems",
          "normalized": "a-\u003eb[c]",
          "package": "HsJudy",
          "signature": "c-\u003em[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "fromList",
          "package": "HsJudy",
          "signature": "[(k, a)] -\u003e m c",
          "source": "src/Data-Array-Judy-CollectionsM.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003ec d",
          "package": "HsJudy",
          "partial": "List",
          "signature": "[(k,a)]-\u003em c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "fromListF",
          "package": "HsJudy",
          "signature": "[(k, a)] -\u003e c",
          "source": "src/Data-Array-Judy-CollectionsM.html#fromListF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "fromListF",
          "normalized": "[(a,b)]-\u003ec",
          "package": "HsJudy",
          "partial": "List",
          "signature": "[(k,a)]-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:fromListF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "insert",
          "package": "HsJudy",
          "signature": "k -\u003e a -\u003e c -\u003e m ()",
          "source": "src/Data-Array-Judy-CollectionsM.html#insert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ec-\u003ed()",
          "package": "HsJudy",
          "signature": "k-\u003ea-\u003ec-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "keys",
          "package": "HsJudy",
          "signature": "c -\u003e m [k]",
          "source": "src/Data-Array-Judy-CollectionsM.html#keys",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "keys",
          "normalized": "a-\u003eb[c]",
          "package": "HsJudy",
          "signature": "c-\u003em[k]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "lookup",
          "package": "HsJudy",
          "signature": "k -\u003e c -\u003e m (Maybe a)",
          "source": "src/Data-Array-Judy-CollectionsM.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "lookup",
          "normalized": "a-\u003eb-\u003ec(Maybe d)",
          "package": "HsJudy",
          "signature": "k-\u003ec-\u003em(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "lookupF",
          "package": "HsJudy",
          "signature": "k -\u003e c -\u003e Maybe a",
          "source": "src/Data-Array-Judy-CollectionsM.html#lookupF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "lookupF",
          "normalized": "a-\u003eb-\u003eMaybe c",
          "package": "HsJudy",
          "signature": "k-\u003ec-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:lookupF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "mapToList",
          "package": "HsJudy",
          "signature": "(k -\u003e a -\u003e b) -\u003e c -\u003e m [b]",
          "source": "src/Data-Array-Judy-CollectionsM.html#mapToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "mapToList",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed-\u003ee[c]",
          "package": "HsJudy",
          "partial": "To List",
          "signature": "(k-\u003ea-\u003eb)-\u003ec-\u003em[b]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:mapToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "member",
          "package": "HsJudy",
          "signature": "k -\u003e c -\u003e m Bool",
          "source": "src/Data-Array-Judy-CollectionsM.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "member",
          "normalized": "a-\u003eb-\u003ec Bool",
          "package": "HsJudy",
          "signature": "k-\u003ec-\u003em Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "memberF",
          "package": "HsJudy",
          "signature": "k -\u003e c -\u003e Bool",
          "source": "src/Data-Array-Judy-CollectionsM.html#memberF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "memberF",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "HsJudy",
          "signature": "k-\u003ec-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:memberF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "new",
          "package": "HsJudy",
          "signature": "m c",
          "source": "src/Data-Array-Judy-CollectionsM.html#new",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "new",
          "package": "HsJudy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "swapMaps",
          "package": "HsJudy",
          "signature": "c -\u003e c -\u003e m ()",
          "source": "src/Data-Array-Judy-CollectionsM.html#swapMaps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "swapMaps",
          "normalized": "a-\u003ea-\u003eb()",
          "package": "HsJudy",
          "partial": "Maps",
          "signature": "c-\u003ec-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:swapMaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "toList",
          "package": "HsJudy",
          "signature": "c -\u003e m [(k, a)]",
          "source": "src/Data-Array-Judy-CollectionsM.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "toList",
          "normalized": "a-\u003eb[(c,d)]",
          "package": "HsJudy",
          "partial": "List",
          "signature": "c-\u003em[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.CollectionsM",
          "name": "toListF",
          "package": "HsJudy",
          "signature": "c -\u003e [(k, a)]",
          "source": "src/Data-Array-Judy-CollectionsM.html#toListF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy CollectionsM",
          "module": "Data.Array.Judy.CollectionsM",
          "name": "toListF",
          "normalized": "a-\u003e[(b,c)]",
          "package": "HsJudy",
          "partial": "List",
          "signature": "c-\u003e[(k,a)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-CollectionsM.html#v:toListF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Freeze",
          "name": "Freeze",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Freeze.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy Freeze",
          "module": "Data.Array.Judy.Freeze",
          "name": "Freeze",
          "package": "HsJudy",
          "partial": "Freeze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Freeze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Freeze",
          "name": "Freezable",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Freeze.html#Freezable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy Freeze",
          "module": "Data.Array.Judy.Freeze",
          "name": "Freezable",
          "package": "HsJudy",
          "partial": "Freezable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Freeze.html#t:Freezable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Freeze",
          "name": "Frozen",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Private.html#Frozen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Array Judy Freeze",
          "module": "Data.Array.Judy.Freeze",
          "name": "Frozen",
          "package": "HsJudy",
          "partial": "Frozen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Freeze.html#t:Frozen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Freeze",
          "name": "freeze",
          "package": "HsJudy",
          "signature": "a -\u003e IO (Frozen a)",
          "source": "src/Data-Array-Judy-Freeze.html#freeze",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Freeze",
          "module": "Data.Array.Judy.Freeze",
          "name": "freeze",
          "normalized": "a-\u003eIO(Frozen a)",
          "package": "HsJudy",
          "signature": "a-\u003eIO(Frozen a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Freeze.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Hash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy Hash",
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Hash.html#Hash",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Array Judy Hash",
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "partial": "Hash",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "signature": "Hash",
          "source": "src/Data-Array-Judy-Hash.html#Hash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy Hash",
          "module": "Data.Array.Judy.Hash",
          "name": "Hash",
          "package": "HsJudy",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#v:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Array.Judy.Hash\",\"Data.Array.Judy.IntMap\",\"Data.Array.Judy.StrMap\"]",
          "name": "freeze",
          "package": "HsJudy",
          "signature": "a -\u003e IO (Frozen a)",
          "source": "src/Data-Array-Judy-Freeze.html#freeze",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#v:freeze\",\"http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:freeze\",\"http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#v:freeze\"]"
        },
        "index": {
          "hierarchy": "Data Array Judy Hash",
          "module": "Data.Array.Judy.Hash",
          "name": "freeze",
          "normalized": "a-\u003eIO(Frozen a)",
          "package": "HsJudy",
          "signature": "a-\u003eIO(Frozen a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Hash",
          "name": "judy",
          "package": "HsJudy",
          "signature": "ForeignPtr JudyHS",
          "source": "src/Data-Array-Judy-Hash.html#Hash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy Hash",
          "module": "Data.Array.Judy.Hash",
          "name": "judy",
          "package": "HsJudy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Hash.html#v:judy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "HashIO",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-HashIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "HashIO",
          "package": "HsJudy",
          "partial": "Hash IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "HashIO",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-HashIO.html#HashIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "HashIO",
          "package": "HsJudy",
          "partial": "Hash IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#t:HashIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "ReversibleHashIO",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-HashIO.html#ReversibleHashIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "ReversibleHashIO",
          "package": "HsJudy",
          "partial": "Reversible Hash IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#t:ReversibleHashIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "UniqueHashIO",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-HashIO.html#UniqueHashIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "UniqueHashIO",
          "package": "HsJudy",
          "partial": "Unique Hash IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#t:UniqueHashIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "hashIO",
          "package": "HsJudy",
          "signature": "a -\u003e IO Value",
          "source": "src/Data-Array-Judy-HashIO.html#hashIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "hashIO",
          "normalized": "a-\u003eIO Value",
          "package": "HsJudy",
          "partial": "IO",
          "signature": "a-\u003eIO Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#v:hashIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.HashIO",
          "name": "unHashIO",
          "package": "HsJudy",
          "signature": "Value -\u003e IO a",
          "source": "src/Data-Array-Judy-HashIO.html#unHashIO",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy HashIO",
          "module": "Data.Array.Judy.HashIO",
          "name": "unHashIO",
          "normalized": "Value-\u003eIO a",
          "package": "HsJudy",
          "partial": "Hash IO",
          "signature": "Value-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-HashIO.html#v:unHashIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-IntMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "partial": "Int Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-IntMap.html#IntMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "partial": "Int Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#t:IntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "signature": "IntMap",
          "source": "src/Data-Array-Judy-IntMap.html#IntMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "IntMap",
          "package": "HsJudy",
          "partial": "Int Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:IntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "judy",
          "package": "HsJudy",
          "signature": "ForeignPtr JudyL",
          "source": "src/Data-Array-Judy-IntMap.html#IntMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "judy",
          "package": "HsJudy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:judy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "size",
          "package": "HsJudy",
          "signature": "IntMap k a -\u003e IO Int",
          "source": "src/Data-Array-Judy-IntMap.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "size",
          "normalized": "IntMap a b-\u003eIO Int",
          "package": "HsJudy",
          "signature": "IntMap k a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "takeFirst",
          "package": "HsJudy",
          "signature": "Int -\u003e IntMap k a -\u003e IO [(k, a)]",
          "source": "src/Data-Array-Judy-IntMap.html#takeFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "takeFirst",
          "normalized": "Int-\u003eIntMap a b-\u003eIO[(a,b)]",
          "package": "HsJudy",
          "partial": "First",
          "signature": "Int-\u003eIntMap k a-\u003eIO[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:takeFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "takeFirstElems",
          "package": "HsJudy",
          "signature": "Int -\u003e IntMap k a -\u003e IO [a]",
          "source": "src/Data-Array-Judy-IntMap.html#takeFirstElems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "takeFirstElems",
          "normalized": "Int-\u003eIntMap a b-\u003eIO[b]",
          "package": "HsJudy",
          "partial": "First Elems",
          "signature": "Int-\u003eIntMap k a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:takeFirstElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "takeLast",
          "package": "HsJudy",
          "signature": "Int -\u003e IntMap k a -\u003e IO [(k, a)]",
          "source": "src/Data-Array-Judy-IntMap.html#takeLast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "takeLast",
          "normalized": "Int-\u003eIntMap a b-\u003eIO[(a,b)]",
          "package": "HsJudy",
          "partial": "Last",
          "signature": "Int-\u003eIntMap k a-\u003eIO[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:takeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "takeLastElems",
          "package": "HsJudy",
          "signature": "Int -\u003e IntMap k a -\u003e IO [a]",
          "source": "src/Data-Array-Judy-IntMap.html#takeLastElems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "takeLastElems",
          "normalized": "Int-\u003eIntMap a b-\u003eIO[b]",
          "package": "HsJudy",
          "partial": "Last Elems",
          "signature": "Int-\u003eIntMap k a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:takeLastElems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.IntMap",
          "name": "toRevList",
          "package": "HsJudy",
          "signature": "IntMap k a -\u003e IO [(k, a)]",
          "source": "src/Data-Array-Judy-IntMap.html#toRevList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy IntMap",
          "module": "Data.Array.Judy.IntMap",
          "name": "toRevList",
          "normalized": "IntMap a b-\u003eIO[(a,b)]",
          "package": "HsJudy",
          "partial": "Rev List",
          "signature": "IntMap k a-\u003eIO[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-IntMap.html#v:toRevList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Refeable",
          "name": "Refeable",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Refeable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy Refeable",
          "module": "Data.Array.Judy.Refeable",
          "name": "Refeable",
          "package": "HsJudy",
          "partial": "Refeable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Refeable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Refeable",
          "name": "Refeable",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Refeable.html#Refeable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy Refeable",
          "module": "Data.Array.Judy.Refeable",
          "name": "Refeable",
          "package": "HsJudy",
          "partial": "Refeable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Refeable.html#t:Refeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Refeable",
          "name": "fromRef",
          "package": "HsJudy",
          "signature": "Value -\u003e IO a",
          "source": "src/Data-Array-Judy-Refeable.html#fromRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Refeable",
          "module": "Data.Array.Judy.Refeable",
          "name": "fromRef",
          "normalized": "Value-\u003eIO a",
          "package": "HsJudy",
          "partial": "Ref",
          "signature": "Value-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Refeable.html#v:fromRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Refeable",
          "name": "needGC",
          "package": "HsJudy",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Array-Judy-Refeable.html#needGC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Refeable",
          "module": "Data.Array.Judy.Refeable",
          "name": "needGC",
          "normalized": "a-\u003eBool",
          "package": "HsJudy",
          "partial": "GC",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Refeable.html#v:needGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Refeable",
          "name": "toRef",
          "package": "HsJudy",
          "signature": "a -\u003e IO Value",
          "source": "src/Data-Array-Judy-Refeable.html#toRef",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Refeable",
          "module": "Data.Array.Judy.Refeable",
          "name": "toRef",
          "normalized": "a-\u003eIO Value",
          "package": "HsJudy",
          "partial": "Ref",
          "signature": "a-\u003eIO Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Refeable.html#v:toRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-StrMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy StrMap",
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "partial": "Str Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-StrMap.html#StrMap",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Array Judy StrMap",
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "partial": "Str Map",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#t:StrMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "signature": "StrMap",
          "source": "src/Data-Array-Judy-StrMap.html#StrMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy StrMap",
          "module": "Data.Array.Judy.StrMap",
          "name": "StrMap",
          "package": "HsJudy",
          "partial": "Str Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#v:StrMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.StrMap",
          "name": "judy",
          "package": "HsJudy",
          "signature": "ForeignPtr JudySL",
          "source": "src/Data-Array-Judy-StrMap.html#StrMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy StrMap",
          "module": "Data.Array.Judy.StrMap",
          "name": "judy",
          "package": "HsJudy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#v:judy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.StrMap",
          "name": "toRevList",
          "package": "HsJudy",
          "signature": "StrMap k a -\u003e IO [(k, a)]",
          "source": "src/Data-Array-Judy-StrMap.html#toRevList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Array Judy StrMap",
          "module": "Data.Array.Judy.StrMap",
          "name": "toRevList",
          "normalized": "StrMap a b-\u003eIO[(a,b)]",
          "package": "HsJudy",
          "partial": "Rev List",
          "signature": "StrMap k a-\u003eIO[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-StrMap.html#v:toRevList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "Stringable",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Stringable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "Stringable",
          "package": "HsJudy",
          "partial": "Stringable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "Stringable",
          "package": "HsJudy",
          "source": "src/Data-Array-Judy-Stringable.html#Stringable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "Stringable",
          "package": "HsJudy",
          "partial": "Stringable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#t:Stringable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "copyCS",
          "package": "HsJudy",
          "signature": "CString -\u003e IO k",
          "source": "src/Data-Array-Judy-Stringable.html#copyCS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "copyCS",
          "normalized": "CString-\u003eIO a",
          "package": "HsJudy",
          "partial": "CS",
          "signature": "CString-\u003eIO k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:copyCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "copyCSLen",
          "package": "HsJudy",
          "signature": "CStringLen -\u003e IO k",
          "source": "src/Data-Array-Judy-Stringable.html#copyCSLen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "copyCSLen",
          "normalized": "CStringLen-\u003eIO a",
          "package": "HsJudy",
          "partial": "CSLen",
          "signature": "CStringLen-\u003eIO k",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:copyCSLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "fromString",
          "package": "HsJudy",
          "signature": "String -\u003e k",
          "source": "src/Data-Array-Judy-Stringable.html#fromString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "fromString",
          "normalized": "String-\u003ea",
          "package": "HsJudy",
          "partial": "String",
          "signature": "String-\u003ek",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "toString",
          "package": "HsJudy",
          "signature": "k -\u003e String",
          "source": "src/Data-Array-Judy-Stringable.html#toString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "toString",
          "normalized": "a-\u003eString",
          "package": "HsJudy",
          "partial": "String",
          "signature": "k-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:toString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "useAsCS",
          "package": "HsJudy",
          "signature": "k -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Array-Judy-Stringable.html#useAsCS",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "useAsCS",
          "normalized": "a-\u003e(CString-\u003eIO b)-\u003eIO b",
          "package": "HsJudy",
          "partial": "As CS",
          "signature": "k-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:useAsCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Array.Judy.Stringable",
          "name": "useAsCSLen",
          "package": "HsJudy",
          "signature": "k -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Array-Judy-Stringable.html#useAsCSLen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Array Judy Stringable",
          "module": "Data.Array.Judy.Stringable",
          "name": "useAsCSLen",
          "normalized": "a-\u003e(CStringLen-\u003eIO b)-\u003eIO b",
          "package": "HsJudy",
          "partial": "As CSLen",
          "signature": "k-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HsJudy/docs/Data-Array-Judy-Stringable.html#v:useAsCSLen"
      }
    }
  ]
]