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
        "word": "cityhash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a binding to the CityHash family of hashing\n functions. You can find more information here:\n \u003ca\u003ehttp://code.google.com/p/cityhash/\u003c/a\u003e. It implements both the 64-bit\n and 128-bit interfaces, with seed functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.CityHash",
          "name": "CityHash",
          "package": "cityhash",
          "source": "src/Data-Digest-CityHash.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements binding to the CityHash family of hashing functions You can find more information here http code.google.com cityhash It implements both the bit and bit interfaces with seed functionality",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "CityHash",
          "package": "cityhash",
          "partial": "City Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function for a byte array.\n\u003c/p\u003e",
          "module": "Data.Digest.CityHash",
          "name": "cityHash128",
          "package": "cityhash",
          "signature": "ByteString -\u003e Word128",
          "source": "src/Data-Digest-CityHash.html#cityHash128",
          "type": "function"
        },
        "index": {
          "description": "Hash function for byte array",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "cityHash128",
          "normalized": "ByteString-\u003eWord",
          "package": "cityhash",
          "partial": "Hash",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#v:cityHash128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function for a byte array.  For convenience, a 128-bit seed is also\n hashed into the result.\n\u003c/p\u003e",
          "module": "Data.Digest.CityHash",
          "name": "cityHash128WithSeed",
          "package": "cityhash",
          "signature": "ByteString -\u003e Word128 -\u003e Word128",
          "source": "src/Data-Digest-CityHash.html#cityHash128WithSeed",
          "type": "function"
        },
        "index": {
          "description": "Hash function for byte array For convenience bit seed is also hashed into the result",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "cityHash128WithSeed",
          "normalized": "ByteString-\u003eWord-\u003eWord",
          "package": "cityhash",
          "partial": "Hash With Seed",
          "signature": "ByteString-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#v:cityHash128WithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function for a byte array.\n\u003c/p\u003e",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64",
          "package": "cityhash",
          "signature": "ByteString -\u003e Word64",
          "source": "src/Data-Digest-CityHash.html#cityHash64",
          "type": "function"
        },
        "index": {
          "description": "Hash function for byte array",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64",
          "normalized": "ByteString-\u003eWord",
          "package": "cityhash",
          "partial": "Hash",
          "signature": "ByteString-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#v:cityHash64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function for a byte array.  For convenience, a 64-bit seed is also\n hashed into the result.\n\u003c/p\u003e",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64WithSeed",
          "package": "cityhash",
          "signature": "ByteString -\u003e Word64 -\u003e Word64",
          "source": "src/Data-Digest-CityHash.html#cityHash64WithSeed",
          "type": "function"
        },
        "index": {
          "description": "Hash function for byte array For convenience bit seed is also hashed into the result",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64WithSeed",
          "normalized": "ByteString-\u003eWord-\u003eWord",
          "package": "cityhash",
          "partial": "Hash With Seed",
          "signature": "ByteString-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#v:cityHash64WithSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash function for a byte array.  For convenience, two seeds are also\n hashed into the result.\n\u003c/p\u003e",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64WithSeeds",
          "package": "cityhash",
          "signature": "ByteString -\u003e Word64 -\u003e Word64 -\u003e Word64",
          "source": "src/Data-Digest-CityHash.html#cityHash64WithSeeds",
          "type": "function"
        },
        "index": {
          "description": "Hash function for byte array For convenience two seeds are also hashed into the result",
          "hierarchy": "Data Digest CityHash",
          "module": "Data.Digest.CityHash",
          "name": "cityHash64WithSeeds",
          "normalized": "ByteString-\u003eWord-\u003eWord-\u003eWord",
          "package": "cityhash",
          "partial": "Hash With Seeds",
          "signature": "ByteString-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cityhash/docs/Data-Digest-CityHash.html#v:cityHash64WithSeeds"
      }
    }
  ]
]