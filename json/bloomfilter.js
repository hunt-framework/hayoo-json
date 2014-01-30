[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn easy-to-use Bloom filter interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "module",
        "fct-source": "src/Data-BloomFilter-Easy.html",
        "fct-type": "module",
        "title": "Easy"
      },
      "index": {
        "description": "An easy-to-use Bloom filter interface",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "Easy",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Easy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#t:Bloom",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable Bloom filter, suitable for querying from pure code.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "data",
        "fct-source": "src/Data-BloomFilter.html#Bloom",
        "fct-type": "data",
        "title": "Bloom"
      },
      "index": {
        "description": "An immutable Bloom filter suitable for querying from pure code",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "Bloom",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Bloom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:easyList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Bloom filter with the given false positive rate and\n members.  The hash functions used are computed by the \u003ccode\u003echeapHashes\u003c/code\u003e\n function from the \u003ccode\u003e\u003ca\u003eHash\u003c/a\u003e\u003c/code\u003e module.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "Double-\u003e [a]-\u003e Bloom a",
        "fct-type": "function",
        "title": "easyList"
      },
      "index": {
        "description": "Create Bloom filter with the given false positive rate and members The hash functions used are computed by the cheapHashes function from the Hash module",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "easyList",
        "normalized": "Double-\u003e[a]-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "List",
        "signature": "Double-\u003e[a]-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:elemB",
      "description": {
        "fct-descr": "\u003cp\u003eQuery an immutable Bloom filter for membership.  If the value is\n present, return \u003ccode\u003eTrue\u003c/code\u003e.  If the value is not present, there is\n \u003cem\u003estill\u003c/em\u003e some possibility that \u003ccode\u003eTrue\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Bloom a -\u003e Bool",
        "fct-source": "src/Data-BloomFilter.html#elemB",
        "fct-type": "function",
        "title": "elemB"
      },
      "index": {
        "description": "Query an immutable Bloom filter for membership If the value is present return True If the value is not present there is still some possibility that True will be returned",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "elemB",
        "normalized": "a-\u003eBloom a-\u003eBool",
        "package": "bloomfilter",
        "partial": "",
        "signature": "a-\u003eBloom a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:lengthB",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of an immutable Bloom filter, in bits.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "Bloom a -\u003e Int",
        "fct-source": "src/Data-BloomFilter.html#lengthB",
        "fct-type": "function",
        "title": "lengthB"
      },
      "index": {
        "description": "Return the size of an immutable Bloom filter in bits",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "lengthB",
        "normalized": "Bloom a-\u003eInt",
        "package": "bloomfilter",
        "partial": "",
        "signature": "Bloom a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:notElemB",
      "description": {
        "fct-descr": "\u003cp\u003eQuery an immutable Bloom filter for non-membership.  If the value\n \u003cem\u003eis\u003c/em\u003e present, return \u003ccode\u003eFalse\u003c/code\u003e.  If the value is not present, there\n is \u003cem\u003estill\u003c/em\u003e some possibility that \u003ccode\u003eTrue\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Bloom a -\u003e Bool",
        "fct-source": "src/Data-BloomFilter.html#notElemB",
        "fct-type": "function",
        "title": "notElemB"
      },
      "index": {
        "description": "Query an immutable Bloom filter for non-membership If the value is present return False If the value is not present there is still some possibility that True will be returned",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "notElemB",
        "normalized": "a-\u003eBloom a-\u003eBool",
        "package": "bloomfilter",
        "partial": "Elem",
        "signature": "a-\u003eBloom a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:safeSuggestSizing",
      "description": {
        "fct-descr": "\u003cp\u003eSuggest a good combination of filter size and number of hash\n functions for a Bloom filter, based on its expected maximum\n capacity and a desired false positive rate.\n\u003c/p\u003e\u003cp\u003eThe false positive rate is the rate at which queries against the\n filter should return \u003ccode\u003eTrue\u003c/code\u003e when an element is not actually\n present.  It should be a fraction between 0 and 1, so a 1% false\n positive rate is represented by 0.01.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "Int-\u003e Double-\u003e Either String (Int, Int)",
        "fct-type": "function",
        "title": "safeSuggestSizing"
      },
      "index": {
        "description": "Suggest good combination of filter size and number of hash functions for Bloom filter based on its expected maximum capacity and desired false positive rate The false positive rate is the rate at which queries against the filter should return True when an element is not actually present It should be fraction between and so false positive rate is represented by",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "safeSuggestSizing",
        "normalized": "Int-\u003eDouble-\u003eEither String(Int,Int)",
        "package": "bloomfilter",
        "partial": "Suggest Sizing",
        "signature": "Int-\u003eDouble-\u003eEither String(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Easy.html#v:suggestSizing",
      "description": {
        "fct-descr": "\u003cp\u003eBehaves as \u003ccode\u003e\u003ca\u003esafeSuggestSizing\u003c/a\u003e\u003c/code\u003e, but calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e if given\n invalid or out-of-range inputs.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Easy",
        "fct-package": "bloomfilter",
        "fct-signature": "Int-\u003e Double-\u003e (Int, Int)",
        "fct-type": "function",
        "title": "suggestSizing"
      },
      "index": {
        "description": "Behaves as safeSuggestSizing but calls error if given invalid or out-of-range inputs",
        "hierarchy": "Data BloomFilter Easy",
        "module": "Data.BloomFilter.Easy",
        "name": "suggestSizing",
        "normalized": "Int-\u003eDouble-\u003e(Int,Int)",
        "package": "bloomfilter",
        "partial": "Sizing",
        "signature": "Int-\u003eDouble-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast hashing of Haskell values.  The hash functions used are Bob\n Jenkins's public domain functions, which combine high performance\n with excellent mixing properties.  For more details, see\n \u003ca\u003ehttp://burtleburtle.net/bob/hash/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIn addition to the usual \u003ca\u003eone input, one output\u003c/a\u003e hash functions,\n this module provides multi-output hash functions, suitable for use\n in applications that need multiple hashes, such as Bloom filtering.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "module",
        "fct-source": "src/Data-BloomFilter-Hash.html",
        "fct-type": "module",
        "title": "Hash"
      },
      "index": {
        "description": "Fast hashing of Haskell values The hash functions used are Bob Jenkins public domain functions which combine high performance with excellent mixing properties For more details see http burtleburtle.net bob hash In addition to the usual one input one output hash functions this module provides multi-output hash functions suitable for use in applications that need multiple hashes such as Bloom filtering",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "Hash",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#t:Hashable",
      "description": {
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "class",
        "fct-source": "src/Data-BloomFilter-Hash.html#Hashable",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "Hashable",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:cheapHashes",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a list of 32-bit hashes relatively cheaply.  The value to\n hash is inspected at most twice, regardless of the number of hashes\n requested.\n\u003c/p\u003e\u003cp\u003eWe use a variant of Kirsch and Mitzenmacher's technique from \"Less\n Hashing, Same Performance: Building a Better Bloom Filter\",\n \u003ca\u003ehttp://www.eecs.harvard.edu/~kirsch/pubs/bbbf/esa06.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWhere Kirsch and Mitzenmacher multiply the second hash by a\n coefficient, we shift right by the coefficient.  This offers better\n performance (as a shift is much cheaper than a multiply), and the\n low order bits of the final hash stay well mixed.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "Int-\u003e a-\u003e [Word32]",
        "fct-type": "function",
        "title": "cheapHashes"
      },
      "index": {
        "description": "Compute list of bit hashes relatively cheaply The value to hash is inspected at most twice regardless of the number of hashes requested We use variant of Kirsch and Mitzenmacher technique from Less Hashing Same Performance Building Better Bloom Filter http www.eecs.harvard.edu kirsch pubs bbbf esa06.pdf Where Kirsch and Mitzenmacher multiply the second hash by coefficient we shift right by the coefficient This offers better performance as shift is much cheaper than multiply and the low order bits of the final hash stay well mixed",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "cheapHashes",
        "normalized": "Int-\u003ea-\u003e[Word]",
        "package": "bloomfilter",
        "partial": "Hashes",
        "signature": "Int-\u003ea-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hash32",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 32-bit hash.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Word32",
        "fct-source": "src/Data-BloomFilter-Hash.html#hash32",
        "fct-type": "function",
        "title": "hash32"
      },
      "index": {
        "description": "Compute bit hash",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hash32",
        "normalized": "a-\u003eWord",
        "package": "bloomfilter",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hash64",
      "description": {
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Word64",
        "fct-source": "src/Data-BloomFilter-Hash.html#hash64",
        "fct-type": "function",
        "title": "hash64"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hash64",
        "normalized": "a-\u003eWord",
        "package": "bloomfilter",
        "partial": "",
        "signature": "a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashIO32",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 32-bit hash of a value.  The salt value perturbs\n the result.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "hashIO32",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashIO32",
        "fct-type": "method",
        "title": "hashIO32"
      },
      "index": {
        "description": "Compute bit hash of value The salt value perturbs the result",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashIO32",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashIO64",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 64-bit hash of a value.  The first salt value\n perturbs the first element of the result, and the second salt\n perturbs the second.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "hashIO64",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashIO64",
        "fct-type": "method",
        "title": "hashIO64"
      },
      "index": {
        "description": "Compute bit hash of value The first salt value perturbs the first element of the result and the second salt perturbs the second",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashIO64",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashList32",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 32-bit hash of a list of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "[a] -\u003e Word32 -\u003e IO Word32",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashList32",
        "fct-type": "function",
        "title": "hashList32"
      },
      "index": {
        "description": "Compute bit hash of list of Storable instances",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashList32",
        "normalized": "[a]-\u003eWord-\u003eIO Word",
        "package": "bloomfilter",
        "partial": "List",
        "signature": "[a]-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashList64",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 64-bit hash of a list of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instances.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "[a] -\u003e Word64 -\u003e IO Word64",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashList64",
        "fct-type": "function",
        "title": "hashList64"
      },
      "index": {
        "description": "Compute bit hash of list of Storable instances",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashList64",
        "normalized": "[a]-\u003eWord-\u003eIO Word",
        "package": "bloomfilter",
        "partial": "List",
        "signature": "[a]-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashOne32",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 32-bit hash of a \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Word32 -\u003e IO Word32",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashOne32",
        "fct-type": "function",
        "title": "hashOne32"
      },
      "index": {
        "description": "Compute bit hash of Storable instance",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashOne32",
        "normalized": "a-\u003eWord-\u003eIO Word",
        "package": "bloomfilter",
        "partial": "One",
        "signature": "a-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashOne64",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a 64-bit hash of a \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Word64 -\u003e IO Word64",
        "fct-source": "src/Data-BloomFilter-Hash.html#hashOne64",
        "fct-type": "function",
        "title": "hashOne64"
      },
      "index": {
        "description": "Compute bit hash of Storable instance",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashOne64",
        "normalized": "a-\u003eWord-\u003eIO Word",
        "package": "bloomfilter",
        "partial": "One",
        "signature": "a-\u003eWord-\u003eIO Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashSalt32",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a salted 32-bit hash.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "Word32-\u003e a-\u003e Word32",
        "fct-type": "function",
        "title": "hashSalt32"
      },
      "index": {
        "description": "Compute salted bit hash",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashSalt32",
        "normalized": "Word-\u003ea-\u003eWord",
        "package": "bloomfilter",
        "partial": "Salt",
        "signature": "Word-\u003ea-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashSalt64",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a salted 64-bit hash.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "Word64-\u003e a-\u003e Word64",
        "fct-type": "function",
        "title": "hashSalt64"
      },
      "index": {
        "description": "Compute salted bit hash",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashSalt64",
        "normalized": "Word-\u003ea-\u003eWord",
        "package": "bloomfilter",
        "partial": "Salt",
        "signature": "Word-\u003ea-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter-Hash.html#v:hashes",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a list of 32-bit hashes.  The value to hash may be\n inspected as many times as there are hashes requested.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter.Hash",
        "fct-package": "bloomfilter",
        "fct-signature": "Int-\u003e a-\u003e [Word32]",
        "fct-type": "function",
        "title": "hashes"
      },
      "index": {
        "description": "Compute list of bit hashes The value to hash may be inspected as many times as there are hashes requested",
        "hierarchy": "Data BloomFilter Hash",
        "module": "Data.BloomFilter.Hash",
        "name": "hashes",
        "normalized": "Int-\u003ea-\u003e[Word]",
        "package": "bloomfilter",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA fast, space efficient Bloom filter implementation.  A Bloom\n filter is a set-like data structure that provides a probabilistic\n membership test.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Queries do not give false negatives.  When an element is added to\n   a filter, a subsequent membership test will definitely return\n   \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e False positives \u003cem\u003eare\u003c/em\u003e possible.  If an element has not been added\n   to a filter, a membership test \u003cem\u003emay\u003c/em\u003e nevertheless indicate that\n   the element is present.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module provides low-level control.  For an easier to use\n interface, see the \u003ca\u003eData.BloomFilter.Easy\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "module",
        "fct-source": "src/Data-BloomFilter.html",
        "fct-type": "module",
        "title": "BloomFilter"
      },
      "index": {
        "description": "fast space efficient Bloom filter implementation Bloom filter is set-like data structure that provides probabilistic membership test Queries do not give false negatives When an element is added to filter subsequent membership test will definitely return True False positives are possible If an element has not been added to filter membership test may nevertheless indicate that the element is present This module provides low-level control For an easier to use interface see the Data.BloomFilter.Easy module",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "BloomFilter",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Bloom Filter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#t:Bloom",
      "description": {
        "fct-descr": "\u003cp\u003eAn immutable Bloom filter, suitable for querying from pure code.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "data",
        "fct-source": "src/Data-BloomFilter.html#Bloom",
        "fct-type": "data",
        "title": "Bloom"
      },
      "index": {
        "description": "An immutable Bloom filter suitable for querying from pure code",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "Bloom",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Bloom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eA hash value is 32 bits wide.  This limits the maximum size of a\n filter to about four billion elements, or 512 megabytes of memory.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "type",
        "fct-source": "src/Data-BloomFilter.html#Hash",
        "fct-type": "type",
        "title": "Hash"
      },
      "index": {
        "description": "hash value is bits wide This limits the maximum size of filter to about four billion elements or megabytes of memory",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "Hash",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#t:MBloom",
      "description": {
        "fct-descr": "\u003cp\u003eA mutable Bloom filter, for use within the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "data",
        "fct-source": "src/Data-BloomFilter.html#MBloom",
        "fct-type": "data",
        "title": "MBloom"
      },
      "index": {
        "description": "mutable Bloom filter for use within the ST monad",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "MBloom",
        "normalized": "",
        "package": "bloomfilter",
        "partial": "MBloom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:bitArrayB",
      "description": {
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "Bloom a -\u003e UArray Int Hash",
        "fct-source": "src/Data-BloomFilter.html#bitArrayB",
        "fct-type": "function",
        "title": "bitArrayB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "bitArrayB",
        "normalized": "Bloom a-\u003eUArray Int Hash",
        "package": "bloomfilter",
        "partial": "Array",
        "signature": "Bloom a-\u003eUArray Int Hash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:bitArrayMB",
      "description": {
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "MBloom s a -\u003e STUArray s Int Hash",
        "fct-source": "src/Data-BloomFilter.html#bitArrayMB",
        "fct-type": "function",
        "title": "bitArrayMB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "bitArrayMB",
        "normalized": "MBloom a b-\u003eSTUArray a Int Hash",
        "package": "bloomfilter",
        "partial": "Array MB",
        "signature": "MBloom s a-\u003eSTUArray s Int Hash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:createB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an immutable Bloom filter, using the given setup function\n which executes in the \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.BloomFilter.Hash\u003c/a\u003e (cheapHashes)\n\nfilter = createB (cheapHashes 3) 1024 $ mf -\u003e do\n           insertMB mf \"foo\"\n           insertMB mf \"bar\"\n\u003c/pre\u003e\u003cp\u003eNote that the result of the setup function is not used.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e (forall s.  MBloom s a -\u003e ST s z)-\u003e Bloom a",
        "fct-type": "function",
        "title": "createB"
      },
      "index": {
        "description": "Create an immutable Bloom filter using the given setup function which executes in the ST monad Example import Data.BloomFilter.Hash cheapHashes filter createB cheapHashes mf do insertMB mf foo insertMB mf bar Note that the result of the setup function is not used",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "createB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003e(b c MBloom d a-\u003eST d e)-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003e(forall s. MBloom s a-\u003eST s z)-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:elemB",
      "description": {
        "fct-descr": "\u003cp\u003eQuery an immutable Bloom filter for membership.  If the value is\n present, return \u003ccode\u003eTrue\u003c/code\u003e.  If the value is not present, there is\n \u003cem\u003estill\u003c/em\u003e some possibility that \u003ccode\u003eTrue\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Bloom a -\u003e Bool",
        "fct-source": "src/Data-BloomFilter.html#elemB",
        "fct-type": "function",
        "title": "elemB"
      },
      "index": {
        "description": "Query an immutable Bloom filter for membership If the value is present return True If the value is not present there is still some possibility that True will be returned",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "elemB",
        "normalized": "a-\u003eBloom a-\u003eBool",
        "package": "bloomfilter",
        "partial": "",
        "signature": "a-\u003eBloom a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:elemMB",
      "description": {
        "fct-descr": "\u003cp\u003eQuery a mutable Bloom filter for membership.  If the value is\n present, return \u003ccode\u003eTrue\u003c/code\u003e.  If the value is not present, there is\n \u003cem\u003estill\u003c/em\u003e some possibility that \u003ccode\u003eTrue\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e MBloom s a -\u003e ST s Bool",
        "fct-source": "src/Data-BloomFilter.html#elemMB",
        "fct-type": "function",
        "title": "elemMB"
      },
      "index": {
        "description": "Query mutable Bloom filter for membership If the value is present return True If the value is not present there is still some possibility that True will be returned",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "elemMB",
        "normalized": "a-\u003eMBloom b a-\u003eST b Bool",
        "package": "bloomfilter",
        "partial": "MB",
        "signature": "a-\u003eMBloom s a-\u003eST s Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:emptyB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty Bloom filter.\n\u003c/p\u003e\u003cp\u003eThis function is subject to fusion with \u003ccode\u003e\u003ca\u003einsertB\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003einsertListB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e Bloom a",
        "fct-type": "function",
        "title": "emptyB"
      },
      "index": {
        "description": "Create an empty Bloom filter This function is subject to fusion with insertB and insertListB",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "emptyB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:fromListB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an immutable Bloom filter, populating it from a list of\n values.\n\u003c/p\u003e\u003cp\u003eHere is an example that uses the \u003ccode\u003echeapHashes\u003c/code\u003e function from the\n \u003ca\u003eData.BloomFilter.Hash\u003c/a\u003e module to create a hash function that\n returns three hashes.\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eData.BloomFilter.Hash\u003c/a\u003e (cheapHashes)\n\nfilt = fromListB (cheapHashes 3) 1024 [\"foo\", \"bar\", \"quux\"]\n\u003c/pre\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e [a]-\u003e Bloom a",
        "fct-type": "function",
        "title": "fromListB"
      },
      "index": {
        "description": "Create an immutable Bloom filter populating it from list of values Here is an example that uses the cheapHashes function from the Data.BloomFilter.Hash module to create hash function that returns three hashes import Data.BloomFilter.Hash cheapHashes filt fromListB cheapHashes foo bar quux",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "fromListB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003e[a]-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "List",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003e[a]-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:insertB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Bloom filter from an existing one, with the given\n member added.\n\u003c/p\u003e\u003cp\u003eThis function may be expensive, as it is likely to cause the\n underlying bit array to be copied.\n\u003c/p\u003e\u003cp\u003eRepeated applications of this function with itself are subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Bloom a -\u003e Bloom a",
        "fct-source": "src/Data-BloomFilter.html#insertB",
        "fct-type": "function",
        "title": "insertB"
      },
      "index": {
        "description": "Create new Bloom filter from an existing one with the given member added This function may be expensive as it is likely to cause the underlying bit array to be copied Repeated applications of this function with itself are subject to fusion",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "insertB",
        "normalized": "a-\u003eBloom a-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "",
        "signature": "a-\u003eBloom a-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:insertListB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new Bloom filter from an existing one, with the given\n members added.\n\u003c/p\u003e\u003cp\u003eThis function may be expensive, as it is likely to cause the\n underlying bit array to be copied.\n\u003c/p\u003e\u003cp\u003eRepeated applications of this function with itself are subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "[a] -\u003e Bloom a -\u003e Bloom a",
        "fct-source": "src/Data-BloomFilter.html#insertListB",
        "fct-type": "function",
        "title": "insertListB"
      },
      "index": {
        "description": "Create new Bloom filter from an existing one with the given members added This function may be expensive as it is likely to cause the underlying bit array to be copied Repeated applications of this function with itself are subject to fusion",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "insertListB",
        "normalized": "[a]-\u003eBloom a-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "List",
        "signature": "[a]-\u003eBloom a-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:insertMB",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into a mutable Bloom filter.  Afterwards, a\n membership query for the same value is guaranteed to return \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "MBloom s a -\u003e a -\u003e ST s ()",
        "fct-source": "src/Data-BloomFilter.html#insertMB",
        "fct-type": "function",
        "title": "insertMB"
      },
      "index": {
        "description": "Insert value into mutable Bloom filter Afterwards membership query for the same value is guaranteed to return True",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "insertMB",
        "normalized": "MBloom a b-\u003eb-\u003eST a()",
        "package": "bloomfilter",
        "partial": "MB",
        "signature": "MBloom s a-\u003ea-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:lengthB",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of an immutable Bloom filter, in bits.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "Bloom a -\u003e Int",
        "fct-source": "src/Data-BloomFilter.html#lengthB",
        "fct-type": "function",
        "title": "lengthB"
      },
      "index": {
        "description": "Return the size of an immutable Bloom filter in bits",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "lengthB",
        "normalized": "Bloom a-\u003eInt",
        "package": "bloomfilter",
        "partial": "",
        "signature": "Bloom a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:lengthMB",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of a mutable Bloom filter, in bits.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "MBloom s a -\u003e Int",
        "fct-source": "src/Data-BloomFilter.html#lengthMB",
        "fct-type": "function",
        "title": "lengthMB"
      },
      "index": {
        "description": "Return the size of mutable Bloom filter in bits",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "lengthMB",
        "normalized": "MBloom a b-\u003eInt",
        "package": "bloomfilter",
        "partial": "MB",
        "signature": "MBloom s a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:modifyB",
      "description": {
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(forall s.  MBloom s a -\u003e ST s z)-\u003e Bloom a-\u003e Bloom a",
        "fct-type": "function",
        "title": "modifyB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "modifyB",
        "normalized": "(a b MBloom c d-\u003eST c e)-\u003eBloom d-\u003eBloom d",
        "package": "bloomfilter",
        "partial": "",
        "signature": "(forall s. MBloom s a-\u003eST s z)-\u003eBloom a-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:newMB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new mutable Bloom filter.  For efficiency, the number of\n bits used may be larger than the number requested.  It is always\n rounded up to the nearest higher power of two, but clamped at a\n maximum of 4 gigabits, since hashes are 32 bits in size.\n\u003c/p\u003e\u003cp\u003eFor a safer creation interface, use \u003ccode\u003e\u003ca\u003ecreateB\u003c/a\u003e\u003c/code\u003e.  To convert a\n mutable filter to an immutable filter for use in pure code, use\n \u003ccode\u003e\u003ca\u003eunsafeFreezeMB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e ST s (MBloom s a)",
        "fct-type": "function",
        "title": "newMB"
      },
      "index": {
        "description": "Create new mutable Bloom filter For efficiency the number of bits used may be larger than the number requested It is always rounded up to the nearest higher power of two but clamped at maximum of gigabits since hashes are bits in size For safer creation interface use createB To convert mutable filter to an immutable filter for use in pure code use unsafeFreezeMB",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "newMB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003eST b(MBloom b a)",
        "package": "bloomfilter",
        "partial": "MB",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003eST s(MBloom s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:notElemB",
      "description": {
        "fct-descr": "\u003cp\u003eQuery an immutable Bloom filter for non-membership.  If the value\n \u003cem\u003eis\u003c/em\u003e present, return \u003ccode\u003eFalse\u003c/code\u003e.  If the value is not present, there\n is \u003cem\u003estill\u003c/em\u003e some possibility that \u003ccode\u003eTrue\u003c/code\u003e will be returned.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "a -\u003e Bloom a -\u003e Bool",
        "fct-source": "src/Data-BloomFilter.html#notElemB",
        "fct-type": "function",
        "title": "notElemB"
      },
      "index": {
        "description": "Query an immutable Bloom filter for non-membership If the value is present return False If the value is not present there is still some possibility that True will be returned",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "notElemB",
        "normalized": "a-\u003eBloom a-\u003eBool",
        "package": "bloomfilter",
        "partial": "Elem",
        "signature": "a-\u003eBloom a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:singletonB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Bloom filter with a single element.\n\u003c/p\u003e\u003cp\u003eThis function is subject to fusion with \u003ccode\u003e\u003ca\u003einsertB\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003einsertListB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e a-\u003e Bloom a",
        "fct-type": "function",
        "title": "singletonB"
      },
      "index": {
        "description": "Create Bloom filter with single element This function is subject to fusion with insertB and insertListB",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "singletonB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003ea-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003ea-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:thawMB",
      "description": {
        "fct-descr": "\u003cp\u003eCopy an immutable Bloom filter to create a mutable one.  There is\n no non-copying equivalent.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "Bloom a -\u003e ST s (MBloom s a)",
        "fct-source": "src/Data-BloomFilter.html#thawMB",
        "fct-type": "function",
        "title": "thawMB"
      },
      "index": {
        "description": "Copy an immutable Bloom filter to create mutable one There is no non-copying equivalent",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "thawMB",
        "normalized": "Bloom a-\u003eST b(MBloom b a)",
        "package": "bloomfilter",
        "partial": "MB",
        "signature": "Bloom a-\u003eST s(MBloom s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:unfoldB",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an immutable Bloom filter from a seed value.  The seeding\n function populates the filter as follows.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, it is finished producing values to\n     insert into the filter.\n\u003c/li\u003e\u003cli\u003e If it returns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (a,b)\u003c/code\u003e, \u003ccode\u003ea\u003c/code\u003e is added to the filter and\n     \u003ccode\u003eb\u003c/code\u003e is used as a new seed.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "(a -\u003e [Hash])-\u003e Int-\u003e (b -\u003e Maybe (a, b))-\u003e b-\u003e Bloom a",
        "fct-type": "function",
        "title": "unfoldB"
      },
      "index": {
        "description": "Build an immutable Bloom filter from seed value The seeding function populates the filter as follows If it returns Nothing it is finished producing values to insert into the filter If it returns Just is added to the filter and is used as new seed",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "unfoldB",
        "normalized": "(a-\u003e[Hash])-\u003eInt-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBloom a",
        "package": "bloomfilter",
        "partial": "",
        "signature": "(a-\u003e[Hash])-\u003eInt-\u003e(b-\u003eMaybe(a,b))-\u003eb-\u003eBloom a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bloomfilter/docs/Data-BloomFilter.html#v:unsafeFreezeMB",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an immutable Bloom filter from a mutable one.  The mutable\n filter \u003cem\u003emust not\u003c/em\u003e be modified afterwards, or a runtime crash may\n occur.  For a safer creation interface, use \u003ccode\u003e\u003ca\u003ecreateB\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BloomFilter",
        "fct-package": "bloomfilter",
        "fct-signature": "MBloom s a -\u003e ST s (Bloom a)",
        "fct-source": "src/Data-BloomFilter.html#unsafeFreezeMB",
        "fct-type": "function",
        "title": "unsafeFreezeMB"
      },
      "index": {
        "description": "Create an immutable Bloom filter from mutable one The mutable filter must not be modified afterwards or runtime crash may occur For safer creation interface use createB",
        "hierarchy": "Data BloomFilter",
        "module": "Data.BloomFilter",
        "name": "unsafeFreezeMB",
        "normalized": "MBloom a b-\u003eST a(Bloom b)",
        "package": "bloomfilter",
        "partial": "Freeze MB",
        "signature": "MBloom s a-\u003eST s(Bloom a)"
      }
    }
  }
]