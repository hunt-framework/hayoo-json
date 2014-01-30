[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Binary-BubbleBabble.html#",
      "description": {
        "fct-module": "Codec.Binary.BubbleBabble",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Binary-BubbleBabble.html",
        "fct-type": "module",
        "title": "BubbleBabble"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Binary BubbleBabble",
        "module": "Codec.Binary.BubbleBabble",
        "name": "BubbleBabble",
        "normalized": "",
        "package": "Crypto",
        "partial": "Bubble Babble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Binary-BubbleBabble.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode binary data into the bubble babble human readable encoding.\n Bubble Babble is an encoding that represents binary data as psuedowords\n which are more pronouncable and memorable than standard hexadecimal encoding.\n\u003c/p\u003e\u003cp\u003eIt is mainly used for representing cryptographic fingerprints.\n In addition, there is an amount of redundancy and error correction built into\n the representation so that transcription errors can be more readily identified.\n\u003c/p\u003e\u003cp\u003esee:  http:\u003cem/\u003een.wikipedia.org\u003cem\u003ewiki\u003c/em\u003eBubble_Babble\n\u003c/p\u003e",
        "fct-module": "Codec.Binary.BubbleBabble",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e String",
        "fct-source": "src/Codec-Binary-BubbleBabble.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode binary data into the bubble babble human readable encoding Bubble Babble is an encoding that represents binary data as psuedowords which are more pronouncable and memorable than standard hexadecimal encoding It is mainly used for representing cryptographic fingerprints In addition there is an amount of redundancy and error correction built into the representation so that transcription errors can be more readily identified see http en.wikipedia.org wiki Bubble Babble",
        "hierarchy": "Codec Binary BubbleBabble",
        "module": "Codec.Binary.BubbleBabble",
        "name": "encode",
        "normalized": "[Octet]-\u003eString",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the AES module supplied by Lukasz Anforowicz and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.AES",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-AES.html",
        "fct-type": "module",
        "title": "AES"
      },
      "index": {
        "description": "Takes the AES module supplied by Lukasz Anforowicz and wraps it so it can used with the standard modes",
        "hierarchy": "Codec Encryption AES",
        "module": "Codec.Encryption.AES",
        "name": "AES",
        "normalized": "",
        "package": "Crypto",
        "partial": "AES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#t:AESKey",
      "description": {
        "fct-module": "Codec.Encryption.AES",
        "fct-package": "Crypto",
        "fct-signature": "class",
        "fct-source": "src/Codec-Encryption-AES.html#AESKey",
        "fct-type": "class",
        "title": "AESKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption AES",
        "module": "Codec.Encryption.AES",
        "name": "AESKey",
        "normalized": "",
        "package": "Crypto",
        "partial": "AESKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic AES decryption which takes a key and a block of ciphertext and\n returns the decrypted block of plaintext according to the standard.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.AES",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e Word128 -\u003e Word128",
        "fct-source": "src/Codec-Encryption-AES.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Basic AES decryption which takes key and block of ciphertext and returns the decrypted block of plaintext according to the standard",
        "hierarchy": "Codec Encryption AES",
        "module": "Codec.Encryption.AES",
        "name": "decrypt",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "a-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-AES.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic AES encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.AES",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e Word128 -\u003e Word128",
        "fct-source": "src/Codec-Encryption-AES.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Basic AES encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard",
        "hierarchy": "Codec Encryption AES",
        "module": "Codec.Encryption.AES",
        "name": "encrypt",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "a-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the Blowfish module supplied by Doug Hoyte and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.Blowfish",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-Blowfish.html",
        "fct-type": "module",
        "title": "Blowfish"
      },
      "index": {
        "description": "Takes the Blowfish module supplied by Doug Hoyte and wraps it so it can used with the standard modes",
        "hierarchy": "Codec Encryption Blowfish",
        "module": "Codec.Encryption.Blowfish",
        "name": "Blowfish",
        "normalized": "",
        "package": "Crypto",
        "partial": "Blowfish",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic Blowfish decryption which takes a key and a block of ciphertext\n and returns the decrypted block of plaintext.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Blowfish",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-Blowfish.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Basic Blowfish decryption which takes key and block of ciphertext and returns the decrypted block of plaintext",
        "hierarchy": "Codec Encryption Blowfish",
        "module": "Codec.Encryption.Blowfish",
        "name": "decrypt",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "a-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Blowfish.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic Blowfish encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n Typical keys are Word8, Word16, Word32, Word64, Word128. See \n \u003ca\u003ehttp://www.counterpane.com/vectors.txt\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Blowfish",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-Blowfish.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Basic Blowfish encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard Typical keys are Word8 Word16 Word32 Word64 Word128 See http www.counterpane.com vectors.txt",
        "hierarchy": "Codec Encryption Blowfish",
        "module": "Codec.Encryption.Blowfish",
        "name": "encrypt",
        "normalized": "a-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "a-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the DES module supplied by Ian Lynagh and wraps it so it can\n used with the standard modes.\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ehttp://web.comlab.ox.ac.uk/oucl/work/ian.lynagh/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.DES",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-DES.html",
        "fct-type": "module",
        "title": "DES"
      },
      "index": {
        "description": "Takes the DES module supplied by Ian Lynagh and wraps it so it can used with the standard modes See http web.comlab.ox.ac.uk oucl work ian.lynagh",
        "hierarchy": "Codec Encryption DES",
        "module": "Codec.Encryption.DES",
        "name": "DES",
        "normalized": "",
        "package": "Crypto",
        "partial": "DES",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic DES decryption which takes a key and a block of ciphertext and\n returns the decrypted block of plaintext according to the standard.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.DES",
        "fct-package": "Crypto",
        "fct-signature": "Word64 -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-DES.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Basic DES decryption which takes key and block of ciphertext and returns the decrypted block of plaintext according to the standard",
        "hierarchy": "Codec Encryption DES",
        "module": "Codec.Encryption.DES",
        "name": "decrypt",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-DES.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBasic DES encryption which takes a key and a block of plaintext \n and returns the encrypted block of ciphertext according to the standard.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.DES",
        "fct-package": "Crypto",
        "fct-signature": "Word64 -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-DES.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Basic DES encryption which takes key and block of plaintext and returns the encrypted block of ciphertext according to the standard",
        "hierarchy": "Codec Encryption DES",
        "module": "Codec.Encryption.DES",
        "name": "encrypt",
        "normalized": "Word-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module currently supports Cipher Block Chaining (CBC) mode.\n See \u003ca\u003ehttp://www.itl.nist.gov/fipspubs/fip81.htm\u003c/a\u003e for further details.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.Modes",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-Modes.html",
        "fct-type": "module",
        "title": "Modes"
      },
      "index": {
        "description": "This module currently supports Cipher Block Chaining CBC mode See http www.itl.nist.gov fipspubs fip81.htm for further details",
        "hierarchy": "Codec Encryption Modes",
        "module": "Codec.Encryption.Modes",
        "name": "Modes",
        "normalized": "",
        "package": "Crypto",
        "partial": "Modes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#v:cbc",
      "description": {
        "fct-descr": "\u003cp\u003eIn CBC or Cipher Block Chaining mode each block is XORed with \n the previous enciphered block before encryption.  For the first \n block, start with an initialization vector.\n Take an encryption function, an initialisation vector, a key and\n a list of blocks and return the encrypted blocks using CBC.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Modes",
        "fct-package": "Crypto",
        "fct-signature": "(key -\u003e block -\u003e block) -\u003e block -\u003e key -\u003e [block] -\u003e [block]",
        "fct-source": "src/Codec-Encryption-Modes.html#cbc",
        "fct-type": "function",
        "title": "cbc"
      },
      "index": {
        "description": "In CBC or Cipher Block Chaining mode each block is XORed with the previous enciphered block before encryption For the first block start with an initialization vector Take an encryption function an initialisation vector key and list of blocks and return the encrypted blocks using CBC",
        "hierarchy": "Codec Encryption Modes",
        "module": "Codec.Encryption.Modes",
        "name": "cbc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003e[b]-\u003e[b]",
        "package": "Crypto",
        "partial": "",
        "signature": "(key-\u003eblock-\u003eblock)-\u003eblock-\u003ekey-\u003e[block]-\u003e[block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Modes.html#v:unCbc",
      "description": {
        "fct-descr": "\u003cp\u003eTo  decipher in CBC or Cipher Block Chaining mode, decipher \n each block, then XOR the result with the previous block of \n plaintext result.  Note that the initialization vector is treated as the \n zeroth block of plaintext.\n Take a decryption function, an initialisation vector, a key and a list\n of encrypted blocks using CBC and return plaintext blocks.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Modes",
        "fct-package": "Crypto",
        "fct-signature": "(key -\u003e block -\u003e block) -\u003e block -\u003e key -\u003e [block] -\u003e [block]",
        "fct-source": "src/Codec-Encryption-Modes.html#unCbc",
        "fct-type": "function",
        "title": "unCbc"
      },
      "index": {
        "description": "To decipher in CBC or Cipher Block Chaining mode decipher each block then XOR the result with the previous block of plaintext result Note that the initialization vector is treated as the zeroth block of plaintext Take decryption function an initialisation vector key and list of encrypted blocks using CBC and return plaintext blocks",
        "hierarchy": "Codec Encryption Modes",
        "module": "Codec.Encryption.Modes",
        "name": "unCbc",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003e[b]-\u003e[b]",
        "package": "Crypto",
        "partial": "Cbc",
        "signature": "(key-\u003eblock-\u003eblock)-\u003eblock-\u003ekey-\u003e[block]-\u003e[block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePadding algorithms for use with block ciphers.\n\u003c/p\u003e\u003cp\u003eThis module currently supports:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e PKCS5 padding and unpadding.\n\u003c/li\u003e\u003cli\u003e Null padding and unpadding.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.Padding",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-Padding.html",
        "fct-type": "module",
        "title": "Padding"
      },
      "index": {
        "description": "Padding algorithms for use with block ciphers This module currently supports PKCS5 padding and unpadding Null padding and unpadding",
        "hierarchy": "Codec Encryption Padding",
        "module": "Codec.Encryption.Padding",
        "name": "Padding",
        "normalized": "",
        "package": "Crypto",
        "partial": "Padding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:padNulls",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the last block of plaintext is shorter than the block size then it\n must be padded. Nulls padding specifies that the padding octets should each \n contain a null. So, for example,\n with a block size of 8, \"0a0b0c\" will be padded to\n \"0a0b0c0000000000\". If the final block is a full block of 8 octets\n then a whole block of \"0000000000000000\" is appended.\n NB this is only suitable for data which does not contain nulls,\n for example, ASCII.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Padding",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [a]",
        "fct-source": "src/Codec-Encryption-Padding.html#padNulls",
        "fct-type": "function",
        "title": "padNulls"
      },
      "index": {
        "description": "When the last block of plaintext is shorter than the block size then it must be padded Nulls padding specifies that the padding octets should each contain null So for example with block size of a0b0c will be padded to a0b0c0000000000 If the final block is full block of octets then whole block of is appended NB this is only suitable for data which does not contain nulls for example ASCII",
        "hierarchy": "Codec Encryption Padding",
        "module": "Codec.Encryption.Padding",
        "name": "padNulls",
        "normalized": "[Octet]-\u003e[a]",
        "package": "Crypto",
        "partial": "Nulls",
        "signature": "[Octet]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:pkcs5",
      "description": {
        "fct-descr": "\u003cp\u003eWhen the last block of plaintext is shorter than the block size then it\n must be padded. PKCS5 specifies that the padding octets should each \n contain the number of octets which must be stripped off. So, for example,\n with a block size of 8, \"0a0b0c\" will be padded with \"05\" resulting in\n \"0a0b0c0505050505\". If the final block is a full block of 8 octets\n then a whole block of \"0808080808080808\" is appended.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Padding",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [a]",
        "fct-source": "src/Codec-Encryption-Padding.html#pkcs5",
        "fct-type": "function",
        "title": "pkcs5"
      },
      "index": {
        "description": "When the last block of plaintext is shorter than the block size then it must be padded PKCS5 specifies that the padding octets should each contain the number of octets which must be stripped off So for example with block size of a0b0c will be padded with resulting in a0b0c0505050505 If the final block is full block of octets then whole block of is appended",
        "hierarchy": "Codec Encryption Padding",
        "module": "Codec.Encryption.Padding",
        "name": "pkcs5",
        "normalized": "[Octet]-\u003e[a]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:unPadNulls",
      "description": {
        "fct-descr": "\u003cp\u003eTake a list of blocks padded with nulls\n and return the list of unpadded octets. NB if the blocks contain\n a null then the result is unpredictable.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Padding",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-Padding.html#unPadNulls",
        "fct-type": "function",
        "title": "unPadNulls"
      },
      "index": {
        "description": "Take list of blocks padded with nulls and return the list of unpadded octets NB if the blocks contain null then the result is unpredictable",
        "hierarchy": "Codec Encryption Padding",
        "module": "Codec.Encryption.Padding",
        "name": "unPadNulls",
        "normalized": "[a]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "Pad Nulls",
        "signature": "[a]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-Padding.html#v:unPkcs5",
      "description": {
        "fct-descr": "\u003cp\u003eTake a list of blocks padded using the method described in PKCS5\n (see \u003ca\u003ehttp://www.rsasecurity.com/rsalabs/pkcs/pkcs-5\u003c/a\u003e)\n and return the list of unpadded octets. NB this function does not\n currently check that the padded block is correctly formed and should\n only be used for blocks that have been padded correctly.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.Padding",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-Padding.html#unPkcs5",
        "fct-type": "function",
        "title": "unPkcs5"
      },
      "index": {
        "description": "Take list of blocks padded using the method described in PKCS5 see http www.rsasecurity.com rsalabs pkcs pkcs-5 and return the list of unpadded octets NB this function does not currently check that the padded block is correctly formed and should only be used for blocks that have been padded correctly",
        "hierarchy": "Codec Encryption Padding",
        "module": "Codec.Encryption.Padding",
        "name": "unPkcs5",
        "normalized": "[a]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "Pkcs",
        "signature": "[a]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA modified version of the EMEOAEP module supplied by David J. Sankel\n (\u003ca\u003ehttp://www.electronconsulting.com/rsa-haskell\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAs the original code is GPL, this has to be.\n This code is free software; you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation; either version 2 of the License, or\n (at your option) any later version.\n\u003c/p\u003e\u003cp\u003eThis code is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\u003c/p\u003e\u003cp\u003eYou should have received a copy of the GNU General Public License\n along with this code; if not, write to the Free Software\n Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.RSA.EMEOAEP",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-RSA-EMEOAEP.html",
        "fct-type": "module",
        "title": "EMEOAEP"
      },
      "index": {
        "description": "modified version of the EMEOAEP module supplied by David Sankel http www.electronconsulting.com rsa-haskell As the original code is GPL this has to be This code is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version This code is distributed in the hope that it will be useful but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR PARTICULAR PURPOSE See the GNU General Public License for more details You should have received copy of the GNU General Public License along with this code if not write to the Free Software Foundation Inc Temple Place Suite Boston MA USA",
        "hierarchy": "Codec Encryption RSA EMEOAEP",
        "module": "Codec.Encryption.RSA.EMEOAEP",
        "name": "EMEOAEP",
        "normalized": "",
        "package": "Crypto",
        "partial": "EMEOAEP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eTake a mask generating function, a hash function, a label (which may be\n   null) and the message and returns the decoded.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.RSA.EMEOAEP",
        "fct-package": "Crypto",
        "fct-signature": "(([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]) -\u003e ([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e [Octet] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-RSA-EMEOAEP.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Take mask generating function hash function label which may be null and the message and returns the decoded",
        "hierarchy": "Codec Encryption RSA EMEOAEP",
        "module": "Codec.Encryption.RSA.EMEOAEP",
        "name": "decode",
        "normalized": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-EMEOAEP.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eTake a mask generating function, a hash function, a label (which may be\n   null), a random seed, the modulus of the key and the message and returns\n   an encoded message. NB you could pass in the length of the modulus\n   but it seems safer to pass in the modulus itself and calculate the\n   length when required. See \n   \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e for more\n   details.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.RSA.EMEOAEP",
        "fct-package": "Crypto",
        "fct-signature": "(([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]) -\u003e ([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e [Octet] -\u003e [Octet] -\u003e [Octet] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-RSA-EMEOAEP.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Take mask generating function hash function label which may be null random seed the modulus of the key and the message and returns an encoded message NB you could pass in the length of the modulus but it seems safer to pass in the modulus itself and calculate the length when required See ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf for more details",
        "hierarchy": "Codec Encryption RSA EMEOAEP",
        "module": "Codec.Encryption.RSA.EMEOAEP",
        "name": "encode",
        "normalized": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "(([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet])-\u003e([Octet]-\u003e[Octet])-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-MGF.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements the mask generation function as specified in:\n \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.RSA.MGF",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-RSA-MGF.html",
        "fct-type": "module",
        "title": "MGF"
      },
      "index": {
        "description": "Implements the mask generation function as specified in ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf",
        "hierarchy": "Codec Encryption RSA MGF",
        "module": "Codec.Encryption.RSA.MGF",
        "name": "MGF",
        "normalized": "",
        "package": "Crypto",
        "partial": "MGF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-MGF.html#v:mgf",
      "description": {
        "fct-descr": "\u003cp\u003eTake a hash function, a seed and the intended length of the\n   the mask and deliver a mask of the requested length.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.RSA.MGF",
        "fct-package": "Crypto",
        "fct-signature": "([Octet] -\u003e [Octet]) -\u003e [Octet] -\u003e Int -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-RSA-MGF.html#mgf",
        "fct-type": "function",
        "title": "mgf"
      },
      "index": {
        "description": "Take hash function seed and the intended length of the the mask and deliver mask of the requested length",
        "hierarchy": "Codec Encryption RSA MGF",
        "module": "Codec.Encryption.RSA.MGF",
        "name": "mgf",
        "normalized": "([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "([Octet]-\u003e[Octet])-\u003e[Octet]-\u003eInt-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html",
        "fct-type": "module",
        "title": "NumberTheory"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "NumberTheory",
        "normalized": "",
        "package": "Crypto",
        "partial": "Number Theory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:-47--124-",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e Bool",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#%2F%7C",
        "fct-type": "function",
        "title": "(/|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "(/|) /|",
        "normalized": "Integer-\u003eInteger-\u003eBool",
        "package": "Crypto",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:expmod",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#expmod",
        "fct-type": "function",
        "title": "expmod"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "expmod",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eInteger",
        "package": "Crypto",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:extEuclGcd",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e (Integer, Integer)",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#extEuclGcd",
        "fct-type": "function",
        "title": "extEuclGcd"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "extEuclGcd",
        "normalized": "Integer-\u003eInteger-\u003e(Integer,Integer)",
        "package": "Crypto",
        "partial": "Eucl Gcd",
        "signature": "Integer-\u003eInteger-\u003e(Integer,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:factor",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e [Int]",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#factor",
        "fct-type": "function",
        "title": "factor"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "factor",
        "normalized": "Integer-\u003e[Int]",
        "package": "Crypto",
        "partial": "",
        "signature": "Integer-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:getPrime",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Int -\u003e IO Integer",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#getPrime",
        "fct-type": "function",
        "title": "getPrime"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "getPrime",
        "normalized": "Int-\u003eIO Integer",
        "package": "Crypto",
        "partial": "Prime",
        "signature": "Int-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:inverse",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "inverse",
        "normalized": "Integer-\u003eInteger-\u003eInteger",
        "package": "Crypto",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:isPrime",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e IO Bool",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#isPrime",
        "fct-type": "function",
        "title": "isPrime"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "isPrime",
        "normalized": "Integer-\u003eIO Bool",
        "package": "Crypto",
        "partial": "Prime",
        "signature": "Integer-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:pg",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e Integer -\u003e IO Integer",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#pg",
        "fct-type": "function",
        "title": "pg"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "pg",
        "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eIO Integer",
        "package": "Crypto",
        "partial": "",
        "signature": "Integer-\u003eInteger-\u003eInteger-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:primes",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "[Integer]",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#primes",
        "fct-type": "function",
        "title": "primes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "primes",
        "normalized": "[Integer]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Integer]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:rabinMillerPrimalityTest",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e IO Bool",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#rabinMillerPrimalityTest",
        "fct-type": "function",
        "title": "rabinMillerPrimalityTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "rabinMillerPrimalityTest",
        "normalized": "Integer-\u003eIO Bool",
        "package": "Crypto",
        "partial": "Miller Primality Test",
        "signature": "Integer-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:randomOctet",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Int -\u003e IO String",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#randomOctet",
        "fct-type": "function",
        "title": "randomOctet"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "randomOctet",
        "normalized": "Int-\u003eIO String",
        "package": "Crypto",
        "partial": "Octet",
        "signature": "Int-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:simplePrimalityTest",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Bool",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#simplePrimalityTest",
        "fct-type": "function",
        "title": "simplePrimalityTest"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "simplePrimalityTest",
        "normalized": "Integer-\u003eBool",
        "package": "Crypto",
        "partial": "Primality Test",
        "signature": "Integer-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA-NumberTheory.html#v:testInverse",
      "description": {
        "fct-module": "Codec.Encryption.RSA.NumberTheory",
        "fct-package": "Crypto",
        "fct-signature": "Integer -\u003e Integer -\u003e Bool",
        "fct-source": "src/Codec-Encryption-RSA-NumberTheory.html#testInverse",
        "fct-type": "function",
        "title": "testInverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption RSA NumberTheory",
        "module": "Codec.Encryption.RSA.NumberTheory",
        "name": "testInverse",
        "normalized": "Integer-\u003eInteger-\u003eBool",
        "package": "Crypto",
        "partial": "Inverse",
        "signature": "Integer-\u003eInteger-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA modified version of the RSA module supplied by David J. Sankel\n (\u003ca\u003ehttp://www.electronconsulting.com/rsa-haskell\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eAs the original code is GPL, this has to be.\n This code is free software; you can redistribute it and/or modify\n it under the terms of the GNU General Public License as published by\n the Free Software Foundation; either version 2 of the License, or\n (at your option) any later version.\n\u003c/p\u003e\u003cp\u003eThis code is distributed in the hope that it will be useful,\n but WITHOUT ANY WARRANTY; without even the implied warranty of\n MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n GNU General Public License for more details.\n\u003c/p\u003e\u003cp\u003eYou should have received a copy of the GNU General Public License\n along with this code; if not, write to the Free Software\n Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.RSA",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-RSA.html",
        "fct-type": "module",
        "title": "RSA"
      },
      "index": {
        "description": "modified version of the RSA module supplied by David Sankel http www.electronconsulting.com rsa-haskell As the original code is GPL this has to be This code is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version This code is distributed in the hope that it will be useful but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR PARTICULAR PURPOSE See the GNU General Public License for more details You should have received copy of the GNU General Public License along with this code if not write to the Free Software Foundation Inc Temple Place Suite Boston MA USA",
        "hierarchy": "Codec Encryption RSA",
        "module": "Codec.Encryption.RSA",
        "name": "RSA",
        "normalized": "",
        "package": "Crypto",
        "partial": "RSA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cp\u003eTake the modulus of the RSA key and the private exponent expressed\n as lists of octets and the ciphertext also expressed as a list of\n octets and return the plaintext as a list of octets.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.RSA",
        "fct-package": "Crypto",
        "fct-signature": "([Octet], [Octet]) -\u003e [Octet] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-RSA.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Take the modulus of the RSA key and the private exponent expressed as lists of octets and the ciphertext also expressed as list of octets and return the plaintext as list of octets",
        "hierarchy": "Codec Encryption RSA",
        "module": "Codec.Encryption.RSA",
        "name": "decrypt",
        "normalized": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-RSA.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eTake the modulus of the RSA key and the public exponent expressed\n as lists of octets and the plaintext also expressed as a list of\n octets and return the ciphertext as a list of octets. Of course,\n these are all large integers but using lists of octets makes\n everything easier. See \n \u003ca\u003ehttp://www.rsasecurity.com/rsalabs/pkcs/pkcs-1/index.html\u003c/a\u003e for more\n details.\n\u003c/p\u003e",
        "fct-module": "Codec.Encryption.RSA",
        "fct-package": "Crypto",
        "fct-signature": "([Octet], [Octet]) -\u003e [Octet] -\u003e [Octet]",
        "fct-source": "src/Codec-Encryption-RSA.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Take the modulus of the RSA key and the public exponent expressed as lists of octets and the plaintext also expressed as list of octets and return the ciphertext as list of octets Of course these are all large integers but using lists of octets makes everything easier See http www.rsasecurity.com rsalabs pkcs pkcs-1 index.html for more details",
        "hierarchy": "Codec Encryption RSA",
        "module": "Codec.Encryption.RSA",
        "name": "encrypt",
        "normalized": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "([Octet],[Octet])-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of the TEA tiny encryption algorithm\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Encryption.TEA",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Encryption-TEA.html",
        "fct-type": "module",
        "title": "TEA"
      },
      "index": {
        "description": "Implementation of the TEA tiny encryption algorithm",
        "hierarchy": "Codec Encryption TEA",
        "module": "Codec.Encryption.TEA",
        "name": "TEA",
        "normalized": "",
        "package": "Crypto",
        "partial": "TEA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#t:TEAKey",
      "description": {
        "fct-module": "Codec.Encryption.TEA",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Codec-Encryption-TEA.html#TEAKey",
        "fct-type": "data",
        "title": "TEAKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption TEA",
        "module": "Codec.Encryption.TEA",
        "name": "TEAKey",
        "normalized": "",
        "package": "Crypto",
        "partial": "TEAKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:TEAKey",
      "description": {
        "fct-module": "Codec.Encryption.TEA",
        "fct-package": "Crypto",
        "fct-signature": "TEAKey !Word32 !Word32 !Word32 !Word32",
        "fct-source": "src/Codec-Encryption-TEA.html#TEAKey",
        "fct-type": "function",
        "title": "TEAKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption TEA",
        "module": "Codec.Encryption.TEA",
        "name": "TEAKey",
        "normalized": "",
        "package": "Crypto",
        "partial": "TEAKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:decrypt",
      "description": {
        "fct-module": "Codec.Encryption.TEA",
        "fct-package": "Crypto",
        "fct-signature": "TEAKey -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-TEA.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption TEA",
        "module": "Codec.Encryption.TEA",
        "name": "decrypt",
        "normalized": "TEAKey-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "TEAKey-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Encryption-TEA.html#v:encrypt",
      "description": {
        "fct-module": "Codec.Encryption.TEA",
        "fct-package": "Crypto",
        "fct-signature": "TEAKey -\u003e Word64 -\u003e Word64",
        "fct-source": "src/Codec-Encryption-TEA.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Encryption TEA",
        "module": "Codec.Encryption.TEA",
        "name": "encrypt",
        "normalized": "TEAKey-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "TEAKey-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#",
      "description": {
        "fct-module": "Codec.Text.Raw",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Text-Raw.html",
        "fct-type": "module",
        "title": "Raw"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text Raw",
        "module": "Codec.Text.Raw",
        "name": "Raw",
        "normalized": "",
        "package": "Crypto",
        "partial": "Raw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#v:hexdump",
      "description": {
        "fct-module": "Codec.Text.Raw",
        "fct-package": "Crypto",
        "fct-signature": "OctetsPerLine -\u003e [Octet] -\u003e Doc",
        "fct-source": "src/Codec-Text-Raw.html#hexdump",
        "fct-type": "function",
        "title": "hexdump"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text Raw",
        "module": "Codec.Text.Raw",
        "name": "hexdump",
        "normalized": "OctetsPerLine-\u003e[Octet]-\u003eDoc",
        "package": "Crypto",
        "partial": "",
        "signature": "OctetsPerLine-\u003e[Octet]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Text-Raw.html#v:hexdumpBy",
      "description": {
        "fct-module": "Codec.Text.Raw",
        "fct-package": "Crypto",
        "fct-signature": "String -\u003e OctetsPerLine -\u003e [Octet] -\u003e Doc",
        "fct-source": "src/Codec-Text-Raw.html#hexdumpBy",
        "fct-type": "function",
        "title": "hexdumpBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text Raw",
        "module": "Codec.Text.Raw",
        "name": "hexdumpBy",
        "normalized": "String-\u003eOctetsPerLine-\u003e[Octet]-\u003eDoc",
        "package": "Crypto",
        "partial": "By",
        "signature": "String-\u003eOctetsPerLine-\u003e[Octet]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for coding and decoding.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Codec-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "Utilities for coding and decoding",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "Crypto",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#t:Octet",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic type for encoding and decoding.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Codec-Utils.html#Octet",
        "fct-type": "type",
        "title": "Octet"
      },
      "index": {
        "description": "The basic type for encoding and decoding",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "Octet",
        "normalized": "",
        "package": "Crypto",
        "partial": "Octet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:fromOctets",
      "description": {
        "fct-descr": "\u003cp\u003eTake a list of octets (a number expressed in base n) and convert it\n   to a number.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e [Octet] -\u003e b",
        "fct-source": "src/Codec-Utils.html#fromOctets",
        "fct-type": "function",
        "title": "fromOctets"
      },
      "index": {
        "description": "Take list of octets number expressed in base and convert it to number",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "fromOctets",
        "normalized": "a-\u003e[Octet]-\u003eb",
        "package": "Crypto",
        "partial": "Octets",
        "signature": "a-\u003e[Octet]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:fromTwosComp",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from twos complement.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e a",
        "fct-source": "src/Codec-Utils.html#fromTwosComp",
        "fct-type": "function",
        "title": "fromTwosComp"
      },
      "index": {
        "description": "Convert from twos complement",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "fromTwosComp",
        "normalized": "[Octet]-\u003ea",
        "package": "Crypto",
        "partial": "Twos Comp",
        "signature": "[Octet]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:i2osp",
      "description": {
        "fct-descr": "\u003cp\u003eTake the length of the required number of octets and convert the \n   number to base 256 padding it out to the required length. If the\n   required length is less than the number of octets of the converted\n   number then return the converted number. NB this is different from\n   the standard \u003ca\u003eftp://ftp.rsasecurity.com/pub/pkcs/pkcs-1/pkcs-1v2-1.pdf\u003c/a\u003e\n   but mimics how replicate behaves.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "Int -\u003e a -\u003e [Octet]",
        "fct-source": "src/Codec-Utils.html#i2osp",
        "fct-type": "function",
        "title": "i2osp"
      },
      "index": {
        "description": "Take the length of the required number of octets and convert the number to base padding it out to the required length If the required length is less than the number of octets of the converted number then return the converted number NB this is different from the standard ftp ftp.rsasecurity.com pub pkcs pkcs-1 pkcs-1v2-1.pdf but mimics how replicate behaves",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "i2osp",
        "normalized": "Int-\u003ea-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "Int-\u003ea-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:listFromOctets",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003elistToOctets\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [a]",
        "fct-source": "src/Codec-Utils.html#listFromOctets",
        "fct-type": "function",
        "title": "listFromOctets"
      },
      "index": {
        "description": "See listToOctets",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "listFromOctets",
        "normalized": "[Octet]-\u003e[a]",
        "package": "Crypto",
        "partial": "From Octets",
        "signature": "[Octet]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:listToOctets",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a list of numbers into a list of octets.\n The resultant list has nulls trimmed from the end to make this the dual\n of listFromOctets (except when the original octet list ended with nulls;\n see \u003ccode\u003etrimNulls\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e [Octet]",
        "fct-source": "src/Codec-Utils.html#listToOctets",
        "fct-type": "function",
        "title": "listToOctets"
      },
      "index": {
        "description": "Converts list of numbers into list of octets The resultant list has nulls trimmed from the end to make this the dual of listFromOctets except when the original octet list ended with nulls see trimNulls",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "listToOctets",
        "normalized": "[a]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "To Octets",
        "signature": "[a]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:msb",
      "description": {
        "fct-descr": "\u003cp\u003eThe most significant bit of an \u003ccode\u003e\u003ca\u003eOctet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Utils.html#msb",
        "fct-type": "function",
        "title": "msb"
      },
      "index": {
        "description": "The most significant bit of an Octet",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "msb",
        "normalized": "",
        "package": "Crypto",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:toOctets",
      "description": {
        "fct-descr": "\u003cp\u003eTake a number a convert it to base n as a list of octets.\n\u003c/p\u003e",
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e b -\u003e [Octet]",
        "fct-source": "src/Codec-Utils.html#toOctets",
        "fct-type": "function",
        "title": "toOctets"
      },
      "index": {
        "description": "Take number convert it to base as list of octets",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "toOctets",
        "normalized": "a-\u003eb-\u003e[Octet]",
        "package": "Crypto",
        "partial": "Octets",
        "signature": "a-\u003eb-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Codec-Utils.html#v:toTwosComp",
      "description": {
        "fct-module": "Codec.Utils",
        "fct-package": "Crypto",
        "fct-signature": "a -\u003e [Octet]",
        "fct-source": "src/Codec-Utils.html#toTwosComp",
        "fct-type": "function",
        "title": "toTwosComp"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Utils",
        "module": "Codec.Utils",
        "name": "toTwosComp",
        "normalized": "a-\u003e[Octet]",
        "package": "Crypto",
        "partial": "Twos Comp",
        "signature": "a-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-MD5.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the MD5 module supplied by Ian Lynagh and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 16.\n See \u003ca\u003ehttp://web.comlab.ox.ac.uk/oucl/work/ian.lynagh/\u003c/a\u003e\n and \u003ca\u003ehttp://www.ietf.org/rfc/rfc1321.txt\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.MD5",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-MD5.html",
        "fct-type": "module",
        "title": "MD5"
      },
      "index": {
        "description": "Takes the MD5 module supplied by Ian Lynagh and wraps it so it takes Octet and returns Octet where the length of the result is always See http web.comlab.ox.ac.uk oucl work ian.lynagh and http www.ietf.org rfc rfc1321.txt",
        "hierarchy": "Data Digest MD5",
        "module": "Data.Digest.MD5",
        "name": "MD5",
        "normalized": "",
        "package": "Crypto",
        "partial": "MD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-MD5.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 16 octets or 128 bits as required\n   by the standard.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.MD5",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-Digest-MD5.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
        "hierarchy": "Data Digest MD5",
        "module": "Data.Digest.MD5",
        "name": "hash",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTake [Word8] and return Word160.\n See \u003ca\u003ehttp://www.itl.nist.gov/fipspubs/fip180-1.htm\u003c/a\u003e for the specification.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA1.html",
        "fct-type": "module",
        "title": "SHA1"
      },
      "index": {
        "description": "Take Word8 and return Word160 See http www.itl.nist.gov fipspubs fip180-1.htm for the specification",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "SHA1",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#t:Word160",
      "description": {
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-SHA1.html#Word160",
        "fct-type": "data",
        "title": "Word160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "Word160",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:Word160",
      "description": {
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "Word160 !Word32 !Word32 !Word32 !Word32 !Word32",
        "fct-source": "src/Data-Digest-SHA1.html#Word160",
        "fct-type": "function",
        "title": "Word160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "Word160",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:hash",
      "description": {
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "[Word8] -\u003e Word160",
        "fct-source": "src/Data-Digest-SHA1.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "hash",
        "normalized": "[Word]-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "[Word]-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:lift2",
      "description": {
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "(Word32 -\u003e Word32 -\u003e Word32) -\u003e Word160 -\u003e Word160 -\u003e Word160",
        "fct-source": "src/Data-Digest-SHA1.html#lift2",
        "fct-type": "function",
        "title": "lift2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "lift2",
        "normalized": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eWord-\u003eWord",
        "package": "Crypto",
        "partial": "",
        "signature": "(Word-\u003eWord-\u003eWord)-\u003eWord-\u003eWord-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA1.html#v:toInteger",
      "description": {
        "fct-module": "Data.Digest.SHA1",
        "fct-package": "Crypto",
        "fct-signature": "Word160 -\u003e Integer",
        "fct-source": "src/Data-Digest-SHA1.html#toInteger",
        "fct-type": "function",
        "title": "toInteger"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA1",
        "module": "Data.Digest.SHA1",
        "name": "toInteger",
        "normalized": "Word-\u003eInteger",
        "package": "Crypto",
        "partial": "Integer",
        "signature": "Word-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements SHA-256, SHA-384, SHA-512, and SHA-224 as defined in FIPS 180-2\n \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA2.html",
        "fct-type": "module",
        "title": "SHA2"
      },
      "index": {
        "description": "Implements SHA-256 SHA-384 SHA-512 and SHA-224 as defined in FIPS http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "SHA2",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash224",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-SHA2.html#Hash224",
        "fct-type": "data",
        "title": "Hash224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "Hash224",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash256",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-Digest-SHA2.html#Hash256",
        "fct-type": "type",
        "title": "Hash256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "Hash256",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash384",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-SHA2.html#Hash384",
        "fct-type": "data",
        "title": "Hash384"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "Hash384",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#t:Hash512",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-Digest-SHA2.html#Hash512",
        "fct-type": "type",
        "title": "Hash512"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "Hash512",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha224",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha224\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 32\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e Hash224",
        "fct-source": "src/Data-Digest-SHA2.html#sha224",
        "fct-type": "function",
        "title": "sha224"
      },
      "index": {
        "description": "sha224 currently requires that the bitSize of divide",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha224",
        "normalized": "[a]-\u003eHash",
        "package": "Crypto",
        "partial": "",
        "signature": "[a]-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha224Ascii",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "String -\u003e Hash224",
        "fct-source": "src/Data-Digest-SHA2.html#sha224Ascii",
        "fct-type": "function",
        "title": "sha224Ascii"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha224Ascii",
        "normalized": "String-\u003eHash",
        "package": "Crypto",
        "partial": "Ascii",
        "signature": "String-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha256",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha256\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 32\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e Hash256",
        "fct-source": "src/Data-Digest-SHA2.html#sha256",
        "fct-type": "function",
        "title": "sha256"
      },
      "index": {
        "description": "sha256 currently requires that the bitSize of divide",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha256",
        "normalized": "[a]-\u003eHash",
        "package": "Crypto",
        "partial": "",
        "signature": "[a]-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha256Ascii",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eshaXXXAscii\u003c/code\u003e assumes that all characters of the strings are \n ISO-latin-1 characters.  ie. each characters fits in one octet.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "String -\u003e Hash256",
        "fct-source": "src/Data-Digest-SHA2.html#sha256Ascii",
        "fct-type": "function",
        "title": "sha256Ascii"
      },
      "index": {
        "description": "shaXXXAscii assumes that all characters of the strings are ISO-latin-1 characters ie each characters fits in one octet",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha256Ascii",
        "normalized": "String-\u003eHash",
        "package": "Crypto",
        "partial": "Ascii",
        "signature": "String-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha384",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha384\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 64\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e Hash384",
        "fct-source": "src/Data-Digest-SHA2.html#sha384",
        "fct-type": "function",
        "title": "sha384"
      },
      "index": {
        "description": "sha384 currently requires that the bitSize of divide",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha384",
        "normalized": "[a]-\u003eHash",
        "package": "Crypto",
        "partial": "",
        "signature": "[a]-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha384Ascii",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "String -\u003e Hash384",
        "fct-source": "src/Data-Digest-SHA2.html#sha384Ascii",
        "fct-type": "function",
        "title": "sha384Ascii"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha384Ascii",
        "normalized": "String-\u003eHash",
        "package": "Crypto",
        "partial": "Ascii",
        "signature": "String-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha512",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esha384\u003c/a\u003e\u003c/code\u003e currently requires that the bitSize of \u003ccode\u003ea\u003c/code\u003e divide 64\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "[a] -\u003e Hash512",
        "fct-source": "src/Data-Digest-SHA2.html#sha512",
        "fct-type": "function",
        "title": "sha512"
      },
      "index": {
        "description": "sha384 currently requires that the bitSize of divide",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha512",
        "normalized": "[a]-\u003eHash",
        "package": "Crypto",
        "partial": "",
        "signature": "[a]-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:sha512Ascii",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "String -\u003e Hash512",
        "fct-source": "src/Data-Digest-SHA2.html#sha512Ascii",
        "fct-type": "function",
        "title": "sha512Ascii"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "sha512Ascii",
        "normalized": "String-\u003eHash",
        "package": "Crypto",
        "partial": "Ascii",
        "signature": "String-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA2.html#v:toOctets",
      "description": {
        "fct-module": "Data.Digest.SHA2",
        "fct-package": "Crypto",
        "fct-signature": "h -\u003e [Word8]",
        "fct-source": "src/Data-Digest-SHA2.html#toOctets",
        "fct-type": "function",
        "title": "toOctets"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Digest SHA2",
        "module": "Data.Digest.SHA2",
        "name": "toOctets",
        "normalized": "a-\u003e[Word]",
        "package": "Crypto",
        "partial": "Octets",
        "signature": "h-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA224.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 28.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA224",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA224.html",
        "fct-type": "module",
        "title": "SHA224"
      },
      "index": {
        "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
        "hierarchy": "Data Digest SHA224",
        "module": "Data.Digest.SHA224",
        "name": "SHA224",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA224.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 28 octets or 224 bits as required\n   by the standard.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA224",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-Digest-SHA224.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
        "hierarchy": "Data Digest SHA224",
        "module": "Data.Digest.SHA224",
        "name": "hash",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA256.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 32.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA256",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA256.html",
        "fct-type": "module",
        "title": "SHA256"
      },
      "index": {
        "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
        "hierarchy": "Data Digest SHA256",
        "module": "Data.Digest.SHA256",
        "name": "SHA256",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA256.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 32 octets or 256 bits as required\n   by the standard.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA256",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-Digest-SHA256.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
        "hierarchy": "Data Digest SHA256",
        "module": "Data.Digest.SHA256",
        "name": "hash",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA384.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 48.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA384",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA384.html",
        "fct-type": "module",
        "title": "SHA384"
      },
      "index": {
        "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
        "hierarchy": "Data Digest SHA384",
        "module": "Data.Digest.SHA384",
        "name": "SHA384",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA384.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 48 octets or 384 bits as required\n   by the standard.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA384",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-Digest-SHA384.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
        "hierarchy": "Data Digest SHA384",
        "module": "Data.Digest.SHA384",
        "name": "hash",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA512.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTakes the SHA2 module supplied and wraps it so it\n takes [Octet] and returns [Octet] where the length of the result\n is always 64.\n and \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips180-2/fips180-2withchangenotice.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.SHA512",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-SHA512.html",
        "fct-type": "module",
        "title": "SHA512"
      },
      "index": {
        "description": "Takes the SHA2 module supplied and wraps it so it takes Octet and returns Octet where the length of the result is always and http csrc.nist.gov publications fips fips180-2 fips180-2withchangenotice.pdf",
        "hierarchy": "Data Digest SHA512",
        "module": "Data.Digest.SHA512",
        "name": "SHA512",
        "normalized": "",
        "package": "Crypto",
        "partial": "SHA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-Digest-SHA512.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eTake [Octet] and return [Octet] according to the standard.\n   The length of the result is always 64 octets or 512 bits as required\n   by the standard.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.SHA512",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-Digest-SHA512.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Take Octet and return Octet according to the standard The length of the result is always octets or bits as required by the standard",
        "hierarchy": "Data Digest SHA512",
        "module": "Data.Digest.SHA512",
        "name": "hash",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements HMAC (hashed message authentication code) as defined in FIPS 198\n \u003ca\u003ehttp://csrc.nist.gov/publications/fips/fips198/fips-198a.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-HMAC.html",
        "fct-type": "module",
        "title": "HMAC"
      },
      "index": {
        "description": "Implements HMAC hashed message authentication code as defined in FIPS http csrc.nist.gov publications fips fips198 fips-198a.pdf",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "HMAC",
        "normalized": "",
        "package": "Crypto",
        "partial": "HMAC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#t:HashMethod",
      "description": {
        "fct-descr": "\u003cp\u003eHMAC works over any hash function, which is represented by\n   HashMethod.  A hash function and input block size must\n   be specified.\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Data-HMAC.html#HashMethod",
        "fct-type": "data",
        "title": "HashMethod"
      },
      "index": {
        "description": "HMAC works over any hash function which is represented by HashMethod hash function and input block size must be specified",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "HashMethod",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:HashMethod",
      "description": {
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "HashMethod",
        "fct-source": "src/Data-HMAC.html#HashMethod",
        "fct-type": "function",
        "title": "HashMethod"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "HashMethod",
        "normalized": "",
        "package": "Crypto",
        "partial": "Hash Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:digest",
      "description": {
        "fct-descr": "\u003cp\u003eAn arbitrary hash function\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "[Octet] -\u003e [Octet]",
        "fct-source": "src/Data-HMAC.html#HashMethod",
        "fct-type": "function",
        "title": "digest"
      },
      "index": {
        "description": "An arbitrary hash function",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "digest",
        "normalized": "[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized function for creating HMACs on a specified\n   hash function.\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "HashMethod-\u003e [Octet]-\u003e [Octet]-\u003e [Octet]",
        "fct-type": "function",
        "title": "hmac"
      },
      "index": {
        "description": "Generalized function for creating HMACs on specified hash function",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "hmac",
        "normalized": "HashMethod-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "HashMethod-\u003e[Octet]-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac_md5",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an HMAC using MD5 as the underlying hash function.\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "[Octet]-\u003e [Octet]-\u003e [Octet]",
        "fct-type": "function",
        "title": "hmac_md5"
      },
      "index": {
        "description": "Compute an HMAC using MD5 as the underlying hash function",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "hmac_md5",
        "normalized": "[Octet]-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:hmac_sha1",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an HMAC using SHA-1 as the underlying hash function.\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "[Octet]-\u003e [Octet]-\u003e [Octet]",
        "fct-type": "function",
        "title": "hmac_sha1"
      },
      "index": {
        "description": "Compute an HMAC using SHA-1 as the underlying hash function",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "hmac_sha1",
        "normalized": "[Octet]-\u003e[Octet]-\u003e[Octet]",
        "package": "Crypto",
        "partial": "",
        "signature": "[Octet]-\u003e[Octet]-\u003e[Octet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-HMAC.html#v:input_blocksize",
      "description": {
        "fct-descr": "\u003cp\u003eBit size of an input block to the hash function\n\u003c/p\u003e",
        "fct-module": "Data.HMAC",
        "fct-package": "Crypto",
        "fct-signature": "Int",
        "fct-source": "src/Data-HMAC.html#HashMethod",
        "fct-type": "function",
        "title": "input_blocksize"
      },
      "index": {
        "description": "Bit size of an input block to the hash function",
        "hierarchy": "Data HMAC",
        "module": "Data.HMAC",
        "name": "input_blocksize",
        "normalized": "",
        "package": "Crypto",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Word128, Word192 and Word256 and a way of producing other\n large words if required.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "module",
        "fct-source": "src/Data-LargeWord.html",
        "fct-type": "module",
        "title": "LargeWord"
      },
      "index": {
        "description": "Provides Word128 Word192 and Word256 and way of producing other large words if required",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "LargeWord",
        "normalized": "",
        "package": "Crypto",
        "partial": "Large Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:LargeKey",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "data",
        "fct-source": "src/Data-LargeWord.html#LargeKey",
        "fct-type": "data",
        "title": "LargeKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "LargeKey",
        "normalized": "",
        "package": "Crypto",
        "partial": "Large Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word128",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word128",
        "fct-type": "type",
        "title": "Word128"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word128",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word160",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word160",
        "fct-type": "type",
        "title": "Word160"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word160",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word192",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word192",
        "fct-type": "type",
        "title": "Word192"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word192",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word224",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word224",
        "fct-type": "type",
        "title": "Word224"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word224",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word256",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word256",
        "fct-type": "type",
        "title": "Word256"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word256",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Crypto/docs/Data-LargeWord.html#t:Word96",
      "description": {
        "fct-module": "Data.LargeWord",
        "fct-package": "Crypto",
        "fct-signature": "type",
        "fct-source": "src/Data-LargeWord.html#Word96",
        "fct-type": "type",
        "title": "Word96"
      },
      "index": {
        "description": "",
        "hierarchy": "Data LargeWord",
        "module": "Data.LargeWord",
        "name": "Word96",
        "normalized": "",
        "package": "Crypto",
        "partial": "Word",
        "signature": ""
      }
    }
  }
]