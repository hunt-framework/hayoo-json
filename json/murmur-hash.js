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
        "word": "murmur-hash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType class and primitives for constructing 32 bit hashes using the\nMurmurHash2 algorithm.  See \u003ca\u003ehttp://murmurhash.googlepages.com\u003c/a\u003e for\ndetails on MurmurHash2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "Murmur32",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur32.html",
          "type": "module"
        },
        "index": {
          "description": "Type class and primitives for constructing bit hashes using the MurmurHash2 algorithm See http murmurhash.googlepages.com for details on MurmurHash2",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "Murmur32",
          "package": "murmur-hash",
          "partial": "Murmur",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 32 bit hash.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "Hash32",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur32.html#Hash32",
          "type": "data"
        },
        "index": {
          "description": "bit hash",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "Hash32",
          "package": "murmur-hash",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#t:Hash32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstance for\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "Hashable32",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur32.html#Hashable32",
          "type": "class"
        },
        "index": {
          "description": "Instance for",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "Hashable32",
          "package": "murmur-hash",
          "partial": "Hashable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#t:Hashable32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract 32 bit word from hash.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "asWord32",
          "package": "murmur-hash",
          "signature": "Hash32 -\u003e Word32",
          "source": "src/Data-Digest-Murmur32.html#asWord32",
          "type": "function"
        },
        "index": {
          "description": "Extract bit word from hash",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "asWord32",
          "normalized": "Hash-\u003eWord",
          "package": "murmur-hash",
          "partial": "Word",
          "signature": "Hash-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:asWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a hash using the default seed.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "hash32",
          "package": "murmur-hash",
          "signature": "a -\u003e Hash32",
          "source": "src/Data-Digest-Murmur32.html#hash32",
          "type": "function"
        },
        "index": {
          "description": "Create hash using the default seed",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "hash32",
          "normalized": "a-\u003eHash",
          "package": "murmur-hash",
          "signature": "a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:hash32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur32",
          "name": "hash32Add",
          "package": "murmur-hash",
          "signature": "a -\u003e Hash32 -\u003e Hash32",
          "source": "src/Data-Digest-Murmur32.html#hash32Add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "hash32Add",
          "normalized": "a-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add",
          "signature": "a-\u003eHash-\u003eHash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:hash32Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur32",
          "name": "hash32AddInt",
          "package": "murmur-hash",
          "signature": "Int -\u003e Hash32 -\u003e Hash32",
          "source": "src/Data-Digest-Murmur32.html#hash32AddInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "hash32AddInt",
          "normalized": "Int-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add Int",
          "signature": "Int-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:hash32AddInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur32",
          "name": "hash32AddWord32",
          "package": "murmur-hash",
          "signature": "Word32 -\u003e Hash32 -\u003e Hash32",
          "source": "src/Data-Digest-Murmur32.html#hash32AddWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "hash32AddWord32",
          "normalized": "Word-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add Word",
          "signature": "Word-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:hash32AddWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a hash using a custom seed.\n\u003c/p\u003e\u003cp\u003eThe seed should be non-zero, but other than that can be an\n arbitrary number.  Different seeds will give different hashes, and\n thus (most likely) different hash collisions.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur32",
          "name": "hash32WithSeed",
          "package": "murmur-hash",
          "signature": "Word32 -\u003e a -\u003e Hash32",
          "source": "src/Data-Digest-Murmur32.html#hash32WithSeed",
          "type": "function"
        },
        "index": {
          "description": "Create hash using custom seed The seed should be non-zero but other than that can be an arbitrary number Different seeds will give different hashes and thus most likely different hash collisions",
          "hierarchy": "Data Digest Murmur32",
          "module": "Data.Digest.Murmur32",
          "name": "hash32WithSeed",
          "normalized": "Word-\u003ea-\u003eHash",
          "package": "murmur-hash",
          "partial": "With Seed",
          "signature": "Word-\u003ea-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur32.html#v:hash32WithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType class and primitives for constructing 64 bit hashes using the\nMurmurHash2 algorithm.  See \u003ca\u003ehttp://murmurhash.googlepages.com\u003c/a\u003e for\ndetails on MurmurHash2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "Murmur64",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur64.html",
          "type": "module"
        },
        "index": {
          "description": "Type class and primitives for constructing bit hashes using the MurmurHash2 algorithm See http murmurhash.googlepages.com for details on MurmurHash2",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "Murmur64",
          "package": "murmur-hash",
          "partial": "Murmur",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 64 bit hash.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "Hash64",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur64.html#Hash64",
          "type": "data"
        },
        "index": {
          "description": "bit hash",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "Hash64",
          "package": "murmur-hash",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#t:Hash64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur64",
          "name": "Hashable64",
          "package": "murmur-hash",
          "source": "src/Data-Digest-Murmur64.html#Hashable64",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "Hashable64",
          "package": "murmur-hash",
          "partial": "Hashable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#t:Hashable64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract 64 bit word from hash.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "asWord64",
          "package": "murmur-hash",
          "signature": "Hash64 -\u003e Word64",
          "source": "src/Data-Digest-Murmur64.html#asWord64",
          "type": "function"
        },
        "index": {
          "description": "Extract bit word from hash",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "asWord64",
          "normalized": "Hash-\u003eWord",
          "package": "murmur-hash",
          "partial": "Word",
          "signature": "Hash-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:asWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two hash generators.  E.g.,\n\u003c/p\u003e\u003cpre\u003e\n   hashFoo (Foo a) = hash64AddInt 1 \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e hash64Add a\n\u003c/pre\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "combine",
          "package": "murmur-hash",
          "signature": "(Hash64 -\u003e Hash64) -\u003e (Hash64 -\u003e Hash64) -\u003e Hash64 -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two hash generators E.g hashFoo Foo hash64AddInt combine hash64Add",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "combine",
          "normalized": "(Hash-\u003eHash)-\u003e(Hash-\u003eHash)-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "signature": "(Hash-\u003eHash)-\u003e(Hash-\u003eHash)-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a hash using the default seed.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "hash64",
          "package": "murmur-hash",
          "signature": "a -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#hash64",
          "type": "function"
        },
        "index": {
          "description": "Create hash using the default seed",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "hash64",
          "normalized": "a-\u003eHash",
          "package": "murmur-hash",
          "signature": "a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:hash64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur64",
          "name": "hash64Add",
          "package": "murmur-hash",
          "signature": "a -\u003e Hash64 -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#hash64Add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "hash64Add",
          "normalized": "a-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add",
          "signature": "a-\u003eHash-\u003eHash",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:hash64Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.Murmur64",
          "name": "hash64AddInt",
          "package": "murmur-hash",
          "signature": "Int -\u003e Hash64 -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#hash64AddInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "hash64AddInt",
          "normalized": "Int-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add Int",
          "signature": "Int-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:hash64AddInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a 64 bit word to the hash.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "hash64AddWord64",
          "package": "murmur-hash",
          "signature": "Word64 -\u003e Hash64 -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#hash64AddWord64",
          "type": "function"
        },
        "index": {
          "description": "Add bit word to the hash",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "hash64AddWord64",
          "normalized": "Word-\u003eHash-\u003eHash",
          "package": "murmur-hash",
          "partial": "Add Word",
          "signature": "Word-\u003eHash-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:hash64AddWord64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a hash using a custom seed.\nh\n The seed should be non-zero, but other than that can be an\n arbitrary number.  Different seeds will give different hashes, and\n thus (most likely) different hash collisions.\n\u003c/p\u003e",
          "module": "Data.Digest.Murmur64",
          "name": "hash64WithSeed",
          "package": "murmur-hash",
          "signature": "Word64 -\u003e a -\u003e Hash64",
          "source": "src/Data-Digest-Murmur64.html#hash64WithSeed",
          "type": "function"
        },
        "index": {
          "description": "Create hash using custom seed The seed should be non-zero but other than that can be an arbitrary number Different seeds will give different hashes and thus most likely different hash collisions",
          "hierarchy": "Data Digest Murmur64",
          "module": "Data.Digest.Murmur64",
          "name": "hash64WithSeed",
          "normalized": "Word-\u003ea-\u003eHash",
          "package": "murmur-hash",
          "partial": "With Seed",
          "signature": "Word-\u003ea-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/murmur-hash/docs/Data-Digest-Murmur64.html#v:hash64WithSeed"
      }
    }
  ]
]