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
        "word": "Crypto"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.BubbleBabble",
          "name": "BubbleBabble",
          "package": "Crypto",
          "source": "src/Codec-Binary-BubbleBabble.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Binary BubbleBabble",
          "module": "Codec.Binary.BubbleBabble",
          "name": "BubbleBabble",
          "package": "Crypto",
          "partial": "Bubble Babble",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Binary-BubbleBabble.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode binary data into the bubble babble human readable encoding.\n Bubble Babble is an encoding that represents binary data as psuedowords\n which are more pronouncable and memorable than standard hexadecimal encoding.\n\u003c/p\u003e\u003cp\u003eIt is mainly used for representing cryptographic fingerprints.\n In addition, there is an amount of redundancy and error correction built into\n the representation so that transcription errors can be more readily identified.\n\u003c/p\u003e\u003cp\u003esee:  http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eBubble_Babble\n\u003c/p\u003e",
          "module": "Codec.Binary.BubbleBabble",
          "name": "encode",
          "package": "Crypto",
          "signature": "[Octet] -\u003e String",
          "source": "src/Codec-Binary-BubbleBabble.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode binary data into the bubble babble human readable encoding Bubble Babble is an encoding that represents binary data as psuedowords which are more pronouncable and memorable than standard hexadecimal encoding It is mainly used for representing cryptographic fingerprints In addition there is an amount of redundancy and error correction built into the representation so that transcription errors can be more readily identified see http en.wikipedia.org wiki Bubble Babble",
          "hierarchy": "Codec Binary BubbleBabble",
          "module": "Codec.Binary.BubbleBabble",
          "name": "encode",
          "normalized": "[Octet]-\u003eString",
          "package": "Crypto",
          "signature": "[Octet]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Binary-BubbleBabble.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the AES module supplied by Lukasz Anforowicz and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.AES",
          "name": "AES",
          "package": "Crypto",
          "source": "src/Codec-Encryption-AES.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the AES module supplied by Lukasz Anforowicz and wraps it so it can used with the standard modes",
          "hierarchy": "Codec Encryption AES",
          "module": "Codec.Encryption.AES",
          "name": "AES",
          "package": "Crypto",
          "partial": "AES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.AES",
          "name": "AESKey",
          "package": "Crypto",
          "source": "src/Codec-Encryption-AES.html#AESKey",
          "type": "class"
        },
        "index": {
          "hierarchy": "Codec Encryption AES",
          "module": "Codec.Encryption.AES",
          "name": "AESKey",
          "package": "Crypto",
          "partial": "AESKey",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#t:AESKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic AES decryption which takes a key and a block of ciphertext and\n returns the decrypted block of plaintext according to the standard.\n\u003c/p\u003e",
          "module": "Codec.Encryption.AES",
          "name": "decrypt",
          "package": "Crypto",
          "signature": "a -\u003e Word128 -\u003e Word128",
          "source": "src/Codec-Encryption-AES.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic AES decryption which takes key and block of ciphertext and returns the decrypted block of plaintext according to the standard",
          "hierarchy": "Codec Encryption AES",
          "module": "Codec.Encryption.AES",
          "name": "decrypt",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "a-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic AES encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n\u003c/p\u003e",
          "module": "Codec.Encryption.AES",
          "name": "encrypt",
          "package": "Crypto",
          "signature": "a -\u003e Word128 -\u003e Word128",
          "source": "src/Codec-Encryption-AES.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic AES encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard",
          "hierarchy": "Codec Encryption AES",
          "module": "Codec.Encryption.AES",
          "name": "encrypt",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "a-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the Blowfish module supplied by Doug Hoyte and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.Blowfish",
          "name": "Blowfish",
          "package": "Crypto",
          "source": "src/Codec-Encryption-Blowfish.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the Blowfish module supplied by Doug Hoyte and wraps it so it can used with the standard modes",
          "hierarchy": "Codec Encryption Blowfish",
          "module": "Codec.Encryption.Blowfish",
          "name": "Blowfish",
          "package": "Crypto",
          "partial": "Blowfish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Blowfish decryption which takes a key and a block of ciphertext\n and returns the decrypted block of plaintext.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Blowfish",
          "name": "decrypt",
          "package": "Crypto",
          "signature": "a -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-Blowfish.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic Blowfish decryption which takes key and block of ciphertext and returns the decrypted block of plaintext",
          "hierarchy": "Codec Encryption Blowfish",
          "module": "Codec.Encryption.Blowfish",
          "name": "decrypt",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "a-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic Blowfish encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n Typical keys are Word8, Word16, Word32, Word64, Word128. See \n \u003ca\u003ehttp://www.counterpane.com/vectors.txt\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Blowfish",
          "name": "encrypt",
          "package": "Crypto",
          "signature": "a -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-Blowfish.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic Blowfish encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard Typical keys are Word8 Word16 Word32 Word64 Word128 See http www.counterpane.com vectors.txt",
          "hierarchy": "Codec Encryption Blowfish",
          "module": "Codec.Encryption.Blowfish",
          "name": "encrypt",
          "normalized": "a-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "a-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the DES module supplied by Ian Lynagh and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://web.comlab.ox.ac.uk/oucl/work/ian.lynagh/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.DES",
          "name": "DES",
          "package": "Crypto",
          "source": "src/Codec-Encryption-DES.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the DES module supplied by Ian Lynagh and wraps it so it can used with the standard modes See http web.comlab.ox.ac.uk oucl work ian.lynagh",
          "hierarchy": "Codec Encryption DES",
          "module": "Codec.Encryption.DES",
          "name": "DES",
          "package": "Crypto",
          "partial": "DES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic DES decryption which takes a key and a block of ciphertext and\n returns the decrypted block of plaintext according to the standard.\n\u003c/p\u003e",
          "module": "Codec.Encryption.DES",
          "name": "decrypt",
          "package": "Crypto",
          "signature": "Word64 -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-DES.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic DES decryption which takes key and block of ciphertext and returns the decrypted block of plaintext according to the standard",
          "hierarchy": "Codec Encryption DES",
          "module": "Codec.Encryption.DES",
          "name": "decrypt",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic DES encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n\u003c/p\u003e",
          "module": "Codec.Encryption.DES",
          "name": "encrypt",
          "package": "Crypto",
          "signature": "Word64 -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-DES.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Basic DES encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard",
          "hierarchy": "Codec Encryption DES",
          "module": "Codec.Encryption.DES",
          "name": "encrypt",
          "normalized": "Word-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "Word-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module currently supports Cipher Block Chaining (CBC) mode.\n See \u003ca\u003ehttp://www.itl.nist.gov/fipspubs/fip81.htm\u003c/a\u003e for further details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.Modes",
          "name": "Modes",
          "package": "Crypto",
          "source": "src/Codec-Encryption-Modes.html",
          "type": "module"
        },
        "index": {
          "description": "This module currently supports Cipher Block Chaining CBC mode See http www.itl.nist.gov fipspubs fip81.htm for further details",
          "hierarchy": "Codec Encryption Modes",
          "module": "Codec.Encryption.Modes",
          "name": "Modes",
          "package": "Crypto",
          "partial": "Modes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn CBC or Cipher Block Chaining mode each block is XORed with \n the previous enciphered block before encryption.  For the first \n block, start with an initialization vector.\n Take an encryption function, an initialisation vector, a key and\n a list of blocks and return the encrypted blocks using CBC.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Modes",
          "name": "cbc",
          "package": "Crypto",
          "signature": "(key -\u003e block -\u003e block) -\u003e block -\u003e key -\u003e [block] -\u003e [block]",
          "source": "src/Codec-Encryption-Modes.html#cbc",
          "type": "function"
        },
        "index": {
          "description": "In CBC or Cipher Block Chaining mode each block is XORed with the previous enciphered block before encryption For the first block start with an initialization vector Take an encryption function an initialisation vector key and list of blocks and return the encrypted blocks using CBC",
          "hierarchy": "Codec Encryption Modes",
          "module": "Codec.Encryption.Modes",
          "name": "cbc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003e[b]-\u003e[b]",
          "package": "Crypto",
          "signature": "(key-\u003eblock-\u003eblock)-\u003eblock-\u003ekey-\u003e[block]-\u003e[block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#v:cbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo  decipher in CBC or Cipher Block Chaining mode, decipher \n each block, then XOR the result with the previous block of \n plaintext result.  Note that the initialization vector is treated as the \n zeroth block of plaintext.\n Take a decryption function, an initialisation vector, a key and a list\n of encrypted blocks using CBC and return plaintext blocks.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Modes",
          "name": "unCbc",
          "package": "Crypto",
          "signature": "(key -\u003e block -\u003e block) -\u003e block -\u003e key -\u003e [block] -\u003e [block]",
          "source": "src/Codec-Encryption-Modes.html#unCbc",
          "type": "function"
        },
        "index": {
          "description": "To decipher in CBC or Cipher Block Chaining mode decipher each block then XOR the result with the previous block of plaintext result Note that the initialization vector is treated as the zeroth block of plaintext Take decryption function an initialisation vector key and list of encrypted blocks using CBC and return plaintext blocks",
          "hierarchy": "Codec Encryption Modes",
          "module": "Codec.Encryption.Modes",
          "name": "unCbc",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003e[b]-\u003e[b]",
          "package": "Crypto",
          "partial": "Cbc",
          "signature": "(key-\u003eblock-\u003eblock)-\u003eblock-\u003ekey-\u003e[block]-\u003e[block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#v:unCbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePadding algorithms for use with block ciphers.\n\u003c/p\u003e\u003cp\u003eThis module currently supports:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PKCS5 padding and unpadding.\n\u003c/li\u003e\u003cli\u003e Null padding and unpadding.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.Padding",
          "name": "Padding",
          "package": "Crypto",
          "source": "src/Codec-Encryption-Padding.html",
          "type": "module"
        },
        "index": {
          "description": "Padding algorithms for use with block ciphers This module currently supports PKCS5 padding and unpadding Null padding and unpadding",
          "hierarchy": "Codec Encryption Padding",
          "module": "Codec.Encryption.Padding",
          "name": "Padding",
          "package": "Crypto",
          "partial": "Padding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the last block of plaintext is shorter than the block size then it\n must be padded. Nulls padding specifies that the padding octets should each \n contain a null. So, for example,\n with a block size of 8, \"0a0b0c\" will be padded to\n \"0a0b0c0000000000\". If the final block is a full block of 8 octets\n then a whole block of \"0000000000000000\" is appended.\n NB this is only suitable for data which does not contain nulls,\n for example, ASCII.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Padding",
          "name": "padNulls",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [a]",
          "source": "src/Codec-Encryption-Padding.html#padNulls",
          "type": "function"
        },
        "index": {
          "description": "When the last block of plaintext is shorter than the block size then it must be padded Nulls padding specifies that the padding octets should each contain null So for example with block size of a0b0c will be padded to a0b0c0000000000 If the final block is full block of octets then whole block of is appended NB this is only suitable for data which does not contain nulls for example ASCII",
          "hierarchy": "Codec Encryption Padding",
          "module": "Codec.Encryption.Padding",
          "name": "padNulls",
          "normalized": "[Octet]-\u003e[a]",
          "package": "Crypto",
          "partial": "Nulls",
          "signature": "[Octet]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:padNulls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the last block of plaintext is shorter than the block size then it\n must be padded. PKCS5 specifies that the padding octets should each \n contain the number of octets which must be stripped off. So, for example,\n with a block size of 8, \"0a0b0c\" will be padded with \"05\" resulting in\n \"0a0b0c0505050505\". If the final block is a full block of 8 octets\n then a whole block of \"0808080808080808\" is appended.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Padding",
          "name": "pkcs5",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [a]",
          "source": "src/Codec-Encryption-Padding.html#pkcs5",
          "type": "function"
        },
        "index": {
          "description": "When the last block of plaintext is shorter than the block size then it must be padded PKCS5 specifies that the padding octets should each contain the number of octets which must be stripped off So for example with block size of a0b0c will be padded with resulting in a0b0c0505050505 If the final block is full block of octets then whole block of is appended",
          "hierarchy": "Codec Encryption Padding",
          "module": "Codec.Encryption.Padding",
          "name": "pkcs5",
          "normalized": "[Octet]-\u003e[a]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:pkcs5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of blocks padded with nulls\n and return the list of unpadded octets. NB if the blocks contain\n a null then the result is unpredictable.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Padding",
          "name": "unPadNulls",
          "package": "Crypto",
          "signature": "[a] -\u003e [Octet]",
          "source": "src/Codec-Encryption-Padding.html#unPadNulls",
          "type": "function"
        },
        "index": {
          "description": "Take list of blocks padded with nulls and return the list of unpadded octets NB if the blocks contain null then the result is unpredictable",
          "hierarchy": "Codec Encryption Padding",
          "module": "Codec.Encryption.Padding",
          "name": "unPadNulls",
          "normalized": "[a]-\u003e[Octet]",
          "package": "Crypto",
          "partial": "Pad Nulls",
          "signature": "[a]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:unPadNulls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of blocks padded using the method described in PKCS5\n (see \u003ca\u003ehttp://www.rsasecurity.com/rsalabs/pkcs/pkcs-5\u003c/a\u003e)\n and return the list of unpadded octets. NB this function does not\n currently check that the padded block is correctly formed and should\n only be used for blocks that have been padded correctly.\n\u003c/p\u003e",
          "module": "Codec.Encryption.Padding",
          "name": "unPkcs5",
          "package": "Crypto",
          "signature": "[a] -\u003e [Octet]",
          "source": "src/Codec-Encryption-Padding.html#unPkcs5",
          "type": "function"
        },
        "index": {
          "description": "Take list of blocks padded using the method described in PKCS5 see http www.rsasecurity.com rsalabs pkcs pkcs-5 and return the list of unpadded octets NB this function does not currently check that the padded block is correctly formed and should only be used for blocks that have been padded correctly",
          "hierarchy": "Codec Encryption Padding",
          "module": "Codec.Encryption.Padding",
          "name": "unPkcs5",
          "normalized": "[a]-\u003e[Octet]",
          "package": "Crypto",
          "partial": "Pkcs",
          "signature": "[a]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:unPkcs5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA modified version of the EMEOAEP module supplied by David J. Sankel\n (\u003ca\u003ehttp://www.electronconsulting.com/rsa-haskell\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAs the original code is GPL, this has to be.\n This code is free software; you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation; either version 2 of the License, or\n (at your option) any later version.\n\u003c/p\u003e\u003cp\u003eThis code is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\u003c/p\u003e\u003cp\u003eYou should have received a copy of the GNU General Public License\n along with this code; if not, write to the Free Software\n Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "EMEOAEP",
          "package": "Crypto",
          "source": "src/Codec-Encryption-RSA-EMEOAEP.html",
          "type": "module"
        },
        "index": {
          "description": "modified version of the EMEOAEP module supplied by David Sankel http www.electronconsulting.com rsa-haskell As the original code is GPL this has to be This code is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version This code is distributed in the hope that it will be useful but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR PARTICULAR PURPOSE See the GNU General Public License for more details You should have received copy of the GNU General Public License along with this code if not write to the Free Software Foundation Inc Temple Place Suite Boston MA USA",
          "hierarchy": "Codec Encryption RSA EMEOAEP",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "EMEOAEP",
          "package": "Crypto",
          "partial": "EMEOAEP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a mask generating function, a hash function, a label (which may be\n   null) and the message and returns the decoded.\n\u003c/p\u003e",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "decode",
          "package": "Crypto",
          "signature": "(([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]) -\u003e ([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e [Octet] -\u003e [Octet]",
          "source": "src/Codec-Encryption-RSA-EMEOAEP.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Take mask generating function hash function label which may be null and the message and returns the decoded",
          "hierarchy": "Codec Encryption RSA EMEOAEP",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "decode",
          "normalized": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a mask generating function, a hash function, a label (which may be\n   null), a random seed, the modulus of the key and the message and returns\n   an encoded message. NB you could pass in the length of the modulus\n   but it seems safer to pass in the modulus itself and calculate the\n   length when required. See \n   \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e for more\n   details.\n\u003c/p\u003e",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "encode",
          "package": "Crypto",
          "signature": "(([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]) -\u003e ([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e [Octet] -\u003e [Octet] -\u003e [Octet] -\u003e [Octet]",
          "source": "src/Codec-Encryption-RSA-EMEOAEP.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Take mask generating function hash function label which may be null random seed the modulus of the key and the message and returns an encoded message NB you could pass in the length of the modulus but it seems safer to pass in the modulus itself and calculate the length when required See ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf for more details",
          "hierarchy": "Codec Encryption RSA EMEOAEP",
          "module": "Codec.Encryption.RSA.EMEOAEP",
          "name": "encode",
          "normalized": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements the mask generation function as specified in:\n \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.RSA.MGF",
          "name": "MGF",
          "package": "Crypto",
          "source": "src/Codec-Encryption-RSA-MGF.html",
          "type": "module"
        },
        "index": {
          "description": "Implements the mask generation function as specified in ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf",
          "hierarchy": "Codec Encryption RSA MGF",
          "module": "Codec.Encryption.RSA.MGF",
          "name": "MGF",
          "package": "Crypto",
          "partial": "MGF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-MGF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a hash function, a seed and the intended length of the\n   the mask and deliver a mask of the requested length.\n\u003c/p\u003e",
          "module": "Codec.Encryption.RSA.MGF",
          "name": "mgf",
          "package": "Crypto",
          "signature": "([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]",
          "source": "src/Codec-Encryption-RSA-MGF.html#mgf",
          "type": "function"
        },
        "index": {
          "description": "Take hash function seed and the intended length of the the mask and deliver mask of the requested length",
          "hierarchy": "Codec Encryption RSA MGF",
          "module": "Codec.Encryption.RSA.MGF",
          "name": "mgf",
          "normalized": "([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet]",
          "package": "Crypto",
          "signature": "([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-MGF.html#v:mgf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "NumberTheory",
          "package": "Crypto",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "NumberTheory",
          "package": "Crypto",
          "partial": "Number Theory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "(/|)",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#%2F%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "(/|) /|",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "Crypto",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:-47--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "expmod",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#expmod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "expmod",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "package": "Crypto",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:expmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "extEuclGcd",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e (Integer, Integer)",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#extEuclGcd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "extEuclGcd",
          "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "package": "Crypto",
          "partial": "Eucl Gcd",
          "signature": "Integer-\u003eInteger-\u003e(Integer,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:extEuclGcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "factor",
          "package": "Crypto",
          "signature": "Integer -\u003e [Int]",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#factor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "factor",
          "normalized": "Integer-\u003e[Int]",
          "package": "Crypto",
          "signature": "Integer-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:factor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "getPrime",
          "package": "Crypto",
          "signature": "Int -\u003e IO Integer",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#getPrime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "getPrime",
          "normalized": "Int-\u003eIO Integer",
          "package": "Crypto",
          "partial": "Prime",
          "signature": "Int-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:getPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "inverse",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e Integer",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#inverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "inverse",
          "normalized": "Integer-\u003eInteger-\u003eInteger",
          "package": "Crypto",
          "signature": "Integer-\u003eInteger-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "isPrime",
          "package": "Crypto",
          "signature": "Integer -\u003e IO Bool",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#isPrime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "isPrime",
          "normalized": "Integer-\u003eIO Bool",
          "package": "Crypto",
          "partial": "Prime",
          "signature": "Integer-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:isPrime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "pg",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e Integer -\u003e IO Integer",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#pg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "pg",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eIO Integer",
          "package": "Crypto",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:pg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "primes",
          "package": "Crypto",
          "signature": "[Integer]",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#primes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "primes",
          "normalized": "[Integer]",
          "package": "Crypto",
          "signature": "[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:primes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "rabinMillerPrimalityTest",
          "package": "Crypto",
          "signature": "Integer -\u003e IO Bool",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#rabinMillerPrimalityTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "rabinMillerPrimalityTest",
          "normalized": "Integer-\u003eIO Bool",
          "package": "Crypto",
          "partial": "Miller Primality Test",
          "signature": "Integer-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:rabinMillerPrimalityTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "randomOctet",
          "package": "Crypto",
          "signature": "Int -\u003e IO String",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#randomOctet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "randomOctet",
          "normalized": "Int-\u003eIO String",
          "package": "Crypto",
          "partial": "Octet",
          "signature": "Int-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:randomOctet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "simplePrimalityTest",
          "package": "Crypto",
          "signature": "Integer -\u003e Bool",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#simplePrimalityTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "simplePrimalityTest",
          "normalized": "Integer-\u003eBool",
          "package": "Crypto",
          "partial": "Primality Test",
          "signature": "Integer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:simplePrimalityTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "testInverse",
          "package": "Crypto",
          "signature": "Integer -\u003e Integer -\u003e Bool",
          "source": "src/Codec-Encryption-RSA-NumberTheory.html#testInverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption RSA NumberTheory",
          "module": "Codec.Encryption.RSA.NumberTheory",
          "name": "testInverse",
          "normalized": "Integer-\u003eInteger-\u003eBool",
          "package": "Crypto",
          "partial": "Inverse",
          "signature": "Integer-\u003eInteger-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:testInverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA modified version of the RSA module supplied by David J. Sankel\n (\u003ca\u003ehttp://www.electronconsulting.com/rsa-haskell\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAs the original code is GPL, this has to be.\n This code is free software; you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation; either version 2 of the License, or\n (at your option) any later version.\n\u003c/p\u003e\u003cp\u003eThis code is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\u003c/p\u003e\u003cp\u003eYou should have received a copy of the GNU General Public License\n along with this code; if not, write to the Free Software\n Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.RSA",
          "name": "RSA",
          "package": "Crypto",
          "source": "src/Codec-Encryption-RSA.html",
          "type": "module"
        },
        "index": {
          "description": "modified version of the RSA module supplied by David Sankel http www.electronconsulting.com rsa-haskell As the original code is GPL this has to be This code is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version This code is distributed in the hope that it will be useful but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR PARTICULAR PURPOSE See the GNU General Public License for more details You should have received copy of the GNU General Public License along with this code if not write to the Free Software Foundation Inc Temple Place Suite Boston MA USA",
          "hierarchy": "Codec Encryption RSA",
          "module": "Codec.Encryption.RSA",
          "name": "RSA",
          "package": "Crypto",
          "partial": "RSA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the modulus of the RSA key and the private exponent expressed\n as lists of octets and the ciphertext also expressed as a list of\n octets and return the plaintext as a list of octets.\n\u003c/p\u003e",
          "module": "Codec.Encryption.RSA",
          "name": "decrypt",
          "package": "Crypto",
          "signature": "([Octet], [Octet]) -\u003e [Octet] -\u003e [Octet]",
          "source": "src/Codec-Encryption-RSA.html#decrypt",
          "type": "function"
        },
        "index": {
          "description": "Take the modulus of the RSA key and the private exponent expressed as lists of octets and the ciphertext also expressed as list of octets and return the plaintext as list of octets",
          "hierarchy": "Codec Encryption RSA",
          "module": "Codec.Encryption.RSA",
          "name": "decrypt",
          "normalized": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the modulus of the RSA key and the public exponent expressed\n as lists of octets and the plaintext also expressed as a list of\n octets and return the ciphertext as a list of octets. Of course,\n these are all large integers but using lists of octets makes\n everything easier. See \n \u003ca\u003ehttp://www.rsasecurity.com/rsalabs/pkcs/pkcs-1/index.html\u003c/a\u003e for more\n details.\n\u003c/p\u003e",
          "module": "Codec.Encryption.RSA",
          "name": "encrypt",
          "package": "Crypto",
          "signature": "([Octet], [Octet]) -\u003e [Octet] -\u003e [Octet]",
          "source": "src/Codec-Encryption-RSA.html#encrypt",
          "type": "function"
        },
        "index": {
          "description": "Take the modulus of the RSA key and the public exponent expressed as lists of octets and the plaintext also expressed as list of octets and return the ciphertext as list of octets Of course these are all large integers but using lists of octets makes everything easier See http www.rsasecurity.com rsalabs pkcs pkcs-1 index.html for more details",
          "hierarchy": "Codec Encryption RSA",
          "module": "Codec.Encryption.RSA",
          "name": "encrypt",
          "normalized": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the TEA tiny encryption algorithm\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Encryption.TEA",
          "name": "TEA",
          "package": "Crypto",
          "source": "src/Codec-Encryption-TEA.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of the TEA tiny encryption algorithm",
          "hierarchy": "Codec Encryption TEA",
          "module": "Codec.Encryption.TEA",
          "name": "TEA",
          "package": "Crypto",
          "partial": "TEA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.TEA",
          "name": "TEAKey",
          "package": "Crypto",
          "source": "src/Codec-Encryption-TEA.html#TEAKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Encryption TEA",
          "module": "Codec.Encryption.TEA",
          "name": "TEAKey",
          "package": "Crypto",
          "partial": "TEAKey",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#t:TEAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.TEA",
          "name": "TEAKey",
          "package": "Crypto",
          "signature": "TEAKey !Word32 !Word32 !Word32 !Word32",
          "source": "src/Codec-Encryption-TEA.html#TEAKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption TEA",
          "module": "Codec.Encryption.TEA",
          "name": "TEAKey",
          "package": "Crypto",
          "partial": "TEAKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:TEAKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.TEA",
          "name": "decrypt",
          "package": "Crypto",
          "signature": "TEAKey -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-TEA.html#decrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption TEA",
          "module": "Codec.Encryption.TEA",
          "name": "decrypt",
          "normalized": "TEAKey-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "TEAKey-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Encryption.TEA",
          "name": "encrypt",
          "package": "Crypto",
          "signature": "TEAKey -\u003e Word64 -\u003e Word64",
          "source": "src/Codec-Encryption-TEA.html#encrypt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Encryption TEA",
          "module": "Codec.Encryption.TEA",
          "name": "encrypt",
          "normalized": "TEAKey-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "TEAKey-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:encrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.Raw",
          "name": "Raw",
          "package": "Crypto",
          "source": "src/Codec-Text-Raw.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Text Raw",
          "module": "Codec.Text.Raw",
          "name": "Raw",
          "package": "Crypto",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.Raw",
          "name": "hexdump",
          "package": "Crypto",
          "signature": "OctetsPerLine -\u003e [Octet] -\u003e Doc",
          "source": "src/Codec-Text-Raw.html#hexdump",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Text Raw",
          "module": "Codec.Text.Raw",
          "name": "hexdump",
          "normalized": "OctetsPerLine-\u003e[Octet]-\u003eDoc",
          "package": "Crypto",
          "signature": "OctetsPerLine-\u003e[Octet]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#v:hexdump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.Raw",
          "name": "hexdumpBy",
          "package": "Crypto",
          "signature": "String -\u003e OctetsPerLine -\u003e [Octet] -\u003e Doc",
          "source": "src/Codec-Text-Raw.html#hexdumpBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Text Raw",
          "module": "Codec.Text.Raw",
          "name": "hexdumpBy",
          "normalized": "String-\u003eOctetsPerLine-\u003e[Octet]-\u003eDoc",
          "package": "Crypto",
          "partial": "By",
          "signature": "String-\u003eOctetsPerLine-\u003e[Octet]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#v:hexdumpBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for coding and decoding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Utils",
          "name": "Utils",
          "package": "Crypto",
          "source": "src/Codec-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for coding and decoding",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "Utils",
          "package": "Crypto",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type for encoding and decoding.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "Octet",
          "package": "Crypto",
          "source": "src/Codec-Utils.html#Octet",
          "type": "type"
        },
        "index": {
          "description": "The basic type for encoding and decoding",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "Octet",
          "package": "Crypto",
          "partial": "Octet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#t:Octet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a list of octets (a number expressed in base n) and convert it\n   to a number.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "fromOctets",
          "package": "Crypto",
          "signature": "a -\u003e [Octet] -\u003e b",
          "source": "src/Codec-Utils.html#fromOctets",
          "type": "function"
        },
        "index": {
          "description": "Take list of octets number expressed in base and convert it to number",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "fromOctets",
          "normalized": "a-\u003e[Octet]-\u003eb",
          "package": "Crypto",
          "partial": "Octets",
          "signature": "a-\u003e[Octet]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:fromOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from twos complement.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "fromTwosComp",
          "package": "Crypto",
          "signature": "[Octet] -\u003e a",
          "source": "src/Codec-Utils.html#fromTwosComp",
          "type": "function"
        },
        "index": {
          "description": "Convert from twos complement",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "fromTwosComp",
          "normalized": "[Octet]-\u003ea",
          "package": "Crypto",
          "partial": "Twos Comp",
          "signature": "[Octet]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:fromTwosComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the length of the required number of octets and convert the \n   number to base 256 padding it out to the required length. If the\n   required length is less than the number of octets of the converted\n   number then return the converted number. NB this is different from\n   the standard \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e\n   but mimics how replicate behaves.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "i2osp",
          "package": "Crypto",
          "signature": "Int -\u003e a -\u003e [Octet]",
          "source": "src/Codec-Utils.html#i2osp",
          "type": "function"
        },
        "index": {
          "description": "Take the length of the required number of octets and convert the number to base padding it out to the required length If the required length is less than the number of octets of the converted number then return the converted number NB this is different from the standard ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf but mimics how replicate behaves",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "i2osp",
          "normalized": "Int-\u003ea-\u003e[Octet]",
          "package": "Crypto",
          "signature": "Int-\u003ea-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:i2osp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elistToOctets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "listFromOctets",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [a]",
          "source": "src/Codec-Utils.html#listFromOctets",
          "type": "function"
        },
        "index": {
          "description": "See listToOctets",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "listFromOctets",
          "normalized": "[Octet]-\u003e[a]",
          "package": "Crypto",
          "partial": "From Octets",
          "signature": "[Octet]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:listFromOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of numbers into a list of octets.\n The resultant list has nulls trimmed from the end to make this the dual\n of listFromOctets (except when the original octet list ended with nulls;\n see \u003ccode\u003etrimNulls\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "listToOctets",
          "package": "Crypto",
          "signature": "[a] -\u003e [Octet]",
          "source": "src/Codec-Utils.html#listToOctets",
          "type": "function"
        },
        "index": {
          "description": "Converts list of numbers into list of octets The resultant list has nulls trimmed from the end to make this the dual of listFromOctets except when the original octet list ended with nulls see trimNulls",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "listToOctets",
          "normalized": "[a]-\u003e[Octet]",
          "package": "Crypto",
          "partial": "To Octets",
          "signature": "[a]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:listToOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe most significant bit of an \u003ccode\u003e\u003ca\u003eOctet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "msb",
          "package": "Crypto",
          "signature": "Int",
          "source": "src/Codec-Utils.html#msb",
          "type": "function"
        },
        "index": {
          "description": "The most significant bit of an Octet",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "msb",
          "package": "Crypto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:msb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a number a convert it to base n as a list of octets.\n\u003c/p\u003e",
          "module": "Codec.Utils",
          "name": "toOctets",
          "package": "Crypto",
          "signature": "a -\u003e b -\u003e [Octet]",
          "source": "src/Codec-Utils.html#toOctets",
          "type": "function"
        },
        "index": {
          "description": "Take number convert it to base as list of octets",
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "toOctets",
          "normalized": "a-\u003eb-\u003e[Octet]",
          "package": "Crypto",
          "partial": "Octets",
          "signature": "a-\u003eb-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:toOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Utils",
          "name": "toTwosComp",
          "package": "Crypto",
          "signature": "a -\u003e [Octet]",
          "source": "src/Codec-Utils.html#toTwosComp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Utils",
          "module": "Codec.Utils",
          "name": "toTwosComp",
          "normalized": "a-\u003e[Octet]",
          "package": "Crypto",
          "partial": "Twos Comp",
          "signature": "a-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:toTwosComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the MD5 module supplied by Ian Lynagh and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 16.\n See \u003ca\u003ehttp://web.comlab.ox.ac.uk/oucl/work/ian.lynagh/\u003c/a\u003e\n and \u003ca\u003ehttp://www.ietf.org/rfc/rfc1321.txt\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.MD5",
          "name": "MD5",
          "package": "Crypto",
          "source": "src/Data-Digest-MD5.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the MD5 module supplied by Ian Lynagh and wraps it so it takes Octet and returns Octet where the length of the result is always See http web.comlab.ox.ac.uk oucl work ian.lynagh and http www.ietf.org rfc rfc1321.txt",
          "hierarchy": "Data Digest MD5",
          "module": "Data.Digest.MD5",
          "name": "MD5",
          "package": "Crypto",
          "partial": "MD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-MD5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 16 octets or 128 bits as required\n   by the standard.\n\u003c/p\u003e",
          "module": "Data.Digest.MD5",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-Digest-MD5.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
          "hierarchy": "Data Digest MD5",
          "module": "Data.Digest.MD5",
          "name": "hash",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-MD5.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTake [Word8] and return Word160.\n See \u003ca\u003ehttp://www.itl.nist.gov/fipspubs/fip180-1.htm\u003c/a\u003e for the specification.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA1",
          "name": "SHA1",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA1.html",
          "type": "module"
        },
        "index": {
          "description": "Take Word8 and return Word160 See http www.itl.nist.gov fipspubs fip180-1.htm for the specification",
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "SHA1",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA1",
          "name": "Word160",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA1.html#Word160",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "Word160",
          "package": "Crypto",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#t:Word160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA1",
          "name": "Word160",
          "package": "Crypto",
          "signature": "Word160 !Word32 !Word32 !Word32 !Word32 !Word32",
          "source": "src/Data-Digest-SHA1.html#Word160",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "Word160",
          "package": "Crypto",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:Word160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA1",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Word8] -\u003e Word160",
          "source": "src/Data-Digest-SHA1.html#hash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "hash",
          "normalized": "[Word]-\u003eWord",
          "package": "Crypto",
          "signature": "[Word]-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA1",
          "name": "lift2",
          "package": "Crypto",
          "signature": "(Word32 -\u003e Word32 -\u003e Word32) -\u003e Word160 -\u003e Word160 -\u003e Word160",
          "source": "src/Data-Digest-SHA1.html#lift2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "lift2",
          "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eWord-\u003eWord",
          "package": "Crypto",
          "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eWord-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA1",
          "name": "toInteger",
          "package": "Crypto",
          "signature": "Word160 -\u003e Integer",
          "source": "src/Data-Digest-SHA1.html#toInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA1",
          "module": "Data.Digest.SHA1",
          "name": "toInteger",
          "normalized": "Word-\u003eInteger",
          "package": "Crypto",
          "partial": "Integer",
          "signature": "Word-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:toInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements SHA-256, SHA-384, SHA-512, and SHA-224 as defined in FIPS 180-2\n \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA2",
          "name": "SHA2",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA2.html",
          "type": "module"
        },
        "index": {
          "description": "Implements SHA-256 SHA-384 SHA-512 and SHA-224 as defined in FIPS http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "SHA2",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "Hash224",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA2.html#Hash224",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "Hash224",
          "package": "Crypto",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "Hash256",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA2.html#Hash256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "Hash256",
          "package": "Crypto",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "Hash384",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA2.html#Hash384",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "Hash384",
          "package": "Crypto",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "Hash512",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA2.html#Hash512",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "Hash512",
          "package": "Crypto",
          "partial": "Hash",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha224\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 32\n\u003c/p\u003e",
          "module": "Data.Digest.SHA2",
          "name": "sha224",
          "package": "Crypto",
          "signature": "[a] -\u003e Hash224",
          "source": "src/Data-Digest-SHA2.html#sha224",
          "type": "function"
        },
        "index": {
          "description": "sha224 currently requires that the bitSize of divide",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha224",
          "normalized": "[a]-\u003eHash",
          "package": "Crypto",
          "signature": "[a]-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "sha224Ascii",
          "package": "Crypto",
          "signature": "String -\u003e Hash224",
          "source": "src/Data-Digest-SHA2.html#sha224Ascii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha224Ascii",
          "normalized": "String-\u003eHash",
          "package": "Crypto",
          "partial": "Ascii",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha224Ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha256\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 32\n\u003c/p\u003e",
          "module": "Data.Digest.SHA2",
          "name": "sha256",
          "package": "Crypto",
          "signature": "[a] -\u003e Hash256",
          "source": "src/Data-Digest-SHA2.html#sha256",
          "type": "function"
        },
        "index": {
          "description": "sha256 currently requires that the bitSize of divide",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha256",
          "normalized": "[a]-\u003eHash",
          "package": "Crypto",
          "signature": "[a]-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eshaXXXAscii\u003c/code\u003e assumes that all characters of the strings are \n ISO-latin-1 characters.  ie. each characters fits in one octet.\n\u003c/p\u003e",
          "module": "Data.Digest.SHA2",
          "name": "sha256Ascii",
          "package": "Crypto",
          "signature": "String -\u003e Hash256",
          "source": "src/Data-Digest-SHA2.html#sha256Ascii",
          "type": "function"
        },
        "index": {
          "description": "shaXXXAscii assumes that all characters of the strings are ISO-latin-1 characters ie each characters fits in one octet",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha256Ascii",
          "normalized": "String-\u003eHash",
          "package": "Crypto",
          "partial": "Ascii",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha256Ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha384\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 64\n\u003c/p\u003e",
          "module": "Data.Digest.SHA2",
          "name": "sha384",
          "package": "Crypto",
          "signature": "[a] -\u003e Hash384",
          "source": "src/Data-Digest-SHA2.html#sha384",
          "type": "function"
        },
        "index": {
          "description": "sha384 currently requires that the bitSize of divide",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha384",
          "normalized": "[a]-\u003eHash",
          "package": "Crypto",
          "signature": "[a]-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha384"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "sha384Ascii",
          "package": "Crypto",
          "signature": "String -\u003e Hash384",
          "source": "src/Data-Digest-SHA2.html#sha384Ascii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha384Ascii",
          "normalized": "String-\u003eHash",
          "package": "Crypto",
          "partial": "Ascii",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha384Ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha384\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 64\n\u003c/p\u003e",
          "module": "Data.Digest.SHA2",
          "name": "sha512",
          "package": "Crypto",
          "signature": "[a] -\u003e Hash512",
          "source": "src/Data-Digest-SHA2.html#sha512",
          "type": "function"
        },
        "index": {
          "description": "sha384 currently requires that the bitSize of divide",
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha512",
          "normalized": "[a]-\u003eHash",
          "package": "Crypto",
          "signature": "[a]-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha512"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "sha512Ascii",
          "package": "Crypto",
          "signature": "String -\u003e Hash512",
          "source": "src/Data-Digest-SHA2.html#sha512Ascii",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "sha512Ascii",
          "normalized": "String-\u003eHash",
          "package": "Crypto",
          "partial": "Ascii",
          "signature": "String-\u003eHash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha512Ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digest.SHA2",
          "name": "toOctets",
          "package": "Crypto",
          "signature": "h -\u003e [Word8]",
          "source": "src/Data-Digest-SHA2.html#toOctets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Digest SHA2",
          "module": "Data.Digest.SHA2",
          "name": "toOctets",
          "normalized": "a-\u003e[Word]",
          "package": "Crypto",
          "partial": "Octets",
          "signature": "h-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:toOctets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 28.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA224",
          "name": "SHA224",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA224.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
          "hierarchy": "Data Digest SHA224",
          "module": "Data.Digest.SHA224",
          "name": "SHA224",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA224.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 28 octets or 224 bits as required\n   by the standard.\n\u003c/p\u003e",
          "module": "Data.Digest.SHA224",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-Digest-SHA224.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
          "hierarchy": "Data Digest SHA224",
          "module": "Data.Digest.SHA224",
          "name": "hash",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA224.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 32.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA256",
          "name": "SHA256",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA256.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
          "hierarchy": "Data Digest SHA256",
          "module": "Data.Digest.SHA256",
          "name": "SHA256",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA256.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 32 octets or 256 bits as required\n   by the standard.\n\u003c/p\u003e",
          "module": "Data.Digest.SHA256",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-Digest-SHA256.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
          "hierarchy": "Data Digest SHA256",
          "module": "Data.Digest.SHA256",
          "name": "hash",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA256.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 48.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA384",
          "name": "SHA384",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA384.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
          "hierarchy": "Data Digest SHA384",
          "module": "Data.Digest.SHA384",
          "name": "SHA384",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA384.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 48 octets or 384 bits as required\n   by the standard.\n\u003c/p\u003e",
          "module": "Data.Digest.SHA384",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-Digest-SHA384.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
          "hierarchy": "Data Digest SHA384",
          "module": "Data.Digest.SHA384",
          "name": "hash",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA384.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 64.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Digest.SHA512",
          "name": "SHA512",
          "package": "Crypto",
          "source": "src/Data-Digest-SHA512.html",
          "type": "module"
        },
        "index": {
          "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
          "hierarchy": "Data Digest SHA512",
          "module": "Data.Digest.SHA512",
          "name": "SHA512",
          "package": "Crypto",
          "partial": "SHA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA512.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 64 octets or 512 bits as required\n   by the standard.\n\u003c/p\u003e",
          "module": "Data.Digest.SHA512",
          "name": "hash",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-Digest-SHA512.html#hash",
          "type": "function"
        },
        "index": {
          "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
          "hierarchy": "Data Digest SHA512",
          "module": "Data.Digest.SHA512",
          "name": "hash",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA512.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements HMAC (hashed message authentication code) as defined in FIPS 198\n \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips198/fips-198a.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HMAC",
          "name": "HMAC",
          "package": "Crypto",
          "source": "src/Data-HMAC.html",
          "type": "module"
        },
        "index": {
          "description": "Implements HMAC hashed message authentication code as defined in FIPS http csrc.nist.gov publications fips fips198 fips-198a.pdf",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "HMAC",
          "package": "Crypto",
          "partial": "HMAC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHMAC works over any hash function, which is represented by\n   HashMethod.  A hash function and input block size must\n   be specified.\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "HashMethod",
          "package": "Crypto",
          "source": "src/Data-HMAC.html#HashMethod",
          "type": "data"
        },
        "index": {
          "description": "HMAC works over any hash function which is represented by HashMethod hash function and input block size must be specified",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "HashMethod",
          "package": "Crypto",
          "partial": "Hash Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#t:HashMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.HMAC",
          "name": "HashMethod",
          "package": "Crypto",
          "signature": "HashMethod",
          "source": "src/Data-HMAC.html#HashMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "HashMethod",
          "package": "Crypto",
          "partial": "Hash Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:HashMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary hash function\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "digest",
          "package": "Crypto",
          "signature": "[Octet] -\u003e [Octet]",
          "source": "src/Data-HMAC.html#HashMethod",
          "type": "function"
        },
        "index": {
          "description": "An arbitrary hash function",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "digest",
          "normalized": "[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized function for creating HMACs on a specified\n   hash function.\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "hmac",
          "package": "Crypto",
          "signature": "HashMethod-\u003e [Octet]-\u003e [Octet]-\u003e [Octet]",
          "type": "function"
        },
        "index": {
          "description": "Generalized function for creating HMACs on specified hash function",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "hmac",
          "normalized": "HashMethod-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "HashMethod-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using MD5 as the underlying hash function.\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "hmac_md5",
          "package": "Crypto",
          "signature": "[Octet]-\u003e [Octet]-\u003e [Octet]",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using MD5 as the underlying hash function",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "hmac_md5",
          "normalized": "[Octet]-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac_md5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute an HMAC using SHA-1 as the underlying hash function.\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "hmac_sha1",
          "package": "Crypto",
          "signature": "[Octet]-\u003e [Octet]-\u003e [Octet]",
          "type": "function"
        },
        "index": {
          "description": "Compute an HMAC using SHA-1 as the underlying hash function",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "hmac_sha1",
          "normalized": "[Octet]-\u003e[Octet]-\u003e[Octet]",
          "package": "Crypto",
          "signature": "[Octet]-\u003e[Octet]-\u003e[Octet]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac_sha1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBit size of an input block to the hash function\n\u003c/p\u003e",
          "module": "Data.HMAC",
          "name": "input_blocksize",
          "package": "Crypto",
          "signature": "Int",
          "source": "src/Data-HMAC.html#HashMethod",
          "type": "function"
        },
        "index": {
          "description": "Bit size of an input block to the hash function",
          "hierarchy": "Data HMAC",
          "module": "Data.HMAC",
          "name": "input_blocksize",
          "package": "Crypto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:input_blocksize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Word128, Word192 and Word256 and a way of producing other\n large words if required.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LargeWord",
          "name": "LargeWord",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html",
          "type": "module"
        },
        "index": {
          "description": "Provides Word128 Word192 and Word256 and way of producing other large words if required",
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "LargeWord",
          "package": "Crypto",
          "partial": "Large Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "LargeKey",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#LargeKey",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "LargeKey",
          "package": "Crypto",
          "partial": "Large Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:LargeKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word128",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word128",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word128",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word160",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word160",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word160",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word160"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word192",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word192",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word192",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word192"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word224",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word224",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word224",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word224"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word256",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word256",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word256",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word256"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LargeWord",
          "name": "Word96",
          "package": "Crypto",
          "source": "src/Data-LargeWord.html#Word96",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data LargeWord",
          "module": "Data.LargeWord",
          "name": "Word96",
          "package": "Crypto",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word96"
      }
    }
  ]
]