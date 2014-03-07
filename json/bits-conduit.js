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
        "word": "bits-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.Bits",
          "name": "Bits",
          "package": "bits-conduit",
          "source": "src/Data-Conduit-Bits.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit Bits",
          "module": "Data.Conduit.Bits",
          "name": "Bits",
          "package": "bits-conduit",
          "partial": "Bits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bits-conduit/docs/Data-Conduit-Bits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eawait specified amount of bits (LSB first)\n\u003c/p\u003e",
          "module": "Data.Conduit.Bits",
          "name": "awaitBits",
          "package": "bits-conduit",
          "signature": "Int -\u003e GSink Bool m (Maybe b)",
          "source": "src/Data-Conduit-Bits.html#awaitBits",
          "type": "function"
        },
        "index": {
          "description": "await specified amount of bits LSB first",
          "hierarchy": "Data Conduit Bits",
          "module": "Data.Conduit.Bits",
          "name": "awaitBits",
          "normalized": "Int-\u003eGSink Bool a(Maybe b)",
          "package": "bits-conduit",
          "partial": "Bits",
          "signature": "Int-\u003eGSink Bool m(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits-conduit/docs/Data-Conduit-Bits.html#v:awaitBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitstream decoder\n\u003c/p\u003e",
          "module": "Data.Conduit.Bits",
          "name": "decodeBits",
          "package": "bits-conduit",
          "signature": "GLConduit ByteString m Bool",
          "source": "src/Data-Conduit-Bits.html#decodeBits",
          "type": "function"
        },
        "index": {
          "description": "Bitstream decoder",
          "hierarchy": "Data Conduit Bits",
          "module": "Data.Conduit.Bits",
          "name": "decodeBits",
          "package": "bits-conduit",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits-conduit/docs/Data-Conduit-Bits.html#v:decodeBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitstream encoder\n\u003c/p\u003e",
          "module": "Data.Conduit.Bits",
          "name": "encodeBits",
          "package": "bits-conduit",
          "signature": "GConduit Bool m ByteString",
          "source": "src/Data-Conduit-Bits.html#encodeBits",
          "type": "function"
        },
        "index": {
          "description": "Bitstream encoder",
          "hierarchy": "Data Conduit Bits",
          "module": "Data.Conduit.Bits",
          "name": "encodeBits",
          "package": "bits-conduit",
          "partial": "Bits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits-conduit/docs/Data-Conduit-Bits.html#v:encodeBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYields specified amount of bits (LSB first)\n\u003c/p\u003e",
          "module": "Data.Conduit.Bits",
          "name": "yieldBits",
          "package": "bits-conduit",
          "signature": "b -\u003e Int -\u003e GSource m Bool",
          "source": "src/Data-Conduit-Bits.html#yieldBits",
          "type": "function"
        },
        "index": {
          "description": "Yields specified amount of bits LSB first",
          "hierarchy": "Data Conduit Bits",
          "module": "Data.Conduit.Bits",
          "name": "yieldBits",
          "normalized": "a-\u003eInt-\u003eGSource b Bool",
          "package": "bits-conduit",
          "partial": "Bits",
          "signature": "b-\u003eInt-\u003eGSource m Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bits-conduit/docs/Data-Conduit-Bits.html#v:yieldBits"
      }
    }
  ]
]