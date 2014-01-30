[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient implementation of a rolling hash, i.e., the computation of a hash through\n a moving window of a fixed size \u003ccode\u003en\u003c/code\u003e over some stream. All operations are O(1) (in\n particular, they do not depend on the size of the window).\n\u003c/p\u003e\u003cp\u003eSome laws that this type satisfies:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003ecurrentHash rh == foldl1 combine (lastHashes rh)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elength (lastHashes rh) \u003c= windowSize rh\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elength (lastHashes $ addAndRoll rh a) == windowSize rh -- whenever length (lastHashes rh) == windowSize rh\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003elast (lastHashes $ addAndRoll rh x) == hash a\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einit (lastHashes $ addAndRoll rh a) \u003ccode\u003eisSuffixOf\u003c/code\u003e (lastHashes rh)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash-Rolling.html",
        "fct-type": "module",
        "title": "Rolling"
      },
      "index": {
        "description": "Efficient implementation of rolling hash i.e the computation of hash through moving window of fixed size over some stream All operations are in particular they do not depend on the size of the window Some laws that this type satisfies currentHash rh foldl1 combine lastHashes rh length lastHashes rh windowSize rh length lastHashes addAndRoll rh windowSize rh whenever length lastHashes rh windowSize rh last lastHashes addAndRoll rh hash init lastHashes addAndRoll rh isSuffixOf lastHashes rh",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "Rolling",
        "normalized": "",
        "package": "data-hash",
        "partial": "Rolling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#t:RollingHash",
      "description": {
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "data",
        "fct-source": "src/Data-Hash-Rolling.html#RollingHash",
        "fct-type": "data",
        "title": "RollingHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "RollingHash",
        "normalized": "",
        "package": "data-hash",
        "partial": "Rolling Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:addAndRoll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eaddAndRoll x rh\u003c/code\u003e adds a new input element and rolls the window\n   one place through the input (if at least \u003ccode\u003en\u003c/code\u003e elements were\n   already consumed).\n\u003c/p\u003e",
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "RollingHash a -\u003e a -\u003e RollingHash a",
        "fct-source": "src/Data-Hash-Rolling.html#addAndRoll",
        "fct-type": "function",
        "title": "addAndRoll"
      },
      "index": {
        "description": "addAndRoll rh adds new input element and rolls the window one place through the input if at least elements were already consumed",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "addAndRoll",
        "normalized": "RollingHash a-\u003ea-\u003eRollingHash a",
        "package": "data-hash",
        "partial": "And Roll",
        "signature": "RollingHash a-\u003ea-\u003eRollingHash a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:currentHash",
      "description": {
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "RollingHash a -\u003e Hash",
        "fct-source": "src/Data-Hash-Rolling.html#currentHash",
        "fct-type": "function",
        "title": "currentHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "currentHash",
        "normalized": "RollingHash a-\u003eHash",
        "package": "data-hash",
        "partial": "Hash",
        "signature": "RollingHash a-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:lastHashes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elastHashes rh\u003c/code\u003e returns the last \u003ccode\u003en\u003c/code\u003e hashes.\n\u003c/p\u003e",
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "RollingHash a -\u003e [Hash]",
        "fct-source": "src/Data-Hash-Rolling.html#lastHashes",
        "fct-type": "function",
        "title": "lastHashes"
      },
      "index": {
        "description": "lastHashes rh returns the last hashes",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "lastHashes",
        "normalized": "RollingHash a-\u003e[Hash]",
        "package": "data-hash",
        "partial": "Hashes",
        "signature": "RollingHash a-\u003e[Hash]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:rollingHash",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erollingHash n\u003c/code\u003e creates a \u003ccode\u003eRollingHash\u003c/code\u003e of window\n   size \u003ccode\u003en\u003c/code\u003e (for \u003ccode\u003en \u003e 0\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "Int -\u003e RollingHash a",
        "fct-source": "src/Data-Hash-Rolling.html#rollingHash",
        "fct-type": "function",
        "title": "rollingHash"
      },
      "index": {
        "description": "rollingHash creates RollingHash of window size for",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "rollingHash",
        "normalized": "Int-\u003eRollingHash a",
        "package": "data-hash",
        "partial": "Hash",
        "signature": "Int-\u003eRollingHash a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash-Rolling.html#v:windowSize",
      "description": {
        "fct-module": "Data.Hash.Rolling",
        "fct-package": "data-hash",
        "fct-signature": "RollingHash a -\u003e Int",
        "fct-source": "src/Data-Hash-Rolling.html#windowSize",
        "fct-type": "function",
        "title": "windowSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash Rolling",
        "module": "Data.Hash.Rolling",
        "name": "windowSize",
        "normalized": "RollingHash a-\u003eInt",
        "package": "data-hash",
        "partial": "Size",
        "signature": "RollingHash a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for building fast hashing functions.\n\u003c/p\u003e\u003cp\u003eBased on the BuzHash algorithm by Robert Uzgalis\n (see, e.g. \"Hashing concepts and the Java programming language\" at\n  \u003ca\u003ehttp://www.serve.net/buz/hash.adt/java.000.html\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "module",
        "fct-source": "src/Data-Hash.html",
        "fct-type": "module",
        "title": "Hash"
      },
      "index": {
        "description": "Combinators for building fast hashing functions Based on the BuzHash algorithm by Robert Uzgalis see e.g Hashing concepts and the Java programming language at http www.serve.net buz hash.adt java.000.html",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "Hash",
        "normalized": "",
        "package": "data-hash",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eA 64-bit hash\n\u003c/p\u003e",
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "data",
        "fct-source": "src/Data-Hash-Base.html#Hash",
        "fct-type": "data",
        "title": "Hash"
      },
      "index": {
        "description": "bit hash",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "Hash",
        "normalized": "",
        "package": "data-hash",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#t:Hashable",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "class",
        "fct-source": "src/Data-Hash-Instances.html#Hashable",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "Hashable",
        "normalized": "",
        "package": "data-hash",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:asWord64",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Hash -\u003e Word64",
        "fct-source": "src/Data-Hash-Base.html#asWord64",
        "fct-type": "function",
        "title": "asWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "asWord64",
        "normalized": "Hash-\u003eWord",
        "package": "data-hash",
        "partial": "Word",
        "signature": "Hash-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eh1 `combine` h2\u003c/code\u003e combines hashes \u003ccode\u003eh1\u003c/code\u003e and \u003ccode\u003eh2\u003c/code\u003e into a new hash.\n\u003c/p\u003e\u003cp\u003eIt is used to generate hash functions for complex types. For example:\n\u003c/p\u003e\u003cpre\u003e\n hashPair :: (Hashable a, Hashable b) =\u003e (a,b) -\u003e Hash\n hashPair (a,b) = hash a `combine` hash b\n\u003c/pre\u003e",
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Hash -\u003e Hash -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "h1 combine h2 combines hashes h1 and h2 into new hash It is used to generate hash functions for complex types For example hashPair Hashable Hashable Hash hashPair hash combine hash",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "combine",
        "normalized": "Hash-\u003eHash-\u003eHash",
        "package": "data-hash",
        "partial": "",
        "signature": "Hash-\u003eHash-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hash",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "a -\u003e Hash",
        "fct-source": "src/Data-Hash-Instances.html#hash",
        "fct-type": "method",
        "title": "hash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hash",
        "normalized": "a-\u003eHash",
        "package": "data-hash",
        "partial": "",
        "signature": "a-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashFoldable",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "t a -\u003e Hash",
        "fct-source": "src/Data-Hash-Instances.html#hashFoldable",
        "fct-type": "function",
        "title": "hashFoldable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashFoldable",
        "normalized": "a b-\u003eHash",
        "package": "data-hash",
        "partial": "Foldable",
        "signature": "t a-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashInt",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Int -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashInt",
        "fct-type": "function",
        "title": "hashInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashInt",
        "normalized": "Int-\u003eHash",
        "package": "data-hash",
        "partial": "Int",
        "signature": "Int-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashStorable",
      "description": {
        "fct-descr": "\u003cp\u003eObserve that, unlike the other functions in this module,\n \u003ccode\u003ehashStorable\u003c/code\u003e is machine-dependent (the computed hash depends\n on endianness, etc.).\n\u003c/p\u003e",
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "a -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashStorable",
        "fct-type": "function",
        "title": "hashStorable"
      },
      "index": {
        "description": "Observe that unlike the other functions in this module hashStorable is machine-dependent the computed hash depends on endianness etc",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashStorable",
        "normalized": "a-\u003eHash",
        "package": "data-hash",
        "partial": "Storable",
        "signature": "a-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord16",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Word16 -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashWord16",
        "fct-type": "function",
        "title": "hashWord16"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashWord16",
        "normalized": "Word-\u003eHash",
        "package": "data-hash",
        "partial": "Word",
        "signature": "Word-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord32",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Word32 -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashWord32",
        "fct-type": "function",
        "title": "hashWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashWord32",
        "normalized": "Word-\u003eHash",
        "package": "data-hash",
        "partial": "Word",
        "signature": "Word-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord64",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Word64 -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashWord64",
        "fct-type": "function",
        "title": "hashWord64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashWord64",
        "normalized": "Word-\u003eHash",
        "package": "data-hash",
        "partial": "Word",
        "signature": "Word-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-hash/docs/Data-Hash.html#v:hashWord8",
      "description": {
        "fct-module": "Data.Hash",
        "fct-package": "data-hash",
        "fct-signature": "Word8 -\u003e Hash",
        "fct-source": "src/Data-Hash-Base.html#hashWord8",
        "fct-type": "function",
        "title": "hashWord8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Hash",
        "module": "Data.Hash",
        "name": "hashWord8",
        "normalized": "Word-\u003eHash",
        "package": "data-hash",
        "partial": "Word",
        "signature": "Word-\u003eHash"
      }
    }
  }
]