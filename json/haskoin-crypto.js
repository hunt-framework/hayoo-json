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
        "word": "haskoin-crypto"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck Arbitrary instances for Haskoin.Crypto types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "QuickCheck Arbitrary instances for Haskoin.Crypto types",
          "hierarchy": "Network Haskoin Crypto Arbitrary",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "Arbitrary",
          "package": "haskoin-crypto",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary compressed private key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "genPrvKeyC",
          "package": "haskoin-crypto",
          "signature": "Gen PrvKey",
          "source": "src/Network-Haskoin-Crypto-Arbitrary.html#genPrvKeyC",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary compressed private key",
          "hierarchy": "Network Haskoin Crypto Arbitrary",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "genPrvKeyC",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto-Arbitrary.html#v:genPrvKeyC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate an arbitrary uncompressed private key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "genPrvKeyU",
          "package": "haskoin-crypto",
          "signature": "Gen PrvKey",
          "source": "src/Network-Haskoin-Crypto-Arbitrary.html#genPrvKeyU",
          "type": "function"
        },
        "index": {
          "description": "Generate an arbitrary uncompressed private key",
          "hierarchy": "Network Haskoin Crypto Arbitrary",
          "module": "Network.Haskoin.Crypto.Arbitrary",
          "name": "genPrvKeyU",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto-Arbitrary.html#v:genPrvKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides the elliptic curve cryptography required for creating\n  and validating bitcoin transactions. It also provides SHA-256 and RIPEMD-160\n  hashing functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Crypto",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides the elliptic curve cryptography required for creating and validating bitcoin transactions It also provides SHA-256 and RIPEMD-160 hashing functions",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Crypto",
          "package": "haskoin-crypto",
          "partial": "Crypto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a Bitcoin address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Address",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Base58.html#Address",
          "type": "data"
        },
        "index": {
          "description": "Data type representing Bitcoin address",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Address",
          "package": "haskoin-crypto",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a 32 bit checksum\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "CheckSum32",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Hash.html#CheckSum32",
          "type": "data"
        },
        "index": {
          "description": "Data type representing bit checksum",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "CheckSum32",
          "package": "haskoin-crypto",
          "partial": "Check Sum",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:CheckSum32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a 160 bit unsigned integer.\n It is implemented as an Integer modulo 2^160.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash160",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Ring.html#Hash160",
          "type": "type"
        },
        "index": {
          "description": "Data type representing bit unsigned integer It is implemented as an Integer modulo",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash160",
          "package": "haskoin-crypto",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:Hash160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a 256 bit unsigned integer.\n It is implemented as an Integer modulo 2^256.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash256",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Ring.html#Hash256",
          "type": "type"
        },
        "index": {
          "description": "Data type representing bit unsigned integer It is implemented as an Integer modulo",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash256",
          "package": "haskoin-crypto",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:Hash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing a 512 bit unsigned integer.\n It is implemented as an Integer modulo 2^512.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash512",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Ring.html#Hash512",
          "type": "type"
        },
        "index": {
          "description": "Data type representing bit unsigned integer It is implemented as an Integer modulo",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Hash512",
          "package": "haskoin-crypto",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:Hash512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElliptic curve private key type. Two constructors are provided for creating\n compressed or uncompressed private keys. Compression information is stored\n in private key WIF formats and needs to be preserved to generate the correct\n addresses from the corresponding public key. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKey",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PrvKey",
          "type": "data"
        },
        "index": {
          "description": "Elliptic curve private key type Two constructors are provided for creating compressed or uncompressed private keys Compression information is stored in private key WIF formats and needs to be preserved to generate the correct addresses from the corresponding public key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:PrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElliptic curve public key type. Two constructors are provided for creating\n compressed and uncompressed public keys from a Point. The use of compressed\n keys is preferred as it produces shorter keys without compromising security.\n Uncompressed keys are supported for backwards compatibility.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKey",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PubKey",
          "type": "data"
        },
        "index": {
          "description": "Elliptic curve public key type Two constructors are provided for creating compressed and uncompressed public keys from Point The use of compressed keys is preferred as it produces shorter keys without compromising security Uncompressed keys are supported for backwards compatibility",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKey",
          "package": "haskoin-crypto",
          "partial": "Pub Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStateT monad stack tracking the internal state of HMAC DRBG \n pseudo random number generator using SHA-256. The \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad is\n run with the \u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e function by providing it a source of entropy.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "SecretT",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#SecretT",
          "type": "type"
        },
        "index": {
          "description": "StateT monad stack tracking the internal state of HMAC DRBG pseudo random number generator using SHA-256 The SecretT monad is run with the withSource function by providing it source of entropy",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "SecretT",
          "package": "haskoin-crypto",
          "partial": "Secret",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:SecretT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type representing an ECDSA signature. \n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "Signature",
          "package": "haskoin-crypto",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#Signature",
          "type": "data"
        },
        "index": {
          "description": "Data type representing an ECDSA signature",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "Signature",
          "package": "haskoin-crypto",
          "partial": "Signature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed private key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKey",
          "package": "haskoin-crypto",
          "signature": "PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PrvKey",
          "type": "function"
        },
        "index": {
          "description": "Compressed private key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:PrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncompressed private key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKeyU",
          "package": "haskoin-crypto",
          "signature": "PrvKeyU",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PrvKey",
          "type": "function"
        },
        "index": {
          "description": "Uncompressed private key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PrvKeyU",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:PrvKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed public key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKey",
          "package": "haskoin-crypto",
          "signature": "PubKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "Compressed public key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKey",
          "package": "haskoin-crypto",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:PubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublic Key Hash Address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKeyAddress",
          "package": "haskoin-crypto",
          "signature": "PubKeyAddress",
          "source": "src/Network-Haskoin-Crypto-Base58.html#Address",
          "type": "function"
        },
        "index": {
          "description": "Public Key Hash Address",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKeyAddress",
          "package": "haskoin-crypto",
          "partial": "Pub Key Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:PubKeyAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncompressed public key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKeyU",
          "package": "haskoin-crypto",
          "signature": "PubKeyU",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PubKey",
          "type": "function"
        },
        "index": {
          "description": "Uncompressed public key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "PubKeyU",
          "package": "haskoin-crypto",
          "partial": "Pub Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:PubKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScript Hash Address\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "ScriptAddress",
          "package": "haskoin-crypto",
          "signature": "ScriptAddress",
          "source": "src/Network-Haskoin-Crypto-Base58.html#Address",
          "type": "function"
        },
        "index": {
          "description": "Script Hash Address",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "ScriptAddress",
          "package": "haskoin-crypto",
          "partial": "Script Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:ScriptAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd two private keys together. One of the keys is defined by a Hash256.\n The functions fails on uncompressed private keys and return Nothing if the\n Hash256 is smaller than the order of the curve N. This is provided\n as a helper for implementing BIP32 wallets.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "addPrvKeys",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e Hash256 -\u003e Maybe PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#addPrvKeys",
          "type": "function"
        },
        "index": {
          "description": "Add two private keys together One of the keys is defined by Hash256 The functions fails on uncompressed private keys and return Nothing if the Hash256 is smaller than the order of the curve This is provided as helper for implementing BIP32 wallets",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "addPrvKeys",
          "normalized": "PrvKey-\u003eHash-\u003eMaybe PrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Keys",
          "signature": "PrvKey-\u003eHash-\u003eMaybe PrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:addPrvKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a public key to a private key defined by its Hash256 value. This will\n transform the private key into a public key and add the respective public\n key points together. This is provided as a helper for BIP32 wallet\n implementations. This function fails for uncompressed keys and returns\n Nothing if the private key value is \u003e= than the order of the curve N.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "addPubKeys",
          "package": "haskoin-crypto",
          "signature": "PubKey -\u003e Hash256 -\u003e Maybe PubKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#addPubKeys",
          "type": "function"
        },
        "index": {
          "description": "Add public key to private key defined by its Hash256 value This will transform the private key into public key and add the respective public key points together This is provided as helper for BIP32 wallet implementations This function fails for uncompressed keys and returns Nothing if the private key value is than the order of the curve",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "addPubKeys",
          "normalized": "PubKey-\u003eHash-\u003eMaybe PubKey",
          "package": "haskoin-crypto",
          "partial": "Pub Keys",
          "signature": "PubKey-\u003eHash-\u003eMaybe PubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:addPubKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms an Address into a base58 encoded String\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "addrToBase58",
          "package": "haskoin-crypto",
          "signature": "Address -\u003e String",
          "source": "src/Network-Haskoin-Crypto-Base58.html#addrToBase58",
          "type": "function"
        },
        "index": {
          "description": "Transforms an Address into base58 encoded String",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "addrToBase58",
          "normalized": "Address-\u003eString",
          "package": "haskoin-crypto",
          "partial": "To Base",
          "signature": "Address-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:addrToBase58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes an Address from a base58 encoded String. This function can fail\n if the String is not properly encoded as base58 or the checksum fails.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "base58ToAddr",
          "package": "haskoin-crypto",
          "signature": "String -\u003e Maybe Address",
          "source": "src/Network-Haskoin-Crypto-Base58.html#base58ToAddr",
          "type": "function"
        },
        "index": {
          "description": "Decodes an Address from base58 encoded String This function can fail if the String is not properly encoded as base58 or the checksum fails",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "base58ToAddr",
          "normalized": "String-\u003eMaybe Address",
          "package": "haskoin-crypto",
          "partial": "To Addr",
          "signature": "String-\u003eMaybe Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:base58ToAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a 32 bit checksum.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "chksum32",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e CheckSum32",
          "source": "src/Network-Haskoin-Crypto-Hash.html#chksum32",
          "type": "function"
        },
        "index": {
          "description": "Computes bit checksum",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "chksum32",
          "normalized": "ByteString-\u003eCheckSum",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eCheckSum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:chksum32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base 58 encoded bytestring. This can fail if the input bytestring\n contains invalid base 58 characters such as 0,O,l,I\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "decodeBase58",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Network-Haskoin-Crypto-Base58.html#decodeBase58",
          "type": "function"
        },
        "index": {
          "description": "Decode base encoded bytestring This can fail if the input bytestring contains invalid base characters such as",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "decodeBase58",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "haskoin-crypto",
          "partial": "Base",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:decodeBase58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a base 58 encoded bytestring that contains a checksum. This\n function returns Nothing if the input bytestring contains invalid base 58\n characters or if the checksum fails.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "decodeBase58Check",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Maybe ByteString",
          "source": "src/Network-Haskoin-Crypto-Base58.html#decodeBase58Check",
          "type": "function"
        },
        "index": {
          "description": "Decode base encoded bytestring that contains checksum This function returns Nothing if the input bytestring contains invalid base characters or if the checksum fails",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "decodeBase58Check",
          "normalized": "ByteString-\u003eMaybe ByteString",
          "package": "haskoin-crypto",
          "partial": "Base Check",
          "signature": "ByteString-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:decodeBase58Check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerives a public key from a private key. This function will preserve\n information on key compression (PrvKey becomes PubKey and PrvKeyU becomes\n PubKeyU)\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "derivePubKey",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e PubKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#derivePubKey",
          "type": "function"
        },
        "index": {
          "description": "Derives public key from private key This function will preserve information on key compression PrvKey becomes PubKey and PrvKeyU becomes PubKeyU",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "derivePubKey",
          "normalized": "PrvKey-\u003ePubKey",
          "package": "haskoin-crypto",
          "partial": "Pub Key",
          "signature": "PrvKey-\u003ePubKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:derivePubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign a message using ECDSA deterministic signatures as defined by\n RFC 6979 \u003ca\u003ehttp://tools.ietf.org/html/rfc6979\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "detSignMsg",
          "package": "haskoin-crypto",
          "signature": "Hash256 -\u003e PrvKey -\u003e Signature",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#detSignMsg",
          "type": "function"
        },
        "index": {
          "description": "Sign message using ECDSA deterministic signatures as defined by RFC http tools.ietf.org html rfc6979",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "detSignMsg",
          "normalized": "Hash-\u003ePrvKey-\u003eSignature",
          "package": "haskoin-crypto",
          "partial": "Sign Msg",
          "signature": "Hash-\u003ePrvKey-\u003eSignature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:detSignMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e/dev/random entropy source. This is only available on machines\n supporting it. This function is meant to be used together with \u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "devRandom",
          "package": "haskoin-crypto",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#devRandom",
          "type": "function"
        },
        "index": {
          "description": "dev random entropy source This is only available on machines supporting it This function is meant to be used together with withSource",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "devRandom",
          "normalized": "Int-\u003eIO ByteString",
          "package": "haskoin-crypto",
          "partial": "Random",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:devRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e/dev/urandom entropy source. This is only available on machines\n supporting it. This function is meant to be used together with \u003ccode\u003e\u003ca\u003ewithSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "devURandom",
          "package": "haskoin-crypto",
          "signature": "Int -\u003e IO ByteString",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#devURandom",
          "type": "function"
        },
        "index": {
          "description": "dev urandom entropy source This is only available on machines supporting it This function is meant to be used together with withSource",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "devURandom",
          "normalized": "Int-\u003eIO ByteString",
          "package": "haskoin-crypto",
          "partial": "URandom",
          "signature": "Int-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:devURandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes two rounds of SHA-256.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "doubleHash256",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Hash256",
          "source": "src/Network-Haskoin-Crypto-Hash.html#doubleHash256",
          "type": "function"
        },
        "index": {
          "description": "Computes two rounds of SHA-256",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "doubleHash256",
          "normalized": "ByteString-\u003eHash",
          "package": "haskoin-crypto",
          "partial": "Hash",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:doubleHash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes two rounds of SHA-256 and returns the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "doubleHash256BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#doubleHash256BS",
          "type": "function"
        },
        "index": {
          "description": "Computes two rounds of SHA-256 and returns the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "doubleHash256BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "Hash BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:doubleHash256BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a bytestring to a base 58 representation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "encodeBase58",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Base58.html#encodeBase58",
          "type": "function"
        },
        "index": {
          "description": "Encode bytestring to base representation",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "encodeBase58",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "Base",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:encodeBase58"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes a checksum for the input bytestring and encodes the input and\n the checksum to a base 58 representation.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "encodeBase58Check",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Base58.html#encodeBase58Check",
          "type": "function"
        },
        "index": {
          "description": "Computes checksum for the input bytestring and encodes the input and the checksum to base representation",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "encodeBase58Check",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "Base Check",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:encodeBase58Check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the Integer value of a private key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "fromPrvKey",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e Integer",
          "source": "src/Network-Haskoin-Crypto-Keys.html#fromPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Returns the Integer value of private key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "fromPrvKey",
          "normalized": "PrvKey-\u003eInteger",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "signature": "PrvKey-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:fromPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecodes a private key from a WIF encoded String. This function can fail\n if the input string does not decode correctly as a base 58 string or if \n the checksum fails.\n \u003ca\u003ehttp://en.bitcoin.it/wiki/Wallet_import_format\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "fromWIF",
          "package": "haskoin-crypto",
          "signature": "String -\u003e Maybe PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#fromWIF",
          "type": "function"
        },
        "index": {
          "description": "Decodes private key from WIF encoded String This function can fail if the input string does not decode correctly as base string or if the checksum fails http en.bitcoin.it wiki Wallet import format",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "fromWIF",
          "normalized": "String-\u003eMaybe PrvKey",
          "package": "haskoin-crypto",
          "partial": "WIF",
          "signature": "String-\u003eMaybe PrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:fromWIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a new \u003ccode\u003e\u003ca\u003ePrvKey\u003c/a\u003e\u003c/code\u003e randomly from the \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "genPrvKey",
          "package": "haskoin-crypto",
          "signature": "SecretT m PrvKey",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#genPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Produce new PrvKey randomly from the SecretT monad",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "genPrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:genPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Crypto",
          "name": "getAddress",
          "package": "haskoin-crypto",
          "signature": "Hash160",
          "source": "src/Network-Haskoin-Crypto-Base58.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "getAddress",
          "package": "haskoin-crypto",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:getAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes a compressed private key from the Data.Binary.Get monad as a\n 32 byte big endian ByteString.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "getPrvKey",
          "package": "haskoin-crypto",
          "signature": "Get PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#getPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Deserializes compressed private key from the Data.Binary.Get monad as byte big endian ByteString",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "getPrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:getPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes an uncompressed private key from the Data.Binary.Get monad as\n a 32 byte big endian ByteString\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "getPrvKeyU",
          "package": "haskoin-crypto",
          "signature": "Get PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#getPrvKeyU",
          "type": "function"
        },
        "index": {
          "description": "Deserializes an uncompressed private key from the Data.Binary.Get monad as byte big endian ByteString",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "getPrvKeyU",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:getPrvKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes RIPEMD-160.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash160",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Hash160",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash160",
          "type": "function"
        },
        "index": {
          "description": "Computes RIPEMD-160",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash160",
          "normalized": "ByteString-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes RIPEMD-160 and returns the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash160BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash160BS",
          "type": "function"
        },
        "index": {
          "description": "Computes RIPEMD-160 and returns the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash160BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash160BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes SHA-256.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash256",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Hash256",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash256",
          "type": "function"
        },
        "index": {
          "description": "Computes SHA-256",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash256",
          "normalized": "ByteString-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes SHA-256 and returns the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash256BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash256BS",
          "type": "function"
        },
        "index": {
          "description": "Computes SHA-256 and returns the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash256BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash256BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes SHA-512.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash512",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e Hash512",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash512",
          "type": "function"
        },
        "index": {
          "description": "Computes SHA-512",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash512",
          "normalized": "ByteString-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes SHA-512 and returns the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hash512BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hash512BS",
          "type": "function"
        },
        "index": {
          "description": "Computes SHA-512 and returns the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hash512BS",
          "normalized": "ByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hash512BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes HMAC over SHA-256.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac256",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString -\u003e Hash256",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hmac256",
          "type": "function"
        },
        "index": {
          "description": "Computes HMAC over SHA-256",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac256",
          "normalized": "ByteString-\u003eByteString-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hmac256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes HMAC over SHA-256 and return the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac256BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hmac256BS",
          "type": "function"
        },
        "index": {
          "description": "Computes HMAC over SHA-256 and return the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac256BS",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hmac256BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes HMAC over SHA-512.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac512",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString -\u003e Hash512",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hmac512",
          "type": "function"
        },
        "index": {
          "description": "Computes HMAC over SHA-512",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac512",
          "normalized": "ByteString-\u003eByteString-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "ByteString-\u003eByteString-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hmac512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes HMAC over SHA-512 and return the result as a bytestring.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac512BS",
          "package": "haskoin-crypto",
          "signature": "ByteString -\u003e ByteString -\u003e ByteString",
          "source": "src/Network-Haskoin-Crypto-Hash.html#hmac512BS",
          "type": "function"
        },
        "index": {
          "description": "Computes HMAC over SHA-512 and return the result as bytestring",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "hmac512BS",
          "normalized": "ByteString-\u003eByteString-\u003eByteString",
          "package": "haskoin-crypto",
          "partial": "BS",
          "signature": "ByteString-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:hmac512BS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the S component of a Signature is \u003c= order/2.\n Signatures need to pass this test to be canonical.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "isCanonicalHalfOrder",
          "package": "haskoin-crypto",
          "signature": "Signature -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#isCanonicalHalfOrder",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the component of Signature is order Signatures need to pass this test to be canonical",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "isCanonicalHalfOrder",
          "normalized": "Signature-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Canonical Half Order",
          "signature": "Signature-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:isCanonicalHalfOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True of the private key is uncompressed\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "isPrvKeyU",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-Keys.html#isPrvKeyU",
          "type": "function"
        },
        "index": {
          "description": "Returns True of the private key is uncompressed",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "isPrvKeyU",
          "normalized": "PrvKey-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "signature": "PrvKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:isPrvKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the public key is uncompressed\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "isPubKeyU",
          "package": "haskoin-crypto",
          "signature": "PubKey -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-Keys.html#isPubKeyU",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the public key is uncompressed",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "isPubKeyU",
          "normalized": "PubKey-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Pub Key",
          "signature": "PubKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:isPubKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the private key is valid. This will check if the integer\n value representing the private key is greater than 0 and smaller than the\n curve order N.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "isValidPrvKey",
          "package": "haskoin-crypto",
          "signature": "Integer -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-Keys.html#isValidPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the private key is valid This will check if the integer value representing the private key is greater than and smaller than the curve order",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "isValidPrvKey",
          "normalized": "Integer-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Valid Prv Key",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:isValidPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if the public key is valid. This will check if the public\n key point lies on the curve.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "isValidPubKey",
          "package": "haskoin-crypto",
          "signature": "PubKey -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-Keys.html#isValidPubKey",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the public key is valid This will check if the public key point lies on the curve",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "isValidPubKey",
          "normalized": "PubKey-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Valid Pub Key",
          "signature": "PubKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:isValidPubKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a pair of \u003ccode\u003e\u003ca\u003eHash256\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eHash512\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "join512",
          "package": "haskoin-crypto",
          "signature": "(Hash256, Hash256) -\u003e Hash512",
          "source": "src/Network-Haskoin-Crypto-Hash.html#join512",
          "type": "function"
        },
        "index": {
          "description": "Join pair of Hash256 into Hash512",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "join512",
          "normalized": "(Hash,Hash)-\u003eHash",
          "package": "haskoin-crypto",
          "signature": "(Hash,Hash)-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:join512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a compressed private key from an Integer value. Returns Nothing if\n the Integer would not produce a valid private key. For security, the Integer\n needs to be generated from a random source with sufficient entropy.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "makePrvKey",
          "package": "haskoin-crypto",
          "signature": "Integer -\u003e Maybe PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#makePrvKey",
          "type": "function"
        },
        "index": {
          "description": "Builds compressed private key from an Integer value Returns Nothing if the Integer would not produce valid private key For security the Integer needs to be generated from random source with sufficient entropy",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "makePrvKey",
          "normalized": "Integer-\u003eMaybe PrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "signature": "Integer-\u003eMaybe PrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:makePrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds an uncompressed private key from an Integer value. Returns Nothing\n if the Integer would not produce a valid private key. For security, the\n Integer needs to be generated from a random source with sufficient entropy.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "makePrvKeyU",
          "package": "haskoin-crypto",
          "signature": "Integer -\u003e Maybe PrvKey",
          "source": "src/Network-Haskoin-Crypto-Keys.html#makePrvKeyU",
          "type": "function"
        },
        "index": {
          "description": "Builds an uncompressed private key from an Integer value Returns Nothing if the Integer would not produce valid private key For security the Integer needs to be generated from random source with sufficient entropy",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "makePrvKeyU",
          "normalized": "Integer-\u003eMaybe PrvKey",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "signature": "Integer-\u003eMaybe PrvKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:makePrvKeyU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Crypto",
          "name": "prvKeyFieldN",
          "package": "haskoin-crypto",
          "signature": "FieldN",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PrvKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "prvKeyFieldN",
          "package": "haskoin-crypto",
          "partial": "Key Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:prvKeyFieldN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes an Address value from a public key\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "pubKeyAddr",
          "package": "haskoin-crypto",
          "signature": "PubKey -\u003e Address",
          "source": "src/Network-Haskoin-Crypto-Keys.html#pubKeyAddr",
          "type": "function"
        },
        "index": {
          "description": "Computes an Address value from public key",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "pubKeyAddr",
          "normalized": "PubKey-\u003eAddress",
          "package": "haskoin-crypto",
          "partial": "Key Addr",
          "signature": "PubKey-\u003eAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:pubKeyAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskoin.Crypto",
          "name": "pubKeyPoint",
          "package": "haskoin-crypto",
          "signature": "Point",
          "source": "src/Network-Haskoin-Crypto-Keys.html#PubKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "pubKeyPoint",
          "package": "haskoin-crypto",
          "partial": "Key Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:pubKeyPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a private key into the Data.Binary.Put monad as a 32 byte\n big endian ByteString. This is useful when a constant length serialization\n format for private keys is required\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "putPrvKey",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e Put",
          "source": "src/Network-Haskoin-Crypto-Keys.html#putPrvKey",
          "type": "function"
        },
        "index": {
          "description": "Serialize private key into the Data.Binary.Put monad as byte big endian ByteString This is useful when constant length serialization format for private keys is required",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "putPrvKey",
          "normalized": "PrvKey-\u003ePut",
          "package": "haskoin-crypto",
          "partial": "Prv Key",
          "signature": "PrvKey-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:putPrvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely sign a message inside the \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad. The \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad will\n generate a new nonce for each signature.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "signMsg",
          "package": "haskoin-crypto",
          "signature": "Hash256 -\u003e PrvKey -\u003e SecretT m Signature",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#signMsg",
          "type": "function"
        },
        "index": {
          "description": "Safely sign message inside the SecretT monad The SecretT monad will generate new nonce for each signature",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "signMsg",
          "normalized": "Hash-\u003ePrvKey-\u003eSecretT a Signature",
          "package": "haskoin-crypto",
          "partial": "Msg",
          "signature": "Hash-\u003ePrvKey-\u003eSecretT m Signature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:signMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eHash512\u003c/a\u003e\u003c/code\u003e into a pair of \u003ccode\u003e\u003ca\u003eHash256\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "split512",
          "package": "haskoin-crypto",
          "signature": "Hash512 -\u003e (Hash256, Hash256)",
          "source": "src/Network-Haskoin-Crypto-Hash.html#split512",
          "type": "function"
        },
        "index": {
          "description": "Split Hash512 into pair of Hash256",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "split512",
          "normalized": "Hash-\u003e(Hash,Hash)",
          "package": "haskoin-crypto",
          "signature": "Hash-\u003e(Hash,Hash)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:split512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncodes a private key into WIF format\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "toWIF",
          "package": "haskoin-crypto",
          "signature": "PrvKey -\u003e String",
          "source": "src/Network-Haskoin-Crypto-Keys.html#toWIF",
          "type": "function"
        },
        "index": {
          "description": "Encodes private key into WIF format",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "toWIF",
          "normalized": "PrvKey-\u003eString",
          "package": "haskoin-crypto",
          "partial": "WIF",
          "signature": "PrvKey-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:toWIF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify an ECDSA signature\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "verifySig",
          "package": "haskoin-crypto",
          "signature": "Hash256 -\u003e Signature -\u003e PubKey -\u003e Bool",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#verifySig",
          "type": "function"
        },
        "index": {
          "description": "Verify an ECDSA signature",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "verifySig",
          "normalized": "Hash-\u003eSignature-\u003ePubKey-\u003eBool",
          "package": "haskoin-crypto",
          "partial": "Sig",
          "signature": "Hash-\u003eSignature-\u003ePubKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:verifySig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eSecretT\u003c/a\u003e\u003c/code\u003e monad by providing it a source of entropy. You can\n use \u003ccode\u003e\u003ca\u003edevURandom\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edevRandom\u003c/a\u003e\u003c/code\u003e or provide your own entropy source function.\n\u003c/p\u003e",
          "module": "Network.Haskoin.Crypto",
          "name": "withSource",
          "package": "haskoin-crypto",
          "signature": "(Int -\u003e m ByteString) -\u003e SecretT m a -\u003e m a",
          "source": "src/Network-Haskoin-Crypto-ECDSA.html#withSource",
          "type": "function"
        },
        "index": {
          "description": "Run SecretT monad by providing it source of entropy You can use devURandom devRandom or provide your own entropy source function",
          "hierarchy": "Network Haskoin Crypto",
          "module": "Network.Haskoin.Crypto",
          "name": "withSource",
          "normalized": "(Int-\u003ea ByteString)-\u003eSecretT a b-\u003ea b",
          "package": "haskoin-crypto",
          "partial": "Source",
          "signature": "(Int-\u003em ByteString)-\u003eSecretT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoin-crypto/docs/Network-Haskoin-Crypto.html#v:withSource"
      }
    }
  ]
]