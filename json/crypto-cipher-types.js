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
        "word": "crypto-cipher-types"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emutable and unsafe interface for Block ciphers.\n export a BlockCipherIO class\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "Unsafe",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "mutable and unsafe interface for Block ciphers export BlockCipherIO class",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "Unsafe",
          "package": "crypto-cipher-types",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric block cipher class, mutable API\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "BlockCipherIO",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#BlockCipherIO",
          "type": "class"
        },
        "index": {
          "description": "Symmetric block cipher class mutable API",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "BlockCipherIO",
          "package": "crypto-cipher-types",
          "partial": "Block Cipher IO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#t:BlockCipherIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLength of the pointed data\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "BufferLength",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#BufferLength",
          "type": "type"
        },
        "index": {
          "description": "Length of the pointed data",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "BufferLength",
          "package": "crypto-cipher-types",
          "partial": "Buffer Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#t:BufferLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointer to the destination data\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrDest",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#PtrDest",
          "type": "type"
        },
        "index": {
          "description": "pointer to the destination data",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrDest",
          "package": "crypto-cipher-types",
          "partial": "Ptr Dest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#t:PtrDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointer to the IV data\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrIV",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#PtrIV",
          "type": "type"
        },
        "index": {
          "description": "pointer to the IV data",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrIV",
          "package": "crypto-cipher-types",
          "partial": "Ptr IV",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#t:PtrIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epointer to the source data\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrSource",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#PtrSource",
          "type": "type"
        },
        "index": {
          "description": "pointer to the source data",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "PtrSource",
          "package": "crypto-cipher-types",
          "partial": "Ptr Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#t:PtrSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "cbcDecryptMutable",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e PtrIV -\u003e PtrDest -\u003e PtrSource -\u003e BufferLength -\u003e IO ()",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#cbcDecryptMutable",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "cbcDecryptMutable",
          "normalized": "a-\u003ePtrIV-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "package": "crypto-cipher-types",
          "partial": "Decrypt Mutable",
          "signature": "cipher-\u003ePtrIV-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#v:cbcDecryptMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "cbcEncryptMutable",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e PtrIV -\u003e PtrDest -\u003e PtrSource -\u003e BufferLength -\u003e IO ()",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#cbcEncryptMutable",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "cbcEncryptMutable",
          "normalized": "a-\u003ePtrIV-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "package": "crypto-cipher-types",
          "partial": "Encrypt Mutable",
          "signature": "cipher-\u003ePtrIV-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#v:cbcEncryptMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt using the ECB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "ecbDecryptMutable",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e PtrDest -\u003e PtrSource -\u003e BufferLength -\u003e IO ()",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#ecbDecryptMutable",
          "type": "method"
        },
        "index": {
          "description": "Decrypt using the ECB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "ecbDecryptMutable",
          "normalized": "a-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "package": "crypto-cipher-types",
          "partial": "Decrypt Mutable",
          "signature": "cipher-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#v:ecbDecryptMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt using the ECB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "ecbEncryptMutable",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e PtrDest -\u003e PtrSource -\u003e BufferLength -\u003e IO ()",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#ecbEncryptMutable",
          "type": "method"
        },
        "index": {
          "description": "Encrypt using the ECB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "ecbEncryptMutable",
          "normalized": "a-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "package": "crypto-cipher-types",
          "partial": "Encrypt Mutable",
          "signature": "cipher-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#v:ecbEncryptMutable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper to use a purer interface\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "onBlock",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e (ByteString -\u003e ByteString) -\u003e PtrDest -\u003e PtrSource -\u003e BufferLength -\u003e IO ()",
          "source": "src/Crypto-Cipher-Types-BlockIO.html#onBlock",
          "type": "function"
        },
        "index": {
          "description": "Helper to use purer interface",
          "hierarchy": "Crypto Cipher Types Unsafe",
          "module": "Crypto.Cipher.Types.Unsafe",
          "name": "onBlock",
          "normalized": "a-\u003e(ByteString-\u003eByteString)-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "package": "crypto-cipher-types",
          "partial": "Block",
          "signature": "cipher-\u003e(ByteString-\u003eByteString)-\u003ePtrDest-\u003ePtrSource-\u003eBufferLength-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types-Unsafe.html#v:onBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003esymmetric cipher basic types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "Types",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types.html",
          "type": "module"
        },
        "index": {
          "description": "symmetric cipher basic types",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "Types",
          "package": "crypto-cipher-types",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthenticated Encryption with Associated Data algorithms\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Block.html#AEAD",
          "type": "data"
        },
        "index": {
          "description": "Authenticated Encryption with Associated Data algorithms",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD",
          "package": "crypto-cipher-types",
          "partial": "AEAD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:AEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAEAD Mode\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "AEADMode",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "data"
        },
        "index": {
          "description": "AEAD Mode",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEADMode",
          "package": "crypto-cipher-types",
          "partial": "AEADMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:AEADMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of AEAD Mode implementation\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "AEADModeImpl",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Block.html#AEADModeImpl",
          "type": "class"
        },
        "index": {
          "description": "Class of AEAD Mode implementation",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEADModeImpl",
          "package": "crypto-cipher-types",
          "partial": "AEADMode Impl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:AEADModeImpl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for any AEADState\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "AEADState",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Block.html#AEADState",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for any AEADState",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEADState",
          "package": "crypto-cipher-types",
          "partial": "AEADState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:AEADState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentification Tag for AE cipher mode\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "AuthTag",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#AuthTag",
          "type": "newtype"
        },
        "index": {
          "description": "Authentification Tag for AE cipher mode",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AuthTag",
          "package": "crypto-cipher-types",
          "partial": "Auth Tag",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:AuthTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric block cipher class\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "BlockCipher",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Block.html#BlockCipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric block cipher class",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "BlockCipher",
          "package": "crypto-cipher-types",
          "partial": "Block Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:BlockCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric cipher class.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "Cipher",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#Cipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric cipher class",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "Cipher",
          "package": "crypto-cipher-types",
          "partial": "Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:Cipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset inside an XTS data unit, measured in block size.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "DataUnitOffset",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#DataUnitOffset",
          "type": "type"
        },
        "index": {
          "description": "Offset inside an XTS data unit measured in block size",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "DataUnitOffset",
          "package": "crypto-cipher-types",
          "partial": "Data Unit Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:DataUnitOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean IV parametrized by the cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "IV",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#IV",
          "type": "data"
        },
        "index": {
          "description": "an IV parametrized by the cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "IV",
          "package": "crypto-cipher-types",
          "partial": "IV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:IV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Key parametrized by the cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "Key",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Key parametrized by the cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "Key",
          "package": "crypto-cipher-types",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible Error that can be reported when initializating a key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "KeyError",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#KeyError",
          "type": "data"
        },
        "index": {
          "description": "Possible Error that can be reported when initializating key",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeyError",
          "package": "crypto-cipher-types",
          "partial": "Key Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:KeyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent specifier for key size in bytes\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeSpecifier",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Base.html#KeySizeSpecifier",
          "type": "data"
        },
        "index": {
          "description": "Different specifier for key size in bytes",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeSpecifier",
          "package": "crypto-cipher-types",
          "partial": "Key Size Specifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:KeySizeSpecifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric stream cipher class\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "StreamCipher",
          "package": "crypto-cipher-types",
          "source": "src/Crypto-Cipher-Types-Stream.html#StreamCipher",
          "type": "class"
        },
        "index": {
          "description": "Symmetric stream cipher class",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "StreamCipher",
          "package": "crypto-cipher-types",
          "partial": "Stream Cipher",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#t:StreamCipher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD",
          "package": "crypto-cipher-types",
          "signature": "AEAD cipher (AEADState cipher)",
          "source": "src/Crypto-Cipher-Types-Block.html#AEAD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD",
          "package": "crypto-cipher-types",
          "partial": "AEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEADState",
          "package": "crypto-cipher-types",
          "signature": "AEADState st",
          "source": "src/Crypto-Cipher-Types-Block.html#AEADState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEADState",
          "package": "crypto-cipher-types",
          "partial": "AEADState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEADState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_CCM",
          "package": "crypto-cipher-types",
          "signature": "AEAD_CCM",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_CCM",
          "package": "crypto-cipher-types",
          "partial": "AEAD CCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD_CCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_CWC",
          "package": "crypto-cipher-types",
          "signature": "AEAD_CWC",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_CWC",
          "package": "crypto-cipher-types",
          "partial": "AEAD CWC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD_CWC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_EAX",
          "package": "crypto-cipher-types",
          "signature": "AEAD_EAX",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_EAX",
          "package": "crypto-cipher-types",
          "partial": "AEAD EAX",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD_EAX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_GCM",
          "package": "crypto-cipher-types",
          "signature": "AEAD_GCM",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_GCM",
          "package": "crypto-cipher-types",
          "partial": "AEAD GCM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD_GCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_OCB",
          "package": "crypto-cipher-types",
          "signature": "AEAD_OCB",
          "source": "src/Crypto-Cipher-Types-Base.html#AEADMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AEAD_OCB",
          "package": "crypto-cipher-types",
          "partial": "AEAD OCB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AEAD_OCB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "AuthTag",
          "package": "crypto-cipher-types",
          "signature": "AuthTag ByteString",
          "source": "src/Crypto-Cipher-Types-Base.html#AuthTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "AuthTag",
          "package": "crypto-cipher-types",
          "partial": "Auth Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:AuthTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorInvalid",
          "package": "crypto-cipher-types",
          "signature": "KeyErrorInvalid String",
          "source": "src/Crypto-Cipher-Types-Base.html#KeyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorInvalid",
          "package": "crypto-cipher-types",
          "partial": "Key Error Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeyErrorInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorTooBig",
          "package": "crypto-cipher-types",
          "signature": "KeyErrorTooBig",
          "source": "src/Crypto-Cipher-Types-Base.html#KeyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorTooBig",
          "package": "crypto-cipher-types",
          "partial": "Key Error Too Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeyErrorTooBig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorTooSmall",
          "package": "crypto-cipher-types",
          "signature": "KeyErrorTooSmall",
          "source": "src/Crypto-Cipher-Types-Base.html#KeyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeyErrorTooSmall",
          "package": "crypto-cipher-types",
          "partial": "Key Error Too Small",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeyErrorTooSmall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eone of the specified values\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeEnum",
          "package": "crypto-cipher-types",
          "signature": "KeySizeEnum [Int]",
          "source": "src/Crypto-Cipher-Types-Base.html#KeySizeSpecifier",
          "type": "function"
        },
        "index": {
          "description": "one of the specified values",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeEnum",
          "normalized": "KeySizeEnum[Int]",
          "package": "crypto-cipher-types",
          "partial": "Key Size Enum",
          "signature": "KeySizeEnum[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeySizeEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea specific size\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeFixed",
          "package": "crypto-cipher-types",
          "signature": "KeySizeFixed Int",
          "source": "src/Crypto-Cipher-Types-Base.html#KeySizeSpecifier",
          "type": "function"
        },
        "index": {
          "description": "specific size",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeFixed",
          "package": "crypto-cipher-types",
          "partial": "Key Size Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeySizeFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ein the range [min,max]\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeRange",
          "package": "crypto-cipher-types",
          "signature": "KeySizeRange Int Int",
          "source": "src/Crypto-Cipher-Types-Base.html#KeySizeSpecifier",
          "type": "function"
        },
        "index": {
          "description": "in the range min max",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "KeySizeRange",
          "package": "crypto-cipher-types",
          "partial": "Key Size Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:KeySizeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend associated data into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadAppendHeader",
          "package": "crypto-cipher-types",
          "signature": "AEAD a -\u003e ByteString -\u003e AEAD a",
          "source": "src/Crypto-Cipher-Types-AEAD.html#aeadAppendHeader",
          "type": "function"
        },
        "index": {
          "description": "Append associated data into the AEAD state",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadAppendHeader",
          "normalized": "AEAD a-\u003eByteString-\u003eAEAD a",
          "package": "crypto-cipher-types",
          "partial": "Append Header",
          "signature": "AEAD a-\u003eByteString-\u003eAEAD a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadAppendHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt input and append into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadDecrypt",
          "package": "crypto-cipher-types",
          "signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
          "source": "src/Crypto-Cipher-Types-AEAD.html#aeadDecrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt input and append into the AEAD state",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadDecrypt",
          "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt input and append into the AEAD state\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadEncrypt",
          "package": "crypto-cipher-types",
          "signature": "AEAD a -\u003e ByteString -\u003e (ByteString, AEAD a)",
          "source": "src/Crypto-Cipher-Types-AEAD.html#aeadEncrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt input and append into the AEAD state",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadEncrypt",
          "normalized": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "signature": "AEAD a-\u003eByteString-\u003e(ByteString,AEAD a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalize the AEAD state and create an authentification tag\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadFinalize",
          "package": "crypto-cipher-types",
          "signature": "AEAD a -\u003e Int -\u003e AuthTag",
          "source": "src/Crypto-Cipher-Types-AEAD.html#aeadFinalize",
          "type": "function"
        },
        "index": {
          "description": "Finalize the AEAD state and create an authentification tag",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadFinalize",
          "normalized": "AEAD a-\u003eInt-\u003eAuthTag",
          "package": "crypto-cipher-types",
          "partial": "Finalize",
          "signature": "AEAD a-\u003eInt-\u003eAuthTag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a new AEAD State\n\u003c/p\u003e\u003cp\u003eWhen Nothing is returns, it means the mode is not handled.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadInit",
          "package": "crypto-cipher-types",
          "signature": "AEADMode -\u003e cipher -\u003e iv -\u003e Maybe (AEAD cipher)",
          "source": "src/Crypto-Cipher-Types-Block.html#aeadInit",
          "type": "method"
        },
        "index": {
          "description": "Initialize new AEAD State When Nothing is returns it means the mode is not handled",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadInit",
          "normalized": "AEADMode-\u003ea-\u003eb-\u003eMaybe(AEAD a)",
          "package": "crypto-cipher-types",
          "partial": "Init",
          "signature": "AEADMode-\u003ecipher-\u003eiv-\u003eMaybe(AEAD cipher)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple AEAD decryption\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadSimpleDecrypt",
          "package": "crypto-cipher-types",
          "signature": "AEAD a-\u003e ByteString-\u003e ByteString-\u003e AuthTag-\u003e Maybe ByteString",
          "type": "function"
        },
        "index": {
          "description": "Simple AEAD decryption",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadSimpleDecrypt",
          "normalized": "AEAD a-\u003eByteString-\u003eByteString-\u003eAuthTag-\u003eMaybe ByteString",
          "package": "crypto-cipher-types",
          "partial": "Simple Decrypt",
          "signature": "AEAD a-\u003eByteString-\u003eByteString-\u003eAuthTag-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadSimpleDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple AEAD encryption\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "aeadSimpleEncrypt",
          "package": "crypto-cipher-types",
          "signature": "AEAD a-\u003e ByteString-\u003e ByteString-\u003e Int-\u003e (AuthTag, ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Simple AEAD encryption",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadSimpleEncrypt",
          "normalized": "AEAD a-\u003eByteString-\u003eByteString-\u003eInt-\u003e(AuthTag,ByteString)",
          "package": "crypto-cipher-types",
          "partial": "Simple Encrypt",
          "signature": "AEAD a-\u003eByteString-\u003eByteString-\u003eInt-\u003e(AuthTag,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadSimpleEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateAppendHeader",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e state -\u003e ByteString -\u003e state",
          "source": "src/Crypto-Cipher-Types-Block.html#aeadStateAppendHeader",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateAppendHeader",
          "normalized": "a-\u003eb-\u003eByteString-\u003eb",
          "package": "crypto-cipher-types",
          "partial": "State Append Header",
          "signature": "cipher-\u003estate-\u003eByteString-\u003estate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadStateAppendHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateDecrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e state -\u003e ByteString -\u003e (ByteString, state)",
          "source": "src/Crypto-Cipher-Types-Block.html#aeadStateDecrypt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateDecrypt",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
          "package": "crypto-cipher-types",
          "partial": "State Decrypt",
          "signature": "cipher-\u003estate-\u003eByteString-\u003e(ByteString,state)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadStateDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateEncrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e state -\u003e ByteString -\u003e (ByteString, state)",
          "source": "src/Crypto-Cipher-Types-Block.html#aeadStateEncrypt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateEncrypt",
          "normalized": "a-\u003eb-\u003eByteString-\u003e(ByteString,b)",
          "package": "crypto-cipher-types",
          "partial": "State Encrypt",
          "signature": "cipher-\u003estate-\u003eByteString-\u003e(ByteString,state)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadStateEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateFinalize",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e state -\u003e Int -\u003e AuthTag",
          "source": "src/Crypto-Cipher-Types-Block.html#aeadStateFinalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "aeadStateFinalize",
          "normalized": "a-\u003eb-\u003eInt-\u003eAuthTag",
          "package": "crypto-cipher-types",
          "partial": "State Finalize",
          "signature": "cipher-\u003estate-\u003eInt-\u003eAuthTag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:aeadStateFinalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the size of block required for this block cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "blockSize",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e Int",
          "source": "src/Crypto-Cipher-Types-Block.html#blockSize",
          "type": "method"
        },
        "index": {
          "description": "Return the size of block required for this block cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "blockSize",
          "normalized": "a-\u003eInt",
          "package": "crypto-cipher-types",
          "partial": "Size",
          "signature": "cipher-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:blockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cbcDecrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cbcDecrypt",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cbcDecrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cbcDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the CBC mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cbcEncrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cbcEncrypt",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the CBC mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cbcEncrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cbcEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt using CFB mode in 8 bit output\n\u003c/p\u003e\u003cp\u003eEffectively turn a Block cipher in CFB mode into a Stream cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cfb8Decrypt",
          "package": "crypto-cipher-types",
          "signature": "a -\u003e IV a -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cfb8Decrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt using CFB mode in bit output Effectively turn Block cipher in CFB mode into Stream cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cfb8Decrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "signature": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cfb8Decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt using CFB mode in 8 bit output\n\u003c/p\u003e\u003cp\u003eEffectively turn a Block cipher in CFB mode into a Stream cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cfb8Encrypt",
          "package": "crypto-cipher-types",
          "signature": "a -\u003e IV a -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cfb8Encrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt using CFB mode in bit output Effectively turn Block cipher in CFB mode into Stream cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cfb8Encrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "signature": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cfb8Encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cfbDecrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cfbDecrypt",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the CFB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cfbDecrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cfbDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the CFB mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cfbEncrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#cfbEncrypt",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the CFB mode input need to be multiple of the blocksize",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cfbEncrypt",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cfbEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize a cipher context from a key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cipherInit",
          "package": "crypto-cipher-types",
          "signature": "Key cipher -\u003e cipher",
          "source": "src/Crypto-Cipher-Types-Base.html#cipherInit",
          "type": "method"
        },
        "index": {
          "description": "Initialize cipher context from key",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cipherInit",
          "normalized": "Key a-\u003ea",
          "package": "crypto-cipher-types",
          "partial": "Init",
          "signature": "Key cipher-\u003ecipher",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cipherInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn the size of the key required for this cipher.\n Some cipher accept any size for key\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cipherKeySize",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e KeySizeSpecifier",
          "source": "src/Crypto-Cipher-Types-Base.html#cipherKeySize",
          "type": "method"
        },
        "index": {
          "description": "return the size of the key required for this cipher Some cipher accept any size for key",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cipherKeySize",
          "normalized": "a-\u003eKeySizeSpecifier",
          "package": "crypto-cipher-types",
          "partial": "Key Size",
          "signature": "cipher-\u003eKeySizeSpecifier",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cipherKeySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCipher name\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "cipherName",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e String",
          "source": "src/Crypto-Cipher-Types-Base.html#cipherName",
          "type": "method"
        },
        "index": {
          "description": "Cipher name",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "cipherName",
          "normalized": "a-\u003eString",
          "package": "crypto-cipher-types",
          "partial": "Name",
          "signature": "cipher-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:cipherName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecombine using the CTR mode.\n\u003c/p\u003e\u003cp\u003eCTR mode produce a stream of randomized data that is combined\n (by XOR operation) with the input stream.\n\u003c/p\u003e\u003cp\u003eencryption and decryption are the same operation.\n\u003c/p\u003e\u003cp\u003einput can be of any size\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "ctrCombine",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e IV cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#ctrCombine",
          "type": "method"
        },
        "index": {
          "description": "combine using the CTR mode CTR mode produce stream of randomized data that is combined by XOR operation with the input stream encryption and decryption are the same operation input can be of any size",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "ctrCombine",
          "normalized": "a-\u003eIV a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Combine",
          "signature": "cipher-\u003eIV cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:ctrCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "ecbDecrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#ecbDecrypt",
          "type": "method"
        },
        "index": {
          "description": "Decrypt blocks the input string need to be multiple of the block size",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "ecbDecrypt",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "signature": "cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:ecbDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt blocks\n\u003c/p\u003e\u003cp\u003ethe input string need to be multiple of the block size\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "ecbEncrypt",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Cipher-Types-Block.html#ecbEncrypt",
          "type": "method"
        },
        "index": {
          "description": "Encrypt blocks the input string need to be multiple of the block size",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "ecbEncrypt",
          "normalized": "a-\u003eByteString-\u003eByteString",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "signature": "cipher-\u003eByteString-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:ecbEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement an IV by a number.\n\u003c/p\u003e\u003cp\u003eAssume the IV is in Big Endian format.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "ivAdd",
          "package": "crypto-cipher-types",
          "signature": "IV c -\u003e Int -\u003e IV c",
          "source": "src/Crypto-Cipher-Types-Block.html#ivAdd",
          "type": "function"
        },
        "index": {
          "description": "Increment an IV by number Assume the IV is in Big Endian format",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "ivAdd",
          "normalized": "IV a-\u003eInt-\u003eIV a",
          "package": "crypto-cipher-types",
          "partial": "Add",
          "signature": "IV c-\u003eInt-\u003eIV c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:ivAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an IV for a specified block cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "makeIV",
          "package": "crypto-cipher-types",
          "signature": "b -\u003e Maybe (IV c)",
          "source": "src/Crypto-Cipher-Types-Block.html#makeIV",
          "type": "function"
        },
        "index": {
          "description": "Create an IV for specified block cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "makeIV",
          "normalized": "a-\u003eMaybe(IV b)",
          "package": "crypto-cipher-types",
          "partial": "IV",
          "signature": "b-\u003eMaybe(IV c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:makeIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Key for a specified cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "makeKey",
          "package": "crypto-cipher-types",
          "signature": "b -\u003e Either KeyError (Key c)",
          "source": "src/Crypto-Cipher-Types.html#makeKey",
          "type": "function"
        },
        "index": {
          "description": "Create Key for specified cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "makeKey",
          "normalized": "a-\u003eEither KeyError(Key b)",
          "package": "crypto-cipher-types",
          "partial": "Key",
          "signature": "b-\u003eEither KeyError(Key c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:makeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an IV that is effectively representing the number 0\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "nullIV",
          "package": "crypto-cipher-types",
          "signature": "IV c",
          "source": "src/Crypto-Cipher-Types-Block.html#nullIV",
          "type": "function"
        },
        "index": {
          "description": "Create an IV that is effectively representing the number",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "nullIV",
          "package": "crypto-cipher-types",
          "partial": "IV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:nullIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine using the stream cipher\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "streamCombine",
          "package": "crypto-cipher-types",
          "signature": "cipher -\u003e ByteString -\u003e (ByteString, cipher)",
          "source": "src/Crypto-Cipher-Types-Stream.html#streamCombine",
          "type": "method"
        },
        "index": {
          "description": "Combine using the stream cipher",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "streamCombine",
          "normalized": "a-\u003eByteString-\u003e(ByteString,a)",
          "package": "crypto-cipher-types",
          "partial": "Combine",
          "signature": "cipher-\u003eByteString-\u003e(ByteString,cipher)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:streamCombine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edecrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "xtsDecrypt",
          "package": "crypto-cipher-types",
          "signature": "xtsDecrypt",
          "source": "src/Crypto-Cipher-Types-Block.html#xtsDecrypt",
          "type": "method"
        },
        "index": {
          "description": "decrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "xtsDecrypt",
          "package": "crypto-cipher-types",
          "partial": "Decrypt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:xtsDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eencrypt using the XTS mode.\n\u003c/p\u003e\u003cp\u003einput need to be a multiple of the blocksize, and the cipher\n need to process 128 bits block only\n\u003c/p\u003e",
          "module": "Crypto.Cipher.Types",
          "name": "xtsEncrypt",
          "package": "crypto-cipher-types",
          "signature": "xtsEncrypt",
          "source": "src/Crypto-Cipher-Types-Block.html#xtsEncrypt",
          "type": "method"
        },
        "index": {
          "description": "encrypt using the XTS mode input need to be multiple of the blocksize and the cipher need to process bits block only",
          "hierarchy": "Crypto Cipher Types",
          "module": "Crypto.Cipher.Types",
          "name": "xtsEncrypt",
          "package": "crypto-cipher-types",
          "partial": "Encrypt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/crypto-cipher-types/docs/Crypto-Cipher-Types.html#v:xtsEncrypt"
      }
    }
  ]
]