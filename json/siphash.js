[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eprovide the SipHash algorithm.\n reference: \u003ca\u003ehttp://131002.net/siphash/siphash.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "module",
        "fct-source": "src/Crypto-MAC-SipHash.html",
        "fct-type": "module",
        "title": "SipHash"
      },
      "index": {
        "description": "provide the SipHash algorithm reference http net siphash siphash.pdf",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "SipHash",
        "normalized": "",
        "package": "siphash",
        "partial": "Sip Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#t:SipHash",
      "description": {
        "fct-descr": "\u003cp\u003eSiphash tag value\n\u003c/p\u003e",
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "newtype",
        "fct-source": "src/Crypto-MAC-SipHash.html#SipHash",
        "fct-type": "newtype",
        "title": "SipHash"
      },
      "index": {
        "description": "Siphash tag value",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "SipHash",
        "normalized": "",
        "package": "siphash",
        "partial": "Sip Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#t:SipKey",
      "description": {
        "fct-descr": "\u003cp\u003eSigHash Key\n\u003c/p\u003e",
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "data",
        "fct-source": "src/Crypto-MAC-SipHash.html#SipKey",
        "fct-type": "data",
        "title": "SipKey"
      },
      "index": {
        "description": "SigHash Key",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "SipKey",
        "normalized": "",
        "package": "siphash",
        "partial": "Sip Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:SipHash",
      "description": {
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "SipHash Word64",
        "fct-source": "src/Crypto-MAC-SipHash.html#SipHash",
        "fct-type": "function",
        "title": "SipHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "SipHash",
        "normalized": "",
        "package": "siphash",
        "partial": "Sip Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:SipKey",
      "description": {
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "SipKey !Word64 !Word64",
        "fct-source": "src/Crypto-MAC-SipHash.html#SipKey",
        "fct-type": "function",
        "title": "SipKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "SipKey",
        "normalized": "",
        "package": "siphash",
        "partial": "Sip Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eproduce a siphash with a key and a bytestring.\n\u003c/p\u003e",
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "SipKey -\u003e ByteString -\u003e SipHash",
        "fct-source": "src/Crypto-MAC-SipHash.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "produce siphash with key and bytestring",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "hash",
        "normalized": "SipKey-\u003eByteString-\u003eSipHash",
        "package": "siphash",
        "partial": "",
        "signature": "SipKey-\u003eByteString-\u003eSipHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/siphash/docs/Crypto-MAC-SipHash.html#v:hashWith",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e, except also specifies the number of sipround iterations for compression and digest.\n\u003c/p\u003e",
        "fct-module": "Crypto.MAC.SipHash",
        "fct-package": "siphash",
        "fct-signature": "Int -\u003e Int -\u003e SipKey -\u003e ByteString -\u003e SipHash",
        "fct-source": "src/Crypto-MAC-SipHash.html#hashWith",
        "fct-type": "function",
        "title": "hashWith"
      },
      "index": {
        "description": "same as hash except also specifies the number of sipround iterations for compression and digest",
        "hierarchy": "Crypto MAC SipHash",
        "module": "Crypto.MAC.SipHash",
        "name": "hashWith",
        "normalized": "Int-\u003eInt-\u003eSipKey-\u003eByteString-\u003eSipHash",
        "package": "siphash",
        "partial": "With",
        "signature": "Int-\u003eInt-\u003eSipKey-\u003eByteString-\u003eSipHash"
      }
    }
  }
]