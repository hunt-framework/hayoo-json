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
        "word": "cryptocipher"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll the cipher functionalities are available through the\n BlockCipher and StreamCipher classes.\n\u003c/p\u003e\u003cp\u003eA simplified example (with simplified error handling):\n\u003c/p\u003e\u003cpre\u003e import Crypto.Cipher\n import Data.ByteString (ByteString)\n import qualified Data.ByteString as B\n\n initAES256 :: ByteString -\u003e AES256\n initAES256 = either (error . show) cipherInit . makeKey\n\n cbcEncryption :: AES256 -\u003e ByteString -\u003e ByteString -\u003e ByteString\n cbcEncryption ctx ivRaw plainText = cbcEncrypt ctx iv plainText\n   where iv = maybe (error \"invalid IV\") id $ ivRaw\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher",
          "name": "Cipher",
          "package": "cryptocipher",
          "source": "src/Crypto-Cipher.html",
          "type": "module"
        },
        "index": {
          "description": "All the cipher functionalities are available through the BlockCipher and StreamCipher classes simplified example with simplified error handling import Crypto.Cipher import Data.ByteString ByteString import qualified Data.ByteString as initAES256 ByteString AES256 initAES256 either error show cipherInit makeKey cbcEncryption AES256 ByteString ByteString ByteString cbcEncryption ctx ivRaw plainText cbcEncrypt ctx iv plainText where iv maybe error invalid IV id ivRaw",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Cipher",
          "package": "cryptocipher",
          "partial": "Cipher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticated Encryption with Associated Data algorithms\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "AEAD",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "Authenticated Encryption with Associated Data algorithms",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "AEAD",
          "package": "cryptocipher",
          "partial": "AEAD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 128 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "AES128",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "AES128",
          "package": "cryptocipher",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 192 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "AES192",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "AES192",
          "package": "cryptocipher",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAES with 256 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "AES256",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "AES with bit key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "AES256",
          "package": "cryptocipher",
          "partial": "AES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:AES256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric block cipher class\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "BlockCipher",
          "package": "cryptocipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric block cipher class",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "BlockCipher",
          "package": "cryptocipher",
          "partial": "Block Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:BlockCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable keyed blowfish state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Blowfish",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "variable keyed blowfish state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Blowfish",
          "package": "cryptocipher",
          "partial": "Blowfish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128 bit keyed blowfish state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Blowfish128",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "bit keyed blowfish state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Blowfish128",
          "package": "cryptocipher",
          "partial": "Blowfish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e256 bit keyed blowfish state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Blowfish256",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "bit keyed blowfish state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Blowfish256",
          "package": "cryptocipher",
          "partial": "Blowfish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e448 bit keyed blowfish state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Blowfish448",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "bit keyed blowfish state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Blowfish448",
          "package": "cryptocipher",
          "partial": "Blowfish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish448"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64 bit keyed blowfish state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Blowfish64",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "bit keyed blowfish state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Blowfish64",
          "package": "cryptocipher",
          "partial": "Blowfish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Blowfish64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCamellia block cipher with 128 bit key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Camellia128",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "Camellia block cipher with bit key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Camellia128",
          "package": "cryptocipher",
          "partial": "Camellia",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Camellia128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric cipher class.\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Cipher",
          "package": "cryptocipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric cipher class",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Cipher",
          "package": "cryptocipher",
          "partial": "Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Cipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDES Context\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "DES",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "DES Context",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "DES",
          "package": "cryptocipher",
          "partial": "DES",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3DES where the first and third keys are equal, used in alternative direction\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "DES_EDE2",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "DES where the first and third keys are equal used in alternative direction",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "DES_EDE2",
          "package": "cryptocipher",
          "partial": "DES EDE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EDE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3DES with 3 different keys used in alternative direction\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "DES_EDE3",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "DES with different keys used in alternative direction",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "DES_EDE3",
          "package": "cryptocipher",
          "partial": "DES EDE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EDE3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3DES where the first and third keys are equal, used in the same direction\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "DES_EEE2",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "DES where the first and third keys are equal used in the same direction",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "DES_EEE2",
          "package": "cryptocipher",
          "partial": "DES EEE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EEE2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e3DES with 3 different keys used all in the same direction\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "DES_EEE3",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "DES with different keys used all in the same direction",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "DES_EEE3",
          "package": "cryptocipher",
          "partial": "DES EEE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:DES_EEE3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean IV parametrized by the cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "IV",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "an IV parametrized by the cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "IV",
          "package": "cryptocipher",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Key parametrized by the cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "Key",
          "package": "cryptocipher",
          "type": "data"
        },
        "index": {
          "description": "Key parametrized by the cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "Key",
          "package": "cryptocipher",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric stream cipher class\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "StreamCipher",
          "package": "cryptocipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric stream cipher class",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "StreamCipher",
          "package": "cryptocipher",
          "partial": "Stream Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#t:StreamCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend associated data into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "aeadAppendHeader",
          "package": "cryptocipher",
          "signature": "AEAD a -\u003e ByteString -\u003e AEAD a",
          "type": "function"
        },
        "index": {
          "description": "Append associated data into the AEAD state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "aeadAppendHeader",
          "normalized": "AEAD a-\u003eByteString-\u003eAEAD a",
          "package": "cryptocipher",
          "partial": "Append Header",
          "signature": "AEAD a-\u003eByteString-\u003eAEAD a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadAppendHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt input and append into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "aeadDecrypt",
          "package": "cryptocipher",
          "signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
          "type": "function"
        },
        "index": {
          "description": "Decrypt input and append into the AEAD state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "aeadDecrypt",
          "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "package": "cryptocipher",
          "partial": "Decrypt",
          "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt input and append into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "aeadEncrypt",
          "package": "cryptocipher",
          "signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
          "type": "function"
        },
        "index": {
          "description": "Encrypt input and append into the AEAD state",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "aeadEncrypt",
          "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "package": "cryptocipher",
          "partial": "Encrypt",
          "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize the AEAD state and create an authentification tag\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "aeadFinalize",
          "package": "cryptocipher",
          "signature": "AEAD a -\u003e Int -\u003e AuthTag",
          "type": "function"
        },
        "index": {
          "description": "Finalize the AEAD state and create an authentification tag",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "aeadFinalize",
          "normalized": "AEAD a-\u003eInt-\u003eAuthTag",
          "package": "cryptocipher",
          "partial": "Finalize",
          "signature": "AEAD a-\u003eInt-\u003eAuthTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new AEAD State\n\u003c/p\u003e\u003cp\u003eWhen Nothing is returns, it means the mode is not handled.\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "aeadInit",
          "package": "cryptocipher",
          "signature": "AEADMode -\u003e cipher -\u003e iv -\u003e Maybe (AEAD cipher)",
          "type": "method"
        },
        "index": {
          "description": "Initialize new AEAD State When Nothing is returns it means the mode is not handled",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "aeadInit",
          "normalized": "AEADMode-\u003ea-\u003eb-\u003eMaybe(AEAD a)",
          "package": "cryptocipher",
          "partial": "Init",
          "signature": "AEADMode-\u003ecipher-\u003eiv-\u003eMaybe(AEAD cipher)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:aeadInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size of block required for this block cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "blockSize",
          "package": "cryptocipher",
          "signature": "cipher -\u003e Int",
          "type": "method"
        },
        "index": {
          "description": "Return the size of block required for this block cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "blockSize",
          "normalized": "a-\u003eInt",
          "package": "cryptocipher",
          "partial": "Size",
          "signature": "cipher-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cbcDecrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cbcDecrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Decrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cbcDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cbcEncrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cbcEncrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Encrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cbcEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cfbDecrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the CFB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cfbDecrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Decrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cfbDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cfbEncrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the CFB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cfbEncrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Encrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cfbEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a cipher context from a key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cipherInit",
          "package": "cryptocipher",
          "signature": "Key cipher -\u003e cipher",
          "type": "method"
        },
        "index": {
          "description": "Initialize cipher context from key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cipherInit",
          "normalized": "Key a-\u003ea",
          "package": "cryptocipher",
          "partial": "Init",
          "signature": "Key cipher-\u003ecipher",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the size of the key required for this cipher.\n Some cipher accept any size for key\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cipherKeySize",
          "package": "cryptocipher",
          "signature": "cipher -\u003e KeySizeSpecifier",
          "type": "method"
        },
        "index": {
          "description": "return the size of the key required for this cipher Some cipher accept any size for key",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cipherKeySize",
          "normalized": "a-\u003eKeySizeSpecifier",
          "package": "cryptocipher",
          "partial": "Key Size",
          "signature": "cipher-\u003eKeySizeSpecifier",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherKeySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher name\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "cipherName",
          "package": "cryptocipher",
          "signature": "cipher -\u003e String",
          "type": "method"
        },
        "index": {
          "description": "Cipher name",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "cipherName",
          "normalized": "a-\u003eString",
          "package": "cryptocipher",
          "partial": "Name",
          "signature": "cipher-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:cipherName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombine using the CTR mode.\n\u003c/p\u003e\u003cp\u003eCTR mode produce a stream of randomized data that is combined\n (by XOR operation) with the input stream.\n\u003c/p\u003e\u003cp\u003eencryption and decryption are the same operation.\n\u003c/p\u003e\u003cp\u003einput can be of any size\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "ctrCombine",
          "package": "cryptocipher",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "combine using the CTR mode CTR mode produce stream of randomized data that is combined by XOR operation with the input stream encryption and decryption are the same operation input can be of any size",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "ctrCombine",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Combine",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ctrCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "ecbDecrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "Decrypt blocks the input string need to be multiple of the block size",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "ecbDecrypt",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Decrypt",
          "signature": "cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ecbDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "ecbEncrypt",
          "package": "cryptocipher",
          "signature": "cipher -\u003e ByteString -\u003e ByteString",
          "type": "method"
        },
        "index": {
          "description": "Encrypt blocks the input string need to be multiple of the block size",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "ecbEncrypt",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "cryptocipher",
          "partial": "Encrypt",
          "signature": "cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ecbEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement an IV by a number.\n\u003c/p\u003e\u003cp\u003eAssume the IV is in Big Endian format.\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "ivAdd",
          "package": "cryptocipher",
          "signature": "IV c -\u003e Int -\u003e IV c",
          "type": "function"
        },
        "index": {
          "description": "Increment an IV by number Assume the IV is in Big Endian format",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "ivAdd",
          "normalized": "IV a-\u003eInt-\u003eIV a",
          "package": "cryptocipher",
          "partial": "Add",
          "signature": "IV c-\u003eInt-\u003eIV c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:ivAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an IV for a specified block cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "makeIV",
          "package": "cryptocipher",
          "signature": "b -\u003e Maybe (IV c)",
          "type": "function"
        },
        "index": {
          "description": "Create an IV for specified block cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "makeIV",
          "normalized": "a-\u003eMaybe(IV b)",
          "package": "cryptocipher",
          "partial": "IV",
          "signature": "b-\u003eMaybe(IV c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:makeIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Key for a specified cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "makeKey",
          "package": "cryptocipher",
          "signature": "b -\u003e Either KeyError (Key c)",
          "type": "function"
        },
        "index": {
          "description": "Create Key for specified cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "makeKey",
          "normalized": "a-\u003eEither KeyError(Key b)",
          "package": "cryptocipher",
          "partial": "Key",
          "signature": "b-\u003eEither KeyError(Key c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:makeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an IV that is effectively representing the number 0\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "nullIV",
          "package": "cryptocipher",
          "signature": "IV c",
          "type": "function"
        },
        "index": {
          "description": "Create an IV that is effectively representing the number",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "nullIV",
          "package": "cryptocipher",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:nullIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine using the stream cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "streamCombine",
          "package": "cryptocipher",
          "signature": "cipher -\u003e ByteString -\u003e (ByteString, cipher)",
          "type": "method"
        },
        "index": {
          "description": "Combine using the stream cipher",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "streamCombine",
          "normalized": "a-\u003eByteString-\u003e(ByteString,a)",
          "package": "cryptocipher",
          "partial": "Combine",
          "signature": "cipher-\u003eByteString-\u003e(ByteString,cipher)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:streamCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "xtsDecrypt",
          "package": "cryptocipher",
          "signature": "xtsDecrypt",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "xtsDecrypt",
          "package": "cryptocipher",
          "partial": "Decrypt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:xtsDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
          "module": "Crypto.Cipher",
          "name": "xtsEncrypt",
          "package": "cryptocipher",
          "signature": "xtsEncrypt",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
          "hierarchy": "Crypto Cipher",
          "module": "Crypto.Cipher",
          "name": "xtsEncrypt",
          "package": "cryptocipher",
          "partial": "Encrypt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/cryptocipher/docs/Crypto-Cipher.html#v:xtsEncrypt"
      }
    }
  ]
]