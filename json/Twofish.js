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
        "word": "Twofish"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements the Twofish symmetric block cipher, designed by:\n Bruce Schneier, John Kelsey, Doug Whiting, David Wagner, Chris Hall,\n and Niels Ferguson.\n\u003c/p\u003e\u003cp\u003eImplemented from the paper entitled \u003ca\u003eTwofish: A 128-Bit Block Cipher\u003c/a\u003e,\n \u003ca\u003ehttp://www.counterpane.com/twofish.html\u003c/a\u003e\n with help from the reference C implementation.\n\u003c/p\u003e\u003cp\u003eThis module provides two methods for constructiong a Twofish cipher\n from a 128, 192 or 256 bit key.  The mkCipher function allows you \n to customize the number of rounds, while the mkStdCipher function\n gives you the standard 16 rounds.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "Twofish",
          "package": "Twofish",
          "source": "src/Codec-Encryption-Twofish.html",
          "type": "module"
        },
        "index": {
          "description": "Implements the Twofish symmetric block cipher designed by Bruce Schneier John Kelsey Doug Whiting David Wagner Chris Hall and Niels Ferguson Implemented from the paper entitled Twofish Bit Block Cipher http www.counterpane.com twofish.html with help from the reference implementation This module provides two methods for constructiong Twofish cipher from or bit key The mkCipher function allows you to customize the number of rounds while the mkStdCipher function gives you the standard rounds",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "Twofish",
          "package": "Twofish",
          "partial": "Twofish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key is a vector of bytes of a certain size (given in bits).\n Twofish suppports key sizes of 128, 192, and 256 bits.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "Key",
          "package": "Twofish",
          "source": "src/Codec-Encryption-Twofish.html#Key",
          "type": "class"
        },
        "index": {
          "description": "key is vector of bytes of certain size given in bits Twofish suppports key sizes of and bits",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "Key",
          "package": "Twofish",
          "partial": "Key",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA keyed Twofish cipher capable of both encryption and decryption.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "TwofishCipher",
          "package": "Twofish",
          "source": "src/Codec-Encryption-Twofish.html#TwofishCipher",
          "type": "data"
        },
        "index": {
          "description": "keyed Twofish cipher capable of both encryption and decryption",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "TwofishCipher",
          "package": "Twofish",
          "partial": "Twofish Cipher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#t:TwofishCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "decrypt",
          "package": "Twofish",
          "signature": "TwofishCipher -\u003e Word128 -\u003e Word128",
          "source": "src/Codec-Encryption-Twofish.html#decrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "decrypt",
          "normalized": "TwofishCipher-\u003eWord-\u003eWord",
          "package": "Twofish",
          "signature": "TwofishCipher-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "encrypt",
          "package": "Twofish",
          "signature": "TwofishCipher -\u003e Word128 -\u003e Word128",
          "source": "src/Codec-Encryption-Twofish.html#encrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "encrypt",
          "normalized": "TwofishCipher-\u003eWord-\u003eWord",
          "package": "Twofish",
          "signature": "TwofishCipher-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function performs n rounds of the encryption algorithm\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "encryptRounds",
          "package": "Twofish",
          "signature": "GFunc -\u003e KIndexor -\u003e Int -\u003e Block -\u003e Block",
          "source": "src/Codec-Encryption-Twofish.html#encryptRounds",
          "type": "function"
        },
        "index": {
          "description": "This function performs rounds of the encryption algorithm",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "encryptRounds",
          "normalized": "GFunc-\u003eKIndexor-\u003eInt-\u003eBlock-\u003eBlock",
          "package": "Twofish",
          "partial": "Rounds",
          "signature": "GFunc-\u003eKIndexor-\u003eInt-\u003eBlock-\u003eBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:encryptRounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an encryption/decryption cipher from the given key, and\n a given number of rounds (standard Twofish uses 16 rounds)\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "mkCipher",
          "package": "Twofish",
          "signature": "Int -\u003e a -\u003e TwofishCipher",
          "source": "src/Codec-Encryption-Twofish.html#mkCipher",
          "type": "function"
        },
        "index": {
          "description": "Constructs an encryption decryption cipher from the given key and given number of rounds standard Twofish uses rounds",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkCipher",
          "normalized": "Int-\u003ea-\u003eTwofishCipher",
          "package": "Twofish",
          "partial": "Cipher",
          "signature": "Int-\u003ea-\u003eTwofishCipher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "mkG",
          "package": "Twofish",
          "signature": "HFunc -\u003e SVector -\u003e GFunc",
          "source": "src/Codec-Encryption-Twofish.html#mkG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkG",
          "normalized": "HFunc-\u003eSVector-\u003eGFunc",
          "package": "Twofish",
          "signature": "HFunc-\u003eSVector-\u003eGFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "mkK",
          "package": "Twofish",
          "signature": "a -\u003e Int -\u003e HFunc -\u003e KIndexor",
          "source": "src/Codec-Encryption-Twofish.html#mkK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkK",
          "normalized": "a-\u003eInt-\u003eHFunc-\u003eKIndexor",
          "package": "Twofish",
          "signature": "a-\u003eInt-\u003eHFunc-\u003eKIndexor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "mkS",
          "package": "Twofish",
          "signature": "a -\u003e SVector",
          "source": "src/Codec-Encryption-Twofish.html#mkS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkS",
          "normalized": "a-\u003eSVector",
          "package": "Twofish",
          "signature": "a-\u003eSVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a standard Twofish cipher from the given key\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "mkStdCipher",
          "package": "Twofish",
          "signature": "a -\u003e TwofishCipher",
          "source": "src/Codec-Encryption-Twofish.html#mkStdCipher",
          "type": "function"
        },
        "index": {
          "description": "Constructs standard Twofish cipher from the given key",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkStdCipher",
          "normalized": "a-\u003eTwofishCipher",
          "package": "Twofish",
          "partial": "Std Cipher",
          "signature": "a-\u003eTwofishCipher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkStdCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.Twofish",
          "name": "mkfH",
          "package": "Twofish",
          "signature": "a -\u003e HFunc",
          "source": "src/Codec-Encryption-Twofish.html#mkfH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "mkfH",
          "normalized": "a-\u003eHFunc",
          "package": "Twofish",
          "signature": "a-\u003eHFunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkfH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the \u003ccode\u003eq0\u003c/code\u003e byte vector using the algorithm specified in\n the Twofish paper.  This function isn't used by the cipher; instead\n the pre-computed array is contained in the code.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "q0o",
          "package": "Twofish",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Codec-Encryption-Twofish.html#q0o",
          "type": "function"
        },
        "index": {
          "description": "Generates the q0 byte vector using the algorithm specified in the Twofish paper This function isn used by the cipher instead the pre-computed array is contained in the code",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "q0o",
          "normalized": "Word-\u003eWord",
          "package": "Twofish",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:q0o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates the \u003ccode\u003eq1\u003c/code\u003e byte vector using the algorithm specified in\n the Twofish paper.  This function isn't used by the cipher; instead\n the pre-computed array is contained in the code.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Twofish",
          "name": "q1o",
          "package": "Twofish",
          "signature": "Word8 -\u003e Word8",
          "source": "src/Codec-Encryption-Twofish.html#q1o",
          "type": "function"
        },
        "index": {
          "description": "Generates the q1 byte vector using the algorithm specified in the Twofish paper This function isn used by the cipher instead the pre-computed array is contained in the code",
          "hierarchy": "Codec Encryption Twofish",
          "module": "Codec.Encryption.Twofish",
          "name": "q1o",
          "normalized": "Word-\u003eWord",
          "package": "Twofish",
          "signature": "Word-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:q1o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitlib",
          "name": "Bitlib",
          "package": "Twofish",
          "source": "src/Data-Bitlib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Bitlib",
          "module": "Data.Bitlib",
          "name": "Bitlib",
          "package": "Twofish",
          "partial": "Bitlib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitlib",
          "name": "pack",
          "package": "Twofish",
          "signature": "[a] -\u003e b",
          "source": "src/Data-Bitlib.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitlib",
          "module": "Data.Bitlib",
          "name": "pack",
          "normalized": "[a]-\u003eb",
          "package": "Twofish",
          "signature": "[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitlib",
          "name": "packMany",
          "package": "Twofish",
          "signature": "b -\u003e [a] -\u003e [b]",
          "source": "src/Data-Bitlib.html#packMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitlib",
          "module": "Data.Bitlib",
          "name": "packMany",
          "normalized": "a-\u003e[b]-\u003e[a]",
          "package": "Twofish",
          "partial": "Many",
          "signature": "b-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:packMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitlib",
          "name": "unpack",
          "package": "Twofish",
          "signature": "a -\u003e [b]",
          "source": "src/Data-Bitlib.html#unpack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitlib",
          "module": "Data.Bitlib",
          "name": "unpack",
          "normalized": "a-\u003e[b]",
          "package": "Twofish",
          "signature": "a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bitlib",
          "name": "unpackMany",
          "package": "Twofish",
          "signature": "[a] -\u003e [b]",
          "source": "src/Data-Bitlib.html#unpackMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bitlib",
          "module": "Data.Bitlib",
          "name": "unpackMany",
          "normalized": "[a]-\u003e[b]",
          "package": "Twofish",
          "partial": "Many",
          "signature": "[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:unpackMany"
      }
    }
  ]
]