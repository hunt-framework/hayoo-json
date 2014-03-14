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
        "word": "crypto-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains wrappers for cryptographic functions\n using the \u003ccode\u003econduit\u003c/code\u003e package.  Currently there is support for\n hashes, HMACs and many modes of block ciphers (but not\n everything \u003ccode\u003ecrypto-api\u003c/code\u003e supports has a counterpart here).\n All functions on this package work in constant memory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Conduit",
          "name": "Conduit",
          "package": "crypto-conduit",
          "source": "src/Crypto-Conduit.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains wrappers for cryptographic functions using the conduit package Currently there is support for hashes HMACs and many modes of block ciphers but not everything crypto-api supports has counterpart here All functions on this package work in constant memory",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "Conduit",
          "package": "crypto-conduit",
          "partial": "Conduit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block returned by \u003ccode\u003e\u003ca\u003eblocked\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "Block",
          "package": "crypto-conduit",
          "source": "src/Crypto-Conduit.html#Block",
          "type": "data"
        },
        "index": {
          "description": "block returned by blocked",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "Block",
          "package": "crypto-conduit",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003es should be returned, either with strictly the\n block size or with a multiple of at least 1x the block size.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "BlockMode",
          "package": "crypto-conduit",
          "source": "src/Crypto-Conduit.html#BlockMode",
          "type": "data"
        },
        "index": {
          "description": "How Block should be returned either with strictly the block size or with multiple of at least the block size",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "BlockMode",
          "package": "crypto-conduit",
          "partial": "Block Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#t:BlockMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Conduit",
          "name": "AnyMultiple",
          "package": "crypto-conduit",
          "signature": "AnyMultiple",
          "source": "src/Crypto-Conduit.html#BlockMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "AnyMultiple",
          "package": "crypto-conduit",
          "partial": "Any Multiple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:AnyMultiple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Conduit",
          "name": "Full",
          "package": "crypto-conduit",
          "signature": "Full ByteString",
          "source": "src/Crypto-Conduit.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "Full",
          "package": "crypto-conduit",
          "partial": "Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Conduit",
          "name": "LastOne",
          "package": "crypto-conduit",
          "signature": "LastOne ByteString",
          "source": "src/Crypto-Conduit.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "LastOne",
          "package": "crypto-conduit",
          "partial": "Last One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:LastOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Conduit",
          "name": "StrictBlockSize",
          "package": "crypto-conduit",
          "signature": "StrictBlockSize",
          "source": "src/Crypto-Conduit.html#BlockMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "StrictBlockSize",
          "package": "crypto-conduit",
          "partial": "Strict Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:StrictBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that takes arbitrary \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e and\n outputs \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e.  Each \u003ccode\u003e\u003ca\u003eFull\u003c/a\u003e\u003c/code\u003e block will have a length that\n is multiple of the given block size (either exactly the block\n size or a multiple of at least 1x the block size, depending on\n the \u003ccode\u003e\u003ca\u003eBlockMode\u003c/a\u003e\u003c/code\u003e).  All \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e beside the last one will be\n \u003ccode\u003e\u003ca\u003eFull\u003c/a\u003e\u003c/code\u003e.  The last block will always be \u003ccode\u003e\u003ca\u003eLastOne\u003c/a\u003e\u003c/code\u003e with less\n bytes than the block size, possibly zero.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "blocked",
          "package": "crypto-conduit",
          "signature": "BlockMode-\u003e ByteLength-\u003e Conduit ByteString m Block",
          "type": "function"
        },
        "index": {
          "description": "Conduit that takes arbitrary ByteString and outputs Block Each Full block will have length that is multiple of the given block size either exactly the block size or multiple of at least the block size depending on the BlockMode All Block beside the last one will be Full The last block will always be LastOne with less bytes than the block size possibly zero",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "blocked",
          "normalized": "BlockMode-\u003eByteLength-\u003eConduit ByteString a Block",
          "package": "crypto-conduit",
          "signature": "BlockMode-\u003eByteLength-\u003eConduit ByteString m Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:blocked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that decrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using CBC mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCbc",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that decrypts stream of ByteString using CBC mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCbc",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Decrypt Cbc",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitDecryptCbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that decrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using CFB mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCfb",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that decrypts stream of ByteString using CFB mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCfb",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Decrypt Cfb",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitDecryptCfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003econduitEncryptCtr\u003c/a\u003e\u003c/code\u003e, since for CTR mode both\n encryption and decryption are the same.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCtr",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e (IV k -\u003e IV k)-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Synonym for conduitEncryptCtr since for CTR mode both encryption and decryption are the same",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptCtr",
          "normalized": "a-\u003eIV a-\u003e(IV a-\u003eIV a)-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Decrypt Ctr",
          "signature": "k-\u003eIV k-\u003e(IV k-\u003eIV k)-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitDecryptCtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that decrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using ECB mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptEcb",
          "package": "crypto-conduit",
          "signature": "k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that decrypts stream of ByteString using ECB mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptEcb",
          "normalized": "a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Decrypt Ecb",
          "signature": "k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitDecryptEcb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003econduitEncryptOfb\u003c/a\u003e\u003c/code\u003e, since for OFB mode both\n encryption and decryption are the same.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptOfb",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Synonym for conduitEncryptOfb since for OFB mode both encryption and decryption are the same",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitDecryptOfb",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Decrypt Ofb",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitDecryptOfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that encrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using CBC mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCbc",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that encrypts stream of ByteString using CBC mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCbc",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Encrypt Cbc",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitEncryptCbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that encrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using CFB mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCfb",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that encrypts stream of ByteString using CFB mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCfb",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Encrypt Cfb",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitEncryptCfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that encrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using CTR mode.  The input may have any length, even\n non-multiples of the block size.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCtr",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e (IV k -\u003e IV k)-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that encrypts stream of ByteString using CTR mode The input may have any length even non-multiples of the block size",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptCtr",
          "normalized": "a-\u003eIV a-\u003e(IV a-\u003eIV a)-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Encrypt Ctr",
          "signature": "k-\u003eIV k-\u003e(IV k-\u003eIV k)-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitEncryptCtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that encrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using ECB mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.  (Note that\n ECB has many undesirable cryptographic properties, please\n avoid it if you don't know what you're doing.)\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptEcb",
          "package": "crypto-conduit",
          "signature": "k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that encrypts stream of ByteString using ECB mode Expects the input length to be multiple of the block size of the cipher and fails otherwise Note that ECB has many undesirable cryptographic properties please avoid it if you don know what you re doing",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptEcb",
          "normalized": "a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Encrypt Ecb",
          "signature": "k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitEncryptEcb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConduit\u003c/a\u003e\u003c/code\u003e that encrypts a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e\n using OFB mode.  Expects the input length to be a multiple of\n the block size of the cipher and fails otherwise.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptOfb",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Conduit ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Conduit that encrypts stream of ByteString using OFB mode Expects the input length to be multiple of the block size of the cipher and fails otherwise",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "conduitEncryptOfb",
          "normalized": "a-\u003eIV a-\u003eConduit ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Encrypt Ofb",
          "signature": "k-\u003eIV k-\u003eConduit ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:conduitEncryptOfb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHashes the whole contents of the given file in constant\n memory.  This function is just a convenient wrapper around\n \u003ccode\u003e\u003ca\u003esinkHash\u003c/a\u003e\u003c/code\u003e defined as:\n\u003c/p\u003e\u003cpre\u003e\n hashFile fp = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003erunResourceT\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esourceFile\u003c/a\u003e\u003c/code\u003e fp \u003ccode\u003e\u003ca\u003e$$\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esinkHash\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
          "module": "Crypto.Conduit",
          "name": "hashFile",
          "package": "crypto-conduit",
          "signature": "FilePath -\u003e m d",
          "source": "src/Crypto-Conduit.html#hashFile",
          "type": "function"
        },
        "index": {
          "description": "Hashes the whole contents of the given file in constant memory This function is just convenient wrapper around sinkHash defined as hashFile fp liftIO runResourceT sourceFile fp sinkHash",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "hashFile",
          "normalized": "FilePath-\u003ea b",
          "package": "crypto-conduit",
          "partial": "File",
          "signature": "FilePath-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:hashFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e that computes the CBC-MAC of a stream of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e and creates a digest (already encoded in a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, since we're using a block cipher).  Expects\n the input length to be a multiple of the block size of the\n cipher and fails otherwise.  (Note that CBC-MAC is not secure\n for variable-length messages.)\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "sinkCbcMac",
          "package": "crypto-conduit",
          "signature": "k-\u003e Consumer ByteString m ByteString",
          "type": "function"
        },
        "index": {
          "description": "Sink that computes the CBC-MAC of stream of ByteString and creates digest already encoded in ByteString since we re using block cipher Expects the input length to be multiple of the block size of the cipher and fails otherwise Note that CBC-MAC is not secure for variable-length messages",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "sinkCbcMac",
          "normalized": "a-\u003eConsumer ByteString b ByteString",
          "package": "crypto-conduit",
          "partial": "Cbc Mac",
          "signature": "k-\u003eConsumer ByteString m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:sinkCbcMac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e that hashes a stream of \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e and\n creates a digest \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "sinkHash",
          "package": "crypto-conduit",
          "signature": "Consumer ByteString m d",
          "source": "src/Crypto-Conduit.html#sinkHash",
          "type": "function"
        },
        "index": {
          "description": "Sink that hashes stream of ByteString and creates digest",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "sinkHash",
          "package": "crypto-conduit",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:sinkHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003e that computes the HMAC of a stream of\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e\u003ccode\u003es\u003c/code\u003e and creates a digest \u003ccode\u003ed\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "sinkHmac",
          "package": "crypto-conduit",
          "signature": "MacKey ctx d -\u003e Consumer ByteString m d",
          "source": "src/Crypto-Conduit.html#sinkHmac",
          "type": "function"
        },
        "index": {
          "description": "Sink that computes the HMAC of stream of ByteString and creates digest",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "sinkHmac",
          "normalized": "MacKey a b-\u003eConsumer ByteString c b",
          "package": "crypto-conduit",
          "partial": "Hmac",
          "signature": "MacKey ctx d-\u003eConsumer ByteString m d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:sinkHmac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite stream of bytes generated by a block cipher on\n CTR mode.\n\u003c/p\u003e",
          "module": "Crypto.Conduit",
          "name": "sourceCtr",
          "package": "crypto-conduit",
          "signature": "k-\u003e IV k-\u003e Producer m ByteString",
          "type": "function"
        },
        "index": {
          "description": "An infinite stream of bytes generated by block cipher on CTR mode",
          "hierarchy": "Crypto Conduit",
          "module": "Crypto.Conduit",
          "name": "sourceCtr",
          "normalized": "a-\u003eIV a-\u003eProducer b ByteString",
          "package": "crypto-conduit",
          "partial": "Ctr",
          "signature": "k-\u003eIV k-\u003eProducer m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/crypto-conduit/docs/Crypto-Conduit.html#v:sourceCtr"
      }
    }
  ]
]