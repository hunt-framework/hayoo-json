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
        "word": "DRBG"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.CTR",
          "name": "CTR",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-CTR.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "CTR",
          "package": "DRBG",
          "partial": "CTR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.CTR",
          "name": "State",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-CTR.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "State",
          "package": "DRBG",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate new bytes of data, stepping the generator.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "generate",
          "package": "DRBG",
          "signature": "State a -\u003e ByteLength -\u003e AdditionalInput -\u003e Maybe (RandomBits, State a)",
          "source": "src/Crypto-Random-DRBG-CTR.html#generate",
          "type": "function"
        },
        "index": {
          "description": "Generate new bytes of data stepping the generator",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "generate",
          "normalized": "State a-\u003eByteLength-\u003eAdditionalInput-\u003eMaybe(RandomBits,State a)",
          "package": "DRBG",
          "signature": "State a-\u003eByteLength-\u003eAdditionalInput-\u003eMaybe(RandomBits,State a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a count of how many times this generator has been used since\n instantiation or reseed.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "getCounter",
          "package": "DRBG",
          "signature": "State a -\u003e Word64",
          "source": "src/Crypto-Random-DRBG-CTR.html#getCounter",
          "type": "function"
        },
        "index": {
          "description": "Get count of how many times this generator has been used since instantiation or reseed",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "getCounter",
          "normalized": "State a-\u003eWord",
          "package": "DRBG",
          "partial": "Counter",
          "signature": "State a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:getCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstantiate a new CTR based counter.  This assumes the block cipher is\n safe for generating 2^48 seperate bitstrings (e.g. For SP800-90 we\n assume AES and not 3DES)\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "instantiate",
          "package": "DRBG",
          "signature": "Entropy -\u003e PersonalizationString -\u003e Maybe (State a)",
          "source": "src/Crypto-Random-DRBG-CTR.html#instantiate",
          "type": "function"
        },
        "index": {
          "description": "Instantiate new CTR based counter This assumes the block cipher is safe for generating seperate bitstrings e.g For SP800-90 we assume AES and not DES",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "instantiate",
          "normalized": "Entropy-\u003ePersonalizationString-\u003eMaybe(State a)",
          "package": "DRBG",
          "signature": "Entropy-\u003ePersonalizationString-\u003eMaybe(State a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:instantiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ereseed oldRNG entropy additionalInfo\u003c/pre\u003e\u003cp\u003eReseed a DRBG with some entropy (\u003ccode\u003eent\u003c/code\u003e must be at least seedlength, which is the\n block length plus the key length)\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "reseed",
          "package": "DRBG",
          "signature": "State a -\u003e Entropy -\u003e AdditionalInput -\u003e Maybe (State a)",
          "source": "src/Crypto-Random-DRBG-CTR.html#reseed",
          "type": "function"
        },
        "index": {
          "description": "reseed oldRNG entropy additionalInfo Reseed DRBG with some entropy ent must be at least seedlength which is the block length plus the key length",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "reseed",
          "normalized": "State a-\u003eEntropy-\u003eAdditionalInput-\u003eMaybe(State a)",
          "package": "DRBG",
          "signature": "State a-\u003eEntropy-\u003eAdditionalInput-\u003eMaybe(State a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:reseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reseed interval\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "reseedInterval",
          "package": "DRBG",
          "signature": "Word64",
          "source": "src/Crypto-Random-DRBG-CTR.html#reseedInterval",
          "type": "function"
        },
        "index": {
          "description": "The reseed interval",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "reseedInterval",
          "package": "DRBG",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:reseedInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the RNG\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "update",
          "package": "DRBG",
          "signature": "ByteString -\u003e State a -\u003e Maybe (State a)",
          "source": "src/Crypto-Random-DRBG-CTR.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update the RNG",
          "hierarchy": "Crypto Random DRBG CTR",
          "module": "Crypto.Random.DRBG.CTR",
          "name": "update",
          "normalized": "ByteString-\u003eState a-\u003eMaybe(State a)",
          "package": "DRBG",
          "signature": "ByteString-\u003eState a-\u003eMaybe(State a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-CTR.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "HMAC",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-HMAC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "HMAC",
          "package": "DRBG",
          "partial": "HMAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "State",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-HMAC.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "State",
          "package": "DRBG",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "counter",
          "package": "DRBG",
          "signature": "State d -\u003e Word64",
          "source": "src/Crypto-Random-DRBG-HMAC.html#counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "counter",
          "normalized": "State a-\u003eWord",
          "package": "DRBG",
          "signature": "State d-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "generate",
          "package": "DRBG",
          "signature": "State d -\u003e BitLength -\u003e AdditionalInput -\u003e Maybe (RandomBits, State d)",
          "source": "src/Crypto-Random-DRBG-HMAC.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "generate",
          "normalized": "State a-\u003eBitLength-\u003eAdditionalInput-\u003eMaybe(RandomBits,State a)",
          "package": "DRBG",
          "signature": "State d-\u003eBitLength-\u003eAdditionalInput-\u003eMaybe(RandomBits,State d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "instantiate",
          "package": "DRBG",
          "signature": "Entropy -\u003e Nonce -\u003e PersonalizationString -\u003e State d",
          "source": "src/Crypto-Random-DRBG-HMAC.html#instantiate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "instantiate",
          "normalized": "Entropy-\u003eNonce-\u003ePersonalizationString-\u003eState a",
          "package": "DRBG",
          "signature": "Entropy-\u003eNonce-\u003ePersonalizationString-\u003eState d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#v:instantiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "reseed",
          "package": "DRBG",
          "signature": "State d -\u003e Entropy -\u003e AdditionalInput -\u003e State d",
          "source": "src/Crypto-Random-DRBG-HMAC.html#reseed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "reseed",
          "normalized": "State a-\u003eEntropy-\u003eAdditionalInput-\u003eState a",
          "package": "DRBG",
          "signature": "State d-\u003eEntropy-\u003eAdditionalInput-\u003eState d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#v:reseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "reseedInterval",
          "package": "DRBG",
          "signature": "Word64",
          "source": "src/Crypto-Random-DRBG-HMAC.html#reseedInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG HMAC",
          "module": "Crypto.Random.DRBG.HMAC",
          "name": "reseedInterval",
          "package": "DRBG",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-HMAC.html#v:reseedInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "Hash",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Hash.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "Hash",
          "package": "DRBG",
          "partial": "Hash",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "SeedLength",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Hash.html#SeedLength",
          "type": "class"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "SeedLength",
          "package": "DRBG",
          "partial": "Seed Length",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#t:SeedLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "State",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Hash.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "State",
          "package": "DRBG",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "counter",
          "package": "DRBG",
          "signature": "State d -\u003e Word64",
          "source": "src/Crypto-Random-DRBG-Hash.html#counter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "counter",
          "normalized": "State a-\u003eWord",
          "package": "DRBG",
          "signature": "State d-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "generate",
          "package": "DRBG",
          "signature": "State d -\u003e BitLen -\u003e AdditionalInput -\u003e Maybe (RandomBits, State d)",
          "source": "src/Crypto-Random-DRBG-Hash.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "generate",
          "normalized": "State a-\u003eBitLen-\u003eAdditionalInput-\u003eMaybe(RandomBits,State a)",
          "package": "DRBG",
          "signature": "State d-\u003eBitLen-\u003eAdditionalInput-\u003eMaybe(RandomBits,State d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "instantiate",
          "package": "DRBG",
          "signature": "Entropy -\u003e Nonce -\u003e PersonalizationString -\u003e State d",
          "source": "src/Crypto-Random-DRBG-Hash.html#instantiate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "instantiate",
          "normalized": "Entropy-\u003eNonce-\u003ePersonalizationString-\u003eState a",
          "package": "DRBG",
          "signature": "Entropy-\u003eNonce-\u003ePersonalizationString-\u003eState d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:instantiate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "reseed",
          "package": "DRBG",
          "signature": "State d -\u003e Entropy -\u003e AdditionalInput -\u003e State d",
          "source": "src/Crypto-Random-DRBG-Hash.html#reseed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "reseed",
          "normalized": "State a-\u003eEntropy-\u003eAdditionalInput-\u003eState a",
          "package": "DRBG",
          "signature": "State d-\u003eEntropy-\u003eAdditionalInput-\u003eState d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:reseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "reseedInterval",
          "package": "DRBG",
          "signature": "Word64",
          "source": "src/Crypto-Random-DRBG-Hash.html#reseedInterval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "reseedInterval",
          "package": "DRBG",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:reseedInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Hash",
          "name": "seedlen",
          "package": "DRBG",
          "signature": "Tagged h Int",
          "source": "src/Crypto-Random-DRBG-Hash.html#seedlen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Hash",
          "module": "Crypto.Random.DRBG.Hash",
          "name": "seedlen",
          "package": "DRBG",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Hash.html#v:seedlen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "Types",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "Types",
          "package": "DRBG",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "AdditionalInput",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#AdditionalInput",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "AdditionalInput",
          "package": "DRBG",
          "partial": "Additional Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:AdditionalInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "BitLen",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#BitLen",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "BitLen",
          "package": "DRBG",
          "partial": "Bit Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:BitLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "Entropy",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#Entropy",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "Entropy",
          "package": "DRBG",
          "partial": "Entropy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:Entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "Nonce",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#Nonce",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "Nonce",
          "package": "DRBG",
          "partial": "Nonce",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:Nonce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "PersonalizationString",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#PersonalizationString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "PersonalizationString",
          "package": "DRBG",
          "partial": "Personalization String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:PersonalizationString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Crypto.Random.DRBG.Types",
          "name": "RandomBits",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG-Types.html#RandomBits",
          "type": "type"
        },
        "index": {
          "hierarchy": "Crypto Random DRBG Types",
          "module": "Crypto.Random.DRBG.Types",
          "name": "RandomBits",
          "package": "DRBG",
          "partial": "Random Bits",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG-Types.html#t:RandomBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is the convenience interface for the DRBG (NIST standardized\nnumber-theoretically secure random number generator).  Everything is setup\nfor using the \u003ca\u003ecrypto-api\u003c/a\u003e \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003cp\u003eTo instantiate the base types of \u003ccode\u003e\u003ca\u003eHmacDRBG\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eHashDRBG\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eCtrDRBG\u003c/a\u003e\u003c/code\u003e just use\nthe \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e primitives of \u003ccode\u003e\u003ca\u003enewGen\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enewGenIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, to seed a new generator with the system secure random\n(\u003ccode\u003e\u003ca\u003eEntropy\u003c/a\u003e\u003c/code\u003e) and generate some bytes (stepping the generator along\nthe way) one would do:\n\u003c/p\u003e\u003cpre\u003e\n    gen \u003c- newGenIO :: IO HashDRBG\n    let Right (randomBytes, newGen) = genBytes 1024 gen\n\u003c/pre\u003e\u003cp\u003eor the same thing with your own entropy (throwing exceptions instead of dealing\nwith \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e this time):\n\u003c/p\u003e\u003cpre\u003e\n    let gen = throwLeft (newGen entropy)\n        (bytes,gen') = throwLeft (genBytes 1024 gen)\n    in ...\n\u003c/pre\u003e\u003cp\u003eSelecting the underlying hash algorithm is supporting using *DRBGWith types:\n\u003c/p\u003e\u003cpre\u003e\n    gen \u003c- newGenIO :: IO (HmacDRBGWith SHA224)\n\u003c/pre\u003e\u003cp\u003eThere are several modifiers that allow you to compose generators together, producing\ngenerators with modified security, reseed, and performance properties.  \u003ccode\u003e\u003ca\u003eGenXor\u003c/a\u003e\u003c/code\u003e\nwill xor the random bytes of two generators.  \u003ccode\u003e\u003ca\u003eGenBuffered\u003c/a\u003e\u003c/code\u003e will spark off work\nto generate several megabytes of random data and keep that data buffered for\nquick use.  \u003ccode\u003e\u003ca\u003eGenAutoReseed\u003c/a\u003e\u003c/code\u003e will use one generator to automatically reseed\nanother after every 32 kilobytes of requested randoms. \n\u003c/p\u003e\u003cp\u003eFor a complex example, here is a generator that buffers several megabytes of\nrandom values which are an Xor of AES with a SHA384 hash that are each reseeded\nevery 32kb with the output of a SHA512 HMAC generator.  (Not to claim this has\nany enhanced security properties, but just to show the composition can be\nnested).\n\u003c/p\u003e\u003cpre\u003e\n    gen \u003c- newGenIO :: IO (GenBuffered (GenAutoReseed (GenXor AesCntDRBG (HashDRBGWith SHA384)) HmacDRBG))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "DRBG",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html",
          "type": "module"
        },
        "index": {
          "description": "This module is the convenience interface for the DRBG NIST standardized number-theoretically secure random number generator Everything is setup for using the crypto-api CryptoRandomGen type class To instantiate the base types of HmacDRBG HashDRBG or CtrDRBG just use the CryptoRandomGen primitives of newGen or newGenIO For example to seed new generator with the system secure random Entropy and generate some bytes stepping the generator along the way one would do gen newGenIO IO HashDRBG let Right randomBytes newGen genBytes gen or the same thing with your own entropy throwing exceptions instead of dealing with Either this time let gen throwLeft newGen entropy bytes gen throwLeft genBytes gen in Selecting the underlying hash algorithm is supporting using DRBGWith types gen newGenIO IO HmacDRBGWith SHA224 There are several modifiers that allow you to compose generators together producing generators with modified security reseed and performance properties GenXor will xor the random bytes of two generators GenBuffered will spark off work to generate several megabytes of random data and keep that data buffered for quick use GenAutoReseed will use one generator to automatically reseed another after every kilobytes of requested randoms For complex example here is generator that buffers several megabytes of random values which are an Xor of AES with SHA384 hash that are each reseeded every kb with the output of SHA512 HMAC generator Not to claim this has any enhanced security properties but just to show the composition can be nested gen newGenIO IO GenBuffered GenAutoReseed GenXor AesCntDRBG HashDRBGWith SHA384 HmacDRBG",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "DRBG",
          "package": "DRBG",
          "partial": "DRBG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Alias for a Counter DRBG generator using AES 128.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "CtrDRBG",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#CtrDRBG",
          "type": "type"
        },
        "index": {
          "description": "An Alias for Counter DRBG generator using AES",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "CtrDRBG",
          "package": "DRBG",
          "partial": "Ctr DRBG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:CtrDRBG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Hash DRBG state (of kind * -\u003e *) allowing selection\n of the underlying cipher algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "CtrDRBGWith",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#CtrDRBGWith",
          "type": "type"
        },
        "index": {
          "description": "The Hash DRBG state of kind allowing selection of the underlying cipher algorithm",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "CtrDRBGWith",
          "package": "DRBG",
          "partial": "Ctr DRBGWith",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:CtrDRBGWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg :: GenAutoReseed a b\u003c/code\u003e is a generator of type a that gets\n automatically reseeded by generator b upon every 32kB generated.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ereseed g ent\u003c/code\u003e will reseed both the component generators by\n breaking ent up into two parts determined by the genSeedLength of each generator.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003egenBytes\u003c/code\u003e will generate the requested bytes with generator \u003ccode\u003ea\u003c/code\u003e and reseed \u003ccode\u003ea\u003c/code\u003e\n using generator \u003ccode\u003eb\u003c/code\u003e if there has been 32KB of generated data since the last reseed.\n Note a request for \u003e 32KB of data will be filled in one request to generator \u003ccode\u003ea\u003c/code\u003e before\n \u003ccode\u003ea\u003c/code\u003e is reseeded by \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003egenBytesWithEntropy\u003c/code\u003e is lifted into the same call for generator \u003ccode\u003ea\u003c/code\u003e, but\n it will still reseed from generator \u003ccode\u003eb\u003c/code\u003e if the limit is hit.\n\u003c/p\u003e\u003cp\u003eReseed interval: If generator \u003ccode\u003ea\u003c/code\u003e needs a \u003ccode\u003egenSeedLength a = a'\u003c/code\u003e and generator B\n needs reseeded every \u003ccode\u003e2^b\u003c/code\u003e bytes then a \u003ccode\u003eGenAutoReseed a b\u003c/code\u003e will need reseeded every\n \u003ccode\u003e2^15 * (2^b / a')\u003c/code\u003e bytes.  For the common values of \u003ccode\u003ea' = 128\u003c/code\u003e and \u003ccode\u003e2^b = 2^48\u003c/code\u003e this\n means reseeding every 2^56 byte.  For the example numbers this translates to\n about 200 years of continually generating random values at a rate of 10MB/s.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "GenAutoReseed",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#GenAutoReseed",
          "type": "data"
        },
        "index": {
          "description": "GenAutoReseed is generator of type that gets automatically reseeded by generator upon every kB generated reseed ent will reseed both the component generators by breaking ent up into two parts determined by the genSeedLength of each generator genBytes will generate the requested bytes with generator and reseed using generator if there has been KB of generated data since the last reseed Note request for KB of data will be filled in one request to generator before is reseeded by genBytesWithEntropy is lifted into the same call for generator but it will still reseed from generator if the limit is hit Reseed interval If generator needs genSeedLength and generator needs reseeded every bytes then GenAutoReseed will need reseeded every bytes For the common values of and this means reseeding every byte For the example numbers this translates to about years of continually generating random values at rate of MB",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "GenAutoReseed",
          "package": "DRBG",
          "partial": "Gen Auto Reseed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:GenAutoReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg :: GenBuffered a\u003c/code\u003e is a generator of type \u003ccode\u003ea\u003c/code\u003e that attempts to\n maintain a buffer of random values size \u003e= 1MB and \u003c= 5MB at any time.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "GenBuffered",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#GenBuffered",
          "type": "data"
        },
        "index": {
          "description": "GenBuffered is generator of type that attempts to maintain buffer of random values size MB and MB at any time",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "GenBuffered",
          "package": "DRBG",
          "partial": "Gen Buffered",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:GenBuffered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eg :: GenXor a b\u003c/code\u003e generates bytes with sub-generators a and b \n and exclusive-or's the outputs to produce the resulting bytes.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "GenXor",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#GenXor",
          "type": "data"
        },
        "index": {
          "description": "GenXor generates bytes with sub-generators and and exclusive-or the outputs to produce the resulting bytes",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "GenXor",
          "package": "DRBG",
          "partial": "Gen Xor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:GenXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Alias for a Hash DRBG generator using SHA512.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "HashDRBG",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#HashDRBG",
          "type": "type"
        },
        "index": {
          "description": "An Alias for Hash DRBG generator using SHA512",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "HashDRBG",
          "package": "DRBG",
          "partial": "Hash DRBG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:HashDRBG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Hash DRBG state (of kind * -\u003e *) allowing selection\n of the underlying hash algorithm.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "HashDRBGWith",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#HashDRBGWith",
          "type": "type"
        },
        "index": {
          "description": "The Hash DRBG state of kind allowing selection of the underlying hash algorithm",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "HashDRBGWith",
          "package": "DRBG",
          "partial": "Hash DRBGWith",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:HashDRBGWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for an HMAC DRBG generator using SHA512.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "HmacDRBG",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#HmacDRBG",
          "type": "type"
        },
        "index": {
          "description": "An alias for an HMAC DRBG generator using SHA512",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "HmacDRBG",
          "package": "DRBG",
          "partial": "Hmac DRBG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:HmacDRBG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HMAC DRBG state (of kind * -\u003e *) allowing selection\n of the underlying hash algorithm (SHA1, SHA224 ... SHA512)\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "HmacDRBGWith",
          "package": "DRBG",
          "source": "src/Crypto-Random-DRBG.html#HmacDRBGWith",
          "type": "type"
        },
        "index": {
          "description": "The HMAC DRBG state of kind allowing selection of the underlying hash algorithm SHA1 SHA224 SHA512",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "HmacDRBGWith",
          "package": "DRBG",
          "partial": "Hmac DRBGWith",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#t:HmacDRBGWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewGenAutoReseed bs i\u003c/code\u003e creates a new \u003ccode\u003e\u003ca\u003eGenAutoReseed\u003c/a\u003e\u003c/code\u003e with a custom interval\n of \u003ccode\u003ei\u003c/code\u003e bytes using the provided entropy in \u003ccode\u003ebs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is for extremely long running uses of \u003ccode\u003e\u003ca\u003eCryptoRandomGen\u003c/a\u003e\u003c/code\u003e instances\n that can't explicitly reseed as often as a single underlying generator\n would need (usually every 2^48 bytes).\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e\n newGenAutoReseedIO (2^48) :: IO (Either GenError (GenAutoReseed HashDRBG HashDRBG))\n\u003c/pre\u003e\u003cp\u003eWill last for \u003ccode\u003e2^48 * 2^41\u003c/code\u003e bytes of randomly generated data.  That's\n 2^49 terabytes of random values (128 byte reseeds every 2^48 bytes generated).\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "newGenAutoReseed",
          "package": "DRBG",
          "signature": "ByteString -\u003e Word64 -\u003e Either GenError (GenAutoReseed a b)",
          "source": "src/Crypto-Random-DRBG.html#newGenAutoReseed",
          "type": "function"
        },
        "index": {
          "description": "newGenAutoReseed bs creates new GenAutoReseed with custom interval of bytes using the provided entropy in bs This is for extremely long running uses of CryptoRandomGen instances that can explicitly reseed as often as single underlying generator would need usually every bytes For example newGenAutoReseedIO IO Either GenError GenAutoReseed HashDRBG HashDRBG Will last for bytes of randomly generated data That terabytes of random values byte reseeds every bytes generated",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "newGenAutoReseed",
          "normalized": "ByteString-\u003eWord-\u003eEither GenError(GenAutoReseed a b)",
          "package": "DRBG",
          "partial": "Gen Auto Reseed",
          "signature": "ByteString-\u003eWord-\u003eEither GenError(GenAutoReseed a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#v:newGenAutoReseed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enewGenAutoReseedIO i\u003c/code\u003e creates a new \u003ccode\u003e\u003ca\u003eGenAutoReseed\u003c/a\u003e\u003c/code\u003e with a custom\n interval of \u003ccode\u003ei\u003c/code\u003e bytes, using the system random number generator as a seed.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enewGenAutoReseed\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Crypto.Random.DRBG",
          "name": "newGenAutoReseedIO",
          "package": "DRBG",
          "signature": "Word64 -\u003e IO (GenAutoReseed a b)",
          "source": "src/Crypto-Random-DRBG.html#newGenAutoReseedIO",
          "type": "function"
        },
        "index": {
          "description": "newGenAutoReseedIO creates new GenAutoReseed with custom interval of bytes using the system random number generator as seed See newGenAutoReseed",
          "hierarchy": "Crypto Random DRBG",
          "module": "Crypto.Random.DRBG",
          "name": "newGenAutoReseedIO",
          "normalized": "Word-\u003eIO(GenAutoReseed a b)",
          "package": "DRBG",
          "partial": "Gen Auto Reseed IO",
          "signature": "Word-\u003eIO(GenAutoReseed a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DRBG/docs/Crypto-Random-DRBG.html#v:newGenAutoReseedIO"
      }
    }
  ]
]