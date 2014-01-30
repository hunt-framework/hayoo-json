[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements the Twofish symmetric block cipher, designed by:\n Bruce Schneier, John Kelsey, Doug Whiting, David Wagner, Chris Hall,\n and Niels Ferguson.\n\u003c/p\u003e\u003cp\u003eImplemented from the paper entitled \u003ca\u003eTwofish: A 128-Bit Block Cipher\u003c/a\u003e,\n \u003ca\u003ehttp://www.counterpane.com/twofish.html\u003c/a\u003e\n with help from the reference C implementation.\n\u003c/p\u003e\u003cp\u003eThis module provides two methods for constructiong a Twofish cipher\n from a 128, 192 or 256 bit key.  The mkCipher function allows you \n to customize the number of rounds, while the mkStdCipher function\n gives you the standard 16 rounds.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-Twofish.html",
        "fct-type": "module",
        "title": "Twofish"
      },
      "index": {
        "description": "Implements the Twofish symmetric block cipher designed by Bruce Schneier John Kelsey Doug Whiting David Wagner Chris Hall and Niels Ferguson Implemented from the paper entitled Twofish Bit Block Cipher http www.counterpane.com twofish.html with help from the reference implementation This module provides two methods for constructiong Twofish cipher from or bit key The mkCipher function allows you to customize the number of rounds while the mkStdCipher function gives you the standard rounds",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "Twofish",
        "normalized": "",
        "package": "Twofish",
        "partial": "Twofish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eA key is a vector of bytes of a certain size (given in bits).\n Twofish suppports key sizes of 128, 192, and 256 bits.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "class",
        "fct-source": "src/Codec-Encryption-Twofish.html#Key",
        "fct-type": "class",
        "title": "Key"
      },
      "index": {
        "description": "key is vector of bytes of certain size given in bits Twofish suppports key sizes of and bits",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "Key",
        "normalized": "",
        "package": "Twofish",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#t:TwofishCipher",
      "description": {
        "fct-descr": "\u003cp\u003eA keyed Twofish cipher capable of both encryption and decryption.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "data",
        "fct-source": "src/Codec-Encryption-Twofish.html#TwofishCipher",
        "fct-type": "data",
        "title": "TwofishCipher"
      },
      "index": {
        "description": "keyed Twofish cipher capable of both encryption and decryption",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "TwofishCipher",
        "normalized": "",
        "package": "Twofish",
        "partial": "Twofish Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:decrypt",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "TwofishCipher -\u003e Word128 -\u003e Word128",
        "fct-source": "src/Codec-Encryption-Twofish.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "decrypt",
        "normalized": "TwofishCipher-\u003eWord-\u003eWord",
        "package": "Twofish",
        "partial": "",
        "signature": "TwofishCipher-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:encrypt",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "TwofishCipher -\u003e Word128 -\u003e Word128",
        "fct-source": "src/Codec-Encryption-Twofish.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "encrypt",
        "normalized": "TwofishCipher-\u003eWord-\u003eWord",
        "package": "Twofish",
        "partial": "",
        "signature": "TwofishCipher-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:encryptRounds",
      "description": {
        "fct-descr": "\u003cp\u003eThis function performs n rounds of the encryption algorithm\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "GFunc -\u003e KIndexor -\u003e Int -\u003e Block -\u003e Block",
        "fct-source": "src/Codec-Encryption-Twofish.html#encryptRounds",
        "fct-type": "function",
        "title": "encryptRounds"
      },
      "index": {
        "description": "This function performs rounds of the encryption algorithm",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "encryptRounds",
        "normalized": "GFunc-\u003eKIndexor-\u003eInt-\u003eBlock-\u003eBlock",
        "package": "Twofish",
        "partial": "Rounds",
        "signature": "GFunc-\u003eKIndexor-\u003eInt-\u003eBlock-\u003eBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkCipher",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an encryption/decryption cipher from the given key, and\n a given number of rounds (standard Twofish uses 16 rounds)\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "Int -\u003e a -\u003e TwofishCipher",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkCipher",
        "fct-type": "function",
        "title": "mkCipher"
      },
      "index": {
        "description": "Constructs an encryption decryption cipher from the given key and given number of rounds standard Twofish uses rounds",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkCipher",
        "normalized": "Int-\u003ea-\u003eTwofishCipher",
        "package": "Twofish",
        "partial": "Cipher",
        "signature": "Int-\u003ea-\u003eTwofishCipher"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkG",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "HFunc -\u003e SVector -\u003e GFunc",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkG",
        "fct-type": "function",
        "title": "mkG"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkG",
        "normalized": "HFunc-\u003eSVector-\u003eGFunc",
        "package": "Twofish",
        "partial": "",
        "signature": "HFunc-\u003eSVector-\u003eGFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkK",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "a -\u003e Int -\u003e HFunc -\u003e KIndexor",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkK",
        "fct-type": "function",
        "title": "mkK"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkK",
        "normalized": "a-\u003eInt-\u003eHFunc-\u003eKIndexor",
        "package": "Twofish",
        "partial": "",
        "signature": "a-\u003eInt-\u003eHFunc-\u003eKIndexor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkS",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "a -\u003e SVector",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkS",
        "fct-type": "function",
        "title": "mkS"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkS",
        "normalized": "a-\u003eSVector",
        "package": "Twofish",
        "partial": "",
        "signature": "a-\u003eSVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkStdCipher",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a standard Twofish cipher from the given key\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "a -\u003e TwofishCipher",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkStdCipher",
        "fct-type": "function",
        "title": "mkStdCipher"
      },
      "index": {
        "description": "Constructs standard Twofish cipher from the given key",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkStdCipher",
        "normalized": "a-\u003eTwofishCipher",
        "package": "Twofish",
        "partial": "Std Cipher",
        "signature": "a-\u003eTwofishCipher"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:mkfH",
      "description": {
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "a -\u003e HFunc",
        "fct-source": "src/Codec-Encryption-Twofish.html#mkfH",
        "fct-type": "function",
        "title": "mkfH"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "mkfH",
        "normalized": "a-\u003eHFunc",
        "package": "Twofish",
        "partial": "",
        "signature": "a-\u003eHFunc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:q0o",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the \u003ccode\u003eq0\u003c/code\u003e byte vector using the algorithm specified in\n the Twofish paper.  This function isn't used by the cipher; instead\n the pre-computed array is contained in the code.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Codec-Encryption-Twofish.html#q0o",
        "fct-type": "function",
        "title": "q0o"
      },
      "index": {
        "description": "Generates the q0 byte vector using the algorithm specified in the Twofish paper This function isn used by the cipher instead the pre-computed array is contained in the code",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "q0o",
        "normalized": "Word-\u003eWord",
        "package": "Twofish",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Codec-Encryption-Twofish.html#v:q1o",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates the \u003ccode\u003eq1\u003c/code\u003e byte vector using the algorithm specified in\n the Twofish paper.  This function isn't used by the cipher; instead\n the pre-computed array is contained in the code.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Twofish",
        "fct-package": "Twofish",
        "fct-signature": "Word8 -\u003e Word8",
        "fct-source": "src/Codec-Encryption-Twofish.html#q1o",
        "fct-type": "function",
        "title": "q1o"
      },
      "index": {
        "description": "Generates the q1 byte vector using the algorithm specified in the Twofish paper This function isn used by the cipher instead the pre-computed array is contained in the code",
        "hierarchy": "Codec Encryption Twofish",
        "module": "Codec.Encryption.Twofish",
        "name": "q1o",
        "normalized": "Word-\u003eWord",
        "package": "Twofish",
        "partial": "",
        "signature": "Word-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#",
      "description": {
        "fct-module": "Data.Bitlib",
        "fct-package": "Twofish",
        "fct-signature": "module",
        "fct-source": "src/Data-Bitlib.html",
        "fct-type": "module",
        "title": "Bitlib"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bitlib",
        "module": "Data.Bitlib",
        "name": "Bitlib",
        "normalized": "",
        "package": "Twofish",
        "partial": "Bitlib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:pack",
      "description": {
        "fct-module": "Data.Bitlib",
        "fct-package": "Twofish",
        "fct-signature": "[a] -\u003e b",
        "fct-source": "src/Data-Bitlib.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bitlib",
        "module": "Data.Bitlib",
        "name": "pack",
        "normalized": "[a]-\u003eb",
        "package": "Twofish",
        "partial": "",
        "signature": "[a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:packMany",
      "description": {
        "fct-module": "Data.Bitlib",
        "fct-package": "Twofish",
        "fct-signature": "b -\u003e [a] -\u003e [b]",
        "fct-source": "src/Data-Bitlib.html#packMany",
        "fct-type": "function",
        "title": "packMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bitlib",
        "module": "Data.Bitlib",
        "name": "packMany",
        "normalized": "a-\u003e[b]-\u003e[a]",
        "package": "Twofish",
        "partial": "Many",
        "signature": "b-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:unpack",
      "description": {
        "fct-module": "Data.Bitlib",
        "fct-package": "Twofish",
        "fct-signature": "a -\u003e [b]",
        "fct-source": "src/Data-Bitlib.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bitlib",
        "module": "Data.Bitlib",
        "name": "unpack",
        "normalized": "a-\u003e[b]",
        "package": "Twofish",
        "partial": "",
        "signature": "a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Twofish/docs/Data-Bitlib.html#v:unpackMany",
      "description": {
        "fct-module": "Data.Bitlib",
        "fct-package": "Twofish",
        "fct-signature": "[a] -\u003e [b]",
        "fct-source": "src/Data-Bitlib.html#unpackMany",
        "fct-type": "function",
        "title": "unpackMany"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Bitlib",
        "module": "Data.Bitlib",
        "name": "unpackMany",
        "normalized": "[a]-\u003e[b]",
        "package": "Twofish",
        "partial": "Many",
        "signature": "[a]-\u003e[b]"
      }
    }
  }
]