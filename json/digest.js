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
        "word": "digest"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdler32 wrapper\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.Adler32",
          "name": "Adler32",
          "package": "digest",
          "source": "src/Data-Digest-Adler32.html",
          "type": "module"
        },
        "index": {
          "description": "Adler32 wrapper",
          "hierarchy": "Data Digest Adler32",
          "module": "Data.Digest.Adler32",
          "name": "Adler32",
          "package": "digest",
          "partial": "Adler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-Adler32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of values for which Adler32 may be computed\n\u003c/p\u003e",
          "module": "Data.Digest.Adler32",
          "name": "Adler32",
          "package": "digest",
          "source": "src/Data-Digest-Adler32.html#Adler32",
          "type": "class"
        },
        "index": {
          "description": "The class of values for which Adler32 may be computed",
          "hierarchy": "Data Digest Adler32",
          "module": "Data.Digest.Adler32",
          "name": "Adler32",
          "package": "digest",
          "partial": "Adler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-Adler32.html#t:Adler32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute Adler32 checksum\n\u003c/p\u003e",
          "module": "Data.Digest.Adler32",
          "name": "adler32",
          "package": "digest",
          "signature": "a -\u003e Word32",
          "source": "src/Data-Digest-Adler32.html#adler32",
          "type": "method"
        },
        "index": {
          "description": "Compute Adler32 checksum",
          "hierarchy": "Data Digest Adler32",
          "module": "Data.Digest.Adler32",
          "name": "adler32",
          "normalized": "a-\u003eWord",
          "package": "digest",
          "signature": "a-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-Adler32.html#v:adler32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the Adler32 checksum of a string, compute Adler32 of its\n concatenation with another string (t.i., incrementally update the \n Adler32 hash value).\n\u003c/p\u003e",
          "module": "Data.Digest.Adler32",
          "name": "adler32Update",
          "package": "digest",
          "signature": "Word32 -\u003e a -\u003e Word32",
          "source": "src/Data-Digest-Adler32.html#adler32Update",
          "type": "method"
        },
        "index": {
          "description": "Given the Adler32 checksum of string compute Adler32 of its concatenation with another string t.i incrementally update the Adler32 hash value",
          "hierarchy": "Data Digest Adler32",
          "module": "Data.Digest.Adler32",
          "name": "adler32Update",
          "normalized": "Word-\u003ea-\u003eWord",
          "package": "digest",
          "partial": "Update",
          "signature": "Word-\u003ea-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-Adler32.html#v:adler32Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCRC32 wrapper\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.CRC32",
          "name": "CRC32",
          "package": "digest",
          "source": "src/Data-Digest-CRC32.html",
          "type": "module"
        },
        "index": {
          "description": "CRC32 wrapper",
          "hierarchy": "Data Digest CRC32",
          "module": "Data.Digest.CRC32",
          "name": "CRC32",
          "package": "digest",
          "partial": "CRC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-CRC32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of values for which CRC32 may be computed\n\u003c/p\u003e",
          "module": "Data.Digest.CRC32",
          "name": "CRC32",
          "package": "digest",
          "source": "src/Data-Digest-CRC32.html#CRC32",
          "type": "class"
        },
        "index": {
          "description": "The class of values for which CRC32 may be computed",
          "hierarchy": "Data Digest CRC32",
          "module": "Data.Digest.CRC32",
          "name": "CRC32",
          "package": "digest",
          "partial": "CRC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-CRC32.html#t:CRC32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute CRC32 checksum\n\u003c/p\u003e",
          "module": "Data.Digest.CRC32",
          "name": "crc32",
          "package": "digest",
          "signature": "a -\u003e Word32",
          "source": "src/Data-Digest-CRC32.html#crc32",
          "type": "method"
        },
        "index": {
          "description": "Compute CRC32 checksum",
          "hierarchy": "Data Digest CRC32",
          "module": "Data.Digest.CRC32",
          "name": "crc32",
          "normalized": "a-\u003eWord",
          "package": "digest",
          "signature": "a-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-CRC32.html#v:crc32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the CRC32 checksum of a string, compute CRC32 of its\n concatenation with another string (t.i., incrementally update \n the CRC32 hash value)\n\u003c/p\u003e",
          "module": "Data.Digest.CRC32",
          "name": "crc32Update",
          "package": "digest",
          "signature": "Word32 -\u003e a -\u003e Word32",
          "source": "src/Data-Digest-CRC32.html#crc32Update",
          "type": "method"
        },
        "index": {
          "description": "Given the CRC32 checksum of string compute CRC32 of its concatenation with another string t.i incrementally update the CRC32 hash value",
          "hierarchy": "Data Digest CRC32",
          "module": "Data.Digest.CRC32",
          "name": "crc32Update",
          "normalized": "Word-\u003ea-\u003eWord",
          "package": "digest",
          "partial": "Update",
          "signature": "Word-\u003ea-\u003eWord",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/digest/docs/Data-Digest-CRC32.html#v:crc32Update"
      }
    }
  ]
]