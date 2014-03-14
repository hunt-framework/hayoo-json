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
        "word": "threefish"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthenticated encryption using Skein for PRNG, KDF, stream cipher and MAC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Authenticated",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Authenticated.html",
          "type": "module"
        },
        "index": {
          "description": "Authenticated encryption using Skein for PRNG KDF stream cipher and MAC",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Authenticated",
          "package": "threefish",
          "partial": "Authenticated",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "Block256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Block256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Block256",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:Block256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "DecryptFailure",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Authenticated.html#DecryptFailure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "DecryptFailure",
          "package": "threefish",
          "partial": "Decrypt Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:DecryptFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn encrypt-then-MACed value. The binary format is as follows:\n   Bytes    What\n   0-31     256 bit nonce\n   32-63    256 bit Skein-MAC\n   64-71    Length of cryptotext as a 64 bit little endian word.\n   71-      Cryptotext\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Encrypted",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Authenticated.html#Encrypted",
          "type": "data"
        },
        "index": {
          "description": "An encrypt-then-MACed value The binary format is as follows Bytes What bit nonce bit Skein-MAC Length of cryptotext as bit little endian word Cryptotext",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Encrypted",
          "package": "threefish",
          "partial": "Encrypted",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:Encrypted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "Key256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Key256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Key256",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:Key256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "Nonce256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein.html#Nonce256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Nonce256",
          "package": "threefish",
          "partial": "Nonce",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:Nonce256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "Plaintext",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Authenticated.html#Plaintext",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "Plaintext",
          "package": "threefish",
          "partial": "Plaintext",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#t:Plaintext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "BadMAC",
          "package": "threefish",
          "signature": "BadMAC",
          "source": "src/Crypto-Threefish-Authenticated.html#DecryptFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "BadMAC",
          "package": "threefish",
          "partial": "Bad MAC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:BadMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Authenticated",
          "name": "NoDecode",
          "package": "threefish",
          "signature": "NoDecode String",
          "source": "src/Crypto-Threefish-Authenticated.html#DecryptFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "NoDecode",
          "package": "threefish",
          "partial": "No Decode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:NoDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt and decode a message. Will fail if there is a MAC mismatch or if\n   the message can't be decoded into the given data type.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decrypt",
          "package": "threefish",
          "signature": "Key256 -\u003e Encrypted a -\u003e Either DecryptFailure a",
          "source": "src/Crypto-Threefish-Authenticated.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Decrypt and decode message Will fail if there is MAC mismatch or if the message can be decoded into the given data type",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decrypt",
          "normalized": "Key-\u003eEncrypted a-\u003eEither DecryptFailure a",
          "package": "threefish",
          "signature": "Key-\u003eEncrypted a-\u003eEither DecryptFailure a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify and decrypt a message.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decrypt'",
          "package": "threefish",
          "signature": "Key256 -\u003e Encrypted a -\u003e Either DecryptFailure Plaintext",
          "source": "src/Crypto-Threefish-Authenticated.html#decrypt%27",
          "type": "function"
        },
        "index": {
          "description": "Verify and decrypt message",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decrypt'",
          "normalized": "Key-\u003eEncrypted a-\u003eEither DecryptFailure Plaintext",
          "package": "threefish",
          "signature": "Key-\u003eEncrypted a-\u003eEither DecryptFailure Plaintext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:decrypt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerify and decrypt a lazy ByteString.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decryptBytes",
          "package": "threefish",
          "signature": "Key256 -\u003e ByteString -\u003e Either DecryptFailure Plaintext",
          "source": "src/Crypto-Threefish-Authenticated.html#decryptBytes",
          "type": "function"
        },
        "index": {
          "description": "Verify and decrypt lazy ByteString",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "decryptBytes",
          "normalized": "Key-\u003eByteString-\u003eEither DecryptFailure Plaintext",
          "package": "threefish",
          "partial": "Bytes",
          "signature": "Key-\u003eByteString-\u003eEither DecryptFailure Plaintext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:decryptBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt-then-MAC any serializable value.\n   The 256 bit nonce is generated using a Skein-based PRNG seeded from the\n   system's entropy pool. This means that two successive calls to encrypt\n   will not yield the exact same output; however, the identity\n   forall k, x. Right x == decrypt k (encrypt k x)\n   will always hold.\n\u003c/p\u003e\u003cp\u003eThe subkeys for encryption and MAC are generated by applying Skein-KDF\n   to the master key, with the key identifiers \u003ca\u003ecrypt\u003c/a\u003e and \u003ca\u003emac\u003c/a\u003e\n   respectively, zero padded at the end until 32 bytes.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encrypt",
          "package": "threefish",
          "signature": "Key256 -\u003e a -\u003e Encrypted a",
          "source": "src/Crypto-Threefish-Authenticated.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt-then-MAC any serializable value The bit nonce is generated using Skein-based PRNG seeded from the system entropy pool This means that two successive calls to encrypt will not yield the exact same output however the identity forall Right decrypt encrypt will always hold The subkeys for encryption and MAC are generated by applying Skein-KDF to the master key with the key identifiers crypt and mac respectively zero padded at the end until bytes",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encrypt",
          "normalized": "Key-\u003ea-\u003eEncrypted a",
          "package": "threefish",
          "signature": "Key-\u003ea-\u003eEncrypted a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt-then-MAC a message given a key and a nonce. Note that using the\n   same nonce more than once for a given key will completely destroy\n   security.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encrypt'",
          "package": "threefish",
          "signature": "Key256 -\u003e Nonce256 -\u003e Plaintext -\u003e Encrypted a",
          "source": "src/Crypto-Threefish-Authenticated.html#encrypt%27",
          "type": "function"
        },
        "index": {
          "description": "Encrypt-then-MAC message given key and nonce Note that using the same nonce more than once for given key will completely destroy security",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encrypt'",
          "normalized": "Key-\u003eNonce-\u003ePlaintext-\u003eEncrypted a",
          "package": "threefish",
          "signature": "Key-\u003eNonce-\u003ePlaintext-\u003eEncrypted a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:encrypt-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt-then-MAC a lazy ByteString.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encryptBytes",
          "package": "threefish",
          "signature": "Key256 -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Threefish-Authenticated.html#encryptBytes",
          "type": "function"
        },
        "index": {
          "description": "Encrypt-then-MAC lazy ByteString",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "encryptBytes",
          "normalized": "Key-\u003eByteString-\u003eByteString",
          "package": "threefish",
          "partial": "Bytes",
          "signature": "Key-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:encryptBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the contents of a block.\n\u003c/p\u003e",
          "module": "[\"Crypto.Threefish.Authenticated\",\"Crypto.Threefish.Random\",\"Crypto.Threefish.Skein.StreamCipher\"]",
          "name": "fromBlock",
          "package": "threefish",
          "signature": "a -\u003e ByteString",
          "source": "src/Crypto-Threefish.html#fromBlock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:fromBlock\",\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:fromBlock\",\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#v:fromBlock\"]"
        },
        "index": {
          "description": "Extract the contents of block",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "fromBlock",
          "normalized": "a-\u003eByteString",
          "package": "threefish",
          "partial": "Block",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:fromBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a 256 bit nonce using the Skein PRNG.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Authenticated",
          "name": "generateNonce",
          "package": "threefish",
          "signature": "IO Nonce256",
          "source": "src/Crypto-Threefish-Authenticated.html#generateNonce",
          "type": "function"
        },
        "index": {
          "description": "Generate bit nonce using the Skein PRNG",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "generateNonce",
          "package": "threefish",
          "partial": "Nonce",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:generateNonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an appropriately sized block.\n\u003c/p\u003e",
          "module": "[\"Crypto.Threefish.Authenticated\",\"Crypto.Threefish.Random\",\"Crypto.Threefish.Skein.StreamCipher\"]",
          "name": "toBlock",
          "package": "threefish",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Crypto-Threefish.html#toBlock",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:toBlock\",\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:toBlock\",\"http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#v:toBlock\"]"
        },
        "index": {
          "description": "Create an appropriately sized block",
          "hierarchy": "Crypto Threefish Authenticated",
          "module": "Crypto.Threefish.Authenticated",
          "name": "toBlock",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "threefish",
          "partial": "Block",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Authenticated.html#v:toBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSkein 256 as a PRNG.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "Random",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Random.html",
          "type": "module"
        },
        "index": {
          "description": "Skein as PRNG",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "Random",
          "package": "threefish",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Random",
          "name": "Block256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Block256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "Block256",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#t:Block256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWith a source of random number supply in hand, the \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e class allows the\nprogrammer to extract random values of a variety of types.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "Random",
          "package": "threefish",
          "type": "class"
        },
        "index": {
          "description": "With source of random number supply in hand the Random class allows the programmer to extract random values of variety of types Minimal complete definition randomR and random",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "Random",
          "package": "threefish",
          "partial": "Random",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e provides a common interface to random number\n generators.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "RandomGen",
          "package": "threefish",
          "type": "class"
        },
        "index": {
          "description": "The class RandomGen provides common interface to random number generators",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "RandomGen",
          "package": "threefish",
          "partial": "Random Gen",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#t:RandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkein-based PRNG as defined in the Skein 1.3 paper.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "SkeinGen",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Random.html#SkeinGen",
          "type": "data"
        },
        "index": {
          "description": "Skein-based PRNG as defined in the Skein paper",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "SkeinGen",
          "package": "threefish",
          "partial": "Skein Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#t:SkeinGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e operation yields the range of values returned by\n the generator.\n\u003c/p\u003e\u003cp\u003eIt is required that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003e(a,b) = \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e, then \u003ccode\u003ea \u003c b\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e always returns a pair of defined \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe second condition ensures that \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e cannot examine its\n argument, and hence the value it returns can be determined only by the\n instance of \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e.  That in turn allows an implementation to make\n a single call to \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e to establish a generator's range, without\n being concerned that the generator returned by (say) \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e might have\n a different range to the generator passed to \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition spans the full range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "genRange",
          "package": "threefish",
          "signature": "g -\u003e (Int, Int)",
          "type": "method"
        },
        "index": {
          "description": "The genRange operation yields the range of values returned by the generator It is required that If genRange then genRange always returns pair of defined Int The second condition ensures that genRange cannot examine its argument and hence the value it returns can be determined only by the instance of RandomGen That in turn allows an implementation to make single call to genRange to establish generator range without being concerned that the generator returned by say next might have different range to the generator passed to next The default definition spans the full range of Int",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "genRange",
          "normalized": "a-\u003e(Int,Int)",
          "package": "threefish",
          "partial": "Range",
          "signature": "g-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:genRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Skein PRNG from a seed.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "mkSkeinGen",
          "package": "threefish",
          "signature": "a -\u003e SkeinGen",
          "source": "src/Crypto-Threefish-Random.html#mkSkeinGen",
          "type": "function"
        },
        "index": {
          "description": "Create Skein PRNG from seed",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "mkSkeinGen",
          "normalized": "a-\u003eSkeinGen",
          "package": "threefish",
          "partial": "Skein Gen",
          "signature": "a-\u003eSkeinGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:mkSkeinGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Skein PRNG with a custom pool size. Larger pool sizes give faster\n   random data, but obviously take up more memory. Pool size is preserved\n   across splits.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "mkSkeinGenEx",
          "package": "threefish",
          "signature": "Int -\u003e Block256 -\u003e SkeinGen",
          "source": "src/Crypto-Threefish-Random.html#mkSkeinGenEx",
          "type": "function"
        },
        "index": {
          "description": "Create Skein PRNG with custom pool size Larger pool sizes give faster random data but obviously take up more memory Pool size is preserved across splits",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "mkSkeinGenEx",
          "normalized": "Int-\u003eBlock-\u003eSkeinGen",
          "package": "threefish",
          "partial": "Skein Gen Ex",
          "signature": "Int-\u003eBlock-\u003eSkeinGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:mkSkeinGenEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Skein PRNG from the system's entropy pool.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "newSkeinGen",
          "package": "threefish",
          "signature": "IO SkeinGen",
          "source": "src/Crypto-Threefish-Random.html#newSkeinGen",
          "type": "function"
        },
        "index": {
          "description": "Create new Skein PRNG from the system entropy pool",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "newSkeinGen",
          "package": "threefish",
          "partial": "Skein Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:newSkeinGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enext\u003c/a\u003e\u003c/code\u003e operation returns an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e that is uniformly distributed\n in the range returned by \u003ccode\u003e\u003ca\u003egenRange\u003c/a\u003e\u003c/code\u003e (including both end points),\n and a new generator.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "next",
          "package": "threefish",
          "signature": "g -\u003e (Int, g)",
          "type": "method"
        },
        "index": {
          "description": "The next operation returns an Int that is uniformly distributed in the range returned by genRange including both end points and new generator",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "next",
          "normalized": "a-\u003e(Int,a)",
          "package": "threefish",
          "signature": "g-\u003e(Int,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, but using a default range determined by the type:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e For bounded types (instances of \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e, such as \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e),\n   the range is normally the whole type.\n\u003c/li\u003e\u003cli\u003e For fractional types, the range is normally the semi-closed interval\n \u003ccode\u003e[0,1)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, the range is (arbitrarily) the range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "random",
          "package": "threefish",
          "signature": "g -\u003e (a, g)",
          "type": "method"
        },
        "index": {
          "description": "The same as randomR but using default range determined by the type For bounded types instances of Bounded such as Char the range is normally the whole type For fractional types the range is normally the semi-closed interval For Integer the range is arbitrarily the range of Int",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "random",
          "normalized": "a-\u003e(b,a)",
          "package": "threefish",
          "signature": "g-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate n random bytes using the given generator.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randomBytes",
          "package": "threefish",
          "signature": "Int -\u003e SkeinGen -\u003e (ByteString, SkeinGen)",
          "source": "src/Crypto-Threefish-Random.html#randomBytes",
          "type": "function"
        },
        "index": {
          "description": "Generate random bytes using the given generator",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randomBytes",
          "normalized": "Int-\u003eSkeinGen-\u003e(ByteString,SkeinGen)",
          "package": "threefish",
          "partial": "Bytes",
          "signature": "Int-\u003eSkeinGen-\u003e(ByteString,SkeinGen)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randomBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randomIO",
          "package": "threefish",
          "signature": "IO a",
          "type": "method"
        },
        "index": {
          "description": "variant of random that uses the global random number generator see System.Random",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randomIO",
          "package": "threefish",
          "partial": "IO",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randomIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a range \u003cem\u003e(lo,hi)\u003c/em\u003e and a random number generator\n \u003cem\u003eg\u003c/em\u003e, and returns a random value uniformly distributed in the closed\n interval \u003cem\u003e[lo,hi]\u003c/em\u003e, together with a new generator. It is unspecified\n what happens if \u003cem\u003elo\u003ehi\u003c/em\u003e. For continuous types there is no requirement\n that the values \u003cem\u003elo\u003c/em\u003e and \u003cem\u003ehi\u003c/em\u003e are ever produced, but they may be,\n depending on the implementation and the interval.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randomR",
          "package": "threefish",
          "signature": "(a, a) -\u003e g -\u003e (a, g)",
          "type": "method"
        },
        "index": {
          "description": "Takes range lo hi and random number generator and returns random value uniformly distributed in the closed interval lo hi together with new generator It is unspecified what happens if lo hi For continuous types there is no requirement that the values lo and hi are ever produced but they may be depending on the implementation and the interval",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randomR",
          "normalized": "(a,a)-\u003eb-\u003e(a,b)",
          "package": "threefish",
          "signature": "(a,a)-\u003eg-\u003e(a,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randomR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e that uses the global random number generator\n (see \u003ca\u003eSystem.Random\u003c/a\u003e).\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randomRIO",
          "package": "threefish",
          "signature": "(a, a) -\u003e IO a",
          "type": "method"
        },
        "index": {
          "description": "variant of randomR that uses the global random number generator see System.Random",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randomRIO",
          "normalized": "(a,a)-\u003eIO a",
          "package": "threefish",
          "partial": "RIO",
          "signature": "(a,a)-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randomRIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandomR\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randomRs",
          "package": "threefish",
          "signature": "(a, a) -\u003e g -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of randomR producing an infinite list of random values instead of returning new generator",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randomRs",
          "normalized": "(a,a)-\u003eb-\u003e[a]",
          "package": "threefish",
          "partial": "Rs",
          "signature": "(a,a)-\u003eg-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randomRs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlural variant of \u003ccode\u003e\u003ca\u003erandom\u003c/a\u003e\u003c/code\u003e, producing an infinite list of\n random values instead of returning a new generator.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "randoms",
          "package": "threefish",
          "signature": "g -\u003e [a]",
          "type": "method"
        },
        "index": {
          "description": "Plural variant of random producing an infinite list of random values instead of returning new generator",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "randoms",
          "normalized": "a-\u003e[b]",
          "package": "threefish",
          "signature": "g-\u003e[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:randoms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReseed a Skein PRNG.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "reseedSkeinGen",
          "package": "threefish",
          "signature": "Block256 -\u003e SkeinGen -\u003e SkeinGen",
          "source": "src/Crypto-Threefish-Random.html#reseedSkeinGen",
          "type": "function"
        },
        "index": {
          "description": "Reseed Skein PRNG",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "reseedSkeinGen",
          "normalized": "Block-\u003eSkeinGen-\u003eSkeinGen",
          "package": "threefish",
          "partial": "Skein Gen",
          "signature": "Block-\u003eSkeinGen-\u003eSkeinGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:reseedSkeinGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e operation allows one to obtain two distinct random number\n generators. This is very useful in functional programs (for example, when\n passing a random number generator down to recursive calls), but very\n little work has been done on statistically robust implementations of\n \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e ([\u003ca\u003eSystem.Random\u003c/a\u003e, \u003ca\u003eSystem.Random\u003c/a\u003e]\n are the only examples we know of).\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Random",
          "name": "split",
          "package": "threefish",
          "signature": "g -\u003e (g, g)",
          "type": "method"
        },
        "index": {
          "description": "The split operation allows one to obtain two distinct random number generators This is very useful in functional programs for example when passing random number generator down to recursive calls but very little work has been done on statistically robust implementations of split System.Random System.Random are the only examples we know of",
          "hierarchy": "Crypto Threefish Random",
          "module": "Crypto.Threefish.Random",
          "name": "split",
          "normalized": "a-\u003e(a,a)",
          "package": "threefish",
          "signature": "g-\u003e(g,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Random.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSkein FFI internals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Internal",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Skein FFI internals",
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Internal",
          "package": "threefish",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Skein256Ctx",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein-Internal.html#Skein256Ctx",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Skein256Ctx",
          "package": "threefish",
          "partial": "Skein Ctx",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#t:Skein256Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Skein256Ctx",
          "package": "threefish",
          "signature": "Skein256Ctx (ForeignPtr Word64)",
          "source": "src/Crypto-Threefish-Skein-Internal.html#Skein256Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "Skein256Ctx",
          "package": "threefish",
          "partial": "Skein Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#v:Skein256Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_init",
          "package": "threefish",
          "signature": "Ptr Word64-\u003e Ptr Word64-\u003e Word64-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_init",
          "normalized": "Ptr Word-\u003ePtr Word-\u003eWord-\u003eIO()",
          "package": "threefish",
          "signature": "Ptr Word-\u003ePtr Word-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#v:skein256_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_output",
          "package": "threefish",
          "signature": "Ptr Word64-\u003e Int-\u003e Int-\u003e Ptr Word64-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_output",
          "normalized": "Ptr Word-\u003eInt-\u003eInt-\u003ePtr Word-\u003eIO()",
          "package": "threefish",
          "signature": "Ptr Word-\u003eInt-\u003eInt-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#v:skein256_output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_update",
          "package": "threefish",
          "signature": "Ptr Word64-\u003e Int-\u003e Int-\u003e Word64-\u003e Ptr Word64-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein Internal",
          "module": "Crypto.Threefish.Skein.Internal",
          "name": "skein256_update",
          "normalized": "Ptr Word-\u003eInt-\u003eInt-\u003eWord-\u003ePtr Word-\u003eIO()",
          "package": "threefish",
          "signature": "Ptr Word-\u003eInt-\u003eInt-\u003eWord-\u003ePtr Word-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-Internal.html#v:skein256_update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSkein as a key derivation function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "KDF",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein-KDF.html",
          "type": "module"
        },
        "index": {
          "description": "Skein as key derivation function",
          "hierarchy": "Crypto Threefish Skein KDF",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "KDF",
          "package": "threefish",
          "partial": "KDF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-KDF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a key from a master key using a custom key identifier.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "deriveKey",
          "package": "threefish",
          "signature": "Key256 -\u003e Block256 -\u003e Key256",
          "source": "src/Crypto-Threefish-Skein-KDF.html#deriveKey",
          "type": "function"
        },
        "index": {
          "description": "Derive key from master key using custom key identifier",
          "hierarchy": "Crypto Threefish Skein KDF",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "deriveKey",
          "normalized": "Key-\u003eBlock-\u003eKey",
          "package": "threefish",
          "partial": "Key",
          "signature": "Key-\u003eBlock-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-KDF.html#v:deriveKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive up to 2^64 keys from a master key.\n   The key identifiers will be 0, 1, ... 2^64-1.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "deriveKeys",
          "package": "threefish",
          "signature": "Key256 -\u003e [Key256]",
          "source": "src/Crypto-Threefish-Skein-KDF.html#deriveKeys",
          "type": "function"
        },
        "index": {
          "description": "Derive up to keys from master key The key identifiers will be",
          "hierarchy": "Crypto Threefish Skein KDF",
          "module": "Crypto.Threefish.Skein.KDF",
          "name": "deriveKeys",
          "normalized": "Key-\u003e[Key]",
          "package": "threefish",
          "partial": "Keys",
          "signature": "Key-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-KDF.html#v:deriveKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e256 bit Skein as a stream cipher, as specified in the Skein 1.3 paper.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "StreamCipher",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein-StreamCipher.html",
          "type": "module"
        },
        "index": {
          "description": "bit Skein as stream cipher as specified in the Skein paper",
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "StreamCipher",
          "package": "threefish",
          "partial": "Stream Cipher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Block256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Block256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Block256",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#t:Block256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Key256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Key256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Key256",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#t:Key256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Nonce256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein.html#Nonce256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "Nonce256",
          "package": "threefish",
          "partial": "Nonce",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#t:Nonce256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncryption and decryption are the same operation for a stream cipher, but\n   we may want to have a function called encrypt for clarity.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "decrypt",
          "package": "threefish",
          "signature": "Key256 -\u003e Nonce256 -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Threefish-Skein-StreamCipher.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Encryption and decryption are the same operation for stream cipher but we may want to have function called encrypt for clarity",
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "decrypt",
          "normalized": "Key-\u003eNonce-\u003eByteString-\u003eByteString",
          "package": "threefish",
          "signature": "Key-\u003eNonce-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a lazy ByteString using 256 bit Skein as a stream cipher.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "encrypt",
          "package": "threefish",
          "signature": "Key256 -\u003e Nonce256 -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Threefish-Skein-StreamCipher.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Encrypt lazy ByteString using bit Skein as stream cipher",
          "hierarchy": "Crypto Threefish Skein StreamCipher",
          "module": "Crypto.Threefish.Skein.StreamCipher",
          "name": "encrypt",
          "normalized": "Key-\u003eNonce-\u003eByteString-\u003eByteString",
          "package": "threefish",
          "signature": "Key-\u003eNonce-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein-StreamCipher.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e256 and 512 bit Skein. Supports \u003ca\u003enormal\u003c/a\u003e hashing and Skein-MAC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "Skein",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein.html",
          "type": "module"
        },
        "index": {
          "description": "and bit Skein Supports normal hashing and Skein-MAC",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Skein",
          "package": "threefish",
          "partial": "Skein",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Block256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Block256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Block256",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Block256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Block512",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish512.html#Block512",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Block512",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Block512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Key256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Key256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Key256",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Key256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Key512",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish512.html#Key512",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Key512",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Key512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Nonce256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein.html#Nonce256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Nonce256",
          "package": "threefish",
          "partial": "Nonce",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Nonce256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Skein",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Skein.html#Skein",
          "type": "class"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Skein",
          "package": "threefish",
          "partial": "Skein",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Skein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "Threefish",
          "package": "threefish",
          "source": "src/Crypto-Threefish.html#Threefish",
          "type": "class"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "Threefish",
          "package": "threefish",
          "partial": "Threefish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#t:Threefish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the contents of a block.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "fromBlock",
          "package": "threefish",
          "signature": "a -\u003e ByteString",
          "source": "src/Crypto-Threefish.html#fromBlock",
          "type": "method"
        },
        "index": {
          "description": "Extract the contents of block",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "fromBlock",
          "normalized": "a-\u003eByteString",
          "package": "threefish",
          "partial": "Block",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:fromBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish.Skein",
          "name": "hash256",
          "package": "threefish",
          "signature": "Word64 -\u003e Key256 -\u003e ByteString -\u003e ByteString",
          "source": "src/Crypto-Threefish-Skein.html#hash256",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "hash256",
          "normalized": "Word-\u003eKey-\u003eByteString-\u003eByteString",
          "package": "threefish",
          "signature": "Word-\u003eKey-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:hash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHash a message using a particular key. For normal hashing, use all zeroes;\n   for Skein-MAC, use the MAC key.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "hash512",
          "package": "threefish",
          "signature": "Key512 -\u003e ByteString -\u003e Block512",
          "source": "src/Crypto-Threefish-Skein.html#hash512",
          "type": "function"
        },
        "index": {
          "description": "Hash message using particular key For normal hashing use all zeroes for Skein-MAC use the MAC key",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "hash512",
          "normalized": "Key-\u003eByteString-\u003eBlock",
          "package": "threefish",
          "signature": "Key-\u003eByteString-\u003eBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:hash512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the Skein checksum of a message.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "skein",
          "package": "threefish",
          "signature": "ByteString -\u003e a",
          "source": "src/Crypto-Threefish-Skein.html#skein",
          "type": "method"
        },
        "index": {
          "description": "Calculate the Skein checksum of message",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "skein",
          "normalized": "ByteString-\u003ea",
          "package": "threefish",
          "signature": "ByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:skein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the Skein-MAC of a message.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "skeinMAC",
          "package": "threefish",
          "signature": "a -\u003e ByteString -\u003e a",
          "source": "src/Crypto-Threefish-Skein.html#skeinMAC",
          "type": "method"
        },
        "index": {
          "description": "Calculate the Skein-MAC of message",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "skeinMAC",
          "normalized": "a-\u003eByteString-\u003ea",
          "package": "threefish",
          "partial": "MAC",
          "signature": "a-\u003eByteString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:skeinMAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt a block using the given key and tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishDecrypt",
          "package": "threefish",
          "signature": "a -\u003e Tweak -\u003e a -\u003e a",
          "source": "src/Crypto-Threefish.html#threefishDecrypt",
          "type": "method"
        },
        "index": {
          "description": "Decrypt block using the given key and tweak value",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishDecrypt",
          "normalized": "a-\u003eTweak-\u003ea-\u003ea",
          "package": "threefish",
          "partial": "Decrypt",
          "signature": "a-\u003eTweak-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:threefishDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a block using the given key and tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishEncrypt",
          "package": "threefish",
          "signature": "a -\u003e Tweak -\u003e a -\u003e a",
          "source": "src/Crypto-Threefish.html#threefishEncrypt",
          "type": "method"
        },
        "index": {
          "description": "Encrypt block using the given key and tweak value",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishEncrypt",
          "normalized": "a-\u003eTweak-\u003ea-\u003ea",
          "package": "threefish",
          "partial": "Encrypt",
          "signature": "a-\u003eTweak-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:threefishEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Threefish key using a custom tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishKey",
          "package": "threefish",
          "signature": "Tweak -\u003e a -\u003e b",
          "source": "src/Crypto-Threefish.html#threefishKey",
          "type": "method"
        },
        "index": {
          "description": "Create Threefish key using custom tweak value",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "threefishKey",
          "normalized": "Tweak-\u003ea-\u003eb",
          "package": "threefish",
          "partial": "Key",
          "signature": "Tweak-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:threefishKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an appropriately sized block.\n\u003c/p\u003e",
          "module": "Crypto.Threefish.Skein",
          "name": "toBlock",
          "package": "threefish",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Crypto-Threefish.html#toBlock",
          "type": "method"
        },
        "index": {
          "description": "Create an appropriately sized block",
          "hierarchy": "Crypto Threefish Skein",
          "module": "Crypto.Threefish.Skein",
          "name": "toBlock",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "threefish",
          "partial": "Block",
          "signature": "ByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish-Skein.html#v:toBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e256 and 512 bit variants of the Threefish block cipher used as the\n   foundation of the Skein hash function.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Threefish",
          "name": "Threefish",
          "package": "threefish",
          "source": "src/Crypto-Threefish.html",
          "type": "module"
        },
        "index": {
          "description": "and bit variants of the Threefish block cipher used as the foundation of the Skein hash function",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Threefish",
          "package": "threefish",
          "partial": "Threefish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Block256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Block256",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Block256",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Block256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Block512",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish512.html#Block512",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Block512",
          "package": "threefish",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Block512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Key256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Key256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Key256",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Key256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Key512",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish512.html#Key512",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Key512",
          "package": "threefish",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Key512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Threefish",
          "package": "threefish",
          "source": "src/Crypto-Threefish.html#Threefish",
          "type": "class"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Threefish",
          "package": "threefish",
          "partial": "Threefish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Threefish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e256 bit Threefish block cipher.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "Threefish256",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish256.html#Threefish256",
          "type": "data"
        },
        "index": {
          "description": "bit Threefish block cipher",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Threefish256",
          "package": "threefish",
          "partial": "Threefish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Threefish256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e512 bit Threefish block cipher.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "Threefish512",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Threefish512.html#Threefish512",
          "type": "data"
        },
        "index": {
          "description": "bit Threefish block cipher",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Threefish512",
          "package": "threefish",
          "partial": "Threefish",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Threefish512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreefish tweak value. Please see the Skein specification for info on\n   how to use this.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "Tweak",
          "package": "threefish",
          "source": "src/Crypto-Threefish-Common.html#Tweak",
          "type": "data"
        },
        "index": {
          "description": "Threefish tweak value Please see the Skein specification for info on how to use this",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Tweak",
          "package": "threefish",
          "partial": "Tweak",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#t:Tweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Threefish",
          "name": "Tweak",
          "package": "threefish",
          "signature": "Tweak !Word64 !Word64",
          "source": "src/Crypto-Threefish-Common.html#Tweak",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "Tweak",
          "package": "threefish",
          "partial": "Tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:Tweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault tweak when Threefish is used in CBC, CTR, etc. modes.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "defaultTweak",
          "package": "threefish",
          "signature": "Tweak",
          "source": "src/Crypto-Threefish-Common.html#defaultTweak",
          "type": "function"
        },
        "index": {
          "description": "Default tweak when Threefish is used in CBC CTR etc modes",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "defaultTweak",
          "package": "threefish",
          "partial": "Tweak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:defaultTweak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the contents of a block.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "fromBlock",
          "package": "threefish",
          "signature": "a -\u003e ByteString",
          "source": "src/Crypto-Threefish.html#fromBlock",
          "type": "method"
        },
        "index": {
          "description": "Extract the contents of block",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "fromBlock",
          "normalized": "a-\u003eByteString",
          "package": "threefish",
          "partial": "Block",
          "signature": "a-\u003eByteString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:fromBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string of hexadecimal digits into a ByteString.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "parseHex",
          "package": "threefish",
          "signature": "String -\u003e Maybe ByteString",
          "source": "src/Crypto-Threefish-Common.html#parseHex",
          "type": "function"
        },
        "index": {
          "description": "Parses string of hexadecimal digits into ByteString",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "parseHex",
          "normalized": "String-\u003eMaybe ByteString",
          "package": "threefish",
          "partial": "Hex",
          "signature": "String-\u003eMaybe ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:parseHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead any deserializable type from a hex string.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "readHex",
          "package": "threefish",
          "signature": "String -\u003e Maybe a",
          "source": "src/Crypto-Threefish-Common.html#readHex",
          "type": "function"
        },
        "index": {
          "description": "Read any deserializable type from hex string",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "readHex",
          "normalized": "String-\u003eMaybe a",
          "package": "threefish",
          "partial": "Hex",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:readHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrypt a block using the given key and tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "threefishDecrypt",
          "package": "threefish",
          "signature": "a -\u003e Tweak -\u003e a -\u003e a",
          "source": "src/Crypto-Threefish.html#threefishDecrypt",
          "type": "method"
        },
        "index": {
          "description": "Decrypt block using the given key and tweak value",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "threefishDecrypt",
          "normalized": "a-\u003eTweak-\u003ea-\u003ea",
          "package": "threefish",
          "partial": "Decrypt",
          "signature": "a-\u003eTweak-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:threefishDecrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncrypt a block using the given key and tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "threefishEncrypt",
          "package": "threefish",
          "signature": "a -\u003e Tweak -\u003e a -\u003e a",
          "source": "src/Crypto-Threefish.html#threefishEncrypt",
          "type": "method"
        },
        "index": {
          "description": "Encrypt block using the given key and tweak value",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "threefishEncrypt",
          "normalized": "a-\u003eTweak-\u003ea-\u003ea",
          "package": "threefish",
          "partial": "Encrypt",
          "signature": "a-\u003eTweak-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:threefishEncrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Threefish key using a custom tweak value.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "threefishKey",
          "package": "threefish",
          "signature": "Tweak -\u003e a -\u003e b",
          "source": "src/Crypto-Threefish.html#threefishKey",
          "type": "method"
        },
        "index": {
          "description": "Create Threefish key using custom tweak value",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "threefishKey",
          "normalized": "Tweak-\u003ea-\u003eb",
          "package": "threefish",
          "partial": "Key",
          "signature": "Tweak-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:threefishKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an appropriately sized block.\n\u003c/p\u003e",
          "module": "Crypto.Threefish",
          "name": "toBlock",
          "package": "threefish",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Crypto-Threefish.html#toBlock",
          "type": "method"
        },
        "index": {
          "description": "Create an appropriately sized block",
          "hierarchy": "Crypto Threefish",
          "module": "Crypto.Threefish",
          "name": "toBlock",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "threefish",
          "partial": "Block",
          "signature": "ByteString-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/threefish/docs/Crypto-Threefish.html#v:toBlock"
      }
    }
  ]
]