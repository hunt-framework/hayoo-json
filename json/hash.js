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
        "word": "hash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32",
          "name": "CRC32",
          "package": "hash",
          "source": "src/Data-Hash-CRC32.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Hash CRC32",
          "module": "Data.Hash.CRC32",
          "name": "CRC32",
          "package": "hash",
          "partial": "CRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-CRC32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32",
          "name": "CRC32",
          "package": "hash",
          "source": "src/Data-Hash-CRC32.html#CRC32",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Hash CRC32",
          "module": "Data.Hash.CRC32",
          "name": "CRC32",
          "package": "hash",
          "partial": "CRC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-CRC32.html#t:CRC32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32",
          "name": "final",
          "package": "hash",
          "signature": "CRC32 -\u003e Word32",
          "source": "src/Data-Hash-CRC32.html#final",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32",
          "module": "Data.Hash.CRC32",
          "name": "final",
          "normalized": "CRC-\u003eWord",
          "package": "hash",
          "signature": "CRC-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-CRC32.html#v:final"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.CRC32",
          "name": "updated",
          "package": "hash",
          "signature": "Getting (Endo (Endo CRC32)) t Word8 -\u003e t -\u003e CRC32 -\u003e CRC32",
          "source": "src/Data-Hash-CRC32.html#updated",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash CRC32",
          "module": "Data.Hash.CRC32",
          "name": "updated",
          "normalized": "Getting(Endo(Endo CRC))a Word-\u003ea-\u003eCRC-\u003eCRC",
          "package": "hash",
          "signature": "Getting(Endo(Endo CRC))t Word-\u003et-\u003eCRC-\u003eCRC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-CRC32.html#v:updated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Double",
          "name": "Double",
          "package": "hash",
          "source": "src/Data-Hash-Double.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Hash Double",
          "module": "Data.Hash.Double",
          "name": "Double",
          "package": "hash",
          "partial": "Double",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Double.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Less Hashing, Same Performance: Building a Better Bloom Filter\" by\n Kirsch and Mitzenmacher demonstrated that for many use-cases, especially\n involving Bloom filters, we can use pairwise independent hashes to\n generate a family of related hash functions with good characteristics.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.eecs.harvard.edu/~kirsch/pubs/bbbf/rsa.pdf\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis stores a pair of hashes.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esip (42 :: Int)^..taking 4 each\n\u003c/code\u003e\u003c/strong\u003e[-2574874314062730062,-9186383815474761572,2648850756822758536,-3962658744589272970]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esip (42 :: Int)^.ix 3\n\u003c/code\u003e\u003c/strong\u003e-3962658744589272970\n\u003c/pre\u003e",
          "module": "Data.Hash.Double",
          "name": "Hash",
          "package": "hash",
          "source": "src/Data-Hash-Double.html#Hash",
          "type": "data"
        },
        "index": {
          "description": "Less Hashing Same Performance Building Better Bloom Filter by Kirsch and Mitzenmacher demonstrated that for many use-cases especially involving Bloom filters we can use pairwise independent hashes to generate family of related hash functions with good characteristics http www.eecs.harvard.edu kirsch pubs bbbf rsa.pdf This stores pair of hashes sip Int taking each sip Int ix",
          "hierarchy": "Data Hash Double",
          "module": "Data.Hash.Double",
          "name": "Hash",
          "package": "hash",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Double.html#t:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Double",
          "name": "Hash",
          "package": "hash",
          "signature": "Hash !Int !Int",
          "source": "src/Data-Hash-Double.html#Hash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Double",
          "module": "Data.Hash.Double",
          "name": "Hash",
          "package": "hash",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Double.html#v:Hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Double",
          "name": "pepper",
          "package": "hash",
          "signature": "Int",
          "source": "src/Data-Hash-Double.html#pepper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Double",
          "module": "Data.Hash.Double",
          "name": "pepper",
          "package": "hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Double.html#v:pepper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Double",
          "name": "sip",
          "package": "hash",
          "signature": "a -\u003e Hash",
          "source": "src/Data-Hash-Double.html#sip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Hash Double",
          "module": "Data.Hash.Double",
          "name": "sip",
          "normalized": "a-\u003eHash",
          "package": "hash",
          "signature": "a-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Double.html#v:sip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Hash.Rolling",
          "name": "Rolling",
          "package": "hash",
          "source": "src/Data-Hash-Rolling.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "Rolling",
          "package": "hash",
          "partial": "Rolling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Rolling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and generate a new lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with chunks based on a rolling\n hash. This generates chunks with an expected size of 8k, where the sizes vary between 128 bytes and 64k each.\n and the breakpoints are based on moments where a rolling hash function applied to the last 128 bytes of the\n input matches a mask.\n\u003c/p\u003e\u003cp\u003eThis can be used with various chunk hashing schemes to allow hashing that is fairly robust in the\n presence of inline insertions and deletions.\n\u003c/p\u003e\u003cp\u003eThe rolling hash is based on the ideas from \u003ccode\u003ebuzhash\u003c/code\u003e, but since we have a known window size that is an\n integral multiple of the word size we save work.\n\u003c/p\u003e",
          "module": "Data.Hash.Rolling",
          "name": "roll",
          "package": "hash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Hash-Rolling.html#roll",
          "type": "function"
        },
        "index": {
          "description": "Take strict ByteString and generate new lazy ByteString with chunks based on rolling hash This generates chunks with an expected size of where the sizes vary between bytes and each and the breakpoints are based on moments where rolling hash function applied to the last bytes of the input matches mask This can be used with various chunk hashing schemes to allow hashing that is fairly robust in the presence of inline insertions and deletions The rolling hash is based on the ideas from buzhash but since we have known window size that is an integral multiple of the word size we save work",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "roll",
          "normalized": "ByteString-\u003eByteString",
          "package": "hash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Rolling.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and generate a new \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e with chunks based on a rolling\n hash. This generates chunks with an expected size of 8k, where the sizes vary between 128 bytes and 64k each.\n and the breakpoints are based on moments where a rolling hash function applied to the last 128 bytes of the\n input matches a mask.\n\u003c/p\u003e\u003cp\u003eThis can be used with various chunk hashing schemes to allow hashing that is fairly robust in the\n presence of inline insertions and deletions.\n\u003c/p\u003e\u003cp\u003eThis scheme is based on the standard Rabin-Karp rolling checksum. It is much slower than \u003ccode\u003erolling\u003c/code\u003e, but\n is provided here for comparison purposes.\n\u003c/p\u003e",
          "module": "Data.Hash.Rolling",
          "name": "roll'",
          "package": "hash",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Data-Hash-Rolling.html#roll%27",
          "type": "function"
        },
        "index": {
          "description": "Take ByteString and generate new ByteString with chunks based on rolling hash This generates chunks with an expected size of where the sizes vary between bytes and each and the breakpoints are based on moments where rolling hash function applied to the last bytes of the input matches mask This can be used with various chunk hashing schemes to allow hashing that is fairly robust in the presence of inline insertions and deletions This scheme is based on the standard Rabin-Karp rolling checksum It is much slower than rolling but is provided here for comparison purposes",
          "hierarchy": "Data Hash Rolling",
          "module": "Data.Hash.Rolling",
          "name": "roll'",
          "normalized": "ByteString-\u003eByteString",
          "package": "hash",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hash/docs/Data-Hash-Rolling.html#v:roll-39-"
      }
    }
  ]
]