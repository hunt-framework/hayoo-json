[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-CCM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(This is not a binding to nettle; it is implemented in pure haskell)\n\u003c/p\u003e\u003cp\u003eThis module adds CCM support to all 128-bit block ciphers:\n\u003c/p\u003e\u003cpre\u003eaeadInit AEAD_CCM = ccmInitTLS\u003c/pre\u003e\u003cp\u003eCCM uses 2 parameters t and q: t is the tag length (2,4,6,8,10,12,14,16) and q (2..8) is the\n length in bytes that the length of the message is stored in (and the length of the\n counter variable).\n Maximum message length is \u003ccode\u003e2^(8*q) - 1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCCM requires a nonce of length (15 - q). TLS uses CCM with \u003ccode\u003et = 16\u003c/code\u003e and \u003ccode\u003eq = 3\u003c/code\u003e,\n and a nonce length of 12 (the first 4 bytes are fixed from the handshake, the other 8\n usually represent the sequence counter).\n\u003c/p\u003e\u003cp\u003eCCM encrypts with a CTR mode, the start IV is based on the (t,q,nonce) parameters;\n the tag is encrypted with counter value = 0, then the message follows.\n\u003c/p\u003e\u003cp\u003eCalculating the tag needs the message length first - so this implementation needs\n to gather all data before calculating it.\n\u003c/p\u003e\u003cp\u003eIn RFC 3610 \u003ccode\u003et\u003c/code\u003e is called \u003ccode\u003eM\u003c/code\u003e, and \u003ccode\u003eq\u003c/code\u003e is called \u003ccode\u003eL\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.CCM",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-CCM.html",
        "fct-type": "module",
        "title": "CCM"
      },
      "index": {
        "description": "This is not binding to nettle it is implemented in pure haskell This module adds CCM support to all bit block ciphers aeadInit AEAD CCM ccmInitTLS CCM uses parameters and is the tag length and is the length in bytes that the length of the message is stored in and the length of the counter variable Maximum message length is CCM requires nonce of length TLS uses CCM with and and nonce length of the first bytes are fixed from the handshake the other usually represent the sequence counter CCM encrypts with CTR mode the start IV is based on the nonce parameters the tag is encrypted with counter value then the message follows Calculating the tag needs the message length first so this implementation needs to gather all data before calculating it In RFC is called and is called",
        "hierarchy": "Crypto Nettle CCM",
        "module": "Crypto.Nettle.CCM",
        "name": "CCM",
        "normalized": "",
        "package": "nettle",
        "partial": "CCM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-CCM.html#v:ccmInit",
      "description": {
        "fct-descr": "\u003cp\u003eStart a CCM encryption with specified tag length \u003ccode\u003et\u003c/code\u003e, length \u003ccode\u003eq\u003c/code\u003e of the message length field and a \u003ccode\u003e15-q\u003c/code\u003e bytes long \u003ccode\u003enonce\u003c/code\u003e.\nFails if any parameter is invalid or the block cipher doesn't use a 16-byte \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.CCM",
        "fct-package": "nettle",
        "fct-signature": "Int-\u003e Int-\u003e cipher-\u003e iv-\u003e Maybe (AEAD cipher)",
        "fct-type": "function",
        "title": "ccmInit"
      },
      "index": {
        "description": "Start CCM encryption with specified tag length length of the message length field and bytes long nonce Fails if any parameter is invalid or the block cipher doesn use byte blockSize",
        "hierarchy": "Crypto Nettle CCM",
        "module": "Crypto.Nettle.CCM",
        "name": "ccmInit",
        "normalized": "Int-\u003eInt-\u003ea-\u003eb-\u003eMaybe(AEAD a)",
        "package": "nettle",
        "partial": "Init",
        "signature": "Int-\u003eInt-\u003ecipher-\u003eiv-\u003eMaybe(AEAD cipher)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-CCM.html#v:ccmInitTLS",
      "description": {
        "fct-descr": "\u003cp\u003eStart a CCM encryption with specified tag length \u003ccode\u003et = 16\u003c/code\u003e, length \u003ccode\u003eq = 3\u003c/code\u003e for the message length field and a \u003ccode\u003e8\u003c/code\u003e bytes long \u003ccode\u003enonce\u003c/code\u003e.\nFails if any parameter is invalid or the block cipher doesn't use a 16-byte \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e.\nThis are the parameters used for TLS.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.CCM",
        "fct-package": "nettle",
        "fct-signature": "cipher-\u003e iv-\u003e Maybe (AEAD cipher)",
        "fct-type": "function",
        "title": "ccmInitTLS"
      },
      "index": {
        "description": "Start CCM encryption with specified tag length length for the message length field and bytes long nonce Fails if any parameter is invalid or the block cipher doesn use byte blockSize This are the parameters used for TLS",
        "hierarchy": "Crypto Nettle CCM",
        "module": "Crypto.Nettle.CCM",
        "name": "ccmInitTLS",
        "normalized": "a-\u003eb-\u003eMaybe(AEAD a)",
        "package": "nettle",
        "partial": "Init TLS",
        "signature": "cipher-\u003eiv-\u003eMaybe(AEAD cipher)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports ciphers supported by nettle:\n   \u003ca\u003ehttp://www.lysator.liu.se/~nisse/nettle/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-Ciphers.html",
        "fct-type": "module",
        "title": "Ciphers"
      },
      "index": {
        "description": "This module exports ciphers supported by nettle http www.lysator.liu.se nisse nettle",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "Ciphers",
        "normalized": "",
        "package": "nettle",
        "partial": "Ciphers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:AES",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e is the generic cipher context for the AES cipher, supporting key sizes\nof 128, 196 and 256 bits (16, 24 and 32 bytes). The \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e is always 128 bits (16 bytes).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eaeadInit\u003c/a\u003e\u003c/code\u003e only supports the \u003ccode\u003e\u003ca\u003eAEAD_GCM\u003c/a\u003e\u003c/code\u003e mode for now.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#AES",
        "fct-type": "data",
        "title": "AES"
      },
      "index": {
        "description": "AES is the generic cipher context for the AES cipher supporting key sizes of and bits and bytes The blockSize is always bits bytes aeadInit only supports the AEAD GCM mode for now",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "AES",
        "normalized": "",
        "package": "nettle",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:AES128",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAES128\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e, but is restricted to 128-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#AES128",
        "fct-type": "data",
        "title": "AES128"
      },
      "index": {
        "description": "AES128 provides the same interface as AES but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "AES128",
        "normalized": "",
        "package": "nettle",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:AES192",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAES192\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e, but is restricted to 192-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#AES192",
        "fct-type": "data",
        "title": "AES192"
      },
      "index": {
        "description": "AES192 provides the same interface as AES but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "AES192",
        "normalized": "",
        "package": "nettle",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:AES256",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAES256\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e, but is restricted to 256-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#AES256",
        "fct-type": "data",
        "title": "AES256"
      },
      "index": {
        "description": "AES256 provides the same interface as AES but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "AES256",
        "normalized": "",
        "package": "nettle",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:ARCFOUR",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eARCFOUR\u003c/a\u003e\u003c/code\u003e is a stream cipher, also known under the trade marked name RC4.\n\u003c/p\u003e\u003cp\u003eValid key sizes are from 1 to 256 bytes.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#ARCFOUR",
        "fct-type": "data",
        "title": "ARCFOUR"
      },
      "index": {
        "description": "ARCFOUR is stream cipher also known under the trade marked name RC4 Valid key sizes are from to bytes",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "ARCFOUR",
        "normalized": "",
        "package": "nettle",
        "partial": "ARCFOUR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:ARCTWO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eARCTWO\u003c/a\u003e\u003c/code\u003e (also known as the trade marked name RC2) is a block cipher specified in RFC 2268.\n\u003c/p\u003e\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003ecipherInit\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003eekb = bit-length of the key\u003c/code\u003e; \u003ccode\u003e\u003ca\u003earctwoInitEKB\u003c/a\u003e\u003c/code\u003e allows to specify ekb manually.\n\u003ccode\u003e\u003ca\u003earctwoInitGutmann\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003eekb = 1024\u003c/code\u003e (the maximum).\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eARCTWO\u003c/a\u003e\u003c/code\u003e uses keysizes from 1 to 128 bytes, and uses a \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e of 64 bits (8 bytes).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#ARCTWO",
        "fct-type": "data",
        "title": "ARCTWO"
      },
      "index": {
        "description": "ARCTWO also known as the trade marked name RC2 is block cipher specified in RFC The default cipherInit uses ekb bit-length of the key arctwoInitEKB allows to specify ekb manually arctwoInitGutmann uses ekb the maximum ARCTWO uses keysizes from to bytes and uses blockSize of bits bytes",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "ARCTWO",
        "normalized": "",
        "package": "nettle",
        "partial": "ARCTWO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:BLOWFISH",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBLOWFISH\u003c/a\u003e\u003c/code\u003e is a block cipher designed by Bruce Schneier.\nIt uses a \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e of 64 bits (8 bytes), and a variable key size from 64 to 448 bits (8 to 56 bytes).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#BLOWFISH",
        "fct-type": "data",
        "title": "BLOWFISH"
      },
      "index": {
        "description": "BLOWFISH is block cipher designed by Bruce Schneier It uses blockSize of bits bytes and variable key size from to bits to bytes",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "BLOWFISH",
        "normalized": "",
        "package": "nettle",
        "partial": "BLOWFISH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:CAST128",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCAST128\u003c/a\u003e\u003c/code\u003e is a block cipher specified in RFC 2144. It uses a 64 bit (8 bytes) \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e,\nand a variable key size of 40 up to 128 bits (5 to 16 bytes).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#CAST128",
        "fct-type": "data",
        "title": "CAST128"
      },
      "index": {
        "description": "CAST128 is block cipher specified in RFC It uses bit bytes blockSize and variable key size of up to bits to bytes",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "CAST128",
        "normalized": "",
        "package": "nettle",
        "partial": "CAST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:Camellia",
      "description": {
        "fct-descr": "\u003cp\u003eCamellia is a block cipher developed by Mitsubishi and Nippon Telegraph and Telephone Corporation,\ndescribed in RFC3713, and recommended by some Japanese and European authorities as an alternative to AES.\nThe algorithm is patented (details see \u003ca\u003ehttp://www.lysator.liu.se/~nisse/nettle/nettle.html\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eCamellia uses a the same \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e and key sizes as \u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eaeadInit\u003c/a\u003e\u003c/code\u003e only supports the \u003ccode\u003e\u003ca\u003eAEAD_GCM\u003c/a\u003e\u003c/code\u003e mode for now.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#Camellia",
        "fct-type": "data",
        "title": "Camellia"
      },
      "index": {
        "description": "Camellia is block cipher developed by Mitsubishi and Nippon Telegraph and Telephone Corporation described in RFC3713 and recommended by some Japanese and European authorities as an alternative to AES The algorithm is patented details see http www.lysator.liu.se nisse nettle nettle.html Camellia uses the same blockSize and key sizes as AES aeadInit only supports the AEAD GCM mode for now",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "Camellia",
        "normalized": "",
        "package": "nettle",
        "partial": "Camellia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:Camellia128",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCamellia128\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eCamellia\u003c/a\u003e\u003c/code\u003e, but is restricted to 128-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#Camellia128",
        "fct-type": "data",
        "title": "Camellia128"
      },
      "index": {
        "description": "Camellia128 provides the same interface as Camellia but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "Camellia128",
        "normalized": "",
        "package": "nettle",
        "partial": "Camellia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:Camellia192",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCamellia192\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eCamellia\u003c/a\u003e\u003c/code\u003e, but is restricted to 192-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#Camellia192",
        "fct-type": "data",
        "title": "Camellia192"
      },
      "index": {
        "description": "Camellia192 provides the same interface as Camellia but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "Camellia192",
        "normalized": "",
        "package": "nettle",
        "partial": "Camellia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:Camellia256",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCamellia256\u003c/a\u003e\u003c/code\u003e provides the same interface as \u003ccode\u003e\u003ca\u003eCamellia\u003c/a\u003e\u003c/code\u003e, but is restricted to 256-bit keys.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#Camellia256",
        "fct-type": "data",
        "title": "Camellia256"
      },
      "index": {
        "description": "Camellia256 provides the same interface as Camellia but is restricted to bit keys",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "Camellia256",
        "normalized": "",
        "package": "nettle",
        "partial": "Camellia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:DES",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e is the old Data Encryption Standard, specified by NIST.\nIt uses a \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e of 64 bits (8 bytes), and a key size of 56 bits.\n\u003c/p\u003e\u003cp\u003eThe key is given as 8 bytes, as one bit per byte is used as a parity bit.\nThe parity bit is ignored by this implementation.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#DES",
        "fct-type": "data",
        "title": "DES"
      },
      "index": {
        "description": "DES is the old Data Encryption Standard specified by NIST It uses blockSize of bits bytes and key size of bits The key is given as bytes as one bit per byte is used as parity bit The parity bit is ignored by this implementation",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "DES",
        "normalized": "",
        "package": "nettle",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:DES_EDE3",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDES_EDE3\u003c/a\u003e\u003c/code\u003e uses 3 \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e keys \u003ccode\u003ek1 || k2 || k3\u003c/code\u003e.\nEncryption first encrypts with k1, then decrypts with k2, then encrypts with k3.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e is the same as for \u003ccode\u003e\u003ca\u003eDES\u003c/a\u003e\u003c/code\u003e: 64 bits (8 bytes),\nand the keys are simply concatenated, forming a 24 byte key string (with 168 bits actually getting used).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#DES_EDE3",
        "fct-type": "data",
        "title": "DES_EDE3"
      },
      "index": {
        "description": "DES EDE3 uses DES keys k1 k2 k3 Encryption first encrypts with k1 then decrypts with k2 then encrypts with k3 The blockSize is the same as for DES bits bytes and the keys are simply concatenated forming byte key string with bits actually getting used",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "DES_EDE3",
        "normalized": "",
        "package": "nettle",
        "partial": "DES EDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:ESTREAM_SALSA20",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eESTREAM_SALSA20\u003c/a\u003e\u003c/code\u003e is the same as \u003ccode\u003e\u003ca\u003eSALSA20\u003c/a\u003e\u003c/code\u003e, but uses only 12 instead of 20 rounds in mixing.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#ESTREAM_SALSA20",
        "fct-type": "data",
        "title": "ESTREAM_SALSA20"
      },
      "index": {
        "description": "ESTREAM SALSA20 is the same as SALSA20 but uses only instead of rounds in mixing",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "ESTREAM_SALSA20",
        "normalized": "",
        "package": "nettle",
        "partial": "ESTREAM SALSA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:SALSA20",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSALSA20\u003c/a\u003e\u003c/code\u003e is a fairly recent stream cipher designed by D. J. Bernstein.\n\u003c/p\u003e\u003cp\u003eValid key sizes are 128 and 256 bits (16 and 32 bytes).\n\u003c/p\u003e\u003cp\u003eSalsa20 uses a blocksize of 64 bytes internally; if crpyted input isn't aligned to 64 bytes it will\npad it with 0 and store the encrypted padding to xor with future input data.\n\u003c/p\u003e\u003cp\u003eEach message also requires a 8-byte (\u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e) nonce (which is initialized to 0; you can use a message sequence number).\nDon't reuse a nonce with the same key.\n\u003c/p\u003e\u003cp\u003eSetting a nonce also resets the remaining padding data.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#SALSA20",
        "fct-type": "data",
        "title": "SALSA20"
      },
      "index": {
        "description": "SALSA20 is fairly recent stream cipher designed by Bernstein Valid key sizes are and bits and bytes Salsa20 uses blocksize of bytes internally if crpyted input isn aligned to bytes it will pad it with and store the encrypted padding to xor with future input data Each message also requires byte Word64 nonce which is initialized to you can use message sequence number Don reuse nonce with the same key Setting nonce also resets the remaining padding data",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "SALSA20",
        "normalized": "",
        "package": "nettle",
        "partial": "SALSA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:SERPENT",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSERPENT\u003c/a\u003e\u003c/code\u003e is one of the AES finalists, designed by Ross Anderson, Eli Biham and Lars Knudsen.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e is 128 bits (16 bytes), and the valid key sizes are from 128 bits to 256 bits (16 to 32 bytes),\nalthough smaller bits are just padded with zeroes.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eaeadInit\u003c/a\u003e\u003c/code\u003e only supports the \u003ccode\u003e\u003ca\u003eAEAD_GCM\u003c/a\u003e\u003c/code\u003e mode for now.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#SERPENT",
        "fct-type": "data",
        "title": "SERPENT"
      },
      "index": {
        "description": "SERPENT is one of the AES finalists designed by Ross Anderson Eli Biham and Lars Knudsen The blockSize is bits bytes and the valid key sizes are from bits to bits to bytes although smaller bits are just padded with zeroes aeadInit only supports the AEAD GCM mode for now",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "SERPENT",
        "normalized": "",
        "package": "nettle",
        "partial": "SERPENT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:StreamNonceCipher",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStreamNonceCipher\u003c/a\u003e\u003c/code\u003e are special stream ciphers that can encrypt many messages with the same key;\nsetting a nonce restarts the cipher.\n\u003c/p\u003e\u003cp\u003eA good value for the nonce is a message/packet counter. Usually a nonce should not be reused with the same key.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#StreamNonceCipher",
        "fct-type": "class",
        "title": "StreamNonceCipher"
      },
      "index": {
        "description": "StreamNonceCipher are special stream ciphers that can encrypt many messages with the same key setting nonce restarts the cipher good value for the nonce is message packet counter Usually nonce should not be reused with the same key",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "StreamNonceCipher",
        "normalized": "",
        "package": "nettle",
        "partial": "Stream Nonce Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#t:TWOFISH",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTWOFISH\u003c/a\u003e\u003c/code\u003e is another AES finalist, designed by Bruce Schneier and others.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTWOFISH\u003c/a\u003e\u003c/code\u003e uses a the same \u003ccode\u003e\u003ca\u003eblockSize\u003c/a\u003e\u003c/code\u003e and key sizes as \u003ccode\u003e\u003ca\u003eAES\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eaeadInit\u003c/a\u003e\u003c/code\u003e only supports the \u003ccode\u003e\u003ca\u003eAEAD_GCM\u003c/a\u003e\u003c/code\u003e mode for now.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#TWOFISH",
        "fct-type": "data",
        "title": "TWOFISH"
      },
      "index": {
        "description": "TWOFISH is another AES finalist designed by Bruce Schneier and others TWOFISH uses the same blockSize and key sizes as AES aeadInit only supports the AEAD GCM mode for now",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "TWOFISH",
        "normalized": "",
        "package": "nettle",
        "partial": "TWOFISH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#v:arctwoInitEKB",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize cipher with an explicit \u003ccode\u003eekb\u003c/code\u003e value (valid values from 1 to 1024, 0 meaning the same as 1024).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "Key ARCTWO -\u003e Word -\u003e ARCTWO",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#arctwoInitEKB",
        "fct-type": "function",
        "title": "arctwoInitEKB"
      },
      "index": {
        "description": "Initialize cipher with an explicit ekb value valid values from to meaning the same as",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "arctwoInitEKB",
        "normalized": "Key ARCTWO-\u003eWord-\u003eARCTWO",
        "package": "nettle",
        "partial": "Init EKB",
        "signature": "Key ARCTWO-\u003eWord-\u003eARCTWO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#v:arctwoInitGutmann",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize cipher with \u003ccode\u003eekb = 1024\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "Key ARCTWO -\u003e ARCTWO",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#arctwoInitGutmann",
        "fct-type": "function",
        "title": "arctwoInitGutmann"
      },
      "index": {
        "description": "Initialize cipher with ekb",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "arctwoInitGutmann",
        "normalized": "Key ARCTWO-\u003eARCTWO",
        "package": "nettle",
        "partial": "Init Gutmann",
        "signature": "Key ARCTWO-\u003eARCTWO"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#v:streamNonceSize",
      "description": {
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "cipher -\u003e KeySizeSpecifier",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#streamNonceSize",
        "fct-type": "method",
        "title": "streamNonceSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "streamNonceSize",
        "normalized": "a-\u003eKeySizeSpecifier",
        "package": "nettle",
        "partial": "Nonce Size",
        "signature": "cipher-\u003eKeySizeSpecifier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#v:streamSetNonce",
      "description": {
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "cipher -\u003e B.ByteString -\u003e Maybe cipher",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#streamSetNonce",
        "fct-type": "method",
        "title": "streamSetNonce"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "streamSetNonce",
        "normalized": "a-\u003eB.ByteString-\u003eMaybe a",
        "package": "nettle",
        "partial": "Set Nonce",
        "signature": "cipher-\u003eB.ByteString-\u003eMaybe cipher"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Ciphers.html#v:streamSetNonceWord64",
      "description": {
        "fct-descr": "\u003cp\u003eSets a \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e as 8-byte nonce (bigendian encoded)\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Ciphers",
        "fct-package": "nettle",
        "fct-signature": "cipher -\u003e Word64 -\u003e Maybe cipher",
        "fct-source": "src/Crypto-Nettle-Ciphers.html#streamSetNonceWord64",
        "fct-type": "function",
        "title": "streamSetNonceWord64"
      },
      "index": {
        "description": "Sets Word64 as byte nonce bigendian encoded",
        "hierarchy": "Crypto Nettle Ciphers",
        "module": "Crypto.Nettle.Ciphers",
        "name": "streamSetNonceWord64",
        "normalized": "a-\u003eWord-\u003eMaybe a",
        "package": "nettle",
        "partial": "Set Nonce Word",
        "signature": "cipher-\u003eWord-\u003eMaybe cipher"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric HMAC implementation based on the \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e class,\n implementing the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-HMAC.html",
        "fct-type": "module",
        "title": "HMAC"
      },
      "index": {
        "description": "Generic HMAC implementation based on the HashAlgorithm class implementing the KeyedHashAlgorithm class",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "HMAC",
        "normalized": "",
        "package": "nettle",
        "partial": "HMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#t:HMAC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHMAC\u003c/a\u003e\u003c/code\u003e is a generic \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance to calculate the \u003ccode\u003e\u003ca\u003eHMAC\u003c/a\u003e\u003c/code\u003e based\non a \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#HMAC",
        "fct-type": "data",
        "title": "HMAC"
      },
      "index": {
        "description": "HMAC is generic KeyedHashAlgorithm instance to calculate the HMAC based on HashAlgorithm",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "HMAC",
        "normalized": "",
        "package": "nettle",
        "partial": "HMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmac",
      "description": {
        "fct-descr": "\u003cp\u003ecalculate HMAC with a \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003ekey\u003c/code\u003e and \u003ccode\u003emessage\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (hmac (fromString \"secretkey\") (fromString \"secret message\") :: Tagged SHA256 B.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Tagged a ByteString",
        "fct-type": "function",
        "title": "hmac"
      },
      "index": {
        "description": "calculate HMAC with HashAlgorithm for key and message Example untag hmac fromString secretkey fromString secret message Tagged SHA256 B.ByteString",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmac",
        "normalized": "ByteString-\u003eByteString-\u003eTagged a ByteString",
        "package": "nettle",
        "partial": "",
        "signature": "ByteString-\u003eByteString-\u003eTagged a ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmac-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ehmac\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) typed \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e context as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e hmac' (undefined :: SHA256) (fromString \"secretkey\") (fromString \"secret message\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hmac%27",
        "fct-type": "function",
        "title": "hmac'"
      },
      "index": {
        "description": "Untagged variant of hmac takes possible undefined typed HashAlgorithm context as parameter Example hmac undefined SHA256 fromString secretkey fromString secret message",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmac'",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "nettle",
        "partial": "",
        "signature": "a-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmacInit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ehmacInit\u003c/a\u003e\u003c/code\u003e is the default implementation for \u003ccode\u003e\u003ca\u003ehashHMAC\u003c/a\u003e\u003c/code\u003e and initializes a \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e to calculate\nthe HMAC for a message with the given \u003ccode\u003ekey\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e let c = untag (hmacInit (fromString \"secretkey\") :: Tagged SHA256 KeyedHash) in keyedHashFinalize $ keyedHashUpdate c (fromString \"secret message\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "ByteString-\u003e Tagged a KeyedHash",
        "fct-type": "function",
        "title": "hmacInit"
      },
      "index": {
        "description": "hmacInit is the default implementation for hashHMAC and initializes KeyedHash to calculate the HMAC for message with the given key Example let untag hmacInit fromString secretkey Tagged SHA256 KeyedHash in keyedHashFinalize keyedHashUpdate fromString secret message",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmacInit",
        "normalized": "ByteString-\u003eTagged a KeyedHash",
        "package": "nettle",
        "partial": "Init",
        "signature": "ByteString-\u003eTagged a KeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmacInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ehmacInit\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) typed \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e context as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e keyedHashFinalize $ flip keyedHashUpdate (fromString \"secret message\") $ hmacInit' (undefined :: SHA256) (fromString \"secretkey\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e ByteString -\u003e KeyedHash",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hmacInit%27",
        "fct-type": "function",
        "title": "hmacInit'"
      },
      "index": {
        "description": "Untagged variant of hmacInit takes possible undefined typed HashAlgorithm context as parameter Example keyedHashFinalize flip keyedHashUpdate fromString secret message hmacInit undefined SHA256 fromString secretkey",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmacInit'",
        "normalized": "a-\u003eByteString-\u003eKeyedHash",
        "package": "nettle",
        "partial": "Init'",
        "signature": "a-\u003eByteString-\u003eKeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmacLazy",
      "description": {
        "fct-descr": "\u003cp\u003ecalculate HMAC with a \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003ekey\u003c/code\u003e and lazy \u003ccode\u003emessage\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (hmacLazy (fromString \"secretkey\") (fromString \"secret message\") :: Tagged SHA256 B.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "ByteString-\u003e ByteString-\u003e Tagged a ByteString",
        "fct-type": "function",
        "title": "hmacLazy"
      },
      "index": {
        "description": "calculate HMAC with HashAlgorithm for key and lazy message Example untag hmacLazy fromString secretkey fromString secret message Tagged SHA256 B.ByteString",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmacLazy",
        "normalized": "ByteString-\u003eByteString-\u003eTagged a ByteString",
        "package": "nettle",
        "partial": "Lazy",
        "signature": "ByteString-\u003eByteString-\u003eTagged a ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-HMAC.html#v:hmacLazy-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ehmacLazy\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) typed \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e context as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e hmacLazy' (undefined :: SHA256) (fromString \"secretkey\") (fromString \"secret message\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.HMAC",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hmacLazy%27",
        "fct-type": "function",
        "title": "hmacLazy'"
      },
      "index": {
        "description": "Untagged variant of hmacLazy takes possible undefined typed HashAlgorithm context as parameter Example hmacLazy undefined SHA256 fromString secretkey fromString secret message",
        "hierarchy": "Crypto Nettle HMAC",
        "module": "Crypto.Nettle.HMAC",
        "name": "hmacLazy'",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "nettle",
        "partial": "Lazy'",
        "signature": "a-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports hash algorithms supported by nettle:\n   \u003ca\u003ehttp://www.lysator.liu.se/~nisse/nettle/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-Hash.html",
        "fct-type": "module",
        "title": "Hash"
      },
      "index": {
        "description": "This module exports hash algorithms supported by nettle http www.lysator.liu.se nisse nettle",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "Hash",
        "normalized": "",
        "package": "nettle",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:GOSTHASH94",
      "description": {
        "fct-descr": "\u003cp\u003eThe GOST94 or GOST R 34.11-94 hash algorithm is a Soviet-era algorithm used in Russian government standards (see RFC 4357).\n   It outputs message digests of 32 bytes (256 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#GOSTHASH94",
        "fct-type": "data",
        "title": "GOSTHASH94"
      },
      "index": {
        "description": "The GOST94 or GOST hash algorithm is Soviet-era algorithm used in Russian government standards see RFC It outputs message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "GOSTHASH94",
        "normalized": "",
        "package": "nettle",
        "partial": "GOSTHASH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:HashAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e is a class that hash algorithms will implement. generating a digest is a 3 step procedure:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehashInit\u003c/a\u003e\u003c/code\u003e to create a new context\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehashUpdate\u003c/a\u003e\u003c/code\u003e to hash data\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehashFinalize\u003c/a\u003e\u003c/code\u003e to extract the final digest\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe final digest has \u003ccode\u003e\u003ca\u003ehashDigestSize\u003c/a\u003e\u003c/code\u003e bytes, and the algorithm uses \u003ccode\u003e\u003ca\u003ehashBlockSize\u003c/a\u003e\u003c/code\u003e as internal block size.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#HashAlgorithm",
        "fct-type": "class",
        "title": "HashAlgorithm"
      },
      "index": {
        "description": "HashAlgorithm is class that hash algorithms will implement generating digest is step procedure hashInit to create new context hashUpdate to hash data hashFinalize to extract the final digest The final digest has hashDigestSize bytes and the algorithm uses hashBlockSize as internal block size",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "HashAlgorithm",
        "normalized": "",
        "package": "nettle",
        "partial": "Hash Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:MD2",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMD2\u003c/a\u003e\u003c/code\u003e is a hash function of Ronald Rivest's, described in RFC 1319. It outputs message digests of 16 bytes (128 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#MD2",
        "fct-type": "data",
        "title": "MD2"
      },
      "index": {
        "description": "MD2 is hash function of Ronald Rivest described in RFC It outputs message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "MD2",
        "normalized": "",
        "package": "nettle",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:MD4",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMD4\u003c/a\u003e\u003c/code\u003e is a hash function of Ronald Rivest's, described in RFC 1320. It outputs message digests of 16 bytes (128 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#MD4",
        "fct-type": "data",
        "title": "MD4"
      },
      "index": {
        "description": "MD4 is hash function of Ronald Rivest described in RFC It outputs message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "MD4",
        "normalized": "",
        "package": "nettle",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:MD5",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eMD5\u003c/a\u003e\u003c/code\u003e is a hash function of Ronald Rivest's, described in RFC 1321. It outputs message digests of 16 bytes (128 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#MD5",
        "fct-type": "data",
        "title": "MD5"
      },
      "index": {
        "description": "MD5 is hash function of Ronald Rivest described in RFC It outputs message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "MD5",
        "normalized": "",
        "package": "nettle",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:RIPEMD160",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRIPEMD160\u003c/a\u003e\u003c/code\u003e is a hash function designed by Hans Dobbertin, Antoon Bosselaers, and Bart Preneel, as a strengthened version of RIPEMD.\n   It produces message digests of 20 bytes (160 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#RIPEMD160",
        "fct-type": "data",
        "title": "RIPEMD160"
      },
      "index": {
        "description": "RIPEMD160 is hash function designed by Hans Dobbertin Antoon Bosselaers and Bart Preneel as strengthened version of RIPEMD It produces message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "RIPEMD160",
        "normalized": "",
        "package": "nettle",
        "partial": "RIPEMD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA1\u003c/a\u003e\u003c/code\u003e is a hash function specified by NIST (The U.S. National Institute for Standards and Technology).\n   It produces message digests of 20 bytes (160 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA1",
        "fct-type": "data",
        "title": "SHA1"
      },
      "index": {
        "description": "SHA1 is hash function specified by NIST The U.S National Institute for Standards and Technology It produces message digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA1",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA224",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA224\u003c/a\u003e\u003c/code\u003e is a member of the SHA2 family which outputs messages digests of 28 bytes (224 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA224",
        "fct-type": "data",
        "title": "SHA224"
      },
      "index": {
        "description": "SHA224 is member of the SHA2 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA224",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA256",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA256\u003c/a\u003e\u003c/code\u003e is a member of the SHA2 family which outputs messages digests of 32 bytes (256 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA256",
        "fct-type": "data",
        "title": "SHA256"
      },
      "index": {
        "description": "SHA256 is member of the SHA2 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA256",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA384",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA384\u003c/a\u003e\u003c/code\u003e is a member of the SHA2 family which outputs messages digests of 48 bytes (384 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA384",
        "fct-type": "data",
        "title": "SHA384"
      },
      "index": {
        "description": "SHA384 is member of the SHA2 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA384",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA3_224",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA3_224\u003c/a\u003e\u003c/code\u003e is a member of the SHA3 family which outputs messages digests of 28 bytes (224 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA3_224",
        "fct-type": "data",
        "title": "SHA3_224"
      },
      "index": {
        "description": "SHA3 is member of the SHA3 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA3_224",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA3_256",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA3_256\u003c/a\u003e\u003c/code\u003e is a member of the SHA3 family which outputs messages digests of 32 bytes (256 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA3_256",
        "fct-type": "data",
        "title": "SHA3_256"
      },
      "index": {
        "description": "SHA3 is member of the SHA3 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA3_256",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA3_384",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA3_384\u003c/a\u003e\u003c/code\u003e is a member of the SHA3 family which outputs messages digests of 48 bytes (384 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA3_384",
        "fct-type": "data",
        "title": "SHA3_384"
      },
      "index": {
        "description": "SHA3 is member of the SHA3 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA3_384",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA3_512",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA3_512\u003c/a\u003e\u003c/code\u003e is a member of the SHA3 family which outputs messages digests of 64 bytes (512 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA3_512",
        "fct-type": "data",
        "title": "SHA3_512"
      },
      "index": {
        "description": "SHA3 is member of the SHA3 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA3_512",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#t:SHA512",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSHA512\u003c/a\u003e\u003c/code\u003e is a member of the SHA2 family which outputs messages digests of 64 bytes (512 bits).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash.html#SHA512",
        "fct-type": "data",
        "title": "SHA512"
      },
      "index": {
        "description": "SHA512 is member of the SHA2 family which outputs messages digests of bytes bits",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "SHA512",
        "normalized": "",
        "package": "nettle",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to hash a single (strict) \u003ccode\u003e\u003ca\u003eB.ByteString\u003c/a\u003e\u003c/code\u003e in one step.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (hash (fromString \"abc\") :: Tagged SHA256 B.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "B.ByteString -\u003e Tagged a B.ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Helper to hash single strict B.ByteString in one step Example untag hash fromString abc Tagged SHA256 B.ByteString",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hash",
        "normalized": "B.ByteString-\u003eTagged a B.ByteString",
        "package": "nettle",
        "partial": "",
        "signature": "B.ByteString-\u003eTagged a B.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hash-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) typed \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e context as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e hash' (undefined :: SHA256) $ fromString \"abc\"\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e B.ByteString -\u003e B.ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hash%27",
        "fct-type": "function",
        "title": "hash'"
      },
      "index": {
        "description": "Untagged variant of hash takes possible undefined typed HashAlgorithm context as parameter Example hash undefined SHA256 fromString abc",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hash'",
        "normalized": "a-\u003eB.ByteString-\u003eB.ByteString",
        "package": "nettle",
        "partial": "",
        "signature": "a-\u003eB.ByteString-\u003eB.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eBlock size in bytes the hash algorithm operates on\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "Tagged a Int",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashBlockSize",
        "fct-type": "method",
        "title": "hashBlockSize"
      },
      "index": {
        "description": "Block size in bytes the hash algorithm operates on",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashBlockSize",
        "normalized": "",
        "package": "nettle",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashDigestSize",
      "description": {
        "fct-descr": "\u003cp\u003eDigest size in bytes the hash algorithm returns\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "Tagged a Int",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashDigestSize",
        "fct-type": "method",
        "title": "hashDigestSize"
      },
      "index": {
        "description": "Digest size in bytes the hash algorithm returns",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashDigestSize",
        "normalized": "",
        "package": "nettle",
        "partial": "Digest Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eFinalize a context and return a digest.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e B.ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashFinalize",
        "fct-type": "method",
        "title": "hashFinalize"
      },
      "index": {
        "description": "Finalize context and return digest",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashFinalize",
        "normalized": "a-\u003eB.ByteString",
        "package": "nettle",
        "partial": "Finalize",
        "signature": "a-\u003eB.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashHMAC",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e for HMAC; can use a optimized variant or the default \u003ccode\u003e\u003ca\u003ehmacInit\u003c/a\u003e\u003c/code\u003e one\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "B.ByteString -\u003e Tagged a KeyedHash",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashHMAC",
        "fct-type": "method",
        "title": "hashHMAC"
      },
      "index": {
        "description": "Use HashAlgorithm for HMAC can use optimized variant or the default hmacInit one",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashHMAC",
        "normalized": "B.ByteString-\u003eTagged a KeyedHash",
        "package": "nettle",
        "partial": "HMAC",
        "signature": "B.ByteString-\u003eTagged a KeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a new context for this hash algorithm\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashInit",
        "fct-type": "method",
        "title": "hashInit"
      },
      "index": {
        "description": "Initialize new context for this hash algorithm",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashInit",
        "normalized": "",
        "package": "nettle",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashLazy",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to hash a single (lazy) \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e in one step.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (hashLazy (fromString \"abc\") :: Tagged SHA256 L.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "ByteString -\u003e Tagged a ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashLazy",
        "fct-type": "function",
        "title": "hashLazy"
      },
      "index": {
        "description": "Helper to hash single lazy ByteString in one step Example untag hashLazy fromString abc Tagged SHA256 L.ByteString",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashLazy",
        "normalized": "ByteString-\u003eTagged a ByteString",
        "package": "nettle",
        "partial": "Lazy",
        "signature": "ByteString-\u003eTagged a ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashLazy-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ehashLazy\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) typed \u003ccode\u003e\u003ca\u003eHashAlgorithm\u003c/a\u003e\u003c/code\u003e context as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e hashLazy' (undefined :: SHA256) $ fromString \"abc\"\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashLazy%27",
        "fct-type": "function",
        "title": "hashLazy'"
      },
      "index": {
        "description": "Untagged variant of hashLazy takes possible undefined typed HashAlgorithm context as parameter Example hashLazy undefined SHA256 fromString abc",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashLazy'",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "nettle",
        "partial": "Lazy'",
        "signature": "a-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the hash algorithm\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "Tagged a String",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashName",
        "fct-type": "method",
        "title": "hashName"
      },
      "index": {
        "description": "Name of the hash algorithm",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashName",
        "normalized": "",
        "package": "nettle",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the context with bytestring, and return a new context with the updates.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e B.ByteString -\u003e a",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashUpdate",
        "fct-type": "method",
        "title": "hashUpdate"
      },
      "index": {
        "description": "Update the context with bytestring and return new context with the updates",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashUpdate",
        "normalized": "a-\u003eB.ByteString-\u003ea",
        "package": "nettle",
        "partial": "Update",
        "signature": "a-\u003eB.ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-Hash.html#v:hashUpdateLazy",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the context with a lazy bytestring, and return a new context with the updates.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.Hash",
        "fct-package": "nettle",
        "fct-signature": "a -\u003e ByteString -\u003e a",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#hashUpdateLazy",
        "fct-type": "method",
        "title": "hashUpdateLazy"
      },
      "index": {
        "description": "Update the context with lazy bytestring and return new context with the updates",
        "hierarchy": "Crypto Nettle Hash",
        "module": "Crypto.Nettle.Hash",
        "name": "hashUpdateLazy",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "nettle",
        "partial": "Update Lazy",
        "signature": "a-\u003eByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric interface to calculate key based hashes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-KeyedHash.html",
        "fct-type": "module",
        "title": "KeyedHash"
      },
      "index": {
        "description": "Generic interface to calculate key based hashes",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "KeyedHash",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#t:KeyedHash",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e hides the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#KeyedHash",
        "fct-type": "data",
        "title": "KeyedHash"
      },
      "index": {
        "description": "KeyedHash hides the KeyedHashAlgorithm implementation",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "KeyedHash",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#t:KeyedHashAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e is a class for keyed hash algorithms that take a key and a message to produce a digest.\nThe most popular example is \u003ccode\u003e\u003ca\u003eHMAC\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#KeyedHashAlgorithm",
        "fct-type": "class",
        "title": "KeyedHashAlgorithm"
      },
      "index": {
        "description": "KeyedHashAlgorithm is class for keyed hash algorithms that take key and message to produce digest The most popular example is HMAC",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "KeyedHashAlgorithm",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:KeyedHash",
      "description": {
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash !k",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#KeyedHash",
        "fct-type": "function",
        "title": "KeyedHash"
      },
      "index": {
        "description": "",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "KeyedHash",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashDigestSize",
      "description": {
        "fct-descr": "\u003cp\u003eDigest size in bytes the keyed hash algorithm returns\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "Tagged k Int",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashDigestSize",
        "fct-type": "method",
        "title": "implKeyedHashDigestSize"
      },
      "index": {
        "description": "Digest size in bytes the keyed hash algorithm returns",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashDigestSize",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash Digest Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eProduce final digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashFinalize",
        "fct-type": "method",
        "title": "implKeyedHashFinalize"
      },
      "index": {
        "description": "Produce final digest",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashFinalize",
        "normalized": "a-\u003eByteString",
        "package": "nettle",
        "partial": "Keyed Hash Finalize",
        "signature": "k-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize state from a key\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "ByteString -\u003e k",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashInit",
        "fct-type": "method",
        "title": "implKeyedHashInit"
      },
      "index": {
        "description": "Initialize state from key",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashInit",
        "normalized": "ByteString-\u003ea",
        "package": "nettle",
        "partial": "Keyed Hash Init",
        "signature": "ByteString-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashName",
      "description": {
        "fct-descr": "\u003cp\u003eName\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "Tagged k String",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashName",
        "fct-type": "method",
        "title": "implKeyedHashName"
      },
      "index": {
        "description": "Name",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashName",
        "normalized": "",
        "package": "nettle",
        "partial": "Keyed Hash Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eAdd more message data to the state\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString -\u003e k",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashUpdate",
        "fct-type": "method",
        "title": "implKeyedHashUpdate"
      },
      "index": {
        "description": "Add more message data to the state",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashUpdate",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "nettle",
        "partial": "Keyed Hash Update",
        "signature": "k-\u003eByteString-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:implKeyedHashUpdateLazy",
      "description": {
        "fct-descr": "\u003cp\u003eAdd more lazy message data to the state\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString -\u003e k",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#implKeyedHashUpdateLazy",
        "fct-type": "method",
        "title": "implKeyedHashUpdateLazy"
      },
      "index": {
        "description": "Add more lazy message data to the state",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "implKeyedHashUpdateLazy",
        "normalized": "a-\u003eByteString-\u003ea",
        "package": "nettle",
        "partial": "Keyed Hash Update Lazy",
        "signature": "k-\u003eByteString-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHash",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to hash \u003ccode\u003ekey\u003c/code\u003e and \u003ccode\u003emessage\u003c/code\u003e in one step\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (keyedHash (fromString \"secretkey\") (fromString \"secret message\") :: Tagged (HMAC SHA256) B.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Tagged k ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHash",
        "fct-type": "function",
        "title": "keyedHash"
      },
      "index": {
        "description": "Helper to hash key and message in one step Example untag keyedHash fromString secretkey fromString secret message Tagged HMAC SHA256 B.ByteString",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHash",
        "normalized": "ByteString-\u003eByteString-\u003eTagged a ByteString",
        "package": "nettle",
        "partial": "Hash",
        "signature": "ByteString-\u003eByteString-\u003eTagged k ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHash-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ekeyedHash\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) key typed value from a \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e keyedHash' (undefined :: HMAC SHA256) (fromString \"secretkey\") (fromString \"secret message\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHash%27",
        "fct-type": "function",
        "title": "keyedHash'"
      },
      "index": {
        "description": "Untagged variant of keyedHash takes possible undefined key typed value from KeyedHashAlgorithm instance as parameter Example keyedHash undefined HMAC SHA256 fromString secretkey fromString secret message",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHash'",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "nettle",
        "partial": "Hash'",
        "signature": "k-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashDigestSize",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003eimplKeyedHashDigestSize\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) key typed value from a \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance as parameter.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e Int",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashDigestSize",
        "fct-type": "function",
        "title": "keyedHashDigestSize"
      },
      "index": {
        "description": "Untagged variant of implKeyedHashDigestSize takes possible undefined key typed value from KeyedHashAlgorithm instance as parameter",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashDigestSize",
        "normalized": "a-\u003eInt",
        "package": "nettle",
        "partial": "Hash Digest Size",
        "signature": "k-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashDigestSize-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eimplKeyedHashDigestSize\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash -\u003e Int",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashDigestSize%27",
        "fct-type": "function",
        "title": "keyedHashDigestSize'"
      },
      "index": {
        "description": "Get implKeyedHashDigestSize from KeyedHash",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashDigestSize'",
        "normalized": "KeyedHash-\u003eInt",
        "package": "nettle",
        "partial": "Hash Digest Size'",
        "signature": "KeyedHash-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eProduce final digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashFinalize",
        "fct-type": "function",
        "title": "keyedHashFinalize"
      },
      "index": {
        "description": "Produce final digest",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashFinalize",
        "normalized": "KeyedHash-\u003eByteString",
        "package": "nettle",
        "partial": "Hash Finalize",
        "signature": "KeyedHash-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e context from a \u003ccode\u003ekey\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "ByteString-\u003e Tagged k KeyedHash",
        "fct-type": "function",
        "title": "keyedHashInit"
      },
      "index": {
        "description": "Initialize KeyedHash context from key",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashInit",
        "normalized": "ByteString-\u003eTagged a KeyedHash",
        "package": "nettle",
        "partial": "Hash Init",
        "signature": "ByteString-\u003eTagged k KeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashInit-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ekeyedHashInit\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) key typed value from a \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance as parameter.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString -\u003e KeyedHash",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashInit%27",
        "fct-type": "function",
        "title": "keyedHashInit'"
      },
      "index": {
        "description": "Untagged variant of keyedHashInit takes possible undefined key typed value from KeyedHashAlgorithm instance as parameter",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashInit'",
        "normalized": "a-\u003eByteString-\u003eKeyedHash",
        "package": "nettle",
        "partial": "Hash Init'",
        "signature": "k-\u003eByteString-\u003eKeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashLazy",
      "description": {
        "fct-descr": "\u003cp\u003eHelper to hash \u003ccode\u003ekey\u003c/code\u003e and lazy \u003ccode\u003emessage\u003c/code\u003e in one step\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e untag (keyedHashLazy (fromString \"secretkey\") (fromString \"secret message\") :: Tagged (HMAC SHA256) B.ByteString)\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "ByteString -\u003e ByteString -\u003e Tagged k ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashLazy",
        "fct-type": "function",
        "title": "keyedHashLazy"
      },
      "index": {
        "description": "Helper to hash key and lazy message in one step Example untag keyedHashLazy fromString secretkey fromString secret message Tagged HMAC SHA256 B.ByteString",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashLazy",
        "normalized": "ByteString-\u003eByteString-\u003eTagged a ByteString",
        "package": "nettle",
        "partial": "Hash Lazy",
        "signature": "ByteString-\u003eByteString-\u003eTagged k ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashLazy-39-",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003ekeyedHashLazy\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) key typed value from a \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance as parameter.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e keyedHashLazy' (undefined :: HMAC SHA256) (fromString \"secretkey\") (fromString \"secret message\")\n\u003c/pre\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e ByteString -\u003e ByteString -\u003e ByteString",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashLazy%27",
        "fct-type": "function",
        "title": "keyedHashLazy'"
      },
      "index": {
        "description": "Untagged variant of keyedHashLazy takes possible undefined key typed value from KeyedHashAlgorithm instance as parameter Example keyedHashLazy undefined HMAC SHA256 fromString secretkey fromString secret message",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashLazy'",
        "normalized": "a-\u003eByteString-\u003eByteString-\u003eByteString",
        "package": "nettle",
        "partial": "Hash Lazy'",
        "signature": "k-\u003eByteString-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashName",
      "description": {
        "fct-descr": "\u003cp\u003eUntagged variant of \u003ccode\u003e\u003ca\u003eimplKeyedHashName\u003c/a\u003e\u003c/code\u003e; takes a (possible \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e) key typed value from a \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance as parameter.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "k -\u003e String",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashName",
        "fct-type": "function",
        "title": "keyedHashName"
      },
      "index": {
        "description": "Untagged variant of implKeyedHashName takes possible undefined key typed value from KeyedHashAlgorithm instance as parameter",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashName",
        "normalized": "a-\u003eString",
        "package": "nettle",
        "partial": "Hash Name",
        "signature": "k-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashName-39-",
      "description": {
        "fct-descr": "\u003cp\u003eGet \u003ccode\u003e\u003ca\u003eimplKeyedHashName\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash -\u003e String",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashName%27",
        "fct-type": "function",
        "title": "keyedHashName'"
      },
      "index": {
        "description": "Get implKeyedHashName from KeyedHash",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashName'",
        "normalized": "KeyedHash-\u003eString",
        "package": "nettle",
        "partial": "Hash Name'",
        "signature": "KeyedHash-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eAdd more message data to the context\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash -\u003e ByteString -\u003e KeyedHash",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashUpdate",
        "fct-type": "function",
        "title": "keyedHashUpdate"
      },
      "index": {
        "description": "Add more message data to the context",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashUpdate",
        "normalized": "KeyedHash-\u003eByteString-\u003eKeyedHash",
        "package": "nettle",
        "partial": "Hash Update",
        "signature": "KeyedHash-\u003eByteString-\u003eKeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-KeyedHash.html#v:keyedHashUpdateLazy",
      "description": {
        "fct-descr": "\u003cp\u003eAdd more lazy message data to the context\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.KeyedHash",
        "fct-package": "nettle",
        "fct-signature": "KeyedHash -\u003e ByteString -\u003e KeyedHash",
        "fct-source": "src/Crypto-Nettle-Hash-Types.html#keyedHashUpdateLazy",
        "fct-type": "function",
        "title": "keyedHashUpdateLazy"
      },
      "index": {
        "description": "Add more lazy message data to the context",
        "hierarchy": "Crypto Nettle KeyedHash",
        "module": "Crypto.Nettle.KeyedHash",
        "name": "keyedHashUpdateLazy",
        "normalized": "KeyedHash-\u003eByteString-\u003eKeyedHash",
        "package": "nettle",
        "partial": "Hash Update Lazy",
        "signature": "KeyedHash-\u003eByteString-\u003eKeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the UMAC algorithms supported by nettle:\n   \u003ca\u003ehttp://www.lysator.liu.se/~nisse/nettle/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Nettle-UMAC.html",
        "fct-type": "module",
        "title": "UMAC"
      },
      "index": {
        "description": "This module exports the UMAC algorithms supported by nettle http www.lysator.liu.se nisse nettle",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#t:UMAC",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUMAC\u003c/a\u003e\u003c/code\u003e is a class of keyed hash algorithms that take an additional nonce.\n\u003c/p\u003e\u003cp\u003eKeys for \u003ccode\u003e\u003ca\u003eUMAC\u003c/a\u003e\u003c/code\u003e are always 16 bytes; there are different digest sizes: 4, 8, 12 and 16 bytes (32, 64, 96 and 128 bits),\nand the variants are named after the digest length in bits.\n\u003c/p\u003e\u003cp\u003eOn initialization the nonce is set to 0; each finalize returns a new state with an incremented nonce.\nThe nonce is interpreted as 16-byte (128-bit) big-endian integer (and for string shorter than 16 bytes padded with zeroes \u003cem\u003eon the left\u003c/em\u003e; setting empty nonces is not allowed).\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "class",
        "fct-source": "src/Crypto-Nettle-UMAC.html#UMAC",
        "fct-type": "class",
        "title": "UMAC"
      },
      "index": {
        "description": "UMAC is class of keyed hash algorithms that take an additional nonce Keys for UMAC are always bytes there are different digest sizes and bytes and bits and the variants are named after the digest length in bits On initialization the nonce is set to each finalize returns new state with an incremented nonce The nonce is interpreted as byte bit big-endian integer and for string shorter than bytes padded with zeroes on the left setting empty nonces is not allowed",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#t:UMAC128",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUMAC128\u003c/a\u003e\u003c/code\u003e is the 32-bit (4 byte) digest variant. See \u003ccode\u003e\u003ca\u003eumacInitKeyedHash\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-UMAC.html#UMAC128",
        "fct-type": "data",
        "title": "UMAC128"
      },
      "index": {
        "description": "UMAC128 is the bit byte digest variant See umacInitKeyedHash for the KeyedHashAlgorithm instance",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC128",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#t:UMAC32",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUMAC32\u003c/a\u003e\u003c/code\u003e is the 32-bit (4 byte) digest variant. See \u003ccode\u003e\u003ca\u003eumacInitKeyedHash\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-UMAC.html#UMAC32",
        "fct-type": "data",
        "title": "UMAC32"
      },
      "index": {
        "description": "UMAC32 is the bit byte digest variant See umacInitKeyedHash for the KeyedHashAlgorithm instance",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC32",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#t:UMAC64",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUMAC64\u003c/a\u003e\u003c/code\u003e is the 32-bit (4 byte) digest variant. See \u003ccode\u003e\u003ca\u003eumacInitKeyedHash\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-UMAC.html#UMAC64",
        "fct-type": "data",
        "title": "UMAC64"
      },
      "index": {
        "description": "UMAC64 is the bit byte digest variant See umacInitKeyedHash for the KeyedHashAlgorithm instance",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC64",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#t:UMAC96",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eUMAC96\u003c/a\u003e\u003c/code\u003e is the 32-bit (4 byte) digest variant. See \u003ccode\u003e\u003ca\u003eumacInitKeyedHash\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "data",
        "fct-source": "src/Crypto-Nettle-UMAC.html#UMAC96",
        "fct-type": "data",
        "title": "UMAC96"
      },
      "index": {
        "description": "UMAC96 is the bit byte digest variant See umacInitKeyedHash for the KeyedHashAlgorithm instance",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "UMAC96",
        "normalized": "",
        "package": "nettle",
        "partial": "UMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacDigestSize",
      "description": {
        "fct-descr": "\u003cp\u003edigest size in bytes\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "Tagged u Int",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacDigestSize",
        "fct-type": "method",
        "title": "umacDigestSize"
      },
      "index": {
        "description": "digest size in bytes",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacDigestSize",
        "normalized": "",
        "package": "nettle",
        "partial": "Digest Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eproduce a digest, and return a new state with incremented nonce\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "u -\u003e (B.ByteString, u)",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacFinalize",
        "fct-type": "method",
        "title": "umacFinalize"
      },
      "index": {
        "description": "produce digest and return new state with incremented nonce",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacFinalize",
        "normalized": "a-\u003e(B.ByteString,a)",
        "package": "nettle",
        "partial": "Finalize",
        "signature": "u-\u003e(B.ByteString,u)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacInit",
      "description": {
        "fct-descr": "\u003cp\u003einitialize a new context from a \u003ccode\u003ekey\u003c/code\u003e with a zero \u003ccode\u003enonce\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "umacInit",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacInit",
        "fct-type": "method",
        "title": "umacInit"
      },
      "index": {
        "description": "initialize new context from key with zero nonce",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacInit",
        "normalized": "",
        "package": "nettle",
        "partial": "Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacInitKeyedHash",
      "description": {
        "fct-descr": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e generated for UMAC \u003ccode\u003e\u003ca\u003eKeyedHashAlgorithm\u003c/a\u003e\u003c/code\u003e instances use a zero nonce; to set a different nonce you need to use this initialization function (or use the \u003ccode\u003e\u003ca\u003eUMAC\u003c/a\u003e\u003c/code\u003e interface).\n\u003c/p\u003e\u003cp\u003eOnce the UMAC lives as \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e the nonce cannot be changed anymore, as \u003ccode\u003e\u003ca\u003eKeyedHash\u003c/a\u003e\u003c/code\u003e hides all internal state.\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "B.ByteString-\u003e B.ByteString-\u003e Tagged u KeyedHash",
        "fct-type": "function",
        "title": "umacInitKeyedHash"
      },
      "index": {
        "description": "The default KeyedHash generated for UMAC KeyedHashAlgorithm instances use zero nonce to set different nonce you need to use this initialization function or use the UMAC interface Once the UMAC lives as KeyedHash the nonce cannot be changed anymore as KeyedHash hides all internal state",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacInitKeyedHash",
        "normalized": "B.ByteString-\u003eB.ByteString-\u003eTagged a KeyedHash",
        "package": "nettle",
        "partial": "Init Keyed Hash",
        "signature": "B.ByteString-\u003eB.ByteString-\u003eTagged u KeyedHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacName",
      "description": {
        "fct-descr": "\u003cp\u003eumac name (\u003ca\u003eUMAC\u003c/a\u003e ++ digest size in bits)\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "Tagged u String",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacName",
        "fct-type": "method",
        "title": "umacName"
      },
      "index": {
        "description": "umac name UMAC digest size in bits",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacName",
        "normalized": "",
        "package": "nettle",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacSetNonce",
      "description": {
        "fct-descr": "\u003cp\u003eset a \u003ccode\u003enonce\u003c/code\u003e; can be called anytime before producing the digest\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "umacSetNonce",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacSetNonce",
        "fct-type": "method",
        "title": "umacSetNonce"
      },
      "index": {
        "description": "set nonce can be called anytime before producing the digest",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacSetNonce",
        "normalized": "",
        "package": "nettle",
        "partial": "Set Nonce",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacUpdate",
      "description": {
        "fct-descr": "\u003cp\u003eappend \u003ccode\u003emessage\u003c/code\u003e data to be hashed\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "umacUpdate",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacUpdate",
        "fct-type": "method",
        "title": "umacUpdate"
      },
      "index": {
        "description": "append message data to be hashed",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacUpdate",
        "normalized": "",
        "package": "nettle",
        "partial": "Update",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nettle/docs/Crypto-Nettle-UMAC.html#v:umacUpdateLazy",
      "description": {
        "fct-descr": "\u003cp\u003eappend lazy \u003ccode\u003emessage\u003c/code\u003e data to be hashed\n\u003c/p\u003e",
        "fct-module": "Crypto.Nettle.UMAC",
        "fct-package": "nettle",
        "fct-signature": "umacUpdateLazy",
        "fct-source": "src/Crypto-Nettle-UMAC.html#umacUpdateLazy",
        "fct-type": "method",
        "title": "umacUpdateLazy"
      },
      "index": {
        "description": "append lazy message data to be hashed",
        "hierarchy": "Crypto Nettle UMAC",
        "module": "Crypto.Nettle.UMAC",
        "name": "umacUpdateLazy",
        "normalized": "",
        "package": "nettle",
        "partial": "Update Lazy",
        "signature": ""
      }
    }
  }
]