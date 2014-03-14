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
        "word": "siphash"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eprovide the SipHash algorithm.\n reference: \u003ca\u003ehttp://131002.net/siphash/siphash.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "source": "src/Crypto-MAC-SipHash.html",
          "type": "module"
        },
        "index": {
          "description": "provide the SipHash algorithm reference http net siphash siphash.pdf",
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "partial": "Sip Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSiphash tag value\n\u003c/p\u003e",
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "source": "src/Crypto-MAC-SipHash.html#SipHash",
          "type": "newtype"
        },
        "index": {
          "description": "Siphash tag value",
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "partial": "Sip Hash",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#t:SipHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigHash Key\n\u003c/p\u003e",
          "module": "Crypto.MAC.SipHash",
          "name": "SipKey",
          "package": "siphash",
          "source": "src/Crypto-MAC-SipHash.html#SipKey",
          "type": "data"
        },
        "index": {
          "description": "SigHash Key",
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "SipKey",
          "package": "siphash",
          "partial": "Sip Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#t:SipKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "signature": "SipHash Word64",
          "source": "src/Crypto-MAC-SipHash.html#SipHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "SipHash",
          "package": "siphash",
          "partial": "Sip Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:SipHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.MAC.SipHash",
          "name": "SipKey",
          "package": "siphash",
          "signature": "SipKey !Word64 !Word64",
          "source": "src/Crypto-MAC-SipHash.html#SipKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "SipKey",
          "package": "siphash",
          "partial": "Sip Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:SipKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproduce a siphash with a key and a bytestring.\n\u003c/p\u003e",
          "module": "Crypto.MAC.SipHash",
          "name": "hash",
          "package": "siphash",
          "signature": "SipKey -\u003e ByteString -\u003e SipHash",
          "source": "src/Crypto-MAC-SipHash.html#hash",
          "type": "function"
        },
        "index": {
          "description": "produce siphash with key and bytestring",
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "hash",
          "normalized": "SipKey-\u003eByteString-\u003eSipHash",
          "package": "siphash",
          "signature": "SipKey-\u003eByteString-\u003eSipHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e, except also specifies the number of sipround iterations for compression and digest.\n\u003c/p\u003e",
          "module": "Crypto.MAC.SipHash",
          "name": "hashWith",
          "package": "siphash",
          "signature": "Int -\u003e Int -\u003e SipKey -\u003e ByteString -\u003e SipHash",
          "source": "src/Crypto-MAC-SipHash.html#hashWith",
          "type": "function"
        },
        "index": {
          "description": "same as hash except also specifies the number of sipround iterations for compression and digest",
          "hierarchy": "Crypto MAC SipHash",
          "module": "Crypto.MAC.SipHash",
          "name": "hashWith",
          "normalized": "Int-\u003eInt-\u003eSipKey-\u003eByteString-\u003eSipHash",
          "package": "siphash",
          "partial": "With",
          "signature": "Int-\u003eInt-\u003eSipKey-\u003eByteString-\u003eSipHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:hashWith"
      }
    }
  ]
]