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
        "word": "data-hash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient implementation of a rolling hash, i.e., the computation of a hash through\n a moving window of a fixed size \u003ccode\u003en\u003c/code\u003e over some stream. All operations are O(1) (in\n particular, they do not depend on the size of the window).\n\u003c/p\u003e\u003cp\u003eSome laws that this type satisfies:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ecurrentHash rh == foldl1 combine (lastHashes rh)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elength (lastHashes rh) \u003c= windowSize rh\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elength (lastHashes $ addAndRoll rh a) == windowSize rh -- whenever length (lastHashes rh) == windowSize rh\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elast (lastHashes $ addAndRoll rh x) == hash a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einit (lastHashes $ addAndRoll rh a) \u003ccode\u003eisSuffixOf\u003c/code\u003e (lastHashes rh)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Hash.Rolling",
          "name": "Rolling",
          "package": "data-hash",
          "source": "src/Data-Hash-Rolling.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient implementation of rolling hash i.e the computation of hash through moving window of fixed size over some stream All operations are in particular they do not depend on the size of the window Some laws that this type satisfies currentHash rh foldl1 combine lastHashes rh length lastHashes rh windowSize rh length lastHashes addAndRoll rh windowSize rh whenever length lastHashes rh windowSize rh last lastHashes addAndRoll rh hash init lastHashes addAndRoll rh isSuffixOf lastHashes rh",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "Rolling",
          "package": "data-hash",
          "partial": "Rolling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Rolling",
          "name": "RollingHash",
          "package": "data-hash",
          "source": "src/Data-Hash-Rolling.html#RollingHash",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "RollingHash",
          "package": "data-hash",
          "partial": "Rolling Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#t:RollingHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eaddAndRoll x rh\u003c/code\u003e adds a new input element and rolls the window\n   one place through the input (if at least \u003ccode\u003en\u003c/code\u003e elements were\n   already consumed).\n\u003c/p\u003e",
          "module": "Data.Hash.Rolling",
          "name": "addAndRoll",
          "package": "data-hash",
          "signature": "RollingHash a -\u003e a -\u003e RollingHash a",
          "source": "src/Data-Hash-Rolling.html#addAndRoll",
          "type": "function"
        },
        "index": {
          "description": "addAndRoll rh adds new input element and rolls the window one place through the input if at least elements were already consumed",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "addAndRoll",
          "normalized": "RollingHash a-\u003ea-\u003eRollingHash a",
          "package": "data-hash",
          "partial": "And Roll",
          "signature": "RollingHash a-\u003ea-\u003eRollingHash a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:addAndRoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Rolling",
          "name": "currentHash",
          "package": "data-hash",
          "signature": "RollingHash a -\u003e Hash",
          "source": "src/Data-Hash-Rolling.html#currentHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "currentHash",
          "normalized": "RollingHash a-\u003eHash",
          "package": "data-hash",
          "partial": "Hash",
          "signature": "RollingHash a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:currentHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elastHashes rh\u003c/code\u003e returns the last \u003ccode\u003en\u003c/code\u003e hashes.\n\u003c/p\u003e",
          "module": "Data.Hash.Rolling",
          "name": "lastHashes",
          "package": "data-hash",
          "signature": "RollingHash a -\u003e [Hash]",
          "source": "src/Data-Hash-Rolling.html#lastHashes",
          "type": "function"
        },
        "index": {
          "description": "lastHashes rh returns the last hashes",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "lastHashes",
          "normalized": "RollingHash a-\u003e[Hash]",
          "package": "data-hash",
          "partial": "Hashes",
          "signature": "RollingHash a-\u003e[Hash]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:lastHashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erollingHash n\u003c/code\u003e creates a \u003ccode\u003eRollingHash\u003c/code\u003e of window\n   size \u003ccode\u003en\u003c/code\u003e (for \u003ccode\u003en \u003e 0\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Hash.Rolling",
          "name": "rollingHash",
          "package": "data-hash",
          "signature": "Int -\u003e RollingHash a",
          "source": "src/Data-Hash-Rolling.html#rollingHash",
          "type": "function"
        },
        "index": {
          "description": "rollingHash creates RollingHash of window size for",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "rollingHash",
          "normalized": "Int-\u003eRollingHash a",
          "package": "data-hash",
          "partial": "Hash",
          "signature": "Int-\u003eRollingHash a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:rollingHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Rolling",
          "name": "windowSize",
          "package": "data-hash",
          "signature": "RollingHash a -\u003e Int",
          "source": "src/Data-Hash-Rolling.html#windowSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "windowSize",
          "normalized": "RollingHash a-\u003eInt",
          "package": "data-hash",
          "partial": "Size",
          "signature": "RollingHash a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:windowSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for building fast hashing functions.\n\u003c/p\u003e\u003cp\u003eBased on the BuzHash algorithm by Robert Uzgalis\n (see, e.g. \"Hashing concepts and the Java programming language\" at\n  \u003ca\u003ehttp://www.serve.net/buz/hash.adt/java.000.html\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Hash",
          "name": "Hash",
          "package": "data-hash",
          "source": "src/Data-Hash.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators for building fast hashing functions Based on the BuzHash algorithm by Robert Uzgalis see e.g Hashing concepts and the Java programming language at http www.serve.net buz hash.adt java.000.html",
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "Hash",
          "package": "data-hash",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 64-bit hash\n\u003c/p\u003e",
          "module": "Data.Hash",
          "name": "Hash",
          "package": "data-hash",
          "source": "src/Data-Hash-Base.html#Hash",
          "type": "data"
        },
        "index": {
          "description": "bit hash",
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "Hash",
          "package": "data-hash",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "Hashable",
          "package": "data-hash",
          "source": "src/Data-Hash-Instances.html#Hashable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "Hashable",
          "package": "data-hash",
          "partial": "Hashable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#t:Hashable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "asWord64",
          "package": "data-hash",
          "signature": "Hash -\u003e Word64",
          "source": "src/Data-Hash-Base.html#asWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "asWord64",
          "normalized": "Hash-\u003eWord",
          "package": "data-hash",
          "partial": "Word",
          "signature": "Hash-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:asWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eh1 `combine` h2\u003c/code\u003e combines hashes \u003ccode\u003eh1\u003c/code\u003e and \u003ccode\u003eh2\u003c/code\u003e into a new hash.\n\u003c/p\u003e\u003cp\u003eIt is used to generate hash functions for complex types. For example:\n\u003c/p\u003e\u003cpre\u003e\n hashPair :: (Hashable a, Hashable b) =\u003e (a,b) -\u003e Hash\n hashPair (a,b) = hash a `combine` hash b\n\u003c/pre\u003e",
          "module": "Data.Hash",
          "name": "combine",
          "package": "data-hash",
          "signature": "Hash -\u003e Hash -\u003e Hash",
          "source": "src/Data-Hash-Base.html#combine",
          "type": "function"
        },
        "index": {
          "description": "h1 combine h2 combines hashes h1 and h2 into new hash It is used to generate hash functions for complex types For example hashPair Hashable Hashable Hash hashPair hash combine hash",
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "combine",
          "normalized": "Hash-\u003eHash-\u003eHash",
          "package": "data-hash",
          "signature": "Hash-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hash",
          "package": "data-hash",
          "signature": "a -\u003e Hash",
          "source": "src/Data-Hash-Instances.html#hash",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hash",
          "normalized": "a-\u003eHash",
          "package": "data-hash",
          "signature": "a-\u003eHash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashFoldable",
          "package": "data-hash",
          "signature": "t a -\u003e Hash",
          "source": "src/Data-Hash-Instances.html#hashFoldable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashFoldable",
          "normalized": "a b-\u003eHash",
          "package": "data-hash",
          "partial": "Foldable",
          "signature": "t a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashInt",
          "package": "data-hash",
          "signature": "Int -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashInt",
          "normalized": "Int-\u003eHash",
          "package": "data-hash",
          "partial": "Int",
          "signature": "Int-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObserve that, unlike the other functions in this module,\n \u003ccode\u003ehashStorable\u003c/code\u003e is machine-dependent (the computed hash depends\n on endianness, etc.).\n\u003c/p\u003e",
          "module": "Data.Hash",
          "name": "hashStorable",
          "package": "data-hash",
          "signature": "a -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashStorable",
          "type": "function"
        },
        "index": {
          "description": "Observe that unlike the other functions in this module hashStorable is machine-dependent the computed hash depends on endianness etc",
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashStorable",
          "normalized": "a-\u003eHash",
          "package": "data-hash",
          "partial": "Storable",
          "signature": "a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashWord16",
          "package": "data-hash",
          "signature": "Word16 -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashWord16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashWord16",
          "normalized": "Word-\u003eHash",
          "package": "data-hash",
          "partial": "Word",
          "signature": "Word-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashWord32",
          "package": "data-hash",
          "signature": "Word32 -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashWord32",
          "normalized": "Word-\u003eHash",
          "package": "data-hash",
          "partial": "Word",
          "signature": "Word-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashWord64",
          "package": "data-hash",
          "signature": "Word64 -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashWord64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashWord64",
          "normalized": "Word-\u003eHash",
          "package": "data-hash",
          "partial": "Word",
          "signature": "Word-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash",
          "name": "hashWord8",
          "package": "data-hash",
          "signature": "Word8 -\u003e Hash",
          "source": "src/Data-Hash-Base.html#hashWord8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash",
          "module": "Data.Hash",
          "name": "hashWord8",
          "normalized": "Word-\u003eHash",
          "package": "data-hash",
          "partial": "Word",
          "signature": "Word-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord8"
      }
    }
  ]
]