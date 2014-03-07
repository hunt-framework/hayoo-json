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
        "word": "cipher-rc5"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePure implementation of the RC5 variable size block cipher.\n \u003ca\u003ehttp://en.wikipedia.org/wiki/RC5\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eYou need to select a block size and number of rounds.\n If you are unsure, the most common settings are 32bit blocks with 12 rounds.\n\u003c/p\u003e\u003cp\u003eThis implementation supports all the standard block lengths of 32, 64 & 128 bits.\n It also includes support for non-standard (not recommended) 16bit blocks.\n\u003c/p\u003e\u003cp\u003eIn addition to being useful when required for e.g. legacy integration,\n this cipher's option of short block lengths makes it useful for encrypting \n small data such as database primary keys before display.\n\u003c/p\u003e\u003cp\u003eIntroduced in 1994, RC5 has withstood the tests of time remarkably well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Crypto.Cipher.RC5",
          "name": "RC5",
          "package": "cipher-rc5",
          "source": "src/Crypto-Cipher-RC5.html",
          "type": "module"
        },
        "index": {
          "description": "Pure implementation of the RC5 variable size block cipher http en.wikipedia.org wiki RC5 You need to select block size and number of rounds If you are unsure the most common settings are bit blocks with rounds This implementation supports all the standard block lengths of bits It also includes support for non-standard not recommended bit blocks In addition to being useful when required for e.g legacy integration this cipher option of short block lengths makes it useful for encrypting small data such as database primary keys before display Introduced in RC5 has withstood the tests of time remarkably well",
          "hierarchy": "Crypto Cipher RC5",
          "module": "Crypto.Cipher.RC5",
          "name": "RC5",
          "package": "cipher-rc5",
          "partial": "RC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc5/docs/Crypto-Cipher-RC5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC5 decryption\n\u003c/p\u003e\u003cp\u003eAll parameters must match those used for encryption\n The length of the result is equal to the length of the input\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC5",
          "name": "decrypt",
          "package": "cipher-rc5",
          "signature": "Int-\u003e Int-\u003e [Word8]-\u003e [Word8]-\u003e [Word8]",
          "type": "function"
        },
        "index": {
          "description": "RC5 decryption All parameters must match those used for encryption The length of the result is equal to the length of the input",
          "hierarchy": "Crypto Cipher RC5",
          "module": "Crypto.Cipher.RC5",
          "name": "decrypt",
          "normalized": "Int-\u003eInt-\u003e[Word]-\u003e[Word]-\u003e[Word]",
          "package": "cipher-rc5",
          "signature": "Int-\u003eInt-\u003e[Word]-\u003e[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc5/docs/Crypto-Cipher-RC5.html#v:decrypt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRC5 Cipher\n\u003c/p\u003e\u003cp\u003eUsing the given blocksize, number of rounds and key, encrypts the plaintext.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Valid blocksizes are 16 (not standard), 32, 64, 128\n\u003c/li\u003e\u003cli\u003e Valid rounds are 0 - 256\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf in doubt, 64bit blocks and 12 rounds is the most common combination.\n This is called RC5-32/12 (32 is the word size, which is half the block size).\n 128bit blocks and 18 rounds is also quite common. This is called RC5-64/18\n\u003c/p\u003e\u003cpre\u003eencrypt 64 12 [1,2,3,4] [0xFE,0x13,0x37,0x00]\n\u003c/pre\u003e\u003cp\u003eEncrypts the plaintext \u003ccode\u003e[0xFE,0x13,0x37,0x00]\u003c/code\u003e with a blocksize of 64 bits, 12 rounds and key \u003ccode\u003e[1,2,3,4]\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eMaximum key length is 256. A common (and sufficient) length is 16 bytes.\n The length of the result is divisible by the block size (i.e. 2, 4, 8, 16)\n On invalid input, the empty list is returned.\n\u003c/p\u003e",
          "module": "Crypto.Cipher.RC5",
          "name": "encrypt",
          "package": "cipher-rc5",
          "signature": "Int-\u003e Int-\u003e [Word8]-\u003e [Word8]-\u003e [Word8]",
          "type": "function"
        },
        "index": {
          "description": "RC5 Cipher Using the given blocksize number of rounds and key encrypts the plaintext Valid blocksizes are not standard Valid rounds are If in doubt bit blocks and rounds is the most common combination This is called RC5-32 is the word size which is half the block size bit blocks and rounds is also quite common This is called RC5-64 encrypt xFE x13 x37 x00 Encrypts the plaintext xFE x13 x37 x00 with blocksize of bits rounds and key Maximum key length is common and sufficient length is bytes The length of the result is divisible by the block size i.e On invalid input the empty list is returned",
          "hierarchy": "Crypto Cipher RC5",
          "module": "Crypto.Cipher.RC5",
          "name": "encrypt",
          "normalized": "Int-\u003eInt-\u003e[Word]-\u003e[Word]-\u003e[Word]",
          "package": "cipher-rc5",
          "signature": "Int-\u003eInt-\u003e[Word]-\u003e[Word]-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cipher-rc5/docs/Crypto-Cipher-RC5.html#v:encrypt"
      }
    }
  ]
]