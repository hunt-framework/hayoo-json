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
        "word": "xxhash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a pure implementation of the xxHash algorithm.\n\u003c/p\u003e\u003cp\u003eThis implementation is almost as fast as the C version, which is avaliable\n as c_xxHash'.\n\u003c/p\u003e\u003cp\u003eCriterion benchmarks are avaliable via cabal bench.\n\u003c/p\u003e\u003cp\u003eMore information on the algorithm may be found here:\n \u003ca\u003ehttps://code.google.com/p/xxhash/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.XXHash",
          "name": "XXHash",
          "package": "xxhash",
          "source": "src/Data-Digest-XXHash.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides pure implementation of the xxHash algorithm This implementation is almost as fast as the version which is avaliable as xxHash Criterion benchmarks are avaliable via cabal bench More information on the algorithm may be found here https code.google.com xxhash",
          "hierarchy": "Data Digest XXHash",
          "module": "Data.Digest.XXHash",
          "name": "XXHash",
          "package": "xxhash",
          "partial": "XXHash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xxhash/docs/Data-Digest-XXHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.XXHash",
          "name": "XXHash",
          "package": "xxhash",
          "source": "src/Data-Digest-XXHash.html#XXHash",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Digest XXHash",
          "module": "Data.Digest.XXHash",
          "name": "XXHash",
          "package": "xxhash",
          "partial": "XXHash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xxhash/docs/Data-Digest-XXHash.html#t:XXHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a strict ByteString using the C implementation, the length of the\n ByteString should be limited to 2^31-1 or the results will be invalid.\n\u003c/p\u003e\u003cp\u003eThis is mostly used internally for benchmarking and verification. It's use\n in production is not recommended.\n\u003c/p\u003e",
          "module": "Data.Digest.XXHash",
          "name": "c_xxHash'",
          "package": "xxhash",
          "signature": "ByteString -\u003e XXHash",
          "source": "src/Data-Digest-XXHash.html#c_xxHash%27",
          "type": "function"
        },
        "index": {
          "description": "Hash strict ByteString using the implementation the length of the ByteString should be limited to or the results will be invalid This is mostly used internally for benchmarking and verification It use in production is not recommended",
          "hierarchy": "Data Digest XXHash",
          "module": "Data.Digest.XXHash",
          "name": "c_xxHash'",
          "normalized": "ByteString-\u003eXXHash",
          "package": "xxhash",
          "partial": "Hash'",
          "signature": "ByteString-\u003eXXHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xxhash/docs/Data-Digest-XXHash.html#v:c_xxHash-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a lazy ByteString.\n\u003c/p\u003e",
          "module": "Data.Digest.XXHash",
          "name": "xxHash",
          "package": "xxhash",
          "signature": "ByteString -\u003e XXHash",
          "source": "src/Data-Digest-XXHash.html#xxHash",
          "type": "function"
        },
        "index": {
          "description": "Hash lazy ByteString",
          "hierarchy": "Data Digest XXHash",
          "module": "Data.Digest.XXHash",
          "name": "xxHash",
          "normalized": "ByteString-\u003eXXHash",
          "package": "xxhash",
          "partial": "Hash",
          "signature": "ByteString-\u003eXXHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xxhash/docs/Data-Digest-XXHash.html#v:xxHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a strict ByteString.\n\u003c/p\u003e",
          "module": "Data.Digest.XXHash",
          "name": "xxHash'",
          "package": "xxhash",
          "signature": "ByteString -\u003e XXHash",
          "source": "src/Data-Digest-XXHash.html#xxHash%27",
          "type": "function"
        },
        "index": {
          "description": "Hash strict ByteString",
          "hierarchy": "Data Digest XXHash",
          "module": "Data.Digest.XXHash",
          "name": "xxHash'",
          "normalized": "ByteString-\u003eXXHash",
          "package": "xxhash",
          "partial": "Hash'",
          "signature": "ByteString-\u003eXXHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xxhash/docs/Data-Digest-XXHash.html#v:xxHash-39-"
      }
    }
  ]
]