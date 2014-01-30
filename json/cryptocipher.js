[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll the cipher functionalities are available through the\n BlockCipher and StreamCipher classes.\n\u003c/p\u003e\u003cp\u003eA simplified example (with simplified error handling):\n\u003c/p\u003e\u003cpre\u003e import Crypto.Cipher\n import Data.ByteString (ByteString)\n import qualified Data.ByteString as B\n\n initAES256 :: ByteString -\u003e AES256\n initAES256 = either (error . show) cipherInit . makeKey\n\n cbcEncryption :: AES256 -\u003e ByteString -\u003e ByteString -\u003e ByteString\n cbcEncryption ctx ivRaw plainText = cbcEncrypt ctx iv plainText\n   where iv = maybe (error \"invalid IV\") id $ ivRaw\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "module",
        "fct-source": "src/Crypto-Cipher.html",
        "fct-type": "module",
        "title": "Cipher"
      },
      "index": {
        "description": "All the cipher functionalities are available through the BlockCipher and StreamCipher classes simplified example with simplified error handling import Crypto.Cipher import Data.ByteString ByteString import qualified Data.ByteString as initAES256 ByteString AES256 initAES256 either error show cipherInit makeKey cbcEncryption AES256 ByteString ByteString ByteString cbcEncryption ctx ivRaw plainText cbcEncrypt ctx iv plainText where iv maybe error invalid IV id ivRaw",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Cipher",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AEAD",
      "description": {
        "fct-descr": "\u003cp\u003eAuthenticated Encryption with Associated Data algorithms\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AEAD"
      },
      "index": {
        "description": "Authenticated Encryption with Associated Data algorithms",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "AEAD",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "AEAD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES128",
      "description": {
        "fct-descr": "\u003cp\u003eAES with 128 bit key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AES128"
      },
      "index": {
        "description": "AES with bit key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "AES128",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES192",
      "description": {
        "fct-descr": "\u003cp\u003eAES with 192 bit key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AES192"
      },
      "index": {
        "description": "AES with bit key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "AES192",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES256",
      "description": {
        "fct-descr": "\u003cp\u003eAES with 256 bit key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "AES256"
      },
      "index": {
        "description": "AES with bit key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "AES256",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:BlockCipher",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetric block cipher class\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "BlockCipher"
      },
      "index": {
        "description": "Symmetric block cipher class",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "BlockCipher",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Block Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish",
      "description": {
        "fct-descr": "\u003cp\u003evariable keyed blowfish state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Blowfish"
      },
      "index": {
        "description": "variable keyed blowfish state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Blowfish",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish128",
      "description": {
        "fct-descr": "\u003cp\u003e128 bit keyed blowfish state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Blowfish128"
      },
      "index": {
        "description": "bit keyed blowfish state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Blowfish128",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish256",
      "description": {
        "fct-descr": "\u003cp\u003e256 bit keyed blowfish state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Blowfish256"
      },
      "index": {
        "description": "bit keyed blowfish state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Blowfish256",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish448",
      "description": {
        "fct-descr": "\u003cp\u003e448 bit keyed blowfish state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Blowfish448"
      },
      "index": {
        "description": "bit keyed blowfish state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Blowfish448",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish64",
      "description": {
        "fct-descr": "\u003cp\u003e64 bit keyed blowfish state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Blowfish64"
      },
      "index": {
        "description": "bit keyed blowfish state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Blowfish64",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Camellia128",
      "description": {
        "fct-descr": "\u003cp\u003eCamellia block cipher with 128 bit key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Camellia128"
      },
      "index": {
        "description": "Camellia block cipher with bit key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Camellia128",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Camellia",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Cipher",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetric cipher class.\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Cipher"
      },
      "index": {
        "description": "Symmetric cipher class",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Cipher",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES",
      "description": {
        "fct-descr": "\u003cp\u003eDES Context\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DES"
      },
      "index": {
        "description": "DES Context",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "DES",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EDE2",
      "description": {
        "fct-descr": "\u003cp\u003e3DES where the first and third keys are equal, used in alternative direction\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DES_EDE2"
      },
      "index": {
        "description": "DES where the first and third keys are equal used in alternative direction",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "DES_EDE2",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "DES EDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EDE3",
      "description": {
        "fct-descr": "\u003cp\u003e3DES with 3 different keys used in alternative direction\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DES_EDE3"
      },
      "index": {
        "description": "DES with different keys used in alternative direction",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "DES_EDE3",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "DES EDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EEE2",
      "description": {
        "fct-descr": "\u003cp\u003e3DES where the first and third keys are equal, used in the same direction\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DES_EEE2"
      },
      "index": {
        "description": "DES where the first and third keys are equal used in the same direction",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "DES_EEE2",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "DES EEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EEE3",
      "description": {
        "fct-descr": "\u003cp\u003e3DES with 3 different keys used all in the same direction\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "DES_EEE3"
      },
      "index": {
        "description": "DES with different keys used all in the same direction",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "DES_EEE3",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "DES EEE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:IV",
      "description": {
        "fct-descr": "\u003cp\u003ean IV parametrized by the cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "IV"
      },
      "index": {
        "description": "an IV parametrized by the cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "IV",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003ea Key parametrized by the cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Key parametrized by the cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "Key",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:StreamCipher",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetric stream cipher class\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "StreamCipher"
      },
      "index": {
        "description": "Symmetric stream cipher class",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "StreamCipher",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Stream Cipher",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadAppendHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAppend associated data into the AEAD state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "AEAD a -\u003e ByteString -\u003e AEAD a",
        "fct-type": "function",
        "title": "aeadAppendHeader"
      },
      "index": {
        "description": "Append associated data into the AEAD state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "aeadAppendHeader",
        "normalized": "AEAD a-\u003eByteString-\u003eAEAD a",
        "package": "cryptocipher",
        "partial": "Append Header",
        "signature": "AEAD a-\u003eByteString-\u003eAEAD a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadDecrypt",
      "description": {
        "fct-descr": "\u003cp\u003eDecrypt input and append into the AEAD state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
        "fct-type": "function",
        "title": "aeadDecrypt"
      },
      "index": {
        "description": "Decrypt input and append into the AEAD state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "aeadDecrypt",
        "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
        "package": "cryptocipher",
        "partial": "Decrypt",
        "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eEncrypt input and append into the AEAD state\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
        "fct-type": "function",
        "title": "aeadEncrypt"
      },
      "index": {
        "description": "Encrypt input and append into the AEAD state",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "aeadEncrypt",
        "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
        "package": "cryptocipher",
        "partial": "Encrypt",
        "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadFinalize",
      "description": {
        "fct-descr": "\u003cp\u003eFinalize the AEAD state and create an authentification tag\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "AEAD a -\u003e Int -\u003e AuthTag",
        "fct-type": "function",
        "title": "aeadFinalize"
      },
      "index": {
        "description": "Finalize the AEAD state and create an authentification tag",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "aeadFinalize",
        "normalized": "AEAD a-\u003eInt-\u003eAuthTag",
        "package": "cryptocipher",
        "partial": "Finalize",
        "signature": "AEAD a-\u003eInt-\u003eAuthTag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a new AEAD State\n\u003c/p\u003e\u003cp\u003eWhen Nothing is returns, it means the mode is not handled.\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "AEADMode -\u003e cipher -\u003e iv -\u003e Maybe (AEAD cipher)",
        "fct-type": "method",
        "title": "aeadInit"
      },
      "index": {
        "description": "Initialize new AEAD State When Nothing is returns it means the mode is not handled",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "aeadInit",
        "normalized": "AEADMode-\u003ea-\u003eb-\u003eMaybe(AEAD a)",
        "package": "cryptocipher",
        "partial": "Init",
        "signature": "AEADMode-\u003ecipher-\u003eiv-\u003eMaybe(AEAD cipher)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:blockSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the size of block required for this block cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e Int",
        "fct-type": "method",
        "title": "blockSize"
      },
      "index": {
        "description": "Return the size of block required for this block cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "blockSize",
        "normalized": "a-\u003eInt",
        "package": "cryptocipher",
        "partial": "Size",
        "signature": "cipher-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cbcDecrypt",
      "description": {
        "fct-descr": "\u003cp\u003edecrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "cbcDecrypt"
      },
      "index": {
        "description": "decrypt using the CBC mode input need to be multiple of the blocksize",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cbcDecrypt",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Decrypt",
        "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cbcEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eencrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "cbcEncrypt"
      },
      "index": {
        "description": "encrypt using the CBC mode input need to be multiple of the blocksize",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cbcEncrypt",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Encrypt",
        "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cfbDecrypt",
      "description": {
        "fct-descr": "\u003cp\u003edecrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "cfbDecrypt"
      },
      "index": {
        "description": "decrypt using the CFB mode input need to be multiple of the blocksize",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cfbDecrypt",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Decrypt",
        "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cfbEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eencrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "cfbEncrypt"
      },
      "index": {
        "description": "encrypt using the CFB mode input need to be multiple of the blocksize",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cfbEncrypt",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Encrypt",
        "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherInit",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize a cipher context from a key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "Key cipher -\u003e cipher",
        "fct-type": "method",
        "title": "cipherInit"
      },
      "index": {
        "description": "Initialize cipher context from key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cipherInit",
        "normalized": "Key a-\u003ea",
        "package": "cryptocipher",
        "partial": "Init",
        "signature": "Key cipher-\u003ecipher"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherKeySize",
      "description": {
        "fct-descr": "\u003cp\u003ereturn the size of the key required for this cipher.\n Some cipher accept any size for key\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e KeySizeSpecifier",
        "fct-type": "method",
        "title": "cipherKeySize"
      },
      "index": {
        "description": "return the size of the key required for this cipher Some cipher accept any size for key",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cipherKeySize",
        "normalized": "a-\u003eKeySizeSpecifier",
        "package": "cryptocipher",
        "partial": "Key Size",
        "signature": "cipher-\u003eKeySizeSpecifier"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherName",
      "description": {
        "fct-descr": "\u003cp\u003eCipher name\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e String",
        "fct-type": "method",
        "title": "cipherName"
      },
      "index": {
        "description": "Cipher name",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "cipherName",
        "normalized": "a-\u003eString",
        "package": "cryptocipher",
        "partial": "Name",
        "signature": "cipher-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ctrCombine",
      "description": {
        "fct-descr": "\u003cp\u003ecombine using the CTR mode.\n\u003c/p\u003e\u003cp\u003eCTR mode produce a stream of randomized data that is combined\n (by XOR operation) with the input stream.\n\u003c/p\u003e\u003cp\u003eencryption and decryption are the same operation.\n\u003c/p\u003e\u003cp\u003einput can be of any size\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "ctrCombine"
      },
      "index": {
        "description": "combine using the CTR mode CTR mode produce stream of randomized data that is combined by XOR operation with the input stream encryption and decryption are the same operation input can be of any size",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "ctrCombine",
        "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Combine",
        "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ecbDecrypt",
      "description": {
        "fct-descr": "\u003cp\u003eDecrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "ecbDecrypt"
      },
      "index": {
        "description": "Decrypt blocks the input string need to be multiple of the block size",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "ecbDecrypt",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Decrypt",
        "signature": "cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ecbEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eEncrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e ByteString -\u003e ByteString",
        "fct-type": "method",
        "title": "ecbEncrypt"
      },
      "index": {
        "description": "Encrypt blocks the input string need to be multiple of the block size",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "ecbEncrypt",
        "normalized": "a-\u003eByteString-\u003eByteString",
        "package": "cryptocipher",
        "partial": "Encrypt",
        "signature": "cipher-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ivAdd",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement an IV by a number.\n\u003c/p\u003e\u003cp\u003eAssume the IV is in Big Endian format.\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "IV c -\u003e Int -\u003e IV c",
        "fct-type": "function",
        "title": "ivAdd"
      },
      "index": {
        "description": "Increment an IV by number Assume the IV is in Big Endian format",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "ivAdd",
        "normalized": "IV a-\u003eInt-\u003eIV a",
        "package": "cryptocipher",
        "partial": "Add",
        "signature": "IV c-\u003eInt-\u003eIV c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:makeIV",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an IV for a specified block cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "b -\u003e Maybe (IV c)",
        "fct-type": "function",
        "title": "makeIV"
      },
      "index": {
        "description": "Create an IV for specified block cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "makeIV",
        "normalized": "a-\u003eMaybe(IV b)",
        "package": "cryptocipher",
        "partial": "IV",
        "signature": "b-\u003eMaybe(IV c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:makeKey",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Key for a specified cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "b -\u003e Either KeyError (Key c)",
        "fct-type": "function",
        "title": "makeKey"
      },
      "index": {
        "description": "Create Key for specified cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "makeKey",
        "normalized": "a-\u003eEither KeyError(Key b)",
        "package": "cryptocipher",
        "partial": "Key",
        "signature": "b-\u003eEither KeyError(Key c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:nullIV",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an IV that is effectively representing the number 0\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "IV c",
        "fct-type": "function",
        "title": "nullIV"
      },
      "index": {
        "description": "Create an IV that is effectively representing the number",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "nullIV",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "IV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:streamCombine",
      "description": {
        "fct-descr": "\u003cp\u003eCombine using the stream cipher\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "cipher -\u003e ByteString -\u003e (ByteString, cipher)",
        "fct-type": "method",
        "title": "streamCombine"
      },
      "index": {
        "description": "Combine using the stream cipher",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "streamCombine",
        "normalized": "a-\u003eByteString-\u003e(ByteString,a)",
        "package": "cryptocipher",
        "partial": "Combine",
        "signature": "cipher-\u003eByteString-\u003e(ByteString,cipher)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:xtsDecrypt",
      "description": {
        "fct-descr": "\u003cp\u003edecrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "xtsDecrypt",
        "fct-type": "method",
        "title": "xtsDecrypt"
      },
      "index": {
        "description": "decrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "xtsDecrypt",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Decrypt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:xtsEncrypt",
      "description": {
        "fct-descr": "\u003cp\u003eencrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
        "fct-module": "Crypto.Cipher",
        "fct-package": "cryptocipher",
        "fct-signature": "xtsEncrypt",
        "fct-type": "method",
        "title": "xtsEncrypt"
      },
      "index": {
        "description": "encrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
        "hierarchy": "Crypto Cipher",
        "module": "Crypto.Cipher",
        "name": "xtsEncrypt",
        "normalized": "",
        "package": "cryptocipher",
        "partial": "Encrypt",
        "signature": ""
      }
    }
  }
]